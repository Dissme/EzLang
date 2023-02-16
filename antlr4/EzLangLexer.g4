lexer grammar EzLangLexer;

options {
	language = JavaScript;
}

channels {
	ERROR
}

// 关键字
Const: 'const';
Let: 'let';
Static: 'static';
Match: 'match';
Loop: 'loop';
Continue: 'continue';
Break: 'break';
Null: 'null';
Void: 'void';
Struct: 'struct';
Tuple: 'tuple';
Type: 'type';
TypeOf: 'typeof';
From: 'from';
Import: 'import';
Export: 'export';
True: 'true';
False: 'false';
This: 'this';
Declare: 'declare';
Throw: 'throw';
Catch: 'catch';
// 预设类型
I8: 'I8';
I16: 'I16';
I32: 'I32';
I64: 'I64';
U8: 'U8';
U16: 'U16';
U32: 'U32';
U64: 'U64';
D64: 'D64';
String: 'String';
Bool: 'Bool';
TNull: 'Null';
TVoid: 'Void';
TDict: 'Dict';
TTuple: 'Tuple';
TArray: 'Array';
Fn: 'Function';
// 值
ID: [a-z_][a-zA-Z0-9_]*;
T: [A-Z][a-zA-Z0-9_]*;
Number:
	[0-9]+
	| [0-9]* '.' [0-9]+
	| '0x' [0-9A-F]+
	| '0o' [0-7]+
	| '0b' [01]+
	| 'infinity'
	| 'NaN';

// 符号
Quote: '"' -> pushMode(STR);
ExpEnd: '}}' -> popMode;
Ret: '=>';
Pipe: '->';
PH: '%%';
ML: '<<';
LTE: '<=';
LessThan: '<';
MR: '>>';
GTE: '>=';
GreatearThan: '>';
Comma: ',';
Eqs: '==';
Eqt: '===';
NotE: '!=';
NotEs: '!==';
Eq: '=';
DC: '::';
Conly: ':';
DQ: '??';
Query: '?';
LP: '(';
RP: ')';
LeftBracket: '{';
RightBracket: '}';
LS: '[';
RS: ']';
Plus: '+';
Minus: '-';
BitNot: '~';
Not: '!';
Multiply: '*';
Divide: '/';
Modulus: '%';
BitAnd: '&';
BitXOr: '^';
BitOr: '|';
And: '&&';
Or: '||';
At: '@';
Dot: '.';
Spread: '...';
Eos: ';';
// Comments
MC: '/*' .*? '*/' -> channel(HIDDEN);
SC: '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);
WS: [\r\n\t\u000B\u000C\u0020\u00A0\u2028\u2029]+ -> channel(HIDDEN);
E: . -> channel(ERROR);

mode STR;
StrEnd: '"' -> type(Quote), popMode;
ExpStart: '{{' -> pushMode(DEFAULT_MODE);
Char: ('\\' .) | ~["];