grid_size_columns=4
grid_size_rows=4

function top_page(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="chatting";  utterances[0][1]="link";
     links[1][1]="questions";  utterances[1][1]="?";
     links[2][1]="personal_care";  utterances[2][1]="link";
     links[3][1]="things";  utterances[3][1]="link";
     links[0][2]="action_words";  utterances[0][2]="link";
     links[1][2]="people";  utterances[1][2]="link";
     links[2][2]="describing";  utterances[2][2]="link";
     links[3][2]="my_day";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="Clear";
     links[1][3]="places";  utterances[1][3]="link";
     links[2][3]="leisure";  utterances[2][3]="link";
     links[3][3]="little_words";  utterances[3][3]="link";
document.main.src="ck15/CK15+.001.png";

}

function chatting(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="about_me";  utterances[1][1]="link";
     links[2][1]="wml";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="I cant find what I want to say?";
     links[0][2]="blank";  utterances[0][2]="Hello";
     links[1][2]="blank";  utterances[1][2]="Im fine";
     links[2][2]="blank";  utterances[2][2]="ok";
     links[3][2]="blank";  utterances[3][2]="Im not so good";
     links[0][3]="my_stories";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="sorry";
     links[2][3]="blank";  utterances[2][3]="I dont know";
     links[3][3]="blank";  utterances[3][3]="bye";
document.main.src="ck15/CK15+.002.png";

}

function about_me(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="My name is";
     links[2][1]="blank";  utterances[2][1]="I live in";
     links[3][1]="blank";  utterances[3][1]="birthday";
     links[0][2]="about_my_family";  utterances[0][2]="--------------";
     links[1][2]="blank";  utterances[1][2]="--------------";
     links[2][2]="blank";  utterances[2][2]="--------------";
     links[3][2]="blank";  utterances[3][2]="--------------";
     links[0][3]="i_like";  utterances[0][3]="--------------";
     links[1][3]="i_dont_like";  utterances[1][3]="--------------";
     links[2][3]="tell_me_about_you";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="--------------";
document.main.src="ck15/CK15+.003.png";

}

function i_like(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="I like";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="--------------";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.004.png";

}

function i_dont_like(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="I dont like";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="--------------";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.005.png";

}

function tell_me_about_you(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="Tell me about you";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="What name?";
     links[2][1]="blank";  utterances[2][1]="Where live?";
     links[3][1]="blank";  utterances[3][1]="Birthday?";
     links[0][2]="blank";  utterances[0][2]="--------------";
     links[1][2]="blank";  utterances[1][2]="--------------";
     links[2][2]="blank";  utterances[2][2]="--------------";
     links[3][2]="blank";  utterances[3][2]="--------------";
     links[0][3]="blank";  utterances[0][3]="--------------";
     links[1][3]="blank";  utterances[1][3]="--------------";
     links[2][3]="blank";  utterances[2][3]="Do you have?";
     links[3][3]="blank";  utterances[3][3]="--------------";
document.main.src="ck15/CK15+.006.png";

}

function wml(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="chill out";
     links[2][1]="blank";  utterances[2][1]="go away";
     links[3][1]="blank";  utterances[3][1]="wow";
     links[0][2]="blank";  utterances[0][2]="I love you.";
     links[1][2]="blank";  utterances[1][2]="whatever";
     links[2][2]="blank";  utterances[2][2]="no way";
     links[3][2]="blank";  utterances[3][2]="shut up";
     links[0][3]="blank";  utterances[0][3]="dont";
     links[1][3]="blank";  utterances[1][3]="not";
     links[2][3]="blank";  utterances[2][3]="well";
     links[3][3]="blank";  utterances[3][3]="cool";
document.main.src="ck15/CK15+.007.png";

}

function my_stories(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Let me tell you something";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.008.png";

}

function questions(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Can I see that?";
     links[2][1]="blank";  utterances[2][1]="Whats next?";
     links[3][1]="blank";  utterances[3][1]="when";
     links[0][2]="blank";  utterances[0][2]="where";
     links[1][2]="blank";  utterances[1][2]="what";
     links[2][2]="blank";  utterances[2][2]="where";
     links[3][2]="blank";  utterances[3][2]="What do you think?";
     links[0][3]="blank";  utterances[0][3]="How are you?";
     links[1][3]="blank";  utterances[1][3]="who";
     links[2][3]="blank";  utterances[2][3]="why";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.009.png";

}

function personal_care(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="I need the toilet";
     links[2][1]="i_dont_feel_well";  utterances[2][1]="link";
     links[3][1]="body_parts";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="I need some help";
     links[1][2]="blank";  utterances[1][2]="Id like a shower";
     links[2][2]="blank";  utterances[2][2]="Id love a bath";
     links[3][2]="blank";  utterances[3][2]="Can you cut my nails";
     links[0][3]="blank";  utterances[0][3]="I need to get changed";
     links[1][3]="blank";  utterances[1][3]="Can you do my hair?";
     links[2][3]="blank";  utterances[2][3]="clothes";
     links[3][3]="blank";  utterances[3][3]="toiletries";
document.main.src="ck15/CK15+.010.png";

}

function body_parts(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="body";
     links[2][1]="blank";  utterances[2][1]="head";
     links[3][1]="blank";  utterances[3][1]="face";
     links[0][2]="blank";  utterances[0][2]="arm";
     links[1][2]="blank";  utterances[1][2]="stomach";
     links[2][2]="blank";  utterances[2][2]="hand";
     links[3][2]="blank";  utterances[3][2]="chest";
     links[0][3]="blank";  utterances[0][3]="leg";
     links[1][3]="blank";  utterances[1][3]="back";
     links[2][3]="blank";  utterances[2][3]="foot";
     links[3][3]="private_parts";  utterances[3][3]="link";
document.main.src="ck15/CK15+.011.png";

}

