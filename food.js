
function food(){
	var i,j
		for(j=0;j<4;j++)
		{
			for(i=0;i<4;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	links[1][1]="breakfast";
	links[2][1]="lunch";
	links[3][1]="meals";
	links[4][1]="meat";


	keys[0][2]="I'm hungry";
	links[1][2]="vegetables";
	links[2][2]="fruit";
	links[3][2]="drinks";
	keys[4][2]="fast food";

	keys[0][3]="I'm thirsty";
	keys[1][3]="snacks or pudding";
	keys[2][3]="sauces or ingredients";
	keys[3][3]="salad";
	keys[4][3]="cookingwords";

	keys[0][4]="some"; 
	keys[1][4]="with";
	keys[2][4]="and";
	keys[3][4]="Food chat";
	keys[4][4]="favourite food";

	document.main.src="food.jpg";

}
