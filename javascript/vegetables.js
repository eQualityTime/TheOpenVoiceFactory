
function vegetables(){
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
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	links[1][1]="vegtables";
	links[2][1]="potato";
	utterances[3][1]="aborigine";
	utterances[4][1]="broccali";


	utterances[0][2]="butternut squash";
	utterances[1][2]="cabbage";
	utterances[2][2]="cauliflower";
	utterances[3][2]="courgette";
	utterances[4][2]="carrot";

	utterances[0][3]="leek";
	utterances[1][3]="asparagus";
	utterances[2][3]="peas";
	utterances[3][3]="onion";
	utterances[4][3]="green beans";

	utterances[0][4]="pumpkin"; 
	utterances[1][4]="mushroom";
	utterances[2][4]="turnip";
	utterances[3][4]="sweetcorn";
	utterances[4][4]="";

	document.main.src="images/vegetables.jpg";

}
