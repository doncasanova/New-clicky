var image = ["BalloonFestLasers2.jpg", "BalloonFestLasers3.jpg", "CATlasers.JPG", "clublasers1.jpg", "clublasers2.jpg", "EDCvegasLasers.jpg", "EDMlasers1.jpg", "EDMlasers2.jpg", "EDMlasers3.jpg", "SpaceNeedleLasers.jpg"];
var path = "./images/";

addInstructions();
addImage();
function addImage() {
    image.sort(function (a, b) { return 0.5 - Math.random() });
    for (i = 0; i < image.length; i++) {
     
        $(".insertImagesHere").append(`<div id="target" class=" imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${path}${image[i]}" alt="${path}${image[i]}" height="300" ></a></div>`);
        var imageNumber = i;
       
}

}

$(document).on("click", ".imageStyle", function (image) {
   
    $(".insertImagesHere").empty();
    addImage();
});


function addInstructions() {
    console.log("inside instruction load")
    $(".instructions").append(`<h2>
    The object of this game is to click every image without clicking on it twice. If you click it twice the game will reset and a loss will be added to your count. If you click them all once you win and a win will be added to your count. Hope you enjoy testing your memory.
        </h>`);
}

