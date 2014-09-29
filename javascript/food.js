
function food(){
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
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	links[1][1]="breakfast";
	links[2][1]="lunch";
	links[3][1]="meals";
	links[4][1]="meat";


	utterances[0][2]="I'm hungry";
	links[1][2]="vegetables";
	links[2][2]="fruit";
	links[3][2]="drinks";
	links[4][2]="fastfood";

	utterances[0][3]="I'm thirsty";
	links[1][3]="snack";
	links[2][3]="sauces";
	links[3][3]="salad";
	links[4][3]="cookingwords";

	utterances[0][4]="some"; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	links[3][4]="foodchat";
	utterances[4][4]="favourite food";

	document.main.src="images/food.jpg";

}
