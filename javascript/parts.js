
function parts(){
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
	utterances[1][1]="body";
	utterances[2][1]="hand";
	utterances[3][1]="head";
	utterances[4][1]="finger";

	utterances[0][2]="chest";
	utterances[1][2]="ear";
	utterances[2][2]="face";
	utterances[3][2]="hair";
	utterances[4][2]="mouth";

	utterances[0][3]="back";
	utterances[1][3]="nose";
	utterances[2][3]="arm";
	utterances[3][3]="foot";
	utterances[4][3]="eye";

	utterances[0][4]="stomach"; 
	utterances[1][4]="neck";
	utterances[2][4]="leg";
	utterances[3][4]="toes";
	links[4][4]="privateparts";

	document.main.src="images/parts.jpg";
}
