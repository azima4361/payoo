document.getElementById("btn-add-money").addEventListener("click",function(event){
    event.preventDefault();
    // console.log("money add btn clicked")

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById("input-pin").value;
    console.log(addPinInput);

    if(addPinInput=== "1234"){
        console.log("adding money to your account");
        const balance = document.getElementById("account-balance").innerText;
        // console.log(balance);
        const newBalance = parseFloat(balance)+parseFloat (addMoneyInput);
        console.log(newBalance);

        document.getElementById("account-balance").innerText = newBalance;

    }
    else{
        alert("failed to add money! please try again later");
    }
})