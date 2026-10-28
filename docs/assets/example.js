"use strict";
(()=>{const select=document.getElementById("case");if(!select)return;
const cases=[{x:1,n:1},{x:.5,n:2},{x:29/51,n:1}];
function update(){const c=cases[Number(select.value)];if(!c)return;const x=c.x,n=c.n,o=5*x+6.5*(1-x),co=3*x+4*(1-x),w=4*x+5*(1-x);const values={basis:(100*x).toFixed(2)+"%",amount:n.toFixed(3)+"mol",oxygen:(o*n).toFixed(3)+"mol",normalized:o.toFixed(3)+"mol/mol",carbon:(co*n).toFixed(3)+"mol",water:(w*n).toFixed(3)+"mol"};for(const [id,value]of Object.entries(values))document.getElementById(id).textContent=value;}
select.addEventListener("change",update);update();})();