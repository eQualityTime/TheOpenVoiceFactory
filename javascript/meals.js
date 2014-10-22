
function meals(){
	reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="meal";
	utterances[2][1]="pasty";
	utterances[3][1]="spaghetti";
	utterances[4][1]="pasta";


	utterances[0][2]="stew";
	utterances[1][2]="pizza";
	utterances[2][2]="roast dinner";
	utterances[3][2]="chinese food";
	utterances[4][2]="curry";

	utterances[0][3]="rice";
	utterances[1][3]="noodles";
	utterances[2][3]="pie";
	utterances[3][3]="lasagna";
	utterances[4][3]="ravioli";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="macaroni cheese";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/meals.jpg";

}
