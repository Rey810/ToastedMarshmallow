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
            diagrams: "Our engineers always create professional content when executing a project or delivering a service. These include electrical diagrams, activity diagrams, state machine diagrams, use-case diagrams and class descriptions along with many other applicable engineering documents. ",
            plc: "With our experience in machine and system design, we are entirely at ease with IEC 61131-3 machine-layer development. Our engineers are trained and proficient in integrated development environments such as TIA Portal, Codesys and many others.",
            design: "Our engineering team employs a meticulous approach to designing robust and reliable systems. Allow us to walk you through the design process of bringing your ideas to life. ",
            electrical_simulations: "We don’t ever build a device without understanding exactly how it will perform. Neither should you. Our engineers are trained to provide detailed thermal and electronic simulations for any projects they are working on",
            documents: "The worst part of engineering for any engineer is writing the user manual. However, the first thing you (should) do when you buy any product/service is read the user manual. Our team can execute this work for you in a professionally aesthetic manner.",
            wireframes: "Every decent website starts as a wireframe. We can turn your wireframes into a tangible site. Or we can whip up a wireframe for you.",
            data_visualisation: "Your data adds value to your company. We believe that displaying this data in a visually appealing manner can assist you in growing your brand. Our team has the toolbox to easily implement beautiful data visualisations on your websites. ",
            branding: "Our web developers love tackling an aesthetic challenge. They’re so good that they can actually put together a very compelling theme and feel for your website. So if you want us to do your branding, we can.",
            animations: "We have seen that purely illustrating a concept through a short animation is very effective on a webpage. These animations ease the understanding of your products and turns potential clients into buying customers. We can offer these animations to further enhance your webpages.",
            responsive_design: "A web page needs to support many device sizes (phone, tablet, PC, etc.) and needs to look good doing so. Our web developers get that and they use complex media queries and web-specific design techniques to ensure that your website never looks tawdry. ",
            deployment: "Deployment is not just setting up the hosting and domains. We also implement a lot of backend code and security measures. Not to mention all of the search engine optimization (SEO) we can do for you.",
            UIUX: "We love clean, intuitive interfaces. We design our UIs for an enjoyable user experience",
            mobile: "To provide cross-platform applications our team utilises the Microsoft Xamarin platform. This gives our mobile applications a native and natural experience for either Android or iOS.",
            desktop: "Desktop OS’s are not going out of fashion. Sometimes you need a PC application and we get that. We are capable of developing Windows applications using the newer .NET CORE techniques as well as the trusted .NET libraries. ",
            databases: "Data stores used to be limited to relational databases (RDB). We can do that, but that’s not all. We can also help you realise your goals using modern data stores such as graph stores, document stores and many others.",
            hardware_integration: "Sometimes applications require a significant hardware component. Maybe it’s a system that needs to communicate with a PC, or perhaps just a smart home device. Our engineers effectively bridge the gap between abstract software and actual hardware.",
        }

        

        
        
        // adds functionality for all buttons on individual pages
        $(".technicalInfo a").each( function(){
            this.addEventListener('click', function (event) {
                var searchTerm = $(this).html().toString();
                var searchTermStrip = searchTerm.replace(' ', '_').replace('/', '');
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


// Function for smooth scroll
// $(window).on('wheel', function (event) {
//     // console.log(window.scrollY);
//     var $page = Math.floor(window.scrollY / window.innerHeight);
//     // console.log($page);
//     if (event.originalEvent.deltaY < 0) {
//         // wheeled up
//         window.scrollBy(0, -window.innerHeight);
//         // $('html').animate({
//         //     scrollTop: ($page-1) * window.innerHeight,
//         //     scrollLeft: 0
//         // }, { easing: "swing", duration: 5 })
//     }
//     else {
//         // wheeled down
//         window.scrollBy(0, window.innerHeight);
//         // $('html').animate({
//         //     scrollTop: ($page+1) * window.innerHeight,
//         //     scrollLeft: 0
//         // }, { easing: "swing", duration: 40 })
//     }
// })

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
function scrollDown(){
    window.scrollTo(0, 2 * window.innerHeight);
}

