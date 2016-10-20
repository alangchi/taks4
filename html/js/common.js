//no move touch on device
// $(document).bind(
//         'touchmove',
//         function (e) {
//             e.preventDefault();
//         }
// );
$(document).ready(function () {
    //vote
    $('.ratings_stars').hover(
            // Handles the mouseover
                    function () {
                        $(this).prevAll().andSelf().addClass('ratings_hover');
                        // $(this).nextAll().removeClass('ratings_vote'); 
                    },
                    function () {
                        $(this).prevAll().andSelf().removeClass('ratings_hover');
                        // set_votes($(this).parent());
                    }
            );
            $('.ratings_stars').click(function () {
                var Values = $(this).find("input").val();
                alert(Values);
                if ($(this).hasClass('ratings_over')) {
                    $('.ratings_stars').removeClass('ratings_hover');
                    $('.ratings_stars').removeClass('ratings_over');
                    $(this).prevAll().andSelf().addClass('ratings_over');
                } else {
                    $('.ratings_stars').removeClass('ratings_hover');
                    $(this).prevAll().andSelf().addClass('ratings_over');
                }
            });
        });
/**
 * Replace string.
 * @param string string
 * @param string Find
 * @param string Replace
 * @returns string/**
 * @author Viet Hung <hung.pv@neo-lab.vn>
 */
function strReplaceAll(string, Find, Replace) {
    try {
        return string.replace(new RegExp(Find, "gi"), Replace);
    } catch (ex) {
        return string;
    }
}

jQuery.validator.setDefaults({
    highlight: function (element) {
        jQuery(element).closest('fieldset').addClass('has-error');
    },
    unhighlight: function (element) {
        jQuery(element).closest('fieldset').removeClass('has-error');
        jQuery(element).siblings('.help-block').remove();

    },
    errorElement: 'div',
    errorClass: 'help-block',
    errorPlacement: function (error, element) {
        error.insertAfter(element);
    }
});
jQuery.validator.addMethod("isKana", function (value, element) {
    return this.optional(element) || /^([ァ-ヶー]+)$/.test(value);
}, "カタカナで入力してください");