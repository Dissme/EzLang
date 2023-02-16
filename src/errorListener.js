import antlr4 from "antlr4";

function logError(msg) {
  console.error(msg);
  process.exit(1);
}

export const pos = { line: 0, column: 0, url: "" };

export function syntaxError(msg) {
  msg = msg.replace("no viable alternative at input", "找不到可匹配的语法");
  msg = msg.replace(/missing ([^ ]+) at (.*)$/, "在 $2 前缺失 $1");
  msg = msg.replace(
    /mismatched input ([^ ]+) expecting (.*)$/,
    "$1 匹配语法失败, 预期的可能是 $2"
  );
  msg = `[语法错误]: ${msg}`;
  if (pos.url) msg += `\n[位置信息]: ${pos.url}:${pos.line}:${pos.column}`;
  logError(msg);
}

export function compilerError(msg) {
  logError(`[编译错误]: ${msg}`);
}

export class ErrorListener extends antlr4.error.ErrorListener {
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    pos.line = line;
    pos.column = column;
    pos.url = this.url;
    syntaxError(msg);
  }
}
