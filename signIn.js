var fields = document.querySelectorAll(".textb input");
var btn = document.querySelector(".btn");
function check(){
  if(fields[0].value != "" && fields[1].value != "")
    btn.disabled = false;
  else
    btn.disabled = true;  
}

fields[0].addEventListener("keyup",check);
fields[1].addEventListener("keyup",check);

document.querySelector(".show-password").addEventListener("click",function(){
  if(this.classList[2] == "fa-eye-slash"){
    this.classList.remove("fa-eye-slash");
    this.classList.add("fa-eye");
    fields[1].type = "text";
  }else{
    this.classList.remove("fa-eye");
    this.classList.add("fa-eye-slash");
    fields[1].type = "password";
  }
});

function getInfo(){
    if (fields[0].value == "testboi" && fields[1].value == "test123") {
        alert("Login Successful")
        window.location.href = "homeScreen.html";
    }
    else {
        alert("Invalid Username or Password")
        fields[0].value = "";
        fields[1].value = "";
    }
}