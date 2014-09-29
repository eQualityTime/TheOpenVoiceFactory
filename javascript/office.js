
function office(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="office";
	utterances[2][1]="chair";
	utterances[3][1]="filing cabinet";
	utterances[4][1]="computer";

	utterances[0][2]="photocopier";
	utterances[1][2]="bin";
	utterances[2][2]="desk";
	utterances[3][2]="file";
	utterances[4][2]="fax";

	utterances[0][3]="pen";
	utterances[1][3]="pencil";
	utterances[2][3]="scissors";
	utterances[3][3]="envelope";
	utterances[4][3]="paper";

	utterances[0][4]="paperclip"; 
	utterances[1][4]="label";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/office.jpg";
}
