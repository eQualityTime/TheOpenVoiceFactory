
function educationstaff(){
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
	utterances[1][1]="Educational staff";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/educationstaff.png";
}
