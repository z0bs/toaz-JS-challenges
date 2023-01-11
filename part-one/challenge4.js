let tip = 275;

function Tip(amount) {
  // -------using the tenary operator--------

  amount > 50 && amount <= 300
    ? (tip =
        amount / 0.15
          ? console.log(`the bill was ${amount} and the tip was ${tip}`)
          : tip > 300
          ? amount / 0.2
          : console.log(`the bill was ${amount} and the tip was ${tip}`))
    : console.log(`No tip today`);
}

tip(tip);
