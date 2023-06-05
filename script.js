
let colorDisplay = document.querySelector(".color-div");
let photoDisplay = document.querySelector(".photo-div");

// =====================================Color Change section start ============================================

setInterval(function () {
    let color = ['A', 'B', 'C', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * color.length);
        let randomIndex = color[randomNum];
        randomColor = randomColor + randomIndex;
    }


    colorDisplay.style.backgroundColor = randomColor

}, 5000);



// =====================================Photo Change section start ============================================

setInterval(() => {
    let photos = ['1.jpg', '2.webp', '3.webp', '4.webp', '5.webp', '6.webp', '7.webp'];
    let randomNum2 = Math.floor(Math.random() * photos.length);
    let randomPhoto = photos[randomNum2];


    photoDisplay.style.backgroundImage = `url(img/${randomPhoto})`;

}, 3000);







