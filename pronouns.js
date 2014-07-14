
function pronouns(){
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
keys[1][0]="you";
keys[2][0]="he";
keys[3][0]="she";
keys[4][0]="it";
keys[5][0]="we";
keys[6][0]="they";
links[7][0]="1";

keys[0][1]="my";
keys[1][1]="your";
keys[2][1]="his";
keys[3][1]="hers";
keys[4][1]="its";
keys[5][1]="us";
keys[6][1]="their";


keys[0][2]="me";
keys[1][2]="your";
keys[2][2]="him";
keys[3][2]="her";

keys[5][2]="our";
keys[6][2]="them";

keys[0][3]="myself";
keys[1][3]="yourself";
keys[2][3]="himself";
keys[3][3]="herself";
keys[4][3]="itself";
keys[5][3]="ourselves";
keys[6][3]="themselves";

keys[0][4]="mine"; 
keys[1][4]="yourselves";
keys[5][4]="ours";
keys[6][4]="theirs"; 

document.main.src="pronouns.jpg";

}
