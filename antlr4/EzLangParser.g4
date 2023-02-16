parser grammar EzLangParser;

options {
	language = JavaScript;
	tokenVocab = EzLangLexer;
}

prog: importStat* progStat+ EOF;
progStat: (hoisting | 'export' hoisting | statment) ';';
hoisting: variable | typeDef | struct | declareDef; // 提升
importStat:
	'from' string 'import' '{' (ID | T) (',' (ID | T))* '}' ';';
statment: expr | variable | ret | matchStat | loopStat;

variable: ('const' | 'static' | 'let') assignVar; // 声明变量
assignVar:
	ID ':' type									# declareID // 变量声明
	| <assoc = right> ID (':' type)? '=' expr	# assignID // 变量赋值
	| <assoc = right> deconstVar '=' expr		# assignDconst; // 解构赋值
deconstVar:
	'{' deconstField (',' deconstField)* (',' '...' ID)? '}'	# deconstDict // 解构字典/结构体
	| '[' deconstField (',' deconstField)* (',' '...' ID)? ']'	# deconstTuple; // 解构数组/元组
deconstField: ID | ID ':' deconstVar;

declareDef: <assoc = right> 'declare' ID '=' type; // 链接声明
typeDef: <assoc = right> 'type' T '=' type; // 类型约束定义
type: // 类型约束
	typeName												# nameType
	| type '?'												# optionalType // 可选类型
	| '(' type ')'											# patternType // 类型分组
	| type '[' ']'											# arrType // 数组类型
	| type '|' type											# unionType // 联合类型
	| '{' typeDictField (',' typeDictField)* '}'			# dictType // 字典类型
	| '[' type (',' type)* ']'								# tupleType // 元组类型
	| '(' (typeFnField (',' typeFnField)*)? ')' '=>' type	# fnType; // 函数类型
typeFnField: id ':' type;
typeDictField:
	id ':' type				# typeDictFieldID
	| '[' type ']' ':' type	# typeDictFieldType
	| '...' typeName		# typeDictFieldRest;
typeName: // 所有类型名
	'I8'
	| 'I16'
	| 'I32'
	| 'I64'
	| 'U8'
	| 'U16'
	| 'U32'
	| 'U64'
	| 'D64'
	| 'String'
	| 'Bool'
	| 'Null'
	| 'Void'
	| 'Dict'
	| 'Tuple'
	| 'Array'
	| 'Function'
	| T;

struct: 'struct' T '{' structField (',' structField)* '}'; // 结构体
structField:
	ID ':' type									# declareStructField // 定义参数
	| <assoc = right> ID (':' type)? '=' expr	# assignStructField
	| '...' T									# structFieldRest; // 参数默认值

fnGroup: '(' fn (',' fn)* ')'; // 函数组
fn:
	'(' (param (',' param)*)? ')' '=>' expr					# arrowFn
	| '(' (param (',' param)*)? ')' '{' (statment ';')* '}'	# blockFn; // 函数
param:
	id ':' type									# declareParam // 定义参数
	| <assoc = right> id (':' type)? '=' expr	# assignParam; // 参数默认值
id: 'this' | ID;

expr:
	(
		'null'
		| 'void'
		| Number
		| 'this'
		| '%%'
		| string
		| tuple
		| array
		| dict
		| fn
		| fnGroup
	)															# literalExpr // 字面量
	| getOp														# getExpr // get 操作
	| call														# callExpr // 函数调用
	| ('-' | '!' | '~' | 'typeof' | typeName '!' | '@') expr	# unaryExpr // 一元运算
	| expr ('*' | '/' | '%') expr								# mulExpr // 乘除模
	| expr ('+' | '-') expr										# addExpr // 加减
	| expr ('<<' | '>>') expr									# bitMovExpr // 移位
	| expr ('&' | '|' | '^') expr								# bitExpr // 位运算
	| expr (
		'=='
		| '==='
		| '!='
		| '!=='
		| '<'
		| '>'
		| '<='
		| '>='
	) expr								# relExpr // 关系运算
	| expr ('&&' | '||') expr			# logicExpr // 逻辑运算
	| 'catch' '{' (statment ';')* '}'	# catchExpr // 异常捕获
	| matchField elseField?				# conditionExpr // 条件运算
	| expr '->' expr					# pipeExpr // 管道运算
	| <assoc = right> getOp '=' expr	# assignExpr; // 赋值运算

getOp:
	ID								# getOpID // ID getter
	| '(' expr ')'					# getOpExpr // 表达式 getter
	| getOp '?'? '.' ID				# getOpChain // 链 ID getter
	| getOp ('?' '.')? '[' expr ']'	# getOpChainExpr; // 链 表达式 getter

string: Quote stringAtom* Quote;
stringAtom:
	Char+					# stringChar // 字符
	| ExpStart expr ExpEnd	# stringVar; // 表达式

tuple: 'tuple' '[' (tupleField (',' tupleField)*)? ']'; // 元组或数组
tupleField:
	'...' getOp // 扩展表达式
	| expr; // 表达式

array: '[' (tupleField (',' tupleField)*)? ']'; // 数组

dict: '{' dictField (',' dictField)* '}';
dictField:
	<assoc = right> ID (':' type)? '=' expr				# dictFieldID // ID赋值
	| <assoc = right> '[' expr ']' (':' type)? '=' expr	# dictFieldExpr // 表达式赋值
	| '...' getOp										# dictFieldRest; // 扩展字典

call: T callee | getOp callee | call callee; // 函数调用
callee: '(' (callField (',' callField)*)? ')'; // 函数参数
callField:
	id
	| <assoc = right> id '=' expr
	| <assoc = right> id '=' '?';

matchStat: 'match' '{' matchField (',' matchField)* '}'; // 匹配语句
matchField: '(' expr ')' '??' matchExpr; // 匹配条件
elseField: '::' matchExpr;
matchExpr: statment | '{' (statment ';')* '}';
ret: 'break' | 'continue' | '=>' expr | 'throw' expr;

loopStat: 'loop' Number ':' matchExpr; // 循环语句
