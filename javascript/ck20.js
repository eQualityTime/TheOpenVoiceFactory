grid_size_rows=5
grid_size_columns=5


function top_page(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Top page";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
utterances[0][1]="Hello";
utterances[1][1]="I want to talk to you.";
     links[2][1]="chatting";
     links[3][1]="questions";
     links[4][1]="food";
utterances[0][2]="I";
     links[1][2]="people";
     links[2][2]="personal_care";
     links[3][2]="little_words";
     links[4][2]="my_day";
     links[0][3]="action_words";
utterances[1][3]="go";
utterances[2][3]="want";
     links[3][3]="describing";
     links[4][3]="things";
utterances[0][4]="Clear";
     links[1][4]="time";
     links[2][4]="places";
     links[3][4]="leisure";
links[4][4]="deleteword";
document.main.src="ck20/CK20.001.png";

}

function chatting(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="chatting";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="about_me";
     links[2][1]="wml";
utterances[3][1]="I cant find what I want to say.";
utterances[4][1]="bye";
utterances[0][2]="Im fine";
utterances[1][2]="ok";
utterances[2][2]="Im not so good";
utterances[3][2]="please";
utterances[4][2]="thank you";
utterances[0][3]="sorry";
utterances[1][3]="excuse me";
utterances[2][3]="maybe";
utterances[3][3]="really";
utterances[4][3]="I dont know";
     links[0][4]="my_stories";
utterances[1][4]="I love you";
utterances[2][4]="but";
utterances[3][4]="Ouch";
utterances[4][4]="so";
document.main.src="ck20/CK20.002.png";

}

function food_chat(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Food chat";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="I like it";
utterances[2][1]="Its grose";
utterances[3][1]="Its spicy";
utterances[4][1]="Cut up food";
utterances[0][2]="Can I have some more?";
utterances[1][2]="Can I have a drink?";
utterances[2][2]="wipe my face";
utterances[3][2]="please";
utterances[4][2]="thank you";
utterances[0][3]="Whats for dinner?";
utterances[1][3]="What have you been doing?";
utterances[2][3]="Ive had enough";
utterances[3][3]="eat";
utterances[4][3]="drink";
utterances[0][4]="Its too hot";
utterances[1][4]="Its too cold";
utterances[2][4]="full";
utterances[3][4]="empty";
utterances[4][4]="link";
document.main.src="ck20/CK20.003.png";

}

function about_me(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="About me";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Name";
utterances[2][1]="I live in";
utterances[3][1]="Birthday";
utterances[4][1]="age";
utterances[0][2]="I live with";
utterances[1][2]="pet";
utterances[2][2]="--------------";
utterances[3][2]="--------------";
utterances[4][2]="--------------";
utterances[0][3]="--------------";
utterances[1][3]="--------------";
utterances[2][3]="--------------";
utterances[3][3]="--------------";
utterances[4][3]="--------------";
utterances[0][4]="--------------";
utterances[1][4]="mobile";
     links[2][4]="about_you";
utterances[3][4]="--------------";
utterances[4][4]="--------------";
document.main.src="ck20/CK20.004.png";

}

function about_you(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="About you";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Whats your name?";
utterances[2][1]="Where do you live?";
utterances[3][1]="Whens your Birthday?";
utterances[4][1]="How old are you?";
utterances[0][2]="Who do you live with?";
utterances[1][2]="--------------";
utterances[2][2]="--------------";
utterances[3][2]="--------------";
utterances[4][2]="--------------";
utterances[0][3]="Whats your mobile number?";
utterances[1][3]="--------------";
utterances[2][3]="--------------";
utterances[3][3]="--------------";
utterances[4][3]="--------------";
utterances[0][4]="--------------";
utterances[1][4]="--------------";
utterances[2][4]="--------------";
utterances[3][4]="--------------";
utterances[4][4]="--------------";
document.main.src="ck20/CK20.005.png";

}

function wml(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="wml";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="cool";
utterances[2][1]="Are you ignoring me?";
utterances[3][1]="leave me alone";
utterances[4][1]="lucky";
utterances[0][2]="chill out";
utterances[1][2]="go away";
utterances[2][2]="looser";
utterances[3][2]="wow";
utterances[4][2]="minga";
utterances[0][3]="Your doing my head in.";
utterances[1][3]="whatever";
utterances[2][3]="no way";
utterances[3][3]="shut up";
utterances[4][3]="Were you put on this earth to annoy me?";
utterances[0][4]="don't";
utterances[1][4]="not";
utterances[2][4]="well";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.006.png";

}

