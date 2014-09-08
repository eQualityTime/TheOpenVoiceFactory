
function people(){
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
	utterances[1][1]="people";
	links[2][1]="friends";
	links[3][1]="scwfriends";
	links[4][1]="supportstaff";

	utterances[0][2]="I'm";
	utterances[1][2]="me";
	utterances[2][2]="my";
	utterances[3][2]="mine";
	links[4][2]="educationstaff";

	utterances[0][3]="we";
	utterances[1][3]="they";
	utterances[2][3]="boy";
	utterances[3][3]="girl";
	links[4][3]="job";

	utterances[0][4]="it"; 
	utterances[1][4]="you";
	utterances[2][4]="he";
	utterances[3][4]="she";
	links[4][4]="family";

	document.main.src="images/people.png";
}

