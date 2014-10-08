
function clothes(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="jeans";
	utterances[2][1]="trousers";
	utterances[3][1]="t-shirt";
	utterances[4][1]="jumper";

	links[0][2]="colours";
	utterances[1][2]="skirt";
	utterances[2][2]="dress";
	utterances[3][2]="swimming things";
	utterances[4][2]="bra";

	utterances[0][3]="hat";
	utterances[1][3]="coat";
	utterances[2][3]="shoes";
	utterances[3][3]="socks";
	utterances[4][3]="gloves";

	utterances[0][4]="dressing gown"; 
	utterances[1][4]="pyjamas";
	utterances[2][4]="slippers";
	utterances[3][4]="boxer shorts";
	utterances[4][4]="pants";

	document.main.src="images/clothes.jpg";
}
