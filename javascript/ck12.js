grid_size_columns=4
grid_size_rows=4

function top_page(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="chatting";
     links[1][1]="questions";
     links[2][1]="personal_care";
     links[3][1]="things";
     links[0][2]="action_words";
     links[1][2]="people";
     links[2][2]="describing";
     links[3][2]="my_day";
utterances[0][3]="Clear";
     links[1][3]="places";
     links[2][3]="leisure";
     links[3][3]="little_words";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="A6A6A6"
colour[1][1]="FF6600"
colour[2][1]="FF9CF8"
colour[3][1]="FFEF07"
colour[0][2]="FF03FF"
colour[1][2]="B27B06"
colour[2][2]="B27B06"
colour[3][2]="FFEF07"
colour[0][3]="CCFFCC"
colour[1][3]="660066"
colour[2][3]="3366FF"
colour[3][3]="458B3C"
slide_number=1
set_colour()

}

function chatting(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="about_me";
     links[2][1]="wml";
utterances[3][1]="I cant find what I want to say?";
utterances[0][2]="Hello";
utterances[1][2]="Im fine";
utterances[2][2]="ok";
utterances[3][2]="Im not so good";
     links[0][3]="my_stories";
utterances[1][3]="sorry";
utterances[2][3]="I dont know";
utterances[3][3]="bye";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="BFBFBF"
colour[3][1]="FFFFFF"
colour[0][2]="BFBFBF"
colour[1][2]="BFBFBF"
colour[2][2]="BFBFBF"
colour[3][2]="BFBFBF"
colour[0][3]="black"
colour[1][3]="black"
colour[2][3]="BFBFBF"
colour[3][3]="BFBFBF"
slide_number=2
set_colour()

}

function about_me(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="My name is";
utterances[2][1]="I live in";
utterances[3][1]="birthday";
     links[0][2]="about_my_family";
utterances[1][2]="--------------";
utterances[2][2]="--------------";
utterances[3][2]="--------------";
     links[0][3]="i_like";
     links[1][3]="i_dont_like";
     links[2][3]="tell_me_about_you";
utterances[3][3]="--------------";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="BFBFBF"
colour[3][1]="BFBFBF"
colour[0][2]="B27B06"
colour[1][2]="BFBFBF"
colour[2][2]="BFBFBF"
colour[3][2]="BFBFBF"
colour[0][3]="BFBFBF"
colour[1][3]="BFBFBF"
colour[2][3]="FF6600"
colour[3][3]="BFBFBF"
slide_number=3
set_colour()

}

function i_like(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="I like";
utterances[2][1]="link";
utterances[3][1]="link";
utterances[0][2]="link";
utterances[1][2]="--------------";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="BFBFBF"
colour[3][1]="BFBFBF"
colour[0][2]="BFBFBF"
colour[1][2]="BFBFBF"
colour[2][2]="BFBFBF"
colour[3][2]="BFBFBF"
colour[0][3]="BFBFBF"
colour[1][3]="BFBFBF"
colour[2][3]="BFBFBF"
colour[3][3]="BFBFBF"
slide_number=4
set_colour()

}

function i_dont_like(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="I dont like";
utterances[2][1]="link";
utterances[3][1]="link";
utterances[0][2]="link";
utterances[1][2]="--------------";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="BFBFBF"
colour[3][1]="BFBFBF"
colour[0][2]="BFBFBF"
colour[1][2]="BFBFBF"
colour[2][2]="BFBFBF"
colour[3][2]="BFBFBF"
colour[0][3]="BFBFBF"
colour[1][3]="BFBFBF"
colour[2][3]="BFBFBF"
colour[3][3]="BFBFBF"
slide_number=5
set_colour()

}

function tell_me_about_you(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="Tell me about you";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="What name?";
utterances[2][1]="Where live?";
utterances[3][1]="Birthday?";
utterances[0][2]="--------------";
utterances[1][2]="--------------";
utterances[2][2]="--------------";
utterances[3][2]="--------------";
utterances[0][3]="--------------";
utterances[1][3]="--------------";
utterances[2][3]="Do you have?";
utterances[3][3]="--------------";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FF6600"
colour[2][1]="FF6600"
colour[3][1]="FF6600"
colour[0][2]="FF6600"
colour[1][2]="FF6600"
colour[2][2]="FF6600"
colour[3][2]="FF6600"
colour[0][3]="FF6600"
colour[1][3]="FF6600"
colour[2][3]="FF6600"
colour[3][3]="FF6600"
slide_number=6
set_colour()

}

function wml(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="chill out";
utterances[2][1]="go away";
utterances[3][1]="wow";
utterances[0][2]="I love you.";
utterances[1][2]="whatever";
utterances[2][2]="no way";
utterances[3][2]="shut up";
utterances[0][3]="dont";
utterances[1][3]="not";
utterances[2][3]="well";
utterances[3][3]="cool";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="BFBFBF"
colour[3][1]="BFBFBF"
colour[0][2]="BFBFBF"
colour[1][2]="BFBFBF"
colour[2][2]="BFBFBF"
colour[3][2]="BFBFBF"
colour[0][3]="black"
colour[1][3]="black"
colour[2][3]="BFBFBF"
colour[3][3]="BFBFBF"
slide_number=7
set_colour()

}

