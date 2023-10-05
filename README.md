# The Open Voice Factory - AAC software

Live site: http://theopenvoicefactory.org

The Open Voice Factory converts communication boards into communication devices.

Anyone can create an aid by editing a PowerPoint template to add their own pages or utterances. When you upload your template to the factory, it will create a working communication aid for you.

The resulting programs run on any platform, from tablets to laptops to phones, without installation or complex setup.

Everything we make is free. That’s free as in ‘don’t pay for it’ and free as in speech. All of our code is freely available on github here and anyone can change or repurpose without having to ask us first. We’re supported by the volunteers who write the code, create the templates and help out all over.

The sections below let you play with our demos, have a go at creating your own, and find out how you can help.


## History
One of the parts of CommuniKate 20 that turned out to be very popular is the [live demo](http://joereddington.com/azulejoe/communikatedemo/en/) (you can view a video of it in action [here](http://joereddington.com/4693/2015/01/19/using-azulejoe-and-communikate-20-online/ "Using the Open Voice Factory and CommuniKate 20 online")). It's time to talk a little bit about that live demo and how it works. This is one of those posts that's only focused on the technical reader. It will have very little value to the non-coders among you I'm afraid. The live demo software is called the Open Voice Factory, it's entirely open-source and, like almost all the code presented on this site, it's [available to download from github](https://github.com/joereddington/azulejoe). When you view the live demo, what you are actually looking at is the CommuniKate 20 pageset running on the Open Voice Factory software. The software that became the Open Voice Factory dates back to 2009 when I built a system for my little brother. When we started to prepare CommuniKate 20 for public release in 2014, the software was significantly overhauled into something that developed it’s own identity

### I like open source things, how can I get involved?

We love the idea of people helping out with the code. Because the Open Voice Factory is currently such a simple project, it's there are a lot of easy things that people can do to help. So if you'd like to fork the repo to, for example:
*   retarget the Open Voice Factory to a different pageset
*   precompute utterances

## Building the developement version
I've just built the working development version on a mac that was not my own and the commands I needed were...
* Clone or download the repo
* pip install python-pptx
* sudo pip install python-pptx
* ./localcreate.sh CK20V2.pptx 5
* open aidCK20V2.pptx/index.html

# Disclaimer
This software is designed to let healthcare professionals and interested individuals explore a pageset for use on an AAC device.  

It is NOT an AAC device. AAC devices (including software released freely) must be registered as medical devices within the EU.  A freely downloadable piece of AAC software must also comply with the relevant medical device legislation in any of the 100s of countries they it can be accessed in. 

We’re currently examining this process with a view to eventually registering, but this is a costly and time-consuming process, and we’d like to spend our time on development.  Until then, the Open Voice Factory is for pageset demonstration, exploration, and research. 


# Development notes
* The Open Voice Factory is hosted on and AWS instance and the highest python version accepted is 3.7. 