function my_stories(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="My Stories";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="My stories";
utterances[2][1]="C";
utterances[3][1]="link";
utterances[4][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="C";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="C";
document.main.src="ck20/CK20.007.png";

}

function questions(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="questions";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="?";
utterances[2][1]="why";
utterances[3][1]="when";
utterances[4][1]="could";
utterances[0][2]="what";
utterances[1][2]="who";
utterances[2][2]="where";
utterances[3][2]="which";
utterances[4][2]="would";
utterances[0][3]="how";
utterances[1][3]="Can I see that?";
utterances[2][3]="How much?";
utterances[3][3]="link";
utterances[4][3]="should";
utterances[0][4]="How are you?";
utterances[1][4]="What have you been doing?";
utterances[2][4]="What do you think?";
utterances[3][4]="Whats  next?";
utterances[4][4]="Whats that?";
document.main.src="ck20/CK20.008.png";

}

function food(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Food";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="breakfast";
     links[2][1]="lunch";
     links[3][1]="meals";
     links[4][1]="meat_and_fish";
utterances[0][2]="Im hungry";
     links[1][2]="vegetables";
     links[2][2]="fruit";
     links[3][2]="drinks";
     links[4][2]="fast_food";
utterances[0][3]="Im thirsty";
     links[1][3]="snackspudding";
     links[2][3]="saucesingredients";
     links[3][3]="salad";
     links[4][3]="cooking_words";
utterances[0][4]="some";
utterances[1][4]="with";
utterances[2][4]="&";
     links[3][4]="food_chat";
utterances[4][4]="Favorite food";
document.main.src="ck20/CK20.009.png";

}

function breakfast(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="breakfast";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="breakfast";
utterances[2][1]="cereal";
utterances[3][1]="porridge";
utterances[4][1]="bran";
utterances[0][2]="toast";
utterances[1][2]="butter";
utterances[2][2]="croissant";
utterances[3][2]="jam";
utterances[4][2]="muesli";
utterances[0][3]="boiled egg";
utterances[1][3]="fried egg";
utterances[2][3]="scrambled egg";
utterances[3][3]="bagel";
utterances[4][3]="full english";
utterances[0][4]="beans";
utterances[1][4]="fruit";
utterances[2][4]="pancakes";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.010.png";

}

function fruit(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="fruit";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fruit";
utterances[2][1]="apple";
utterances[3][1]="banana";
utterances[4][1]="avocado";
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
utterances[1][4]="strawberry";
utterances[2][4]="kiwi";
utterances[3][4]="cherry";
utterances[4][4]="blackberry";
document.main.src="ck20/CK20.011.png";

}

function vegetables(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="vegetables";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="vegetables";
     links[2][1]="potato";
utterances[3][1]="aborigine";
utterances[4][1]="broccoli";
utterances[0][2]="butternut squash";
utterances[1][2]="cabbage";
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
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.012.png";

}

function fizzy_drinks(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Fizzy drinks";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fizzy drink";
utterances[2][1]="orangeade";
utterances[3][1]="lemonade";
utterances[4][1]="Coke";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.013.png";

}

function drinks(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="drinks";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="drink";
utterances[2][1]="coffee";
utterances[3][1]="tea";
utterances[4][1]="hot chocolate";
     links[0][2]="describing_drinks";
utterances[1][2]="milk";
utterances[2][2]="water";
utterances[3][2]="link";
utterances[4][2]="link";
     links[0][3]="juice";
     links[1][3]="smoothie";
     links[2][3]="milkshake";
     links[3][3]="fizzy_drink";
     links[4][3]="alcohol";
utterances[0][4]="Clear";
utterances[1][4]="with";
utterances[2][4]="&";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.014.png";

}

function flavour(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="flavour";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="flavour";
utterances[2][1]="raison";
utterances[3][1]="banana";
utterances[4][1]="link";
utterances[0][2]="fruit";
utterances[1][2]="mint";
utterances[2][2]="toffee";
utterances[3][2]="lime";
utterances[4][2]="lemon";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="chocolate";
utterances[4][3]="pineapple";
utterances[0][4]="Clear";
utterances[1][4]="strawberry";
utterances[2][4]="link";
utterances[3][4]="cherry";
utterances[4][4]="blackberry";
document.main.src="ck20/CK20.015.png";

}

function milkshake(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="milkshake";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="milkshake";
utterances[2][1]="banana milkshake";
utterances[3][1]="strawberry milkshake";
utterances[4][1]="chocolate milkshake";
utterances[0][2]="";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.016.png";

}

function fast_food(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Fast food";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fast food";
utterances[2][1]="chips";
utterances[3][1]="chicken nuggets";
utterances[4][1]="burger";
utterances[0][2]="hot dog";
utterances[1][2]="pizza";
utterances[2][2]="fish & chips";
utterances[3][2]="beer";
utterances[4][2]="cheese burger";
utterances[0][3]="sweets";
utterances[1][3]="candy floss";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.017.png";

}

function lunch(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="lunch";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="lunch";
utterances[2][1]="sandwich";
utterances[3][1]="crackers";
utterances[4][1]="tuna";
utterances[0][2]="cheese";
utterances[1][2]="ham";
utterances[2][2]="chicken";
utterances[3][2]="beer";
utterances[4][2]="beans on toast";
utterances[0][3]="soup";
utterances[1][3]="chicken soup";
utterances[2][3]="tomato soup";
utterances[3][3]="salad";
utterances[4][3]="";
utterances[0][4]="carrot soup";
utterances[1][4]="mushroom soup";
utterances[2][4]="vegetable soup";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.018.png";

}

function meat_and_fish(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Meat and fish";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="meat";
utterances[2][1]="bacon";
utterances[3][1]="beef";
utterances[4][1]="tuna";
utterances[0][2]="lamb";
utterances[1][2]="ham";
utterances[2][2]="chicken";
utterances[3][2]="beer";
utterances[4][2]="meatballs";
utterances[0][3]="fish";
utterances[1][3]="mince";
utterances[2][3]="prawn";
utterances[3][3]="fish fingers";
utterances[4][3]="sausages";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.019.png";

}

function meal(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="meal";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="meal";
utterances[2][1]="pasty";
utterances[3][1]="spaghetti";
utterances[4][1]="pasta";
utterances[0][2]="stew";
utterances[1][2]="pizza";
utterances[2][2]="roast dinner";
utterances[3][2]="beer";
utterances[4][2]="curry";
utterances[0][3]="rice";
utterances[1][3]="noodles";
utterances[2][3]="pie";
utterances[3][3]="lasagna";
utterances[4][3]="ravioli";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="Macaroni cheese";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.020.png";

}

function potato(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="potato";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="potato";
utterances[2][1]="chips";
utterances[3][1]="mash potato";
utterances[4][1]="baked potato";
utterances[0][2]="sweet potato";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="Potato";
utterances[2][3]="link";
utterances[3][3]="potato salad";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.021.png";

}

function describing_drinks(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Describing drinks";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="pint";
utterances[2][1]="half pint";
utterances[3][1]="straw";
utterances[4][1]="link";
utterances[0][2]="special cup";
utterances[1][2]="diet";
utterances[2][2]="sugar";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="large";
utterances[1][3]="medium";
utterances[2][3]="small";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="hot";
utterances[1][4]="cold";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.022.png";

}

function snackspudding(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Snacks/pudding";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="snack";
utterances[2][1]="raison";
     links[3][1]="ice_lolly";
utterances[4][1]="cake";
utterances[0][2]="custard";
utterances[1][2]="cream";
     links[2][2]="fruit";
     links[3][2]="yoghurt";
utterances[4][2]="crisps";
utterances[0][3]="sweets";
utterances[1][3]="candy floss";
utterances[2][3]="pie";
utterances[3][3]="chocolate";
     links[4][3]="ice_cream";
utterances[0][4]="cup cake";
utterances[1][4]="rice cake";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.023.png";

}

function sauces(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="sauces";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="tomato sauce";
utterances[2][1]="mayonnaise";
utterances[3][1]="peanut butter";
utterances[4][1]="pepper";
utterances[0][2]="salt";
utterances[1][2]="gravy";
utterances[2][2]="sugar";
utterances[3][2]="jam";
utterances[4][2]="brown sauce";
utterances[0][3]="vinegar";
utterances[1][3]="spices";
utterances[2][3]="honey";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.024.png";

}

function salad(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="salad";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="salad";
utterances[2][1]="olives";
utterances[3][1]="tomato";
utterances[4][1]="spring onion";
utterances[0][2]="celery";
utterances[1][2]="cucumber";
utterances[2][2]="pepper";
utterances[3][2]="beer";
utterances[4][2]="lettuce";
utterances[0][3]="beetroot";
utterances[1][3]="chili pepper";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.025.png";

}

function alcohol(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="alcohol";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="alcohol";
utterances[2][1]="beer";
utterances[3][1]="white wine";
utterances[4][1]="red wine";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.026.png";

}

function juice(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="juice";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="juice";
utterances[2][1]="apple juice";
utterances[3][1]="orange juice";
utterances[4][1]="blackcurrant juice";
utterances[0][2]="pineapple juice";
utterances[1][2]="grape juice";
utterances[2][2]="grapefruit juice";
utterances[3][2]="cranberry juice";
utterances[4][2]="tomato juice";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.027.png";

}

function cooking_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Cooking words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="it";
utterances[1][4]="link";
utterances[2][4]="link";
     links[3][4]="kitchen_equipment";
utterances[4][4]="Dont burn it";
document.main.src="ck20/CK20.028.png";

}

