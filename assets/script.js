//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
let now = moment();


//this will be the time block using JQuery
$('#currentDay').text(today);


for (i = 0; i< 9; i++) {
   
    let i = ['9AM', '10AM','11AM','12PM','1PM','2PM','3PM','4PM'];
    
    if (now === moment('9:00 AM', 'hh:mm A').add(i, 'hours')) {
        $('col-8').addClass('present') 
    } else if 
        (now > moment('9:00 AM', 'hh:mm A').add(i, 'hours')) {
        $('col-8').addClass('past') 

    } else 
        (now < moment('9:00 AM', 'hh:mm A').add(i, 'hours'))
        $('col-8').addClass('future') 
}

console.log ('ok');