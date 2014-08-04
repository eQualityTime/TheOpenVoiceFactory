
function milkshake(){
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
	keys[1][1]="milkshake";
	keys[2][1]="banana milkshake";
	keys[3][1]="strawberry milkshake";
	keys[4][1]="chocolate milkshake";


	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/milkshake.png";

}