function private_parts(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Private parts";
     links[2][1]="blank";  utterances[2][1]="bottom";
     links[3][1]="blank";  utterances[3][1]="breasts";
     links[0][2]="blank";  utterances[0][2]="penis";
     links[1][2]="blank";  utterances[1][2]="underarm hair";
     links[2][2]="blank";  utterances[2][2]="vagina";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="love";
     links[1][3]="blank";  utterances[1][3]="kiss";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.012.png";

}

function i_dont_feel_well(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="i_have_a_pain_in_my";  utterances[1][1]="link";
     links[2][1]="blank";  utterances[2][1]="headache";
     links[3][1]="blank";  utterances[3][1]="ouch";
     links[0][2]="blank";  utterances[0][2]="cold";
     links[1][2]="blank";  utterances[1][2]="stomach ache";
     links[2][2]="blank";  utterances[2][2]="sick";
     links[3][2]="blank";  utterances[3][2]="chest pain";
     links[0][3]="blank";  utterances[0][3]="cramp";
     links[1][3]="blank";  utterances[1][3]="back pain";
     links[2][3]="blank";  utterances[2][3]="sore throat";
     links[3][3]="blank";  utterances[3][3]="itch";
document.main.src="ck15/CK15+.013.png";

}

function things(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="me_things";  utterances[1][1]="link";
     links[2][1]="food__drink";  utterances[2][1]="link";
     links[3][1]="kitchen_things";  utterances[3][1]="link";
     links[0][2]="clothes";  utterances[0][2]="link";
     links[1][2]="furniture";  utterances[1][2]="link";
     links[2][2]="things_that_help";  utterances[2][2]="link";
     links[3][2]="toiletries";  utterances[3][2]="link";
     links[0][3]="money";  utterances[0][3]="link";
     links[1][3]="transport";  utterances[1][3]="link";
     links[2][3]="nature";  utterances[2][3]="link";
     links[3][3]="real";  utterances[3][3]="link";
document.main.src="ck15/CK15+.014.png";

}

function me_things(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="thing";
     links[2][1]="blank";  utterances[2][1]="bag";
     links[3][1]="blank";  utterances[3][1]="battery";
     links[0][2]="blank";  utterances[0][2]="fire";
     links[1][2]="blank";  utterances[1][2]="book";
     links[2][2]="blank";  utterances[2][2]="iPad";
     links[3][2]="blank";  utterances[3][2]="camera";
     links[0][3]="blank";  utterances[0][3]="stuff";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="charger";
document.main.src="ck15/CK15+.015.png";

}

function food__drink(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="breakfast";  utterances[1][1]="link";
     links[2][1]="lunch";  utterances[2][1]="link";
     links[3][1]="meals";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="Im hungry";
     links[1][2]="veg__salad";  utterances[1][2]="link";
     links[2][2]="fruit";  utterances[2][2]="link";
     links[3][2]="drinks";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="Im thirsty";
     links[1][3]="snacks__pud";  utterances[1][3]="link";
     links[2][3]="saucesingredients";  utterances[2][3]="link";
     links[3][3]="food_chat";  utterances[3][3]="link";
document.main.src="ck15/CK15+.016.png";

}

function breakfast(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="breakfast";
     links[2][1]="blank";  utterances[2][1]="cereal";
     links[3][1]="blank";  utterances[3][1]="egg";
     links[0][2]="blank";  utterances[0][2]="toast";
     links[1][2]="blank";  utterances[1][2]="butter";
     links[2][2]="blank";  utterances[2][2]="jam";
     links[3][2]="blank";  utterances[3][2]="cooked breakfast";
     links[0][3]="blank";  utterances[0][3]="fruit";
     links[1][3]="blank";  utterances[1][3]="pancake";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.017.png";

}

function lunch(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="lunch";
     links[2][1]="blank";  utterances[2][1]="sandwich";
     links[3][1]="blank";  utterances[3][1]="crackers";
     links[0][2]="blank";  utterances[0][2]="cheese";
     links[1][2]="blank";  utterances[1][2]="ham";
     links[2][2]="blank";  utterances[2][2]="chicken";
     links[3][2]="blank";  utterances[3][2]="tuna";
     links[0][3]="blank";  utterances[0][3]="soup";
     links[1][3]="blank";  utterances[1][3]="salad";
     links[2][3]="blank";  utterances[2][3]="cheese on toast";
     links[3][3]="blank";  utterances[3][3]="beans on toast";
document.main.src="ck15/CK15+.018.png";

}

function meals(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="meal";
     links[2][1]="blank";  utterances[2][1]="pasta";
     links[3][1]="meat__fish";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="stew";
     links[1][2]="blank";  utterances[1][2]="roast dinner";
     links[2][2]="blank";  utterances[2][2]="Chinese food";
     links[3][2]="fast_food";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="curry";
     links[1][3]="blank";  utterances[1][3]="pie";
     links[2][3]="blank";  utterances[2][3]="lasagna";
     links[3][3]="blank";  utterances[3][3]="rice";
document.main.src="ck15/CK15+.019.png";

}

function meat(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="meat";
     links[2][1]="blank";  utterances[2][1]="bacon";
     links[3][1]="blank";  utterances[3][1]="beef";
     links[0][2]="blank";  utterances[0][2]="lamb";
     links[1][2]="blank";  utterances[1][2]="ham";
     links[2][2]="blank";  utterances[2][2]="chicken";
     links[3][2]="blank";  utterances[3][2]="tuna";
     links[0][3]="blank";  utterances[0][3]="fish";
     links[1][3]="blank";  utterances[1][3]="mince";
     links[2][3]="blank";  utterances[2][3]="pork";
     links[3][3]="blank";  utterances[3][3]="sausages";
document.main.src="ck15/CK15+.020.png";

}

function fast_food(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="fast food";
     links[2][1]="blank";  utterances[2][1]="chips";
     links[3][1]="blank";  utterances[3][1]="chicken nugget";
     links[0][2]="blank";  utterances[0][2]="fish and chips";
     links[1][2]="blank";  utterances[1][2]="fish burger";
     links[2][2]="blank";  utterances[2][2]="cheese burger";
     links[3][2]="blank";  utterances[3][2]="burger";
     links[0][3]="blank";  utterances[0][3]="sweets";
     links[1][3]="blank";  utterances[1][3]="candy floss";
     links[2][3]="blank";  utterances[2][3]="pizza";
     links[3][3]="blank";  utterances[3][3]="hot dog";
document.main.src="ck15/CK15+.021.png";

}

