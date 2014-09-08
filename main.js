
function aboutme(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Name";
	utterances[2][1]="I live in...";
	utterances[3][1]="Birthday...";
	utterances[4][1]="age...";

	utterances[0][2]="I live with...";
	utterances[1][2]="pet.. ";
	utterances[2][2]="School college...";
	utterances[3][2]="email..";
	utterances[4][2]="work...";

	utterances[0][3]="communication aid..";
	utterances[1][3]="music..";
	utterances[2][3]="film..";
	utterances[3][3]="hobby..";
	utterances[4][3]="tv...";

	utterances[0][4]="disability..."; 
	utterances[1][4]="mobile...";
	links[2][4]="aboutyou";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/aboutme.png";
}

function aboutyou(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="What's your name?";
	utterances[2][1]="Where do you live?";
	utterances[3][1]="When's your birthday?";
	utterances[4][1]="How old are you?";

	utterances[0][2]="Who do you live with?";
	utterances[1][2]="Do you have a pet?";
	utterances[2][2]="Tell me about your day?";
	utterances[3][2]="What's your email?";
	utterances[4][2]="Where do you work?";

	utterances[0][3]="What's your mobile number?";
	utterances[1][3]="What music do you like?";
	utterances[2][3]="What films do you like?";
	utterances[3][3]="What's your hobby?";
	utterances[4][3]="What TV do you like?";

	utterances[0][4]="Do you have a disability?"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/aboutyou.png";
}

function action(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="do";
	utterances[2][1]="help";
	utterances[3][1]="look";
	utterances[4][1]="see";

	utterances[0][2]="stop";
	utterances[1][2]="come";
	utterances[2][2]="get";
	utterances[3][2]="give";
	utterances[4][2]="think";

	utterances[0][3]="like";
	utterances[1][3]="listen";
	utterances[2][3]="make";
	utterances[3][3]="put";
	utterances[4][3]="tell";

	utterances[0][4]="take"; 
	utterances[1][4]="turn";
	utterances[2][4]="open";
	utterances[3][4]="close";
	links[4][4]="moreaction";

	document.main.src="images/action.png";
}

function alcohol(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="alcohol";
	utterances[2][1]="beer";
	utterances[3][1]="white wine";
	utterances[4][1]="red wine";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/alcohol.png";
}

function animals(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="pets";
	links[2][1]="farmanimals";
	links[3][1]="wildanimals";
	links[4][1]="wateranimals";

	utterances[0][2]="";
	links[1][2]="birds";
	links[2][2]="insects";
	links[3][2]="petcare";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/animals.png";
}

function artthings(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="art";
	utterances[2][1]="paint";
	utterances[3][1]="glitter";
	utterances[4][1]="sponge";

	utterances[0][2]="tape";
	utterances[1][2]="eraser";
	utterances[2][2]="glue";
	utterances[3][2]="paintbrush";
	utterances[4][2]="paper";

	utterances[0][3]="pen";
	utterances[1][3]="pencil";
	utterances[2][3]="scissors";
	utterances[3][3]="wrapping paper";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	links[4][4]="materials";

	document.main.src="images/artthings.png";
}

function birds(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="bird";
	utterances[2][1]="duck";
	utterances[3][1]="parrot";
	utterances[4][1]="robin";

	utterances[0][2]="turkey";
	utterances[1][2]="goose";
	utterances[2][2]="swan";
	utterances[3][2]="peacock";
	utterances[4][2]="owl";

	utterances[0][3]="penguin";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/birds.png";
}

function blank(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/blank";
}

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
	utterances[3][0]="yes ";
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
	utterances[4][2]="muesili";

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

function chatting(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="aboutme";
	links[2][1]="wml";
	utterances[3][1]="I can't find what I want to say";
	utterances[4][1]="bye";

	utterances[0][2]="I'm fine";
	utterances[1][2]="ok";
	utterances[2][2]="I'm not so good";
	utterances[3][2]="please";
	utterances[4][2]="thank you";

	utterances[0][3]="sorry";
	utterances[1][3]="execuse me";
	utterances[2][3]="maybe";
	utterances[3][3]="really";
	utterances[4][3]="I don't know";

	links[0][4]="mystories"; 
	utterances[1][4]="I love you";
	utterances[2][4]="but";
	utterances[3][4]="ouch ";
	utterances[4][4]="so";

	document.main.src="images/chatting.png";
}

function christmas(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="christmas";
	utterances[2][1]="christmas day";
	utterances[3][1]="christmas eve";
	utterances[4][1]="Father Christmas";

	utterances[0][2]="Christmas pudding";
	utterances[1][2]="lights";
	utterances[2][2]="Christmas cake";
	utterances[3][2]="Christmas sock";
	utterances[4][2]="stocking";

	utterances[0][3]="decorations";
	utterances[1][3]="Christmas tree";
	utterances[2][3]="Christmas hat";
	utterances[3][3]="Christmas present";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/christmas.png";
}

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
	utterances[1][4]="pjamas";
	utterances[2][4]="slippers";
	utterances[3][4]="boxer shorts";
	utterances[4][4]="pants";

	document.main.src="images/clothes.png";
}

function colour(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="colour";
	utterances[2][1]="white";
	utterances[3][1]="black";
	utterances[4][1]="red";

	utterances[0][2]="light";
	utterances[1][2]="yellow";
	utterances[2][2]="orange";
	utterances[3][2]="green";
	utterances[4][2]="blue";

	utterances[0][3]="dark";
	utterances[1][3]="purple";
	utterances[2][3]="pink";
	utterances[3][3]="brown";
	utterances[4][3]="gold";

	utterances[0][4]="spotted"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="silver";

	document.main.src="images/colour.png";
}

