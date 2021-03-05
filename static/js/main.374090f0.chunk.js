(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{15:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(7),i=a.n(c),u=(a(15),a(5)),o=a(2);function l(e,t,a){switch(e){case"+":return function(e,t){var a=s(e,t),r=Object(u.a)(a,2),n=r[0],c=r[1];return n+c}(t,a);case"-":return function(e,t){var a=s(e,t),r=Object(u.a)(a,2),n=r[0],c=r[1];return n-c}(t,a);case"x":return function(e,t){var a=s(e,t),r=Object(u.a)(a,2),n=r[0],c=r[1];return n*c}(t,a);case"\xf7":return function(e,t){var a=s(e,t),r=Object(u.a)(a,2),n=r[0],c=r[1];return 0===c?"Error":n/c}(t,a);default:throw new Error("Invalid operation")}}function s(e,t){return[parseFloat(e),parseFloat(t)]}var b="ADD",j="SUBSTRACT",d="MULTIPLY",p="DIVIDE",f="TAP",O="CLEAR_ALL",v="CLEAR",x="RESULT",g=function(e,t){var a=e.firstValue,r=e.secondValue,n=e.displayValue;if(""!==a&&""!==r){var c=l(t,a,r);return Object(o.a)(Object(o.a)({},e),{},{operation:t,firstValue:c,secondValue:"",displayValue:c})}return""===a&&""!==n?Object(o.a)(Object(o.a)({},e),{},{operation:t,firstValue:n}):Object(o.a)(Object(o.a)({},e),{},{operation:t})};function V(e,t){switch(t.type){case f:var a=t.data;if(""===e.operation){var r=e.firstValue+a.value;return Object(o.a)(Object(o.a)({},e),{},{firstValue:r,displayValue:r})}if("="===e.operation){var n=a.value;return Object(o.a)(Object(o.a)({},e),{},{firstValue:n,displayValue:n,operation:""})}if(""===e.firstValue){var c=e.firstValue+a.value;return Object(o.a)(Object(o.a)({},e),{},{firstValue:c,displayValue:c})}var i=e.secondValue+a.value;return Object(o.a)(Object(o.a)({},e),{},{secondValue:i,displayValue:i});case b:return g(e,"+");case j:return g(e,"-");case d:return g(e,"x");case p:return g(e,"\xf7");case x:var u=e.operation,s=e.firstValue,V=e.secondValue;if(""===s||""===V)return Object(o.a)(Object(o.a)({},e),{},{operation:"="});var h=l(u,s,V);return Object(o.a)(Object(o.a)({},e),{},{displayValue:h,operation:"",firstValue:"",secondValue:""});case v:var y=e.firstValue;if(""!==e.secondValue)return Object(o.a)(Object(o.a)({},e),{},{displayValue:"0",secondValue:"0"});if(""!==y)return Object(o.a)(Object(o.a)({},e),{},{displayValue:"0",firstValue:"0"});break;case O:return Object(o.a)({},F);default:throw new Error("Unhandled action type: ".concat(t.type," "))}}var h,y,C,w,k,m=a(0),F={operation:"",displayValue:"0",firstValue:"",secondValue:"",result:""},A=n.a.createContext(),D=function(e){var t=e.children,a=Object(r.useReducer)(V,F),n=Object(u.a)(a,2),c=n[0],i=n[1];return Object(m.jsx)(A.Provider,{value:{state:c,dispatch:i},children:t})},E="#FF9500",L="#505050",I="#D4D4D2",T=a(9),S=a(3),P=a(4),R=P.a.button(h||(h=Object(S.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100px;\n    width: 100px;\n    background-color: ",";\n    border: solid 1px  ",";\n    color: ",";\n    border-radius: 50%;\n    font-size: 2em;\n    ","\n    \n    &:active {\n        filter: brightness(120%);\n    }\n    &:focus {\n        outline: 0;\n    }\n"])),(function(e){return e.active?"white":e.bgColor?e.bgColor:L}),(function(e){return e.active?"white":e.bgColor?e.bgColor:L}),(function(e){return e.color?e.color:e.active?E:"white"}),(function(e){var t=e.gridArea;return t&&"grid-area: ".concat(t,"; border-radius: 60px; width: 100%; padding-right: 115px; ")})),U=function(e){var t=e.value,a=Object(T.a)(e,["value"]),n=Object(r.useContext)(A),c=n.dispatch,i=n.state;return Object(m.jsx)(R,Object(o.a)(Object(o.a)({onClick:function(){switch(t){case"AC":c({type:O});break;case"C":c({type:v});break;case"\xb1":case"%":break;case"\xf7":c({type:p});break;case"x":c({type:d});break;case"-":c({type:j});break;case"+":c({type:b});break;case"=":c({type:x});break;default:if(9===i.displayValue.length&&""===i.operation)return;if(9===i.displayValue.length&&""!==i.operation&&""!==i.secondValue)return;c({type:f,data:{value:t}})}}},a),{},{children:t}))},B=P.a.div(y||(y=Object(S.a)(["\n    font-size: 75px;\n    color: white;\n"]))),z=function(){var e=Object(r.useContext)(A).state;return Object(m.jsx)(B,{"data-testid":"calculator-input",children:"Error"!==e.displayValue?new Intl.NumberFormat(void 0,{maximumFractionDigits:12}).format(function(e){if(void 0!==e){var t=e.toString();if(e<0){if(t.length>10)return e.toFixed(10)}else if(t.length>9)return+t.substring(0,9);return e}}(e.displayValue)):e.displayValue})},J=P.a.div(C||(C=Object(S.a)(["\n    display: grid;\n    grid-template-rows: 1fr 2fr;\n    background-color:black;\n    height: 812px;\n    padding: 15px 20px;\n"]))),M=P.a.div(w||(w=Object(S.a)(["\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n"]))),N=P.a.div(k||(k=Object(S.a)(['\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    grid-gap: 15px;\n    width: 100%;\n    height: 100%;\n    grid-template-areas:    ". . . ."\n                            ". . . ."\n                            ". . . ."\n                            ". . . ."\n                            "cero cero . ."\n']))),Y=function(){var e=Object(r.useContext)(A).state;console.log(e);var t=function(t){return e.operation===t&&""===e.secondValue};return Object(m.jsxs)(J,{"data-testid":"layout",children:[Object(m.jsx)(M,{"data-testid":"input-layout",children:Object(m.jsx)(z,{})}),Object(m.jsxs)(N,{"data-testid":"buttons-layout",children:[Object(m.jsx)(U,{color:L,bgColor:I,value:""!==e.firstValue?"C":"AC"}),Object(m.jsx)(U,{color:L,bgColor:I,value:"\xb1"}),Object(m.jsx)(U,{color:L,bgColor:I,value:"%"}),Object(m.jsx)(U,{bgColor:E,value:"\xf7",active:t("\xf7")}),Object(m.jsx)(U,{value:"7"}),Object(m.jsx)(U,{value:"8"}),Object(m.jsx)(U,{value:"9"}),Object(m.jsx)(U,{bgColor:E,value:"x",active:t("x")}),Object(m.jsx)(U,{value:"4"}),Object(m.jsx)(U,{value:"5"}),Object(m.jsx)(U,{value:"6"}),Object(m.jsx)(U,{bgColor:E,value:"-",active:t("-")}),Object(m.jsx)(U,{value:"1"}),Object(m.jsx)(U,{value:"2"}),Object(m.jsx)(U,{value:"3"}),Object(m.jsx)(U,{bgColor:E,value:"+",active:t("+")}),Object(m.jsx)(U,{value:"0",gridArea:"cero"}),Object(m.jsx)(U,{value:"."}),Object(m.jsx)(U,{bgColor:E,value:"="})]})]})},_=function(){return Object(m.jsx)(D,{children:Object(m.jsx)(Y,{})})},q=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(_,{})}),document.getElementById("root")),q()}},[[20,1,2]]]);
//# sourceMappingURL=main.374090f0.chunk.js.map