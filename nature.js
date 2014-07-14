
function nature(){
var i,j
for(j=0;j<5;j++)
{
for(i=0;i<8;i++)
{
keys[i][j]="link";
links[i][j]="blank";
}
}
keys[0][0]="branch";
keys[1][0]="bud";
keys[2][0]="bush";
keys[3][0]="dirt";
keys[4][0]="grass";
keys[5][0]="leaf";
keys[6][0]="log";
links[7][0]="7";

keys[0][1]="petal";
keys[1][1]="plant";
keys[2][1]="root";
keys[3][1]="seed";
keys[4][1]="stem";
keys[5][1]="tree";
keys[6][1]="trunk";
keys[7][1]="weed";


keys[0][2]="flower";
keys[1][2]="tornado";
keys[2][2]="foggy";
keys[3][2]="";
keys[4][2]="";
keys[5][2]="";
keys[6][2]="";
keys[7][2]="";

keys[0][3]="nature";
keys[1][3]="blizzard";
keys[2][3]="cloud";
keys[3][3]="flood";
keys[4][3]="hurricane";
keys[5][3]="ice";
keys[6][3]="lightning";
keys[7][3]="moon";

keys[0][4]="mud"; 
keys[1][4]="rainbow";
keys[2][4]="sky";
keys[3][4]="star";
keys[4][4]="snow";
keys[5][4]="storm";
keys[6][4]="thunder"; 
links[7][4]="clear";

document.main.src="nature.jpg";

}
