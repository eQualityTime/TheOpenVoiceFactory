
function spelling(){
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
	utterances[1][1]="a";
	utterances[2][1]="b";
	utterances[3][1]="c";
	utterances[4][1]="d";

	utterances[0][2]="Backspace";
	utterances[1][2]="e";
	utterances[2][2]="f";
	utterances[3][2]="g";
	utterances[4][2]="h";

	links[0][3]="spelling2";
	utterances[1][3]="i";
	utterances[2][3]="j";
	utterances[3][3]="k";
	utterances[4][3]="l";

	links[0][4]="clear"; 
	utterances[1][4]="m";
	utterances[2][4]=" ";
	utterances[3][4]="shift";
	utterances[4][4]="?";

	document.main.src="images/spelling.png";
}
