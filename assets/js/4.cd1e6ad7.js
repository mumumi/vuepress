(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{332:function(t,e,n){},378:function(t,e,n){"use strict";var a=n(332);n.n(a).a},380:function(t,e,n){"use strict";n.r(e);var a=n(38),o=n(2);const s={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"}};var u={data:function(){return{rawPopupConfig:{"/":{message:"发现新内容可用",buttonText:"刷新"},"/en/":{message:"New content is available.",buttonText:"Refresh"}},updateEvent:null}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/":{message:"发现新内容可用",buttonText:"刷新"},"/en/":{message:"New content is available.",buttonText:"Refresh"}}&&(this.rawPopupConfig=s)},computed:{popupConfig:function(){return Object(o.f)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||s["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||s["/"].buttonText}},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then(function(){location.reload(!0)}),this.updateEvent=null)}}},i=(n(378),n(18)),p=Object(i.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v(t._s(t.buttonText))])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)},[],!1,null,"64bbe3ac",null);e.default=p.exports}}]);