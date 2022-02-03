
//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY");
let timeNow = moment().format('k');
//this will be the time block using JQuery
$('#currentDay').text(today);


  
    // loop over time blocks
    $('.col-8').each(function () {
        
        var blockTime = parseInt($(this).parent().attr("id"));
        

        // To check the time and add the classes for background indicators
        if (blockTime < timeNow) {

            $(this).addClass('past');
        }
        else if (blockTime == timeNow) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");

        }
    })

//local storage oon click savebtn function
    
$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, text);
})
//retrieve local storage
//
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

   


