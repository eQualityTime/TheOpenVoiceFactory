
function foodchat(){
	reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="I like it";
	utterances[2][1]="It's grose";
	utterances[3][1]="It's spicy";
	utterances[4][1]="Cut up food";

	utterances[0][2]="Can I have some more?";
	utterances[1][2]="Can I have a drink?";
	utterances[2][2]="wipe my face";
	utterances[3][2]="please";
	utterances[4][2]="thank you";

	utterances[0][3]="What's for dinner?";
	utterances[1][3]="What have you been doing?";
	utterances[2][3]="I've had enough";
	utterances[3][3]="eat";
	utterances[4][3]="drink";

	utterances[0][4]="It's too hot"; 
	utterances[1][4]="It's too cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/foodchat.jpg";
}
