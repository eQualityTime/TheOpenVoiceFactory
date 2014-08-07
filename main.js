
function aboutme(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Name";
	keys[2][1]="I live in...";
	keys[3][1]="Birthday...";
	keys[4][1]="age...";

	keys[0][2]="I live with...";
	keys[1][2]="pet.. ";
	keys[2][2]="School college...";
	keys[3][2]="email..";
	keys[4][2]="work...";

	keys[0][3]="communication aid..";
	keys[1][3]="music..";
	keys[2][3]="film..";
	keys[3][3]="hobby..";
	keys[4][3]="tv...";

	keys[0][4]="disability..."; 
	keys[1][4]="mobile...";
	links[2][4]="aboutyou";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/aboutme.png";
}

function aboutyou(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="What's your name?";
	keys[2][1]="Where do you live?";
	keys[3][1]="When's your birthday?";
	keys[4][1]="How old are you?";

	keys[0][2]="Who do you live with?";
	keys[1][2]="Do you have a pet?";
	keys[2][2]="Tell me about your day?";
	keys[3][2]="What's your email?";
	keys[4][2]="Where do you work?";

	keys[0][3]="What's your mobile number?";
	keys[1][3]="What music do you like?";
	keys[2][3]="What films do you like?";
	keys[3][3]="What's your hobby?";
	keys[4][3]="What TV do you like?";

	keys[0][4]="Do you have a disability?"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/aboutyou.png";
}

function action(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="do";
	keys[2][1]="help";
	keys[3][1]="look";
	keys[4][1]="see";

	keys[0][2]="stop";
	keys[1][2]="come";
	keys[2][2]="get";
	keys[3][2]="give";
	keys[4][2]="think";

	keys[0][3]="like";
	keys[1][3]="listen";
	keys[2][3]="make";
	keys[3][3]="put";
	keys[4][3]="tell";

	keys[0][4]="take"; 
	keys[1][4]="turn";
	keys[2][4]="open";
	keys[3][4]="close";
	links[4][4]="moreaction";

	document.main.src="images/action.png";
}

function animals(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="pets";
	links[2][1]="farmanimals";
	links[3][1]="wildanimals";
	links[4][1]="wateranimals";

	keys[0][2]="";
	links[1][2]="birds";
	links[2][2]="insects";
	links[3][2]="petcare";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/animals.png";
}

function artthings(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="art";
	keys[2][1]="paint";
	keys[3][1]="glitter";
	keys[4][1]="sponge";

	keys[0][2]="tape";
	keys[1][2]="eraser";
	keys[2][2]="glue";
	keys[3][2]="paintbrush";
	keys[4][2]="paper";

	keys[0][3]="pen";
	keys[1][3]="pencil";
	keys[2][3]="scissors";
	keys[3][3]="wrapping paper";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="materials";

	document.main.src="images/artthings.png";
}

function birds(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="bird";
	keys[2][1]="duck";
	keys[3][1]="parrot";
	keys[4][1]="robin";

	keys[0][2]="turkey";
	keys[1][2]="goose";
	keys[2][2]="swan";
	keys[3][2]="peacock";
	keys[4][2]="owl";

	keys[0][3]="penguin";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/birds.png";
}

function blank(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/blank";
}

function breakfast(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="breakfast";
	keys[2][1]="cereal";
	keys[3][1]="porridge";
	keys[4][1]="bran flakes";


	keys[0][2]="toast";
	keys[1][2]="butter";
	keys[2][2]="croissant";
	keys[3][2]="jam";
	keys[4][2]="muesili";

	keys[0][3]="boiled egg";
	keys[1][3]="fried egg";
	keys[2][3]="scrambled egg";
	keys[3][3]="bagel";
	keys[4][3]="full English";

	keys[0][4]="beans"; 
	keys[1][4]="fruit";
	keys[2][4]="pancakes";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/breakfast.jpg";

}

function chatting(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="aboutme";
	links[2][1]="wml";
	keys[3][1]="I can't find what I want to say";
	keys[4][1]="bye";

	keys[0][2]="I'm fine";
	keys[1][2]="ok";
	keys[2][2]="I'm not so good";
	keys[3][2]="please";
	keys[4][2]="thank you";

	keys[0][3]="sorry";
	keys[1][3]="execuse me";
	keys[2][3]="maybe";
	keys[3][3]="really";
	keys[4][3]="I don't know";

	links[0][4]="mystories"; 
	keys[1][4]="I love you";
	keys[2][4]="but";
	keys[3][4]="ouch ";
	keys[4][4]="so";

	document.main.src="images/chatting.png";
}

function christmas(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="christmas";
	keys[2][1]="christmas day";
	keys[3][1]="christmas eve";
	keys[4][1]="Father Christmas";

	keys[0][2]="Christmas pudding";
	keys[1][2]="lights";
	keys[2][2]="Christmas cake";
	keys[3][2]="Christmas sock";
	keys[4][2]="stocking";

	keys[0][3]="decorations";
	keys[1][3]="Christmas tree";
	keys[2][3]="Christmas hat";
	keys[3][3]="Christmas present";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/christmas.png";
}

