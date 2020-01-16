function display_random_image() 
{
     var theImages = [{
        src: "./assets/Critics.png",
        width: "900",
    }, {
        src: "./assets/Critics2.png",
        width: "900",
    }, {
        src: "./assets/Critics3.png",
        width: "900",
    }, {
        src: "./assets/DDW.jpg",
        width: "500",
    }, {
        src: "./assets/Foam_1.png",
        width: "900",
    }, {
        src: "./assets/Foam_2.png",
        width: "600",
    }, {
        src: "./assets/gra_2.jpg",
        width: "900",
    }, {
        src: "./assets/gra_3.jpg",
        width: "900",
    }, {
        src: "./assets/gra_4.jpg",
        width: "900",
    }, {
        src: "./assets/gra_5.jpg",
        width: "900",
    }, {
        src: "./assets/gra_6.jpg",
        width: "900",
    }, {
        src: "./assets/gra_7.jpg",
        width: "500",
    }, {
        src: "./assets/gra.jpg",
        width: "900",
    }, {
        src: "./assets/Legs_1.jpg",
        width: "900",
    }, {
        src: "./assets/thesis_1.jpg",
        width: "900",
    }, {   src: "./assets/36712454_2149700845044416_8685016011063164928_o.jpg",
        width: "900",
    }, {
        src: "./assets/42587227_1642899059170930_4404616088784994304_n.jpg",
        width: "900",
    },{
        src: "./assets/Clara_pdf_spread.jpg",
        width: "600",
    },{
        src: "./assets/IMG-1330.JPG",
        width: "600",
    },{
        src: "./assets/IMG-1337.JPG",
        width: "600",
    },{
        src: "./assets/IMG-1426.jpeg",
        width: "600",
    },{
        src: "./assets/post4.png",
        width: "900",
    },{
        src: "./assets/SauceMagazine_Issue1.jpg",
        width: "900",
    },{
        src: "./assets/Graphic.jpg",
        width: "900",
    },{
        src: "./assets/Graphic2.jpg",
        width: "900",
    },{
        src: "./assets/Graphic3.jpg",
        width: "900",
    },{
        src: "./assets/Graphic4.jpg",
        width: "900",
    },{
        src: "./assets/Graphic5.jpg",
        width: "900",
    },{
        src: "./assets/sauce.jpg",
        width: "500",
    },{
        src: "./assets/sauce2.jpg",
        width: "500",
    },{
        src: "./assets/sauce3.jpg",
        width: "500",
    }
    ];

    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
    }

    function getRandomInt(min,max) 
    {
    imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  
    var newImage = getRandomInt(0, preBuffer.length - 1);
    var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image  
document.body.appendChild(newImage);

}

