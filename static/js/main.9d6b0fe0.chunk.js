(this["webpackJsonpweather-app-react"]=this["webpackJsonpweather-app-react"]||[]).push([[0],[,,,,,function(t,e,a){},,,,,,,function(t,e,a){},,function(t,e,a){},function(t,e,a){},,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var c=a(1),n=a.n(c),i=a(6),o=a.n(i),s=(a(12),a(13),a(2)),d=(a(14),a(15),a(0)),r=function(t){var e=Object(c.useState)(""),a=Object(s.a)(e,2),n=a[0],i=a[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.onSubmit(n),t.onLoaded(!1)},children:Object(d.jsx)("input",{type:"text",placeholder:t.city,value:n,onChange:function(t){i(t.target.value)}})})},l=a(7),u=a.n(l),j=(a(5),function(t){var e="./assets/".concat(t.icon,".svg"),a=u()(1e3*t.date).format("DD.MM");return Object(d.jsxs)("div",{className:"forecast-item",children:[Object(d.jsx)("p",{className:"forecast-item-date",children:a}),Object(d.jsx)("img",{className:"icon",alt:"icon",src:e}),Object(d.jsx)("p",{className:"forecast-item-description",children:t.description}),Object(d.jsxs)("div",{className:"forecast-item-content",children:[Math.round(t.temp),"\xb0"]})]})}),b=function(t){return t.loaded?Object(d.jsxs)("div",{className:"forecast-list",children:[Object(d.jsx)(j,{date:t.data.daily[0].dt,description:t.data.daily[0].weather[0].description,temp:t.data.daily[0].temp.day,icon:t.data.daily[0].weather[0].icon}),Object(d.jsx)(j,{date:t.data.daily[1].dt,description:t.data.daily[1].weather[0].description,temp:t.data.daily[1].temp.day,icon:t.data.daily[1].weather[0].icon}),Object(d.jsx)(j,{date:t.data.daily[2].dt,description:t.data.daily[2].weather[0].description,temp:t.data.daily[2].temp.day,icon:t.data.daily[2].weather[0].icon})]}):Object(d.jsx)("div",{})},p=(a(18),function(t){return Object(d.jsx)("div",{className:"error",children:Object(d.jsxs)("h1",{children:["Error: ",t.message]})})}),f=(a(19),function(){return Object(d.jsx)("div",{className:"loading-container",children:Object(d.jsx)("div",{className:"loading"})})}),m=a(3),O=a.n(m);a(20);O.a.accessToken="pk.eyJ1IjoicmVnaW45OSIsImEiOiJja3FzbWxwNHIwa3FxMnZvM3N0bmFjNm42In0.xb-QyjtVE5zpuxqtt0qiLw";var h=function(t){var e=Object(c.useRef)(null),a=Object(c.useRef)(null),n=Object(c.useRef)(null),i=Object(c.useState)("-74.0"),o=Object(s.a)(i,2),r=o[0],l=o[1],u=Object(c.useState)("40.0"),j=Object(s.a)(u,2),b=j[0],p=j[1];return Object(c.useEffect)((function(){l(t.lon),p(t.lat),a.current=new O.a.Map({container:e.current,style:"mapbox://styles/mapbox/streets-v11",center:[r,b],zoom:12}),n.current=(new O.a.Marker).setLngLat([r,b]).addTo(a.current)}),[r,b,t.lat,t.lon]),Object(d.jsx)("div",{className:"map",ref:e})};var x=function(){var t=Object(c.useState)("https://ipgeolocation.abstractapi.com/v1/?api_key=0114551861ca4ad5b222750b725754a6"),e=Object(s.a)(t,2),a=e[0],n=e[1],i=Object(c.useState)(null),o=Object(s.a)(i,2),l=o[0],u=o[1],j=Object(c.useState)(!1),m=Object(s.a)(j,2),O=m[0],x=m[1],y=Object(c.useState)([]),v=Object(s.a)(y,2),g=v[0],w=v[1],N=Object(c.useState)(""),S=Object(s.a)(N,2),M=S[0],k=S[1];return Object(c.useEffect)((function(){!function(t){fetch(t).then((function(t){return t.json()})).then((function(t){w(t),void 0!==t.lon&void 0!==t.lat?x(!0):void 0!==t.longitude&&void 0!==t.latitude&&(n("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t.latitude,"&lon=").concat(t.longitude,"&exclude=hourly,minutely&units=metric&appid=6dececf0197315bf6c4d5d5a89331432")),k(t.city))}),(function(t){u(t),x(!0)}))}(a)}),[a]),l?Object(d.jsx)(p,{message:l.message}):O?Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(r,{city:M,onSubmit:function(t){k(t),fetch("https://api.openweathermap.org/geo/1.0/direct?q=".concat(t,"&limit=5&appid=6dececf0197315bf6c4d5d5a89331432")).then((function(t){return t.json()})).then((function(t){n("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(t[0].lat,"&lon=").concat(t[0].lon,"&exclude=hourly,minutely&units=metric&appid=6dececf0197315bf6c4d5d5a89331432"))}))},onLoaded:function(t){x(t)}}),Object(d.jsx)(b,{data:g,loaded:O}),Object(d.jsx)(h,{lat:g.lat,lon:g.lon})]}):Object(d.jsx)(f,{className:"App__loading"})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.9d6b0fe0.chunk.js.map