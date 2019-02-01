
var counter = 0



//$("#target")
//    .data('counter', 0) // begin counter at zero
//    .click(function () {
//        var counter = $(this).data('counter'); // get
//        $(this).data('counter', counter + 1); // set
//        // do something else...
//        console.log(counter)
//        addClick(counter)
//    });

function addClick(counter) {
    $("#other").empty();
    $("#other").append(`<p>Count: ${ counter}</p>`);
       
}

$(document).on("click", "#target", function (counter) {
 
    var counter = counter + 1
    
    console.log(counter)
    addClick(counter)
});