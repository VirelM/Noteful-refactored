(this["webpackJsonpnoteful-app"]=this["webpackJsonpnoteful-app"]||[]).push([[0],{200:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(81),c=n.n(r),l=n(13),s=(n(89),n(42)),i=n(7),u=n(8),d=n(10),m=n(9),p=n(3),f=(n(44),o.a.createContext({notes:[],folders:[],handleDeleteNote:function(){}})),h=(n(90),n(82)),v=n(12),N=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleClickDelete=function(t){t.preventDefault();var n=e.props.id;fetch("http://localhost:9090/notes/".concat(n),{method:"DELETE",headers:{"content-type":"application/json"}}).then((function(e){return e.json()})).then((function(){e.context.deleteNote(n),console.log(e.props,"Yahoo"),console.log(e.props.Deletethis),e.props.Deletethis(n)}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props.modified;return console.log(e),o.a.createElement("div",{className:"Note"},o.a.createElement("h2",{className:"Note-title"},o.a.createElement(l.b,{to:"/note/".concat(this.props.id)},this.props.name)),o.a.createElement("button",{className:"Note-delete",type:"button",onClick:this.handleClickDelete},o.a.createElement(v.a,{icon:"trash-alt"})," ","Remove"),o.a.createElement("div",{className:"Note-dates"},o.a.createElement("div",{className:"Note-dates-modified"},"Modified"," ",o.a.createElement("span",{className:"Date"},Object(h.format)(e,"Do MMM YYYY")))))}}]),n}(o.a.Component);N.defaultProps={Deletethis:function(){}},N.contextType=f;n(200);var E=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleDeleteNote=function(t){e.props.history.push("/")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.context.notes,t=void 0===e?[]:e;console.log(t);var n=this.props.match.params.noteId;console.log(this.props),console.log(n);var a=k(t,n)||{content:""};return console.log("Testing",a),console.log(this.handleDeleteNote),o.a.createElement("section",{className:"NoteMainPage"},o.a.createElement(N,{id:a.id,name:a.name,modified:a.modified,Deletethis:this.handleDeleteNote}),o.a.createElement("div",{className:"NoteMainPage-content"},a.content.split(/\n \r|\n/).map((function(e,t){return o.a.createElement("p",{key:t},e)}))))}}]),n}(o.a.Component);E.defaultProps={match:{params:{}}},E.contextType=f,E.defaultProps={note:{content:""}};n(201);var b=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.context,t=e.folders,n=e.notes;return o.a.createElement("div",{className:"NoteListNav"},o.a.createElement("ul",{className:"NoteListNav-list"},t.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(l.c,{to:"/folder/".concat(e.id),className:"NoteListNav-folder-link"},o.a.createElement("span",{className:"NoteListNav-number-notes"},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.filter((function(e){return e.folderId===t})).length}(n,e.id)),e.name))}))),o.a.createElement("button",{className:"NoteListNav-Add-Folder-Button"},o.a.createElement(v.a,{icon:"plus"}),"Add Folder"))}}]),n}(o.a.Component);b.contextType=f,b.defaultProps={folders:[]};n(202);var j=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.context.notes,t=this.props.match.params.folderId;return e=O(e,t),o.a.createElement("section",{className:"NoteList"},o.a.createElement("ul",null," ",e.map((function(e){return o.a.createElement("li",{key:e.id},o.a.createElement(N,{id:e.id,name:e.name,modified:e.modified}))}))),o.a.createElement("button",{className:"NoteList-Add-Note-Button",type:"button"},o.a.createElement(v.a,{icon:"plus"}),"Add Note"))}}]),n}(o.a.Component);j.contextType=f;n(203);var y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.context,n=t.folders,a=t.notes,r=this.props.match.params.noteId;console.log(this.props),console.log(r);var c=k(a,r)||{},l=g(n,c.folderId);return o.a.createElement("div",null,o.a.createElement("button",{tag:"button",className:"NotePageNav-back-button",role:"link",onClick:function(){return e.props.history.goBack()}},o.a.createElement(v.a,{icon:"chevron-left"}),"Back"),l&&o.a.createElement("h3",{className:"NotePageNav-folder-name"},l.name))}}]),n}(o.a.Component);y.contextType=f,y.defaultProps={history:{goBack:function(){}}};var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return e.id===t}))},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find((function(e){return e.id===t}))},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t?e.filter((function(e){return e.folderId===t})):e},D=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={notes:[],folders:[]},e.handleDeleteNote=function(t){e.setState({notes:e.state.notes.filter((function(e){return e.id!==t}))}),console.log(e.props,"Please")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.all([fetch("http://localhost:9090/notes"),fetch("http://localhost:9090/folders")]).then((function(e){var t=Object(s.a)(e,2),n=t[0],a=t[1];return n.ok?a.ok?Promise.all([n.json(),a.json()]):a.json().then((function(e){return Promise.reject(e)})):n.json().then((function(e){return Promise.reject(e)}))})).then((function(t){var n=Object(s.a)(t,2),a=n[0],o=n[1];e.setState({notes:a,folders:o})})).catch((function(e){console.error({error:e})}))}},{key:"navRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","folder/:folderId"].map((function(e){return o.a.createElement(p.a,{exact:!0,path:e,key:e,component:b})})),o.a.createElement(p.a,{path:"/note/:noteId",component:y}),o.a.createElement(p.a,{path:"/add-folder",component:y}),o.a.createElement(p.a,{path:"/add-note",component:y}))}},{key:"mainRoutes",value:function(){return o.a.createElement(o.a.Fragment,null,["/","/folder/:folderId"].map((function(e){return o.a.createElement(p.a,{exact:!0,key:e,path:e,component:j})})),o.a.createElement(p.a,{path:"/note/:noteId",component:E}))}},{key:"render",value:function(){return o.a.createElement(f.Provider,{value:{notes:this.state.notes,folders:this.state.folders,deleteNote:this.handleDeleteNote}},o.a.createElement("div",{className:"App"},o.a.createElement("nav",{className:"App-nav"},this.navRoutes()),o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,o.a.createElement(l.b,{to:"/"},"Noteful")," ",o.a.createElement(v.a,{icon:"check-double"}))),o.a.createElement("main",{className:"App-main"},this.mainRoutes())))}}]),n}(o.a.Component),P=n(22),x=n(23);n(204);P.b.add(x.c,x.b,x.d,x.a),c.a.render(o.a.createElement(l.a,null,o.a.createElement(D,null)),document.getElementById("root"))},44:function(e,t,n){},84:function(e,t,n){e.exports=n(205)},89:function(e,t,n){},90:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.d4c15fed.chunk.js.map