
function guesswho(){
var i,j
for(j=0;j<5;j++)
{
for(i=0;i<8;i++)
{
keys[i][j]="link";
links[i][j]="blank";
}
}
links[0][0]="2";
links[1][0]="2";
links[2][0]="chat";
links[3][0]="chat";
links[4][0]="college";
links[5][0]="leisure";
links[6][0]="leisure";
links[7][0]="ecu";

links[0][1]="gwpeople";
keys[1][1]="";
keys[2][1]="";
keys[3][1]="";
keys[4][1]="";
keys[5][1]="";
keys[6][1]="";
links[7][1]="leisure";


keys[0][2]="Is it a man?";
keys[1][2]="Does it wear glasses?";
keys[2][2]="Does it have mustache?";
keys[3][2]="Does it have a beard?";
keys[4][2]="Does it have brown hair?";
keys[5][2]="Does it have blonde hair?";
keys[6][2]="Does it have red hair?";
keys[7][2]="Is it frowning?";

keys[0][3]="Is it a woman?";
keys[1][3]="Does it wear a hat?";
keys[2][3]="Does it have brown eyes?";
keys[3][3]="Does it have blue eyes?";
keys[4][3]="Is it bald?";
keys[5][3]="Does it have a big nose?";
keys[6][3]="Does it have earings?";
keys[7][3]="Does it have a smile?";

keys[0][4]=""; 
keys[1][4]="";
keys[2][4]="";
keys[3][4]="";
keys[4][4]="";
keys[5][4]="";
keys[6][4]=""; 
links[7][4]="clear";

document.main.src="guesswho.jpg";

}
