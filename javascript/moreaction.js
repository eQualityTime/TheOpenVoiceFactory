
function moreaction(){
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
	keys[1][1]="feel";
	keys[2][1]="read";
	keys[3][1]="sit";
	keys[4][1]="stand";

	keys[0][2]="wait";
	keys[1][2]="watch";
	keys[2][2]="work";
	keys[3][2]="have";
	keys[4][2]="know";

	keys[0][3]="play";
	keys[1][3]="sing";
	keys[2][3]="sleep";
	keys[3][3]="talk";
	keys[4][3]="try";

	keys[0][4]="win"; 
	keys[1][4]="lose";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/moreaction.png";
}