function clothes(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="jeans";
	keys[2][1]="trousers";
	keys[3][1]="t-shirt";
	keys[4][1]="jumper";

	links[0][2]="colours";
	keys[1][2]="skirt";
	keys[2][2]="dress";
	keys[3][2]="swimming things";
	keys[4][2]="bra";

	keys[0][3]="hat";
	keys[1][3]="coat";
	keys[2][3]="shoes";
	keys[3][3]="socks";
	keys[4][3]="gloves";

	keys[0][4]="dressing gown"; 
	keys[1][4]="pjamas";
	keys[2][4]="slippers";
	keys[3][4]="boxer shorts";
	keys[4][4]="pants";

	document.main.src="images/clothes.png";
}

function colour(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="colour";
	keys[2][1]="white";
	keys[3][1]="black";
	keys[4][1]="red";

	keys[0][2]="light";
	keys[1][2]="yellow";
	keys[2][2]="orange";
	keys[3][2]="green";
	keys[4][2]="blue";

	keys[0][3]="dark";
	keys[1][3]="purple";
	keys[2][3]="pink";
	keys[3][3]="brown";
	keys[4][3]="gold";

	keys[0][4]="spotted"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="silver";

	document.main.src="images/colour.png";
}

function computer(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="computer";
	keys[2][1]="mouse";
	keys[3][1]="keyboard";
	keys[4][1]="USB stick";

	keys[0][2]="printer";
	keys[1][2]="email";
	keys[2][2]="iphone";
	keys[3][2]="monitor";
	keys[4][2]="website";

	keys[0][3]="ipod";
	keys[1][3]="speakers";
	keys[2][3]="joystick";
	keys[3][3]="touch screen";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/computer.png";
}

function cookingwords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="bake";
	keys[2][1]="cook";
	keys[3][1]="chop";
	keys[4][1]="grate";

	keys[0][2]="stir";
	keys[1][2]="peel";
	keys[2][2]="pour";
	keys[3][2]="blend";
	keys[4][2]="fry";

	keys[0][3]="measure";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="it"; 
	keys[1][4]="";
	keys[2][4]="";
	links[3][4]="kitchenequipment";
	keys[4][4]="don't burn it!";

	document.main.src="images/cookingwords.png";
}

function days(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="day";
	keys[2][1]="week";
	keys[3][1]="weekend";
	keys[4][1]="night";

	keys[0][2]="Monday";
	keys[1][2]="Tuesday";
	keys[2][2]="Wednesday";
	keys[3][2]="Thursday";
	keys[4][2]="Friday";

	keys[0][3]="Saturday";
	keys[1][3]="Sunday";
	keys[2][3]="this week";
	keys[3][3]="next week";
	keys[4][3]="tonight";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/days.png";
}

function describe(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="feelings";
	links[2][1]="colour";
	links[3][1]="shapes";
	links[4][1]="opposites";

	keys[0][2]="pretty";
	keys[1][2]="more";
	keys[2][2]="nice";
	keys[3][2]="wrong";
	keys[4][2]="right";

	keys[0][3]="finished";
	keys[1][3]="all";
	keys[2][3]="mean";
	keys[3][3]="different";
	keys[4][3]="same";

	keys[0][4]="problem"; 
	keys[1][4]="important";
	keys[2][4]="because";
	keys[3][4]="idea";
	keys[4][4]="favorite";

	document.main.src="images/describe.png";
}

function drinks(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="drink";
	keys[2][1]="coffee";
	keys[3][1]="tea";
	keys[4][1]="hot chocolate";


	links[0][2]="pint";
	keys[1][2]="milk";
	keys[2][2]="water";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="juice";
	links[1][3]="smoothy";
	links[2][3]="milkshake";
	links[3][3]="fizzydrinks";
	keys[4][3]="alcohol";

	keys[0][4]=""; 
	keys[1][4]="with";
	keys[2][4]="and";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/drinks.jpg";

}

function dvd(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="pause/play";

	keys[0][2]="My DVDs";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="dvd Volume Up";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="dvd Volume Down"; 
	keys[1][4]="mute";
	keys[2][4]="shuffle";
	keys[3][4]="previous track";
	keys[4][4]="next track";

	document.main.src="images/dvd.png";
}

function educationstaff(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Educational staff";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/educationstaff.png";
}

function family(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Dad";
	keys[2][1]="Mum";
	keys[3][1]="lady";
	keys[4][1]="man";

	keys[0][2]="Family";
	keys[1][2]="brother";
	keys[2][2]="sister";
	keys[3][2]="baby";
	keys[4][2]="child";

	keys[0][3]="";
	keys[1][3]="Grandad";
	keys[2][3]="Grandma";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/family.png";
}

function farmanimals(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="farm animal";
	keys[2][1]="pig";
	keys[3][1]="sheep";
	keys[4][1]="chick";

	keys[0][2]="chicken";
	keys[1][2]="cow";
	keys[2][2]="horse";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/farmanimals.png";
}

function fastfood(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="fast food";
	keys[2][1]="chips";
	keys[3][1]="chicken nuggets";
	keys[4][1]="burger";


	keys[0][2]="hot dog";
	keys[1][2]="pizza";
	keys[2][2]="Fish and chips";
	keys[3][2]="fish burger";
	keys[4][2]="cheese burger";

	keys[0][3]="sweets";
	keys[1][3]="candy floss";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/fastfood.png";
}

