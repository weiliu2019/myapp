(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={device:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;r.push([9,"chunk-vendors","chunk-common"]),n()})({"398c":function(e,t,n){},6276:function(e,t,n){"use strict";var a=n("398c"),i=n.n(a);i.a},9:function(e,t,n){e.exports=n("d96d")},d96d:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("page",{ref:"page",staticClass:"device-page",attrs:{headerHeightVW:e.headerHeightVW,scrollbar:!0},on:{"on-ready":e.onReady}},[n("template",{slot:"header"},[n("van-nav-bar",{attrs:{id:"header",title:"选择设备","left-arrow":!(!e.types||!e.types.length)},on:{"click-left":e.onClickLeft}}),n("div",{staticClass:"search-bar"},[n("van-search",{attrs:{placeholder:"请输入搜索关键词","show-action":"",shape:"round"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}},[n("div",{attrs:{slot:"action"},on:{click:e.onSearch},slot:"action"},[e._v("搜索")])])],1)],1),n("div",{staticClass:"list-container"},[e.queryShow?[n("van-cell-group",e._l(e.queryList,(function(t){return n("van-cell",{key:t.id,attrs:{title:t.name,clickable:""},on:{click:function(n){return e.handleDevice(t)}}},[n("span",[e._v(e._s(t.serial))]),n("span",{attrs:{slot:"label"},slot:"label"},[e._v(e._s(t.typeName))])])})),1)]:[n("van-cell-group",[e.typeShow?n("van-cell",[n("span",{staticStyle:{color:"rgba(0,0,0,0.5)"},domProps:{innerHTML:e._s(e.typeShow)}})]):e._e()],1),n("van-cell-group",[n("van-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},e._l(e.typeList,(function(t){return n("van-cell",{key:t.id,attrs:{"is-link":"",clickable:""},on:{click:function(n){return e.handleType(t)}}},[e.showRadio?n("van-radio",{attrs:{slot:"icon",name:t.id},on:{click:function(n){return n.stopPropagation(),e.handleTypeSelect(t)}},slot:"icon"},[e._v("  ")]):e._e(),n("span",[e._v(e._s(t.name))])],1)})),1)],1),n("van-cell-group",e._l(e.deviceList,(function(t){return n("van-cell",{key:t.id,attrs:{title:t.name,clickable:""},on:{click:function(n){return e.handleDevice(t)}}},[n("span",[e._v(e._s(t.serial))])])})),1)]],2)],2)},i=[],r=n("75fc"),o=(n("d25f"),n("7f7f"),n("9973")),s=n("c03e"),c=n("365c"),l=(n("8149"),{components:{Page:o["a"]},data:function(){return{headerHeightVW:0,deviceList:[],typeList:[],types:[{name:"设备",id:0}],id:null,mode:null,radio:null,showRadio:!0,query:"",queryShow:!1,queryList:[],profession:null}},computed:{typeShow:function(){var e=[];if(this.types)for(var t=0;t<this.types.length;t++)e.push(this.types[t].name);return e[e.length-1]='<span style="color: #108EE9;">'.concat(e[e.length-1],"</span>"),e.join(" > ")}},methods:{onReady:function(e,t){this.headerHeightVW=100*(e.h+57)/e.w,s["a"].getParam("types")&&(this.types=s["a"].getParam("types")),s["a"].getParam("category")&&(this.showRadio=!1),s["a"].getParam("profession")&&(this.profession=s["a"].getParam("profession")),this.loadList()},loadList:function(){var e=this;this.$toast.loading({duration:0,loadingType:"spinner"});var t=this.types.length>0?this.types[this.types.length-1].id:0;c["a"].getDevice({type:t,mode:"category"}).then((function(n){e.typeList=0==t?n.typeList.filter((function(t){return!e.profession||t.profession==e.profession})):n.typeList,e.deviceList=0==t?n.deviceList.filter((function(t){return!e.profession||t.profession==e.profession})):n.deviceList,e.$toast.clear()})).catch((function(t){e.$toast(t)}))},onSearch:function(){var e=this;this.query&&(this.$toast.loading({duration:0,loadingType:"spinner"}),c["a"].searchDevice({query:this.query}).then((function(t){e.queryList=t.deviceList,e.$toast.clear()})).catch((function(t){e.$toast(t)})))},handleType:function(e){var t=Object(r["a"])(this.types);t.push(e);var n=[];s["a"].getParam("cid")&&(n=s["a"].getParam("cid")),n.push(e.id),s["a"].copen("device",e.id,{types:t,radom:(new Date).getTime(),cid:n,category:this.showRadio?"":"false"})},handleDevice:function(e){if(localStorage.setItem("device_select",JSON.stringify(e)),localStorage.setItem("device_type_select",JSON.stringify({id:e.typeId,name:e.typeName})),s["a"].back("device"),s["a"].getParam("cid"))for(var t=s["a"].getParam("cid"),n=0;n<t.length;n++)s["a"].back("device_"+t[n])},handleTypeSelect:function(e){if(this.radio=e.id,localStorage.setItem("device_type_select",JSON.stringify({id:e.id,name:e.name})),s["a"].back("device"),s["a"].getParam("cid"))for(var t=s["a"].getParam("cid"),n=0;n<t.length;n++)s["a"].back("device_"+t[n])},onClickLeft:function(){s["a"].back()}},watch:{query:function(e){this.queryShow=!!e},queryShow:function(e){e&&(this.queryList=[])}}}),u=l,d=(n("6276"),n("2877")),p=Object(d["a"])(u,a,i,!1,null,null,null),f=p.exports,h=n("a1db");h["a"].init(f)}});
//# sourceMappingURL=device.69e3ef40.js.map