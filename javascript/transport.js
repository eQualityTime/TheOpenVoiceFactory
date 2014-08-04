
function transport(){
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
	keys[1][1]="transport";
	keys[2][1]="car";
	keys[3][1]="train";
	keys[4][1]="bus";

	keys[0][2]="caravan";
	keys[1][2]="fire engine";
	keys[2][2]="ambulance";
	keys[3][2]="ship";
	keys[4][2]="airplane";

	keys[0][3]="tractor";
	keys[1][3]="lorry";
	keys[2][3]="motor home";
	keys[3][3]="bike";
	keys[4][3]="police car";

	keys[0][4]="rowing boat"; 
	keys[1][4]="bin lorry";
	keys[2][4]="taxi";
	keys[3][4]="underground";
	keys[4][4]="";

	document.main.src="transport.png";
}
