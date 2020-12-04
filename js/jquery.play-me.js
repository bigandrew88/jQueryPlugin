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

(function($){
    $.fn.playMe = function(options){
        var audio = new Audio('media/jQueryMedia/music.mp3');
        $("#playMe").click(function(){
            audio.play();
            randomImage();
        });

        var settings = $.extend({
            overlay: 'rgba(0,0,0,0.5)',
            closeButton: {
                src: null,
                width: "30px",
                height: "30px"
            },
            imageBorder: "5px solid #ffffff",
            imageArr: ["images/jQueryImages/rick1.jpg","images/jQueryImages/rick2.jpg","images/jQueryImages/rick3.jpg","images/jQueryImages/rick4.jpg"],
            borderRadius: "5px",
            imageWidth: "500px",
            imageHeight: "400px",
            family: "Cursive",
            familySize: '20px',
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"
            },
            open: null,
            close: null
        }, options)

        var newImage;
            function randomImage(){
                var i = 0;
                newImage = setInterval(newImage2,5000);
                function newImage2(){  
                    $image.fadeOut(1000, function () {
                        $('img').each(function(){
                            $(this).attr("src", settings.imageArr[Math.floor(Math.random() * settings.imageArr.length)]);
                        })
                        $image.attr("src", settings.imageArr[i]);
                        $image.fadeIn(1000);
                        $overlay.append($image);
                        let r = Math.floor(Math.random() * 255)
                        let b = Math.floor(Math.random() * 255)
                        let g = Math.floor(Math.random() * 255)
                        let a = Math.floor(Math.random() * 10) / 10
                        $("*").css(
                            "background", 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')',
                        );
                    });
                    if(i == (settings.imageArr.length - 1)){
                        i = 0; 
                    } else {
                        i++;
                    }
                }
            }
        var $image, $overlay;
        return this.each(function(){
            var $closeButton, $imageCaption;
            setOverlayProperties();
            setClosebuttonProperties();
            setImageProperties();

            $(this).find("a").on("click", function(event){
                event.preventDefault();

                $('img').each(function(){
                    $(this).attr("src", settings.imageArr[Math.floor(Math.random() * settings.imageArr.length)]);
                })
                
                
                $('*').css('font-family',settings.family);
                $('*').css('font-size',settings.familySize)
                

                var imageSource = settings.imageArr[Math.floor(Math.random() * settings.imageArr.length)];
                $image.attr("src", imageSource);

                if(settings.imageCaption.exist){
                    var caption = $(this).children("img").attr("alt");
                    $imageCaption.text(caption);
                }

                if($.isFunction(settings.open)){
                    settings.open.call(this);
                }
                $overlay.css({opacity: 0.1}).show().animate({opacity: 1});
            })

            function setImageProperties(){
                $image = $('<img>');
                $image.css({
                    "width": settings.imageWidth,
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "border-radius": settings.borderRadius
                });
                $overlay.append($image);

                if(settings.imageCaption.exist){
                    $imageCaption = $("<p>You have been Rick Rolled by Andrew Cloutier</p>");
                    $imageCaption.css({
                        "color": settings.imageCaption.color,
                        "font-size": settings.imageCaption.fontSize
                    });

                    $overlay.append($imageCaption);
                }
            }

            function setOverlayProperties(){
                $overlay = $('<div></div>');
                $overlay.css({
                    "background": settings.overlay,
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "display": "none",
                    "text-align": "center",
                    "width": "100%",
                    "height": "200%",
                    "padding-top": "5%"
                });
                $("body").append($overlay);
            }

            function setClosebuttonProperties(){
                var prop = {
                    "color": "white",
                    "curser": "pointer",
                    "font-size": "20px",
                    "width": settings.closeButton.width,
                    "height": settings.closeButton.height,
                    "position": "absolute",
                    "top": "5px",
                    "right": "5px",
                    "border": "0px",
                    "z-index": "1"
                };

                if(settings.closeButton.src){
                    $closeButton = $('<img>');
                    $closeButton.attr("src", settings.closeButton.src);
                }else{
                    $closeButton = $('<span>x</span>');
                }

                $closeButton.css(prop);
                $overlay.append($closeButton);
            }

            $closeButton.click(function(){
                if($.isFunction(settings.close)){
                    settings.close.call(this);
                }
                $overlay.animate({opacity: 0.1}, function(){
                    $overlay.hide();
                    audio.pause();
                    clearInterval(newImage);
                    location.reload();
                    alert("Thanks for Playing Me!");
                })
                
            })
        })
    }
}(jQuery));