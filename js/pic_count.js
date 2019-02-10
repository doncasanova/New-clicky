
var doingWell = ["Your doing great.", "Your on your way to a BIG win.", "Wow keep it going.", "Getting closer.", "Nice job.", "So far so good.", "Holy cow you have a good memory.", "Be careful your almost there.", "Are you sure you want to click that one?", "You Won...Yeah!","Sorry, lets try again."]
var clicks = 0;
let imageArray = [];
let losses = 0;
let count = 0;
let wins = 0;


$(document).on("click", ".imageStyle", function () {
    $(".instructions").empty();
   
    var imageModal = $(this).attr('src');
    var findImage = $.inArray(imageModal, imageArray);
   
        if (findImage === -1) {
            imageArray.push(imageModal);
            count = imageArray.length;
           
            if (count === 10) {
                //clear imageArray and add to wins then clears counts
                imageArray.length = 0;
                count = imageArray.length;
                
                $("#count").empty();
                $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
                //wins counter
                wins++;
                $("#wins").empty();
                $("#wins").append(`<p class "text-light">Clicky Wins: ${wins}</p>`);
               

            } else {
                $("#count").empty();
                $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
            }
        } else {
            losses++;
            clicks = 10;
            $("#loss").empty();
            $("#loss").append(`<p class "text-light">Clicky Losses: ${losses}</p>`);
            imageArray.length = 0;
            $("#count").empty();
            var count = 0;
            $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
           
           
    }
    winningStrokes();
   
});

function winningStrokes() {
    
    
    $(".instructions").append(`<h5 class "text-light"> 
    ${doingWell[clicks]}
        </h5>`);
    if (clicks === 10) {
        console.log("in the if statment");
        clicks = -1;
    } else if (clicks === 9) {
        clicks = -1;
    }
   
    clicks++;
    console.log(clicks);
}