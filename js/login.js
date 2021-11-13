
$(document).ready(function() {




var passwordD = document.getElementById("passwordD");
let email = document.getElementById("email");

$('input[type=password]').keyup(function() {
    var passwordA = $(this).val();
    var passwordD = $(this).val();
        if (passwordA.length >8) {
            $('#C').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#C').removeClass('valid').addClass('invalid');
            
        }
        if (passwordA.charCodeAt(0) >=65 && passwordA.charCodeAt(0) <=90 || passwordA.charCodeAt(0) >=97 && passwordA.charCodeAt(0) <=122) {
            $('#A').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#A').removeClass('valid').addClass('invalid');
            
        }

        var count = 0;
        let a = /[A-Z]/
        let v = passwordA.match(a);


        if (passwordA(v)) {
            count+=1;
        }
        else if (count < 3) {
            $('#D').removeClass('valid').addClass('invalid');
            else {
                $('#D').removeClass('valid').addClass('invalid');
        }

        if (passwordA == passwordD) {

            $('#1').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#1').removeClass('valid').addClass('invalid');
        




        








        }
    
});


function confirmPassword() {
    passwordC.preventDefault();
    if (passwordA.value == passwordD.value) {
        $('#1').removeClass('invalid').addClass('valid');
    }
    else  {
        $('#1').removeClass('valid').addClass('invalid');
        
    }
}

lengthOfPassword();







document.getElementById("button1").onclick = function() {
    confirmPassword();
    
}


















});