function kitchen_equipment(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Kitchen equipment";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="spoon";
utterances[2][1]="knife";
utterances[3][1]="fork";
utterances[4][1]="pan";
utterances[0][2]="bowl";
utterances[1][2]="dish cloth";
utterances[2][2]="tea towel";
utterances[3][2]="beer";
utterances[4][2]="sink";
utterances[0][3]="fridge";
utterances[1][3]="frying pan";
utterances[2][3]="plate";
utterances[3][3]="cooker";
utterances[4][3]="measuring jug";
utterances[0][4]="cup";
utterances[1][4]="chopping board";
utterances[2][4]="colander";
utterances[3][4]="greater";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.029.png";

}

function people(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="people";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="people";
     links[2][1]="friends";
     links[3][1]="schoolcollegework_mates";
     links[4][1]="support_staff";
utterances[0][2]="link";
utterances[1][2]="me";
utterances[2][2]="link";
utterances[3][2]="mine";
     links[4][2]="education_staff";
utterances[0][3]="link";
utterances[1][3]="they";
utterances[2][3]="boy";
utterances[3][3]="girl";
     links[4][3]="job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="she";
     links[4][4]="family";
document.main.src="ck20/CK20.030.png";

}

function friends(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="friends";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
utterances[2][1]="link";
utterances[3][1]="School/college/work mates";
utterances[4][1]="link";
utterances[0][2]="";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="Education staff";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="Job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.031.png";

}

