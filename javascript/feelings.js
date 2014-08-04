
function feelings(){
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
	keys[1][1]="feelings";
	keys[2][1]="afriad";
	keys[3][1]="nice";
	keys[4][1]="busy";

	keys[0][2]="It is";
	keys[1][2]="board";
	keys[2][2]="funny";
	keys[3][2]="good";
	keys[4][2]="happy";

	keys[0][3]="I am";
	keys[1][3]="tired";
	keys[2][3]="angry";
	keys[3][3]="sad";
	keys[4][3]="sick";

	keys[0][4]="hot"; 
	keys[1][4]="cold";
	keys[2][4]="";
	keys[3][4]="scared";
	keys[4][4]="confused";

	document.main.src="images/feelings.png";
}
