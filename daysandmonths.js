
function daysandmonths(){
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

keys[0][1]="Today is:";
keys[1][1]="Monday";
keys[2][1]="Tuesday";
keys[3][1]="";
keys[4][1]="January";
keys[5][1]="February";
keys[6][1]="March";
links[7][1]="college";


keys[0][2]="Yesterday was:";
keys[1][2]="Wednesday ";
keys[2][2]="Thursday";
keys[3][2]="";
keys[4][2]="April";
keys[5][2]="May";
keys[6][2]="June";
links[7][2]="deleteword";

keys[0][3]="Tomorrow is: ";
keys[1][3]="Friday";
keys[2][3]="Saturday";
keys[3][3]="";
keys[4][3]="July";
keys[5][3]="August";
keys[6][3]="September";
keys[7][3]="";

keys[0][4]=""; 
keys[1][4]="Sunday";
keys[2][4]="";
keys[3][4]="";
keys[4][4]="October";
keys[5][4]="November";
keys[6][4]="December"; 
links[7][4]="Numbers";

document.main.src="daysandmonths.jpg";

}
