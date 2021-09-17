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


var imPhone = document.querySelectorAll(".im-phone");


imPhone.forEach(function (input) {
    var myInputMask = new Inputmask("+7(999)-999-9999");
    myInputMask.mask(input);
})