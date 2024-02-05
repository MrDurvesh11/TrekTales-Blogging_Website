$(document).ready(function(){
    $.getJSON("./data.json",function(data){
        console.log(data);

        $('.title').html(data.title);
        $('.heading').html(data.heading);
        $('.sub-heading').html(data.subhead);
        $('.nav1').html(data.nav1);
        $('.nav2').html(data.nav2);
        $('.nav3').html(data.nav3);
        $('.nav4').html(data.nav4);
        $('.blog1Title').html(data.blog1Title);
        $('.blog1postby').html(data.blog1postby);
        $('.blog2Title').html(data.blog2Title);
        $('.blog2postby').html(data.blog2postby);
        $('.blog3Title').html(data.blog3Title);
        $('.blog3postby').html(data.blog3postby);
        $('.blog4Title').html(data.blog4Title);
        $('.blog4postby').html(data.blog4postby);
        $('.blog5Title').html(data.blog5Title);
        $('.blog5postby').html(data.blog5postby);
        $('.blog6Title').html(data.blog6Title);
        $('.blog6postby').html(data.blog6postby);
        $('.btntext').html(data.btntext);
        $('.footer').html(data.footer);
        $('.atitle').html(data.atitle);
        $('.aheading').html(data.aheading);
        $('.acontent1').html(data.acontent1);
        $('.acontent2').html(data.acontent2);
        $('.acontent3').html(data.acontent3);
        $('.agreeting').html(data.agreeting);
        $('.chead').html(data.chead);
        $('.csubhead').html(data.csubhead);
        $('.ccontent').html(data.ccontent);
        $('.blog1Content').html(data.blog1Content);
        // $('.').html(data.);
        // $('.').html(data.);






    }).fail(function(){
        console.log("Error");
    })
})