function scwfriends(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="scwfriends";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="School/college/work mates";
utterances[2][1]="link";
utterances[3][1]="School/college/work mates";
utterances[4][1]="link";
utterances[0][2]="";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="Education staff";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="Job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.032.png";

}

function support_staff(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Support staff";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Support staff";
utterances[2][1]="link";
utterances[3][1]="School/college/work mates";
utterances[4][1]="link";
utterances[0][2]="";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="Education staff";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="Job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.033.png";

}

function education_staff(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Education staff";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Education staff";
utterances[2][1]="link";
utterances[3][1]="School/college/work mates";
utterances[4][1]="link";
utterances[0][2]="";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="Education staff";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="Job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.034.png";

}

function job(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="job";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Job";
utterances[2][1]="driver";
utterances[3][1]="PA";
utterances[4][1]="cleaner";
utterances[0][2]="doctor";
utterances[1][2]="SLT";
utterances[2][2]="link";
utterances[3][2]="nurse";
utterances[4][2]="police officer";
utterances[0][3]="post person";
utterances[1][3]="pilot";
utterances[2][3]="handy person";
utterances[3][3]="OT";
utterances[4][3]="physio";
utterances[0][4]="mechanic";
utterances[1][4]="caretaker";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.035.png";

}

function family(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="family";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Dad";
utterances[2][1]="Mum";
utterances[3][1]="lady";
utterances[4][1]="man";
utterances[0][2]="family";
utterances[1][2]="link";
utterances[2][2]="sister";
utterances[3][2]="baby";
utterances[4][2]="child";
utterances[0][3]="link";
utterances[1][3]="Grandad";
utterances[2][3]="Granma";
utterances[3][3]="link";
utterances[4][3]="Job";
utterances[0][4]="link";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Family";
document.main.src="ck20/CK20.036.png";

}

function personal_care(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Personal care";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="I need the toilet";
utterances[2][1]="I need some help";
     links[3][1]="i_dont_feel_well";
     links[4][1]="body_parts";
     links[0][2]="clothes";
utterances[1][2]="I want to chill out on my bed";
utterances[2][2]="Id like a shave";
utterances[3][2]="I need my medication";
utterances[4][2]="Please can you clean my glasses";
utterances[0][3]="Can you do my nails please";
utterances[1][3]="Id like a shower";
utterances[2][3]="Id love a bath";
     links[3][3]="ive_got_a_problem_with_my";
     links[4][3]="toiletries";
utterances[0][4]="I need to get changed";
utterances[1][4]="link";
utterances[2][4]="Can you do my hair please";
utterances[3][4]="link";
utterances[4][4]="link";
document.main.src="ck20/CK20.037.png";

}

function i_dont_feel_well(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="I dont feel well";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="i_have_pain_in_my";
utterances[2][1]="I feel";
utterances[3][1]="headache";
utterances[4][1]="ouch";
utterances[0][2]="chest pain";
utterances[1][2]="earache";
utterances[2][2]="link";
utterances[3][2]="sick";
utterances[4][2]="toothache";
utterances[0][3]="";
utterances[1][3]="a cold";
utterances[2][3]="link";
utterances[3][3]="itch";
utterances[4][3]="link";
utterances[0][4]="stomach ache";
utterances[1][4]="a sore throat";
utterances[2][4]="cramp";
utterances[3][4]="link";
utterances[4][4]="C";
document.main.src="ck20/CK20.038.png";

}

function position_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Position words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="position_words";
utterances[2][1]="link";
utterances[3][1]="away";
utterances[4][1]="a";
utterances[0][2]="all";
utterances[1][2]="this";
utterances[2][2]="that";
utterances[3][2]="is";
utterances[4][2]="am";
utterances[0][3]="none";
utterances[1][3]="link";
utterances[2][3]="from";
utterances[3][3]="about";
utterances[4][3]="be";
utterances[0][4]="some";
utterances[1][4]="with";
utterances[2][4]="&";
utterances[3][4]="at";
utterances[4][4]="the";
document.main.src="ck20/CK20.039.png";

}

function little_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Little words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="up";
utterances[2][1]="down";
utterances[3][1]="in";
utterances[4][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="there";
utterances[3][2]="on";
utterances[4][2]="off";
utterances[0][3]="middle";
utterances[1][3]="top";
utterances[2][3]="bottom";
utterances[3][3]="under";
utterances[4][3]="over";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.040.png";

}

