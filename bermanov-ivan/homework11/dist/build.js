!function(e){var o={};function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,o,t){r.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,o){if(1&o&&(e=r(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var n in e)r.d(t,n,function(o){return e[o]}.bind(null,n));return t},r.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(o,"a",o),o},r.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},r.p="",r(r.s=0)}([function(e,o,r){const{calculator:t}=r(1);console.log(`calculator(2, 3, +): ${t(2,3,"+")}`),console.log(`calculator(10, 5, /): ${t(10,5,"/")}`),console.log(`calculator(8, null, '/'): ${t(8,null,"/")}`),console.log(`calculator(25, 'bye', '+'): ${t(25,"bye","+")}`),console.log(`calculator(1, 0, undefined): ${t(1,0,void 0)}`),console.log(`calculator(40, 23, 'Hello, BDD!'): ${t(40,23,"Hello, BDD!")}`)},function(e,o){e.exports={calculator:(e,o,r)=>{if(void 0!==e&&void 0!==o&&void 0!==r){if(isNaN(e)||isNaN(o))return NaN;switch(r){case"+":return e+o;case"-":return e-o;case"*":return e*o;case"/":return!e||0!==o&&""!==o&&null!==o||"/"!==r?e/o:new Error;default:return}}}}}]);