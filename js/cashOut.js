document.getElementById("btn-cash-money").addEventListener("click",function(event){
    event.preventDefault();
    console.log('cash out button clicked');

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById("input-cash-pin").value;
    console.log(cashOut,pinNumber);
const cashOutNumber= parseFloat(cashOut);
    if(pinNumber=== "1234"){
        const balance = document.getElementById("account-balance").innerText;
        // console.log(balance);
      const balanceNumber = parseFloat(balance);
      const newBalance = balanceNumber- cashOutNumber;
      document.getElementById("account-balance").innerText= newBalance;

    }
    else{
        alert("failed to cash out! please try again later");
    }
    
})