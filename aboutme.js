
function aboutme(){
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
	keys[1][1]="What's your name?";
	keys[2][1]="Where do you live?";
	keys[3][1]="When's your birthday?";
	keys[4][1]="How old are you?";

	keys[0][2]="Who do you live with?";
	keys[1][2]="Do you have a pet?";
	keys[2][2]="Tell me about your day?";
	keys[3][2]="What's your email?";
	keys[4][2]="Where do you work?";

	keys[0][3]="What's your mobile number?";
	keys[1][3]="What music do you like?";
	keys[2][3]="What films do you like?";
	keys[3][3]="What's your hobby?";
	keys[4][3]="What TV do you like?";

	keys[0][4]="Do you have a disability?"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="aboutme.png";
}
