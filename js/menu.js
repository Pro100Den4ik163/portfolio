$(document).ready(function () {
    $('.navigation__burger').click(function (event) {
        $('.navigation__burger,.navigation__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
