$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    var typed = new typed(".typing", {
        strings: ["Developpeuse", "Designeuse", "Freelanceuse"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new typed(".typing-2", {
        strings: ["Developpeuse", "Designeuse", "Freelanceuse"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });

    function SendMail() {
        var params = {
            nom : document.getElementById("Nom").value,
            email_id : document.getElementById("email_id").value,
            sujet : document.getElementById("sujet").value,
            Message : document.getElementById("message").value
        }
        emailjs.send("service_fggrjtp", "template_mdyjxut", params).then(function (res){
            alert("Success!" + res.status);
        })
    }
});

var mySwiper = new Swiper('.swiper-container',{speed: 400,
    spaceBetween: 0,
    grabCursor:true,
                                            autoplay:{
    autoplay:true,
    delay:4000,                             disableOnInteraction:false         
               }                       
                                      });

