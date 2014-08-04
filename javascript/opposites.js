
function opposites(){
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
	keys[1][1]="dry";
	keys[2][1]="wet";
	keys[3][1]="long";
	keys[4][1]="short";

	keys[0][2]="all gone";
	keys[1][2]="fast";
	keys[2][2]="slow";
	keys[3][2]="loud";
	keys[4][2]="quiet";

	keys[0][3]="medium";
	keys[1][3]="big";
	keys[2][3]="little";
	keys[3][3]="new";
	keys[4][3]="old";

	keys[0][4]="soft"; 
	keys[1][4]="easy";
	keys[2][4]="hard";
	keys[3][4]="clean";
	keys[4][4]="dirty";

	document.main.src="images/opposites.png";
}
