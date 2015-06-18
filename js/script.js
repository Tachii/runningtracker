$(document).one('pageinit', function() {
	//Display runs
	showRuns();

	//Add Handler for Adding Runs
	$('#submitAdd').on('tap', addRun);

	/*
	 * Show all runs on homepage
	 */
	function showRuns() {
		//get runs Object
		var runs = getRunsObject();
		var i;
		if (runs != '' && runs != null) {
			for(i = 0; i < runs.lengts; i++){
				
			}		
		}
	}

	/*
	 * addRun function
	 */
	function addRun() {
		//Get form values
		var kms = $('#addKms').val();
		var date = $('#addDate').val();

		//Create 'Run' Object
		var run = {
			date : date,
			kms : parseFloat(kms)
		};

		var runs = getRunsObject();

		//Add run to runs array
		runs.push(run);
		alert('Run Added');

		//Set stringified objects to localstorage
		localStorage.setItem('runs', JSON.stringify(runs));

		//Redirect
		window.location.href = "index.php";

		//Preventing form from submiting
		return false;
	}

	/*
	 * getRunsObject
	 */
	function getRunsObject() {
		//Set runs array
		var runs = [];
		//Get current runs from localStorage
		var currentRuns = localStorage.getItem('runs');

		//Check localStorage
		if (currentRuns != null) {
			//Set to runs
			var runs = JSON.parse(currentRuns);
		}

		//Return sorted runs object
		return runs.sort(function(a, b) {
			return new Date(b.date) - new Date(a.date);
		});

	}

});