function vegetables(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="vegetables";
     links[2][1]="blank";  utterances[2][1]="potato";
     links[3][1]="blank";  utterances[3][1]="tomato";
     links[0][2]="blank";  utterances[0][2]="broccoli";
     links[1][2]="blank";  utterances[1][2]="cabbage";
     links[2][2]="blank";  utterances[2][2]="carrot";
     links[3][2]="blank";  utterances[3][2]="cucumber";
     links[0][3]="blank";  utterances[0][3]="sweeetcorn";
     links[1][3]="blank";  utterances[1][3]="peas";
     links[2][3]="blank";  utterances[2][3]="onion";
     links[3][3]="blank";  utterances[3][3]="lettuce";
document.main.src="ck15/CK15+.022.png";

}

function fruit(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="fruit";
     links[2][1]="blank";  utterances[2][1]="apple";
     links[3][1]="blank";  utterances[3][1]="banana";
     links[0][2]="blank";  utterances[0][2]="grapefruit";
     links[1][2]="blank";  utterances[1][2]="mango";
     links[2][2]="blank";  utterances[2][2]="grapes";
     links[3][2]="blank";  utterances[3][2]="lemon";
     links[0][3]="blank";  utterances[0][3]="pear";
     links[1][3]="blank";  utterances[1][3]="strawberry";
     links[2][3]="blank";  utterances[2][3]="orange";
     links[3][3]="blank";  utterances[3][3]="plum";
document.main.src="ck15/CK15+.023.png";

}

function drinks(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="drink";
     links[2][1]="blank";  utterances[2][1]="coffee";
     links[3][1]="blank";  utterances[3][1]="tea";
     links[0][2]="drink_describe";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="milk";
     links[2][2]="blank";  utterances[2][2]="water";
     links[3][2]="blank";  utterances[3][2]="hot chocolate";
     links[0][3]="juice";  utterances[0][3]="link";
     links[1][3]="milkshake";  utterances[1][3]="link";
     links[2][3]="fizzy_drink";  utterances[2][3]="link";
     links[3][3]="alcohol";  utterances[3][3]="link";
document.main.src="ck15/CK15+.024.png";

}

function juice(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="juice";
     links[2][1]="blank";  utterances[2][1]="apple juice";
     links[3][1]="blank";  utterances[3][1]="orange juice";
     links[0][2]="blank";  utterances[0][2]="blackcurrant";
     links[1][2]="blank";  utterances[1][2]="pineapple juice";
     links[2][2]="blank";  utterances[2][2]="grape juice";
     links[3][2]="blank";  utterances[3][2]="grapefruit juice";
     links[0][3]="blank";  utterances[0][3]="cranberry juice";
     links[1][3]="blank";  utterances[1][3]="tomato juice";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.025.png";

}

function milkshake(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="milkshake";
     links[2][1]="blank";  utterances[2][1]="banana milkshake";
     links[3][1]="blank";  utterances[3][1]="strawberry milkshake";
     links[0][2]="blank";  utterances[0][2]="chocolate milkshake";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.026.png";

}

function fizzy_drink(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="fizzy drink";
     links[2][1]="blank";  utterances[2][1]="orangeade";
     links[3][1]="blank";  utterances[3][1]="lemonade";
     links[0][2]="blank";  utterances[0][2]="Coke";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.027.png";

}

function alcohol(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="alcohol";
     links[2][1]="blank";  utterances[2][1]="beer";
     links[3][1]="blank";  utterances[3][1]="white wine";
     links[0][2]="blank";  utterances[0][2]="red wine";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.028.png";

}

function snackspud(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="snack";
     links[2][1]="blank";  utterances[2][1]="raison";
     links[3][1]="blank";  utterances[3][1]="cake";
     links[0][2]="blank";  utterances[0][2]="custard";
     links[1][2]="ice_cream";  utterances[1][2]="link";
     links[2][2]="fruit";  utterances[2][2]="link";
     links[3][2]="yoghurt";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="sweets";
     links[1][3]="blank";  utterances[1][3]="crisps";
     links[2][3]="blank";  utterances[2][3]="biscuits";
     links[3][3]="blank";  utterances[3][3]="chocolate";
document.main.src="ck15/CK15+.029.png";

}

function flavors(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="flavors";
     links[2][1]="blank";  utterances[2][1]="raison";
     links[3][1]="blank";  utterances[3][1]="toffee";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="mint";
     links[2][2]="fruit";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="chocolate";
document.main.src="ck15/CK15+.030.png";

}

function food_chat(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Its grose";
     links[2][1]="blank";  utterances[2][1]="I like it";
     links[3][1]="blank";  utterances[3][1]="Ive had enough";
     links[0][2]="blank";  utterances[0][2]="some";
     links[1][2]="blank";  utterances[1][2]="with";
     links[2][2]="blank";  utterances[2][2]="please";
     links[3][2]="blank";  utterances[3][2]="thank you";
     links[0][3]="blank";  utterances[0][3]="hot";
     links[1][3]="blank";  utterances[1][3]="cold";
     links[2][3]="blank";  utterances[2][3]="eat";
     links[3][3]="blank";  utterances[3][3]="drink";
document.main.src="ck15/CK15+.031.png";

}

function kitchen_things(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="spoon";
     links[2][1]="blank";  utterances[2][1]="knife";
     links[3][1]="blank";  utterances[3][1]="fork";
     links[0][2]="blank";  utterances[0][2]="bowl";
     links[1][2]="blank";  utterances[1][2]="plate";
     links[2][2]="blank";  utterances[2][2]="cup";
     links[3][2]="blank";  utterances[3][2]="chopping board";
     links[0][3]="blank";  utterances[0][3]="cheese greater";
     links[1][3]="blank";  utterances[1][3]="pan";
     links[2][3]="blank";  utterances[2][3]="dish cloth";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.032.png";

}

