"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var q=s(function(z,o){
var l=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-assert-is-negative-zero/dist');function x(n,r,v){var u,i,e,a;if(n<=0)return NaN;if(n===1||v===0)return r[0];for(v<0?i=(1-n)*v:i=0,u=r[i],a=1;a<n;a++){if(i+=v,e=r[i],l(e))return e;(e<u||e===u&&g(e))&&(u=e)}return u}o.exports=x
});var c=s(function(A,m){
var R=require('@stdlib/math-base-assert-is-nan/dist'),Z=require('@stdlib/math-base-assert-is-negative-zero/dist');function _(n,r,v,u){var i,e,a,t;if(n<=0)return NaN;if(n===1||v===0)return r[u];for(e=u,i=r[e],t=1;t<n;t++){if(e+=v,a=r[e],R(a))return a;(a<i||a===i&&Z(a))&&(i=a)}return i}m.exports=_
});var y=s(function(B,d){
var E=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),p=q(),N=c();E(p,"ndarray",N);d.exports=p
});var O=require("path").join,b=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=y(),f,j=b(O(__dirname,"./native.js"));h(j)?f=k:f=j;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
