/*
 * Unit tests for javascript using jasmine
 *
 */
//jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
describe( "Reading OBF Data into local data structures", function () {
         
    describe( "Test Name property", function () {
		
		//Declare the variable within the suite's scope		
		var originalTimeout;
		
		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;			
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});
		
		it('The key variable should be equal to “valid single cell board”', function(doneFn) {

			var fileName = 'test-1.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				console.log('success for test-1.obf: ',data);
				setupInternalDataStructuresObf(data)
				console.log('labels: ', labels);
				expect(key).toBe('valid single cell board');
				
				doneFn();
			});			
		});
      
        it('If the obf file does not have a ‘name’ property it should throw error', function(doneFn) {

			var fileName = 'test-2.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				//var filterData = JSON.parse(data);
                var filterData = data;
				console.log('success for test-2.obf: ',filterData);
				var nameFun = function() {
					if(!filterData.name){
						throw 'No page name defined';
					}
				};
				expect(nameFun).toThrow('No page name defined');				
				doneFn();
			});
			
        });

    });

	describe( "Test Grid and button property", function () {
		//Declare the variable within the suite's scope		
		var originalTimeout;
		
		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;			
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});
		
		it('The value button.label should appear in the labels array', function(doneFn) {

			var fileName = 'test-2.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				
				//var filterData = JSON.parse(data); // Convert JSON to object
                var filterData = data;
                
				console.log('success for test-2.obf: ',data);
				
				setupInternalDataStructuresObf(data);
				
				expect(filterData.buttons[0].label).toBe(labels.undefined[0][0]);

				doneFn();
			});			
		});
		
		it('If there is no button.label defined, the file should be rejected with an error message', function(doneFn) {

			var fileName = 'test-3.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				
				//var filterData = JSON.parse(data); // Convert JSON to object
                var filterData = data;
				console.log('success for test-3.obf: ',data);
				
				var buttonLableFun = function() {
					if(!filterData.buttons[0].label){
						throw 'No label defined for button id ' + filterData.buttons[0].id;
					}
				};
				expect(buttonLableFun).toThrow('No label defined for button id T1');

				doneFn();
			});			
		});

	});

});

/**
 * This function reads in the test data file
 * 
 * @parameters: 
 * filename: pass file name that you want to read
 * cb: return function with two parameters first is error and second is response
 *
 */ 
myFunctionThatMakesRequests = function (fileName, cb) {
	$.ajax({
		url: fileName,				
		success: function (data) {			
			cb(false, data);			
		},
		error: function (data) {			
			cb(true, data);
		}
	});
};