function validateForm() {
    var user = document.form.username.value;
    var password = document.form.password.value;

    // if(user=="" && password==""){
    //     alert("Please Enter Your Details");
    // }
    // if(user=="Astoria" && password=="Astoria@123"){
    //     alert("Login successfully");
    //     setTimeout(function(){
    //         window.location="mainPage.html";
    //     },5);
    // }else if(password =="" && user != ""){
    //     alert("Please fill the password")

    // }else if(password !="" && user == ""){
    //     alert("Please fill username")

    // }
    // else if(password != "Astori@123" && user == ""){
    //     alert("Please fill username")
    // }


    if (user != "" || password != "") {
        if (user == "Astoria" && password == "Astoria@123") {
            alert("Login successfully");
            setTimeout(function () {
                window.location = "index.html";
            }, 5);
        }
        else if (password == "" && user != "") {
            alert("Please fill the password")
            return false;
        }
        else if (password != "" && user == "") {
            alert("Please fill username")
            return false;
        }
        else if (password != "Astori@123" && user == "") {
            alert("Please fill username")
        }
        else if (user != "Astoria" && password != "Astoria@123") {
            alert("Fill your correct user name and password")
        }
    }
    else {
        alert("All Fields Are Required");
        return false;
    }
}
