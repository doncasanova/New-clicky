//this page adds the image name to an array so that it can be tracked throught the game
//when the image is clicked we iterate through the array to check to see if its all ready been added
//if it hasent been added we add it and then add a count to the total number clicked
//if it has been added we add a count to the losses and then reset game
var image = ["./images/dixie.jpg", "./images/dixie on a bird.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
var doingWell = ["Your doing great.", "Your on your way to a win.", "Wow keep it going.", "Getting closer.", "You Won...Yeah!","Sorry, lets try again."]
var clicks = -1
let imageArray = [];
let losses = 0
let count = 0
let wins = 0


$(document).on("click", ".imageStyle", function () {
    $(".instructions").empty();
    winningStrokes()
    var imageModal = $(this).attr('src');
    var findImage = $.inArray(imageModal, imageArray)
   
        if (findImage == -1) {
            imageArray.push(imageModal)
            count = imageArray.length
           
            if (count == 5) {
                //clear imageArray and add to wins then clears counts
                imageArray.length = 0
                count = imageArray.length
                
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
            var count = 0
            $("#count").append(`<p class "text-light">Clicky Count: ${count}</p>`);
           
           
    }
   
   
});

function winningStrokes() {
    
    
    $(".instructions").append(`<h5 class "text-light"> 
    ${doingWell[clicks]}
        </h5>`);
    if (clicks === 5) {
        console.log("in the if statment")
        clicks = -1
    }
   
    clicks++
    console.log(clicks)
}