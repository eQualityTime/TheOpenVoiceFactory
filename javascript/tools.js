
function tools(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="tools";
	utterances[2][1]="clamp";
	utterances[3][1]="drill";
	utterances[4][1]="torch";

	utterances[0][2]="goggles";
	utterances[1][2]="hammer";
	utterances[2][2]="hardhat";
	utterances[3][2]="drill bit";
	utterances[4][2]="pliers";

	utterances[0][3]="sandpaper";
	utterances[1][3]="wrench";
	utterances[2][3]="screwdriver";
	utterances[3][3]="chisel";
	utterances[4][3]="extension lead";

	utterances[0][4]="screw"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	links[4][4]="materials";

	document.main.src="images/tools.png";
}
