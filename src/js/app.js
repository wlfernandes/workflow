$(function(){
    $('html, body').on('click', function(e){
        if(e.target == document.documentElement){
            $("html").removeClass("open-sidebar");
        }
    })
})