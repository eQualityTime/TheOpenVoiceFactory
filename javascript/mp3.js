
function mp3(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="pause/play";

	utterances[0][2]="My Albums";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="MP3 Volume Up";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="MP3 Volume Down"; 
	utterances[1][4]="mute";
	utterances[2][4]="shuffle";
	utterances[3][4]="previous track";
	utterances[4][4]="next track";

	document.main.src="images/mp3.jpg";
}
