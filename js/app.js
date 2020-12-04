$(document).ready(function(){
    /*
    Hello,

    Welcome to my jQuery Plugin!

    This is a plugin to play a joke on someone to give them a nice surprise!

    all you need to do is attach the id 'playMe' to a click event and let the games begin once clicked!

    In the options, you can change a few of the initial settings.

    Some settings will change once the plugin has been ran for 5 sec.

    You can also change to an unlimited amount of images you want it to rotate though, include the url or upload to the jQueryImages folder.

    Have fun playing around!

    GitHub: https://github.com/bigandrew88/jQueryPlugin

    Created by: Andrew Cloutier

    Website template is from Murachs Javascript/jQuery.

    Original jQuery Plug base from: https://www.udemy.com/share/101rQOAEcaeFpbR30C/

    All copyrights go to Original owners.
    */
    $("#playMe").playMe({
        overlay: "rgba(0,100,50,0.5)",
        closeButton: {
            src: "images/jQueryImages/close.png",
            width: "40px",
            height: "40px"
        },
        imageBorder: "15px solid #ffffff",
        imageArr: ["images/jQueryImages/rick1.jpg","images/jQueryImages/rick2.jpg","images/jQueryImages/rick3.jpg","images/jQueryImages/rick4.jpg"],
        borderRadius: "10px",
        imageWidth: "500px",
        imageHeight: "400px",
        family: "Cursive",
        familySize: '20px',
        imageCaption: {
            exist: true,
            color: "#ffffff",
            fontSize: "40px"
        }
    });


    $('#nav_menu').slicknav({prependTo:"#mobile_menu"});
});