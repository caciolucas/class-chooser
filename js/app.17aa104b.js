(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,b=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);d&&d(t);while(b.length)b.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/class-chooser/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=s,e.exports=o,o.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),o=(n("d81d"),n("4de4"),n("a15b"),n("fb6a"),n("ac1f"),n("1276"),Object(a["j"])("h1",null,"Class Chooser",-1)),s={class:"p-grid"},r={class:"p-col-12"},c={class:"p-d-flex p-jc-between p-ai-center"},i={class:"p-input-icon-left"},u=Object(a["j"])("i",{class:"pi pi-search"},null,-1),d={style:{width:"3rem"}},l={key:0},b={key:1},j={key:0},f={key:1},m=Object(a["j"])("span",{class:"fas fa-book"},null,-1),p={class:"image-text p-ml-2"};function h(e,t,n,h,g,v){var O=Object(a["q"])("FullCalendar"),y=Object(a["q"])("InputText"),k=Object(a["q"])("Button"),_=Object(a["q"])("Column"),D=Object(a["q"])("Chip"),T=Object(a["q"])("DataTable"),w=Object(a["q"])("ConfirmPopup");return Object(a["m"])(),Object(a["f"])(a["a"],null,[o,Object(a["j"])(O,{events:g.events,options:g.options,style:{width:"75%",margin:"auto"}},null,8,["events","options"]),Object(a["j"])("div",s,[Object(a["j"])("div",r,[Object(a["j"])(T,{globalFilterFields:["codigo-turma","docentes","descricao-horario","codigo-componente","nome-componente"],value:g.turmas,filters:g.filters,"onUpdate:filters":t[2]||(t[2]=function(e){return g.filters=e}),class:"p-datatable-sm",groupRowsBy:"nome-componente",rowGroupMode:"subheader",scrollHeight:"45vh",scrollable:!0},{header:Object(a["w"])((function(){return[Object(a["j"])("div",c,[Object(a["j"])("span",i,[u,Object(a["j"])(y,{modelValue:g.filters["global"].value,"onUpdate:modelValue":t[1]||(t[1]=function(e){return g.filters["global"].value=e}),placeholder:"Busque aqui"},null,8,["modelValue"])]),Object(a["j"])(k,{label:"Todos os docentes",class:"p-button-primary",icon:"fas fa-users",onClick:v.confirmGetAllDocentes,loading:g.loadingDocentes},null,8,["onClick","loading"])])]})),groupheader:Object(a["w"])((function(e){return[m,Object(a["j"])("span",p,Object(a["t"])(e.data["codigo-componente"])+"-"+Object(a["t"])(e.data["nome-componente"]),1)]})),default:Object(a["w"])((function(){return[Object(a["j"])(_,{header:"Cod",style:{width:"100px"},headerStyle:"width:100px",bodyStyle:"width:100px"},{body:Object(a["w"])((function(e){return[Object(a["j"])("div",d,Object(a["t"])(e.data["codigo-turma"]),1)]})),_:1}),Object(a["j"])(_,{header:"Docentes"},{body:Object(a["w"])((function(e){return[e.data.docentes?(Object(a["m"])(),Object(a["f"])("span",l,[(Object(a["m"])(!0),Object(a["f"])(a["a"],null,Object(a["o"])(e.data.docentes.filter((function(e){return e["nome-docente"]})).map((function(e){return e["nome-docente"]})),(function(e){return Object(a["m"])(),Object(a["f"])(D,{key:e["id-docente"],label:e.split(" ").slice(0,2).join(" "),icon:"fas fa-chalkboard-teacher"},null,8,["label"])})),128))])):(Object(a["m"])(),Object(a["f"])("span",b,[Object(a["j"])(D,{label:"Carregue os docentes",icon:"fas fa-spinner"})]))]})),_:1}),Object(a["j"])(_,{field:"capacidade-aluno",header:"Capacidade"}),Object(a["j"])(_,{field:"descricao-horario",header:"Horário"},{body:Object(a["w"])((function(e){return[e.data["descricao-horario"]?(Object(a["m"])(),Object(a["f"])("span",j,Object(a["t"])(e.data["descricao-horario"].split("(")[0]),1)):(Object(a["m"])(),Object(a["f"])("span",f,"Sem horários"))]})),_:1}),Object(a["j"])(_,{header:"Periodo"},{body:Object(a["w"])((function(e){return[Object(a["i"])(Object(a["t"])(e.data.ano)+"."+Object(a["t"])(e.data.periodo),1)]})),_:1}),Object(a["j"])(_,{headerStyle:"width: 2rem"},{body:Object(a["w"])((function(e){return[e.data.docentes?Object(a["g"])("",!0):(Object(a["m"])(),Object(a["f"])(k,{key:0,class:"p-button-primary p-button-sm p-button-rounded",icon:"fas fa-user-tie",label:"Docentes",onClick:function(t){return v.getDocentes(e.data)}},null,8,["onClick"])),!e.data.events_id&&e.data.docentes?(Object(a["m"])(),Object(a["f"])(k,{key:1,disabled:!e.data["descricao-horario"],class:"p-button-success p-button-sm p-button-rounded",icon:"pi pi-plus",label:"Adicionar",onClick:function(t){return v.addTurma(e.data)}},null,8,["disabled","onClick"])):Object(a["g"])("",!0),e.data.events_id?(Object(a["m"])(),Object(a["f"])(k,{key:2,class:"p-button-danger p-button-sm p-button-rounded",icon:"pi pi-times",label:"Remover",onClick:function(t){return v.removeTurma(e.data)}},null,8,["onClick"])):Object(a["g"])("",!0)]})),_:1})]})),_:1},8,["value","filters"])])]),Object(a["j"])(w)],64)}var g=n("3835"),v=n("2909"),O=(n("99af"),n("159b"),n("caad"),n("2532"),n("466d"),n("573d"),n("3cdd")),y=n("3e32"),k=n("a20c"),_=n("0393"),D=n("bc3a"),T=n.n(D),w=n("c1df"),C=n.n(w),S={name:"App",components:{},data:function(){return{loadingDocentes:!1,colors:{M:"#5A7D7C",T:"#A0C1D1",N:"#DADFF7"},turmas:[],env:null,config:{},options:{plugins:[O["b"],y["a"],k["a"]],initialDate:"2021-08-01",slotDuration:"00:15:00",slotLabelInterval:"00:15:00",slotMinTime:"07:00",slotMaxTime:"22:15",initialView:"timeGridWeek",allDaySlot:!1,editable:!1,height:"50vh",headerToolbar:{start:"",center:"",end:""},dayHeaderFormat:{weekday:"short"},slotLabelFormat:{hour:"numeric",minute:"2-digit",omitZeroMinute:!1,meridiem:"short"},locale:"pt-br"},events:[],horarios:{M1:{start:{hours:7,minutes:0},end:{hours:7,minutes:50}},M2:{start:{hours:7,minutes:50},end:{hours:8,minutes:40}},M3:{start:{hours:8,minutes:55},end:{hours:9,minutes:45}},M4:{start:{hours:9,minutes:45},end:{hours:10,minutes:35}},M5:{start:{hours:10,minutes:50},end:{hours:11,minutes:40}},M6:{start:{hours:11,minutes:40},end:{hours:12,minutes:30}},T1:{start:{hours:13,minutes:0},end:{hours:13,minutes:50}},T2:{start:{hours:13,minutes:50},end:{hours:14,minutes:40}},T3:{start:{hours:14,minutes:55},end:{hours:15,minutes:45}},T4:{start:{hours:15,minutes:45},end:{hours:16,minutes:35}},T5:{start:{hours:16,minutes:50},end:{hours:17,minutes:40}},T6:{start:{hours:17,minutes:40},end:{hours:18,minutes:30}},N1:{start:{hours:18,minutes:45},end:{hours:19,minutes:35}},N2:{start:{hours:19,minutes:35},end:{hours:20,minutes:25}},N3:{start:{hours:20,minutes:35},end:{hours:21,minutes:25}},N4:{start:{hours:21,minutes:25},end:{hours:22,minutes:15}}},filters:{global:{value:null,matchMode:_["a"].CONTAINS}}}},mounted:function(){var e=this;this.env=Object({NODE_ENV:"production",VUE_APP_URL_BASE:"https://api.info.ufrn.br/",VUE_APP_CLIENT_ID:"app-events-id",VUE_APP_CLIENT_SECRET:"segredo",VUE_APP_X_API_KEY:"ylpvoAyHanBJ0um8N0nTGiw1JxiWytudtWgZ4BQu",BASE_URL:"/class-chooser/"});var t=6069;T.a.post("".concat(this.env.VUE_APP_URL_BASE,"/authz-server/oauth/token?client_id=").concat(this.env.VUE_APP_CLIENT_ID,"&client_secret=").concat(this.env.VUE_APP_CLIENT_SECRET,"&grant_type=client_credentials")).then((function(n){var a=n.data.access_token;e.config={headers:{Authorization:"Bearer ".concat(a),"x-api-key":"".concat(e.env.VUE_APP_X_API_KEY)}},T.a.get("".concat(e.env.VUE_APP_URL_BASE,"turma/v1/turmas?ano=2021&limit=100&periodo=1&id-unidade=").concat(t),e.config).then((function(t){e.turmas=Object(v["a"])(t.data)}))}))},methods:{confirmGetAllDocentes:function(){var e=this;this.$confirm.require({target:event.currentTarget,message:"Os docentes serão recuperados um a um, quer prosseguir?",icon:"pi pi-exclamation-triangle",acceptClass:"p-button-success",rejectClass:"p-button-danger p-button-oulined",accept:function(){e.loadingDocentes=!0,e.getAllDocentes()},reject:function(){}})},getAllDocentes:function(){var e=this;this.turmas.forEach((function(t,n){setTimeout((function(){console.log(n),e.getDocentes(t),n===e.turmas.length-1&&(e.loadingDocentes=!1)}),500*n)}))},removeTurma:function(e){this.events=this.events.filter((function(t){return!e.events_id.includes(t.id)})),e.events_id=null},addTurma:function(e){var t=this.turma2event(e);this.events=this.events.concat(t)},getDocentes:function(e){T.a.get("".concat(this.env.VUE_APP_URL_BASE,"turma/v1/turmas/").concat(e["id-turma"],"/docentes"),this.config).then((function(t){t.data.length?e.docentes=Object(v["a"])(t.data):e.docentes=[{"nome-docente":"A definir..."}]}))},turma2event:function(e){var t=this,n=[],a=this.events.length,o=e["descricao-horario"].split("(")[0].split(" ").filter((function(e){return e}));return o.forEach((function(o){var s={dias:"",horarios:"",turno:o.match("[aA-zZ]")},r=o.split(s.turno),c=Object(g["a"])(r,2),i=c[0],u=c[1];s.dias=i,s.horarios=u;var d=C()("20210801000000","YYYYMMDDHHmmSS",!0);Object(v["a"])(s.dias).forEach((function(o){Object(v["a"])(s.horarios).forEach((function(r){var c=t.horarios["".concat(s.turno).concat(r)],i=e.docentes.filter((function(e){return e["nome-docente"]})).map((function(e){return e["nome-docente"]})).join(", "),u={id:a,title:"".concat(e["codigo-componente"]," - ").concat(i),backgroundColor:t.colors[s.turno]},l=d.clone().add(parseInt(o)-1,"days");l=l.set(c.start),u.start=l.format("YYYY-MM-DDTHH:mm:SS");var b=d.clone().add(parseInt(o)-1,"days");b.set(c.end),u.end=b.format("YYYY-MM-DDTHH:mm:SS"),n.push(u),a+=1}))}))})),e.events_id=n.map((function(e){return e.id})),n}}};n("800d");S.render=h;var A=S,E=n("9319"),M=n("2106"),P=n.n(M),z=(n("fa3d"),n("e1ae"),n("4121"),n("bddf"),n("15f5"),n("9899")),N=n("5b2c"),x=n("6f85"),q=n("bb57"),U=n("5db6"),I=n("eeae"),F=n("c982"),V=n("5bd2"),Y=n("bdc0"),B=n("8398"),L=n("743f"),H=n("db13"),R=n("485c0"),J=n("b3b6"),Q=n("a1e6"),W=n("b24b"),G=n("9421"),Z=Object(a["e"])(A);Z.use(E["a"],{ripple:!0,locale:{startsWith:"Começa com",contains:"Contém",notContains:"Não contém",endsWith:"Termina com",equals:"Igual à",notEquals:"Diferente de",noFilter:"Sem filtro",lt:"Menor que",lte:"Menor ou igual à",gt:"Maior que",gte:"Maior ou igual à",dateIs:"Data é",dateIsNot:"Data não é",dateBefore:"Data é antes",dateAfter:"Data é depois",clear:"Limpar",apply:"Aplicar",matchAll:"Corresponde à todos",matchAny:"Corresponde à qualquer",addRule:"Adicionar regra",removeRule:"Remover regra",accept:"Sim",reject:"Não",choose:"Escolher",upload:"Carregar",cancel:"Cancelar",dayNames:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sab"],dayNamesMin:["D","S","T","Q","Q","S","S"],monthNames:["Janeiro","Fevereiro","Março","Abri","Maior","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],today:"Hoje",weekHeader:"Sem",firstDayOfWeek:0,dateFormat:"mm/dd/yy",weak:"Fraco",medium:"Médio",strong:"Forte",passwordPrompt:"Insira uma senha",emptyFilterMessage:"Nenhum resultado encontrado",emptyMessage:"Sem opções disponíveis"}}),Z.use(P.a,T.a),Z.use(R["a"]),Z.use(W["a"]),Z.component("Card",z["a"]),Z.component("DataTable",N["a"]),Z.component("Column",x["a"]),Z.component("Button",q["a"]),Z.component("Timeline",U["a"]),Z.component("TabView",I["a"]),Z.component("TabPanel",F["a"]),Z.component("Dialog",V["a"]),Z.component("Toolbar",Y["a"]),Z.component("InputText",B["a"]),Z.component("Fieldset",L["a"]),Z.component("FullCalendar",H["a"]),Z.component("Toast",J["a"]),Z.component("Chip",Q["a"]),Z.component("ConfirmPopup",G["a"]),Z.mount("#app")},"800d":function(e,t,n){"use strict";n("f4bb")},f4bb:function(e,t,n){}});
//# sourceMappingURL=app.17aa104b.js.map