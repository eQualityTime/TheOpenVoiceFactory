
function personalcare(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="I need the toilet";
	utterances[2][1]="I need some help";
	utterances[3][1]="I don't feel well";
	links[3][1]="health";
	links[4][1]="parts";

	links[0][2]="clothes";
	utterances[1][2]="I want to chill out on my bed";
	utterances[2][2]="I'd like a shave";
	utterances[3][2]="I need my medication";
	utterances[4][2]="Please can you clean my glasses";

	utterances[0][3]="Can you do my nails please";
	utterances[1][3]="I'd like a shower";
	utterances[2][3]="I'd love a bath";
	links[3][3]="thingsthathelp";
	links[4][3]="toiletries";

	utterances[0][4]="I need to get changed"; 
	utterances[1][4]="";
	utterances[2][4]="Can you do my hair please";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/personalcare.jpg";
}