function my_stories(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Let me tell you something";
utterances[2][1]="link";
utterances[3][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="black"
colour[2][1]="black"
colour[3][1]="black"
colour[0][2]="black"
colour[1][2]="black"
colour[2][2]="black"
colour[3][2]="black"
colour[0][3]="black"
colour[1][3]="black"
colour[2][3]="black"
colour[3][3]="black"
slide_number=8
set_colour()

}

function questions(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Can I see that?";
utterances[2][1]="Whats next?";
utterances[3][1]="when";
utterances[0][2]="where";
utterances[1][2]="what";
utterances[2][2]="where";
utterances[3][2]="What do you think?";
utterances[0][3]="How are you?";
utterances[1][3]="who";
utterances[2][3]="why";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="3366FF"
colour[2][1]="FF6600"
colour[3][1]="FF6600"
colour[0][2]="FF6600"
colour[1][2]="FF6600"
colour[2][2]="FF6600"
colour[3][2]="FF6600"
colour[0][3]="FF6600"
colour[1][3]="FF6600"
colour[2][3]="FF6600"
colour[3][3]="FF6600"
slide_number=9
set_colour()

}

function personal_care(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="I need the toilet";
     links[2][1]="i_dont_feel_well";
     links[3][1]="body_parts";
utterances[0][2]="I need some help";
utterances[1][2]="Id like a shower";
utterances[2][2]="Id love a bath";
utterances[3][2]="Can you cut my nails";
utterances[0][3]="I need to get changed";
utterances[1][3]="Can you do my hair?";
utterances[2][3]="clothes";
utterances[3][3]="toiletries";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FF9CF8"
colour[2][1]="FFEF07"
colour[3][1]="FFEF07"
colour[0][2]="FF9CF8"
colour[1][2]="FF9CF8"
colour[2][2]="FF9CF8"
colour[3][2]="FF9CF8"
colour[0][3]="FF9CF8"
colour[1][3]="FF9CF8"
colour[2][3]="FF9CF8"
colour[3][3]="FF9CF8"
slide_number=10
set_colour()

}

function body_parts(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="body";
utterances[2][1]="head";
utterances[3][1]="face";
utterances[0][2]="arm";
utterances[1][2]="stomach";
utterances[2][2]="hand";
utterances[3][2]="chest";
utterances[0][3]="leg";
utterances[1][3]="back";
utterances[2][3]="foot";
     links[3][3]="private_parts";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFEF07"
slide_number=11
set_colour()

}

function private_parts(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Private parts";
utterances[2][1]="bottom";
utterances[3][1]="breasts";
utterances[0][2]="penis";
utterances[1][2]="underarm hair";
utterances[2][2]="vagina";
utterances[3][2]="link";
utterances[0][3]="love";
utterances[1][3]="kiss";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="E741C6"
colour[1][3]="E741C6"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=12
set_colour()

}

function i_dont_feel_well(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="i_have_a_pain_in_my";
utterances[2][1]="headache";
utterances[3][1]="ouch";
utterances[0][2]="cold";
utterances[1][2]="stomach ache";
utterances[2][2]="sick";
utterances[3][2]="chest pain";
utterances[0][3]="cramp";
utterances[1][3]="back pain";
utterances[2][3]="sore throat";
utterances[3][3]="itch";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFEF07"
colour[2][1]="black"
colour[3][1]="black"
colour[0][2]="black"
colour[1][2]="black"
colour[2][2]="black"
colour[3][2]="FF0000"
colour[0][3]="FF0000"
colour[1][3]="black"
colour[2][3]="FF0000"
colour[3][3]="black"
slide_number=13
set_colour()

}

function things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="me_things";
     links[2][1]="food__drink";
     links[3][1]="kitchen_things";
     links[0][2]="clothes";
     links[1][2]="furniture";
     links[2][2]="things_that_help";
     links[3][2]="toiletries";
     links[0][3]="money";
     links[1][3]="transport";
     links[2][3]="nature";
     links[3][3]="real";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=14
set_colour()

}

function me_things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="thing";
utterances[2][1]="bag";
utterances[3][1]="battery";
utterances[0][2]="fire";
utterances[1][2]="book";
utterances[2][2]="iPad";
utterances[3][2]="camera";
utterances[0][3]="stuff";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="charger";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFEF07"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=15
set_colour()

}

function food__drink(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="breakfast";
     links[2][1]="lunch";
     links[3][1]="meals";
utterances[0][2]="Im hungry";
     links[1][2]="veg__salad";
     links[2][2]="fruit";
     links[3][2]="drinks";
utterances[0][3]="Im thirsty";
     links[1][3]="snacks__pud";
     links[2][3]="saucesingredients";
     links[3][3]="food_chat";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="01E7FF"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="01E7FF"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="black"
slide_number=16
set_colour()

}

function breakfast(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="breakfast";
utterances[2][1]="cereal";
utterances[3][1]="egg";
utterances[0][2]="toast";
utterances[1][2]="butter";
utterances[2][2]="jam";
utterances[3][2]="cooked breakfast";
utterances[0][3]="fruit";
utterances[1][3]="pancake";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=17
set_colour()

}

function lunch(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="lunch";
utterances[2][1]="sandwich";
utterances[3][1]="crackers";
utterances[0][2]="cheese";
utterances[1][2]="ham";
utterances[2][2]="chicken";
utterances[3][2]="tuna";
utterances[0][3]="soup";
utterances[1][3]="salad";
utterances[2][3]="cheese on toast";
utterances[3][3]="beans on toast";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=18
set_colour()

}

function meals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="meal";
utterances[2][1]="pasta";
     links[3][1]="meat__fish";