function clothes(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="jeans";
     links[2][1]="blank";  utterances[2][1]="T-shirt";
     links[3][1]="blank";  utterances[3][1]="jumper";
     links[0][2]="shape__colour";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="skirt";
     links[2][2]="blank";  utterances[2][2]="P Js";
     links[3][2]="blank";  utterances[3][2]="swimming costume";
     links[0][3]="blank";  utterances[0][3]="underwear";
     links[1][3]="blank";  utterances[1][3]="coat";
     links[2][3]="blank";  utterances[2][3]="shoes";
     links[3][3]="blank";  utterances[3][3]="socks";
document.main.src="ck15/CK15+.033.png";

}

function furniture(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="furniture";
     links[2][1]="blank";  utterances[2][1]="chair";
     links[3][1]="blank";  utterances[3][1]="table";
     links[0][2]="blank";  utterances[0][2]="bed";
     links[1][2]="blank";  utterances[1][2]="toilet";
     links[2][2]="blank";  utterances[2][2]="cupboard";
     links[3][2]="blank";  utterances[3][2]="lamp";
     links[0][3]="blank";  utterances[0][3]="TV";
     links[1][3]="blank";  utterances[1][3]="sink";
     links[2][3]="blank";  utterances[2][3]="draw";
     links[3][3]="blank";  utterances[3][3]="couch";
document.main.src="ck15/CK15+.034.png";

}

function things_that_help(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="disability";
     links[2][1]="blank";  utterances[2][1]="Comm. book";
     links[3][1]="blank";  utterances[3][1]="Comm. aid";
     links[0][2]="blank";  utterances[0][2]="wheelchair";
     links[1][2]="blank";  utterances[1][2]="hearing aid";
     links[2][2]="blank";  utterances[2][2]="glasses";
     links[3][2]="blank";  utterances[3][2]="medication";
     links[0][3]="blank";  utterances[0][3]="lift";
     links[1][3]="blank";  utterances[1][3]="ECU";
     links[2][3]="blank";  utterances[2][3]="appointment";
     links[3][3]="blank";  utterances[3][3]="charger";
document.main.src="ck15/CK15+.035.png";

}

function toiletries(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="soap";
     links[2][1]="blank";  utterances[2][1]="toothbrush";
     links[3][1]="blank";  utterances[3][1]="toothpaste";
     links[0][2]="blank";  utterances[0][2]="razor";
     links[1][2]="blank";  utterances[1][2]="deodorant";
     links[2][2]="blank";  utterances[2][2]="shampoo";
     links[3][2]="blank";  utterances[3][2]="make up";
     links[0][3]="blank";  utterances[0][3]="hairdryer";
     links[1][3]="blank";  utterances[1][3]="brush";
     links[2][3]="blank";  utterances[2][3]="toilet roll";
     links[3][3]="blank";  utterances[3][3]="sanitary items";
document.main.src="ck15/CK15+.036.png";

}

function money(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="money";
     links[2][1]="blank";  utterances[2][1]="cheque book";
     links[3][1]="blank";  utterances[3][1]="wallet";
     links[0][2]="blank";  utterances[0][2]="purse";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.037.png";

}

function transport(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="transport";
     links[2][1]="blank";  utterances[2][1]="airplane";
     links[3][1]="blank";  utterances[3][1]="ambulance";
     links[0][2]="blank";  utterances[0][2]="bus";
     links[1][2]="blank";  utterances[1][2]="car";
     links[2][2]="blank";  utterances[2][2]="boat";
     links[3][2]="blank";  utterances[3][2]="bike";
     links[0][3]="blank";  utterances[0][3]="taxi";
     links[1][3]="blank";  utterances[1][3]="train";
     links[2][3]="blank";  utterances[2][3]="lorry";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.038.png";

}

function nature(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="weather";  utterances[1][1]="link";
     links[2][1]="animals";  utterances[2][1]="link";
     links[3][1]="gardening";  utterances[3][1]="link";
     links[0][2]="real";  utterances[0][2]="link";
     links[1][2]="real";  utterances[1][2]="link";
     links[2][2]="real";  utterances[2][2]="Fast food";
     links[3][2]="real";  utterances[3][2]="link";
     links[0][3]="unknown";  utterances[0][3]="link";
     links[1][3]="real";  utterances[1][3]="link";
     links[2][3]="real";  utterances[2][3]="link";
     links[3][3]="real";  utterances[3][3]="link";
document.main.src="ck15/CK15+.039.png";

}

function weather(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="weather";
     links[2][1]="blank";  utterances[2][1]="rain";
     links[3][1]="blank";  utterances[3][1]="sun";
     links[0][2]="blank";  utterances[0][2]="icy";
     links[1][2]="blank";  utterances[1][2]="stormy";
     links[2][2]="blank";  utterances[2][2]="cloudy";
     links[3][2]="blank";  utterances[3][2]="foggy";
     links[0][3]="blank";  utterances[0][3]="snow";
     links[1][3]="blank";  utterances[1][3]="freezing";
     links[2][3]="blank";  utterances[2][3]="wind";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.040.png";

}

function animals(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="pets";  utterances[1][1]="link";
     links[2][1]="farm_animals";  utterances[2][1]="link";
     links[3][1]="wild_animals";  utterances[3][1]="link";
     links[0][2]="water_animals";  utterances[0][2]="link";
     links[1][2]="birds";  utterances[1][2]="link";
     links[2][2]="insects";  utterances[2][2]="link";
     links[3][2]="pet_care";  utterances[3][2]="link";
     links[0][3]="unknown";  utterances[0][3]="link";
     links[1][3]="real";  utterances[1][3]="link";
     links[2][3]="real";  utterances[2][3]="link";
     links[3][3]="real";  utterances[3][3]="link";
document.main.src="ck15/CK15+.041.png";

}