function my_day(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="My day";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="spelling";
     links[2][1]="numbers";
     links[3][1]="timetable";
     links[4][1]="computer_control";
     links[0][2]="im_hungry";
     links[1][2]="link";
     links[2][2]="link";
     links[3][2]="link";
     links[4][2]="link";
     links[0][3]="link";
     links[1][3]="link";
     links[2][3]="link";
     links[3][3]="link";
     links[4][3]="link";
     links[0][4]="link";
     links[1][4]="with";
     links[2][4]="and";
     links[3][4]="link";
     links[4][4]="favorite_food";
document.main.src="ck20/CK20.041.png";

}

function spelling_am(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Spelling, a-m";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="a";
utterances[2][1]="b";
utterances[3][1]="c";
utterances[4][1]="d";
utterances[0][2]="Backspace";
utterances[1][2]="e";
utterances[2][2]="f";
utterances[3][2]="g";
utterances[4][2]="h";
     links[0][3]="nz";
utterances[1][3]="i";
utterances[2][3]="j";
utterances[3][3]="k";
utterances[4][3]="l";
utterances[0][4]="Clear";
utterances[1][4]="m";
utterances[2][4]="Space";
utterances[3][4]="Shift";
utterances[4][4]="?";
document.main.src="ck20/CK20.042.png";

}

function nz(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="N-Z";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="n";
utterances[2][1]="o";
utterances[3][1]="p";
utterances[4][1]="q";
utterances[0][2]="Backspace";
utterances[1][2]="r";
utterances[2][2]="s";
utterances[3][2]="t";
utterances[4][2]="u";
     links[0][3]="am";
utterances[1][3]="v";
utterances[2][3]="w";
utterances[3][3]="x";
utterances[4][3]="y";
utterances[0][4]="Clear";
utterances[1][4]="z";
utterances[2][4]="Space";
utterances[3][4]="Shift";
utterances[4][4]="!";
document.main.src="ck20/CK20.043.png";

}

function numbers(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="numbers";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
     links[4][4]="calculator";
document.main.src="ck20/CK20.044.png";

}

function action_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Action words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="do";
utterances[2][1]="help";
utterances[3][1]="look";
utterances[4][1]="link";
utterances[0][2]="stop";
utterances[1][2]="come";
utterances[2][2]="get";
utterances[3][2]="give";
utterances[4][2]="think";
utterances[0][3]="link";
utterances[1][3]="listen";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="tell";
utterances[0][4]="take";
utterances[1][4]="turn";
utterances[2][4]="open";
utterances[3][4]="close";
     links[4][4]="more_action_words";
document.main.src="ck20/CK20.045.png";

}

function more_action_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="More action words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="feel";
utterances[2][1]="read";
utterances[3][1]="sit";
utterances[4][1]="stand";
utterances[0][2]="wait";
utterances[1][2]="watch";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="know";
utterances[0][3]="play";
utterances[1][3]="sing";
utterances[2][3]="sleep";
utterances[3][3]="talk";
utterances[4][3]="try";
utterances[0][4]="win";
utterances[1][4]="lose";
utterances[2][4]="finish";
utterances[3][4]="need";
     links[4][4]="yet_more_action_words";
document.main.src="ck20/CK20.046.png";

}

function yet_more_action_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Yet more action words";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
utterances[2][1]="buy";
utterances[3][1]="link";
utterances[4][1]="count";
utterances[0][2]="find";
utterances[1][2]="hear";
utterances[2][2]="hold";
utterances[3][2]="let";
utterances[4][2]="live";
utterances[0][3]="ride";
utterances[1][3]="say";
utterances[2][3]="share";
utterances[3][3]="walk";
utterances[4][3]="link";
utterances[0][4]="wash";
utterances[1][4]="write";
utterances[2][4]="link";
utterances[3][4]="ask";
     links[4][4]="back_top_action_words";
document.main.src="ck20/CK20.047.png";

}

function describing(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="describing";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="feelings";
     links[2][1]="colours";
     links[3][1]="shapes";
     links[4][1]="opposites";
utterances[0][2]="all";
utterances[1][2]="more";
utterances[2][2]="nice";
utterances[3][2]="wrong";
utterances[4][2]="right";
utterances[0][3]="link";
utterances[1][3]="pretty";
utterances[2][3]="mean";
utterances[3][3]="different";
utterances[4][3]="same";
utterances[0][4]="link";
utterances[1][4]="important";
utterances[2][4]="link";
utterances[3][4]="idea";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.048.png";

}

function colours(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="colours";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="colour";
utterances[2][1]="white";
utterances[3][1]="black";
utterances[4][1]="red";
utterances[0][2]="light";
utterances[1][2]="yellow";
utterances[2][2]="orange";
utterances[3][2]="link";
utterances[4][2]="blue";
utterances[0][3]="dark";
utterances[1][3]="purple";
utterances[2][3]="pink";
utterances[3][3]="brown";
utterances[4][3]="gold";
utterances[0][4]="spotted";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="silver";
document.main.src="ck20/CK20.049.png";

}

