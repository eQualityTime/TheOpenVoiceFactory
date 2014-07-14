
function inside(){
var i,j
for(j=0;j<5;j++)
{
for(i=0;i<8;i++)
{
keys[i][j]="link";
links[i][j]="blank";
}
}
keys[0][0]="attic";
keys[1][0]="basement";
keys[2][0]="cafeteria";
keys[3][0]="classroom";
keys[4][0]="cupboard";
keys[5][0]="deck";
keys[6][0]="den";
links[7][0]="8";

keys[0][1]="lift";
keys[1][1]="floor";
keys[2][1]="gym";
keys[3][1]="hall";
keys[4][1]="kitchen";
keys[5][1]="lady's room";
keys[6][1]="my flat";
keys[7][1]="house";


keys[0][2]="bathroom";
keys[1][2]="library";
keys[2][2]="lunch room";
keys[3][2]="men's room";
keys[4][2]="";
keys[5][2]="patio";
keys[6][2]="porch";
keys[7][2]="garage";

keys[0][3]="bedroom";
keys[1][3]="escalator";
keys[2][3]="fire";
keys[3][3]="under";
keys[4][3]="cave";
keys[5][3]="doctors";
keys[6][3]="chemist";
keys[7][3]="changing rooms";

keys[0][4]="cinema"; 
keys[1][4]="office";
keys[2][4]="the pub";
keys[3][4]="toilet";
keys[4][4]="hair dressers";
keys[5][4]="swimming baths";
keys[6][4]="the bar"; 
links[7][4]="clear";

document.main.src="inside.jpg";

}
