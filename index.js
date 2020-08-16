

//function for form validation
function validation(){


    var first_name  = document.getElementById("first-name").value.trim()
    var last_name = document.getElementById("last-name").value.trim()
    var email = document.getElementById("email").value.trim() 
    var phone = document.getElementById("phone").value.trim()
    var error_text = document.getElementById("error-id")
    var display


    //conditional statements and decision making   
    if (first_name.length < 3){
        display = "Enter a valid first name"
        error_text.innerHTML = display
        return false
    }

    if (email.indexOf("@") == -1 || email.indexOf("@") == 0 || email.length < 7){
        display = "Enter a valid email address"
        error_text.innerHTML = display
        return false
    }

    if (last_name.length < 3){
        display = "Enter a valid last name"
        error_text.innerHTML = display
        return false
    }

    if (phone.length < 9 || phone.length > 15 || isNaN(phone)){
        display = "Enter a valid phone number"
        error_text.innerHTML = display
        return false
    }

alert("Form successfully submitted")
return true    

}