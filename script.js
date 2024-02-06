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
        $('.blog1Content1').html(data.blog1Content1);
        $('.blog1Content2').html(data.blog1Content2);
        $('.blog1Content3').html(data.blog1Content3);
        $('.blog1Content4').html(data.blog1Content4);
        $('.blog1Content5').html(data.blog1Content5);
        $('.blog1Content6').html(data.blog1Content6);
        $('.blog1Content7').html(data.blog1Content7);

        $('.blog2Content1').html(data.blog2Content1);
        $('.blog2Content2').html(data.blog2Content2);
        $('.blog2Content3').html(data.blog2Content3);
        $('.blog2Content4').html(data.blog2Content4);
        $('.blog2Content5').html(data.blog2Content5);
        $('.blog2Content6').html(data.blog2Content6);
        $('.blog2Content7').html(data.blog2Content7);



        $('.blog3Content1').html(data.blog3Content1);
        $('.blog3Content2').html(data.blog3Content2);

        $('.blog4Content').html(data.blog4Content);
        $('.blog5Content').html(data.blog5Content);
        $('.blog6Content').html(data.blog6Content);
        // $('.').html(data.);
        // $('.').html(data.);






    }).fail(function(){
        console.log("Error");
    })
})