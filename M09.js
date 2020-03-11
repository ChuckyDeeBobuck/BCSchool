// Create the HTML for the message
//Question 1: When was the element with the id='close' created?
//Answer 1: It was created when the user clicks the close X button, which then triggers the events in //var msg.

//Question 2: Explain what is the third argument false doing in the following code in Javascript: (Tip: Look at your book on page 260). What happens if you change it to true?
//Answer 2: By setting it to false, the event handler is executed in the bubbling phase, flowing //outwards to the least specific one.  If set to true, the event handler is executed in the capturing //phase, flowing inwards to the most specific one.
  
var msg = '<div class=\"header\"><a id=\"close\" href="#">close X</a></div>';
msg += '<div><h2>System Maintenance</h2>';
msg += 'Hey listen up! Our servers are being updated between 3 and 4 a.m. ';
msg += 'During this time, there may be minor disruptions to service.</div>';

var elNote = document.createElement('div');       // Create a new element
elNote.setAttribute('id', 'note');                // Add an id of note
elNote.innerHTML = msg;                           // Add the message
document.body.appendChild(elNote);

function dismissNote() {                          // Declare function
document.body.removeChild(elNote);              // Remove the note
}                // Add it to the page

//function closeDivHandler() {
	//alert("Handling click event on closeDiv");
	
//function noteDivHandler() {
	//alert("Handling click event on note div");


var elClose = document.getElementById('close');   // Get the close button
//elClose.addEventListener('click', dismissNote, false);// Click close-clear note
elClose.addEventListener('click', dismissNote, true);// Click close-clear note

//var elCloseDiv = document.getElementById('closeDiv');   
//elCloseDiv.addEventListener('click', closeDivHandler, false);
//elCloseDiv.addEventListener('click', closeDivHandler, true);

//var elNoteDiv = document.getElementById('note');
//elNoteDiv.addEventListener('click',noteDivHandler, false);
//elNoteDiv.addEventListener('click',noteDivHandler, true);
	
