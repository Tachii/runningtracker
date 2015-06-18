<!DOCTYPE html>
<html>
	<head>
		<title>Running Tracker</title>
		<link rel="stylesheet" href="css/style.css" />

		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
		<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquerymobile/1.4.5/jquery.mobile.min.js"></script>
		<script src="js/script.js"></script>
	</head>
	<body>
		<!-- Main Page -->
		<div data-role="page" id="home">
			<header data-role="header" data-theme="a">
				<h1>Running Tracker</h1>
			</header>
			<div data-role="navbar">
				<ul>
					<li>
						<a href="#home" data-transition="none" data-icon="home">Home</a>
					</li>

					<li>
						<a href="#add" data-transition="none" data-icon="plus">Add Run</a>
					</li>
				</ul>
			</div>
			<div data-role="content">
				<h3>Welcome to the RunningTracker App</h3>
				<p>
					With this app you can track your running, jogging or walking.
				</p>

				<h3>Your Latest Runs:</h3>

				<ul id="stats" data-role="listview" data-filter="true" data-filter-placeholder="Filter runs by date or distance." data-inset="true" ></ul>
				<br/>
				<button id="clearRuns" onclick="return confirm('Are You Sure?')">
					Clear Data
				</button>
			</div>
			<footer data-role="footer">
				<h4>RunningTracker &copy; 2015 GZ</h4>
			</footer>
		</div>
		<!-- Add Run Page -->
		<div data-role="page" id="add">
			<header data-role="header" data-theme="a">
				<h1>Running Tracker</h1>
			</header>
			<div data-role="navbar">
				<ul>
					<li>
						<a href="#home" data-transition="none" data-icon="home">Home</a>
					</li>

					<li>
						<a href="#add" data-transition="none" data-icon="plus">Add Run</a>
					</li>
				</ul>
			</div>
			<div data-role="content">
				<h3>Add Run</h3>
				<form id="addForm">
					<label for="km">Enter Kilometres:</label>
					<input type="number" id="addKms" >
					<label for="km">Enter Date:</label>
					<input type="date" data-role="date" class="date" id="addDate" data-inline="true" >
					<button id="submitAdd" class="ui-btn ui-corner-all">
						Add Run
					</button>
				</form>
			</div>
			<footer data-role="footer">
				<h4>RunningTracker &copy; 2015 GZ</h4>
			</footer>
		</div>
	</body>
</html>