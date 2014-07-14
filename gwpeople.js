
function gwpeople(){
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

keys[0][1]="Alex";
keys[1][1]="Alfred";
keys[2][1]="Anita";
keys[3][1]="Anne";
keys[4][1]="Bernard";
links[5][1]="guesswho";
keys[6][1]="";
links[7][1]="leisure";


keys[0][2]="Bill";
keys[1][2]="Charles";
keys[2][2]="Claire";
keys[3][2]="David";
keys[4][2]="Eric";
keys[5][2]="";
keys[6][2]="Does it have red hair?";
keys[7][2]="Is it frowning?";

keys[0][3]="Frans";
keys[1][3]="George";
keys[2][3]="Herman";
keys[3][3]="Maria";
keys[4][3]="Max";
keys[5][3]="";
keys[6][3]="";
keys[7][3]="";

keys[0][4]="Peter"; 
keys[1][4]="Robert";
keys[2][4]="Sam";
keys[3][4]="Susan";
keys[4][4]="Tom";
keys[5][4]="";
keys[6][4]=""; 
links[7][4]="clear";

document.main.src="gwpeople.jpg";

}
