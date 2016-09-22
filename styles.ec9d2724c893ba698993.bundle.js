webpackJsonp([1,2],{363:function(n,e,t){var o=t(625);"string"==typeof o&&(o=[[n.i,o,""]]);t(651)(o,{});o.locals&&(n.exports=o.locals)},625:function(n,e,t){e=n.exports=t(626)(),e.push([n.i,'* {\n  box-sizing: border-box; }\n\nbody {\n  background-color: #F3DFA2;\n  color: #474747;\n  font-family: "Ubuntu", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif; }\n\na {\n  color: #BB4430;\n  text-decoration: none; }\n  a:hover {\n    color: #7e2e20; }\n\nh4 {\n  font-size: 1.5em;\n  margin: 0 0 0.5em 0; }\n  h4 small {\n    font-size: 0.7em;\n    color: #6d6d6d; }\n\nh2.centered {\n  color: #474747;\n  text-align: center; }\n\nsection.description {\n  background: #F3DFA2; }\n  section.description .content {\n    padding: 2em; }\n    section.description .content h1 {\n      margin: 0; }\n\n.content {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 2em; }\n\n.loader {\n  min-height: 50%;\n  min-height: 50vh;\n  color: #474747;\n  padding: 10em 0;\n  text-align: center; }\n\ni {\n  cursor: pointer; }\n\n.globalNav .btn i {\n  color: #fff;\n  background: #BB4430;\n  width: 1.2em;\n  height: 1.2em;\n  line-height: 1.2em;\n  text-align: center;\n  border-radius: 100%;\n  display: inline-block;\n  font-size: 1.2em; }\n\n.info.visible .open {\n  display: none; }\n\n.info.visible .text {\n  display: block; }\n\n.info .text {\n  display: none; }\n\nul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n  ul li {\n    color: #EFE6DD;\n    margin: 0 0 1em;\n    background: #BB4430;\n    border-radius: 4px;\n    padding: 1em 1em;\n    transition: all 0.3s ease;\n    position: relative;\n    overflow: hidden; }\n    ul li.completed {\n      background: #59a559; }\n      ul li.completed .dates {\n        border-top: 1px solid #509450; }\n    ul li .dates {\n      margin-top: 0.3em;\n      padding-top: 0.3em;\n      border-top: 1px solid #a73d2b; }\n\n@media (min-width: 600px) {\n  .hidden-desktop {\n    display: none; }\n  .globalNav {\n    position: fixed;\n    left: 3em;\n    top: 3em; }\n    .globalNav > .btn {\n      margin-bottom: 1em; }\n      .globalNav > .btn i {\n        font-size: 2.0em;\n        width: 1.5em;\n        height: 1.5em;\n        line-height: 1.5em;\n        transition: all 0.2s ease;\n        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.6); }\n        .globalNav > .btn i:hover {\n          transform: scale(1.1);\n          box-shadow: 0 0 12px 0 rgba(0, 0, 0, 0.6); }\n      .globalNav > .btn span {\n        display: none; }\n  .info .btn span {\n    display: none; }\n  .info .text {\n    display: block;\n    position: fixed;\n    z-index: 1000;\n    padding: 1em 1em 2em 1em;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 35%;\n    background: #fafafa;\n    box-shadow: 0 0 6px 5px rgba(0, 0, 0, 0.1);\n    transition: all 0.6s ease;\n    transform: translateX(-105%); }\n    .info .text .close {\n      margin-bottom: 1em;\n      text-align: right; }\n  .info:before {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n    visibility: hidden;\n    opacity: 0;\n    z-index: 1;\n    transition: all 0.6s ease;\n    content: " ";\n    background: #000; }\n  .info.visible:before {\n    visibility: visible;\n    opacity: 0.5; }\n  .info.visible .text {\n    transform: translateX(0); }\n  ul li:hover .actions {\n    opacity: 1;\n    transform: translateY(0); }\n  ul li .actions {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 1.2em;\n    transition: all 0.3s ease;\n    opacity: 0;\n    transform: translateY(-100%); }\n    ul li .actions > span {\n      cursor: pointer; } }\n\n@media (max-width: 600px) {\n  ul li .actions {\n    display: block; }\n    ul li .actions:after {\n      content: " ";\n      display: table;\n      clear: both; }\n    ul li .actions > span {\n      display: block;\n      text-align: center;\n      float: right;\n      width: 25%;\n      padding: 0.25em;\n      margin: 0.5em;\n      font-size: 1.1em;\n      background: #a73d2b; }\n  ul li.completed .actions > span {\n    background: #509450; } }\n',""])},626:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var t=this[e];t[2]?n.push("@media "+t[2]+"{"+t[1]+"}"):n.push(t[1])}return n.join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<e.length;i++){var a=e[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},651:function(n,e){function t(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(l(o.parts[r],e))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(l(o.parts[r],e));f[o.id]={id:o.id,refs:1,parts:a}}}}function o(n){for(var e=[],t={},o=0;o<n.length;o++){var i=n[o],r=i[0],a=i[1],s=i[2],l=i[3],d={css:a,media:s,sourceMap:l};t[r]?t[r].parts.push(d):e.push(t[r]={id:r,parts:[d]})}return e}function i(n,e){var t=h(),o=v[v.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),v.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(e)}}function r(n){n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function a(n){var e=document.createElement("style");return e.type="text/css",i(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",i(n,e),e}function l(n,e){var t,o,i;if(e.singleton){var l=g++;t=b||(b=a(e)),o=d.bind(null,t,l,!1),i=d.bind(null,t,l,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=s(e),o=p.bind(null,t),i=function(){r(t),t.href&&URL.revokeObjectURL(t.href)}):(t=a(e),o=c.bind(null,t),i=function(){r(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}function d(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=y(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}function c(n,e){var t=e.css,o=e.media;if(o&&n.setAttribute("media",o),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}function p(n,e){var t=e.css,o=e.sourceMap;o&&(t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([t],{type:"text/css"}),r=n.href;n.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var f={},u=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},m=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=u(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,g=0,v=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=m()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var i=o(n);return t(i,e),function(n){for(var r=[],a=0;a<i.length;a++){var s=i[a],l=f[s.id];l.refs--,r.push(l)}if(n){var d=o(n);t(d,e)}for(var a=0;a<r.length;a++){var l=r[a];if(0===l.refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete f[l.id]}}}};var y=function(){var n=[];return function(e,t){return n[e]=t,n.filter(Boolean).join("\n")}}()},654:function(n,e,t){n.exports=t(363)}},[654]);