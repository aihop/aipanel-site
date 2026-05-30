import{ao as n}from"../nitro/nitro.mjs";function findValuesBetween(e,t,i){const o=e.findIndex(e=>n(e,t)),r=e.findIndex(e=>n(e,i));if(-1===o||-1===r)return[];const[s,f]=[o,r].sort((n,e)=>n-e);return e.slice(s,f+1)}export{findValuesBetween as f};
//# sourceMappingURL=arrays-CUnLpV5g.mjs.map
