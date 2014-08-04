
function foodchat(){
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
	keys[1][1]="I like it";
	keys[2][1]="It's gross";
	keys[3][1]="It's spicy";
	keys[4][1]="Cut up food";

	keys[0][2]="Can I have some more?";
	keys[1][2]="Can I have a drink?";
	keys[2][2]="What's for dinner?";
	keys[3][2]="What have you been doing?";
	keys[4][2]="eat";

	keys[0][3]="please";
	keys[1][3]="Thank you";
	keys[2][3]="I've had enought";
	keys[3][3]="Wipe my face";
	keys[4][3]="drink";

	keys[0][4]="It's too hot"; 
	keys[1][4]="It's too cold";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="foodchat.png";
}
