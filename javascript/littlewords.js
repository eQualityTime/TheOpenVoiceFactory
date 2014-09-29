
function littlewords(){
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
	links[1][1]="positionwords";
	utterances[2][1]="fun";
	utterances[3][1]="away";
	utterances[4][1]="a";

	utterances[0][2]="all";
	utterances[1][2]="this";
	utterances[2][2]="that";
	utterances[3][2]="is";
	utterances[4][2]="am";

	utterances[0][3]="none";
	utterances[1][3]="to";
	utterances[2][3]="from";
	utterances[3][3]="about";
	utterances[4][3]="be";

	utterances[0][4]="some"; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	utterances[3][4]="at";
	utterances[4][4]="the";

	document.main.src="images/littlewords.jpg";
}
