
function timetable(){
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

keys[0][1]="";
keys[1][1]="Monday";
keys[2][1]="Tuesday";
keys[3][1]="Wednesday";
keys[4][1]="Thursday";
keys[5][1]="Friday";
keys[6][1]="";
links[7][1]="college";


keys[0][2]="Session 1&2";
keys[1][2]="Fine art";
keys[2][2]="Enviromental Art";
keys[3][2]="Catering";
keys[4][2]="Music/dance";
keys[5][2]="Performance";
keys[6][2]="Tipi";
keys[7][2]="";

keys[0][3]="Session 3";
keys[1][3]="Publishing";
keys[2][3]="Dance";
keys[3][3]="P. D.";
keys[4][3]="Creative writing";
keys[5][3]="P. D.";
keys[6][3]="";
links[7][3]="delete";

keys[0][4]="Evening Session"; 
keys[1][4]="NWT";
keys[2][4]="";
keys[3][4]="Sign & Sing";
keys[4][4]="Beatbox bonanza";
keys[5][4]="";
keys[6][4]=""; 
links[7][4]="clear";

document.main.src="timetable.jpg";

}
