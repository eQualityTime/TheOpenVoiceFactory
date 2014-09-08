
function snack(){
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
	utterances[1][1]="snack";
	utterances[2][1]="raison";
	utterances[3][1]="ice lolly";
	links[3][1]="flavour";
	utterances[4][1]="cake";


	utterances[0][2]="fruit";
	utterances[1][2]="cream";
	utterances[2][2]="custard";
	utterances[3][2]="yoghurt";
	links[3][2]="flavour";
	utterances[4][2]="crisps";

	utterances[0][3]="sweets";
	utterances[1][3]="candy floss";
	utterances[2][3]="pie";
	utterances[3][3]="chocolate";
	utterances[4][3]="ice cream";
	links[4][3]="flavour";

	utterances[0][4]="cup cake"; 
	utterances[1][4]="rice cake";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/snack.png";
}
