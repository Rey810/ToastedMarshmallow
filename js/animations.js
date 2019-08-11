// Animations scripts

// 1: Swup Js

//  Animation for flame from Anime library
function init(){
    // Executes only on service page
    // Animations for devices on various pages
    if (document.querySelector('.service')) { 
        console.log('We are on now on the service page');
        
        // Content for blurbs on service page
        var blurbs = {
            consulting: "Professional engineering design, complete simulations and system analysis.Reporting on findings in a structured manner.",
            diagrams: "Diagrams Text",
            plc: "",
            design: "",
            simulation: "",
            pcb: "",
            documents: "",
            wireframes: "Every decent website starts as a wireframe. We can turn your wireframes into a tangible site. Or we can whip up a wireframe for you.",
            data_visualisation: "People just love graphs, tables, and charts. But what's even better than that is data visualised in unique and interesting ways. Right?",
            development: "Websites, apps, software. You name it. We just love developing. Lets get that gem of an idea of yours into the virtual world!",       
            branding: "Branding pretty much dictates the way people see your business or company. We can help you make your brand memorable and unique. Inspired by you.",
            SEO: "We bet that 9 times out of 10 you don't look at the second page of search results. That's why SEO is so important. We can help you get your website to page one of Google.",
            animations: "Did someone say SVG? Oh boy are animations fun to do. We use all kinds of animating libraries to bring your web page to life.",
            responsive: "Chances are that most of the traffic on your website will be coming through mobile devices. These days, having a mobile friendly website is really important. That's why we design responsive websites",
            UI_design: "We love clean, intuitive interfaces. We design our UIs for an enjoyable user experience",
            android: "Yes, we can do android apps. You got an idea?",
            iOS: "We do iOS apps too. What's your vision?",
            windows: "We",
            databases: "",
            deployment: "",
            device_integration: "",
            cloud: ""     
        }

        

        
        
        // adds functionality for all buttons on individual pages
        $(".technicalInfo a").each( function(){
            this.addEventListener('click', function (event) {
                var searchTerm = $(this).html().toString();
                var searchTermStrip = searchTerm.replace(' ','_');
                console.log(searchTerm);
                console.log(searchTermStrip);
                $('.blurb').css('background', $(this).css("color"));
                $('.blurbHead').html($(this).html());
                $('.blurbContent').html(blurbs[searchTermStrip]);
                technicalInfoOpen();
              })
         })
        



           

    }
    



   
    if (document.querySelector('.logo')) {
        var animationFlame = animeLib({
            targets: ['feTurbulence', 'feDisplacementMap'],
            baseFrequency: "0.08",
            scale: 20,
            numOctaves: 1,
            easing: 'easeInOutSine',
            duration: 8000,
            loop: true,
            direction: 'alternate',
            delay: 2500,
        });

        var animationFlameShadow = animeLib({
            targets: ['.z'],
            opacity: '0.1',
            easing: 'easeInOutSine',
            duration: 1500,
            loop: true,
            direction: 'alternate',
            // delay: 3000,
        });


        animationFlame.restart();


        var animationBounce = animeLib({
            targets: ['.a'],
            translateY: '-=20',
            duration: 1500,
            direction: 'alternate',
            easing: 'easeInOutSine',
            loop: true
        })
    }



var animationLinksWatcher = animeLib({
    targets: ['.linksWatcher'],
    duration: 800,
    easing: 'easeInOutSine',
    loop: true,
    translateX: '5vw',
    scaleY: [{
            value: 1,
            easing: 'easeOutExpo'
        },
        {
            value: 0.7
        },
        // { value: 1 },
        {
            value: 0.7
        },
        {
            value: 1
        },
    ],
    // height: '2px',
    // width: '20px',
    // scaleX: 1.5,
    direction: 'alternate',

})

var animationArrowSM = animeLib({
    targets: ['.arrow-sm'],
    duration: 1000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    stroke: '#4A3655',
    // scale: 0.5
})
var animationArrowLG = animeLib({
    targets: ['.arrow-lg'],
    duration: 1000,
    easing: 'easeInOutSine',
    loop: true,
    direction: 'alternate',
    stroke: '#F75965',
    // scale: 0.5
})

var animationTextWatcher = animeLib({
    targets: ['.textWatcher'],
    duration: 1500,
    easing: 'easeInOutSine',
    loop: true,
    translateX: '16vw',
    // height: '2px',
    // width: '20px',
    // scaleX: 1.5,
    direction: 'alternate',
})
var animationWatcher = animeLib({
    targets: ['.watcher'],
    duration: 1000,
    easing: 'easeInOutSine',
    loop: true,
    translateX: '42vw',
    // height: '2px',
    // width: '20px',
    // scaleX: 1.5,
    direction: 'alternate',
})








// document.addEventListener('swup:contentReplaced', init);


// Us page animations
// Function for smooth scroll
if (document.querySelector('.us')) { 
    var myPath = animeLib.path('.bounce path');

    animeLib({
        targets: '.tumbler',
        translateX: myPath('x'),
        translateY: myPath('y'),
        rotate: '1500deg',
        easing: 'linear',
        duration: 3000,
        // scale: (3),
        loop: true,
    });

    // Function for image changes

    var images = new Array('./assets/engineers.png', './assets/thinkers.png', './assets/developers.png');
    var index = 1;

    function rotateImage() {
        $('.imgChangeUs').fadeOut('fast', function () {
            $(this).attr('src', images[index]);

            $(this).fadeIn('fast', function () {
                if (index == images.length - 1) {
                    index = 0;
                }
                else {
                    index++;
                }
            });
        });
    }

    $(document).ready(function () {
        setInterval(rotateImage, 5000);
    });

    animeLib({
        targets: ['.usBGImg'],
        duration: 100000,
        translateX: 300,
        translateY: -150,
        loop: true,
        direction: 'alternate'
    })

    
    // window.onwheel = preventDefault;
    $(window).on('wheel', function (event) {
        // console.log(window.scrollY);
        var $page = Math.floor(window.scrollY / window.innerHeight);
        
        if ($page == 3) {
            var $horizontalPage = (Math.floor(window.scrollX / window.innerWidth));
            if (event.originalEvent.deltaY > 0) {
                // wheeled down
                console.log($horizontalPage);
                $('html').animate({
                    scrollLeft: ($horizontalPage+1) * window.innerWidth,

                }, { easing: "swing", duration: 5 })
            } else {
                $('html').animate({
                    scrollLeft: ($horizontalPage-1) * window.innerWidth
                }, { easing: "swing", duration: 5 })
            }

        }
    })} else {
$(window).on('wheel', function (event) {
    // console.log(window.scrollY);
    var $page = Math.floor(window.scrollY / window.innerHeight);
    // console.log($page);
    if (event.originalEvent.deltaY < 0) {
        // wheeled up
        $('html').animate({
            scrollTop: ($page-1) * window.innerHeight,
            scrollLeft: 0
        }, { easing: "swing", duration: 5 })
    }
    else {
        // wheeled down
        $('html').animate({
            scrollTop: ($page+1) * window.innerHeight,
            scrollLeft: 0
        }, { easing: "swing", duration: 40 })
    }
})
}
 // function for text typeWriter
 var TxtType = function (el, toRotate, period) {
     this.toRotate = toRotate;
     this.el = el;
     this.loopNum = 0;
     this.period = parseInt(period, 10) || 2000;
     this.txt = '';
     this.tick();
     this.isDeleting = false;
 };

 TxtType.prototype.tick = function () {
     var i = this.loopNum % this.toRotate.length;
     var fullTxt = this.toRotate[i];

     if (this.isDeleting) {
         this.txt = fullTxt.substring(0, this.txt.length - 1);
     } else {
         this.txt = fullTxt.substring(0, this.txt.length + 1);
     }

     this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

     var that = this;
     var delta = 200 - Math.random() * 100;

     if (this.isDeleting) {
         delta /= 2;
     }

     if (!this.isDeleting && this.txt === fullTxt) {
         delta = this.period;
         this.isDeleting = true;
     } else if (this.isDeleting && this.txt === '') {
         this.isDeleting = false;
         this.loopNum++;
         delta = 500;
     }

     setTimeout(function () {
         that.tick();
     }, delta);
 };
 $(document).ready(function () {
     var elements = document.getElementsByClassName('typewrite');
     for (var i = 0; i < elements.length; i++) {
         var toRotate = elements[i].getAttribute('data-type');
         var period = elements[i].getAttribute('data-period');
         if (toRotate) {
             new TxtType(elements[i], JSON.parse(toRotate), period);
         }
     }
     // INJECT CSS
     var css = document.createElement("style");
     css.type = "text/css";
     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
     document.body.appendChild(css);
 });

    // Code for escape svg button 
        // animeLib({
        //     targets: ['.extra'],
        //     duration: 1500,
        //     easing: 'easeInSine',
        //     stroke: "#F75965",
        //     opacity: 1,
        //     direction: 'alternate',
        //     // translateX: 2,
        //     loop: true,
        // })

        // animeLib({
        //     targets: ['.e','.x'],
        //     duration: 1500,
        //     easing: 'easeInSine',
        //     stroke: "#4A3655",
        //     direction: 'alternate',
        //     // translateX: 2,
        //     loop: true,
        // })

}

