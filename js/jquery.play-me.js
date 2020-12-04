(function($){
    $.fn.playMe = function(options){
        var audio = new Audio('media/music.mp3');
        $("#playMe").click(function(){
            audio.play();
        });

        var settings = $.extend({
            overlay: 'rgba(0,0,0,0.5)',
            closeButton: {
                src: null,
                width: "30px",
                height: "30px"
            },
            imageBorder: "5px solid #ffffff",
            imageArr: ["images/rick1.jpg","images/rick2.jpg","images/rick3.jpg","images/rick4.jpg"],
            borderRadius: "5px",
            imageWidth: "500px",
            imageHeight: "400px",
            imageCaption: {
                exist: true,
                color: "#ffffff",
                fontSize: "20px"
            },
            open: null,
            close: null
        }, options)

        return this.each(function(){
            var $overlay, $closeButton, $image, $imageCaption;
            setOverlayProperties();
            setClosebuttonProperties();
            setImageProperties();

            $(this).find("a").on("click", function(event){
                event.preventDefault();

                $('img').each(function(){
                    $(this).attr("src", settings.imageArr[Math.floor(Math.random() * settings.imageArr.length)]);
                })

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
                    $imageCaption = $("<p></p>");
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
                    "height": "100%",
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
                    location.reload();
                })
                
            })
        })
    }
}(jQuery));