function feelings(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="feelings";
	keys[2][1]="afriad";
	keys[3][1]="nice";
	keys[4][1]="busy";

	keys[0][2]="It is";
	keys[1][2]="board";
	keys[2][2]="funny";
	keys[3][2]="good";
	keys[4][2]="happy";

	keys[0][3]="I am";
	keys[1][3]="tired";
	keys[2][3]="angry";
	keys[3][3]="sad";
	keys[4][3]="sick";

	keys[0][4]="hot"; 
	keys[1][4]="cold";
	keys[2][4]="";
	keys[3][4]="scared";
	keys[4][4]="confused";

	document.main.src="images/feelings.png";
}

function fizzydrinks(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="Fizzy drink";
	keys[2][1]="orangeade";
	keys[3][1]="lemonade";
	keys[4][1]="coke";


	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/fizzydrinks.jpg";

}

function food(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	links[1][1]="breakfast";
	links[2][1]="lunch";
	links[3][1]="meals";
	links[4][1]="meat";


	keys[0][2]="I'm hungry";
	links[1][2]="vegetables";
	links[2][2]="fruit";
	links[3][2]="drinks";
	links[4][2]="fastfood";

	keys[0][3]="I'm thirsty";
	links[1][3]="snack";
	links[2][3]="sauces";
	links[3][3]="salad";
	links[4][3]="cookingwords";

	keys[0][4]="some"; 
	keys[1][4]="with";
	keys[2][4]="and";
	links[3][4]="foodchat";
	keys[4][4]="favourite food";

	document.main.src="images/food.jpg";

}

function foodchat(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="I like it";
	keys[2][1]="It's gross";
	keys[3][1]="It's spicy";
	keys[4][1]="Cut up food";

	keys[0][2]="Can I have some more?";
	keys[1][2]="Can I have a drink?";
	keys[2][2]="What's for dinner?";
	keys[3][2]="What have you been doing?";
	keys[4][2]="eat";

	keys[0][3]="please";
	keys[1][3]="Thank you";
	keys[2][3]="I've had enought";
	keys[3][3]="Wipe my face";
	keys[4][3]="drink";

	keys[0][4]="It's too hot"; 
	keys[1][4]="It's too cold";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/foodchat.png";
}

function friends(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="friends";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/friends.png";
}

function fruit(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="fruit";
	keys[2][1]="apple";
	keys[3][1]="banana";
	keys[4][1]="avacado";


	keys[0][2]="cranberries";
	keys[1][2]="grapefruit";
	keys[2][2]="grapes";
	keys[3][2]="lime";
	keys[4][2]="lemon";

	keys[0][3]="melon";
	keys[1][3]="mango";
	keys[2][3]="orange";
	keys[3][3]="plum";
	keys[4][3]="pineapple";

	keys[0][4]="pear"; 
	keys[1][4]="stawberry";
	keys[2][4]="kiwi";
	keys[3][4]="cherry chat";
	keys[4][4]="blackberry";

	document.main.src="images/fruit.jpg";

}

function furniture(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="furniture";
	keys[2][1]="bean bag";
	keys[3][1]="table ";
	keys[4][1]="pillow";

	keys[0][2]="wardrobe";
	keys[1][2]="toilet";
	keys[2][2]="TV";
	keys[3][2]="shelf";
	keys[4][2]="bed";

	keys[0][3]="cupboard";
	keys[1][3]="sink";
	keys[2][3]="drawer";
	keys[3][3]="couch";
	keys[4][3]="picture";

	keys[0][4]="blanket"; 
	keys[1][4]="bath";
	keys[2][4]="lamp";
	keys[3][4]="chair";
	keys[4][4]="sheets";

	document.main.src="images/furniture.png";
}

function gardening(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="gardening";
	keys[2][1]="flowers";
	keys[3][1]="grass";
	keys[4][1]="bud";

	keys[0][2]="lawn mower";
	keys[1][2]="leaves";
	keys[2][2]="petal";
	keys[3][2]="branch";
	keys[4][2]="tree";

	keys[0][3]="hose";
	keys[1][3]="seeks";
	keys[2][3]="hedge cutters";
	keys[3][3]="plant";
	keys[4][3]="hedge";

	keys[0][4]="clippers"; 
	keys[1][4]="shovel";
	keys[2][4]="pot";
	keys[3][4]="rake";
	keys[4][4]="trowel";

	document.main.src="images/gardening.png";
}

function insects(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="insect";
	keys[2][1]="caterpillar";
	keys[3][1]="slug";
	keys[4][1]="snail";

	keys[0][2]="bee";
	keys[1][2]="fly";
	keys[2][2]="spider";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/insects.png";
}

function job(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Job";
	keys[2][1]="driver";
	keys[3][1]="PA"
	keys[4][1]="cleaner";

	keys[0][2]="Doctor";
	keys[1][2]="SLT";
	keys[2][2]="dentist";
	keys[3][2]="nurse";
	keys[4][2]="police officer";

	keys[0][3]="post person";
	keys[1][3]="pilot";
	keys[2][3]="handy person";
	keys[3][3]="OT";
	keys[4][3]="physio";

	keys[0][4]="mechanic"; 
	keys[1][4]="caretaker";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/job.png";
}

