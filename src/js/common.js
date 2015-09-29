$(document).ready(function() {

    $('#fullpage').fullpage({
        anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        scrollBar: true,
        navigation: true
    });

    function tab() {
        $('.js-tab-group').each(function(){
            var tab_cont = $(this).find('.js-tab-cont'),
                tab_link = $(this).find('.js-tab-link');

            tab_link.first().addClass('is-active');
            tab_cont.hide();
            tab_cont.first().show();

            $('body').on('click', '.btn-tab, .js-tab-link', function(){
                var link = $(this).attr('href');
                var activeTab = $(this).parents('.js-tab-group').find('.' + link);
                $(this).parents('.js-tab-group').find('.btn-tab,.js-tab-link').removeClass('is-active');
                $(this).addClass('is-active');
                $(this).parents('.js-tab-group').find('.js-tab-cont').hide();
                activeTab.show();

                return false;
            });
        });
    }
    tab();

    $('.js-scroll').mCustomScrollbar();

});