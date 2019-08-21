(function(t){function e(e){for(var i,a,s=e[0],u=e[1],c=e[2],f=0,m=[];f<s.length;f++)a=s[f],r[a]&&m.push(r[a][0]),r[a]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(t[i]=u[i]);l&&l(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],i=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(i=!1)}i&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var i={},r={app:0},o=[];function a(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=i,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)a.d(n,i,function(e){return t[e]}.bind(null,i));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0101":function(t,e,n){},"086b":function(t,e,n){},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var i=n("199c"),r=n.n(i);e["default"]=r.a},"3dfd":function(t,e,n){"use strict";var i=n("d808"),r=n("23be"),o=n("2877"),a=Object(o["a"])(r["default"],i["a"],i["b"],!1,null,null,null);e["default"]=a.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("a026"),r=n("3dfd"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("ul",{staticClass:"amiibo"},t._l(t.results,function(e,i){return n("li",{key:i},[n("figure",{staticClass:"picture"},[n("img",{staticClass:"amiiboImg",attrs:{src:e.image,alt:e.picture}})]),n("button",{on:{click:function(n){return t.goToInfo(e)}}},[t._v(t._s(e.name))])])}),0)])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo"},[i("img",{staticClass:"logo",attrs:{src:n("cf05"),alt:"logo"}})])}],u=(n("7f7f"),n("bc3a")),c=n.n(u),l=c.a.create({baseURL:"https://www.amiiboapi.com/api/amiibo/"}),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown"},[n("div",{staticClass:"value",on:{click:function(e){t.isOpen=!t.isOpen}}},[t._v(t._s(t.value)+" ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"items"},t._l(t.filteredItems,function(e,i){return n("div",{key:i,staticClass:"item",on:{click:function(n){return t.setItem(e)}}},[t._v("\n      "+t._s(e)+"\n    ")])}),0)])},m=[],p={name:"Search",props:["items"],data:function(){return{isOpen:!1,value:"",msg:"Welcome to Your Vue.js App"}},methods:{setItem:function(t){this.value=t,this.isOpen=!1}},computed:{filteredItems:function(){return this.items}}},d=p,b=n("2877"),v=Object(b["a"])(d,f,m,!1,null,null,null),h=v.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn"},[n("button",{on:{click:t.amiibo}},[t._v(t._s(t.amiibo.name))])])])},_=[],w={name:"AmiiboButton",data:function(){return{results:[],name:this.amiiboName}},created:function(){console.log("this.amiiboName")},methods:{amiibo:function(t){var e=this;c.a.get("https://www.amiiboapi.com/api/amiibo/",{}).then(function(t){e.results=t.data,console.log(t)})}},props:["amiiboName"],components:{}},O=w,y=(n("e09d"),Object(b["a"])(O,g,_,!1,null,"790ad99a",null)),C=y.exports,j={name:"amiibo",components:{AmiiboButton:C,AmiiboSearch:h},data:function(){return{results:[],errors:[],name:[]}},methods:{goToInfo:function(t){this.$router.push({name:"AmiiboCard",params:{amiibo:t}}),console.log(t.name)}},created:function(){var t=this;l.get("",{}).then(function(e){t.results=e.data.amiibo,t.results=t.results.filter(function(t){return"card"!==t.type.toLowerCase()})})}},x=j,S=(n("8cc3"),Object(b["a"])(x,a,s,!1,null,"a1d32694",null)),k=S.exports,$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("div",{staticClass:"container"},[n("ul",{staticClass:"info"},[n("h2",[t._v(t._s(t.amiibo.name))]),n("li",[n("h3",[t._v("Game Series: "+t._s(t.amiibo.gameSeries))])]),n("li",[n("h3",[t._v("Amiibo Series: "+t._s(t.amiibo.amiiboSeries))])])]),n("figure",{staticClass:"picture"},[n("img",{attrs:{src:t.amiibo.image,alt:t.amiibo.picture}})])])],1)},A=[],I={data:function(){return{results:[],errors:[],amiibo:null}},created:function(){l.get("",{params:{}}),this.amiibo=this.$route.params.amiibo,console.log(this.amiibo)}},E=I,P=(n("e0e3"),Object(b["a"])(E,$,A,!1,null,"58f8eba9",null)),T=P.exports;i["a"].use(o["a"]);var M=new o["a"]({routes:[{path:"/",name:"Amiibo",component:k},{path:"/info",name:"AmiiboCard",component:T}]});i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(r["default"])},router:M}).$mount("#app")},"7c57":function(t,e,n){},"8cc3":function(t,e,n){"use strict";var i=n("086b"),r=n.n(i);r.a},cf05:function(t,e,n){t.exports=n.p+"assets/img/logo.bdbd7657.png"},d808:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},r=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r})},e09d:function(t,e,n){"use strict";var i=n("0101"),r=n.n(i);r.a},e0e3:function(t,e,n){"use strict";var i=n("7c57"),r=n.n(i);r.a}});
//# sourceMappingURL=app.e472cc65.js.map