function kitchenequipment(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="spoon";
	keys[2][1]="knife";
	keys[3][1]="fork";
	keys[4][1]="pan";

	keys[0][2]="bowl";
	keys[1][2]="dish cloth";
	keys[2][2]="tea towel";
	keys[3][2]="apron";
	keys[4][2]="sink";

	keys[0][3]="fridge";
	keys[1][3]="frying pan";
	keys[2][3]="plate";
	keys[3][3]="cooker";
	keys[4][3]="measuring jug";

	keys[0][4]="cup"; 
	keys[1][4]="chopping board";
	keys[2][4]="colander";
	keys[3][4]="grater";
	keys[4][4]="";

	document.main.src="images/kitchenequipment.png";
}

function leisure(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="pictures";
	links[2][1]="phone";
	links[3][1]="mp3";
	keys[4][1]="Computer Control";

	links[0][2]="want";
	links[1][2]="dvd";
	links[2][2]="tv";
	keys[3][2]="";
	keys[4][2]="volume up";

	links[0][3]="ECU";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="volume down";

	links[0][4]="mystories"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/leisure.png";
}

function littlewords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="positionwords";
	keys[2][1]="fun";
	keys[3][1]="away";
	keys[4][1]="a";

	keys[0][2]="all";
	keys[1][2]="this";
	keys[2][2]="that";
	keys[3][2]="is";
	keys[4][2]="am";

	keys[0][3]="none";
	keys[1][3]="to";
	keys[2][3]="from";
	keys[3][3]="about";
	keys[4][3]="be";

	keys[0][4]="some"; 
	keys[1][4]="with";
	keys[2][4]="and";
	keys[3][4]="at";
	keys[4][4]="the";

	document.main.src="images/littlewords.png";
}
function lunch(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="lunch";
	keys[2][1]="sandwich";
	keys[3][1]="crackers";
	keys[4][1]="tuna";


	keys[0][2]="cheese";
	keys[1][2]="ham";
	keys[2][2]="chicken";
	keys[3][2]="cheese on toast";
	keys[4][2]="beans on toast";

	keys[0][3]="soup";
	keys[1][3]="chicken soup";
	keys[2][3]="tomato soup";
	keys[3][3]="salad";
	keys[4][3]="";

	keys[0][4]="carrot soup"; 
	keys[1][4]="mushroom soup";
	keys[2][4]="vegetable soup";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/lunch.png";

}

function materials(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="material";
	keys[2][1]="wood";
	keys[3][1]="plastic";
	keys[4][1]="fabric";

	keys[0][2]="metal";
	keys[1][2]="sponge";
	keys[2][2]="glass";
	keys[3][2]="stone";
	keys[4][2]="string";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="paper";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/materials.png";
}

function meals(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="meal";
	keys[2][1]="pasty";
	keys[3][1]="spaghetti";
	keys[4][1]="pasta";


	keys[0][2]="stew";
	keys[1][2]="pizza";
	keys[2][2]="roast dinner";
	keys[3][2]="chinese food";
	keys[4][2]="curry";

	keys[0][3]="rice";
	keys[1][3]="noodles";
	keys[2][3]="pie";
	keys[3][3]="lasagna";
	keys[4][3]="ravioli";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="macaroni cheese";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/meals.png";

}

function meat(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="meat";
	keys[2][1]="bacon";
	keys[3][1]="beef";
	keys[4][1]="tuna";


	keys[0][2]="lamb";
	keys[1][2]="ham";
	keys[2][2]="chicken";
	keys[3][2]="pork chop";
	keys[4][2]="meatballs";

	keys[0][3]="fish";
	keys[1][3]="mince";
	keys[2][3]="prawn";
	keys[3][3]="fish fingers";
	keys[4][3]="sausages";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";
	document.main.src="images/meat.png";
}

function milkshake(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="milkshake";
	keys[2][1]="banana milkshake";
	keys[3][1]="strawberry milkshake";
	keys[4][1]="chocolate milkshake";


	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/milkshake.png";

}

function money(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="money";
	keys[2][1]="cheque book";
	keys[3][1]="wallet";
	keys[4][1]="purse";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/money.png";
}

function months(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="month";
	keys[2][1]="this month";
	keys[3][1]="next month";
	keys[4][1]="last month";

	keys[0][2]="January";
	keys[1][2]="February";
	keys[2][2]="March";
	keys[3][2]="April";
	keys[4][2]="May";

	keys[0][3]="June";
	keys[1][3]="July";
	keys[2][3]="August";
	keys[3][3]="September";
	keys[4][3]="October";

	keys[0][4]="November"; 
	keys[1][4]="December";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/months.png";
}

function moreaction(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="feel";
	keys[2][1]="read";
	keys[3][1]="sit";
	keys[4][1]="stand";

	keys[0][2]="wait";
	keys[1][2]="watch";
	keys[2][2]="work";
	keys[3][2]="have";
	keys[4][2]="know";

	keys[0][3]="play";
	keys[1][3]="sing";
	keys[2][3]="sleep";
	keys[3][3]="talk";
	keys[4][3]="try";

	keys[0][4]="win"; 
	keys[1][4]="lose";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/moreaction.png";
}

function mp3(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="pause/play";

	keys[0][2]="My Albums";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="MP3 Volume Up";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="MP3 Volume Down"; 
	keys[1][4]="mute";
	keys[2][4]="shuffle";
	keys[3][4]="previous track";
	keys[4][4]="next track";

	document.main.src="images/mp3.png";
}

