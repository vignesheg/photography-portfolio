$(window).on('load', function() {
    // Wait for 500ms after everything has loaded
    setTimeout(function() {
        // Fade out the preloader
        $('#preloader').fadeOut(800, function() {
            // Remove preloader from DOM after fade
            $(this).remove();
            // Add a class to body to enable any post-load animations
            $('body').addClass('loaded');
        });
    }, 500);
});

// Fallback if load event doesn't fire
$(document).ready(function() {
    setTimeout(function() {
        if ($('#preloader').is(':visible')) {
            $('#preloader').fadeOut(1000, function() {
                $(this).remove();
                $('body').addClass('loaded');
            });
        }
    }, 4000); // Fallback timeout after 4 seconds
});

$(document).ready(function() {
    // Open popup
    $('#openPopup').click(function() {
        $('#popupOverlay').fadeIn(300);
        // Optional: Prevent scrolling on body
        $('body').css('overflow', 'hidden');
    });

    // Close popup when clicking the close button
    $('.close-popup').click(function() {
        $('#popupOverlay').fadeOut(300);
        // Optional: Re-enable scrolling on body
        $('body').css('overflow', 'auto');
    });

    // Close popup when clicking outside
    $('#popupOverlay').click(function(e) {
        if (e.target === this) {
            $(this).fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });

    // Close popup when pressing ESC key
    $(document).keyup(function(e) {
        if (e.key === "Escape") {
            $('#popupOverlay').fadeOut(300);
            $('body').css('overflow', 'auto');
        }
    });
});