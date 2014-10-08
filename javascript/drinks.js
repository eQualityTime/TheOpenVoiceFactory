
function drinks(){
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
	utterances[1][1]="drink";
	utterances[2][1]="coffee";
	utterances[3][1]="tea";
	utterances[4][1]="hot chocolate";


	links[0][2]="pint";
	utterances[1][2]="milk";
	utterances[2][2]="water";
	utterances[3][2]="";
	utterances[4][2]="";

	links[0][3]="juice";
	utterances[1][3]="smoothie";
	links[1][3]="flavour";
	links[2][3]="milkshake";
	links[3][3]="fizzydrinks";
	links[4][3]="alcohol";

	utterances[0][4]=""; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/drinks.jpg";

}
