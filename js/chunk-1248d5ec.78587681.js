(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1248d5ec"],{"2abf":function(s,e,t){"use strict";var i=t("a7ed"),a=t.n(i);a.a},a7ed:function(s,e,t){},f5f8:function(s,e,t){"use strict";t.r(e);var i=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"msg-box-container",class:{readed:s.message.isRead}},[s.message.isRead?s._e():t("div",{staticClass:"dot"}),t("div",{class:s.isEdit?"edit":"no-edit"},[t("i",{class:s.message.isChecked?"checked":"uncheck",on:{click:s.onCardCheck}})]),t("div",{staticClass:"msg-box-card",on:{click:s.onCardClick}},[t("div",{staticClass:"msg-box-content"},[t("div",{staticClass:"msg-box-title-wrapper"},[t("div",{staticClass:"msg-box-title"},[s._v(s._s(s.message.title||"--"))])]),t("div",{staticClass:"msg-box-info"},[t("div",{staticClass:"msb-box-bottom"},[t("span",{staticClass:"msb-box-date"},[s._v(s._s(s.message.addTime||"--"))]),s.message.isRead?s._e():t("span",{staticClass:"msb-box-unread"},[s._v(s._s(s.$t("myMsg.Unread")))])])])])])])},a=[],c={name:"MsgBox",props:{index:Number,isEdit:{type:Boolean,require:!0,default:!1},message:{type:Object,require:!0}},methods:{onCardClick(){!this.isEdit&&this.$emit("click",this.message)},onCardCheck(){this.isEdit&&this.$emit("check",this.index)}}},d=c,n=(t("2abf"),t("2877")),o=Object(n["a"])(d,i,a,!1,null,null,null);e["default"]=o.exports}}]);