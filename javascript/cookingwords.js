
function cookingwords(){
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
	keys[1][1]="bake";
	keys[2][1]="cook";
	keys[3][1]="chop";
	keys[4][1]="grate";

	keys[0][2]="stir";
	keys[1][2]="peel";
	keys[2][2]="pour";
	keys[3][2]="blend";
	keys[4][2]="fry";

	keys[0][3]="measure";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="it"; 
	keys[1][4]="";
	keys[2][4]="";
	links[3][4]="kitchenequipment";
	keys[4][4]="don't burn it!";

	document.main.src="images/cookingwords.png";
}
