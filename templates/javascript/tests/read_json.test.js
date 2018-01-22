/*
 * Unit tests for javascript/comscan.js
 *
 */
describe('Comscan', function() {

    // inject the HTML fixture for the tests
    beforeEach(function() {
        var fixture = '<table id="mainGrid" border=1 height=520 width=720 class="four"></table>';
        document.body.insertAdjacentHTML(
            'afterbegin',
            fixture);
	alert("done");

    });


    // call the init function of calculator to register DOM elements


// # List of tests 
// * Can you fetch an object from a json file? 
// * Does that object have the right number of slides in it. 
// * When loading the first page. Do a selection of the right squares have the correct message in them?
// * When pressing a particular button, does the message window change apropreityly 
// * When pressing a particular button, does the contents of other buttons change. 
// * Does the 'speak' function trigger when that button is pressed
// * Does the 'clear' function work when triggered? 
// * Do two-part functions trigger at the right time? 
//
// That should be enought to get started.


    it('We can parse an example json document', function() {
        setupInternalDataStructures(sample);	
        expect(Object.keys(links).length).toBe(100);
    });

    it('the highlight outputs -thinking- speech each time it is moved', function() {
        iterator = testiteratorA();
        spyOn(window, "think");
        iterator.next()
        expect(think).toHaveBeenCalled();
        //learned this at http://www.htmlgoodies.com/html5/javascript/spy-on-javascript-methods-using-the-jasmine-testing-framework.html#fbid=KJtVgELupgs
    });

});



