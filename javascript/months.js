
function months(){
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
	utterances[1][1]="month";
	utterances[2][1]="this month";
	utterances[3][1]="next month";
	utterances[4][1]="last month";

	utterances[0][2]="January";
	utterances[1][2]="February";
	utterances[2][2]="March";
	utterances[3][2]="April";
	utterances[4][2]="May";

	utterances[0][3]="June";
	utterances[1][3]="July";
	utterances[2][3]="August";
	utterances[3][3]="September";
	utterances[4][3]="October";

	utterances[0][4]="November"; 
	utterances[1][4]="December";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/months.png";
}
