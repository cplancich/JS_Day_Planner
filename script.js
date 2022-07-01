// DECLARE Current time
var currentTime = moment();
// DECLARE Current Hour
var currentHour = moment().format('HH');
// DECLARE Current Day HTML Element

// DECLARE Time Entries Container HTML Element

// Render a block for each hour of the day
for(var i=9; i<=17; i++) {
    
    var key = "hour-"+i;
    // Attempt to get the saved data for the hour of the loop
    var data = "asdf";

    // Compare i to current hour to determine if this hour is in the past, present, or future

    var template =`
        <div class="row">
            <div>
                ${i}AM
            </div>
            <div id="time-entry">
                <textarea>${data}</textarea>
            </div>
            <div>
                <button data-hour="${i}"Save</button>
            </div>
        </div>
    `;

    // Append the html to the page

}

// Set up a click event listener on the container
timeEntryEl.on("click", "button", function(event) {

    // Fetch the hour from the clicked button's (event.target) "data-hour" attribute

    // Use the hour to create the key for local storage

    // From the clicked button, traverse the DOM to the nearby <textarea> to fetch its value

    // Use the key and the value to save into localStorage

});


    // Save an hour to local storage
