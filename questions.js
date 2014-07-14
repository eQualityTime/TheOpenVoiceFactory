
function questions(){
var i,j
for(j=0;j<5;j++)
{
for(i=0;i<8;i++)
{
keys[i][j]="link";
links[i][j]="blank";
}
}
keys[0][0]="who";
keys[1][0]="whose";
keys[2][0]="can I";
keys[3][0]="can you";
keys[4][0]="can he";
keys[5][0]="can she";
keys[6][0]="can we";
links[7][0]="1";

keys[0][1]="what";
keys[1][1]="which";
keys[2][1]="do I";
keys[3][1]="do you";
keys[4][1]="dose he";
keys[5][1]="dose she ";
keys[6][1]="do we";
keys[7][1]="do they";


keys[0][2]="where";
keys[1][2]="how";
keys[2][2]="would I";
keys[3][2]="would you";
keys[4][2]="would he";
keys[5][2]="would she";
keys[6][2]="would we";
keys[7][2]="would they";

keys[0][3]="when";
keys[1][3]="how come";
keys[2][3]="could I";
keys[3][3]="could you";
keys[4][3]="could he";
keys[5][3]="could she";
keys[6][3]="could we";
keys[7][3]="could they";

keys[0][4]="why"; 
keys[1][4]="why not";
keys[2][4]="should I";
keys[3][4]="should you";
keys[4][4]="should he";
keys[5][4]="should she";
keys[6][4]="should we"; 
keys[7][4]="should they";

document.main.src="questions.jpg";

}
