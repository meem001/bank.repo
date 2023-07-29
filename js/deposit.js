//step-1:
//Step-1: add event handler with the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){
 //step-02:get the deposit amount the deposit input field
 // for input field use .value to the value inside the input field
 const depositField = document.getElementById('deposit-field');
 const newDepositAmountString = depositField.value;
 const newDepositAmount = parseFloat(newDepositAmountString)
 //step-3: get the current deposit total
 const depositTotalElement = document.getElementById('deposit-total');
 const previousdepositTotalString = depositTotalElement.innerText;
   const previousdepositTotal = parseFloat(previousdepositTotalString)


   //step-4 : add numbers to set the total deposit
 const currentDepositTotal = previousdepositTotal + newDepositAmount;

 depositTotalElement.innerText = currentDepositTotal;

 // step-5: get balance current total
 const balanceTotalElement = document.getElementById('balance-total');

 //self trying

 const newBalanceTotalString = balanceTotalElement.innerText;
 const balanceTotal = parseFloat(newBalanceTotalString);

 const currentBalanceTotal = newDepositAmount + balanceTotal;
  balanceTotalElement.innerText = currentBalanceTotal;

 // Clear the deposit field
 depositField.value ='';


})