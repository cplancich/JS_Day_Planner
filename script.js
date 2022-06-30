// console.log('hello from file');

// DECLARE Current time

// DECLARE Current Day HTML Element

// DECLARE Time Entries Container HTML Element

// Render a block for each hour of the day
for(var i=9; i<=17; i++) {

    // Attempt to get the saved data for the hour of the loop
    var data = "asdf";

    var template =`
        <div class="row">
            <div>
                ${i}AM
            </div>
            <div>
                <textarea>${data}</textarea>
            </div>
            <div>
                <button data-hour="${i}"Save</button>
            </div>
        </div>
    `;

    // Append the html to the page

}


// Save an hour to local storage
