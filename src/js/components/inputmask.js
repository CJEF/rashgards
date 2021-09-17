/* $(document).ready(function() {
    // $('input[data-type="ph"]').inputmask("+7(999)999-9999");
    $('input.btn').prop('disabled', 'true');
    $('input[data-type="ph"]').inputmask("+7(999)999-9999", { 
        clearMaskOnLostFocus: true ,
        definitions: {
            "0": {
                validator: "[0-9\uFF11-\uFF19]"
            }
        },
        "oncomplete": function() {
            // $(this).find('input.btn').removeAttr('disabled');
            $('input.btn').removeAttr('disabled');
        } 
    });
}); */


var selector = document.querySelector(".im-phone");

var im = new Inputmask("99-9999999");
im.mask(selector);