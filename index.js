// function for form validation

function validation(){
    var first_name  = document.getElementById("").value
    var last_name = document.getElementById("").value
    var email = document.getElementById("").value
    var phone = document.getElementById("").value



    if (first_name.length < 3){
        display = "Enter a valid first name"
        error.innerHTML = display
        return false
    }

    if (email.indexOf("@") == -1 || email.indexOf("@") == 0 || email.length < 7){
        display = "Enter a valid email address"
        error.innerHTML = display
        return false
    }

    if (last_name.length < 3){
        display = "Enter a valid last name"
        error.innerHTML = display
        return false
    }

    if (phone.length < 11 || isNaN(phone)){
        display = "Enter a valid phone number"
        error.innerHTML = display
        return false
    }

alert("Form successfully submitted")
return true    

}