export function displayResult(conversion, codes){
   const resCont = document.querySelector('.result');
   resCont.textContent = "Below are all the exchange rates for the support currencies.";
   
   let i = 0;
   // for(i in conversion){
   //    const entry = document.createElement("p");
   //    entry.textContent = conversion[i];

   //    resCont.appendChild(entry);
   //    }
   // conversion.forEach(e => {
   //    const entry = `${e[conversion_rates][i]}`;
   //    resCont.appendChild = entry;
   //    i++;
   // });
   console.log(codes[0][0]);
}