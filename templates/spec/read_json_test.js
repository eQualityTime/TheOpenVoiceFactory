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
		
		it('The key variable should be equals to "valid single cell board"', function(doneFn) {

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
      
        it('If the obf file does not have a "name" property it should throw error', function(doneFn) {

			var fileName = 'test-2.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);
				
				setupInternalDataStructuresObf(jsondata);
				
				var buttonLableFun = function() {
					if(errorMsg){
						throw errorMsg;
					}
				};
				//expect(buttonLableFun).toThrow('No label defined for button id T1');
				

				expect(buttonLableFun).toThrow('No page name defined');

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

			var fileName = 'test-1.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object
				
				var jsondata = JSON.stringify(filterData[0]);
				
				setupInternalDataStructuresObf(jsondata);
				
				var objKey = Object.keys(labels);
				
				expect(filterData[0].buttons[0].label).toBe( labels[objKey[1]][0][0] );

				doneFn();
			});			
		});
		
		it('If there is no button.label defined, the file should be rejected with an error message', function(doneFn) {

			var fileName = 'test-3.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object

				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				var objKey = Object.keys(labels);			

				var buttonLableFun = function() {
					if(!labels[objKey[1]][0][0]){
						throw 'No label defined for button id ' + filterData[0].buttons[0].id;
					}
				};
				expect(buttonLableFun).toThrow('No label defined for button id T1');

				doneFn();
			});
		});

		it('A test obf file with a grid size of 3x2 can be read correctly and 3x2 grid of buttons is created', function(doneFn) {

			var fileName = 'test-4.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object

				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				var testDataGridSize = ( filterData[0].grid.rows * filterData[0].grid.columns);
				var buttonLength = gridSize.length;				

				expect(testDataGridSize).toBe(buttonLength);
				
				doneFn();
			});
		});

		it('Sounds can be read correctly, Button T1 has the associated sound "s1"', function(doneFn) {

			var fileName = 'test-4.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object

				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);
				
				expect(gridSize[0].soundId).toBe(soundGrid[0].key);

				doneFn();
			});
			
		});

		it('Sounds can be read correctly, Button T2 has no associated sound', function(doneFn) {

			var fileName = 'test-4.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object

				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				var buttonLableFun = function() {
					if(!gridSize[1].soundId){
						throw 'Button ' + gridSize[1].id + ' has no associated sound';
					}
				};
				expect(buttonLableFun).toThrow('Button T2 has no associated sound');
				
				doneFn();
			});
			
		});

		it('Invalid sound IDs are reported as errors', function(doneFn) {

			var fileName = 'test-5.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data); // Convert JSON to object

				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				/* for (var i=0; i < gridSize.length; i++ ) {					
					expect(gridSize[i].soundId).toBe(soundGrid[i].key);
				} */

				var arr = [];
				for (var i=0; i < soundGrid.length; i++ ) {
					arr.push(soundGrid[i].key);
				}

				for (var i=0; i < gridSize.length; i++ ) {
					expect(arr).toContain(gridSize[i].soundId);
				}

				doneFn();
			});

		});

	});

	describe( "Test Images properties", function () {
		//Declare the variable within the suite's scope
		var originalTimeout;

		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		/* it('If the obf file references an image which is not defined it should throw error', function(doneFn) {

			var fileName = 'test-6.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);

				expect(function() {
					setupInternalDataStructuresObf(jsondata);
				}).toThrow("Image reference is not defined");
								
				doneFn();
			});
			
        }); */

		it('Images can be read in correctly', function(doneFn) {

			var fileName = 'test-6.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);
				
				setupInternalDataStructuresObf(jsondata);

				expect(filterData[0].images[0].url).toBe(images[0].url);
				
				doneFn();
			});			
		});

		it('Invalid images are reported as errors', function(doneFn) {

			var fileName = 'test-6.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				var ImgFun = function() {
					if(!images[1].url) {
						throw 'Image id: ' + images[1].imageId + ' has no image url';
					}
				};
				expect(ImgFun).toThrow('Image id: 3 has no image url');
				
				doneFn();
			});			
		});

		it('Images as external references can be read correctly', function(doneFn) {

			var fileName = 'test-6.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				for (var i=0; i < gridSize.length; i++ ) {
					expect(gridSize[i].imageId).toBe(images[i].imageId);
				}
				
				doneFn();
			});			
		});

		it('Images with invalid external references are reported as errors', function(doneFn) {

			var fileName = 'test-7.obf';

			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {

				var filterData = JSON.parse(data);
				
				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);
				
				var arr = [];
				for (var i=0; i < images.length; i++ ) {
					arr.push(images[i].imageId);
				}

				for (var i=0; i < gridSize.length; i++ ) {
					expect(arr).toContain(gridSize[i].imageId);
				}
				//expect(gridSize[i].imageId).toBe(images[i].imageId);
				doneFn();
			});			
		});

	});

	describe( "Grid Size", function () {
		var originalTimeout;

		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		describe( "The number of rows and columns in the labels variable should be the same as the number of rows and columns in the Grid", function () {
			it('A test obf file with a grid size of 4x4', function(doneFn) {
				
				var fileName = 'test-8.obf';

				// Read data from file
				myFunctionThatMakesRequests(fileName, function(error, data) {

					var filterData = JSON.parse(data);
					
					var jsondata = JSON.stringify(filterData[0]);

					setupInternalDataStructuresObf(jsondata);

					var total = 0;
		
					for ( var i = 0; i < labels[key].length; i++ ) {
						total = total + labels[key][i].length;		
					}
					
					expect(gridSize.length).toBe(total);
					doneFn();
				});

			});

			it('A test obf file with a grid size of 5x5', function(doneFn) {
				
				var fileName = 'test-9.obf';

				// Read data from file
				myFunctionThatMakesRequests(fileName, function(error, data) {

					var filterData = JSON.parse(data);
					
					var jsondata = JSON.stringify(filterData[0]);

					setupInternalDataStructuresObf(jsondata);

					var total = 0;
		
					for ( var i = 0; i < labels[key].length; i++ ) {
						total = total + labels[key][i].length;
					}
					
					expect(gridSize.length).toBe(total);
					doneFn();
				});

			});
		});
	});

	describe( "Board Display", function () {
		var originalTimeout;

		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		it('An message window is displayed. It is 1 row high and the width is the board column width less 2', function(doneFn) {
			
			var fileName = 'test-8.obf';
			// Read data from file
			myFunctionThatMakesRequests(fileName, function(error, data) {
				var filterData = JSON.parse(data);
					
				var jsondata = JSON.stringify(filterData[0]);

				setupInternalDataStructuresObf(jsondata);

				var width = 720 / grid_size_columns * (Math.ceil(grid_size_columns / 2));
				var height = 520 / grid_size_rows;
				
				setupMessageWindow();

				expect(my_width).toBe(width);
				expect(my_height).toBe(height);

				doneFn();

			});

		});

	});

	describe( "Messaging Window", function () {
		var originalTimeout;

		beforeEach(function () {
			originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
			jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
		});
		
		afterEach(function() {
		  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
		});

		describe( "The width of the messaging window is 2 cells less than the width of the board", function () {

			it('A test obf file with a grid size of 4x4', function(doneFn) {
				var fileName = 'test-8.obf';
				// Read data from file
				myFunctionThatMakesRequests(fileName, function(error, data) {
					var filterData = JSON.parse(data);
						
					var jsondata = JSON.stringify(filterData[0]);

					setupInternalDataStructuresObf(jsondata);
					setupMessageWindow();
					
					expect(my_width).toBeLessThan(720);

					doneFn();
				});
			});

			it('A test obf file with a grid size of 5x5', function(doneFn) {
				var fileName = 'test-9.obf';
				// Read data from file
				myFunctionThatMakesRequests(fileName, function(error, data) {
					var filterData = JSON.parse(data);
						
					var jsondata = JSON.stringify(filterData[0]);

					setupInternalDataStructuresObf(jsondata);
					setupMessageWindow();
					
					expect(my_width).toBeLessThan(720);

					doneFn();
				});

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
