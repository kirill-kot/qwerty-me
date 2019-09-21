(function ($) {
    $(document).ready(function () {
        if(!Modernizr.touch){
            banner = paraxify('.paraxify');
        }
        if($(window).width()<772) {
            $('.dropdown-toggle').dropdown();
        } else {
            $('.city a').on("click", function(e){
            $(this).next('ul').toggle();
            e.stopPropagation();
            e.preventDefault();
        });
        }
        $('#cases .case').each(function(){
            $(this).on('mouseenter',function(){
                $(this).find('.overlay').removeClass('out').addClass('in');
            }).on('mouseleave', function(){
                $(this).find('.overlay').removeClass('in').addClass('out');
            });
        });
    });

}(jQuery));