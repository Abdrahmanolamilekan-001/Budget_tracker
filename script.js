

function addUp(){
  let pName = productName.value;
  let quant = quantityOwn.value;
  let prices = priceName.value;
  let budgetObj = {pName, quant, prices};
  let budgetArray = JSON.parse(localStorage.getItem("budget")) || [];

  
  // if (budgetObj.quant !== "" && budgetObj.prices !== "" ){
  //   result = quant * prices;
  //   display.innerHTML = `${result}`;
  // }

  budgetArray.push(budgetObj)
localStorage.setItem("budget", JSON.stringify(budgetArray))
  

  window.location.href = "result.html"
}