function commonthings(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="thing";
	utterances[2][1]="bag";
	utterances[3][1]="battery";
	utterances[4][1]="candle";

	utterances[0][2]="fire";
	utterances[1][2]="book";
	utterances[2][2]="iPad";
	utterances[3][2]="camera";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="part";
	utterances[2][3]="lot";
	utterances[3][3]="idea";
	utterances[4][3]="problem";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="charger";

	document.main.src="images/commonthings.png";
}

function computer(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="computer";
	utterances[2][1]="mouse";
	utterances[3][1]="keyboard";
	utterances[4][1]="USB stick";

	utterances[0][2]="printer";
	utterances[1][2]="email";
	utterances[2][2]="iphone";
	utterances[3][2]="monitor";
	utterances[4][2]="website";

	utterances[0][3]="ipod";
	utterances[1][3]="speakers";
	utterances[2][3]="joystick";
	utterances[3][3]="touch screen";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/computer.png";
}

function cookingwords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="bake";
	utterances[2][1]="cook";
	utterances[3][1]="chop";
	utterances[4][1]="grate";

	utterances[0][2]="stir";
	utterances[1][2]="peel";
	utterances[2][2]="pour";
	utterances[3][2]="blend";
	utterances[4][2]="fry";

	utterances[0][3]="measure";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="it"; 
	utterances[1][4]="";
	utterances[2][4]="";
	links[3][4]="kitchenequipment";
	utterances[4][4]="don't burn it!";

	document.main.src="images/cookingwords.png";
}

function days(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
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

	document.main.src="images/days.png";
}

function describe(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="feelings";
	links[2][1]="colour";
	links[3][1]="shapes";
	links[4][1]="opposites";

	utterances[0][2]="pretty";
	utterances[1][2]="more";
	utterances[2][2]="nice";
	utterances[3][2]="wrong";
	utterances[4][2]="right";

	utterances[0][3]="finished";
	utterances[1][3]="all";
	utterances[2][3]="mean";
	utterances[3][3]="different";
	utterances[4][3]="same";

	utterances[0][4]="problem"; 
	utterances[1][4]="important";
	utterances[2][4]="because";
	utterances[3][4]="idea";
	utterances[4][4]="favorite";

	document.main.src="images/describe.png";
}

function drinks(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="drink";
	utterances[2][1]="coffee";
	utterances[3][1]="tea";
	utterances[4][1]="hot chocolate";


	links[0][2]="pint";
	utterances[1][2]="milk";
	utterances[2][2]="water";
	utterances[3][2]="";
	utterances[4][2]="";

	links[0][3]="juice";
	utterances[1][3]="smoothy";
	links[1][3]="flavour";
	links[2][3]="milkshake";
	links[3][3]="fizzydrinks";
	links[4][3]="alcohol";

	utterances[0][4]=""; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/drinks.jpg";

}

function dvd(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="pause/play";

	utterances[0][2]="My DVDs";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="dvd Volume Up";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="dvd Volume Down"; 
	utterances[1][4]="mute";
	utterances[2][4]="shuffle";
	utterances[3][4]="previous track";
	utterances[4][4]="next track";

	document.main.src="images/dvd.png";
}

function educationstaff(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Educational staff";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/educationstaff.png";
}

function family(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Dad";
	utterances[2][1]="Mum";
	utterances[3][1]="lady";
	utterances[4][1]="man";

	utterances[0][2]="Family";
	utterances[1][2]="brother";
	utterances[2][2]="sister";
	utterances[3][2]="baby";
	utterances[4][2]="child";

	utterances[0][3]="";
	utterances[1][3]="Grandad";
	utterances[2][3]="Grandma";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/family.png";
}

function farmanimals(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="farm animal";
	utterances[2][1]="pig";
	utterances[3][1]="sheep";
	utterances[4][1]="chick";

	utterances[0][2]="chicken";
	utterances[1][2]="cow";
	utterances[2][2]="horse";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/farmanimals.png";
}

function fastfood(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="fast food";
	utterances[2][1]="chips";
	utterances[3][1]="chicken nuggets";
	utterances[4][1]="burger";


	utterances[0][2]="hot dog";
	utterances[1][2]="pizza";
	utterances[2][2]="Fish and chips";
	utterances[3][2]="fish burger";
	utterances[4][2]="cheese burger";

	utterances[0][3]="sweets";
	utterances[1][3]="candy floss";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/fastfood.png";
}

function feelings(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="feelings";
	utterances[2][1]="afriad";
	utterances[3][1]="nice";
	utterances[4][1]="busy";

	utterances[0][2]="It is";
	utterances[1][2]="board";
	utterances[2][2]="funny";
	utterances[3][2]="good";
	utterances[4][2]="happy";

	utterances[0][3]="I am";
	utterances[1][3]="tired";
	utterances[2][3]="angry";
	utterances[3][3]="sad";
	utterances[4][3]="sick";

	utterances[0][4]="hot"; 
	utterances[1][4]="cold";
	utterances[2][4]="";
	utterances[3][4]="scared";
	utterances[4][4]="confused";

	document.main.src="images/feelings.png";
}

function fizzydrinks(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="Fizzy drink";
	utterances[2][1]="orangeade";
	utterances[3][1]="lemonade";
	utterances[4][1]="coke";


	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/fizzydrinks.jpg";

}

function flavour(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes"; 
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";
	
	links[0][1]="1";
	utterances[1][1]="flavor";
	utterances[2][1]="raison";
	utterances[3][1]="banana";
	utterances[4][1]="";


	utterances[0][2]="fruit";
	utterances[1][2]="mint";
	utterances[2][2]="toffee";
	utterances[3][2]="lime";
	utterances[4][2]="lemon";


	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="chocolate";
	utterances[4][3]="pineapple";

	utterances[0][4]="";
	utterances[1][4]="strawberry";
	utterances[2][4]="";
	utterances[3][4]="cherry";
	utterances[4][4]="blackberry";


	document.main.src="images/flavour.png";

}

