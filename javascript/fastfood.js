
function fastfood(){
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
	keys[1][1]="fast food";
	keys[2][1]="chips";
	keys[3][1]="chicken nuggets";
	keys[4][1]="burger";


	keys[0][2]="hot dog";
	keys[1][2]="pizza";
	keys[2][2]="Fish and chips";
	keys[3][2]="fish burger";
	keys[4][2]="cheese burger";

	keys[0][3]="sweets";
	keys[1][3]="candy floss";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/fastfood.png";
}
