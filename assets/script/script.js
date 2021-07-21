var today = moment();

//display the current date in this format (thursday, september 5th) to header
var currentDayEl = $("#currentDay")
currentDayEl.text(today.format("dddd, MMMM Do"))

//ul for the saveButtons
var scheduleListEl = $("ul")

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