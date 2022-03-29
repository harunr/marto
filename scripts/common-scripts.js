;
(function ($) {
    $(function () {

        // Begin input common focus and blur for value.
        $('input:text,input[type="email"],input:password,textarea').focus(function () {
            if (this.value == this.defaultValue) {
                this.value = ''
            }
        })
        $('input:text,input[type="email"],input:password,textarea').blur(function () {
            if (!this.value) {
                this.value = this.defaultValue;
            }
        })
        // Ends input common focus and blur for value.
        
        if($("#dateOfbirth").length){
            $("#dateOfbirth").birthdayPicker({
                maxAge: 100,
                minAge: 0,
                //maxYear: r,
                //<a href="https://www.jqueryscript.net/time-clock/">date</a>Format: "middleEndian",
                monthFormat: "number",
                placeholder: true,
                defaultDate: false,
                sizeClass: "span2"
            });
        }
        
        
                
        /*if($(window).width() > 767 ){
            var $header = $(".header-area"),
            $clone = $header.before($header.clone().addClass("sticky"));

            $(window).on("scroll", function() {
                var fromTop = $(window).scrollTop();
                $("body").toggleClass("shown", (fromTop > 100));

            });
            
        }*/
        
        
        var $header = $(".header-area"),
        $clone = $header.before($header.clone().addClass("sticky"));

        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            $("body").toggleClass("shown", (fromTop > 100));

        });
           
        $('.header-area.sticky #phone-show').click(function() {
            $(".header-area.sticky div.menu-wrap").slideToggle()
        })
        
        
        
        
        
        $("div.main-nav > ul > li").find(" > ul").parent().addClass("down")
        $("div.main-nav  > ul > li > ul > li").find(" > ul").addClass("sub-category")
       
        $("ul.category > li").find(" > ul").parent().addClass("next-info")
    
     
        
        $('div.expand-btn').click(function(){
            $('div.header-search').toggleClass('search-box-expanded')
        });

         // Begin input common focus and blur for value.
        $('div.text-field input').keyup(function(){
            $('div.header-search').addClass('value-added')
        })


        $('div.text-field input').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $('div.header-search').removeClass('value-added')
            }
        });





        
        $(".sticky #cart-id").click(function(e){
           e.preventDefault();
            $(".sticky  div.cart-inner-wrap").slideToggle();
        })
        
        $(".sticky #sign-in").click(function(e){
           e.preventDefault();
            $(".sticky  div.cart-wrap").slideToggle();
        })

        
        
        
        
        if( $(window).width() < 1025 ){

            $("div.header-inner").find("li.mobi-menu-item").parent().addClass("subnav")

            $("div.header-inner ul.subnav h6").bind('click', 'touchend', function(e){
                   $("div.header-inner ul.subnav").find("li.mobi-menu-item:visible").slideUp()
                   $("div.header-inner ul.subnav h6").removeClass("active")
                if($(this).parent().find("li.mobi-menu-item:visible").length){
                    $(this).removeClass("active")
                    $(this).parent().find("li.mobi-menu-item").slideUp()
                } 
                else{
                    $(this).addClass("active")
                    $(this).parent().find("li.mobi-menu-item").slideDown()
                }
            })
            
            $("div.header-inner ul.subnav > li > ul.subItem-info > li > a").bind('click', 'touchend', function(e){
                e.preventDefault();
                   $("div.header-inner ul.subnav > li > ul.subItem-info > li").find("> ul.info-item:visible").slideUp()
                   $("div.header-inner ul.subnav > li > ul.subItem-info > li > a").removeClass("active")
                if($(this).parent().find("> ul.info-item:visible").length){
                    $(this).removeClass("active")
                    $(this).parent().find("> ul.info-item").slideUp()
                } 
                else{
                    $(this).addClass("active")
                    $(this).parent().find("> ul.info-item").slideDown()
                }
            })
        }
        
    
        
        
        if($("#signinForm").length){
            $("#signinForm").validate();
        }

        if($("#addressForm").length){
            $("#addressForm").validate();
        }

        $('.menu-close').click(function(){
            $('.search-wrap').removeClass('expand');
        });

        $('.text-field input').keyup(function(){
            $('.search-wrap').addClass('value-added');
        });

        $('.text-field input').blur(function(){
            $('.search-wrap').removeClass('value-added');
        });

        //this function for cart

        $('#cart-icon').click(function(){
            $('#cart-1').slideToggle();
            $('#user-menu').hide();
            /*$('.menu-wrap').hide()*/
        });
        $('#cart-icon-2').click(function(){
            $('#cart-2').slideToggle();
            $('#user-menu2').hide();
        });
        $('div.mobi-nav').click(function(){
            $('div.mobi-details').slideToggle();
        });
  
        $('#user-2').click(function(){
            $('#user-menu2').slideToggle();
            $('#cart-2').hide();
        });

        //this function for cart item

        $('.cart-close').click(function(e){
            $(this).parent().slideUp()
        });

         $('div.foldings').click(function() {
            $(this).parent().find('div.epanded-content').slideDown();
            $(this).parent().find('div.close-btn').show();
        });


        $('div.close-btn').click(function() {
            $(this).hide();
            $(this).parent().find('div.epanded-content').slideUp();
        });

        if ($("select.styled-select").length) {
            $('select.styled-select').selectric();
        }

        
        $("div.delete-icon").click(function(e){
            $(this).parent().slideUp();
        });
        
        
       $("#filter-show").click(function(){
           $("body").addClass("show-all")
       })
        $("#get-coupon").click(function(e){
            e.preventDefault();
           $("body").addClass("discount-coded")
       })
        
        
        //this function for sidebar



        if($(".price-range").length){
            $(function() {
                var sliderElement = $( "#pricingRange" )
                sliderElement.slider({
                    range: true,
                    min: 0,
                    step: 50,
                    max: 3000,
                    values: [ 50, 1900],
                    slide: function( event, ui ) {
                        $( "#minRange" ).text( "$" + ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
                        $( "#maxRange" ).text( "$" + ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
                    }
                });

                $( "#minRange" ).text("$" + sliderElement.slider('values',  0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );
                $( "#maxRange" ).text("$" + sliderElement.slider('values', 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") );

                $("#minRange").change(function() {
                    $("#slider-range").slider('values',0,$(this).val());
                });

                $("#maxRange").change(function() {
                    $("#slider-range").slider('values',1,$(this).val());
                });

            });
        }

        
        $("#products-figure > img").hide()
        $("#products-figure > img").eq(0).show()
        $("#products-thumb > div.products-thum-item").removeClass("active")
        $("#products-thumb > div.products-thum-item").eq(0).addClass("active")
        
        $("#products-thumb > div.products-thum-item").each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false
                else{
                    $("#products-thumb > div.products-thum-item").removeClass("active")
                    $(this).addClass("active")
                    $("#products-figure > img").hide()
                    $("#products-figure > img").eq(i).show()
                }
            })
        })
        
        $("#customer-review-content-wrap > div.products-container").hide()
        $("#customer-review-content-wrap > div.products-container").eq(0).show()
        $("#products-container-tab > li").removeClass("active")
        $("#products-container-tab > li").eq(0).addClass("active")
        
        $("#products-container-tab > li").each(function(i){
            $(this).click(function(){
                if( $(this).hasClass("active") ) return false
                else{
                    $("#products-container-tab > li").removeClass("active")
                    $(this).addClass("active")
                    
                    $("#customer-review-content-wrap > div.products-container").hide()
                    $("#customer-review-content-wrap > div.products-container").eq(i).show()
                }
            })
        })
        

        //this function for share
        $('#social-triger').click(function(){
            $('.social-icon-wrap').toggleClass('active')
        });
        
        
        //this function for accrodion
        
        $('.accordion-title h6').click(function(){
            $(this).closest('.accordion-item').siblings().removeClass('active').find('.accordion-content-wrap').slideUp(700);
            $(this).closest('.accordion-item').toggleClass('active').find('.accordion-content-wrap').slideToggle(700);
            
        });
        
        if( $(window).width() > 767 ){
            $(".without-product .catelog-products-wrap").height( $(".without-product .sidebar-wrap").height() )
        }
        
        //this function for sign up
        $("#signin-triger").click(function(e){
            e.preventDefault();
            $("#signup-popup-wrap").fadeIn()
        });
        $("#signpu-popup-close").click(function(){
            $("#signup-popup-wrap").fadeOut()
        });
        
        
        //this function for sign up
        $("#add-more-triger").click(function(e){
            e.preventDefault();
            $("#add-new-popup").fadeIn()
        });
        $("#address-close-icon, .close-btn-address-popup").click(function(e){
            e.preventDefault()
            $("#add-new-popup").fadeOut()
        });
        
       
        //this function for sign in
        $('#user, .header-icon-wrap #user').click(function(){
            $('.cart-wrap').fadeIn();
            console.log('i am clicked')
        });
        
        $('.cart-close-btn').click(function(){
            $('.cart-wrap').fadeOut();
        });
        
        if($("#preloader").length){
            var preload = document.getElementById("preloader");
            window.addEventListener("load", function(){
                //preload.style.animation = " fadeOut 1s ease"
                preload.style.display = " none"
            })
        };
        
        /*
        if($("#products-thumb").length){
            $("#products-thumb").niceScroll({cursorwidth: '10px', autohidemode: false, zindex: 999,});
        }
   */

        if($(window).width() < 767 ){
            $("div.expand-btn").click(function(){
            $("body").toggleClass("logo-show")
            
            })
        }




if($("#products-thumb").length ){
     $("#products-thumb").customScrollbar({
          skin: "default-skin", 
          hScroll: false,
          updateOnWindowResize: true
      })   

}

    
        

        
        
        
    }) // End ready function.

    $(window).load(function () {
        // Begin common slider
        /*if ($('div.hero-slider-info').length == 0) return false*/

        $('div.hero-slider-info').flexslider({
            animation: "slide",
            slideshow: false,
            directionNav: true,
            controlNav: false,
            slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
            animationSpeed: 600,
            useCSS: false,
            start: function (slider) {
                //$('body').removeClass('loading');

            },
            animationLoop: true,
            pauseOnAction: false, // default setting

            after: function (slider) {

            }
        });
    })


     $(window).load(function () {
            // Begin common slider
            
             $('#tabSlider').flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: true,
                controlNav: true,
                slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                 manualControls:"#manual-control ul li",
                useCSS: false,
                start: function (slider) {
                    //$('body').removeClass('loading');
                },
                animationLoop: true,
                pauseOnAction: false, // default setting

                after: function (slider) {
                }
            });
        });
    $(window).load(function () {
            // Begin common slider
            
             $('div.social-content-slider').flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: true,
                controlNav: true,
                slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                useCSS: false,
                start: function (slider) {
                    //$('body').removeClass('loading');
                },
                animationLoop: true,
                pauseOnAction: false, // default setting

                after: function (slider) {
                }
            });
        });
    
    if( $(window).width() < 768 ){
        
        $(window).load(function () {
            // Begin common slider
            if ($('div.brand-logo-wrap').length == 0) return false
            $('div.brand-logo-wrap').flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: true,
                controlNav: true,
                slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                useCSS: false,
                start: function (slider) {
                    //$('body').removeClass('loading');
                },
                animationLoop: true,
                pauseOnAction: false, // default setting

                after: function (slider) {
                }
            });
        })
        $(window).load(function () {
            // Begin common slider
            if ($('#service-wrap').length == 0) return false
            $('#service-wrap').flexslider({
                animation: "slide",
                slideshow: true,
                directionNav: true,
                controlNav: true,
                slideshowSpeed: 5000, //Integer: Set the speed of the slideshow cycling, in milliseconds
                animationSpeed: 600,
                useCSS: false,
                start: function (slider) {
                },
                animationLoop: true,
                pauseOnAction: false, // default setting

                after: function (slider) {

                }
            });
        })
    }

    if( $(window).width() < 768 ){ 

        $(window).load(function(){
            // Begin common slider
            if ( $('div.small-thumb-inner').length == 0 ) return false

            $('#carousel').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                directionNav:false,
                slideshow: false,
                itemWidth: 55,
                //itemMargin: 5,
                asNavFor: 'div.product-mobi-slider',
            });

            $('#product-mobi-slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                    directionNav:true,
                slideshow: false,
                sync: "#carousel",
            });

        })

     }
})(jQuery)