utterances[0][2]="stew";
utterances[1][2]="roast dinner";
utterances[2][2]="Chinese food";
     links[3][2]="fast_food";
utterances[0][3]="curry";
utterances[1][3]="pie";
utterances[2][3]="lasagna";
utterances[3][3]="rice";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFEF07"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFEF07"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=19
set_colour()

}

function meat(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="meat";
utterances[2][1]="bacon";
utterances[3][1]="beef";
utterances[0][2]="lamb";
utterances[1][2]="ham";
utterances[2][2]="chicken";
utterances[3][2]="tuna";
utterances[0][3]="fish";
utterances[1][3]="mince";
utterances[2][3]="pork";
utterances[3][3]="sausages";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=20
set_colour()

}

function fast_food(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fast food";
utterances[2][1]="chips";
utterances[3][1]="chicken nugget";
utterances[0][2]="fish and chips";
utterances[1][2]="fish burger";
utterances[2][2]="cheese burger";
utterances[3][2]="burger";
utterances[0][3]="sweets";
utterances[1][3]="candy floss";
utterances[2][3]="pizza";
utterances[3][3]="hot dog";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=21
set_colour()

}

function vegetables(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="vegetables";
utterances[2][1]="potato";
utterances[3][1]="tomato";
utterances[0][2]="broccoli";
utterances[1][2]="cabbage";
utterances[2][2]="carrot";
utterances[3][2]="cucumber";
utterances[0][3]="sweeetcorn";
utterances[1][3]="peas";
utterances[2][3]="onion";
utterances[3][3]="lettuce";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=22
set_colour()

}

function fruit(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fruit";
utterances[2][1]="apple";
utterances[3][1]="banana";
utterances[0][2]="grapefruit";
utterances[1][2]="mango";
utterances[2][2]="grapes";
utterances[3][2]="lemon";
utterances[0][3]="pear";
utterances[1][3]="strawberry";
utterances[2][3]="orange";
utterances[3][3]="plum";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=23
set_colour()

}

function drinks(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="drink";
utterances[2][1]="coffee";
utterances[3][1]="tea";
     links[0][2]="drink_describe";
utterances[1][2]="milk";
utterances[2][2]="water";
utterances[3][2]="hot chocolate";
     links[0][3]="juice";
     links[1][3]="milkshake";
     links[2][3]="fizzy_drink";
     links[3][3]="alcohol";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="2FFFFC"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFEF07"
colour[1][3]="FFEF07"
colour[2][3]="FFEF07"
colour[3][3]="FFEF07"
slide_number=24
set_colour()

}

function juice(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="juice";
utterances[2][1]="apple juice";
utterances[3][1]="orange juice";
utterances[0][2]="blackcurrant";
utterances[1][2]="pineapple juice";
utterances[2][2]="grape juice";
utterances[3][2]="grapefruit juice";
utterances[0][3]="cranberry juice";
utterances[1][3]="tomato juice";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=25
set_colour()

}

function milkshake(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="milkshake";
utterances[2][1]="banana milkshake";
utterances[3][1]="strawberry milkshake";
utterances[0][2]="chocolate milkshake";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=26
set_colour()

}

function fizzy_drink(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="fizzy drink";
utterances[2][1]="orangeade";
utterances[3][1]="lemonade";
utterances[0][2]="Coke";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FF0000"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=27
set_colour()

}

function alcohol(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="alcohol";
utterances[2][1]="beer";
utterances[3][1]="white wine";
utterances[0][2]="red wine";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFFFF"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=28
set_colour()

}

function snackspud(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="snack";
utterances[2][1]="raison";
utterances[3][1]="cake";
utterances[0][2]="custard";
     links[1][2]="ice_cream";
     links[2][2]="fruit";
     links[3][2]="yoghurt";
utterances[0][3]="sweets";
utterances[1][3]="crisps";
utterances[2][3]="biscuits";
utterances[3][3]="chocolate";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFEF07"
colour[2][2]="FFEF07"
colour[3][2]="FFEF07"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=29
set_colour()

}

function flavors(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="flavors";
utterances[2][1]="raison";
utterances[3][1]="toffee";
utterances[0][2]="link";
utterances[1][2]="mint";
     links[2][2]="fruit";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="chocolate";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFEF07"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=30
set_colour()

}

function food_chat(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Its grose";
utterances[2][1]="I like it";
utterances[3][1]="Ive had enough";
utterances[0][2]="some";
utterances[1][2]="with";
utterances[2][2]="please";
utterances[3][2]="thank you";
utterances[0][3]="hot";
utterances[1][3]="cold";
utterances[2][3]="eat";
utterances[3][3]="drink";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="BFBFBF"
colour[2][1]="black"
colour[3][1]="BFBFBF"
colour[0][2]="008000"
colour[1][2]="008000"
colour[2][2]="black"
colour[3][2]="BFBFBF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="FF03FF"
colour[3][3]="FF03FF"
slide_number=31
set_colour()

}

function kitchen_things(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="spoon";
utterances[2][1]="knife";
utterances[3][1]="fork";
utterances[0][2]="bowl";
utterances[1][2]="plate";
utterances[2][2]="cup";
utterances[3][2]="chopping board";
utterances[0][3]="cheese greater";
utterances[1][3]="pan";
utterances[2][3]="dish cloth";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=32
set_colour()

}

