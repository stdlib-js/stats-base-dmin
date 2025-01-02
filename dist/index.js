"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(A,d){
var x=require('@stdlib/math-base-assert-is-nan/dist'),l=require('@stdlib/math-base-assert-is-negative-zero/dist');function R(e,r,a,o){var n,t,i,u;if(e<=0)return NaN;if(e===1||a===0)return r[o];for(t=o,n=r[t],u=1;u<e;u++){if(t+=a,i=r[t],x(i))return i;(i<n||i===n&&l(i))&&(n=i)}return n}d.exports=R
});var m=v(function(B,f){
var _=require('@stdlib/strided-base-stride2offset/dist'),g=s();function E(e,r,a){return g(e,r,a,_(e,a))}f.exports=E
});var y=v(function(C,p){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=m(),Z=s();O(c,"ndarray",Z);p.exports=c
});var b=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=y(),q,j=h(b(__dirname,"./native.js"));k(j)?q=w:q=j;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
