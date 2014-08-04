
function months(){
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
	keys[1][1]="month";
	keys[2][1]="this month";
	keys[3][1]="next month";
	keys[4][1]="last month";

	keys[0][2]="January";
	keys[1][2]="February";
	keys[2][2]="March";
	keys[3][2]="April";
	keys[4][2]="May";

	keys[0][3]="June";
	keys[1][3]="July";
	keys[2][3]="Augst";
	keys[3][3]="September";
	keys[4][3]="October";

	keys[0][4]="November"; 
	keys[1][4]="December";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/months.png";
}
