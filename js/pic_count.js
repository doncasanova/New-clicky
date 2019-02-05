//this page adds the image name to an array so that it can be tracked throught the game
//when the image is clicked we iterate through the array to check to see if its all ready been added
//if it hasent been added we add it and then add a count to the total number clicked
//if it has been added we add a count to the losses and then reset game

console.log("hello your in the image count js");
let imageArray = [];
let newArray = [];
let losses = 0

$(document).on("click", ".imageStyle", function () {

    var imageModal = $(this).attr('src');
    var findImage = $.inArray(imageModal, imageArray)

        if (findImage == -1) {
            imageArray.push(imageModal)

            $(".test").append(`<p> ${imageArray[1]} </p>`);
            console.log("length " + imageArray.length)
        } else {
          
            console.log("image found")
            losses++
            $("#loss").empty();
            $("#loss").append(`<p>Losses: ${losses}</p>`);
        }

   
   
});
