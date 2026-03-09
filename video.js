let box1 = document.getElementById("box1");
let video1 = document.getElementById("video1");
let text = document.getElementById("text");

let gift = document.getElementById("gift");
let video3 = document.getElementById("video3");

let music = document.getElementById("bgmusic"); // background music

box1.addEventListener("click", function () {

    text.style.display = "none";

    video1.style.display = "block";
    video1.play();

    music.play(); // start music

    // show gift button after video finishes
    video1.onended = function () {
        gift.style.display = "block";
    };

});

gift.addEventListener("click", function () {

    video1.style.display = "none";

    video3.style.display = "block";
    video3.play();

});
