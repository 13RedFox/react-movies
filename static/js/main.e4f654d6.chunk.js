(this["webpackJsonpmovies-project"]=this["webpackJsonpmovies-project"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),r=c.n(n),i=(c(10),c(0));var l=function(){return Object(i.jsx)("nav",{className:"cyan lighten-2",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"https://13redfox.github.io/react-movies/",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"https://github.com/13RedFox/react-movies",target:"_blank",rel:"noreferrer",children:"Repo"})})})]})})};var j=function(){return Object(i.jsx)("footer",{className:"page-footer cyan lighten-2",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," React Movies App",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/13RedFox/react-movies",target:"_blank",rel:"noreferrer",children:"Repo"})]})})})},o=c(2),d=function(e){var t=e.onSearch,c=Object(a.useState)(""),s=Object(o.a)(c,2),n=s[0],r=s[1],l=Object(a.useState)("all"),j=Object(o.a)(l,2),d=j[0],h=j[1],b=function(e){h(e.target.dataset.type),t(n,e.target.dataset.type)};return Object(i.jsx)("div",{className:"row",children:Object(i.jsxs)("div",{className:"input-field col s12",children:[Object(i.jsx)("input",{type:"search",placeholder:"Search...",className:"validate",value:n,onChange:function(e){return r(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&t(n,d)}}),Object(i.jsx)("button",{className:"btn btn-search",onClick:function(){return t(n,d)},children:"Search"}),Object(i.jsxs)("div",{className:"radio",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",checked:"all"===d,onChange:b}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",checked:"movie"===d,onChange:b}),Object(i.jsx)("span",{children:"Movies"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",checked:"series"===d,onChange:b}),Object(i.jsx)("span",{children:"Series"})]})]})]})})},h=c(5);var b=function(e){var t=e.Title,c=e.Year,a=e.imdbID,s=e.Type,n=e.Poster;return Object(i.jsxs)("div",{id:a,className:"card",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===n?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x400?text=".concat(t),alt:t}):Object(i.jsx)("img",{className:"activator",src:n,alt:t})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[c," ",Object(i.jsx)("span",{className:"right",children:s})]})]})]})};var p=function(e){var t=e.movies,c=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:c.length?c.map((function(e){return Object(i.jsx)(b,Object(h.a)({},e),e.imdbID)})):Object(i.jsx)("h5",{children:"Not Match "})})};var m=function(){return Object(i.jsx)("div",{className:"preloader-wrapper big active",children:Object(i.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(i.jsx)("div",{className:"circle-clipper left",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"gap-patch",children:Object(i.jsx)("div",{className:"circle"})}),Object(i.jsx)("div",{className:"circle-clipper right",children:Object(i.jsx)("div",{className:"circle"})})]})})},O="49a2ab24",x=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!0),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(a.useEffect)((function(){fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(O,"&s=man")).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){console.error(e),j(!1)}))}),[]),Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(d,{onSearch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";j(!0),fetch("https://www.omdbapi.com/?i=tt3896198&apikey=".concat(O,"&s=").concat(e).concat("all"!==t?"&type=".concat(t):"")).then((function(e){return e.json()})).then((function(e){s(e.Search),j(!1)})).catch((function(e){console.error(e),j(!1)}))}}),l?Object(i.jsx)(m,{}):Object(i.jsx)(p,{movies:c})]})};var v=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)(x,{}),Object(i.jsx)(j,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.e4f654d6.chunk.js.map