(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actiJinji"],{3117:function(t,i,e){"use strict";var n=e("6a97"),a=e.n(n);a.a},"6a97":function(t,i,e){},"6d9a":function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"acti-jinji-container"},[e("TheHeader",{attrs:{title:t.$t("dividend.PromotionGifts"),"left-arrow":""}}),e("WhiteCardContainer",{staticClass:"whitecard-container"},[e("div",{staticClass:"act-topinfo-box"},[e("p",{staticClass:"money-box"},[t._v(t._s(t.level.upgradeCashGift>=0?t.level.upgradeCashGift/100:"--")+"฿")]),e("div",[t._v(" "+t._s(t.$t("actiChip.MyRating"))+"： "),e("span",[t._v(t._s(t.level.name||"--"))])]),e("div",[t._v(" "+t._s(t.$t("actiChip.MultipleWater"))+"： "),e("span",[t._v(t._s(t.initObj.betMultiple||"--")+t._s(t.$t("actiRenzhen.Multiple")))])])])]),e("div",{staticClass:"btn-box"},[e("LinearButton",{attrs:{disabled:t.islingqu,block:"",type:"info"},on:{click:function(i){return t.upAuth(t.initObj.id)}}},[t._v(t._s(t.islingqu?t.$t("actiJinji.NotAvailable"):t.$t("actiJinji.Receive")))])],1),e("div",{staticClass:"tips"},[e("span",[t._v(t._s(t.$t("actiDayWater.Mention"))+"：")]),e("p",[t._v(t._s(t.$t("actiJinji.Tip")))])])],1)},a=[],s={name:"ActiJinji",data:function(){return{initObj:{},level:{},islingqu:!0}},methods:{init:function(){var t=this;this.$api.actiList.getUpgrade({body:{status:1}},(function(i){t.initObj=i.data.data[0]||{},t.getLevel(i.data.data)}))},upAuth:function(t){var i=this;this.$api.actiList.UpUpgrade({body:{id:t}},(function(){i.$cf.showSuccessMessageDialog(i.$t("actiJinji.ReceiveSuccess")),i.init()}))},getLevel:function(t){var i=this;this.$api.actiList.getByMember({body:{memberId:localStorage.getItem("memberId")}},(function(e){i.level=e.data,i.islingqu=0===t.length}))}},created:function(){this.init()},components:{LinearButton:function(){return e.e("chunk-73bcffce").then(e.bind(null,"ec6b"))},WhiteCardContainer:function(){return e.e("chunk-6afd79e6").then(e.bind(null,"60b5"))}}},c=s,o=(e("3117"),e("2877")),l=Object(o["a"])(c,n,a,!1,null,"0128aae9",null);i["default"]=l.exports}}]);