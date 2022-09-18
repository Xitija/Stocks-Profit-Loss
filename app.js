var initialPrice = document.querySelector('#initial-price');
var stocksQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');
outputBox.style.display = 'none';

function calculateProfitAndLoss(initial , quantity, current){
    if( initial > 0 && quantity > 0 && current > 0){
        if (initial > current) {
            var loss = (initial - current)*quantity;
            var lossPercentage = (loss / initial)*100;

            showOutput(`The Loss is ${loss} and the percent is ${lossPercentage.toFixed(3)}% `,0);
        } else if (current > initial){
            var profit = (current - initial)*quantity;
            var profitPercentage = (profit / initial)*100;
            showOutput(`The Profit is ${profit} and the percent is ${profitPercentage.toFixed(3)}%`,2);
        } else {
            showOutput(`No pain No gain and No gain No pain`,1);
        }
    }
    else {
        alert ("Please enter all inputs positive");
    }
}

function submitHandler(){
    calculateProfitAndLoss(Number(initialPrice.value),Number(stocksQuantity.value) ,Number(currentPrice.value));
}

function showOutput(message,it){
    outputBox.innerHTML = message; 
    outputBox.style.display = 'block';

     switch (it) {
        case 0:
            outputBox.style.color = 'red';
            break;
        case 1:
            outputBox.style.color = 'blue';
            break;
        case 2:
            outputBox.style.color = 'green';
            break;
    }
}

submitBtn.addEventListener('click',submitHandler);
