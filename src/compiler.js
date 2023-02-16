import { typeCheck } from "./typecheck/index.js";
import EzLangParserVisitor from "../antlr4/EzLangParserVisitor.js";
import { loadFile } from "./loadFile.js";

const modules = {};

export function compile(url) {
  if (modules[url]) return modules[url];
  const ast = loadFile(url);
  typeCheck(url);
  const compiler = new Compiler(url);
  modules[url] = compiler;
  compiler.visit(ast);
  return compiler;
}

class Compiler extends EzLangParserVisitor {
  constructor(id) {
    super();
    this.id = id;
  }
}
