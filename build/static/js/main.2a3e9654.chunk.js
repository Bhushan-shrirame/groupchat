(this["webpackJsonpunichat-template"]=this["webpackJsonpunichat-template"]||[]).push([[0],{150:function(e,t,a){e.exports=a(343)},155:function(e,t,a){},343:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(29),u=a.n(r),i=(a(155),a(62)),o=a(6),l=a(11),s=a(33),p=a.n(s),m=(a(158),p.a.initializeApp({apiKey:"AIzaSyCuFsDUFaNNRcSDRmt8eCZTMOIQKvDSphU",authDomain:"unichat-4ae20.firebaseapp.com",projectId:"unichat-4ae20",storageBucket:"unichat-4ae20.appspot.com",messagingSenderId:"443815408151",appId:"1:443815408151:web:deac478181b173047e2252"}).auth()),h=c.a.createContext(),d=function(e){var t=e.children,a=Object(n.useState)(!0),r=Object(l.a)(a,2),u=r[0],i=r[1],s=Object(n.useState)(null),p=Object(l.a)(s,2),d=p[0],f=p[1],b=Object(o.f)();Object(n.useEffect)((function(){m.onAuthStateChanged((function(e){f(e),i(!1),e&&b.push("/chats")}))}),[d,b]);var g={user:d};return c.a.createElement(h.Provider,{value:g},!u&&t)},f=a(15),b=a.n(f),g=a(27),v=a(4),E=a.n(v),j=a(148);function O(){var e=Object(n.useRef)(!1),t=Object(n.useState)(!0),a=Object(l.a)(t,2),r=a[0],u=a[1],i=Object(n.useContext)(h).user,s=Object(o.f)();function p(){return(p=Object(g.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.signOut();case 2:s.push("/");case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=Object(g.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.blob();case 5:return n=e.sent,e.abrupt("return",new File([n],"userPhoto.jpg",{type:"image/jpeg"}));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){e.current||(e.current=!0),i&&null!==i?E.a.get("https://api.chatengine.io/users/me/",{headers:{"project-id":"a8a9025f-0afe-4d93-b181-2e4e7430be69","user-name":i.email,"user-secret":i.uid}}).then((function(){u(!1)})).catch((function(e){var t=new FormData;t.append("email",i.email),t.append("username",i.email),t.append("secret",i.uid),function(e){return d.apply(this,arguments)}(i.photoURL).then((function(e){t.append("avatar",e,e.name),E.a.post("https://api.chatengine.io/users/",t,{headers:{"private-key":"8b868a17-389b-4fd2-bf00-cc3cae99cd39"}}).then((function(){return u(!1)})).catch((function(e){return console.log("e",e.response)}))}))})):s.push("/")}),[i,s]),!i||r?c.a.createElement("div",null):c.a.createElement("div",{className:"chats-page"},c.a.createElement("div",{className:"nav-bar"},c.a.createElement("div",{className:"logo-tab"},"Groupchat"),c.a.createElement("div",{onClick:function(){return p.apply(this,arguments)},className:"logout-tab"},"Logout")),c.a.createElement(j.d,{height:"calc(100vh - 66px)",projectID:"a8a9025f-0afe-4d93-b181-2e4e7430be69",userName:i.email,userSecret:i.uid}))}var w=a(345),k=a(346),S=function(){return c.a.createElement("div",{id:"login-page"},c.a.createElement("div",{id:"login-card"},c.a.createElement("h2",null,"Welcome to Groupchat!"),c.a.createElement("div",{className:"login-button google",onClick:function(){return m.signInWithRedirect(new p.a.auth.GoogleAuthProvider)}},c.a.createElement(w.a,null)," Sign In with Google"),c.a.createElement("br",null)," ",c.a.createElement("br",null),c.a.createElement("div",{className:"login-button facebook",onClick:function(){return m.signInWithRedirect(new p.a.auth.FacebookAuthProvider)}},c.a.createElement(k.a,null)," Sign In with Facebook")))};var y=function(){return c.a.createElement("div",{style:{fontFamily:"Avenir"}},c.a.createElement(i.a,null,c.a.createElement(d,null,c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/chats",component:O}),c.a.createElement(o.a,{path:"/",component:S})))))};u.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.2a3e9654.chunk.js.map