function pets(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="pet";
     links[2][1]="blank";  utterances[2][1]="cat";
     links[3][1]="blank";  utterances[3][1]="hamster";
     links[0][2]="blank";  utterances[0][2]="mouse";
     links[1][2]="blank";  utterances[1][2]="guinea pig";
     links[2][2]="blank";  utterances[2][2]="rabbit";
     links[3][2]="blank";  utterances[3][2]="horse";
     links[0][3]="blank";  utterances[0][3]="fish";
     links[1][3]="blank";  utterances[1][3]="rat";
     links[2][3]="blank";  utterances[2][3]="dog";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.042.png";

}

function farm_animals(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="farm animals";
     links[2][1]="blank";  utterances[2][1]="pig";
     links[3][1]="blank";  utterances[3][1]="sheep";
     links[0][2]="blank";  utterances[0][2]="chicken";
     links[1][2]="blank";  utterances[1][2]="horse";
     links[2][2]="blank";  utterances[2][2]="cow";
     links[3][2]="blank";  utterances[3][2]="chick";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.043.png";

}

function wild_animals(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="wild animals";
     links[2][1]="blank";  utterances[2][1]="zebra";
     links[3][1]="blank";  utterances[3][1]="snake";
     links[0][2]="blank";  utterances[0][2]="monkey";
     links[1][2]="blank";  utterances[1][2]="elephant";
     links[2][2]="blank";  utterances[2][2]="tiger";
     links[3][2]="blank";  utterances[3][2]="dear";
     links[0][3]="blank";  utterances[0][3]="giraffe";
     links[1][3]="blank";  utterances[1][3]="rhinoceros";
     links[2][3]="blank";  utterances[2][3]="hippo";
     links[3][3]="blank";  utterances[3][3]="lion";
document.main.src="ck15/CK15+.044.png";

}

function water_animals(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="water animal";
     links[2][1]="blank";  utterances[2][1]="fish";
     links[3][1]="blank";  utterances[3][1]="whale";
     links[0][2]="blank";  utterances[0][2]="crab";
     links[1][2]="blank";  utterances[1][2]="dolphin";
     links[2][2]="blank";  utterances[2][2]="jellyfish";
     links[3][2]="blank";  utterances[3][2]="tropical fish";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.045.png";

}

function birds(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="bird";
     links[2][1]="blank";  utterances[2][1]="duck";
     links[3][1]="blank";  utterances[3][1]="parrot";
     links[0][2]="blank";  utterances[0][2]="turkey";
     links[1][2]="blank";  utterances[1][2]="swan";
     links[2][2]="blank";  utterances[2][2]="peacock";
     links[3][2]="blank";  utterances[3][2]="owl";
     links[0][3]="blank";  utterances[0][3]="penguin";
     links[1][3]="blank";  utterances[1][3]="robin";
     links[2][3]="blank";  utterances[2][3]="chicken";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.046.png";

}

function insects(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="insects";
     links[2][1]="blank";  utterances[2][1]="caterpillar";
     links[3][1]="blank";  utterances[3][1]="slug";
     links[0][2]="blank";  utterances[0][2]="snail";
     links[1][2]="blank";  utterances[1][2]="bee";
     links[2][2]="blank";  utterances[2][2]="fly";
     links[3][2]="blank";  utterances[3][2]="spider";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.047.png";

}

function pet_care(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="pet care";
     links[2][1]="blank";  utterances[2][1]="pet bed";
     links[3][1]="blank";  utterances[3][1]="pet food";
     links[0][2]="blank";  utterances[0][2]="pet collar";
     links[1][2]="blank";  utterances[1][2]="lead";
     links[2][2]="blank";  utterances[2][2]="cage";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="care for pet";
     links[1][3]="blank";  utterances[1][3]="feed pet";
     links[2][3]="blank";  utterances[2][3]="walk the dog";
     links[3][3]="blank";  utterances[3][3]="materials";
document.main.src="ck15/CK15+.048.png";

}

function gardening(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="gardening";
     links[2][1]="blank";  utterances[2][1]="flowers";
     links[3][1]="blank";  utterances[3][1]="tree";
     links[0][2]="blank";  utterances[0][2]="Lawn mower";
     links[1][2]="blank";  utterances[1][2]="leaves";
     links[2][2]="blank";  utterances[2][2]="grass";
     links[3][2]="blank";  utterances[3][2]="trowel";
     links[0][3]="blank";  utterances[0][3]="hose";
     links[1][3]="blank";  utterances[1][3]="seeds";
     links[2][3]="blank";  utterances[2][3]="clippers";
     links[3][3]="blank";  utterances[3][3]="rake";
document.main.src="ck15/CK15+.049.png";

}

function action_words(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="go";
     links[2][1]="blank";  utterances[2][1]="want";
     links[3][1]="blank";  utterances[3][1]="help";
     links[0][2]="blank";  utterances[0][2]="do";
     links[1][2]="blank";  utterances[1][2]="look";
     links[2][2]="blank";  utterances[2][2]="stop";
     links[3][2]="blank";  utterances[3][2]="get";
     links[0][3]="blank";  utterances[0][3]="have";
     links[1][3]="blank";  utterances[1][3]="turn";
     links[2][3]="blank";  utterances[2][3]="see";
     links[3][3]="more_action_words";  utterances[3][3]="link";
document.main.src="ck15/CK15+.050.png";

}

function more_action_words(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="play";
     links[2][1]="blank";  utterances[2][1]="give";
     links[3][1]="blank";  utterances[3][1]="listen";
     links[0][2]="blank";  utterances[0][2]="come";
     links[1][2]="blank";  utterances[1][2]="say";
     links[2][2]="blank";  utterances[2][2]="put";
     links[3][2]="blank";  utterances[3][2]="make";
     links[0][3]="blank";  utterances[0][3]="know";
     links[1][3]="blank";  utterances[1][3]="take";
     links[2][3]="blank";  utterances[2][3]="tell";
     links[3][3]="blank";  utterances[3][3]="sing";
document.main.src="ck15/CK15+.051.png";

}

