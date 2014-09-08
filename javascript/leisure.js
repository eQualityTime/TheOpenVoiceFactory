
function leisure(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="pictures";
	links[2][1]="phone";
	links[3][1]="mp3";
	utterances[4][1]="Computer Control";

	links[0][2]="want";
	utterances[0][2]="I want";
	links[1][2]="dvd";
	links[2][2]="tv";
	utterances[3][2]="";
	utterances[4][2]="volume up";

	links[0][3]="ECU";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="volume down";

	links[0][4]="mystories"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/leisure.png";
}
