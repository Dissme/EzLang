import fs from "fs";
import antlr4 from "antlr4";
import EzLangLexer from "../antlr4/EzLangLexer.js";
import EzLangParser from "../antlr4/EzLangParser.js";
import EzLangParserVisitor from "../antlr4/EzLangParserVisitor.js";
import llvm from "llvm-bindings";

class TypeChecker extends EzLangParserVisitor {
  constructor(id) {
    super();
    this.llvmCtx = new llvm.LLVMContext();
    this.llvmModule = new llvm.Module(id, this.llvmCtx);
    this.irBuilder = new llvm.IRBuilder(this.llvmCtx);
  }

  visitChildren(ctx) {
    if (!ctx) return null;
    return super.visitChildren(ctx);
  }

  visitStringChar(ctx) {
    return ctx.getText();
  }
}

export default function compile(url) {
  const visitor = new TypeChecker(url);
  const input = fs.readFileSync(url, {
    encoding: "utf-8",
  });
  const text = new antlr4.InputStream(input);
  const lexer = new EzLangLexer(text);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new EzLangParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.prog();
  return tree.accept(visitor);
}
