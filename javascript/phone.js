
function phone(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Hello! I use a communication aid to speak, please give me time to generate what I need to say.";
	links[2][1]="chatting";
	utterances[3][1]="I want to ask you something... ";
	links[3][1]="questions";
	utterances[4][1]="call me";

	utterances[0][2]="I need to check my credit.";
	utterances[1][2]="I'd like to call";
	links[1][2]="people";
	utterances[2][2]="";
	utterances[3][2]="speak soon";
	utterances[4][2]="take care";

	utterances[0][3]="I need to charge my phone";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="When will I see you?";
	utterances[4][3]="";

	utterances[0][4]="Tell me your news"; 
	utterances[1][4]="I miss you";
	utterances[2][4]="Happy Birthday";
	utterances[3][4]="Get well soon";
	utterances[4][4]="Congratulations";

	document.main.src="images/phone.jpg";
}
