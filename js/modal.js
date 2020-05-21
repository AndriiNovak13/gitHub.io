$(function(){

    
    

      //modal
    const modalCall = $('[data-modal]');
    
    modalCall.on('click', function(event){
        event.preventDefault(); 

        let $this = $(this);
        let modalId=  $this.data('modal');
        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        $('.modal__slaider').slick('setPosition');

        $(modalId).find(".modal__port").css({
            animation: "anim-mod .3s linear 1"
        });
    });

    //close modal
    const modalClose =$('[data-close]');
    modalClose.on('click',function(event){
        event.preventDefault(); 
        let $thisClose = $(this);
        let modalParent = $thisClose.parents('.modal');
        // modalParent.removeClass('show');
        // $("body").removeClass('no-scroll');

        $(modalParent).find(".modal__port").css({
            animation: "anim-mod-close .4s linear 1"
        });

        setTimeout(function() {          
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    })

    //close anywhere
    $('.modal').on('click',function(event){
        // $(this).removeClass('show');
        // $('body').removeClass('no-scroll');
        let $this = $(this);
        $this.find(".modal__port").css({
            animation: "anim-mod-close .4s linear 1"
        });

        setTimeout(function() {          
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });

    $(".modal__port").on('click',function(event){
        event.stopPropagation();
    });

    $('.modal__slaider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
      });

});