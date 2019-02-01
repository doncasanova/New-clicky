var image = [ "./images/dixie.jpg", "./images/dixie on a bird.jpg", "./images/food turkey 068.JPG", "./images/skiing.jpg", "./images/SnarlingWolf.jpg"];
addImage();
var imageNumber = 0;
var imageModal = 0 ;
function addImage() {
    for (i = 0; i < image.length; i++) {
        
        $(".insertImagesHere").append(`<div id="target" class=" col-3 imageContainer"><a href="#" class="" data-toggle="modal" data-target="#largeModal"><img class="imageStyle imageHover pointer"src= "${image[i]}" alt="${image[i]}"></a></div>`);
        var imageNumber = i;
       
}

}

const newLocal = ".imageStyle";

$(newLocal).on("click", function () {
    $(".insertImagesModal").empty();
    $("#myModalLabel").empty();
    
    var imageModal = $(this).attr('src');
    var imageModalName = imageModal.substr(9).slice(0, -4);
    $(".insertImagesModal").append(`<img class="modalImageStyle"src= "${imageModal}" alt="${imageModal}">`);
    $("#myModalLabel").append(`<h4 id="myModalLabel" class="modal-title" >${imageModalName}</h4>`);
});


$("#target").mouseup(function () {
    alert("Handler for .mouseup() called.");
});

$("#other").click(function () {
    $("#target").mouseup();
});

$("p")
    .mouseup(function () {
        $(this).append("<span style='color:#f00;'>Mouse up.</span>");
    })
    .mousedown(function () {
        $(this).append("<span style='color:#00f;'>Mouse down.</span>");
    });

