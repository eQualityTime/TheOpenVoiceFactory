
function sauces(){
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
	keys[1][1]="tomato sauce";
	keys[2][1]="mayonnaise";
	keys[3][1]="peanut butter";
	keys[4][1]="pepper";


	keys[0][2]="salt";
	keys[1][2]="gravy";
	keys[2][2]="sugar";
	keys[3][2]="jam";
	keys[4][2]="brown sauce";

	keys[0][3]="vingar";
	keys[1][3]="spices";
	keys[2][3]="honey";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="sauces.png";
}
