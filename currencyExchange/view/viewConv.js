import * as model from "../model/modelConv.js";
//build dropdowns immediately
model.getCurrencyCodes('#base');
model.getCurrencyCodes('#target');

export function displayResult(conversion, bval, tval){
   const resCont = document.querySelector('.result');
   resCont.textContent = `The conversion between ${bval} and ${tval} is $${conversion}`; 
}

export function buildInput(codes, id='#base'){
   const baseCont =document.querySelector(id);
   codes.forEach(e => {
      console.log( `${e[0]} - ${e[2]}`);
      let option = document.createElement("option");
      option.textContent = `${e[0]} - ${e[2]}`; 
      option.setAttribute("value", e[0]);
      if(e[0]==="USD"){
         option.setAttribute("selected","");
      }
      baseCont.appendChild(option);
      
      
   });
}