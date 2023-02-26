/* function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;

    console.log(`MoneyBox $${saveCoins}`);
}

moneyBox(5);
moneyBox(6);
moneyBox(4);
 */

function moneyBox() {
    let saveCoins = 0;
    function countCoins(coins) {
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(6);
myMoneyBox(12);



const moneyBoxAna = moneyBox();
moneyBoxAna(80);