function people(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="People";
     links[2][1]="friends";  utterances[2][1]="link";
     links[3][1]="people_who_help";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="I";
     links[1][2]="blank";  utterances[1][2]="my";
     links[2][2]="blank";  utterances[2][2]="mine";
     links[3][2]="family";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="it";
     links[1][3]="blank";  utterances[1][3]="you";
     links[2][3]="blank";  utterances[2][3]="boy";
     links[3][3]="blank";  utterances[3][3]="girl";
document.main.src="ck15/CK15+.052.png";

}

function friends(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="friend";
     links[2][1]="blank";  utterances[2][1]="Friends";
     links[3][1]="blank";  utterances[3][1]="People who help";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="jobs";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.053.png";

}

function people_who_help(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="people who help";
     links[2][1]="blank";  utterances[2][1]="Friends";
     links[3][1]="blank";  utterances[3][1]="People who help";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="jobs";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="jobs";  utterances[3][3]="link";
document.main.src="ck15/CK15+.054.png";

}

function jobs(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="jobs";
     links[2][1]="blank";  utterances[2][1]="Friends";
     links[3][1]="blank";  utterances[3][1]="People who help";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="jobs";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.055.png";

}

function family(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="family";
     links[2][1]="blank";  utterances[2][1]="Dad";
     links[3][1]="blank";  utterances[3][1]="Mum";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="brother";
     links[3][2]="blank";  utterances[3][2]="sister";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.056.png";

}

function describing(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="feelings";  utterances[1][1]="link";
     links[2][1]="shape__colour";  utterances[2][1]="link";
     links[3][1]="opposites";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="more";
     links[1][2]="blank";  utterances[1][2]="nice";
     links[2][2]="blank";  utterances[2][2]="different";
     links[3][2]="blank";  utterances[3][2]="same";
     links[0][3]="blank";  utterances[0][3]="wrong";
     links[1][3]="blank";  utterances[1][3]="right";
     links[2][3]="blank";  utterances[2][3]="problem";
     links[3][3]="blank";  utterances[3][3]="idea";
document.main.src="ck15/CK15+.057.png";

}

function feelings(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="afraid";
     links[2][1]="blank";  utterances[2][1]="angry";
     links[3][1]="blank";  utterances[3][1]="safe";
     links[0][2]="blank";  utterances[0][2]="It is";
     links[1][2]="blank";  utterances[1][2]="sad";
     links[2][2]="blank";  utterances[2][2]="happy";
     links[3][2]="blank";  utterances[3][2]="board";
     links[0][3]="blank";  utterances[0][3]="I am";
     links[1][3]="blank";  utterances[1][3]="tired";
     links[2][3]="blank";  utterances[2][3]="bad";
     links[3][3]="blank";  utterances[3][3]="happy";
document.main.src="ck15/CK15+.058.png";

}

function shape__colour(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="circle";
     links[2][1]="blank";  utterances[2][1]="white";
     links[3][1]="blank";  utterances[3][1]="yellow";
     links[0][2]="blank";  utterances[0][2]="triangle";
     links[1][2]="blank";  utterances[1][2]="star";
     links[2][2]="blank";  utterances[2][2]="black";
     links[3][2]="blank";  utterances[3][2]="red";
     links[0][3]="blank";  utterances[0][3]="square";
     links[1][3]="blank";  utterances[1][3]="rectangle";
     links[2][3]="blank";  utterances[2][3]="green";
     links[3][3]="blank";  utterances[3][3]="blue";
document.main.src="ck15/CK15+.059.png";

}

function opposites(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="all done";
     links[2][1]="blank";  utterances[2][1]="dry";
     links[3][1]="blank";  utterances[3][1]="wet";
     links[0][2]="blank";  utterances[0][2]="fast";
     links[1][2]="blank";  utterances[1][2]="slow";
     links[2][2]="blank";  utterances[2][2]="big";
     links[3][2]="blank";  utterances[3][2]="little";
     links[0][3]="blank";  utterances[0][3]="easy";
     links[1][3]="blank";  utterances[1][3]="hard";
     links[2][3]="blank";  utterances[2][3]="clean";
     links[3][3]="blank";  utterances[3][3]="dirty";
document.main.src="ck15/CK15+.060.png";

}

function numbers(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="123";
     links[2][1]="blank";  utterances[2][1]="1";
     links[3][1]="blank";  utterances[3][1]="2";
     links[0][2]="blank";  utterances[0][2]="3";
     links[1][2]="blank";  utterances[1][2]="4";
     links[2][2]="blank";  utterances[2][2]="5";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.061.png";

}

function my_day(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="123";  utterances[1][1]="numbers";
     links[2][1]="timetable";  utterances[2][1]="link";
     links[3][1]="computer_control";  utterances[3][1]="link";
     links[0][2]="my_day_places";  utterances[0][2]="link";
     links[1][2]="cooking";  utterances[1][2]="link";
     links[2][2]="real";  utterances[2][2]="Fast food";
     links[3][2]="real";  utterances[3][2]="link";
     links[0][3]="unknown";  utterances[0][3]="link";
     links[1][3]="real";  utterances[1][3]="link";
     links[2][3]="real";  utterances[2][3]="link";
     links[3][3]="real";  utterances[3][3]="link";
document.main.src="ck15/CK15+.062.png";

}

function my_day_places(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="My day places";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.063.png";

}

function places(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="shops";  utterances[1][1]="link";
     links[2][1]="places_outside";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="restaurant";
     links[0][2]="blank";  utterances[0][2]="cinema";
     links[1][2]="blank";  utterances[1][2]="School/college";
     links[2][2]="blank";  utterances[2][2]="town";
     links[3][2]="blank";  utterances[3][2]="pool";
     links[0][3]="blank";  utterances[0][3]="library";
     links[1][3]="blank";  utterances[1][3]="pub";
     links[2][3]="blank";  utterances[2][3]="doctors";
     links[3][3]="places_at_home";  utterances[3][3]="link";
document.main.src="ck15/CK15+.064.png";

}

