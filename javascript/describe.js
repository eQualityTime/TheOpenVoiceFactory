
function describe(){
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
	links[1][1]="feelings";
	links[2][1]="colour";
	links[3][1]="shapes";
	links[4][1]="opposites";

	utterances[0][2]="pretty";
	utterances[1][2]="more";
	utterances[2][2]="nice";
	utterances[3][2]="wrong";
	utterances[4][2]="right";

	utterances[0][3]="finished";
	utterances[1][3]="all";
	utterances[2][3]="mean";
	utterances[3][3]="different";
	utterances[4][3]="same";

	utterances[0][4]="problem"; 
	utterances[1][4]="important";
	utterances[2][4]="because";
	utterances[3][4]="idea";
	utterances[4][4]="favorite";

	document.main.src="images/describe.jpg";
}
