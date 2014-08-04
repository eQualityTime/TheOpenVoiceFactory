
function toiletries(){
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
	keys[1][1]="toiletries";
	keys[2][1]="soap";
	keys[3][1]="toothbrush";
	keys[4][1]="toothpaste";

	keys[0][2]="bubble bath";
	keys[1][2]="deodorant";
	keys[2][2]="shampoo";
	keys[3][2]="conditioner";
	keys[4][2]="Make-up";

	keys[0][3]="razor";
	keys[1][3]="shaving foam";
	keys[2][3]="aftershave";
	keys[3][3]="toilet paper";
	keys[4][3]="sanitary items";

	keys[0][4]="hairdryer"; 
	keys[1][4]="comb";
	keys[2][4]="brush";
	keys[3][4]="hair spray";
	keys[4][4]="hair dye";

	document.main.src="images/toiletries.png";
}
