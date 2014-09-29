
function transport(){
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
	utterances[1][1]="transport";
	utterances[2][1]="car";
	utterances[3][1]="train";
	utterances[4][1]="bus";

	utterances[0][2]="caravan";
	utterances[1][2]="fire engine";
	utterances[2][2]="ambulance";
	utterances[3][2]="ship";
	utterances[4][2]="airplane";

	utterances[0][3]="tractor";
	utterances[1][3]="lorry";
	utterances[2][3]="motor home";
	utterances[3][3]="bike";
	utterances[4][3]="police car";

	utterances[0][4]="rowing boat"; 
	utterances[1][4]="bin lorry";
	utterances[2][4]="taxi";
	utterances[3][4]="underground";
	utterances[4][4]="";

	document.main.src="images/transport.jpg";
}
