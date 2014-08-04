
function days(){
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
	keys[1][1]="day";
	keys[2][1]="week";
	keys[3][1]="weekend";
	keys[4][1]="night";

	keys[0][2]="Monday";
	keys[1][2]="Tuesday";
	keys[2][2]="Wednesday";
	keys[3][2]="Thursday";
	keys[4][2]="Friday";

	keys[0][3]="Saturday";
	keys[1][3]="Sunday";
	keys[2][3]="this week";
	keys[3][3]="next week";
	keys[4][3]="tonight";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/days.png";
}
