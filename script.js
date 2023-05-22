$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('..scroll-up-btn').addClass("show");
        }else{
            $('..scroll-up-btn').removeClass("show");
        }
    });

    //side -up sceript
           $('.scroll-up-btn').click(function(){
           $('html').animate({ScrollTop: 0});
    });


    // toggle menu/navbar script
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggle("active");
        // $('.menu-btn i').toggle("active");
    });
    // owl carousel script
    $('.carousel').owlcarousel1({

    });
});
//typing animation script
var typed = new Typed(".typing", {
    strings: ["Developer", "vishal","Designer" ],
    typeSpeed:100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Developer", "Designer", ],
    typeSpeed:100,
    backSpeed: 60,
    loop: true
});