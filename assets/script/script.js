var today = moment();

//display the current date in this format (thursday, september 5th) to header
var currentDayEl = $("#currentDay")
currentDayEl.text(today.format("dddd, MMMM Do"))