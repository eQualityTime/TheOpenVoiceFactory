
function chatting(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="aboutme";
	links[2][1]="wml";
	keys[3][1]="I can't find what I want to say";
	keys[4][1]="bye";

	keys[0][2]="I'm fine";
	keys[1][2]="ok";
	keys[2][2]="I'm not so good";
	keys[3][2]="please";
	keys[4][2]="Thank you";

	keys[0][3]="sorry";
	keys[1][3]="Execuse me";
	keys[2][3]="maybe";
	keys[3][3]="really";
	keys[4][3]="I don't know";

	links[0][4]="mystories"; 
	keys[1][4]="I love you";
	keys[2][4]="but";
	keys[3][4]="ouch ";
	keys[4][4]="so";

	document.main.src="images/chatting.png";
}
