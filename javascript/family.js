
function family(){
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
	keys[1][1]="Dad";
	keys[2][1]="Mum";
	keys[3][1]="lady";
	keys[4][1]="man";

	keys[0][2]="Family";
	keys[1][2]="brother";
	keys[2][2]="sister";
	keys[3][2]="baby";
	keys[4][2]="child";

	keys[0][3]="";
	keys[1][3]="Grandad";
	keys[2][3]="Grandma";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/family.png";
}
