var UI = require('ui');
// Test Commit

// Create a Card with title and subtitle
var card = new UI.Card({
	title: 'Weather',
	subtitle: 'Fetching...'
});

// Display the Card
card.show();

// Ajax
var ajax = require('ajax');

// Construct URL
var URL = 'https://api.trello.com/1/boards/4d5ea62fd76aa1136000000c';

// Make the request
ajax({
		url: URL,
		type: 'json'
	},
	function(data) {
		// Success!
		console.log('Successfully fetched Trello data!');
		console.dir(data);



	},
	function(error) {
		// Failure!
		console.log('Failed fetching weather data: ' + error);
	}
);
