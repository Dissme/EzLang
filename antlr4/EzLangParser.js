// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import EzLangParserVisitor from './EzLangParserVisitor.js';

const serializedATN = [4,1,91,638,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,5,0,80,8,0,10,0,12,0,83,9,
0,1,0,4,0,86,8,0,11,0,12,0,87,1,0,1,0,1,1,1,1,1,1,1,1,3,1,96,8,1,1,1,1,1,
1,2,1,2,1,2,1,2,3,2,104,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,113,8,3,10,3,
12,3,116,9,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,126,8,4,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,6,3,6,137,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,145,8,6,1,7,
1,7,1,7,1,7,5,7,151,8,7,10,7,12,7,154,9,7,1,7,1,7,1,7,3,7,159,8,7,1,7,1,
7,1,7,1,7,1,7,1,7,5,7,167,8,7,10,7,12,7,170,9,7,1,7,1,7,1,7,3,7,175,8,7,
1,7,1,7,3,7,179,8,7,1,8,1,8,1,8,1,8,3,8,185,8,8,1,9,1,9,1,9,1,9,1,9,1,10,
1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,
11,207,8,11,10,11,12,11,210,9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,218,
8,11,10,11,12,11,221,9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,229,8,11,10,
11,12,11,232,9,11,3,11,234,8,11,1,11,1,11,1,11,3,11,239,8,11,1,11,1,11,1,
11,1,11,1,11,1,11,1,11,1,11,5,11,249,8,11,10,11,12,11,252,9,11,1,12,1,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,
13,270,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,5,15,280,8,15,10,15,
12,15,283,9,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,3,16,293,8,16,1,16,
1,16,1,16,1,16,3,16,299,8,16,1,17,1,17,1,17,1,17,5,17,305,8,17,10,17,12,
17,308,9,17,1,17,1,17,1,18,1,18,1,18,1,18,5,18,316,8,18,10,18,12,18,319,
9,18,3,18,321,8,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,330,8,18,10,18,
12,18,333,9,18,3,18,335,8,18,1,18,1,18,1,18,1,18,1,18,5,18,342,8,18,10,18,
12,18,345,9,18,1,18,3,18,348,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,
357,8,19,1,19,1,19,1,19,3,19,362,8,19,1,20,1,20,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,3,21,378,8,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,390,8,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,
398,8,21,10,21,12,21,401,9,21,1,21,1,21,1,21,3,21,406,8,21,1,21,1,21,1,21,
1,21,3,21,412,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,5,21,435,8,21,10,21,12,
21,438,9,21,1,22,1,22,1,22,1,22,1,22,1,22,3,22,446,8,22,1,22,1,22,3,22,450,
8,22,1,22,1,22,1,22,1,22,1,22,3,22,457,8,22,1,22,1,22,1,22,1,22,5,22,463,
8,22,10,22,12,22,466,9,22,1,23,1,23,5,23,470,8,23,10,23,12,23,473,9,23,1,
23,1,23,1,24,4,24,478,8,24,11,24,12,24,479,1,24,1,24,1,24,1,24,3,24,486,
8,24,1,25,1,25,1,25,1,25,1,25,5,25,493,8,25,10,25,12,25,496,9,25,3,25,498,
8,25,1,25,1,25,1,26,1,26,1,26,3,26,505,8,26,1,27,1,27,1,27,1,27,5,27,511,
8,27,10,27,12,27,514,9,27,3,27,516,8,27,1,27,1,27,1,28,1,28,1,28,1,28,5,
28,524,8,28,10,28,12,28,527,9,28,1,28,1,28,1,29,1,29,1,29,3,29,534,8,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,543,8,29,1,29,1,29,1,29,1,29,1,29,
3,29,550,8,29,1,30,1,30,1,30,1,30,1,30,1,30,3,30,558,8,30,1,30,1,30,5,30,
562,8,30,10,30,12,30,565,9,30,1,31,1,31,1,31,1,31,5,31,571,8,31,10,31,12,
31,574,9,31,3,31,576,8,31,1,31,1,31,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,3,32,589,8,32,1,33,1,33,1,33,1,33,1,33,5,33,596,8,33,10,33,12,33,
599,9,33,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,35,1,35,1,35,1,36,1,36,
1,36,1,36,1,36,5,36,617,8,36,10,36,12,36,620,9,36,1,36,3,36,623,8,36,1,37,
1,37,1,37,1,37,1,37,1,37,3,37,631,8,37,1,38,1,38,1,38,1,38,1,38,1,38,0,4,
22,42,44,60,39,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,
42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,0,10,1,0,40,41,1,0,
1,3,2,0,23,39,41,41,2,0,19,19,40,40,1,0,74,76,1,0,70,71,2,0,48,48,51,51,
1,0,77,79,3,0,49,50,52,53,55,58,1,0,80,81,705,0,81,1,0,0,0,2,95,1,0,0,0,
4,103,1,0,0,0,6,105,1,0,0,0,8,125,1,0,0,0,10,127,1,0,0,0,12,144,1,0,0,0,
14,178,1,0,0,0,16,184,1,0,0,0,18,186,1,0,0,0,20,191,1,0,0,0,22,238,1,0,0,
0,24,253,1,0,0,0,26,269,1,0,0,0,28,271,1,0,0,0,30,273,1,0,0,0,32,298,1,0,
0,0,34,300,1,0,0,0,36,347,1,0,0,0,38,361,1,0,0,0,40,363,1,0,0,0,42,411,1,
0,0,0,44,445,1,0,0,0,46,467,1,0,0,0,48,485,1,0,0,0,50,487,1,0,0,0,52,504,
1,0,0,0,54,506,1,0,0,0,56,519,1,0,0,0,58,549,1,0,0,0,60,557,1,0,0,0,62,566,
1,0,0,0,64,588,1,0,0,0,66,590,1,0,0,0,68,602,1,0,0,0,70,608,1,0,0,0,72,622,
1,0,0,0,74,630,1,0,0,0,76,632,1,0,0,0,78,80,3,6,3,0,79,78,1,0,0,0,80,83,
1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,84,86,3,
2,1,0,85,84,1,0,0,0,86,87,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,89,1,0,
0,0,89,90,5,0,0,1,90,1,1,0,0,0,91,96,3,4,2,0,92,93,5,16,0,0,93,96,3,4,2,
0,94,96,3,8,4,0,95,91,1,0,0,0,95,92,1,0,0,0,95,94,1,0,0,0,96,97,1,0,0,0,
97,98,5,85,0,0,98,3,1,0,0,0,99,104,3,10,5,0,100,104,3,20,10,0,101,104,3,
30,15,0,102,104,3,18,9,0,103,99,1,0,0,0,103,100,1,0,0,0,103,101,1,0,0,0,
103,102,1,0,0,0,104,5,1,0,0,0,105,106,5,14,0,0,106,107,3,46,23,0,107,108,
5,15,0,0,108,109,5,66,0,0,109,114,7,0,0,0,110,111,5,54,0,0,111,113,7,0,0,
0,112,110,1,0,0,0,113,116,1,0,0,0,114,112,1,0,0,0,114,115,1,0,0,0,115,117,
1,0,0,0,116,114,1,0,0,0,117,118,5,67,0,0,118,119,5,85,0,0,119,7,1,0,0,0,
120,126,3,42,21,0,121,126,3,10,5,0,122,126,3,74,37,0,123,126,3,66,33,0,124,
126,3,76,38,0,125,120,1,0,0,0,125,121,1,0,0,0,125,122,1,0,0,0,125,123,1,
0,0,0,125,124,1,0,0,0,126,9,1,0,0,0,127,128,7,1,0,0,128,129,3,12,6,0,129,
11,1,0,0,0,130,131,5,40,0,0,131,132,5,61,0,0,132,145,3,22,11,0,133,136,5,
40,0,0,134,135,5,61,0,0,135,137,3,22,11,0,136,134,1,0,0,0,136,137,1,0,0,
0,137,138,1,0,0,0,138,139,5,59,0,0,139,145,3,42,21,0,140,141,3,14,7,0,141,
142,5,59,0,0,142,143,3,42,21,0,143,145,1,0,0,0,144,130,1,0,0,0,144,133,1,
0,0,0,144,140,1,0,0,0,145,13,1,0,0,0,146,147,5,66,0,0,147,152,3,16,8,0,148,
149,5,54,0,0,149,151,3,16,8,0,150,148,1,0,0,0,151,154,1,0,0,0,152,150,1,
0,0,0,152,153,1,0,0,0,153,158,1,0,0,0,154,152,1,0,0,0,155,156,5,54,0,0,156,
157,5,84,0,0,157,159,5,40,0,0,158,155,1,0,0,0,158,159,1,0,0,0,159,160,1,
0,0,0,160,161,5,67,0,0,161,179,1,0,0,0,162,163,5,68,0,0,163,168,3,16,8,0,
164,165,5,54,0,0,165,167,3,16,8,0,166,164,1,0,0,0,167,170,1,0,0,0,168,166,
1,0,0,0,168,169,1,0,0,0,169,174,1,0,0,0,170,168,1,0,0,0,171,172,5,54,0,0,
172,173,5,84,0,0,173,175,5,40,0,0,174,171,1,0,0,0,174,175,1,0,0,0,175,176,
1,0,0,0,176,177,5,69,0,0,177,179,1,0,0,0,178,146,1,0,0,0,178,162,1,0,0,0,
179,15,1,0,0,0,180,185,5,40,0,0,181,182,5,40,0,0,182,183,5,61,0,0,183,185,
3,14,7,0,184,180,1,0,0,0,184,181,1,0,0,0,185,17,1,0,0,0,186,187,5,20,0,0,
187,188,5,40,0,0,188,189,5,59,0,0,189,190,3,22,11,0,190,19,1,0,0,0,191,192,
5,12,0,0,192,193,5,41,0,0,193,194,5,59,0,0,194,195,3,22,11,0,195,21,1,0,
0,0,196,197,6,11,-1,0,197,239,3,28,14,0,198,199,5,64,0,0,199,200,3,22,11,
0,200,201,5,65,0,0,201,239,1,0,0,0,202,203,5,66,0,0,203,208,3,26,13,0,204,
205,5,54,0,0,205,207,3,26,13,0,206,204,1,0,0,0,207,210,1,0,0,0,208,206,1,
0,0,0,208,209,1,0,0,0,209,211,1,0,0,0,210,208,1,0,0,0,211,212,5,67,0,0,212,
239,1,0,0,0,213,214,5,68,0,0,214,219,3,22,11,0,215,216,5,54,0,0,216,218,
3,22,11,0,217,215,1,0,0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,
0,220,222,1,0,0,0,221,219,1,0,0,0,222,223,5,69,0,0,223,239,1,0,0,0,224,233,
5,64,0,0,225,230,3,24,12,0,226,227,5,54,0,0,227,229,3,24,12,0,228,226,1,
0,0,0,229,232,1,0,0,0,230,228,1,0,0,0,230,231,1,0,0,0,231,234,1,0,0,0,232,
230,1,0,0,0,233,225,1,0,0,0,233,234,1,0,0,0,234,235,1,0,0,0,235,236,5,65,
0,0,236,237,5,45,0,0,237,239,3,22,11,1,238,196,1,0,0,0,238,198,1,0,0,0,238,
202,1,0,0,0,238,213,1,0,0,0,238,224,1,0,0,0,239,250,1,0,0,0,240,241,10,4,
0,0,241,242,5,79,0,0,242,249,3,22,11,5,243,244,10,7,0,0,244,249,5,63,0,0,
245,246,10,5,0,0,246,247,5,68,0,0,247,249,5,69,0,0,248,240,1,0,0,0,248,243,
1,0,0,0,248,245,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,
251,23,1,0,0,0,252,250,1,0,0,0,253,254,3,40,20,0,254,255,5,61,0,0,255,256,
3,22,11,0,256,25,1,0,0,0,257,258,3,40,20,0,258,259,5,61,0,0,259,260,3,22,
11,0,260,270,1,0,0,0,261,262,5,68,0,0,262,263,3,22,11,0,263,264,5,69,0,0,
264,265,5,61,0,0,265,266,3,22,11,0,266,270,1,0,0,0,267,268,5,84,0,0,268,
270,3,28,14,0,269,257,1,0,0,0,269,261,1,0,0,0,269,267,1,0,0,0,270,27,1,0,
0,0,271,272,7,2,0,0,272,29,1,0,0,0,273,274,5,10,0,0,274,275,5,41,0,0,275,
276,5,66,0,0,276,281,3,32,16,0,277,278,5,54,0,0,278,280,3,32,16,0,279,277,
1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,284,1,0,0,0,
283,281,1,0,0,0,284,285,5,67,0,0,285,31,1,0,0,0,286,287,5,40,0,0,287,288,
5,61,0,0,288,299,3,22,11,0,289,292,5,40,0,0,290,291,5,61,0,0,291,293,3,22,
11,0,292,290,1,0,0,0,292,293,1,0,0,0,293,294,1,0,0,0,294,295,5,59,0,0,295,
299,3,42,21,0,296,297,5,84,0,0,297,299,5,41,0,0,298,286,1,0,0,0,298,289,
1,0,0,0,298,296,1,0,0,0,299,33,1,0,0,0,300,301,5,64,0,0,301,306,3,36,18,
0,302,303,5,54,0,0,303,305,3,36,18,0,304,302,1,0,0,0,305,308,1,0,0,0,306,
304,1,0,0,0,306,307,1,0,0,0,307,309,1,0,0,0,308,306,1,0,0,0,309,310,5,65,
0,0,310,35,1,0,0,0,311,320,5,64,0,0,312,317,3,38,19,0,313,314,5,54,0,0,314,
316,3,38,19,0,315,313,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,
0,0,0,318,321,1,0,0,0,319,317,1,0,0,0,320,312,1,0,0,0,320,321,1,0,0,0,321,
322,1,0,0,0,322,323,5,65,0,0,323,324,5,45,0,0,324,348,3,42,21,0,325,334,
5,64,0,0,326,331,3,38,19,0,327,328,5,54,0,0,328,330,3,38,19,0,329,327,1,
0,0,0,330,333,1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,332,335,1,0,0,0,333,
331,1,0,0,0,334,326,1,0,0,0,334,335,1,0,0,0,335,336,1,0,0,0,336,337,5,65,
0,0,337,343,5,66,0,0,338,339,3,8,4,0,339,340,5,85,0,0,340,342,1,0,0,0,341,
338,1,0,0,0,342,345,1,0,0,0,343,341,1,0,0,0,343,344,1,0,0,0,344,346,1,0,
0,0,345,343,1,0,0,0,346,348,5,67,0,0,347,311,1,0,0,0,347,325,1,0,0,0,348,
37,1,0,0,0,349,350,3,40,20,0,350,351,5,61,0,0,351,352,3,22,11,0,352,362,
1,0,0,0,353,356,3,40,20,0,354,355,5,61,0,0,355,357,3,22,11,0,356,354,1,0,
0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,359,5,59,0,0,359,360,3,42,21,0,360,
362,1,0,0,0,361,349,1,0,0,0,361,353,1,0,0,0,362,39,1,0,0,0,363,364,7,3,0,
0,364,41,1,0,0,0,365,377,6,21,-1,0,366,378,5,8,0,0,367,378,5,9,0,0,368,378,
5,42,0,0,369,378,5,19,0,0,370,378,5,47,0,0,371,378,3,46,23,0,372,378,3,50,
25,0,373,378,3,54,27,0,374,378,3,56,28,0,375,378,3,36,18,0,376,378,3,34,
17,0,377,366,1,0,0,0,377,367,1,0,0,0,377,368,1,0,0,0,377,369,1,0,0,0,377,
370,1,0,0,0,377,371,1,0,0,0,377,372,1,0,0,0,377,373,1,0,0,0,377,374,1,0,
0,0,377,375,1,0,0,0,377,376,1,0,0,0,378,412,1,0,0,0,379,412,3,44,22,0,380,
412,3,60,30,0,381,390,5,71,0,0,382,390,5,73,0,0,383,390,5,72,0,0,384,390,
5,13,0,0,385,386,3,28,14,0,386,387,5,73,0,0,387,390,1,0,0,0,388,390,5,82,
0,0,389,381,1,0,0,0,389,382,1,0,0,0,389,383,1,0,0,0,389,384,1,0,0,0,389,
385,1,0,0,0,389,388,1,0,0,0,390,391,1,0,0,0,391,412,3,42,21,11,392,393,5,
22,0,0,393,399,5,66,0,0,394,395,3,8,4,0,395,396,5,85,0,0,396,398,1,0,0,0,
397,394,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,402,
1,0,0,0,401,399,1,0,0,0,402,412,5,67,0,0,403,405,3,68,34,0,404,406,3,70,
35,0,405,404,1,0,0,0,405,406,1,0,0,0,406,412,1,0,0,0,407,408,3,44,22,0,408,
409,5,59,0,0,409,410,3,42,21,1,410,412,1,0,0,0,411,365,1,0,0,0,411,379,1,
0,0,0,411,380,1,0,0,0,411,389,1,0,0,0,411,392,1,0,0,0,411,403,1,0,0,0,411,
407,1,0,0,0,412,436,1,0,0,0,413,414,10,10,0,0,414,415,7,4,0,0,415,435,3,
42,21,11,416,417,10,9,0,0,417,418,7,5,0,0,418,435,3,42,21,10,419,420,10,
8,0,0,420,421,7,6,0,0,421,435,3,42,21,9,422,423,10,7,0,0,423,424,7,7,0,0,
424,435,3,42,21,8,425,426,10,6,0,0,426,427,7,8,0,0,427,435,3,42,21,7,428,
429,10,5,0,0,429,430,7,9,0,0,430,435,3,42,21,6,431,432,10,2,0,0,432,433,
5,46,0,0,433,435,3,42,21,3,434,413,1,0,0,0,434,416,1,0,0,0,434,419,1,0,0,
0,434,422,1,0,0,0,434,425,1,0,0,0,434,428,1,0,0,0,434,431,1,0,0,0,435,438,
1,0,0,0,436,434,1,0,0,0,436,437,1,0,0,0,437,43,1,0,0,0,438,436,1,0,0,0,439,
440,6,22,-1,0,440,446,5,40,0,0,441,442,5,64,0,0,442,443,3,42,21,0,443,444,
5,65,0,0,444,446,1,0,0,0,445,439,1,0,0,0,445,441,1,0,0,0,446,464,1,0,0,0,
447,449,10,2,0,0,448,450,5,63,0,0,449,448,1,0,0,0,449,450,1,0,0,0,450,451,
1,0,0,0,451,452,5,83,0,0,452,463,5,40,0,0,453,456,10,1,0,0,454,455,5,63,
0,0,455,457,5,83,0,0,456,454,1,0,0,0,456,457,1,0,0,0,457,458,1,0,0,0,458,
459,5,68,0,0,459,460,3,42,21,0,460,461,5,69,0,0,461,463,1,0,0,0,462,447,
1,0,0,0,462,453,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,465,1,0,0,0,
465,45,1,0,0,0,466,464,1,0,0,0,467,471,5,43,0,0,468,470,3,48,24,0,469,468,
1,0,0,0,470,473,1,0,0,0,471,469,1,0,0,0,471,472,1,0,0,0,472,474,1,0,0,0,
473,471,1,0,0,0,474,475,5,43,0,0,475,47,1,0,0,0,476,478,5,91,0,0,477,476,
1,0,0,0,478,479,1,0,0,0,479,477,1,0,0,0,479,480,1,0,0,0,480,486,1,0,0,0,
481,482,5,90,0,0,482,483,3,42,21,0,483,484,5,44,0,0,484,486,1,0,0,0,485,
477,1,0,0,0,485,481,1,0,0,0,486,49,1,0,0,0,487,488,5,11,0,0,488,497,5,68,
0,0,489,494,3,52,26,0,490,491,5,54,0,0,491,493,3,52,26,0,492,490,1,0,0,0,
493,496,1,0,0,0,494,492,1,0,0,0,494,495,1,0,0,0,495,498,1,0,0,0,496,494,
1,0,0,0,497,489,1,0,0,0,497,498,1,0,0,0,498,499,1,0,0,0,499,500,5,69,0,0,
500,51,1,0,0,0,501,502,5,84,0,0,502,505,3,44,22,0,503,505,3,42,21,0,504,
501,1,0,0,0,504,503,1,0,0,0,505,53,1,0,0,0,506,515,5,68,0,0,507,512,3,52,
26,0,508,509,5,54,0,0,509,511,3,52,26,0,510,508,1,0,0,0,511,514,1,0,0,0,
512,510,1,0,0,0,512,513,1,0,0,0,513,516,1,0,0,0,514,512,1,0,0,0,515,507,
1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,5,69,0,0,518,55,1,0,0,0,
519,520,5,66,0,0,520,525,3,58,29,0,521,522,5,54,0,0,522,524,3,58,29,0,523,
521,1,0,0,0,524,527,1,0,0,0,525,523,1,0,0,0,525,526,1,0,0,0,526,528,1,0,
0,0,527,525,1,0,0,0,528,529,5,67,0,0,529,57,1,0,0,0,530,533,5,40,0,0,531,
532,5,61,0,0,532,534,3,22,11,0,533,531,1,0,0,0,533,534,1,0,0,0,534,535,1,
0,0,0,535,536,5,59,0,0,536,550,3,42,21,0,537,538,5,68,0,0,538,539,3,42,21,
0,539,542,5,69,0,0,540,541,5,61,0,0,541,543,3,22,11,0,542,540,1,0,0,0,542,
543,1,0,0,0,543,544,1,0,0,0,544,545,5,59,0,0,545,546,3,42,21,0,546,550,1,
0,0,0,547,548,5,84,0,0,548,550,3,44,22,0,549,530,1,0,0,0,549,537,1,0,0,0,
549,547,1,0,0,0,550,59,1,0,0,0,551,552,6,30,-1,0,552,553,5,41,0,0,553,558,
3,62,31,0,554,555,3,44,22,0,555,556,3,62,31,0,556,558,1,0,0,0,557,551,1,
0,0,0,557,554,1,0,0,0,558,563,1,0,0,0,559,560,10,1,0,0,560,562,3,62,31,0,
561,559,1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,564,61,1,
0,0,0,565,563,1,0,0,0,566,575,5,64,0,0,567,572,3,64,32,0,568,569,5,54,0,
0,569,571,3,64,32,0,570,568,1,0,0,0,571,574,1,0,0,0,572,570,1,0,0,0,572,
573,1,0,0,0,573,576,1,0,0,0,574,572,1,0,0,0,575,567,1,0,0,0,575,576,1,0,
0,0,576,577,1,0,0,0,577,578,5,65,0,0,578,63,1,0,0,0,579,589,3,40,20,0,580,
581,3,40,20,0,581,582,5,59,0,0,582,583,3,42,21,0,583,589,1,0,0,0,584,585,
3,40,20,0,585,586,5,59,0,0,586,587,5,63,0,0,587,589,1,0,0,0,588,579,1,0,
0,0,588,580,1,0,0,0,588,584,1,0,0,0,589,65,1,0,0,0,590,591,5,4,0,0,591,592,
5,66,0,0,592,597,3,68,34,0,593,594,5,54,0,0,594,596,3,68,34,0,595,593,1,
0,0,0,596,599,1,0,0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,600,1,0,0,0,599,
597,1,0,0,0,600,601,5,67,0,0,601,67,1,0,0,0,602,603,5,64,0,0,603,604,3,42,
21,0,604,605,5,65,0,0,605,606,5,62,0,0,606,607,3,72,36,0,607,69,1,0,0,0,
608,609,5,60,0,0,609,610,3,72,36,0,610,71,1,0,0,0,611,623,3,8,4,0,612,618,
5,66,0,0,613,614,3,8,4,0,614,615,5,85,0,0,615,617,1,0,0,0,616,613,1,0,0,
0,617,620,1,0,0,0,618,616,1,0,0,0,618,619,1,0,0,0,619,621,1,0,0,0,620,618,
1,0,0,0,621,623,5,67,0,0,622,611,1,0,0,0,622,612,1,0,0,0,623,73,1,0,0,0,
624,631,5,7,0,0,625,631,5,6,0,0,626,627,5,45,0,0,627,631,3,42,21,0,628,629,
5,21,0,0,629,631,3,42,21,0,630,624,1,0,0,0,630,625,1,0,0,0,630,626,1,0,0,
0,630,628,1,0,0,0,631,75,1,0,0,0,632,633,5,5,0,0,633,634,5,42,0,0,634,635,
5,61,0,0,635,636,3,72,36,0,636,77,1,0,0,0,67,81,87,95,103,114,125,136,144,
152,158,168,174,178,184,208,219,230,233,238,248,250,269,281,292,298,306,
317,320,331,334,343,347,356,361,377,389,399,405,411,434,436,445,449,456,
462,464,471,479,485,494,497,504,512,515,525,533,542,549,557,563,572,575,
588,597,618,622,630];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class EzLangParser extends antlr4.Parser {

    static grammarFileName = "java-escape";
    static literalNames = [ null, "'const'", "'let'", "'static'", "'match'", 
                            "'loop'", "'continue'", "'break'", "'null'", 
                            "'void'", "'struct'", "'tuple'", "'type'", "'typeof'", 
                            "'from'", "'import'", "'export'", "'true'", 
                            "'false'", "'this'", "'declare'", "'throw'", 
                            "'catch'", "'I8'", "'I16'", "'I32'", "'I64'", 
                            "'U8'", "'U16'", "'U32'", "'U64'", "'D64'", 
                            "'String'", "'Bool'", "'Null'", "'Void'", "'Dict'", 
                            "'Tuple'", "'Array'", "'Function'", null, null, 
                            null, null, "'}}'", "'=>'", "'->'", "'%%'", 
                            "'<<'", "'<='", "'<'", "'>>'", "'>='", "'>'", 
                            "','", "'=='", "'==='", "'!='", "'!=='", "'='", 
                            "'::'", "':'", "'??'", "'?'", "'('", "')'", 
                            "'{'", "'}'", "'['", "']'", "'+'", "'-'", "'~'", 
                            "'!'", "'*'", "'/'", "'%'", "'&'", "'^'", "'|'", 
                            "'&&'", "'||'", "'@'", "'.'", "'...'", "';'", 
                            null, null, null, null, "'{{'" ];
    static symbolicNames = [ null, "Const", "Let", "Static", "Match", "Loop", 
                             "Continue", "Break", "Null", "Void", "Struct", 
                             "Tuple", "Type", "TypeOf", "From", "Import", 
                             "Export", "True", "False", "This", "Declare", 
                             "Throw", "Catch", "I8", "I16", "I32", "I64", 
                             "U8", "U16", "U32", "U64", "D64", "String", 
                             "Bool", "TNull", "TVoid", "TDict", "TTuple", 
                             "TArray", "Fn", "ID", "T", "Number", "Quote", 
                             "ExpEnd", "Ret", "Pipe", "PH", "ML", "LTE", 
                             "LessThan", "MR", "GTE", "GreatearThan", "Comma", 
                             "Eqs", "Eqt", "NotE", "NotEs", "Eq", "DC", 
                             "Conly", "DQ", "Query", "LP", "RP", "LeftBracket", 
                             "RightBracket", "LS", "RS", "Plus", "Minus", 
                             "BitNot", "Not", "Multiply", "Divide", "Modulus", 
                             "BitAnd", "BitXOr", "BitOr", "And", "Or", "At", 
                             "Dot", "Spread", "Eos", "MC", "SC", "WS", "E", 
                             "ExpStart", "Char" ];
    static ruleNames = [ "prog", "progStat", "hoisting", "importStat", "statment", 
                         "variable", "assignVar", "deconstVar", "deconstField", 
                         "declareDef", "typeDef", "type", "typeFnField", 
                         "typeDictField", "typeName", "struct", "structField", 
                         "fnGroup", "fn", "param", "id", "expr", "getOp", 
                         "string", "stringAtom", "tuple", "tupleField", 
                         "array", "dict", "dictField", "call", "callee", 
                         "callField", "matchStat", "matchField", "elseField", 
                         "matchExpr", "ret", "loopStat" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = EzLangParser.ruleNames;
        this.literalNames = EzLangParser.literalNames;
        this.symbolicNames = EzLangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 11:
    	    		return this.type_sempred(localctx, predIndex);
    	case 21:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 22:
    	    		return this.getOp_sempred(localctx, predIndex);
    	case 30:
    	    		return this.call_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    type_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 4);
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 10);
    		case 4:
    			return this.precpred(this._ctx, 9);
    		case 5:
    			return this.precpred(this._ctx, 8);
    		case 6:
    			return this.precpred(this._ctx, 7);
    		case 7:
    			return this.precpred(this._ctx, 6);
    		case 8:
    			return this.precpred(this._ctx, 5);
    		case 9:
    			return this.precpred(this._ctx, 2);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    getOp_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 10:
    			return this.precpred(this._ctx, 2);
    		case 11:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    call_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 12:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, EzLangParser.RULE_prog);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 78;
	            this.importStat();
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 84;
	            this.progStat();
	            this.state = 87; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4294524926) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 45055) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0));
	        this.state = 89;
	        this.match(EzLangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	progStat() {
	    let localctx = new ProgStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, EzLangParser.RULE_progStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 91;
	            this.hoisting();
	            break;

	        case 2:
	            this.state = 92;
	            this.match(EzLangParser.Export);
	            this.state = 93;
	            this.hoisting();
	            break;

	        case 3:
	            this.state = 94;
	            this.statment();
	            break;

	        }
	        this.state = 97;
	        this.match(EzLangParser.Eos);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hoisting() {
	    let localctx = new HoistingContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, EzLangParser.RULE_hoisting);
	    try {
	        this.state = 103;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.variable();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 100;
	            this.typeDef();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 101;
	            this.struct();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 102;
	            this.declareDef();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importStat() {
	    let localctx = new ImportStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, EzLangParser.RULE_importStat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 105;
	        this.match(EzLangParser.From);
	        this.state = 106;
	        this.string();
	        this.state = 107;
	        this.match(EzLangParser.Import);
	        this.state = 108;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 109;
	        _la = this._input.LA(1);
	        if(!(_la===40 || _la===41)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 114;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 110;
	            this.match(EzLangParser.Comma);
	            this.state = 111;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 117;
	        this.match(EzLangParser.RightBracket);
	        this.state = 118;
	        this.match(EzLangParser.Eos);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statment() {
	    let localctx = new StatmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, EzLangParser.RULE_statment);
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 8:
	        case 9:
	        case 11:
	        case 13:
	        case 19:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 47:
	        case 64:
	        case 66:
	        case 68:
	        case 71:
	        case 72:
	        case 73:
	        case 82:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 120;
	            this.expr(0);
	            break;
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 121;
	            this.variable();
	            break;
	        case 6:
	        case 7:
	        case 21:
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 122;
	            this.ret();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 123;
	            this.matchStat();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 124;
	            this.loopStat();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, EzLangParser.RULE_variable);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 128;
	        this.assignVar();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignVar() {
	    let localctx = new AssignVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, EzLangParser.RULE_assignVar);
	    var _la = 0; // Token type
	    try {
	        this.state = 144;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 130;
	            this.match(EzLangParser.ID);
	            this.state = 131;
	            this.match(EzLangParser.Conly);
	            this.state = 132;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 133;
	            this.match(EzLangParser.ID);
	            this.state = 136;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 134;
	                this.match(EzLangParser.Conly);
	                this.state = 135;
	                this.type(0);
	            }

	            this.state = 138;
	            this.match(EzLangParser.Eq);
	            this.state = 139;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new AssignDconstContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            this.deconstVar();
	            this.state = 141;
	            this.match(EzLangParser.Eq);
	            this.state = 142;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deconstVar() {
	    let localctx = new DeconstVarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, EzLangParser.RULE_deconstVar);
	    var _la = 0; // Token type
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            localctx = new DeconstDictContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 146;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 147;
	            this.deconstField();
	            this.state = 152;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 148;
	                    this.match(EzLangParser.Comma);
	                    this.state = 149;
	                    this.deconstField(); 
	                }
	                this.state = 154;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 158;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 155;
	                this.match(EzLangParser.Comma);
	                this.state = 156;
	                this.match(EzLangParser.Spread);
	                this.state = 157;
	                this.match(EzLangParser.ID);
	            }

	            this.state = 160;
	            this.match(EzLangParser.RightBracket);
	            break;
	        case 68:
	            localctx = new DeconstTupleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 162;
	            this.match(EzLangParser.LS);
	            this.state = 163;
	            this.deconstField();
	            this.state = 168;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 164;
	                    this.match(EzLangParser.Comma);
	                    this.state = 165;
	                    this.deconstField(); 
	                }
	                this.state = 170;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 171;
	                this.match(EzLangParser.Comma);
	                this.state = 172;
	                this.match(EzLangParser.Spread);
	                this.state = 173;
	                this.match(EzLangParser.ID);
	            }

	            this.state = 176;
	            this.match(EzLangParser.RS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	deconstField() {
	    let localctx = new DeconstFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, EzLangParser.RULE_deconstField);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 180;
	            this.match(EzLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 181;
	            this.match(EzLangParser.ID);
	            this.state = 182;
	            this.match(EzLangParser.Conly);
	            this.state = 183;
	            this.deconstVar();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declareDef() {
	    let localctx = new DeclareDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, EzLangParser.RULE_declareDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(EzLangParser.Declare);
	        this.state = 187;
	        this.match(EzLangParser.ID);
	        this.state = 188;
	        this.match(EzLangParser.Eq);
	        this.state = 189;
	        this.type(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDef() {
	    let localctx = new TypeDefContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, EzLangParser.RULE_typeDef);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 191;
	        this.match(EzLangParser.Type);
	        this.state = 192;
	        this.match(EzLangParser.T);
	        this.state = 193;
	        this.match(EzLangParser.Eq);
	        this.state = 194;
	        this.type(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	type(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new TypeContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 22;
	    this.enterRecursionRule(localctx, 22, EzLangParser.RULE_type, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 238;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NameTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 197;
	            this.typeName();
	            break;

	        case 2:
	            localctx = new PatternTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 198;
	            this.match(EzLangParser.LP);
	            this.state = 199;
	            this.type(0);
	            this.state = 200;
	            this.match(EzLangParser.RP);
	            break;

	        case 3:
	            localctx = new DictTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 202;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 203;
	            this.typeDictField();
	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 204;
	                this.match(EzLangParser.Comma);
	                this.state = 205;
	                this.typeDictField();
	                this.state = 210;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 211;
	            this.match(EzLangParser.RightBracket);
	            break;

	        case 4:
	            localctx = new TupleTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 213;
	            this.match(EzLangParser.LS);
	            this.state = 214;
	            this.type(0);
	            this.state = 219;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 215;
	                this.match(EzLangParser.Comma);
	                this.state = 216;
	                this.type(0);
	                this.state = 221;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 222;
	            this.match(EzLangParser.RS);
	            break;

	        case 5:
	            localctx = new FnTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 224;
	            this.match(EzLangParser.LP);
	            this.state = 233;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 225;
	                this.typeFnField();
	                this.state = 230;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 226;
	                    this.match(EzLangParser.Comma);
	                    this.state = 227;
	                    this.typeFnField();
	                    this.state = 232;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 235;
	            this.match(EzLangParser.RP);
	            this.state = 236;
	            this.match(EzLangParser.Ret);
	            this.state = 237;
	            this.type(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 250;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 248;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new UnionTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 240;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 241;
	                    this.match(EzLangParser.BitOr);
	                    this.state = 242;
	                    this.type(5);
	                    break;

	                case 2:
	                    localctx = new OptionalTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 243;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 244;
	                    this.match(EzLangParser.Query);
	                    break;

	                case 3:
	                    localctx = new ArrTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 246;
	                    this.match(EzLangParser.LS);
	                    this.state = 247;
	                    this.match(EzLangParser.RS);
	                    break;

	                } 
	            }
	            this.state = 252;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	typeFnField() {
	    let localctx = new TypeFnFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, EzLangParser.RULE_typeFnField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 253;
	        this.id();
	        this.state = 254;
	        this.match(EzLangParser.Conly);
	        this.state = 255;
	        this.type(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeDictField() {
	    let localctx = new TypeDictFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, EzLangParser.RULE_typeDictField);
	    try {
	        this.state = 269;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 40:
	            localctx = new TypeDictFieldIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 257;
	            this.id();
	            this.state = 258;
	            this.match(EzLangParser.Conly);
	            this.state = 259;
	            this.type(0);
	            break;
	        case 68:
	            localctx = new TypeDictFieldTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 261;
	            this.match(EzLangParser.LS);
	            this.state = 262;
	            this.type(0);
	            this.state = 263;
	            this.match(EzLangParser.RS);
	            this.state = 264;
	            this.match(EzLangParser.Conly);
	            this.state = 265;
	            this.type(0);
	            break;
	        case 84:
	            localctx = new TypeDictFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 267;
	            this.match(EzLangParser.Spread);
	            this.state = 268;
	            this.typeName();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	typeName() {
	    let localctx = new TypeNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, EzLangParser.RULE_typeName);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 271;
	        _la = this._input.LA(1);
	        if(!(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & 393215) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	struct() {
	    let localctx = new StructContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, EzLangParser.RULE_struct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 273;
	        this.match(EzLangParser.Struct);
	        this.state = 274;
	        this.match(EzLangParser.T);
	        this.state = 275;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 276;
	        this.structField();
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 277;
	            this.match(EzLangParser.Comma);
	            this.state = 278;
	            this.structField();
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 284;
	        this.match(EzLangParser.RightBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structField() {
	    let localctx = new StructFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, EzLangParser.RULE_structField);
	    var _la = 0; // Token type
	    try {
	        this.state = 298;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareStructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 286;
	            this.match(EzLangParser.ID);
	            this.state = 287;
	            this.match(EzLangParser.Conly);
	            this.state = 288;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignStructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 289;
	            this.match(EzLangParser.ID);
	            this.state = 292;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 290;
	                this.match(EzLangParser.Conly);
	                this.state = 291;
	                this.type(0);
	            }

	            this.state = 294;
	            this.match(EzLangParser.Eq);
	            this.state = 295;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new StructFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 296;
	            this.match(EzLangParser.Spread);
	            this.state = 297;
	            this.match(EzLangParser.T);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fnGroup() {
	    let localctx = new FnGroupContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, EzLangParser.RULE_fnGroup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 300;
	        this.match(EzLangParser.LP);
	        this.state = 301;
	        this.fn();
	        this.state = 306;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 302;
	            this.match(EzLangParser.Comma);
	            this.state = 303;
	            this.fn();
	            this.state = 308;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 309;
	        this.match(EzLangParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fn() {
	    let localctx = new FnContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, EzLangParser.RULE_fn);
	    var _la = 0; // Token type
	    try {
	        this.state = 347;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrowFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 311;
	            this.match(EzLangParser.LP);
	            this.state = 320;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 312;
	                this.param();
	                this.state = 317;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 313;
	                    this.match(EzLangParser.Comma);
	                    this.state = 314;
	                    this.param();
	                    this.state = 319;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 322;
	            this.match(EzLangParser.RP);
	            this.state = 323;
	            this.match(EzLangParser.Ret);
	            this.state = 324;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new BlockFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 325;
	            this.match(EzLangParser.LP);
	            this.state = 334;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 326;
	                this.param();
	                this.state = 331;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 327;
	                    this.match(EzLangParser.Comma);
	                    this.state = 328;
	                    this.param();
	                    this.state = 333;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 336;
	            this.match(EzLangParser.RP);
	            this.state = 337;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 343;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 45055) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 338;
	                this.statment();
	                this.state = 339;
	                this.match(EzLangParser.Eos);
	                this.state = 345;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 346;
	            this.match(EzLangParser.RightBracket);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, EzLangParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.state = 361;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 349;
	            this.id();
	            this.state = 350;
	            this.match(EzLangParser.Conly);
	            this.state = 351;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 353;
	            this.id();
	            this.state = 356;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 354;
	                this.match(EzLangParser.Conly);
	                this.state = 355;
	                this.type(0);
	            }

	            this.state = 358;
	            this.match(EzLangParser.Eq);
	            this.state = 359;
	            this.expr(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	id() {
	    let localctx = new IdContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, EzLangParser.RULE_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 363;
	        _la = this._input.LA(1);
	        if(!(_la===19 || _la===40)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 42;
	    this.enterRecursionRule(localctx, 42, EzLangParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 411;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 377;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 366;
	                this.match(EzLangParser.Null);
	                break;

	            case 2:
	                this.state = 367;
	                this.match(EzLangParser.Void);
	                break;

	            case 3:
	                this.state = 368;
	                this.match(EzLangParser.Number);
	                break;

	            case 4:
	                this.state = 369;
	                this.match(EzLangParser.This);
	                break;

	            case 5:
	                this.state = 370;
	                this.match(EzLangParser.PH);
	                break;

	            case 6:
	                this.state = 371;
	                this.string();
	                break;

	            case 7:
	                this.state = 372;
	                this.tuple();
	                break;

	            case 8:
	                this.state = 373;
	                this.array();
	                break;

	            case 9:
	                this.state = 374;
	                this.dict();
	                break;

	            case 10:
	                this.state = 375;
	                this.fn();
	                break;

	            case 11:
	                this.state = 376;
	                this.fnGroup();
	                break;

	            }
	            break;

	        case 2:
	            localctx = new GetExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 379;
	            this.getOp(0);
	            break;

	        case 3:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 380;
	            this.call(0);
	            break;

	        case 4:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 389;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 71:
	                this.state = 381;
	                this.match(EzLangParser.Minus);
	                break;
	            case 73:
	                this.state = 382;
	                this.match(EzLangParser.Not);
	                break;
	            case 72:
	                this.state = 383;
	                this.match(EzLangParser.BitNot);
	                break;
	            case 13:
	                this.state = 384;
	                this.match(EzLangParser.TypeOf);
	                break;
	            case 23:
	            case 24:
	            case 25:
	            case 26:
	            case 27:
	            case 28:
	            case 29:
	            case 30:
	            case 31:
	            case 32:
	            case 33:
	            case 34:
	            case 35:
	            case 36:
	            case 37:
	            case 38:
	            case 39:
	            case 41:
	                this.state = 385;
	                this.typeName();
	                this.state = 386;
	                this.match(EzLangParser.Not);
	                break;
	            case 82:
	                this.state = 388;
	                this.match(EzLangParser.At);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 391;
	            this.expr(11);
	            break;

	        case 5:
	            localctx = new CatchExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 392;
	            this.match(EzLangParser.Catch);
	            this.state = 393;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 399;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 45055) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 394;
	                this.statment();
	                this.state = 395;
	                this.match(EzLangParser.Eos);
	                this.state = 401;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 402;
	            this.match(EzLangParser.RightBracket);
	            break;

	        case 6:
	            localctx = new ConditionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 403;
	            this.matchField();
	            this.state = 405;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 404;
	                this.elseField();

	            }
	            break;

	        case 7:
	            localctx = new AssignExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 407;
	            this.getOp(0);
	            this.state = 408;
	            this.match(EzLangParser.Eq);
	            this.state = 409;
	            this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 436;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 434;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 413;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 414;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 74)) & ~0x1f) == 0 && ((1 << (_la - 74)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 415;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 416;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 417;
	                    _la = this._input.LA(1);
	                    if(!(_la===70 || _la===71)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 418;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new BitMovExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 419;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 420;
	                    _la = this._input.LA(1);
	                    if(!(_la===48 || _la===51)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 421;
	                    this.expr(9);
	                    break;

	                case 4:
	                    localctx = new BitExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 422;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 423;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 77)) & ~0x1f) == 0 && ((1 << (_la - 77)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 424;
	                    this.expr(8);
	                    break;

	                case 5:
	                    localctx = new RelExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 425;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 426;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & 987) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 427;
	                    this.expr(7);
	                    break;

	                case 6:
	                    localctx = new LogicExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 428;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 429;
	                    _la = this._input.LA(1);
	                    if(!(_la===80 || _la===81)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 430;
	                    this.expr(6);
	                    break;

	                case 7:
	                    localctx = new PipeExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 431;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 432;
	                    this.match(EzLangParser.Pipe);
	                    this.state = 433;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 438;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	getOp(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new GetOpContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, EzLangParser.RULE_getOp, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 445;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new GetOpIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 440;
	            this.match(EzLangParser.ID);
	            break;
	        case 64:
	            localctx = new GetOpExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 441;
	            this.match(EzLangParser.LP);
	            this.state = 442;
	            this.expr(0);
	            this.state = 443;
	            this.match(EzLangParser.RP);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 464;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 462;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new GetOpChainContext(this, new GetOpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_getOp);
	                    this.state = 447;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 449;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===63) {
	                        this.state = 448;
	                        this.match(EzLangParser.Query);
	                    }

	                    this.state = 451;
	                    this.match(EzLangParser.Dot);
	                    this.state = 452;
	                    this.match(EzLangParser.ID);
	                    break;

	                case 2:
	                    localctx = new GetOpChainExprContext(this, new GetOpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_getOp);
	                    this.state = 453;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 456;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===63) {
	                        this.state = 454;
	                        this.match(EzLangParser.Query);
	                        this.state = 455;
	                        this.match(EzLangParser.Dot);
	                    }

	                    this.state = 458;
	                    this.match(EzLangParser.LS);
	                    this.state = 459;
	                    this.expr(0);
	                    this.state = 460;
	                    this.match(EzLangParser.RS);
	                    break;

	                } 
	            }
	            this.state = 466;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,45,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	string() {
	    let localctx = new StringContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, EzLangParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 467;
	        this.match(EzLangParser.Quote);
	        this.state = 471;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===90 || _la===91) {
	            this.state = 468;
	            this.stringAtom();
	            this.state = 473;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 474;
	        this.match(EzLangParser.Quote);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringAtom() {
	    let localctx = new StringAtomContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, EzLangParser.RULE_stringAtom);
	    try {
	        this.state = 485;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 91:
	            localctx = new StringCharContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 477; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 476;
	            		this.match(EzLangParser.Char);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 479; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,47, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 90:
	            localctx = new StringVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 481;
	            this.match(EzLangParser.ExpStart);
	            this.state = 482;
	            this.expr(0);
	            this.state = 483;
	            this.match(EzLangParser.ExpEnd);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tuple() {
	    let localctx = new TupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, EzLangParser.RULE_tuple);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 487;
	        this.match(EzLangParser.Tuple);
	        this.state = 488;
	        this.match(EzLangParser.LS);
	        this.state = 497;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 4291308288) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 36863) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 1311637) !== 0)) {
	            this.state = 489;
	            this.tupleField();
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 490;
	                this.match(EzLangParser.Comma);
	                this.state = 491;
	                this.tupleField();
	                this.state = 496;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 499;
	        this.match(EzLangParser.RS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tupleField() {
	    let localctx = new TupleFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, EzLangParser.RULE_tupleField);
	    try {
	        this.state = 504;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 84:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 501;
	            this.match(EzLangParser.Spread);
	            this.state = 502;
	            this.getOp(0);
	            break;
	        case 8:
	        case 9:
	        case 11:
	        case 13:
	        case 19:
	        case 22:
	        case 23:
	        case 24:
	        case 25:
	        case 26:
	        case 27:
	        case 28:
	        case 29:
	        case 30:
	        case 31:
	        case 32:
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 47:
	        case 64:
	        case 66:
	        case 68:
	        case 71:
	        case 72:
	        case 73:
	        case 82:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 503;
	            this.expr(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	array() {
	    let localctx = new ArrayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, EzLangParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 506;
	        this.match(EzLangParser.LS);
	        this.state = 515;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 4291308288) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 36863) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 1311637) !== 0)) {
	            this.state = 507;
	            this.tupleField();
	            this.state = 512;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 508;
	                this.match(EzLangParser.Comma);
	                this.state = 509;
	                this.tupleField();
	                this.state = 514;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 517;
	        this.match(EzLangParser.RS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dict() {
	    let localctx = new DictContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, EzLangParser.RULE_dict);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 519;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 520;
	        this.dictField();
	        this.state = 525;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 521;
	            this.match(EzLangParser.Comma);
	            this.state = 522;
	            this.dictField();
	            this.state = 527;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 528;
	        this.match(EzLangParser.RightBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	dictField() {
	    let localctx = new DictFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, EzLangParser.RULE_dictField);
	    var _la = 0; // Token type
	    try {
	        this.state = 549;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new DictFieldIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 530;
	            this.match(EzLangParser.ID);
	            this.state = 533;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 531;
	                this.match(EzLangParser.Conly);
	                this.state = 532;
	                this.type(0);
	            }

	            this.state = 535;
	            this.match(EzLangParser.Eq);
	            this.state = 536;
	            this.expr(0);
	            break;
	        case 68:
	            localctx = new DictFieldExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 537;
	            this.match(EzLangParser.LS);
	            this.state = 538;
	            this.expr(0);
	            this.state = 539;
	            this.match(EzLangParser.RS);
	            this.state = 542;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 540;
	                this.match(EzLangParser.Conly);
	                this.state = 541;
	                this.type(0);
	            }

	            this.state = 544;
	            this.match(EzLangParser.Eq);
	            this.state = 545;
	            this.expr(0);
	            break;
	        case 84:
	            localctx = new DictFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 547;
	            this.match(EzLangParser.Spread);
	            this.state = 548;
	            this.getOp(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	call(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CallContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 60;
	    this.enterRecursionRule(localctx, 60, EzLangParser.RULE_call, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 557;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 41:
	            this.state = 552;
	            this.match(EzLangParser.T);
	            this.state = 553;
	            this.callee();
	            break;
	        case 40:
	        case 64:
	            this.state = 554;
	            this.getOp(0);
	            this.state = 555;
	            this.callee();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 563;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,59,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new CallContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_call);
	                this.state = 559;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 560;
	                this.callee(); 
	            }
	            this.state = 565;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,59,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	callee() {
	    let localctx = new CalleeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, EzLangParser.RULE_callee);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this.match(EzLangParser.LP);
	        this.state = 575;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19 || _la===40) {
	            this.state = 567;
	            this.callField();
	            this.state = 572;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 568;
	                this.match(EzLangParser.Comma);
	                this.state = 569;
	                this.callField();
	                this.state = 574;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 577;
	        this.match(EzLangParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	callField() {
	    let localctx = new CallFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, EzLangParser.RULE_callField);
	    try {
	        this.state = 588;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 579;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 580;
	            this.id();
	            this.state = 581;
	            this.match(EzLangParser.Eq);
	            this.state = 582;
	            this.expr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 584;
	            this.id();
	            this.state = 585;
	            this.match(EzLangParser.Eq);
	            this.state = 586;
	            this.match(EzLangParser.Query);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchStat() {
	    let localctx = new MatchStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, EzLangParser.RULE_matchStat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 590;
	        this.match(EzLangParser.Match);
	        this.state = 591;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 592;
	        this.matchField();
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 593;
	            this.match(EzLangParser.Comma);
	            this.state = 594;
	            this.matchField();
	            this.state = 599;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 600;
	        this.match(EzLangParser.RightBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchField() {
	    let localctx = new MatchFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, EzLangParser.RULE_matchField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 602;
	        this.match(EzLangParser.LP);
	        this.state = 603;
	        this.expr(0);
	        this.state = 604;
	        this.match(EzLangParser.RP);
	        this.state = 605;
	        this.match(EzLangParser.DQ);
	        this.state = 606;
	        this.matchExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseField() {
	    let localctx = new ElseFieldContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, EzLangParser.RULE_elseField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 608;
	        this.match(EzLangParser.DC);
	        this.state = 609;
	        this.matchExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	matchExpr() {
	    let localctx = new MatchExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, EzLangParser.RULE_matchExpr);
	    var _la = 0; // Token type
	    try {
	        this.state = 622;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 611;
	            this.statment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 612;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 618;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 45055) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 613;
	                this.statment();
	                this.state = 614;
	                this.match(EzLangParser.Eos);
	                this.state = 620;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 621;
	            this.match(EzLangParser.RightBracket);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ret() {
	    let localctx = new RetContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, EzLangParser.RULE_ret);
	    try {
	        this.state = 630;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 624;
	            this.match(EzLangParser.Break);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 625;
	            this.match(EzLangParser.Continue);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 626;
	            this.match(EzLangParser.Ret);
	            this.state = 627;
	            this.expr(0);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 628;
	            this.match(EzLangParser.Throw);
	            this.state = 629;
	            this.expr(0);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	loopStat() {
	    let localctx = new LoopStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, EzLangParser.RULE_loopStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 632;
	        this.match(EzLangParser.Loop);
	        this.state = 633;
	        this.match(EzLangParser.Number);
	        this.state = 634;
	        this.match(EzLangParser.Conly);
	        this.state = 635;
	        this.matchExpr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

EzLangParser.EOF = antlr4.Token.EOF;
EzLangParser.Const = 1;
EzLangParser.Let = 2;
EzLangParser.Static = 3;
EzLangParser.Match = 4;
EzLangParser.Loop = 5;
EzLangParser.Continue = 6;
EzLangParser.Break = 7;
EzLangParser.Null = 8;
EzLangParser.Void = 9;
EzLangParser.Struct = 10;
EzLangParser.Tuple = 11;
EzLangParser.Type = 12;
EzLangParser.TypeOf = 13;
EzLangParser.From = 14;
EzLangParser.Import = 15;
EzLangParser.Export = 16;
EzLangParser.True = 17;
EzLangParser.False = 18;
EzLangParser.This = 19;
EzLangParser.Declare = 20;
EzLangParser.Throw = 21;
EzLangParser.Catch = 22;
EzLangParser.I8 = 23;
EzLangParser.I16 = 24;
EzLangParser.I32 = 25;
EzLangParser.I64 = 26;
EzLangParser.U8 = 27;
EzLangParser.U16 = 28;
EzLangParser.U32 = 29;
EzLangParser.U64 = 30;
EzLangParser.D64 = 31;
EzLangParser.String = 32;
EzLangParser.Bool = 33;
EzLangParser.TNull = 34;
EzLangParser.TVoid = 35;
EzLangParser.TDict = 36;
EzLangParser.TTuple = 37;
EzLangParser.TArray = 38;
EzLangParser.Fn = 39;
EzLangParser.ID = 40;
EzLangParser.T = 41;
EzLangParser.Number = 42;
EzLangParser.Quote = 43;
EzLangParser.ExpEnd = 44;
EzLangParser.Ret = 45;
EzLangParser.Pipe = 46;
EzLangParser.PH = 47;
EzLangParser.ML = 48;
EzLangParser.LTE = 49;
EzLangParser.LessThan = 50;
EzLangParser.MR = 51;
EzLangParser.GTE = 52;
EzLangParser.GreatearThan = 53;
EzLangParser.Comma = 54;
EzLangParser.Eqs = 55;
EzLangParser.Eqt = 56;
EzLangParser.NotE = 57;
EzLangParser.NotEs = 58;
EzLangParser.Eq = 59;
EzLangParser.DC = 60;
EzLangParser.Conly = 61;
EzLangParser.DQ = 62;
EzLangParser.Query = 63;
EzLangParser.LP = 64;
EzLangParser.RP = 65;
EzLangParser.LeftBracket = 66;
EzLangParser.RightBracket = 67;
EzLangParser.LS = 68;
EzLangParser.RS = 69;
EzLangParser.Plus = 70;
EzLangParser.Minus = 71;
EzLangParser.BitNot = 72;
EzLangParser.Not = 73;
EzLangParser.Multiply = 74;
EzLangParser.Divide = 75;
EzLangParser.Modulus = 76;
EzLangParser.BitAnd = 77;
EzLangParser.BitXOr = 78;
EzLangParser.BitOr = 79;
EzLangParser.And = 80;
EzLangParser.Or = 81;
EzLangParser.At = 82;
EzLangParser.Dot = 83;
EzLangParser.Spread = 84;
EzLangParser.Eos = 85;
EzLangParser.MC = 86;
EzLangParser.SC = 87;
EzLangParser.WS = 88;
EzLangParser.E = 89;
EzLangParser.ExpStart = 90;
EzLangParser.Char = 91;

EzLangParser.RULE_prog = 0;
EzLangParser.RULE_progStat = 1;
EzLangParser.RULE_hoisting = 2;
EzLangParser.RULE_importStat = 3;
EzLangParser.RULE_statment = 4;
EzLangParser.RULE_variable = 5;
EzLangParser.RULE_assignVar = 6;
EzLangParser.RULE_deconstVar = 7;
EzLangParser.RULE_deconstField = 8;
EzLangParser.RULE_declareDef = 9;
EzLangParser.RULE_typeDef = 10;
EzLangParser.RULE_type = 11;
EzLangParser.RULE_typeFnField = 12;
EzLangParser.RULE_typeDictField = 13;
EzLangParser.RULE_typeName = 14;
EzLangParser.RULE_struct = 15;
EzLangParser.RULE_structField = 16;
EzLangParser.RULE_fnGroup = 17;
EzLangParser.RULE_fn = 18;
EzLangParser.RULE_param = 19;
EzLangParser.RULE_id = 20;
EzLangParser.RULE_expr = 21;
EzLangParser.RULE_getOp = 22;
EzLangParser.RULE_string = 23;
EzLangParser.RULE_stringAtom = 24;
EzLangParser.RULE_tuple = 25;
EzLangParser.RULE_tupleField = 26;
EzLangParser.RULE_array = 27;
EzLangParser.RULE_dict = 28;
EzLangParser.RULE_dictField = 29;
EzLangParser.RULE_call = 30;
EzLangParser.RULE_callee = 31;
EzLangParser.RULE_callField = 32;
EzLangParser.RULE_matchStat = 33;
EzLangParser.RULE_matchField = 34;
EzLangParser.RULE_elseField = 35;
EzLangParser.RULE_matchExpr = 36;
EzLangParser.RULE_ret = 37;
EzLangParser.RULE_loopStat = 38;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_prog;
    }

	EOF() {
	    return this.getToken(EzLangParser.EOF, 0);
	};

	importStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImportStatContext);
	    } else {
	        return this.getTypedRuleContext(ImportStatContext,i);
	    }
	};

	progStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ProgStatContext);
	    } else {
	        return this.getTypedRuleContext(ProgStatContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ProgStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_progStat;
    }

	Eos() {
	    return this.getToken(EzLangParser.Eos, 0);
	};

	hoisting() {
	    return this.getTypedRuleContext(HoistingContext,0);
	};

	Export() {
	    return this.getToken(EzLangParser.Export, 0);
	};

	statment() {
	    return this.getTypedRuleContext(StatmentContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitProgStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HoistingContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_hoisting;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	typeDef() {
	    return this.getTypedRuleContext(TypeDefContext,0);
	};

	struct() {
	    return this.getTypedRuleContext(StructContext,0);
	};

	declareDef() {
	    return this.getTypedRuleContext(DeclareDefContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitHoisting(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_importStat;
    }

	From() {
	    return this.getToken(EzLangParser.From, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	Import() {
	    return this.getToken(EzLangParser.Import, 0);
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Eos() {
	    return this.getToken(EzLangParser.Eos, 0);
	};

	ID = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.ID);
	    } else {
	        return this.getToken(EzLangParser.ID, i);
	    }
	};


	T = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.T);
	    } else {
	        return this.getToken(EzLangParser.T, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitImportStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_statment;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	ret() {
	    return this.getTypedRuleContext(RetContext,0);
	};

	matchStat() {
	    return this.getTypedRuleContext(MatchStatContext,0);
	};

	loopStat() {
	    return this.getTypedRuleContext(LoopStatContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitStatment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_variable;
    }

	assignVar() {
	    return this.getTypedRuleContext(AssignVarContext,0);
	};

	Const() {
	    return this.getToken(EzLangParser.Const, 0);
	};

	Static() {
	    return this.getToken(EzLangParser.Static, 0);
	};

	Let() {
	    return this.getToken(EzLangParser.Let, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_assignVar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclareIDContext extends AssignVarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeclareID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DeclareIDContext = DeclareIDContext;

class AssignDconstContext extends AssignVarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	deconstVar() {
	    return this.getTypedRuleContext(DeconstVarContext,0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAssignDconst(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AssignDconstContext = AssignDconstContext;

class AssignIDContext extends AssignVarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAssignID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AssignIDContext = AssignIDContext;

class DeconstVarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_deconstVar;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeconstDictContext extends DeconstVarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	deconstField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeconstFieldContext);
	    } else {
	        return this.getTypedRuleContext(DeconstFieldContext,i);
	    }
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeconstDict(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DeconstDictContext = DeconstDictContext;

class DeconstTupleContext extends DeconstVarContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	deconstField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeconstFieldContext);
	    } else {
	        return this.getTypedRuleContext(DeconstFieldContext,i);
	    }
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeconstTuple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DeconstTupleContext = DeconstTupleContext;

class DeconstFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_deconstField;
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	deconstVar() {
	    return this.getTypedRuleContext(DeconstVarContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeconstField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclareDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_declareDef;
    }

	Declare() {
	    return this.getToken(EzLangParser.Declare, 0);
	};

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeclareDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeDefContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_typeDef;
    }

	Type() {
	    return this.getToken(EzLangParser.Type, 0);
	};

	T() {
	    return this.getToken(EzLangParser.T, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeDef(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_type;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class NameTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitNameType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.NameTypeContext = NameTypeContext;

class FnTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	Ret() {
	    return this.getToken(EzLangParser.Ret, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	typeFnField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeFnFieldContext);
	    } else {
	        return this.getTypedRuleContext(TypeFnFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitFnType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.FnTypeContext = FnTypeContext;

class OptionalTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Query() {
	    return this.getToken(EzLangParser.Query, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitOptionalType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.OptionalTypeContext = OptionalTypeContext;

class ArrTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitArrType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.ArrTypeContext = ArrTypeContext;

class PatternTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitPatternType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.PatternTypeContext = PatternTypeContext;

class TupleTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTupleType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.TupleTypeContext = TupleTypeContext;

class DictTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	typeDictField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeDictFieldContext);
	    } else {
	        return this.getTypedRuleContext(TypeDictFieldContext,i);
	    }
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDictType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DictTypeContext = DictTypeContext;

class UnionTypeContext extends TypeContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	BitOr() {
	    return this.getToken(EzLangParser.BitOr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitUnionType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.UnionTypeContext = UnionTypeContext;

class TypeFnFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_typeFnField;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeFnField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeDictFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_typeDictField;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TypeDictFieldRestContext extends TypeDictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeDictFieldRest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.TypeDictFieldRestContext = TypeDictFieldRestContext;

class TypeDictFieldTypeContext extends TypeDictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeDictFieldType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.TypeDictFieldTypeContext = TypeDictFieldTypeContext;

class TypeDictFieldIDContext extends TypeDictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeDictFieldID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.TypeDictFieldIDContext = TypeDictFieldIDContext;

class TypeNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_typeName;
    }

	I8() {
	    return this.getToken(EzLangParser.I8, 0);
	};

	I16() {
	    return this.getToken(EzLangParser.I16, 0);
	};

	I32() {
	    return this.getToken(EzLangParser.I32, 0);
	};

	I64() {
	    return this.getToken(EzLangParser.I64, 0);
	};

	U8() {
	    return this.getToken(EzLangParser.U8, 0);
	};

	U16() {
	    return this.getToken(EzLangParser.U16, 0);
	};

	U32() {
	    return this.getToken(EzLangParser.U32, 0);
	};

	U64() {
	    return this.getToken(EzLangParser.U64, 0);
	};

	D64() {
	    return this.getToken(EzLangParser.D64, 0);
	};

	String() {
	    return this.getToken(EzLangParser.String, 0);
	};

	Bool() {
	    return this.getToken(EzLangParser.Bool, 0);
	};

	TNull() {
	    return this.getToken(EzLangParser.TNull, 0);
	};

	TVoid() {
	    return this.getToken(EzLangParser.TVoid, 0);
	};

	TDict() {
	    return this.getToken(EzLangParser.TDict, 0);
	};

	TTuple() {
	    return this.getToken(EzLangParser.TTuple, 0);
	};

	TArray() {
	    return this.getToken(EzLangParser.TArray, 0);
	};

	Fn() {
	    return this.getToken(EzLangParser.Fn, 0);
	};

	T() {
	    return this.getToken(EzLangParser.T, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_struct;
    }

	Struct() {
	    return this.getToken(EzLangParser.Struct, 0);
	};

	T() {
	    return this.getToken(EzLangParser.T, 0);
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	structField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructFieldContext);
	    } else {
	        return this.getTypedRuleContext(StructFieldContext,i);
	    }
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_structField;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DeclareStructFieldContext extends StructFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeclareStructField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DeclareStructFieldContext = DeclareStructFieldContext;

class StructFieldRestContext extends StructFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	T() {
	    return this.getToken(EzLangParser.T, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitStructFieldRest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.StructFieldRestContext = StructFieldRestContext;

class AssignStructFieldContext extends StructFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAssignStructField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AssignStructFieldContext = AssignStructFieldContext;

class FnGroupContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_fnGroup;
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	fn = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FnContext);
	    } else {
	        return this.getTypedRuleContext(FnContext,i);
	    }
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitFnGroup(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FnContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_fn;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlockFnContext extends FnContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	statment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatmentContext);
	    } else {
	        return this.getTypedRuleContext(StatmentContext,i);
	    }
	};

	Eos = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Eos);
	    } else {
	        return this.getToken(EzLangParser.Eos, i);
	    }
	};


	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitBlockFn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.BlockFnContext = BlockFnContext;

class ArrowFnContext extends FnContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	Ret() {
	    return this.getToken(EzLangParser.Ret, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitArrowFn(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.ArrowFnContext = ArrowFnContext;

class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_param;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AssignParamContext extends ParamContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAssignParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AssignParamContext = AssignParamContext;

class DeclareParamContext extends ParamContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDeclareParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DeclareParamContext = DeclareParamContext;

class IdContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_id;
    }

	This() {
	    return this.getToken(EzLangParser.This, 0);
	};

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class PipeExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Pipe() {
	    return this.getToken(EzLangParser.Pipe, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitPipeExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.PipeExprContext = PipeExprContext;

class BitExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	BitAnd() {
	    return this.getToken(EzLangParser.BitAnd, 0);
	};

	BitOr() {
	    return this.getToken(EzLangParser.BitOr, 0);
	};

	BitXOr() {
	    return this.getToken(EzLangParser.BitXOr, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitBitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.BitExprContext = BitExprContext;

class UnaryExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Minus() {
	    return this.getToken(EzLangParser.Minus, 0);
	};

	Not() {
	    return this.getToken(EzLangParser.Not, 0);
	};

	BitNot() {
	    return this.getToken(EzLangParser.BitNot, 0);
	};

	TypeOf() {
	    return this.getToken(EzLangParser.TypeOf, 0);
	};

	typeName() {
	    return this.getTypedRuleContext(TypeNameContext,0);
	};

	At() {
	    return this.getToken(EzLangParser.At, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitUnaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.UnaryExprContext = UnaryExprContext;

class GetExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitGetExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.GetExprContext = GetExprContext;

class AddExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Plus() {
	    return this.getToken(EzLangParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(EzLangParser.Minus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAddExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AddExprContext = AddExprContext;

class CatchExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Catch() {
	    return this.getToken(EzLangParser.Catch, 0);
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	statment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatmentContext);
	    } else {
	        return this.getTypedRuleContext(StatmentContext,i);
	    }
	};

	Eos = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Eos);
	    } else {
	        return this.getToken(EzLangParser.Eos, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitCatchExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.CatchExprContext = CatchExprContext;

class LiteralExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Null() {
	    return this.getToken(EzLangParser.Null, 0);
	};

	Void() {
	    return this.getToken(EzLangParser.Void, 0);
	};

	Number() {
	    return this.getToken(EzLangParser.Number, 0);
	};

	This() {
	    return this.getToken(EzLangParser.This, 0);
	};

	PH() {
	    return this.getToken(EzLangParser.PH, 0);
	};

	string() {
	    return this.getTypedRuleContext(StringContext,0);
	};

	tuple() {
	    return this.getTypedRuleContext(TupleContext,0);
	};

	array() {
	    return this.getTypedRuleContext(ArrayContext,0);
	};

	dict() {
	    return this.getTypedRuleContext(DictContext,0);
	};

	fn() {
	    return this.getTypedRuleContext(FnContext,0);
	};

	fnGroup() {
	    return this.getTypedRuleContext(FnGroupContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitLiteralExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.LiteralExprContext = LiteralExprContext;

class LogicExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	And() {
	    return this.getToken(EzLangParser.And, 0);
	};

	Or() {
	    return this.getToken(EzLangParser.Or, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitLogicExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.LogicExprContext = LogicExprContext;

class ConditionExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	matchField() {
	    return this.getTypedRuleContext(MatchFieldContext,0);
	};

	elseField() {
	    return this.getTypedRuleContext(ElseFieldContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitConditionExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.ConditionExprContext = ConditionExprContext;

class MulExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(EzLangParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(EzLangParser.Divide, 0);
	};

	Modulus() {
	    return this.getToken(EzLangParser.Modulus, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitMulExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.MulExprContext = MulExprContext;

class CallExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitCallExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.CallExprContext = CallExprContext;

class BitMovExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ML() {
	    return this.getToken(EzLangParser.ML, 0);
	};

	MR() {
	    return this.getToken(EzLangParser.MR, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitBitMovExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.BitMovExprContext = BitMovExprContext;

class RelExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	Eqs() {
	    return this.getToken(EzLangParser.Eqs, 0);
	};

	Eqt() {
	    return this.getToken(EzLangParser.Eqt, 0);
	};

	NotE() {
	    return this.getToken(EzLangParser.NotE, 0);
	};

	NotEs() {
	    return this.getToken(EzLangParser.NotEs, 0);
	};

	LessThan() {
	    return this.getToken(EzLangParser.LessThan, 0);
	};

	GreatearThan() {
	    return this.getToken(EzLangParser.GreatearThan, 0);
	};

	LTE() {
	    return this.getToken(EzLangParser.LTE, 0);
	};

	GTE() {
	    return this.getToken(EzLangParser.GTE, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitRelExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.RelExprContext = RelExprContext;

class AssignExprContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitAssignExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.AssignExprContext = AssignExprContext;

class GetOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_getOp;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class GetOpExprContext extends GetOpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitGetOpExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.GetOpExprContext = GetOpExprContext;

class GetOpIDContext extends GetOpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitGetOpID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.GetOpIDContext = GetOpIDContext;

class GetOpChainExprContext extends GetOpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Query() {
	    return this.getToken(EzLangParser.Query, 0);
	};

	Dot() {
	    return this.getToken(EzLangParser.Dot, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitGetOpChainExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.GetOpChainExprContext = GetOpChainExprContext;

class GetOpChainContext extends GetOpContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	Dot() {
	    return this.getToken(EzLangParser.Dot, 0);
	};

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Query() {
	    return this.getToken(EzLangParser.Query, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitGetOpChain(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.GetOpChainContext = GetOpChainContext;

class StringContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_string;
    }

	Quote = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Quote);
	    } else {
	        return this.getToken(EzLangParser.Quote, i);
	    }
	};


	stringAtom = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StringAtomContext);
	    } else {
	        return this.getTypedRuleContext(StringAtomContext,i);
	    }
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StringAtomContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_stringAtom;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringVarContext extends StringAtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ExpStart() {
	    return this.getToken(EzLangParser.ExpStart, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	ExpEnd() {
	    return this.getToken(EzLangParser.ExpEnd, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitStringVar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.StringVarContext = StringVarContext;

class StringCharContext extends StringAtomContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Char = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Char);
	    } else {
	        return this.getToken(EzLangParser.Char, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitStringChar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.StringCharContext = StringCharContext;

class TupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_tuple;
    }

	Tuple() {
	    return this.getToken(EzLangParser.Tuple, 0);
	};

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	tupleField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TupleFieldContext);
	    } else {
	        return this.getTypedRuleContext(TupleFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTuple(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TupleFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_tupleField;
    }

	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTupleField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_array;
    }

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	tupleField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TupleFieldContext);
	    } else {
	        return this.getTypedRuleContext(TupleFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitArray(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DictContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_dict;
    }

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	dictField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DictFieldContext);
	    } else {
	        return this.getTypedRuleContext(DictFieldContext,i);
	    }
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDict(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DictFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_dictField;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class DictFieldExprContext extends DictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LS() {
	    return this.getToken(EzLangParser.LS, 0);
	};

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDictFieldExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DictFieldExprContext = DictFieldExprContext;

class DictFieldRestContext extends DictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Spread() {
	    return this.getToken(EzLangParser.Spread, 0);
	};

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDictFieldRest(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DictFieldRestContext = DictFieldRestContext;

class DictFieldIDContext extends DictFieldContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(EzLangParser.ID, 0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitDictFieldID(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

EzLangParser.DictFieldIDContext = DictFieldIDContext;

class CallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_call;
    }

	T() {
	    return this.getToken(EzLangParser.T, 0);
	};

	callee() {
	    return this.getTypedRuleContext(CalleeContext,0);
	};

	getOp() {
	    return this.getTypedRuleContext(GetOpContext,0);
	};

	call() {
	    return this.getTypedRuleContext(CallContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CalleeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_callee;
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	callField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CallFieldContext);
	    } else {
	        return this.getTypedRuleContext(CallFieldContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitCallee(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CallFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_callField;
    }

	id() {
	    return this.getTypedRuleContext(IdContext,0);
	};

	Eq() {
	    return this.getToken(EzLangParser.Eq, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Query() {
	    return this.getToken(EzLangParser.Query, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitCallField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MatchStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_matchStat;
    }

	Match() {
	    return this.getToken(EzLangParser.Match, 0);
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	matchField = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MatchFieldContext);
	    } else {
	        return this.getTypedRuleContext(MatchFieldContext,i);
	    }
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Comma);
	    } else {
	        return this.getToken(EzLangParser.Comma, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitMatchStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MatchFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_matchField;
    }

	LP() {
	    return this.getToken(EzLangParser.LP, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RP() {
	    return this.getToken(EzLangParser.RP, 0);
	};

	DQ() {
	    return this.getToken(EzLangParser.DQ, 0);
	};

	matchExpr() {
	    return this.getTypedRuleContext(MatchExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitMatchField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseFieldContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_elseField;
    }

	DC() {
	    return this.getToken(EzLangParser.DC, 0);
	};

	matchExpr() {
	    return this.getTypedRuleContext(MatchExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitElseField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MatchExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_matchExpr;
    }

	statment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatmentContext);
	    } else {
	        return this.getTypedRuleContext(StatmentContext,i);
	    }
	};

	LeftBracket() {
	    return this.getToken(EzLangParser.LeftBracket, 0);
	};

	RightBracket() {
	    return this.getToken(EzLangParser.RightBracket, 0);
	};

	Eos = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(EzLangParser.Eos);
	    } else {
	        return this.getToken(EzLangParser.Eos, i);
	    }
	};


	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitMatchExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_ret;
    }

	Break() {
	    return this.getToken(EzLangParser.Break, 0);
	};

	Continue() {
	    return this.getToken(EzLangParser.Continue, 0);
	};

	Ret() {
	    return this.getToken(EzLangParser.Ret, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	Throw() {
	    return this.getToken(EzLangParser.Throw, 0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitRet(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LoopStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_loopStat;
    }

	Loop() {
	    return this.getToken(EzLangParser.Loop, 0);
	};

	Number() {
	    return this.getToken(EzLangParser.Number, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	matchExpr() {
	    return this.getTypedRuleContext(MatchExprContext,0);
	};

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitLoopStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




EzLangParser.ProgContext = ProgContext; 
EzLangParser.ProgStatContext = ProgStatContext; 
EzLangParser.HoistingContext = HoistingContext; 
EzLangParser.ImportStatContext = ImportStatContext; 
EzLangParser.StatmentContext = StatmentContext; 
EzLangParser.VariableContext = VariableContext; 
EzLangParser.AssignVarContext = AssignVarContext; 
EzLangParser.DeconstVarContext = DeconstVarContext; 
EzLangParser.DeconstFieldContext = DeconstFieldContext; 
EzLangParser.DeclareDefContext = DeclareDefContext; 
EzLangParser.TypeDefContext = TypeDefContext; 
EzLangParser.TypeContext = TypeContext; 
EzLangParser.TypeFnFieldContext = TypeFnFieldContext; 
EzLangParser.TypeDictFieldContext = TypeDictFieldContext; 
EzLangParser.TypeNameContext = TypeNameContext; 
EzLangParser.StructContext = StructContext; 
EzLangParser.StructFieldContext = StructFieldContext; 
EzLangParser.FnGroupContext = FnGroupContext; 
EzLangParser.FnContext = FnContext; 
EzLangParser.ParamContext = ParamContext; 
EzLangParser.IdContext = IdContext; 
EzLangParser.ExprContext = ExprContext; 
EzLangParser.GetOpContext = GetOpContext; 
EzLangParser.StringContext = StringContext; 
EzLangParser.StringAtomContext = StringAtomContext; 
EzLangParser.TupleContext = TupleContext; 
EzLangParser.TupleFieldContext = TupleFieldContext; 
EzLangParser.ArrayContext = ArrayContext; 
EzLangParser.DictContext = DictContext; 
EzLangParser.DictFieldContext = DictFieldContext; 
EzLangParser.CallContext = CallContext; 
EzLangParser.CalleeContext = CalleeContext; 
EzLangParser.CallFieldContext = CallFieldContext; 
EzLangParser.MatchStatContext = MatchStatContext; 
EzLangParser.MatchFieldContext = MatchFieldContext; 
EzLangParser.ElseFieldContext = ElseFieldContext; 
EzLangParser.MatchExprContext = MatchExprContext; 
EzLangParser.RetContext = RetContext; 
EzLangParser.LoopStatContext = LoopStatContext; 
