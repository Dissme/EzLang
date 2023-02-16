import EzLangParserVisitor from "../../antlr4/EzLangParserVisitor.js";
import { pos } from "../errorListener.js";
import { loadFile } from "../loadFile.js";
import { createScope } from "./createScope.js";
import { Hoisting } from "./Hoisting.js";

class TypeChecker extends EzLangParserVisitor {
  setPos(ctx) {
    if (!ctx.start) return;
    pos.column = ctx.start.column;
    pos.line = ctx.start.line;
    pos.url = ctx.scope.url;
  }

  visit(ctx) {
    if (!ctx) return null;
    if (Array.isArray(ctx)) return ctx.map((child) => this.visit(child));
    this.setPos(ctx);
    return ctx.accept(this);
  }

  visitChildren(ctx) {
    return this.visit(ctx?.children);
  }

  visitTerminal(ctx) {
    return ctx.getText();
  }
}

const scopes = {};

export function typeCheck(url) {
  if (scopes[url]) return scopes[url];
  const ast = loadFile(url);
  const scope = createScope({}, url);
  const hoisting = new Hoisting(scope);
  const typeChecker = new TypeChecker();
  scopes[url] = scope;
  hoisting.visit(ast);
  typeChecker.visit(ast);
  return scope;
}
