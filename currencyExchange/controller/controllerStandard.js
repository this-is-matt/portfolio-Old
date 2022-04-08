import * as model from "../model/modelStandard.js";

const base = document.querySelector("#base");
const getBtn = document.querySelector("#getBtn");

getBtn.addEventListener('click', ()=>{
    let bval = base.value;
    console.log(bval);
    let c = model.pairConversion(bval);
    console.log("c is: ", c);
})