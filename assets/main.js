$(window).on('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var scopeIfMultiple = (scrollPosition % 600);
    var triggerOne = 100;
    var triggerTwo = 200;
    var triggerThree = 300;
    var triggerFour = 400;
    var triggerFive = 500;

    if(scrollPosition != 0) {
        $(".baseline").addClass("hidden");
    }

    if(scrollPosition == 0) {
        $(".baseline").removeClass("hidden");
    }

    // console.log(scopeIfMultiple);

    if(scopeIfMultiple < triggerOne) {
        $(".logo").css('display', 'none');
        $(".logo-one").css('display', 'block');
    }

    if((scopeIfMultiple > triggerOne) && (scopeIfMultiple < triggerTwo)) {
        $(".logo").css('display', 'none');
        $(".logo-two").css('display', 'block');
    }

    if((scopeIfMultiple > triggerTwo) && (scopeIfMultiple < triggerThree)) {
        $(".logo").css('display', 'none');
        $(".logo-three").css('display', 'block');
    }

    if((scopeIfMultiple > triggerThree) && (scopeIfMultiple < triggerFour)) {
        $(".logo").css('display', 'none');
        $(".logo-four").css('display', 'block');
    }

    if((scopeIfMultiple > triggerFour) && (scopeIfMultiple < triggerFive)) {
        $(".logo").css('display', 'none');
        $(".logo-five").css('display', 'block');
    }

    if(scopeIfMultiple > triggerFive) {
        $(".logo").css('display', 'none');
        $(".logo-six").css('display', 'block');
    }
});
