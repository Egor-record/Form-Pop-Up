jQuery(document).ready(function() {

    $('.knop2').click(function() {
        $('.unclosed-modal').show();
        $('.catcher-form').addClass('animated fadeInUp');
    })

    function closePopUp() {
        $('.catcher-form').removeClass('fadeInUp').addClass('fadeOutDown');
        setTimeout(function() { 
             $('.unclosed-modal').hide();
             $('.catcher-form').removeClass('animated').removeClass('fadeOutDown')
         }, 450);
    }

    $('.close-button').click(function () {

       closePopUp();

    });

    jQuery(document).on('click', '.underlay', function() { 

        closePopUp();

    });

    $('#submit-pop_up').click(function() {

        if(document.getElementById('phone-pop_up').value.replace(/\s+/g, '').length) {

            jQuery.ajax({
                url:     '', 
                type:     "POST", 
                dataType: "html", 
                data: jQuery('#pop-up_form').serialize(), 
                success: function(response) {
                    $('.vc_column-inner--pop_up').html('<div class="wpb_wrapper"><h2 class="vc_custom_heading heading-left-black">Спасибо за Вашу заявку!</h2></div>');

                    setTimeout(function() { 
                        closePopUp();
                    }, 3000);

                } 
            });

        } else {

            $.fn.extend({
                animateCss: function (animationName) {
                var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
                $(this).addClass('animated ' + animationName).one(animationEnd, function() {
                        $(this).removeClass('animated ' + animationName);
                    });
                }
            });

            $('#phone-pop_up').css('border', '2px solid #EA0B0B').animateCss('shake');

            $('#phone-pop_up').click(function () {
                $(this).css('border', '2px solid #DDDDDD');
            });

        }

        return false;
    });

});