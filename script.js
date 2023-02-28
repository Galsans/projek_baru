// LOADER
$(document).ready(function(){
    setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222')
    }, 900);
  });

// NAVBAR DROPDOWN
(function ($) {
    $(function () {

        //  open and close nav 
        $('#navbar-toggle').click(function () {
            $('nav ul').slideToggle();
        });


        // Hamburger toggle
        $('#navbar-toggle').on('click', function () {
            this.classList.toggle('active');
        });


        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.navbar-dropdown').slideToggle("slow");

            // Close dropdown when select another dropdown
            $('.navbar-dropdown').not($(this).siblings()).hide("slow");
            e.stopPropagation();
        });


        // Click outside the dropdown will remove the dropdown class
        $('html').click(function () {
            $('.navbar-dropdown').hide();
        });
    });
})(jQuery);


// ANIMATION NAVBAR
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.remove('show');
    } else {
        document.getElementById("header").classList.add('show');
    }
    prevScrollpos = currentScrollPos;

}
//]]>

// MODAL
$(document).ready(function() {
    /*
    *   Examples - images
    */

    $("a#example1").fancybox();

    $("a#example2").fancybox({
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'elastic'
    });

    $("a#example3").fancybox({
        'transitionIn'	: 'none',
        'transitionOut'	: 'none'	
    });

    $("a#example4").fancybox({
        'opacity'		: true,
        'overlayShow'	: false,
        'transitionIn'	: 'elastic',
        'transitionOut'	: 'none'
    });

    $("a#example5").fancybox();

    $("a#example6").fancybox({
        'titlePosition'		: 'outside',
        'overlayColor'		: '#000',
        'overlayOpacity'	: 0.9
    });

    $("a#example7").fancybox({
        'titlePosition'	: 'inside'
    });

    $("a#example8").fancybox({
        'titlePosition'	: 'over'
    });

    $("a[rel=example_group]").fancybox({
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'titlePosition' 	: 'over',
        'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
            return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
        }
    });

    /*
    *   Examples - various
    */

    $("#various1").fancybox({
        'titlePosition'		: 'inside',
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });

    $("#various2").fancybox();

    $("#various3").fancybox({
        'width'				: '75%',
        'height'			: '75%',
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none',
        'type'				: 'iframe'
    });

    $("#various4").fancybox({
        'padding'			: 0,
        'autoScale'			: false,
        'transitionIn'		: 'none',
        'transitionOut'		: 'none'
    });
});
