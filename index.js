// function for form validation

function validation(){
    var first_name 
    var last_name
    var email
    var phone



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