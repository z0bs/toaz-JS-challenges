function calcTip(bill) {
    let tip = 0;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}


let bills = [125, 555, 44];
let tips = [];
let total = [];

for (let i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}
console.log(tips);
console.log(total);