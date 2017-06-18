jQuery(function($) {

    window.onload = function() {
    }

    window.onbeforeunload = function() {
        window.scrollTo(0, 0);
    }


    // Jquery Cusotm Codes

    $(document).ready(function() {

        // Load page 
        $('.loader').hide();
        $('.page').fadeIn('slow');

        // Function to send email - start
        $('#contactFrm').submit(function(e) {

            var data = {
                pname: $("#pname").val(),
                pemail: $("#pemail").val(),
                pmsg: $("#pmsg").val()
            };


            $.ajax({
                type: "POST",
                url: "email.php",
                data: data,
                success: function() {
                    $('.nsmsg').fadeIn(1000);
                    setTimeout(function() {
                        $('.nsmsg').fadeOut(1000);
                        $("#pname").val('');
                        $("#pemail").val('');
                        $("#pmsg").val('');
                    }, 5000);
                }
            });

            e.preventDefault();


        });
        // Function to send email - end


        // Scrolling begin
        function goToByScroll(id) {
            var viewportWidth = $(window).width();
            var top = $(id).offset().top;
            if(viewportWidth < 768){
                top = top - 75;
            }
            $('html,body').animate({scrollTop: top},'slow');
        }


        $(window).scroll(function(){
            var aTop = 0;
            if($(this).scrollTop() > aTop){
                $('.menu').addClass('menu-bar');
            } else {
                $('.menu').removeClass('menu-bar');
            }
        });        
        // $(document).on('scroll','.body', function(event) {
        //     $('.menu').addClass('menu-bar');
        // });

        $('.whatido .col').on('mouseover',function(){
            $(this).find('.gear').addClass('gear-fast');
        }).on('mouseout',function(){
            $(this).find('.gear').removeClass('gear-fast');
        });

        // Col Click
        $('.whatido .col').on('click',function(){
            window.location.href = "works.html";
        });

        // menu items
        $('.menu-home').on('click',function(){
            $.fn.fullpage.moveTo(1);
            $(this).parent().parent().find('li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menu-skill').on('click',function(){
            $.fn.fullpage.moveTo(2);
            $(this).parent().parent().find('li a').removeClass('active');
            $(this).addClass('active');
        });
        $('.menu-work').on('click',function(){
            $.fn.fullpage.moveTo(3);
            $(this).parent().parent().find('li a').removeClass('active');
            $(this).addClass('active');
        });        

        // me click
        $('.mypic').on('click',function(){
            $('.about .col').slideDown(300);
            $('.close').show();
        });

        // close btn 
        $('.close').on('click',function(){
            $('.about .col').slideUp(200);
            $(this).hide();
        }); 


        $('.email').on('click',function(e){
            e.preventDefault();
            goToByScroll('#contact');
        });


        // close btn 
        $('.overlay').on('click',function(){
            $('.contact').slideUp(200);
            $(this).hide();
        });
        $('.fclose').on('click',function(){
            $('.contact').slideUp(200);
            $(this).hide();
            $('.overlay').hide();
        });



        // Mix It Up
/*        function getSelectorFromHash() {
            var hash = window.location.hash.replace(/^#/g, '');
            var selector = hash ? '.' + hash : targetSelector;
            return selector;
        }*/

        if($('#projects').length > 0){
            //$('#projects').mixitup();
            var mixer = mixitup($('#projects'),{});

            $('.filters li').on('click',function(){
                $('.filters li').removeClass('active');
                $(this).addClass('active');
            });
        }

        if($('skills').length > 0){
            // parallax effect
            $('.skills').parallax();
            // Match Height
            $('.skills .item').matchHeight();
        }

    });
});
