
function spelling(){
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
	keys[1][1]="a";
	keys[2][1]="b";
	keys[3][1]="c";
	keys[4][1]="d";

	keys[0][2]="Backspace";
	keys[1][2]="e";
	keys[2][2]="f";
	keys[3][2]="g";
	keys[4][2]="h";

	keys[0][3]="N-Z";
	keys[1][3]="i";
	keys[2][3]="j";
	keys[3][3]="k";
	keys[4][3]="l";

	links[0][4]="clear"; 
	keys[1][4]="m";
	keys[2][4]=" ";
	keys[3][4]="shift";
	keys[4][4]="?";

	document.main.src="images/spelling.png";
}
