
function wml(){
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
	utterances[1][1]="cool";
	utterances[2][1]="Are you ignoring me?";
	utterances[3][1]="Leave me alone";
	utterances[4][1]="Lucky";

	utterances[0][2]="Chill out";
	utterances[1][2]="Go away";
	utterances[2][2]="looser";
	utterances[3][2]="wow";
	utterances[4][2]="minga";

	utterances[0][3]="Your doing my head in";
	utterances[1][3]="Whatever";
	utterances[2][3]="No way";
	utterances[3][3]="Shut up";
	utterances[4][3]="Where you put on this earth to annoy me?";

	utterances[0][4]="don't"; 
	utterances[1][4]="not";
	utterances[2][4]="";
	utterances[3][4]="burp!";
	utterances[4][4]="fart!";

	document.main.src="images/wml.jpg";
}