function lunch(){
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
	keys[1][1]="lunch";
	keys[2][1]="sandwich";
	keys[3][1]="crackers";
	keys[4][1]="tuna";


	keys[0][2]="cheese";
	keys[1][2]="ham";
	keys[2][2]="chicken";
	keys[3][2]="cheese on toast";
	keys[4][2]="beans on toast";

	keys[0][3]="soup";
	keys[1][3]="chicken soup";
	keys[2][3]="tomato soup";
	keys[3][3]="salad";
	keys[4][3]="";

	keys[0][4]="carrot soup"; 
	keys[1][4]="mushroom soup";
	keys[2][4]="vegetable soup";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="lunch.png";

}
