(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["phoneCall"],{"181c":function(t,e,n){t.exports=n.p+"img/icon-phone.d576285c.svg"},2352:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"view-phone-cell-container"},[a("TheHeader",{attrs:{title:t.$t("phoneCall.PhoneCallBack"),"left-arrow":"","left-click":t.goBack}}),a("van-notice-bar",{attrs:{wrapable:"",scrollable:!1,mode:"closeable"}},[t._v(t._s(t.$t("phoneCall.Tips")))]),a("div",{staticClass:"ipt-list-box"},[a("div",{staticClass:"ipt-left"},[a("img",{attrs:{src:n("181c"),alt:""}})]),a("div",{staticClass:"ipt-center"},[a("div",{staticClass:"areaCode"},[t._v("+"+t._s(t.areaCode))]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tel,expression:"tel"}],style:{width:"100%"},attrs:{type:"text",maxlength:"10",rules:["noFullWidth","number"],placeholder:t.$t("phoneCall.EnterPhoneNumber")},domProps:{value:t.tel},on:{input:function(e){e.target.composing||(t.tel=e.target.value)}}})])]),a("hr",{staticClass:"lineMe"}),a("div",{staticClass:"btn-box"},[a("LinearButton",{attrs:{block:"",type:"info",disabled:t.disabled},on:{click:t.Uptel}},[t._v(t._s(t.$t("phoneCall.ConfirmSubmission")))])],1)],1)},s=[],l=n("f2dc"),o=n("655c"),r={data(){return{tel:"",notAllowPhoneNumber:"",areaCode:"66"}},computed:{disabled(){return this.tel.length<9}},components:{LinearButton:()=>n.e("chunk-73bcffce").then(n.bind(null,"ec6b"))},methods:{goBack(){this.$cf.goBack(this.$route)},Uptel(){this.tel=this.tel.length>9?this.tel.slice(1):this.tel;const{flag:t}=l["a"].phoneNum(this.tel,this.notAllowPhoneNumber,o["a"].th);t?this.$api.my.Uptel({body:{tel:`${this.areaCode}-${this.tel}`}},t=>{this.tel="",this.$cf.showSuccessMessageDialog(t.message)}):this.$cf.showErrorMessageDialog(this.$t("phoneCall.Warning"))},getPerInfo(){this.$api.my.getPerInfo({body:{}},t=>{const e=t.data.mobile.split("-");this.tel=e.length>1?e[1]:e[0]})},phoneFormatVerify(){this.$api.register.phoneFormatVerify({body:{}},t=>{this.notAllowPhoneNumber=t.data.regTelNotAllow.split(",").join("|")})}},created(){this.getPerInfo(),this.phoneFormatVerify()}},i=r,c=(n("eeef"),n("2877")),u=Object(c["a"])(i,a,s,!1,null,"0699679c",null);e["default"]=u.exports},5894:function(t,e,n){},"655c":function(t,e,n){"use strict";e["a"]={cn:{phoneNumberLengh:11,ruleName:"phoneNumRuleCN",blackRuleName:"phoneBlackListCN"},th:{phoneNumberLengh:10,ruleName:"phoneNumRuleTH",blackRuleName:"phoneBlackListTH"}}},eeef:function(t,e,n){"use strict";var a=n("5894"),s=n.n(a);s.a},f2dc:function(t,e,n){"use strict";var a=n("72f2");e["a"]={strnumDa6(t){const e=/^[a-zA-Z0-9]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入6位以上数字或字母"}},passwordValid(t){const e=/^[a-zA-Z0-9_]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式須由 6~16 位半形英数字及下底線组成"}},BDYPasswordValid(t){const e=/^[a-zA-Z0-9]{6,16}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式須由 6~16 位半形英数字"}},BFDrawNumber(t){const e=/^[0-9]{4,8}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，请设定 4~8 位数字密码"}},BDYDrawNumber(t){const e=/^[0-9]{6,}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，请设定 6 位数字密码"}},BFAccount(t){const e=/^BF[a-zA-Z0-9]{4,}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为BF开头且符合 6~14 位"}},EDFAccount(t){const e=/^EDF[a-zA-Z0-9]{4,}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为EDF开头且符合 6~14 位"}},BDYAcount(t){const e=/^[a-zA-Z0-9]{4,12}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号长度必须为 4~12 位半形英数字"}},THAcount(t){const e=/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"账号格式为6-10位英文+数字的組合"}},THAcountLogin(t){const e=/^[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"账号格式为6-10位英文+数字的組合"}},LOAccountLogin(t){const e=/^LE[a-zA-Z0-9]{6,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"帐号格式必须为LE开头且符合 8~12 位"}},THPasswordValid(t){const e=/^[a-zA-Z0-9_]{6,16}$/,n=new RegExp(e);return{flag:n.test(t),text:"密码格式为6-16位英数字及 '_'"}},THRealName(t){const e=/^[a-zA-Z\u4E00-\u9FA5\u0E01-\u0E5B ]{2,128}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},phoneNum(t,e,n,a){let s;if(t){s=n?this[n.ruleName](t,e,a):this.phoneNumRuleCN(t,e,a);const l=n?this[n.blackRuleName](t,e,a):this.phoneBlackListCN(t,e,a);return l.flag||(s=l),s}},phoneNumRuleTH(t){const e=/^\d{9,10}$/,n=new RegExp(e);return{flag:n.test(t),text:"手机号码格式错误"}},phoneNumRuleCN(t){const e=/^1\d{10}$/,n=new RegExp(e);return{flag:n.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码格式错误"}},phoneBlackListCN(t,e,n){e=e||a["a"].state.notAllowPhoneNumber,n=n||a["a"].state.nationCode;let s=n;n||(s=""===n?"86":"66");const l=[];let o=!0;e.split("|").forEach(t=>{const e=t.split("-");e.length<2&&(o=!1),e[0]===s&&l.push(e[1])});const r=o?l.join("|"):e,i=`^(${r}){1,}[0-9]{8,9}$`,c=new RegExp(i);return{flag:!c.test(t)&&11===t.length&&t.startsWith("1"),text:"手机号码无法使用，请联系客服"}},phoneBlackListTH(t,e,n){e=e||a["a"].state.notAllowPhoneNumber,n=n||a["a"].state.nationCode;let s=n;n||(s=""===n?"86":"66");const l=[];let o=!0;e.split("|").forEach(t=>{const e=t.split("-");e.length<2&&(o=!1),e[0]===s&&l.push(e[1])});const r=o?l.join("|"):e,i=`^(${r}){1,}[0-9]{6,8}$`,c=new RegExp(i);return{flag:!c.test(t),text:"手机号码无法使用，请联系客服"}},email(t){const e=/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的邮箱号码格式"}},yuming(t){const e=/[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\/.?/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的域名格式"}},shenfenz(t){const e=/(^d{15}$)|(^d{17}([0-9]|X)$)/,n=new RegExp(e);return{flag:n.test(t),text:"请输入正确的身份证号码格式"}},number(t){const e=/^[0-9]*$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入数字"}},hanzi(t){const e=/^[\u4e00-\u9fa5·．]{0,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},BDYRealName(t){const e=/^[\u4e00-\u9fa5·．]{2,}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入汉字"}},strnum(t){const e=/^[A-Za-z0-9]+$ 或 ^[A-Za-z0-9]{4,40}$/,n=new RegExp(e);return{flag:n.test(t),text:"请输入数字或字母"}},noFullWidth(t){const e=/[\uff00-\uffff]/g,n=new RegExp(e);return{flag:!n.test(t),text:"格式错误，不可包含全形"}},validYoung(t){const e=new Date,n=new Date(t);let a=e.getFullYear()-n.getFullYear();const s=e.getMonth()-n.getMonth();return(s<0||0===s&&e.getDate()<n.getDate())&&(a-=1),{flag:a>=18,text:"未满18岁，无法注册"}},specialCharacters(t){const e=/^[A-Za-z0-9\u4e00-\u9fa5]{1,20}$/,n=new RegExp(e);return{flag:n.test(t),text:"格式错误，限中、英、数字"}}}}}]);