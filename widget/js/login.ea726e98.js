(function(e){function t(t){for(var r,c,i=t[0],l=t[1],s=t[2],f=0,p=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={login:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;a.push([19,"chunk-vendors","chunk-common"]),n()})({"18cf":function(e,t,n){"use strict";var r=n("bcce"),o=n.n(r);o.a},19:function(e,t,n){e.exports=n("bc32")},ba69:function(e,t,n){e.exports=n.p+"img/logo.d26ec1a9.png"},bc32:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("page",{ref:"page",staticClass:"tonghao-login-page",attrs:{headerHeightVW:e.headerHeightVW},on:{"on-ready":e.onReady}},[r("div",{staticClass:"login-top"},[r("img",{staticClass:"login-logo",attrs:{src:n("ba69")}}),r("div",{staticClass:"login-input"},[r("van-field",{ref:"accountField",staticClass:"field-cell",attrs:{placeholder:"录入帐号",border:!1,clearable:""},model:{value:e.login.account,callback:function(t){e.$set(e.login,"account",t)},expression:"login.account"}}),r("van-field",{staticClass:"field-cell",attrs:{placeholder:"录入密码",border:!1,type:"password",clearable:""},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password",t)},expression:"login.password"}})],1)]),r("div",{staticClass:"login-action"},[r("a",{attrs:{href:"javascript:;"},on:{click:e.handleLogin}},[e._v("登录")])])])},o=[],a=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("bd86")),c=n("9973"),i=n("c03e"),l=n("365c");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){Object(a["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f={components:{Page:c["a"]},data:function(){return{login:{account:"",password:""},headerHeightVW:0,winHeight:""}},mounted:function(){},methods:{onReady:function(){},onForgetClick:function(){i["a"].open("retrieve")},handleLogin:function(){var e=this;this.$toast.loading({loadingType:"spinner",duration:0}),l["a"].login(u({},this.login,{deviceId:localStorage.getItem("deviceToken")})).then((function(t){try{var n=api.require("ajpush");n.bindAliasAndTags({alias:localStorage.getItem("deviceToken"),tags:["user"+t.user.id]},(function(e,t){}))}catch(r){}finally{window.localStorage.setItem("token",t.token),window.localStorage.setItem("user",JSON.stringify(t.user)),e.$toast.clear(),i["a"].back()}})).catch((function(t){e.$toast.clear(),e.$toast(t)}))}}},p=f,d=(n("18cf"),n("2877")),g=Object(d["a"])(p,r,o,!1,null,null,null),b=g.exports,h=n("a1db");h["a"].init(b)},bcce:function(e,t,n){}});
//# sourceMappingURL=login.ea726e98.js.map