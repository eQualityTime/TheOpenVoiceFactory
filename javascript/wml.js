
function wml(){
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
	keys[1][1]="cool";
	keys[2][1]="Are you ignoring me?";
	keys[3][1]="Leave me alone";
	keys[4][1]="Lucky";

	keys[0][2]="Chill out";
	keys[1][2]="Go away";
	keys[2][2]="looser";
	keys[3][2]="wow";
	keys[4][2]="minga";

	keys[0][3]="Your doing my head in";
	keys[1][3]="Whatever";
	keys[2][3]="No way";
	keys[3][3]="Shut up";
	keys[4][3]="Where you put on this earth to annoy me?";

	keys[0][4]="don't"; 
	keys[1][4]="not";
	keys[2][4]="";
	keys[3][4]="burp!";
	keys[4][4]="fart!";

	document.main.src="images/wml.png";
}
