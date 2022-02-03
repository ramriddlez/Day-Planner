
//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
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
        else if (blockTime === timeNow) {

            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");

        }
    })

    