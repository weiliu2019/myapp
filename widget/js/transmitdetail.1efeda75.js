(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,f=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var i={},n={transmitdetail:0},s=[];function r(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=i,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(a,i,function(e){return t[e]}.bind(null,i));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;s.push([40,"chunk-vendors","chunk-common"]),a()})({40:function(t,e,a){t.exports=a("79fc")},5505:function(t,e,a){},"6a95":function(t,e,a){"use strict";var i=a("5505"),n=a.n(i);n.a},"79fc":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page",{ref:"page",staticClass:"transmit-page common-page",attrs:{headerHeightVW:t.headerHeightVW,scrollbar:""},on:{"on-ready":t.onReady}},[a("van-nav-bar",{attrs:{slot:"header",id:"header",title:"转发详情","left-arrow":""},on:{"click-left":t.onClickLeft},slot:"header"}),t.detail.id?a("detail",{attrs:{data:t.detail}}):t._e(),a("div",{staticClass:"blank-empty"}),a("template",{slot:"blank"},["to_confirmed"==t.detail.state&&"receive"==t.detail.source?a("div",{staticClass:"footer-action"},[a("van-button",{staticClass:"action-item-main",attrs:{color:"#FF6166"},on:{click:t.handleReject}},[t._v("拒绝")]),a("van-button",{staticClass:"action-item-main",attrs:{color:"#108EE9"},on:{click:t.handleAgree}},[t._v("同意")])],1):t._e()])],2)},n=[],s=a("9973"),r=a("c03e"),o=a("365c"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail-container"},[a("div",{staticClass:"detail-header"},[a("div",{staticClass:"order-item"},[a("div",{staticClass:"item-header"},[a("div",{staticClass:"left"},[a("span",[t._v(t._s(t.data.orderDetail.no))]),a("span",{staticClass:"item-type item-guzhang"},[t._v(t._s(1==t.data.orderDetail.type?"故障":"维修"))])]),a("div",{staticClass:"right"},[a("span",{staticClass:"item-status"},[t._v(t._s(t.statusEnum[t.data.orderDetail.state]))])])]),a("div",{staticClass:"item-content"},[t._v("\n        "+t._s(t.data.orderDetail.content)+"\n      ")]),a("div",{staticClass:"item-cell"},[a("div",{staticClass:"item-address"},[t._v(t._s(t.data.orderDetail.line)+" - "+t._s(t.data.orderDetail.station))])]),a("div",{staticClass:"item-cell"},[a("div",{staticClass:"item-time1"},[t._v("通报时间:"+t._s(t.data.orderDetail.createTime))]),a("div",{staticClass:"item-time2"},[t._v(t._s(t.data.orderDetail.timeConsuming)+" min")])])])]),a("div",{staticClass:"detail-body"},[a("van-steps",{attrs:{direction:"vertical",active:"to_confirmed"==t.data.state?0:1,"active-icon":"checked","active-color":"#019933"}},[a("van-step",[a("div",{staticClass:"step-wrp"},[a("div",{staticClass:"start"},[t._v("\n            "+t._s(t.data.start_info)+"\n          ")]),a("div",{staticClass:"end"},[t._v("\n            "+t._s(t.data.start_tm)+"\n          ")])])]),"to_confirmed"==t.data.state?a("van-step",[a("div",{staticClass:"step-wrp"},[a("div",{staticClass:"start",staticStyle:{color:"#FFB105"}},[t._v("\n            "+t._s(t.data.end_info||"待确认")+"\n          ")]),a("div",{staticClass:"end"},[t._v("\n            "+t._s(t.data.end_tm)+"\n          ")])])]):a("van-step",[a("div",{staticClass:"step-wrp"},[a("div",{staticClass:"start"},[t._v("\n            "+t._s(t.data.end_info)+"\n          ")]),a("div",{staticClass:"end"},[t._v("\n            "+t._s(t.data.end_tm)+"\n          ")])])])],1)],1)])},l=[],d=a("08f3"),u={props:["data"],data:function(){return{statusEnum:d["e"]}},methods:{}},f=u,v=(a("6a95"),a("2877")),p=Object(v["a"])(f,c,l,!1,null,null,null),h=p.exports,m={components:{Page:s["a"],Detail:h},data:function(){return{headerHeightVW:0,id:null,detail:{}}},methods:{onReady:function(t,e){this.headerHeightVW=100*(t.h+1)/t.w,this.id=r["a"].getParam("id"),this.loadDetail()},loadDetail:function(){var t=this;this.$toast.loading({duration:0,loadingType:"spinner"}),o["a"].getTransmitDetail({id:this.id}).then((function(e){t.detail=e,t.$toast.clear()})).catch((function(e){t.$toast(e)}))},onClickLeft:function(){r["a"].back()},handleReject:function(){var t=this;this.$dialog.confirm({message:"是否确认拒绝换班？",beforeClose:function(e,a){var i=this;"confirm"===e?(console.log(t.id),o["a"].rejectTransmit({id:t.id}).then((function(){a(),t.loadDetail()})).catch((function(t){i.$toast(t),a()}))):a()}})},handleAgree:function(){var t=this;this.$dialog.confirm({message:"是否确认同意换班？",beforeClose:function(e,a){var i=this;"confirm"===e?(console.log(t.id),o["a"].agreeTransmit({id:t.id}).then((function(){a(),t.loadDetail()})).catch((function(t){i.$toast(t),a()}))):a()}})}}},_=m,g=(a("987c"),Object(v["a"])(_,i,n,!1,null,null,null)),C=g.exports,b=a("a1db");b["a"].init(C)},"987c":function(t,e,a){"use strict";var i=a("e17c"),n=a.n(i);n.a},e17c:function(t,e,a){}});
//# sourceMappingURL=transmitdetail.1efeda75.js.map