(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ff0796c"],{"5dfa":function(e,t,a){"use strict";a("c405")},bfd1:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",[a("v-card-title",[e._v(" 创建义工 ")]),a("v-card-text",[a("v-form",{ref:"form"},[a("v-text-field",{attrs:{rules:e.rules,label:"义工名称","prepend-icon":"mdi-pen"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),a("v-text-field",{attrs:{rules:e.rules,label:"义工总人数","prepend-icon":"mdi-account"},model:{value:e.form.stuMax,callback:function(t){e.$set(e.form,"stuMax",t)},expression:"form.stuMax"}}),a("v-simple-table",[a("thead",[a("td",[e._v("班级")]),a("td",[e._v("最多报名人数")]),a("td",[e._v("删除")])]),a("tbody",[e._l(e.classSelected,(function(t,r){return a("tr",{key:r},[a("td",[e._v(e._s(t.id))]),a("td",[e._v(e._s(t.stuMax))]),a("td",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:function(t){return e.delFromList(r)}}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-minus ")])],1)],1)])})),a("tr",[a("td",[a("v-select",{attrs:{"prepend-icon":"mdi-switch",label:"限定班级",items:e.classes,"item-text":"name","item-value":"id"},model:{value:e.class_new,callback:function(t){e.class_new=t},expression:"class_new"}})],1),a("td",[a("v-text-field",{directives:[{name:"label",rawName:"v-label",value:e.限制人数,expression:"限制人数"}],model:{value:e.count_new,callback:function(t){e.count_new=e._n(t)},expression:"count_new"}})],1),a("td",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"primary"},on:{click:e.addToList}},[a("v-icon",{attrs:{dark:""}},[e._v(" mdi-plus ")])],1)],1)])],2)]),a("v-dialog",{ref:"dateDialog",attrs:{"return-value":e.form.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"date",t)},"update:return-value":function(t){return e.$set(e.form,"date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"义工日期",rules:e.rules,"prepend-icon":"mdi-calendar",readonly:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}},"v-text-field",o,!1),r))]}}]),model:{value:e.modalDate,callback:function(t){e.modalDate=t},expression:"modalDate"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:e.form.date,callback:function(t){e.$set(e.form,"date",t)},expression:"form.date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modalDate=!1}}},[e._v(" 取消 ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dateDialog.save(e.form.date)}}},[e._v(" 确认 ")])],1)],1),a("v-dialog",{ref:"timeDialog",attrs:{"return-value":e.form.time,persistent:"",width:"290px"},on:{"update:returnValue":function(t){return e.$set(e.form,"time",t)},"update:return-value":function(t){return e.$set(e.form,"time",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{label:"义工时间","prepend-icon":"mdi-clock-time-four-outline",readonly:"",rules:e.rules},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}},"v-text-field",o,!1),r))]}}]),model:{value:e.modalTime,callback:function(t){e.modalTime=t},expression:"modalTime"}},[e.modalTime?a("v-time-picker",{attrs:{"full-width":""},model:{value:e.form.time,callback:function(t){e.$set(e.form,"time",t)},expression:"form.time"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modalTime=!1}}},[e._v(" 取消 ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.timeDialog.save(e.form.time)}}},[e._v(" 确定 ")])],1):e._e()],1),a("v-text-field",{attrs:{rules:e.rules,label:"义工描述","prepend-icon":"mdi-text"},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),a("v-text-field",{attrs:{rules:e.rules,label:"校内时长","prepend-icon":"mdi-view-list"},model:{value:e.form.inside,callback:function(t){e.$set(e.form,"inside",t)},expression:"form.inside"}}),a("v-text-field",{attrs:{rules:e.rules,label:"校外时长","prepend-icon":"mdi-view-list"},model:{value:e.form.outside,callback:function(t){e.$set(e.form,"outside",t)},expression:"form.outside"}}),a("v-text-field",{attrs:{rules:e.rules,label:"大型时长","prepend-icon":"mdi-view-list"},model:{value:e.form.large,callback:function(t){e.$set(e.form,"large",t)},expression:"form.large"}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",block:"",disabled:e.$store.state.isLoading},on:{click:e.createVolunteer}},[e._v("创建义工")])],1)],1)],1),a("br")],1)},o=[],s=(a("a4d3"),a("e01a"),a("a434"),a("b0c0"),a("d3b7"),a("96cf"),a("1da1")),i=a("c13c"),n=a("a841"),l=a("bc3a"),c=a.n(l),d=a("5464"),m={data:function(){return{classSelected:[],count_new:void 0,class_new:void 0,classes:void 0,modalDate:!1,modalTime:!1,form:{name:void 0,date:void 0,time:null,stuMax:void 0,description:void 0,inside:void 0,outside:void 0,large:void 0,class:void 0},rules:[Object(d["a"])()]}},components:{},mounted:function(){this.pageload()},methods:{pageload:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n["a"].fetchClassList((function(t){t?e.classes=t:i["a"].toasts.error("获取班级列表失败")}));case 2:e.$store.commit("loading",!1);case 3:case"end":return t.stop()}}),t)})))()},createVolunteer:function(){var e=this;this.$refs.form.validate()&&(console.log("创建义工"),console.log(this.form),this.$store.commit("loading",!0),c.a.post("/volunteer/create",{name:this.form.name,date:this.form.date,time:this.form.time,stuMax:parseInt(this.form.stuMax),description:this.form.description,inside:parseInt(this.form.inside),outside:parseInt(this.form.outside),large:parseInt(this.form.large),class:this.classSelected}).then((function(t){if(console.log(t.data),"SUCCESS"==t.data.type)for(var a in i["a"].toasts.success(t.data.message),e.form)e.form[a]=void 0;else i["a"].toasts.error(t.data.message)})).catch((function(e){i["a"].toasts.error(e)})).finally((function(){e.$store.commit("loading",!1)})))},addToList:function(){var e=!1;for(var t in""==this.class_new&&(e=!0),this.classSelected)if(t["id"]==this.class_new){e=!0;break}e||this.classSelected.push({id:this.class_new,stuMax:parseInt(this.count_new)}),this.class_new="",this.count_new=0},delFromList:function(e){this.classSelected.splice(e,1)}}},u=m,f=(a("5dfa"),a("2877")),v=a("6544"),p=a.n(v),b=a("8336"),x=a("b0af"),_=a("99d9"),h=a("a523"),k=a("2e4b"),w=a("169a"),g=a("4bd4"),$=a("132d"),V=a("b974"),y=a("1f4f"),S=a("2fa4"),T=a("8654"),D=a("c964"),C=Object(f["a"])(u,r,o,!1,null,"b02ec106",null);t["default"]=C.exports;p()(C,{VBtn:b["a"],VCard:x["a"],VCardActions:_["a"],VCardText:_["b"],VCardTitle:_["c"],VContainer:h["a"],VDatePicker:k["a"],VDialog:w["a"],VForm:g["a"],VIcon:$["a"],VSelect:V["a"],VSimpleTable:y["a"],VSpacer:S["a"],VTextField:T["a"],VTimePicker:D["a"]})},c405:function(e,t,a){}}]);