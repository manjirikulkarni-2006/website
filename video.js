let box1 = document.getElementById("box1");
let video1 = document.getElementById("video1");
let text = document.getElementById("text");

let gift = document.getElementById("gift");
let video3 = document.getElementById("video3");

let music = document.getElementById("bgmusic");

box1.addEventListener("click", function () {

    text.style.display = "none";

    video1.style.display = "block";
    video1.play();

    music.play();

});

/* Show gift button when first video ends */

video1.addEventListener("ended", function () {

    gift.style.display = "block";

});

/* Gift button click */

gift.addEventListener("click", function () {

    video1.style.display = "none";

    video3.style.display = "block";
    video3.play();

});
