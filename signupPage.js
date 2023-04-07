function validationForm(){
    var name= document.form.name.value;
    var user = document.form.username.value;
    var password = document.form.password.value;
    var cnfpassword = document.form.cnfPassword.value;
    var mail = document.form.email.value;
    var contactNumber= document.form.contact.value;

    if(name !="" && mail !="" && user!="" && (password == cnfpassword) && contactNumber != ""){
        alert("Registerd successfully, Click OK to login");
        setTimeout(function(){
            window.location="loginPage.html";
        },5);
    }
    else if(name =="" && mail =="" && user == "" && password == "" && cnfpassword=="" && contactNumber == ""){
        alert("Fill the empty fields:")
        
    }  
    else if (password != cnfpassword){
        alert("password and confirm password not match")
        return password =="" && cnfpassword == "";      
    }
    else if (password.length != 6 && cnfpassword.length != 6){
        alert("password length should be 6 characters")       
    }
     
}

// function validationForm(){
//     var name= document.form.fname.value;
//     var user= document.form.uname.value;
//     var password= document.form.Password.value;
//     var cnfpassword= document.form.CnfPassword.value;
//     var Email= document.form.email.value;
//     var contactNumber= document.form.contact.value;

//     if(name !=""  && user!="" && Email !="" && password == cnfpassword && contactNumber != ""){
//         alert("Login successfully");
//         setTimeout(function(){
//             window.location="loginPage.html";
//         },5);
//         return true;
//     } 
//     else if(name=="" && user=="" && password=="" && cnfpassword=="" && Email=="" && contactNumber==""){
//         alert("Fill the required fields");  
//         return false;  
//     }
//     else if (name==null || name==""){  
//         alert("Name can't be blank");  
//         return false;  
//       }
//     else if (user==null || user==""){  
//         alert("Username can't be blank");  
//         return false;  
//       }
//     else if(password.length == 0 || password.length == null){  
//         alert("Enter password");  
//         return false;  
//      }
//     else if(password.length < 6){  
//         alert("Password must be at least 6 characters long.");  
//         return false;  
//      }   
//     else if(password != cnfpassword){  
//         alert("password must be same!");  
//         return false;  
//     } 
//     else if(contactNumber==null || contactNumber == ""){  
//         alert("Contact number is required");
//         return false;   
//     } 
         
// }  
