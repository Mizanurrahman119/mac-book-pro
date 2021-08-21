// //  memory section----//
// document.getElementById('memory').addEventListener('click', function(){
//     const memoryCostInput = document.getElementById('memory-cost');
//     memoryCostInput.innerText = (0);
// })
// document.getElementById('memory1').addEventListener('click', function(){
//     const memoryCostInput = document.getElementById('memory-cost');
//     memoryCostInput.innerText = (180);
// })

// // -----Storage section ----//
// document.getElementById('storage1').addEventListener('click', function(){
//     const storageCostInput = document.getElementById('storage-cost');
//     storageCostInput.innerText = (0);
// })
// document.getElementById('storage2').addEventListener('click', function(){
//     const storageCostInput = document.getElementById('storage-cost');
//     storageCostInput.innerText = (100);
// })
// document.getElementById('storage3').addEventListener('click', function(){
//     const storageCostInput = document.getElementById('storage-cost');
//     storageCostInput.innerText = (180);
// })

// //------ delivery section -----//
// document.getElementById('delivery').addEventListener('click', function(){
//     const deliveryCostInput = document.getElementById('delivery-cost');
//     deliveryCostInput.innerText = (0);
// })
// document.getElementById('delivery1').addEventListener('click', function(){
//     const deliveryCostInput = document.getElementById('delivery-cost');
//     deliveryCostInput.innerText = parseInt(20);
// });


// const totalPrice = document.getElementById('total-price');
// const balanceTotalText = totalPrice.innerText;
// const previousBalanceTotal = parseFloat(balanceTotalText);
// totalPrice.innerText = previousBalanceTotal + 1299;









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