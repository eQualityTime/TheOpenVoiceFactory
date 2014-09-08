
function opposites(){
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
	utterances[1][1]="dry";
	utterances[2][1]="wet";
	utterances[3][1]="long";
	utterances[4][1]="short";

	utterances[0][2]="all gone";
	utterances[1][2]="fast";
	utterances[2][2]="slow";
	utterances[3][2]="loud";
	utterances[4][2]="quiet";

	utterances[0][3]="medium";
	utterances[1][3]="big";
	utterances[2][3]="little";
	utterances[3][3]="new";
	utterances[4][3]="old";

	utterances[0][4]="soft"; 
	utterances[1][4]="easy";
	utterances[2][4]="hard";
	utterances[3][4]="clean";
	utterances[4][4]="dirty";

	document.main.src="images/opposites.png";
}