function food(){
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
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	links[1][1]="breakfast";
	links[2][1]="lunch";
	links[3][1]="meals";
	links[4][1]="meat";


	utterances[0][2]="I'm hungry";
	links[1][2]="vegetables";
	links[2][2]="fruit";
	links[3][2]="drinks";
	links[4][2]="fastfood";

	utterances[0][3]="I'm thirsty";
	links[1][3]="snack";
	links[2][3]="sauces";
	links[3][3]="salad";
	links[4][3]="cookingwords";

	utterances[0][4]="some"; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	links[3][4]="foodchat";
	utterances[4][4]="favourite food";

	document.main.src="images/food.png";

}

function foodchat(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="I like it";
	utterances[2][1]="It's gross";
	utterances[3][1]="It's spicy";
	utterances[4][1]="Cut up food";

	utterances[0][2]="Can I have some more?";
	utterances[1][2]="Can I have a drink?";
	utterances[2][2]="What's for dinner?";
	utterances[3][2]="What have you been doing?";
	utterances[4][2]="eat";

	utterances[0][3]="please";
	utterances[1][3]="Thank you";
	utterances[2][3]="I've had enought";
	utterances[3][3]="Wipe my face";
	utterances[4][3]="drink";

	utterances[0][4]="It's too hot"; 
	utterances[1][4]="It's too cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/foodchat.png";
}

function friends(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="friends";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/friends.png";
}

function fruit(){
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
	utterances[3][0]="yes ";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="fruit";
	utterances[2][1]="apple";
	utterances[3][1]="banana";
	utterances[4][1]="avacado";


	utterances[0][2]="cranberries";
	utterances[1][2]="grapefruit";
	utterances[2][2]="grapes";
	utterances[3][2]="lime";
	utterances[4][2]="lemon";

	utterances[0][3]="melon";
	utterances[1][3]="mango";
	utterances[2][3]="orange";
	utterances[3][3]="plum";
	utterances[4][3]="pineapple";

	utterances[0][4]="pear"; 
	utterances[1][4]="stawberry";
	utterances[2][4]="kiwi";
	utterances[3][4]="cherry chat";
	utterances[4][4]="blackberry";

	document.main.src="images/fruit.jpg";

}

function furniture(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="furniture";
	utterances[2][1]="bean bag";
	utterances[3][1]="table ";
	utterances[4][1]="pillow";

	utterances[0][2]="wardrobe";
	utterances[1][2]="toilet";
	utterances[2][2]="TV";
	utterances[3][2]="shelf";
	utterances[4][2]="bed";

	utterances[0][3]="cupboard";
	utterances[1][3]="sink";
	utterances[2][3]="drawer";
	utterances[3][3]="couch";
	utterances[4][3]="picture";

	utterances[0][4]="blanket"; 
	utterances[1][4]="bath";
	utterances[2][4]="lamp";
	utterances[3][4]="chair";
	utterances[4][4]="sheets";

	document.main.src="images/furniture.png";
}

function gardening(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="gardening";
	utterances[2][1]="flowers";
	utterances[3][1]="grass";
	utterances[4][1]="bud";

	utterances[0][2]="lawn mower";
	utterances[1][2]="leaves";
	utterances[2][2]="petal";
	utterances[3][2]="branch";
	utterances[4][2]="tree";

	utterances[0][3]="hose";
	utterances[1][3]="seeks";
	utterances[2][3]="hedge cutters";
	utterances[3][3]="plant";
	utterances[4][3]="hedge";

	utterances[0][4]="clippers"; 
	utterances[1][4]="shovel";
	utterances[2][4]="pot";
	utterances[3][4]="rake";
	utterances[4][4]="trowel";

	document.main.src="images/gardening.png";
}

function health(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="I have pain in my";
	links[1][1]="parts";
	utterances[2][1]="I feel";
	utterances[3][1]="headache";
	utterances[4][1]="ouch";

	utterances[0][2]="chest pain";
	utterances[1][2]="earache";
	utterances[2][2]="";
	utterances[3][2]="sick";
	utterances[4][2]="toothache";

	utterances[0][3]="back pain";
	utterances[1][3]="a cold";
	utterances[2][3]="";
	utterances[3][3]="itch";
	utterances[4][3]="";

	utterances[0][4]="stomach ache"; 
	utterances[1][4]="a sore throat";
	utterances[2][4]="cramp";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/health.png";
}

function insects(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="insect";
	utterances[2][1]="caterpillar";
	utterances[3][1]="slug";
	utterances[4][1]="snail";

	utterances[0][2]="bee";
	utterances[1][2]="fly";
	utterances[2][2]="spider";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/insects.png";
}

function job(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Job";
	utterances[2][1]="driver";
	utterances[3][1]="PA"
	utterances[4][1]="cleaner";

	utterances[0][2]="Doctor";
	utterances[1][2]="SLT";
	utterances[2][2]="dentist";
	utterances[3][2]="nurse";
	utterances[4][2]="police officer";

	utterances[0][3]="post person";
	utterances[1][3]="pilot";
	utterances[2][3]="handy person";
	utterances[3][3]="OT";
	utterances[4][3]="physio";

	utterances[0][4]="mechanic"; 
	utterances[1][4]="caretaker";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/job.png";
}

function juice(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Juice";
	utterances[2][1]="apple juice";
	utterances[3][1]="orange juice";
	utterances[4][1]="blackcurrent juice";

	utterances[0][2]="pineapple juice";
	utterances[1][2]="grape juice";
	utterances[2][2]="grapefruit juice";
	utterances[3][2]="cranberry juice";
	utterances[4][2]="tomato juice";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/juice.png";
}

