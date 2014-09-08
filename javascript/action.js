
function action(){
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
	utterances[1][1]="do";
	utterances[2][1]="help";
	utterances[3][1]="look";
	utterances[4][1]="see";

	utterances[0][2]="stop";
	utterances[1][2]="come";
	utterances[2][2]="get";
	utterances[3][2]="give";
	utterances[4][2]="think";

	utterances[0][3]="like";
	utterances[1][3]="listen";
	utterances[2][3]="make";
	utterances[3][3]="put";
	utterances[4][3]="tell";

	utterances[0][4]="take"; 
	utterances[1][4]="turn";
	utterances[2][4]="open";
	utterances[3][4]="close";
	links[4][4]="moreaction";

	document.main.src="images/action.png";
}
