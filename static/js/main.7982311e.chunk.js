(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{110:function(e,t,n){},136:function(e,t,n){"use strict";n.r(t);var a,c,r=n(0),o=n.n(r),i=n(12),s=n.n(i),l=(n(110),n(45)),u=n(18),d=n(35),j=n.n(d),p=n(54),b=n(32),m=n(175),h=n(55),f=n.n(h),x=n(58),O=n.n(x),g=n(76),v=n.n(g),D=n(53),S=n(177),w=n(179),y=n(7),C=function(e){var t=e.options,n=void 0===t?[]:t,a=e.selectedValue,c=void 0===a?null:a,r=e.label,o=void 0===r?"":r,i=e.onChange,s=void 0===i?function(){}:i;return Object(y.jsx)(w.a,{options:n,getOptionLabel:function(e){return e.Country},fullWidth:!0,onChange:s,value:c,renderInput:function(e){return Object(y.jsx)(S.a,Object(u.a)(Object(u.a)({},e),{},{label:o,margin:"normal",variant:"standard"}))}})},k=n(174),I=n(86),N=n(15),F=n(176),R=function(e){var t=e.label,n=void 0===t?"":t,a=e.value,c=void 0===a?null:a,r=e.maxDate,o=void 0===r?null:r,i=e.onChange,s=void 0===i?function(){}:i;return Object(y.jsx)(A,{children:Object(y.jsx)(N.a,{utils:I.a,children:Object(y.jsx)(k.a,{container:!0,justifyContent:"space-around",children:Object(y.jsx)(F.a,{disableToolbar:!0,variant:"inline",format:"MM/dd/yyyy",margin:"normal",id:"date-picker-inline",label:n,value:c,onChange:s,KeyboardButtonProps:{"aria-label":"change date"},autoOk:!0,maxDate:o||new Date((new Date).setDate((new Date).getDate()-1)),maxDateMessage:"Ng\xe0y kh\xf4ng h\u1ee3p l\u1ec7",fullWidth:!0})})})})},A=D.a.div(a||(a=Object(l.a)(["\n\n"]))),M=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),o=Object(b.a)(c,2),i=o[0],s=o[1],l=Object(r.useState)({from:null,to:null}),d=Object(b.a)(l,2),h=d[0],x=d[1],g=Object(r.useState)(null),D=Object(b.a)(g,2),S=D[0],w=D[1],k=Object(r.useState)([]),I=Object(b.a)(k,2),N=I[0],F=I[1],A=Object(r.useState)({title:{text:""},xAxis:{categories:[]},series:[]}),M=Object(b.a)(A,2),B=M[0],E=M[1],L=Object(r.useState)(!1),P=Object(b.a)(L,2),z=P[0],J=P[1],K=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://api.covid19api.com/countries");case 3:t=e.sent,a(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,a,c,r,o,s,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=h.from?new Date(new Date(h.from).setDate(new Date(h.from).getDate()-1)).toISOString():(new Date).toISOString(),n=h.to?new Date(h.to).toISOString():(new Date).toISOString(),e.next=5,f.a.get("\n                https://api.covid19api.com/country/".concat(i.Slug,"?from=").concat(t,"&to=").concat(n,"\n            "));case 5:a=e.sent,F(a.data),a.data.length||w(null),c=i.Country,r=a.data.map((function(e){return new Date(e.Date).toDateString()})),o=a.data.map((function(e){return e.Deaths})),s=a.data.map((function(e){return e.Recovered})),l=a.data.map((function(e){return e.Confirmed})),E({title:{text:c},xAxis:{categories:r},yAxis:{title:{text:"S\u1ed1 ca"}},series:[{name:"S\u1ed1 ca nhi\u1ec5m",data:l},{name:"S\u1ed1 ca t\u1eed vong",data:o},{name:"S\u1ed1 ca ph\u1ee5c h\u1ed5i",data:s}]}),J(!0),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0.response);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(p.a)(j.a.mark((function e(){var t,n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Date((new Date).setDate((new Date).getDate()-2)).toISOString(),n=new Date((new Date).setDate((new Date).getDate()-1)).toISOString(),e.next=5,f.a.get("\n                https://api.covid19api.com/country/".concat(i.Slug,"?from=").concat(t,"&to=").concat(n,"\n            "));case 5:a=e.sent,w({deaths:a.data[0].Deaths,confirmeds:a.data[0].Confirmed,recovereds:a.data[0].Recovered}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){K()}),[]),Object(r.useEffect)((function(){i&&(V(),W())}),[h,i]);return Object(y.jsxs)(T,{className:"App",children:[Object(y.jsxs)("div",{className:"choseOptions",children:[Object(y.jsx)("div",{className:"flexItem country",children:Object(y.jsx)(C,{options:n,selectedValue:i,label:"Country",onChange:function(e,t){s(t)}})}),Object(y.jsxs)("div",{className:"flexItem date",children:[Object(y.jsx)(R,{label:"From",value:h.from,onChange:function(e){x(Object(u.a)(Object(u.a)({},h),{},{from:e}))},maxDate:h.to?new Date(h.to):null}),Object(y.jsx)(m.a,{variant:"contained",color:"primary",className:"reset",onClick:function(){return x(Object(u.a)(Object(u.a)({},h),{},{from:null}))},children:"Reset date from"})]}),Object(y.jsxs)("div",{className:"flexItem date",children:[Object(y.jsx)(R,{label:"To",value:h.to,onChange:function(e){x(Object(u.a)(Object(u.a)({},h),{},{to:e}))}}),Object(y.jsx)(m.a,{variant:"contained",color:"primary",className:"reset",onClick:function(){return x(Object(u.a)(Object(u.a)({},h),{},{to:null}))},children:"Reset date to"})]})]}),S?Object(y.jsxs)("div",{className:"total",children:[Object(y.jsxs)("p",{children:["S\u1ed1 ca nhi\u1ec5m: ",S.confirmeds]}),Object(y.jsxs)("p",{children:["S\u1ed1 ca t\u1eed vong: ",S.deaths]})]}):Object(y.jsx)(y.Fragment,{}),z?N.length?Object(y.jsxs)("div",{className:"chart",children:[Object(y.jsx)(v.a,{highcharts:O.a,options:B}),Object(y.jsxs)("span",{className:"api",children:["Api document: ",Object(y.jsx)("a",{href:"https://documenter.getpostman.com/view/10808728/SzS8rjbc",target:"_blank",children:"https://documenter.getpostman.com/view/10808728/SzS8rjbc"})]})]}):Object(y.jsxs)("p",{className:"noReport",children:["Kh\xf4ng c\xf3 th\u1ed1ng k\xea c\u1ee7a ",i.Country]}):Object(y.jsx)(y.Fragment,{})]})},T=D.a.div(c||(c=Object(l.a)(["\n    .choseOptions {\n        display: flex;\n\n        @media (max-width: 540px) {\n            flex-direction: column;\n        }\n    }\n\n    .flexItem {\n        flex: 1;\n        padding: 0 20px;\n    }\n\n    .date {\n        /* padding-top: 15px; */\n    }\n\n    .chart {\n        padding: 30px 40px;\n\n        @media (max-width: 540px) {\n            padding: 30px;\n        }\n\n        @media (max-width: 376px) {\n            padding: 20px;\n        }\n    }\n\n    .total {\n        padding-left: 20px;\n    }\n\n    .noReport {\n        padding-left: 10px;\n    }\n"]))),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,183)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),r(e),o(e)}))};s.a.render(Object(y.jsx)(o.a.StrictMode,{children:Object(y.jsx)(M,{})}),document.getElementById("root")),B()}},[[136,1,2]]]);
//# sourceMappingURL=main.7982311e.chunk.js.map