function kitchenequipment(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="spoon";
	utterances[2][1]="knife";
	utterances[3][1]="fork";
	utterances[4][1]="pan";

	utterances[0][2]="bowl";
	utterances[1][2]="dish cloth";
	utterances[2][2]="tea towel";
	utterances[3][2]="apron";
	utterances[4][2]="sink";

	utterances[0][3]="fridge";
	utterances[1][3]="frying pan";
	utterances[2][3]="plate";
	utterances[3][3]="cooker";
	utterances[4][3]="measuring jug";

	utterances[0][4]="cup"; 
	utterances[1][4]="chopping board";
	utterances[2][4]="colander";
	utterances[3][4]="grater";
	utterances[4][4]="";

	document.main.src="images/kitchenequipment.png";
}

function leisure(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="pictures";
	links[2][1]="phone";
	links[3][1]="mp3";
	utterances[4][1]="Computer Control";

	links[0][2]="want";
	utterances[0][2]="I want";
	links[1][2]="dvd";
	links[2][2]="tv";
	utterances[3][2]="";
	utterances[4][2]="volume up";

	links[0][3]="ECU";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="volume down";

	links[0][4]="mystories"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/leisure.png";
}

function littlewords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="positionwords";
	utterances[2][1]="fun";
	utterances[3][1]="away";
	utterances[4][1]="a";

	utterances[0][2]="all";
	utterances[1][2]="this";
	utterances[2][2]="that";
	utterances[3][2]="is";
	utterances[4][2]="am";

	utterances[0][3]="none";
	utterances[1][3]="to";
	utterances[2][3]="from";
	utterances[3][3]="about";
	utterances[4][3]="be";

	utterances[0][4]="some"; 
	utterances[1][4]="with";
	utterances[2][4]="and";
	utterances[3][4]="at";
	utterances[4][4]="the";

	document.main.src="images/littlewords.png";
}
function lunch(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="lunch";
	utterances[2][1]="sandwich";
	utterances[3][1]="crackers";
	utterances[4][1]="tuna";


	utterances[0][2]="cheese";
	utterances[1][2]="ham";
	utterances[2][2]="chicken";
	utterances[3][2]="cheese on toast";
	utterances[4][2]="beans on toast";

	utterances[0][3]="soup";
	utterances[1][3]="chicken soup";
	utterances[2][3]="tomato soup";
	utterances[3][3]="salad";
	utterances[4][3]="";

	utterances[0][4]="carrot soup"; 
	utterances[1][4]="mushroom soup";
	utterances[2][4]="vegetable soup";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/lunch.png";

}

function materials(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="material";
	utterances[2][1]="wood";
	utterances[3][1]="plastic";
	utterances[4][1]="fabric";

	utterances[0][2]="metal";
	utterances[1][2]="sponge";
	utterances[2][2]="glass";
	utterances[3][2]="stone";
	utterances[4][2]="string";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="paper";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/materials.png";
}

function meals(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
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

	document.main.src="images/meals.png";

}

function meat(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="meat";
	utterances[2][1]="bacon";
	utterances[3][1]="beef";
	utterances[4][1]="tuna";


	utterances[0][2]="lamb";
	utterances[1][2]="ham";
	utterances[2][2]="chicken";
	utterances[3][2]="pork chop";
	utterances[4][2]="meatballs";

	utterances[0][3]="fish";
	utterances[1][3]="mince";
	utterances[2][3]="prawn";
	utterances[3][3]="fish fingers";
	utterances[4][3]="sausages";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";
	document.main.src="images/meat.png";
}

function milkshake(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="milkshake";
	utterances[2][1]="banana milkshake";
	utterances[3][1]="strawberry milkshake";
	utterances[4][1]="chocolate milkshake";


	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/milkshake.png";

}

function money(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="money";
	utterances[2][1]="cheque book";
	utterances[3][1]="wallet";
	utterances[4][1]="purse";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/money.png";
}

function months(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="month";
	utterances[2][1]="this month";
	utterances[3][1]="next month";
	utterances[4][1]="last month";

	utterances[0][2]="January";
	utterances[1][2]="February";
	utterances[2][2]="March";
	utterances[3][2]="April";
	utterances[4][2]="May";

	utterances[0][3]="June";
	utterances[1][3]="July";
	utterances[2][3]="August";
	utterances[3][3]="September";
	utterances[4][3]="October";

	utterances[0][4]="November"; 
	utterances[1][4]="December";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/months.png";
}

function moreaction(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="feel";
	utterances[2][1]="read";
	utterances[3][1]="sit";
	utterances[4][1]="stand";

	utterances[0][2]="wait";
	utterances[1][2]="watch";
	utterances[2][2]="work";
	utterances[3][2]="have";
	utterances[4][2]="know";

	utterances[0][3]="play";
	utterances[1][3]="sing";
	utterances[2][3]="sleep";
	utterances[3][3]="talk";
	utterances[4][3]="try";

	utterances[0][4]="win"; 
	utterances[1][4]="lose";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/moreaction.png";
}

function mp3(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="pause/play";

	utterances[0][2]="My Albums";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="MP3 Volume Up";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="MP3 Volume Down"; 
	utterances[1][4]="mute";
	utterances[2][4]="shuffle";
	utterances[3][4]="previous track";
	utterances[4][4]="next track";

	document.main.src="images/mp3.png";
}

function myday(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="spelling";
	links[2][1]="numbers";
	utterances[3][1]="Timetable";
	utterances[4][1]="Computer control";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/myday.png";
}

function mystories(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/mystories.png";
}

