
function numbers(){
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
keys[2][0]="It";
keys[3][0]="It";
keys[4][0]="you";
keys[5][0]="you";
links[6][0]="backspace";
links[7][0]="1";

keys[0][1]="1";
keys[1][1]="2";
keys[2][1]="3";
keys[3][1]="4";
keys[4][1]=".";
keys[5][1]="?";
keys[6][1]="!";
links[7][1]="spell";


keys[0][2]="5";
keys[1][2]="6";
keys[2][2]="7";
keys[3][2]="8";
keys[4][2]="'";
keys[5][2]="'";
keys[6][2]="";
keys[7][2]="";

keys[0][3]="9";
keys[1][3]="0";
keys[2][3]="00";
keys[3][3]="(";
keys[4][3]=")";
keys[5][3]="\"";
keys[6][3]="$";
links[7][3]="clear";

keys[0][4]=""; 
keys[1][4]="";
keys[2][4]="";
keys[3][4]="";
keys[4][4]="";
keys[5][4]="";
keys[6][4]=""; 
keys[7][4]="";

document.main.src="numbers.jpg";

}
