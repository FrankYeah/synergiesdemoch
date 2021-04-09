(function($){
    $.fn.scrollingTo = function( opts ) {
        var defaults = {
            animationTime : 1000,
            easing : '',
            callbackBeforeTransition : function(){},
            callbackAfterTransition : function(){}
        };

        var config = $.extend( {}, defaults, opts );

        $(this).click(function(e){
            var eventVal = e;
            e.preventDefault();

            var $section = $(document).find( $(this).data('section') );
            if ( $section.length < 1 ) {
                return false;
            };

            if ( $('html, body').is(':animated') ) {
                $('html, body').stop( true, true );
            };

            var scrollPos = $section.offset().top;

            if ( $(window).scrollTop() == scrollPos ) {
                return false;
            };

            config.callbackBeforeTransition(eventVal, $section);

            $('html, body').animate({
                'scrollTop' : (scrollPos+'px' )
            }, config.animationTime, config.easing, function(){
                config.callbackAfterTransition(eventVal, $section);
            });
        });
    };
}(jQuery));



jQuery(document).ready(function(){
	"use strict";
	new WOW().init();


(function(){
 jQuery('.smooth-scroll').scrollingTo();
}());

});




$(document).ready(function(){
    // calendly
    var calendlyStyle = document.createElement('link');
    calendlyStyle.setAttribute('href','https://assets.calendly.com/assets/external/widget.css');
    calendlyStyle.setAttribute('rel','stylesheet');
    document.body.appendChild(calendlyStyle);

    var calendlyScript = document.createElement('script');
    calendlyScript.setAttribute('src','https://assets.calendly.com/assets/external/widget.js');
    calendlyScript.setAttribute('type','text/javascript');
    document.body.appendChild(calendlyScript);

    function isCalendlyEvent(eventName) {
        return eventName && eventName.indexOf('calendly') === 0;
    };
      
    // get current page info
    var currentPageTitle = document.title;
    var currentFileName = location.pathname.split('/')[1];
    var gaTrackingPages = ['schedule.html'];
    

    // listen to message sent by calendly and send GA event
    $(window).on('message', function(e) {
        var eventName = e.originalEvent.data.event;
        if (!isCalendlyEvent(eventName)) return;
        
        var eventType = eventName.split('.')[1];

        switch (eventType) {
            case 'event_type_viewed': 
                if (gaTrackingPages.includes(currentFileName)) break
                ga('send', 'event', 'Schedule Demo', 'Open Calendly', currentPageTitle, 1);
                break;
            case 'date_and_time_selected': 
                ga('send', 'event', 'Schedule Demo', 'Date & Time Selected', currentPageTitle, 1);
                break;
            case 'event_scheduled': 
                ga('send', 'event', 'Schedule Demo', 'Meeting Booked', currentPageTitle, 1);
                break;
        }
    })

    // status for scroll depth tracking
    var solutionIsInView = false;
    var caseIsInView = false;

    // send GA event when page loaded
    if (currentFileName === 'new-sc.html') ga('send', 'event', 'Scroll Depth', 'Page Loaded', currentPageTitle, 1, {'nonInteraction': true});

    function trackScrollDepth() {
        var viewportBottom = $(window).innerHeight() + $(window).scrollTop() ;
        var solutionSection = $('#sc-solutions').offset().top;
        var caseSection = $('#customer-case').offset().top;

        // send GA event when scroll to solution section
        if (viewportBottom > solutionSection && !solutionIsInView) {
            ga('send', 'event', 'Scroll Depth', 'Solution Section', currentPageTitle, 1);
            solutionIsInView = true;
        }
        // send GA event when scroll to case study section
        if (viewportBottom > caseSection && !caseIsInView) {
            ga('send', 'event', 'Scroll Depth', 'Case Study Section', currentPageTitle, 1);
            caseIsInView = true;
        }
    }

    $(window).scroll(function () {
        // track scroll depth for GA
        if (currentFileName === 'new-sc.html' && (!solutionIsInView || !caseIsInView)) trackScrollDepth();        

        // navbar animation
        if ($(window).scrollTop() > 5) {
            $(".navbar-brand a").css("color","#fff");
            $("#top-bar").removeClass("animated-header");
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#top-bar").addClass("animated-header");
        }
    });

    $("#clients-logo").owlCarousel({
 
        itemsCustom : false,
        pagination : false,
        items : 5,
        autoplay: true,

    })

    
    $(document).on('click', '.booking-btn', function (event) {
        event.preventDefault();
        // create smooth scroll animation
        $('html, body').animate({
            scrollTop: $(event.target.hash).offset().top
        }, 500);

        // send GA event when user tries to book a date for demo
        ga('send', 'event', 'Schedule Demo', 'Open Calendly', currentPageTitle, 1);
    });
});



// fancybox
$(".fancybox").fancybox({
    padding: 0,

    openEffect : 'elastic',
    openSpeed  : 450,

    closeEffect : 'elastic',
    closeSpeed  : 350,

    closeClick : true,
    helpers : {
        title : { 
            type: 'inside' 
        },
        overlay : {
            css : {
                'background' : 'rgba(0,0,0,0.8)'
            }
        }
    }
});



// logo top

$(document).ready(function() {
    function replaceSVG(ele) {
        var $img = jQuery(ele);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    }
    replaceSVG($('#top-bar.navbar-fixed-top.animated-header .navbar-header .navbar-brand img'));
});


