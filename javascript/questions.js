
function questions(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="who";
	utterances[2][1]="why";
	utterances[3][1]="when";
	utterances[4][1]="could";

	utterances[0][2]="what";
	utterances[1][2]="how";
	utterances[2][2]="where";
	utterances[3][2]="which";
	utterances[4][2]="would";

	utterances[0][3]="how much?";
	utterances[1][3]="can I see that?";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="should";

	utterances[0][4]="how are you?"; 
	utterances[1][4]="What have you been doing?";
	utterances[2][4]="What do you think?";
	utterances[3][4]="What's next?";
	utterances[4][4]="What's that?";

	document.main.src="images/questions.png";
}
