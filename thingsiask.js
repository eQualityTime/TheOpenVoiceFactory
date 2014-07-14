
function thingsiask(){
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

links[0][1]="aboutyou";
links[1][1]="aboutyou";
links[2][1]="thinksiask";
links[3][1]="commentsandinformation";
links[4][1]="commentsandinformation";
links[5][1]="mannersandgreetings";
links[6][1]="sillythingstosay";
links[7][1]="sillythingstosay";


keys[0][2]="who's that?";
keys[1][2]="what's that?";
keys[2][2]="when are we going?";
keys[3][2]="where is it?";
keys[4][2]="why not?";
keys[5][2]="how come?";
keys[6][2]="can i do it again?";
links[7][2]="1";

keys[0][3]="can i have some more, please?";
keys[1][3]="can i go outside?";
keys[2][3]="what time is it?";
keys[3][3]="what is there to eat?";
keys[4][3]="What can I have to drink?";
keys[5][3]="Where are we going?";
keys[6][3]="Want to dance?";
keys[7][3]="";

keys[0][4]="Help me"; 
keys[1][4]="Can I help you?";
keys[2][4]="Put me on the floor";
keys[3][4]="Can I get out of my chair?";
keys[4][4]="I want to do something else";
keys[5][4]="Can i have a hug?";
keys[6][4]=""; 
links[7][4]="clear";

document.main.src="thingsiask.jpg";

}
