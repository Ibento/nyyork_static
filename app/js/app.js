$(document).ready(function() {
    $(window).scroll(function() {
     
        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('section.panel'),
            $fadeIn = $('.fadeIn');
        
        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);
    
        /* Check the location of each panel */
        $panel.each(function () {
            
            var $this = $(this);
            
            if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
                    
                // Remove all classes on body with color-
                $body.removeClass(function (index, css) {
                return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
                });
                
                // Add class of currently active div
                $body.addClass('color-' + $(this).data('color'));
            }
        });    
    
        /* Check the location of each fadeIn */
        $fadeIn.each( function() {
    
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ) {
    
                $(this).animate({'opacity':'1'},1500);
            }
    
        });
        $body.css('transition','background-color 1s ease');

    }).scroll(); 
    
});