function myday(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	links[1][1]="spelling";
	links[2][1]="numbers";
	keys[3][1]="Timetable";
	keys[4][1]="Computer control";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/myday.png";
}

function mystories(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/mystories.png";
}

function numbers(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="number";
	keys[2][1]="1";
	keys[3][1]="2";
	keys[4][1]="3";

	keys[0][2]="4";
	keys[1][2]="5";
	keys[2][2]="6";
	keys[3][2]="7";
	keys[4][2]="8";

	keys[0][3]="9";
	keys[1][3]="10";
	keys[2][3]="0";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/numbers.png";
}

function office(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="office";
	keys[2][1]="chair";
	keys[3][1]="filing cabinet";
	keys[4][1]="computer";

	keys[0][2]="photocopier";
	keys[1][2]="bin";
	keys[2][2]="desk";
	keys[3][2]="file";
	keys[4][2]="fax";

	keys[0][3]="pen";
	keys[1][3]="pencil";
	keys[2][3]="scissors";
	keys[3][3]="envelope";
	keys[4][3]="paper";

	keys[0][4]="paperclip"; 
	keys[1][4]="label";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/office.png";
}

function opposites(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="dry";
	keys[2][1]="wet";
	keys[3][1]="long";
	keys[4][1]="short";

	keys[0][2]="all gone";
	keys[1][2]="fast";
	keys[2][2]="slow";
	keys[3][2]="loud";
	keys[4][2]="quiet";

	keys[0][3]="medium";
	keys[1][3]="big";
	keys[2][3]="little";
	keys[3][3]="new";
	keys[4][3]="old";

	keys[0][4]="soft"; 
	keys[1][4]="easy";
	keys[2][4]="hard";
	keys[3][4]="clean";
	keys[4][4]="dirty";

	document.main.src="images/opposites.png";
}

function outside(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Outside place";
	keys[2][1]="street";
	keys[3][1]="Car park";
	keys[4][1]="beach";

	keys[0][2]="countryside";
	keys[1][2]="lake";
	keys[2][2]="woods";
	keys[3][2]="field";
	keys[4][2]="garden";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/outside.png";
}

function page1(){
reset();	
keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";

	keys[0][1]="hello";
	keys[1][1]="I want to talk to you";
	links[2][1]="chatting";
	links[3][1]="questions";
	links[4][1]="food";

	keys[0][2]="I";
	links[1][2]="people";
	keys[2][2]="Personal care";
	links[3][2]="littlewords";
	links[4][2]="myday";

	links[0][3]="action";
	keys[1][3]="go";
	keys[2][3]="want";
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
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="body";
	keys[2][1]="hand";
	keys[3][1]="head";
	keys[4][1]="finger";

	keys[0][2]="chest";
	keys[1][2]="ear";
	keys[2][2]="face";
	keys[3][2]="hair";
	keys[4][2]="mouth";

	keys[0][3]="back";
	keys[1][3]="nose";
	keys[2][3]="arm";
	keys[3][3]="foot";
	keys[4][3]="eye";

	keys[0][4]="stomach"; 
	keys[1][4]="neck";
	keys[2][4]="leg";
	keys[3][4]="toes";
	links[4][4]="privateparts";

	document.main.src="images/parts.png";
}

function people(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="people";
	links[2][1]="friends";
	links[3][1]="scwfriends";
	links[4][1]="supportstaff";

	keys[0][2]="I'm";
	keys[1][2]="me";
	keys[2][2]="my";
	keys[3][2]="mine";
	links[4][2]="educationstaff";

	keys[0][3]="we";
	keys[1][3]="they";
	keys[2][3]="boy";
	keys[3][3]="girl";
	links[4][3]="job";

	keys[0][4]="it"; 
	keys[1][4]="you";
	keys[2][4]="he";
	keys[3][4]="she";
	links[4][4]="family";

	document.main.src="images/people.png";
}


function petcare(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="pet care";
	keys[2][1]="dog food";
	keys[3][1]="cat food";
	keys[4][1]="fish food";

	keys[0][2]="collar";
	keys[1][2]="pet comb";
	keys[2][2]="pet blanket";
	keys[3][2]="pet bed";
	keys[4][2]="fish tank";

	keys[0][3]="treat";
	keys[1][3]="lead";
	keys[2][3]="kennel";
	keys[3][3]="pet carrier";
	keys[4][3]="pet food";

	keys[0][4]="bird feeder"; 
	keys[1][4]="care for pet";
	keys[2][4]="feed pet ";
	keys[3][4]="walk the dog";
	keys[4][4]="cage";

	document.main.src="images/petcare.png";
}

function pets(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="pet";
	keys[2][1]="cat";
	keys[3][1]="hamster";
	keys[4][1]="mouse";

	keys[0][2]="guinea pig";
	keys[1][2]="rabbit";
	keys[2][2]="horse";
	keys[3][2]="fish";
	keys[4][2]="rat";

	keys[0][3]="dog";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/pets.png";
}

