parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CEcI":[function(require,module,exports) {
openNav=function(){document.getElementById("mobile-navbar").classList.replace("navbar-closed","navbar-open"),document.getElementById("hamburger-link").style.width="0",document.getElementById("hamburger-link").style.opacity="0",document.getElementById("hamburger-link").style.height="0"},closeNav=function(){document.getElementById("mobile-navbar").classList.replace("navbar-open","navbar-closed"),document.getElementById("hamburger-link").style.width="10vh",document.getElementById("hamburger-link").style.opacity="1",document.getElementById("hamburger-link").style.height="5vh"};
},{}]},{},["CEcI"], null)
//# sourceMappingURL=drinks.aa8ff351.js.map