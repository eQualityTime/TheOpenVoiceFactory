
function salad(){
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
	utterances[1][1]="salad";
	utterances[2][1]="olives";
	utterances[3][1]="tomato";
	utterances[4][1]="spring onion";

	utterances[0][2]="celery";
	utterances[1][2]="cucumber";
	utterances[2][2]="pepper";
	utterances[3][2]="radish";
	utterances[4][2]="lettuce";

	utterances[0][3]="beetroot";
	utterances[1][3]="secret pepper";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/salad.jpg";
}
