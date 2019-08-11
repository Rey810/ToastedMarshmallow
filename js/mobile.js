// Scripts for mobile functions


// For mobile menu

function openHamburger() {
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
                translateX: 150,
            })

            animeLib({
                targets: '.hamburgerMenu',
                easing: 'easeInOutSine',
                opacity: 1,
                duration: 500,
                loop: false,
                translateX: -20,
                translateY: -20,
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
                translateX: 500,
                // direction: 'reverse',
                translateY: 200,
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

