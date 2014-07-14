
function meals(){
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
	keys[1][1]="meal";
	keys[2][1]="pasty";
	keys[3][1]="spaghetti";
	keys[4][1]="pasta";


	keys[0][2]="stew";
	keys[1][2]="pizza";
	keys[2][2]="roast dinner";
	keys[3][2]="chinese food";
	keys[4][2]="curry";

	keys[0][3]="rice";
	keys[1][3]="noodles";
	keys[2][3]="pie";
	keys[3][3]="lasagna";
	keys[4][3]="ravioli";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="macaroni cheese";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="meals.png";

}
