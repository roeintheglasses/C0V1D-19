(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);d&&d(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("8a23"),n=a.n(s);n.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=a("e11e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-navigation-drawer",{attrs:{app:"",clipped:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{"three-line":""}},[e.loading?a("div",e._l(20,(function(e){return a("v-list-item",{key:e,attrs:{link:""}},[a("v-list-item-content",[a("v-list-item-title",[a("v-skeleton-loader",{attrs:{type:"text"}})],1),a("v-list-item-subtitle",[a("v-skeleton-loader",{attrs:{width:"140",type:"text"}})],1),a("v-list-item-subtitle",[a("v-skeleton-loader",{attrs:{width:"140",type:"text"}})],1)],1)],1)})),1):e._l(e.locations,(function(t,s){return a("v-list-item",{key:s,attrs:{link:""},on:{click:function(a){return e.view(t)}}},[a("v-list-item-content",[a("v-list-item-title",[a("span",{staticClass:"font-weight-bold"},[a("ICountUp",{staticClass:"red--text text--darken-2",attrs:{endVal:t.confirmed}})],1),e._v(" "+e._s(t["Country/Region"])+" ")]),a("v-list-item-subtitle",[e._v(" Deaths: "),a("ICountUp",{attrs:{endVal:t.death}})],1),a("v-list-item-subtitle",[e._v(" Recovered: "),a("ICountUp",{attrs:{endVal:t.recovered}})],1)],1)],1)}))],2)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("v-spacer"),a("v-toolbar-title",[e._v(" C0V1D-19 ")]),a("v-spacer"),a("v-tooltip",{attrs:{left:"",dark:e.isDarkTheme},scopedSlots:e._u([{key:"activator",fn:function(t){var s=t.on;return[a("v-btn",e._g({attrs:{icon:""},on:{click:function(t){e.$refs.searchDialog.dialog=!0}}},s),[a("v-icon",[e._v("mdi-card-search")])],1)]}}])},[a("span",[e._v("Search")])])],1),a("v-content",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("TotalCases",{attrs:{infected:e.cases.total_confirmed,recovered:e.cases.total_recovered,deaths:e.cases.total_death}})],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("v-card",{staticStyle:{height:"70vh"},attrs:{tile:"",flat:""}},[a("LeafletMap",{ref:"map",attrs:{data:e.cases.data},on:{MARKER_CLICKED:e.viewDetails}})],1)],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12"}},[a("p",{attrs:{align:"center"}},[e._v(" Created by "),a("a",{attrs:{href:"https://www.github.com/roeintheglasses"}},[e._v("Hrishi Jangir")]),a("br"),e._v(" Data provided by "),a("a",{attrs:{href:"https://github.com/CSSEGISandData/COVID-19"}},[e._v("Johns Hopkins CSSE")])])])],1)],1),a("v-dialog",{attrs:{width:"500",fullscreen:e.$vuetify.breakpoint.xsOnly},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}],staticClass:"headline"},[e._v("Confirmed Cases: "+e._s(e.selected.country))]),a("span",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}],staticClass:"headline"},[e._v(e._s(e.selected.country))]),a("v-spacer"),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.xsOnly,expression:"$vuetify.breakpoint.xsOnly"}],attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-card-text",[e.$vuetify.breakpoint.mdAndUp?a("div",[a("p",[e._v("Country/Region: "+e._s(e.selected["Country/Region"]))]),a("p",{directives:[{name:"show",rawName:"v-show",value:e.selected["Province/State"],expression:"selected['Province/State']"}]},[e._v(" Province/State: "+e._s(e.selected["Province/State"])+" ")]),a("p",[e._v(" Confirmed: "),a("ICountUp",{staticClass:"red--text text--darken-2",attrs:{endVal:e.selected.confirmed}})],1),a("p",[e._v(" Deaths: "),a("ICountUp",{attrs:{endVal:e.selected.death}})],1),a("p",[e._v(" Recovered: "),a("ICountUp",{attrs:{endVal:e.selected.recovered}})],1)]):a("div",{staticClass:"d-flex flex-column justify-center align-center",staticStyle:{height:"80vh"}},[a("p",{staticClass:"text-center"},[a("span",{staticClass:"display-1"},[e._v(e._s(e.selected["Country/Region"]))]),a("br"),a("span",{staticClass:"title"},[e._v("Country Region")])]),e.selected["Province/State"]?a("p",{staticClass:"text-center"},[a("span",{staticClass:"display-1"},[e._v(e._s(e.selected["Province/State"]))]),a("br"),a("span",{staticClass:"title"},[e._v("Province/State")])]):e._e(),a("p",{staticClass:"text-center"},[a("span",{staticClass:"display-1"},[a("ICountUp",{staticClass:"red--text text--darken-2",attrs:{endVal:e.selected.confirmed}})],1),a("br"),a("span",{staticClass:"title"},[e._v("Confirmed")])]),a("p",{staticClass:"text-center"},[a("span",{staticClass:"display-1"},[a("ICountUp",{attrs:{endVal:e.selected.death}})],1),a("br"),a("span",{staticClass:"title"},[e._v("Deaths")])]),a("p",{staticClass:"text-center"},[a("span",{staticClass:"display-1"},[a("ICountUp",{attrs:{endVal:e.selected.recovered}})],1),a("br"),a("span",{staticClass:"title"},[e._v("Recovered")])])])]),a("v-card-actions",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.smAndUp,expression:"$vuetify.breakpoint.smAndUp"}]},[a("v-spacer"),a("v-btn",{attrs:{text:""},on:{click:function(t){e.dialog=!1}}},[e._v("Close")])],1)],1)],1)],1),a("v-snackbar",{attrs:{bottom:"",right:"",timeout:0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" An update is available "),a("v-btn",{attrs:{dark:"",text:""},on:{click:e.reload}},[e._v("Reload")])],1),a("SearchDialog",{ref:"searchDialog",attrs:{data:e.cases.data},on:{PLACE_SELECTED:e.viewDetails}})],1)},o=[],i=(a("c740"),a("4160"),a("d81d"),a("4e827"),a("159b"),a("96cf"),a("1da1")),c=a("5530"),l=a("87f4"),d=a.n(l),u=a("2f62"),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("l-map",{ref:"map",staticStyle:{"z-index":"0",height:"100%",width:"100%"},attrs:{zoom:e.zoom,center:e.center},on:{"update:zoom":e.zoomUpdated,"update:center":e.centerUpdated,"update:bounds":e.boundsUpdated}},[a("l-tile-layer",{attrs:{url:e.tileLayerUrl}}),e._l(e.locations,(function(t,s){return a("l-circle-marker",{key:s,attrs:{"lat-lng":[+t.Lat,+t.Long],color:"red",fillColor:"#f00",fillOpacity:.35,stroke:!1,radius:t.radius},on:{click:function(a){return e.$emit("MARKER_CLICKED",t)}}})}))],2)},p=[],v=a("2699"),b=a("a40a"),h=a("ea97"),m={name:"Map",props:["data"],data:function(){return{url:"https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",zoom:2,center:[35.000074,104.999927],bounds:null}},computed:Object(c["a"])({},Object(u["c"])(["isDarkTheme"]),{locations:function(){var e=this,t=this.data.filter((function(e){return e.dates[e.dates.length-1].confirmed}));return t.map((function(t){return Object(c["a"])({},t,{radius:e.scale(t.dates[t.dates.length-1].confirmed)})}))},tileLayerUrl:function(){var e="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",t="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png";return this.isDarkTheme?e:t}}),mounted:function(){this.getUserLocation()},methods:{zoomUpdated:function(e){this.zoom=e},centerUpdated:function(e){this.center=e},boundsUpdated:function(e){this.bounds=e},flyTo:function(e,t){this.$refs.map.mapObject.flyTo([e,t])},scale:function(e){var t=1,a=5,s=this.zoom>=5?1:this.zoom/10;return Math.floor(Math.log(e)*a*s)+t},getUserLocation:function(){var e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition((function(t){var a=t.coords;e.flyTo(a.latitude,a.longitude)}))}},components:{LMap:v["a"],LTileLayer:b["a"],LCircleMarker:h["a"]}},j=m,g=a("2877"),y=Object(g["a"])(j,f,p,!1,null,null,null),w=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{fullscreen:e.$vuetify.breakpoint.smAndDown,"max-width":"400"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"title font-weight-light"},[a("div",{staticClass:"headline"},[e._v("Search place")])]),a("v-spacer"),a("v-btn",{attrs:{icon:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("mdi-close")])],1)],1),a("v-card-text",[a("v-text-field",{attrs:{label:"Type here...","append-icon":"mdi-magnify",clearable:""},on:{keyup:e.change},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e.result.length?a("v-list",{attrs:{"two-line":""}},e._l(e.result,(function(t,s){return a("v-list-item",{key:s,on:{click:function(a){return e.$emit("PLACE_SELECTED",t)}}},[a("v-list-item-content",[a("v-list-item-title",[t["Province/State"]?a("span",[e._v(" "+e._s(t["Province/State"])+" ")]):a("span",[e._v(" "+e._s(t["Country/Region"])+" ")])]),a("v-list-item-subtitle",{directives:[{name:"show",rawName:"v-show",value:t["Province/State"],expression:"item['Province/State']"}]},[e._v(" "+e._s(t["Country/Region"])+" ")])],1)],1)})),1):a("div",[e._v(" "+e._s(e.resultText)+" ")])],1)],1)],1)},C=[],_=(a("ac1f"),a("841c"),a("a7c6")),x=a.n(_),V={props:["data"],data:function(){return{dialog:!1,search:null,result:[],resultText:"Result will appear here."}},methods:{change:function(e){var t=e.target.value;t&&(this.result=this.filterBy(this.data,e.target.value,"Country/Region","Province/State"),this.result.length||(this.resultText="No country/region or province/state found."))}},watch:{dialog:function(e){e||(this.result=[],this.resultText="Result will appear here.",this.search=null)},search:function(e){e||(this.result=[],this.resultText="Result will appear here.")}},mixins:[x.a.mixin]},T=V,O=a("6544"),S=a.n(O),D=a("8336"),L=a("b0af"),U=a("99d9"),R=a("169a"),z=a("132d"),E=a("8860"),I=a("da13"),$=a("5d23"),A=a("2fa4"),P=a("8654"),M=Object(g["a"])(T,k,C,!1,null,null,null),N=M.exports;S()(M,{VBtn:D["a"],VCard:L["a"],VCardText:U["b"],VCardTitle:U["c"],VDialog:R["a"],VIcon:z["a"],VList:E["a"],VListItem:I["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VSpacer:A["a"],VTextField:P["a"]});var G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",[a("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{cols:"12",md:"4"}},[a("span",{class:[e.count]},[a("ICountUp",{attrs:{endVal:e.infected}})],1),a("span",{class:[e.title]},[e._v("Infected")])]),a("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{cols:"12",md:"4"}},[a("span",{class:[e.count]},[a("ICountUp",{attrs:{endVal:e.recovered}})],1),a("span",{class:[e.title]},[e._v("Recovered")])]),a("v-col",{staticClass:"d-flex flex-column justify-center align-center",attrs:{cols:"12",md:"4"}},[a("span",{class:[e.count]},[a("ICountUp",{attrs:{endVal:e.deaths}})],1),a("span",{class:[e.title]},[e._v("Deaths")])])],1)},B=[],F={props:["infected","recovered","deaths"],components:{ICountUp:d.a},computed:{count:function(){return this.$vuetify.breakpoint.mdAndUp?"display-2 font-weight-bold":"display-1 font-weight-bold"},title:function(){return this.$vuetify.breakpoint.mdAndUp?"mt-4 title":"mt-4 subtitle-1"}}},H=F,K=a("62ad"),J=a("0fd9"),Y=Object(g["a"])(H,G,B,!1,null,null,null),q=Y.exports;S()(Y,{VCol:K["a"],VRow:J["a"]});var W=a("bc3a"),Z=a.n(W),Q=Z.a.create({baseURL:"https://roe-c0v1d-19-api.herokuapp.com"}),X={getCases:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q.get("/api/cases");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()},getFatalityRate:function(){return Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Q.get("/api/fatality-rate");case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))()}},ee={name:"App",components:{LeafletMap:w,ICountUp:d.a,SearchDialog:N,TotalCases:q},data:function(){return{drawer:null,cases:{total_confirmed:0,total_recovered:0,total_death:0,data:[]},selected:{},dialog:!1,loading:!1,snackbar:!1}},computed:Object(c["a"])({},Object(u["c"])(["isDarkTheme"]),{locations:function(){var e=[];return this.cases.data.forEach((function(t){var a=e.findIndex((function(e){return e["Country/Region"]===t["Country/Region"]})),s=t.dates[t.dates.length-1].confirmed,n=t.dates[t.dates.length-1].recovered,r=t.dates[t.dates.length-1].death;if(-1===a){var o=Object(c["a"])({},t,{confirmed:s,recovered:n,death:r});delete o["Province/State"],delete o.dates,e.push(o)}else e[a].confirmed+=s,e[a].recovered+=n,e[a].death+=r})),e.sort((function(e,t){return t.confirmed-e.confirmed}))},mainlandChinaCases:function(){return this.cases.data.filter((function(e){return"Mainland China"===e["Country/Region"]}))}}),created:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$vuetify.theme.dark=e.isDarkTheme,e.loading=!0,t.next=4,X.getCases();case 4:return e.cases=t.sent,t.next=7,X.getFatalityRate();case 7:e.fatalityRate=t.sent,e.loading=!1;case 9:case"end":return t.stop()}}),t)})))()},mounted:function(){var e=this;document.addEventListener("swUpdated",(function(){e.snackbar=!0}))},watch:{isDarkTheme:function(e){this.$vuetify.theme.dark=e}},methods:Object(c["a"])({},Object(u["b"])(["TOGGLE_THEME"]),{view:function(e){this.$vuetify.breakpoint.smAndDown&&(this.drawer=!1),window.scrollTo({top:0,behavior:"smooth"});var t=e.Lat,a=e.Long;this.$refs.map.flyTo(t,a)},viewDetails:function(e){this.selected=Object(c["a"])({},e,{confirmed:+e.dates[e.dates.length-1].confirmed,death:+e.dates[e.dates.length-1].death,recovered:+e.dates[e.dates.length-1].recovered}),this.dialog=!0},endReached:function(){this.$refs.tweets.loadMore()},reload:function(){window.location.reload(!0)}})},te=ee,ae=(a("034f"),a("7496")),se=a("40dc"),ne=a("5bc1"),re=a("a523"),oe=a("a75b"),ie=a("f774"),ce=a("3129"),le=a("2db4"),de=a("2a7f"),ue=a("3a2f"),fe=Object(g["a"])(te,r,o,!1,null,null,null),pe=fe.exports;S()(fe,{VApp:ae["a"],VAppBar:se["a"],VAppBarNavIcon:ne["a"],VBtn:D["a"],VCard:L["a"],VCardActions:U["a"],VCardText:U["b"],VCardTitle:U["c"],VCol:K["a"],VContainer:re["a"],VContent:oe["a"],VDialog:R["a"],VIcon:z["a"],VList:E["a"],VListItem:I["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VNavigationDrawer:ie["a"],VRow:J["a"],VSkeletonLoader:ce["a"],VSnackbar:le["a"],VSpacer:A["a"],VToolbarTitle:de["a"],VTooltip:ue["a"]});var ve=a("9483"),be=new CustomEvent("swUpdated");Object(ve["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh."),document.dispatchEvent(be)},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var he=a("f309");a("5363");s["a"].use(he["a"]);var me=new he["a"]({icons:{iconFont:"mdi"}});s["a"].use(x.a);var je=a("a4a1"),ge=a.n(je);a("f6b9");s["a"].use(ge.a);a("6cc5");var ye=a("0e44");s["a"].use(u["a"]);var we=new u["a"].Store({state:{tweetDialog:!1,isDarkTheme:!0},mutations:{SET_TWEET_DIALOG:function(e,t){e.tweetDialog=t},TOGGLE_THEME:function(e){e.isDarkTheme=!e.isDarkTheme}},actions:{},modules:{},plugins:[Object(ye["a"])()]}),ke=(a("5319"),a("c1df")),Ce=a.n(ke),_e={URLify:function(e){return e?e.replace(/((http|https|ftp):\/\/[\w?=&./-;#~%-]+(?![\w\s?&./;#~%"=-]*>))/g,'<a class="urlify" href="$1" target="_BLANK">$1</a> '):""},fromNow:function(e){return Ce()(e,"ddd MMM DD HH:mm:ss Z YYYY").fromNow()}};delete n["Icon"].Default.prototype._getIconUrl,s["a"].config.productionTip=!1,s["a"].filter("URLify",_e.URLify),s["a"].filter("fromNow",_e.fromNow),new s["a"]({vuetify:me,store:we,render:function(e){return e(pe)}}).$mount("#app")},"8a23":function(e,t,a){}});
//# sourceMappingURL=app.698e7f7f.js.map