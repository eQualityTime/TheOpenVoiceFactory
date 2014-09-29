
function shops(){
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
	utterances[1][1]="shop";
	utterances[2][1]="supermarket";
	utterances[3][1]="butchers";
	utterances[4][1]="shopping centre";

	utterances[0][2]="bakers";
	utterances[1][2]="veg shop";
	utterances[2][2]="department store";
	utterances[3][2]="clothes shop";
	utterances[4][2]="music shop";

	utterances[0][3]="market";
	utterances[1][3]="coffee shop";
	utterances[2][3]="drive through";
	utterances[3][3]="pharmacy";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/shops.jpg";
}
