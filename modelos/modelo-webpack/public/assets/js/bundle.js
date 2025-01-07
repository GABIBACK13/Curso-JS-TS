(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>c});var o=e(354),t=e.n(o),a=e(314),A=e.n(a)()(t());A.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),A.push([n.id,".material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 24\n}\n\n:root {\n  /* complementar pattern colors */\n  --A1_primary_color: #042498;\n  --A2_primary_color: #fdba00;\n  --B1_secondary_color: #212F63;\n  --B2_secondary_color: #78601E;\n  --C1_neutral_center_color: #222633;\n  --C2_neutral_center_color: #38311C;\n  --Neutral: #efefe7;\n}\n * {\nmargin: 0;\npadding: 0;\nfont-family: 'Open Sans', sans-serif;\n}\n\nheader {\n  margin: auto;\n  padding: 25px;\n  text-align: center;\n  background-color: var(--B1_secondary_color);\n  color: var(--A2_primary_color);\n  border-bottom: 3px solid var(--B2_secondary_color);\n  box-sizing: border-box;\n  box-shadow: 0px 1px 4px var(--C2_neutral_center_color);\n}\n\nbody {\n  background-color: var(--C1_neutral_center_color);\n  color: var(--Neutral);\n  text-align: center;\n}\n\n.container {\n  position: relative;\n  padding: 16px;\n  margin: auto;\n  background-color: var(--B1_secondary_color);\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 8px;\n  box-shadow: 2px 2px 4px var(--C2_neutral_center_color);\n}\n\n.btn-menu {\n  position: absolute;\n  text-align: center;\n  background-color: var(--C2_neutral_center_color);\n  border-radius: 0px 0px 8px 8px;\n  padding-top: 8px;\n  width: 100%;\n  top: 91.75%;\n  left: -0.08%;\n  cursor: pointer;\n}\n\n.btn-menu-display {\n  display: none;\n}\n\n.menu-active {\n  display: block;\n  text-align: center;\n  margin: -10px 64px;\n  padding: 8px;\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 0px 0px 8px 8px;\n  background-color: var(--C2_neutral_center_color);\n}\n\n.btn1 {\n  padding: 8px;\n  font-size: 1.2em;\n  color: var(--A2_primary_color);\n  background-color: var(--B1_secondary_color);\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.container-active {\n  border-bottom: none;\n}\n\n/* smartphone media*/\n@media screen and (max-width: 768px) {\n  .container {\n    margin: 64px;\n    margin-bottom: 0px;\n    min-height: 60vh;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .btn-menu {\n    display: none;\n  }\n  .btn-menu-display {\n    display: block;\n  }\n  .menu-active {\n    display: none;\n  }\n  .container {\n    width: 50%;\n    margin: 50px auto;\n    margin-bottom: 0px;\n    min-height: 60vh;\n  }\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE;;;;;AAKF;;AAEA;EACE,gCAAgC;EAChC,2BAA2B;EAC3B,2BAA2B;EAC3B,6BAA6B;EAC7B,6BAA6B;EAC7B,kCAAkC;EAClC,kCAAkC;EAClC,kBAAkB;AACpB;CACC;AACD,SAAS;AACT,UAAU;AACV,oCAAoC;AACpC;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,2CAA2C;EAC3C,8BAA8B;EAC9B,kDAAkD;EAClD,sBAAsB;EACtB,sDAAsD;AACxD;;AAEA;EACE,gDAAgD;EAChD,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,2CAA2C;EAC3C,2CAA2C;EAC3C,kBAAkB;EAClB,sDAAsD;AACxD;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,gDAAgD;EAChD,8BAA8B;EAC9B,gBAAgB;EAChB,WAAW;EACX,WAAW;EACX,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,2CAA2C;EAC3C,8BAA8B;EAC9B,gDAAgD;AAClD;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,8BAA8B;EAC9B,2CAA2C;EAC3C,2CAA2C;EAC3C,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,mBAAmB;AACrB;;AAEA,oBAAoB;AACpB;EACE;IACE,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,aAAa;EACf;EACA;IACE,cAAc;EAChB;EACA;IACE,aAAa;EACf;EACA;IACE,UAAU;IACV,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;EAClB;AACF",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 0,\n  'wght' 400,\n  'GRAD' 0,\n  'opsz' 24\n}\n\n:root {\n  /* complementar pattern colors */\n  --A1_primary_color: #042498;\n  --A2_primary_color: #fdba00;\n  --B1_secondary_color: #212F63;\n  --B2_secondary_color: #78601E;\n  --C1_neutral_center_color: #222633;\n  --C2_neutral_center_color: #38311C;\n  --Neutral: #efefe7;\n}\n * {\nmargin: 0;\npadding: 0;\nfont-family: 'Open Sans', sans-serif;\n}\n\nheader {\n  margin: auto;\n  padding: 25px;\n  text-align: center;\n  background-color: var(--B1_secondary_color);\n  color: var(--A2_primary_color);\n  border-bottom: 3px solid var(--B2_secondary_color);\n  box-sizing: border-box;\n  box-shadow: 0px 1px 4px var(--C2_neutral_center_color);\n}\n\nbody {\n  background-color: var(--C1_neutral_center_color);\n  color: var(--Neutral);\n  text-align: center;\n}\n\n.container {\n  position: relative;\n  padding: 16px;\n  margin: auto;\n  background-color: var(--B1_secondary_color);\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 8px;\n  box-shadow: 2px 2px 4px var(--C2_neutral_center_color);\n}\n\n.btn-menu {\n  position: absolute;\n  text-align: center;\n  background-color: var(--C2_neutral_center_color);\n  border-radius: 0px 0px 8px 8px;\n  padding-top: 8px;\n  width: 100%;\n  top: 91.75%;\n  left: -0.08%;\n  cursor: pointer;\n}\n\n.btn-menu-display {\n  display: none;\n}\n\n.menu-active {\n  display: block;\n  text-align: center;\n  margin: -10px 64px;\n  padding: 8px;\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 0px 0px 8px 8px;\n  background-color: var(--C2_neutral_center_color);\n}\n\n.btn1 {\n  padding: 8px;\n  font-size: 1.2em;\n  color: var(--A2_primary_color);\n  background-color: var(--B1_secondary_color);\n  border: 2px solid var(--B2_secondary_color);\n  border-radius: 8px;\n  cursor: pointer;\n}\n.container-active {\n  border-bottom: none;\n}\n\n/* smartphone media*/\n@media screen and (max-width: 768px) {\n  .container {\n    margin: 64px;\n    margin-bottom: 0px;\n    min-height: 60vh;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .btn-menu {\n    display: none;\n  }\n  .btn-menu-display {\n    display: block;\n  }\n  .menu-active {\n    display: none;\n  }\n  .container {\n    width: 50%;\n    margin: 50px auto;\n    margin-bottom: 0px;\n    min-height: 60vh;\n  }\n}"],sourceRoot:""}]);const c=A},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var c=0;c<this.length;c++){var i=this[c][0];null!=i&&(A[i]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);o&&A[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),t&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=t):l[4]="".concat(t)),r.push(l))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},A=[],c=0;c<n.length;c++){var i=n[c],s=o.base?i[0]+o.base:i[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var d=e(p),u={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==d)r[d].references++,r[d].updater(u);else{var C=t(u,o);o.byIndex=c,r.splice(c,0,{identifier:p,updater:C,references:1})}A.push(p)}return A}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var c=e(a[A]);r[c].references--}for(var i=o(n,t),s=0;s<a.length;s++){var l=e(a[s]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=e(72),t=e.n(o),a=e(825),A=e.n(a),c=e(659),i=e.n(c),s=e(56),l=e.n(s),p=e(540),d=e.n(p),u=e(113),C=e.n(u),m=e(958),B={};B.styleTagTransform=C(),B.setAttributes=l(),B.insert=i().bind(null,"head"),B.domAPI=A(),B.insertStyleElement=d(),t()(m.A,B),m.A&&m.A.locals&&m.A.locals;var g=document.querySelector(".container");document.querySelector(".btn-menu").addEventListener("click",(function(){var n=document.querySelector(".btn-menu-display"),r=document.querySelector(".btn-menu-arrow");g.classList.toggle("container-active"),n.classList.toggle("menu-active"),n.classList.contains("menu-active")?(r.style.transition="transform 0.4s",r.style.transform="rotate(180deg)"):r.style.transform="rotate(0deg)"}))})();
//# sourceMappingURL=bundle.js.map