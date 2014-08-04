
function places(){
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
	keys[1][1]="place";
	keys[2][1]="my day places";
	links[3][1]="shops";
	links[4][1]="outside";

	keys[0][2]="work";
	keys[1][2]="school or college";
	keys[2][2]="town";
	keys[3][2]="hospital";
	keys[4][2]="airport";

	keys[0][3]="dentist";
	keys[1][3]="bank";
	keys[2][3]="doctors";
	keys[3][3]="pool";
	keys[4][3]="restaurant";

	keys[0][4]="library"; 
	keys[1][4]="pub";
	keys[2][4]="post office";
	keys[3][4]="cinema";
	keys[4][4]="";

	document.main.src="places.png";
}
