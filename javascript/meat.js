
function meat(){
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
	keys[1][1]="meat";
	keys[2][1]="bacon";
	keys[3][1]="beef";
	keys[4][1]="tuna";


	keys[0][2]="lamb";
	keys[1][2]="ham";
	keys[2][2]="chicken";
	keys[3][2]="pork chop";
	keys[4][2]="meatballs";

	keys[0][3]="fish";
	keys[1][3]="mince";
	keys[2][3]="prawn";
	keys[3][3]="fish fingers";
	keys[4][3]="sausages";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";
	document.main.src="meat.png";
}
