"use strict";var t=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=t(function(B,m){
var R=require('@stdlib/math-base-assert-is-nanf/dist'),f=require('@stdlib/math-base-special-abs/dist');function _(a,r,n){var s,e,i,u;if(a<=0)return NaN;if(a===1||n===0)return f(r[0]);for(n<0?e=(1-a)*n:e=0,s=f(r[e]),u=1;u<a;u++){if(e+=n,i=f(r[e]),R(i))return i;i>s&&(s=i)}return s}m.exports=_
});var c=t(function(C,b){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),q=require('@stdlib/math-base-special-abs/dist');function O(a,r,n,s){var e,i,u,v;if(a<=0)return NaN;if(a===1||n===0)return q(r[s]);for(i=s,e=q(r[i]),v=1;v<a;v++){if(i+=n,u=q(r[i]),E(u))return u;u>e&&(e=u)}return e}b.exports=O
});var j=t(function(D,y){
var d=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=x(),g=c();d(p,"ndarray",g);y.exports=p
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=j(),o,l=k(h(__dirname,"./native.js"));w(l)?o=z:o=l;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