function shops(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="shop";
     links[2][1]="blank";  utterances[2][1]="supermarket";
     links[3][1]="blank";  utterances[3][1]="butcher";
     links[0][2]="blank";  utterances[0][2]="bread";
     links[1][2]="blank";  utterances[1][2]="veg shop";
     links[2][2]="blank";  utterances[2][2]="shopping centre";
     links[3][2]="blank";  utterances[3][2]="clothes shop";
     links[0][3]="blank";  utterances[0][3]="market";
     links[1][3]="blank";  utterances[1][3]="cafe";
     links[2][3]="blank";  utterances[2][3]="music shop";
     links[3][3]="blank";  utterances[3][3]="pharmacy";
document.main.src="ck15/CK15+.065.png";

}

function outside_places(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="outside places";
     links[2][1]="blank";  utterances[2][1]="street";
     links[3][1]="blank";  utterances[3][1]="car park";
     links[0][2]="blank";  utterances[0][2]="beach";
     links[1][2]="blank";  utterances[1][2]="hill";
     links[2][2]="blank";  utterances[2][2]="woods";
     links[3][2]="blank";  utterances[3][2]="field";
     links[0][3]="blank";  utterances[0][3]="garden";
     links[1][3]="blank";  utterances[1][3]="lake";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.066.png";

}

function places_at_home(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="home";
     links[2][1]="blank";  utterances[2][1]="dining room";
     links[3][1]="blank";  utterances[3][1]="hall";
     links[0][2]="blank";  utterances[0][2]="kitchen";
     links[1][2]="blank";  utterances[1][2]="toilet";
     links[2][2]="blank";  utterances[2][2]="lounge";
     links[3][2]="blank";  utterances[3][2]="bedroom";
     links[0][3]="blank";  utterances[0][3]="my room";
     links[1][3]="blank";  utterances[1][3]="up stairs";
     links[2][3]="blank";  utterances[2][3]="down stairs";
     links[3][3]="blank";  utterances[3][3]="stairs";
document.main.src="ck15/CK15+.067.png";

}

function time(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="time";
     links[2][1]="day";  utterances[2][1]="link";
     links[3][1]="special_days";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="now";
     links[1][2]="blank";  utterances[1][2]="never";
     links[2][2]="blank";  utterances[2][2]="later";
     links[3][2]="blank";  utterances[3][2]="late";
     links[0][3]="blank";  utterances[0][3]="again";
     links[1][3]="blank";  utterances[1][3]="ready";
     links[2][3]="blank";  utterances[2][3]="before";
     links[3][3]="blank";  utterances[3][3]="after";
document.main.src="ck15/CK15+.068.png";

}

function day(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="day";
     links[2][1]="blank";  utterances[2][1]="weekend";
     links[3][1]="blank";  utterances[3][1]="night";
     links[0][2]="blank";  utterances[0][2]="Monday";
     links[1][2]="blank";  utterances[1][2]="Tuesday";
     links[2][2]="blank";  utterances[2][2]="Wednesday";
     links[3][2]="blank";  utterances[3][2]="Thursday";
     links[0][3]="blank";  utterances[0][3]="Friday";
     links[1][3]="blank";  utterances[1][3]="Saturday";
     links[2][3]="blank";  utterances[2][3]="Sunday";
     links[3][3]="blank";  utterances[3][3]="week";
document.main.src="ck15/CK15+.069.png";

}

function special_days(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Special day";
     links[2][1]="blank";  utterances[2][1]="New Year";
     links[3][1]="blank";  utterances[3][1]="valentines";
     links[0][2]="blank";  utterances[0][2]="holiday";
     links[1][2]="blank";  utterances[1][2]="wedding";
     links[2][2]="blank";  utterances[2][2]="Easter";
     links[3][2]="blank";  utterances[3][2]="Birthday";
     links[0][3]="blank";  utterances[0][3]="Bonfire night";
     links[1][3]="blank";  utterances[1][3]="Halloween";
     links[2][3]="blank";  utterances[2][3]="party";
     links[3][3]="christmas";  utterances[3][3]="link";
document.main.src="ck15/CK15+.070.png";

}

function christmas(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Christmas";
     links[2][1]="blank";  utterances[2][1]="Christmas day";
     links[3][1]="blank";  utterances[3][1]="Farther Christmas";
     links[0][2]="blank";  utterances[0][2]="Christmas pudding";
     links[1][2]="blank";  utterances[1][2]="lights";
     links[2][2]="blank";  utterances[2][2]="Christmas cake";
     links[3][2]="blank";  utterances[3][2]="";
     links[0][3]="blank";  utterances[0][3]="decorations";
     links[1][3]="blank";  utterances[1][3]="Christmas tree";
     links[2][3]="blank";  utterances[2][3]="gift";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.071.png";

}

function leisure(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="my_photos";  utterances[1][1]="link";
     links[2][1]="mp3";  utterances[2][1]="link";
     links[3][1]="volume_up";  utterances[3][1]="link";
     links[0][2]="i_want";  utterances[0][2]="link";
     links[1][2]="phone";  utterances[1][2]="link";
     links[2][2]="real";  utterances[2][2]="Fast food";
     links[3][2]="volume_down";  utterances[3][2]="link";
     links[0][3]="unknown";  utterances[0][3]="Computer control";
     links[1][3]="dvd";  utterances[1][3]="link";
     links[2][3]="tv";  utterances[2][3]="link";
     links[3][3]="ecu";  utterances[3][3]="link";
document.main.src="ck15/CK15+.072.png";

}

function i_want(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="to go outside";
     links[2][1]="blank";  utterances[2][1]="to call someone";
     links[3][1]="blank";  utterances[3][1]="to cook something";
     links[0][2]="blank";  utterances[0][2]="to do something else";
     links[1][2]="blank";  utterances[1][2]="to watch something";
     links[2][2]="blank";  utterances[2][2]="to go on holiday";
     links[3][2]="blank";  utterances[3][2]="to have a go";
     links[0][3]="my_stories";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="to listen to something";
     links[2][3]="blank";  utterances[2][3]="to swim";
     links[3][3]="blank";  utterances[3][3]="to go home";
document.main.src="ck15/CK15+.073.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="Hello I use AAC";
     links[2][1]="questions";  utterances[2][1]="?";
     links[3][1]="i_want_to_tell_you";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="congratulations";
     links[1][2]="people";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="speak soon";
     links[3][2]="blank";  utterances[3][2]="Im not so good";
     links[0][3]="blank";  utterances[0][3]="Tell me your news";
     links[1][3]="blank";  utterances[1][3]="I miss you";
     links[2][3]="blank";  utterances[2][3]="Happy Birthday";
     links[3][3]="blank";  utterances[3][3]="Get well soon";
document.main.src="ck15/CK15+.074.png";

}