function pint(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="pint";
	keys[2][1]="half pint";
	keys[3][1]="straw";
	keys[4][1]="";


	keys[0][2]="special cup";
	keys[1][2]="diet";
	keys[2][2]="sugar";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="large";
	keys[1][3]="medium";
	keys[2][3]="small";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="hot"; 
	keys[1][4]="cold";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/pint.png";
}

function places(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="place";
	keys[2][1]="my day places";
	links[3][1]="shops";
	links[4][1]="outside";

	keys[0][2]="work";
	keys[1][2]="school or college";
	keys[2][2]="town";
	keys[3][2]="hospital";
	keys[4][2]="airport";

	keys[0][3]="dentist";
	keys[1][3]="bank";
	keys[2][3]="doctors";
	keys[3][3]="pool";
	keys[4][3]="restaurant";

	keys[0][4]="library"; 
	keys[1][4]="pub";
	keys[2][4]="post office";
	keys[3][4]="cinema";
	keys[4][4]="";

	document.main.src="images/places.png";
}

function positionwords(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="up";
	keys[2][1]="down";
	keys[3][1]="in";
	keys[4][1]="out";

	keys[0][2]="";
	keys[1][2]="here";
	keys[2][2]="there";
	keys[3][2]="on";
	keys[4][2]="off";

	keys[0][3]="middle";
	keys[1][3]="top";
	keys[2][3]="bottom";
	keys[3][3]="under";
	keys[4][3]="over";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/positionwords.png";
}

function privateparts(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="private parts";
	keys[2][1]="bottom";
	keys[3][1]="breasts";
	keys[4][1]="vagina";

	keys[0][2]="penis";
	keys[1][2]="under arm hair";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/privateparts.png";
}

function questions(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="who";
	keys[2][1]="why";
	keys[3][1]="when";
	keys[4][1]="could";

	keys[0][2]="what";
	keys[1][2]="how";
	keys[2][2]="where";
	keys[3][2]="which";
	keys[4][2]="would";

	keys[0][3]="how much?";
	keys[1][3]="can I see that?";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="should";

	keys[0][4]="how are you?"; 
	keys[1][4]="What have you been doing?";
	keys[2][4]="What do you think?";
	keys[3][4]="What's next?";
	keys[4][4]="What's that?";

	document.main.src="images/questions.png";
}

function salad(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="salad";
	keys[2][1]="olives";
	keys[3][1]="tomato";
	keys[4][1]="spring onion";

	keys[0][2]="celery";
	keys[1][2]="cucumber";
	keys[2][2]="pepper";
	keys[3][2]="radish";
	keys[4][2]="lettuce";

	keys[0][3]="beetroot";
	keys[1][3]="secret pepper";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/salad.png";
}

function sauces(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="tomato sauce";
	keys[2][1]="mayonnaise";
	keys[3][1]="peanut butter";
	keys[4][1]="pepper";


	keys[0][2]="salt";
	keys[1][2]="gravy";
	keys[2][2]="sugar";
	keys[3][2]="jam";
	keys[4][2]="brown sauce";

	keys[0][3]="vingar";
	keys[1][3]="spices";
	keys[2][3]="honey";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/sauces.png";
}

function scwfriends(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="School/college/work mates";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/scwfriends.png";
}

function shapes(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="shape";
	keys[2][1]="star";
	keys[3][1]="triangle";
	keys[4][1]="square";

	keys[0][2]="rectangle";
	keys[1][2]="circle";
	keys[2][2]="hexagon";
	keys[3][2]="pentagon";
	keys[4][2]="oval";

	keys[0][3]="diamond";
	keys[1][3]="heart";
	keys[2][3]="line";
	keys[3][3]="curve";
	keys[4][3]="";

	keys[0][4]="sphere"; 
	keys[1][4]="cube";
	keys[2][4]="cylinder";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/shapes.png";
}

function shops(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="shop";
	keys[2][1]="supermarket";
	keys[3][1]="butchers";
	keys[4][1]="shopping centre";

	keys[0][2]="bakers";
	keys[1][2]="veg shop";
	keys[2][2]="department store";
	keys[3][2]="clothes shop";
	keys[4][2]="music shop";

	keys[0][3]="market";
	keys[1][3]="coffee shop";
	keys[2][3]="drive through";
	keys[3][3]="pharmacy";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/shops.png";
}

function smoothy(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes"; 
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";
	
	links[0][1]="1";
	keys[1][1]="flavor";
	keys[2][1]="raison";
	keys[3][1]="banana";
	keys[4][1]="";


	keys[0][2]="fruit";
	keys[1][2]="mint";
	keys[2][2]="toffee";
	keys[3][2]="lime";
	keys[4][2]="lemon";


	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="chocolate";
	keys[4][3]="pineapple";

	keys[0][4]="";
	keys[1][4]="strawberry";
	keys[2][4]="";
	keys[3][4]="cherry";
	keys[4][4]="blackberry";


	document.main.src="images/smoothy.png";

}

function snack(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";


	links[0][1]="1";
	keys[1][1]="snack";
	keys[2][1]="raison";
	keys[3][1]="ice lolly";
	keys[4][1]="cake";


	keys[0][2]="fruit";
	keys[1][2]="cream";
	keys[2][2]="custard";
	keys[3][2]="yoghurt";
	keys[4][2]="crisps";

	keys[0][3]="sweets";
	keys[1][3]="candy floss";
	keys[2][3]="pie";
	keys[3][3]="chocolate";
	keys[4][3]="ice cream";

	keys[0][4]="cup cake"; 
	keys[1][4]="rice cake";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/snack.png";
}

