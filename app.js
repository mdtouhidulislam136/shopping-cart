
function updateProductNumber (productNumber, price, productTotal, isIncreasing){
    const caseInput = document.getElementById(productNumber);
    let caseNumber = parseInt(caseInput.value);
    

    if (isIncreasing == true){
        caseNumber = caseNumber + 1;
    }

    else if(caseNumber > 0){
        caseNumber = caseNumber - 1;

    }

    caseInput.value = caseNumber;
    // update case total 

    const caseTotal = document.getElementById(productTotal);
    caseTotal.innerText = caseNumber * price;

    //calculate total
    calculateTotal()


}

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
    
}

function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') * 1290;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;

    const tax = subTotal / 10;

    const totalPrice = subTotal + tax;


   // update on the html
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax-amount').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;




}
//phone increase decrese events
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone-number', 1219,'phone-total', true);
  });

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone-number', 1219, 'phone-total', false);
  });

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function(){
  updateProductNumber('case-number', 59, 'case-total', true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case-number', 59, 'case-total', false);
// caseInput.value = caseNumber - 1;

});


