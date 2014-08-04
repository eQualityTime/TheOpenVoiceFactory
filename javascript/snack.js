
function snack(){
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
	keys[1][1]="snack";
	keys[2][1]="raison";
	keys[3][1]="ice lolly";
	keys[4][1]="cake";


	keys[0][2]="fruit";
	keys[1][2]="cream";
	keys[2][2]="custard";
	keys[3][2]="yoghurt";
	keys[4][2]="crisps";

	keys[0][3]="sweets";
	keys[1][3]="candy floss";
	keys[2][3]="pie";
	keys[3][3]="chocolate";
	keys[4][3]="ice cream";

	keys[0][4]="cup cake"; 
	keys[1][4]="rice cake";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="snack.png";
}
