
function time(){
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
	utterances[1][1]="Time";
	links[2][1]="days";
	links[3][1]="months";
	links[4][1]="specialdays";

	utterances[0][2]="yesterday";
	utterances[1][2]="today";
	utterances[2][2]="tomorrow";
	utterances[3][2]="later";
	utterances[4][2]="late";

	utterances[0][3]="morning";
	utterances[1][3]="afternoon";
	utterances[2][3]="evening";
	utterances[3][3]="now";
	utterances[4][3]="never";

	utterances[0][4]="again"; 
	utterances[1][4]="ready";
	utterances[2][4]="hurry";
	utterances[3][4]="before";
	utterances[4][4]="after";

	document.main.src="images/time.jpg";
}
