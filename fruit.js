
function fruit(){
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
	keys[1][1]="fruit";
	keys[2][1]="apple";
	keys[3][1]="banana";
	keys[4][1]="avacado";


	keys[0][2]="cranberries";
	keys[1][2]="grapefruit";
	keys[2][2]="grapes";
	keys[3][2]="lime";
	keys[4][2]="lemon";

	keys[0][3]="melon";
	keys[1][3]="mango";
	keys[2][3]="orange";
	keys[3][3]="plum";
	keys[4][3]="pineapple";

	keys[0][4]="pear"; 
	keys[1][4]="stawberry";
	keys[2][4]="kiwi";
	keys[3][4]="cherry chat";
	keys[4][4]="blackberry";

	document.main.src="fruit.jpg";

}
