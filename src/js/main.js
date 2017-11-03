(function($){


    /*********************************************************/
    /* start slider   */
    /********************************************************/
        $('.preambuleSlider .owl-carousel').owlCarousel({
            items:1,
            margin: 0,
            autoHeight:true,
            nav: true
        });
    /*********************************************************/
    /* end slider  */
    /********************************************************/


    /*********************************************************/
    /* start video   */
    /********************************************************/
        $(".play-video").click(function (e) {
            $(this).each(function(){
                e.preventDefault();
                $(this).parents(".videoSlider__item").find(".movie").get(0).play();
                $(this).parents(".videoSlider__item").find(".videoPic").hide();
            });
        });
    /*********************************************************/
    /* end video  */
    /********************************************************/

    /*********************************************************/
    /* start video slider   */
    /********************************************************/
        $('.videoSlider .owl-carousel').owlCarousel({
            autoHeight:true,
            nav: true,
            dots: false,
            responsive:{
                0:{
                    items: 1
                },
                480:{
                    items:2,
                    margin: 15
                },
                768:{
                    items:3,
                    margin: 31
                }
            }
        });
    /*********************************************************/
    /* end video slider  */
    /********************************************************/

    /*********************************************************/
    /* start catalog slider   */
    /********************************************************/
        $('.catalogList .owl-carousel').owlCarousel({
            autoHeight:true,
            responsive:{
                0:{
                    items: 1,
                    dots: true,
                    nav: false
                },
                480:{
                    items:2,
                    margin: 15
                },
                768:{
                    items:3,
                    margin: 20
                },
                1260:{
                    items:4,
                    margin: 30,
                    nav: true,
                    dots: false
                }

            }
        });
    /*********************************************************/
    /* end catalog slider  */
    /********************************************************/


    /*********************************************************/
    /* Start TABS  */
    /********************************************************/
        $('.tabsTitles li a').on('click', function(e){
            e.preventDefault();
            var $tabs = $(".tabsOuter");
            var $tabsList = $tabs.children();
            $(this).parent('li').addClass('tabsTitles__item--activ').siblings().removeClass('tabsTitles__item--activ');
            var $parent = $(this).parent('li');
            var $parentIndex = $parent.index();
            var $current = $tabsList[$parentIndex];
            $($current).addClass('active').siblings().removeClass('active');
        });
    /*********************************************************/
    /* End TABS  */
    /********************************************************/

    /*********************************************************/
    /* start product slider   */
    /********************************************************/
        $('.gallerySlider .owl-carousel').owlCarousel({
            items: 3,
            margin: 14,
            autoHeight:true,
            nav: true,
            dots: false
        });
    /*********************************************************/
    /* end product slider  */
    /********************************************************/


    /*********************************************************/
        /* start popup   */
    /********************************************************/
        $(".deliveryInfo .icon-information").mouseenter(function() {
            $(this).next(".deliveryInfo__popup").show();
        });
        $(".deliveryInfo__popup").mouseleave(function() {
            $(this).hide();
        });
    /*********************************************************/
    /* end popup   */
    /********************************************************/

    /*********************************************************/
    /* start gallery   */
    /********************************************************/
        $(".thumbs li a").click(function(e){
            e.preventDefault();
            var $href = $(this).attr('href');
            $(this).parents(".catalogList__inner").children('figure').children('img').attr('src', $href);
        });
        $(".gallerySlider__item a").click(function(e){
            e.preventDefault();
            var $href = $(this).attr('href');
            $(this).parents(".productBox__gallery").find('.galleryPic img').attr('src', $href);
        });
    /*********************************************************/
    /* end gallery   */
    /********************************************************/


    $("#openPageslide").sideNav();











})(jQuery);