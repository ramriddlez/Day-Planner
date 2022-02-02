
//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
let now = moment().format('k');
//this will be the time block using JQuery
$('#currentDay').text(today);

// get variable for the div

var userClicked = $(this).parent().attr('id');

for (let i = 9; i< 18; i++) {
    let array = ['9','10','11','12','13','14','15','16','17',];
   
  // console.log(i);
//get the actual value from now(hour)
//get the element by their ids and get the hour value from the div
 //let id = document.querySelector()
     
    //now =3
    //id=9
    //now===id
  
    if (now === i) {
         userClicked.addClass('present');
      } else if 
         (now > i) {
         userClicked.addClass('past');
      } else 
         (now < i) 
         userClicked.addClass('future');
};