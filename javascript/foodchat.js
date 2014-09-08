
function foodchat(){
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
	utterances[1][1]="I like it";
	utterances[2][1]="It's gross";
	utterances[3][1]="It's spicy";
	utterances[4][1]="Cut up food";

	utterances[0][2]="Can I have some more?";
	utterances[1][2]="Can I have a drink?";
	utterances[2][2]="What's for dinner?";
	utterances[3][2]="What have you been doing?";
	utterances[4][2]="eat";

	utterances[0][3]="please";
	utterances[1][3]="Thank you";
	utterances[2][3]="I've had enought";
	utterances[3][3]="Wipe my face";
	utterances[4][3]="drink";

	utterances[0][4]="It's too hot"; 
	utterances[1][4]="It's too cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/foodchat.png";
}
