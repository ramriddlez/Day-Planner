//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");
let now = moment();

//this will be the time block using JQuery
$('#currentDay').text(today);

for (i = 0; i < 9; i++) {
    //create a variable for the row
    var rowBlock = $('<div>').addClass('row');
    //create a variable for the time block
    var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i,'hours').format('hA'));

    //create a variable for the taskblock
    var taskBlock = $('<textarea>').addClass('col-md-9');
    //create a variable for the save block
    var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    // Placing content created above into the DOM in the right order.
    //append the container with the row
    $('.container').append(rowBlock);
    //append the row with the time block
    $(rowBlock).append(timeBlock).append(taskBlock).append(saveButton);


if (now.isSame(moment('9:00 AM', 'hh:mm A').add(i, 'hours'))) {
    $(taskBlock).addClass('present');
    //if the time is in the future, display green
    } else if (now.isBefore(moment('9:00 AM', 'hh:mm A').add(i, 'hours'))) {
    $(taskBlock).addClass('future');
    //if the time is in the past, display grey
    } else if (now.isAfter(moment('9:00 AM', 'hh:mm A').add(i, 'hours'))) {
    $(taskBlock).addClass('past');
    }
}


