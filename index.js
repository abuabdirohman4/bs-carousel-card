// let carouselWidth = $(".carousel-inner")[0].scrollWidth;
// let cardWidth = $(".carousel-item").width();
let carouselWidth = document.querySelector('.carousel-inner').scrollWidth
let cardWidth = document.querySelector(".carousel-item").offsetWidth
console.log(Math.floor(carouselWidth/cardWidth))

let scrollPosition = 0;
let i = 1
document.querySelector(".carousel-control-next").addEventListener('click', () => {
    console.log(i++);
    console.log("scrollPosition ", scrollPosition);
    console.log("carouselWidth" , carouselWidth)
    console.log("cardWidth = " , cardWidth);
    console.log('');
    // console.log("cardWidth = " , cardWidth);
    // console.log(`carouselWidth - cardWidth = ${carouselWidth - cardWidth}`)
    // console.log(`${scrollPosition} < ${carouselWidth - (cardWidth)} `, scrollPosition < (carouselWidth - (cardWidth)))
    // console.log('')
    console.log(`cardWidth ${cardWidth} * 4 = `, cardWidth * 4);
    console.log(`carouselWidth - (cardWidth * 4) = ${carouselWidth - (cardWidth * 4)}`)
    console.log(`${scrollPosition} < ${carouselWidth - (cardWidth * 4)}`, scrollPosition < (carouselWidth - (cardWidth * 4)))
    if (scrollPosition < (carouselWidth - (cardWidth * 4))) {
        console.log("scrollPosition :", scrollPosition);
        scrollPosition += cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    } else {
        console.log('hallo');
        scrollPosition = 0
        console.log("scrollPosition :", scrollPosition);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
})

// $(".carousel-control-next").on("click", function () {
//     console.log("scrollPosition ", scrollPosition);
//     console.log("carouselWidth" , carouselWidth)
//     console.log("cardWidth" , cardWidth);
//     console.log("hasil if ", scrollPosition < (carouselWidth - (cardWidth)))

//     if (scrollPosition < (carouselWidth - (cardWidth))) {
//         console.log("scrollPosition :", scrollPosition);
//         scrollPosition += cardWidth;
//         $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
//     }
// });
let j = 1
$(".carousel-control-prev").on("click", function () {
    console.log(j++);
    console.log("scrollPosition ", scrollPosition);
    console.log("carouselWidth" , carouselWidth)
    console.log("cardWidth = " , cardWidth);
    console.log('');
    // console.log("cardWidth = " , cardWidth);
    // console.log(`carouselWidth - cardWidth = ${carouselWidth - cardWidth}`)
    // console.log(`${scrollPosition} < ${carouselWidth - (cardWidth)} `, scrollPosition < (carouselWidth - (cardWidth)))
    // console.log('')
    // console.log(`cardWidth ${cardWidth} * 4 = `, cardWidth * 4);
    // console.log(`carouselWidth - (cardWidth * 4) = ${carouselWidth - (cardWidth * 4)}`)
    // console.log(`${scrollPosition} > ${carouselWidth - (cardWidth * 4)}`, scrollPosition < (carouselWidth - (cardWidth * 4)))


    if (scrollPosition > 0) {
        console.log("scrollPosition :", scrollPosition);
        scrollPosition -= cardWidth;
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    } else {
        console.log('hallo');
        // scrollPosition = cardWidth * 5
        scrollPosition = cardWidth * (Math.floor(carouselWidth/cardWidth) - 3)
        // console.log("scrollPosition :", scrollPosition);
        $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
    }
    // 10 card = 7
    // 9 card = 6
    // 8 card = 5
    // 7 card = 4
    // 6 card = 3
    // 5 card = 2
    // 4 card = 1
    // 3 card = 0
    // Jumlah Card - 3
});
