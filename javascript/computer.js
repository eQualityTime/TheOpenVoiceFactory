
function computer(){
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
	utterances[1][1]="computer";
	utterances[2][1]="mouse";
	utterances[3][1]="keyboard";
	utterances[4][1]="USB stick";

	utterances[0][2]="printer";
	utterances[1][2]="email";
	utterances[2][2]="iphone";
	utterances[3][2]="monitor";
	utterances[4][2]="website";

	utterances[0][3]="ipod";
	utterances[1][3]="speakers";
	utterances[2][3]="joystick";
	utterances[3][3]="touch screen";
	utterances[4][3]="extension lead";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="charger";

	document.main.src="images/computer.jpg";
}
