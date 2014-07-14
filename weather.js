
function weather(){
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
keys[4][0]="";
links[5][0]="leisure";
links[6][0]="leisure";
links[7][0]="ecu";

links[0][1]="myproject";
links[1][1]="calculator";
keys[2][1]="it is";
keys[3][1]="sunny";
keys[4][1]="hot";
keys[5][1]="";
keys[6][1]="Summer";
links[7][1]="college";

keys[0][2]="Scrap Book";
links[1][2]="numbers";
keys[2][2]="windy";
keys[3][2]="foggy";
keys[4][2]="cold";
keys[5][2]="";
keys[6][2]="Autumn";
keys[7][2]="and";

links[0][3]="clear";
links[1][3]="catering";
keys[2][3]="rainy";
keys[3][3]="cloudy";
keys[4][3]="warm";
keys[5][3]="";
keys[6][3]="winter";
keys[7][3]="";

links[0][4]="classmates"; 
keys[1][4]="Subject 4";
keys[2][4]="Snowy";
links[3][4]="";
keys[4][4]="icy";
keys[5][4]="";
keys[6][4]="spring"; 
links[7][4]="delete";
document.main.src="weather.jpg";
}
