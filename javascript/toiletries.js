
function toiletries(){
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
	utterances[1][1]="toiletries";
	utterances[2][1]="soap";
	utterances[3][1]="toothbrush";
	utterances[4][1]="toothpaste";

	utterances[0][2]="bubble bath";
	utterances[1][2]="deodorant";
	utterances[2][2]="shampoo";
	utterances[3][2]="conditioner";
	utterances[4][2]="Make-up";

	utterances[0][3]="razor";
	utterances[1][3]="shaving foam";
	utterances[2][3]="aftershave";
	utterances[3][3]="toilet paper";
	utterances[4][3]="sanitary items";

	utterances[0][4]="hairdryer"; 
	utterances[1][4]="comb";
	utterances[2][4]="brush";
	utterances[3][4]="hair spray";
	utterances[4][4]="hair dye";

	document.main.src="images/toiletries.png";
}
