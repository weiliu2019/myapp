(function(t){function e(e){for(var r,o,c=e[0],s=e[1],l=e[2],f=0,d=[];f<c.length;f++)o=c[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={photosign:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;i.push([27,"chunk-vendors","chunk-common"]),n()})({"0cc8":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("page",{ref:"page",staticClass:"sign-page common-page",attrs:{headerHeightVW:t.headerHeightVW},on:{"on-ready":t.onReady}},[r("van-nav-bar",{attrs:{slot:"header",id:"header",title:"拍照签到","left-arrow":""},on:{"click-left":t.onClickLeft},slot:"header"}),r("van-cell-group",[r("van-cell",{attrs:{title:"请拍照后签到:"}}),r("div",{staticClass:"images-container"},[t._l(t.imageList,(function(e,n){return r("div",{key:n,staticClass:"image-item-show",on:{click:function(e){return t.handlePlayImages(n)}}},[r("auto-image",{staticStyle:{"margin-bottom":"12px","margin-left":"12px"},attrs:{src:e.url,width:108,height:108}}),r("div",{staticClass:"image-remove",on:{click:function(e){return e.stopPropagation(),t.handleImageRemove(n)}}})],1)})),r("div",{staticClass:"image-item",staticStyle:{background:"#fff"},on:{click:function(e){return e.stopPropagation(),t.handlePhoto1(e)}}},[r("img",{attrs:{src:n("4857")}})])],2)],1),r("div",{staticClass:"blank-empty"}),r("template",{slot:"blank"},[r("div",{staticClass:"footer-action"},[0==t.imageList.length?r("van-button",{staticClass:"action-item-main",attrs:{color:"#989BA2",disabled:!0}},[t._v("确认签到")]):t._e(),t.imageList.length>0?r("van-button",{staticClass:"action-item-main",attrs:{color:"#108EE9"},on:{click:t.handleSign}},[t._v("确认签到")]):t._e()],1)])],2)},a=[],i=(n("1c01"),n("58b2"),n("8e6e"),n("f3e2"),n("d25f"),n("ac6a"),n("456d"),n("bd86")),o=(n("6d67"),n("9973")),c=n("c03e"),s=n("8149"),l=n("c1df"),u=n.n(l),f=n("4ff5");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var h={components:{Page:o["a"],AutoImage:f["a"]},data:function(){return{headerHeightVW:0,imageList:[],photoList:[],imageFilter:null,orderid:null}},methods:{onReady:function(t,e){this.header=t,this.headerHeightVW=100*(this.header.h+1)/this.header.w,this.orderid=c["a"].getParam("orderid")},onClickLeft:function(){c["a"].back()},handlePhoto1:function(){var t=this;api.actionSheet({buttons:["打开照相机","从相册获取"]},(function(e,n){var r=e.buttonIndex,a="";1===r?a="camera":2===r&&(a="album"),a&&api.getPicture({sourceType:a,mediaValue:"pic",destinationType:"url",preview:!0,quality:50},(function(e,n){e.data&&t.imageList.push({url:e.data})}))}))},handlePlayImages:function(t){localStorage.setItem("photos",JSON.stringify(this.imageList)),c["a"].open("photoViewer",{index:t})},handleImageRemove:function(t){this.imageList.splice(t,1)},handleSign:function(){var t=this;this.$toast.loading({duration:0,forbidClick:!0,loadingType:"spinner",message:"正在签到..."}),s["a"].getOrderDetail(this.orderid).then((function(e){if(t.orderid==e.id){var n={signType:1,signPhoto:t.imageList.map((function(t){return t.url})),signTime:u()().format("YYYY-MM-DD HH:mm"),status:"waiting_repair"};s["a"].updateOrder(p({},e,{},n)).then((function(){c["a"].back()}))}else t.$toast("签到失败")}))}}},g=h,m=(n("2260"),n("2877")),b=Object(m["a"])(g,r,a,!1,null,null,null),v=b.exports,y=n("a1db");y["a"].init(v)},2260:function(t,e,n){"use strict";var r=n("fbff"),a=n.n(r);a.a},27:function(t,e,n){t.exports=n("0cc8")},fbff:function(t,e,n){}});
//# sourceMappingURL=photosign.10e8560d.js.map