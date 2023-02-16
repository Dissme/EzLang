import fs from "fs";
import antlr4 from "antlr4";
import EzLangLexer from "../antlr4/EzLangLexer.js";
import EzLangParser from "../antlr4/EzLangParser.js";
import { ErrorListener, compilerError } from "./errorListener.js";

const asts = {};

export function loadFile(url) {
  if (url in asts) return asts[url];
  let input;
  try {
    input = fs.readFileSync(url, {
      encoding: "utf-8",
    });
  } catch {
    compilerError(`请检查是否存在文件'${url}'`);
  }
  const text = new antlr4.InputStream(input);
  const lexer = new EzLangLexer(text);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new EzLangParser(tokens);
  const errorListener = new ErrorListener();
  errorListener.url = url;
  parser.removeErrorListeners();
  parser.addErrorListener(errorListener);
  parser.buildParseTrees = true;
  const tree = parser.prog();
  asts[url] = tree;
  return tree;
}
