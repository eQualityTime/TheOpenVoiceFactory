/*
 * Unit tests for javascript using jasmine
 *
 */
jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
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
		
		it('The key variable should be equals to valid single cell board?', function(doneFn) {

			var fileName = 'test-1.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);
				
				setupInternalDataStructuresObf(jsondata);

				expect(key).toBe('valid single cell board');
				
				doneFn();
			});			
		});
      
        it('If the obf file does not have a name property it should throw error', function(doneFn) {

			var fileName = 'test-2.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				var filterData = JSON.parse(data);
				
				var nameFun = function() {
					if(!filterData[0].name){
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
				var filterData = JSON.parse(data); // Convert JSON to object
				
				var jsondata = JSON.stringify(filterData[0]);
				
				setupInternalDataStructuresObf(jsondata);
				
				expect(filterData[0].buttons[0].label).toBe(labels.undefined[0][0]);

				doneFn();
			});			
		});
		
		it('If there is no button.label defined, the file should be rejected with an error message', function(doneFn) {

			var fileName = 'test-3.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				var filterData = JSON.parse(data); // Convert JSON to object
				
				var buttonLableFun = function() {
					if(!filterData[0].buttons[0].label){
						throw 'No label defined for button id ' + filterData[0].buttons[0].id;
					}
				};
				expect(buttonLableFun).toThrow('No label defined for button id T1');

				doneFn();
			});			
		});

	});

});

/**
 * This function read test data file
 * 
 * @parameters: 
 * filename: pass file name that you want to read
 * cb: return function with two parameters first is error and second is response
 *
 */ 
myFunctionThatMakesRequests = function (fileName, cb) {
	$.ajax({
		url: '/base/testdata/' + fileName,	
		cache: false,
		success: function (data) {	
			cb(false, data);			
		},
		error: function (error) {		
			cb(true, error);
		}
	});
};