(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[41],{655:function(t,e,n){"use strict";n.r(e),n.d(e,"page",(function(){return v}));var r=n(0),i=n(7),o=n(27),a=n(40),c=n(299),u=n(298),s=n(271),d=n(12),f=n(69),h=n.n(f),l=function(t){return{compId:t.compId,dataId:t.dataId}},p=Object(i.h)([Object(i.f)(o.c,s.a),Object(i.f)(o.b,s.a),a.a,c.b,u.b],(function(t,e,n,i,o){var a,c=t.pageAnchorsObservers.concat(e.pageAnchorsObservers),u=t.activeAnchorObservers.concat(e.activeAnchorObservers),s=t.anchors,f=e.siteOffset,p=function(t){var e=function(t,e){var n=t.findIndex((function(t){return Math.floor(t.top-e)>0}));return-1===n?l(t[t.length-1]):0===n?{compId:"PAGE_TOP_ANCHOR",dataId:"SCROLL_TO_TOP"}:l(t[n-1])}(a,f);i.update(function(t,e,n,r,i,o){var a={},c=r?r.map((function(t){return{compId:t.compId,dataId:t.dataId,name:t.name}})):[];return e.length&&e.forEach((function(t){a[t.id]={activeAnchor:n}})),t.length&&t.forEach((function(t){if(a[t.id]={activeAnchor:n},o&&c.length){var e=t.compData,r=e.pageTopLabel,u=e.hiddenAnchorIds,s=u&&u.hasOwnProperty(i)?u[i]:[],d={compId:"PAGE_TOP_ANCHOR",dataId:"SCROLL_TO_TOP",name:r||""};a[t.id].anchors=[d].concat(c).filter((function(t){return!s.includes(t.compId)}))}})),a}(c,u,e,a,o,t))},m=function(){return a.sort((function(t,e){return t.top-e.top}))},v=function(t){a=a.map((function(t){return Object(r.a)(Object(r.a)({},t),{top:t.element.getBoundingClientRect().top||0})})),t&&m()},b=function(t){h.a.measure((function(){v(t)})),h.a.mutate((function(){p(!1)}))},g=Object(d.debounce)(b.bind(null,!1),100),O=Object(d.debounce)(b.bind(null,!0),100);return{pageDidMount:function(){(c.length||u.length)&&(h.a.measure((function(){var t;(t=n.document.getElementById("WIX_ADS"))&&(f+=t.offsetHeight),a=s.reduce((function(t,e){var i=n.document.getElementById(e.compId);return i&&t.push(Object(r.a)(Object(r.a)({},e),{element:i,top:void 0!==e.top?e.top:i.getBoundingClientRect().top||0})),t}),[]),m()})),h.a.mutate((function(){p(!0)})),n.addEventListener("scroll",g),n.addEventListener("resize",O))},pageDidUnmount:function(){(c.length||u.length)&&(n.removeEventListener("scroll",g),n.removeEventListener("resize",O))}}})),m=n(52),v=function(t,e){e([m.a.PageDidMountHandler,m.a.PageDidUnmountHandler],p)}},69:function(t,e,n){var r;!function(e){"use strict";var i=function(){},o=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(t){return setTimeout(t,16)};function a(){this.reads=[],this.writes=[],this.raf=o.bind(e),i("initialized",this)}function c(t){t.scheduled||(t.scheduled=!0,t.raf(u.bind(null,t)),i("flush scheduled"))}function u(t){i("flush");var e,n=t.writes,r=t.reads;try{i("flushing reads",r.length),s(r),i("flushing writes",n.length),s(n)}catch(t){e=t}if(t.scheduled=!1,(r.length||n.length)&&c(t),e){if(i("task errored",e.message),!t.catch)throw e;t.catch(e)}}function s(t){var e;for(i("run tasks");e=t.shift();)e()}function d(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}a.prototype={constructor:a,measure:function(t,e){i("measure");var n=e?t.bind(e):t;return this.reads.push(n),c(this),n},mutate:function(t,e){i("mutate");var n=e?t.bind(e):t;return this.writes.push(n),c(this),n},clear:function(t){return i("clear",t),d(this.reads,t)||d(this.writes,t)},extend:function(t){if(i("extend",t),"object"!=typeof t)throw new Error("expected object");var e=Object.create(this);return function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}(e,t),e.fastdom=this,e.initialize&&e.initialize(),e},catch:null};var f=e.fastdom=e.fastdom||new a;void 0===(r=function(){return f}.call(f,n,f,t))||(t.exports=r)}("undefined"!=typeof window?window:this)}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/pageAnchors.aac4d785.chunk.min.js.map