(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1038:function(e,t,r){var n=r(1072);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,r(69).default)("69c74834",n,!0,{sourceMap:!1})},1071:function(e,t,r){"use strict";r(1038)},1072:function(e,t,r){var n=r(68)(!1);n.push([e.i,".iframe-widget[data-v-af5b549a]{background-color:transparent;padding:6px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content}",""]),e.exports=n},1105:function(e,t,r){"use strict";r.r(t);var n=r(36),a=(r(78),r(29),r(13),r(71),r(8),r(55),r(58),r(1014),r(263),r(1015)),i=r(922),o=(r(1004),{layout:"widget",data:function(){return{serverData:{}}},meta:function(){},head:function(){var e={title:"Інформер якості атмосферного повітря для твого сайту: ".concat(this.result.type_name," ").concat(this.result.city_name," - SaveEcoBot"),description:"Покажи відвідувачам свого сайту інформацію про якість атмосферного повітря: ".concat(this.result.type_name," ").concat(this.result.city_name)};return e.meta=[{hid:"og-title",property:"og:title",content:e.title},{hid:"og-desc",property:"og:description",content:e.description},{hid:"og-image",property:"og:image",content:"https://www.saveecobot.com/widgets/air-quality-informer/icons/meta/informer.png"}],e.script=[{"data-site":"MGGQXILZ",src:"https://cdn.usefathom.com/script.js",defer:!0}],e},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c,s,u,d,p;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$axios,n=e.params,o=e.req,c=e.store,s=e.redirect,u=o.headers.referer,t.next=4,Object(a.a)(r,n.widget);case 4:if(null==(d=t.sent).error){t.next=10;break}return t.abrupt("return",s(307,"/render/error?code=404"));case 10:if(p=new URL(u),u){t.next=13;break}return t.abrupt("return",s(307,"/render/error?code=403"));case 13:if(d.widget_settings.domen==p.host||"www.".concat(d.widget_settings.domen)==p.host||d.widget_settings.domen+"/"==u){t.next=15;break}return t.abrupt("return",s(307,"/render/error?code=403"));case 15:return Object(i.a)(d,c),c.commit("user/changeState",{key:"email",value:void 0}),t.abrupt("return",{result:d,referer:u});case 19:case"end":return t.stop()}}),t)})))()},fetchOnServer:!0}),c=(r(1071),r(54)),s=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"iframe-widget"},[t("WidgetGeneratedShow")],1)}),[],!1,null,"af5b549a",null);t.default=s.exports;installComponents(s,{WidgetGeneratedShow:r(970).default})}}]);