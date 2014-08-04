
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
	links[2][1]="artthings";
	links[3][1]="animals";
	links[4][1]="parts";

	links[0][2]="clothes";
	links[1][2]="computer";
	links[2][2]="furniture";
	links[3][2]="gardening";
	links[4][2]="kitchenequipment";

	links[0][3]="money";
	links[1][3]="office";
	links[2][3]="sports";
	links[3][3]="thingsthathelp";
	links[4][3]="toiletries";

	links[0][4]="tools"; 
	links[1][4]="transport";
	links[2][4]="weather";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/things.png";
}
