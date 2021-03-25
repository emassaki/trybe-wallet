(this["webpackJsonptrybe-wallet"]=this["webpackJsonptrybe-wallet"]||[]).push([[0],{34:function(e,t,n){e.exports=n(48)},44:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),i=n.n(c),l=n(24),s=n(5),u=n(3),o=n(16),d=n(9),p=n(10),h=n(4),m=n(12),E=n(11),b=n(14),f=n.n(b),v=n(18),y=function(){return fetch("https://economia.awesomeapi.com.br/json/all").then((function(e){return e.json().then((function(t){return e.ok?Promise.resolve(t):Promise.reject(t)}))}))},g=function(e){return{type:"REQUEST_SUCCESS",currencies:e}},j=function(){return function(){var e=Object(v.a)(f.a.mark((function e(t){var n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:"REQUEST_START"}),e.next=4,y();case 4:n=e.sent,t(g(n)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t({type:"REQUEST_FAIL",error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},O=(n(44),function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={email:"",password:"",disabled:!0},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.loginValidation=e.loginValidation.bind(Object(h.a)(e)),e}return Object(p.a)(n,[{key:"handleClick",value:function(){var e=this.props,t=e.handleEmail,n=e.history;t(this.state.email),n.push("/carteira")}},{key:"handleChange",value:function(e){var t=this,n=e.target;this.setState(Object(o.a)({},n.name,n.value),(function(){t.loginValidation()}))}},{key:"loginValidation",value:function(){var e,t=this.state,n=t.email,a=t.password;e=!(/^[\w]+@([\w]+\.)+[\w]{2,4}$/gi.test(n)&&a.length>=6),this.setState({disabled:e})}},{key:"render",value:function(){var e=this.state,t=e.email,n=e.password,a=e.disabled;return r.a.createElement("main",{className:"login-main"},r.a.createElement("header",{className:"login-header"},r.a.createElement("h1",null,"Trybe Wallet")),r.a.createElement("form",{className:"login-form"},r.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleChange,"data-testid":"email-input",placeholder:"user@email.com",className:"login-input"}),r.a.createElement("input",{type:"password",name:"password",value:n,onChange:this.handleChange,"data-testid":"password-input",placeholder:"******",className:"login-input"}),r.a.createElement("button",{type:"submit",disabled:a,className:"login-btn",onClick:this.handleClick},"Entrar")))}}]),n}(r.a.Component)),x=Object(s.b)(null,(function(e){return{handleEmail:function(t){return e(function(e){return{type:"EMAIL",payload:e}}(t))}}}))(O),C=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).getTotalExpenses=e.getTotalExpenses.bind(Object(h.a)(e)),e}return Object(p.a)(n,[{key:"getTotalExpenses",value:function(){return this.props.expenses.reduce((function(e,t){var n=t.value,a=t.currency,r=t.exchangeRates,c=parseFloat(r[a].ask);return e+parseFloat(n)*c}),0).toFixed(2)}},{key:"render",value:function(){var e=this.props.email;return r.a.createElement("header",{className:"wallet-header"},r.a.createElement("h1",null,"Trybe Wallet"),r.a.createElement("p",{"data-testid":"email-field",className:"wallet-email"},"E-mail: ".concat(e)),r.a.createElement("div",{className:"wallet-total-value"},r.a.createElement("span",{"data-testid":"total-field"},"Despesa Total: R$ ".concat(this.getTotalExpenses()," ")),r.a.createElement("span",{"data-testid":"header-currency-field"},"BRL")))}}]),n}(r.a.Component),k=Object(s.b)((function(e){return{email:e.user.email,expenses:e.wallet.expenses}}))(C);C.defaultProps={expenses:[]};var S=n(2),w={value:"0",description:"",currency:"USD",method:"Dinheiro",tag:"Alimenta\xe7\xe3o",id:0},T=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state=Object(S.a)({},w),e.handleChange=e.handleChange.bind(Object(h.a)(e)),e.handleClick=e.handleClick.bind(Object(h.a)(e)),e.renderInput=e.renderInput.bind(Object(h.a)(e)),e.renderSelect=e.renderSelect.bind(Object(h.a)(e)),e}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(o.a)({},t.name,t.value))}},{key:"handleClick",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n,a,r,c,i,l,s,u,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=this.state,a=n.value,r=n.description,c=n.currency,i=n.method,l=n.tag,s=n.id,u=this.props.saveExpense,e.next=5,y();case 5:o=e.sent,u({id:s,value:a,description:r,currency:c,method:i,tag:l,exchangeRates:o}),this.setState(Object(S.a)(Object(S.a)({},w),{},{id:s+1}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderInput",value:function(e,t,n,a){return r.a.createElement("label",{htmlFor:"".concat(n,"-input")},"".concat(e,": "),r.a.createElement("input",{type:t,id:"".concat(n,"-input"),name:n,"data-testid":"".concat(n,"-input"),onChange:this.handleChange,value:a,className:"".concat(n,"-input")}))}},{key:"renderSelectCurrencies",value:function(e,t){var n=this.props.currencies;return r.a.createElement("select",{id:"currency-input",name:"currency","data-testid":"currency-input",onChange:t,value:e,className:"currency-input"},n.map((function(e){return"USDT"===e?"":r.a.createElement("option",{key:e,"data-testid":e},e)})))}},{key:"renderSelect",value:function(e,t,n,a){return r.a.createElement("label",{htmlFor:"".concat(t,"-input")},"".concat(e,": "),r.a.createElement("select",{id:"".concat(t,"-input"),name:t,"data-testid":"".concat(t,"-input"),onChange:this.handleChange,value:n},a.map((function(e){return r.a.createElement("option",{key:e},e)}))))}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.description,a=e.currency,c=e.method,i=e.tag;return r.a.createElement("form",{className:"new-expense-form"},r.a.createElement("label",{htmlFor:"currency-input"},"Moeda: ",this.renderSelectCurrencies(a,this.handleChange)),this.renderInput("Valor","number","value",t),this.renderInput("Descri\xe7\xe3o","text","description",n),this.renderSelect("Tag","tag",i,["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"]),this.renderSelect("M\xe9todo de pagamento","method",c,["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"]),r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"expense-btn add-expense"},"Adicionar despesa"))}}]),n}(r.a.Component),N=Object(s.b)((function(e){return{currencies:e.wallet.currencies}}),(function(e){return{fetchCurrencies:function(){return e(j())},saveExpense:function(t){return e({type:"SAVE_EXPENSE",expenses:t})}}}))(T);T.defaultProps={currencies:[]};var I=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(e){var a;Object(d.a)(this,n);var r=(a=t.call(this,e)).props,c=r.expenses,i=r.expenseId,l=c.find((function(e){return e.id===i})),s=l.value,u=l.description,o=l.currency,p=l.method,m=l.tag,E=l.id,b=l.exchangeRates;return a.state={value:s,description:u,currency:o,method:p,tag:m,id:E,exchangeRates:b},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleClick=a.handleClick.bind(Object(h.a)(a)),a.renderInput=a.renderInput.bind(Object(h.a)(a)),a.renderSelect=a.renderSelect.bind(Object(h.a)(a)),a}return Object(p.a)(n,[{key:"handleChange",value:function(e){var t=e.target;this.setState(Object(o.a)({},t.name,t.value))}},{key:"handleClick",value:function(){var e=Object(v.a)(f.a.mark((function e(t){var n,a,r,c,i,l,s,u;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),n=this.state,a=n.value,r=n.description,c=n.currency,i=n.method,l=n.tag,s=n.id,u=n.exchangeRates,(0,this.props.endExpenseEdit)({id:s,value:a,description:r,currency:c,method:i,tag:l,exchangeRates:u});case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderInput",value:function(e,t,n,a){return r.a.createElement("label",{htmlFor:"".concat(n,"-input")},"".concat(e,": "),r.a.createElement("input",{type:t,id:"".concat(n,"-input"),name:n,"data-testid":"".concat(n,"-input"),onChange:this.handleChange,value:a,className:"".concat(n,"-input")}))}},{key:"renderSelectCurrencies",value:function(e,t){var n=this.props.currencies;return r.a.createElement("select",{id:"currency-input",name:"currency","data-testid":"currency-input",onChange:t,value:e,className:"currency-input"},n.map((function(e){return"USDT"===e?"":r.a.createElement("option",{key:e,"data-testid":e},e)})))}},{key:"renderSelect",value:function(e,t,n,a){return r.a.createElement("label",{htmlFor:"".concat(t,"-input")},"".concat(e,": "),r.a.createElement("select",{id:"".concat(t,"-input"),name:t,"data-testid":"".concat(t,"-input"),onChange:this.handleChange,value:n},a.map((function(e){return r.a.createElement("option",{key:e},e)}))))}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.description,a=e.currency,c=e.method,i=e.tag;return r.a.createElement("form",{className:"edit-expense-form"},r.a.createElement("label",{htmlFor:"currency-input"},"Moeda: ",this.renderSelectCurrencies(a,this.handleChange)),this.renderInput("Valor","number","value",t),this.renderInput("Descri\xe7\xe3o","text","description",n),this.renderSelect("Tag","tag",i,["Alimenta\xe7\xe3o","Lazer","Trabalho","Transporte","Sa\xfade"]),this.renderSelect("M\xe9todo de pagamento","method",c,["Dinheiro","Cart\xe3o de cr\xe9dito","Cart\xe3o de d\xe9bito"]),r.a.createElement("button",{type:"submit",onClick:this.handleClick,className:"expense-btn end-edit"},"Editar despesa"))}}]),n}(r.a.Component),D=Object(s.b)((function(e){return{currencies:e.wallet.currencies,expenses:e.wallet.expenses,expenseId:e.wallet.expenseId}}),(function(e){return{fetchCurrencies:function(){return e(j())},endExpenseEdit:function(t){return e(function(e){return{type:"EDIT_EXPENSE_END",expense:e}}(t))}}}))(I);I.defaultProps={currencies:[],expenses:[]};var R=n(28),_=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"renderButton",value:function(e,t,n){return r.a.createElement("button",{type:"button","data-testid":"".concat(e,"-btn"),onClick:function(){return n(t)},className:"".concat(e,"-btn expense-opt-btn")},"edit"===e?r.a.createElement(R.b,null):r.a.createElement(R.a,null))}},{key:"render",value:function(){var e=this,t=this.props,n=t.expenses,a=t.deleteExpense,c=t.editExpense;return r.a.createElement("table",null,r.a.createElement("thead",{className:"table-header"},r.a.createElement("tr",null,r.a.createElement("th",null,"Moeda"),r.a.createElement("th",null,"Valor"),r.a.createElement("th",null,"C\xe2mbio utilizado"),r.a.createElement("th",null,"Moeda de convers\xe3o"),r.a.createElement("th",null,"Valor convertido"),r.a.createElement("th",null,"Descri\xe7\xe3o"),r.a.createElement("th",null,"Tag"),r.a.createElement("th",null,"M\xe9todo de pagamento"),r.a.createElement("th",null,"Editar/Excluir"))),r.a.createElement("tbody",{className:"table-body"},n.map((function(t,n){var i=t.description,l=t.tag,s=t.method,u=t.value,o=t.currency,d=t.exchangeRates[o],p=d.name,h=d.ask;return r.a.createElement("tr",{key:n},r.a.createElement("td",null,p),r.a.createElement("td",null,u),r.a.createElement("td",null,parseFloat(h).toFixed(2)),r.a.createElement("td",null,"Real"),r.a.createElement("td",null,(h*parseInt(u,10)).toFixed(2)),r.a.createElement("td",null,i),r.a.createElement("td",null,l),r.a.createElement("td",null,s),r.a.createElement("td",null,e.renderButton("edit",t,c),e.renderButton("delete",t,a)))}))))}}]),n}(r.a.Component),F=Object(s.b)((function(e){return{expenses:e.wallet.expenses}}),(function(e){return{deleteExpense:function(t){return e(function(e){return{type:"DELETE_EXPENSE",expense:e}}(t))},editExpense:function(t){return e(function(e){return{type:"EDIT_EXPENSE_START",expense:e}}(t))}}}))(_);_.defaultProps={expenses:[]};n(45);var P=function(e){Object(m.a)(n,e);var t=Object(E.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.fetchCurrencies)()}},{key:"render",value:function(){var e=this.props.isEditing;return r.a.createElement("main",{className:"wallet-main"},r.a.createElement(k,null),e?r.a.createElement(D,null):r.a.createElement(N,null),r.a.createElement(F,null))}}]),n}(r.a.Component),A=Object(s.b)((function(e){return{isEditing:e.wallet.isEditing}}),(function(e){return{fetchCurrencies:function(){return e(j())}}}))(P);P.defaultProps={isEditing:!1};var M=function(){return r.a.createElement(u.c,null,r.a.createElement(u.a,{path:"/carteira",component:A}),r.a.createElement(u.a,{exact:!0,path:"/",component:x}))},U=n(15),V=n(32),L=n(33),X={email:""};var Q=n(22),B={currencies:[],expenses:[]};var z=Object(U.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMAIL":return Object(S.a)(Object(S.a)({},e),{},{email:t.payload});default:return e}},wallet:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_START":return Object(S.a)(Object(S.a)({},e),{},{isFetching:!0});case"REQUEST_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{isFetching:!1,currencies:Object(Q.a)(Object.keys(t.currencies))});case"REQUEST_FAIL":return Object(S.a)(Object(S.a)({},e),{},{isFetching:!1,error:t.error});case"SAVE_EXPENSE":return Object(S.a)(Object(S.a)({},e),{},{expenses:[].concat(Object(Q.a)(e.expenses),[t.expenses])});case"DELETE_EXPENSE":return Object(S.a)(Object(S.a)({},e),{},{expenses:Object(Q.a)(e.expenses.filter((function(e){return e.id!==t.expense.id}))),isEditing:!1});case"EDIT_EXPENSE_START":return Object(S.a)(Object(S.a)({},e),{},{isEditing:!0,expenseId:t.expense.id});case"EDIT_EXPENSE_END":return Object(S.a)(Object(S.a)({},e),{},{expenses:e.expenses.map((function(e){return e.id===t.expense.id?Object(S.a)(Object(S.a)({},e),t.expense):e})),isEditing:!1});default:return e}}}),W=Object(U.createStore)(z,Object(V.composeWithDevTools)(Object(U.applyMiddleware)(L.a)));n(47);i.a.render(r.a.createElement(l.a,{basename:"/trybe-wallet"},r.a.createElement(s.a,{store:W},r.a.createElement(M,null))),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.a155a5f8.chunk.js.map