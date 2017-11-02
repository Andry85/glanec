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
            });
        });
    /*********************************************************/
    /* end video  */
    /********************************************************/

    /*********************************************************/
    /* start video slider   */
    /********************************************************/
    $('.videoSlider .owl-carousel').owlCarousel({
        items: 3,
        margin: 31,
        autoHeight:true,
        nav: true,
        dots: false
    });
    /*********************************************************/
    /* end video slider  */
    /********************************************************/

    /*********************************************************/
    /* start catalog slider   */
    /********************************************************/
    $('.catalogList .owl-carousel').owlCarousel({
        items: 4,
        margin: 30,
        autoHeight:true,
        nav: true,
        dots: false
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











})(jQuery);