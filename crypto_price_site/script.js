const btc = document.getElementById("bitcoin");
const eth = document.getElementById("ethereum");
const doge = document.getElementById("dogecoin");

const navBtn = document.querySelector(".nav-btn");

const settings = {
    "async": true,
    "scrossDomain": true,
    "url": 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=inr,usd&ids=bitcoin%2Cethereum%2Cdogecoin',
    "method": "GET",
    "headers": {}
};

let cryptoPrices = {}; // Object to store fetched prices

function updatePrices(currency) {
    if (cryptoPrices.bitcoin && cryptoPrices.ethereum && cryptoPrices.dogecoin) {
        if (currency === 'USD') {
            btc.innerHTML = '$' + cryptoPrices.bitcoin.usd;
            eth.innerHTML = '$' + cryptoPrices.ethereum.usd;
            doge.innerHTML = '$' + cryptoPrices.dogecoin.usd;
        } else if (currency === 'INR') {
            btc.innerHTML = '\u20B9' + cryptoPrices.bitcoin.inr;
            eth.innerHTML = '\u20B9' + cryptoPrices.ethereum.inr;
            doge.innerHTML = '\u20B9' + cryptoPrices.dogecoin.inr;
        }
    }
}

$.ajax(settings).done(function (response) {
    cryptoPrices = response; // Store the entire response

    updatePrices('USD'); // Initialize with USD prices
});

navBtn.addEventListener('click', () => {
    if (navBtn.innerHTML === 'USA') {
        navBtn.innerHTML = 'IND';
        updatePrices('INR');
    } else if (navBtn.innerHTML === 'IND') {
        navBtn.innerHTML = 'USA';
        updatePrices('USD');
    }
});