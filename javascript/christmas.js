
function christmas(){
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
	utterances[1][1]="christmas";
	utterances[2][1]="christmas day";
	utterances[3][1]="christmas eve";
	utterances[4][1]="Father Christmas";

	utterances[0][2]="Christmas pudding";
	utterances[1][2]="lights";
	utterances[2][2]="Christmas cake";
	utterances[3][2]="Christmas sock";
	utterances[4][2]="stocking";

	utterances[0][3]="decorations";
	utterances[1][3]="Christmas tree";
	utterances[2][3]="Christmas hat";
	utterances[3][3]="Christmas present";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/christmas.jpg";
}
