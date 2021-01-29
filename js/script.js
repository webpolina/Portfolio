$(document).ready(function(){
    $(window).scroll(function(){
if (this.scrolly > 20)
$(".navbar").addclass("sticky");
else
$(".navbar").removeclass("sticky");
});

$('.menu-toggle').click(function(){
$(this).toggleClass("active");
$('.navbar-menu').toggleClass("active");
});

$(".works").magnificPopup({
    delegate:'a',
    type:'image',
    gallery:{enabled:true}
});
});