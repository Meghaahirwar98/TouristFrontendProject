
function resetPasssword()
{
    var pass1 = document.getElementById("password1").value;
    var pass2 = document.getElementById("password2").value;
 

 if(pass1 !="" && pass2 !="" )
 {  
     if(pass1.length = pass2.length == 5 &&  pass1 == pass2)
      {
        alert("Password created successfully")
       return true;
      }
      else if( pass1.length = pass2.length < 5)
       {
         alert("Password length should be atleast 5 characters");
         return false;
       }
      else
       {
         alert("Confirm password is not same as you new password.");
         return false;
       }
 }
 else
 {
  alert("All Fields Are Required");
  return false;
 }
}

function myFunction1(){
    var x = document.getElementById("password1");
    var y = document.getElementById("togglePassword1");
    var z = document.getElementById("togglePassword2");

    if(x.type === 'password'){
        x.type = 'text';
        y.style.display = "block";
        z.style.display = "none";
    }else{
        x.type = 'password';
        y.style.display = "none";
        z.style.display = "block";
    }
}

function myFunction2(){
    var x = document.getElementById("password2");
    var y = document.getElementById("togglePassword3");
    var z = document.getElementById("togglePassword4");

    if(x.type === 'password'){
        x.type = 'text';
        y.style.display = "block";
        z.style.display = "none";
    }else{
        x.type = 'password';
        y.style.display = "none";
        z.style.display = "block";
    }
}
