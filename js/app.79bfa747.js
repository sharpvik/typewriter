(function(e){function t(t){for(var r,c,i=t[0],s=t[1],a=t[2],d=0,l=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&l.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(l.length)l.shift()();return u.push.apply(u,a||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/typewriter/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("h1",[e._v("Typewriter")]),n("section",{attrs:{id:"task"}},e._l(e.words,(function(t,r){return n("span",{key:r},[e._v(e._s(t)+" ")])})),0),n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],class:{empty:0===e.check,right:1===e.check,wrong:-1===e.check},attrs:{id:"typer",placeholder:"Type your words, don't be shy..."},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}})])},u=[],c=(n("b64b"),n("d3b7"),n("96cf"),n("1da1")),i=n("2ef0"),s=n.n(i),a={WORDS_JSON_LINK:"https://raw.githubusercontent.com/sharpvik/english-words/master/words_dictionary.json"},p=7,d=null,l=null,f={name:"App",data:function(){return{text:"",dict:[],words:[],check:0}},mounted:function(){d=document.getElementById("task"),l=document.getElementById("typer")},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(a.WORDS_JSON_LINK).then((function(e){return e.json()}));case 2:n=t.sent,e.dict=Object.keys(n),e.pushWords(),l.addEventListener("keyup",e.updateWords);case 6:case"end":return t.stop()}}),t)})))()},watch:{text:function(e){if(0!==e.length){var t=e===d.innerText.substring(0,e.length);this.check=t?1:-1}else this.check=0}},methods:{pushWords:function(){this.words=[];for(var e=0;e<p;e++){var t=this.dict[s.a.random(this.dict.length-1)];this.words.push(t)}},updateWords:function(e){document.activeElement===l&&"Enter"===e.key&&(this.text="",this.pushWords())}}},h=f,v=(n("034f"),n("2877")),y=Object(v["a"])(h,o,u,!1,null,null,null),m=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(m)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.79bfa747.js.map