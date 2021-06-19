$(function () {
    $('#call-btn').click(function () {
        $('#modal-call').addClass('modal_active');
        $('body').addClass('hidden');
    });
    $('#question-btn').click(function () {
        $('#modal-question').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('#join-team-btn').click(function () {
        $('#join-team-modal').addClass('modal_active');
        $('body').addClass('hidden');
    });

    $('.modal__close-button').click(function () {
        $('.modal').removeClass('modal_active');
        $('body').removeClass('hidden');
    });

    $('.modal').mouseup(function (e) {
        let modalContent = $(".modal__content");
        if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
            $(this).removeClass('modal_active');
            $('body').removeClass('hidden');
        }
    });
});join-team-btn