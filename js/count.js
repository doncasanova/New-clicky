
//click counter
$(document).ready(function () {
    var count = 0;
    var wins = 0;
    $("#wins").empty();
    $("#wins").append(`<p>Wins: ${wins}</p>`);

    $(document).on("click", ".imageStyle", function () {
      
        count++
        if (count == 10) {
            count = 0
            $("#other").empty();
            $("#other").append(`<p>Count: ${count}</p>`);
            //wins counter
            wins ++
            $("#wins").empty();
            $("#wins").append(`<p>Count: ${wins}</p>`);

        } else {
            $("#other").empty();
            $("#other").append(`<p>Count: ${count}</p>`);

        }
            
        
    });

});
//--------------------------------------------------------
