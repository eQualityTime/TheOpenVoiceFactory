
function positionwords(){
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
	keys[1][1]="up";
	keys[2][1]="down";
	keys[3][1]="in";
	keys[4][1]="out";

	keys[0][2]="";
	keys[1][2]="here";
	keys[2][2]="there";
	keys[3][2]="on";
	keys[4][2]="off";

	keys[0][3]="middle";
	keys[1][3]="top";
	keys[2][3]="bottom";
	keys[3][3]="under";
	keys[4][3]="over";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/positionwords.png";
}
