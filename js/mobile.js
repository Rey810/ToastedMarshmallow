// Scripts for mobile functions


// For mobile menu

function openHamburger() {
            $('body').addClass('stop-scrolling')    
            $('.hamburgerMenu ').addClass('higher')
            $('body').bind('touchmove', function (e) {
                e.preventDefault()
            })
            animeLib({
                targets: ['.blurbBody'],
                duration: 100,
                easing: 'easeInOutSine',
                scaleY: 1,
                loop: false,
                opacity: 0.3,
            })

            animeLib({
                targets: ['.hamburger'],
                duration: 500,
                translateX: 250,
                easing: 'easeInSine'
            })

            animeLib({
                targets: '.hamburgerMenu',
                easing: 'easeInOutSine',
                opacity: 1,
                duration: 500,
                loop: false,
                translateX: -20,
                // translateY: -20,
            })

            animeLib({
                targets: '.hamburgerClose',
                duration: 500,
                easing: 'easeInOutSine',
                opacity: 1,
                // scale: 0.5,
                loop: false,
            }, '-=500')
}
function closeHamburger() {
            $('body').unbind('touchmove');
            $('body').removeClass('stop-scrolling')
            $('.hamburgerMenu ').removeClass('higher')

            animeLib({
                targets: ['.blurbBody'],
                duration: 100,
                easing: 'easeInOutSine',
                scaleY: 1,
                loop: false,
                // direction: 'reverse',
                opacity: 0,
            })

            animeLib({
                targets: '.hamburgerMenu',
                easing: 'easeInOutSine',
                translateX: 20,
                // direction: 'reverse',
                // translateY: 20,
                duration: 500,
                opacity: 0,
                loop: false,
            })

            animeLib({
                targets: ['.hamburger'],
                duration: 500,
                translateX: -10,
                // direction: 'reverse',
            })

            animeLib({
                targets: '.hamburgerClose',
                easing: 'easeInOutQuint',
                duration: 200,
                opacity: 0,
            })
}

function contactMobileOpen(){
    animeLib({
        targets: ['.mobileContact'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 1,
        loop: false,
        // direction: 'reverse',
        opacity: 1,
    })
}
function contactMobileClose(){
    animeLib({
        targets: ['.mobileContact'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 0,
        loop: false,
        // direction: 'reverse',
        opacity: 0,
    })
}
if (document.querySelector('.mobileContact')) {
    $("html").css({
        'overflow': 'visible',
    })
} else {
    $("html").css({
        'overflow': 'hidden',
    })
}
