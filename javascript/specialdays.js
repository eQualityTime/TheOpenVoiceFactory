
function specialdays(){
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
	keys[1][1]="special day";
	keys[2][1]="new year";
	keys[3][1]="valentines day";
	keys[4][1]="bank holiday";

	keys[0][2]="easter";
	keys[1][2]="birthday";
	keys[2][2]="holiday";
	keys[3][2]="wedding";
	keys[4][2]="bonfire night";

	keys[0][3]="halloween";
	links[1][3]="christmas";
	keys[2][3]="party";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="specialdays.png";
}
