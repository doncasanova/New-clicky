$("#target").click(function () {

    
});


$("#target")
    .data('counter', 0) // begin counter at zero
    .click(function () {
        var counter = $(this).data('counter'); // get
        $(this).data('counter', counter + 1); // set
        // do something else...
        console.log(counter)
        addClick(counter)
    });

function addClick(counter) {
    $("#other").empty();
    $("#other").append(`<p>Count: ${ counter}</p>`);
       
}