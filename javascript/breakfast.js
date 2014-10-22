
function breakfast(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes ";
	utterances[1][0]=" ";
	utterances[2][0]=" ";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="breakfast";
	utterances[2][1]="cereal";
	utterances[3][1]="porridge";
	utterances[4][1]="bran flakes";


	utterances[0][2]="toast";
	utterances[1][2]="butter";
	utterances[2][2]="croissant";
	utterances[3][2]="jam";
	utterances[4][2]="muesli";

	utterances[0][3]="boiled egg";
	utterances[1][3]="fried egg";
	utterances[2][3]="scrambled egg";
	utterances[3][3]="bagel";
	utterances[4][3]="full English";

	utterances[0][4]="beans"; 
	utterances[1][4]="fruit";
	utterances[2][4]="pancakes";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/breakfast.jpg";

}