function feelings(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="feelings";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="feeling";
utterances[2][1]="afraid";
utterances[3][1]="safe";
utterances[4][1]="busy";
utterances[0][2]="It is";
utterances[1][2]="board";
utterances[2][2]="funny";
utterances[3][2]="good";
utterances[4][2]="link";
utterances[0][3]="I am";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="sad";
utterances[4][3]="sick";
utterances[0][4]="hot";
utterances[1][4]="cold";
utterances[2][4]="bad";
utterances[3][4]="scared";
utterances[4][4]="confused";
document.main.src="ck20/CK20.050.png";

}

function shapes(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="shapes";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[4][3]="link";
utterances[0][4]="sphere";
utterances[1][4]="cube";
utterances[2][4]="cylinder";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.051.png";

}

function opposites(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="opposites";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="dry";
utterances[2][1]="wet";
utterances[3][1]="long";
utterances[4][1]="short";
utterances[0][2]="all done";
utterances[1][2]="fast";
utterances[2][2]="slow";
utterances[3][2]="loud";
utterances[4][2]="quiet";
utterances[0][3]="medium";
utterances[1][3]="big";
utterances[2][3]="little";
utterances[3][3]="curve";
utterances[4][3]="old";
utterances[0][4]="soft";
utterances[1][4]="easy";
utterances[2][4]="hard";
utterances[3][4]="clean";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.052.png";

}

function weather(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="weather";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="weather";
utterances[2][1]="rain";
utterances[3][1]="sun";
utterances[4][1]="snow";
utterances[0][2]="It is";
utterances[1][2]="wind";
utterances[2][2]="cloudy";
utterances[3][2]="foggy";
utterances[4][2]="freezing";
utterances[0][3]="icey";
utterances[1][3]="stormy";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="hot";
utterances[1][4]="cold";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.053.png";

}

function things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="things";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="things";
     links[2][1]="art_things";
     links[3][1]="health";
     links[4][1]="body_parts";
     links[0][2]="clothes";
     links[1][2]="computer";
     links[2][2]="furniture";
     links[3][2]="toys";
     links[4][2]="kitchen_things";
     links[0][3]="money";
     links[1][3]="office";
     links[2][3]="sports";
     links[3][3]="things_that_help";
     links[4][3]="toiletries";
     links[0][4]="tools";
     links[1][4]="transport";
     links[2][4]="nature";
     links[3][4]="link";
     links[4][4]="favorite_food";
document.main.src="ck20/CK20.054.png";

}

function art_things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Art things";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
     links[4][4]="materials";
document.main.src="ck20/CK20.055.png";

}

function animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="animals";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="pets";
     links[2][1]="farm_animals";
     links[3][1]="wild_animals";
     links[4][1]="water_animals";
utterances[0][2]="link";
     links[1][2]="birds";
     links[2][2]="insects";
     links[3][2]="pet_care";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.056.png";

}

function water_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Water animals";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="water animal";
utterances[2][1]="fish	";
utterances[3][1]="whale";
utterances[4][1]="prawn";
utterances[0][2]="crab";
utterances[1][2]="dolphin";
utterances[2][2]="jellyfish";
utterances[3][2]="tropical fish";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.057.png";

}

function pets(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="pets";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.058.png";

}

function common_things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Common things";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="thing";
utterances[2][1]="bag";
utterances[3][1]="link";
utterances[4][1]="candle";
utterances[0][2]="fire";
utterances[1][2]="book";
utterances[2][2]="ipad";
utterances[3][2]="camera";
utterances[4][2]="link";
utterances[0][3]="stuff";
utterances[1][3]="part";
utterances[2][3]="lot";
utterances[3][3]="idea";
utterances[4][3]="problem";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="charger";
document.main.src="ck20/CK20.059.png";

}

function wild_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Wild animals";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="wild animal";
utterances[2][1]="zebra";
utterances[3][1]="snake";
utterances[4][1]="monkey";
utterances[0][2]="bear";
utterances[1][2]="camel";
utterances[2][2]="cheetah";
utterances[3][2]="deer";
utterances[4][2]="elephant";
utterances[0][3]="giraffe";
utterances[1][3]="gorilla";
utterances[2][3]="hippo";
utterances[3][3]="lion";
utterances[4][3]="tiger";
utterances[0][4]="rhinoceros";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.060.png";

}

function farm_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Farm animals";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="farm animal";
utterances[2][1]="pig";
utterances[3][1]="sheep";
utterances[4][1]="chick";
utterances[0][2]="chicken";
utterances[1][2]="cow";
utterances[2][2]="horse";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.061.png";

}

function insects(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="insects";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="insect";
utterances[2][1]="caterpillar";
utterances[3][1]="slug";
utterances[4][1]="snail";
utterances[0][2]="bee";
utterances[1][2]="fly";
utterances[2][2]="spider";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="C";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="C";
document.main.src="ck20/CK20.062.png";

}

function birds(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="birds";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.063.png";

}

function pet_care(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Pet care";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[2][4]=" feed pet";
utterances[3][4]="walk the dag";
utterances[4][4]="cage";
document.main.src="ck20/CK20.064.png";

}

function body_parts(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Body parts";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
     links[4][4]="private_parts";
document.main.src="ck20/CK20.065.png";

}

