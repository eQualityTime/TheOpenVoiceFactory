
function chatting(){
	reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="aboutme";
	links[2][1]="wml";
	utterances[3][1]="I can't find what I want to say";
	utterances[4][1]="bye";

	utterances[0][2]="I'm fine";
	utterances[1][2]="ok";
	utterances[2][2]="I'm not so good";
	utterances[3][2]="please";
	utterances[4][2]="thank you";

	utterances[0][3]="sorry";
	utterances[1][3]="execuse me";
	utterances[2][3]="maybe";
	utterances[3][3]="really";
	utterances[4][3]="I don't know";

	links[0][4]="mystories"; 
	utterances[1][4]="I love you";
	utterances[2][4]="but";
	utterances[3][4]="ouch ";
	utterances[4][4]="so";

	document.main.src="images/chatting.jpg";
}
