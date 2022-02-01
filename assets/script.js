//use moment.js to format the following variables:
let today = moment().format("dddd, MMMM Do YYYY,");

//this will be the time block using JQuery
$('#currentDay').text(today);

//set datta attributre


// For loop to multiply rows for the 9 business hours 9-5pm


 var myTimes = ["9AM","10AM","11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    var myTimesLength = myTimes.length;
    for (i = 0; i < myTimesLength; i++) {
    // create the rows within which we will create the time blocks
    var newRow = $('<div>').addClass ('row hour').text(myTimes[i]);
    // color coordinate the times

     

    if 
    
    
    
    


    //append the rows within the container
    $('.container').append(newRow);

















    // create the timeblocks that contain the content
   // var timeBlock = $('<div>').addClass('time-block textarea')

   // var textArea = $('#myInput').addClass('textarea').html('');
   // var writingBlock = timeBlock.append(textArea);

  
   // $(newRow).append(writingBlock);

    //console.log("hsdfg");


    //var txt = $("#txtArea").val();
    

    // do an if statement for the past, present future classes

}


//$( "input[type=checkbox][name=bar]:checked" ).val();







// For loop to print rows with timeblocks, taskblocks, and save buttons
//for (i = 0; i < 9; i++) {
    //create a variable for the row
    //var rowBlock = $('<div>').addClass('row');
    //create a variable for the time block
   // var timeBlock = $('<div>').addClass('hour col-md-2').text(moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));
    //timeBlock.attr('data-time', moment('9:00 AM', 'hh:mm A').add(i, 'hours').format('hA'));

    //create a variable for the taskblock
   // var taskBlock = $('<textarea>').addClass('col-md-9');
    //create a variable for the save block
   // var saveButton = $('<button>').addClass('saveBtn col-md-1').html('<i class="fas fa-save"></i>');

    // Placing content created above into the DOM in the right order.
    //append the container with the row
   // $('.container').append(rowBlock);
    //append the row with the time block
   // $(rowBlock).append(timeBlock);
    //after the timeblock display the task block
//$(timeBlock).after(taskBlock);
   // //after the taskblock display the save button
  //  $(taskBlock).after(saveButton);
//}