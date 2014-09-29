
function aboutyou(){
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
	utterances[1][1]="What's your name?";
	utterances[2][1]="Where do you live?";
	utterances[3][1]="When's your birthday?";
	utterances[4][1]="How old are you?";

	utterances[0][2]="Who do you live with?";
	utterances[1][2]="Do you have a pet?";
	utterances[2][2]="Tell me about your day?";
	utterances[3][2]="What's your email?";
	utterances[4][2]="Where do you work?";

	utterances[0][3]="What's your mobile number?";
	utterances[1][3]="What music do you like?";
	utterances[2][3]="What films do you like?";
	utterances[3][3]="What's your hobby?";
	utterances[4][3]="What TV do you like?";

	utterances[0][4]="Do you have a disability?"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/aboutyou.jpg";
}
