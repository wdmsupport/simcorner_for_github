!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Picker=t()}(this,function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i={container:null,controls:!1,date:null,format:"YYYY-MM-DD HH:mm",headers:!1,increment:1,inline:!1,language:"",months:["January","February","March","April","May","June","July","August","September","October","November","December"],monthsShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],rows:5,text:{title:"Pick a date and time",cancel:"Cancel",confirm:"OK",year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",second:"Second",millisecond:"Millisecond"},translate:function(e,t){return t},show:null,shown:null,hide:null,hidden:null,pick:null},r='<div class="picker" data-picker-action="hide" touch-action="none" tabindex="-1" role="dialog"><div class="picker-dialog" role="document"><div class="picker-header"><h4 class="picker-title">{{ title }}</h4><button type="button" class="picker-close" data-picker-action="hide" aria-label="Close">&times;</button></div><div class="picker-body"><div class="picker-grid"></div></div><div class="picker-footer"><button type="button" class="picker-cancel" data-picker-action="hide">{{ cancel }}</button><button type="button" class="picker-confirm" data-picker-action="pick">{{ confirm }}</button></div></div></div>',s="undefined"!=typeof window,a=s?window:{},o=!!s&&"ontouchstart"in a.document.documentElement,c=!!s&&"PointerEvent"in a,l={},h="".concat("picker","-open"),u="".concat("picker","-opened"),d="".concat("picker","-picked"),m="".concat("picker","Action"),f=c?"pointerdown":o?"touchstart":"mousedown",p=c?"pointermove":o?"touchmove":"mousemove",v=c?"pointerup pointercancel":o?"touchend touchcancel":"mouseup",g=Object.prototype,k=g.hasOwnProperty,b=g.toString;function y(e){return"string"==typeof e}var w=Number.isFinite||a.isFinite,M=Number.isNaN||a.isNaN;function E(e){return"number"==typeof e&&!M(e)}function Y(t){return"object"===e(t)&&null!==t}function x(e){if(!Y(e))return!1;try{var t=e.constructor,n=t.prototype;return t&&n&&k.call(n,"isPrototypeOf")}catch(e){return!1}}function D(e){return"function"==typeof e}function S(e){return"date"===function(e){return b.call(e).slice(8,-1).toLowerCase()}(e)}function C(e,t){if(e&&D(t))if(Array.isArray(e)||E(e.length)){var n,i=e.length;for(n=0;n<i&&!1!==t.call(e,e[n],n,e);n+=1);}else Y(e)&&Object.keys(e).forEach(function(n){t.call(e,e[n],n,e)});return e}function N(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return Y(e)&&n.length>0&&n.forEach(function(t){Y(t)&&Object.keys(t).forEach(function(n){x(e[n])&&x(t[n])?e[n]=N({},e[n],t[n]):e[n]=t[n]})}),e}function A(e,t){if(t)if(E(e.length))C(e,function(e){A(e,t)});else if(e.classList)e.classList.add(t);else{var n=e.className.trim();n?n.indexOf(t)<0&&(e.className="".concat(n," ").concat(t)):e.className=t}}function O(e,t){t&&(E(e.length)?C(e,function(e){O(e,t)}):e.classList?e.classList.remove(t):e.className.indexOf(t)>=0&&(e.className=e.className.replace(t,"")))}var H=/([a-z\d])([A-Z])/g;function P(e){return e.replace(H,"$1-$2").toLowerCase()}function F(e,t){return Y(e[t])?e[t]:e.dataset?e.dataset[t]:e.getAttribute("data-".concat(P(t)))}function L(e,t,n){Y(n)?e[t]=n:e.dataset?e.dataset[t]=n:e.setAttribute("data-".concat(P(t)),n)}var j=/\s\s*/,T=function(){var e=!1;if(s){var t=!1,n=function(){},i=Object.defineProperty({},"once",{get:function(){return e=!0,t},set:function(e){t=e}});a.addEventListener("test",n,i),a.removeEventListener("test",n,i)}return e}();function _(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;t.trim().split(j).forEach(function(t){if(!T){var s=e.listeners;s&&s[t]&&s[t][n]&&(r=s[t][n],delete s[t][n],0===Object.keys(s[t]).length&&delete s[t],0===Object.keys(s).length&&delete e.listeners)}e.removeEventListener(t,r,i)})}function B(e,t,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=n;t.trim().split(j).forEach(function(t){if(i.once&&!T){var s=e.listeners,a=void 0===s?{}:s;r=function(){delete a[t][n],e.removeEventListener(t,r,i);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];n.apply(e,o)},a[t]||(a[t]={}),a[t][n]&&e.removeEventListener(t,a[t][n],i),a[t][n]=r,e.listeners=a}e.addEventListener(t,r,i)})}function V(e,t,n){var i;return D(Event)&&D(CustomEvent)?i=new CustomEvent(t,{detail:n,bubbles:!0,cancelable:!0}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(i)}function I(e){return e%4==0&&e%100!=0||e%400==0}function R(e,t){return[31,I(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=String(Math.abs(e)),i=n.length,r="";for(e<0&&(r+="-");i<t;)i+=1,r+="0";return r+n}function J(e){return{Y:"year",M:"month",D:"day",H:"hour",m:"minute",s:"second",S:"millisecond"}[e.charAt(0)]}var q=/(Y|M|D|H|m|s|S)\1*/g;var K={bind:function(){var e=this.element,t=this.options,n=this.grid;D(t.show)&&B(e,"show",t.show),D(t.shown)&&B(e,"shown",t.shown),D(t.hide)&&B(e,"hide",t.hide),D(t.hidden)&&B(e,"hidden",t.hidden),D(t.pick)&&B(e,"pick",t.pick),B(e,"focus",this.onFocus=this.focus.bind(this)),B(e,"click",this.onFocus),B(this.picker,"click",this.onClick=this.click.bind(this)),B(n,"wheel mousewheel DOMMouseScroll",this.onWheel=this.wheel.bind(this)),B(n,f,this.onPointerDown=this.pointerdown.bind(this)),B(document,p,this.onPointerMove=this.pointermove.bind(this)),B(document,v,this.onPointerUp=this.pointerup.bind(this)),B(document,"keydown",this.onKeyDown=this.keydown.bind(this))},unbind:function(){var e=this.element,t=this.options,n=this.grid;D(t.show)&&_(e,"show",t.show),D(t.shown)&&_(e,"shown",t.shown),D(t.hide)&&_(e,"hide",t.hide),D(t.hidden)&&_(e,"hidden",t.hidden),D(t.pick)&&_(e,"pick",t.pick),_(e,"focus",this.onFocus),_(e,"click",this.onFocus),_(this.picker,"click",this.onClick),_(n,"wheel mousewheel DOMMouseScroll",this.onWheel),_(n,f,this.onPointerDown),_(document,p,this.onPointerMove),_(document,v,this.onPointerUp),_(document,"keydown",this.onKeyDown)}},U={focus:function(e){e.target.blur(),this.show()},click:function(e){var t=e.target,n=F(t,m);switch(n){case"hide":this.hide();break;case"pick":this.pick();break;case"prev":case"next":this[n](F(t.parentElement,"type"))}},wheel:function(e){var t=e.target;if(t!==this.grid){for(e.preventDefault();t.parentElement&&t.parentElement!==this.grid;)t=t.parentElement;var n=F(t,"type");e.deltaY<0?this.prev(n):this.next(n)}},pointerdown:function(e){var t=e.target;if(t!==this.grid&&!F(t,m)){for(e.preventDefault();t.parentElement&&t.parentElement!==this.grid;)t=t.parentElement;var n=t.querySelector(".".concat("picker","-list")),i=n.firstElementChild.offsetHeight;this.cell={elem:t,list:n,moveY:0,maxMoveY:i,minMoveY:i/2,startY:e.changedTouches?e.changedTouches[0].pageY:e.pageY,type:F(t,"type")}}},pointermove:function(e){var t=this.cell;if(t){e.preventDefault();var n=e.changedTouches?e.changedTouches[0].pageY:e.pageY,i=t.moveY+(n-t.startY);t.startY=n,t.moveY=i,Math.abs(i)<t.maxMoveY?t.list.style.top="".concat(i,"px"):(t.list.style.top=0,t.moveY=0,i>=t.maxMoveY?this.prev(t.type):i<=-t.maxMoveY&&this.next(t.type))}},pointerup:function(e){var t=this.cell;t&&(e.preventDefault(),t.list.style.top=0,t.moveY>=t.minMoveY?this.prev(t.type):t.moveY<=-t.minMoveY&&this.next(t.type),this.cell=null)},keydown:function(e){!this.shown||"Escape"!==e.key&&27!==e.keyCode||this.hide()}},$={render:function(e){var t=this;if(e){var n=this.options,i=this.data[e],r=this.current(e),s=D(i.max)?i.max():i.max,a=D(i.min)?i.min():i.min,o=0;w(s)&&(o=a>0?s:s+1),i.list.innerHTML="",i.current=r;for(var c=0;c<n.rows+2;c+=1){var l=document.createElement("li"),h=c-i.index,u=r+h*i.increment;o&&(u%=o)<a&&(u+=o),l.textContent=n.translate(e,i.aliases?i.aliases[u]:W(u+i.offset,i.digit)),L(l,"name",e),L(l,"value",u),A(l,"".concat("picker","-item")),0===h&&(A(l,d),i.item=l),i.list.appendChild(l)}}else this.format.tokens.forEach(function(e){return t.render(J(e))})},current:function(e,t){var n=this.date,i=this.format,r=i[e];switch(r.charAt(0)){case"Y":return E(t)&&(n.setFullYear(2===r.length?2e3+t:t),i.month&&this.render(J(i.month)),i.day&&this.render(J(i.day))),n.getFullYear();case"M":return E(t)&&(n.setMonth(t,Math.min(n.getDate(),R(n.getFullYear(),t))),i.day&&this.render(J(i.day))),n.getMonth();case"D":return E(t)&&n.setDate(t),n.getDate();case"H":return E(t)&&n.setHours(t),n.getHours();case"m":return E(t)&&n.setMinutes(t),n.getMinutes();case"s":return E(t)&&n.setSeconds(t),n.getSeconds();case"S":return E(t)&&n.setMilliseconds(t),n.getMilliseconds()}return n},getValue:function(){var e=this.element;return this.isInput?e.value:e.textContent},setValue:function(e){var t=this.element;this.isInput?t.value=e:this.options.container&&(t.textContent=e)},open:function(){var e=this.body;e.style.overflow="hidden",e.style.paddingRight="".concat(this.scrollBarWidth+(parseFloat(this.initialBodyPaddingRight)||0),"px")},close:function(){var e=this.body;e.style.overflow="",e.style.paddingRight=this.initialBodyPaddingRight}},z={show:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.element,n=this.picker;if(this.inline||this.shown)return this;if(!1===V(t,"show"))return this;this.shown=!0,this.open(),A(n,h);var i=function(){V(t,"shown")};return e||n.offsetWidth,A(n,u),e?i():setTimeout(i,300),this},hide:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.element,i=this.picker;if(this.inline||!this.shown)return this;if(!1===V(n,"hide"))return this;this.shown=!1,O(i,u);var r=function(){e.close(),O(i,h),V(n,"hidden")};return t?r():setTimeout(r,300),this},prev:function(e){var t=this.options,n=this.format[e],i=this.data[e],r=i.list,s=r.lastElementChild,a=D(i.max)?i.max():i.max,o=D(i.min)?i.min():i.min,c=i.item.previousElementSibling,l=Number(F(r.firstElementChild,"value"))-i.increment;return l<o&&(l+=a-o+1),s.textContent=t.translate(e,i.aliases?i.aliases[l]:W(l+i.offset,n.length)),L(s,"value",l),c&&(O(i.item,d),A(c,d),i.item=c),r.insertBefore(s,r.firstElementChild),i.current=Number(F(i.item,"value")),this.current(e,i.current),this.inline&&t.container&&this.pick(),this},next:function(e){var t=this.options,n=this.format[e],i=this.data[e],r=i.list,s=r.firstElementChild,a=D(i.max)?i.max():i.max,o=D(i.min)?i.min():i.min,c=i.item.nextElementSibling,l=Number(F(r.lastElementChild,"value"))+i.increment;return l>a&&(l-=a-o+1),s.textContent=t.translate(e,i.aliases?i.aliases[l]:W(l+i.offset,n.length)),L(s,"value",l),r.appendChild(s),c&&(O(i.item,d),A(c,d),i.item=c),i.current=Number(F(i.item,"value")),this.current(e,i.current),this.inline&&t.container&&this.pick(),this},pick:function(){var e=this.element;if(!1===V(e,"pick"))return this;var t=this.formatDate(this.date);return this.setValue(t),this.isInput&&!1===V(e,"change")&&this.reset(),this.hide(),this},getDate:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.date;return e?this.formatDate(t):new Date(t)},setDate:function(e){return e&&(this.date=this.parseDate(e),this.render()),this},update:function(){return this.date=this.parseDate(this.getValue()),this.render(),this},reset:function(){return this.setValue(this.initialValue),this.date=new Date(this.initialDate),this.render(),this},parseDate:function(e){var t=this.options,i=this.format,r=[];if(S(e))return new Date(e);if(y(e)){var s=[].concat(n(t.months),n(t.monthsShort),["\\d+"]);if((r=e.match(new RegExp("(".concat(s.join("|"),")"),"g")))&&e.length===t.format.length&&r.length!==i.tokens.length&&(r=i.tokens.map(function(n){return e.substr(t.format.indexOf(n),n.length)})),!r||r.length!==i.tokens.length)return new Date}var a=new Date;return r.forEach(function(n,r){var s=i.tokens[r],o=Number(n);switch(s){case"YYYY":case"YYY":case"Y":var c=e.indexOf(n),l="-"===e.substr(c-1,1),h=c>1&&l&&/\S/.test(e.substr(c-2,1))||1===c&&l;a.setFullYear(h?-o:o);break;case"YY":a.setFullYear(2e3+o);break;case"MMMM":a.setMonth(t.months.indexOf(n));break;case"MMM":a.setMonth(t.monthsShort.indexOf(n));break;case"MM":case"M":a.setMonth(o-1);break;case"DD":case"D":a.setDate(o);break;case"HH":case"H":a.setHours(o);break;case"mm":case"m":a.setMinutes(o);break;case"ss":case"s":a.setSeconds(o);break;case"SSS":case"SS":case"S":a.setMilliseconds(o)}}),a},formatDate:function(e){var t,n=this.options,i=this.format,r="";if(S(t=e)&&"Invalid Date"!==t.toString()){var s=e.getFullYear(),a=e.getMonth(),o=e.getDate(),c=e.getHours(),l=e.getMinutes(),h=e.getSeconds(),u=e.getMilliseconds();r=n.format,i.tokens.forEach(function(e){var t="";switch(e){case"YYYY":case"YYY":case"Y":t=W(s,e.length);break;case"YY":t=W(s%100,2);break;case"MMMM":t=n.months[a];break;case"MMM":t=n.monthsShort[a];break;case"MM":case"M":t=W(a+1,e.length);break;case"DD":case"D":t=W(o,e.length);break;case"HH":case"H":t=W(c,e.length);break;case"mm":case"m":t=W(l,e.length);break;case"ss":case"s":t=W(h,e.length);break;case"SSS":case"SS":case"S":t=W(u,e.length)}r=r.replace(e,t)})}return r},destroy:function(){var e=this.element,t=this.picker;return F(e,"picker")?(this.hide(!0),this.unbind(),function(e,t){if(Y(e[t]))try{delete e[t]}catch(n){e[t]=void 0}else if(e.dataset)try{delete e.dataset[t]}catch(n){e.dataset[t]=void 0}else e.removeAttribute("data-".concat(P(t)))}(e,"picker"),t.parentNode.removeChild(t),this):this}},Z=/\{\{\s*(\w+)\s*\}\}/g,G=/input|textarea/i,Q=a.Picker,X=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),!t||1!==t.nodeType)throw new Error("The first argument is required and must be an element.");this.element=t,this.options=N({},i,l[n.language],x(n)&&n),this.shown=!1,this.init()}var n,s,o;return n=e,o=[{key:"noConflict",value:function(){return a.Picker=Q,e}},{key:"setDefaults",value:function(e){N(i,l[e.language],x(e)&&e)}}],(s=[{key:"init",value:function(){var e=this,t=this.element;if(!F(t,"picker")){L(t,"picker",this);var n=this.options,i=G.test(t.tagName),s=n.inline&&(n.container||!i),o=document.createElement("div");o.insertAdjacentHTML("afterbegin",r.replace(Z,function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return n.text[t[1]]}));var c=o.getElementsByClassName("picker")[0],l=c.getElementsByClassName("".concat("picker","-grid"))[0],d=n.container;if(y(d)&&(d=document.querySelector(d)),s)A(c,h),A(c,u),d||(d=t);else{var f=t.ownerDocument,p=f.body||f.documentElement;this.body=p,this.scrollBarWidth=a.innerWidth-f.documentElement.clientWidth,this.initialBodyPaddingRight=a.getComputedStyle(p).paddingRight,A(c,"".concat("picker","-fixed")),d||(d=document.body)}this.isInput=i,this.inline=s,this.container=d,this.picker=c,this.grid=l,this.cell=null,this.format=function(e){var t=e.match(q);if(!t)throw new Error("Invalid format.");var n={tokens:t=t.filter(function(e,n){return t.indexOf(e)===n})};return t.forEach(function(e){n[J(e)]=e}),n}(n.format);var v=this.getValue(),g=this.parseDate(n.date||v);this.date=g,this.initialDate=new Date(g),this.initialValue=v,this.data={};var k=Number(n.rows);k%2||(k+=1),n.rows=k||5,A(l,"".concat("picker","-").concat(n.rows>1?"multiple":"single")),n.controls&&A(l,"".concat("picker","-controls"));var b=n.headers,w=n.increment;b&&(A(l,"".concat("picker","-headers")),b=x(b)?b:n.text),x(w)||(w={year:w,month:w,day:w,hour:w,minute:w,second:w,millisecond:w}),this.format.tokens.forEach(function(t){var i=J(t),r=document.createElement("div"),s=document.createElement("div"),a=document.createElement("ul"),o={digit:t.length,increment:Math.abs(Number(w[i]))||1,list:a,max:1/0,min:-1/0,index:Math.floor((n.rows+2)/2),offset:0};switch(t.charAt(0)){case"Y":2===o.digit&&(o.max=99,o.min=0);break;case"M":o.max=11,o.min=0,o.offset=1,3===o.digit?o.aliases=n.monthsShort:4===o.digit&&(o.aliases=n.months);break;case"D":o.max=function(){return R(e.date.getFullYear(),e.date.getMonth())},o.min=1;break;case"H":o.max=23,o.min=0;break;case"m":case"s":o.max=59,o.min=0;break;case"S":o.max=999,o.min=0}if(L(r,"type",i),L(r,"token",t),b){var c=document.createElement("div");A(c,"".concat("picker","-cell__header")),c.textContent=b[i]||i[0].toUpperCase()+i.substr(1),r.appendChild(c)}if(n.controls){var h=document.createElement("div");A(h,"".concat("picker","-cell__control")),A(h,"".concat("picker","-cell__control--prev")),L(h,m,"prev"),r.appendChild(h)}if(A(a,"".concat("picker","-list")),A(s,"".concat("picker","-cell__body")),A(r,"".concat("picker","-cell")),A(r,"".concat("picker","-").concat(i,"s")),s.appendChild(a),r.appendChild(s),n.controls){var u=document.createElement("div");A(u,"".concat("picker","-cell__control")),A(u,"".concat("picker","-cell__control--next")),L(u,m,"next"),r.appendChild(u)}l.appendChild(r),e.data[i]=o,e.render(i)}),s&&(d.innerHTML=""),d.appendChild(c),this.bind()}}}])&&t(n.prototype,s),o&&t(n,o),e}();return N(X.prototype,K,U,$,z),X.languages=l,X});