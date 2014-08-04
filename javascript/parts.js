
function parts(){
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
	keys[1][1]="body";
	keys[2][1]="hand";
	keys[3][1]="head";
	keys[4][1]="finger";

	keys[0][2]="chest";
	keys[1][2]="ear";
	keys[2][2]="face";
	keys[3][2]="hair";
	keys[4][2]="mouth";

	keys[0][3]="back";
	keys[1][3]="nose";
	keys[2][3]="arm";
	keys[3][3]="foot";
	keys[4][3]="eye";

	keys[0][4]="stomach"; 
	keys[1][4]="neck";
	keys[2][4]="leg";
	keys[3][4]="toes";
	links[4][4]="privateparts";

	document.main.src="images/parts.png";
}
