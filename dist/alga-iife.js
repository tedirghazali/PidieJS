var _=function(r){"use strict";var n={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:255,n=Number(r)+1;return Math.floor(Math.random()*n)}},t={random:function(){for(var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,n="",t="0123456789",e=0;e<r;e++)n+=t.charAt(Math.floor(Math.random()*t.length));return n}},e={random:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"basic",t="",e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";"hex"===n?e="0123456789abcdef":"password"===n&&(e="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?");for(var o=0;o<r;o++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}},o={split:function(r){return function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,e=[];return"string"==typeof r&&(n>=1&&e.push(r.slice(0,n)),null!==t?(e.push(r.slice(n,t)),e.push(r.slice(t))):e.push(r.slice(n))),e}}};function i(r){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function a(r,n){return function(r){if(Array.isArray(r))return r}(r)||function(r,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(r)))return;var t=[],e=!0,o=!1,i=void 0;try{for(var a,u=r[Symbol.iterator]();!(e=(a=u.next()).done)&&(t.push(a.value),!n||t.length!==n);e=!0);}catch(r){o=!0,i=r}finally{try{e||null==u.return||u.return()}finally{if(o)throw i}}return t}(r,n)||f(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r){return function(r){if(Array.isArray(r))return l(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||f(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r,n){if(r){if("string"==typeof r)return l(r,n);var t=Object.prototype.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(r,n):void 0}}function l(r,n){(null==n||n>r.length)&&(n=r.length);for(var t=0,e=new Array(n);t<n;t++)e[t]=r[t];return e}var c={insert:function(){for(var r=arguments.length,n=new Array(r),t=0;t<r;t++)n[t]=arguments[t];if(!n)return function(r){throw new Error("Please insert value at least one value")}();var e=function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!r)return function(r){throw new Error("to be able to insert value, you have to add array here")}();var t=Array.from(r);return{first:function(){return[].concat(n,u(t))},last:function(){return[].concat(u(t),n)},before:function(r){var e=isNaN(r)?1:r;return t.splice(Number(e)-1,0,n),t.flat()},after:function(r){var e=isNaN(r)?0:r;return t.splice(Number(e)+1,0,n),t.flat()}}};return e},toggle:function(r){return function(n){var t=Array.from(n);if(t.includes(r)){var e=t.findIndex((function(n){return n===r}));t.splice(e,1)}else t.push(r);return t}},flatten:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],e={};e.id=n.id||"id",e.parent=n.parent||"parent",e.children=n.children||"children";var o=function(){Array.from(r).forEach((function(r){if("object"===i(r)&&null!==r){var n=r;n[e.parent]="0","object"===i(n[e.children])&&Array.isArray(n[e.children])&&(a(n[e.children],r),delete n[e.children]),t.push(n)}}))},a=function r(n,o){n.length>=1&&Array.from(n).forEach((function(n){if("object"===i(n)&&null!==n){var a=n;a[e.parent]=o[e.id],"object"===i(a[e.children])&&Array.isArray(a[e.children])&&(r(a[e.children],n),delete a[e.children]),t.push(a)}}))};return o(),t},nested:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],e=Array.from(r),o={};o.id=n.id||"id",o.parent=n.parent||"parent",o.children=n.children||"children";var a=function(r){r.forEach((function(r){if("object"===i(r)&&null!==r){var n=null;("string"==typeof r[o.parent]&&"0"===r[o.parent]||"number"==typeof r[o.parent]&&0===r[o.parent])&&(n=u(r)),null!==n&&t.push(n)}}))},u=function(r){var n=r;return void 0!==r[o.children]&&null!==r[o.children]||(n[o.children]=f(r[o.id]),n[o.children].length<=0&&delete n[o.children]),delete n[o.parent],n},f=function(r){var n=[];return l(r).length>=1&&l(r).forEach((function(r){n.push(u(r))})),n},l=function(r){return e.filter((function(n){return n.parent===r}))};return a(e),t},index:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Array.from(r),e={};return e.key=n.key||"id",e.value=n.value||0,t.length>=1?t.findIndex((function(r){return r[e.key]===e.value})):0},search:function(r){return"string"!=typeof r?function(r){throw new TypeError}():function(n){return"object"!==i(n)?function(r){throw new TypeError}():Array.from(n).filter((function(n){for(var t=0,e=Object.entries(n);t<e.length;t++){var o=a(e[t],2);o[0];var i=o[1];if("string"==typeof i&&-1!==i.toLowerCase().indexOf(r.toLowerCase()))return!0;if("number"==typeof i&&i===Number(r))return!0}return!1}))}},filter:function(r){return"string"!=typeof r?function(r){throw new TypeError}():function(n,t){return"object"!==i(n)?function(r){throw new TypeError}():Array.from(n).filter((function(n){for(var e=0,o=Array.from(t);e<o.length;e++){var i=o[e];if(i in n){if("string"==typeof n[i]&&-1!==n[i].toLowerCase().indexOf(r.toLowerCase()))return!0;if("number"==typeof n[i]&&n[i]===Number(r))return!0}}return!1}))}}},h={size:function(r,n){if(0===r)return"0 Bytes";var t=n||1,e=Math.floor(Math.log(r)/Math.log(1e3));return parseFloat((r/Math.pow(1e3,e)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},name:function(r){if("string"==typeof r)return r.indexOf("",41)>40?r.slice(0,41)+"...":r},type:function(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"type",t=r.split("/");return"format"==n?t.shift():t.pop(),t.join("")},image:function(r){if("name"in r&&"string"==typeof r.name)return URL.createObjectURL(r)},loadImage:function(r){"name"in r&&"string"==typeof r.name&&URL.revokeObjectURL(r)},formatSize:function(r){for(var n=0,t=r,e=t.length,o=0;o<e;o++)n+=t[o].size;for(var i=n+" bytes",a=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=0,f=n/1024;f>1;f/=1024,u++)i=f.toFixed(3)+" "+a[u]+" ("+n+" bytes)";return i},humanSize:function(r){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=n?1e3:1024;if(Math.abs(r)<e)return r+" B";var o=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],i=-1,a=Math.pow(10,t);do{r/=e,++i}while(Math.round(Math.abs(r)*a)/a>=e&&i<o.length-1);return r.toFixed(t)+" "+o[i]}};return r.$array=c,r.$char=e,r.$file=h,r.$int=n,r.$number=t,r.$string=o,Object.defineProperty(r,"__esModule",{value:!0}),r}({});