// News pagination
function switchPage(e) {

  var currentPage = e.value;
  var page1 = document.getElementById('page1');
  var page2 = document.getElementById('page2');
  var page3 = document.getElementById('page3');
  var page4 = document.getElementById('page4');
  var page5 = document.getElementById('page5');
  var page6 = document.getElementById('page6');
  var page7 = document.getElementById('page7');
  var page8 = document.getElementById('page8');
  var page9 = document.getElementById('page9');
  var page1Btn = document.getElementById('page1Btn');
  var page2Btn = document.getElementById('page2Btn');
  var page3Btn = document.getElementById('page3Btn');
  var page4Btn = document.getElementById('page4Btn');
  var page5Btn = document.getElementById('page5Btn');
  var page6Btn = document.getElementById('page6Btn');
  var page7Btn = document.getElementById('page7Btn');
  var page8Btn = document.getElementById('page8Btn');
  var page9Btn = document.getElementById('page9Btn');
  
  if(currentPage === '1') {
    page1Btn.classList.add("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '2') {
    page1Btn.classList.remove("active");
    page2Btn.classList.add("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "block";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '3') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.add("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "block";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '4') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.add("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "block";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '5') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.add("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "block";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '6') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.add("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "block";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '7') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.add("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "block";
    page8.style.display = "none";
    page9.style.display = "none";
  } else if (currentPage === '8') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.add("active");
    page9Btn.classList.remove("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "block";
    page9.style.display = "none";
  } else if (currentPage === '9') {
    page1Btn.classList.remove("active");
    page2Btn.classList.remove("active");
    page3Btn.classList.remove("active");
    page4Btn.classList.remove("active");
    page5Btn.classList.remove("active");
    page6Btn.classList.remove("active");
    page7Btn.classList.remove("active");
    page8Btn.classList.remove("active");
    page9Btn.classList.add("active");
    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";
    page6.style.display = "none";
    page7.style.display = "none";
    page8.style.display = "none";
    page9.style.display = "block";
  }
  
  $('html,body').scrollTop(0);
}

// 切換語言版本，並導至當前頁面

var langData = {
    "zh-tw":{"link":"http://www.synergies.com.tw"},
    "zh-cn":{"link":"http://www.synergiesai.cn"},
    "en-us":{"link":"http://www.synergies.ai", "prevent":"/news.html"}
}
btns = $('.lang-btn')

btns.click(function (e) {
    e.preventDefault()
    var lang = this.dataset.lang
    var page = getPage()
    var dataObj = langData[lang]
    var href = dataObj.link
    if (dataObj.prevent !== page) {
        location.href = combineHref(href, page)   
    }else{
        location.href = href
    }
})

function getPage () {
    return location.pathname
}

function combineHref (root, page) {
    return root + page
}

// newsygps 動態改變文字

var sygpsFeatureClass = document.getElementsByClassName("feature-item-box");
var sygpsFeatureTextOne = sygpsFeatureClass[4].querySelectorAll(".feature-item-text")[0]
var sygpsFeatureTextTwo = sygpsFeatureClass[4].querySelectorAll(".feature-item-text")[1]

sygpsFeatureTextOne.textContent = '使用操作簡易'
sygpsFeatureTextTwo.textContent = '用你已經熟悉的搜尋方式，透過自然語言輸入，直覺的讓系統產生互動式圖表。使用者更可以自由改變圖表型態，選取或過濾欲呈現的資料集。'

sygpsFeatureClass[0].addEventListener('mouseover', function(){
    var tmpContent = sygpsFeatureClass[0].querySelectorAll(".feature-item-text")
    sygpsFeatureTextOne.textContent = tmpContent[0].textContent
    sygpsFeatureTextTwo.textContent = '用你已經熟悉的搜尋方式，透過自然語言輸入，直覺的讓系統產生互動式圖表。使用者更可以自由改變圖表型態，選取或過濾欲呈現的資料集。'
})

sygpsFeatureClass[1].addEventListener('mouseover', function(){
    var tmpContent = sygpsFeatureClass[1].querySelectorAll(".feature-item-text")
    sygpsFeatureTextOne.textContent = tmpContent[0].textContent
    sygpsFeatureTextTwo.textContent = '自動化數據處理和整合，在繪製可視化報表上更做到了自動化解析，並針對各類型資料組合完成數據模型的簡化，讓使用者迅速找到問題癥結。'
})

sygpsFeatureClass[2].addEventListener('mouseover', function(){
    var tmpContent = sygpsFeatureClass[2].querySelectorAll(".feature-item-text")
    sygpsFeatureTextOne.textContent = tmpContent[0].textContent
    sygpsFeatureTextTwo.textContent = '系統自動依據使用者的提問，參照過去問答經驗，透過機器學習訓練合適的演算法，產出分析和趨勢預測'
})

sygpsFeatureClass[3].addEventListener('mouseover', function(){
    var tmpContent = sygpsFeatureClass[3].querySelectorAll(".feature-item-text")
    sygpsFeatureTextOne.textContent = tmpContent[0].textContent
    sygpsFeatureTextTwo.textContent = '透過預處理優化並索引數據，再使用分散式技術快速運算和即時呈現分層管理，支援GB、TB量級數據，加速數據的演算與應用'
})
