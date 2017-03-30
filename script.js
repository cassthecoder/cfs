// The user should be able to insert or enter text into a text area
// The user should be able to click a button that reports on statistics about the text
// Total number of words
// Total number of sentences
// Average words per sentence
// Total number of spaces

document.getElementById("jsClick").addEventListener("click", jsResults());

function jsResults(){
	var text;
	var userInput = document.getElementById("myInput").value;
	var wordCount=1;
	var spaceCount=0;
	var sentCount=0;
	var avgWordSent=0;

	for (var i=0; i<userInput.length; i++){
		if (userInput.charAt(i) === " ")
			spaceCount++;
			wordCount++;
		else if (userInput.charAt(i) === "." || "?" || "!")
			sentCount++;
	}

	avgWordSent = wordCount/sentCount;

	text = "There are " + wordCount + " words, " + spaceCount + " spaces,and " + sentCount + " sentences. Giving us an average of " + avgWordSent + " words per sentence.";
}

document.getElementById("content").innerHTML = text;

