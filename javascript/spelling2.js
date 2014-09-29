
function spelling2(){
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
	utterances[1][1]="m";
	utterances[2][1]="o";
	utterances[3][1]="p";
	utterances[4][1]="q";

	utterances[0][2]="Backspace";
	utterances[1][2]="r";
	utterances[2][2]="s";
	utterances[3][2]="t";
	utterances[4][2]="u";

	links[0][3]="spelling";
	utterances[1][3]="v";
	utterances[2][3]="w";
	utterances[3][3]="x";
	utterances[4][3]="y";

	links[0][4]="clear"; 
	utterances[1][4]="x";
	utterances[2][4]=" ";
	utterances[3][4]="shift";
	utterances[4][4]="!";

	document.main.src="images/spelling2.jpg";
}