function contactOpen() {
    animeLib({
        targets: ['.contactPage'],
        duration: 300,
        easing: 'easeInOutSine',
        // opacity: 1,
        scaleY: 1,
        loop: false,
    })
    animeLib({
        targets: ['.links','.contact'],
        duration: 300,
        easing: 'easeInOutSine',
        opacity: 0,
        loop: false,
    })
    animeLib({
        targets: ['.blurbBody'],
        duration: 100,
        easing: 'easeInOutSine',
        scaleY: 1,
        loop: false,
        opacity: 0.3,
    })
}

function contactClose() {
    animeLib({
        targets: ['.contactPage'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 0,
        // opacity: 0,s
        loop: false,
    })
    animeLib({
        targets: ['.links', '.contact'],
        duration: 300,
        easing: 'easeInOutSine',
        opacity: 1,
        loop: false,
    })
    animeLib({
        targets: ['.blurbBody'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 0,
        loop: false,
        opacity: 0,
    })
}


function technicalInfoOpen() {
    animeLib({
        targets: ['.blurb'],
        duration: 200,
        easing: 'easeInOutSine',
        // opacity: 1,
        scaleY: 1,
        loop: false,
        // background: 'this.background',
    })
    animeLib({
        targets: ['.blurbBody'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 1,
        loop: false,
        opacity: 0.3
    })
    animeLib({
        easing: 'easeInOutSine',
        targets: ['svg','a','img','.textHead','.links','.contact','p','.textWatcher'],
        filter: 'blur(5px)',
        duration: 100,
    })
}
function technicalInfoClose() {
    animeLib({
        targets: ['.blurb'],
        duration: 200,
        easing: 'easeInOutSine',
        scaleY: 0,
        // scaleX: 0,
        loop: false,
    })
    animeLib({
        targets: ['.blurbBody'],
        duration: 300,
        easing: 'easeInOutSine',
        scaleY: 0,
        loop: false,
        opacity: 0,
    })
    animeLib({
        easing: 'easeInOutSine',
        targets: ['svg','a','img','.textHead','.links','.contact','p','.textWatcher'],
        filter: 'blur(0px)',
        duration: 100,
    })
}

function scrollToTop(){
    $('html').animate({
        scrollTop: 0
    }, 500);
}