function numbers(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="number";
	utterances[2][1]="1";
	utterances[3][1]="2";
	utterances[4][1]="3";

	utterances[0][2]="4";
	utterances[1][2]="5";
	utterances[2][2]="6";
	utterances[3][2]="7";
	utterances[4][2]="8";

	utterances[0][3]="9";
	utterances[1][3]="10";
	utterances[2][3]="0";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/numbers.png";
}

function office(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="office";
	utterances[2][1]="chair";
	utterances[3][1]="filing cabinet";
	utterances[4][1]="computer";

	utterances[0][2]="photocopier";
	utterances[1][2]="bin";
	utterances[2][2]="desk";
	utterances[3][2]="file";
	utterances[4][2]="fax";

	utterances[0][3]="pen";
	utterances[1][3]="pencil";
	utterances[2][3]="scissors";
	utterances[3][3]="envelope";
	utterances[4][3]="paper";

	utterances[0][4]="paperclip"; 
	utterances[1][4]="label";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/office.png";
}

function opposites(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="dry";
	utterances[2][1]="wet";
	utterances[3][1]="long";
	utterances[4][1]="short";

	utterances[0][2]="all gone";
	utterances[1][2]="fast";
	utterances[2][2]="slow";
	utterances[3][2]="loud";
	utterances[4][2]="quiet";

	utterances[0][3]="medium";
	utterances[1][3]="big";
	utterances[2][3]="little";
	utterances[3][3]="new";
	utterances[4][3]="old";

	utterances[0][4]="soft"; 
	utterances[1][4]="easy";
	utterances[2][4]="hard";
	utterances[3][4]="clean";
	utterances[4][4]="dirty";

	document.main.src="images/opposites.png";
}

function outside(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Outside place";
	utterances[2][1]="street";
	utterances[3][1]="Car park";
	utterances[4][1]="beach";

	utterances[0][2]="countryside";
	utterances[1][2]="lake";
	utterances[2][2]="woods";
	utterances[3][2]="field";
	utterances[4][2]="garden";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/outside.png";
}

function page1(){
reset();	
utterances[0][0]="yeah ";
	utterances[1][0]=" ";
	utterances[2][0]=" ";
	utterances[3][0]="yes ";
	utterances[4][0]="no";

	utterances[0][1]="hello";
	utterances[1][1]="I want to talk to you";
	links[2][1]="chatting";
	links[3][1]="questions";
	links[4][1]="food";

	utterances[0][2]="I";
	links[1][2]="people";
	links[2][2]="personalcare";
	links[3][2]="littlewords";
	links[4][2]="myday";

	links[0][3]="action";
	utterances[1][3]="go";
	utterances[2][3]="want";
	links[3][3]="describe";
	links[4][3]="things";

	links[0][4]="clear";
	links[1][4]="time";
	links[2][4]="places";
	links[3][4]="leisure";
	links[4][4]="deleteword";

	document.main.src="images/page1.png";

}

function parts(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="body";
	utterances[2][1]="hand";
	utterances[3][1]="head";
	utterances[4][1]="finger";

	utterances[0][2]="chest";
	utterances[1][2]="ear";
	utterances[2][2]="face";
	utterances[3][2]="hair";
	utterances[4][2]="mouth";

	utterances[0][3]="back";
	utterances[1][3]="nose";
	utterances[2][3]="arm";
	utterances[3][3]="foot";
	utterances[4][3]="eye";

	utterances[0][4]="stomach"; 
	utterances[1][4]="neck";
	utterances[2][4]="leg";
	utterances[3][4]="toes";
	links[4][4]="privateparts";

	document.main.src="images/parts.png";
}

function people(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="people";
	links[2][1]="friends";
	links[3][1]="scwfriends";
	links[4][1]="supportstaff";

	utterances[0][2]="I'm";
	utterances[1][2]="me";
	utterances[2][2]="my";
	utterances[3][2]="mine";
	links[4][2]="educationstaff";

	utterances[0][3]="we";
	utterances[1][3]="they";
	utterances[2][3]="boy";
	utterances[3][3]="girl";
	links[4][3]="job";

	utterances[0][4]="it"; 
	utterances[1][4]="you";
	utterances[2][4]="he";
	utterances[3][4]="she";
	links[4][4]="family";

	document.main.src="images/people.png";
}


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

	links[0][2]="cloths";
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

	document.main.src="images/personalcare.png";
}

function petcare(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="pet care";
	utterances[2][1]="dog food";
	utterances[3][1]="cat food";
	utterances[4][1]="fish food";

	utterances[0][2]="collar";
	utterances[1][2]="pet comb";
	utterances[2][2]="pet blanket";
	utterances[3][2]="pet bed";
	utterances[4][2]="fish tank";

	utterances[0][3]="treat";
	utterances[1][3]="lead";
	utterances[2][3]="kennel";
	utterances[3][3]="pet carrier";
	utterances[4][3]="pet food";

	utterances[0][4]="bird feeder"; 
	utterances[1][4]="care for pet";
	utterances[2][4]="feed pet ";
	utterances[3][4]="walk the dog";
	utterances[4][4]="cage";

	document.main.src="images/petcare.png";
}

function pets(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="pet";
	utterances[2][1]="cat";
	utterances[3][1]="hamster";
	utterances[4][1]="mouse";

	utterances[0][2]="guinea pig";
	utterances[1][2]="rabbit";
	utterances[2][2]="horse";
	utterances[3][2]="fish";
	utterances[4][2]="rat";

	utterances[0][3]="dog";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/pets.png";
}

function picture(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="About this pic";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="Previous photo";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="Next Photo"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/picture.png";
}