function clothes(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="jeans";
utterances[2][1]="T-shirt";
utterances[3][1]="jumper";
     links[0][2]="shape__colour";
utterances[1][2]="skirt";
utterances[2][2]="P Js";
utterances[3][2]="swimming costume";
utterances[0][3]="underwear";
utterances[1][3]="coat";
utterances[2][3]="shoes";
utterances[3][3]="socks";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="01E7FF"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=33
set_colour()

}

function furniture(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="furniture";
utterances[2][1]="chair";
utterances[3][1]="table";
utterances[0][2]="bed";
utterances[1][2]="toilet";
utterances[2][2]="cupboard";
utterances[3][2]="lamp";
utterances[0][3]="TV";
utterances[1][3]="sink";
utterances[2][3]="draw";
utterances[3][3]="couch";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=34
set_colour()

}

function things_that_help(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="disability";
utterances[2][1]="Comm. book";
utterances[3][1]="Comm. aid";
utterances[0][2]="wheelchair";
utterances[1][2]="hearing aid";
utterances[2][2]="glasses";
utterances[3][2]="medication";
utterances[0][3]="lift";
utterances[1][3]="ECU";
utterances[2][3]="appointment";
utterances[3][3]="charger";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=35
set_colour()

}

function toiletries(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="soap";
utterances[2][1]="toothbrush";
utterances[3][1]="toothpaste";
utterances[0][2]="razor";
utterances[1][2]="deodorant";
utterances[2][2]="shampoo";
utterances[3][2]="make up";
utterances[0][3]="hairdryer";
utterances[1][3]="brush";
utterances[2][3]="toilet roll";
utterances[3][3]="sanitary items";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=36
set_colour()

}

function money(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="money";
utterances[2][1]="cheque book";
utterances[3][1]="wallet";
utterances[0][2]="purse";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=37
set_colour()

}

function transport(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="transport";
utterances[2][1]="airplane";
utterances[3][1]="ambulance";
utterances[0][2]="bus";
utterances[1][2]="car";
utterances[2][2]="boat";
utterances[3][2]="bike";
utterances[0][3]="taxi";
utterances[1][3]="train";
utterances[2][3]="lorry";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=38
set_colour()

}

function nature(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="weather";
     links[2][1]="animals";
     links[3][1]="gardening";
     links[0][2]="real";
     links[1][2]="real";
     links[2][2]="real";
     links[3][2]="real";
     links[0][3]="unknown";
     links[1][3]="real";
     links[2][3]="real";
     links[3][3]="real";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=39
set_colour()

}

function weather(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="weather";
utterances[2][1]="rain";
utterances[3][1]="sun";
utterances[0][2]="icy";
utterances[1][2]="stormy";
utterances[2][2]="cloudy";
utterances[3][2]="foggy";
utterances[0][3]="snow";
utterances[1][3]="freezing";
utterances[2][3]="wind";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="01E7FF"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=40
set_colour()

}

function animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="pets";
     links[2][1]="farm_animals";
     links[3][1]="wild_animals";
     links[0][2]="water_animals";
     links[1][2]="birds";
     links[2][2]="insects";
     links[3][2]="pet_care";
     links[0][3]="unknown";
     links[1][3]="real";
     links[2][3]="real";
     links[3][3]="real";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=41
set_colour()

}

function pets(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="pet";
utterances[2][1]="cat";
utterances[3][1]="hamster";
utterances[0][2]="mouse";
utterances[1][2]="guinea pig";
utterances[2][2]="rabbit";
utterances[3][2]="horse";
utterances[0][3]="fish";
utterances[1][3]="rat";
utterances[2][3]="dog";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=42
set_colour()

}

function farm_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="farm animals";
utterances[2][1]="pig";
utterances[3][1]="sheep";
utterances[0][2]="chicken";
utterances[1][2]="horse";
utterances[2][2]="cow";
utterances[3][2]="chick";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=43
set_colour()

}

function wild_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="wild animals";
utterances[2][1]="zebra";
utterances[3][1]="snake";
utterances[0][2]="monkey";
utterances[1][2]="elephant";
utterances[2][2]="tiger";
utterances[3][2]="dear";
utterances[0][3]="giraffe";
utterances[1][3]="rhinoceros";
utterances[2][3]="hippo";
utterances[3][3]="lion";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=44
set_colour()

}

function water_animals(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="water animal";
utterances[2][1]="fish";
utterances[3][1]="whale";
utterances[0][2]="crab";
utterances[1][2]="dolphin";
utterances[2][2]="jellyfish";
utterances[3][2]="tropical fish";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=45
set_colour()

}

function birds(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="bird";
utterances[2][1]="duck";
utterances[3][1]="parrot";
utterances[0][2]="turkey";
utterances[1][2]="swan";
utterances[2][2]="peacock";
utterances[3][2]="owl";
utterances[0][3]="penguin";
utterances[1][3]="robin";
utterances[2][3]="chicken";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=46
set_colour()

}

function insects(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="insects";
utterances[2][1]="caterpillar";
utterances[3][1]="slug";
utterances[0][2]="snail";
utterances[1][2]="bee";
utterances[2][2]="fly";
utterances[3][2]="spider";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=47
set_colour()

}

function pet_care(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="pet care";
utterances[2][1]="pet bed";
utterances[3][1]="pet food";
utterances[0][2]="pet collar";
utterances[1][2]="lead";
utterances[2][2]="cage";
utterances[3][2]="link";
utterances[0][3]="care for pet";
utterances[1][3]="feed pet";
utterances[2][3]="walk the dog";
utterances[3][3]="materials";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="E741C6"
colour[1][3]="E741C6"
colour[2][3]="E741C6"
colour[3][3]="FFFF00"
slide_number=48
set_colour()

}

