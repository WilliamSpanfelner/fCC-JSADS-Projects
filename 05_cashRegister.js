/* Cash Register

Design a cash register drawer function checkCashRegister() that 
accepts purchase price as the first argument (price), payment 
as the second argument (cash), and cash-in-drawer (cid) as the 
third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object 
with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer 
is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the 
value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change 
due in coins and bills, sorted in highest to lowest order, as the 
value of the change key.

Currency Unit	Amount
Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)

See below for an example of a cash-in-drawer array:

[
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]
*/
/**
 * Updates the cash in drawer array
 * @param {*} coinName 
 * @param {*} coinValue 
 * @param {*} cid 
 */
function deductFunds(coinName, coinValue, cid) {
  for (let i = 0; i < cid.length; i++) {
    const element = cid[i];
    if (element[0] == coinName) {
      element[1] -= coinValue.toFixed(2);
    }
  }
}

function hasFunds(coinName, coinValue, cid) {
  for (let i = 0; i < cid.length; i++) {
    const element = cid[i];
    if (element[0] == coinName && element[1] >= coinValue) {
      console.log(element[0], element[1], true);
      return true;
    }
  }
  return false;
}

function checkCashRegister(price, cash, cid) {

  function addDenominationsTo(cid) {
    // Append the denomination value to each cid element
    return cid.reduce((arr, element) => {
      arr.push(element);
      switch (element[0]) {        
        case "ONE HUNDRED":
          arr[arr.length - 1].push(10000);
          break;        
        case "TWENTY":
          arr[arr.length - 1].push(2000);
          break;        
        case "TEN":
          arr[arr.length - 1].push(1000);
          break;        
        case "FIVE":
          arr[arr.length - 1].push(500);
          break;                
        case "ONE":
          arr[arr.length - 1].push(100);
          break;        
        case "QUARTER":
          arr[arr.length - 1].push(25);
          break;
        case "DIME":
          arr[arr.length - 1].push(10);
          break;
        case "NICKEL":
          arr[arr.length - 1].push(5);
          break;
        case "PENNY":
          arr[arr.length - 1].push(1);
          break;
        default:
          break;
      }
      return arr;
    }, []);
  }

  // Calculate changeDue and limit result to two decimal places.
  let changeDue = (cash - price);
  console.log("cash: ", cash.toFixed(2), 
  "\nprice: ", price.toFixed(2), 
  "\nchangeDue: ", changeDue.toFixed(2));

  // Get the total value of cid
  const drawerValue = cid.reduce((sum, element) => sum += element[1], 0);
  console.log("\ndrawerValue: ", drawerValue.toFixed(2));

  // determine how to give change
  let balance = changeDue;
  let makeChange = [];

  // Get the relevant denominations from cid
  let makeChangeFrom = addDenominationsTo(cid).filter(element => element[2] <= balance * 100)
  .sort(function(a, b){return b[2] - a[2]});  // sort descending by the denomination value
  makeChangeFrom.forEach(element => {
    console.log(element);
  });

  // for (let i = 0; i < coins.length; i++) {
  //   const coin = coins[i];
  //   const coinName = coin[0];
  //   const coinValue = coin[1];
    
  //   let coinCount = 0;
  //   console.log("Balance is: " + balance);
  //   while (balance >= coinValue && hasFunds(coinName, coinValue, cid)) {
  //     balance -= coinValue.toFixed(2);
  //     deductFunds(coinName, coinValue, cid)
  //     coinCount += 1;
          
  //     if (balance.toFixed(2) == coinValue && hasFunds(coinName, coinValue, cid)) {
  //       balance -= coinValue.toFixed(2);
  //       deductFunds(coinName, coinValue, cid)
  //       coinCount += 1;
  //     }
  //   }

  //   if (coinValue * coinCount > 0) {
  //     makeChange.push([coinName, coinValue * coinCount]);
  //   }
  // }

  for (const denomination of makeChange) {
    console.log(denomination);
  }  
  
  if (cid < changeDue || !canReturnExactChange) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (cid == changeDue) {
    return {status: "CLOSED", change: [...cid]}
  }
  return {"status": "OPEN", "change": [...cid]};
}

const testData = [
    [  19.5, 20, [
      ["PENNY", 1.01], ["NICKEL", 2.05],
      ["DIME", 3.1], ["QUARTER", 0.25],
      ["ONE", 90], ["FIVE", 55],
      ["TEN", 20], ["TWENTY", 60], 
      ["ONE HUNDRED", 100]
    ]
    ],
];

console.log(checkCashRegister(testData[0][0], testData[0][1], testData[0][2]));

// {status: "OPEN", change: [["QUARTER", 0.5]]}