function private_parts(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Private parts";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="private parts";
utterances[2][1]="bottom";
utterances[3][1]="breasts";
utterances[4][1]="vagina";
utterances[0][2]="penis";
utterances[1][2]="under arm hair";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="horny";
utterances[1][4]="love";
utterances[2][4]="shared pleasure";
utterances[3][4]="self pleasure";
utterances[4][4]="kiss";
document.main.src="ck20/CK20.066.png";

}

function clothes(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="clothes";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="jeans";
utterances[2][1]="trousers";
utterances[3][1]="link";
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
utterances[1][4]="PJs";
utterances[2][4]="slippers";
utterances[3][4]="boxer shorts";
utterances[4][4]="pants";
document.main.src="ck20/CK20.067.png";

}

function computer(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Computer";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
utterances[2][1]="mouse";
utterances[3][1]="keyboard";
utterances[4][1]="USB stick";
utterances[0][2]="printer";
utterances[1][2]="email";
utterances[2][2]="iphone";
utterances[3][2]="monitor";
utterances[4][2]="website";
utterances[0][3]="ipad";
utterances[1][3]="speakers";
utterances[2][3]="joystick";
utterances[3][3]="touch screen";
utterances[4][3]="extension lead";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="charger";
document.main.src="ck20/CK20.068.png";

}

function tools(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="tools";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
     links[4][4]="materials";
document.main.src="ck20/CK20.069.png";

}

function toys(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="toys";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="toys";
utterances[2][1]="trains";
utterances[3][1]="cars";
utterances[4][1]="dolls";
utterances[0][2]="bricks";
utterances[1][2]="Lego";
utterances[2][2]="paint";
utterances[3][2]="stacker ring";
utterances[4][2]="colouring book";
utterances[0][3]="book";
utterances[1][3]="sticker book";
utterances[2][3]="kite";
utterances[3][3]="teddy";
utterances[4][3]="puppet";
utterances[0][4]="shape puzzle";
utterances[1][4]="jigsaw";
utterances[2][4]="toy box";
utterances[3][4]="link";
utterances[4][4]="C";
document.main.src="ck20/CK20.070.png";

}

function transport(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="transport";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[0][4]="boat";
utterances[1][4]="bin lorry";
utterances[2][4]="taxi";
utterances[3][4]="underground";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.071.png";

}

function disabilities(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="disabilities";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[4][3]="appointment";
utterances[0][4]="toilet chair";
utterances[1][4]="ecu";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="charger";
document.main.src="ck20/CK20.072.png";

}

function toiletries(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="toiletries";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="toiletries";
utterances[2][1]="soap";
utterances[3][1]="toothbrush";
utterances[4][1]="toothpaste";
utterances[0][2]="bubble bath";
utterances[1][2]="deodorant";
utterances[2][2]="shampoo";
utterances[3][2]="conditioner";
utterances[4][2]="make-up";
utterances[0][3]="razor";
utterances[1][3]="shaving foam";
utterances[2][3]="aftershave";
utterances[3][3]="toilet roll";
utterances[4][3]="sanitary items";
utterances[0][4]="hairdryer";
utterances[1][4]="comb";
utterances[2][4]="brush";
utterances[3][4]="hair spray";
utterances[4][4]="hair die";
document.main.src="ck20/CK20.073.png";

}

function furniture(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="furniture";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="furniture";
utterances[2][1]="bean bag";
utterances[3][1]="table";
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
document.main.src="ck20/CK20.074.png";

}

function office(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Office";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="office";
utterances[2][1]="chair";
utterances[3][1]="filing cabinet";
     links[4][1]="computer";
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
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.075.png";

}

function gardening(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="gardening";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
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
utterances[1][3]="seeds";
utterances[2][3]="hedge cutters";
utterances[3][3]="plant";
utterances[4][3]="hedge";
utterances[0][4]="clippers";
utterances[1][4]="shovel";
utterances[2][4]="pot";
utterances[3][4]="rake";
utterances[4][4]="trowel";
document.main.src="ck20/CK20.076.png";

}

function sports(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="sports";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="sports";
utterances[2][1]="football";
utterances[3][1]="rugby";
utterances[4][1]="cycling";
utterances[0][2]="boccia";
utterances[1][2]="motor sport";
utterances[2][2]="golf";
utterances[3][2]="fishing";
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
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.077.png";

}

function materials(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="materials";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="material";
utterances[2][1]="wood";
utterances[3][1]="plastic";
utterances[4][1]="fabric";
utterances[0][2]="metal";
utterances[1][2]="sponge";
utterances[2][2]="glass";
utterances[3][2]="stone";
utterances[4][2]="string";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="paper";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.078.png";

}

function money(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="money";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="money";
utterances[2][1]="cheque book";
utterances[3][1]="wallet";
utterances[4][1]="purse";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.079.png";

}

