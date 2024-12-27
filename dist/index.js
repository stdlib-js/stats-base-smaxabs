"use strict";var n=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var q=n(function(B,m){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),v=require('@stdlib/math-base-special-abs/dist');function l(e,r,a,f){var s,u,i,t;if(e<=0)return NaN;if(e===1||a===0)return v(r[f]);for(u=f,s=v(r[u]),t=1;t<e;t++){if(u+=a,i=v(r[u]),j(i))return i;i>s&&(s=i)}return s}m.exports=l
});var c=n(function(C,x){
var R=require('@stdlib/strided-base-stride2offset/dist'),_=q();function E(e,r,a){return _(e,r,a,R(e,a))}x.exports=E
});var y=n(function(D,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=c(),g=q();O(b,"ndarray",g);p.exports=b
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=y(),o,d=k(h(__dirname,"./native.js"));w(d)?o=z:o=d;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