//Quad, Cubic, Quart, Quint, Sine, Expo, Circ, Elastic, Back, Bounce
jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b+c;return-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b+c;return d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b+c;return-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){if((b/=e/2)<1)return d/2*b*b*b*b*b+c;return d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return b==0?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){if(b==0)return c;if(b==e)return c+d;if((b/=e/2)<1)return d/2*Math.pow(2,10*(b-1))+c;return d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){if((b/=e/2)<1)return-d/2*(Math.sqrt(1-b*b)-1)+c;return d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e)==1)return c+d;if(!g)g=e*.3;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158;var g=0;var h=d;if(b==0)return c;if((b/=e/2)==2)return c+d;if(!g)g=e*.3*1.5;if(h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);if(b<1)return-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c;return h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)*.5+d+c},easeInBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;return d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){if(f==undefined)f=1.70158;if((b/=e/2)<1)return d/2*b*b*(((f*=1.525)+1)*b-f)+c;return d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){if((b/=e)<1/2.75){return d*7.5625*b*b+c}else if(b<2/2.75){return d*(7.5625*(b-=1.5/2.75)*b+.75)+c}else if(b<2.5/2.75){return d*(7.5625*(b-=2.25/2.75)*b+.9375)+c}else{return d*(7.5625*(b-=2.625/2.75)*b+.984375)+c}},easeInOutBounce:function(a,b,c,d,e){if(b<e/2)return jQuery.easing.easeInBounce(a,b*2,0,d,e)*.5+c;return jQuery.easing.easeOutBounce(a,b*2-e,0,d,e)*.5+d*.5+c}})
