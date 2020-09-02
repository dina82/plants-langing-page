$(document).ready(function(){
    $('body').scrollspy({
        target: '#first',
        offset: 57
      });
    
    $('.icon-scroll_top i').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 2000);
        return false;
    });
    $('.navbar-light .navbar-nav .nav-link').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
    var obj={
        home:"الصفحة الرئيسية",
        about:"عنا",
        services:"خدمتنا",
        team:"فؤيقنا",
        pages:"الصفحات",
        blog:"المنتدى",
        gallary:"الصور",
        contact:"اتصل بنا",
        language:"اللغة"
    }
    $('#arabic').click(function(){
        $('body').css('direction','rtl');
        $('html').attr('lang','ar');
        for(var i=0;i<10;i++){
        $.each(obj,function(i,val){
                $('.nav-link').eq(i).append(val)
            })
            }    
    })
    $('#english').click(function(){
        $('body').css('direction','ltr');
        $('html').attr('lang','en');
               
    })
    
})