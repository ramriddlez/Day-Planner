//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
let now = moment().hour(Number);


//this will be the time block using JQuery
$('#currentDay').text(today);
console.log(now)

for (let i = 9; i< 17; i++) {
   
    let array = ['9','10','11','12','13','14','15','16','17'];
    
//get the actual value from now(hour)
//get the element by their ids and get the hour value from the div

//let id=docuemnt.querySelector(`#${i}`).id
//<div>

//now =3
//id=9
//now===id
  
    // if (now === moment('9:00 AM', 'hh:mm A').add(i, 'hours')) {
    //     $('col-8').addClass('present') 
    // } else if 
    //     (now > moment('9:00 AM', 'hh:mm A').add(i, 'hours')) {
    //     $('col-8').addClass('past') 

    // } else 
    //     (now < moment('9:00 AM', 'hh:mm A').add(i, 'hours'))
    //     $('col-8').addClass('future') 
}

