
function people(){
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
	keys[1][1]="people";
	keys[2][1]="friends";
	keys[3][1]="scwfriends";
	keys[4][1]="supportstaff";

	keys[0][2]="I'm";
	keys[1][2]="me";
	keys[2][2]="my";
	keys[3][2]="mine";
	keys[4][2]="educationstaff";

	keys[0][3]="we";
	keys[1][3]="they";
	keys[2][3]="boy";
	keys[3][3]="girl";
	links[4][3]="job";

	keys[0][4]="it"; 
	keys[1][4]="you";
	keys[2][4]="he";
	keys[3][4]="she";
	links[4][4]="family";

	document.main.src="people.png";
}