function pictures(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Would you like to see my photos?";
	links[2][1]="picture";
	links[3][1]="picture";
	links[4][1]="picture";

	links[0][2]="picture";
	links[1][2]="picture";
	links[2][2]="picture";
	links[3][2]="picture";
	links[4][2]="picture";

	links[0][3]="picture";
	links[1][3]="picture";
	links[2][3]="picture";
	links[3][3]="picture";
	links[4][3]="picture";

	links[0][4]="picture"; 
	links[1][4]="picture";
	links[2][4]="picture";
	links[3][4]="picture";
	links[4][4]="picture";

	document.main.src="images/pictures.png";
}

function pint(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="pint";
	utterances[2][1]="half pint";
	utterances[3][1]="straw";
	utterances[4][1]="";


	utterances[0][2]="special cup";
	utterances[1][2]="diet";
	utterances[2][2]="sugar";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="large";
	utterances[1][3]="medium";
	utterances[2][3]="small";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="hot"; 
	utterances[1][4]="cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/pint.png";
}

function places(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="place";
	utterances[2][1]="my day places";
	links[3][1]="shops";
	links[4][1]="outside";

	utterances[0][2]="work";
	utterances[1][2]="school or college";
	utterances[2][2]="town";
	utterances[3][2]="hospital";
	utterances[4][2]="airport";

	utterances[0][3]="dentist";
	utterances[1][3]="bank";
	utterances[2][3]="doctors";
	utterances[3][3]="pool";
	utterances[4][3]="restaurant";

	utterances[0][4]="library"; 
	utterances[1][4]="pub";
	utterances[2][4]="post office";
	utterances[3][4]="cinema";
	utterances[4][4]="";

	document.main.src="images/places.png";
}

function positionwords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="up";
	utterances[2][1]="down";
	utterances[3][1]="in";
	utterances[4][1]="out";

	utterances[0][2]="";
	utterances[1][2]="here";
	utterances[2][2]="there";
	utterances[3][2]="on";
	utterances[4][2]="off";

	utterances[0][3]="middle";
	utterances[1][3]="top";
	utterances[2][3]="bottom";
	utterances[3][3]="under";
	utterances[4][3]="over";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/positionwords.png";
}

function privateparts(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="private parts";
	utterances[2][1]="bottom";
	utterances[3][1]="breasts";
	utterances[4][1]="vagina";

	utterances[0][2]="penis";
	utterances[1][2]="under arm hair";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="horny"; 
	utterances[1][4]="love";
	utterances[2][4]="shared pleasure";
	utterances[3][4]="self pleasure";
	utterances[4][4]="kiss";

	document.main.src="images/privateparts.png";
}

function questions(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="who";
	utterances[2][1]="why";
	utterances[3][1]="when";
	utterances[4][1]="could";

	utterances[0][2]="what";
	utterances[1][2]="how";
	utterances[2][2]="where";
	utterances[3][2]="which";
	utterances[4][2]="would";

	utterances[0][3]="how much?";
	utterances[1][3]="can I see that?";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="should";

	utterances[0][4]="how are you?"; 
	utterances[1][4]="What have you been doing?";
	utterances[2][4]="What do you think?";
	utterances[3][4]="What's next?";
	utterances[4][4]="What's that?";

	document.main.src="images/questions.png";
}

function salad(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="salad";
	utterances[2][1]="olives";
	utterances[3][1]="tomato";
	utterances[4][1]="spring onion";

	utterances[0][2]="celery";
	utterances[1][2]="cucumber";
	utterances[2][2]="pepper";
	utterances[3][2]="radish";
	utterances[4][2]="lettuce";

	utterances[0][3]="beetroot";
	utterances[1][3]="secret pepper";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/salad.png";
}

function sauces(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="tomato sauce";
	utterances[2][1]="mayonnaise";
	utterances[3][1]="peanut butter";
	utterances[4][1]="pepper";


	utterances[0][2]="salt";
	utterances[1][2]="gravy";
	utterances[2][2]="sugar";
	utterances[3][2]="jam";
	utterances[4][2]="brown sauce";

	utterances[0][3]="vingar";
	utterances[1][3]="spices";
	utterances[2][3]="honey";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/sauces.png";
}

function scwfriends(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="School/college/work mates";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/scwfriends.png";
}

function shapes(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="shape";
	utterances[2][1]="star";
	utterances[3][1]="triangle";
	utterances[4][1]="square";

	utterances[0][2]="rectangle";
	utterances[1][2]="circle";
	utterances[2][2]="hexagon";
	utterances[3][2]="pentagon";
	utterances[4][2]="oval";

	utterances[0][3]="diamond";
	utterances[1][3]="heart";
	utterances[2][3]="line";
	utterances[3][3]="curve";
	utterances[4][3]="";

	utterances[0][4]="sphere"; 
	utterances[1][4]="cube";
	utterances[2][4]="cylinder";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/shapes.png";
}

function shops(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="shop";
	utterances[2][1]="supermarket";
	utterances[3][1]="butchers";
	utterances[4][1]="shopping centre";

	utterances[0][2]="bakers";
	utterances[1][2]="veg shop";
	utterances[2][2]="department store";
	utterances[3][2]="clothes shop";
	utterances[4][2]="music shop";

	utterances[0][3]="market";
	utterances[1][3]="coffee shop";
	utterances[2][3]="drive through";
	utterances[3][3]="pharmacy";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/shops.png";
}

function snack(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";


	links[0][1]="1";
	utterances[1][1]="snack";
	utterances[2][1]="raison";
	utterances[3][1]="ice lolly";
	links[3][1]="flavour";
	utterances[4][1]="cake";


	utterances[0][2]="fruit";
	utterances[1][2]="cream";
	utterances[2][2]="custard";
	utterances[3][2]="yoghurt";
	links[3][2]="flavour";
	utterances[4][2]="crisps";

	utterances[0][3]="sweets";
	utterances[1][3]="candy floss";
	utterances[2][3]="pie";
	utterances[3][3]="chocolate";
	utterances[4][3]="ice cream";
	links[4][3]="flavour";

	utterances[0][4]="cup cake"; 
	utterances[1][4]="rice cake";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/snack.png";
}

