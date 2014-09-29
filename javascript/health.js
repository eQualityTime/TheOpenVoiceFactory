
function health(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="I have pain in my";
	links[1][1]="parts";
	utterances[2][1]="I feel";
	utterances[3][1]="headache";
	utterances[4][1]="ouch";

	utterances[0][2]="chest pain";
	utterances[1][2]="earache";
	utterances[2][2]="";
	utterances[3][2]="sick";
	utterances[4][2]="toothache";

	utterances[0][3]="back pain";
	utterances[1][3]="a cold";
	utterances[2][3]="";
	utterances[3][3]="itch";
	utterances[4][3]="";

	utterances[0][4]="stomach ache"; 
	utterances[1][4]="a sore throat";
	utterances[2][4]="cramp";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/health.jpg";
}
