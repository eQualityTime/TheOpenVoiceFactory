
function thingsthathelp(){
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
	keys[1][1]="disabilities";
	keys[2][1]="communication book";
	keys[3][1]="communication aid";
	keys[4][1]="touch screen";

	keys[0][2]="wheelchair";
	keys[1][2]="power wheelchair";
	keys[2][2]="communication aid mount";
	keys[3][2]="switch mount";
	keys[4][2]="switch";

	keys[0][3]="hoist";
	keys[1][3]="hearing aid";
	keys[2][3]="glasses";
	keys[3][3]="medicine";
	keys[4][3]="apointment";

	keys[0][4]="Toilet chair"; 
	keys[1][4]="ecu";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/thingsthathelp.png";
}
