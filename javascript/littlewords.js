
function littlewords(){
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
	links[1][1]="positionwords";
	keys[2][1]="fun";
	keys[3][1]="away";
	keys[4][1]="a";

	keys[0][2]="all";
	keys[1][2]="this";
	keys[2][2]="that";
	keys[3][2]="is";
	keys[4][2]="am";

	keys[0][3]="none";
	keys[1][3]="to";
	keys[2][3]="from";
	keys[3][3]="about";
	keys[4][3]="be";

	keys[0][4]="some"; 
	keys[1][4]="with";
	keys[2][4]="and";
	keys[3][4]="at";
	keys[4][4]="the";

	document.main.src="images/littlewords.png";
}
