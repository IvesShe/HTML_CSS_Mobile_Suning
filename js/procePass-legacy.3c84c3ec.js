(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["procePass"],{"2b03":function(t,e,a){"use strict";var s=a("f686"),r=a.n(s);r.a},"39fc":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"proce-pass-container"},[a("TheHeader",{staticClass:"transparent",attrs:{title:t.headerTitle,"left-arrow":"",leftClick:t.goBack}}),a("div",{staticClass:"form-box"},[a("van-form",{ref:"formRef",attrs:{"validate-trigger":"onChange"},on:{submit:t.onSubmit}},[t._l(t.formFields,(function(e){return a("van-field",t._b({key:e.name,scopedSlots:t._u([{key:"input",fn:function(){return[a("CustomVanFieldInput",{attrs:{useInvisibility:"",validatedState:e.state,inputClass:e.inputClass,placeholder:e.placeholder,type:e.type,maxlength:e.maxlength},on:{"update:type":function(a){return t.$set(e,"type",a)}},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"field.value"}})]},proxy:!0}],null,!0)},"van-field",e,!1))})),a("div",{staticClass:"van-cell"},[a("van-button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v(t._s(t.$t("Confirm")))])],1)],2)],1)],1)},r=[],n=a("f2dc"),i={name:"ProcePass",data:function(){return{headerTitle:"",type:"",formFields:[]}},methods:{setData:function(){var t=this;this.type=this.$route.query.type,"loginPass"===this.type?(this.headerTitle=this.$t("procePass.ChangeMyPassword"),this.formFields=[{name:"".concat(this.$t("procePass.OldPassword")),value:"",type:"password",label:this.$t("procePass.OldPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgCurrentPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgCurrentPassword")},{message:this.$t("procePass.ValidateMsgCurrentPassword2"),validator:function(t){return n["a"].THPasswordValid(t).flag}}]},{name:"password",value:"",type:"password",label:this.$t("procePass.NewPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgNewPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgNewPassword")},{message:this.$t("procePass.ValidateMsgCurrentPassword2"),validator:function(t){return n["a"].THPasswordValid(t).flag}}]},{name:"passwordOk",value:"",type:"password",label:this.$t("procePass.ConfirmTheNewPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgPasswordOk"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgPasswordOk")},{message:this.$t("procePass.ValidateMsgPasswordOk2"),validator:function(e){var a=t.formFields.find((function(t){return"password"===t.name}));return e===a.value}}]}]):"withdrawalPass"===this.type&&(this.headerTitle=this.$t("procePass.ModifyPasswordWithdrawal"),this.formFields=[{name:"".concat(this.$t("procePass.OldPassword")),value:"",label:this.$t("procePass.ModifyPasswordWithdrawal"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgWithdrawalPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgWithdrawalPassword")},{message:this.$t("procePass.ValidateMsgWithdrawalPassword2"),validator:function(t){return n["a"].BDYDrawNumber(t).flag}}]},{name:"password",value:"",label:this.$t("procePass.TheNewATMPassword"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgNewWithdrawalPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgNewWithdrawalPassword")},{message:this.$t("procePass.ValidateMsgWithdrawalPassword2"),validator:function(t){return n["a"].BDYDrawNumber(t).flag}}]},{name:"passwordOk",value:"",label:this.$t("procePass.TheNewATMPasswordOk"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgWithdrawalPasswordOk"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgWithdrawalPasswordOk")},{message:this.$t("procePass.ValidateMsgPasswordOk2"),validator:function(e){var a=t.formFields.find((function(t){return"password"===t.name}));return e===a.value}}]}])},onSubmit:function(){var t,e=this;"loginPass"===this.type?t={id:localStorage.getItem("memberId"),oldPassword:this.formFields[0].value,password:this.formFields[1].value}:"withdrawalPass"===this.type&&(t={id:localStorage.getItem("memberId"),oldWithdrawPwd:this.formFields[0].value,withdrawPwd:this.formFields[1].value}),this.$api.my.Upper({body:t},(function(t){e.$cf.showConfirmSuccessDialog({title:t.message,onConfirm:function(){e.goBack()}})}))},goBack:function(){this.$router.push("/perSettings")}},created:function(){this.setData()},components:{CustomVanFieldInput:function(){return a.e("chunk-50b477c4").then(a.bind(null,"5623"))}}},o=i,l=(a("2b03"),a("2877")),u=Object(l["a"])(o,s,r,!1,null,null,null);e["default"]=u.exports},f2dc:function(t,e,a){"use strict";var s=a("72f2");e["a"]={strnumDa6:function(t){var e=/^[a-zA-Z0-9]{6,}$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入6位以上数字或字母"}},passwordValid:function(t){var e=/^[a-zA-Z0-9_]{6,}$/,a=new RegExp(e);return{flag:a.test(t),text:"格式須由 6~16 位半形英数字及下底線组成"}},BDYPasswordValid:function(t){var e=/^[a-zA-Z0-9]{6,16}$/,a=new RegExp(e);return{flag:a.test(t),text:"格式須由 6~16 位半形英数字"}},BFDrawNumber:function(t){var e=/^[0-9]{4,8}$/,a=new RegExp(e);return{flag:a.test(t),text:"格式错误，请设定 4~8 位数字密码"}},BDYDrawNumber:function(t){var e=/^[0-9]{6,}$/,a=new RegExp(e);return{flag:a.test(t),text:"格式错误，请设定 6 位数字密码"}},BFAccount:function(t){var e=/^BF[a-zA-Z0-9]{4,}$/,a=new RegExp(e);return{flag:a.test(t),text:"帐号格式必须为BF开头且符合 6~14 位"}},EDFAccount:function(t){var e=/^EDF[a-zA-Z0-9]{4,}$/,a=new RegExp(e);return{flag:a.test(t),text:"帐号格式必须为EDF开头且符合 6~14 位"}},BDYAcount:function(t){var e=/^[a-zA-Z0-9]{4,12}$/,a=new RegExp(e);return{flag:a.test(t),text:"帐号长度必须为 4~12 位半形英数字"}},THAcount:function(t){var e=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/,a=new RegExp(e);return{flag:a.test(t),text:"账号格式为6-10位英文+数字的組合"}},THAcountLogin:function(t){var e=/^[a-zA-Z0-9]{6,10}$/,a=new RegExp(e);return{flag:a.test(t),text:"账号格式为6-10位英文+数字的組合"}},LOAccountLogin:function(t){var e=/^LE[a-zA-Z0-9]{6,10}$/,a=new RegExp(e);return{flag:a.test(t),text:"帐号格式必须为LE开头且符合 8~12 位"}},THPasswordValid:function(t){var e=/^[a-zA-Z0-9_]{6,16}$/,a=new RegExp(e);return{flag:a.test(t),text:"密码格式为6-16位英数字及 '_'"}},THRealName:function(t){var e=/^[a-zA-Z\u4E00-\u9FA5\u0E01-\u0E5B ]{2,128}$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入汉字"}},phoneNum:function(t,e,a,s){var r;if(t){r=a?this[a.ruleName](t,e,s):this.phoneNumRuleCN(t,e,s);var n=a?this[a.blackRuleName](t,e,s):this.phoneBlackListCN(t,e,s);return n.flag||(r=n),r}},phoneNumRuleTH:function(t){var e=/^\d{9,10}$/,a=new RegExp(e);return{flag:a.test(t),text:"手机号码格式错误"}},phoneNumRuleCN:function(t){var e=/^1\d{10}$/,a=new RegExp(e);return{flag:a.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码格式错误"}},phoneBlackListCN:function(t,e,a){e=e||s["a"].state.notAllowPhoneNumber,a=a||s["a"].state.nationCode;var r=a;a||(r=""===a?"86":"66");var n=[],i=!0;e.split("|").forEach((function(t){var e=t.split("-");e.length<2&&(i=!1),e[0]===r&&n.push(e[1])}));var o=i?n.join("|"):e,l="^(".concat(o,"){1,}[0-9]{8,9}$"),u=new RegExp(l);return{flag:!u.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码无法使用，请联系客服"}},phoneBlackListTH:function(t,e,a){e=e||s["a"].state.notAllowPhoneNumber,a=a||s["a"].state.nationCode;var r=a;a||(r=""===a?"86":"66");var n=[],i=!0;e.split("|").forEach((function(t){var e=t.split("-");e.length<2&&(i=!1),e[0]===r&&n.push(e[1])}));var o=i?n.join("|"):e,l="^(".concat(o,"){1,}[0-9]{6,8}$"),u=new RegExp(l);return{flag:!u.test(t),text:"手机号码无法使用，请联系客服"}},email:function(t){var e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入正确的邮箱号码格式"}},yuming:function(t){var e=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/,a=new RegExp(e);return{flag:a.test(t),text:"请输入正确的域名格式"}},shenfenz:function(t){var e=/(^d{15}$)|(^d{17}([0-9]|X)$)/,a=new RegExp(e);return{flag:a.test(t),text:"请输入正确的身份证号码格式"}},number:function(t){var e=/^[0-9]*$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入数字"}},hanzi:function(t){var e=/^[\u4e00-\u9fa5·．]{0,}$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入汉字"}},BDYRealName:function(t){var e=/^[\u4e00-\u9fa5·．]{2,}$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入汉字"}},strnum:function(t){var e=/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/,a=new RegExp(e);return{flag:a.test(t),text:"请输入数字或字母"}},noFullWidth:function(t){var e=/[\uff00-\uffff]/g,a=new RegExp(e);return{flag:!a.test(t),text:"格式错误，不可包含全形"}},validYoung:function(t){var e=new Date,a=new Date(t),s=e.getFullYear()-a.getFullYear(),r=e.getMonth()-a.getMonth();return(r<0||0===r&&e.getDate()<a.getDate())&&(s-=1),{flag:s>=18,text:"未满18岁，无法注册"}},specialCharacters:function(t){var e=/^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/,a=new RegExp(e);return{flag:a.test(t),text:"格式错误，限中、英、数字"}}}},f686:function(t,e,a){}}]);