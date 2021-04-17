!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self)._={})}(this,(function(e){"use strict";var r={random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:255,r=Number(e)+1;return Math.floor(Math.random()*r)}},t={random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3;if("number"!=typeof e&&e<=0)throw new Error("You have to add a number at least 1");for(var r="",t="0123456789",n=0;n<e;n++)r+=t.charAt(Math.floor(Math.random()*t.length));return r},loop:function(e,r){if("number"!=typeof e&e<=-1)throw new Error("Only accept number here, start from 0");if("number"!=typeof r&r<=0)throw new Error("Only accept number here, start from 1");for(var t=[];e<=r;)t.push(e++);return t}},n={random:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"basic",t="",n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_";"hex"===r?n="0123456789abcdef":"password"===r&&(n="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_~!@#$%^&*()+={}[]|:;<>,./?");for(var o=0;o<e;o++)t+=n.charAt(Math.floor(Math.random()*n.length));return t}},o={split:function(e){return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=[];return"string"==typeof e&&(r>=1&&n.push(e.slice(0,r)),null!==t?(n.push(e.slice(r,t)),n.push(e.slice(t))):n.push(e.slice(r))),n}},capitalize:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"single";if("string"==typeof e){var t=e;return t="multiple"===r?t.toLowerCase().replace(/\w\S*/g,(function(e){return e.replace(/^\w/,(function(e){return e.toUpperCase()}))})):t.trimStart().replace(/^\w/,(function(e){return e.toUpperCase()}))}}};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}(e,r)||l(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||l(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function s(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=l(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,u=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return i=e.done,e},e:function(e){u=!0,a=e},f:function(){try{i||null==t.return||t.return()}finally{if(u)throw a}}}}var h=function(){function e(r,t){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.valArr=r,this.toArr=t}var r,t,n;return r=e,(t=[{key:"first",value:function(){return[].concat(f(this.valArr),f(this.toArr))}},{key:"last",value:function(){return[].concat(f(this.toArr),f(this.valArr))}},{key:"before",value:function(e){var r=isNaN(e)?1:e;return this.toArr.splice(Number(r)-1,0,this.valArr),this.toArr.flat()}},{key:"after",value:function(e){var r=isNaN(e)?0:e;return this.toArr.splice(Number(r)+1,0,this.valArr),this.toArr.flat()}}])&&i(r.prototype,t),n&&i(r,n),e}(),m=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{key:"id",value:0},t=Array.from(e),n=-1;return"key"in r&&"value"in r?n=t.length>=1?t.findIndex((function(e){return e[r.key]===r.value})):-1:t.length>=1&&(n=t.findIndex((function(e){for(var t=0,n=Object.entries(r);t<n.length;t++){var o=u(n[t],2),a=o[0],i=o[1];if(a in e&&e[a]===i)return!0}}))),n},v=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r){for(var n={},o=0,a=r;o<a.length;o++)for(var i=a[o],f=0,l=Object.entries(i);f<l.length;f++){var c=u(l[f],2),s=c[0],h=c[1];n[s]=h}return n}},d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("object"===a(e)){var t=Array.from(e),n=[];if("string"==typeof r){var o,i=new Set,u=s(t);try{for(u.s();!(o=u.n()).done;){var l=o.value;i.has(l[r])||i.add(l[r])}}catch(e){u.e(e)}finally{u.f()}n=f(i)}else{var c,h=new Set,m=s(t);try{for(m.s();!(c=m.n()).done;){var v=c.value;h.has(v)||h.add(v)}}catch(e){m.e(e)}finally{m.f()}n=f(h)}return n}},y=function(e){return!("object"!==a(e)||null===e||!Array.isArray(e))},g=function(e){if(!y(e))throw new Error("This argument only accept array");var r,t={},n=new Set,o=s(new Set(e));try{var a=function(){var o=r.value,a=Array.from(e).filter((function(e){return e===o}));n.has(a.length)||(n.add(a.length),t[a.length]=[]),a.forEach((function(e){t[a.length].push(e)}))};for(o.s();!(r=o.n()).done;)a()}catch(e){o.e(e)}finally{o.f()}return t},p=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");var n=[],o={};r.forEach((function(e,r){if(y(e)?o[r]=new Set(e):o[r]=(new Set).add(e),0!==r){var t,a=s(e);try{for(a.s();!(t=a.n()).done;){var i=t.value;o[r-1].has(i)&&n.push(i)}}catch(e){a.e(e)}finally{a.f()}}}));var a=g(n);return Array.from(new Set(a[r.length-1]))},b=function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];if(!y(e)&&e.length<=0)throw new Error("You need to provide more values to your array");if(!t&&t.length<=0)throw new Error("You have to provide here at least 1 value");var o,a=[],i=s(e);try{for(i.s();!(o=i.n()).done;){var u=o.value;t.flat().includes(u)||a.push(u)}}catch(e){i.e(e)}finally{i.f()}return a},w={insert:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if("object"===a(e)){var o=Array.from(e),i=new h(r,o);return"first"===t?i=i.first():"last"===t?i=i.last():"before"===t?i=i.before(n):"after"===t&&(i=i.after(n)),i}};return n}},insertBefore:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e,t){var n=Array.from(e);return new h(r,n).before(t)}},insertAfter:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e,t){var n=Array.from(e);return new h(r,n).after(t)}},update:function(e){if("object"===a(e)||null===e)return function(r,t){if("object"===a(r)||"object"===a(t)){var n=Array.from(r),o=m(n,t);return n.map((function(r,t){var n=r;return t===o&&(n=v(r,e)),n}))}}},destroy:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)){var t,n=Array.from(e),o=[],i=s(r);try{var u=function(){var e=t.value;if("string"==typeof e&&"first"===e)n=n.map((function(e,r){return 0===r?null:e})),o=n;else if("string"==typeof e&&"last"===e)n=n.map((function(e,r){return r===n.length-1?null:e})),o=n;else if("number"==typeof e)n=n.map((function(r,t){return t===e?null:r})),o=n;else if("object"===a(e)&&null!==e){var r=m(n,e);n=n.map((function(e,t){return t===r?null:e})),o=n}};for(i.s();!(t=i.n()).done;)u()}catch(e){i.e(e)}finally{i.f()}return o.filter((function(e){return null!==e}))}}},select:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)){for(var t=Array.from(e),n=[],o=function(){var e=u[i],t={};r.forEach((function(r){r in e&&(t[r]=e[r])})),n.push(t)},i=0,u=t;i<u.length;i++)o();return n}}},hidden:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)){for(var t=Array.from(e),n=[],o=function(){var e=u[i],t=e;r.forEach((function(r){r in e&&delete t[r]})),n.push(t)},i=0,u=t;i<u.length;i++)o();return n}}},toggle:function(e){return function(r){var t=Array.from(r);if(t.includes(e)){var n=t.findIndex((function(r){return r===e}));t.splice(n,1)}else t.push(e);return t}},flatten:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n={};n.id=r.id||"id",n.parent=r.parent||"parent",n.children=r.children||"children";var o=function(){Array.from(e).forEach((function(e){if("object"===a(e)&&null!==e){var r=e;r[n.parent]="0","object"===a(r[n.children])&&Array.isArray(r[n.children])&&(i(r[n.children],e),delete r[n.children]),t.push(r)}}))},i=function e(r,o){r.length>=1&&Array.from(r).forEach((function(r){if("object"===a(r)&&null!==r){var i=r;i[n.parent]=o[n.id],"object"===a(i[n.children])&&Array.isArray(i[n.children])&&(e(i[n.children],r),delete i[n.children]),t.push(i)}}))};return o(),t},nested:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[],n=Array.from(e),o={};o.id=r.id||"id",o.parent=r.parent||"parent",o.children=r.children||"children";var i=function(e){e.forEach((function(e){if("object"===a(e)&&null!==e){var r=null;("string"==typeof e[o.parent]&&"0"===e[o.parent]||"number"==typeof e[o.parent]&&0===e[o.parent])&&(r=u(e)),null!==r&&t.push(r)}}))},u=function(e){var r=e;return void 0!==e[o.children]&&null!==e[o.children]||(r[o.children]=f(e[o.id]),r[o.children].length<=0&&delete r[o.children]),delete r[o.parent],r},f=function(e){var r=[];return l(e).length>=1&&l(e).forEach((function(e){r.push(u(e))})),r},l=function(e){return n.filter((function(r){return r.parent===e}))};return i(n),t},index:m,search:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)){var t=[];return r.forEach((function(r){var n=Array.from(e).filter((function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var o=u(n[t],2),a=o[0],i=o[1];if("NaN"!==Number(e[a])&&Number(i)===Number(r))return!0;if("string"==typeof e[a]&&-1!==i.toLowerCase().indexOf(r.toLowerCase()))return!0}return!1}));t=d(t.concat(n))})),t}}},searchBy:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e,t){if("object"===a(e)){var n=[];return r.forEach((function(r){var o=Array.from(e).filter((function(e){for(var n=0,o=Array.from(t);n<o.length;n++){var a=o[n];if(a in e){if("NaN"!==Number(e[a])&&Number(e[a])===Number(r))return!0;if("string"==typeof e[a]&&-1!==e[a].toLowerCase().indexOf(r.toLowerCase()))return!0}}return!1}));n=d(n.concat(o))})),n}}},filtered:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e,t){if("object"===a(e)){var n=Array.from(e);return r.forEach((function(e,r){var o=n.filter((function(n){if(void 0!==t[r]||null!==t[r]){var o=t[r];if(o in n){if("NaN"!==Number(n[o])&&Number(n[o])===Number(e))return!0;if("string"==typeof n[o]&&-1!==n[o].toLowerCase().indexOf(e.toLowerCase()))return!0}}return!1}));n=o})),n}}},sort:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if("object"===a(e)&&"string"==typeof r){var t=Array.from(e);return"desc"===r?t.sort((function(e,r){if("number"==typeof e&&"number"==typeof r)return r-e;if("string"==typeof e&&"string"==typeof r){var t=e.toLowerCase(),n=r.toLowerCase(),o=0;return n<t?o=-1:n>t&&(o=1),o}})):t.sort((function(e,r){if("number"==typeof e&&"number"==typeof r)return e-r;if("string"==typeof e&&"string"==typeof r){var t=e.toLowerCase(),n=r.toLowerCase(),o=0;return t<n?o=-1:t>n&&(o=1),o}})),t}},sorted:function(e){if("object"===a(e))return function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";if("string"==typeof r&&"string"==typeof t){var n=Array.from(e);return"desc"===t?n.sort((function(e,t){if(r in e&&r in t&&"number"==typeof e[r]&&"number"==typeof t[r])return t[r]-e[r];if(r in e&&r in t&&"string"==typeof e[r]&&"string"==typeof t[r]){var n=e[r].toLowerCase(),o=t[r].toLowerCase(),a=0;return o<n?a=-1:o>n&&(a=1),a}})):n.sort((function(e,t){if(r in e&&r in t&&"number"==typeof e[r]&&"number"==typeof t[r])return e[r]-t[r];if(r in e&&r in t&&"string"==typeof e[r]&&"string"==typeof t[r]){var n=e[r].toLowerCase(),o=t[r].toLowerCase(),a=0;return n<o?a=-1:n>o&&(a=1),a}})),n}}},paginate:function(e){if("object"===a(e))return function(r,t){if("number"==typeof r&&"number"==typeof t){var n=Array.from(e),o=Number(t)*Number(r)-(Number(t)-1),a=Number(t)*Number(r);return n.slice(o-1,a<=n.length?a:n.length)}}},pages:function(e,r){if("object"===a(e)&&"number"==typeof r){var t=Array.from(e).length/Number(r),n=t.toString().split("."),o=Number(n[1])>=5?0:1,i=0;return i=(i=Number.isInteger(t)?t:Number(Number.parseFloat(t).toFixed(0))+o)===Number(r)?1:i}},show:function(e){if("object"===a(e))return function(r,t){if("number"==typeof r&&"number"==typeof t){var n=Array.from(e),o=Number(t)*Number(r)-(Number(t)-1),a=Number(t)*Number(r);return{from:o,to:a<=n.length?a:n.length,of:n.length}}}},pagination:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if("number"==typeof e){var n=[],o=Number(e)<Number(r)?Number(e):Number(r),a=Number(r)<1?1:Number(r),i=o+Number(t),u=a-Number(t);if(0===Number(t))for(var f=1;f<=Number(e);f++)n.push(f);else{if(a>1)for(var l=u;l<a;l++)n.push(l);for(var c=o;c<=i;c++)n.push(c)}var s=n.filter((function(e){return e>0})),h=s.filter((function(r){return r<=Number(e)}));return i<Number(e)&&0!==Number(t)&&h.push("..."),u>1&&0!==Number(t)&&h.unshift("..."),h}},sum:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if("object"===a(e)){var t=Array.from(e),n=0;if("string"==typeof r){var o,i=[],u=s(t);try{for(u.s();!(o=u.n()).done;){var f=o.value;r in f&&i.push(f[r])}}catch(e){u.e(e)}finally{u.f()}for(var l=0,c=i;l<c.length;l++){var h=c[l];n+=Number(h)}}else{var m,v=s(t);try{for(v.s();!(m=v.n()).done;){var d=m.value;n+=Number(d)}}catch(e){v.e(e)}finally{v.f()}}return n}},unique:d,isArray:y,isSuperset:function(e,r){if(!y(e)&&!y(r))throw new Error("The both of arguments must be in arrays");var t,n=new Set(e),o=s(r);try{for(o.s();!(t=o.n()).done;){var a=t.value;if(!n.has(a))return!1}}catch(e){o.e(e)}finally{o.f()}return!0},union:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");for(var n=new Set,o=0,a=r;o<a.length;o++){var i=a[o];y(i)?i.forEach((function(e){n.has(e)||n.add(e)})):n.has(i)||n.add(i)}return Array.from(n)},intersection:p,difference:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");var n=new Set,o=p.apply(void 0,r);return r.forEach((function(e){if(!y(e))throw new Error("Here only accept arrays from all arguments");var r,t=s(e);try{for(t.s();!(r=t.n()).done;){var a=r.value;o.includes(a)||n.has(a)||n.add(a)}}catch(e){t.e(e)}finally{t.f()}})),Array.from(n)},asymmetricDifference:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 2 arguments");for(var n=new Set,o=[],a=0,i=r;a<i.length;a++){var u=i[a];if(!y(u))throw new Error("Here only accept arrays from all arguments");u.forEach((function(e){n.has(e)?(n.delete(e),o.push(e)):o.includes(e)||n.add(e)}))}return Array.from(n)},complement:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=1)throw new Error("You have to provide here at least 1 value");var n=Array.from(r);n.shift();var o=new Set(b.apply(void 0,[r[0]].concat(f(n))));return Array.from(o)},without:b},N={remove:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)&&null!==e){for(var t={},n=0,o=Object.entries(e);n<o.length;n++){var i=u(o[n],1)[0];t[i]=e[i]}var f,l=s(r);try{for(l.s();!(f=l.n()).done;){var c=f.value;c in t&&delete t[c]}}catch(e){l.e(e)}finally{l.f()}return t}}},removeBy:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r)return function(e){if("object"===a(e)&&null!==e){for(var t={},n=new Set(r),o=0,i=Object.entries(e);o<i.length;o++){var f=u(i[o],1)[0];n.has(e[f])||(t[f]=e[f])}return t}}},merge:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(r){for(var n={},o=new Map,a=0,i=r;a<i.length;a++)for(var f=i[a],l=0,c=Object.entries(f);l<c.length;l++){var s=u(c[l],2),h=s[0],m=s[1];o.has(h)||(o.set(h,m),n[h]=m)}return n}},replace:v},A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,D=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,S=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],E=["January","February","March","April","May","June","July","August","September","October","November","December"],C=function(e,r){if("string"!=typeof e&&!1===new RegExp(A).test(e))throw new Error("You're entering the wrong date string, please use this statement \"new Date('yourdatestr').toString()\" instead");if("string"!=typeof r&&!1===new RegExp(D).test(r))throw new Error("Please enter the correct date format");var t,n=new Date(e),o=r,a=r,i={YY:function(){var e=n.getFullYear().toString().slice(-2),r=n.getFullYear();return"00"!==e&&(r=Number(e)),r},YYYY:n.getFullYear(),M:Number(n.getMonth()+1),MM:function(){var e=Number(n.getMonth()+1).toString();return 1===e.length?"0"+e:e},m:E[n.getMonth()].slice(0,3),mm:E[n.getMonth()],D:n.getDate,DD:function(){var e=n.getDate().toString(),r=e;1===e.length&&(r="0"+e);return r},d:S[n.getDay()].slice(0,3),dd:S[n.getDay()],H:n.getHours(),HH:function(){var e=n.getHours().toString();return 1===e.length?"0"+e:e},h:function(){var e=Number(n.getHours()+1),r=e;return e>12&&(r=e-(e-1)),r},hh:function(){var e=Number(n.getHours()+1),r=e;e>12&&(r=e-(e-1));var t=r.toString();return 1===t.length?"0"+t:t},k:function(){return 0===Number(n.getHours())?24:n.getHours()},kk:function(){var e=Number(n.getHours()).toString();if(1===e.length){var r="0"+e;return 0===Number(r)?24:r}return 0===Number(e)?24:e},i:n.getMinutes(),ii:function(){var e=n.getMinutes().toString();return 1===e.length?"0"+e:e},s:n.getSeconds(),ss:function(){var e=n.getSeconds().toString();return 1===e.length?"0"+e:e},A:n.getHours()<12?"AM":"PM",a:n.getHours()<12?"am":"pm",Do:n.getDate().toString()+"st"},u=s(o.split(/-|\/|\.|:|\s/));try{for(u.s();!(t=u.n()).done;){var f=t.value;"YY"===f?a=a.replace(f,i.YY()):"YYYY"===f?a=a.replace(f,i.YYYY):"M"===f?a=a.replace(f,i.M):"MM"===f?a=a.replace(f,i.MM()):"m"===f?a=a.replace(f,i.m):"mm"===f?a=a.replace(f,i.mm):"D"===f?a=a.replace(f,i.D):"DD"===f?a=a.replace(f,i.DD()):"d"===f?a=a.replace(f,i.d):"dd"===f?a=a.replace(f,i.dd):"H"===f?a=a.replace(f,i.H):"HH"===f?a=a.replace(f,i.HH()):"h"===f?a=a.replace(f,i.h()):"hh"===f?a=a.replace(f,i.hh()):"k"===f?a=a.replace(f,i.k()):"kk"===f?a=a.replace(f,i.kk()):"i"===f?a=a.replace(f,i.i):"ii"===f?a=a.replace(f,i.ii()):"s"===f?a=a.replace(f,i.s):"ss"===f?a=a.replace(f,i.ss()):"A"===f?a=a.replace(f,i.A):"a"===f?a=a.replace(f,i.a):"Do"===f&&(a=a.replace(f,i.Do))}}catch(e){u.e(e)}finally{u.f()}return a},M=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=0)throw new Error("You need to input the year numbers on argument 1 and the month numbers on argument 2");for(var n=[28,29,30,31],o=new Date(r[0],r[1],0).getDate(),a=n.includes(o)?o:31,i={days:a,start:new Date([r[0],r[1],1]).getDay(),end:new Date([r[0],r[1],a]).getDay(),value:[]},u=1;u<=a;u++){var f=new Date([r[0],r[1],u]).getDate();i.value.push(r[0]+"-"+r[1]+"-"+f)}return i},j=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];if(!r&&r.length<=0)throw new Error("You need to input the year numbers on argument 1 and the month numbers on argument 2");for(var n=[28,29,30,31],o=new Date(Date.UTC(r[0],r[1],0)).getUTCDate(),a=n.includes(o)?o:31,i={days:a,start:new Date(Date.UTC(r[0],Number(r[1])-1,1)).getUTCDay(),end:new Date(Date.UTC(r[0],Number(r[1])-1,a)).getUTCDay(),value:[]},u=1;u<=a;u++){var f=new Date(Date.UTC(r[0],Number(r[1])-1,u)).getUTCDate();i.value.push(r[0]+"-"+r[1]+"-"+f)}return i},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2021,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=[];if("number"==typeof o&&o>=1&&o<=31){var i=new Date(Date.UTC(t,Number(n)-1,o));a=new Intl.DateTimeFormat(e,{weekday:r}).format(i)}else for(var u=4;u<=10;u++){var f=new Date(Date.UTC(2021,3,u));a.push(new Intl.DateTimeFormat(e,{weekday:r}).format(f))}return a},B={now:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,r=(new Date).toString();return"string"==typeof e&&(r=C(r.toString(),e)),r},parse:function(e,r){if("string"!=typeof e&&!1===new RegExp(A).test(e))throw new Error("On the first argument, you have to input only the correct date");if("string"!=typeof r&&!1===new RegExp(D).test(r))throw new Error("For format date, you must always input the correct one by using characters like these: Y, M, m, D, d, H, h, k, i, S, s, A, a or Do");var t=e.split(/-|\/|\.|:|\s/).filter((function(e){return e.length>=1&&" "!==e})).map((function(e){return e.trim()})),n=r.split(/-|\/|\.|:|\s/).filter((function(e){return e.length>=1&&" "!==e})).map((function(e){return e.trim()})),o={year:(new Date).getFullYear(),month:Number((new Date).getMonth())+1,day:(new Date).getDate(),hour:(new Date).getHours(),minute:(new Date).getMinutes(),second:(new Date).getSeconds(),millisecond:(new Date).getMilliseconds()};if(t.length!==n.length)throw new Error("The numbers and the formats must be in place, so when we check the length of both of these arguments then the result will be the same");for(var a=0;a<t.length;a++)4===t[a].length&&!1===isNaN(t[a])&&"YYYY"===n[a]||2===t[a].length&&!1===isNaN(t[a])&&"YY"===n[a]?o.year=t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"M"===n[a]||"MM"===n[a]?o.month=Number(t[a])-1:3===t[a].length&&E.map((function(e){return e.slice(0,3)})).includes(t[a])&&"m"===n[a]?o.month=E.map((function(e){return e.slice(0,3)})).findIndex(t[a]):t[a].length>=3&&E.includes(t[a])&&"mm"===n[a]?o.month=E.findIndex(t[a]):1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"D"===n[a]||"DD"===n[a]?o.day=t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"H"===n[a]||"HH"===n[a]?o.hour=t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"h"===n[a]||"hh"===n[a]?o.hour=t[a]>12?Number(t[a])-(Number(t[a])-1):t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"k"===n[a]||"kk"===n[a]?o.hour=24===Number(t[a])?0:t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"i"===n[a]||"ii"===n[a]?o.minute=t[a]:1===t[a].length||2===t[a].length&&!1===isNaN(t[a])&&"s"===n[a]||"ss"===n[a]?o.second=t[a]:("st"===t[a].slice(-2)||"nd"===t[a].slice(-2)||"th"===t[a].slice(-2)&&"Do"===n[a])&&(o.second=Number(t[a].slice(0,-2)));return new Date(o.year,o.month,o.day,o.hour,o.minute,o.second,o.millisecond).toString()},utc:function(){return new Date(Date.UTC.apply(Date,arguments))},daysInMonth:M,daysInUTCMonth:j,calendar:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US";if("string"!=typeof e&&"number"!=typeof e)throw new Error("Only accept year numbers here, also support string type");if("string"!=typeof r&&"number"!=typeof r)throw new Error("For month, only accept number and string type");var n=Y(t),o=M(e,r),a=Number(Number(r)-1)<1?M(Number(e-1),12):M(e,Number(Number(r)-1)),i=0!==Number(o.start)?a.value.slice(Number("-"+o.start)):[],u=Number(Number(r)+1)>12?M(Number(e+1),1):M(e,Number(Number(r)+1)),l=6!==Number(o.start)?u.value.slice(0,6-Number(o.end)):[];return[].concat(f(n),f(i),f(o.value),f(l))},calendarUTC:function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en-US";if("string"!=typeof e&&"number"!=typeof e)throw new Error("Only accept year numbers here, also support string type");if("string"!=typeof r&&"number"!=typeof r)throw new Error("For month, only accept number and string type");var n=Y(t),o=j(e,r),a=Number(Number(r)-1)<1?j(Number(e-1),12):j(e,Number(Number(r)-1)),i=0!==Number(o.start)?a.value.slice(Number("-"+o.start)):[],u=Number(Number(r)+1)>=12?j(Number(e+1),1):j(e,Number(Number(r)+1)),l=6!==Number(o.start)?u.value.slice(0,6-Number(o.end)):[];return[].concat(f(n),f(i),f(o.value),f(l))},monthName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en-US",r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"long",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=[];if("number"==typeof t&&t>=0&&t<=11){var o=new Date(Date.UTC(2021,t));n=new Intl.DateTimeFormat(e,{month:r}).format(o)}else for(var a=0;a<=11;a++){var i=new Date(Date.UTC(2021,a));n.push(new Intl.DateTimeFormat(e,{month:r}).format(i))}return n},dayName:Y},T={size:function(e,r){if(0===e)return"0 Bytes";var t=r||1,n=Math.floor(Math.log(e)/Math.log(1e3));return parseFloat((e/Math.pow(1e3,n)).toFixed(t))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][n]},name:function(e){if("string"==typeof e)return e.indexOf("",41)>40?e.slice(0,41)+"...":e},type:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"type",t=e.split("/");return"format"==r?t.shift():t.pop(),t.join("")},image:function(e){if("name"in e&&"string"==typeof e.name)return URL.createObjectURL(e)},date:function(e){return new Date(e).toDateString()},loadImage:function(e){"name"in e&&"string"==typeof e.name&&URL.revokeObjectURL(e)},formatSize:function(e){for(var r=0,t=e,n=t.length,o=0;o<n;o++)r+=t[o].size;for(var a=r+" bytes",i=["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],u=0,f=r/1024;f>1;f/=1024,u++)a=f.toFixed(3)+" "+i[u]+" ("+r+" bytes)";return a},humanSize:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=r?1e3:1024;if(Math.abs(e)<n)return e+" B";var o=r?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,i=Math.pow(10,t);do{e/=n,++a}while(Math.round(Math.abs(e)*i)/i>=n&&a<o.length-1);return e.toFixed(t)+" "+o[a]},exported:function(e,r){if("object"===a(e)&&"string"==typeof r){var t=Array.from(e),n="";if("json"===r.toLowerCase())n="data:application/json;charset=utf-8,"+JSON.stringify(t,null,2);else if("csv"===r.toLowerCase()){var o,i="",u=s(t);try{for(u.s();!(o=u.n()).done;){var f=o.value;for(var l in f)i+=f[l]+",";i=i.trim().substring(0,i.length-1),i+="\n"}}catch(e){u.e(e)}finally{u.f()}n="data:text/csv;charset=utf-8,"+(i=i.trim().substring(0,i.length-1))}else if("sql"===r.toLowerCase()){var c="INSERT INTO `export_table` (";for(var h in t[0])c+="`"+h+"`,";c=c.trim().substring(0,c.length-1),c+=") VALUES ";var m,v=s(t);try{for(v.s();!(m=v.n()).done;){var d=m.value;for(var y in c+="(",d)c+="`"+d[y]+"`,";c=c.trim().substring(0,c.length-1),c+="),"}}catch(e){v.e(e)}finally{v.f()}c=c.trim().substring(0,c.length-1),n="data:application/sql;charset=utf-8,"+(c+=";")}else if("xml"===r.toLowerCase()){var g='<?xml version="1.0" encoding="UTF-8"?>\n<data>';for(var p in t){for(var b in g+="\n  <entry>",p)g+="\n    <"+b+"`>"+p[b]+"</"+b+"`>";g+="\n  </entry>"}n="data:application/xml;charset=utf-8,"+(g+="\n</data>")}else if("vhs"===r.toLowerCase()){var w,N='//visit official site: http://vhs-file-format.glitch.me \n("data", [',A=s(t);try{for(A.s();!(w=A.n()).done;){var D=w.value;for(var S in N+='\n  ("entry", [',D)N+='\n    ("'+S+'", ',N+=D[S]+"),";N=N.trim().substring(0,N.length-1),N+="]),"}}catch(e){A.e(e)}finally{A.f()}N=N.trim().substring(0,N.length-1),n="data:application/vhs;charset=utf-8,"+(N="])")}return n}},download:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"txt",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"export-to";if("string"==typeof e){var n=t+"."+r.toLowerCase(),o=encodeURI(e),a=document.createElement("a");a.href=o,a.download=n,document.body.appendChild(a),a.click(),document.body.removeChild(a)}},printed:function(e){if("object"===a(e)){var r=Array.from(e),t=document.createElement("table"),n=document.createElement("thead"),o=document.createElement("tbody");t.appendChild(n),t.appendChild(o);var i=document.createElement("tr");for(var u in r[0]){var f=document.createElement("th");f.textContent=u.replace(/^\w/,(function(e){return e.toUpperCase()})),i.appendChild(f)}n.appendChild(i);for(var l=0,c=r;l<c.length;l++){var s=c[l],h=document.createElement("tr");for(var m in s){var v=document.createElement("td");v.textContent=s[m],h.appendChild(v)}o.appendChild(h)}var d=window.open();d.document.body.appendChild(t),d.focus(),d.print()}}};e.$array=w,e.$char=n,e.$date=B,e.$file=T,e.$int=r,e.$number=t,e.$object=N,e.$string=o,Object.defineProperty(e,"__esModule",{value:!0})}));