function specialdays(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="special day";
	keys[2][1]="new year";
	keys[3][1]="valentines day";
	keys[4][1]="bank holiday";

	keys[0][2]="easter";
	keys[1][2]="birthday";
	keys[2][2]="holiday";
	keys[3][2]="wedding";
	keys[4][2]="bonfire night";

	keys[0][3]="halloween";
	links[1][3]="christmas";
	keys[2][3]="party";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/specialdays.png";
}

function spelling(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="a";
	keys[2][1]="b";
	keys[3][1]="c";
	keys[4][1]="d";

	keys[0][2]="Backspace";
	keys[1][2]="e";
	keys[2][2]="f";
	keys[3][2]="g";
	keys[4][2]="h";

	keys[0][3]="N-Z";
	keys[1][3]="i";
	keys[2][3]="j";
	keys[3][3]="k";
	keys[4][3]="l";

	links[0][4]="clear"; 
	keys[1][4]="m";
	keys[2][4]=" ";
	keys[3][4]="shift";
	keys[4][4]="?";

	document.main.src="images/spelling.png";
}

function sports(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="sports";
	keys[2][1]="football";
	keys[3][1]="rugby";
	keys[4][1]="cycling";

	keys[0][2]="boccia";
	keys[1][2]="motor sport";
	keys[2][2]="golf";
	keys[3][2]="fishig";
	keys[4][2]="pool";

	keys[0][3]="bowling";
	keys[1][3]="tennis";
	keys[2][3]="horse riding";
	keys[3][3]="skiing";
	keys[4][3]="dancing";

	keys[0][4]="gymnastics"; 
	keys[1][4]="athletics";
	keys[2][4]="outdoor sport";
	keys[3][4]="judo";
	keys[4][4]="";

	document.main.src="images/sports.png";
}

function supportstaff(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Support staff";
	keys[2][1]="";
	keys[3][1]="";
	keys[4][1]="";

	keys[0][2]="";
	keys[1][2]="";
	keys[2][2]="";
	keys[3][2]="";
	keys[4][2]="";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/supportstaff.png";
}

function things(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Things";
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
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/things.png";
}

function thingsthathelp(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="disabilities";
	keys[2][1]="communication book";
	keys[3][1]="communication aid";
	keys[4][1]="touch screen";

	keys[0][2]="wheelchair";
	keys[1][2]="power wheelchair";
	keys[2][2]="communication aid mount";
	keys[3][2]="switch mount";
	keys[4][2]="switch";

	keys[0][3]="hoist";
	keys[1][3]="hearing aid";
	keys[2][3]="glasses";
	keys[3][3]="medicine";
	keys[4][3]="apointment";

	keys[0][4]="Toilet chair"; 
	keys[1][4]="ecu";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/thingsthathelp.png";
}

function time(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Time";
	links[2][1]="days";
	links[3][1]="months";
	links[4][1]="specialdays";

	keys[0][2]="yesterday";
	keys[1][2]="today";
	keys[2][2]="tomorrow";
	keys[3][2]="later";
	keys[4][2]="late";

	keys[0][3]="morning";
	keys[1][3]="afternoon";
	keys[2][3]="evening";
	keys[3][3]="now";
	keys[4][3]="never";

	keys[0][4]="again"; 
	keys[1][4]="ready";
	keys[2][4]="hurry";
	keys[3][4]="before";
	keys[4][4]="after";

	document.main.src="images/time.png";
}

function toiletries(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="toiletries";
	keys[2][1]="soap";
	keys[3][1]="toothbrush";
	keys[4][1]="toothpaste";

	keys[0][2]="bubble bath";
	keys[1][2]="deodorant";
	keys[2][2]="shampoo";
	keys[3][2]="conditioner";
	keys[4][2]="Make-up";

	keys[0][3]="razor";
	keys[1][3]="shaving foam";
	keys[2][3]="aftershave";
	keys[3][3]="toilet paper";
	keys[4][3]="sanitary items";

	keys[0][4]="hairdryer"; 
	keys[1][4]="comb";
	keys[2][4]="brush";
	keys[3][4]="hair spray";
	keys[4][4]="hair dye";

	document.main.src="images/toiletries.png";
}

function tools(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="tools";
	keys[2][1]="clamp";
	keys[3][1]="drill";
	keys[4][1]="torch";

	keys[0][2]="goggles";
	keys[1][2]="hammer";
	keys[2][2]="hardhat";
	keys[3][2]="drill bit";
	keys[4][2]="pliers";

	keys[0][3]="sandpaper";
	keys[1][3]="wrench";
	keys[2][3]="screwdriver";
	keys[3][3]="chisel";
	keys[4][3]="extension lead";

	keys[0][4]="screw"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	links[4][4]="materials";

	document.main.src="images/tools.png";
}

