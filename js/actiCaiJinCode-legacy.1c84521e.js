(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actiCaiJinCode"],{"0045":function(t,i,a){},"93bc":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"acti-cai-jin-code-container"},[a("TheHeader",{attrs:{title:t.$t("actiCaiJinCode.WinningsCode"),"left-arrow":"","left-click":t.goBack}}),a("div",{staticClass:"tip-box"},[t._v(t._s(t.$t("actiCaiJinCode.Tip1")))]),a("div",{staticClass:"act-topinfo-box"},[a("div",{staticClass:"act-topinfo-title"},[a("van-field",{staticClass:"textin-box",attrs:{placeholder:t.$t("actiCaiJinCode.PleaseEnterTheCodeWinnings")},model:{value:t.value,callback:function(i){t.value=i},expression:"value"}})],1)]),a("div",{staticClass:"check_btn"},[a("LinearButton",{attrs:{block:"",type:"info"},on:{click:t.UpCaiJinCode}},[t._v(t._s(t.$t("actiCaiJinCode.SureToUse")))])],1)],1)},n=[],c={data:function(){return{value:""}},methods:{goBack:function(){this.$cf.goBack(this.$route)},UpCaiJinCode:function(){var t=this;this.$api.actiList.UpCaiJinCode({body:{code:this.value}},(function(i){var a=t.$t("actiCaiJinCode.Receive");1===i.data.auditState&&(a=t.$t("actiCaiJinCode.Apply")),t.$cf.showSuccessMessageDialog("".concat(a).concat(t.$t("actiCaiJinCode.Success")))}))}},components:{LinearButton:function(){return a.e("chunk-73bcffce").then(a.bind(null,"ec6b"))}}},o=c,s=(a("ad77"),a("2877")),l=Object(s["a"])(o,e,n,!1,null,"c2e820a8",null);i["default"]=l.exports},ad77:function(t,i,a){"use strict";var e=a("0045"),n=a.n(e);n.a}}]);