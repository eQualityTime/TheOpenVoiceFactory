
function things(){
        reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="commonthings";
	links[2][1]="artthings";
	links[3][1]="health";
	links[4][1]="parts";

	links[0][2]="clothes";
	links[1][2]="computer";
	links[2][2]="furniture";
	links[3][2]="toys";
	links[4][2]="kitchenequipment";

	links[0][3]="money";
	links[1][3]="office";
	links[2][3]="sports";
	links[3][3]="thingsthathelp";
	links[4][3]="toiletries";

	links[0][4]="tools"; 
	links[1][4]="transport";
	links[2][4]="nature";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/things.jpg";
}
