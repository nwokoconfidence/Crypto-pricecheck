var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");
var usdt = document.getElementById("tether");

var settings= {
    "asynsc": true,
    "scrossDomain": true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=Bitcoin%2CEthereum%2Cdogecoin%2Ctether&vs_currencies=ngn",
    "method": "GET" ,
    "headers": {}
}
$.ajax(settings).done(function (response){
       btc.innerHTML = response.bitcoin.ngn;
       eth.innerHTML = response.ethereum.ngn;
       doge.innerHTML = response.dogecoin.ngn;
       usdt.innerHTML = response.tether.ngn;
});