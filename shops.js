
function shops(){
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
	keys[1][1]="shop";
	keys[2][1]="supermarket";
	keys[3][1]="butchers";
	keys[4][1]="shopping centre";

	keys[0][2]="bakers";
	keys[1][2]="veg shop";
	keys[2][2]="department store";
	keys[3][2]="clothes shop";
	keys[4][2]="music shop";

	keys[0][3]="market";
	keys[1][3]="coffee shop";
	keys[2][3]="drive through";
	keys[3][3]="pharmacy";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="shops.png";
}
