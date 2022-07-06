// Current time
var currentTime = moment();
// Current Hour
var currentHour = moment().format('HH');
// Current Day HTML Element
var currentDayEl = $('#currentDay').text(moment().format('dddd, MMMM do, YYYY'));

// Function for styling time blocks depending on the current time of day
function timeBlockStyling() {
// Selects the text entry area element of each time block (9 array items)
var formInput = $(".description");
// Loops through each time block
for (let i = 0; i < formInput.length; i++) {
    // Variable which selects the data set hours and applies each formInput index number to its corresponding data hour number
    var hourEl = formInput[i].dataset.hour
    // Comparisons to verify past, present, and future time blocks and apply corresponding CSS styling
   if (currentHour === hourEl) {
       formInput[i].classList.add("present");
   } else if (currentHour > hourEl) {
        formInput[i].classList.add("past");
   } else {
        formInput[i].classList.add("future");
   }
}

}
timeBlockStyling();

// Set up a click event listener on the container
// timeEntryEl.on("click", "button", function(event) {

//     // Fetch the hour from the clicked button's (event.target) "data-hour" attribute (data-hour moved to text area from button)

//     // Use the hour to create the key for local storage

//     // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

//     // Use the key and the value to save into localStorage

// });

// localStorage.setItem(KEY, JSON.stringify (user text value))
// var localstoragedatalol = JSON.parse(localStorage.getItem("KEY"))
// on page load, show previous data that was saved
    // Save an hour to local storage
