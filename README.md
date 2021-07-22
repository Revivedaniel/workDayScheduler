# workDayScheduler
This Work Day Scheduler is designed for normal business hours. 

When you load the page, the current date is displayed near the top of the page. 
Below that are the time blocks labeled by hour. 
In the middle of these time blocks you can enter an event and then press the save 
button on the end of the time block to save it to local storage. 
This allows you to reload the page and the events will persist.

The input field labeled with the current hour will highlight red. 
The input fields with a future time will highlight green.
And the input fields in the past are simply grey.

I used Bootstrap for the desing, jQuery for dom manipulation, and Moment.js for time tracking

## Demo
![workDayScheduler](./assets/vids/workdaySchedulerDemo.gif)
## Live site
https://revivedaniel.github.io/workDayScheduler/