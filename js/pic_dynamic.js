var image = ["./images/dixie.jpg", "./images/dixie on a bird.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];


image.sort(function (a, b) { return 0.5 - Math.random() });

addImage();
function addImage() {
    for (i = 0; i < image.length; i++) {
     
        $(".insertImagesHere").append(`<div id="target" class=" col-3 imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="${image[i]}" height="300" ></a></div>`);
        var imageNumber = i;
       
}

}

$(document).on("click", ".imageStyle", function (image) {
    console.log("in function")
   

});