
function specialdays(){
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
	utterances[1][1]="special day";
	utterances[2][1]="new year";
	utterances[3][1]="valentines day";
	utterances[4][1]="bank holiday";

	utterances[0][2]="easter";
	utterances[1][2]="birthday";
	utterances[2][2]="holiday";
	utterances[3][2]="wedding";
	utterances[4][2]="bonfire night";

	utterances[0][3]="halloween";
	links[1][3]="christmas";
	utterances[2][3]="party";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/specialdays.jpg";
}