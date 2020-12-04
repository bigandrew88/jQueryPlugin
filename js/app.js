$(document).ready(function(){
    $('#nav_menu').slicknav({prependTo:"#mobile_menu"});

    $("#playMe").playMe({
        overlay: "rgba(0,100,0,0.5)",
        closeButton: {
            src: "images/close.png",
            width: "40px",
            height: "40px"
        },
        imageBorder: "15px solid #ffffff",
        imageArr: ["images/rick1.jpg","images/rick2.jpg","images/rick3.jpg","images/rick4.jpg"],
        borderRadius: "10px",
        imageWidth: "500px",
        imageHeight: "400px",
        imageCaption: {
            exist: true,
            color: "#ffffff",
            fontSize: "40px"
        }
    });


    
});