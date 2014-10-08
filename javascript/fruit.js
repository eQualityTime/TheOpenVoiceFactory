
function fruit(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes ";
	utterances[1][0]=" ";
	utterances[2][0]=" ";
	utterances[3][0]="yes ";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="fruit";
	utterances[2][1]="apple";
	utterances[3][1]="banana";
	utterances[4][1]="avocado";


	utterances[0][2]="cranberries";
	utterances[1][2]="grapefruit";
	utterances[2][2]="grapes";
	utterances[3][2]="lime";
	utterances[4][2]="lemon";

	utterances[0][3]="melon";
	utterances[1][3]="mango";
	utterances[2][3]="orange";
	utterances[3][3]="plum";
	utterances[4][3]="pineapple";

	utterances[0][4]="pear"; 
	utterances[1][4]="stawberry";
	utterances[2][4]="kiwi";
	utterances[3][4]="cherry";
	utterances[4][4]="blackberry";

	document.main.src="images/fruit.jpg";

}
