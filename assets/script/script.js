var today = moment();
//input elements for each timeblock
var am9InputEl = $("#9am").find("input");
//10am
var am10InputEl = $("#10am").find("input");
//11am
var am11InputEl = $("#11am").find("input");
//12pm
var pm12InputEl = $("#12pm").find("input");
//1pm
var pm1InputEl = $("#1pm").find("input");
//2pm
var pm2InputEl = $("#2pm").find("input");
//3pm
var pm3InputEl = $("#3pm").find("input");
//4pm
var pm4InputEl = $("#4pm").find("input");
//5pm
var pm5InputEl = $("#5pm").find("input");

//display the current date in this format (thursday, september 5th) to header
var currentDayEl = $("#currentDay")
currentDayEl.text(today.format("dddd, MMMM Do"))

//ul for the saveButtons
var scheduleListEl = $("ul")
//input fields
var inputsEl = $("input")

//function to update values of input fields
function updateValues() {
    //read from loacal storage
    var savedInputs = JSON.parse(localStorage.getItem("savedInputs"));
    //write items to the value for each input
    for (let i = 0; i < inputsEl.length; i++) {
        const element = inputsEl[i];
        element.value = savedInputs[i];
    }

}
//on start

updateValues();

scheduleListEl.on("click", ".saveButton", function(){
    //creating an empty array
    var newInputs = [];
    //itterating thru all inputs to gather their values
    for (let i = 0; i < inputsEl.length; i++) {
        const element = inputsEl[i];
        newInputs.push(element.value)
        //updating local storage
        localStorage.setItem("savedInputs", JSON.stringify(newInputs))
    }

})
  
//time validation for 9AM
if (today.hour() === 9) {
    am9InputEl.css("background-color", "red")
} else if (today.hour() < 9) {
    am9InputEl.css("background-color", "green")
}

//time validation for 10AM
if (today.hour() === 10) {
    am10InputEl.css("background-color", "red")
} else if (today.hour() < 10) {
    am10InputEl.css("background-color", "green")
}

//time validation for 11AM
if (today.hour() === 11) {
    am11InputEl.css("background-color", "red")
} else if (today.hour() < 11) {
    am11InputEl.css("background-color", "green")
}

//time validation for 12PM
if (today.hour() === 12) {
    pm12InputEl.css("background-color", "red")
} else if (today.hour() < 12) {
    pm12InputEl.css("background-color", "green")
}

//time validation for 1PM
if (today.hour() === 13) {
    pm1InputEl.css("background-color", "red")
} else if (today.hour() < 13) {
    pm1InputEl.css("background-color", "green")
}

//time validation for 2PM
if (today.hour() === 14) {
    pm2InputEl.css("background-color", "red")
} else if (today.hour() < 14) {
    pm2InputEl.css("background-color", "green")
}

//time validation for 3PM
if (today.hour() === 15) {
    pm3InputEl.css("background-color", "red")
} else if (today.hour() < 15) {
    pm3InputEl.css("background-color", "green")
} 

//time validation for 4PM
if (today.hour() === 16) {
    pm4InputEl.css("background-color", "red")
} else if (today.hour() < 16) {
    pm4InputEl.css("background-color", "green")
}

//time validation for 5PM
if (today.hour() === 17) {
    pm5InputEl.css("background-color", "red")
} else if (today.hour() < 17) {
    pm5InputEl.css("background-color", "green")
}
    
