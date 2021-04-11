$(document).ready(function() {

    $('#button').click(function(event) {
        event.preventDefault();
        $("[name='nom']").prop("required", true);
        $("[name='prenom']").attr("required", true);
        $("[name='niv']").attr("required", true);
        $("[name='adresse']").attr("required", true);
        $("[name='phone']").attr("required", true);
        $("[name='password']").attr("required", true);
        $("[name='confpass']").attr("required", true);
        $("[name='email']").attr("required", true);
        $("[name='login']").attr("required", true);


        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var phoneReg = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        var emailval = $("[name='email']").val();
        var phoneval = $("[name='phone']").val();
        var pass = $("[name='password']").val();
        var vpass = $("[name='confpass']").val();

        var valid = true;

        if (!emailReg.test(emailval)) {
            $("[name='email']").after('<span class="error" style="color:red;font-weight:bold">Adresse email invalide.</span>');
            valid = false;
        }
        if (!phoneReg.test(phoneval)) {
            $("[name='phone']").after('<span class="error" style="color:red; font-weight:bold">Numéro de téléphone invalide.</span>');
            valid = false;
        }
        if (pass != vpass) {
            $("[name='confpass']").after('<span class="error" style="color:red; font-weight:bold">Les mots de passe saisis ne sont pas identiques.</span>');
            valid = false;
        }

        return valid;


    });
});