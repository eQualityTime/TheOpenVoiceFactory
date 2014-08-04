
function smoothy(){
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
	keys[1][1]="flavor";
	keys[2][1]="raison";
	keys[3][1]="banana";
	keys[4][1]="";


	keys[0][2]="fruit";
	keys[1][2]="mint";
	keys[2][2]="toffee";
	keys[3][2]="lime";
	keys[4][2]="lemon";


	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="chocolate";
	keys[4][3]="pineapple";

	keys[0][4]="";
	keys[1][4]="strawberry";
	keys[2][4]="";
	keys[3][4]="cherry";
	keys[4][4]="blackberry";


	document.main.src="images/smoothy.png";

}
