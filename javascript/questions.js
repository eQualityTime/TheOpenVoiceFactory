
function questions(){
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
	keys[1][1]="who";
	keys[2][1]="why";
	keys[3][1]="when";
	keys[4][1]="could";

	keys[0][2]="what";
	keys[1][2]="how";
	keys[2][2]="where";
	keys[3][2]="which";
	keys[4][2]="would";

	keys[0][3]="how much?";
	keys[1][3]="can I see that?";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="should";

	keys[0][4]="how are you?"; 
	keys[1][4]="What have you been doing?";
	keys[2][4]="What do you think?";
	keys[3][4]="What's next?";
	keys[4][4]="What's that?";

	document.main.src="images/questions.png";
}
