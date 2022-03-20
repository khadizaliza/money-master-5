//

document.getElementById('calculate-btn').addEventListener('click', function () {
    const foodInput = document.getElementById('food-input');
    const foodAmount = foodInput.value;
    const foodTotal = parseFloat(foodAmount)
    const rentInput = document.getElementById('rent-input');
    const rentAmount = rentInput.value;
    const rentTotal = parseFloat(rentAmount)

    const clothesInput = document.getElementById('clothes-input');
    const clothesAmount = clothesInput.value;
    const clothesTotal = parseFloat(clothesAmount)
    const exTotal = document.getElementById('ex-total');
    const exAmount = exTotal.innerText;
    
    const expensesTotal = parseFloat(exAmount);
   
    exTotal.innerText = foodTotal + rentTotal + clothesTotal;
     const incomeInput = document.getElementById('income-input');
     const incomeAmount = incomeInput.value;
    //  console.log(incomeAmount)
     const incomeTotal = parseFloat(incomeAmount);
     const balanceTotal = document.getElementById('balance-total');
     const balanceAmount = balanceTotal.innerText;
     const balanceTotalAmount = parseFloat(balanceAmount);
     const totalBalance = incomeAmount - exTotal.innerText;
     
     balanceTotal.innerText = totalBalance;
})








