
function spelling2(){
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
	keys[1][1]="m";
	keys[2][1]="o";
	keys[3][1]="p";
	keys[4][1]="q";

	keys[0][2]="Backspace";
	keys[1][2]="r";
	keys[2][2]="s";
	keys[3][2]="t";
	keys[4][2]="u";

	links[0][3]="spelling";
	keys[1][3]="v";
	keys[2][3]="w";
	keys[3][3]="x";
	keys[4][3]="y";

	links[0][4]="clear"; 
	keys[1][4]="x";
	keys[2][4]=" ";
	keys[3][4]="shift";
	keys[4][4]="!";

	document.main.src="images/spelling2.png";
}
