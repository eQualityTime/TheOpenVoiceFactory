
# AzuleJoe - AAC software

From: http://joereddington.com/4855/2015/02/18/azulejoe-communikate-behind-the-scenes./ 

One of the parts of CommuniKate 20 that turned out to be very popular is the [live demo](http://joereddington.com/azulejoe/communikatedemo/en/) (you can view a video of it in action [here](http://joereddington.com/4693/2015/01/19/using-azulejoe-and-communikate-20-online/ "Using AzuleJoe and CommuniKate 20 online")). It's time to talk a little bit about that live demo and how it works. This is one of those posts that's only focused on the technical reader. It will have very little value to the non-coders among you I'm afraid. The live demo software is called AzuleJoe, it's entirely open-source and, like almost all the code presented on this site, it's [available to download from github](https://github.com/joereddington/azulejoe). When you view the live demo, what you are actually looking at is the CommuniKate 20 pageset running on the AzuleJoe software. The software that became AzuleJoe dates back to 2009 when I built a system for my little brother. When we started to prepare CommuniKate 20 for public release in 2014, the software was significantly overhauled into something that developed it’s own identity
### The name ‘AzuleJoe’…

In case you are wondering, the name 'AzuleJoe is pronounced A-fo-lec-oy, AzuleJoe is a Basque word meaning Tiles. I Apologise for the ‘out there’ nature of the word but when you are trying to find a word that sounds like it might be something to do with an AAC device and also includes “Joe” as the last three letters ("CommuniKate" rather painted me into a corner) you are pretty happy with a short word that means Tiles.
### Why is it separate?

Of course, we could have folded AzuleJoe in with CommuniKate and left it as a simple online demo. The reason we that we separated out the projects should be obvious to anyone browsing the repository: AzuleJoe can demonstrate any pageset, not just CommuniKate 20\. CommuniKate 20 is the _first_ openly licensed pageset, we have no intention that it should be the _only._ If you've got a pageset that you would like to see running online easily, then the AzuleJoe code will help out, and indeed, _Joe_ will probably help out if you ask.  
### Design

Some of AzuleJoe's design features might be a little unexpected on first viewing, but they are generally part of a reasoned view. Let's look at one in particular.
#### **Full page images**

You might expect that the images that AzuleJoe works on to look like this: [![Screenshot 2015-02-13 12.10.12](http://joereddington.com/wp-content/uploads/2015/02/Screenshot-2015-02-13-12.10.12.png)](http://joereddington.com/wp-content/uploads/2015/02/Screenshot-2015-02-13-12.10.12.png)Instead they look like this: [![breakfast](http://joereddington.com/wp-content/uploads/2015/02/breakfast-300x225.jpg)](http://joereddington.com/wp-content/uploads/2015/02/breakfast.jpg)There are sensible reasons for this. First of all it was useful for the development of the pageset. Kate put CommuniKate together as a PowerPoint file. I then exported that into images and put those images directly into the software. Each image has an accompanying JavaScript file that tells the software what do do when each zone on the screen is pressed. Currently I generate these JavaScript files by hand, but the next version of AzuleJoe should be able to generate them automatically from the PowerPoint files. Here's the JavaScript file that goes with the image above.
<pre line="1" lang="JavaScript">function breakfast(){
reset();
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
</pre>

  You can see how simple this is to build, one image for every page and one very simple file to go with each one.  
##### **Why is this useful?**

We think that pageset design should be as simple as possible for users. If it's PowerPoint it can be a communication book as quickly as it can be a working AAC demo. We want to be able to say to people "Here is a PowerPoint Template, now you can build a pageset concentrating on the language rather than the buggy interface some programmer threw together. When you are finished. We'll expand it out for you."  
### I like open source things, how can I get involved?

We love the idea of people helping out with the code. Because AzuleJoe is currently such a simple project, it's there are a lot of easy things that people can do to help. So if you'd like to fork the repo to, for example:
*   retarget AzuleJoe to a different pageset
*   import from (hard) or export to (medium) the [openboardformat](http://www.openboardformat.org)
*   precompute utterances


###Disclaimer###
This software is designed to let healthcare professionals and interested individuals explore a pageset for use on an AAC device.  

It is NOT an AAC device. AAC devices (including software released freely) must be registered as medical devices within the EU.  A freely downloadable piece of AAC software must also comply with the relevant medical device legislation in any of the 100s of countries they it can be accessed in. 

We’re currently examining this process with a view to eventually registering, but this is a costly and time-consuming process, and we’d like to spend our time on development.  Until then, AzuleJoe is for pageset demonstration, exploration, and research. 
