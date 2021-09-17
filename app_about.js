$( document ).ready(function() {

    function validateEmail(email, type) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!regex.test(email)) {
            if(type === 'hero'){
                $('#hero-content-block .error').show();
            } else if (type === 'footer'){
                $('#footer .error').show();
            } else {
                $('.modal .error').show();
            }
        }
        return regex.test(email);
    }

    function resetEmailField() {
        $('#emailAddressFromHeroBlock').val('')
        $('#emailAddressFromFooter').val('')
        $('#emailAddressFromModal').val('')
    }

    function joinNow(emailAddress, type) {
        if(validateEmail(emailAddress, type)) {
            console.log('isValid: ', true)
            $.ajax({
                method:'POST',
                data: {email_address: emailAddress},
                url:'/subscribe',
                complete: function (response) {
                },
                success: function () {
                    if(type === 'hero'){
                        $('#hero-content-block .input-form-block').css({display: 'none'});
                        $('#hero-content-block .success-msg').css({display: 'inline-block'});
                        $('#hero-content-block .error-msg').css({display: 'none'});
                    } else if (type === 'footer'){

                        $('#footer .input-form-block').css({display: 'none'});
                        $('#footer .success-msg').css({display: 'inline-block'});
                        $('#footer .error-msg').css({display: 'none'});

                    } else {
                        $('.modal .input-form-block').css({display: 'none'});
                        $('.modal .success-msg').css({display: 'inline-block'});
                        $('.modal .error-msg').css({display: 'none'});
                    }
                    resetEmailField()
                },
                error: function () {
                    if(type === 'hero'){
                        $('#hero-content-block .input-form-block').css({display: 'none'});
                        $('#hero-content-block .success-msg').css({display: 'none'});
                        $('#hero-content-block .error-msg').css({display: 'inline-block'});
                    } else if (type === 'footer'){

                        $('#footer .input-form-block').css({display: 'none'});
                        $('#footer .success-msg').css({display: 'none'});
                        $('#footer .error-msg').css({display: 'inline-block'});

                    } else {
                        $('.modal .input-form-block').css({display: 'none'});
                        $('.modal .success-msg').css({display: 'none'});
                        $('.modal .error-msg').css({display: 'inline-block'});
                    }
                    resetEmailField()
                },
            });
            return false;
        }
    }

    // email submissions
    $("#heroJoinNow").click(function() {
        joinNow($('#emailAddressFromHeroBlock').val(), 'hero')
    });
    $("#footerJoinNow").click(function() {
        joinNow($('#emailAddressFromFooter').val(), 'footer')
    });
    $("#modalJoinNow" ).click(function() {
        joinNow($('#emailAddressFromModal').val(), 'modal')
    });

    var windowSize;
    function displayWindowSize() {
        windowSize = document.documentElement.clientWidth;
        // console.log("windowSize: ", windowSize)
    }

    let progressBarHandler = () => {

        const windowBottom = ($(window).scrollTop() + $(window).height())
        const footerBlock = $('.footer-block');
        const footerBlockTop = footerBlock.offset().top;

        const footer = $('#footer');
        const footerTop = footer.offset().top;

        if(windowSize < 767){
            if ((windowBottom > footerTop)) {
                $('#hero-btn-wrapper').hide();
            } else {
                $('#hero-btn-wrapper').show();
            }
        }
    }

    // window.addEventListener("resize load", displayWindowSize);
    $(window).on("load resize",function(e){
        displayWindowSize()
    });

    // Calling the function for the first time
    displayWindowSize();

    window.addEventListener("scroll", progressBarHandler);
});