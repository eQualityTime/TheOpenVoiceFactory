
function cookingwords(){
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
	utterances[1][1]="bake";
	utterances[2][1]="cook";
	utterances[3][1]="chop";
	utterances[4][1]="grate";

	utterances[0][2]="stir";
	utterances[1][2]="peel";
	utterances[2][2]="pour";
	utterances[3][2]="blend";
	utterances[4][2]="fry";

	utterances[0][3]="measure";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="it"; 
	utterances[1][4]="";
	utterances[2][4]="";
	links[3][4]="kitchenequipment";
	utterances[4][4]="don't burn it!";

	document.main.src="images/cookingwords.jpg";
}
