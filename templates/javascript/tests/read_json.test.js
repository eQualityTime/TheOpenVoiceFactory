/*
 * Unit tests for javascript/comscan.js
 *
 */
describe('Comscan', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<table id="mainGrid" border=1 height=520 width=720 class="four"></table> <form name="myform"> <textarea id="messagewindow" name="outputtext"></textarea> </form>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
	alert("done");

    });


    // call the init function of calculator to register DOM elements


// # List of tests 
// * Can you fetch an object from a json file? 
// - When loading the first page. Do a selection of the right squares have the correct message in them?
// - When pressing a particular button, does the message window change appropriately 
// - Does the 'clear' function work when triggered? 
// * Do two-part functions trigger at the right time? 
//
// That should be enought to get started.
//
//


//List of todos: 
// We should seperate the click event so that there is a function that takes a pixel x,y, a function that takes a normalised x,y for the grid, and one that takes the information converted into a grid reference

// * Does that object have the right number of slides in it. 
    it('We can parse an example json document', function() {
        setupInternalDataStructures(sample);	
        expect(Object.keys(links).length).toBe(100);
    });

// * When loading the first page. Do a selection of the right squares have the correct message in them?
    it('When loading top page, the utterances are in the right place', function() {
        setupInternalDataStructures(sample);	
        expect(labels["toppage"][0][0]).toBe('Yes');
        expect(labels["toppage"][1][1]).toBe('I want to talk to you.');
    });

// * When pressing a particular button, does the message window change apropreityly 
  it('Message window sets up and changes with button press.', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
    });


 it('clear function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
	add(0,4);
	expect(document.getElementById("messagewindow").value).toBe("");
    });


   it('clear function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I want to talk to you.");
	add(0,4);
	expect(document.getElementById("messagewindow").value).toBe("");
    });


  it('Two part function works', function() {
        setupInternalDataStructures(sample);	
	setupMessageWindow();
	expect(document.getElementById("messagewindow").value).toBe("");
	add(2,2);
	add(3,1);
	add(1,1);
	expect(document.getElementById("messagewindow").value).toBe(" I have a pain in my");
	expect(key).toBe("bodyparts")


    });

// * When pressing a particular button, does the contents of other buttons change. 
  it('the add function changes the keys', function() {
        setupInternalDataStructures(sample);	
	add(2,2);
	expect(key).toBe("personalcare");
    });


//it('Speak function is triggered...', function() {
 //       spyOn(window, "say");
  //      expect(think).toHaveBeenCalled();
   //     //learned this at http://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html#fbid=KJtVgELupgs
  //  });

});



