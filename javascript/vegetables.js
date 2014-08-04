
function vegetables(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	links[1][1]="vegtables";
	keys[2][1]="potato";
	keys[3][1]="aborigine";
	keys[4][1]="broccali";


	keys[0][2]="butternut squash";
	keys[1][1]="cabbage";
	keys[2][2]="cauliflower";
	keys[3][2]="courgette";
	keys[4][2]="carrot";

	keys[0][3]="leek";
	keys[1][3]="asparagus";
	keys[2][3]="peas";
	keys[3][3]="onion";
	keys[4][3]="green beans";

	keys[0][4]="pumpkin"; 
	keys[1][4]="mushroom";
	keys[2][4]="turnip";
	keys[3][4]="sweetcorn";
	keys[4][4]="";

	document.main.src="images/vegetables.jpg";

}