function transport(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="transport";
	keys[2][1]="car";
	keys[3][1]="train";
	keys[4][1]="bus";

	keys[0][2]="caravan";
	keys[1][2]="fire engine";
	keys[2][2]="ambulance";
	keys[3][2]="ship";
	keys[4][2]="airplane";

	keys[0][3]="tractor";
	keys[1][3]="lorry";
	keys[2][3]="motor home";
	keys[3][3]="bike";
	keys[4][3]="police car";

	keys[0][4]="rowing boat"; 
	keys[1][4]="bin lorry";
	keys[2][4]="taxi";
	keys[3][4]="underground";
	keys[4][4]="";

	document.main.src="images/transport.png";
}

function tv(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="1";
	keys[2][1]="2";
	keys[3][1]="3";
	keys[4][1]="TV on/off";

	keys[0][2]="";
	keys[1][2]="4";
	keys[2][2]="5";
	keys[3][2]="6";
	keys[4][2]="";

	keys[0][3]="TV volume UP";
	keys[1][3]="7";
	keys[2][3]="8";
	keys[3][3]="9";
	keys[4][3]="";

	keys[0][4]="TV volume Down"; 
	keys[1][4]="mute";
	keys[2][4]="0";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/tv.png";
}

function vegetables(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes ";
	keys[1][0]=" ";
	keys[2][0]=" ";
	keys[3][0]="yes ";
	keys[4][0]="no";


	links[0][1]="1";
	links[1][1]="vegtables";
	keys[2][1]="potato";
	keys[3][1]="aborigine";
	keys[4][1]="broccali";


	keys[0][2]="butternut squash";
	keys[1][1]="cabbage";
	keys[2][2]="cauliflower";
	keys[3][2]="courgette";
	keys[4][2]="carrot";

	keys[0][3]="leek";
	keys[1][3]="asparagus";
	keys[2][3]="peas";
	keys[3][3]="onion";
	keys[4][3]="green beans";

	keys[0][4]="pumpkin"; 
	keys[1][4]="mushroom";
	keys[2][4]="turnip";
	keys[3][4]="sweetcorn";
	keys[4][4]="";

	document.main.src="images/vegetables.jpg";

}

function want(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="to go outside";
	keys[2][1]="to call someone";
	keys[3][1]="to sit down";
	keys[4][1]="to stand up";

	keys[0][2]="to do something else";
	keys[1][2]="to watch something";
	keys[2][2]="to go on holiday";
	keys[3][2]="to have a go";
	keys[4][2]="";

        keys[0][2]="to play";
	keys[1][3]="to listen to something";
	keys[2][3]="to go swimming";
	keys[3][3]="";
	keys[4][3]="to cook something";

	links[0][4]="mystories"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="to go home";

	document.main.src="images/want.png";
}

function wateranimals(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="water animals";
	keys[2][1]="fish";
	keys[3][1]="whale";
	keys[4][1]="prawn";

	keys[0][2]="crab";
	keys[1][2]="dolphin";
	keys[2][2]="jellyfish";
	keys[3][2]="tropical fish";
	keys[4][2]="shark";

	keys[0][3]="";
	keys[1][3]="";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]=""; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/wateranimals.png";
}

function weather(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="Weather ";
	keys[2][1]="rain";
	keys[3][1]="sun";
	keys[4][1]="snow";

	keys[0][2]="It is";
	keys[1][2]="windy";
	keys[2][2]="cloudy";
	keys[3][2]="foggy";
	keys[4][2]="frezing";

	keys[0][3]="icey";
	keys[1][3]="stormy";
	keys[2][3]="";
	keys[3][3]="";
	keys[4][3]="";

	keys[0][4]="hot"; 
	keys[1][4]="cold";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/weather.png";
}

function wildanimals(){
reset();
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="wild animal";
	keys[2][1]="zebra";
	keys[3][1]="snake";
	keys[4][1]="monkey";

	keys[0][2]="bear";
	keys[1][2]="camel";
	keys[2][2]="chetah";
	keys[3][2]="deer";
	keys[4][2]="elephant";

	keys[0][3]="giraffe";
	keys[1][3]="gorilla";
	keys[2][3]="hippo";
	keys[3][3]="lion";
	keys[4][3]="tiger";

	keys[0][4]="rhinoceros"; 
	keys[1][4]="";
	keys[2][4]="";
	keys[3][4]="";
	keys[4][4]="";

	document.main.src="images/wildanimals.png";
}

function wml(){
	var i,j
		for(j=0;j<5;j++)
		{
			for(i=0;i<5;i++)
			{
				keys[i][j]="link";
				links[i][j]="blank";
			}
		}
	keys[0][0]="yes";
	keys[1][0]="";
	keys[2][0]="";
	keys[3][0]="";
	keys[4][0]="no";

	links[0][1]="1";
	keys[1][1]="cool";
	keys[2][1]="Are you ignoring me?";
	keys[3][1]="Leave me alone";
	keys[4][1]="Lucky";

	keys[0][2]="Chill out";
	keys[1][2]="Go away";
	keys[2][2]="looser";
	keys[3][2]="wow";
	keys[4][2]="minga";

	keys[0][3]="Your doing my head in";
	keys[1][3]="Whatever";
	keys[2][3]="No way";
	keys[3][3]="Shut up";
	keys[4][3]="Where you put on this earth to annoy me?";

	keys[0][4]="don't"; 
	keys[1][4]="not";
	keys[2][4]="";
	keys[3][4]="burp!";
	keys[4][4]="fart!";

	document.main.src="images/wml.png";
}
