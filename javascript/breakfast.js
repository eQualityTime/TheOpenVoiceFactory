
function breakfast(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="breakfast";
	keys[2][1]="cereal";
	keys[3][1]="porridge";
	keys[4][1]="bran flakes";


	keys[0][2]="toast";
	keys[1][2]="butter";
	keys[2][2]="croissant";
	keys[3][2]="jam";
	keys[4][2]="muesili";

	keys[0][3]="boiled egg";
	keys[1][3]="fried egg";
	keys[2][3]="scrambled egg";
	keys[3][3]="bagel";
	keys[4][3]="full English";

	keys[0][4]="beans"; 
	keys[1][4]="fruit";
	keys[2][4]="pancakes";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/breakfast.jpg";

}
