(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setPassword"],{"3b86":function(t,e,n){},"7b84":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"set-password-container"},[n("TheHeader",{staticClass:"transparent",attrs:{title:t.$t("setPassword.SettingWithdrawalPassword"),"left-arrow":"",leftClick:t.goBack}}),n("div",{staticClass:"form-box"},[n("van-form",{ref:"formRef",attrs:{"validate-trigger":"onChange"},on:{submit:t.onSubmit}},[t._l(t.formFields,(function(e){return n("van-field",t._b({key:e.name,scopedSlots:t._u([{key:"input",fn:function(){return[n("custom-van-field-input",{attrs:{useInvisibility:"",validatedState:e.state,inputClass:e.inputClass,placeholder:e.placeholder,type:e.type,maxlength:e.maxlength},on:{"update:type":function(n){return t.$set(e,"type",n)}},model:{value:e.value,callback:function(n){t.$set(e,"value",n)},expression:"field.value"}})]},proxy:!0}],null,!0)},"van-field",e,!1))})),n("div",{staticClass:"van-cell"},[n("van-button",{staticClass:"submit-btn",attrs:{type:"submit"}},[t._v(t._s(t.$t("Submit")))])],1)],2)],1)],1)},r=[],s=n("f2dc"),u={name:"SetPassword",data:function(){var t=this;return{formFields:[{name:"password",value:"",label:this.$t("setPassword.WithdrawalPwd"),maxlength:6,type:"password",rules:[{required:!0,message:"* ".concat(this.$t("setPassword.EnterWithdrawalPassword"))},{message:"* ".concat(this.$t("setPassword.PwdFormatWarning")),validator:function(t){return s["a"].BDYDrawNumber(t).flag}}]},{name:"passwordOk",value:"",label:this.$t("setPassword.ConfirmWithdrawalPassword"),type:"password",maxlength:6,rules:[{required:!0,message:"* ".concat(this.$t("setPassword.EnterWithdrawalPasswordAgain"))},{message:"* ".concat(this.$t("setPassword.Notmatch")),validator:function(e){var n=t.formFields.find((function(t){return"password"===t.name}));return e===n.value}}]}]}},methods:{onSubmit:function(){var t=this;this.$api.my.setRawpwd({body:{withdrawPwd:this.formFields[0].value,id:localStorage.getItem("memberId")}},(function(){t.$cf.showConfirmSuccessDialog({title:t.$t("setPassword.SetPwdSuccessfully")});var e=t.$route.query.redirect,n="";n=e?"/lineDrawing":"/perSettings",setTimeout((function(){t.$router.push({path:n})}),1500)}))},goBack:function(){this.$router.push("/perSettings")}},components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,"2ab4"))},CustomVanFieldInput:function(){return n.e("chunk-50b477c4").then(n.bind(null,"5623"))}}},o=u,i=(n("da51"),n("2877")),l=Object(i["a"])(o,a,r,!1,null,null,null);e["default"]=l.exports},da51:function(t,e,n){"use strict";var a=n("3b86"),r=n.n(a);r.a},f2dc:function(t,e,n){"use strict";var a=n("72f2");e["a"]={strnumDa6:function(t){var e=/^[a-zA-Z0-9]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入6位以上数字或字母"}},passwordValid:function(t){var e=/^[a-zA-Z0-9_]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式須由 6~16 位半形英数字及下底線组成"}},BDYPasswordValid:function(t){var e=/^[a-zA-Z0-9]{6,16}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式須由 6~16 位半形英数字"}},BFDrawNumber:function(t){var e=/^[0-9]{4,8}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，请设定 4~8 位数字密码"}},BDYDrawNumber:function(t){var e=/^[0-9]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，请设定 6 位数字密码"}},BFAccount:function(t){var e=/^BF[a-zA-Z0-9]{4,}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为BF开头且符合 6~14 位"}},EDFAccount:function(t){var e=/^EDF[a-zA-Z0-9]{4,}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为EDF开头且符合 6~14 位"}},BDYAcount:function(t){var e=/^[a-zA-Z0-9]{4,12}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号长度必须为 4~12 位半形英数字"}},THAcount:function(t){var e=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"账号格式为6-10位英文+数字的組合"}},THAcountLogin:function(t){var e=/^[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"账号格式为6-10位英文+数字的組合"}},LOAccountLogin:function(t){var e=/^LE[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为LE开头且符合 8~12 位"}},THPasswordValid:function(t){var e=/^[a-zA-Z0-9_]{6,16}$/,n=new RegExp(e);return{flag:n.test(t),text:"密码格式为6-16位英数字及 '_'"}},THRealName:function(t){var e=/^[a-zA-Z\u4E00-\u9FA5\u0E01-\u0E5B ]{2,128}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},phoneNum:function(t,e,n,a){var r;if(t){r=n?this[n.ruleName](t,e,a):this.phoneNumRuleCN(t,e,a);var s=n?this[n.blackRuleName](t,e,a):this.phoneBlackListCN(t,e,a);return s.flag||(r=s),r}},phoneNumRuleTH:function(t){var e=/^\d{9,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"手机号码格式错误"}},phoneNumRuleCN:function(t){var e=/^1\d{10}$/,n=new RegExp(e);return{flag:n.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码格式错误"}},phoneBlackListCN:function(t,e,n){e=e||a["a"].state.notAllowPhoneNumber,n=n||a["a"].state.nationCode;var r=n;n||(r=""===n?"86":"66");var s=[],u=!0;e.split("|").forEach((function(t){var e=t.split("-");e.length<2&&(u=!1),e[0]===r&&s.push(e[1])}));var o=u?s.join("|"):e,i="^(".concat(o,"){1,}[0-9]{8,9}$"),l=new RegExp(i);return{flag:!l.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码无法使用，请联系客服"}},phoneBlackListTH:function(t,e,n){e=e||a["a"].state.notAllowPhoneNumber,n=n||a["a"].state.nationCode;var r=n;n||(r=""===n?"86":"66");var s=[],u=!0;e.split("|").forEach((function(t){var e=t.split("-");e.length<2&&(u=!1),e[0]===r&&s.push(e[1])}));var o=u?s.join("|"):e,i="^(".concat(o,"){1,}[0-9]{6,8}$"),l=new RegExp(i);return{flag:!l.test(t),text:"手机号码无法使用，请联系客服"}},email:function(t){var e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的邮箱号码格式"}},yuming:function(t){var e=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的域名格式"}},shenfenz:function(t){var e=/(^d{15}$)|(^d{17}([0-9]|X)$)/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的身份证号码格式"}},number:function(t){var e=/^[0-9]*$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入数字"}},hanzi:function(t){var e=/^[\u4e00-\u9fa5·．]{0,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},BDYRealName:function(t){var e=/^[\u4e00-\u9fa5·．]{2,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},strnum:function(t){var e=/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入数字或字母"}},noFullWidth:function(t){var e=/[\uff00-\uffff]/g,n=new RegExp(e);return{flag:!n.test(t),text:"格式错误，不可包含全形"}},validYoung:function(t){var e=new Date,n=new Date(t),a=e.getFullYear()-n.getFullYear(),r=e.getMonth()-n.getMonth();return(r<0||0===r&&e.getDate()<n.getDate())&&(a-=1),{flag:a>=18,text:"未满18岁，无法注册"}},specialCharacters:function(t){var e=/^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，限中、英、数字"}}}}}]);