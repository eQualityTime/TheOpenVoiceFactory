function lunch(){
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
	utterances[1][1]="lunch";
	utterances[2][1]="sandwich";
	utterances[3][1]="crackers";
	utterances[4][1]="tuna";


	utterances[0][2]="cheese";
	utterances[1][2]="ham";
	utterances[2][2]="chicken";
	utterances[3][2]="cheese on toast";
	utterances[4][2]="beans on toast";

	utterances[0][3]="soup";
	utterances[1][3]="chicken soup";
	utterances[2][3]="tomato soup";
	utterances[3][3]="salad";
	utterances[4][3]="";

	utterances[0][4]="carrot soup"; 
	utterances[1][4]="mushroom soup";
	utterances[2][4]="vegetable soup";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/lunch.jpg";

}
