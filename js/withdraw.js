document.getElementById('btn-withdraw').addEventListener('click',function(){
 //add event handler in button

const withdrawField = document.getElementById('withdraw-filed');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString)

const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = currentWithdrawTotal;



const balanceTotalElement = document.getElementById('balance-total');



const newBalanceTotalString = balanceTotalElement.innerText;
const balanceTotal = parseFloat(newBalanceTotalString);

const currentBalanceTotal = balanceTotal - newWithdrawAmount;
 balanceTotalElement.innerText = currentBalanceTotal;

withdrawField.value ='';


})