// console.log("hiiiiiii");
document.getElementById("btn-login").addEventListener("click",function(event){
    event.preventDefault();
    console.log("login button clicked");

    const phoneNum = document.getElementById("phone-num").value;
    const pinNum = document.getElementById("pin-num").value;
    console.log(phoneNum, pinNum);
    if(phoneNum=== '5' && pinNum=== '1234'){
        console.log("you are logged in");
        window.location.href= "/home.html";
    }
    else{
        alert("wrong phone number or pin");
    }
})