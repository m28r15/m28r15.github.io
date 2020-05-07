define(["lodash","coreUtilsLib"],(function(n,t){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=7)}([function(t,e){t.exports=n},function(n,t,e){"use strict";e.r(t),e.d(t,"isMergeVirtualGroup",(function(){return u})),e.d(t,"isRescaleVirtualGroup",(function(){return c})),e.d(t,"isVirtualGroup",(function(){return a})),e.d(t,"isDesktopOnlyComponent",(function(){return f})),e.d(t,"isTextComponent",(function(){return s})),e.d(t,"isGraphicComponent",(function(){return l})),e.d(t,"isGroupComponent",(function(){return d})),e.d(t,"isColumnsContainerComponent",(function(){return p})),e.d(t,"isImageComponent",(function(){return m})),e.d(t,"isMasterPage",(function(){return v})),e.d(t,"isDockingAllowed",(function(){return y})),e.d(t,"isFixedPositionAllowed",(function(){return g})),e.d(t,"isFixedPositionElement",(function(){return h})),e.d(t,"shouldConvertFixedPositionToAbsolute",(function(){return T})),e.d(t,"isExistsBeforeMerge",(function(){return E})),e.d(t,"shouldStretchToScreenWidth",(function(){return x})),e.d(t,"extractComponentsFromStructureByType",(function(){return D})),e.d(t,"isScreenWidthComponent",(function(){return _})),e.d(t,"translateComps",(function(){return O})),e.d(t,"reparentComponent",(function(){return C})),e.d(t,"addComponentsTo",(function(){return I})),e.d(t,"removeChildrenFrom",(function(){return P})),e.d(t,"removeGroup",(function(){return R})),e.d(t,"containsComponent",(function(){return M})),e.d(t,"getHeightAccordingToChildren",(function(){return b})),e.d(t,"ensureContainerTightlyWrapsChildren",(function(){return S})),e.d(t,"isSiteSegmentOrPage",(function(){return G})),e.d(t,"isPageComponent",(function(){return N})),e.d(t,"isContainerComponent",(function(){return A})),e.d(t,"isSiteSegment",(function(){return L})),e.d(t,"isAllowedToBeInMasterPage",(function(){return z})),e.d(t,"extractMobilePage",(function(){return B})),e.d(t,"getComponentByIdFromStructure",(function(){return w})),e.d(t,"unifyGroups",(function(){return j})),e.d(t,"getComponentsByIds",(function(){return F})),e.d(t,"getParent",(function(){return U})),e.d(t,"getSnugLayout",(function(){return V})),e.d(t,"getTinyMenuDefaultPosition",(function(){return Y})),e.d(t,"getChildren",(function(){return H})),e.d(t,"getRangesOverlap",(function(){return W})),e.d(t,"getYOverlap",(function(){return k})),e.d(t,"getXOverlap",(function(){return X})),e.d(t,"hasGreaterArea",(function(){return q})),e.d(t,"haveSufficientOverlap",(function(){return J})),e.d(t,"isEmptyContainer",(function(){return K})),e.d(t,"shouldReparentCompToChildOfContainer",(function(){return Q})),e.d(t,"getAllCompsInStructure",(function(){return $}));var r=e(0),o=e(2),i=e(4),u=function(n){return r.get(n,"componentType")===o.a.VIRTUAL_GROUP_TYPES.MERGE},c=function(n){return r.get(n,"componentType")===o.a.VIRTUAL_GROUP_TYPES.RESCALE},a=function(n){return c(n)||u(n)};function f(n){return r.get(n,["conversionData","desktopOnly"],!1)}function s(n){return"text"===r.get(n,["conversionData","category"])}function l(n){return"graphic"===r.get(n,["conversionData","category"])||m(n)}function d(n){return n&&"wysiwyg.viewer.components.Group"===n.componentType}function p(n){return"columns"===r.get(n,["conversionData","category"])}function m(n){return"photo"===r.get(n,["conversionData","category"])}function v(n){return"masterPage"===r.get(n,"id")}function y(n){return r.get(n,["conversionData","isDockingAllowed"])}function g(n){return r.get(n,["conversionData","isFixedPositionAllowed"])}function h(n){return r.get(n,["layout","fixedPosition"],!1)}function T(n){return r.get(n,["conversionData","convertFixedPositionToAbsolute"],!1)}function E(n){return n.existsBeforeMerge}function x(n){var t=function(n){return r.get(n.conversionData,"isScreenWidth",!1)||r.get(n.conversionData,"stretchHorizontally",!1)||r.some(n.components,t)};return G(n)||t(n)}function D(n,t){var e=H(n),o=r.remove(e,(function(n){return r.includes(t,n.componentType)}));return r.concat(o,r.flatMap(e,D))}function _(n){return r.get(n.conversionData,"isScreenWidth",!1)||r.some(n.components,_)}function O(n,t,e){void 0===t&&(t=0),void 0===e&&(e=0),r.forEach(n,(function(n){n.layout.x+=t,n.layout.y+=e}))}function C(n,t,e){I(n,[t],e),O([t],-n.layout.x,-n.layout.y)}function I(n,t,e){var r=H(n);t.length&&r&&(e=void 0!==e?e:r.length,r.splice.apply(r,[e,0].concat(t)))}function P(n,t){var e=H(n);r.remove(e,(function(n){return r.includes(t,n)}))}function R(n,t){if(d(n)){var e=r.findIndex(t.components,{id:n.id});r.forEach(n.components.reverse(),(function(r){I(t,[r],e),O([r],n.layout.x,n.layout.y)})),r.remove(t.components,n)}}function M(n,t){return r.some(H(n),(function(n){return t(n)||n&&M(n,t)}))}function b(n,t,e){if(!v(n)&&t&&(e||!r.isEmpty(t))){var i=r(t).reject(["conversionData.isInvisible",!0]).reduce((function(n,t){return r.max([n,t.layout.y+t.layout.height,0])}),0);return r.get(n,["conversionData","hasTightYMargin"])||r.get(n,["conversionData","hasTightBottomMargin"])?i:i+(x(n)?o.a.SECTION_MOBILE_MARGIN_Y:o.a.COMPONENT_MOBILE_MARGIN_Y+r.get(n.conversionData,"borderWidth",0))}}function S(n,t,e,o){void 0===o&&(o=0);var i=b(n,t,e);if(r.isNumber(i)){var u=r.get(n,["conversionData","minHeight"],o);n.layout.height=Math.max(u,i)}}function G(n){return N(n)||L(n)}function N(n){return"Page"===n.type}function A(n){return"Container"===n.type}function L(n){return r.has(n.conversionData,"siteSegmentRole")}function z(n){return L(n)||r.has(n.conversionData,"isAllowedToBeChildOfMasterPage")}function B(n){var t=i.objectUtils.cloneDeep(n),e=r.has(t,"components")?"components":"children";return r.set(t,e,n.mobileComponents||[])}function w(n,t){if(t.id===n)return t;var e=null;return r.find(H(t),(function(t){return e=w(n,t)})),e}function j(n,t){if(n.length>t)n.length=0;else for(var e=function(t){var e=r.findLastIndex(n,(function(e,o){return o<t&&(i=n[t],u=e,r.size(r.intersection(i,u))>0);var i,u}));-1!==e&&(n[e]=n[e].concat(r.difference(n[t],n[e])),n.splice(t,1))},o=n.length-1;o>=0;o--)e(o)}function F(n,t){var e=H(n);return r.map(t,(function(n){return r.find(e,{id:n})||null}))}function U(n,t){var e=H(t);if(r.find(e,{id:n}))return t;var o=null;return r.find(e,(function(t){return o=U(n,t)})),o}function V(n){if(n&&0!==n.length){var t=r.min(r.map(n,"layout.x")),e=r.min(r.map(n,"layout.y"));return{x:t,y:e,width:r.max(r.map(n,(function(n){return n.layout.x+n.layout.width})))-t,height:r.max(r.map(n,(function(n){return n.layout.y+n.layout.height})))-e,rotationInDegrees:0}}}function Y(){return{x:o.a.MOBILE_WIDTH-(o.a.TINY_MENU_SIZE+o.a.SITE_SEGMENT_PADDING_X),y:o.a.SECTION_MOBILE_MARGIN_Y,rotationInDegrees:0}}function H(n){return n.components||n.children}function W(n,t){void 0===n&&(n=[]),void 0===t&&(t=[]);var e=function(n,t){return Math.min(n[1],t[1])-t[0]};return n[0]<=t[0]?e(n,t):e(t,n)}function k(n,t){var e=function(n){return[n.layout.y,n.layout.height+n.layout.y]};return W(e(n),e(t))}function X(n,t){if(_(n))return t.layout.width;if(_(t))return n.layout.width;var e=function(n){return[n.layout.x,n.layout.width+n.layout.x]};return W(e(n),e(t))}var Z=function(n){return n.layout.width*n.layout.height};function q(n,t){return _(n)?n.layout.height>=t.layout.height||Z(n)>Z(t):!_(t)&&Z(n)>Z(t)}function J(n,t,e){var r=X(n,t),o=k(n,t);if(r<=0||o<=0)return!1;var i=r*o,u=Math.min(Z(n),Z(t));return i>0&&i/u>=e}function K(n){return!!A(n)&&("columns"===n.conversionData.category?1===r.size(n.components)&&r.isEmpty(n.components[0].components):r.isEmpty(n.components))}function Q(n,t){return p(t)&&r.get(n,["conversionData","isInvisible"],!1)}function $(n,t,e){void 0===t&&(t=!1);for(var o=[[n]],i=0,u=o;i<u.length;i++){var c=u[i];r.forEach(c,(function(n){var e=t?r.get(n,"mobileComponents"):H(n);r.isEmpty(e)||o.push(e)}))}return r(o).flatten().remove(e).keyBy("id").value()}},function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r={MOBILE_WIDTH:320,MARGIN_BETWEEN_TEXT_AND_NON_TEXT:20,COMPONENT_MOBILE_MARGIN_X:10,COMPONENT_MOBILE_MARGIN_Y:10,SECTION_MOBILE_MARGIN_Y:20,SITE_SEGMENT_PADDING_X:20,TINY_MENU_SIZE:50,TEXT_MAX_LENGTH_FOR_RESCALING:25,MIN_WIDTH_FOR_ENLARGE:140,DEFAULT_TEXT_HEIGHT:10,VIRTUAL_GROUP_TYPES:{RESCALE:"RESCALE_VIRTUAL_GROUP",MERGE:"MERGE_VIRTUAL_GROUP"}}},function(n,t,e){"use strict";e.d(t,"e",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return f})),e.d(t,"d",(function(){return l})),e.d(t,"g",(function(){return d})),e.d(t,"h",(function(){return p})),e.d(t,"f",(function(){return m}));var r=e(0),o=e(1),i=function(n){return 0===n?0:n/Math.abs(n)},u=function(n,t){return"x"===t?n.layout.width:n.layout.height},c=function(n,t){return n.layout[t]+u(n,t)};function a(n,t,e,o){void 0===o&&(o=.1);var i=r.get(n,e),u=r.get(t,e);return Math.abs(i-u)<=o*r.min([i,u])}function f(n,t,e){return n===t||r.size(n)===r.size(t)&&!s(n,e)&&!s(t,e)&&r.every(n,(function(n,o){var i=t[o];return n.componentType===i.componentType&&function(n,t,e,o){void 0===o&&(o=.1);var i=r.get(n,["layout",e]),c=r.get(t,["layout",e]);return Math.abs(i-c)<=o*r.min([u(n,e),u(t,e)])}(n,i,e)&&("text"===n.conversionData.category?a(n,i,["conversionData","averageNormalizedFontSize"]):a(n,i,["layout","height"])&&a(n,i,["layout","width"]))}))}function s(n,t){var e=r.findIndex(n,(function(e,o){if(0===o)return!1;var i=c(n[o-1],t),a=e.layout[t]-i;return a<0||a>r.min([u(n[o-1],t),u(e,t)])}));return-1!==e&&e!==n.length-1}function l(n){var t=o.getChildren(n);return r.map(n.conversionData.componentsOrder,(function(n){return r.find(t,{id:n})}))}var d=function(n){return o.isRescaleVirtualGroup(n)&&"reorder"!==n.conversionData.rescaleMethod||n.conversionData.structuralContainer};function p(n,t){var e=r.map(o.getChildren(n),"id");return r.sortBy(t,(function(n){return e.indexOf(n.id)}))}function m(n){var t=r.pick(n.conversionData.mobileHints,["recommendedWidth","recommendedHeight","recommendedScale","recommendedOrder"]);return!r.isEmpty(t)}},function(n,e){n.exports=t},function(n,t,e){"use strict";e.d(t,"a",(function(){return h})),e.d(t,"b",(function(){return T})),e.d(t,"c",(function(){return R}));var r=e(0),o=e(3),i=e(4),u=function(){for(var n=0,t=0,e=arguments.length;t<e;t++)n+=arguments[t].length;var r=Array(n),o=0;for(t=0;t<e;t++)for(var i=arguments[t],u=0,c=i.length;u<c;u++,o++)r[o]=i[u];return r},c="start",a="end",f=1,s=1.25;function l(n,t){return r.transform(n,(function(n,e,r){var o=t(r);return n[o]=n[o]||{comps:[],distanceToPreviousFragment:e.distanceToPreviousFragment},n[o].comps=u(n[o].comps,e.comps),n}),[])}var d={singleCompRow:function(n,t,e){if("x"===e)return null;var i=r.findIndex(n,(function(n){return 1===r.size(n.comps)}));if(-1===i)return null;var u=l(n,(function(n){return Object(o.e)(n-i)+Object(o.e)(i)}));return{type:"singleCompRow",fragments:u,fragmentsEvents:_(t,u)}},verticalDivider:function(n,t,e){if(r.size(n)<3||r.every(n,(function(n){return 1===r.size(n.comps)}))||"y"===e)return null;var i=function(n,t){var e=r(t.y).partition({eventType:c}).map((function(n){return r.map(n,"coordinate")})).value(),i=r.max(e[0]),u=r.min(e[1]);return r.findIndex(n,(function(n){var t=n.comps[0];return 1===n.comps.length&&t.conversionData.keepIfVerticalDivider&&t.layout.y<=u&&Object(o.b)(t,"y")>=i}))}(n,t);if(-1===i)return null;r.set(n[i].comps[0],["conversionData","isVerticalDivider"],!0);var u=l(n,(function(n){return Object(o.e)(n-i)+Object(o.e)(i)}));return{type:"verticalDivider",fragments:u,fragmentsEvents:_(t,u)}},mirrorPattern:function(n,t,e){if(r.size(n)<2)return null;var i=_(t,n),u=m(e),c=r.map(i,(function(n){return p(n[u])})),a=r.every(c,(function(n){return Object(o.a)(n,c[0],u)}));return a&&a?y(r.flatten(c),t,{type:"mirrorPattern"}):null},chessPattern:function(n,t,e){if("y"!==e||r.size(n)<2||!r.every(n,(function(n){return 2===r.size(n.comps)})))return null;var o=_(t,n),i=r.map(o,(function(n){return p(n.x)})),u=r.flatMap(i,(function(n,t){return v(t)?n:r.reverse(n)})),c=u[0].conversionData.category,a="text"===c?"photo":"text";return r.every(u,(function(n,t){return n.conversionData.category===(v(t)?c:a)}))?y(u,t,{type:"chessPattern"}):null}},p=function(n){return r(n).map("compRef").uniq().value()},m=function(n){return"x"===n?"y":"x"},v=function(n){return n%2==0};function y(n,t,e){return r.assign(e,{fragments:[{comps:n,distanceToPreviousFragment:-1}],fragmentsEvents:[t]})}function g(n,t){var e=r.findLastIndex(n,(function(n){if(n.coordinate===t.coordinate){if(n.eventType===c&&t.eventType===c)return n.size>t.size;if(n.eventType===a&&t.eventType===a)return n.size<t.size;if(n.eventType===c&&t.eventType===a)return n.compRef===t.compRef;if(n.eventType===a&&t.eventType===c)return n.compRef!==t.compRef}return n.coordinate<t.coordinate}));return n.splice(e+1,0,t),n}function h(n,t){var e=r.transform(n,(function(n,e){var r=e.layout[t]||0,i=Object(o.b)(e,t)||r,u=Object(o.c)(e,t)||0;return g(n,{eventType:c,compRef:e,coordinate:r,size:u}),g(n,{eventType:a,compRef:e,coordinate:i,size:u}),n}),[]);return r.map(e,(function(n){return r.omit(n,"size")}))}function T(n){var t=[],e=[];return r.forEach(n,(function(n){var o=r.last(e);if(n.eventType===c){if(r.isEmpty(t)){var i={events:[n],distanceToPreviousFragment:o?n.coordinate-r.last(o.events).coordinate:-1};e.push(i)}else o.events.push(n);t.push(n)}else r.remove(t,{compRef:n.compRef}),o.events.push(n)})),r.map(e,(function(n){return{comps:p(n.events),distanceToPreviousFragment:n.distanceToPreviousFragment}}))}function E(n,t,e){var o=r.maxBy(n,"distanceToPreviousFragment"),i=r.findIndex(n,o),u=l(n,(function(n){return n<i?0:1})),c=[n[i-1],o],a=r.filter(t[m(e)],(function(n){return r.some(c,(function(t){return r.includes(t.comps,n.compRef)}))})),f={fragmentsEvents:_(t,u),fragments:u},s=x(c,a,e);return r.assign(f,{maxCompsDistance:s})}function x(n,t,e){var i=function(n,t){return r(n).map((function(n,e){return e?r.map(n,(function(n){return r.defaults({closestPoint:n.compRef.layout[t]},n)})):r.map(n,(function(n){return r.defaults({closestPoint:Object(o.b)(n.compRef,t)},n)}))})).map((function(n,t){return r.reduce(n,(function(n,e){var o=r.last(n);return o&&o.eventType!==a?o.compRef===e.compRef?u(n,[e]):((t&&e.closestPoint<o.closestPoint||!t&&e.closestPoint>o.closestPoint)&&n.splice(n.length-1,1,e),n):n.concat(e.eventType===c?[e]:[])}),[])})).value()}(r.partition(t,(function(t){return r.includes(n[0].comps,t.compRef)})),e),f=[0,0],s=[[],[]];for(var l=-1/0;f[0]<i[0].length||f[1]<i[1].length;){var d=f[0]===i[0].length||f[1]===i[1].length?f[0]===i[0].length?1:0:i[0][f[0]].coordinate<=i[1][f[1]].coordinate?0:1,p=i[d][f[d]++];if(p.eventType!==a){s[d].push(p);var m=[r.maxBy(s[0],"closestPoint"),r.minBy(s[1],"closestPoint")],v=r.get(m,[1,"closestPoint"])-r.get(m,[0,"closestPoint"]);!r.isNaN(v)&&v>l&&(l=v)}else r.remove(s[d],{compRef:p.compRef})}return l}function D(n,t){return r.transform(n,(function(n,e){var o=r.findIndex(t,(function(n){return r.includes(n.comps,e.compRef)}));return n[o]=u(n[o]||[],[e]),n}),[])}function _(n,t){var e=D(n.x,t),o=D(n.y,t);return r.map(r.keys(t),(function(n){return r.assign({},{x:e[n],y:o[n]})}))}function O(n,t,e){return function(n,t,e){var o=null;return r.forEach(d,(function(r,i){if(!e[i])return!0;var u=r(t.y,n,"y"),c=r(t.x,n,"x");return null===(o=u&&c?null:u||c)})),o}(n,t,e)||function(n,t){var e=r.size(t.x)>1?E(t.x,n,"x"):null,o=r.size(t.y)>1?E(t.y,n,"y"):null;if(e&&o){var i=f*e.maxCompsDistance>s*o.maxCompsDistance?e:o;return r.pick(i,["fragments","fragmentsEvents"])}return e||o}(n,t)}function C(n,t,e,i){if(r.size(t)<2)return t||[];var u=r.mapValues(e,T);if(1===r.size(u.x)&&1===r.size(u.y))return i.detectSemanticGroups?i.useOverlapRules?function(n,t){t=Object(o.h)(n,t);var e="overlayGroup_"+(t=r.sortBy(t,"layout.y"))[0].id;return r.forEach(t,(function(n){return r.set(n,["conversionData","overlayGroupId"],e)})),t}(n,t):function(n,t,e){var o=function(n){return r.some(n,"conversionData.originalLayout")};if(o(t)||r.some(t,(function(n){return o(n)})))return P(t),t;I(t);var i=h(t,"y"),u=h(t,"x"),c=C(n,t,{y:i,x:u},e);return P(c),c}(n,t,i):Object(o.h)(n,t);var c=O(e,u,{mirrorPattern:i.detectSemanticGroups,chessPattern:i.detectSemanticGroups,verticalDivider:!0,singleCompRow:!0});return 1===r.size(c.fragments)?c.fragments[0].comps:r.flatMap(c.fragments,(function(t,e){return C(n,t.comps,c.fragmentsEvents[e],i)}))}function I(n){r.forEach(n,(function(n){var t=n.layout,e=r.assign(i.objectUtils.cloneDeep(t),{height:.9*t.height,width:.9*t.width});n.layout=e,r.set(n,["conversionData","originalLayout"],t)}))}function P(n,t){void 0===t&&(t=!0),r.forEach(n,(function(n){var t=r.get(n,["conversionData","originalLayout"]);t&&(n.layout=i.objectUtils.cloneDeep(t),delete n.conversionData.originalLayout)})),t&&r.forEach(n,(function(n){return P(n.components,!1)}))}function R(n,t,e){var o=C(n,t,{y:h(t,"y"),x:h(t,"x")},e);n.conversionData.componentsOrder=r.map(o,"id")}o.h},,function(n,t,e){"use strict";e.r(t),e.d(t,"translateComponents",(function(){return r.translateComps})),e.d(t,"getSnugLayout",(function(){return r.getSnugLayout})),e.d(t,"splitToFragments",(function(){return u})),e.d(t,"sortSiblings",(function(){return c})),e.d(t,"getComponentsOrder",(function(){return a}));var r=e(1),o=e(0),i=e(5);function u(n,t){var e=i.a(n,t);return i.b(e)}function c(n){if(o.size(n)<=1)return n;var t=o.map(u(n,"y"),"comps");return o.reduce(t,(function(t,e){if(1===o.size(e))return t.concat(e);var r=o.map(u(e,"x"),"comps"),i=o.flatMap(r,(function(t){return 1===o.size(t)?t:o.sortBy(t,o.findIndex.bind(null,n))}));return t.concat(i)}),[])}function a(n){var t=r.getChildren(n);if(!t)return{};var e=c(t),i=o.set({},n.id,o.map(e,"id")),u=o.map(t,a);return o.assign.apply(o,[i].concat(u))}}])}));
//# sourceMappingURL=mobileLayoutUtils.min.js.map