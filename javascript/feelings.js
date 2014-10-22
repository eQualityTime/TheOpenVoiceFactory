
function feelings(){
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
	utterances[1][1]="feelings";
	utterances[2][1]="afraid";
	utterances[3][1]="safe";
	utterances[4][1]="busy";

	utterances[0][2]="It is";
	utterances[1][2]="board";
	utterances[2][2]="funny";
	utterances[3][2]="good";
	utterances[4][2]="happy";

	utterances[0][3]="I am";
	utterances[1][3]="tired";
	utterances[2][3]="angry";
	utterances[3][3]="sad";
	utterances[4][3]="sick";

	utterances[0][4]="hot"; 
	utterances[1][4]="cold";
	utterances[2][4]="bad";
	utterances[3][4]="scared";
	utterances[4][4]="confused";

	document.main.src="images/feelings.jpg";
}
