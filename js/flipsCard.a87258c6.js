(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["flipsCard"],{bbcb:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"pdt4 pdb4 flipscard-container"},[i("img",{staticClass:"flipCard-banner",attrs:{src:t.cardData.h5_img,alt:""}}),i("div",{staticClass:"flipsCard"},[i("div",{staticClass:"flipsCard-content"},[i("div",{staticClass:"icon-wrap"},[i("div",{staticClass:"flipsCard-icon flipsCard-icon-description",on:{click:function(e){t.showDescription=!0}}},[i("span",[t._v("?")])])]),i("div",{staticClass:"wheel-count"},[i("div",{staticClass:"today"},[i("div",[t._v(t._s(t.$t("flipsCard.TodayPlayedByTimesNumber")))]),i("span",[t._v(t._s(t.cardData.todayPlayedByTimesNumber))])]),i("div",{staticClass:"remain"},[i("div",[t._v(t._s(t.$t("flipsCard.RestNumber")))]),i("span",[t._v(t._s(t.cardData.restNumber))])])]),i("CardGame",{ref:"cardGame",staticClass:"cardGame",attrs:{cardData:t.cardData},on:{onGetPrize:t.getPrize,reload:t.reload}}),i("van-button",{staticClass:"btn-start",attrs:{disabled:t.isShuffle},on:{click:t.goShuffle}},[t._v(t._s(t.$t("flipsCard.StartShuffle")))])],1),i("span",{staticClass:"btn-log",on:{click:function(e){return t.goLotteryRecord()}}},[t._v(t._s(t.$t("flipsCard.LotteryRecord")))])]),i("LotteryDescription",{attrs:{showDescriptionProp:t.showDescription,descHtml:t.cardData.content},on:{close:t.closeDescription}}),i("van-dialog",{staticClass:"prize-dialog",attrs:{showConfirmButton:!1,title:t.prizeDetail.prizeType!==t.PRIZETYPE_ENUM.FAIL?t.prizeDetail.prizeName:t.$t("flipsCard.NotWinning")},on:{close:function(e){return t.closePrize()}},model:{value:t.isShowPrize,callback:function(e){t.isShowPrize=e},expression:"isShowPrize"}},[i("van-nav-bar",{staticClass:"head-box"},[i("van-icon",{attrs:{slot:"right",name:"cross"},on:{click:function(e){t.isShowPrize=!1}},slot:"right"})],1),i("div",{staticClass:"role-wrap"},[i("img",{attrs:{src:t.prizeDetail.imageUrl}}),i("div",{staticClass:"role-wrap__text"},[t._v(t._s(t.prizeDetail.description))]),t.prizeDetail.prizeType===t.PRIZETYPE_ENUM.GOOD?i("div",{staticClass:"again",on:{click:function(e){return t.openApplyPrize()}}},[t._v(t._s(t.$t("flipsCard.ApplyForRewards")))]):t._e()])],1),t.showApplyPrize?i("ApplyPrize",{attrs:{prizeInfo:t.prizeInfo},on:{close:t.closeApplyPrize,submit:t.submitApplyPrize}}):t._e()],1)},r=[],a=i("a79b");function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,s)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var c={name:"FlipsCard",data(){return{showDescription:!1,showApplyPrize:!1,prizeInfo:{id:null,prizeType:0},spinType:"FLIPCARD",timer:0,isShowPrize:!1,prizeDetail:{},flipsCardId:"",cardData:{todayPlayedByTimesNumber:0,dailyLimit:0,restNumber:0,jifunNumber:0,deductJifun:0,itemList:[]},isShuffle:!1,isAgain:!1,PRIZETYPE_ENUM:{FAIL:"0",MONEY:"1",INTEGRAL:"2",GOOD:"3",DEPOSIT:"4"}}},methods:{goLotteryRecord(){const t=this.$router.resolve({name:"lotteryRecord",query:{tabName:this.spinType,redirect:this.$router.currentRoute.fullPath}});window.open(t.href,"_blank")},getPrize(t){this.isShowPrize=!0,this.prizeDetail=t,this.prizeInfo=n({},t),this.prizeInfo.prizeType=Number(this.prizeInfo.prizeType),this.prizeInfo.id=t.spinLogId},goShuffle(){this.isShuffle||(this.isShuffle=!0,this.shuffle())},shuffle(){const t=this.$refs.cardGame;t.allMove(),setTimeout(()=>{this.cardData.itemList.sort(()=>.5-Math.random())},1e3)},closePrize(){this.isShowPrize=!1;const t=this.$refs.cardGame;t.showClass=!1,this.isShuffle=!1,this.getCard()},getCard(){this.$api.actiList.initActivityLuckySpin({body:{type:this.spinType,address:this.flipsCardId}},t=>{if(t.data.itemList.length<9){const e=t.data.itemList.find(t=>t.prizeType===this.PRIZETYPE_ENUM.FAIL),i=9-t.data.itemList.length;for(let s=0;s<i;s+=1)t.data.itemList.push(e)}this.cardData=t.data})},closeApplyPrize(){this.showApplyPrize=!1},openApplyPrize(){this.showApplyPrize=!0},submitApplyPrize(t){this.$api.lotteryList.applyLuckySpinReward({body:t},t=>{this.$cf.showSuccessMessageDialog(t.message),this.showApplyPrize=!1,this.isShowPrize=!1})},reload(){const t=this.$refs.cardGame;t.showClass=!1,this.isShuffle=!1,this.getCard()},closeDescription(){this.showDescription=!1},changeLang(t){Object(a["a"])(t,this),this.isDrawerOpen=!1}},created(){if(this.flipsCardId=this.$route.query.id,!this.flipsCardId){const t=localStorage.getItem("flipsData");t&&(this.flipsCardId=t)}this.getCard()},mounted(){this.changeLang(localStorage.getItem("locale"))},beforeDestroy(){clearInterval(this.timer)},components:{LotteryDescription:()=>i.e("chunk-07084f83").then(i.bind(null,"8232")),ApplyPrize:()=>i.e("chunk-3717fee4").then(i.bind(null,"a9a0")),CardGame:()=>i.e("chunk-5af9db7e").then(i.bind(null,"9844"))}},p=c,d=(i("c20c"),i("2877")),h=Object(d["a"])(p,s,r,!1,null,null,null);e["default"]=h.exports},be7ff:function(t,e,i){},c20c:function(t,e,i){"use strict";var s=i("be7ff"),r=i.n(s);r.a}}]);