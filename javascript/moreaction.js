
function moreaction(){
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
	utterances[1][1]="feel";
	utterances[2][1]="read";
	utterances[3][1]="sit";
	utterances[4][1]="stand";

	utterances[0][2]="wait";
	utterances[1][2]="watch";
	utterances[2][2]="work";
	utterances[3][2]="have";
	utterances[4][2]="know";

	utterances[0][3]="play";
	utterances[1][3]="sing";
	utterances[2][3]="sleep";
	utterances[3][3]="talk";
	utterances[4][3]="try";

	utterances[0][4]="win"; 
	utterances[1][4]="lose";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/moreaction.png";
}
