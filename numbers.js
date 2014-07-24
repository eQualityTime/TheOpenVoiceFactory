
function numbers(){
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
	keys[1][1]="number";
	keys[2][1]="1";
	keys[3][1]="2";
	keys[4][1]="3";

	keys[0][2]="4";
	keys[1][2]="5";
	keys[2][2]="6";
	keys[3][2]="7";
	keys[4][2]="8";

	keys[0][3]="9";
	keys[1][3]="10";
	keys[2][3]="0";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="numbers.png";
}
