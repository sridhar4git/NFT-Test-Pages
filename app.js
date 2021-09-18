$('html,body').animate({ scrollTop: 0 }, 'fast');
$('body').css({overflow: 'hidden'})

$( document ).ready(function() {
    setTimeout(function(){

        var promise = document.querySelector('video').play();

        if (promise !== undefined) {
            promise.catch(error => {
                // Auto-play was prevented
                // Show a UI element to let the user manually start playback
                console.log('error block');
                document.querySelector('video').play();
            }).then(() => {
                // Auto-play started
                console.log('then block');
                document.querySelector('video').play();
            });
        }
        $('.loading-screen').fadeOut(3000);
        $('body').css({overflow: 'auto'})
        $('.nft').fadeTo( "slow" , 1, function() {});

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

        /*var email = '';
        $('form input[type="email"]').blur(function () {
            email = $(this).val();
            console.log('email: ', email);
            if(email !== ''){
                var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;
                if (re.test(email)) {
                    $('.msg').hide();
                    // $('.success').show();
                } else {
                    $('.msg').hide();
                    $('.error').show();
                }
            }

        });*/

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

        // logic to navigate to the next section
        $( "#learn-more-block" ).click(function() {
            $('html,body').animate({
                scrollTop: windowSize > 767 ? 1250 : 575
            }, 1000);
        });

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

        var nftTextScrollVal = 0;
        var posterImgScrollVal = 0;
        var helmetImgScrollVal = 0

        var collectiblesTextScrollVal = 0;
        var giraffImgScrollVal = 0;
        var superBowlGronkImgScrollVal = 0

        var utilityTextScrollVal = 0;
        var sImgScrollVal = 0;
        var infinityImgScrollVal = 0

        let section2Motion1Counter = 1;
        let section2Motion1ScrollNFTDiff = 0;
        let section2Motion1ScrollPosterDiff = 0;
        let section2Motion1ScrollHelmetDiff = 0;

        let section2Motion2Counter = 1;
        let section2Motion2ScrollNFTDiff = 0;
        let section2Motion2ScrollPosterDiff = 0;
        let section2Motion2ScrollHelmetDiff = 0;

        let section3Motion1Counter = 1;
        let section3Motion1ScrollCollectiblesDiff = 0;
        let section3Motion1ScrollGiraffDiff = 0;
        let section3Motion1ScrollSuperBowlDiff = 0;

        let section3Motion2Counter = 1;
        let section3Motion2ScrollCollectiblesDiff = 0;
        let section3Motion2ScrollGiraffDiff = 0;
        let section3Motion2ScrollSuperBowlDiff = 0;

        let section4Motion1Counter = 1;
        let section4Motion1ScrollUtilityDiff = 0;
        let section4Motion1ScrollSImgDiff = 0;
        let section4Motion1ScrollInfinityDiff = 0;

        let section4Motion2Counter = 1;
        let section4Motion2ScrollUtilityDiff = 0;
        let section4Motion2ScrollSImgDiff = 0;
        let section4Motion2ScrollInfinityDiff = 0;

        let isIblockSet = false;
        let isUtilitySet = false;
        let utilityTextPosition = 0;

        let scrollProgress = 0;

        let progressBarHandler = () => {

            const totalScroll = document.documentElement.scrollTop;

            // progress bar logic
            const windowHeightVal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            scrollProgress = `${totalScroll / windowHeightVal}`;
            $('#progressBar').css({transform: `scale(${scrollProgress}, 1)`})

            const roadmapBlock = $('#roadmap');
            const roadmapBlockTop = roadmapBlock.offset().top;
            const totalScrollRoadmap = document.documentElement.scrollTop - (roadmapBlockTop - $('.footer').height());

            // progress bar logic
            const windowHeightValRoad = roadmapBlock.height() - document.documentElement.clientHeight;
            // scrollProgress = `${totalScrollRoadmap / windowHeightValRoad}`;

            const windowBottom = ($(window).scrollTop() + $(window).height())
            const footerBlock = $('.footer-block');
            const footerBlockTop = footerBlock.offset().top;

            const footer = $('#footer');
            const footerHeight = footer.height();
            const footerTop = footer.offset().top;
            const footerBottom = footerTop+footerHeight;

            // affix the progress bar to the bottom of the screen
            if ((windowBottom - 100 > roadmapBlockTop) && !(footerBlockTop < windowBottom)) {
                // $('#progressBarContainer').addClass('progress-affix');
            } else {
                // $('#progressBarContainer').removeClass('progress-affix');
            }

            if(windowSize < 767){
                if ((windowBottom > footerTop)) {
                    $('#hero-btn-wrapper').hide();
                } else {
                    $('#hero-btn-wrapper').show();
                }
            }

            if(windowSize > 767){
                // $('#progressBar').css({transform: `scale(${scrollProgress*2}, 1)`})
            } else {
                // $('#progressBar').css({transform: `scale(${scrollProgress*1.2}, 1)`})
            }

            // show the q3 content
            /*if(windowSize > 767 && (windowBottom - 500 > roadmapBlockTop)){
                $( ".roadmap-divider" ).fadeTo( "slow" , 1, function() {});
                $( ".q3-content" ).fadeTo( "slow" , 1, function() {});

                // show the q4 content
                if(scrollProgress*2 > 0.7){
                    $( ".q4-content" ).fadeTo( "slow" , 1, function() {});
                }
            }
            if(windowSize <= 767 && (windowBottom - 300 > roadmapBlockTop)){
                $( ".roadmap-divider" ).fadeTo( "slow" , 1, function() {});
                $( ".q3-content" ).fadeTo( "slow" , 1, function() {});

                // show the q4 content
                if(scrollProgress*1.5 > 1){
                    $( ".q4-content" ).fadeTo( "slow" , 1, function() {});
                }
            }*/



            // animations logic
            let scrollPercent = (totalScroll / ($("#scroll-block").height() + 6000 - window.innerWidth))*100
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            // setScroll(scroll);

            const heroBlock = $('#hero-block');

            const diamondVideoBlock = $('#diamond-video-block')[0];
            const diamondVideoBlockPosition = $('#diamond-video-block').position();


            const weAreFilled = $('#weAreFilled')[0];

            const weAreUnFilled = $('#weAreUnFilled');
            const weAreUnFilledPosition = $('#weAreUnFilled').position();
            const weAreUnFilledPositionWidth = $('#weAreUnFilled').width();
            const weAreUnFilledRightPos = weAreUnFilledPosition.left + weAreUnFilledPositionWidth;

            const invaluableText = $('#invaluable-text')[0];
            const heroContentBlock = $('#hero-content-block');

            const nftTextDiv = $('#nfts-text');
            const nftTextDivWidth = nftTextDiv.width();
            const nftTextDivPosition = nftTextDiv.position()
            const nftTextDivRightPos = nftTextDivPosition.left + nftTextDivWidth;

            const posterImgBlock = $('#poster-img-block');
            const posterImgBlockWidth = posterImgBlock.width();
            const posterImgBlockPosition = posterImgBlock.position();
            const posterImgBlockRightPos = posterImgBlockPosition.left + posterImgBlockWidth;

            const helmetImgBlock = $('#helmet-img-block');
            const helmetImgBlockWidth = helmetImgBlock.width();
            const helmetImgBlockPosition = helmetImgBlock.position();

            const collectiblesTextBlock = $('#collectibles-text');
            const collectiblesTextBlockWidth = collectiblesTextBlock.width();
            const collectiblesTextBlockPosition = collectiblesTextBlock.position();

            const giraffImgBlock = $('#giraff-img-block');
            const giraffImgBlockWidth = giraffImgBlock.width();
            const giraffImgBlockPosition = giraffImgBlock.position();

            const superBowlImgBlock = $('#gronk-img-block');
            const superBowlImgBlockWidth = superBowlImgBlock.width();
            const superBowlImgBlockPosition = superBowlImgBlock.position();


            const utilityTextBlock = $('#utility-text');
            const utilityTextBlockWidth = utilityTextBlock.width();
            const utilityTextBlockPosition = utilityTextBlock.position();

            const sImgBlock = $('#s-img-block');
            const sImgBlockWidth = sImgBlock.width();
            const sImgBlockPosition = sImgBlock.position();

            const infinityImgBlock = $('#infinity-img-block');
            const infinityImgBlockWidth = infinityImgBlock.width();
            const infinityImgBlockPosition = infinityImgBlock.position();

            const scrollBlock = $('#scroll-block');

            const iBlock = $('#i-block');
            const iBlockWidth = iBlock.width();
            const iBlockPosition = iBlock.position();
            const iBlockTop = iBlock.offset().top;

            const iContentBlock = $('#i-content-block');
            const iContentBlockWidth = iContentBlock.width();
            const iContentBlockPosition = iContentBlock.position();
            const iContentBlockTop = iContentBlock.offset().top;

            const iContentBlock1 = $('#i-content-block-1');
            const iContentBlock1Width = iContentBlock1.width();
            const iContentBlock1Position = iContentBlock1.position();
            const iContentBlock1Top = iContentBlock1.offset().top;

            const iContentBlock2 = $('#i-content-block-2');
            const iContentBlock2Width = iContentBlock2.width();
            const iContentBlock2Position = iContentBlock2.position();
            const iContentBlock2Top = iContentBlock2.offset().top;


            if(footerBottom+70 < windowBottom){
                console.log('bottom reached')
                // footer.css({position: 'fixed'})
                // footer.addClass( "footer-affix" );
                // $('body').css({overflowY: 'hidden'});

                let touchstartX = 0
                let touchendX = 0

                const footerB = document.getElementById('footer')

                function handleGesture() {
                    if (touchendX < touchstartX) {
                        console.log('swiped top!')
                        // $('body').css({overflowY: 'hidden'});
                        // footer.addClass( "footer-affix" );
                    }
                    if (touchendX > touchstartX) {
                        console.log('swiped bottom!')
                        // $('body').css({overflowY: 'auto'});
                        // footer.removeClass( "footer-affix" );
                    }
                }

                footerB.addEventListener('touchstart', e => {
                    touchstartX = e.changedTouches[0].screenY
                })

                footerB.addEventListener('touchend', e => {
                    touchendX = e.changedTouches[0].screenY
                    handleGesture()
                })

            }

            /*if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel'){
                var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
                x = touch.pageX;
                y = touch.pageY;
            } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave') {
                x = e.clientX;
                y = e.clientY;
            }*/

            const secondaryBlock = $('.secondary-block')

            // const nftsBlock = document.getElementById("nfts");
            // const nftsBlockTopPos = nftsBlock.offsetTop;

            /*const collectiblesBlock = document.getElementById("collectibles");
            const collectiblesBlockTopPos = collectiblesBlock.offsetTop;

            const utilityBlock = document.getElementById("utility");
            const utilityBlockTopPos = utilityBlock.offsetTop;

            const iBlock = document.getElementById("i-block");
            const iBlockTopPos = iBlock.offsetTop;

            const bannerBlock = document.getElementById("banner-block");
            const bannerBlockTopPos = bannerBlock.offsetTop;

            const roadmapBlock = document.getElementById("roadmap");
            const roadmapBlockTopPos = roadmapBlock.offsetTop;

            const footerBlock = document.getElementById("footer");
            const footerBlockTopPos = footerBlock.offsetTop;*/

            const opacitySpeed = 300;
            const diamondYSpeed = 1;
            const viewportWidth = $( window ).width();
            console.log('totalScroll: ', totalScroll);
            // console.log('viewportWidth: ', viewportWidth);
            // console.log('---------------');
            console.log("posterImgBlockRightPos --- ", posterImgBlockRightPos)

            if (totalScroll || totalScroll===0) {
                // heroBlock.style.opacity = (1 - (totalScroll/200))

                // to show hide the learn more
                if(totalScroll > 100) {
                    $('#learn-more-block').css({opacity: '0', transform: 'translate3d(-50%, 100px, 0)'})
                }

                if(totalScroll < 5) {
                    $('#learn-more-block').css({opacity: '1', transform: 'translate3d(-50%, 0, 0)'})
                    diamondVideoBlock.style.transform = 'translate3d(0, ' + 0 +'px, 0)';
                    weAreFilled.style.opacity = 1
                    invaluableText.style.opacity = 1
                    // heroContentBlock.style.opacity = 1
                    heroContentBlock.css({opacity: 1, pointerEvents: 'none'})
                } else {
                    diamondVideoBlock.style.transform = 'translate3d(0, ' + (1 - (totalScroll/diamondYSpeed)) +'px, 0';
                    weAreFilled.style.opacity = (1 - (totalScroll/opacitySpeed))
                    invaluableText.style.opacity = (1 - (totalScroll/opacitySpeed))
                    // heroContentBlock.style.opacity = (1 - (totalScroll/opacitySpeed))
                    heroContentBlock.css({opacity: (1 - (totalScroll/opacitySpeed)), pointerEvents: 'none'})




                    // change condition to check the i block top position with window bottom
                    // let isUtilityReached = ((utilityTextBlockPosition.left+utilityTextBlockWidth)>=weAreUnFilledRightPos );
                    //let isUtilityReached = ((utilityTextBlockPosition.left+utilityTextBlockWidth)>=weAreUnFilledRightPos );
                    /* let isIblockReached = iBlockTop <= (totalScroll+window.innerHeight);
                     if(!isIblockReached){*/

                    if(iBlockTop>(totalScroll+window.innerHeight)){
                        console.log("isIblockSet top-------- ",isIblockSet)
                        iBlock.css({top: 8000  + 'px'})
                        if(diamondVideoBlockPosition.top <= -300 && (weAreUnFilledRightPos > nftTextDivRightPos)) {
                            console.log('if')
                            console.log('weAreUnFilledRightPos: ', weAreUnFilledRightPos)
                            console.log('nftTextDivRightPos: ', nftTextDivRightPos)
                            console.log('nftTextDivWidth -- ', nftTextDivWidth)
                            if(section2Motion1Counter===1){
                                section2Motion1ScrollNFTDiff = scrollPercent*130;
                                section2Motion1ScrollPosterDiff = scrollPercent*45;
                                section2Motion1ScrollHelmetDiff = scrollPercent*130;
                            }
                            nftTextScrollVal = (-nftTextDivWidth - section2Motion1ScrollNFTDiff +(scrollPercent*130))

                            posterImgScrollVal = (posterImgBlockWidth+section2Motion1ScrollPosterDiff  - (scrollPercent*45))
                            helmetImgScrollVal = (helmetImgBlockWidth+section2Motion1ScrollHelmetDiff  - (scrollPercent*130))
                            console.log('nftTextScrollVal -- ', nftTextScrollVal)

                            nftTextDiv.css({ transform : 'translate3d(' + nftTextScrollVal +'px, 0, 0' });
                            posterImgBlock.css({ transform : 'translate3d(' + posterImgScrollVal +'px, 0, 0' });
                            helmetImgBlock.css({ transform : 'translate3d(' + helmetImgScrollVal +'px, 0, 0' });
                            section2Motion1Counter++
                        }else if(weAreUnFilledRightPos <= nftTextDivRightPos){
                            if(section2Motion2Counter===1){
                                section2Motion2ScrollNFTDiff = scrollPercent*120;
                                section2Motion2ScrollPosterDiff = scrollPercent*170;
                                section2Motion2ScrollHelmetDiff = scrollPercent*90;
                            }
                            let nftTextScrollMoreSpeedVal = (nftTextScrollVal - section2Motion2ScrollNFTDiff + (scrollPercent*120))
                            let posterImgScrollMoreSpeedVal = (posterImgScrollVal + section2Motion2ScrollPosterDiff - (scrollPercent*170))
                            let helmetImgScrollMoreSpeedVal = (helmetImgScrollVal +section2Motion2ScrollHelmetDiff - (scrollPercent*90))
                            nftTextDiv.css({ transform : 'translate3d(' + nftTextScrollMoreSpeedVal +'px, 0, 0' });
                            posterImgBlock.css({ transform : 'translate3d(' + posterImgScrollMoreSpeedVal +'px, 0, 0' });
                            helmetImgBlock.css({ transform : 'translate3d(' + helmetImgScrollMoreSpeedVal +'px, 0, 0' });
                            section2Motion2Counter++;
                            if(posterImgBlockRightPos>0){
                                section3Motion1Counter=1;
                                section3Motion2Counter = 1;
                            }

                            if(posterImgBlockRightPos <= 0 && (superBowlImgBlockPosition.left+superBowlImgBlockWidth)>weAreUnFilledRightPos) {
                                console.log("section3Motion1Counter")
                                if(section3Motion1Counter===1){
                                    section3Motion1ScrollCollectiblesDiff = scrollPercent*150;
                                    section3Motion1ScrollGiraffDiff = scrollPercent*130;
                                    section3Motion1ScrollSuperBowlDiff = scrollPercent*60;
                                }
                                collectiblesTextScrollVal = (-collectiblesTextBlockWidth - section3Motion1ScrollCollectiblesDiff +(scrollPercent*150))
                                giraffImgScrollVal = (giraffImgBlockWidth+section3Motion1ScrollGiraffDiff  - (scrollPercent*130))
                                superBowlGronkImgScrollVal = (superBowlImgBlockWidth+section3Motion1ScrollSuperBowlDiff  - (scrollPercent*60))


                                collectiblesTextBlock.css({ transform : 'translate3d(' + collectiblesTextScrollVal +'px, 0, 0' });
                                giraffImgBlock.css({ transform : 'translate3d(' + giraffImgScrollVal +'px, 0, 0' });
                                superBowlImgBlock.css({ transform : 'translate3d(' + superBowlGronkImgScrollVal +'px, 0, 0' });
                                section3Motion1Counter++
                            }else if(posterImgBlockRightPos <= 0 && (superBowlImgBlockPosition.left+superBowlImgBlockWidth)<=weAreUnFilledRightPos){

                                if(section3Motion2Counter===1){
                                    section3Motion2ScrollCollectiblesDiff = scrollPercent*300;
                                    section3Motion2ScrollGiraffDiff = scrollPercent*130;
                                    section3Motion2ScrollSuperBowlDiff = scrollPercent*260;
                                }
                                let collectiblesTextScrollMoreSpeedVal = (collectiblesTextScrollVal - section3Motion2ScrollCollectiblesDiff + (scrollPercent*300))
                                let giraffImgScrollMoreSpeedVal = (giraffImgScrollVal + section3Motion2ScrollGiraffDiff - (scrollPercent*130))
                                let superBowlGronkImgScrollMoreSpeedVal = (superBowlGronkImgScrollVal +section3Motion2ScrollSuperBowlDiff - (scrollPercent*260))
                                collectiblesTextBlock.css({ transform : 'translate3d(' + collectiblesTextScrollMoreSpeedVal +'px, 0, 0' });
                                giraffImgBlock.css({ transform : 'translate3d(' + giraffImgScrollMoreSpeedVal +'px, 0, 0' });
                                superBowlImgBlock.css({ transform : 'translate3d(' + superBowlGronkImgScrollMoreSpeedVal +'px, 0, 0' });
                                section3Motion2Counter++;
                                if(collectiblesTextBlockPosition.left<window.innerWidth){
                                    section4Motion1Counter=1;
                                    section4Motion2Counter=1;
                                }

                                if(collectiblesTextBlockPosition.left>=window.innerWidth && ((utilityTextBlockPosition.left+utilityTextBlockWidth)< weAreUnFilledRightPos || (isUtilitySet && iBlockTop>(totalScroll+window.innerHeight)))){
                                    heroBlock.css({transform: 'translate3d(0, ' + 0 +'px, 0' })
                                    console.log('reached1')
                                    console.log("scrollPercent 150-- ",scrollPercent*150)
                                    if(section4Motion1Counter===1){
                                        section4Motion1ScrollUtilityDiff = scrollPercent*150;
                                        section4Motion1ScrollSImgDiff = scrollPercent*60;
                                        section4Motion1ScrollInfinityDiff = scrollPercent*160;
                                    }
                                    if(isUtilitySet){
                                        //section4Motion1ScrollUtilityDiff = -471;
                                        isUtilitySet= false;
                                    }
                                    /*console.log("section4Motion1ScrollUtilityDiff -- ",section4Motion1ScrollUtilityDiff)
                                    console.log("scrollPercent -- ",scrollPercent)
                                    console.log("utilityTextBlockWidth -- ",utilityTextBlockWidth)*/
                                    utilityTextScrollVal = (-utilityTextBlockWidth - section4Motion1ScrollUtilityDiff +(scrollPercent*150))
                                    sImgScrollVal = (sImgBlockWidth+section4Motion1ScrollSImgDiff  - (scrollPercent*60))
                                    infinityImgScrollVal = (infinityImgBlockWidth+section4Motion1ScrollInfinityDiff  - (scrollPercent*160))
                                    //console.log("utilityTextScrollVal --- ",utilityTextScrollVal);
                                    utilityTextBlock.css({ transform : 'translate3d(' + utilityTextScrollVal +'px, 0, 0' });
                                    sImgBlock.css({ transform : 'translate3d(' + sImgScrollVal +'px, 0, 0' });
                                    infinityImgBlock.css({ transform : 'translate3d(' + infinityImgScrollVal +'px, 0, 0' });
                                    section4Motion1Counter++
                                    isIblockSet=false;
                                }else if(collectiblesTextBlockPosition.left>=window.innerWidth && (((utilityTextBlockPosition.left+utilityTextBlockWidth)>= weAreUnFilledRightPos) )){
                                    console.log("isIblockSet-------- ",isIblockSet)
                                    if(!isIblockSet){
                                        iBlock.css({top: totalScroll+window.innerHeight  + 'px'})
                                    }
                                    //utilityTextBlock.css({ transform : 'translateX(' + (weAreUnFilledRightPos - utilityTextBlockWidth+1) +'px)' });
                                    if(section4Motion2Counter===1){
                                        section4Motion2ScrollUtilityDiff = scrollPercent*10;
                                        section4Motion2ScrollSImgDiff = scrollPercent*10;
                                        section4Motion2ScrollInfinityDiff = scrollPercent*10;
                                    }
                                    let utilityTextScrollMoreSpeedVal = (utilityTextScrollVal - section4Motion2ScrollUtilityDiff + (scrollPercent*10))
                                    let sImgScrollMoreSpeedVal = (sImgScrollVal + section4Motion2ScrollSImgDiff - (scrollPercent*10))
                                    let infinityImgScrollMoreSpeedVal = (infinityImgScrollVal +section4Motion2ScrollInfinityDiff - (scrollPercent*10))
                                    utilityTextBlock.css({ transform : 'translate3d(' + utilityTextScrollMoreSpeedVal +'px, 0, 0' });
                                    sImgBlock.css({ transform : 'translate3d(' + sImgScrollMoreSpeedVal +'px, 0, 0' });
                                    infinityImgBlock.css({ transform : 'translate3d(' + infinityImgScrollMoreSpeedVal +'px, 0, 0' });
                                    section4Motion2Counter++;

                                    //weAreUnFilled.css({opacity: ((((iBlockTop-300)-totalScroll)/500))})
                                    /* if((iBlockTop<(totalScroll+window.innerHeight)) && (iBlockTop>=totalScroll)){
                                          iContentBlock1.css({ transform : 'translateX(' + (-iContentBlock1Width + (window.innerWidth/2) + ((((totalScroll)-iBlockTop)/2)*2)) +'px)' })
                                          iContentBlock2.css({ transform : 'translateX(' + (-iContentBlock2Width + (window.innerWidth/2) + ((((totalScroll)-iBlockTop)/1)*1.5)) +'px)' })
                                      }
      */


                                    console.log('reached2');
                                    //iBlock.css({top: totalScroll+window.innerHeight + 20 + 'px'})


                                    //heroBlock.css({transform: 'translateY(' + (iBlock.offset().top-(totalScroll+window.innerHeight)) +'px)' })
                                    isIblockSet= true;
                                    isUtilitySet = true;
                                    utilityTextPosition = utilityTextBlockPosition.left;
                                    //set the i block top 50px below the window bottom
                                    // infinityImgBlockTop.css({height: totalScroll+window.innerHeight + 20 + 'px'})
                                }
                            }
                        }else if(diamondVideoBlockPosition.top > -300){
                            section2Motion1Counter=1;
                            section2Motion2Counter = 1;
                        }
                        /*}else{
                            //make hero block relative or transform =Y
                            // set utility text right 1px less than we are unfilled right postion

                            if(isIblockSet){
                               // utilityTextBlock.css({ transform : 'translateX(' + ((weAreUnFilledRightPos -utilityTextBlockWidth) -0.2) +'px)' })
                                //heroBlock.css({top: (130) + 'px'})
                            } else {
                                //heroBlock.css({top: (130) + 'px'})
                            }
                            if(iBlockTop-50 <= totalScroll+window.innerHeight){
                                isIblockSet= false;
                            }

                        }*/
                    }else if(iBlockTop<=(totalScroll+window.innerHeight)){
                        console.log("isIblockSet bottom-------- ",isIblockSet)
                        isIblockSet= false;
                        heroBlock.css({transform: 'translate3d(0, ' + (iBlock.offset().top-(totalScroll+window.innerHeight)) +'px, 0' })
                        if((iBlockTop<(totalScroll+window.innerHeight)) && (iBlockTop>=totalScroll)){
                            if(windowSize > 767) {
                                iContentBlock1.css({ transform : 'translate3d(' + (-iContentBlock1Width + (window.innerWidth/2) + ((((totalScroll)-iBlockTop)/2)*2)) +'px, 0, 0' })
                                iContentBlock2.css({ transform : 'translate3d(' + (-iContentBlock2Width + (window.innerWidth/2) + ((((totalScroll)-iBlockTop)/1)*1.5)) +'px, 0, 0' })
                            } else {
                                iContentBlock1.css({ transform : 'translate3d(' + (-iContentBlock1Width + (window.innerWidth) + ((((totalScroll)-iBlockTop)/2))) +'px, 0, 0' })
                                iContentBlock2.css({ transform : 'translate3d(' + (-iContentBlock2Width + (window.innerWidth) + ((((totalScroll)-iBlockTop)/1))) +'px, 0, 0' })
                            }
                        }
                    }



                }

            } else {
                // heroBlock.style.opacity = (1 + (totalScroll/250))
            }
            /*
                    if (totalScroll >= nftsBlockTopPos) {
                        // console.log('nfts reached')
                        // nftTextDiv.style.transform = `translateX(50px)`
                        nftTextDiv.style.transform = 'translateX(' + (1 + (totalScroll/10)) +'px)';
                    }
                    */
        }

        // window.addEventListener("resize load", displayWindowSize);
        $(window).on("load resize",function(e){
            displayWindowSize()
        });

        // Calling the function for the first time
        displayWindowSize();

        window.addEventListener("scroll", progressBarHandler);

    }, 750);
});