/*
Template Name: Wrapkit Ui Kit
Author: Themedesigner
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
    "use strict";
    // ============================================================== 
    //This is for preloader
    // ============================================================== 
    $(function () {
        $(".preloader").fadeOut();
    });
    // ============================================================== 
    //Tooltip
    // ============================================================== 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // ============================================================== 
    //Popover
    // ============================================================== 
    $(function () {
        $('[data-toggle="popover"]').popover()
    })
    // ============================================================== 
    // For mega menu
    // ============================================================== 
    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });
    // ============================================================== 
    // Resize all elements
    // ============================================================== 
    $("body").trigger("resize");
    // ============================================================== 
    //Fix header while scroll
    // ============================================================== 
    var wind = $(window);
    wind.on("load", function() {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".topbar");
        if (bodyScroll > 100) {
            navbar.addClass("fixed-header animated slideInDown")
        } else {
            navbar.removeClass("fixed-header animated slideInDown")
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 300) {
            $('.topbar').addClass('fixed-header animated slideInDown');
            $('.bt-top').addClass('visible');
        } else {
            $('.topbar').removeClass('fixed-header animated slideInDown');
            $('.bt-top').removeClass('visible');
        }
    });
    // ============================================================== 
    // Animation initialized
    // ============================================================== 
    AOS.init();
    // ============================================================== 
    // Back to top
    // ============================================================== 
    $('.bt-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
    // ============================================================== 
    // menu scroll
    // ============================================================== 
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,
        menuItems = topMenu.find(".nav-link"),
        scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

    menuItems.click(function(e){
        var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 1000, 'swing');
        e.preventDefault();
    });

    $(window).scroll(function(){
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function() {
        if ($(this).offset().top < fromTop)
            return this;
        });
       
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";
       
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
       }                   
    });

    var wind = $(window);
    wind.on("load", function() {
        var fromTop = $(this).scrollTop()+topMenuHeight;
        var cur = scrollItems.map(function(){
        if ($(this).offset().top < fromTop)
            return this;
        });
       
       cur = cur[cur.length-1];
       var id = cur && cur.length ? cur[0].id : "";
       
        if (lastId !== id) {
            lastId = id;
            menuItems
                .parent().removeClass("active")
                .end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    });
});
