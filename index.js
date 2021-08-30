
function totalPrice(id){
   
    const totalPrice=document.getElementById(id);
    const firstMemoryCost=document.getElementById('memory-cost');
    const firstMemoryCostNum=parseInt(firstMemoryCost.innerText)
    
   
    const secondMemoryCost=document.getElementById('memory-cost');
    
    const secondMemoryCostNum=parseInt(secondMemoryCost.innerText);
    
    
 // 2-----ssd
    const firstSsdCost=document.getElementById('storage-cost');
    const firstSsdCostNum=parseInt(firstSsdCost.innerText)
    

    const secondSsdCost=document.getElementById('storage-cost');
    const secondSsdCostNum=parseInt(secondSsdCost.innerText)
    

    const thirdSsdCost=document.getElementById('storage-cost');
    
    const thirdSsdCostNum=parseInt(thirdSsdCost.innerText);
    
    // Delivery cost
    const paymentDeliveryCost=document.getElementById('delivery-cost');
    const paymentDeliveryCostNum=parseInt(paymentDeliveryCost.innerText);

  const  total=(firstMemoryCostNum)+(secondSsdCostNum)+1299+(paymentDeliveryCostNum);

    totalPrice.innerText=total;
    document.getElementById('total-amount').innerText = total;
}


// Cost for Memory
document.getElementById('memory').addEventListener('click',function(){
  const firstMemoryCost=  document.getElementById('memory-cost');
  firstMemoryCost.innerText=00;
  totalPrice('total-price')
  
});

document.getElementById('memory1').addEventListener('click',function(){
    const secondMemoryCost=document.getElementById('memory-cost');
    secondMemoryCost.innerText=180;
    
    totalPrice('total-price');
     
})

// Cost For SSD
document.getElementById('storage1').addEventListener('click',function(){
    const firstSsdCost=document.getElementById('storage-cost');
    firstSsdCost.innerText=00;

    totalPrice('total-price')
    
})

document.getElementById('storage2').addEventListener('click',function(){
    const secondSsdCost=document.getElementById('storage-cost');
    secondSsdCost.innerText=100;
    totalPrice('total-price');

    
})


document.getElementById('storage3').addEventListener('click',function(){
    const thirdSsdCost=document.getElementById('storage-cost');
    thirdSsdCost.innerText=180;
    totalPrice('total-price');

})


// Deleviry  cost
document.getElementById('delivery').addEventListener('click',function(){
    const freeDeliveryCost=document.getElementById('delivery-cost');
    freeDeliveryCost.innerText=00;
    totalPrice('total-price')
    
})

document.getElementById('delivery1').addEventListener('click',function(){
    const paymentDeliveryCost=document.getElementById('delivery-cost');
    paymentDeliveryCost.innerText=20;
    totalPrice('total-price');
    
});

document.getElementById('promo-btn').addEventListener
    ('click', function () {

        const pin = 1234;
        
        const inputfieldCount = document.getElementById('promo-input');
        const inputinputfield = parseFloat(inputfieldCount.value);
        const totalAmountCount = document.getElementById('total-amount');
        const totalAmountNumber = totalAmountCount.innerText;
        const totalAmount = parseFloat(totalAmountNumber);

        if (pin == inputinputfield) {
            totalAmountCount.innerText = totalAmount - (20/100)*totalAmount;
        }
        else {
            
        }

        inputfieldCount.value = '';
        
    });