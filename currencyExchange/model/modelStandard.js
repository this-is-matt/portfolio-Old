import * as view from "../view/viewStandard.js";
//can add the time it was pulled. future https://www.exchangerate-api.com/docs/pair-conversion-requests would also be good practice to add error handling.
let codes;
export function pairConversion(bval = 'USD') {
    let pairUrl = `https://v6.exchangerate-api.com/v6/dd6f89e816b0ad8db0b06551/latest/${bval}`;

    fetch(pairUrl)
        .then(response => response.json())
        .then(data => {
            let conversion = data.conversion_rates;
            console.log(data);
            getCurrencyCodes();
            view.displayResult(conversion, codes);
        });
}


export function getCurrencyCodes(){
    let jsonPath = "../json/currencyCodes.json";

    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            codes = data;
            console.log(codes[0][0]);
        });
}