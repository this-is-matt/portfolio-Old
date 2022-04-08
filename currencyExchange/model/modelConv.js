import * as view from "../view/viewConv.js";
//can add the time it was pulled. future https://www.exchangerate-api.com/docs/pair-conversion-requests would also be good practice to add error handling.
export function pairConversion(bval, tval, amt = '1') {
    let pairUrl = `https://v6.exchangerate-api.com/v6/dd6f89e816b0ad8db0b06551/pair/${bval}/${tval}/${amt}`;

    fetch(pairUrl)
        .then(response => response.json())
        .then(data => {
            let conversion = data.conversion_result;
            console.log(data);
            view.displayResult(conversion, bval, tval);
        });
}

export function getCurrencyCodes(id="#base"){
    let jsonPath = "./json/currencyCodes.json";

    fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
            let codes = data;
            console.log(codes[0][0]);
            view.buildInput(codes, id);
        });
}