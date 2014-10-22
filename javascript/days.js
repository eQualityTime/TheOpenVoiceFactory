
function days(){
	reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="day";
	utterances[2][1]="week";
	utterances[3][1]="weekend";
	utterances[4][1]="night";

	utterances[0][2]="Monday";
	utterances[1][2]="Tuesday";
	utterances[2][2]="Wednesday";
	utterances[3][2]="Thursday";
	utterances[4][2]="Friday";

	utterances[0][3]="Saturday";
	utterances[1][3]="Sunday";
	utterances[2][3]="this week";
	utterances[3][3]="next week";
	utterances[4][3]="tonight";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/days.jpg";
}
