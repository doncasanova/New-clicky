//this page adds the image name to an array so that it can be tracked throught the game
//when the image is clicked we iterate through the array to check to see if its all ready been added
//if it hasent been added we add it and then add a count to the total number clicked
//if it has been added we add a count to the losses and then reset game
var image = ["./images/dixie.jpg", "./images/dixie on a bird.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
var doingWell = ["Your doing great.", "Your on your way to a win.", "Wow keep it going.", "Getting closer.", "You Won...Yeah!","Sorry, lets try again."]
var clicks = 0
let imageArray = [];
let losses = 0
let count = 0
let wins = 0



$(document).on("click", ".imageStyle", function () {

    var imageModal = $(this).attr('src');
    var findImage = $.inArray(imageModal, imageArray)
   
        if (findImage == -1) {
            imageArray.push(imageModal)
            count = imageArray.length
           
            if (count == 5) {
                //clear imageArray and add to wins then clears counts
                imageArray.length = 0
                count = 0
                $("#count").empty();
                $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
                //wins counter
                wins++
                $("#wins").empty();
                $("#wins").append(`<p class "text-light">Clicky Wins: ${wins}</p>`);

            } else {
                $("#count").empty();
                $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
            }
        } else {
            losses++
            $("#loss").empty();
            $("#loss").append(`<p class "text-light">Clicky Losses: ${losses}</p>`);
            imageArray.length = 0
            $("#count").empty();
            const count = 0
            $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
            clicks=5
    }
   
   
});

function winningStrokes() {
    if (clicks == 6) {
        clicks = 0
    }
    console.log(clicks)
    $(".instructions").append(`<h5 class "text-light"> 
    ${doingWell[clicks]}
        </h5>`);
    clicks++
}