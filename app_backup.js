
    // const [scroll, setScroll] = useState(0);

    /*window.addEventListener('scroll',(event) => {
        console.log('Scrolling...');
    });*/
    let progressBarHandler = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
        // setScroll(scroll);

        // to show hide the learn more
        if(totalScroll > 100) {
            // document.getElementById('learn-more-block').style.transform = 'translateY(100px)'
        } else {
            // document.getElementById('learn-more-block').style.transform = 'none';
        }

        const heroBlock = document.getElementById("hero-block");

        const diamondVideoBlock = $('#diamond-video-block')[0];
        const diamondVideoBlockPosition = $('#diamond-video-block').position();


        const weAreFilled = $('#weAreFilled')[0];
        const invaluableText = $('#invaluable-text')[0];
        const heroContentBlock = $('#hero-content-block')[0];

        const nftTextDiv = $('#nfts-text');
        const nftTextDivWidth = nftTextDiv.width();
        const posterImgBlock = $('#poster-img-block');
        const posterImgBlockWidth = posterImgBlock.width();
        const helmetImgBlock = $('#helmet-img-block');
        const helmetImgBlockWidth = helmetImgBlock.width();



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
        // console.log('totalScroll: ', totalScroll);
        // console.log('viewportWidth: ', viewportWidth);
        // console.log('---------------');


        if(diamondVideoBlockPosition.top <= -300) {
            console.log('trigger')
        }

        if (totalScroll) {
            // heroBlock.style.opacity = (1 - (totalScroll/200))

            diamondVideoBlock.style.transform = 'translateY(' + (1 - (totalScroll/diamondYSpeed)) +'px)';

            weAreFilled.style.opacity = (1 - (totalScroll/opacitySpeed))
            invaluableText.style.opacity = (1 - (totalScroll/opacitySpeed))
            heroContentBlock.style.opacity = (1 - (totalScroll/opacitySpeed))

            var nftTextScrollVal = 0;
            var posterImgScrollVal = 0;
            var helmetImgScrollVal = 0;

            if(totalScroll > 300) {
                nftTextScrollVal = (-nftTextDivWidth+(1 + (totalScroll/200))*85)
                posterImgScrollVal = (posterImgBlockWidth+(1 - (totalScroll/200))*30)
                helmetImgScrollVal = (helmetImgBlockWidth+(1 - (totalScroll/200))*100)

                nftTextDiv.css({ transform : 'translateX(' + nftTextScrollVal +'px)' });
                posterImgBlock.css({ transform : 'translateX(' + posterImgScrollVal +'px)' });
                helmetImgBlock.css({ transform : 'translateX(' + helmetImgScrollVal +'px)' });
            }

            if(totalScroll > 2500) {
                nftTextScrollVal = (-nftTextDivWidth+(1 + (totalScroll/200))*85)
                posterImgScrollVal = (posterImgBlockWidth+(1 - (totalScroll/200))*20)
                helmetImgScrollVal = (helmetImgBlockWidth+(1 - (totalScroll/200))*100)

                nftTextDiv.css({ transform : 'translateX(' + nftTextScrollVal +'px)' });
                posterImgBlock.css({ transform : 'translateX(' + posterImgScrollVal +'px)' });
                helmetImgBlock.css({ transform : 'translateX(' + helmetImgScrollVal +'px)' });
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
    window.addEventListener("scroll", progressBarHandler);

    // window.removeEventListener("scroll", progressBarHandler);