function specialdays(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="special day";
	utterances[2][1]="new year";
	utterances[3][1]="valentines day";
	utterances[4][1]="bank holiday";

	utterances[0][2]="easter";
	utterances[1][2]="birthday";
	utterances[2][2]="holiday";
	utterances[3][2]="wedding";
	utterances[4][2]="bonfire night";

	utterances[0][3]="halloween";
	links[1][3]="christmas";
	utterances[2][3]="party";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/specialdays.png";
}

function spelling(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="a";
	utterances[2][1]="b";
	utterances[3][1]="c";
	utterances[4][1]="d";

	utterances[0][2]="Backspace";
	utterances[1][2]="e";
	utterances[2][2]="f";
	utterances[3][2]="g";
	utterances[4][2]="h";

	links[0][3]="spelling2";
	utterances[1][3]="i";
	utterances[2][3]="j";
	utterances[3][3]="k";
	utterances[4][3]="l";

	links[0][4]="clear"; 
	utterances[1][4]="m";
	utterances[2][4]=" ";
	utterances[3][4]="shift";
	utterances[4][4]="?";

	document.main.src="images/spelling.png";
}

function spelling2(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="m";
	utterances[2][1]="o";
	utterances[3][1]="p";
	utterances[4][1]="q";

	utterances[0][2]="Backspace";
	utterances[1][2]="r";
	utterances[2][2]="s";
	utterances[3][2]="t";
	utterances[4][2]="u";

	links[0][3]="spelling";
	utterances[1][3]="v";
	utterances[2][3]="w";
	utterances[3][3]="x";
	utterances[4][3]="y";

	links[0][4]="clear"; 
	utterances[1][4]="x";
	utterances[2][4]=" ";
	utterances[3][4]="shift";
	utterances[4][4]="!";

	document.main.src="images/spelling2.png";
}

function sports(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="sports";
	utterances[2][1]="football";
	utterances[3][1]="rugby";
	utterances[4][1]="cycling";

	utterances[0][2]="boccia";
	utterances[1][2]="motor sport";
	utterances[2][2]="golf";
	utterances[3][2]="fishig";
	utterances[4][2]="pool";

	utterances[0][3]="bowling";
	utterances[1][3]="tennis";
	utterances[2][3]="horse riding";
	utterances[3][3]="skiing";
	utterances[4][3]="dancing";

	utterances[0][4]="gymnastics"; 
	utterances[1][4]="athletics";
	utterances[2][4]="outdoor sport";
	utterances[3][4]="judo";
	utterances[4][4]="";

	document.main.src="images/sports.png";
}

function supportstaff(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Support staff";
	utterances[2][1]="";
	utterances[3][1]="";
	utterances[4][1]="";

	utterances[0][2]="";
	utterances[1][2]="";
	utterances[2][2]="";
	utterances[3][2]="";
	utterances[4][2]="";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/supportstaff.png";
}

function things(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	links[1][1]="commonthings";
	links[2][1]="artthings";
	links[3][1]="animals";
	links[4][1]="parts";

	links[0][2]="clothes";
	links[1][2]="computer";
	links[2][2]="furniture";
	links[3][2]="gardening";
	links[4][2]="kitchenequipment";

	links[0][3]="money";
	links[1][3]="office";
	links[2][3]="sports";
	links[3][3]="thingsthathelp";
	links[4][3]="toiletries";

	links[0][4]="tools"; 
	links[1][4]="transport";
	links[2][4]="weather";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/things.png";
}

function thingsthathelp(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="disabilities";
	utterances[2][1]="communication book";
	utterances[3][1]="communication aid";
	utterances[4][1]="touch screen";

	utterances[0][2]="wheelchair";
	utterances[1][2]="power wheelchair";
	utterances[2][2]="communication aid mount";
	utterances[3][2]="switch mount";
	utterances[4][2]="switch";

	utterances[0][3]="hoist";
	utterances[1][3]="hearing aid";
	utterances[2][3]="glasses";
	utterances[3][3]="medicine";
	utterances[4][3]="apointment";

	utterances[0][4]="Toilet chair"; 
	utterances[1][4]="ecu";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/thingsthathelp.png";
}

function time(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="Time";
	links[2][1]="days";
	links[3][1]="months";
	links[4][1]="specialdays";

	utterances[0][2]="yesterday";
	utterances[1][2]="today";
	utterances[2][2]="tomorrow";
	utterances[3][2]="later";
	utterances[4][2]="late";

	utterances[0][3]="morning";
	utterances[1][3]="afternoon";
	utterances[2][3]="evening";
	utterances[3][3]="now";
	utterances[4][3]="never";

	utterances[0][4]="again"; 
	utterances[1][4]="ready";
	utterances[2][4]="hurry";
	utterances[3][4]="before";
	utterances[4][4]="after";

	document.main.src="images/time.png";
}

function toiletries(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="toiletries";
	utterances[2][1]="soap";
	utterances[3][1]="toothbrush";
	utterances[4][1]="toothpaste";

	utterances[0][2]="bubble bath";
	utterances[1][2]="deodorant";
	utterances[2][2]="shampoo";
	utterances[3][2]="conditioner";
	utterances[4][2]="Make-up";

	utterances[0][3]="razor";
	utterances[1][3]="shaving foam";
	utterances[2][3]="aftershave";
	utterances[3][3]="toilet paper";
	utterances[4][3]="sanitary items";

	utterances[0][4]="hairdryer"; 
	utterances[1][4]="comb";
	utterances[2][4]="brush";
	utterances[3][4]="hair spray";
	utterances[4][4]="hair dye";

	document.main.src="images/toiletries.png";
}

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

