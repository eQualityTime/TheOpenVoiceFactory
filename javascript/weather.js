
function weather(){
	reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Weather ";
	utterances[2][1]="rain";
	utterances[3][1]="sun";
	utterances[4][1]="snow";

	utterances[0][2]="It is";
	utterances[1][2]="windy";
	utterances[2][2]="cloudy";
	utterances[3][2]="foggy";
	utterances[4][2]="freezing";

	utterances[0][3]="icy";
	utterances[1][3]="stormy";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="hot"; 
	utterances[1][4]="cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/weather.jpg";
}
