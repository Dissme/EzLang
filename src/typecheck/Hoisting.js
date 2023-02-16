import EzLangParserVisitor from "../../antlr4/EzLangParserVisitor.js";
import { pos, syntaxError } from "../errorListener.js";
import { createScope } from "./createScope.js";

export class Hoisting extends EzLangParserVisitor {
  constructor(scope) {
    super();
    this.scope = scope;
  }

  reportErr(ctx, msg) {
    if (!ctx.start) return;
    pos.column = ctx.start.column;
    pos.line = ctx.start.line;
    pos.url = this.scope.url;
    syntaxError(msg);
  }

  visitMatchExpr(ctx) {
    const lastScope = this.scope;
    this.scope = createScope(this.scope);
    this.visitChildren(ctx);
    this.scope = lastScope;
  }

  visitArrowFn(ctx) {
    const lastScope = this.scope;
    this.scope = createScope(this.scope);
    this.visitChildren(ctx);
    this.scope = lastScope;
  }

  visitBlockFn(ctx) {
    const lastScope = this.scope;
    this.scope = createScope(this.scope);
    this.visitChildren(ctx);
    this.scope = lastScope;
  }

  visitCatchStat(ctx) {
    const lastScope = this.scope;
    this.scope = createScope(this.scope);
    this.visitChildren(ctx);
    this.scope = lastScope;
  }

  visit(ctx) {
    if (!ctx) return null;
    if (Array.isArray(ctx)) return ctx.map((child) => this.visit(child));
    ctx.scope = this.scope;
    return ctx.accept(this);
  }

  visitChildren(ctx) {
    return this.visit(ctx?.children);
  }

  visitProgStat(ctx) {
    const [exp, def] = this.visitChildren(ctx);
    if (exp !== "export" || !def?.length) return;
    def.forEach(({ name, value }) => {
      ctx.scope.exports[name] = value;
    });
  }

  visitHoisting(ctx) {
    const [def] = this.visitChildren(ctx);
    if (!def.length) return;
    def.forEach(({ name, value, scope }) => {
      ctx.scope[scope][name] = value;
    });
    return def;
  }

  visitStatment(ctx) {
    const [def] = this.visitChildren(ctx);
    if (!def?.length || !ctx.variable()) return;
    def.forEach(({ name, value }) => {
      ctx.scope.vars[name] = value;
    });
  }

  visitDeclareParam(ctx) {
    const [id] = this.visitChildren(ctx);
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    ctx.scope.vars[id] = [];
  }

  visitAssignParam(ctx) {
    const [id] = this.visitChildren(ctx);
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    ctx.scope.vars[id] = [];
  }

  visitVariable(ctx) {
    const [t, def] = this.visitChildren(ctx);
    def.forEach(({ name, isDec }) => {
      if (t === "const" && isDec)
        return this.reportErr(ctx, `const 声明的变量${name}必须赋初始值`);
      if (t === "static" && isDec)
        return this.reportErr(ctx, `static 声明的变量${name}必须赋初始值`);
    });
    return def;
  }

  visitTypeDef(ctx) {
    const [, name] = this.visitChildren(ctx);
    if (
      name in ctx.scope.imports ||
      name in ctx.scope.declares ||
      name in ctx.scope.types ||
      name in ctx.scope.structs
    )
      return this.reportErr(ctx, `重复的定义 ${name}`);
    return [{ name, value: [], scope: "types" }];
  }

  visitStruct(ctx) {
    const [, name] = this.visitChildren(ctx);
    if (
      name in ctx.scope.imports ||
      name in ctx.scope.declares ||
      name in ctx.scope.types ||
      name in ctx.scope.structs
    )
      return this.reportErr(ctx, `重复的定义 ${name}`);
    return [{ name, value: [], scope: "structs" }];
  }

  declareDef(ctx) {
    const [, name] = this.visitChildren(ctx);
    if (
      name in ctx.scope.imports ||
      name in ctx.scope.declares ||
      name in ctx.scope.types ||
      name in ctx.scope.structs
    )
      return this.reportErr(ctx, `重复的定义 ${name}`);
    return [{ name, value: [], scope: "declares" }];
  }

  visitDeclareID(ctx) {
    const [id] = this.visitChildren(ctx);
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    return [{ name: id, value: [], scope: "vars", isDec: true }];
  }

  visitAssignID(ctx) {
    const [id] = this.visitChildren(ctx);
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    return [{ name: id, value: [], scope: "vars" }];
  }

  visitAssignDconst(ctx) {
    const [def] = this.visitChildren(ctx);
    return def;
  }

  visitDeconstDict(ctx) {
    const cache = [];
    const children = this.visitChildren(ctx)
      .filter((child) => typeof child !== "string" && child?.length)
      .flat();
    children.forEach(({ name }) => {
      if (cache.includes(name))
        return this.reportErr(ctx, `重复的定义 ${name}`);
      cache.push(name);
    });
    const id = this.visit(ctx.ID());
    if (!id) return children;
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars ||
      children.findIndex((c) => c.name === id) > -1
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    return children.concat([{ name: id, value: [], scope: "vars" }]);
  }

  visitDeconstTuple(ctx) {
    const cache = [];
    const children = this.visitChildren(ctx)
      .filter((child) => typeof child !== "string" && child?.length)
      .flat();
    children.forEach(({ name }) => {
      if (cache.includes(name))
        return this.reportErr(ctx, `重复的定义 ${name}`);
      cache.push(name);
    });
    const id = this.visit(ctx.ID());
    if (!id) return children;
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars ||
      children.findIndex((c) => c.name === id) > -1
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    return children.concat([{ name: id, value: [], scope: "vars" }]);
  }

  visitDeconstField(ctx) {
    const [id, , children] = this.visitChildren(ctx);
    if (children) return children;
    if (
      id in ctx.scope.imports ||
      id in ctx.scope.declares ||
      id in ctx.scope.vars
    )
      return this.reportErr(ctx, `重复的定义 ${id}`);
    return [{ name: id, value: [], scope: "vars" }];
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }
}
