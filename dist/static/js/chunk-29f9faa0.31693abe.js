(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f9faa0"],{"368e":function(t,e,i){},"3a2f":function(t,e,i){"use strict";i("9734");var s=i("4ad4"),a=i("a9ad"),n=i("16b7"),o=i("b848"),r=i("75eb"),l=i("f573"),d=i("f2e7"),c=i("80d2"),h=i("d9bd"),u=i("58df");e["a"]=Object(u["a"])(a["a"],n["a"],o["a"],r["a"],l["a"],d["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:()=>({calculatedMinWidth:0,closeDependents:!1}),computed:{calculatedLeft(){const{activator:t,content:e}=this.dimensions,i=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?t.offsetLeft:t.left;let a=0;return this.top||this.bottom||i?a=s+t.width/2-e.width/2:(this.left||this.right)&&(a=s+(this.right?t.width:-e.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),this.calcXOverflow(a,this.dimensions.content.width)+"px"},calculatedTop(){const{activator:t,content:e}=this.dimensions,i=!1!==this.attach?t.offsetTop:t.top;let s=0;return this.top||this.bottom?s=i+(this.bottom?t.height:-e.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=i+t.height/2-e.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),this.calcYOverflow(s+this.pageYOffset)+"px"},classes(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY(){return this.top||this.bottom},offsetX(){return this.left||this.right},styles(){return{left:this.calculatedLeft,maxWidth:Object(c["g"])(this.maxWidth),minWidth:Object(c["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount(){this.$nextTick(()=>{this.value&&this.callActivate()})},mounted(){"v-slot"===Object(c["s"])(this,"activator",!0)&&Object(h["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate(){this.runDelay("close")},genActivatorListeners(){const t=s["a"].options.methods.genActivatorListeners.call(this);return t.focus=t=>{this.getActivator(t),this.runDelay("open")},t.blur=t=>{this.getActivator(t),this.runDelay("close")},t.keydown=t=>{t.keyCode===c["w"].esc&&(this.getActivator(t),this.runDelay("close"))},t},genActivatorAttributes(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition(){const t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:{[this.contentClass]:!0,menuable__content__active:this.isActive,"v-tooltip__content--fixed":this.activatorFixed},style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render(t){return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent(()=>[this.genTransition()]),this.genActivator()])}})},"7b16":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",[i("v-menu",{attrs:{disabled:t.menudisabled,rounded:"","max-height":"520px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,a=e.attrs;return[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on;return[i("v-btn",t._g(t._b({attrs:{depressed:""}},"v-btn",a,!1),Object.assign({},n,s)),[i("div",{staticClass:"headline"},[t._v(t._s(t.nowclassname))])]),i("div",{staticClass:"headline"},[t._v("学生列表")])]}}],null,!0)},[i("span",[t._v(t._s(t.tipText))])])]}}])},[i("v-list",t._l(t.classes,(function(e,s){return i("v-list-item",{key:s,on:{click:function(i){return t.changeclass(e)}}},[i("v-list-item-title",[t._v(t._s(e.name))])],1)})),1)],1),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-card-text",[i("v-data-table",{attrs:{"fixed-header":"",headers:t.headers,items:t.students,search:t.search,loading:t.$store.state.isLoading,"loading-text":"加载中...","no-data-text":"没有数据哦","no-results-text":"没有结果"},on:{"click:row":t.rowClick}}),i("v-dialog",{attrs:{"max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("stuvolist",{attrs:{userid:t.rowUserId,title:t.rowUserName}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])],1)],1)],1)],1)],1)},a=[],n=(i("b0c0"),i("d3b7"),i("bc3a")),o=i.n(n),r=i("c13c"),l=i("bade"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:""}},[i("v-card-title",[i("div",{staticClass:"headline"},[t._v(t._s(t.title)+" 义工列表")]),i("v-spacer"),i("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"搜索","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),i("v-card-text",[i("v-data-table",{attrs:{"fixed-header":"",headers:t.headers,items:t.volworks,search:t.search,loading:t.$store.state.isLoading,"loading-text":"加载中...","no-data-text":"没有数据哦","no-results-text":"没有结果"},on:{"click:row":t.rowClick}})],1),i("v-dialog",{attrs:{"max-width":"80%"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",[i("volinfo",{attrs:{volid:t.volid}}),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{color:"red darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])],1)],1)],1)],1)},c=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{flat:""}},[i("v-card-title",[t._v(" "+t._s(t.vol.name)+" ")]),i("v-simple-table",{attrs:{dense:""}},[i("tbody",[i("tr",[i("td",[t._v("简介")]),i("td",[t._v(t._s(t.vol.description))])]),i("tr",[i("td",[t._v("日期")]),i("td",[t._v(t._s(t.vol.date))])]),i("tr",[i("td",[t._v("时间")]),i("td",[t._v(t._s(t.vol.time))])]),i("tr",[i("td",[t._v("校内时长")]),i("td",[t._v(t._s(t.vol.inside))])]),i("tr",[i("td",[t._v("校外时长")]),i("td",[t._v(t._s(t.vol.outside))])]),i("tr",[i("td",[t._v("大型时长")]),i("td",[t._v(t._s(t.vol.large))])]),i("tr",[i("td",[t._v("人数")]),i("td",[t._v(t._s(t.vol.stuMax))])]),i("tr",[i("td",[t._v("已报名")]),i("td",[t._v(t._s(t.vol.stuNow))])]),i("tr",[i("td",[t._v("状态")]),i("td",[t._v(t._s(t.vol.status))])])])])],1)},u=[],v={name:"volinfo",props:["volid"],data:function(){return{vol:{type:void 0,message:void 0,name:"加载中...",date:void 0,time:void 0,stuMax:void 0,stuNow:void 0,description:void 0,status:void 0,inside:void 0,outside:void 0,large:void 0}}},created:function(){this.init()},methods:{init:function(){var t=this;0!=this.volid&&void 0!=this.volid&&(this.$store.commit("loading",!0),o.a.get("/volunteer/fetch/"+this.volid).then((function(e){"ERROR"==e.data.type?r["a"].toasts.error(e.data.message):"SUCCESS"==e.data.type?t.vol=e.data:r["a"].toasts.error("未知错误")})).catch((function(t){r["a"].toasts.error(t)})).finally((function(){t.$store.commit("loading",!1)})))},fetch:function(){this.vol={type:void 0,message:void 0,name:"加载中...",date:void 0,time:void 0,stuMax:void 0,stuNow:void 0,description:void 0,status:void 0,inside:void 0,outside:void 0,large:void 0},this.init()}},watch:{volid:function(){this.fetch()}}},f=v,m=i("2877"),g=i("6544"),p=i.n(g),b=i("b0af"),x=i("99d9"),w=i("1f4f"),y=Object(m["a"])(f,h,u,!1,null,null,null),_=y.exports;p()(y,{VCard:b["a"],VCardTitle:x["c"],VSimpleTable:w["a"]});var C={name:"stuvolist",props:["userid","title"],components:{volinfo:_},data:function(){return{volworks:void 0,dialog:!1,search:"",volid:void 0,headers:[{text:"义工ID",value:"volId",align:"start",sortable:!0},{text:"义工名称",value:"name"},{text:"校内时长",value:"inside"},{text:"校外时长",value:"outside"},{text:"大型时长",value:"large"},{text:"完成状态",value:"status"}]}},created:function(){this.init()},methods:{init:function(){var t=this;this.volworks=void 0,0!=this.userid&&void 0!=this.userid&&(this.$store.commit("loading",!0),o.a.get("/student/volbook/"+this.userid).then((function(e){"ERROR"==e.data.type?r["a"].toasts.error(e.data.message):"SUCCESS"==e.data.type?t.volworks=e.data.rec:r["a"].toasts.error("未知错误")})).catch((function(t){r["a"].toasts.error(t)})).finally((function(){t.$store.commit("loading",!1)})))},rowClick:function(t){this.dialog=!0,this.volid=t.volId}},watch:{userid:function(){this.init()}}},k=C,$=i("8336"),A=i("8fea"),T=(i("368e"),i("480e")),S=i("4ad4"),O=i("b848"),E=i("75eb"),I=i("e707"),V=i("e4d3"),B=i("21be"),D=i("f2e7"),L=i("a293"),R=i("58df"),j=i("d9bd"),F=i("80d2");const M=Object(R["a"])(S["a"],O["a"],E["a"],I["a"],V["a"],B["a"],D["a"]);var N=M.extend({name:"v-dialog",directives:{ClickOutside:L["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null==(e=this.previousActiveElement)||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(j["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):I["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{this.previousActiveElement=document.activeElement,this.$refs.content.focus(),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===F["w"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled"));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(T["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"document",tabindex:this.isActive?0:void 0,...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:"none"===this.maxWidth?void 0:Object(F["g"])(this.maxWidth),width:"auto"===this.width?void 0:Object(F["g"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}}),U=i("2fa4"),W=i("8654"),Z=Object(m["a"])(k,d,c,!1,null,null,null),z=Z.exports;p()(Z,{VBtn:$["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VDataTable:A["a"],VDialog:N,VSpacer:U["a"],VTextField:W["a"]});var Y={data:function(){return{students:void 0,search:"",classes:void 0,nowclass:void 0,nowclassname:void 0,menudisabled:!0,dialog:!1,rowUserId:0,rowUserName:void 0,tipText:"班级",headers:[{text:"学号",value:"id",align:"start",sortable:!0},{text:"姓名",value:"name"},{text:"校内",value:"inside"},{text:"校外",value:"outside"},{text:"大型",value:"large"},{text:"完成",value:"finished"}]}},components:{stuvolist:z},mounted:function(){this.pageload()},methods:{pageload:function(){var t=this;this.$store.commit("loading",!0),o.a.get("/class/list").then((function(e){"ERROR"==e.data.type?r["a"].toasts.error(e.data.message):"SUCCESS"==e.data.type?(t.classes=e.data.class,t.nowclass=t.$store.state.info.class,t.nowclassname=t.$store.state.info.classname,t.$store.state.info.permission>l["a"].secretary&&(t.menudisabled=!1,t.tipText="点击选择班级",void 0!=t.$route.params&&(t.nowclass=t.$route.params.classid,t.nowclassname=t.classid2name(t.nowclass)))):r["a"].toasts.error("未知错误")})).catch((function(t){r["a"].toasts.error(t)})).finally((function(){t.$store.commit("loading",!1),t.$store.state.info.permission>l["a"].secretary&&t.$route.params.classid<=2e5?t.nowclassname="点击选择班级":t.fetchstulist()}))},fetchstulist:function(){var t=this;this.$store.commit("loading",!0),this.students=void 0,o.a.get("/class/stulist/"+this.nowclass).then((function(e){if("ERROR"==e.data.type)r["a"].toasts.error(e.data.message);else if("SUCCESS"==e.data.type){t.students=e.data.student;for(var i=0;i<t.students.length;i++)t.students[i].finished=t.finished(t.students[i])}else r["a"].toasts.error("未知错误")})).catch((function(t){r["a"].toasts.error(t)})).finally((function(){t.$store.commit("loading",!1)}))},rowClick:function(t){this.dialog=!0,this.rowUserId=t.id,this.rowUserName=t.name},changeclass:function(t){this.nowclass=t.id,this.nowclassname=t.name,this.fetchstulist()},finished:function(t){var e=t["inside"],i=t["outside"],s=t["large"],a=!0;return i<20&&(this.inside=e-2*(20-i),i=20),(s<16||e<20||i<20||e+i<44)&&(a=!1),a?"是":"否"},classid2name:function(t){for(var e=0;e<this.classes.length;e++)if(this.classes[e]["id"]==t)return this.classes[e]["name"]}}},q=Y,J=i("8860"),K=i("da13"),X=i("5d23"),H=i("e449"),P=i("3a2f"),G=Object(m["a"])(q,s,a,!1,null,null,null);e["default"]=G.exports;p()(G,{VBtn:$["a"],VCard:b["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VDataTable:A["a"],VDialog:N,VList:J["a"],VListItem:K["a"],VListItemTitle:X["c"],VMenu:H["a"],VSpacer:U["a"],VTextField:W["a"],VTooltip:P["a"]})},9734:function(t,e,i){},b0c0:function(t,e,i){var s=i("83ab"),a=i("9bf2").f,n=Function.prototype,o=n.toString,r=/^\s*function ([^ (]*)/,l="name";s&&!(l in n)&&a(n,l,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})}}]);