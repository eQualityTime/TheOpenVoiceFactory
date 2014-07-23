
function things(){
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
	keys[1][1]="Things";
	keys[2][1]="Art things";
	keys[3][1]="animals";
	links[4][1]="parts";

	keys[0][2]="clothes";
	links[1][2]="computer";
	keys[2][2]="furniture";
	keys[3][2]="gardening";
	keys[4][2]="kitchen things";

	keys[0][3]="money";
	keys[1][3]="office";
	keys[2][3]="sports";
	links[3][3]="thingsthathelp";
	links[4][3]="toiletries";

	keys[0][4]="tools"; 
	links[1][4]="transport";
	links[2][4]="weather";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="things.png";
}
