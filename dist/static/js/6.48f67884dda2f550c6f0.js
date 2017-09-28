webpackJsonp([6],{203:function(t,e,s){var i=s(40)(s(332),s(456),null,null,null);t.exports=i.exports},218:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Toast",props:["type","text"],computed:{className:function(){return"icon_"+this.type}}}},228:function(t,e,s){e=t.exports=s(147)(!0),e.push([t.i,".toast_con{position:fixed;left:50%;top:50%;z-index:5001;margin:-50px 0 0 -125px;text-align:center;padding:35px 20px;min-width:250px;background-color:#fff;border-radius:5px;-webkit-box-shadow:0 0 5px rgba(0,0,0,.3);box-shadow:0 0 5px rgba(0,0,0,.3)}.toast_con_p{position:relative;font-size:16px;line-height:33px;clear:#333;padding-left:48px;display:inline-block;text-align:left}.toast_con_p i{width:32px;height:32px;left:0!important;top:0}.toast_con_p i.icon_success{background-position:-355px 0}.toast_con_p i.icon_error{background-position:-388px 0}.toast_con_p i.icon_warning{background-position:-314px -186px}","",{version:3,sources:["D:/test/vue_yitian/src/components/base/toast.vue"],names:[],mappings:"AACA,WAAY,eAAgB,AAAC,SAAU,AAAC,QAAS,AAAC,aAAc,AAAC,wBAAyB,AAAC,kBAAkB,AAAC,kBAAkB,AAAC,gBAAgB,AAAC,sBAAuB,AAAC,kBAAmB,AAAC,0CAA2C,AAAC,iCAAmC,CAC5Q,AACD,aAAa,kBAAkB,eAAe,iBAAiB,WAAW,kBAAkB,qBAAqB,eAAe,CAC/H,AACD,eAAe,WAAW,YAAY,iBAAiB,KAAK,CAC3D,AACD,4BAA4B,4BAA4B,CACvD,AACD,0BAA0B,4BAA4B,CACrD,AACD,4BAA4B,iCAAiC,CAC5D",file:"toast.vue",sourcesContent:["\n.toast_con{ position: fixed; left: 50%; top: 50%; z-index: 5001; margin: -50px 0 0 -125px; text-align:center; padding:35px 20px; min-width:250px; background-color: #fff; border-radius: 5px; -webkit-box-shadow: 0 0 5px rgba(0,0,0,.3); box-shadow: 0 0 5px rgba(0,0,0,.3);\n}\n.toast_con_p{position:relative;font-size:16px;line-height:33px;clear:#333;padding-left:48px;display:inline-block;text-align:left\n}\n.toast_con_p i{width:32px;height:32px;left:0!important;top:0\n}\n.toast_con_p i.icon_success{background-position:-355px 0\n}\n.toast_con_p i.icon_error{background-position:-388px 0\n}\n.toast_con_p i.icon_warning{background-position:-314px -186px\n}\r\n"],sourceRoot:""}])},230:function(t,e,s){var i=s(228);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(148)("54999e9a",i,!0)},231:function(t,e,s){function i(t){s(230)}var a=s(40)(s(218),s(240),i,null,null);t.exports=a.exports},240:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"toast"}},[s("div",{staticClass:"mask-transparent"}),t._v(" "),s("div",{staticClass:"toast_con"},[s("span",{staticClass:"toast_con_p"},[s("i",{staticClass:" icon",class:t.className}),t._v(t._s(t.text))])])])},staticRenderFns:[]}},245:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{options:{type:Array,default:[{label:"",value:0}]}},data:function(){return{isShow:!1,nowIndex:0}},mounted:function(){document.addEventListener("click",this.hiddenSelecter)},methods:{hiddenSelecter:function(){this.isShow=!1},showSelector:function(t){this.isShow=!this.isShow,t.stopPropagation()},choose:function(t){this.nowIndex=t,this.isShow=!1,this.$emit("on-change",this.options[this.nowIndex])}}}},264:function(t,e,s){e=t.exports=s(147)(!0),e.push([t.i,".select-big .select-border{height:30px}.select-big .select-text{padding:5px}.select-big .select-icon{padding:6px 5px}.select-big .select-sub{top:29px}.select{position:relative;width:100%;background-color:#fff}.select-border{position:relative;height:26px;border:1px solid #ced3d9;cursor:pointer;background-color:#fff}.select-border,.select-text{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}.select-text{z-index:2;line-height:18px;padding:3px 5px;border:0;background:transparent}.select-icon,.select-text{position:absolute;right:0;top:0}.select-icon{display:block;width:16px;height:16px;padding:4px 5px;cursor:pointer}.select-icon-arrow{display:block;width:0;margin:6px 0 0 4px;border:4px solid #fff;border-width:5px 4px;border-top-color:#656565}.select-sub{position:absolute;left:0;top:25px;z-index:100;width:100%;border:1px solid #ced3d9;max-height:280px;overflow-y:auto;background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.select-sub a{display:block;height:26px;padding-left:6px;line-height:26px;color:#404040;text-decoration:none}.select-sub a.selected-item,.select-sub a:hover{color:#fff;background-color:#48a4fa}","",{version:3,sources:["D:/test/vue_yitian/src/components/base/selector.vue"],names:[],mappings:"AACA,2BAA4B,WAAa,CACxC,AACD,yBAA0B,WAAa,CACtC,AACD,yBAA0B,eAAgB,CACzC,AACD,wBAAyB,QAAU,CAClC,AAGD,QAAS,kBAAkB,AAAC,WAAY,AAAC,qBAAuB,CAC/D,AACD,eAA+B,kBAAkB,AAAa,YAAY,AAAC,yBAAyB,AAAC,eAAgB,qBAAsB,CAC1I,AACD,4BAFgB,cAAc,AAAoB,WAAW,AAA+E,8BAA8B,AAAC,qBAAsB,CAGhM,AADD,aAA2H,UAAW,AAAC,iBAAkB,AAAc,gBAAiB,AAAC,SAAS,AAAC,sBAAwB,CAC1N,AACD,0BAFoF,kBAAkB,AAAC,QAAU,AAAC,KAAQ,CAGzH,AADD,aAAqD,cAAc,AAAC,WAAW,AAAC,YAAY,AAAC,gBAAgB,AAAC,cAAe,CAC5H,AACD,mBAAoB,cAAe,AAAC,QAAS,AAAC,mBAAmB,AAAC,sBAAsB,AAAC,qBAAqB,AAAC,wBAA0B,CACxI,AACD,YAAa,kBAAkB,AAAC,OAAO,AAAC,SAAS,AAAC,YAAY,AAAC,WAAW,AAAC,yBAAyB,AAAE,iBAAkB,AAAC,gBAAgB,AAAC,sBAAsB,AAAC,8BAA8B,AAAC,qBAAsB,CACrN,AACD,cAAe,cAAc,AAAC,YAAY,AAAC,iBAAiB,AAAC,iBAAiB,AAAC,cAAc,AAAC,oBAAoB,CACjH,AACD,gDAAkD,WAAW,AAAC,wBAAwB,CACrF",file:"selector.vue",sourcesContent:["\n.select-big .select-border{ height: 30px;\n}\n.select-big .select-text{ padding: 5px;\n}\n.select-big .select-icon{ padding: 6px 5px\n}\n.select-big .select-sub{ top: 29px;\n}\r\n\r\n/* select 下拉控件 */\n.select{ position:relative; width: 100%; background-color: #fff;\n}\n.select-border{ display:block; position:relative; width:100%; height:26px; border:1px solid #ced3d9; cursor:pointer ;background-color:#fff; -webkit-box-sizing:border-box; box-sizing:border-box;\n}\n.select-text{ -webkit-box-sizing:border-box; box-sizing:border-box; display: block; position:absolute; right:0px; top:0px; z-index: 2; line-height: 18px; width: 100%; padding: 3px 5px; border:0; background: transparent;\n}\n.select-icon{ position:absolute; right:0px; top:0px; display:block; width:16px; height:16px; padding:4px 5px; cursor:pointer;\n}\n.select-icon-arrow{ display: block; width: 0; margin:6px 0 0 4px; border:4px solid #fff; border-width:5px 4px; border-top-color: #656565;\n}\n.select-sub{ position:absolute; left:0; top:25px; z-index:100; width:100%; border:1px solid #ced3d9;  max-height: 280px; overflow-y:auto; background-color:#fff; -webkit-box-sizing:border-box; box-sizing:border-box;\n}\n.select-sub a{ display:block; height:26px; padding-left:6px; line-height:26px; color:#404040; text-decoration:none\n}\n.select-sub a:hover, .select-sub a.selected-item{ color:#fff; background-color:#48a4fa\n}\r\n"],sourceRoot:""}])},266:function(t,e,s){var i=s(264);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s(148)("7d564b14",i,!0)},275:function(t,e,s){t.exports=s.p+"static/img/ad1.5a3f4cc.jpg"},276:function(t,e,s){t.exports=s.p+"static/img/ad2.c7e23bc.jpg"},277:function(t,e,s){t.exports=s.p+"static/img/ad3.89c821b.jpg"},278:function(t,e,s){t.exports=s.p+"static/img/ad4.a060411.jpg"},280:function(t,e,s){function i(t){s(266)}var a=s(40)(s(245),s(293),i,null,null);t.exports=a.exports},293:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fl select select-big fz12",staticStyle:{width:"195px"}},[s("span",{staticClass:"select-border js-select",on:{click:function(e){t.showSelector(e)}}},[s("span",{staticClass:"select-text",attrs:{"data-value":""}},[t._v(t._s(t.options[t.nowIndex].label))]),t._v(" "),t._m(0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"select-sub js-select-sub"},t._l(t.options,function(e,i){return s("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.choose(i)}}},[t._v(t._s(e.label))])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"select-icon"},[s("i",{staticClass:"select-icon-arrow"})])}]}},332:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(280),a=s.n(i),o=s(231),n=s.n(o);e.default={components:{selector:a.a,toast:n.a},data:function(){return{name:"",identification:"",phone:"",money:"",deadline:"",nameFlag:!1,identificationFlag:!1,phoneFlag:!1,moneyFlag:!1,deadlineFlag:!1,isSelect:!1,isSelectFlag:!1,options:[{label:"请选择",value:-1},{label:"工商贷",value:0},{label:"工薪贷",value:1},{label:"房产抵押贷",value:2},{label:"车辆抵押贷",value:3}],isOK:!1,type:"",toastText:""}},computed:{isPhone:function(){return this.isMobileNum(this.phone)}},methods:{isMobileNum:function(t){return new RegExp(/^((13[0-9])|(14[0-7])|(15[^4,\D])|(17[0-8])|(18[0-9]))(\d{8})$/).test(t)},checkMoney:function(t){this[t]=this[t].replace(/[^\d\.]/g,"").replace(/^\.+/,"").replace(/^(\d{1,18}(\.\d{0,2})?).*/,"$1").replace(/^0\d+/,"")},applyLoan:function(){return""===this.name?(this.nameFlag=!0,!1):""===this.identification?(this.identificationFlag=!0,!1):""===this.phone?(this.phoneFlag=!0,!1):this.isPhone?this.isSelect?""===this.money?(this.moneyFlag=!0,!1):""===this.deadline?(this.deadlineFlag=!0,!1):void this.showToast("success","操作成功"):(this.isSelectFlag=!0,!1):(this.phoneFlag=!0,!1)},changeType:function(t){-1==t.value?this.isSelect=!1:this.isSelect=!0,this.isSelectFlag=!0},showToast:function(t,e,s){var i=this;this.type=t,this.toastText=e,this.isOK=!0,setTimeout(function(){i.isOK=!1,s&&s()},4e3)}}}},456:function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"s_center mb40 clr"},[t._m(0),t._v(" "),s("div",{staticClass:"loan-box clr"},[t._m(1),t._v(" "),s("div",{staticClass:"loan-right"},[s("h4",[t._v("我要借款")]),t._v(" "),s("form",{staticClass:"mt15",attrs:{action:""}},[s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("姓名/企业名称")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{keyup:function(e){t.nameFlag=!0},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"loan-error"},[""==t.name&&t.nameFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请输入姓名/企业名称")]):t._e()]),t._v(" "),s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("身份证/营业执照号")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.identification,expression:"identification"}],attrs:{type:"text",id:"identification"},domProps:{value:t.identification},on:{keyup:function(e){t.identificationFlag=!0},input:function(e){e.target.composing||(t.identification=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"loan-error"},[""==t.identification&&t.identificationFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请输入身份证/营业执照号")]):t._e()]),t._v(" "),s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("联系方式")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"text",id:"phone",maxlength:"11"},domProps:{value:t.phone},on:{keyup:function(e){t.phoneFlag=!0},input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"loan-error"},[""==t.phone&&t.phoneFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请输入联系方式")]):t._e(),t._v(" "),!t.isPhone&&""!=t.phone&&t.phoneFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("手机号格式有误，请重新输入！")]):t._e()]),t._v(" "),s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("借贷类型")]),t._v(" "),s("selector",{attrs:{options:t.options},on:{"on-change":t.changeType}})],1),t._v(" "),s("div",{staticClass:"loan-error"},[!t.isSelect&&t.isSelectFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请选择借贷类型")]):t._e()]),t._v(" "),s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("借款金额")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.money,expression:"money"},{name:"money",rawName:"v-money",value:t.money,expression:"money"}],attrs:{type:"text",id:"money"},domProps:{value:t.money},on:{keyup:function(e){t.moneyFlag=!0},input:function(e){e.target.composing||(t.money=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"loan-error"},[""==t.money&&t.moneyFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请输入借款金额")]):t._e()]),t._v(" "),s("div",{staticClass:"clr loan-label"},[s("span",{staticClass:"loan-label-text"},[t._v("借款期限")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.deadline,expression:"deadline"}],attrs:{type:"text",id:"deadline"},domProps:{value:t.deadline},on:{keyup:function(e){t.deadlineFlag=!0},input:function(e){e.target.composing||(t.deadline=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"loan-error"},[""==t.deadline&&t.deadlineFlag?s("span",{staticClass:"p_zcerror"},[s("i",{staticClass:"icon"}),t._v("请输入借款期限")]):t._e()]),t._v(" "),s("a",{staticClass:"loan-btn",attrs:{href:"javascript:void(0)"},on:{click:function(e){t.applyLoan()}}},[t._v("立即申请")])])])]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t.isOK?s("toast",{attrs:{type:t.type,text:t.toastText}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"s_bread"},[s("a",{staticClass:"s_breadindex",attrs:{href:"/",title:""}},[s("i",{staticClass:"icon"}),t._v("首页")]),t._v(" "),s("i",{staticClass:"s_breadarrow"},[t._v(">")]),t._v(" "),s("span",[t._v("我要借款")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loan-left"},[s("h4",{staticClass:"fz18"},[t._v("我们的优势")]),t._v(" "),s("ul",{staticClass:"loan-advantage clr"},[s("li",[s("i",{staticClass:"loan-icon-1"}),t._v(" "),s("strong",[t._v("额度高")]),t._v(" "),s("p",[t._v("借款额度最高50万")])]),t._v(" "),s("li",[s("i",{staticClass:"loan-icon-2"}),t._v(" "),s("strong",[t._v("放款快")]),t._v(" "),s("p",[t._v("最快当天即可放款")])]),t._v(" "),s("li",[s("i",{staticClass:"loan-icon-3"}),t._v(" "),s("strong",[t._v("利率低")]),t._v(" "),s("p",[t._v("年化最低7%")])]),t._v(" "),s("li",[s("i",{staticClass:"loan-icon-4"}),t._v(" "),s("strong",[t._v("流程简")]),t._v(" "),s("p",[t._v("在线提交轻松获批")])])]),t._v(" "),s("div",{staticClass:"loan-hr"}),t._v(" "),s("h4",{staticClass:"fz18"},[t._v("借款流程")]),t._v(" "),s("ul",{staticClass:"loan-step clr fz16"},[s("li",{staticClass:"loan-step-li"},[s("em",[t._v("1")]),t._v(" "),s("p",[t._v("填写资料")])]),t._v(" "),s("li",{staticClass:"loan-step-arrow"}),t._v(" "),s("li",{staticClass:"loan-step-li"},[s("em",[t._v("2")]),t._v(" "),s("p",[t._v("审核信息")])]),t._v(" "),s("li",{staticClass:"loan-step-arrow"}),t._v(" "),s("li",{staticClass:"loan-step-li"},[s("em",[t._v("3")]),t._v(" "),s("p",[t._v("平台募集")])]),t._v(" "),s("li",{staticClass:"loan-step-arrow"}),t._v(" "),s("li",{staticClass:"loan-step-li"},[s("em",[t._v("4")]),t._v(" "),s("p",[t._v("快速放款")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loan-type clr"},[i("div",{staticClass:"loan-type-left"},[i("img",{attrs:{src:s(275)}}),i("span",[t._v("工商贷")])]),t._v(" "),i("div",{staticClass:"loan-type-right"},[i("p",{staticClass:"lh30 fz16"},[t._v("有固定的经营场地或地址，经营合法、有稳定的经营收入的个体工商户，"),i("br"),t._v("提供相关的审核资料，均可向益田理财申请贷款。")]),t._v(" "),i("table",{staticClass:"loan-type-table",attrs:{width:"100%"}},[i("tr",{staticClass:"fz16 bold"},[i("th",{attrs:{height:"38",width:"200"}},[t._v("贷款条件")]),i("th",{attrs:{width:"230"}},[t._v("额度期限")]),i("th",[t._v("所需资料")])]),t._v(" "),i("tr",[i("td",{attrs:{valign:"top"}},[t._v("年龄满足22-55岁"),i("br"),t._v("中小企业主或个体工商"),i("br"),t._v("良好的过往征信记录"),i("br"),t._v("公司成立满1年，经营稳定")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("贷款限制：金额50万以下"),i("br"),t._v("借款期限：1期，2期，3期，"),i("br"),t._v("6期，9期，12期，18期"),i("br"),t._v("还款方式：到期一次性还本付息")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("申请人二代身份证"),i("br"),t._v("申请人银行流水"),i("br"),t._v("申请人征信用报告"),i("br"),t._v("资产证明"),i("br"),t._v("营业执照")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loan-type clr"},[i("div",{staticClass:"loan-type-left"},[i("img",{attrs:{src:s(276)}}),i("span",[t._v("工薪贷")])]),t._v(" "),i("div",{staticClass:"loan-type-right"},[i("p",{staticClass:"lh30 fz16"},[t._v("面向工薪阶层，有稳定收入来源，无须抵押，即可为工薪族"),i("br"),t._v("提供资金周转，手续简单，放款速度快。")]),t._v(" "),i("table",{staticClass:"loan-type-table",attrs:{width:"100%"}},[i("tr",{staticClass:"fz16 bold"},[i("th",{attrs:{height:"38",width:"200"}},[t._v("贷款条件")]),i("th",{attrs:{width:"230"}},[t._v("额度期限")]),i("th",[t._v("所需资料")])]),t._v(" "),i("tr",[i("td",{attrs:{valign:"top"}},[t._v("年龄满足22-45岁"),i("br"),t._v("工作稳定"),i("br"),t._v("良好的过往征信记录")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("贷款限制：金额20万以下"),i("br"),t._v("借款期限：6期，9期，12期，18期"),i("br"),t._v("还款方式：到期一次性还本付息")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("申请人二代身份证"),i("br"),t._v("申请人银行流水"),i("br"),t._v("申请人征信用报告"),i("br"),t._v("资产证明材料")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loan-type clr"},[i("div",{staticClass:"loan-type-left"},[i("img",{attrs:{src:s(277)}}),i("span",[t._v("房产抵押贷")])]),t._v(" "),i("div",{staticClass:"loan-type-right"},[i("p",{staticClass:"lh30 fz16"},[t._v("借款人以本人名下的房产做抵押，益田理财在审核房产价值"),i("br"),t._v("及还款能力之后，办理公证抵押之后，以最快的速度完成放款。")]),t._v(" "),i("table",{staticClass:"loan-type-table",attrs:{width:"100%"}},[i("tr",{staticClass:"fz16 bold"},[i("th",{attrs:{height:"38",width:"200"}},[t._v("贷款条件")]),i("th",{attrs:{width:"230"}},[t._v("额度期限")]),i("th",[t._v("所需资料")])]),t._v(" "),i("tr",[i("td",{attrs:{valign:"top"}},[t._v("年龄满足22-45岁"),i("br"),t._v("红本在手"),i("br"),t._v("良好的过往征信记录")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("贷款限制：金额50万以下"),i("br"),t._v("借款期限：1期，2期，3期，6期，9期，12期，18期"),i("br"),t._v("还款方式：到期一次性还本付息")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("申请人二代身份证"),i("br"),t._v("申请人银行流水"),i("br"),t._v("申请人征信用报告"),i("br"),t._v("资产证明"),i("br"),t._v("房产证")])])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"loan-type clr"},[i("div",{staticClass:"loan-type-left"},[i("img",{attrs:{src:s(278)}}),i("span",[t._v("车辆抵押贷")])]),t._v(" "),i("div",{staticClass:"loan-type-right"},[i("p",{staticClass:"lh30 fz16"},[t._v("借款人以汽车作为抵押物，不押车，不押证，材料少，轻松贷，最快1天可放款。 ")]),t._v(" "),i("table",{staticClass:"loan-type-table",attrs:{width:"100%"}},[i("tr",{staticClass:"fz16 bold"},[i("th",{attrs:{height:"38",width:"200"}},[t._v("贷款条件")]),i("th",{attrs:{width:"230"}},[t._v("额度期限")]),i("th",[t._v("所需资料")])]),t._v(" "),i("tr",[i("td",{attrs:{valign:"top"}},[t._v("年龄满足22-55岁"),i("br"),t._v("中小企业主或个体工商良好的过往征信记录"),i("br"),t._v("公司成立满1年，经营稳定")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("贷款限制：金额50万以下"),i("br"),t._v("借款期限：1期，2期，3期，6期，9期，12期，18期"),i("br"),t._v("还款方式：到期一次性还本付息")]),t._v(" "),i("td",{attrs:{valign:"top"}},[t._v("申请人二代身份证"),i("br"),t._v("申请人银行流水"),i("br"),t._v("申请人征信用报告")])])])])])}]}}});
//# sourceMappingURL=6.48f67884dda2f550c6f0.js.map