(this["webpackJsonpdelta-login"]=this["webpackJsonpdelta-login"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.25bf045c.svg"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o);a(14),a(15),a(16),a(17);var s=function(e){var t=e.titulo,a=e.logoURL;return r.a.createElement("header",null,r.a.createElement("h1",null,t),r.a.createElement("img",{id:"logo-client",src:a}))};a(18);var i=function(e){var t=e.logoURL;return r.a.createElement("footer",null,r.a.createElement("img",{id:"delta-logo",src:t}))},c=a(4),m=a(5),u=a(7),h=a(6),d=a(1),g=a(8),v=(a(19),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={forgetPassword:!1,submitFormState:!1,submitFormEmailState:!1,username:"",password:"",usernameRecover:""},a.submitForm=function(){a.setState({submitFormState:!0})},a.submitFormRecover=function(){a.setState({submitFormEmailState:!0})},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleChangeUsername=a.handleChangeUsername.bind(Object(d.a)(a)),a.handleChangePassword=a.handleChangePassword.bind(Object(d.a)(a)),a.handleChangeUsernameRecover=a.handleChangeUsernameRecover.bind(Object(d.a)(a)),a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState({forgetPassword:e.target.value})}},{key:"handleChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"handleChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"handleChangeUsernameRecover",value:function(e){this.setState({usernameRecover:e.target.value})}},{key:"render",value:function(){return this.state.submitFormEmailState?r.a.createElement("div",null,"Correo enviado"):this.state.submitFormState?this.state.submitFormState&&this.state.forgetPassword?r.a.createElement("div",{className:"box"},r.a.createElement("form",{id:"login-form",action:"recuperar.html"},r.a.createElement("div",null,r.a.createElement("h2",null,"Recuperar contrase\xf1a")),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username-recover"},"Usuario "),r.a.createElement("input",{type:"text",id:"username-recover",name:"username-recover",placeholder:"Usuario",minlength:"3",onChange:this.handleChangeUsernameRecover})),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.submitFormRecover},"Enviar correo")))):(console.log("Intenta autenticarse con el usuario: ".concat(this.state.username," y la contrase\xf1a ").concat(this.state.password)),r.a.createElement("div",null,"Autenticandose")):r.a.createElement("div",{className:"box"},r.a.createElement("form",{id:"login-form",action:"recuperar.html"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"username"},"Usuario "),r.a.createElement("input",{type:"text",id:"username",name:"username",placeholder:"Usuario",minlength:"3",onChange:this.handleChangeUsername})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"password"},"Contrase\xf1a "),r.a.createElement("input",{type:"password",id:"password",name:"password",placeholder:"Contrase\xf1a",minlength:"6",onChange:this.handleChangePassword})),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",name:"password-forget",value:"f",ref:"forget_chekbox",onChange:this.handleChange})," ","He olvidado mi clave"),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.submitForm},"Acceder"))))}}]),t}(n.Component)),p="Sistema de asistencias",E="https://d500.epimg.net/cincodias/imagenes/2015/05/08/pyme/1431098283_691735_1431098420_noticia_normal.jpg",b="https://s3.amazonaws.com/www.laborum.pe/companies/logos/94963/LOGO%20DELTA.png";var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,{titulo:p,logoURL:E}),r.a.createElement(v,null),r.a.createElement(i,{logoURL:b}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.4f6417bf.chunk.js.map