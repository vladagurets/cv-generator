parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"EQlm":[function(require,module,exports) {
!function(t){"use strict";var o,e=t.Uint8Array,n=t.HTMLCanvasElement,s=n&&n.prototype,i=/\s*;\s*base64\s*(?:;|$)/i,a="toDataURL",l=function(t){for(var n,s,i=t.length,a=new e(i/4*3|0),l=0,b=0,r=[0,0],f=0,B=0;i--;)s=t.charCodeAt(l++),255!==(n=o[s-43])&&void 0!==n&&(r[1]=r[0],r[0]=s,B=B<<6|n,4===++f&&(a[b++]=B>>>16,61!==r[1]&&(a[b++]=B>>>8),61!==r[0]&&(a[b++]=B),f=0));return a};e&&(o=new e([62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,0,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51])),!n||s.toBlob&&s.toBlobHD||(s.toBlob||(s.toBlob=function(t,o){if(o||(o="image/png"),this.mozGetAsFile)t(this.mozGetAsFile("canvas",o));else if(this.msToBlob&&/^\s*image\/png\s*(?:$|;)/i.test(o))t(this.msToBlob());else{var n,s=Array.prototype.slice.call(arguments,1),b=this[a].apply(this,s),r=b.indexOf(","),f=b.substring(r+1),B=i.test(b.substring(0,r));Blob.fake?((n=new Blob).encoding=B?"base64":"URI",n.data=f,n.size=f.length):e&&(n=B?new Blob([l(f)],{type:o}):new Blob([decodeURIComponent(f)],{type:o})),t(n)}}),!s.toBlobHD&&s.toDataURLHD?s.toBlobHD=function(){a="toDataURLHD";var t=this.toBlob();return a="toDataURL",t}:s.toBlobHD=s.toBlob)}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content||this);
},{}]},{},["EQlm"], null)
//# sourceMappingURL=canvas-toBlob.7115ed6a.js.map