function gardening(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="gardening";
utterances[2][1]="flowers";
utterances[3][1]="tree";
utterances[0][2]="Lawn mower";
utterances[1][2]="leaves";
utterances[2][2]="grass";
utterances[3][2]="trowel";
utterances[0][3]="hose";
utterances[1][3]="seeds";
utterances[2][3]="clippers";
utterances[3][3]="rake";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=49
set_colour()

}

function action_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="go";
utterances[2][1]="want";
utterances[3][1]="help";
utterances[0][2]="do";
utterances[1][2]="look";
utterances[2][2]="stop";
utterances[3][2]="get";
utterances[0][3]="have";
utterances[1][3]="turn";
utterances[2][3]="see";
     links[3][3]="more_action_words";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="E741C6"
colour[2][1]="E741C6"
colour[3][1]="E741C6"
colour[0][2]="E741C6"
colour[1][2]="E741C6"
colour[2][2]="000000"
colour[3][2]="E741C6"
colour[0][3]="E741C6"
colour[1][3]="E741C6"
colour[2][3]="E741C6"
colour[3][3]="E741C6"
slide_number=50
set_colour()

}

function more_action_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="play";
utterances[2][1]="give";
utterances[3][1]="listen";
utterances[0][2]="come";
utterances[1][2]="say";
utterances[2][2]="put";
utterances[3][2]="make";
utterances[0][3]="know";
utterances[1][3]="take";
utterances[2][3]="tell";
utterances[3][3]="sing";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="E741C6"
colour[2][1]="E741C6"
colour[3][1]="E741C6"
colour[0][2]="E741C6"
colour[1][2]="E741C6"
colour[2][2]="E741C6"
colour[3][2]="E741C6"
colour[0][3]="E741C6"
colour[1][3]="E741C6"
colour[2][3]="E741C6"
colour[3][3]="E741C6"
slide_number=51
set_colour()

}

function people(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="People";
     links[2][1]="friends";
     links[3][1]="people_who_help";
utterances[0][2]="I";
utterances[1][2]="my";
utterances[2][2]="mine";
     links[3][2]="family";
utterances[0][3]="it";
utterances[1][3]="you";
utterances[2][3]="boy";
utterances[3][3]="girl";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="C48300"
colour[2][1]="C48300"
colour[3][1]="B27B06"
colour[0][2]="C48300"
colour[1][2]="C48300"
colour[2][2]="C48300"
colour[3][2]="B27B06"
colour[0][3]="C48300"
colour[1][3]="C48300"
colour[2][3]="C48300"
colour[3][3]="C48300"
slide_number=52
set_colour()

}

function friends(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="friend";
utterances[2][1]="Friends";
utterances[3][1]="People who help";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="jobs";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="C48300"
colour[2][1]="C48300"
colour[3][1]="C48300"
colour[0][2]="C48300"
colour[1][2]="C48300"
colour[2][2]="C48300"
colour[3][2]="C48300"
colour[0][3]="C48300"
colour[1][3]="C48300"
colour[2][3]="C48300"
colour[3][3]="C48300"
slide_number=53
set_colour()

}

function people_who_help(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="people who help";
utterances[2][1]="Friends";
utterances[3][1]="People who help";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="jobs";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
     links[3][3]="jobs";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="C48300"
colour[2][1]="C48300"
colour[3][1]="C48300"
colour[0][2]="C48300"
colour[1][2]="C48300"
colour[2][2]="C48300"
colour[3][2]="C48300"
colour[0][3]="C48300"
colour[1][3]="C48300"
colour[2][3]="C48300"
colour[3][3]="B27B06"
slide_number=54
set_colour()

}

function jobs(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="jobs";
utterances[2][1]="Friends";
utterances[3][1]="People who help";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="jobs";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="C48300"
colour[2][1]="C48300"
colour[3][1]="C48300"
colour[0][2]="C48300"
colour[1][2]="C48300"
colour[2][2]="C48300"
colour[3][2]="C48300"
colour[0][3]="C48300"
colour[1][3]="C48300"
colour[2][3]="C48300"
colour[3][3]="C48300"
slide_number=55
set_colour()

}

function family(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="family";
utterances[2][1]="Dad";
utterances[3][1]="Mum";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="brother";
utterances[3][2]="sister";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="C48300"
colour[2][1]="C48300"
colour[3][1]="C48300"
colour[0][2]="C48300"
colour[1][2]="C48300"
colour[2][2]="C48300"
colour[3][2]="C48300"
colour[0][3]="C48300"
colour[1][3]="C48300"
colour[2][3]="C48300"
colour[3][3]="C48300"
slide_number=56
set_colour()

}

function describing(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="feelings";
     links[2][1]="shape__colour";
     links[3][1]="opposites";
utterances[0][2]="more";
utterances[1][2]="nice";
utterances[2][2]="different";
utterances[3][2]="same";
utterances[0][3]="wrong";
utterances[1][3]="right";
utterances[2][3]="problem";
utterances[3][3]="idea";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="01E7FF"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=57
set_colour()

}

function feelings(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="afraid";
utterances[2][1]="angry";
utterances[3][1]="safe";
utterances[0][2]="It is";
utterances[1][2]="sad";
utterances[2][2]="happy";
utterances[3][2]="board";
utterances[0][3]="I am";
utterances[1][3]="tired";
utterances[2][3]="bad";
utterances[3][3]="happy";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="C48300"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="C48300"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=58
set_colour()

}

