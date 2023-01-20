
$(document).ready(function () {
    $(".order-form__select").select2({
        minimumResultsForSearch: -1,
        width: "100%",
        dropdownParent: $('.order-form__dropdown'),
    });

    $(".order-form-range__input").on('input', function () {
        $(".order-form-range__value").html($(this).val());
    });

    $('.nav__open, .nav__close').click(function () {
        $('.nav__list').toggleClass('nav__list--is-active');
    });
});

$(document).on("select2:open", "select", function () {
    $('.select2-results').mCustomScrollbar({
        mouseWheel: true,

        advanced: {
            updateOnContentResize: true
        }
    });
});




