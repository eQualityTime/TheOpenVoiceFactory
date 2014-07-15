
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
	keys[3][1]="Questions";
	links[4][1]="food";

	keys[0][2]="I";
	keys[1][2]="People";
	keys[2][2]="Personal care";
	keys[3][2]="Little words";
	keys[4][2]="My day";

	keys[0][3]="Go";
	keys[1][3]="Want";
	keys[2][3]="Action words";
	links[3][3]="describe";
	keys[4][3]="Things";

	links[0][4]="clear";
	keys[1][4]="Time";
	keys[2][4]="Places";
	keys[3][4]="Leisure";
	links[4][4]="deleteword";

	document.main.src="page1.jpg";

}
