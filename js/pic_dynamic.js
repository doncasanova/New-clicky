var image = ["./images/dixie.jpg", "./images/dixie on a bird.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];


addInstructions()
addImage();
function addImage() {
    image.sort(function (a, b) { return 0.5 - Math.random() });
    for (i = 0; i < image.length; i++) {
     
        $(".insertImagesHere").append(`<div id="target" class=" col-2 imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="${image[i]}" height="300" ></a></div>`);
        var imageNumber = i;
       
}

}

$(document).on("click", ".imageStyle", function (image) {
    $(".instructions").empty();
    winningStrokes()
    $(".insertImagesHere").empty();
    addImage();
});


function addInstructions() {
    console.log("inside instruction load")
    $(".instructions").append(`<h5>
    The object of this game is to click every image without clicking on it twice. If you click it twice the game will reset and a loss will be added to your count. If you click them all once you win and a win will be added to your count. Hope you enjoy testing your memory.
        </h5>`);
}