function shape__colour(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="circle";
utterances[2][1]="white";
utterances[3][1]="yellow";
utterances[0][2]="triangle";
utterances[1][2]="star";
utterances[2][2]="black";
utterances[3][2]="red";
utterances[0][3]="square";
utterances[1][3]="rectangle";
utterances[2][3]="green";
utterances[3][3]="blue";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="01E7FF"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=59
set_colour()

}

function opposites(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="all done";
utterances[2][1]="dry";
utterances[3][1]="wet";
utterances[0][2]="fast";
utterances[1][2]="slow";
utterances[2][2]="big";
utterances[3][2]="little";
utterances[0][3]="easy";
utterances[1][3]="hard";
utterances[2][3]="clean";
utterances[3][3]="dirty";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="01E7FF"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=60
set_colour()

}

function numbers(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="123";
utterances[2][1]="1";
utterances[3][1]="2";
utterances[0][2]="3";
utterances[1][2]="4";
utterances[2][2]="5";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="01E7FF"
colour[2][1]="01E7FF"
colour[3][1]="01E7FF"
colour[0][2]="01E7FF"
colour[1][2]="01E7FF"
colour[2][2]="01E7FF"
colour[3][2]="01E7FF"
colour[0][3]="01E7FF"
colour[1][3]="01E7FF"
colour[2][3]="01E7FF"
colour[3][3]="01E7FF"
slide_number=61
set_colour()

}

function my_day(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="123";
     links[2][1]="timetable";
     links[3][1]="computer_control";
     links[0][2]="my_day_places";
     links[1][2]="cooking";
     links[2][2]="real";
     links[3][2]="real";
     links[0][3]="unknown";
     links[1][3]="real";
     links[2][3]="real";
     links[3][3]="real";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="2FFFFC"
colour[2][1]="FFFF00"
colour[3][1]="FF0000"
colour[0][2]="660066"
colour[1][2]="E741C6"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=62
set_colour()

}

