(function(t){"use strict";var e=function(t){var n=" ";return t.addClass=function(e){var i=t.className?n:"";return t.className.match(e)||(this.className=this.className+i+e),this},t.removeClass=function(t){return this.className.replace(n+t,""),this.className.replace(t,""),this},t.remove=function(){return this.parentNode&&this.parentNode.removeChild(t),this},t.hide=function(){return this.style.display="none",this},t.append=function(t){return this.appendChild(t),this},t.appendTo=function(t){return this.remove(),t.append(this),this},t.show=function(){return this.style.display="block",this},t.css=function(t,n){function i(t){var n=t.split("-"),i="";return e.each(n,function(t,e){0===t||1===t&&""===n[0]?i+=e.toLowerCase():(i+=e.slice(0,1).toUpperCase(),i+=e.slice(1).toLowerCase())}),i}function s(t,e){r.style[i(t)]=e}var r=this;return"string"==typeof t?s(t,n):"object"==typeof t&&e.each(t,s),this},t.html=function(t){return this.innerHTML=t,this},t.text=function(t){var e=document.createTextNode(t);return this.html(""),this.append(e),this},t};e.each=function(t,e){for(var n=0,i=t.length;i>n;n++)e(n,t[n])},e.Deferred=function(){var t=[];return{promise:function(){return{then:function(e){t.push(e)}}},resolve:function(n){e.each(t,function(t,e){e(n)})}}},e.bind=function(t,e){var n=[].slice.call(arguments,2);return function(){n=n.concat([].slice.call(arguments,0)),t.apply(e,n)}},e.extend=function(t,e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])},t.NumberFlipperEl=e}).call(this,this);