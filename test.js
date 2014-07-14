
function test(){
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

keys[0][1]="1";
keys[1][1]="2";
keys[2][1]="3";
keys[3][1]="4";
keys[4][1]="A";
keys[5][1]=".";
keys[6][1]="true";
links[7][1]="college";


keys[0][2]="5";
keys[1][2]="6";
keys[2][2]="7";
keys[3][2]="8";
keys[4][2]="B";
keys[5][2]=" ";
keys[6][2]="false";
links[7][2]="delete";

keys[0][3]="9";
keys[1][3]="10";
keys[2][3]="11";
keys[3][3]="12";
keys[4][3]="C";
keys[5][3]="";
keys[6][3]="";
keys[7][3]="";

keys[0][4]="13"; 
keys[1][4]="14";
keys[2][4]="15";
keys[3][4]="0";
keys[4][4]="D";
keys[5][4]="E";
keys[6][4]=""; 
links[7][4]="clear";

document.main.src="test.jpg";

}
