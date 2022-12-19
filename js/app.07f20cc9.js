(()=>{"use strict";var t={1965:(t,e,s)=>{s(6992),s(8674),s(9601),s(7727);var i=s(144),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view")],1)],1)])},o=[];const a={},r=a;var c=s(1001),l=(0,c.Z)(r,n,o,!1,null,null,null);const u=l.exports;var d=s(8345),p=function(){var t=this,e=t._self._c;return e("div",{staticClass:"open-wraper"},[e("div",{staticClass:"open-header"},[e("router-link",{attrs:{to:"/"}},[t._v("Главная")]),t._v(" "),e("span",[t._v("/")]),e("span",[t._v(t._s(t.note.title))])],1),e("div",{staticClass:"open-note"},[e("div",{staticClass:"open-title"},[t._v(" "+t._s(t.note.title)+" ")]),e("div",{staticClass:"open-descr"},[t._v(" "+t._s(t.note.descr)+" ")])])])},m=[];const v={data:function(){return{note:null}},created:function(){var t=this.$route.params.id;this.note=this.$store.getters.GET_NOTES(t)}},f=v;var h=(0,c.Z)(f,p,m,!1,null,"55769c39",null);const g=h.exports;var _=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"header"},[t._v("Заметки")]),e("div",{staticClass:"main-wrapper"},[e("addnote"),e("notes")],1)])},C=[],N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"addnote-wrapper"},[e("div",{staticClass:"title"},[t._v("Заголовок")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"input-title",attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),e("div",{staticClass:"descr"},[t._v("Описание")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.descr,expression:"descr"}],staticClass:"input-descr",attrs:{lang:"ru",name:"",id:"",cols:"30",rows:"10"},domProps:{value:t.descr},on:{input:function(e){e.target.composing||(t.descr=e.target.value)}}}),e("div",{staticClass:"btn",attrs:{dasabled:t.dasabled},on:{click:t.addNote}},[t._v("Добавить")]),""!==t.message?e("div",{staticClass:"message"},[t._v(t._s(t.message))]):t._e()])},b=[];s(7658),s(9600);const O={data:function(){return{title:"",descr:"",dasabled:!1,message:""}},methods:{addNote:function(){for(var t=1e4,e=1,s={},i=[],n=0;n<e;++n){var o=Math.floor(Math.random()*(t-n));i.push((o in s?s[o]:o)+1);var a=t-n-1;s[o]=a in s?s[a]:a}if(""==this.title||""==this.descr)return this.disabled,this.message="Все поля обязательны для заполнения";""===this.title&&""===this.descr||(this.message="");var r={title:this.title,descr:this.descr,id:i.join()};return this.$store.dispatch("addToNote",r),this.title="",this.descr=""}}},w=O;var x=(0,c.Z)(w,N,b,!1,null,null,null);const y=x.exports;var T=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"list-complete-demo"}},[e("transition-group",{staticClass:"note-wrapper",attrs:{name:"list-complete",tag:"p"}},t._l(t.notes,(function(s,i){return e("div",{key:s.id,staticClass:"note list-complete-item"},[e("div",{staticClass:"note-content"},[e("div",{staticClass:"note-title"},[t._v(" "+t._s(s.title)+" ")]),e("div",{staticClass:"note-descr"},[t._v(" "+t._s(s.descr)+" ")]),e("div",{staticClass:"btn-wrapper"},[e("router-link",{attrs:{to:"/open/"+s.id}},[e("div",{staticClass:"open-btn"},[t._v("Открыть")])]),e("div",{staticClass:"delele-btn",on:{click:function(e){return t.deleteNote(i)}}},[t._v("Удалить")])],1)])])})),0)],1)},Z=[];const P={data:function(){return{}},computed:{notes:function(){return this.$store.getters.NOTES}},methods:{deleteNote:function(t){this.$store.dispatch("delNote",t)}}},S=P;var k=(0,c.Z)(S,T,Z,!1,null,null,null);const L=k.exports,q={components:{addnote:y,notes:L}},j=q;var E=(0,c.Z)(j,_,C,!1,null,null,null);const $=E.exports;i.ZP.use(d.ZP);var F=[{path:"/",name:"home",component:$},{path:"/open/:id",name:"open",component:g}],I=new d.ZP({mode:"history",base:"",routes:F});const J=I;s(9826),s(1539),s(8862),s(561);var G=s(629);i.ZP.use(G.ZP);const M=new G.ZP.Store({state:{notes:[{id:1,title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?"},{id:2,title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?"},{id:3,title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?"},{id:4,title:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, corrupti.",descr:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia est tempora, accusantium non saepe velit quisquam culpa eius totam nam?"}]},getters:{NOTES:function(t){return t.notes},GET_NOTES:function(t){return function(e){return t.notes.find((function(t){return t.id==e}))}}},mutations:{addToNote:function(t,e){t.notes.push(e),localStorage.setItem("note",JSON.stringify(t.notes))},deleteNote:function(t,e){t.notes.splice(e,1),localStorage.setItem("note",JSON.stringify(t.notes))},update_notes:function(t,e){t.notes=e}},actions:{addToNote:function(t,e){var s=t.commit;s("addToNote",e)},delNote:function(t,e){var s=t.commit;s("deleteNote",e)},setNoteFromLC:function(t,e){var s=t.commit;s("update_notes",e)}}});i.ZP.config.productionTip=!1;var z=JSON.parse(localStorage.getItem("note"));z&&M.dispatch("setNoteFromLC",z),new i.ZP({router:J,store:M,render:function(t){return t(u)}}).$mount("#app")}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,s),o.exports}s.m=t,(()=>{var t=[];s.O=(e,i,n,o)=>{if(!i){var a=1/0;for(u=0;u<t.length;u++){for(var[i,n,o]=t[u],r=!0,c=0;c<i.length;c++)(!1&o||a>=o)&&Object.keys(s.O).every((t=>s.O[t](i[c])))?i.splice(c--,1):(r=!1,o<a&&(a=o));if(r){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[i,n,o]}})(),(()=>{s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}})(),(()=>{s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()})(),(()=>{s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e)})(),(()=>{var t={143:0};s.O.j=e=>0===t[e];var e=(e,i)=>{var n,o,[a,r,c]=i,l=0;if(a.some((e=>0!==t[e]))){for(n in r)s.o(r,n)&&(s.m[n]=r[n]);if(c)var u=c(s)}for(e&&e(i);l<a.length;l++)o=a[l],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(u)},i=self["webpackChunknote"]=self["webpackChunknote"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))})();var i=s.O(void 0,[998],(()=>s(1965)));i=s.O(i)})();