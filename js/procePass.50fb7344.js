(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["procePass"],{"2b03":function(e,t,s){"use strict";var a=s("f686"),r=s.n(a);r.a},"39fc":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"proce-pass-container"},[s("TheHeader",{staticClass:"transparent",attrs:{title:e.headerTitle,"left-arrow":"",leftClick:e.goBack}}),s("div",{staticClass:"form-box"},[s("van-form",{ref:"formRef",attrs:{"validate-trigger":"onChange"},on:{submit:e.onSubmit}},[e._l(e.formFields,(function(t){return s("van-field",e._b({key:t.name,scopedSlots:e._u([{key:"input",fn:function(){return[s("CustomVanFieldInput",{attrs:{useInvisibility:"",validatedState:t.state,inputClass:t.inputClass,placeholder:t.placeholder,type:t.type,maxlength:t.maxlength},on:{"update:type":function(s){return e.$set(t,"type",s)}},model:{value:t.value,callback:function(s){e.$set(t,"value",s)},expression:"field.value"}})]},proxy:!0}],null,!0)},"van-field",t,!1))})),s("div",{staticClass:"van-cell"},[s("van-button",{staticClass:"submit-btn",attrs:{type:"submit"}},[e._v(e._s(e.$t("Confirm")))])],1)],2)],1)],1)},r=[],l=s("f2dc"),n={name:"ProcePass",data(){return{headerTitle:"",type:"",formFields:[]}},methods:{setData(){this.type=this.$route.query.type,"loginPass"===this.type?(this.headerTitle=this.$t("procePass.ChangeMyPassword"),this.formFields=[{name:""+this.$t("procePass.OldPassword"),value:"",type:"password",label:this.$t("procePass.OldPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgCurrentPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgCurrentPassword")},{message:this.$t("procePass.ValidateMsgCurrentPassword2"),validator:e=>l["a"].THPasswordValid(e).flag}]},{name:"password",value:"",type:"password",label:this.$t("procePass.NewPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgNewPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgNewPassword")},{message:this.$t("procePass.ValidateMsgCurrentPassword2"),validator:e=>l["a"].THPasswordValid(e).flag}]},{name:"passwordOk",value:"",type:"password",label:this.$t("procePass.ConfirmTheNewPassword"),maxlength:16,placeholder:this.$t("procePass.ValidateMsgPasswordOk"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgPasswordOk")},{message:this.$t("procePass.ValidateMsgPasswordOk2"),validator:e=>{const t=this.formFields.find(e=>"password"===e.name);return e===t.value}}]}]):"withdrawalPass"===this.type&&(this.headerTitle=this.$t("procePass.ModifyPasswordWithdrawal"),this.formFields=[{name:""+this.$t("procePass.OldPassword"),value:"",label:this.$t("procePass.ModifyPasswordWithdrawal"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgWithdrawalPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgWithdrawalPassword")},{message:this.$t("procePass.ValidateMsgWithdrawalPassword2"),validator:e=>l["a"].BDYDrawNumber(e).flag}]},{name:"password",value:"",label:this.$t("procePass.TheNewATMPassword"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgNewWithdrawalPassword"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgNewWithdrawalPassword")},{message:this.$t("procePass.ValidateMsgWithdrawalPassword2"),validator:e=>l["a"].BDYDrawNumber(e).flag}]},{name:"passwordOk",value:"",label:this.$t("procePass.TheNewATMPasswordOk"),maxlength:6,type:"password",placeholder:this.$t("procePass.ValidateMsgWithdrawalPasswordOk"),rules:[{required:!0,message:this.$t("procePass.ValidateMsgWithdrawalPasswordOk")},{message:this.$t("procePass.ValidateMsgPasswordOk2"),validator:e=>{const t=this.formFields.find(e=>"password"===e.name);return e===t.value}}]}])},onSubmit(){let e;"loginPass"===this.type?e={id:localStorage.getItem("memberId"),oldPassword:this.formFields[0].value,password:this.formFields[1].value}:"withdrawalPass"===this.type&&(e={id:localStorage.getItem("memberId"),oldWithdrawPwd:this.formFields[0].value,withdrawPwd:this.formFields[1].value}),this.$api.my.Upper({body:e},e=>{this.$cf.showConfirmSuccessDialog({title:e.message,onConfirm:()=>{this.goBack()}})})},goBack(){this.$router.push("/perSettings")}},created(){this.setData()},components:{CustomVanFieldInput:()=>s.e("chunk-50b477c4").then(s.bind(null,"5623"))}},o=n,i=(s("2b03"),s("2877")),d=Object(i["a"])(o,a,r,!1,null,null,null);t["default"]=d.exports},f2dc:function(e,t,s){"use strict";var a=s("72f2");t["a"]={strnumDa6(e){const t=/^[a-zA-Z0-9]{6,}$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入6位以上数字或字母"}},passwordValid(e){const t=/^[a-zA-Z0-9_]{6,}$/,s=new RegExp(t);return{flag:s.test(e),text:"格式須由 6~16 位半形英数字及下底線组成"}},BDYPasswordValid(e){const t=/^[a-zA-Z0-9]{6,16}$/,s=new RegExp(t);return{flag:s.test(e),text:"格式須由 6~16 位半形英数字"}},BFDrawNumber(e){const t=/^[0-9]{4,8}$/,s=new RegExp(t);return{flag:s.test(e),text:"格式错误，请设定 4~8 位数字密码"}},BDYDrawNumber(e){const t=/^[0-9]{6,}$/,s=new RegExp(t);return{flag:s.test(e),text:"格式错误，请设定 6 位数字密码"}},BFAccount(e){const t=/^BF[a-zA-Z0-9]{4,}$/,s=new RegExp(t);return{flag:s.test(e),text:"帐号格式必须为BF开头且符合 6~14 位"}},EDFAccount(e){const t=/^EDF[a-zA-Z0-9]{4,}$/,s=new RegExp(t);return{flag:s.test(e),text:"帐号格式必须为EDF开头且符合 6~14 位"}},BDYAcount(e){const t=/^[a-zA-Z0-9]{4,12}$/,s=new RegExp(t);return{flag:s.test(e),text:"帐号长度必须为 4~12 位半形英数字"}},THAcount(e){const t=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/,s=new RegExp(t);return{flag:s.test(e),text:"账号格式为6-10位英文+数字的組合"}},THAcountLogin(e){const t=/^[a-zA-Z0-9]{6,10}$/,s=new RegExp(t);return{flag:s.test(e),text:"账号格式为6-10位英文+数字的組合"}},LOAccountLogin(e){const t=/^LE[a-zA-Z0-9]{6,10}$/,s=new RegExp(t);return{flag:s.test(e),text:"帐号格式必须为LE开头且符合 8~12 位"}},THPasswordValid(e){const t=/^[a-zA-Z0-9_]{6,16}$/,s=new RegExp(t);return{flag:s.test(e),text:"密码格式为6-16位英数字及 '_'"}},THRealName(e){const t=/^[a-zA-Z\u4E00-\u9FA5\u0E01-\u0E5B ]{2,128}$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入汉字"}},phoneNum(e,t,s,a){let r;if(e){r=s?this[s.ruleName](e,t,a):this.phoneNumRuleCN(e,t,a);const l=s?this[s.blackRuleName](e,t,a):this.phoneBlackListCN(e,t,a);return l.flag||(r=l),r}},phoneNumRuleTH(e){const t=/^\d{9,10}$/,s=new RegExp(t);return{flag:s.test(e),text:"手机号码格式错误"}},phoneNumRuleCN(e){const t=/^1\d{10}$/,s=new RegExp(t);return{flag:s.test(e)&&11===e.length&&e.startsWith("1"),text:"手机号码格式错误"}},phoneBlackListCN(e,t,s){t=t||a["a"].state.notAllowPhoneNumber,s=s||a["a"].state.nationCode;let r=s;s||(r=""===s?"86":"66");const l=[];let n=!0;t.split("|").forEach(e=>{const t=e.split("-");t.length<2&&(n=!1),t[0]===r&&l.push(t[1])});const o=n?l.join("|"):t,i=`^(${o}){1,}[0-9]{8,9}$`,d=new RegExp(i);return{flag:!d.test(e)&&11===e.length&&e.startsWith("1"),text:"手机号码无法使用，请联系客服"}},phoneBlackListTH(e,t,s){t=t||a["a"].state.notAllowPhoneNumber,s=s||a["a"].state.nationCode;let r=s;s||(r=""===s?"86":"66");const l=[];let n=!0;t.split("|").forEach(e=>{const t=e.split("-");t.length<2&&(n=!1),t[0]===r&&l.push(t[1])});const o=n?l.join("|"):t,i=`^(${o}){1,}[0-9]{6,8}$`,d=new RegExp(i);return{flag:!d.test(e),text:"手机号码无法使用，请联系客服"}},email(e){const t=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入正确的邮箱号码格式"}},yuming(e){const t=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/,s=new RegExp(t);return{flag:s.test(e),text:"请输入正确的域名格式"}},shenfenz(e){const t=/(^d{15}$)|(^d{17}([0-9]|X)$)/,s=new RegExp(t);return{flag:s.test(e),text:"请输入正确的身份证号码格式"}},number(e){const t=/^[0-9]*$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入数字"}},hanzi(e){const t=/^[\u4e00-\u9fa5·．]{0,}$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入汉字"}},BDYRealName(e){const t=/^[\u4e00-\u9fa5·．]{2,}$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入汉字"}},strnum(e){const t=/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/,s=new RegExp(t);return{flag:s.test(e),text:"请输入数字或字母"}},noFullWidth(e){const t=/[\uff00-\uffff]/g,s=new RegExp(t);return{flag:!s.test(e),text:"格式错误，不可包含全形"}},validYoung(e){const t=new Date,s=new Date(e);let a=t.getFullYear()-s.getFullYear();const r=t.getMonth()-s.getMonth();return(r<0||0===r&&t.getDate()<s.getDate())&&(a-=1),{flag:a>=18,text:"未满18岁，无法注册"}},specialCharacters(e){const t=/^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/,s=new RegExp(t);return{flag:s.test(e),text:"格式错误，限中、英、数字"}}}},f686:function(e,t,s){}}]);