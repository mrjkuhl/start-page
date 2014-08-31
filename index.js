window.onload = loadTimeFunction;

var defaultInput = "url";
var defaultProtocol = "http://";
var objectiveTextAreaSize = 250;
var textAreaOffset = objectiveTextAreaSize / 2;

var textAreaInterval = new Array();

function loadTimeFunction() {

	intervalBarIncrease("url");
	intervalBarIncrease("query");

	var selectedInput = document.getElementById(defaultInput);

	selectedInput.focus();
	selectedInput.select();
}

function intervalBarIncrease(selectedTextArea) {

	objectiveTextArea = document.getElementById(selectedTextArea);

	textAreaRect = objectiveTextArea.getBoundingClientRect();

	textAreaInterval[selectedTextArea] = window.setInterval(function() { barIncrease(selectedTextArea, objectiveTextArea, textAreaRect) }, 5);
}

function barIncrease(selectedTextArea, objectiveTextArea, textAreaRect) {

	var elementWidth = parseInt(objectiveTextArea.style.width);

	elementWidth = elementWidth + 1;

	objectiveTextArea.style.width = elementWidth + "px";

	objectiveTextArea.style.left = textAreaRect.left + (textAreaOffset - (elementWidth / 2)) + "px";

	if (parseInt(objectiveTextArea.style.width) >= objectiveTextAreaSize) {

		window.clearInterval(textAreaInterval[selectedTextArea]);
	}
}

function submitURL() {

	var protocolPattern = /http[s]*:/i
	var destinationURL = document.getElementById("url").value;

	if (document.getElementById("url").value.match(protocolPattern)) {

		window.location.assign(destinationURL);
	}

	else {

		window.location.assign(defaultProtocol + destinationURL);
	}
}
