
function describe(){
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
	links[1][1]="feelings";
	links[2][1]="colour";
	links[3][1]="shapes";
	links[4][1]="opposites";

	keys[0][2]="pretty";
	keys[1][2]="more";
	keys[2][2]="nice";
	keys[3][2]="wrong";
	keys[4][2]="right";

	keys[0][3]="finished";
	keys[1][3]="all";
	keys[2][3]="mean";
	keys[3][3]="different";
	keys[4][3]="same";

	keys[0][4]="problem"; 
	keys[1][4]="important";
	keys[2][4]="because";
	keys[3][4]="idea";
	keys[4][4]="favorite";

	document.main.src="describe.png";
}
