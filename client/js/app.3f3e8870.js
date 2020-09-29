(function(t){function e(e){for(var i,n,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==a[c]&&(i=!1)}i&&(o.splice(e--,1),t=n(n.s=s[0]))}return t}var i={},a={app:0},o=[];function n(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=i,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(s,i,function(e){return t[e]}.bind(null,i));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0383":function(t,e,s){"use strict";var i=s("7505"),a=s.n(i);a.a},"56d7":function(t,e,s){"use strict";s.r(e);var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug Log")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],c=s("bc3a"),l=s.n(c),u=s("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=d,g=s("2877"),v=Object(g["a"])(p,n,r,!1,null,null,null),h=v.exports,m={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:h}},f=m,b=(s("5c0b"),Object(g["a"])(f,a,o,!1,null,null,null)),_=b.exports,w=s("8c4f"),B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[s("div",{staticClass:"row"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addBug(e)}}},[s("div",{staticClass:"input-group mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Bug Name"},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),t._m(0)])])]),t.filterMode?t._e():s("div",[s("div",{staticClass:"btn btn-primary",on:{click:t.toggleFilter}},[t._v("Filter Bugs")])]),"no filter"==t.filterMode?s("div",[s("div",{staticClass:"btn btn-primary",on:{click:t.toggleFilter}},[t._v("Filter: All")])]):t._e(),"open"==t.filterMode?s("div",[s("div",{staticClass:"btn btn-primary",on:{click:t.toggleFilter}},[t._v("Filter: Open")])]):t._e(),"closed"==t.filterMode?s("div",[s("div",{staticClass:"btn btn-primary",on:{click:t.toggleFilter}},[t._v("Filter: Closed")])]):t._e(),t._m(1),t.filterMode?t._e():s("div",t._l(t.bugs,(function(t){return s("bug-component",{key:t.id,attrs:{bugProp:t}})})),1),t._l(t.filteredBugs,(function(t){return s("bug-component",{key:t.id,attrs:{bugProp:t}})}))],2)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Submit Bug Report")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-2 offset-2"},[t._v("Title")]),s("div",{staticClass:"col-2"},[t._v("Reported By")]),s("div",{staticClass:"col-2"},[t._v("Status")]),s("div",{staticClass:"col-2"},[t._v("Last Modified")])])}],y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-component row",on:{click:t.details}},[s("div",{staticClass:"col-2 offset-2"},[t._v(t._s(this.bugProp.title))]),s("div",{staticClass:"col-2"},[t._v(t._s(this.bugProp.creator.name))]),this.bugProp.closed?s("div",{staticClass:"col-2 text-success"},[t._v("Closed")]):t._e(),this.bugProp.closed?t._e():s("div",{staticClass:"col-2 text-danger"},[t._v("Open")]),s("div",{staticClass:"col-2"},[t._v(t._s(t.updated))])])},$=[],N={name:"bug-component",data(){return{bugs:this.$store.state.bugs,updated:this.bugProp.updatedAt.split("T")[0].split("-").join("/")}},methods:{details(){this.$store.dispatch("setActiveBug",this.bugProp)}},props:["bugProp"]},x=N,P=Object(g["a"])(x,y,$,!1,null,null,null),M=P.exports,E={name:"home",mounted(){this.$store.dispatch("getBugs")},data(){return{newBug:{},filterMode:"",filteredBugs:this.filterBugs()}},computed:{bugs(){return this.$store.state.bugs}},methods:{addBug(){this.newBug.title&&this.newBug.description&&this.$store.dispatch("addBug",this.newBug)},toggleFilter(){"no filter"==this.filterMode?this.filterMode="open":"open"==this.filterMode?this.filterMode="closed":"closed"==this.filterMode&&(this.filterMode="no filter"),this.filteredBugs=this.filterBugs()},filterBugs(){return this.filterMode||(this.filterMode="no filter"),"no filter"==this.filterMode?this.bugs:"open"==this.filterMode?this.bugs.filter(t=>0==t.closed):"closed"==this.filterMode?this.bugs.filter(t=>1==t.closed):void 0}},components:{bugComponent:M}},k=E,A=Object(g["a"])(k,B,C,!1,null,null,null),O=A.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Welcome "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},T=[],D={name:"Profile",computed:{profile(){return this.$store.state.profile}}},F=D,S=(s("0383"),Object(g["a"])(F,j,T,!1,null,"59c2bb44",null)),H=S.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bug-details container"},[t.editMode?t._e():s("div",{staticClass:"row align-items-end"},[s("h1",[t._v(t._s(t.activeBug.title))]),!t.activeBug.closed&&t.isCreator?s("div",[s("p",[s("i",{staticClass:"fas fa-pencil-alt",on:{click:t.toggleEdit}})])]):t._e()]),t.editMode?s("div",{staticClass:"row align-items-end"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("div",{staticClass:"input-group mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Bug Name"},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}}),t._m(0)])]),!t.activeBug.closed&&t.isCreator?s("div",[s("div",{staticClass:"btn btn-danger",on:{click:t.toggleEdit}},[t._v("Cancel")])]):t._e()]):t._e(),s("div",{staticClass:"row justify-content-between"},[s("p",[t._v("Reported By: "+t._s(t.activeBug.creatorEmail))]),s("div",{staticClass:"div"},[t.activeBug.closed?s("div",{staticClass:"col-2 text-success"},[s("h4",[t._v("Closed")])]):t._e(),!t.activeBug.closed&&t.isCreator?s("div",{staticClass:"col-2 text-danger"},[s("h4",[t._v("Open")])]):t._e()])]),t.editMode?t._e():s("div",{staticClass:"row border border-dark py-2 px-3"},[s("p",[t._v(t._s(t.activeBug.description))])]),s("div",{staticClass:"row align-items-end"},[!t.activeBug.closed&&t.isCreator?s("div",{staticClass:"col-9 text-success"},[s("form",{on:{submit:function(e){return e.preventDefault(),t.addNote(e)}}},[s("div",{staticClass:"input-group mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Note Text"},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),t._m(1)])])]):t._e(),s("div",{staticClass:"col-3"},[s("div",{staticClass:"btn btn-danger",on:{click:t.closeBug}},[t._v("Close Bug")])])]),t._l(t.notes,(function(t){return s("note-component",{key:t.id,attrs:{noteProp:t}})}))],2)},R=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("save")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Add Note")])])}],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"note-component row"},[t._m(0),!t.editMode&&t.isCreator?s("div",{staticClass:"col-3"},[t._v(" "+t._s(this.noteProp.creator.name)+" "),s("i",{staticClass:"fas fa-pencil-alt",on:{click:t.toggleEdit}}),s("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"},on:{click:t.deleteNote}})]):t._e(),t.editMode?t._e():s("div",{staticClass:"col-9"},[t._v(t._s(this.noteProp.content))]),t.editMode?s("form",{on:{submit:function(e){return e.preventDefault(),t.editNote(e)}}},[s("div",{staticClass:"input-group mt-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control bg-light",attrs:{type:"text",placeholder:"Note Text"},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}}),t._m(1),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.toggleEdit}},[t._v("cancel")])])]):t._e()])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-12"},[s("hr")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[t._v("Save")])])}],J={name:"note-component",data(){return{updated:this.noteProp.updatedAt.split("T")[0].split("-").join("/"),newNote:this.noteProp,editMode:!1}},computed:{isCreator(){return this.$store.state.activeBug.creatorEmail==this.$store.state.profile.email}},methods:{toggleEdit(){this.editMode=!this.editMode},editNote(){this.$store.dispatch("editNote",this.newNote),this.toggleEdit()},deleteNote(){confirm("Are you sure you want to delete this note?")&&this.$store.dispatch("deleteNote",this.noteProp)}},props:["noteProp"]},z=J,W=Object(g["a"])(z,L,U,!1,null,null,null),Y=W.exports,q={name:"bug-details",mounted(){this.$store.dispatch("setActiveBugById",this.$route.params.bugId),this.$store.dispatch("getNotes",this.$route.params.bugId)},data(){return{newNote:{bug:null,flagged:"pending"},newBug:this.$store.state.activeBug,editMode:!1}},computed:{activeBug(){return this.newNote.bug=this.$store.state.activeBug.id,this.$store.state.activeBug},notes(){return this.$store.state.notes},isCreator(){return this.$store.state.activeBug.creatorEmail==this.$store.state.profile.email}},methods:{addNote(){this.newNote.content&&this.$store.dispatch("addNote",this.newNote)},closeBug(){confirm("Are you sure you want to close this bug?")&&this.$store.dispatch("closeBug")},toggleEdit(){this.newBug=this.$store.state.activeBug,this.editMode=!this.editMode},editBug(){this.$store.dispatch("editBug",this.newBug),console.log(this.newBug),this.toggleEdit()}},components:{noteComponent:Y}},G=q,K=Object(g["a"])(G,I,R,!1,null,null,null),Q=K.exports;i["a"].use(w["a"]);const V=[{path:"/",name:"Home",component:O},{path:"/bugDetails/:bugId",name:"BugDetails",component:Q,beforeEnter:u["b"]},{path:"/profile",name:"Profile",component:H,beforeEnter:u["b"]}],X=new w["a"]({routes:V});var Z=X,tt=s("2f62");let et=location.host.includes("localhost")?"http://localhost:3000/":"/";const st=l.a.create({baseURL:et+"api",timeout:3e3,withCredentials:!0});i["a"].use(tt["a"]);var it=new tt["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setActiveBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e}},actions:{setBearer({},t){st.defaults.headers.authorization=t},resetBearer(){st.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await st.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs(){try{let t=await st.get("bugs");this.commit("setBugs",t.data)}catch(t){console.error(t)}},async addBug({dispatch:t,commit:e},s){try{await st.post("bugs",s);await t("getBugs"),t("setNewestActive")}catch(i){console.error(i)}},async setActiveBug({dispatch:t,commit:e},s){try{let t=await e("setActiveBug",s);return Z.push({name:"BugDetails",params:{bugId:s.id}}),t}catch(i){console.error(i)}},async setNewestActive({dispatch:t,commit:e,state:s}){await t("getBugs"),t("setActiveBug",s.bugs[s.bugs.length-1])},async setActiveBugById({dispatch:t,commit:e},s){try{let t=await st.get("bugs/"+s);await e("setActiveBug",t.data)}catch(i){console.error(i)}},async editBug({dispatch:t,commit:e,state:s},i){await st.put("bugs/"+i.id,i),t("setActiveBug",i)},async closeBug({dispatch:t,commit:e,state:s}){s.activeBug.closed=!0;try{await st.put("bugs/"+s.activeBug.id,s.activeBug)}catch(i){console.error(i)}},async getNotes({dispatch:t,commit:e},s){try{let t=await st.get("bugs/"+s+"/notes");e("setNotes",t.data)}catch(i){console.error(i)}},async addNote({dispatch:t,commit:e},s){try{await st.post("notes",s);t("getNotes",s.bug)}catch(i){console.error(i)}},async editNote({dispatch:t,commit:e},s){try{await st.put("notes/"+s.id,s);t("getNotes",s.bug)}catch(i){console.error(i)}},async deleteNote({dispatch:t,commit:e},s){try{await st.delete("notes/"+s.id);t("getNotes",s.bug)}catch(i){console.error(i)}}}});const at="corey101997.us.auth0.com",ot="https://bug-log",nt="JvgvouRLU0mtpHoE0HDtyYgh9pne6821";i["a"].use(u["a"],{domain:at,clientId:nt,audience:ot,onRedirectCallback:t=>{Z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new i["a"]({router:Z,store:it,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var i=s("9c0c"),a=s.n(i);a.a},7505:function(t,e,s){},"9c0c":function(t,e,s){}});