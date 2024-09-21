document.getElementById("btn-add-money").addEventListener("click",function(event){
    event.preventDefault();
    // console.log("money add btn clicked")

    const addMoneyInput = document.getElementById("input-add-money").value;
    console.log(addMoneyInput);
    const addPinInput = document.getElementById("input-pin").value;
    console.log(addPinInput);
})