import * as model from "../model/modelConv.js";

const base = document.querySelector("#base");
const target = document.querySelector("#target");
const amount = document.querySelector("#amt");
const getBtn = document.querySelector("#getBtn");


//grab data
getBtn.addEventListener('click', ()=>{
    let bval = base.value;
    let tval = target.value;
    let amt = amount.value;
    console.log(bval, tval);
    let c = model.pairConversion(bval, tval, amt);
    console.log("c is: ", c);
})