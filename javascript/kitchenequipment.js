
function kitchenequipment(){
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
	keys[1][1]="spoon";
	keys[2][1]="knife";
	keys[3][1]="fork";
	keys[4][1]="pan";

	keys[0][2]="bowl";
	keys[1][2]="dish cloth";
	keys[2][2]="tea towel";
	keys[3][2]="apron";
	keys[4][2]="sink";

	keys[0][3]="fridge";
	keys[1][3]="frying pan";
	keys[2][3]="plate";
	keys[3][3]="cooker";
	keys[4][3]="measuring jug";

	keys[0][4]="cup"; 
	keys[1][4]="chopping board";
	keys[2][4]="colander";
	keys[3][4]="grater";
	keys[4][4]="";

	document.main.src="images/kitchenequipment.png";
}
