document.getElementById("btn-show-cash-out").addEventListener("click",function(){
    console.log("show cash out button");
    document.getElementById("cash-out-form").classList.remove("hidden");
    document.getElementById("add-money-form").classList.add("hidden");
});

document.getElementById("btn-add-money").addEventListener("click",function(){
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
});