function dvd(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="link";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="my_dvds";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="medication";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="rewind";
     links[2][3]="blank";  utterances[2][3]="Play/pause";
     links[3][3]="blank";  utterances[3][3]="Fast forward";
document.main.src="ck15/CK15+.075.png";

}

function mp3(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="link";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="my_albums";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="medication";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="rewind";
     links[2][3]="blank";  utterances[2][3]="Play/pause";
     links[3][3]="blank";  utterances[3][3]="Fast forward";
document.main.src="ck15/CK15+.076.png";

}

function cooking(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="cook";
     links[2][1]="blank";  utterances[2][1]="chop";
     links[3][1]="blank";  utterances[3][1]="grate";
     links[0][2]="blank";  utterances[0][2]="stir";
     links[1][2]="blank";  utterances[1][2]="fry";
     links[2][2]="blank";  utterances[2][2]="poor";
     links[3][2]="blank";  utterances[3][2]="blend";
     links[0][3]="blank";  utterances[0][3]="measure";
     links[1][3]="blank";  utterances[1][3]="peal";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="dont burn it";
document.main.src="ck15/CK15+.077.png";

}

function little_words(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="up";
     links[2][1]="blank";  utterances[2][1]="down";
     links[3][1]="blank";  utterances[3][1]="in";
     links[0][2]="blank";  utterances[0][2]="here";
     links[1][2]="blank";  utterances[1][2]="on";
     links[2][2]="blank";  utterances[2][2]="off";
     links[3][2]="blank";  utterances[3][2]="out";
     links[0][3]="blank";  utterances[0][3]="there";
     links[1][3]="blank";  utterances[1][3]="&";
     links[2][3]="blank";  utterances[2][3]="over";
     links[3][3]="blank";  utterances[3][3]="under";
document.main.src="ck15/CK15+.078.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="blank";  utterances[0][1]="Additional optional pages not linked.";
     links[1][1]="blank";  utterances[1][1]="link";
     links[2][1]="blank";  utterances[2][1]="link";
     links[3][1]="blank";  utterances[3][1]="link";
     links[0][2]="blank";  utterances[0][2]="link";
     links[1][2]="blank";  utterances[1][2]="link";
     links[2][2]="blank";  utterances[2][2]="link";
     links[3][2]="blank";  utterances[3][2]="link";
     links[0][3]="blank";  utterances[0][3]="link";
     links[1][3]="blank";  utterances[1][3]="link";
     links[2][3]="blank";  utterances[2][3]="link";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.079.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="toy";
     links[2][1]="blank";  utterances[2][1]="train";
     links[3][1]="blank";  utterances[3][1]="car";
     links[0][2]="blank";  utterances[0][2]="bricks";
     links[1][2]="blank";  utterances[1][2]="Lego";
     links[2][2]="blank";  utterances[2][2]="Yes";
     links[3][2]="blank";  utterances[3][2]="coloring book";
     links[0][3]="blank";  utterances[0][3]="book";
     links[1][3]="blank";  utterances[1][3]="jigsaw";
     links[2][3]="blank";  utterances[2][3]="doll";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.080.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="paint";
     links[2][1]="blank";  utterances[2][1]="glitter";
     links[3][1]="blank";  utterances[3][1]="paper";
     links[0][2]="blank";  utterances[0][2]="tape";
     links[1][2]="blank";  utterances[1][2]="pencil case";
     links[2][2]="blank";  utterances[2][2]="glue";
     links[3][2]="blank";  utterances[3][2]="paint brush";
     links[0][3]="blank";  utterances[0][3]="pen";
     links[1][3]="blank";  utterances[1][3]="pencil";
     links[2][3]="blank";  utterances[2][3]="scissors";
     links[3][3]="materials";  utterances[3][3]="link";
document.main.src="ck15/CK15+.081.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="materials";
     links[2][1]="blank";  utterances[2][1]="wood";
     links[3][1]="blank";  utterances[3][1]="plastic";
     links[0][2]="blank";  utterances[0][2]="fabric";
     links[1][2]="blank";  utterances[1][2]="gold";
     links[2][2]="blank";  utterances[2][2]="sponge";
     links[3][2]="blank";  utterances[3][2]="glass";
     links[0][3]="blank";  utterances[0][3]="stone";
     links[1][3]="blank";  utterances[1][3]="string";
     links[2][3]="blank";  utterances[2][3]="paper";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.082.png";

}

function unknown(){
reset();
     links[0][0]="blank";  utterances[0][0]="Yes";
     links[1][0]="blank";  utterances[1][0]="link";
     links[2][0]="blank";  utterances[2][0]="link";
     links[3][0]="blank";  utterances[3][0]="No";
     links[0][1]="top_page";  utterances[0][1]="link";
     links[1][1]="blank";  utterances[1][1]="computer";
     links[2][1]="blank";  utterances[2][1]="mouse";
     links[3][1]="blank";  utterances[3][1]="keyboard";
     links[0][2]="blank";  utterances[0][2]="email";
     links[1][2]="blank";  utterances[1][2]="internet";
     links[2][2]="blank";  utterances[2][2]="CD";
     links[3][2]="blank";  utterances[3][2]="monitor";
     links[0][3]="blank";  utterances[0][3]="printer";
     links[1][3]="blank";  utterances[1][3]="adapted computer";
     links[2][3]="blank";  utterances[2][3]="speakers";
     links[3][3]="blank";  utterances[3][3]="link";
document.main.src="ck15/CK15+.083.png";

}
