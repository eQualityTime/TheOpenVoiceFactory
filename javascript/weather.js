
function weather(){
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
	keys[1][1]="Weather ";
	keys[2][1]="rain";
	keys[3][1]="sun";
	keys[4][1]="snow";

	keys[0][2]="It is";
	keys[1][2]="windy";
	keys[2][2]="cloudy";
	keys[3][2]="foggy";
	keys[4][2]="frezing";

	keys[0][3]="icey";
	keys[1][3]="stormy";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="hot"; 
	keys[1][4]="cold";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/weather.png";
}
