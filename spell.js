
function spell(){
var i,j
for(j=0;j<5;j++)
{
for(i=0;i<8;i++)
{
keys[i][j]="link";
links[i][j]="blank";
}
}

keys[0][0]="I";
keys[1][0]="I";
keys[2][0]="I";
keys[3][0]="I";
keys[4][0]="you";
keys[5][0]="you";
links[6][0]="backspace";
links[7][0]="1";


keys[0][1]="a";
keys[1][1]="b";
keys[2][1]="c";
keys[3][1]="d";
keys[4][1]="e";
keys[5][1]="f";
keys[6][1]="g";
links[7][1]="1";

keys[0][2]="h";
keys[1][2]="i";
keys[2][2]="j";
keys[3][2]="k";
keys[4][2]="l";
keys[5][2]="m";
keys[6][2]="n";
links[7][2]="deleteword";


keys[0][3]="o";
keys[1][3]="p";
keys[2][3]="q";
keys[3][3]="r";
keys[4][3]="s";
keys[5][3]="t";
keys[6][3]="u";
links[7][3]="numbers";

links[0][4]="shift";
links[1][4]="space";
keys[2][4]="v";
keys[3][4]="w";
keys[4][4]="x";
keys[5][4]="y";
keys[6][4]="z";
links[7][4]="clear";

document.main.src="spell.jpg";

}
