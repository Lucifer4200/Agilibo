(function($){
	'use strict';

    //sidebar top fixed start
    var fixed_top = $(".side-bar");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 130) {
            fixed_top.addClass("menu-fixed animated fadeInDown");
            fixed_top.removeClass("slideInUp");
            $('body').addClass("body-padding");
        } else {
            fixed_top.removeClass("menu-fixed fadeInDown");
            fixed_top.addClass("slideInUp"); 
            $('body').removeClass("body-padding");
        }
    });

    //menu side bar
    $('.mobile-bar').on('click', function(){
        $('body,header,.mobile-bar,.main-menu').toggleClass('active');
    });

    $('.crose-bar').on('click', function(){
        $('body,header,.mobile-bar,.main-menu').removeClass('active');
    });

    //menu side bar
    $('.side-hamburger').on('click', function(){
        $('bod,.overlay,.side-hamburger,.sidebar-menu').toggleClass('active');
    });

    // remove overlay
    $('.overlay').on('click', function() {
        $('body,.overlay,.side-hamburger,.sidebar-menu').removeClass('active');
    });

    // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
        } else {
        scrollTop.addClass("active");
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
        scrollTop: 0
        }, 500);
        return false;
    });

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY){
        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function(e){
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
        $(this).remove();
    });

    // chate button
	$(document).on('click','.media-btn, .media-close',function(){
        $(".social-media").toggleClass("open");
	});

})(jQuery);
