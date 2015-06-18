$(document).on("pagecreate", "#home", function() {

	//Display runs
	showRuns();

	//Add Handler
	$('#submitAdd').on('tap', addRun);

	//Edit Handler
	$('#submitEdit').on('tap', editRun);

	//setCurrent handler
	$('#editLink').on('tap', setCurrent);

	/*
	 * Show all runs on homepage
	 */
	function showRuns() {
		//get runs Object
		var runs = getRunsObject();
		var i = 0;

		if (runs != '' && runs != null) {

			for (i; i < runs.length; i++) {
				$('#stats').append('<li class="original ui-body-inherit ui-li-static"><strong>Date: </strong>' + runs[i]["date"] + '<strong> <br/>Distnace: </strong>' + runs[i]["kms"] + 'km<div class="controls">' + '<a href="#edit" id="editLink" data-kms="' + runs[i]["kms"] + '" data-date="' + runs[i]["date"] + '">Edit</a> | ' + '<a href="#delete">Delete</a>' + '</div></li>');
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
		$("body").pagecontainer("change", "#home", {
			transition : "fade"
		});

		//Show Runs Again
		$('.original').hide();
		showRuns();

		//Preventing form from submiting
		return false;
	}

	/*
	 * editRun function
	 */
	function editRun() {
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
		$("body").pagecontainer("change", "#home", {
			transition : "fade"
		});

		//Show Runs Again
		$('.original').hide();
		showRuns();

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

	/*
	 * Set current data of clicked element(date and kms)
	 */
	function setCurrent() {
		//Set localStorage items for clicked element
		localStorage.setItem('currentKms', $(this).data('kms'));
		localStorage.setItem('currentDate', $(this).data('date'));

		//Get data
		var kms = localStorage.getItem('currentKms');
		var date = localStorage.getItem('currentDate');

		//Insert data into edit form
		$('#editKms').val(kms);
		$('#editDate').val(date);
	}

});
