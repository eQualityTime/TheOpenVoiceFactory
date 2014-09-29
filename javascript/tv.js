
function tv(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="1";
	utterances[2][1]="2";
	utterances[3][1]="3";
	utterances[4][1]="TV on/off";

	utterances[0][2]="";
	utterances[1][2]="4";
	utterances[2][2]="5";
	utterances[3][2]="6";
	utterances[4][2]="";

	utterances[0][3]="TV volume UP";
	utterances[1][3]="7";
	utterances[2][3]="8";
	utterances[3][3]="9";
	utterances[4][3]="";

	utterances[0][4]="TV volume Down"; 
	utterances[1][4]="mute";
	utterances[2][4]="0";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/tv.jpg";
}
