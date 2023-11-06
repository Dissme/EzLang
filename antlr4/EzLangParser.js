// Generated from java-escape by ANTLR 4.11.1
// jshint ignore: start
import antlr4 from 'antlr4';
import EzLangParserVisitor from './EzLangParserVisitor.js';

const serializedATN = [4,1,91,642,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,5,0,82,8,0,10,0,
12,0,85,9,0,1,0,4,0,88,8,0,11,0,12,0,89,1,0,1,0,1,1,1,1,1,1,1,1,3,1,98,8,
1,1,1,1,1,1,2,1,2,1,2,1,2,3,2,106,8,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,5,3,115,
8,3,10,3,12,3,118,9,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,3,4,128,8,4,1,5,1,
5,1,5,1,6,1,6,1,6,1,6,1,6,1,6,3,6,139,8,6,1,6,1,6,1,6,1,6,1,6,1,6,3,6,147,
8,6,1,7,1,7,1,7,1,7,5,7,153,8,7,10,7,12,7,156,9,7,1,7,1,7,1,7,3,7,161,8,
7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,169,8,7,10,7,12,7,172,9,7,1,7,1,7,1,7,3,7,
177,8,7,1,7,1,7,3,7,181,8,7,1,8,1,8,1,8,1,8,3,8,187,8,8,1,9,1,9,1,9,1,9,
1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,
1,11,5,11,209,8,11,10,11,12,11,212,9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,
11,220,8,11,10,11,12,11,223,9,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,231,
8,11,10,11,12,11,234,9,11,3,11,236,8,11,1,11,1,11,1,11,3,11,241,8,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,5,11,251,8,11,10,11,12,11,254,9,11,1,
12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,3,13,272,8,13,1,14,1,14,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,5,16,
284,8,16,10,16,12,16,287,9,16,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,3,
17,297,8,17,1,17,1,17,1,17,1,17,3,17,303,8,17,1,18,1,18,1,18,1,18,5,18,309,
8,18,10,18,12,18,312,9,18,1,18,1,18,1,19,1,19,1,19,1,19,5,19,320,8,19,10,
19,12,19,323,9,19,3,19,325,8,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,
334,8,19,10,19,12,19,337,9,19,3,19,339,8,19,1,19,1,19,1,19,1,19,1,19,5,19,
346,8,19,10,19,12,19,349,9,19,1,19,3,19,352,8,19,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,3,20,361,8,20,1,20,1,20,1,20,3,20,366,8,20,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,382,8,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,394,8,22,1,22,1,22,1,22,1,22,
1,22,1,22,5,22,402,8,22,10,22,12,22,405,9,22,1,22,1,22,1,22,3,22,410,8,22,
1,22,1,22,1,22,1,22,3,22,416,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,5,22,439,
8,22,10,22,12,22,442,9,22,1,23,1,23,1,23,1,23,1,23,1,23,3,23,450,8,23,1,
23,1,23,3,23,454,8,23,1,23,1,23,1,23,1,23,1,23,3,23,461,8,23,1,23,1,23,1,
23,1,23,5,23,467,8,23,10,23,12,23,470,9,23,1,24,1,24,5,24,474,8,24,10,24,
12,24,477,9,24,1,24,1,24,1,25,4,25,482,8,25,11,25,12,25,483,1,25,1,25,1,
25,1,25,3,25,490,8,25,1,26,1,26,1,26,1,26,1,26,5,26,497,8,26,10,26,12,26,
500,9,26,3,26,502,8,26,1,26,1,26,1,27,1,27,1,27,3,27,509,8,27,1,28,1,28,
1,28,1,28,5,28,515,8,28,10,28,12,28,518,9,28,3,28,520,8,28,1,28,1,28,1,29,
1,29,1,29,1,29,5,29,528,8,29,10,29,12,29,531,9,29,1,29,1,29,1,30,1,30,1,
30,3,30,538,8,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,547,8,30,1,30,1,
30,1,30,1,30,1,30,3,30,554,8,30,1,31,1,31,1,31,1,31,1,31,1,31,3,31,562,8,
31,1,31,1,31,5,31,566,8,31,10,31,12,31,569,9,31,1,32,1,32,1,32,1,32,5,32,
575,8,32,10,32,12,32,578,9,32,3,32,580,8,32,1,32,1,32,1,33,1,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,3,33,593,8,33,1,34,1,34,1,34,1,34,1,34,5,34,600,
8,34,10,34,12,34,603,9,34,1,34,1,34,1,35,1,35,1,35,1,35,1,35,1,35,1,36,1,
36,1,36,1,37,1,37,1,37,1,37,1,37,5,37,621,8,37,10,37,12,37,624,9,37,1,37,
3,37,627,8,37,1,38,1,38,1,38,1,38,1,38,1,38,3,38,635,8,38,1,39,1,39,1,39,
1,39,1,39,1,39,0,4,22,44,46,62,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,
30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,
78,0,11,1,0,40,41,1,0,1,3,2,0,23,35,41,41,1,0,23,39,2,0,19,19,40,40,1,0,
74,76,1,0,70,71,2,0,48,48,51,51,1,0,77,79,3,0,49,50,52,53,55,58,1,0,80,81,
708,0,83,1,0,0,0,2,97,1,0,0,0,4,105,1,0,0,0,6,107,1,0,0,0,8,127,1,0,0,0,
10,129,1,0,0,0,12,146,1,0,0,0,14,180,1,0,0,0,16,186,1,0,0,0,18,188,1,0,0,
0,20,193,1,0,0,0,22,240,1,0,0,0,24,255,1,0,0,0,26,271,1,0,0,0,28,273,1,0,
0,0,30,275,1,0,0,0,32,277,1,0,0,0,34,302,1,0,0,0,36,304,1,0,0,0,38,351,1,
0,0,0,40,365,1,0,0,0,42,367,1,0,0,0,44,415,1,0,0,0,46,449,1,0,0,0,48,471,
1,0,0,0,50,489,1,0,0,0,52,491,1,0,0,0,54,508,1,0,0,0,56,510,1,0,0,0,58,523,
1,0,0,0,60,553,1,0,0,0,62,561,1,0,0,0,64,570,1,0,0,0,66,592,1,0,0,0,68,594,
1,0,0,0,70,606,1,0,0,0,72,612,1,0,0,0,74,626,1,0,0,0,76,634,1,0,0,0,78,636,
1,0,0,0,80,82,3,6,3,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,
0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,86,88,3,2,1,0,87,86,1,0,0,0,88,89,1,0,
0,0,89,87,1,0,0,0,89,90,1,0,0,0,90,91,1,0,0,0,91,92,5,0,0,1,92,1,1,0,0,0,
93,98,3,4,2,0,94,95,5,16,0,0,95,98,3,4,2,0,96,98,3,8,4,0,97,93,1,0,0,0,97,
94,1,0,0,0,97,96,1,0,0,0,98,99,1,0,0,0,99,100,5,85,0,0,100,3,1,0,0,0,101,
106,3,10,5,0,102,106,3,20,10,0,103,106,3,32,16,0,104,106,3,18,9,0,105,101,
1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,5,1,0,0,0,107,
108,5,14,0,0,108,109,3,48,24,0,109,110,5,15,0,0,110,111,5,66,0,0,111,116,
7,0,0,0,112,113,5,54,0,0,113,115,7,0,0,0,114,112,1,0,0,0,115,118,1,0,0,0,
116,114,1,0,0,0,116,117,1,0,0,0,117,119,1,0,0,0,118,116,1,0,0,0,119,120,
5,67,0,0,120,121,5,85,0,0,121,7,1,0,0,0,122,128,3,44,22,0,123,128,3,10,5,
0,124,128,3,76,38,0,125,128,3,68,34,0,126,128,3,78,39,0,127,122,1,0,0,0,
127,123,1,0,0,0,127,124,1,0,0,0,127,125,1,0,0,0,127,126,1,0,0,0,128,9,1,
0,0,0,129,130,7,1,0,0,130,131,3,12,6,0,131,11,1,0,0,0,132,133,5,40,0,0,133,
134,5,61,0,0,134,147,3,22,11,0,135,138,5,40,0,0,136,137,5,61,0,0,137,139,
3,22,11,0,138,136,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,5,59,0,
0,141,147,3,44,22,0,142,143,3,14,7,0,143,144,5,59,0,0,144,145,3,44,22,0,
145,147,1,0,0,0,146,132,1,0,0,0,146,135,1,0,0,0,146,142,1,0,0,0,147,13,1,
0,0,0,148,149,5,66,0,0,149,154,3,16,8,0,150,151,5,54,0,0,151,153,3,16,8,
0,152,150,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,160,
1,0,0,0,156,154,1,0,0,0,157,158,5,54,0,0,158,159,5,84,0,0,159,161,5,40,0,
0,160,157,1,0,0,0,160,161,1,0,0,0,161,162,1,0,0,0,162,163,5,67,0,0,163,181,
1,0,0,0,164,165,5,68,0,0,165,170,3,16,8,0,166,167,5,54,0,0,167,169,3,16,
8,0,168,166,1,0,0,0,169,172,1,0,0,0,170,168,1,0,0,0,170,171,1,0,0,0,171,
176,1,0,0,0,172,170,1,0,0,0,173,174,5,54,0,0,174,175,5,84,0,0,175,177,5,
40,0,0,176,173,1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,5,69,0,0,
179,181,1,0,0,0,180,148,1,0,0,0,180,164,1,0,0,0,181,15,1,0,0,0,182,187,5,
40,0,0,183,184,5,40,0,0,184,185,5,61,0,0,185,187,3,14,7,0,186,182,1,0,0,
0,186,183,1,0,0,0,187,17,1,0,0,0,188,189,5,20,0,0,189,190,5,40,0,0,190,191,
5,59,0,0,191,192,3,22,11,0,192,19,1,0,0,0,193,194,5,12,0,0,194,195,5,41,
0,0,195,196,5,59,0,0,196,197,3,22,11,0,197,21,1,0,0,0,198,199,6,11,-1,0,
199,241,3,28,14,0,200,201,5,64,0,0,201,202,3,22,11,0,202,203,5,65,0,0,203,
241,1,0,0,0,204,205,5,66,0,0,205,210,3,26,13,0,206,207,5,54,0,0,207,209,
3,26,13,0,208,206,1,0,0,0,209,212,1,0,0,0,210,208,1,0,0,0,210,211,1,0,0,
0,211,213,1,0,0,0,212,210,1,0,0,0,213,214,5,67,0,0,214,241,1,0,0,0,215,216,
5,68,0,0,216,221,3,22,11,0,217,218,5,54,0,0,218,220,3,22,11,0,219,217,1,
0,0,0,220,223,1,0,0,0,221,219,1,0,0,0,221,222,1,0,0,0,222,224,1,0,0,0,223,
221,1,0,0,0,224,225,5,69,0,0,225,241,1,0,0,0,226,235,5,64,0,0,227,232,3,
24,12,0,228,229,5,54,0,0,229,231,3,24,12,0,230,228,1,0,0,0,231,234,1,0,0,
0,232,230,1,0,0,0,232,233,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,235,227,
1,0,0,0,235,236,1,0,0,0,236,237,1,0,0,0,237,238,5,65,0,0,238,239,5,45,0,
0,239,241,3,22,11,1,240,198,1,0,0,0,240,200,1,0,0,0,240,204,1,0,0,0,240,
215,1,0,0,0,240,226,1,0,0,0,241,252,1,0,0,0,242,243,10,4,0,0,243,244,5,79,
0,0,244,251,3,22,11,5,245,246,10,7,0,0,246,251,5,63,0,0,247,248,10,5,0,0,
248,249,5,68,0,0,249,251,5,69,0,0,250,242,1,0,0,0,250,245,1,0,0,0,250,247,
1,0,0,0,251,254,1,0,0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,23,1,0,0,0,254,
252,1,0,0,0,255,256,3,42,21,0,256,257,5,61,0,0,257,258,3,22,11,0,258,25,
1,0,0,0,259,260,3,42,21,0,260,261,5,61,0,0,261,262,3,22,11,0,262,272,1,0,
0,0,263,264,5,68,0,0,264,265,3,30,15,0,265,266,5,69,0,0,266,267,5,61,0,0,
267,268,3,22,11,0,268,272,1,0,0,0,269,270,5,84,0,0,270,272,3,28,14,0,271,
259,1,0,0,0,271,263,1,0,0,0,271,269,1,0,0,0,272,27,1,0,0,0,273,274,7,2,0,
0,274,29,1,0,0,0,275,276,7,3,0,0,276,31,1,0,0,0,277,278,5,10,0,0,278,279,
5,41,0,0,279,280,5,66,0,0,280,285,3,34,17,0,281,282,5,54,0,0,282,284,3,34,
17,0,283,281,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,286,
288,1,0,0,0,287,285,1,0,0,0,288,289,5,67,0,0,289,33,1,0,0,0,290,291,5,40,
0,0,291,292,5,61,0,0,292,303,3,22,11,0,293,296,5,40,0,0,294,295,5,61,0,0,
295,297,3,22,11,0,296,294,1,0,0,0,296,297,1,0,0,0,297,298,1,0,0,0,298,299,
5,59,0,0,299,303,3,44,22,0,300,301,5,84,0,0,301,303,5,41,0,0,302,290,1,0,
0,0,302,293,1,0,0,0,302,300,1,0,0,0,303,35,1,0,0,0,304,305,5,64,0,0,305,
310,3,38,19,0,306,307,5,54,0,0,307,309,3,38,19,0,308,306,1,0,0,0,309,312,
1,0,0,0,310,308,1,0,0,0,310,311,1,0,0,0,311,313,1,0,0,0,312,310,1,0,0,0,
313,314,5,65,0,0,314,37,1,0,0,0,315,324,5,64,0,0,316,321,3,40,20,0,317,318,
5,54,0,0,318,320,3,40,20,0,319,317,1,0,0,0,320,323,1,0,0,0,321,319,1,0,0,
0,321,322,1,0,0,0,322,325,1,0,0,0,323,321,1,0,0,0,324,316,1,0,0,0,324,325,
1,0,0,0,325,326,1,0,0,0,326,327,5,65,0,0,327,328,5,45,0,0,328,352,3,44,22,
0,329,338,5,64,0,0,330,335,3,40,20,0,331,332,5,54,0,0,332,334,3,40,20,0,
333,331,1,0,0,0,334,337,1,0,0,0,335,333,1,0,0,0,335,336,1,0,0,0,336,339,
1,0,0,0,337,335,1,0,0,0,338,330,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,
340,341,5,65,0,0,341,347,5,66,0,0,342,343,3,8,4,0,343,344,5,85,0,0,344,346,
1,0,0,0,345,342,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,
348,350,1,0,0,0,349,347,1,0,0,0,350,352,5,67,0,0,351,315,1,0,0,0,351,329,
1,0,0,0,352,39,1,0,0,0,353,354,3,42,21,0,354,355,5,61,0,0,355,356,3,22,11,
0,356,366,1,0,0,0,357,360,3,42,21,0,358,359,5,61,0,0,359,361,3,22,11,0,360,
358,1,0,0,0,360,361,1,0,0,0,361,362,1,0,0,0,362,363,5,59,0,0,363,364,3,44,
22,0,364,366,1,0,0,0,365,353,1,0,0,0,365,357,1,0,0,0,366,41,1,0,0,0,367,
368,7,4,0,0,368,43,1,0,0,0,369,381,6,22,-1,0,370,382,5,8,0,0,371,382,5,9,
0,0,372,382,5,42,0,0,373,382,5,19,0,0,374,382,5,47,0,0,375,382,3,48,24,0,
376,382,3,52,26,0,377,382,3,56,28,0,378,382,3,58,29,0,379,382,3,38,19,0,
380,382,3,36,18,0,381,370,1,0,0,0,381,371,1,0,0,0,381,372,1,0,0,0,381,373,
1,0,0,0,381,374,1,0,0,0,381,375,1,0,0,0,381,376,1,0,0,0,381,377,1,0,0,0,
381,378,1,0,0,0,381,379,1,0,0,0,381,380,1,0,0,0,382,416,1,0,0,0,383,416,
3,46,23,0,384,416,3,62,31,0,385,394,5,71,0,0,386,394,5,73,0,0,387,394,5,
72,0,0,388,394,5,13,0,0,389,390,3,28,14,0,390,391,5,73,0,0,391,394,1,0,0,
0,392,394,5,82,0,0,393,385,1,0,0,0,393,386,1,0,0,0,393,387,1,0,0,0,393,388,
1,0,0,0,393,389,1,0,0,0,393,392,1,0,0,0,394,395,1,0,0,0,395,416,3,44,22,
11,396,397,5,22,0,0,397,403,5,66,0,0,398,399,3,8,4,0,399,400,5,85,0,0,400,
402,1,0,0,0,401,398,1,0,0,0,402,405,1,0,0,0,403,401,1,0,0,0,403,404,1,0,
0,0,404,406,1,0,0,0,405,403,1,0,0,0,406,416,5,67,0,0,407,409,3,70,35,0,408,
410,3,72,36,0,409,408,1,0,0,0,409,410,1,0,0,0,410,416,1,0,0,0,411,412,3,
46,23,0,412,413,5,59,0,0,413,414,3,44,22,1,414,416,1,0,0,0,415,369,1,0,0,
0,415,383,1,0,0,0,415,384,1,0,0,0,415,393,1,0,0,0,415,396,1,0,0,0,415,407,
1,0,0,0,415,411,1,0,0,0,416,440,1,0,0,0,417,418,10,10,0,0,418,419,7,5,0,
0,419,439,3,44,22,11,420,421,10,9,0,0,421,422,7,6,0,0,422,439,3,44,22,10,
423,424,10,8,0,0,424,425,7,7,0,0,425,439,3,44,22,9,426,427,10,7,0,0,427,
428,7,8,0,0,428,439,3,44,22,8,429,430,10,6,0,0,430,431,7,9,0,0,431,439,3,
44,22,7,432,433,10,5,0,0,433,434,7,10,0,0,434,439,3,44,22,6,435,436,10,2,
0,0,436,437,5,46,0,0,437,439,3,44,22,3,438,417,1,0,0,0,438,420,1,0,0,0,438,
423,1,0,0,0,438,426,1,0,0,0,438,429,1,0,0,0,438,432,1,0,0,0,438,435,1,0,
0,0,439,442,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,45,1,0,0,0,442,440,
1,0,0,0,443,444,6,23,-1,0,444,450,5,40,0,0,445,446,5,64,0,0,446,447,3,44,
22,0,447,448,5,65,0,0,448,450,1,0,0,0,449,443,1,0,0,0,449,445,1,0,0,0,450,
468,1,0,0,0,451,453,10,2,0,0,452,454,5,63,0,0,453,452,1,0,0,0,453,454,1,
0,0,0,454,455,1,0,0,0,455,456,5,83,0,0,456,467,5,40,0,0,457,460,10,1,0,0,
458,459,5,63,0,0,459,461,5,83,0,0,460,458,1,0,0,0,460,461,1,0,0,0,461,462,
1,0,0,0,462,463,5,68,0,0,463,464,3,44,22,0,464,465,5,69,0,0,465,467,1,0,
0,0,466,451,1,0,0,0,466,457,1,0,0,0,467,470,1,0,0,0,468,466,1,0,0,0,468,
469,1,0,0,0,469,47,1,0,0,0,470,468,1,0,0,0,471,475,5,43,0,0,472,474,3,50,
25,0,473,472,1,0,0,0,474,477,1,0,0,0,475,473,1,0,0,0,475,476,1,0,0,0,476,
478,1,0,0,0,477,475,1,0,0,0,478,479,5,43,0,0,479,49,1,0,0,0,480,482,5,91,
0,0,481,480,1,0,0,0,482,483,1,0,0,0,483,481,1,0,0,0,483,484,1,0,0,0,484,
490,1,0,0,0,485,486,5,90,0,0,486,487,3,44,22,0,487,488,5,44,0,0,488,490,
1,0,0,0,489,481,1,0,0,0,489,485,1,0,0,0,490,51,1,0,0,0,491,492,5,11,0,0,
492,501,5,68,0,0,493,498,3,54,27,0,494,495,5,54,0,0,495,497,3,54,27,0,496,
494,1,0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,502,1,0,
0,0,500,498,1,0,0,0,501,493,1,0,0,0,501,502,1,0,0,0,502,503,1,0,0,0,503,
504,5,69,0,0,504,53,1,0,0,0,505,506,5,84,0,0,506,509,3,46,23,0,507,509,3,
44,22,0,508,505,1,0,0,0,508,507,1,0,0,0,509,55,1,0,0,0,510,519,5,68,0,0,
511,516,3,54,27,0,512,513,5,54,0,0,513,515,3,54,27,0,514,512,1,0,0,0,515,
518,1,0,0,0,516,514,1,0,0,0,516,517,1,0,0,0,517,520,1,0,0,0,518,516,1,0,
0,0,519,511,1,0,0,0,519,520,1,0,0,0,520,521,1,0,0,0,521,522,5,69,0,0,522,
57,1,0,0,0,523,524,5,66,0,0,524,529,3,60,30,0,525,526,5,54,0,0,526,528,3,
60,30,0,527,525,1,0,0,0,528,531,1,0,0,0,529,527,1,0,0,0,529,530,1,0,0,0,
530,532,1,0,0,0,531,529,1,0,0,0,532,533,5,67,0,0,533,59,1,0,0,0,534,537,
5,40,0,0,535,536,5,61,0,0,536,538,3,22,11,0,537,535,1,0,0,0,537,538,1,0,
0,0,538,539,1,0,0,0,539,540,5,59,0,0,540,554,3,44,22,0,541,542,5,68,0,0,
542,543,3,44,22,0,543,546,5,69,0,0,544,545,5,61,0,0,545,547,3,22,11,0,546,
544,1,0,0,0,546,547,1,0,0,0,547,548,1,0,0,0,548,549,5,59,0,0,549,550,3,44,
22,0,550,554,1,0,0,0,551,552,5,84,0,0,552,554,3,46,23,0,553,534,1,0,0,0,
553,541,1,0,0,0,553,551,1,0,0,0,554,61,1,0,0,0,555,556,6,31,-1,0,556,557,
5,41,0,0,557,562,3,64,32,0,558,559,3,46,23,0,559,560,3,64,32,0,560,562,1,
0,0,0,561,555,1,0,0,0,561,558,1,0,0,0,562,567,1,0,0,0,563,564,10,1,0,0,564,
566,3,64,32,0,565,563,1,0,0,0,566,569,1,0,0,0,567,565,1,0,0,0,567,568,1,
0,0,0,568,63,1,0,0,0,569,567,1,0,0,0,570,579,5,64,0,0,571,576,3,66,33,0,
572,573,5,54,0,0,573,575,3,66,33,0,574,572,1,0,0,0,575,578,1,0,0,0,576,574,
1,0,0,0,576,577,1,0,0,0,577,580,1,0,0,0,578,576,1,0,0,0,579,571,1,0,0,0,
579,580,1,0,0,0,580,581,1,0,0,0,581,582,5,65,0,0,582,65,1,0,0,0,583,593,
3,42,21,0,584,585,3,42,21,0,585,586,5,59,0,0,586,587,3,44,22,0,587,593,1,
0,0,0,588,589,3,42,21,0,589,590,5,59,0,0,590,591,5,63,0,0,591,593,1,0,0,
0,592,583,1,0,0,0,592,584,1,0,0,0,592,588,1,0,0,0,593,67,1,0,0,0,594,595,
5,4,0,0,595,596,5,66,0,0,596,601,3,70,35,0,597,598,5,54,0,0,598,600,3,70,
35,0,599,597,1,0,0,0,600,603,1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,602,
604,1,0,0,0,603,601,1,0,0,0,604,605,5,67,0,0,605,69,1,0,0,0,606,607,5,64,
0,0,607,608,3,44,22,0,608,609,5,65,0,0,609,610,5,62,0,0,610,611,3,74,37,
0,611,71,1,0,0,0,612,613,5,60,0,0,613,614,3,74,37,0,614,73,1,0,0,0,615,627,
3,8,4,0,616,622,5,66,0,0,617,618,3,8,4,0,618,619,5,85,0,0,619,621,1,0,0,
0,620,617,1,0,0,0,621,624,1,0,0,0,622,620,1,0,0,0,622,623,1,0,0,0,623,625,
1,0,0,0,624,622,1,0,0,0,625,627,5,67,0,0,626,615,1,0,0,0,626,616,1,0,0,0,
627,75,1,0,0,0,628,635,5,7,0,0,629,635,5,6,0,0,630,631,5,45,0,0,631,635,
3,44,22,0,632,633,5,21,0,0,633,635,3,44,22,0,634,628,1,0,0,0,634,629,1,0,
0,0,634,630,1,0,0,0,634,632,1,0,0,0,635,77,1,0,0,0,636,637,5,5,0,0,637,638,
5,42,0,0,638,639,5,61,0,0,639,640,3,74,37,0,640,79,1,0,0,0,67,83,89,97,105,
116,127,138,146,154,160,170,176,180,186,210,221,232,235,240,250,252,271,
285,296,302,310,321,324,335,338,347,351,360,365,381,393,403,409,415,438,
440,449,453,460,466,468,475,483,489,498,501,508,516,519,529,537,546,553,
561,567,576,579,592,601,622,626,634];


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
                         "typeDictField", "typeName", "typeNameAll", "struct", 
                         "structField", "fnGroup", "fn", "param", "id", 
                         "expr", "getOp", "string", "stringAtom", "tuple", 
                         "tupleField", "array", "dict", "dictField", "call", 
                         "callee", "callField", "matchStat", "matchField", 
                         "elseField", "matchExpr", "ret", "loopStat" ];

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
    	case 22:
    	    		return this.expr_sempred(localctx, predIndex);
    	case 23:
    	    		return this.getOp_sempred(localctx, predIndex);
    	case 31:
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
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14) {
	            this.state = 80;
	            this.importStat();
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 86;
	            this.progStat();
	            this.state = 89; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4294524926) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 44815) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0));
	        this.state = 91;
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
	        this.state = 97;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 93;
	            this.hoisting();
	            break;

	        case 2:
	            this.state = 94;
	            this.match(EzLangParser.Export);
	            this.state = 95;
	            this.hoisting();
	            break;

	        case 3:
	            this.state = 96;
	            this.statment();
	            break;

	        }
	        this.state = 99;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.variable();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 102;
	            this.typeDef();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 103;
	            this.struct();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 104;
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
	        this.state = 107;
	        this.match(EzLangParser.From);
	        this.state = 108;
	        this.string();
	        this.state = 109;
	        this.match(EzLangParser.Import);
	        this.state = 110;
	        this.match(EzLangParser.LeftBracket);
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
	        while(_la===54) {
	            this.state = 112;
	            this.match(EzLangParser.Comma);
	            this.state = 113;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 119;
	        this.match(EzLangParser.RightBracket);
	        this.state = 120;
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
	        this.state = 127;
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
	            this.state = 122;
	            this.expr(0);
	            break;
	        case 1:
	        case 2:
	        case 3:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.variable();
	            break;
	        case 6:
	        case 7:
	        case 21:
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 124;
	            this.ret();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 125;
	            this.matchStat();
	            break;
	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 126;
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
	        this.state = 129;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & 14) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	        this.state = 130;
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
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 132;
	            this.match(EzLangParser.ID);
	            this.state = 133;
	            this.match(EzLangParser.Conly);
	            this.state = 134;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 135;
	            this.match(EzLangParser.ID);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 136;
	                this.match(EzLangParser.Conly);
	                this.state = 137;
	                this.type(0);
	            }

	            this.state = 140;
	            this.match(EzLangParser.Eq);
	            this.state = 141;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new AssignDconstContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 142;
	            this.deconstVar();
	            this.state = 143;
	            this.match(EzLangParser.Eq);
	            this.state = 144;
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
	        this.state = 180;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 66:
	            localctx = new DeconstDictContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 148;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 149;
	            this.deconstField();
	            this.state = 154;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 150;
	                    this.match(EzLangParser.Comma);
	                    this.state = 151;
	                    this.deconstField(); 
	                }
	                this.state = 156;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
	            }

	            this.state = 160;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 157;
	                this.match(EzLangParser.Comma);
	                this.state = 158;
	                this.match(EzLangParser.Spread);
	                this.state = 159;
	                this.match(EzLangParser.ID);
	            }

	            this.state = 162;
	            this.match(EzLangParser.RightBracket);
	            break;
	        case 68:
	            localctx = new DeconstTupleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 164;
	            this.match(EzLangParser.LS);
	            this.state = 165;
	            this.deconstField();
	            this.state = 170;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 166;
	                    this.match(EzLangParser.Comma);
	                    this.state = 167;
	                    this.deconstField(); 
	                }
	                this.state = 172;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
	            }

	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 173;
	                this.match(EzLangParser.Comma);
	                this.state = 174;
	                this.match(EzLangParser.Spread);
	                this.state = 175;
	                this.match(EzLangParser.ID);
	            }

	            this.state = 178;
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
	        this.state = 186;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182;
	            this.match(EzLangParser.ID);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 183;
	            this.match(EzLangParser.ID);
	            this.state = 184;
	            this.match(EzLangParser.Conly);
	            this.state = 185;
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
	        this.state = 188;
	        this.match(EzLangParser.Declare);
	        this.state = 189;
	        this.match(EzLangParser.ID);
	        this.state = 190;
	        this.match(EzLangParser.Eq);
	        this.state = 191;
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
	        this.state = 193;
	        this.match(EzLangParser.Type);
	        this.state = 194;
	        this.match(EzLangParser.T);
	        this.state = 195;
	        this.match(EzLangParser.Eq);
	        this.state = 196;
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
	        this.state = 240;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new NameTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 199;
	            this.typeName();
	            break;

	        case 2:
	            localctx = new PatternTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 200;
	            this.match(EzLangParser.LP);
	            this.state = 201;
	            this.type(0);
	            this.state = 202;
	            this.match(EzLangParser.RP);
	            break;

	        case 3:
	            localctx = new DictTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 204;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 205;
	            this.typeDictField();
	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 206;
	                this.match(EzLangParser.Comma);
	                this.state = 207;
	                this.typeDictField();
	                this.state = 212;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 213;
	            this.match(EzLangParser.RightBracket);
	            break;

	        case 4:
	            localctx = new TupleTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 215;
	            this.match(EzLangParser.LS);
	            this.state = 216;
	            this.type(0);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 217;
	                this.match(EzLangParser.Comma);
	                this.state = 218;
	                this.type(0);
	                this.state = 223;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 224;
	            this.match(EzLangParser.RS);
	            break;

	        case 5:
	            localctx = new FnTypeContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 226;
	            this.match(EzLangParser.LP);
	            this.state = 235;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 227;
	                this.typeFnField();
	                this.state = 232;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 228;
	                    this.match(EzLangParser.Comma);
	                    this.state = 229;
	                    this.typeFnField();
	                    this.state = 234;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 237;
	            this.match(EzLangParser.RP);
	            this.state = 238;
	            this.match(EzLangParser.Ret);
	            this.state = 239;
	            this.type(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 252;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 250;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,19,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new UnionTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 242;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 243;
	                    this.match(EzLangParser.BitOr);
	                    this.state = 244;
	                    this.type(5);
	                    break;

	                case 2:
	                    localctx = new OptionalTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 245;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 246;
	                    this.match(EzLangParser.Query);
	                    break;

	                case 3:
	                    localctx = new ArrTypeContext(this, new TypeContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_type);
	                    this.state = 247;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 248;
	                    this.match(EzLangParser.LS);
	                    this.state = 249;
	                    this.match(EzLangParser.RS);
	                    break;

	                } 
	            }
	            this.state = 254;
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
	        this.state = 255;
	        this.id();
	        this.state = 256;
	        this.match(EzLangParser.Conly);
	        this.state = 257;
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
	        this.state = 271;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	        case 40:
	            localctx = new TypeDictFieldIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 259;
	            this.id();
	            this.state = 260;
	            this.match(EzLangParser.Conly);
	            this.state = 261;
	            this.type(0);
	            break;
	        case 68:
	            localctx = new TypeDictFieldTypeContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 263;
	            this.match(EzLangParser.LS);
	            this.state = 264;
	            this.typeNameAll();
	            this.state = 265;
	            this.match(EzLangParser.RS);
	            this.state = 266;
	            this.match(EzLangParser.Conly);
	            this.state = 267;
	            this.type(0);
	            break;
	        case 84:
	            localctx = new TypeDictFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 269;
	            this.match(EzLangParser.Spread);
	            this.state = 270;
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
	        this.state = 273;
	        _la = this._input.LA(1);
	        if(!(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & 270335) !== 0))) {
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



	typeNameAll() {
	    let localctx = new TypeNameAllContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, EzLangParser.RULE_typeNameAll);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 275;
	        _la = this._input.LA(1);
	        if(!(((((_la - 23)) & ~0x1f) == 0 && ((1 << (_la - 23)) & 131071) !== 0))) {
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
	    this.enterRule(localctx, 32, EzLangParser.RULE_struct);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 277;
	        this.match(EzLangParser.Struct);
	        this.state = 278;
	        this.match(EzLangParser.T);
	        this.state = 279;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 280;
	        this.structField();
	        this.state = 285;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 281;
	            this.match(EzLangParser.Comma);
	            this.state = 282;
	            this.structField();
	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 288;
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
	    this.enterRule(localctx, 34, EzLangParser.RULE_structField);
	    var _la = 0; // Token type
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,24,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareStructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.match(EzLangParser.ID);
	            this.state = 291;
	            this.match(EzLangParser.Conly);
	            this.state = 292;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignStructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.match(EzLangParser.ID);
	            this.state = 296;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 294;
	                this.match(EzLangParser.Conly);
	                this.state = 295;
	                this.type(0);
	            }

	            this.state = 298;
	            this.match(EzLangParser.Eq);
	            this.state = 299;
	            this.expr(0);
	            break;

	        case 3:
	            localctx = new StructFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 300;
	            this.match(EzLangParser.Spread);
	            this.state = 301;
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
	    this.enterRule(localctx, 36, EzLangParser.RULE_fnGroup);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.match(EzLangParser.LP);
	        this.state = 305;
	        this.fn();
	        this.state = 310;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 306;
	            this.match(EzLangParser.Comma);
	            this.state = 307;
	            this.fn();
	            this.state = 312;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 313;
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
	    this.enterRule(localctx, 38, EzLangParser.RULE_fn);
	    var _la = 0; // Token type
	    try {
	        this.state = 351;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrowFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 315;
	            this.match(EzLangParser.LP);
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 316;
	                this.param();
	                this.state = 321;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 317;
	                    this.match(EzLangParser.Comma);
	                    this.state = 318;
	                    this.param();
	                    this.state = 323;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 326;
	            this.match(EzLangParser.RP);
	            this.state = 327;
	            this.match(EzLangParser.Ret);
	            this.state = 328;
	            this.expr(0);
	            break;

	        case 2:
	            localctx = new BlockFnContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 329;
	            this.match(EzLangParser.LP);
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19 || _la===40) {
	                this.state = 330;
	                this.param();
	                this.state = 335;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                while(_la===54) {
	                    this.state = 331;
	                    this.match(EzLangParser.Comma);
	                    this.state = 332;
	                    this.param();
	                    this.state = 337;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                }
	            }

	            this.state = 340;
	            this.match(EzLangParser.RP);
	            this.state = 341;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 347;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 44815) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 342;
	                this.statment();
	                this.state = 343;
	                this.match(EzLangParser.Eos);
	                this.state = 349;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 350;
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
	    this.enterRule(localctx, 40, EzLangParser.RULE_param);
	    var _la = 0; // Token type
	    try {
	        this.state = 365;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,33,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new DeclareParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 353;
	            this.id();
	            this.state = 354;
	            this.match(EzLangParser.Conly);
	            this.state = 355;
	            this.type(0);
	            break;

	        case 2:
	            localctx = new AssignParamContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 357;
	            this.id();
	            this.state = 360;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 358;
	                this.match(EzLangParser.Conly);
	                this.state = 359;
	                this.type(0);
	            }

	            this.state = 362;
	            this.match(EzLangParser.Eq);
	            this.state = 363;
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
	    this.enterRule(localctx, 42, EzLangParser.RULE_id);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 367;
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
	    const _startState = 44;
	    this.enterRecursionRule(localctx, 44, EzLangParser.RULE_expr, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 415;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LiteralExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 381;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,34,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 370;
	                this.match(EzLangParser.Null);
	                break;

	            case 2:
	                this.state = 371;
	                this.match(EzLangParser.Void);
	                break;

	            case 3:
	                this.state = 372;
	                this.match(EzLangParser.Number);
	                break;

	            case 4:
	                this.state = 373;
	                this.match(EzLangParser.This);
	                break;

	            case 5:
	                this.state = 374;
	                this.match(EzLangParser.PH);
	                break;

	            case 6:
	                this.state = 375;
	                this.string();
	                break;

	            case 7:
	                this.state = 376;
	                this.tuple();
	                break;

	            case 8:
	                this.state = 377;
	                this.array();
	                break;

	            case 9:
	                this.state = 378;
	                this.dict();
	                break;

	            case 10:
	                this.state = 379;
	                this.fn();
	                break;

	            case 11:
	                this.state = 380;
	                this.fnGroup();
	                break;

	            }
	            break;

	        case 2:
	            localctx = new GetExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 383;
	            this.getOp(0);
	            break;

	        case 3:
	            localctx = new CallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 384;
	            this.call(0);
	            break;

	        case 4:
	            localctx = new UnaryExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 393;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 71:
	                this.state = 385;
	                this.match(EzLangParser.Minus);
	                break;
	            case 73:
	                this.state = 386;
	                this.match(EzLangParser.Not);
	                break;
	            case 72:
	                this.state = 387;
	                this.match(EzLangParser.BitNot);
	                break;
	            case 13:
	                this.state = 388;
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
	            case 41:
	                this.state = 389;
	                this.typeName();
	                this.state = 390;
	                this.match(EzLangParser.Not);
	                break;
	            case 82:
	                this.state = 392;
	                this.match(EzLangParser.At);
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 395;
	            this.expr(11);
	            break;

	        case 5:
	            localctx = new CatchExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 396;
	            this.match(EzLangParser.Catch);
	            this.state = 397;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 44815) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 398;
	                this.statment();
	                this.state = 399;
	                this.match(EzLangParser.Eos);
	                this.state = 405;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 406;
	            this.match(EzLangParser.RightBracket);
	            break;

	        case 6:
	            localctx = new ConditionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 407;
	            this.matchField();
	            this.state = 409;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	            if(la_===1) {
	                this.state = 408;
	                this.elseField();

	            }
	            break;

	        case 7:
	            localctx = new AssignExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 411;
	            this.getOp(0);
	            this.state = 412;
	            this.match(EzLangParser.Eq);
	            this.state = 413;
	            this.expr(1);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 440;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 438;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 417;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 418;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 74)) & ~0x1f) == 0 && ((1 << (_la - 74)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 419;
	                    this.expr(11);
	                    break;

	                case 2:
	                    localctx = new AddExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 420;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 421;
	                    _la = this._input.LA(1);
	                    if(!(_la===70 || _la===71)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 422;
	                    this.expr(10);
	                    break;

	                case 3:
	                    localctx = new BitMovExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 423;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 424;
	                    _la = this._input.LA(1);
	                    if(!(_la===48 || _la===51)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 425;
	                    this.expr(9);
	                    break;

	                case 4:
	                    localctx = new BitExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 426;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 427;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 77)) & ~0x1f) == 0 && ((1 << (_la - 77)) & 7) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 428;
	                    this.expr(8);
	                    break;

	                case 5:
	                    localctx = new RelExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 429;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 430;
	                    _la = this._input.LA(1);
	                    if(!(((((_la - 49)) & ~0x1f) == 0 && ((1 << (_la - 49)) & 987) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 431;
	                    this.expr(7);
	                    break;

	                case 6:
	                    localctx = new LogicExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 432;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 433;
	                    _la = this._input.LA(1);
	                    if(!(_la===80 || _la===81)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 434;
	                    this.expr(6);
	                    break;

	                case 7:
	                    localctx = new PipeExprContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_expr);
	                    this.state = 435;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 436;
	                    this.match(EzLangParser.Pipe);
	                    this.state = 437;
	                    this.expr(3);
	                    break;

	                } 
	            }
	            this.state = 442;
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
	    const _startState = 46;
	    this.enterRecursionRule(localctx, 46, EzLangParser.RULE_getOp, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new GetOpIDContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 444;
	            this.match(EzLangParser.ID);
	            break;
	        case 64:
	            localctx = new GetOpExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 445;
	            this.match(EzLangParser.LP);
	            this.state = 446;
	            this.expr(0);
	            this.state = 447;
	            this.match(EzLangParser.RP);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 468;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,45,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 466;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,44,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new GetOpChainContext(this, new GetOpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_getOp);
	                    this.state = 451;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 453;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===63) {
	                        this.state = 452;
	                        this.match(EzLangParser.Query);
	                    }

	                    this.state = 455;
	                    this.match(EzLangParser.Dot);
	                    this.state = 456;
	                    this.match(EzLangParser.ID);
	                    break;

	                case 2:
	                    localctx = new GetOpChainExprContext(this, new GetOpContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, EzLangParser.RULE_getOp);
	                    this.state = 457;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 460;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===63) {
	                        this.state = 458;
	                        this.match(EzLangParser.Query);
	                        this.state = 459;
	                        this.match(EzLangParser.Dot);
	                    }

	                    this.state = 462;
	                    this.match(EzLangParser.LS);
	                    this.state = 463;
	                    this.expr(0);
	                    this.state = 464;
	                    this.match(EzLangParser.RS);
	                    break;

	                } 
	            }
	            this.state = 470;
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
	    this.enterRule(localctx, 48, EzLangParser.RULE_string);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 471;
	        this.match(EzLangParser.Quote);
	        this.state = 475;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===90 || _la===91) {
	            this.state = 472;
	            this.stringAtom();
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 478;
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
	    this.enterRule(localctx, 50, EzLangParser.RULE_stringAtom);
	    try {
	        this.state = 489;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 91:
	            localctx = new StringCharContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 480;
	            		this.match(EzLangParser.Char);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 483; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,47, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 90:
	            localctx = new StringVarContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 485;
	            this.match(EzLangParser.ExpStart);
	            this.state = 486;
	            this.expr(0);
	            this.state = 487;
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
	    this.enterRule(localctx, 52, EzLangParser.RULE_tuple);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(EzLangParser.Tuple);
	        this.state = 492;
	        this.match(EzLangParser.LS);
	        this.state = 501;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 4291308288) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 36623) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 1311637) !== 0)) {
	            this.state = 493;
	            this.tupleField();
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 494;
	                this.match(EzLangParser.Comma);
	                this.state = 495;
	                this.tupleField();
	                this.state = 500;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 503;
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
	    this.enterRule(localctx, 54, EzLangParser.RULE_tupleField);
	    try {
	        this.state = 508;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 84:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 505;
	            this.match(EzLangParser.Spread);
	            this.state = 506;
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
	            this.state = 507;
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
	    this.enterRule(localctx, 56, EzLangParser.RULE_array);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 510;
	        this.match(EzLangParser.LS);
	        this.state = 519;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & 4291308288) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 36623) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 1311637) !== 0)) {
	            this.state = 511;
	            this.tupleField();
	            this.state = 516;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 512;
	                this.match(EzLangParser.Comma);
	                this.state = 513;
	                this.tupleField();
	                this.state = 518;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 521;
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
	    this.enterRule(localctx, 58, EzLangParser.RULE_dict);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 523;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 524;
	        this.dictField();
	        this.state = 529;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 525;
	            this.match(EzLangParser.Comma);
	            this.state = 526;
	            this.dictField();
	            this.state = 531;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 532;
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
	    this.enterRule(localctx, 60, EzLangParser.RULE_dictField);
	    var _la = 0; // Token type
	    try {
	        this.state = 553;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 40:
	            localctx = new DictFieldIDContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 534;
	            this.match(EzLangParser.ID);
	            this.state = 537;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 535;
	                this.match(EzLangParser.Conly);
	                this.state = 536;
	                this.type(0);
	            }

	            this.state = 539;
	            this.match(EzLangParser.Eq);
	            this.state = 540;
	            this.expr(0);
	            break;
	        case 68:
	            localctx = new DictFieldExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 541;
	            this.match(EzLangParser.LS);
	            this.state = 542;
	            this.expr(0);
	            this.state = 543;
	            this.match(EzLangParser.RS);
	            this.state = 546;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===61) {
	                this.state = 544;
	                this.match(EzLangParser.Conly);
	                this.state = 545;
	                this.type(0);
	            }

	            this.state = 548;
	            this.match(EzLangParser.Eq);
	            this.state = 549;
	            this.expr(0);
	            break;
	        case 84:
	            localctx = new DictFieldRestContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 551;
	            this.match(EzLangParser.Spread);
	            this.state = 552;
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
	    const _startState = 62;
	    this.enterRecursionRule(localctx, 62, EzLangParser.RULE_call, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 41:
	            this.state = 556;
	            this.match(EzLangParser.T);
	            this.state = 557;
	            this.callee();
	            break;
	        case 40:
	        case 64:
	            this.state = 558;
	            this.getOp(0);
	            this.state = 559;
	            this.callee();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 567;
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
	                this.state = 563;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 564;
	                this.callee(); 
	            }
	            this.state = 569;
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
	    this.enterRule(localctx, 64, EzLangParser.RULE_callee);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 570;
	        this.match(EzLangParser.LP);
	        this.state = 579;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===19 || _la===40) {
	            this.state = 571;
	            this.callField();
	            this.state = 576;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===54) {
	                this.state = 572;
	                this.match(EzLangParser.Comma);
	                this.state = 573;
	                this.callField();
	                this.state = 578;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 581;
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
	    this.enterRule(localctx, 66, EzLangParser.RULE_callField);
	    try {
	        this.state = 592;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 583;
	            this.id();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 584;
	            this.id();
	            this.state = 585;
	            this.match(EzLangParser.Eq);
	            this.state = 586;
	            this.expr(0);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 588;
	            this.id();
	            this.state = 589;
	            this.match(EzLangParser.Eq);
	            this.state = 590;
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
	    this.enterRule(localctx, 68, EzLangParser.RULE_matchStat);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 594;
	        this.match(EzLangParser.Match);
	        this.state = 595;
	        this.match(EzLangParser.LeftBracket);
	        this.state = 596;
	        this.matchField();
	        this.state = 601;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===54) {
	            this.state = 597;
	            this.match(EzLangParser.Comma);
	            this.state = 598;
	            this.matchField();
	            this.state = 603;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 604;
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
	    this.enterRule(localctx, 70, EzLangParser.RULE_matchField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 606;
	        this.match(EzLangParser.LP);
	        this.state = 607;
	        this.expr(0);
	        this.state = 608;
	        this.match(EzLangParser.RP);
	        this.state = 609;
	        this.match(EzLangParser.DQ);
	        this.state = 610;
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
	    this.enterRule(localctx, 72, EzLangParser.RULE_elseField);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 612;
	        this.match(EzLangParser.DC);
	        this.state = 613;
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
	    this.enterRule(localctx, 74, EzLangParser.RULE_matchExpr);
	    var _la = 0; // Token type
	    try {
	        this.state = 626;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 615;
	            this.statment();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 616;
	            this.match(EzLangParser.LeftBracket);
	            this.state = 622;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while((((_la) & ~0x1f) == 0 && ((1 << _la) & 4293405694) !== 0) || ((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & 44815) !== 0) || ((((_la - 64)) & ~0x1f) == 0 && ((1 << (_la - 64)) & 263061) !== 0)) {
	                this.state = 617;
	                this.statment();
	                this.state = 618;
	                this.match(EzLangParser.Eos);
	                this.state = 624;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 625;
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
	    this.enterRule(localctx, 76, EzLangParser.RULE_ret);
	    try {
	        this.state = 634;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 628;
	            this.match(EzLangParser.Break);
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 629;
	            this.match(EzLangParser.Continue);
	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 630;
	            this.match(EzLangParser.Ret);
	            this.state = 631;
	            this.expr(0);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 632;
	            this.match(EzLangParser.Throw);
	            this.state = 633;
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
	    this.enterRule(localctx, 78, EzLangParser.RULE_loopStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 636;
	        this.match(EzLangParser.Loop);
	        this.state = 637;
	        this.match(EzLangParser.Number);
	        this.state = 638;
	        this.match(EzLangParser.Conly);
	        this.state = 639;
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
EzLangParser.RULE_typeNameAll = 15;
EzLangParser.RULE_struct = 16;
EzLangParser.RULE_structField = 17;
EzLangParser.RULE_fnGroup = 18;
EzLangParser.RULE_fn = 19;
EzLangParser.RULE_param = 20;
EzLangParser.RULE_id = 21;
EzLangParser.RULE_expr = 22;
EzLangParser.RULE_getOp = 23;
EzLangParser.RULE_string = 24;
EzLangParser.RULE_stringAtom = 25;
EzLangParser.RULE_tuple = 26;
EzLangParser.RULE_tupleField = 27;
EzLangParser.RULE_array = 28;
EzLangParser.RULE_dict = 29;
EzLangParser.RULE_dictField = 30;
EzLangParser.RULE_call = 31;
EzLangParser.RULE_callee = 32;
EzLangParser.RULE_callField = 33;
EzLangParser.RULE_matchStat = 34;
EzLangParser.RULE_matchField = 35;
EzLangParser.RULE_elseField = 36;
EzLangParser.RULE_matchExpr = 37;
EzLangParser.RULE_ret = 38;
EzLangParser.RULE_loopStat = 39;

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

	typeNameAll() {
	    return this.getTypedRuleContext(TypeNameAllContext,0);
	};

	RS() {
	    return this.getToken(EzLangParser.RS, 0);
	};

	Conly() {
	    return this.getToken(EzLangParser.Conly, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
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



class TypeNameAllContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = EzLangParser.RULE_typeNameAll;
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

	accept(visitor) {
	    if ( visitor instanceof EzLangParserVisitor ) {
	        return visitor.visitTypeNameAll(this);
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
EzLangParser.TypeNameAllContext = TypeNameAllContext; 
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
