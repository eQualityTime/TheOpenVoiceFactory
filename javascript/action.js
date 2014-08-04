
function action(){
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
	keys[1][1]="do";
	keys[2][1]="help";
	keys[3][1]="look";
	keys[4][1]="see";

	keys[0][2]="stop";
	keys[1][2]="come";
	keys[2][2]="get";
	keys[3][2]="give";
	keys[4][2]="think";

	keys[0][3]="like";
	keys[1][3]="listen";
	keys[2][3]="make";
	keys[3][3]="put";
	keys[4][3]="tell";

	keys[0][4]="take"; 
	keys[1][4]="turn";
	keys[2][4]="open";
	keys[3][4]="close";
	links[4][4]="moreaction";

	document.main.src="images/action.png";
}
