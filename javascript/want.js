
function want(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="to go outside";
	links[1][1]="outside";
	utterances[2][1]="to call someone";
	links[2][1]="people";
	utterances[3][1]="to sit down";
	utterances[4][1]="to stand up";

	utterances[0][2]="to do something else";
	utterances[1][2]="to watch something";
	utterances[2][2]="to go on holiday";
	utterances[3][2]="to have a go";
	utterances[4][2]="";

        utterances[0][3]="to play";
        links[0][3]="toys";
	utterances[1][3]="to listen to something";
	utterances[2][3]="to go swimming";
	utterances[3][3]="";
	utterances[4][3]="to cook something";
	links[4][3]="food";

	links[0][4]="mystories"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="to go home";

	document.main.src="images/want.jpg";
}