function nature(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="nature";
utterances[2][0]="link";
utterances[3][0]="Speak";
utterances[4][0]="No";
     links[0][1]="top_page";
     links[1][1]="weather";
utterances[2][1]="link";
     links[3][1]="gardening";
utterances[4][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[4][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.080.png";

}

function time(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="time";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
     links[2][1]="day";
     links[3][1]="months";
     links[4][1]="special_days";
utterances[0][2]="link";
utterances[1][2]="today";
utterances[2][2]="link";
utterances[3][2]="later";
utterances[4][2]="late";
utterances[0][3]="am";
utterances[1][3]="pm";
utterances[2][3]="pm";
utterances[3][3]="link";
utterances[4][3]="never";
utterances[0][4]="Clear";
utterances[1][4]="ready";
utterances[2][4]="hurry";
utterances[3][4]="link";
utterances[4][4]="after";
document.main.src="ck20/CK20.081.png";

}

function day(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="day";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="day";
utterances[2][1]="week";
utterances[3][1]="weekend";
utterances[4][1]="night";
utterances[0][2]="Monday";
utterances[1][2]="Tuesday";
utterances[2][2]="Wednesday";
utterances[3][2]="Th";
utterances[4][2]="Friday";
utterances[0][3]="link";
utterances[1][3]="Sunday";
utterances[2][3]="this week";
utterances[3][3]="link";
utterances[4][3]="tonight";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.082.png";

}

function month(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="month";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Month";
utterances[2][1]="this month";
utterances[3][1]="next month";
utterances[4][1]="last month";
utterances[0][2]="January";
utterances[1][2]="February";
utterances[2][2]="March";
utterances[3][2]="Ap";
utterances[4][2]=" M";
utterances[0][3]="June";
utterances[1][3]="July";
utterances[2][3]="August";
utterances[3][3]="September";
utterances[4][3]="October";
utterances[0][4]="November";
utterances[1][4]="December";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.083.png";

}

function special_days(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Special days";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Special day";
utterances[2][1]="New year";
utterances[3][1]="Valentines day";
utterances[4][1]="Bank holiday";
utterances[0][2]="Easter";
utterances[1][2]="birthday";
utterances[2][2]="holiday";
utterances[3][2]="wedding";
utterances[4][2]="Bonfire night";
utterances[0][3]="Halloween";
     links[1][3]="christmas";
utterances[2][3]="party";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.084.png";

}

function christmas(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="christmas";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Christmas";
utterances[2][1]="Christmas day";
utterances[3][1]="Christmas eve";
utterances[4][1]="Farther Christmas";
utterances[0][2]="Christmas pudding";
utterances[1][2]="lights";
utterances[2][2]="Christmas cake";
utterances[3][2]="Christmas sack";
utterances[4][2]="stocking";
utterances[0][3]="decorations";
utterances[1][3]="Christmas tree";
utterances[2][3]="Christmas hat";
utterances[3][3]="gift";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.085.png";

}

function places(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="places";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="place";
     links[2][1]="my_day_places";
     links[3][1]="shops";
     links[4][1]="places_outside";
utterances[0][2]="work";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="hospital";
utterances[4][2]="airport";
utterances[0][3]="dentist";
utterances[1][3]="bank";
utterances[2][3]="doctors";
utterances[3][3]="pool";
utterances[4][3]="link";
utterances[0][4]="library";
utterances[1][4]="pub";
utterances[2][4]="post office";
utterances[3][4]="cinema";
     links[4][4]="home";
document.main.src="ck20/CK20.086.png";

}

function shops(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="shops";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="shop";
utterances[2][1]="supermarket";
utterances[3][1]="butchers";
utterances[4][1]="shopping centre";
utterances[0][2]="bakers";
utterances[1][2]="Veg shop";
utterances[2][2]="department store";
utterances[3][2]="clothes shop";
utterances[4][2]="music shop";
utterances[0][3]="market";
utterances[1][3]="coffee shop";
utterances[2][3]="drive through";
utterances[3][3]="pharmacy";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.087.png";

}

function places_outside(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Places outside";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="outside place";
utterances[2][1]="street";
utterances[3][1]="car park";
utterances[4][1]="beach";
utterances[0][2]="countryside";
utterances[1][2]="lake";
utterances[2][2]="woods";
utterances[3][2]="field";
utterances[4][2]="garden";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
utterances[4][3]="link";
utterances[0][4]="Clear";
utterances[1][4]="link";
utterances[2][4]="link";
utterances[3][4]="link";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.088.png";

}

function home(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="home";
utterances[2][0]="link";
utterances[3][0]="link";
utterances[4][0]="No";
     links[0][1]="top_page";
utterances[1][1]="home";
utterances[2][1]="cellar";
utterances[3][1]="dining room";
utterances[4][1]="hall";
utterances[0][2]="attic";
utterances[1][2]="bathroom";
utterances[2][2]="lounge";
utterances[3][2]="study";
utterances[4][2]="bedroom";
utterances[0][3]="kitchen";
utterances[1][3]="my room";
utterances[2][3]="utility room";
utterances[3][3]="play room";
utterances[4][3]="link";
utterances[0][4]="up stairs";
utterances[1][4]="down stairs";
utterances[2][4]="stairs";
utterances[3][4]="office";
utterances[4][4]="Delete Word";
document.main.src="ck20/CK20.089.png";

}
