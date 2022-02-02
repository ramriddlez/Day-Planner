//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
let now = moment();


//this will be the time block using JQuery
$('#currentDay').text(today);


for (i = 0; i< 9; i++) {
   
    let i = ['9AM', '10AM','11AM','12PM','1PM','2PM','3PM','4PM'];
    
    if (now === moment(i)) {
        $('col-8').addClass('present') 
    } else if 
        (now > moment(i)) {
        $('col-8').addClass('past') 

    } else 
        (now < moment(i))
        $('col-8').addClass('future') 
}

console.log ('ok');