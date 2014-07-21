
function page1(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";

	keys[0][1]="hello";
	keys[1][1]="I want to talk to you";
	keys[2][1]="Chatting";
	links[3][1]="questions";
	links[4][1]="food";

	keys[0][2]="I";
	links[1][2]="people";
	keys[2][2]="Personal care";
	links[3][2]="littlewords";
	keys[4][2]="My day";

	keys[0][3]="Action words";
	keys[1][3]="Go";
	keys[2][3]="Want";
	links[3][3]="describe";
	keys[4][3]="Things";

	links[0][4]="clear";
	links[1][4]="time";
	links[2][4]="places";
	keys[3][4]="Leisure";
	links[4][4]="deleteword";

	document.main.src="page1.png";

}
