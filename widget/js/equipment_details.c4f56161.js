(function(e){function t(t){for(var a,o,l=t[0],s=t[1],p=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,p||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,l=1;l<i.length;l++){var s=i[l];0!==r[s]&&(a=!1)}a&&(n.splice(t--,1),e=o(o.s=i[0]))}return e}var a={},r={equipment_details:0},n=[];function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,t,i){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(i,a,function(t){return e[t]}.bind(null,a));return i},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var c=s;n.push([11,"chunk-vendors","chunk-common"]),i()})({11:function(e,t,i){e.exports=i("3e3b")},"3e3b":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("page",{ref:"page",staticClass:"me-page common-page",attrs:{headerHeightVW:e.headerHeightVW,scrollbar:""},on:{"on-ready":e.onReady}},[i("van-nav-bar",{attrs:{slot:"header",id:"header",title:"设备详情","left-arrow":""},on:{"click-left":e.onClickLeft},slot:"header"}),i("div",{staticClass:"ed-content"},[i("div",{staticClass:"information"},[i("div",{staticClass:"information-title"},[e._v("设备信息")]),i("van-cell-group",[i("van-field",{attrs:{label:"设备名称:",disabled:"","input-align":"right"},model:{value:e.deviceForm.name,callback:function(t){e.$set(e.deviceForm,"name",t)},expression:"deviceForm.name"}}),i("van-field",{attrs:{label:"设备编号:",disabled:"","input-align":"right"},model:{value:e.deviceForm.serial,callback:function(t){e.$set(e.deviceForm,"serial",t)},expression:"deviceForm.serial"}}),i("van-field",{attrs:{label:"所属专业:",disabled:"","input-align":"right"},model:{value:e.deviceForm.professional,callback:function(t){e.$set(e.deviceForm,"professional",t)},expression:"deviceForm.professional"}}),i("van-field",{attrs:{label:"设备分类:",disabled:"","input-align":"right"},model:{value:e.deviceForm.classification,callback:function(t){e.$set(e.deviceForm,"classification",t)},expression:"deviceForm.classification"}}),i("van-field",{attrs:{label:"设备位置:",disabled:"","input-align":"right"},model:{value:e.deviceForm.location,callback:function(t){e.$set(e.deviceForm,"location",t)},expression:"deviceForm.location"}}),i("van-field",{attrs:{label:"规格编号:",disabled:"","input-align":"right"},model:{value:e.deviceForm.specifications,callback:function(t){e.$set(e.deviceForm,"specifications",t)},expression:"deviceForm.specifications"}}),i("van-field",{attrs:{label:"数量:","input-align":"right",disabled:""},model:{value:e.deviceForm.number,callback:function(t){e.$set(e.deviceForm,"number",t)},expression:"deviceForm.number"}}),i("van-field",{attrs:{label:"设备状态:","input-align":"right",disabled:""},model:{value:e.deviceForm.status,callback:function(t){e.$set(e.deviceForm,"status",t)},expression:"deviceForm.status"}}),e._l(e.compositionDevice,(function(t){return i("van-field",{key:t.id,attrs:{"right-icon":"arrow",disabled:"","input-align":"left"},on:{click:function(i){return e.onTap(t.id)}},model:{value:t.name,callback:function(i){e.$set(t,"name",i)},expression:"item.name"}})}))],2)],1),i("div",{staticClass:"supplier"},[i("div",{staticClass:"supplier-title"},[e._v("供货厂家")]),i("van-cell-group",[i("van-field",{attrs:{label:"生产厂商:",disabled:"","input-align":"right"},model:{value:e.supplierForm.production,callback:function(t){e.$set(e.supplierForm,"production",t)},expression:"supplierForm.production"}}),i("van-field",{attrs:{label:"供货厂商:",disabled:"","input-align":"right"},model:{value:e.supplierForm.supply,callback:function(t){e.$set(e.supplierForm,"supply",t)},expression:"supplierForm.supply"}}),i("van-field",{attrs:{label:"集成厂商:",disabled:"","input-align":"right"},model:{value:e.supplierForm.integration,callback:function(t){e.$set(e.supplierForm,"integration",t)},expression:"supplierForm.integration"}}),i("van-field",{attrs:{label:"出场编号:",disabled:"","input-align":"right"},model:{value:e.supplierForm.number,callback:function(t){e.$set(e.supplierForm,"number",t)},expression:"supplierForm.number"}}),i("van-field",{attrs:{label:"出场日期:",disabled:"","input-align":"right"},model:{value:e.supplierForm.date,callback:function(t){e.$set(e.supplierForm,"date",t)},expression:"supplierForm.date"}}),i("van-field",{attrs:{label:"开始使用日期:",disabled:"","input-align":"right"},model:{value:e.supplierForm.startDate,callback:function(t){e.$set(e.supplierForm,"startDate",t)},expression:"supplierForm.startDate"}}),i("van-field",{attrs:{label:"投用时间:","input-align":"right"},model:{value:e.supplierForm.startTime,callback:function(t){e.$set(e.supplierForm,"startTime",t)},expression:"supplierForm.startTime"}}),i("van-field",{attrs:{label:"使用寿命:","input-align":"right"},model:{value:e.supplierForm.life,callback:function(t){e.$set(e.supplierForm,"life",t)},expression:"supplierForm.life"}}),i("van-field",{attrs:{label:"开始保质日期:","input-align":"right"},model:{value:e.supplierForm.startExpirationDate,callback:function(t){e.$set(e.supplierForm,"startExpirationDate",t)},expression:"supplierForm.startExpirationDate"}}),i("van-field",{attrs:{label:"质保期限:","input-align":"right"},model:{value:e.supplierForm.expirationDate,callback:function(t){e.$set(e.supplierForm,"expirationDate",t)},expression:"supplierForm.expirationDate"}})],1)],1),i("div",{staticClass:"operator"},[i("div",{staticClass:"operator-title"},[e._v("运营单位")]),i("van-field",{attrs:{label:"使用单位:",disabled:"","input-align":"right"},model:{value:e.operatorForm.unit,callback:function(t){e.$set(e.operatorForm,"unit",t)},expression:"operatorForm.unit"}}),i("van-field",{attrs:{label:"使用部门:",disabled:"","input-align":"right"},model:{value:e.operatorForm.department,callback:function(t){e.$set(e.operatorForm,"department",t)},expression:"operatorForm.department"}}),i("van-field",{attrs:{label:"维修单位:",disabled:"","input-align":"right"},model:{value:e.operatorForm.maintenanceUnit,callback:function(t){e.$set(e.operatorForm,"maintenanceUnit",t)},expression:"operatorForm.maintenanceUnit"}}),i("van-field",{attrs:{label:"维修部门:",disabled:"","input-align":"right"},model:{value:e.operatorForm.maintenanceDepartment,callback:function(t){e.$set(e.operatorForm,"maintenanceDepartment",t)},expression:"operatorForm.maintenanceDepartment"}})],1)])],1)},r=[],n=i("9973"),o=i("c03e"),l=i("365c"),s={components:{Page:n["a"]},data:function(){return{headerHeightVW:0,deviceForm:{name:"",serial:"",professional:"",classification:"",location:"",specifications:"",number:"",status:""},supplierForm:{production:"",supply:"",integration:"",number:"",date:"",startDate:"",startTime:"",life:"",startExpirationDate:"",expirationDate:""},operatorForm:{unit:"",department:"",maintenanceUnit:"",maintenanceDepartment:""},compositionDevice:[]}},methods:{onReady:function(e,t){var i=this;this.headerHeightVW=100*(e.h+1)/e.w;var a=o["a"].getParam("id");l["a"].getDeviceDetails({id:a}).then((function(e){i.supplierForm=e.supplierForm,i.operatorForm=e.operatorForm,i.deviceForm=e.deviceForm,i.compositionDevice=e.compositionDevice})).catch((function(e){i.$toast.clear(),i.$toast(e)}))},onClickLeft:function(){o["a"].back()},onTap:function(e){o["a"].open("composition_equipment_details",{id:e})}}},p=s,c=(i("9570"),i("2877")),u=Object(c["a"])(p,a,r,!1,null,null,null),d=u.exports,m=i("a1db");m["a"].init(d)},9570:function(e,t,i){"use strict";var a=i("a1f5"),r=i.n(a);r.a},a1f5:function(e,t,i){}});
//# sourceMappingURL=equipment_details.c4f56161.js.map