
function home(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="home";
	utterances[2][1]="cellar";
	utterances[3][1]="dining room";
	utterances[4][1]="hall";

	utterances[0][2]="attic";
	utterances[1][2]="bathroom";
	utterances[2][2]="lounge";
	utterances[3][2]="study";
	utterances[4][2]="bedroom";

	utterances[0][3]="kitchen";
	utterances[1][3]="my room";
	utterances[2][3]="utility room";
	utterances[3][3]="play room";
	utterances[4][3]="";

	utterances[0][4]="upstairs"; 
	utterances[1][4]="downstairs";
	utterances[2][4]="stairs";
	utterances[3][4]="office";
	utterances[4][4]="";

	document.main.src="images/home.jpg";
}
