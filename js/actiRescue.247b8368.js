(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actiRescue"],{"18d0":function(t,e,s){},"27e5":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"acti-rescue-container"},[s("TheHeader",{attrs:{title:t.$t("actiRescue.RescueGold"),"left-arrow":""}}),s("WhiteCardContainer",{staticClass:"whitecard-container"},[s("div",{staticClass:"act-topinfo-box"},[s("div",{staticClass:"act-topinfo-title"},[t._v(t._s(t.$t("actiRescue.RescueGoldenRatio"))+"："+t._s(t.getRescueFundScale()))]),this.rescuefund&&this.rescuefund.rescuefundAmount?s("div",{staticClass:"amount-wrap"},[s("span",{staticClass:"amount"},[t._v(t._s(t.getRescuefundAmount()))])]):t._e(),s("div",{staticClass:"row"},[t._v(" "+t._s(t.$t("actiRescue.Status"))+"： "),s("span",[t._v(t._s(t.getStatus()))])]),s("div",{staticClass:"row"},[t._v(" "+t._s(t.$t("actiRescue.MultipleWater"))+"： "),s("span",[t._v(t._s(t.getBetMultiple()))])]),s("div",{staticClass:"act-topinfo-bottom"},[t.rescuefund?s("LinearButton",{staticClass:"act-item-btn",attrs:{disabled:"",block:"",type:"info"}},[t._v(t._s(t.$t("actiRescue.TodayHasAppliedFor")))]):s("LinearButton",{staticClass:"act-item-btn",attrs:{type:"info"},on:{click:function(e){return t.UpRescue(t.rescuefundModel.id)}}},[t._v(t._s(t.$t("actiRescue.Receive")))])],1)])]),s("div",{staticClass:"tips"},[s("div",{staticClass:"tips-title"},[t._v(t._s(t.$t("actiRescue.Tips")))]),s("p",{staticClass:"tips-list"},[t._v("1. "+t._s(t.$t("actiRescue.Tips1",[t.rescuefundModel.amountLimit?t.rescuefundModel.amountLimit/100:"--"])))]),s("p",{staticClass:"tips-list"},[t._v("2. "+t._s(t.$t("actiRescue.Tips2")))]),s("p",{staticClass:"tips-list"},[t._v("3. "+t._s(t.$t("actiRescue.Tips3",[t.rescuefundModel.startTime?t.rescuefundModel.startTime:"--",t.rescuefundModel.amountLimit?t.rescuefundModel.amountLimit/100:"--"])))]),s("p",{staticClass:"tips-list"},[t._v("4. "+t._s(t.$t("actiRescue.Tips4")))])])],1)},u=[],c={data(){return{rescuefundModel:{startTime:null,amountLimit:null},rescuefund:{rescuefundAmount:null,status:null}}},methods:{init(){this.$api.actiList.getRescue({body:{status:1}},t=>{t.data.rescuefundModel?(this.rescuefundModel=t.data.rescuefundModel||{},this.rescuefund=t.data.rescuefund):this.$cf.showErrorMessageDialog(this.$t("actiRescue.NoRescueGold"))})},UpRescue(t){this.$api.actiList.UpRescue({body:{id:t}},t=>{1===t.data.auditState?this.$cf.showConfirmSuccessDialog({title:this.$t("actiRescue.ApplicationSuccessful"),message:this.$t("actiRescue.AppliySuccess",[t.data.rescuefundAmount/100]),onConfirm:()=>{this.init()}}):this.$cf.showConfirmSuccessDialog({title:this.$t("actiRescue.ReceiveSuccess"),message:this.$t("actiRescue.ReceivedRescueGold",[t.data.rescuefundAmount/100]),onConfirm:()=>{this.init()}})},()=>{this.init()})},getRescueFundScale(){return this.rescuefundModel.rescuefundScale?this.$cf.numberMul(this.rescuefundModel.rescuefundScale,100)+"%":"--"},getRescuefundAmount(){if(this.rescuefund.rescuefundAmount)return this.rescuefund.rescuefundAmount/100},getBetMultiple(){return this.rescuefundModel.betMultiple?this.rescuefundModel.betMultiple:"--"},getStatus(){return this.rescuefund&&this.rescuefund.status?1===this.rescuefund.status?this.$t("actiRescue.AlreadyApplied"):2===this.rescuefund.status?this.$t("actiRescue.AlreadyReceived"):3===this.rescuefund.status?this.$t("actiRescue.Refuse"):"--":"--"}},created(){this.init()},components:{LinearButton:()=>s.e("chunk-73bcffce").then(s.bind(null,"ec6b")),WhiteCardContainer:()=>s.e("chunk-6afd79e6").then(s.bind(null,"60b5"))}},a=c,n=(s("3ca5"),s("2877")),d=Object(n["a"])(a,i,u,!1,null,"6d13a682",null);e["default"]=d.exports},"3ca5":function(t,e,s){"use strict";var i=s("18d0"),u=s.n(i);u.a}}]);