
function places(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="place";
	utterances[2][1]="my day places";
	links[3][1]="shops";
	links[4][1]="outside";

	utterances[0][2]="work";
	utterances[1][2]="school or college";
	utterances[2][2]="town";
	utterances[3][2]="hospital";
	utterances[4][2]="airport";

	utterances[0][3]="dentist";
	utterances[1][3]="bank";
	utterances[2][3]="doctors";
	utterances[3][3]="pool";
	utterances[4][3]="restaurant";

	utterances[0][4]="library"; 
	utterances[1][4]="pub";
	utterances[2][4]="post office";
	utterances[3][4]="cinema";
	links[4][4]="home";

	document.main.src="images/places.jpg";
}
