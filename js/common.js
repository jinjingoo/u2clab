$(function () {
    var Hbg = $('.nav-bg')
    var Sme = $('.submenu')
    var Nul = $('#H-wrap nav > ul')
    var V1 = $('#myVideo')
    $("#H-wrap nav").mouseenter(function () {
        $(Hbg).css("height","190px") 
        $(Sme).addClass('on')
        $(Nul).addClass('on')
    })
    $(Hbg).mouseleave(function () {
        $(Hbg).css("height","100px") 
        $(Sme).removeClass('on')
        $(Nul).removeClass('on')
    })
    var count = 1
    $(`.video-text${count}`).css('opacity','0')
    $(`#myVideo${count-1}`).css('opacity','0')
setInterval(function () {
    count += 1;
    $(`#myVideo${count-1}`).animate({opacity:0})
    $(`#myVideo${count}`).animate({opacity:1})
    $(`.video-text${count}`).animate({opacity:0})
    $(`.video-text${count+1}`).animate({opacity:1})
    if (count > 1) {
        $(`#myVideo${count-2}`).animate({opacity:1})
        $(`#myVideo${count-1}`).animate({opacity:0})
        $(`.video-text${count}`).animate({opacity:0})
        $(`.video-text${count-1}`).animate({opacity:1})
        count = 0
    }

},7900)

$('.cop').mouseenter(function () {
    $(this).addClass('on')
    if ($(this).hasClass('cop1')) {
        $('.cop2').removeClass('on')
    }else if($(this).hasClass('cop2')){
        $('.cop1').removeClass('on')
    }
})


var elem = $(".table-right p")
var content = elem.html()
var contentLeng = content.length
var showText = 30
var changeHtml = ""
var lessText = content.substr(0, showText);
if(showText < contentLeng) {
    changeHtml =
    lessText +
    "<span>...</span>";
    elem.html(changeHtml)}

    var wHeight = $(window).height();
    $(window).scroll(function () {
        var thisScrollTop = $(this).scrollTop()
    $('div').each(function(){
        var thisOffset = $(this).offset();
        
        if (thisOffset.top <= thisScrollTop + wHeight && thisScrollTop <= thisOffset.top + wHeight) {
            $(this).addClass('active')
        }
        
    })
    })

    $(".goToTop").click(function () {
        $("html,body").animate({scrollTop: 0},1500)
    })

    $(window).scroll(function () {
        $(this).scrollTop() > 0 ? $('.goToTop').removeClass('on') : $('.goToTop').addClass('on')
    })

    $(".family-site").click(function(){
        var fam = $(".family")
        if(fam.hasClass("on")){
        fam.removeClass("on")} else{
            fam.addClass("on")
        }
    })


// 카운트 영역
        const $counters = $(".count");
        const exposurePercentage = 100; 
        const duration = 3000; 
        const addCommas = true; 
        function updateCounter($el, start, end) {
            let startTime;
            function animateCounter(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = (timestamp - startTime) / duration;
                const current = Math.round(start + progress * (end - start));
                const formattedNumber = addCommas ? current.toLocaleString() : current;
                $el.text(formattedNumber);
                    if (progress < 1) {
                    requestAnimationFrame(animateCounter);
                } else {
                    $el.text(addCommas ? end.toLocaleString() : end);
                }
            }
            requestAnimationFrame(animateCounter);
        }
        $(window).on('scroll', function() {
            
            $counters.each(function() {
                const $el = $(this);
                
                if (!$el.data('scrolled')) {
                    
                    const rect = $el[0].getBoundingClientRect();
                    const winHeight = window.innerHeight;
                    const contentHeight = rect.bottom - rect.top;
                    
                    
                    if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
                        const start = parseInt($el.data("start"));
                        const end = parseInt($el.data("end"));
                        
                        updateCounter($el, start, end);
                        $el.data('scrolled', true);
                    }
                }
            });
        }).scroll();

// 마우스 영역
        $('#Trial .description a').mousemove(function (e) {
            var mouseX = e.clientX;
            var mouseY = e.clientY;
          $(".circle").css({left: mouseX, top: mouseY})
          $('#Trial .description a').mouseenter(function () {
            $(".circle").addClass('on')
            $(this).addClass('on')
          })
        })
        $('#Trial .description .desBg').mouseleave(function () {
          $(".circle").removeClass('on')
          $(this).removeClass('on')
        })

})