$(window).scroll(function () {
    var Persentag = {
        0: {
            title: "HTML5",
            value: "95 5"
        },
        1: {
            title: "CSS3",
            value: "85 15"
        },
        2: {
            title: "JavaScript / jQuerry",
            value: "75 25"
        },

    }

    function come(elem) {
        var docViewTop = $(window).scrollTop(),
            docViewBottom = docViewTop + $(window).height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).height();
        
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }
    
    if (come('.donut-segment')) {
        setTimeout(function() {
            $('.donut-segment').each(function (index, element) {
                $(this).css("stroke-dasharray", Persentag[index].value);
            });
        }, 200);
    }
});