function transport(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="transport";
	utterances[2][1]="car";
	utterances[3][1]="train";
	utterances[4][1]="bus";

	utterances[0][2]="caravan";
	utterances[1][2]="fire engine";
	utterances[2][2]="ambulance";
	utterances[3][2]="ship";
	utterances[4][2]="airplane";

	utterances[0][3]="tractor";
	utterances[1][3]="lorry";
	utterances[2][3]="motor home";
	utterances[3][3]="bike";
	utterances[4][3]="police car";

	utterances[0][4]="rowing boat"; 
	utterances[1][4]="bin lorry";
	utterances[2][4]="taxi";
	utterances[3][4]="underground";
	utterances[4][4]="";

	document.main.src="images/transport.png";
}

function tv(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="1";
	utterances[2][1]="2";
	utterances[3][1]="3";
	utterances[4][1]="TV on/off";

	utterances[0][2]="";
	utterances[1][2]="4";
	utterances[2][2]="5";
	utterances[3][2]="6";
	utterances[4][2]="";

	utterances[0][3]="TV volume UP";
	utterances[1][3]="7";
	utterances[2][3]="8";
	utterances[3][3]="9";
	utterances[4][3]="";

	utterances[0][4]="TV volume Down"; 
	utterances[1][4]="mute";
	utterances[2][4]="0";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/tv.png";
}

function vegetables(){
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
	utterances[3][0]="yes ";
	utterances[4][0]="no";


	links[0][1]="1";
	links[1][1]="vegtables";
	utterances[2][1]="potato";
	utterances[3][1]="aborigine";
	utterances[4][1]="broccali";


	utterances[0][2]="butternut squash";
	utterances[1][1]="cabbage";
	utterances[2][2]="cauliflower";
	utterances[3][2]="courgette";
	utterances[4][2]="carrot";

	utterances[0][3]="leek";
	utterances[1][3]="asparagus";
	utterances[2][3]="peas";
	utterances[3][3]="onion";
	utterances[4][3]="green beans";

	utterances[0][4]="pumpkin"; 
	utterances[1][4]="mushroom";
	utterances[2][4]="turnip";
	utterances[3][4]="sweetcorn";
	utterances[4][4]="";

	document.main.src="images/vegetables.jpg";

}

function want(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="to go outside";
	utterances[2][1]="to call someone";
	utterances[3][1]="to sit down";
	utterances[4][1]="to stand up";

	utterances[0][2]="to do something else";
	utterances[1][2]="to watch something";
	utterances[2][2]="to go on holiday";
	utterances[3][2]="to have a go";
	utterances[4][2]="";

        utterances[0][2]="to play";
	utterances[1][3]="to listen to something";
	utterances[2][3]="to go swimming";
	utterances[3][3]="";
	utterances[4][3]="to cook something";

	links[0][4]="mystories"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="to go home";

	document.main.src="images/want.png";
}

function wateranimals(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="water animals";
	utterances[2][1]="fish";
	utterances[3][1]="whale";
	utterances[4][1]="prawn";

	utterances[0][2]="crab";
	utterances[1][2]="dolphin";
	utterances[2][2]="jellyfish";
	utterances[3][2]="tropical fish";
	utterances[4][2]="shark";

	utterances[0][3]="";
	utterances[1][3]="";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]=""; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/wateranimals.png";
}

function weather(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
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
	utterances[4][2]="frezing";

	utterances[0][3]="icey";
	utterances[1][3]="stormy";
	utterances[2][3]="";
	utterances[3][3]="";
	utterances[4][3]="";

	utterances[0][4]="hot"; 
	utterances[1][4]="cold";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/weather.png";
}

function wildanimals(){
reset();
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="wild animal";
	utterances[2][1]="zebra";
	utterances[3][1]="snake";
	utterances[4][1]="monkey";

	utterances[0][2]="bear";
	utterances[1][2]="camel";
	utterances[2][2]="chetah";
	utterances[3][2]="deer";
	utterances[4][2]="elephant";

	utterances[0][3]="giraffe";
	utterances[1][3]="gorilla";
	utterances[2][3]="hippo";
	utterances[3][3]="lion";
	utterances[4][3]="tiger";

	utterances[0][4]="rhinoceros"; 
	utterances[1][4]="";
	utterances[2][4]="";
	utterances[3][4]="";
	utterances[4][4]="";

	document.main.src="images/wildanimals.png";
}

function wml(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				utterances[i][j]="link";
				links[i][j]="blank";
			}
		}
	utterances[0][0]="yes";
	utterances[1][0]="";
	utterances[2][0]="";
	utterances[3][0]="";
	utterances[4][0]="no";

	links[0][1]="1";
	utterances[1][1]="cool";
	utterances[2][1]="Are you ignoring me?";
	utterances[3][1]="Leave me alone";
	utterances[4][1]="Lucky";

	utterances[0][2]="Chill out";
	utterances[1][2]="Go away";
	utterances[2][2]="looser";
	utterances[3][2]="wow";
	utterances[4][2]="minga";

	utterances[0][3]="Your doing my head in";
	utterances[1][3]="Whatever";
	utterances[2][3]="No way";
	utterances[3][3]="Shut up";
	utterances[4][3]="Where you put on this earth to annoy me?";

	utterances[0][4]="don't"; 
	utterances[1][4]="not";
	utterances[2][4]="";
	utterances[3][4]="burp!";
	utterances[4][4]="fart!";

	document.main.src="images/wml.png";
}