function my_day_places(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="My day places";
utterances[2][1]="link";
utterances[3][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="660066"
colour[2][1]="660066"
colour[3][1]="660066"
colour[0][2]="660066"
colour[1][2]="660066"
colour[2][2]="660066"
colour[3][2]="660066"
colour[0][3]="660066"
colour[1][3]="660066"
colour[2][3]="660066"
colour[3][3]="660066"
slide_number=63
set_colour()

}

function places(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="shops";
     links[2][1]="places_outside";
utterances[3][1]="restaurant";
utterances[0][2]="cinema";
utterances[1][2]="School/college";
utterances[2][2]="town";
utterances[3][2]="pool";
utterances[0][3]="library";
utterances[1][3]="pub";
utterances[2][3]="doctors";
     links[3][3]="places_at_home";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="660066"
colour[2][1]="660066"
colour[3][1]="660066"
colour[0][2]="660066"
colour[1][2]="660066"
colour[2][2]="660066"
colour[3][2]="660066"
colour[0][3]="660066"
colour[1][3]="660066"
colour[2][3]="660066"
colour[3][3]="660066"
slide_number=64
set_colour()

}

function shops(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="shop";
utterances[2][1]="supermarket";
utterances[3][1]="butcher";
utterances[0][2]="bread";
utterances[1][2]="veg shop";
utterances[2][2]="shopping centre";
utterances[3][2]="clothes shop";
utterances[0][3]="market";
utterances[1][3]="cafe";
utterances[2][3]="music shop";
utterances[3][3]="pharmacy";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="660066"
colour[2][1]="660066"
colour[3][1]="660066"
colour[0][2]="660066"
colour[1][2]="660066"
colour[2][2]="660066"
colour[3][2]="660066"
colour[0][3]="660066"
colour[1][3]="660066"
colour[2][3]="660066"
colour[3][3]="660066"
slide_number=65
set_colour()

}

function outside_places(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="outside places";
utterances[2][1]="street";
utterances[3][1]="car park";
utterances[0][2]="beach";
utterances[1][2]="hill";
utterances[2][2]="woods";
utterances[3][2]="field";
utterances[0][3]="garden";
utterances[1][3]="lake";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="660066"
colour[2][1]="660066"
colour[3][1]="660066"
colour[0][2]="660066"
colour[1][2]="660066"
colour[2][2]="660066"
colour[3][2]="660066"
colour[0][3]="660066"
colour[1][3]="660066"
colour[2][3]="660066"
colour[3][3]="660066"
slide_number=66
set_colour()

}

function places_at_home(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="home";
utterances[2][1]="dining room";
utterances[3][1]="hall";
utterances[0][2]="kitchen";
utterances[1][2]="toilet";
utterances[2][2]="lounge";
utterances[3][2]="bedroom";
utterances[0][3]="my room";
utterances[1][3]="up stairs";
utterances[2][3]="down stairs";
utterances[3][3]="stairs";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="660066"
colour[2][1]="660066"
colour[3][1]="660066"
colour[0][2]="660066"
colour[1][2]="660066"
colour[2][2]="660066"
colour[3][2]="660066"
colour[0][3]="660066"
colour[1][3]="660066"
colour[2][3]="660066"
colour[3][3]="660066"
slide_number=67
set_colour()

}

function time(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="time";
     links[2][1]="day";
     links[3][1]="special_days";
utterances[0][2]="now";
utterances[1][2]="never";
utterances[2][2]="later";
utterances[3][2]="late";
utterances[0][3]="again";
utterances[1][3]="ready";
utterances[2][3]="before";
utterances[3][3]="after";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="0000FF"
colour[2][1]="0000FF"
colour[3][1]="0000FF"
colour[0][2]="0000FF"
colour[1][2]="0000FF"
colour[2][2]="0000FF"
colour[3][2]="0000FF"
colour[0][3]="0000FF"
colour[1][3]="0000FF"
colour[2][3]="0000FF"
colour[3][3]="0000FF"
slide_number=68
set_colour()

}

function day(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="day";
utterances[2][1]="weekend";
utterances[3][1]="night";
utterances[0][2]="Monday";
utterances[1][2]="Tuesday";
utterances[2][2]="Wednesday";
utterances[3][2]="Thursday";
utterances[0][3]="Friday";
utterances[1][3]="Saturday";
utterances[2][3]="Sunday";
utterances[3][3]="week";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="0000FF"
colour[2][1]="0000FF"
colour[3][1]="0000FF"
colour[0][2]="0000FF"
colour[1][2]="0000FF"
colour[2][2]="0000FF"
colour[3][2]="0000FF"
colour[0][3]="0000FF"
colour[1][3]="0000FF"
colour[2][3]="0000FF"
colour[3][3]="0000FF"
slide_number=69
set_colour()

}

function special_days(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Special day";
utterances[2][1]="New Year";
utterances[3][1]="valentines";
utterances[0][2]="holiday";
utterances[1][2]="wedding";
utterances[2][2]="Easter";
utterances[3][2]="Birthday";
utterances[0][3]="Bonfire night";
utterances[1][3]="Halloween";
utterances[2][3]="party";
     links[3][3]="christmas";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="0000FF"
colour[2][1]="0000FF"
colour[3][1]="0000FF"
colour[0][2]="0000FF"
colour[1][2]="0000FF"
colour[2][2]="0000FF"
colour[3][2]="0000FF"
colour[0][3]="0000FF"
colour[1][3]="0000FF"
colour[2][3]="0000FF"
colour[3][3]="0000FF"
slide_number=70
set_colour()

}

function christmas(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Christmas";
utterances[2][1]="Christmas day";
utterances[3][1]="Farther Christmas";
utterances[0][2]="Christmas pudding";
utterances[1][2]="lights";
utterances[2][2]="Christmas cake";
utterances[3][2]="";
utterances[0][3]="decorations";
utterances[1][3]="Christmas tree";
utterances[2][3]="gift";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="0000FF"
colour[2][1]="0000FF"
colour[3][1]="0000FF"
colour[0][2]="0000FF"
colour[1][2]="0000FF"
colour[2][2]="0000FF"
colour[3][2]="0000FF"
colour[0][3]="0000FF"
colour[1][3]="0000FF"
colour[2][3]="0000FF"
colour[3][3]="0000FF"
slide_number=71
set_colour()

}

function leisure(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
     links[1][1]="my_photos";
     links[2][1]="mp3";
     links[3][1]="volume_up";
     links[0][2]="i_want";
     links[1][2]="phone";
     links[2][2]="real";
     links[3][2]="volume_down";
     links[0][3]="unknown";
     links[1][3]="dvd";
     links[2][3]="tv";
     links[3][3]="ecu";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="3366FF"
colour[2][1]="3366FF"
colour[3][1]="3366FF"
colour[0][2]="3366FF"
colour[1][2]="3366FF"
colour[2][2]="3366FF"
colour[3][2]="3366FF"
colour[0][3]="FF0000"
colour[1][3]="3366FF"
colour[2][3]="3366FF"
colour[3][3]="3366FF"
slide_number=72
set_colour()

}

function i_want(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="to go outside";
utterances[2][1]="to call someone";
utterances[3][1]="to cook something";
utterances[0][2]="to do something else";
utterances[1][2]="to watch something";
utterances[2][2]="to go on holiday";
utterances[3][2]="to have a go";
     links[0][3]="my_stories";
utterances[1][3]="to listen to something";
utterances[2][3]="to swim";
utterances[3][3]="to go home";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="E741C6"
colour[2][1]="E741C6"
colour[3][1]="E741C6"
colour[0][2]="E741C6"
colour[1][2]="E741C6"
colour[2][2]="E741C6"
colour[3][2]="E741C6"
colour[0][3]="black"
colour[1][3]="E741C6"
colour[2][3]="E741C6"
colour[3][3]="E741C6"
slide_number=73
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="Hello I use AAC";
     links[2][1]="questions";
     links[3][1]="i_want_to_tell_you";
utterances[0][2]="congratulations";
     links[1][2]="people";
utterances[2][2]="speak soon";
utterances[3][2]="Im not so good";
utterances[0][3]="Tell me your news";
utterances[1][3]="I miss you";
utterances[2][3]="Happy Birthday";
utterances[3][3]="Get well soon";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFFFF"
colour[2][1]="FF6600"
colour[3][1]="BFBFBF"
colour[0][2]="BFBFBF"
colour[1][2]="B27B06"
colour[2][2]="B27B06"
colour[3][2]="BFBFBF"
colour[0][3]="BFBFBF"
colour[1][3]="black"
colour[2][3]="BFBFBF"
colour[3][3]="BFBFBF"
slide_number=74
set_colour()

}

function dvd(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
utterances[2][1]="link";
utterances[3][1]="link";
     links[0][2]="my_dvds";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="medication";
utterances[0][3]="link";
utterances[1][3]="rewind";
utterances[2][3]="Play/pause";
utterances[3][3]="Fast forward";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="black"
colour[2][1]="black"
colour[3][1]="black"
colour[0][2]="3366FF"
colour[1][2]="black"
colour[2][2]="black"
colour[3][2]="black"
colour[0][3]="3366FF"
colour[1][3]="3366FF"
colour[2][3]="3366FF"
colour[3][3]="3366FF"
slide_number=75
set_colour()

}

function mp3(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="link";
utterances[2][1]="link";
utterances[3][1]="link";
     links[0][2]="my_albums";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="medication";
utterances[0][3]="link";
utterances[1][3]="rewind";
utterances[2][3]="Play/pause";
utterances[3][3]="Fast forward";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="black"
colour[2][1]="black"
colour[3][1]="black"
colour[0][2]="3366FF"
colour[1][2]="black"
colour[2][2]="black"
colour[3][2]="black"
colour[0][3]="3366FF"
colour[1][3]="3366FF"
colour[2][3]="3366FF"
colour[3][3]="3366FF"
slide_number=76
set_colour()

}

function cooking(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="cook";
utterances[2][1]="chop";
utterances[3][1]="grate";
utterances[0][2]="stir";
utterances[1][2]="fry";
utterances[2][2]="poor";
utterances[3][2]="blend";
utterances[0][3]="measure";
utterances[1][3]="peal";
utterances[2][3]="link";
utterances[3][3]="dont burn it";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="E741C6"
colour[2][1]="E741C6"
colour[3][1]="E741C6"
colour[0][2]="E741C6"
colour[1][2]="E741C6"
colour[2][2]="E741C6"
colour[3][2]="E741C6"
colour[0][3]="E741C6"
colour[1][3]="E741C6"
colour[2][3]="E741C6"
colour[3][3]="BFBFBF"
slide_number=77
set_colour()

}

function little_words(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="up";
utterances[2][1]="down";
utterances[3][1]="in";
utterances[0][2]="here";
utterances[1][2]="on";
utterances[2][2]="off";
utterances[3][2]="out";
utterances[0][3]="there";
utterances[1][3]="&";
utterances[2][3]="over";
utterances[3][3]="under";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="008000"
colour[2][1]="008000"
colour[3][1]="008000"
colour[0][2]="3366FF"
colour[1][2]="008000"
colour[2][2]="008000"
colour[3][2]="008000"
colour[0][3]="3366FF"
colour[1][3]="FF9CF8"
colour[2][3]="008000"
colour[3][3]="008000"
slide_number=78
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
utterances[0][1]="Additional optional pages not linked.";
utterances[1][1]="link";
utterances[2][1]="link";
utterances[3][1]="link";
utterances[0][2]="link";
utterances[1][2]="link";
utterances[2][2]="link";
utterances[3][2]="link";
utterances[0][3]="link";
utterances[1][3]="link";
utterances[2][3]="link";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="black"
colour[1][1]="black"
colour[2][1]="black"
colour[3][1]="black"
colour[0][2]="black"
colour[1][2]="black"
colour[2][2]="black"
colour[3][2]="black"
colour[0][3]="black"
colour[1][3]="black"
colour[2][3]="black"
colour[3][3]="black"
slide_number=79
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="toy";
utterances[2][1]="train";
utterances[3][1]="car";
utterances[0][2]="bricks";
utterances[1][2]="Lego";
utterances[2][2]="Yes";
utterances[3][2]="coloring book";
utterances[0][3]="book";
utterances[1][3]="jigsaw";
utterances[2][3]="doll";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=80
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="paint";
utterances[2][1]="glitter";
utterances[3][1]="paper";
utterances[0][2]="tape";
utterances[1][2]="pencil case";
utterances[2][2]="glue";
utterances[3][2]="paint brush";
utterances[0][3]="pen";
utterances[1][3]="pencil";
utterances[2][3]="scissors";
     links[3][3]="materials";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFEF07"
slide_number=81
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="materials";
utterances[2][1]="wood";
utterances[3][1]="plastic";
utterances[0][2]="fabric";
utterances[1][2]="gold";
utterances[2][2]="sponge";
utterances[3][2]="glass";
utterances[0][3]="stone";
utterances[1][3]="string";
utterances[2][3]="paper";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=82
set_colour()

}

function unknown(){
reset();
utterances[0][0]="Yes";
utterances[1][0]="link";
utterances[2][0]="link";
utterances[3][0]="No";
     links[0][1]="top_page";
utterances[1][1]="computer";
utterances[2][1]="mouse";
utterances[3][1]="keyboard";
utterances[0][2]="email";
utterances[1][2]="internet";
utterances[2][2]="CD";
utterances[3][2]="monitor";
utterances[0][3]="printer";
utterances[1][3]="adapted computer";
utterances[2][3]="speakers";
utterances[3][3]="link";
colour[0][0]="black"
colour[1][0]="black"
colour[2][0]="black"
colour[3][0]="black"
colour[0][1]="FFEF07"
colour[1][1]="FFFF00"
colour[2][1]="FFFF00"
colour[3][1]="FFFF00"
colour[0][2]="FFFF00"
colour[1][2]="FFFF00"
colour[2][2]="FFFF00"
colour[3][2]="FFFF00"
colour[0][3]="FFFF00"
colour[1][3]="FFFF00"
colour[2][3]="FFFF00"
colour[3][3]="FFFF00"
slide_number=83
set_colour()

}
