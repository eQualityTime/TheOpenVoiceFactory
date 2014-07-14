
function relationships(){
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

keys[0][1]="friend";
keys[1][1]="boyfriend";
keys[2][1]="girlfriend";
keys[3][1]="husband";
keys[4][1]="wife";
keys[5][1]="parents";
keys[6][1]="children";
links[7][1]="sexuality";


keys[0][2]="single";
keys[1][2]="just friends";
keys[2][2]="crush";
keys[3][2]="seeing";
keys[4][2]="engaged";
keys[5][2]="marry";
keys[6][2]="cheat";
keys[7][2]="break up";

keys[0][3]="stranger";
keys[1][3]="familiar";
keys[2][3]="friend";
keys[3][3]="somebody you like";
keys[4][3]="somebody you fancy";
keys[5][3]="loves you";
keys[6][3]="somebody you love";
keys[7][3]="baby";

keys[0][4]="smile"; 
keys[1][4]="say hello";
keys[2][4]="shake hands";
keys[3][4]="hug";
keys[4][4]="kiss on the cheek";
keys[5][4]="kiss on the lips";
keys[6][4]="intimate touch"; 
keys[7][4]="sex";

document.main.src="relationships.jpg";

}
