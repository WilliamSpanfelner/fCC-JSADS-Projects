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

function checkCashRegister(price, cash, cid) {
  let canReturnExactChange = false;

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

  // Get the total value of cid
  const drawerValue = Number(cid.reduce((sum, element) => sum += element[1], 0).toFixed(2));

  // determine how to give change
  let balance = changeDue;
  let makeChange = [];

  // Get the relevant denominations from cid
  let availableChange = addDenominationsTo(cid).filter(element => element[2] <= balance * 100)
    .sort(function (a, b) { return b[2] - a[2] });  // sort descending by the denomination value

  // Get the value of the change available
  const valueAvailableChange = availableChange.reduce((sum, element) => sum += element[1], 0);

  if (valueAvailableChange >= balance) {
    canReturnExactChange = true;
  }


  for (let index = 0; index < availableChange.length; index++) {
    const element = availableChange[index];
    // if the denomination available <= balance give the value available
    balance = Number(balance.toFixed(2));

    if (balance == 0) {
      break;
    } else {
      // How many coins/notes of the given denomination are required?
      const denomUnitsReqd = Math.floor(balance * 100 / element[2]);
      // What is the denomination value of the units reqd?
      const denomValue = denomUnitsReqd * element[2] / 100;
      // How many coins/notes are available?
      const denomUnitsAvail = Math.floor(element[1] * 100 / element[2]);

      if (denomUnitsReqd > 0) {
        if (denomUnitsReqd <= denomUnitsAvail) { // if coins/notes <= those on hand
          makeChange.push([element[0], denomValue]);
          balance -= denomValue;
          element[1] -= denomValue;
        } else if (element[1] > 0) {  // otherwise use remaining coins/notes and move on
          makeChange.push([element[0], element[1]]);
          balance -= element[1];
          element[1] -= element[1];
        }
      }
    };
  }

  if (drawerValue < changeDue || !canReturnExactChange) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } else if (drawerValue == changeDue) {
    return { status: "CLOSED", change: [...cid] }
  }
  return { "status": "OPEN", "change": [...makeChange] };
}

const testData = [
  [19.50, 20, [
    ["PENNY", 0.5], ["NICKEL", 0],
    ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
  ],
  [19.50, 20, [
    ["PENNY", 0.01], ["NICKEL", 0],
    ["DIME", 0], ["QUARTER", 0],
    ["ONE", 1], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
  ],
  [19.50, 20, [
    ["PENNY", 0.01], ["NICKEL", 0],
    ["DIME", 0], ["QUARTER", 0],
    ["ONE", 0], ["FIVE", 0],
    ["TEN", 0], ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ]
  ],
  [3.26, 100, [
    ["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
  ],
  [19.5, 20, [
    ["PENNY", 1.01], ["NICKEL", 2.05],
    ["DIME", 3.1], ["QUARTER", 4.25],
    ["ONE", 90], ["FIVE", 55],
    ["TEN", 20], ["TWENTY", 60],
    ["ONE HUNDRED", 100]
  ]
  ],
];

testData.forEach(element => {
  console.log(checkCashRegister(element[0], element[1], element[2]));
});


// {status: "OPEN", change: [["QUARTER", 0.5]]}