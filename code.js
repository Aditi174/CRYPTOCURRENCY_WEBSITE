//https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr

document.addEventListener("DOMContentLoaded", function() {
    const dogecoin = document.getElementById("Dogecoin");
    const ethereum = document.getElementById("Ethereum");
    const bitcoin = document.getElementById("Bitcoin");

    async function coinsavalues() {
        const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr");
        const data = await response.json();
        console.log(data);

        const storedBitcoinValue = localStorage.getItem('bitcoinValue');
        const storedDogecoinValue = localStorage.getItem('dogecoinValue');
        const storedEthereumValue = localStorage.getItem('ethereumValue');

        if (storedBitcoinValue) {
            bitcoin.innerHTML = storedBitcoinValue;
        }

        if (storedDogecoinValue) {
            dogecoin.innerHTML = storedDogecoinValue;
        }

        if (storedEthereumValue) {
            ethereum.innerHTML = storedEthereumValue;
        }

        displayTheValueOfCoins(data.bitcoin, data.dogecoin, data.ethereum);
    }

    coinsavalues();

    function displayTheValueOfCoins(i, j, k) {
        bitcoin.addEventListener('click', () => {
            const bitcoinsvalue = `${i.inr}`;
            bitcoin.innerHTML = bitcoinsvalue;
            localStorage.setItem("bitcoinValue", bitcoinsvalue);
        });

        dogecoin.addEventListener('click', () => {
            const dogecoinsvalue = `${j.inr}`;
            dogecoin.innerHTML = dogecoinsvalue;
            localStorage.setItem("dogecoinValue", dogecoinsvalue);
        });

        ethereum.addEventListener('click', () => {
            const ethereumvalue = `${k.inr}`;
            ethereum.innerHTML = ethereumvalue;
            localStorage.setItem("ethereumValue", ethereumvalue);
        });
    }
});
