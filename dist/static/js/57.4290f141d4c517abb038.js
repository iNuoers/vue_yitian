webpackJsonp([57],{176:function(t,a,e){var r=e(40)(e(308),e(441),null,null,null);t.exports=r.exports},308:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{breadcrumbs:"公司简介",narArr:[{type:"aboutCompany",name:"公司简介"},{type:"partner",name:"合作伙伴"},{type:"team",name:"团队风采"},{type:"notice",name:"官方公告"},{type:"dynamic",name:"平台动态"},{type:"news",name:"行业资讯"},{type:"recruit",name:"招贤纳士"},{type:"contact",name:"联系我们"}]}},computed:{key:function(){return void 0!==this.$route.name?this.$route.name+ +new Date:this.$route+ +new Date}},mounted:function(){this.setBreadcrumbs()},watch:{$route:"setBreadcrumbs"},methods:{setBreadcrumbs:function(){for(var t=this.$route.path,a=this.narArr.length-1;a>=0;a--)t.indexOf(this.narArr[a].type)>0&&(this.breadcrumbs=this.narArr[a].name)}}}},441:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"s_center mb40 clr"},[e("div",{staticClass:"s_bread"},[t._m(0),t._v(" "),e("i",{staticClass:"s_breadarrow"},[t._v(">")]),t._v("关于我们"),e("i",{staticClass:"s_breadarrow"},[t._v(">")]),t._v(" "),e("span",[t._v(t._s(t.breadcrumbs))])]),t._v(" "),e("div",{staticClass:"p_abusmain clr"},[e("div",{staticClass:"p_ableft"},[t._m(1),t._v(" "),e("ul",{staticClass:"p_abnav"},[e("router-link",{attrs:{to:"/aboutUs/aboutCompany",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("公司简介")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/partner",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("合作伙伴")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/team",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("团队风采")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/notice",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("官方公告")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/dynamic",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("平台动态")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/news",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("行业资讯")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/recruit",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("招贤纳士")])]),t._v(" "),e("router-link",{attrs:{to:"/aboutUs/contact",tag:"li","active-class":"cur",exact:""}},[e("a",[t._v("联系我们")])])],1)]),t._v(" "),e("keep-alive",[e("router-view",{key:t.key})],1)],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"s_breadindex",attrs:{href:"/",title:""}},[e("i",{staticClass:"icon"}),t._v("首页")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h2",[e("i",{staticClass:"icon"}),t._v("关于我们")])}]}}});
//# sourceMappingURL=57.4290f141d4c517abb038.js.map