
function time(){
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
	keys[1][1]="Time";
	keys[2][1]="day";
	links[3][1]="months";
	links[4][1]="specialdays";

	keys[0][2]="yesterday";
	keys[1][2]="today";
	keys[2][2]="tomorrow";
	keys[3][2]="later";
	keys[4][2]="late";

	keys[0][3]="morning";
	keys[1][3]="afternoon";
	keys[2][3]="evening";
	keys[3][3]="now";
	keys[4][3]="never";

	keys[0][4]="again"; 
	keys[1][4]="ready";
	keys[2][4]="hurry";
	keys[3][4]="before";
	keys[4][4]="after";

	document.main.src="time.png";
}
