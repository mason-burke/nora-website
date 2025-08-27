function JT(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in n)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(n,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function H_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xd={exports:{}},$a={},Dd={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hg;function ZT(){if(Hg)return Pe;Hg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),h=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),T=Symbol.iterator;function I(V){return V===null||typeof V!="object"?null:(V=T&&V[T]||V["@@iterator"],typeof V=="function"?V:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z=Object.assign,$={};function D(V,q,fe){this.props=V,this.context=q,this.refs=$,this.updater=fe||F}D.prototype.isReactComponent={},D.prototype.setState=function(V,q){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,q,"setState")},D.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Z(){}Z.prototype=D.prototype;function X(V,q,fe){this.props=V,this.context=q,this.refs=$,this.updater=fe||F}var ee=X.prototype=new Z;ee.constructor=X,z(ee,D.prototype),ee.isPureReactComponent=!0;var ie=Array.isArray,Ie=Object.prototype.hasOwnProperty,Se={current:null},x={key:!0,ref:!0,__self:!0,__source:!0};function R(V,q,fe){var Re,Ce={},De=null,Me=null;if(q!=null)for(Re in q.ref!==void 0&&(Me=q.ref),q.key!==void 0&&(De=""+q.key),q)Ie.call(q,Re)&&!x.hasOwnProperty(Re)&&(Ce[Re]=q[Re]);var Ue=arguments.length-2;if(Ue===1)Ce.children=fe;else if(1<Ue){for(var $e=Array(Ue),Tt=0;Tt<Ue;Tt++)$e[Tt]=arguments[Tt+2];Ce.children=$e}if(V&&V.defaultProps)for(Re in Ue=V.defaultProps,Ue)Ce[Re]===void 0&&(Ce[Re]=Ue[Re]);return{$$typeof:n,type:V,key:De,ref:Me,props:Ce,_owner:Se.current}}function C(V,q){return{$$typeof:n,type:V.type,key:q,ref:V.ref,props:V.props,_owner:V._owner}}function k(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function O(V){var q={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(fe){return q[fe]})}var L=/\/+/g;function A(V,q){return typeof V=="object"&&V!==null&&V.key!=null?O(""+V.key):q.toString(36)}function st(V,q,fe,Re,Ce){var De=typeof V;(De==="undefined"||De==="boolean")&&(V=null);var Me=!1;if(V===null)Me=!0;else switch(De){case"string":case"number":Me=!0;break;case"object":switch(V.$$typeof){case n:case e:Me=!0}}if(Me)return Me=V,Ce=Ce(Me),V=Re===""?"."+A(Me,0):Re,ie(Ce)?(fe="",V!=null&&(fe=V.replace(L,"$&/")+"/"),st(Ce,q,fe,"",function(Tt){return Tt})):Ce!=null&&(k(Ce)&&(Ce=C(Ce,fe+(!Ce.key||Me&&Me.key===Ce.key?"":(""+Ce.key).replace(L,"$&/")+"/")+V)),q.push(Ce)),1;if(Me=0,Re=Re===""?".":Re+":",ie(V))for(var Ue=0;Ue<V.length;Ue++){De=V[Ue];var $e=Re+A(De,Ue);Me+=st(De,q,fe,$e,Ce)}else if($e=I(V),typeof $e=="function")for(V=$e.call(V),Ue=0;!(De=V.next()).done;)De=De.value,$e=Re+A(De,Ue++),Me+=st(De,q,fe,$e,Ce);else if(De==="object")throw q=String(V),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return Me}function Lt(V,q,fe){if(V==null)return V;var Re=[],Ce=0;return st(V,Re,"","",function(De){return q.call(fe,De,Ce++)}),Re}function bt(V){if(V._status===-1){var q=V._result;q=q(),q.then(function(fe){(V._status===0||V._status===-1)&&(V._status=1,V._result=fe)},function(fe){(V._status===0||V._status===-1)&&(V._status=2,V._result=fe)}),V._status===-1&&(V._status=0,V._result=q)}if(V._status===1)return V._result.default;throw V._result}var Be={current:null},re={transition:null},me={ReactCurrentDispatcher:Be,ReactCurrentBatchConfig:re,ReactCurrentOwner:Se};function le(){throw Error("act(...) is not supported in production builds of React.")}return Pe.Children={map:Lt,forEach:function(V,q,fe){Lt(V,function(){q.apply(this,arguments)},fe)},count:function(V){var q=0;return Lt(V,function(){q++}),q},toArray:function(V){return Lt(V,function(q){return q})||[]},only:function(V){if(!k(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Pe.Component=D,Pe.Fragment=t,Pe.Profiler=o,Pe.PureComponent=X,Pe.StrictMode=i,Pe.Suspense=m,Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=me,Pe.act=le,Pe.cloneElement=function(V,q,fe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var Re=z({},V.props),Ce=V.key,De=V.ref,Me=V._owner;if(q!=null){if(q.ref!==void 0&&(De=q.ref,Me=Se.current),q.key!==void 0&&(Ce=""+q.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for($e in q)Ie.call(q,$e)&&!x.hasOwnProperty($e)&&(Re[$e]=q[$e]===void 0&&Ue!==void 0?Ue[$e]:q[$e])}var $e=arguments.length-2;if($e===1)Re.children=fe;else if(1<$e){Ue=Array($e);for(var Tt=0;Tt<$e;Tt++)Ue[Tt]=arguments[Tt+2];Re.children=Ue}return{$$typeof:n,type:V.type,key:Ce,ref:De,props:Re,_owner:Me}},Pe.createContext=function(V){return V={$$typeof:h,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:l,_context:V},V.Consumer=V},Pe.createElement=R,Pe.createFactory=function(V){var q=R.bind(null,V);return q.type=V,q},Pe.createRef=function(){return{current:null}},Pe.forwardRef=function(V){return{$$typeof:f,render:V}},Pe.isValidElement=k,Pe.lazy=function(V){return{$$typeof:E,_payload:{_status:-1,_result:V},_init:bt}},Pe.memo=function(V,q){return{$$typeof:y,type:V,compare:q===void 0?null:q}},Pe.startTransition=function(V){var q=re.transition;re.transition={};try{V()}finally{re.transition=q}},Pe.unstable_act=le,Pe.useCallback=function(V,q){return Be.current.useCallback(V,q)},Pe.useContext=function(V){return Be.current.useContext(V)},Pe.useDebugValue=function(){},Pe.useDeferredValue=function(V){return Be.current.useDeferredValue(V)},Pe.useEffect=function(V,q){return Be.current.useEffect(V,q)},Pe.useId=function(){return Be.current.useId()},Pe.useImperativeHandle=function(V,q,fe){return Be.current.useImperativeHandle(V,q,fe)},Pe.useInsertionEffect=function(V,q){return Be.current.useInsertionEffect(V,q)},Pe.useLayoutEffect=function(V,q){return Be.current.useLayoutEffect(V,q)},Pe.useMemo=function(V,q){return Be.current.useMemo(V,q)},Pe.useReducer=function(V,q,fe){return Be.current.useReducer(V,q,fe)},Pe.useRef=function(V){return Be.current.useRef(V)},Pe.useState=function(V){return Be.current.useState(V)},Pe.useSyncExternalStore=function(V,q,fe){return Be.current.useSyncExternalStore(V,q,fe)},Pe.useTransition=function(){return Be.current.useTransition()},Pe.version="18.3.1",Pe}var Wg;function Pf(){return Wg||(Wg=1,Dd.exports=ZT()),Dd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qg;function e0(){if(qg)return $a;qg=1;var n=Pf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(f,m,y){var E,T={},I=null,F=null;y!==void 0&&(I=""+y),m.key!==void 0&&(I=""+m.key),m.ref!==void 0&&(F=m.ref);for(E in m)i.call(m,E)&&!l.hasOwnProperty(E)&&(T[E]=m[E]);if(f&&f.defaultProps)for(E in m=f.defaultProps,m)T[E]===void 0&&(T[E]=m[E]);return{$$typeof:e,type:f,key:I,ref:F,props:T,_owner:o.current}}return $a.Fragment=t,$a.jsx=h,$a.jsxs=h,$a}var Kg;function t0(){return Kg||(Kg=1,xd.exports=e0()),xd.exports}var Q=t0(),qu={},Od={exports:{}},sn={},Vd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function n0(){return Gg||(Gg=1,function(n){function e(re,me){var le=re.length;re.push(me);e:for(;0<le;){var V=le-1>>>1,q=re[V];if(0<o(q,me))re[V]=me,re[le]=q,le=V;else break e}}function t(re){return re.length===0?null:re[0]}function i(re){if(re.length===0)return null;var me=re[0],le=re.pop();if(le!==me){re[0]=le;e:for(var V=0,q=re.length,fe=q>>>1;V<fe;){var Re=2*(V+1)-1,Ce=re[Re],De=Re+1,Me=re[De];if(0>o(Ce,le))De<q&&0>o(Me,Ce)?(re[V]=Me,re[De]=le,V=De):(re[V]=Ce,re[Re]=le,V=Re);else if(De<q&&0>o(Me,le))re[V]=Me,re[De]=le,V=De;else break e}}return me}function o(re,me){var le=re.sortIndex-me.sortIndex;return le!==0?le:re.id-me.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var h=Date,f=h.now();n.unstable_now=function(){return h.now()-f}}var m=[],y=[],E=1,T=null,I=3,F=!1,z=!1,$=!1,D=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ee(re){for(var me=t(y);me!==null;){if(me.callback===null)i(y);else if(me.startTime<=re)i(y),me.sortIndex=me.expirationTime,e(m,me);else break;me=t(y)}}function ie(re){if($=!1,ee(re),!z)if(t(m)!==null)z=!0,bt(Ie);else{var me=t(y);me!==null&&Be(ie,me.startTime-re)}}function Ie(re,me){z=!1,$&&($=!1,Z(R),R=-1),F=!0;var le=I;try{for(ee(me),T=t(m);T!==null&&(!(T.expirationTime>me)||re&&!O());){var V=T.callback;if(typeof V=="function"){T.callback=null,I=T.priorityLevel;var q=V(T.expirationTime<=me);me=n.unstable_now(),typeof q=="function"?T.callback=q:T===t(m)&&i(m),ee(me)}else i(m);T=t(m)}if(T!==null)var fe=!0;else{var Re=t(y);Re!==null&&Be(ie,Re.startTime-me),fe=!1}return fe}finally{T=null,I=le,F=!1}}var Se=!1,x=null,R=-1,C=5,k=-1;function O(){return!(n.unstable_now()-k<C)}function L(){if(x!==null){var re=n.unstable_now();k=re;var me=!0;try{me=x(!0,re)}finally{me?A():(Se=!1,x=null)}}else Se=!1}var A;if(typeof X=="function")A=function(){X(L)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,Lt=st.port2;st.port1.onmessage=L,A=function(){Lt.postMessage(null)}}else A=function(){D(L,0)};function bt(re){x=re,Se||(Se=!0,A())}function Be(re,me){R=D(function(){re(n.unstable_now())},me)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(re){re.callback=null},n.unstable_continueExecution=function(){z||F||(z=!0,bt(Ie))},n.unstable_forceFrameRate=function(re){0>re||125<re?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<re?Math.floor(1e3/re):5},n.unstable_getCurrentPriorityLevel=function(){return I},n.unstable_getFirstCallbackNode=function(){return t(m)},n.unstable_next=function(re){switch(I){case 1:case 2:case 3:var me=3;break;default:me=I}var le=I;I=me;try{return re()}finally{I=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(re,me){switch(re){case 1:case 2:case 3:case 4:case 5:break;default:re=3}var le=I;I=re;try{return me()}finally{I=le}},n.unstable_scheduleCallback=function(re,me,le){var V=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?V+le:V):le=V,re){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=le+q,re={id:E++,callback:me,priorityLevel:re,startTime:le,expirationTime:q,sortIndex:-1},le>V?(re.sortIndex=le,e(y,re),t(m)===null&&re===t(y)&&($?(Z(R),R=-1):$=!0,Be(ie,le-V))):(re.sortIndex=q,e(m,re),z||F||(z=!0,bt(Ie))),re},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(re){var me=I;return function(){var le=I;I=me;try{return re.apply(this,arguments)}finally{I=le}}}}(Ld)),Ld}var Qg;function r0(){return Qg||(Qg=1,Vd.exports=n0()),Vd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function i0(){if(Xg)return sn;Xg=1;var n=Pf(),e=r0();function t(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){h(r,s),h(r+"Capture",s)}function h(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},T={};function I(r){return m.call(T,r)?!0:m.call(E,r)?!1:y.test(r)?T[r]=!0:(E[r]=!0,!1)}function F(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function z(r,s,a,c){if(s===null||typeof s>"u"||F(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function $(r,s,a,c,d,g,v){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=g,this.removeEmptyString=v}var D={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){D[r]=new $(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];D[s]=new $(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){D[r]=new $(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){D[r]=new $(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){D[r]=new $(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){D[r]=new $(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){D[r]=new $(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){D[r]=new $(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){D[r]=new $(r,5,!1,r.toLowerCase(),null,!1,!1)});var Z=/[\-:]([a-z])/g;function X(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(Z,X);D[s]=new $(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(Z,X);D[s]=new $(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(Z,X);D[s]=new $(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){D[r]=new $(r,1,!1,r.toLowerCase(),null,!1,!1)}),D.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){D[r]=new $(r,1,!1,r.toLowerCase(),null,!0,!0)});function ee(r,s,a,c){var d=D.hasOwnProperty(s)?D[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(z(s,a,d,c)&&(a=null),c||d===null?I(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var ie=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ie=Symbol.for("react.element"),Se=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),st=Symbol.for("react.suspense_list"),Lt=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),Be=Symbol.for("react.offscreen"),re=Symbol.iterator;function me(r){return r===null||typeof r!="object"?null:(r=re&&r[re]||r["@@iterator"],typeof r=="function"?r:null)}var le=Object.assign,V;function q(r){if(V===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);V=s&&s[1]||""}return`
`+V+r}var fe=!1;function Re(r,s){if(!r||fe)return"";fe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(j){var c=j}Reflect.construct(r,[],s)}else{try{s.call()}catch(j){c=j}r.call(s.prototype)}else{try{throw Error()}catch(j){c=j}r()}}catch(j){if(j&&c&&typeof j.stack=="string"){for(var d=j.stack.split(`
`),g=c.stack.split(`
`),v=d.length-1,S=g.length-1;1<=v&&0<=S&&d[v]!==g[S];)S--;for(;1<=v&&0<=S;v--,S--)if(d[v]!==g[S]){if(v!==1||S!==1)do if(v--,S--,0>S||d[v]!==g[S]){var P=`
`+d[v].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),P}while(1<=v&&0<=S);break}}}finally{fe=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?q(r):""}function Ce(r){switch(r.tag){case 5:return q(r.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return r=Re(r.type,!1),r;case 11:return r=Re(r.type.render,!1),r;case 1:return r=Re(r.type,!0),r;default:return""}}function De(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case x:return"Fragment";case Se:return"Portal";case C:return"Profiler";case R:return"StrictMode";case A:return"Suspense";case st:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case O:return(r.displayName||"Context")+".Consumer";case k:return(r._context.displayName||"Context")+".Provider";case L:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Lt:return s=r.displayName||null,s!==null?s:De(r.type)||"Memo";case bt:s=r._payload,r=r._init;try{return De(r(s))}catch{}}return null}function Me(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return De(s);case 8:return s===R?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Ue(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function $e(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=$e(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,g=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(v){c=""+v,g.call(this,v)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function gr(r){r._valueTracker||(r._valueTracker=Tt(r))}function Ns(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=$e(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Br(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function ji(r,s){var a=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function xs(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=Ue(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Qo(r,s){s=s.checked,s!=null&&ee(r,"checked",s,!1)}function Xo(r,s){Qo(r,s);var a=Ue(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Ds(r,s.type,a):s.hasOwnProperty("defaultValue")&&Ds(r,s.type,Ue(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function xl(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Ds(r,s,a){(s!=="number"||Br(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var yr=Array.isArray;function _r(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+Ue(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Yo(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Os(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(yr(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:Ue(a)}}function Vs(r,s){var a=Ue(s.value),c=Ue(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function Jo(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function gt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yt(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?gt(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var vr,Zo=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(vr=vr||document.createElement("div"),vr.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=vr.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function zr(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Bi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zi=["Webkit","ms","Moz","O"];Object.keys(Bi).forEach(function(r){zi.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Bi[s]=Bi[r]})});function ea(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Bi.hasOwnProperty(r)&&Bi[r]?(""+s).trim():s+"px"}function ta(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=ea(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var na=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ra(r,s){if(s){if(na[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function ia(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $i=null;function Ls(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var bs=null,gn=null,Kn=null;function Ms(r){if(r=Pa(r)){if(typeof bs!="function")throw Error(t(280));var s=r.stateNode;s&&(s=au(s),bs(r.stateNode,r.type,s))}}function Gn(r){gn?Kn?Kn.push(r):Kn=[r]:gn=r}function sa(){if(gn){var r=gn,s=Kn;if(Kn=gn=null,Ms(r),s)for(r=0;r<s.length;r++)Ms(s[r])}}function Hi(r,s){return r(s)}function oa(){}var Er=!1;function aa(r,s,a){if(Er)return r(s,a);Er=!0;try{return Hi(r,s,a)}finally{Er=!1,(gn!==null||Kn!==null)&&(oa(),sa())}}function ot(r,s){var a=r.stateNode;if(a===null)return null;var c=au(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Us=!1;if(f)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){Us=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{Us=!1}function Wi(r,s,a,c,d,g,v,S,P){var j=Array.prototype.slice.call(arguments,3);try{s.apply(a,j)}catch(G){this.onError(G)}}var qi=!1,Fs=null,kn=!1,la=null,sh={onError:function(r){qi=!0,Fs=r}};function js(r,s,a,c,d,g,v,S,P){qi=!1,Fs=null,Wi.apply(sh,arguments)}function Dl(r,s,a,c,d,g,v,S,P){if(js.apply(this,arguments),qi){if(qi){var j=Fs;qi=!1,Fs=null}else throw Error(t(198));kn||(kn=!0,la=j)}}function Nn(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function Ki(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function xn(r){if(Nn(r)!==r)throw Error(t(188))}function Ol(r){var s=r.alternate;if(!s){if(s=Nn(r),s===null)throw Error(t(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var g=d.alternate;if(g===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===a)return xn(d),r;if(g===c)return xn(d),s;g=g.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=g;else{for(var v=!1,S=d.child;S;){if(S===a){v=!0,a=d,c=g;break}if(S===c){v=!0,c=d,a=g;break}S=S.sibling}if(!v){for(S=g.child;S;){if(S===a){v=!0,a=g,c=d;break}if(S===c){v=!0,c=g,a=d;break}S=S.sibling}if(!v)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?r:s}function ua(r){return r=Ol(r),r!==null?Bs(r):null}function Bs(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=Bs(r);if(s!==null)return s;r=r.sibling}return null}var zs=e.unstable_scheduleCallback,ca=e.unstable_cancelCallback,Vl=e.unstable_shouldYield,oh=e.unstable_requestPaint,He=e.unstable_now,Ll=e.unstable_getCurrentPriorityLevel,Gi=e.unstable_ImmediatePriority,$r=e.unstable_UserBlockingPriority,yn=e.unstable_NormalPriority,ha=e.unstable_LowPriority,bl=e.unstable_IdlePriority,Qi=null,ln=null;function Ml(r){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Qi,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:Fl,da=Math.log,Ul=Math.LN2;function Fl(r){return r>>>=0,r===0?32:31-(da(r)/Ul|0)|0}var $s=64,Hs=4194304;function Hr(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Xi(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,g=r.pingedLanes,v=a&268435455;if(v!==0){var S=v&~d;S!==0?c=Hr(S):(g&=v,g!==0&&(c=Hr(g)))}else v=a&~d,v!==0?c=Hr(v):g!==0&&(c=Hr(g));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,g=s&-s,d>=g||d===16&&(g&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Wt(s),d=1<<a,c|=r[a],s&=~d;return c}function ah(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes;0<g;){var v=31-Wt(g),S=1<<v,P=d[v];P===-1?((S&a)===0||(S&c)!==0)&&(d[v]=ah(S,s)):P<=s&&(r.expiredLanes|=S),g&=~S}}function un(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Yi(){var r=$s;return $s<<=1,($s&4194240)===0&&($s=64),r}function Wr(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function qr(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function ze(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),g=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~g}}function Kr(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Wt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var xe=0;function Gr(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var jl,Ws,Bl,zl,$l,fa=!1,Qn=[],Pt=null,Dn=null,On=null,Qr=new Map,_n=new Map,Xn=[],lh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hl(r,s){switch(r){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Dn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Qr.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(s.pointerId)}}function Yt(r,s,a,c,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Pa(s),s!==null&&Ws(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function uh(r,s,a,c,d){switch(s){case"focusin":return Pt=Yt(Pt,r,s,a,c,d),!0;case"dragenter":return Dn=Yt(Dn,r,s,a,c,d),!0;case"mouseover":return On=Yt(On,r,s,a,c,d),!0;case"pointerover":var g=d.pointerId;return Qr.set(g,Yt(Qr.get(g)||null,r,s,a,c,d)),!0;case"gotpointercapture":return g=d.pointerId,_n.set(g,Yt(_n.get(g)||null,r,s,a,c,d)),!0}return!1}function Wl(r){var s=ns(r.target);if(s!==null){var a=Nn(s);if(a!==null){if(s=a.tag,s===13){if(s=Ki(a),s!==null){r.blockedOn=s,$l(r.priority,function(){Bl(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Tr(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=qs(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);$i=c,a.target.dispatchEvent(c),$i=null}else return s=Pa(a),s!==null&&Ws(s),r.blockedOn=a,!1;s.shift()}return!0}function Ji(r,s,a){Tr(r)&&a.delete(s)}function ql(){fa=!1,Pt!==null&&Tr(Pt)&&(Pt=null),Dn!==null&&Tr(Dn)&&(Dn=null),On!==null&&Tr(On)&&(On=null),Qr.forEach(Ji),_n.forEach(Ji)}function Vn(r,s){r.blockedOn===s&&(r.blockedOn=null,fa||(fa=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ql)))}function Ln(r){function s(d){return Vn(d,r)}if(0<Qn.length){Vn(Qn[0],r);for(var a=1;a<Qn.length;a++){var c=Qn[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Pt!==null&&Vn(Pt,r),Dn!==null&&Vn(Dn,r),On!==null&&Vn(On,r),Qr.forEach(s),_n.forEach(s),a=0;a<Xn.length;a++)c=Xn[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Xn.length&&(a=Xn[0],a.blockedOn===null);)Wl(a),a.blockedOn===null&&Xn.shift()}var Ir=ie.ReactCurrentBatchConfig,Xr=!0;function Xe(r,s,a,c){var d=xe,g=Ir.transition;Ir.transition=null;try{xe=1,pa(r,s,a,c)}finally{xe=d,Ir.transition=g}}function ch(r,s,a,c){var d=xe,g=Ir.transition;Ir.transition=null;try{xe=4,pa(r,s,a,c)}finally{xe=d,Ir.transition=g}}function pa(r,s,a,c){if(Xr){var d=qs(r,s,a,c);if(d===null)wh(r,s,c,Zi,a),Hl(r,c);else if(uh(d,r,s,a,c))c.stopPropagation();else if(Hl(r,c),s&4&&-1<lh.indexOf(r)){for(;d!==null;){var g=Pa(d);if(g!==null&&jl(g),g=qs(r,s,a,c),g===null&&wh(r,s,c,Zi,a),g===d)break;d=g}d!==null&&c.stopPropagation()}else wh(r,s,c,null,a)}}var Zi=null;function qs(r,s,a,c){if(Zi=null,r=Ls(c),r=ns(r),r!==null)if(s=Nn(r),s===null)r=null;else if(a=s.tag,a===13){if(r=Ki(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return Zi=r,null}function ma(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ll()){case Gi:return 1;case $r:return 4;case yn:case ha:return 16;case bl:return 536870912;default:return 16}default:return 16}}var cn=null,Ks=null,Jt=null;function ga(){if(Jt)return Jt;var r,s=Ks,a=s.length,c,d="value"in cn?cn.value:cn.textContent,g=d.length;for(r=0;r<a&&s[r]===d[r];r++);var v=a-r;for(c=1;c<=v&&s[a-c]===d[g-c];c++);return Jt=d.slice(r,1<c?1-c:void 0)}function Gs(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Yn(){return!0}function ya(){return!1}function kt(r){function s(a,c,d,g,v){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=g,this.target=v,this.currentTarget=null;for(var S in r)r.hasOwnProperty(S)&&(a=r[S],this[S]=a?a(g):g[S]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Yn:ya,this.isPropagationStopped=ya,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yn)},persist:function(){},isPersistent:Yn}),s}var bn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qs=kt(bn),Jn=le({},bn,{view:0,detail:0}),hh=kt(Jn),Xs,Sr,Yr,es=le({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zn,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Yr&&(Yr&&r.type==="mousemove"?(Xs=r.screenX-Yr.screenX,Sr=r.screenY-Yr.screenY):Sr=Xs=0,Yr=r),Xs)},movementY:function(r){return"movementY"in r?r.movementY:Sr}}),Ys=kt(es),_a=le({},es,{dataTransfer:0}),Kl=kt(_a),Js=le({},Jn,{relatedTarget:0}),Zs=kt(Js),Gl=le({},bn,{animationName:0,elapsedTime:0,pseudoElement:0}),Rr=kt(Gl),Ql=le({},bn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Xl=kt(Ql),Yl=le({},bn,{data:0}),va=kt(Yl),eo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jl={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zl(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=Jl[r])?!!s[r]:!1}function Zn(){return Zl}var u=le({},Jn,{key:function(r){if(r.key){var s=eo[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Gs(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?qt[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zn,charCode:function(r){return r.type==="keypress"?Gs(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Gs(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),p=kt(u),_=le({},es,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=kt(_),b=le({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zn}),B=kt(b),ne=le({},bn,{propertyName:0,elapsedTime:0,pseudoElement:0}),je=kt(ne),_t=le({},es,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=kt(_t),It=[9,13,27,32],ct=f&&"CompositionEvent"in window,vn=null;f&&"documentMode"in document&&(vn=document.documentMode);var hn=f&&"TextEvent"in window&&!vn,ts=f&&(!ct||vn&&8<vn&&11>=vn),to=" ",Mp=!1;function Up(r,s){switch(r){case"keyup":return It.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fp(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var no=!1;function Qw(r,s){switch(r){case"compositionend":return Fp(s);case"keypress":return s.which!==32?null:(Mp=!0,to);case"textInput":return r=s.data,r===to&&Mp?null:r;default:return null}}function Xw(r,s){if(no)return r==="compositionend"||!ct&&Up(r,s)?(r=ga(),Jt=Ks=cn=null,no=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return ts&&s.locale!=="ko"?null:s.data;default:return null}}var Yw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jp(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Yw[r.type]:s==="textarea"}function Bp(r,s,a,c){Gn(c),s=iu(s,"onChange"),0<s.length&&(a=new Qs("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var Ea=null,wa=null;function Jw(r){sm(r,0)}function eu(r){var s=ao(r);if(Ns(s))return r}function Zw(r,s){if(r==="change")return s}var zp=!1;if(f){var dh;if(f){var fh="oninput"in document;if(!fh){var $p=document.createElement("div");$p.setAttribute("oninput","return;"),fh=typeof $p.oninput=="function"}dh=fh}else dh=!1;zp=dh&&(!document.documentMode||9<document.documentMode)}function Hp(){Ea&&(Ea.detachEvent("onpropertychange",Wp),wa=Ea=null)}function Wp(r){if(r.propertyName==="value"&&eu(wa)){var s=[];Bp(s,wa,r,Ls(r)),aa(Jw,s)}}function eT(r,s,a){r==="focusin"?(Hp(),Ea=s,wa=a,Ea.attachEvent("onpropertychange",Wp)):r==="focusout"&&Hp()}function tT(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return eu(wa)}function nT(r,s){if(r==="click")return eu(s)}function rT(r,s){if(r==="input"||r==="change")return eu(s)}function iT(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Mn=typeof Object.is=="function"?Object.is:iT;function Ta(r,s){if(Mn(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!m.call(s,d)||!Mn(r[d],s[d]))return!1}return!0}function qp(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Kp(r,s){var a=qp(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qp(a)}}function Gp(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Gp(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Qp(){for(var r=window,s=Br();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Br(r.document)}return s}function ph(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function sT(r){var s=Qp(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Gp(a.ownerDocument.documentElement,a)){if(c!==null&&ph(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,g=Math.min(c.start,d);c=c.end===void 0?g:Math.min(c.end,d),!r.extend&&g>c&&(d=c,c=g,g=d),d=Kp(a,g);var v=Kp(a,c);d&&v&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==v.node||r.focusOffset!==v.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),g>c?(r.addRange(s),r.extend(v.node,v.offset)):(s.setEnd(v.node,v.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var oT=f&&"documentMode"in document&&11>=document.documentMode,ro=null,mh=null,Ia=null,gh=!1;function Xp(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;gh||ro==null||ro!==Br(c)||(c=ro,"selectionStart"in c&&ph(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Ta(Ia,c)||(Ia=c,c=iu(mh,"onSelect"),0<c.length&&(s=new Qs("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ro)))}function tu(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var io={animationend:tu("Animation","AnimationEnd"),animationiteration:tu("Animation","AnimationIteration"),animationstart:tu("Animation","AnimationStart"),transitionend:tu("Transition","TransitionEnd")},yh={},Yp={};f&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function nu(r){if(yh[r])return yh[r];if(!io[r])return r;var s=io[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in Yp)return yh[r]=s[a];return r}var Jp=nu("animationend"),Zp=nu("animationiteration"),em=nu("animationstart"),tm=nu("transitionend"),nm=new Map,rm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jr(r,s){nm.set(r,s),l(s,[r])}for(var _h=0;_h<rm.length;_h++){var vh=rm[_h],aT=vh.toLowerCase(),lT=vh[0].toUpperCase()+vh.slice(1);Jr(aT,"on"+lT)}Jr(Jp,"onAnimationEnd"),Jr(Zp,"onAnimationIteration"),Jr(em,"onAnimationStart"),Jr("dblclick","onDoubleClick"),Jr("focusin","onFocus"),Jr("focusout","onBlur"),Jr(tm,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sa));function im(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,Dl(c,s,void 0,r),r.currentTarget=null}function sm(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var g=void 0;if(s)for(var v=c.length-1;0<=v;v--){var S=c[v],P=S.instance,j=S.currentTarget;if(S=S.listener,P!==g&&d.isPropagationStopped())break e;im(d,S,j),g=P}else for(v=0;v<c.length;v++){if(S=c[v],P=S.instance,j=S.currentTarget,S=S.listener,P!==g&&d.isPropagationStopped())break e;im(d,S,j),g=P}}}if(kn)throw r=la,kn=!1,la=null,r}function Ke(r,s){var a=s[Ch];a===void 0&&(a=s[Ch]=new Set);var c=r+"__bubble";a.has(c)||(om(s,r,2,!1),a.add(c))}function Eh(r,s,a){var c=0;s&&(c|=4),om(a,r,c,s)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Ra(r){if(!r[ru]){r[ru]=!0,i.forEach(function(a){a!=="selectionchange"&&(uT.has(a)||Eh(a,!1,r),Eh(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[ru]||(s[ru]=!0,Eh("selectionchange",!1,s))}}function om(r,s,a,c){switch(ma(s)){case 1:var d=Xe;break;case 4:d=ch;break;default:d=pa}a=d.bind(null,s,a,r),d=void 0,!Us||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function wh(r,s,a,c,d){var g=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var S=c.stateNode.containerInfo;if(S===d||S.nodeType===8&&S.parentNode===d)break;if(v===4)for(v=c.return;v!==null;){var P=v.tag;if((P===3||P===4)&&(P=v.stateNode.containerInfo,P===d||P.nodeType===8&&P.parentNode===d))return;v=v.return}for(;S!==null;){if(v=ns(S),v===null)return;if(P=v.tag,P===5||P===6){c=g=v;continue e}S=S.parentNode}}c=c.return}aa(function(){var j=g,G=Ls(a),Y=[];e:{var K=nm.get(r);if(K!==void 0){var oe=Qs,ce=r;switch(r){case"keypress":if(Gs(a)===0)break e;case"keydown":case"keyup":oe=p;break;case"focusin":ce="focus",oe=Zs;break;case"focusout":ce="blur",oe=Zs;break;case"beforeblur":case"afterblur":oe=Zs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":oe=Ys;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":oe=Kl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":oe=B;break;case Jp:case Zp:case em:oe=Rr;break;case tm:oe=je;break;case"scroll":oe=hh;break;case"wheel":oe=Oe;break;case"copy":case"cut":case"paste":oe=Xl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":oe=w}var he=(s&4)!==0,at=!he&&r==="scroll",M=he?K!==null?K+"Capture":null:K;he=[];for(var N=j,U;N!==null;){U=N;var te=U.stateNode;if(U.tag===5&&te!==null&&(U=te,M!==null&&(te=ot(N,M),te!=null&&he.push(Aa(N,te,U)))),at)break;N=N.return}0<he.length&&(K=new oe(K,ce,null,a,G),Y.push({event:K,listeners:he}))}}if((s&7)===0){e:{if(K=r==="mouseover"||r==="pointerover",oe=r==="mouseout"||r==="pointerout",K&&a!==$i&&(ce=a.relatedTarget||a.fromElement)&&(ns(ce)||ce[Ar]))break e;if((oe||K)&&(K=G.window===G?G:(K=G.ownerDocument)?K.defaultView||K.parentWindow:window,oe?(ce=a.relatedTarget||a.toElement,oe=j,ce=ce?ns(ce):null,ce!==null&&(at=Nn(ce),ce!==at||ce.tag!==5&&ce.tag!==6)&&(ce=null)):(oe=null,ce=j),oe!==ce)){if(he=Ys,te="onMouseLeave",M="onMouseEnter",N="mouse",(r==="pointerout"||r==="pointerover")&&(he=w,te="onPointerLeave",M="onPointerEnter",N="pointer"),at=oe==null?K:ao(oe),U=ce==null?K:ao(ce),K=new he(te,N+"leave",oe,a,G),K.target=at,K.relatedTarget=U,te=null,ns(G)===j&&(he=new he(M,N+"enter",ce,a,G),he.target=U,he.relatedTarget=at,te=he),at=te,oe&&ce)t:{for(he=oe,M=ce,N=0,U=he;U;U=so(U))N++;for(U=0,te=M;te;te=so(te))U++;for(;0<N-U;)he=so(he),N--;for(;0<U-N;)M=so(M),U--;for(;N--;){if(he===M||M!==null&&he===M.alternate)break t;he=so(he),M=so(M)}he=null}else he=null;oe!==null&&am(Y,K,oe,he,!1),ce!==null&&at!==null&&am(Y,at,ce,he,!0)}}e:{if(K=j?ao(j):window,oe=K.nodeName&&K.nodeName.toLowerCase(),oe==="select"||oe==="input"&&K.type==="file")var de=Zw;else if(jp(K))if(zp)de=rT;else{de=tT;var ge=eT}else(oe=K.nodeName)&&oe.toLowerCase()==="input"&&(K.type==="checkbox"||K.type==="radio")&&(de=nT);if(de&&(de=de(r,j))){Bp(Y,de,a,G);break e}ge&&ge(r,K,j),r==="focusout"&&(ge=K._wrapperState)&&ge.controlled&&K.type==="number"&&Ds(K,"number",K.value)}switch(ge=j?ao(j):window,r){case"focusin":(jp(ge)||ge.contentEditable==="true")&&(ro=ge,mh=j,Ia=null);break;case"focusout":Ia=mh=ro=null;break;case"mousedown":gh=!0;break;case"contextmenu":case"mouseup":case"dragend":gh=!1,Xp(Y,a,G);break;case"selectionchange":if(oT)break;case"keydown":case"keyup":Xp(Y,a,G)}var ye;if(ct)e:{switch(r){case"compositionstart":var Ee="onCompositionStart";break e;case"compositionend":Ee="onCompositionEnd";break e;case"compositionupdate":Ee="onCompositionUpdate";break e}Ee=void 0}else no?Up(r,a)&&(Ee="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Ee="onCompositionStart");Ee&&(ts&&a.locale!=="ko"&&(no||Ee!=="onCompositionStart"?Ee==="onCompositionEnd"&&no&&(ye=ga()):(cn=G,Ks="value"in cn?cn.value:cn.textContent,no=!0)),ge=iu(j,Ee),0<ge.length&&(Ee=new va(Ee,r,null,a,G),Y.push({event:Ee,listeners:ge}),ye?Ee.data=ye:(ye=Fp(a),ye!==null&&(Ee.data=ye)))),(ye=hn?Qw(r,a):Xw(r,a))&&(j=iu(j,"onBeforeInput"),0<j.length&&(G=new va("onBeforeInput","beforeinput",null,a,G),Y.push({event:G,listeners:j}),G.data=ye))}sm(Y,s)})}function Aa(r,s,a){return{instance:r,listener:s,currentTarget:a}}function iu(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,g=d.stateNode;d.tag===5&&g!==null&&(d=g,g=ot(r,a),g!=null&&c.unshift(Aa(r,g,d)),g=ot(r,s),g!=null&&c.push(Aa(r,g,d))),r=r.return}return c}function so(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function am(r,s,a,c,d){for(var g=s._reactName,v=[];a!==null&&a!==c;){var S=a,P=S.alternate,j=S.stateNode;if(P!==null&&P===c)break;S.tag===5&&j!==null&&(S=j,d?(P=ot(a,g),P!=null&&v.unshift(Aa(a,P,S))):d||(P=ot(a,g),P!=null&&v.push(Aa(a,P,S)))),a=a.return}v.length!==0&&r.push({event:s,listeners:v})}var cT=/\r\n?/g,hT=/\u0000|\uFFFD/g;function lm(r){return(typeof r=="string"?r:""+r).replace(cT,`
`).replace(hT,"")}function su(r,s,a){if(s=lm(s),lm(r)!==s&&a)throw Error(t(425))}function ou(){}var Th=null,Ih=null;function Sh(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Rh=typeof setTimeout=="function"?setTimeout:void 0,dT=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,fT=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(r){return um.resolve(null).then(r).catch(pT)}:Rh;function pT(r){setTimeout(function(){throw r})}function Ah(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),Ln(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);Ln(s)}function Zr(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function cm(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var oo=Math.random().toString(36).slice(2),er="__reactFiber$"+oo,Ca="__reactProps$"+oo,Ar="__reactContainer$"+oo,Ch="__reactEvents$"+oo,mT="__reactListeners$"+oo,gT="__reactHandles$"+oo;function ns(r){var s=r[er];if(s)return s;for(var a=r.parentNode;a;){if(s=a[Ar]||a[er]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=cm(r);r!==null;){if(a=r[er])return a;r=cm(r)}return s}r=a,a=r.parentNode}return null}function Pa(r){return r=r[er]||r[Ar],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ao(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function au(r){return r[Ca]||null}var Ph=[],lo=-1;function ei(r){return{current:r}}function Ge(r){0>lo||(r.current=Ph[lo],Ph[lo]=null,lo--)}function We(r,s){lo++,Ph[lo]=r.current,r.current=s}var ti={},Mt=ei(ti),Zt=ei(!1),rs=ti;function uo(r,s){var a=r.type.contextTypes;if(!a)return ti;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},g;for(g in a)d[g]=s[g];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function en(r){return r=r.childContextTypes,r!=null}function lu(){Ge(Zt),Ge(Mt)}function hm(r,s,a){if(Mt.current!==ti)throw Error(t(168));We(Mt,s),We(Zt,a)}function dm(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(t(108,Me(r)||"Unknown",d));return le({},a,c)}function uu(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ti,rs=Mt.current,We(Mt,r),We(Zt,Zt.current),!0}function fm(r,s,a){var c=r.stateNode;if(!c)throw Error(t(169));a?(r=dm(r,s,rs),c.__reactInternalMemoizedMergedChildContext=r,Ge(Zt),Ge(Mt),We(Mt,r)):Ge(Zt),We(Zt,a)}var Cr=null,cu=!1,kh=!1;function pm(r){Cr===null?Cr=[r]:Cr.push(r)}function yT(r){cu=!0,pm(r)}function ni(){if(!kh&&Cr!==null){kh=!0;var r=0,s=xe;try{var a=Cr;for(xe=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}Cr=null,cu=!1}catch(d){throw Cr!==null&&(Cr=Cr.slice(r+1)),zs(Gi,ni),d}finally{xe=s,kh=!1}}return null}var co=[],ho=0,hu=null,du=0,En=[],wn=0,is=null,Pr=1,kr="";function ss(r,s){co[ho++]=du,co[ho++]=hu,hu=r,du=s}function mm(r,s,a){En[wn++]=Pr,En[wn++]=kr,En[wn++]=is,is=r;var c=Pr;r=kr;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var g=32-Wt(s)+d;if(30<g){var v=d-d%5;g=(c&(1<<v)-1).toString(32),c>>=v,d-=v,Pr=1<<32-Wt(s)+d|a<<d|c,kr=g+r}else Pr=1<<g|a<<d|c,kr=r}function Nh(r){r.return!==null&&(ss(r,1),mm(r,1,0))}function xh(r){for(;r===hu;)hu=co[--ho],co[ho]=null,du=co[--ho],co[ho]=null;for(;r===is;)is=En[--wn],En[wn]=null,kr=En[--wn],En[wn]=null,Pr=En[--wn],En[wn]=null}var dn=null,fn=null,Ye=!1,Un=null;function gm(r,s){var a=Rn(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function ym(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,dn=r,fn=Zr(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,dn=r,fn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=is!==null?{id:Pr,overflow:kr}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Rn(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,dn=r,fn=null,!0):!1;default:return!1}}function Dh(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Oh(r){if(Ye){var s=fn;if(s){var a=s;if(!ym(r,s)){if(Dh(r))throw Error(t(418));s=Zr(a.nextSibling);var c=dn;s&&ym(r,s)?gm(c,a):(r.flags=r.flags&-4097|2,Ye=!1,dn=r)}}else{if(Dh(r))throw Error(t(418));r.flags=r.flags&-4097|2,Ye=!1,dn=r}}}function _m(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;dn=r}function fu(r){if(r!==dn)return!1;if(!Ye)return _m(r),Ye=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Sh(r.type,r.memoizedProps)),s&&(s=fn)){if(Dh(r))throw vm(),Error(t(418));for(;s;)gm(r,s),s=Zr(s.nextSibling)}if(_m(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){fn=Zr(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}fn=null}}else fn=dn?Zr(r.stateNode.nextSibling):null;return!0}function vm(){for(var r=fn;r;)r=Zr(r.nextSibling)}function fo(){fn=dn=null,Ye=!1}function Vh(r){Un===null?Un=[r]:Un.push(r)}var _T=ie.ReactCurrentBatchConfig;function Fn(r,s){if(r&&r.defaultProps){s=le({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}var pu=ei(null),mu=null,po=null,Lh=null;function bh(){Lh=po=mu=null}function Mh(r){var s=pu.current;Ge(pu),r._currentValue=s}function Uh(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function mo(r,s){mu=r,Lh=po=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(tn=!0),r.firstContext=null)}function Tn(r){var s=r._currentValue;if(Lh!==r)if(r={context:r,memoizedValue:s,next:null},po===null){if(mu===null)throw Error(t(308));po=r,mu.dependencies={lanes:0,firstContext:r}}else po=po.next=r;return s}var os=null;function Fh(r){os===null?os=[r]:os.push(r)}function Em(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Fh(s)):(a.next=d.next,d.next=a),s.interleaved=a,Nr(r,c)}function Nr(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ri=!1;function jh(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wm(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function xr(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function ii(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(Le&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,Nr(r,a)}return d=c.interleaved,d===null?(s.next=s,Fh(c)):(s.next=d.next,d.next=s),c.interleaved=s,Nr(r,a)}function gu(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}function Tm(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,g=null;if(a=a.firstBaseUpdate,a!==null){do{var v={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};g===null?d=g=v:g=g.next=v,a=a.next}while(a!==null);g===null?d=g=s:g=g.next=s}else d=g=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function yu(r,s,a,c){var d=r.updateQueue;ri=!1;var g=d.firstBaseUpdate,v=d.lastBaseUpdate,S=d.shared.pending;if(S!==null){d.shared.pending=null;var P=S,j=P.next;P.next=null,v===null?g=j:v.next=j,v=P;var G=r.alternate;G!==null&&(G=G.updateQueue,S=G.lastBaseUpdate,S!==v&&(S===null?G.firstBaseUpdate=j:S.next=j,G.lastBaseUpdate=P))}if(g!==null){var Y=d.baseState;v=0,G=j=P=null,S=g;do{var K=S.lane,oe=S.eventTime;if((c&K)===K){G!==null&&(G=G.next={eventTime:oe,lane:0,tag:S.tag,payload:S.payload,callback:S.callback,next:null});e:{var ce=r,he=S;switch(K=s,oe=a,he.tag){case 1:if(ce=he.payload,typeof ce=="function"){Y=ce.call(oe,Y,K);break e}Y=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=he.payload,K=typeof ce=="function"?ce.call(oe,Y,K):ce,K==null)break e;Y=le({},Y,K);break e;case 2:ri=!0}}S.callback!==null&&S.lane!==0&&(r.flags|=64,K=d.effects,K===null?d.effects=[S]:K.push(S))}else oe={eventTime:oe,lane:K,tag:S.tag,payload:S.payload,callback:S.callback,next:null},G===null?(j=G=oe,P=Y):G=G.next=oe,v|=K;if(S=S.next,S===null){if(S=d.shared.pending,S===null)break;K=S,S=K.next,K.next=null,d.lastBaseUpdate=K,d.shared.pending=null}}while(!0);if(G===null&&(P=Y),d.baseState=P,d.firstBaseUpdate=j,d.lastBaseUpdate=G,s=d.shared.interleaved,s!==null){d=s;do v|=d.lane,d=d.next;while(d!==s)}else g===null&&(d.shared.lanes=0);us|=v,r.lanes=v,r.memoizedState=Y}}function Im(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Sm=new n.Component().refs;function Bh(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:le({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var _u={isMounted:function(r){return(r=r._reactInternals)?Nn(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=li(r),g=xr(c,d);g.payload=s,a!=null&&(g.callback=a),s=ii(r,g,d),s!==null&&(zn(s,r,d,c),gu(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=Gt(),d=li(r),g=xr(c,d);g.tag=1,g.payload=s,a!=null&&(g.callback=a),s=ii(r,g,d),s!==null&&(zn(s,r,d,c),gu(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=Gt(),c=li(r),d=xr(a,c);d.tag=2,s!=null&&(d.callback=s),s=ii(r,d,c),s!==null&&(zn(s,r,c,a),gu(s,r,c))}};function Rm(r,s,a,c,d,g,v){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,g,v):s.prototype&&s.prototype.isPureReactComponent?!Ta(a,c)||!Ta(d,g):!0}function Am(r,s,a){var c=!1,d=ti,g=s.contextType;return typeof g=="object"&&g!==null?g=Tn(g):(d=en(s)?rs:Mt.current,c=s.contextTypes,g=(c=c!=null)?uo(r,d):ti),s=new s(a,g),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=_u,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=g),s}function Cm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&_u.enqueueReplaceState(s,s.state,null)}function zh(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs=Sm,jh(r);var g=s.contextType;typeof g=="object"&&g!==null?d.context=Tn(g):(g=en(s)?rs:Mt.current,d.context=uo(r,g)),d.state=r.memoizedState,g=s.getDerivedStateFromProps,typeof g=="function"&&(Bh(r,s,g,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&_u.enqueueReplaceState(d,d.state,null),yu(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function ka(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,r));var d=c,g=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===g?s.ref:(s=function(v){var S=d.refs;S===Sm&&(S=d.refs={}),v===null?delete S[g]:S[g]=v},s._stringRef=g,s)}if(typeof r!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,r))}return r}function vu(r,s){throw r=Object.prototype.toString.call(s),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Pm(r){var s=r._init;return s(r._payload)}function km(r){function s(M,N){if(r){var U=M.deletions;U===null?(M.deletions=[N],M.flags|=16):U.push(N)}}function a(M,N){if(!r)return null;for(;N!==null;)s(M,N),N=N.sibling;return null}function c(M,N){for(M=new Map;N!==null;)N.key!==null?M.set(N.key,N):M.set(N.index,N),N=N.sibling;return M}function d(M,N){return M=ci(M,N),M.index=0,M.sibling=null,M}function g(M,N,U){return M.index=U,r?(U=M.alternate,U!==null?(U=U.index,U<N?(M.flags|=2,N):U):(M.flags|=2,N)):(M.flags|=1048576,N)}function v(M){return r&&M.alternate===null&&(M.flags|=2),M}function S(M,N,U,te){return N===null||N.tag!==6?(N=Rd(U,M.mode,te),N.return=M,N):(N=d(N,U),N.return=M,N)}function P(M,N,U,te){var de=U.type;return de===x?G(M,N,U.props.children,te,U.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===bt&&Pm(de)===N.type)?(te=d(N,U.props),te.ref=ka(M,N,U),te.return=M,te):(te=Uu(U.type,U.key,U.props,null,M.mode,te),te.ref=ka(M,N,U),te.return=M,te)}function j(M,N,U,te){return N===null||N.tag!==4||N.stateNode.containerInfo!==U.containerInfo||N.stateNode.implementation!==U.implementation?(N=Ad(U,M.mode,te),N.return=M,N):(N=d(N,U.children||[]),N.return=M,N)}function G(M,N,U,te,de){return N===null||N.tag!==7?(N=fs(U,M.mode,te,de),N.return=M,N):(N=d(N,U),N.return=M,N)}function Y(M,N,U){if(typeof N=="string"&&N!==""||typeof N=="number")return N=Rd(""+N,M.mode,U),N.return=M,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case Ie:return U=Uu(N.type,N.key,N.props,null,M.mode,U),U.ref=ka(M,null,N),U.return=M,U;case Se:return N=Ad(N,M.mode,U),N.return=M,N;case bt:var te=N._init;return Y(M,te(N._payload),U)}if(yr(N)||me(N))return N=fs(N,M.mode,U,null),N.return=M,N;vu(M,N)}return null}function K(M,N,U,te){var de=N!==null?N.key:null;if(typeof U=="string"&&U!==""||typeof U=="number")return de!==null?null:S(M,N,""+U,te);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:return U.key===de?P(M,N,U,te):null;case Se:return U.key===de?j(M,N,U,te):null;case bt:return de=U._init,K(M,N,de(U._payload),te)}if(yr(U)||me(U))return de!==null?null:G(M,N,U,te,null);vu(M,U)}return null}function oe(M,N,U,te,de){if(typeof te=="string"&&te!==""||typeof te=="number")return M=M.get(U)||null,S(N,M,""+te,de);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case Ie:return M=M.get(te.key===null?U:te.key)||null,P(N,M,te,de);case Se:return M=M.get(te.key===null?U:te.key)||null,j(N,M,te,de);case bt:var ge=te._init;return oe(M,N,U,ge(te._payload),de)}if(yr(te)||me(te))return M=M.get(U)||null,G(N,M,te,de,null);vu(N,te)}return null}function ce(M,N,U,te){for(var de=null,ge=null,ye=N,Ee=N=0,At=null;ye!==null&&Ee<U.length;Ee++){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var be=K(M,ye,U[Ee],te);if(be===null){ye===null&&(ye=At);break}r&&ye&&be.alternate===null&&s(M,ye),N=g(be,N,Ee),ge===null?de=be:ge.sibling=be,ge=be,ye=At}if(Ee===U.length)return a(M,ye),Ye&&ss(M,Ee),de;if(ye===null){for(;Ee<U.length;Ee++)ye=Y(M,U[Ee],te),ye!==null&&(N=g(ye,N,Ee),ge===null?de=ye:ge.sibling=ye,ge=ye);return Ye&&ss(M,Ee),de}for(ye=c(M,ye);Ee<U.length;Ee++)At=oe(ye,M,Ee,U[Ee],te),At!==null&&(r&&At.alternate!==null&&ye.delete(At.key===null?Ee:At.key),N=g(At,N,Ee),ge===null?de=At:ge.sibling=At,ge=At);return r&&ye.forEach(function(hi){return s(M,hi)}),Ye&&ss(M,Ee),de}function he(M,N,U,te){var de=me(U);if(typeof de!="function")throw Error(t(150));if(U=de.call(U),U==null)throw Error(t(151));for(var ge=de=null,ye=N,Ee=N=0,At=null,be=U.next();ye!==null&&!be.done;Ee++,be=U.next()){ye.index>Ee?(At=ye,ye=null):At=ye.sibling;var hi=K(M,ye,be.value,te);if(hi===null){ye===null&&(ye=At);break}r&&ye&&hi.alternate===null&&s(M,ye),N=g(hi,N,Ee),ge===null?de=hi:ge.sibling=hi,ge=hi,ye=At}if(be.done)return a(M,ye),Ye&&ss(M,Ee),de;if(ye===null){for(;!be.done;Ee++,be=U.next())be=Y(M,be.value,te),be!==null&&(N=g(be,N,Ee),ge===null?de=be:ge.sibling=be,ge=be);return Ye&&ss(M,Ee),de}for(ye=c(M,ye);!be.done;Ee++,be=U.next())be=oe(ye,M,Ee,be.value,te),be!==null&&(r&&be.alternate!==null&&ye.delete(be.key===null?Ee:be.key),N=g(be,N,Ee),ge===null?de=be:ge.sibling=be,ge=be);return r&&ye.forEach(function(YT){return s(M,YT)}),Ye&&ss(M,Ee),de}function at(M,N,U,te){if(typeof U=="object"&&U!==null&&U.type===x&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case Ie:e:{for(var de=U.key,ge=N;ge!==null;){if(ge.key===de){if(de=U.type,de===x){if(ge.tag===7){a(M,ge.sibling),N=d(ge,U.props.children),N.return=M,M=N;break e}}else if(ge.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===bt&&Pm(de)===ge.type){a(M,ge.sibling),N=d(ge,U.props),N.ref=ka(M,ge,U),N.return=M,M=N;break e}a(M,ge);break}else s(M,ge);ge=ge.sibling}U.type===x?(N=fs(U.props.children,M.mode,te,U.key),N.return=M,M=N):(te=Uu(U.type,U.key,U.props,null,M.mode,te),te.ref=ka(M,N,U),te.return=M,M=te)}return v(M);case Se:e:{for(ge=U.key;N!==null;){if(N.key===ge)if(N.tag===4&&N.stateNode.containerInfo===U.containerInfo&&N.stateNode.implementation===U.implementation){a(M,N.sibling),N=d(N,U.children||[]),N.return=M,M=N;break e}else{a(M,N);break}else s(M,N);N=N.sibling}N=Ad(U,M.mode,te),N.return=M,M=N}return v(M);case bt:return ge=U._init,at(M,N,ge(U._payload),te)}if(yr(U))return ce(M,N,U,te);if(me(U))return he(M,N,U,te);vu(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"?(U=""+U,N!==null&&N.tag===6?(a(M,N.sibling),N=d(N,U),N.return=M,M=N):(a(M,N),N=Rd(U,M.mode,te),N.return=M,M=N),v(M)):a(M,N)}return at}var go=km(!0),Nm=km(!1),Na={},tr=ei(Na),xa=ei(Na),Da=ei(Na);function as(r){if(r===Na)throw Error(t(174));return r}function $h(r,s){switch(We(Da,s),We(xa,r),We(tr,Na),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:yt(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=yt(s,r)}Ge(tr),We(tr,s)}function yo(){Ge(tr),Ge(xa),Ge(Da)}function xm(r){as(Da.current);var s=as(tr.current),a=yt(s,r.type);s!==a&&(We(xa,r),We(tr,a))}function Hh(r){xa.current===r&&(Ge(tr),Ge(xa))}var Je=ei(0);function Eu(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Wh=[];function qh(){for(var r=0;r<Wh.length;r++)Wh[r]._workInProgressVersionPrimary=null;Wh.length=0}var wu=ie.ReactCurrentDispatcher,Kh=ie.ReactCurrentBatchConfig,ls=0,Ze=null,vt=null,St=null,Tu=!1,Oa=!1,Va=0,vT=0;function Ut(){throw Error(t(321))}function Gh(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Mn(r[a],s[a]))return!1;return!0}function Qh(r,s,a,c,d,g){if(ls=g,Ze=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,wu.current=r===null||r.memoizedState===null?IT:ST,r=a(c,d),Oa){g=0;do{if(Oa=!1,Va=0,25<=g)throw Error(t(301));g+=1,St=vt=null,s.updateQueue=null,wu.current=RT,r=a(c,d)}while(Oa)}if(wu.current=Ru,s=vt!==null&&vt.next!==null,ls=0,St=vt=Ze=null,Tu=!1,s)throw Error(t(300));return r}function Xh(){var r=Va!==0;return Va=0,r}function nr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return St===null?Ze.memoizedState=St=r:St=St.next=r,St}function In(){if(vt===null){var r=Ze.alternate;r=r!==null?r.memoizedState:null}else r=vt.next;var s=St===null?Ze.memoizedState:St.next;if(s!==null)St=s,vt=r;else{if(r===null)throw Error(t(310));vt=r,r={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},St===null?Ze.memoizedState=St=r:St=St.next=r}return St}function La(r,s){return typeof s=="function"?s(r):s}function Yh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=vt,d=c.baseQueue,g=a.pending;if(g!==null){if(d!==null){var v=d.next;d.next=g.next,g.next=v}c.baseQueue=d=g,a.pending=null}if(d!==null){g=d.next,c=c.baseState;var S=v=null,P=null,j=g;do{var G=j.lane;if((ls&G)===G)P!==null&&(P=P.next={lane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),c=j.hasEagerState?j.eagerState:r(c,j.action);else{var Y={lane:G,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null};P===null?(S=P=Y,v=c):P=P.next=Y,Ze.lanes|=G,us|=G}j=j.next}while(j!==null&&j!==g);P===null?v=c:P.next=S,Mn(c,s.memoizedState)||(tn=!0),s.memoizedState=c,s.baseState=v,s.baseQueue=P,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do g=d.lane,Ze.lanes|=g,us|=g,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function Jh(r){var s=In(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,g=s.memoizedState;if(d!==null){a.pending=null;var v=d=d.next;do g=r(g,v.action),v=v.next;while(v!==d);Mn(g,s.memoizedState)||(tn=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),a.lastRenderedState=g}return[g,c]}function Dm(){}function Om(r,s){var a=Ze,c=In(),d=s(),g=!Mn(c.memoizedState,d);if(g&&(c.memoizedState=d,tn=!0),c=c.queue,Zh(bm.bind(null,a,c,r),[r]),c.getSnapshot!==s||g||St!==null&&St.memoizedState.tag&1){if(a.flags|=2048,ba(9,Lm.bind(null,a,c,d,s),void 0,null),Rt===null)throw Error(t(349));(ls&30)!==0||Vm(a,s,d)}return d}function Vm(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Lm(r,s,a,c){s.value=a,s.getSnapshot=c,Mm(s)&&Um(r)}function bm(r,s,a){return a(function(){Mm(s)&&Um(r)})}function Mm(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Mn(r,a)}catch{return!0}}function Um(r){var s=Nr(r,1);s!==null&&zn(s,r,1,-1)}function Fm(r){var s=nr();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:r},s.queue=r,r=r.dispatch=TT.bind(null,Ze,r),[s.memoizedState,r]}function ba(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=Ze.updateQueue,s===null?(s={lastEffect:null,stores:null},Ze.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function jm(){return In().memoizedState}function Iu(r,s,a,c){var d=nr();Ze.flags|=r,d.memoizedState=ba(1|s,a,void 0,c===void 0?null:c)}function Su(r,s,a,c){var d=In();c=c===void 0?null:c;var g=void 0;if(vt!==null){var v=vt.memoizedState;if(g=v.destroy,c!==null&&Gh(c,v.deps)){d.memoizedState=ba(s,a,g,c);return}}Ze.flags|=r,d.memoizedState=ba(1|s,a,g,c)}function Bm(r,s){return Iu(8390656,8,r,s)}function Zh(r,s){return Su(2048,8,r,s)}function zm(r,s){return Su(4,2,r,s)}function $m(r,s){return Su(4,4,r,s)}function Hm(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Wm(r,s,a){return a=a!=null?a.concat([r]):null,Su(4,4,Hm.bind(null,s,r),a)}function ed(){}function qm(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Gh(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Km(r,s){var a=In();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&Gh(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function Gm(r,s,a){return(ls&21)===0?(r.baseState&&(r.baseState=!1,tn=!0),r.memoizedState=a):(Mn(a,s)||(a=Yi(),Ze.lanes|=a,us|=a,r.baseState=!0),s)}function ET(r,s){var a=xe;xe=a!==0&&4>a?a:4,r(!0);var c=Kh.transition;Kh.transition={};try{r(!1),s()}finally{xe=a,Kh.transition=c}}function Qm(){return In().memoizedState}function wT(r,s,a){var c=li(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Xm(r))Ym(s,a);else if(a=Em(r,s,a,c),a!==null){var d=Gt();zn(a,r,c,d),Jm(a,s,c)}}function TT(r,s,a){var c=li(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xm(r))Ym(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var v=s.lastRenderedState,S=g(v,a);if(d.hasEagerState=!0,d.eagerState=S,Mn(S,v)){var P=s.interleaved;P===null?(d.next=d,Fh(s)):(d.next=P.next,P.next=d),s.interleaved=d;return}}catch{}finally{}a=Em(r,s,d,c),a!==null&&(d=Gt(),zn(a,r,c,d),Jm(a,s,c))}}function Xm(r){var s=r.alternate;return r===Ze||s!==null&&s===Ze}function Ym(r,s){Oa=Tu=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Jm(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,Kr(r,a)}}var Ru={readContext:Tn,useCallback:Ut,useContext:Ut,useEffect:Ut,useImperativeHandle:Ut,useInsertionEffect:Ut,useLayoutEffect:Ut,useMemo:Ut,useReducer:Ut,useRef:Ut,useState:Ut,useDebugValue:Ut,useDeferredValue:Ut,useTransition:Ut,useMutableSource:Ut,useSyncExternalStore:Ut,useId:Ut,unstable_isNewReconciler:!1},IT={readContext:Tn,useCallback:function(r,s){return nr().memoizedState=[r,s===void 0?null:s],r},useContext:Tn,useEffect:Bm,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,Iu(4194308,4,Hm.bind(null,s,r),a)},useLayoutEffect:function(r,s){return Iu(4194308,4,r,s)},useInsertionEffect:function(r,s){return Iu(4,2,r,s)},useMemo:function(r,s){var a=nr();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=nr();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=wT.bind(null,Ze,r),[c.memoizedState,r]},useRef:function(r){var s=nr();return r={current:r},s.memoizedState=r},useState:Fm,useDebugValue:ed,useDeferredValue:function(r){return nr().memoizedState=r},useTransition:function(){var r=Fm(!1),s=r[0];return r=ET.bind(null,r[1]),nr().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=Ze,d=nr();if(Ye){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),Rt===null)throw Error(t(349));(ls&30)!==0||Vm(c,s,a)}d.memoizedState=a;var g={value:a,getSnapshot:s};return d.queue=g,Bm(bm.bind(null,c,g,r),[r]),c.flags|=2048,ba(9,Lm.bind(null,c,g,a,s),void 0,null),a},useId:function(){var r=nr(),s=Rt.identifierPrefix;if(Ye){var a=kr,c=Pr;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Va++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=vT++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},ST={readContext:Tn,useCallback:qm,useContext:Tn,useEffect:Zh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:$m,useMemo:Km,useReducer:Yh,useRef:jm,useState:function(){return Yh(La)},useDebugValue:ed,useDeferredValue:function(r){var s=In();return Gm(s,vt.memoizedState,r)},useTransition:function(){var r=Yh(La)[0],s=In().memoizedState;return[r,s]},useMutableSource:Dm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1},RT={readContext:Tn,useCallback:qm,useContext:Tn,useEffect:Zh,useImperativeHandle:Wm,useInsertionEffect:zm,useLayoutEffect:$m,useMemo:Km,useReducer:Jh,useRef:jm,useState:function(){return Jh(La)},useDebugValue:ed,useDeferredValue:function(r){var s=In();return vt===null?s.memoizedState=r:Gm(s,vt.memoizedState,r)},useTransition:function(){var r=Jh(La)[0],s=In().memoizedState;return[r,s]},useMutableSource:Dm,useSyncExternalStore:Om,useId:Qm,unstable_isNewReconciler:!1};function _o(r,s){try{var a="",c=s;do a+=Ce(c),c=c.return;while(c);var d=a}catch(g){d=`
Error generating stack: `+g.message+`
`+g.stack}return{value:r,source:s,stack:d,digest:null}}function td(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function nd(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var AT=typeof WeakMap=="function"?WeakMap:Map;function Zm(r,s,a){a=xr(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Du||(Du=!0,yd=c),nd(r,s)},a}function eg(r,s,a){a=xr(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){nd(r,s)}}var g=r.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(a.callback=function(){nd(r,s),typeof c!="function"&&(oi===null?oi=new Set([this]):oi.add(this));var v=s.stack;this.componentDidCatch(s.value,{componentStack:v!==null?v:""})}),a}function tg(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new AT;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=jT.bind(null,r,s,a),s.then(r,r))}function ng(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function rg(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=xr(-1,1),s.tag=2,ii(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var CT=ie.ReactCurrentOwner,tn=!1;function Kt(r,s,a,c){s.child=r===null?Nm(s,null,a,c):go(s,r.child,a,c)}function ig(r,s,a,c,d){a=a.render;var g=s.ref;return mo(s,d),c=Qh(r,s,a,c,g,d),a=Xh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Dr(r,s,d)):(Ye&&a&&Nh(s),s.flags|=1,Kt(r,s,c,d),s.child)}function sg(r,s,a,c,d){if(r===null){var g=a.type;return typeof g=="function"&&!Sd(g)&&g.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=g,og(r,s,g,c,d)):(r=Uu(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,(r.lanes&d)===0){var v=g.memoizedProps;if(a=a.compare,a=a!==null?a:Ta,a(v,c)&&r.ref===s.ref)return Dr(r,s,d)}return s.flags|=1,r=ci(g,c),r.ref=s.ref,r.return=s,s.child=r}function og(r,s,a,c,d){if(r!==null){var g=r.memoizedProps;if(Ta(g,c)&&r.ref===s.ref)if(tn=!1,s.pendingProps=c=g,(r.lanes&d)!==0)(r.flags&131072)!==0&&(tn=!0);else return s.lanes=r.lanes,Dr(r,s,d)}return rd(r,s,a,c,d)}function ag(r,s,a){var c=s.pendingProps,d=c.children,g=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(Eo,pn),pn|=a;else{if((a&1073741824)===0)return r=g!==null?g.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,We(Eo,pn),pn|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:a,We(Eo,pn),pn|=c}else g!==null?(c=g.baseLanes|a,s.memoizedState=null):c=a,We(Eo,pn),pn|=c;return Kt(r,s,d,a),s.child}function lg(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function rd(r,s,a,c,d){var g=en(a)?rs:Mt.current;return g=uo(s,g),mo(s,d),a=Qh(r,s,a,c,g,d),c=Xh(),r!==null&&!tn?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,Dr(r,s,d)):(Ye&&c&&Nh(s),s.flags|=1,Kt(r,s,a,d),s.child)}function ug(r,s,a,c,d){if(en(a)){var g=!0;uu(s)}else g=!1;if(mo(s,d),s.stateNode===null)Cu(r,s),Am(s,a,c),zh(s,a,c,d),c=!0;else if(r===null){var v=s.stateNode,S=s.memoizedProps;v.props=S;var P=v.context,j=a.contextType;typeof j=="object"&&j!==null?j=Tn(j):(j=en(a)?rs:Mt.current,j=uo(s,j));var G=a.getDerivedStateFromProps,Y=typeof G=="function"||typeof v.getSnapshotBeforeUpdate=="function";Y||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==c||P!==j)&&Cm(s,v,c,j),ri=!1;var K=s.memoizedState;v.state=K,yu(s,c,v,d),P=s.memoizedState,S!==c||K!==P||Zt.current||ri?(typeof G=="function"&&(Bh(s,a,G,c),P=s.memoizedState),(S=ri||Rm(s,a,S,c,K,P,j))?(Y||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(s.flags|=4194308)):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=P),v.props=c,v.state=P,v.context=j,c=S):(typeof v.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{v=s.stateNode,wm(r,s),S=s.memoizedProps,j=s.type===s.elementType?S:Fn(s.type,S),v.props=j,Y=s.pendingProps,K=v.context,P=a.contextType,typeof P=="object"&&P!==null?P=Tn(P):(P=en(a)?rs:Mt.current,P=uo(s,P));var oe=a.getDerivedStateFromProps;(G=typeof oe=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(S!==Y||K!==P)&&Cm(s,v,c,P),ri=!1,K=s.memoizedState,v.state=K,yu(s,c,v,d);var ce=s.memoizedState;S!==Y||K!==ce||Zt.current||ri?(typeof oe=="function"&&(Bh(s,a,oe,c),ce=s.memoizedState),(j=ri||Rm(s,a,j,c,K,ce,P)||!1)?(G||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ce,P),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ce,P)),typeof v.componentDidUpdate=="function"&&(s.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=ce),v.props=c,v.state=ce,v.context=P,c=j):(typeof v.componentDidUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||S===r.memoizedProps&&K===r.memoizedState||(s.flags|=1024),c=!1)}return id(r,s,a,c,g,d)}function id(r,s,a,c,d,g){lg(r,s);var v=(s.flags&128)!==0;if(!c&&!v)return d&&fm(s,a,!1),Dr(r,s,g);c=s.stateNode,CT.current=s;var S=v&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&v?(s.child=go(s,r.child,null,g),s.child=go(s,null,S,g)):Kt(r,s,S,g),s.memoizedState=c.state,d&&fm(s,a,!0),s.child}function cg(r){var s=r.stateNode;s.pendingContext?hm(r,s.pendingContext,s.pendingContext!==s.context):s.context&&hm(r,s.context,!1),$h(r,s.containerInfo)}function hg(r,s,a,c,d){return fo(),Vh(d),s.flags|=256,Kt(r,s,a,c),s.child}var sd={dehydrated:null,treeContext:null,retryLane:0};function od(r){return{baseLanes:r,cachePool:null,transitions:null}}function dg(r,s,a){var c=s.pendingProps,d=Je.current,g=!1,v=(s.flags&128)!==0,S;if((S=v)||(S=r!==null&&r.memoizedState===null?!1:(d&2)!==0),S?(g=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),We(Je,d&1),r===null)return Oh(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(v=c.children,r=c.fallback,g?(c=s.mode,g=s.child,v={mode:"hidden",children:v},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=v):g=Fu(v,c,0,null),r=fs(r,c,a,null),g.return=s,r.return=s,g.sibling=r,s.child=g,s.child.memoizedState=od(a),s.memoizedState=sd,r):ad(s,v));if(d=r.memoizedState,d!==null&&(S=d.dehydrated,S!==null))return PT(r,s,v,c,S,d,a);if(g){g=c.fallback,v=s.mode,d=r.child,S=d.sibling;var P={mode:"hidden",children:c.children};return(v&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=P,s.deletions=null):(c=ci(d,P),c.subtreeFlags=d.subtreeFlags&14680064),S!==null?g=ci(S,g):(g=fs(g,v,a,null),g.flags|=2),g.return=s,c.return=s,c.sibling=g,s.child=c,c=g,g=s.child,v=r.child.memoizedState,v=v===null?od(a):{baseLanes:v.baseLanes|a,cachePool:null,transitions:v.transitions},g.memoizedState=v,g.childLanes=r.childLanes&~a,s.memoizedState=sd,c}return g=r.child,r=g.sibling,c=ci(g,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function ad(r,s){return s=Fu({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Au(r,s,a,c){return c!==null&&Vh(c),go(s,r.child,null,a),r=ad(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function PT(r,s,a,c,d,g,v){if(a)return s.flags&256?(s.flags&=-257,c=td(Error(t(422))),Au(r,s,v,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(g=c.fallback,d=s.mode,c=Fu({mode:"visible",children:c.children},d,0,null),g=fs(g,d,v,null),g.flags|=2,c.return=s,g.return=s,c.sibling=g,s.child=c,(s.mode&1)!==0&&go(s,r.child,null,v),s.child.memoizedState=od(v),s.memoizedState=sd,g);if((s.mode&1)===0)return Au(r,s,v,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var S=c.dgst;return c=S,g=Error(t(419)),c=td(g,c,void 0),Au(r,s,v,c)}if(S=(v&r.childLanes)!==0,tn||S){if(c=Rt,c!==null){switch(v&-v){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|v))!==0?0:d,d!==0&&d!==g.retryLane&&(g.retryLane=d,Nr(r,d),zn(c,r,d,-1))}return Id(),c=td(Error(t(421))),Au(r,s,v,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=BT.bind(null,r),d._reactRetry=s,null):(r=g.treeContext,fn=Zr(d.nextSibling),dn=s,Ye=!0,Un=null,r!==null&&(En[wn++]=Pr,En[wn++]=kr,En[wn++]=is,Pr=r.id,kr=r.overflow,is=s),s=ad(s,c.children),s.flags|=4096,s)}function fg(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Uh(r.return,s,a)}function ld(r,s,a,c,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=a,g.tailMode=d)}function pg(r,s,a){var c=s.pendingProps,d=c.revealOrder,g=c.tail;if(Kt(r,s,c.children,a),c=Je.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&fg(r,a,s);else if(r.tag===19)fg(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(We(Je,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&Eu(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),ld(s,!1,d,a,g);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&Eu(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}ld(s,!0,a,null,g);break;case"together":ld(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Cu(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function Dr(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),us|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(t(153));if(s.child!==null){for(r=s.child,a=ci(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=ci(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function kT(r,s,a){switch(s.tag){case 3:cg(s),fo();break;case 5:xm(s);break;case 1:en(s.type)&&uu(s);break;case 4:$h(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;We(pu,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?dg(r,s,a):(We(Je,Je.current&1),r=Dr(r,s,a),r!==null?r.sibling:null);We(Je,Je.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return pg(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),We(Je,Je.current),c)break;return null;case 22:case 23:return s.lanes=0,ag(r,s,a)}return Dr(r,s,a)}var mg,ud,gg,yg;mg=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ud=function(){},gg=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,as(tr.current);var g=null;switch(a){case"input":d=ji(r,d),c=ji(r,c),g=[];break;case"select":d=le({},d,{value:void 0}),c=le({},c,{value:void 0}),g=[];break;case"textarea":d=Yo(r,d),c=Yo(r,c),g=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=ou)}ra(a,c);var v;a=null;for(j in d)if(!c.hasOwnProperty(j)&&d.hasOwnProperty(j)&&d[j]!=null)if(j==="style"){var S=d[j];for(v in S)S.hasOwnProperty(v)&&(a||(a={}),a[v]="")}else j!=="dangerouslySetInnerHTML"&&j!=="children"&&j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&j!=="autoFocus"&&(o.hasOwnProperty(j)?g||(g=[]):(g=g||[]).push(j,null));for(j in c){var P=c[j];if(S=d?.[j],c.hasOwnProperty(j)&&P!==S&&(P!=null||S!=null))if(j==="style")if(S){for(v in S)!S.hasOwnProperty(v)||P&&P.hasOwnProperty(v)||(a||(a={}),a[v]="");for(v in P)P.hasOwnProperty(v)&&S[v]!==P[v]&&(a||(a={}),a[v]=P[v])}else a||(g||(g=[]),g.push(j,a)),a=P;else j==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,S=S?S.__html:void 0,P!=null&&S!==P&&(g=g||[]).push(j,P)):j==="children"?typeof P!="string"&&typeof P!="number"||(g=g||[]).push(j,""+P):j!=="suppressContentEditableWarning"&&j!=="suppressHydrationWarning"&&(o.hasOwnProperty(j)?(P!=null&&j==="onScroll"&&Ke("scroll",r),g||S===P||(g=[])):(g=g||[]).push(j,P))}a&&(g=g||[]).push("style",a);var j=g;(s.updateQueue=j)&&(s.flags|=4)}},yg=function(r,s,a,c){a!==c&&(s.flags|=4)};function Ma(r,s){if(!Ye)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function Ft(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function NT(r,s,a){var c=s.pendingProps;switch(xh(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ft(s),null;case 1:return en(s.type)&&lu(),Ft(s),null;case 3:return c=s.stateNode,yo(),Ge(Zt),Ge(Mt),qh(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(fu(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Un!==null&&(Ed(Un),Un=null))),ud(r,s),Ft(s),null;case 5:Hh(s);var d=as(Da.current);if(a=s.type,r!==null&&s.stateNode!=null)gg(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(t(166));return Ft(s),null}if(r=as(tr.current),fu(s)){c=s.stateNode,a=s.type;var g=s.memoizedProps;switch(c[er]=s,c[Ca]=g,r=(s.mode&1)!==0,a){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(d=0;d<Sa.length;d++)Ke(Sa[d],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":xs(c,g),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Ke("invalid",c);break;case"textarea":Os(c,g),Ke("invalid",c)}ra(a,g),d=null;for(var v in g)if(g.hasOwnProperty(v)){var S=g[v];v==="children"?typeof S=="string"?c.textContent!==S&&(g.suppressHydrationWarning!==!0&&su(c.textContent,S,r),d=["children",S]):typeof S=="number"&&c.textContent!==""+S&&(g.suppressHydrationWarning!==!0&&su(c.textContent,S,r),d=["children",""+S]):o.hasOwnProperty(v)&&S!=null&&v==="onScroll"&&Ke("scroll",c)}switch(a){case"input":gr(c),xl(c,g,!0);break;case"textarea":gr(c),Jo(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ou)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{v=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=gt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=v.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=v.createElement(a,{is:c.is}):(r=v.createElement(a),a==="select"&&(v=r,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):r=v.createElementNS(r,a),r[er]=s,r[Ca]=c,mg(r,s,!1,!1),s.stateNode=r;e:{switch(v=ia(a,c),a){case"dialog":Ke("cancel",r),Ke("close",r),d=c;break;case"iframe":case"object":case"embed":Ke("load",r),d=c;break;case"video":case"audio":for(d=0;d<Sa.length;d++)Ke(Sa[d],r);d=c;break;case"source":Ke("error",r),d=c;break;case"img":case"image":case"link":Ke("error",r),Ke("load",r),d=c;break;case"details":Ke("toggle",r),d=c;break;case"input":xs(r,c),d=ji(r,c),Ke("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=le({},c,{value:void 0}),Ke("invalid",r);break;case"textarea":Os(r,c),d=Yo(r,c),Ke("invalid",r);break;default:d=c}ra(a,d),S=d;for(g in S)if(S.hasOwnProperty(g)){var P=S[g];g==="style"?ta(r,P):g==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&Zo(r,P)):g==="children"?typeof P=="string"?(a!=="textarea"||P!=="")&&zr(r,P):typeof P=="number"&&zr(r,""+P):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?P!=null&&g==="onScroll"&&Ke("scroll",r):P!=null&&ee(r,g,P,v))}switch(a){case"input":gr(r),xl(r,c,!1);break;case"textarea":gr(r),Jo(r);break;case"option":c.value!=null&&r.setAttribute("value",""+Ue(c.value));break;case"select":r.multiple=!!c.multiple,g=c.value,g!=null?_r(r,!!c.multiple,g,!1):c.defaultValue!=null&&_r(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=ou)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Ft(s),null;case 6:if(r&&s.stateNode!=null)yg(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(t(166));if(a=as(Da.current),as(tr.current),fu(s)){if(c=s.stateNode,a=s.memoizedProps,c[er]=s,(g=c.nodeValue!==a)&&(r=dn,r!==null))switch(r.tag){case 3:su(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&su(c.nodeValue,a,(r.mode&1)!==0)}g&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[er]=s,s.stateNode=c}return Ft(s),null;case 13:if(Ge(Je),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Ye&&fn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)vm(),fo(),s.flags|=98560,g=!1;else if(g=fu(s),c!==null&&c.dehydrated!==null){if(r===null){if(!g)throw Error(t(318));if(g=s.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[er]=s}else fo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Ft(s),g=!1}else Un!==null&&(Ed(Un),Un=null),g=!0;if(!g)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Je.current&1)!==0?Et===0&&(Et=3):Id())),s.updateQueue!==null&&(s.flags|=4),Ft(s),null);case 4:return yo(),ud(r,s),r===null&&Ra(s.stateNode.containerInfo),Ft(s),null;case 10:return Mh(s.type._context),Ft(s),null;case 17:return en(s.type)&&lu(),Ft(s),null;case 19:if(Ge(Je),g=s.memoizedState,g===null)return Ft(s),null;if(c=(s.flags&128)!==0,v=g.rendering,v===null)if(c)Ma(g,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(v=Eu(r),v!==null){for(s.flags|=128,Ma(g,!1),c=v.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)g=a,r=c,g.flags&=14680066,v=g.alternate,v===null?(g.childLanes=0,g.lanes=r,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=v.childLanes,g.lanes=v.lanes,g.child=v.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=v.memoizedProps,g.memoizedState=v.memoizedState,g.updateQueue=v.updateQueue,g.type=v.type,r=v.dependencies,g.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return We(Je,Je.current&1|2),s.child}r=r.sibling}g.tail!==null&&He()>wo&&(s.flags|=128,c=!0,Ma(g,!1),s.lanes=4194304)}else{if(!c)if(r=Eu(v),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Ma(g,!0),g.tail===null&&g.tailMode==="hidden"&&!v.alternate&&!Ye)return Ft(s),null}else 2*He()-g.renderingStartTime>wo&&a!==1073741824&&(s.flags|=128,c=!0,Ma(g,!1),s.lanes=4194304);g.isBackwards?(v.sibling=s.child,s.child=v):(a=g.last,a!==null?a.sibling=v:s.child=v,g.last=v)}return g.tail!==null?(s=g.tail,g.rendering=s,g.tail=s.sibling,g.renderingStartTime=He(),s.sibling=null,a=Je.current,We(Je,c?a&1|2:a&1),s):(Ft(s),null);case 22:case 23:return Td(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(pn&1073741824)!==0&&(Ft(s),s.subtreeFlags&6&&(s.flags|=8192)):Ft(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function xT(r,s){switch(xh(s),s.tag){case 1:return en(s.type)&&lu(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return yo(),Ge(Zt),Ge(Mt),qh(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return Hh(s),null;case 13:if(Ge(Je),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(t(340));fo()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Ge(Je),null;case 4:return yo(),null;case 10:return Mh(s.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var Pu=!1,jt=!1,DT=typeof WeakSet=="function"?WeakSet:Set,ue=null;function vo(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){nt(r,s,c)}else a.current=null}function cd(r,s,a){try{a()}catch(c){nt(r,s,c)}}var _g=!1;function OT(r,s){if(Th=Xr,r=Qp(),ph(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{a.nodeType,g.nodeType}catch{a=null;break e}var v=0,S=-1,P=-1,j=0,G=0,Y=r,K=null;t:for(;;){for(var oe;Y!==a||d!==0&&Y.nodeType!==3||(S=v+d),Y!==g||c!==0&&Y.nodeType!==3||(P=v+c),Y.nodeType===3&&(v+=Y.nodeValue.length),(oe=Y.firstChild)!==null;)K=Y,Y=oe;for(;;){if(Y===r)break t;if(K===a&&++j===d&&(S=v),K===g&&++G===c&&(P=v),(oe=Y.nextSibling)!==null)break;Y=K,K=Y.parentNode}Y=oe}a=S===-1||P===-1?null:{start:S,end:P}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ih={focusedElem:r,selectionRange:a},Xr=!1,ue=s;ue!==null;)if(s=ue,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,ue=r;else for(;ue!==null;){s=ue;try{var ce=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ce!==null){var he=ce.memoizedProps,at=ce.memoizedState,M=s.stateNode,N=M.getSnapshotBeforeUpdate(s.elementType===s.type?he:Fn(s.type,he),at);M.__reactInternalSnapshotBeforeUpdate=N}break;case 3:var U=s.stateNode.containerInfo;U.nodeType===1?U.textContent="":U.nodeType===9&&U.documentElement&&U.removeChild(U.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(te){nt(s,s.return,te)}if(r=s.sibling,r!==null){r.return=s.return,ue=r;break}ue=s.return}return ce=_g,_g=!1,ce}function Ua(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var g=d.destroy;d.destroy=void 0,g!==void 0&&cd(s,a,g)}d=d.next}while(d!==c)}}function ku(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function hd(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function vg(r){var s=r.alternate;s!==null&&(r.alternate=null,vg(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[er],delete s[Ca],delete s[Ch],delete s[mT],delete s[gT])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Eg(r){return r.tag===5||r.tag===3||r.tag===4}function wg(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Eg(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function dd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ou));else if(c!==4&&(r=r.child,r!==null))for(dd(r,s,a),r=r.sibling;r!==null;)dd(r,s,a),r=r.sibling}function fd(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(fd(r,s,a),r=r.sibling;r!==null;)fd(r,s,a),r=r.sibling}var Nt=null,jn=!1;function si(r,s,a){for(a=a.child;a!==null;)Tg(r,s,a),a=a.sibling}function Tg(r,s,a){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Qi,a)}catch{}switch(a.tag){case 5:jt||vo(a,s);case 6:var c=Nt,d=jn;Nt=null,si(r,s,a),Nt=c,jn=d,Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Nt.removeChild(a.stateNode));break;case 18:Nt!==null&&(jn?(r=Nt,a=a.stateNode,r.nodeType===8?Ah(r.parentNode,a):r.nodeType===1&&Ah(r,a),Ln(r)):Ah(Nt,a.stateNode));break;case 4:c=Nt,d=jn,Nt=a.stateNode.containerInfo,jn=!0,si(r,s,a),Nt=c,jn=d;break;case 0:case 11:case 14:case 15:if(!jt&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var g=d,v=g.destroy;g=g.tag,v!==void 0&&((g&2)!==0||(g&4)!==0)&&cd(a,s,v),d=d.next}while(d!==c)}si(r,s,a);break;case 1:if(!jt&&(vo(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(S){nt(a,s,S)}si(r,s,a);break;case 21:si(r,s,a);break;case 22:a.mode&1?(jt=(c=jt)||a.memoizedState!==null,si(r,s,a),jt=c):si(r,s,a);break;default:si(r,s,a)}}function Ig(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new DT),s.forEach(function(c){var d=zT.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Bn(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var g=r,v=s,S=v;e:for(;S!==null;){switch(S.tag){case 5:Nt=S.stateNode,jn=!1;break e;case 3:Nt=S.stateNode.containerInfo,jn=!0;break e;case 4:Nt=S.stateNode.containerInfo,jn=!0;break e}S=S.return}if(Nt===null)throw Error(t(160));Tg(g,v,d),Nt=null,jn=!1;var P=d.alternate;P!==null&&(P.return=null),d.return=null}catch(j){nt(d,s,j)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Sg(s,r),s=s.sibling}function Sg(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Bn(s,r),rr(r),c&4){try{Ua(3,r,r.return),ku(3,r)}catch(he){nt(r,r.return,he)}try{Ua(5,r,r.return)}catch(he){nt(r,r.return,he)}}break;case 1:Bn(s,r),rr(r),c&512&&a!==null&&vo(a,a.return);break;case 5:if(Bn(s,r),rr(r),c&512&&a!==null&&vo(a,a.return),r.flags&32){var d=r.stateNode;try{zr(d,"")}catch(he){nt(r,r.return,he)}}if(c&4&&(d=r.stateNode,d!=null)){var g=r.memoizedProps,v=a!==null?a.memoizedProps:g,S=r.type,P=r.updateQueue;if(r.updateQueue=null,P!==null)try{S==="input"&&g.type==="radio"&&g.name!=null&&Qo(d,g),ia(S,v);var j=ia(S,g);for(v=0;v<P.length;v+=2){var G=P[v],Y=P[v+1];G==="style"?ta(d,Y):G==="dangerouslySetInnerHTML"?Zo(d,Y):G==="children"?zr(d,Y):ee(d,G,Y,j)}switch(S){case"input":Xo(d,g);break;case"textarea":Vs(d,g);break;case"select":var K=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!g.multiple;var oe=g.value;oe!=null?_r(d,!!g.multiple,oe,!1):K!==!!g.multiple&&(g.defaultValue!=null?_r(d,!!g.multiple,g.defaultValue,!0):_r(d,!!g.multiple,g.multiple?[]:"",!1))}d[Ca]=g}catch(he){nt(r,r.return,he)}}break;case 6:if(Bn(s,r),rr(r),c&4){if(r.stateNode===null)throw Error(t(162));d=r.stateNode,g=r.memoizedProps;try{d.nodeValue=g}catch(he){nt(r,r.return,he)}}break;case 3:if(Bn(s,r),rr(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ln(s.containerInfo)}catch(he){nt(r,r.return,he)}break;case 4:Bn(s,r),rr(r);break;case 13:Bn(s,r),rr(r),d=r.child,d.flags&8192&&(g=d.memoizedState!==null,d.stateNode.isHidden=g,!g||d.alternate!==null&&d.alternate.memoizedState!==null||(gd=He())),c&4&&Ig(r);break;case 22:if(G=a!==null&&a.memoizedState!==null,r.mode&1?(jt=(j=jt)||G,Bn(s,r),jt=j):Bn(s,r),rr(r),c&8192){if(j=r.memoizedState!==null,(r.stateNode.isHidden=j)&&!G&&(r.mode&1)!==0)for(ue=r,G=r.child;G!==null;){for(Y=ue=G;ue!==null;){switch(K=ue,oe=K.child,K.tag){case 0:case 11:case 14:case 15:Ua(4,K,K.return);break;case 1:vo(K,K.return);var ce=K.stateNode;if(typeof ce.componentWillUnmount=="function"){c=K,a=K.return;try{s=c,ce.props=s.memoizedProps,ce.state=s.memoizedState,ce.componentWillUnmount()}catch(he){nt(c,a,he)}}break;case 5:vo(K,K.return);break;case 22:if(K.memoizedState!==null){Cg(Y);continue}}oe!==null?(oe.return=K,ue=oe):Cg(Y)}G=G.sibling}e:for(G=null,Y=r;;){if(Y.tag===5){if(G===null){G=Y;try{d=Y.stateNode,j?(g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(S=Y.stateNode,P=Y.memoizedProps.style,v=P!=null&&P.hasOwnProperty("display")?P.display:null,S.style.display=ea("display",v))}catch(he){nt(r,r.return,he)}}}else if(Y.tag===6){if(G===null)try{Y.stateNode.nodeValue=j?"":Y.memoizedProps}catch(he){nt(r,r.return,he)}}else if((Y.tag!==22&&Y.tag!==23||Y.memoizedState===null||Y===r)&&Y.child!==null){Y.child.return=Y,Y=Y.child;continue}if(Y===r)break e;for(;Y.sibling===null;){if(Y.return===null||Y.return===r)break e;G===Y&&(G=null),Y=Y.return}G===Y&&(G=null),Y.sibling.return=Y.return,Y=Y.sibling}}break;case 19:Bn(s,r),rr(r),c&4&&Ig(r);break;case 21:break;default:Bn(s,r),rr(r)}}function rr(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Eg(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(zr(d,""),c.flags&=-33);var g=wg(r);fd(r,g,d);break;case 3:case 4:var v=c.stateNode.containerInfo,S=wg(r);dd(r,S,v);break;default:throw Error(t(161))}}catch(P){nt(r,r.return,P)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function VT(r,s,a){ue=r,Rg(r)}function Rg(r,s,a){for(var c=(r.mode&1)!==0;ue!==null;){var d=ue,g=d.child;if(d.tag===22&&c){var v=d.memoizedState!==null||Pu;if(!v){var S=d.alternate,P=S!==null&&S.memoizedState!==null||jt;S=Pu;var j=jt;if(Pu=v,(jt=P)&&!j)for(ue=d;ue!==null;)v=ue,P=v.child,v.tag===22&&v.memoizedState!==null?Pg(d):P!==null?(P.return=v,ue=P):Pg(d);for(;g!==null;)ue=g,Rg(g),g=g.sibling;ue=d,Pu=S,jt=j}Ag(r)}else(d.subtreeFlags&8772)!==0&&g!==null?(g.return=d,ue=g):Ag(r)}}function Ag(r){for(;ue!==null;){var s=ue;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:jt||ku(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!jt)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Fn(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=s.updateQueue;g!==null&&Im(s,g,c);break;case 3:var v=s.updateQueue;if(v!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Im(s,v,a)}break;case 5:var S=s.stateNode;if(a===null&&s.flags&4){a=S;var P=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&a.focus();break;case"img":P.src&&(a.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var j=s.alternate;if(j!==null){var G=j.memoizedState;if(G!==null){var Y=G.dehydrated;Y!==null&&Ln(Y)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}jt||s.flags&512&&hd(s)}catch(K){nt(s,s.return,K)}}if(s===r){ue=null;break}if(a=s.sibling,a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Cg(r){for(;ue!==null;){var s=ue;if(s===r){ue=null;break}var a=s.sibling;if(a!==null){a.return=s.return,ue=a;break}ue=s.return}}function Pg(r){for(;ue!==null;){var s=ue;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{ku(4,s)}catch(P){nt(s,a,P)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(P){nt(s,d,P)}}var g=s.return;try{hd(s)}catch(P){nt(s,g,P)}break;case 5:var v=s.return;try{hd(s)}catch(P){nt(s,v,P)}}}catch(P){nt(s,s.return,P)}if(s===r){ue=null;break}var S=s.sibling;if(S!==null){S.return=s.return,ue=S;break}ue=s.return}}var LT=Math.ceil,Nu=ie.ReactCurrentDispatcher,pd=ie.ReactCurrentOwner,Sn=ie.ReactCurrentBatchConfig,Le=0,Rt=null,ht=null,xt=0,pn=0,Eo=ei(0),Et=0,Fa=null,us=0,xu=0,md=0,ja=null,nn=null,gd=0,wo=1/0,Or=null,Du=!1,yd=null,oi=null,Ou=!1,ai=null,Vu=0,Ba=0,_d=null,Lu=-1,bu=0;function Gt(){return(Le&6)!==0?He():Lu!==-1?Lu:Lu=He()}function li(r){return(r.mode&1)===0?1:(Le&2)!==0&&xt!==0?xt&-xt:_T.transition!==null?(bu===0&&(bu=Yi()),bu):(r=xe,r!==0||(r=window.event,r=r===void 0?16:ma(r.type)),r)}function zn(r,s,a,c){if(50<Ba)throw Ba=0,_d=null,Error(t(185));qr(r,a,c),((Le&2)===0||r!==Rt)&&(r===Rt&&((Le&2)===0&&(xu|=a),Et===4&&ui(r,xt)),rn(r,c),a===1&&Le===0&&(s.mode&1)===0&&(wo=He()+500,cu&&ni()))}function rn(r,s){var a=r.callbackNode;wr(r,s);var c=Xi(r,r===Rt?xt:0);if(c===0)a!==null&&ca(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&ca(a),s===1)r.tag===0?yT(Ng.bind(null,r)):pm(Ng.bind(null,r)),fT(function(){(Le&6)===0&&ni()}),a=null;else{switch(Gr(c)){case 1:a=Gi;break;case 4:a=$r;break;case 16:a=yn;break;case 536870912:a=bl;break;default:a=yn}a=Ug(a,kg.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function kg(r,s){if(Lu=-1,bu=0,(Le&6)!==0)throw Error(t(327));var a=r.callbackNode;if(To()&&r.callbackNode!==a)return null;var c=Xi(r,r===Rt?xt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Mu(r,c);else{s=c;var d=Le;Le|=2;var g=Dg();(Rt!==r||xt!==s)&&(Or=null,wo=He()+500,hs(r,s));do try{UT();break}catch(S){xg(r,S)}while(!0);bh(),Nu.current=g,Le=d,ht!==null?s=0:(Rt=null,xt=0,s=Et)}if(s!==0){if(s===2&&(d=un(r),d!==0&&(c=d,s=vd(r,d))),s===1)throw a=Fa,hs(r,0),ui(r,c),rn(r,He()),a;if(s===6)ui(r,c);else{if(d=r.current.alternate,(c&30)===0&&!bT(d)&&(s=Mu(r,c),s===2&&(g=un(r),g!==0&&(c=g,s=vd(r,g))),s===1))throw a=Fa,hs(r,0),ui(r,c),rn(r,He()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(t(345));case 2:ds(r,nn,Or);break;case 3:if(ui(r,c),(c&130023424)===c&&(s=gd+500-He(),10<s)){if(Xi(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){Gt(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Rh(ds.bind(null,r,nn,Or),s);break}ds(r,nn,Or);break;case 4:if(ui(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var v=31-Wt(c);g=1<<v,v=s[v],v>d&&(d=v),c&=~g}if(c=d,c=He()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*LT(c/1960))-c,10<c){r.timeoutHandle=Rh(ds.bind(null,r,nn,Or),c);break}ds(r,nn,Or);break;case 5:ds(r,nn,Or);break;default:throw Error(t(329))}}}return rn(r,He()),r.callbackNode===a?kg.bind(null,r):null}function vd(r,s){var a=ja;return r.current.memoizedState.isDehydrated&&(hs(r,s).flags|=256),r=Mu(r,s),r!==2&&(s=nn,nn=a,s!==null&&Ed(s)),r}function Ed(r){nn===null?nn=r:nn.push.apply(nn,r)}function bT(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],g=d.getSnapshot;d=d.value;try{if(!Mn(g(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ui(r,s){for(s&=~md,s&=~xu,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),c=1<<a;r[a]=-1,s&=~c}}function Ng(r){if((Le&6)!==0)throw Error(t(327));To();var s=Xi(r,0);if((s&1)===0)return rn(r,He()),null;var a=Mu(r,s);if(r.tag!==0&&a===2){var c=un(r);c!==0&&(s=c,a=vd(r,c))}if(a===1)throw a=Fa,hs(r,0),ui(r,s),rn(r,He()),a;if(a===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,ds(r,nn,Or),rn(r,He()),null}function wd(r,s){var a=Le;Le|=1;try{return r(s)}finally{Le=a,Le===0&&(wo=He()+500,cu&&ni())}}function cs(r){ai!==null&&ai.tag===0&&(Le&6)===0&&To();var s=Le;Le|=1;var a=Sn.transition,c=xe;try{if(Sn.transition=null,xe=1,r)return r()}finally{xe=c,Sn.transition=a,Le=s,(Le&6)===0&&ni()}}function Td(){pn=Eo.current,Ge(Eo)}function hs(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,dT(a)),ht!==null)for(a=ht.return;a!==null;){var c=a;switch(xh(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&lu();break;case 3:yo(),Ge(Zt),Ge(Mt),qh();break;case 5:Hh(c);break;case 4:yo();break;case 13:Ge(Je);break;case 19:Ge(Je);break;case 10:Mh(c.type._context);break;case 22:case 23:Td()}a=a.return}if(Rt=r,ht=r=ci(r.current,null),xt=pn=s,Et=0,Fa=null,md=xu=us=0,nn=ja=null,os!==null){for(s=0;s<os.length;s++)if(a=os[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,g=a.pending;if(g!==null){var v=g.next;g.next=d,c.next=v}a.pending=c}os=null}return r}function xg(r,s){do{var a=ht;try{if(bh(),wu.current=Ru,Tu){for(var c=Ze.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Tu=!1}if(ls=0,St=vt=Ze=null,Oa=!1,Va=0,pd.current=null,a===null||a.return===null){Et=1,Fa=s,ht=null;break}e:{var g=r,v=a.return,S=a,P=s;if(s=xt,S.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var j=P,G=S,Y=G.tag;if((G.mode&1)===0&&(Y===0||Y===11||Y===15)){var K=G.alternate;K?(G.updateQueue=K.updateQueue,G.memoizedState=K.memoizedState,G.lanes=K.lanes):(G.updateQueue=null,G.memoizedState=null)}var oe=ng(v);if(oe!==null){oe.flags&=-257,rg(oe,v,S,g,s),oe.mode&1&&tg(g,j,s),s=oe,P=j;var ce=s.updateQueue;if(ce===null){var he=new Set;he.add(P),s.updateQueue=he}else ce.add(P);break e}else{if((s&1)===0){tg(g,j,s),Id();break e}P=Error(t(426))}}else if(Ye&&S.mode&1){var at=ng(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),rg(at,v,S,g,s),Vh(_o(P,S));break e}}g=P=_o(P,S),Et!==4&&(Et=2),ja===null?ja=[g]:ja.push(g),g=v;do{switch(g.tag){case 3:g.flags|=65536,s&=-s,g.lanes|=s;var M=Zm(g,P,s);Tm(g,M);break e;case 1:S=P;var N=g.type,U=g.stateNode;if((g.flags&128)===0&&(typeof N.getDerivedStateFromError=="function"||U!==null&&typeof U.componentDidCatch=="function"&&(oi===null||!oi.has(U)))){g.flags|=65536,s&=-s,g.lanes|=s;var te=eg(g,S,s);Tm(g,te);break e}}g=g.return}while(g!==null)}Vg(a)}catch(de){s=de,ht===a&&a!==null&&(ht=a=a.return);continue}break}while(!0)}function Dg(){var r=Nu.current;return Nu.current=Ru,r===null?Ru:r}function Id(){(Et===0||Et===3||Et===2)&&(Et=4),Rt===null||(us&268435455)===0&&(xu&268435455)===0||ui(Rt,xt)}function Mu(r,s){var a=Le;Le|=2;var c=Dg();(Rt!==r||xt!==s)&&(Or=null,hs(r,s));do try{MT();break}catch(d){xg(r,d)}while(!0);if(bh(),Le=a,Nu.current=c,ht!==null)throw Error(t(261));return Rt=null,xt=0,Et}function MT(){for(;ht!==null;)Og(ht)}function UT(){for(;ht!==null&&!Vl();)Og(ht)}function Og(r){var s=Mg(r.alternate,r,pn);r.memoizedProps=r.pendingProps,s===null?Vg(r):ht=s,pd.current=null}function Vg(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=NT(a,s,pn),a!==null){ht=a;return}}else{if(a=xT(a,s),a!==null){a.flags&=32767,ht=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,ht=null;return}}if(s=s.sibling,s!==null){ht=s;return}ht=s=r}while(s!==null);Et===0&&(Et=5)}function ds(r,s,a){var c=xe,d=Sn.transition;try{Sn.transition=null,xe=1,FT(r,s,a,c)}finally{Sn.transition=d,xe=c}return null}function FT(r,s,a,c){do To();while(ai!==null);if((Le&6)!==0)throw Error(t(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var g=a.lanes|a.childLanes;if(ze(r,g),r===Rt&&(ht=Rt=null,xt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ou||(Ou=!0,Ug(yn,function(){return To(),null})),g=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||g){g=Sn.transition,Sn.transition=null;var v=xe;xe=1;var S=Le;Le|=4,pd.current=null,OT(r,a),Sg(a,r),sT(Ih),Xr=!!Th,Ih=Th=null,r.current=a,VT(a),oh(),Le=S,xe=v,Sn.transition=g}else r.current=a;if(Ou&&(Ou=!1,ai=r,Vu=d),g=r.pendingLanes,g===0&&(oi=null),Ml(a.stateNode),rn(r,He()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Du)throw Du=!1,r=yd,yd=null,r;return(Vu&1)!==0&&r.tag!==0&&To(),g=r.pendingLanes,(g&1)!==0?r===_d?Ba++:(Ba=0,_d=r):Ba=0,ni(),null}function To(){if(ai!==null){var r=Gr(Vu),s=Sn.transition,a=xe;try{if(Sn.transition=null,xe=16>r?16:r,ai===null)var c=!1;else{if(r=ai,ai=null,Vu=0,(Le&6)!==0)throw Error(t(331));var d=Le;for(Le|=4,ue=r.current;ue!==null;){var g=ue,v=g.child;if((ue.flags&16)!==0){var S=g.deletions;if(S!==null){for(var P=0;P<S.length;P++){var j=S[P];for(ue=j;ue!==null;){var G=ue;switch(G.tag){case 0:case 11:case 15:Ua(8,G,g)}var Y=G.child;if(Y!==null)Y.return=G,ue=Y;else for(;ue!==null;){G=ue;var K=G.sibling,oe=G.return;if(vg(G),G===j){ue=null;break}if(K!==null){K.return=oe,ue=K;break}ue=oe}}}var ce=g.alternate;if(ce!==null){var he=ce.child;if(he!==null){ce.child=null;do{var at=he.sibling;he.sibling=null,he=at}while(he!==null)}}ue=g}}if((g.subtreeFlags&2064)!==0&&v!==null)v.return=g,ue=v;else e:for(;ue!==null;){if(g=ue,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ua(9,g,g.return)}var M=g.sibling;if(M!==null){M.return=g.return,ue=M;break e}ue=g.return}}var N=r.current;for(ue=N;ue!==null;){v=ue;var U=v.child;if((v.subtreeFlags&2064)!==0&&U!==null)U.return=v,ue=U;else e:for(v=N;ue!==null;){if(S=ue,(S.flags&2048)!==0)try{switch(S.tag){case 0:case 11:case 15:ku(9,S)}}catch(de){nt(S,S.return,de)}if(S===v){ue=null;break e}var te=S.sibling;if(te!==null){te.return=S.return,ue=te;break e}ue=S.return}}if(Le=d,ni(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Qi,r)}catch{}c=!0}return c}finally{xe=a,Sn.transition=s}}return!1}function Lg(r,s,a){s=_o(a,s),s=Zm(r,s,1),r=ii(r,s,1),s=Gt(),r!==null&&(qr(r,1,s),rn(r,s))}function nt(r,s,a){if(r.tag===3)Lg(r,r,a);else for(;s!==null;){if(s.tag===3){Lg(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(oi===null||!oi.has(c))){r=_o(a,r),r=eg(s,r,1),s=ii(s,r,1),r=Gt(),s!==null&&(qr(s,1,r),rn(s,r));break}}s=s.return}}function jT(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=Gt(),r.pingedLanes|=r.suspendedLanes&a,Rt===r&&(xt&a)===a&&(Et===4||Et===3&&(xt&130023424)===xt&&500>He()-gd?hs(r,0):md|=a),rn(r,s)}function bg(r,s){s===0&&((r.mode&1)===0?s=1:(s=Hs,Hs<<=1,(Hs&130023424)===0&&(Hs=4194304)));var a=Gt();r=Nr(r,s),r!==null&&(qr(r,s,a),rn(r,a))}function BT(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),bg(r,a)}function zT(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(s),bg(r,a)}var Mg;Mg=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||Zt.current)tn=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return tn=!1,kT(r,s,a);tn=(r.flags&131072)!==0}else tn=!1,Ye&&(s.flags&1048576)!==0&&mm(s,du,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;Cu(r,s),r=s.pendingProps;var d=uo(s,Mt.current);mo(s,a),d=Qh(null,s,c,r,d,a);var g=Xh();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,en(c)?(g=!0,uu(s)):g=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,jh(s),d.updater=_u,s.stateNode=d,d._reactInternals=s,zh(s,c,r,a),s=id(null,s,c,!0,g,a)):(s.tag=0,Ye&&g&&Nh(s),Kt(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(Cu(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=HT(c),r=Fn(c,r),d){case 0:s=rd(null,s,c,r,a);break e;case 1:s=ug(null,s,c,r,a);break e;case 11:s=ig(null,s,c,r,a);break e;case 14:s=sg(null,s,c,Fn(c.type,r),a);break e}throw Error(t(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),rd(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),ug(r,s,c,d,a);case 3:e:{if(cg(s),r===null)throw Error(t(387));c=s.pendingProps,g=s.memoizedState,d=g.element,wm(r,s),yu(s,c,null,a);var v=s.memoizedState;if(c=v.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){d=_o(Error(t(423)),s),s=hg(r,s,c,a,d);break e}else if(c!==d){d=_o(Error(t(424)),s),s=hg(r,s,c,a,d);break e}else for(fn=Zr(s.stateNode.containerInfo.firstChild),dn=s,Ye=!0,Un=null,a=Nm(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(fo(),c===d){s=Dr(r,s,a);break e}Kt(r,s,c,a)}s=s.child}return s;case 5:return xm(s),r===null&&Oh(s),c=s.type,d=s.pendingProps,g=r!==null?r.memoizedProps:null,v=d.children,Sh(c,d)?v=null:g!==null&&Sh(c,g)&&(s.flags|=32),lg(r,s),Kt(r,s,v,a),s.child;case 6:return r===null&&Oh(s),null;case 13:return dg(r,s,a);case 4:return $h(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=go(s,null,c,a):Kt(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),ig(r,s,c,d,a);case 7:return Kt(r,s,s.pendingProps,a),s.child;case 8:return Kt(r,s,s.pendingProps.children,a),s.child;case 12:return Kt(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,g=s.memoizedProps,v=d.value,We(pu,c._currentValue),c._currentValue=v,g!==null)if(Mn(g.value,v)){if(g.children===d.children&&!Zt.current){s=Dr(r,s,a);break e}}else for(g=s.child,g!==null&&(g.return=s);g!==null;){var S=g.dependencies;if(S!==null){v=g.child;for(var P=S.firstContext;P!==null;){if(P.context===c){if(g.tag===1){P=xr(-1,a&-a),P.tag=2;var j=g.updateQueue;if(j!==null){j=j.shared;var G=j.pending;G===null?P.next=P:(P.next=G.next,G.next=P),j.pending=P}}g.lanes|=a,P=g.alternate,P!==null&&(P.lanes|=a),Uh(g.return,a,s),S.lanes|=a;break}P=P.next}}else if(g.tag===10)v=g.type===s.type?null:g.child;else if(g.tag===18){if(v=g.return,v===null)throw Error(t(341));v.lanes|=a,S=v.alternate,S!==null&&(S.lanes|=a),Uh(v,a,s),v=g.sibling}else v=g.child;if(v!==null)v.return=g;else for(v=g;v!==null;){if(v===s){v=null;break}if(g=v.sibling,g!==null){g.return=v.return,v=g;break}v=v.return}g=v}Kt(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,mo(s,a),d=Tn(d),c=c(d),s.flags|=1,Kt(r,s,c,a),s.child;case 14:return c=s.type,d=Fn(c,s.pendingProps),d=Fn(c.type,d),sg(r,s,c,d,a);case 15:return og(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Fn(c,d),Cu(r,s),s.tag=1,en(c)?(r=!0,uu(s)):r=!1,mo(s,a),Am(s,c,d),zh(s,c,d,a),id(null,s,c,!0,r,a);case 19:return pg(r,s,a);case 22:return ag(r,s,a)}throw Error(t(156,s.tag))};function Ug(r,s){return zs(r,s)}function $T(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(r,s,a,c){return new $T(r,s,a,c)}function Sd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function HT(r){if(typeof r=="function")return Sd(r)?1:0;if(r!=null){if(r=r.$$typeof,r===L)return 11;if(r===Lt)return 14}return 2}function ci(r,s){var a=r.alternate;return a===null?(a=Rn(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Uu(r,s,a,c,d,g){var v=2;if(c=r,typeof r=="function")Sd(r)&&(v=1);else if(typeof r=="string")v=5;else e:switch(r){case x:return fs(a.children,d,g,s);case R:v=8,d|=8;break;case C:return r=Rn(12,a,s,d|2),r.elementType=C,r.lanes=g,r;case A:return r=Rn(13,a,s,d),r.elementType=A,r.lanes=g,r;case st:return r=Rn(19,a,s,d),r.elementType=st,r.lanes=g,r;case Be:return Fu(a,d,g,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case k:v=10;break e;case O:v=9;break e;case L:v=11;break e;case Lt:v=14;break e;case bt:v=16,c=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return s=Rn(v,a,s,d),s.elementType=r,s.type=c,s.lanes=g,s}function fs(r,s,a,c){return r=Rn(7,r,c,s),r.lanes=a,r}function Fu(r,s,a,c){return r=Rn(22,r,c,s),r.elementType=Be,r.lanes=a,r.stateNode={isHidden:!1},r}function Rd(r,s,a){return r=Rn(6,r,null,s),r.lanes=a,r}function Ad(r,s,a){return s=Rn(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function WT(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wr(0),this.expirationTimes=Wr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wr(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Cd(r,s,a,c,d,g,v,S,P){return r=new WT(r,s,a,S,P),s===1?(s=1,g===!0&&(s|=8)):s=0,g=Rn(3,null,null,s),r.current=g,g.stateNode=r,g.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},jh(g),r}function qT(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Se,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Fg(r){if(!r)return ti;r=r._reactInternals;e:{if(Nn(r)!==r||r.tag!==1)throw Error(t(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(en(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(r.tag===1){var a=r.type;if(en(a))return dm(r,a,s)}return s}function jg(r,s,a,c,d,g,v,S,P){return r=Cd(a,c,!0,r,d,g,v,S,P),r.context=Fg(null),a=r.current,c=Gt(),d=li(a),g=xr(c,d),g.callback=s??null,ii(a,g,d),r.current.lanes=d,qr(r,d,c),rn(r,c),r}function ju(r,s,a,c){var d=s.current,g=Gt(),v=li(d);return a=Fg(a),s.context===null?s.context=a:s.pendingContext=a,s=xr(g,v),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=ii(d,s,v),r!==null&&(zn(r,d,v,g),gu(r,d,v)),v}function Bu(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Bg(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function Pd(r,s){Bg(r,s),(r=r.alternate)&&Bg(r,s)}function KT(){return null}var zg=typeof reportError=="function"?reportError:function(r){console.error(r)};function kd(r){this._internalRoot=r}zu.prototype.render=kd.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(t(409));ju(r,s,null,null)},zu.prototype.unmount=kd.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;cs(function(){ju(null,r,null,null)}),s[Ar]=null}};function zu(r){this._internalRoot=r}zu.prototype.unstable_scheduleHydration=function(r){if(r){var s=zl();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Xn.length&&s!==0&&s<Xn[a].priority;a++);Xn.splice(a,0,r),a===0&&Wl(r)}};function Nd(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function $u(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function $g(){}function GT(r,s,a,c,d){if(d){if(typeof c=="function"){var g=c;c=function(){var j=Bu(v);g.call(j)}}var v=jg(s,c,r,0,null,!1,!1,"",$g);return r._reactRootContainer=v,r[Ar]=v.current,Ra(r.nodeType===8?r.parentNode:r),cs(),v}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var S=c;c=function(){var j=Bu(P);S.call(j)}}var P=Cd(r,0,!1,null,null,!1,!1,"",$g);return r._reactRootContainer=P,r[Ar]=P.current,Ra(r.nodeType===8?r.parentNode:r),cs(function(){ju(s,P,a,c)}),P}function Hu(r,s,a,c,d){var g=a._reactRootContainer;if(g){var v=g;if(typeof d=="function"){var S=d;d=function(){var P=Bu(v);S.call(P)}}ju(s,v,r,d)}else v=GT(a,s,r,d,c);return Bu(v)}jl=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=Hr(s.pendingLanes);a!==0&&(Kr(s,a|1),rn(s,He()),(Le&6)===0&&(wo=He()+500,ni()))}break;case 13:cs(function(){var c=Nr(r,1);if(c!==null){var d=Gt();zn(c,r,1,d)}}),Pd(r,1)}},Ws=function(r){if(r.tag===13){var s=Nr(r,134217728);if(s!==null){var a=Gt();zn(s,r,134217728,a)}Pd(r,134217728)}},Bl=function(r){if(r.tag===13){var s=li(r),a=Nr(r,s);if(a!==null){var c=Gt();zn(a,r,s,c)}Pd(r,s)}},zl=function(){return xe},$l=function(r,s){var a=xe;try{return xe=r,s()}finally{xe=a}},bs=function(r,s,a){switch(s){case"input":if(Xo(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=au(c);if(!d)throw Error(t(90));Ns(c),Xo(c,d)}}}break;case"textarea":Vs(r,a);break;case"select":s=a.value,s!=null&&_r(r,!!a.multiple,s,!1)}},Hi=wd,oa=cs;var QT={usingClientEntryPoint:!1,Events:[Pa,ao,au,Gn,sa,wd]},za={findFiberByHostInstance:ns,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},XT={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ie.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=ua(r),r===null?null:r.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||KT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wu.isDisabled&&Wu.supportsFiber)try{Qi=Wu.inject(XT),ln=Wu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QT,sn.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(s))throw Error(t(200));return qT(r,s,null,a)},sn.createRoot=function(r,s){if(!Nd(r))throw Error(t(299));var a=!1,c="",d=zg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=Cd(r,1,!1,null,null,a,!1,c,d),r[Ar]=s.current,Ra(r.nodeType===8?r.parentNode:r),new kd(s)},sn.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=ua(s),r=r===null?null:r.stateNode,r},sn.flushSync=function(r){return cs(r)},sn.hydrate=function(r,s,a){if(!$u(s))throw Error(t(200));return Hu(null,r,s,!0,a)},sn.hydrateRoot=function(r,s,a){if(!Nd(r))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,g="",v=zg;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(g=a.identifierPrefix),a.onRecoverableError!==void 0&&(v=a.onRecoverableError)),s=jg(s,null,r,1,a??null,d,!1,g,v),r[Ar]=s.current,Ra(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new zu(s)},sn.render=function(r,s,a){if(!$u(s))throw Error(t(200));return Hu(null,r,s,!1,a)},sn.unmountComponentAtNode=function(r){if(!$u(r))throw Error(t(40));return r._reactRootContainer?(cs(function(){Hu(null,null,r,!1,function(){r._reactRootContainer=null,r[Ar]=null})}),!0):!1},sn.unstable_batchedUpdates=wd,sn.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!$u(a))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return Hu(r,s,a,!1,c)},sn.version="18.2.0-next-9e3b772b8-20220608",sn}var Yg;function W_(){if(Yg)return Od.exports;Yg=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Od.exports=i0(),Od.exports}var Jg;function s0(){if(Jg)return qu;Jg=1;var n=W_();return qu.createRoot=n.createRoot,qu.hydrateRoot=n.hydrateRoot,qu}var o0=s0();const a0=H_(o0);var J=Pf();const l0=H_(J),u0=JT({__proto__:null,default:l0},[J]);W_();/**
 * @remix-run/router v1.14.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function il(){return il=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},il.apply(this,arguments)}var vi;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(vi||(vi={}));const Zg="popstate";function c0(n){n===void 0&&(n={});function e(i,o){let{pathname:l,search:h,hash:f}=i.location;return Xd("",{pathname:l,search:h,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(i,o){return typeof o=="string"?o:dc(o)}return d0(e,t,null,n)}function mt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function kf(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function h0(){return Math.random().toString(36).substr(2,8)}function ey(n,e){return{usr:n.state,key:n.key,idx:e}}function Xd(n,e,t,i){return t===void 0&&(t=null),il({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?jo(e):e,{state:t,key:e&&e.key||i||h0()})}function dc(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function jo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function d0(n,e,t,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,h=o.history,f=vi.Pop,m=null,y=E();y==null&&(y=0,h.replaceState(il({},h.state,{idx:y}),""));function E(){return(h.state||{idx:null}).idx}function T(){f=vi.Pop;let D=E(),Z=D==null?null:D-y;y=D,m&&m({action:f,location:$.location,delta:Z})}function I(D,Z){f=vi.Push;let X=Xd($.location,D,Z);y=E()+1;let ee=ey(X,y),ie=$.createHref(X);try{h.pushState(ee,"",ie)}catch(Ie){if(Ie instanceof DOMException&&Ie.name==="DataCloneError")throw Ie;o.location.assign(ie)}l&&m&&m({action:f,location:$.location,delta:1})}function F(D,Z){f=vi.Replace;let X=Xd($.location,D,Z);y=E();let ee=ey(X,y),ie=$.createHref(X);h.replaceState(ee,"",ie),l&&m&&m({action:f,location:$.location,delta:0})}function z(D){let Z=o.location.origin!=="null"?o.location.origin:o.location.href,X=typeof D=="string"?D:dc(D);return mt(Z,"No window.location.(origin|href) available to create URL for href: "+X),new URL(X,Z)}let $={get action(){return f},get location(){return n(o,h)},listen(D){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(Zg,T),m=D,()=>{o.removeEventListener(Zg,T),m=null}},createHref(D){return e(o,D)},createURL:z,encodeLocation(D){let Z=z(D);return{pathname:Z.pathname,search:Z.search,hash:Z.hash}},push:I,replace:F,go(D){return h.go(D)}};return $}var ty;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(ty||(ty={}));function f0(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?jo(e):e,o=Nf(i.pathname||"/",t);if(o==null)return null;let l=q_(n);p0(l);let h=null;for(let f=0;h==null&&f<l.length;++f)h=I0(l[f],A0(o));return h}function q_(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let o=(l,h,f)=>{let m={relativePath:f===void 0?l.path||"":f,caseSensitive:l.caseSensitive===!0,childrenIndex:h,route:l};m.relativePath.startsWith("/")&&(mt(m.relativePath.startsWith(i),'Absolute route path "'+m.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),m.relativePath=m.relativePath.slice(i.length));let y=wi([i,m.relativePath]),E=t.concat(m);l.children&&l.children.length>0&&(mt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),q_(l.children,e,E,y)),!(l.path==null&&!l.index)&&e.push({path:y,score:w0(y,l.index),routesMeta:E})};return n.forEach((l,h)=>{var f;if(l.path===""||!((f=l.path)!=null&&f.includes("?")))o(l,h);else for(let m of K_(l.path))o(l,h,m)}),e}function K_(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let h=K_(i.join("/")),f=[];return f.push(...h.map(m=>m===""?l:[l,m].join("/"))),o&&f.push(...h),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function p0(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:T0(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const m0=/^:\w+$/,g0=3,y0=2,_0=1,v0=10,E0=-2,ny=n=>n==="*";function w0(n,e){let t=n.split("/"),i=t.length;return t.some(ny)&&(i+=E0),e&&(i+=y0),t.filter(o=>!ny(o)).reduce((o,l)=>o+(m0.test(l)?g0:l===""?_0:v0),i)}function T0(n,e){return n.length===e.length&&n.slice(0,-1).every((i,o)=>i===e[o])?n[n.length-1]-e[e.length-1]:0}function I0(n,e){let{routesMeta:t}=n,i={},o="/",l=[];for(let h=0;h<t.length;++h){let f=t[h],m=h===t.length-1,y=o==="/"?e:e.slice(o.length)||"/",E=S0({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},y);if(!E)return null;Object.assign(i,E.params);let T=f.route;l.push({params:i,pathname:wi([o,E.pathname]),pathnameBase:x0(wi([o,E.pathnameBase])),route:T}),E.pathnameBase!=="/"&&(o=wi([o,E.pathnameBase]))}return l}function S0(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=R0(n.path,n.caseSensitive,n.end),o=e.match(t);if(!o)return null;let l=o[0],h=l.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:i.reduce((y,E,T)=>{let{paramName:I,isOptional:F}=E;if(I==="*"){let $=f[T]||"";h=l.slice(0,l.length-$.length).replace(/(.)\/+$/,"$1")}const z=f[T];return F&&!z?y[I]=void 0:y[I]=C0(z||"",I),y},{}),pathname:l,pathnameBase:h,pattern:n}}function R0(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),kf(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(h,f,m)=>(i.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function A0(n){try{return decodeURI(n)}catch(e){return kf(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function C0(n,e){try{return decodeURIComponent(n)}catch(t){return kf(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Nf(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function P0(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:o=""}=typeof n=="string"?jo(n):n;return{pathname:t?t.startsWith("/")?t:k0(t,e):e,search:D0(i),hash:O0(o)}}function k0(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function bd(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function N0(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function G_(n,e){let t=N0(n);return e?t.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function Q_(n,e,t,i){i===void 0&&(i=!1);let o;typeof n=="string"?o=jo(n):(o=il({},n),mt(!o.pathname||!o.pathname.includes("?"),bd("?","pathname","search",o)),mt(!o.pathname||!o.pathname.includes("#"),bd("#","pathname","hash",o)),mt(!o.search||!o.search.includes("#"),bd("#","search","hash",o)));let l=n===""||o.pathname==="",h=l?"/":o.pathname,f;if(h==null)f=t;else if(i){let T=e.length===0?[]:e[e.length-1].replace(/^\//,"").split("/");if(h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T.pop();o.pathname=I.join("/")}f="/"+T.join("/")}else{let T=e.length-1;if(h.startsWith("..")){let I=h.split("/");for(;I[0]==="..";)I.shift(),T-=1;o.pathname=I.join("/")}f=T>=0?e[T]:"/"}let m=P0(o,f),y=h&&h!=="/"&&h.endsWith("/"),E=(l||h===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(y||E)&&(m.pathname+="/"),m}const wi=n=>n.join("/").replace(/\/\/+/g,"/"),x0=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),D0=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,O0=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function V0(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const X_=["post","put","patch","delete"];new Set(X_);const L0=["get",...X_];new Set(L0);/**
 * React Router v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sl(){return sl=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sl.apply(this,arguments)}const xf=J.createContext(null),b0=J.createContext(null),Ss=J.createContext(null),Oc=J.createContext(null),Li=J.createContext({outlet:null,matches:[],isDataRoute:!1}),Y_=J.createContext(null);function M0(n,e){let{relative:t}=e===void 0?{}:e;ml()||mt(!1);let{basename:i,navigator:o}=J.useContext(Ss),{hash:l,pathname:h,search:f}=Z_(n,{relative:t}),m=h;return i!=="/"&&(m=h==="/"?i:wi([i,h])),o.createHref({pathname:m,search:f,hash:l})}function ml(){return J.useContext(Oc)!=null}function gl(){return ml()||mt(!1),J.useContext(Oc).location}function J_(n){J.useContext(Ss).static||J.useLayoutEffect(n)}function Rs(){let{isDataRoute:n}=J.useContext(Li);return n?Y0():U0()}function U0(){ml()||mt(!1);let n=J.useContext(xf),{basename:e,future:t,navigator:i}=J.useContext(Ss),{matches:o}=J.useContext(Li),{pathname:l}=gl(),h=JSON.stringify(G_(o,t.v7_relativeSplatPath)),f=J.useRef(!1);return J_(()=>{f.current=!0}),J.useCallback(function(y,E){if(E===void 0&&(E={}),!f.current)return;if(typeof y=="number"){i.go(y);return}let T=Q_(y,JSON.parse(h),l,E.relative==="path");n==null&&e!=="/"&&(T.pathname=T.pathname==="/"?e:wi([e,T.pathname])),(E.replace?i.replace:i.push)(T,E.state,E)},[e,i,h,l,n])}function F0(){let{matches:n}=J.useContext(Li),e=n[n.length-1];return e?e.params:{}}function Z_(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=J.useContext(Ss),{matches:o}=J.useContext(Li),{pathname:l}=gl(),h=JSON.stringify(G_(o,i.v7_relativeSplatPath));return J.useMemo(()=>Q_(n,JSON.parse(h),l,t==="path"),[n,h,l,t])}function j0(n,e){return B0(n,e)}function B0(n,e,t,i){ml()||mt(!1);let{navigator:o}=J.useContext(Ss),{matches:l}=J.useContext(Li),h=l[l.length-1],f=h?h.params:{};h&&h.pathname;let m=h?h.pathnameBase:"/";h&&h.route;let y=gl(),E;if(e){var T;let D=typeof e=="string"?jo(e):e;m==="/"||(T=D.pathname)!=null&&T.startsWith(m)||mt(!1),E=D}else E=y;let I=E.pathname||"/",F=m==="/"?I:I.slice(m.length)||"/",z=f0(n,{pathname:F}),$=q0(z&&z.map(D=>Object.assign({},D,{params:Object.assign({},f,D.params),pathname:wi([m,o.encodeLocation?o.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?m:wi([m,o.encodeLocation?o.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),l,t,i);return e&&$?J.createElement(Oc.Provider,{value:{location:sl({pathname:"/",search:"",hash:"",state:null,key:"default"},E),navigationType:vi.Pop}},$):$}function z0(){let n=X0(),e=V0(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return J.createElement(J.Fragment,null,J.createElement("h2",null,"Unexpected Application Error!"),J.createElement("h3",{style:{fontStyle:"italic"}},e),t?J.createElement("pre",{style:o},t):null,null)}const $0=J.createElement(z0,null);class H0 extends J.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?J.createElement(Li.Provider,{value:this.props.routeContext},J.createElement(Y_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function W0(n){let{routeContext:e,match:t,children:i}=n,o=J.useContext(xf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),J.createElement(Li.Provider,{value:e},i)}function q0(n,e,t,i){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var l;if((l=t)!=null&&l.errors)n=t.matches;else return null}let h=n,f=(o=t)==null?void 0:o.errors;if(f!=null){let E=h.findIndex(T=>T.route.id&&f?.[T.route.id]);E>=0||mt(!1),h=h.slice(0,Math.min(h.length,E+1))}let m=!1,y=-1;if(t&&i&&i.v7_partialHydration)for(let E=0;E<h.length;E++){let T=h[E];if((T.route.HydrateFallback||T.route.hydrateFallbackElement)&&(y=E),T.route.loader&&T.route.id&&t.loaderData[T.route.id]===void 0&&(!t.errors||t.errors[T.route.id]===void 0)){m=!0,y>=0?h=h.slice(0,y+1):h=[h[0]];break}}return h.reduceRight((E,T,I)=>{let F,z=!1,$=null,D=null;t&&(F=f&&T.route.id?f[T.route.id]:void 0,$=T.route.errorElement||$0,m&&(y<0&&I===0?(J0("route-fallback"),z=!0,D=null):y===I&&(z=!0,D=T.route.hydrateFallbackElement||null)));let Z=e.concat(h.slice(0,I+1)),X=()=>{let ee;return F?ee=$:z?ee=D:T.route.Component?ee=J.createElement(T.route.Component,null):T.route.element?ee=T.route.element:ee=E,J.createElement(W0,{match:T,routeContext:{outlet:E,matches:Z,isDataRoute:t!=null},children:ee})};return t&&(T.route.ErrorBoundary||T.route.errorElement||I===0)?J.createElement(H0,{location:t.location,revalidation:t.revalidation,component:$,error:F,children:X(),routeContext:{outlet:null,matches:Z,isDataRoute:!0}}):X()},null)}var ev=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(ev||{}),tv=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(tv||{});function K0(n){let e=J.useContext(xf);return e||mt(!1),e}function G0(n){let e=J.useContext(b0);return e||mt(!1),e}function Q0(n){let e=J.useContext(Li);return e||mt(!1),e}function nv(n){let e=Q0(),t=e.matches[e.matches.length-1];return t.route.id||mt(!1),t.route.id}function X0(){var n;let e=J.useContext(Y_),t=G0(),i=nv();return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function Y0(){let{router:n}=K0(ev.UseNavigateStable),e=nv(tv.UseNavigateStable),t=J.useRef(!1);return J_(()=>{t.current=!0}),J.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?n.navigate(o):n.navigate(o,sl({fromRouteId:e},l)))},[n,e])}const ry={};function J0(n,e,t){ry[n]||(ry[n]=!0)}function fi(n){mt(!1)}function Z0(n){let{basename:e="/",children:t=null,location:i,navigationType:o=vi.Pop,navigator:l,static:h=!1,future:f}=n;ml()&&mt(!1);let m=e.replace(/^\/*/,"/"),y=J.useMemo(()=>({basename:m,navigator:l,static:h,future:sl({v7_relativeSplatPath:!1},f)}),[m,f,l,h]);typeof i=="string"&&(i=jo(i));let{pathname:E="/",search:T="",hash:I="",state:F=null,key:z="default"}=i,$=J.useMemo(()=>{let D=Nf(E,m);return D==null?null:{location:{pathname:D,search:T,hash:I,state:F,key:z},navigationType:o}},[m,E,T,I,F,z,o]);return $==null?null:J.createElement(Ss.Provider,{value:y},J.createElement(Oc.Provider,{children:t,value:$}))}function rv(n){let{children:e,location:t}=n;return j0(Yd(e),t)}new Promise(()=>{});function Yd(n,e){e===void 0&&(e=[]);let t=[];return J.Children.forEach(n,(i,o)=>{if(!J.isValidElement(i))return;let l=[...e,o];if(i.type===J.Fragment){t.push.apply(t,Yd(i.props.children,l));return}i.type!==fi&&mt(!1),!i.props.index||!i.props.children||mt(!1);let h={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(h.children=Yd(i.props.children,l)),t.push(h)}),t}/**
 * React Router DOM v6.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jd(){return Jd=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Jd.apply(this,arguments)}function eI(n,e){if(n==null)return{};var t={},i=Object.keys(n),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(t[o]=n[o]);return t}function tI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function nI(n,e){return n.button===0&&(!e||e==="_self")&&!tI(n)}const rI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],iI="startTransition",iy=u0[iI];function sI(n){let{basename:e,children:t,future:i,window:o}=n,l=J.useRef();l.current==null&&(l.current=c0({window:o,v5Compat:!0}));let h=l.current,[f,m]=J.useState({action:h.action,location:h.location}),{v7_startTransition:y}=i||{},E=J.useCallback(T=>{y&&iy?iy(()=>m(T)):m(T)},[m,y]);return J.useLayoutEffect(()=>h.listen(E),[h,E]),J.createElement(Z0,{basename:e,children:t,location:f.location,navigationType:f.action,navigator:h,future:i})}const oI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lI=J.forwardRef(function(e,t){let{onClick:i,relative:o,reloadDocument:l,replace:h,state:f,target:m,to:y,preventScrollReset:E,unstable_viewTransition:T}=e,I=eI(e,rI),{basename:F}=J.useContext(Ss),z,$=!1;if(typeof y=="string"&&aI.test(y)&&(z=y,oI))try{let ee=new URL(window.location.href),ie=y.startsWith("//")?new URL(ee.protocol+y):new URL(y),Ie=Nf(ie.pathname,F);ie.origin===ee.origin&&Ie!=null?y=Ie+ie.search+ie.hash:$=!0}catch{}let D=M0(y,{relative:o}),Z=uI(y,{replace:h,state:f,target:m,preventScrollReset:E,relative:o,unstable_viewTransition:T});function X(ee){i&&i(ee),ee.defaultPrevented||Z(ee)}return J.createElement("a",Jd({},I,{href:z||D,onClick:$||l?i:X,ref:t,target:m}))});var sy;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(sy||(sy={}));var oy;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(oy||(oy={}));function uI(n,e){let{target:t,replace:i,state:o,preventScrollReset:l,relative:h,unstable_viewTransition:f}=e===void 0?{}:e,m=Rs(),y=gl(),E=Z_(n,{relative:h});return J.useCallback(T=>{if(nI(T,t)){T.preventDefault();let I=i!==void 0?i:dc(y)===dc(E);m(n,{replace:I,state:o,preventScrollReset:l,relative:h,unstable_viewTransition:f})}},[y,m,E,i,o,t,n,l,h,f])}const cI=()=>{};var ay={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let o=n.charCodeAt(i);o<128?e[t++]=o:o<2048?(e[t++]=o>>6|192,e[t++]=o&63|128):(o&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=o>>18|240,e[t++]=o>>12&63|128,e[t++]=o>>6&63|128,e[t++]=o&63|128):(e[t++]=o>>12|224,e[t++]=o>>6&63|128,e[t++]=o&63|128)}return e},hI=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const o=n[t++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=n[t++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=n[t++],h=n[t++],f=n[t++],m=((o&7)<<18|(l&63)<<12|(h&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],h=n[t++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|h&63)}}return e.join("")},sv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<n.length;o+=3){const l=n[o],h=o+1<n.length,f=h?n[o+1]:0,m=o+2<n.length,y=m?n[o+2]:0,E=l>>2,T=(l&3)<<4|f>>4;let I=(f&15)<<2|y>>6,F=y&63;m||(F=64,h||(I=64)),i.push(t[E],t[T],t[I],t[F])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):hI(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<n.length;){const l=t[n.charAt(o++)],f=o<n.length?t[n.charAt(o)]:0;++o;const y=o<n.length?t[n.charAt(o)]:64;++o;const T=o<n.length?t[n.charAt(o)]:64;if(++o,l==null||f==null||y==null||T==null)throw new dI;const I=l<<2|f>>4;if(i.push(I),y!==64){const F=f<<4&240|y>>2;if(i.push(F),T!==64){const z=y<<6&192|T;i.push(z)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fI=function(n){const e=iv(n);return sv.encodeByteArray(e,!0)},fc=function(n){return fI(n).replace(/\./g,"")},ov=function(n){try{return sv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=()=>pI().__FIREBASE_DEFAULTS__,gI=()=>{if(typeof process>"u"||typeof ay>"u")return;const n=ay.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},yI=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ov(n[1]);return e&&JSON.parse(e)},Vc=()=>{try{return cI()||mI()||gI()||yI()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},av=n=>{var e,t;return(t=(e=Vc())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lv=n=>{const e=av(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},uv=()=>{var n;return(n=Vc())===null||n===void 0?void 0:n.config},cv=n=>{var e;return(e=Vc())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Df(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",o=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fc(JSON.stringify(t)),fc(JSON.stringify(h)),""].join(".")}const Ya={};function vI(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ya))Ya[e]?n.emulator.push(e):n.prod.push(e);return n}function EI(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let ly=!1;function Of(n,e){if(typeof window>"u"||typeof document>"u"||!bi(window.location.host)||Ya[n]===e||Ya[n]||ly)return;Ya[n]=e;function t(I){return`__firebase__banner__${I}`}const i="__firebase__banner",l=vI().prod.length>0;function h(){const I=document.getElementById(i);I&&I.remove()}function f(I){I.style.display="flex",I.style.background="#7faaf0",I.style.position="fixed",I.style.bottom="5px",I.style.left="5px",I.style.padding=".5em",I.style.borderRadius="5px",I.style.alignItems="center"}function m(I,F){I.setAttribute("width","24"),I.setAttribute("id",F),I.setAttribute("height","24"),I.setAttribute("viewBox","0 0 24 24"),I.setAttribute("fill","none"),I.style.marginLeft="-6px"}function y(){const I=document.createElement("span");return I.style.cursor="pointer",I.style.marginLeft="16px",I.style.fontSize="24px",I.innerHTML=" &times;",I.onclick=()=>{ly=!0,h()},I}function E(I,F){I.setAttribute("id",F),I.innerText="Learn more",I.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",I.setAttribute("target","__blank"),I.style.paddingLeft="5px",I.style.textDecoration="underline"}function T(){const I=EI(i),F=t("text"),z=document.getElementById(F)||document.createElement("span"),$=t("learnmore"),D=document.getElementById($)||document.createElement("a"),Z=t("preprendIcon"),X=document.getElementById(Z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(I.created){const ee=I.element;f(ee),E(D,$);const ie=y();m(X,Z),ee.append(X,z,D,ie),document.body.appendChild(ee)}l?(z.innerText="Preview backend disconnected.",X.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(X.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,z.innerText="Preview backend running in this workspace."),z.setAttribute("id",F)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function wI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ht())}function TI(){var n;const e=(n=Vc())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function II(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function SI(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function AI(){const n=Ht();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CI(){return!TI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function PI(){try{return typeof indexedDB=="object"}catch{return!1}}function kI(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},o.onupgradeneeded=()=>{t=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI="FirebaseError";class mr extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=NI,Object.setPrototypeOf(this,mr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yl.prototype.create)}}class yl{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},o=`${this.service}/${e}`,l=this.errors[e],h=l?xI(l,i):"Error",f=`${this.serviceName}: ${h} (${o}).`;return new mr(o,f,i)}}function xI(n,e){return n.replace(DI,(t,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const DI=/\{\$([^}]+)}/g;function OI(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _s(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const o of t){if(!i.includes(o))return!1;const l=n[o],h=e[o];if(uy(l)&&uy(h)){if(!_s(l,h))return!1}else if(l!==h)return!1}for(const o of i)if(!t.includes(o))return!1;return!0}function uy(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Wa(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function qa(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function VI(n,e){const t=new LI(n,e);return t.subscribe.bind(t)}class LI{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let o;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");bI(e,["next","error","complete"])?o=e:o={next:e,error:t,complete:i},o.next===void 0&&(o.next=Md),o.error===void 0&&(o.error=Md),o.complete===void 0&&(o.complete=Md);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bI(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Md(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class Ci{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ps="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new _I;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:t});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(FI(e))try{this.getOrInitializeService({instanceIdentifier:ps})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=ps){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ps){return this.instances.has(e)}getOptions(e=ps){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,h]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&h.resolve(o)}return o}onInit(e,t){var i;const o=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const h=this.instances.get(o);return h&&e(h,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const o of i)try{o(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:UI(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ps){return this.component?this.component.multipleInstances?e:ps:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function UI(n){return n===ps?void 0:n}function FI(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new MI(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ke;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ke||(ke={}));const BI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},zI=ke.INFO,$I={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},HI=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),o=$I[e];if(o)console[o](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vf{constructor(e){this.name=e,this._logLevel=zI,this._logHandler=HI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?BI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}const WI=(n,e)=>e.some(t=>n instanceof t);let cy,hy;function qI(){return cy||(cy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function KI(){return hy||(hy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dv=new WeakMap,Zd=new WeakMap,fv=new WeakMap,Ud=new WeakMap,Lf=new WeakMap;function GI(n){const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("success",l),n.removeEventListener("error",h)},l=()=>{t(Ti(n.result)),o()},h=()=>{i(n.error),o()};n.addEventListener("success",l),n.addEventListener("error",h)});return e.then(t=>{t instanceof IDBCursor&&dv.set(t,n)}).catch(()=>{}),Lf.set(e,n),e}function QI(n){if(Zd.has(n))return;const e=new Promise((t,i)=>{const o=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",h),n.removeEventListener("abort",h)},l=()=>{t(),o()},h=()=>{i(n.error||new DOMException("AbortError","AbortError")),o()};n.addEventListener("complete",l),n.addEventListener("error",h),n.addEventListener("abort",h)});Zd.set(n,e)}let ef={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zd.get(n);if(e==="objectStoreNames")return n.objectStoreNames||fv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ti(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function XI(n){ef=n(ef)}function YI(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Fd(this),e,...t);return fv.set(i,e.sort?e.sort():[e]),Ti(i)}:KI().includes(n)?function(...e){return n.apply(Fd(this),e),Ti(dv.get(this))}:function(...e){return Ti(n.apply(Fd(this),e))}}function JI(n){return typeof n=="function"?YI(n):(n instanceof IDBTransaction&&QI(n),WI(n,qI())?new Proxy(n,ef):n)}function Ti(n){if(n instanceof IDBRequest)return GI(n);if(Ud.has(n))return Ud.get(n);const e=JI(n);return e!==n&&(Ud.set(n,e),Lf.set(e,n)),e}const Fd=n=>Lf.get(n);function ZI(n,e,{blocked:t,upgrade:i,blocking:o,terminated:l}={}){const h=indexedDB.open(n,e),f=Ti(h);return i&&h.addEventListener("upgradeneeded",m=>{i(Ti(h.result),m.oldVersion,m.newVersion,Ti(h.transaction),m)}),t&&h.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),o&&m.addEventListener("versionchange",y=>o(y.oldVersion,y.newVersion,y))}).catch(()=>{}),f}const eS=["get","getKey","getAll","getAllKeys","count"],tS=["put","add","delete","clear"],jd=new Map;function dy(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jd.get(e))return jd.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,o=tS.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(o||eS.includes(t)))return;const l=async function(h,...f){const m=this.transaction(h,o?"readwrite":"readonly");let y=m.store;return i&&(y=y.index(f.shift())),(await Promise.all([y[t](...f),o&&m.done]))[0]};return jd.set(e,l),l}XI(n=>({...n,get:(e,t,i)=>dy(e,t)||n.get(e,t,i),has:(e,t)=>!!dy(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rS(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function rS(n){const e=n.getComponent();return e?.type==="VERSION"}const tf="@firebase/app",fy="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Vf("@firebase/app"),iS="@firebase/app-compat",sS="@firebase/analytics-compat",oS="@firebase/analytics",aS="@firebase/app-check-compat",lS="@firebase/app-check",uS="@firebase/auth",cS="@firebase/auth-compat",hS="@firebase/database",dS="@firebase/data-connect",fS="@firebase/database-compat",pS="@firebase/functions",mS="@firebase/functions-compat",gS="@firebase/installations",yS="@firebase/installations-compat",_S="@firebase/messaging",vS="@firebase/messaging-compat",ES="@firebase/performance",wS="@firebase/performance-compat",TS="@firebase/remote-config",IS="@firebase/remote-config-compat",SS="@firebase/storage",RS="@firebase/storage-compat",AS="@firebase/firestore",CS="@firebase/ai",PS="@firebase/firestore-compat",kS="firebase",NS="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nf="[DEFAULT]",xS={[tf]:"fire-core",[iS]:"fire-core-compat",[oS]:"fire-analytics",[sS]:"fire-analytics-compat",[lS]:"fire-app-check",[aS]:"fire-app-check-compat",[uS]:"fire-auth",[cS]:"fire-auth-compat",[hS]:"fire-rtdb",[dS]:"fire-data-connect",[fS]:"fire-rtdb-compat",[pS]:"fire-fn",[mS]:"fire-fn-compat",[gS]:"fire-iid",[yS]:"fire-iid-compat",[_S]:"fire-fcm",[vS]:"fire-fcm-compat",[ES]:"fire-perf",[wS]:"fire-perf-compat",[TS]:"fire-rc",[IS]:"fire-rc-compat",[SS]:"fire-gcs",[RS]:"fire-gcs-compat",[AS]:"fire-fst",[PS]:"fire-fst-compat",[CS]:"fire-vertex","fire-js":"fire-js",[kS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Map,DS=new Map,rf=new Map;function py(n,e){try{n.container.addComponent(e)}catch(t){Mr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function vs(n){const e=n.name;if(rf.has(e))return Mr.debug(`There were multiple attempts to register component ${e}.`),!1;rf.set(e,n);for(const t of pc.values())py(t,n);for(const t of DS.values())py(t,n);return!0}function Lc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function An(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ii=new yl("app","Firebase",OS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ci("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ii.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=NS;function pv(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:nf,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw Ii.create("bad-app-name",{appName:String(o)});if(t||(t=uv()),!t)throw Ii.create("no-options");const l=pc.get(o);if(l){if(_s(t,l.options)&&_s(i,l.config))return l;throw Ii.create("duplicate-app",{appName:o})}const h=new jI(o);for(const m of rf.values())h.addComponent(m);const f=new VS(t,i,h);return pc.set(o,f),f}function bf(n=nf){const e=pc.get(n);if(!e&&n===nf&&uv())return pv();if(!e)throw Ii.create("no-app",{appName:n});return e}function or(n,e,t){var i;let o=(i=xS[n])!==null&&i!==void 0?i:n;t&&(o+=`-${t}`);const l=o.match(/\s|\//),h=e.match(/\s|\//);if(l||h){const f=[`Unable to register library "${o}" with version "${e}":`];l&&f.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&h&&f.push("and"),h&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mr.warn(f.join(" "));return}vs(new Ci(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS="firebase-heartbeat-database",bS=1,ol="firebase-heartbeat-store";let Bd=null;function mv(){return Bd||(Bd=ZI(LS,bS,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ol)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ii.create("idb-open",{originalErrorMessage:n.message})})),Bd}async function MS(n){try{const t=(await mv()).transaction(ol),i=await t.objectStore(ol).get(gv(n));return await t.done,i}catch(e){if(e instanceof mr)Mr.warn(e.message);else{const t=Ii.create("idb-get",{originalErrorMessage:e?.message});Mr.warn(t.message)}}}async function my(n,e){try{const i=(await mv()).transaction(ol,"readwrite");await i.objectStore(ol).put(e,gv(n)),await i.done}catch(t){if(t instanceof mr)Mr.warn(t.message);else{const i=Ii.create("idb-set",{originalErrorMessage:t?.message});Mr.warn(i.message)}}}function gv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=1024,FS=30;class jS{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zS(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=gy();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(h=>h.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>FS){const h=$S(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Mr.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=gy(),{heartbeatsToSend:i,unsentEntries:o}=BS(this._heartbeatsCache.heartbeats),l=fc(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Mr.warn(t),""}}}function gy(){return new Date().toISOString().substring(0,10)}function BS(n,e=US){const t=[];let i=n.slice();for(const o of n){const l=t.find(h=>h.agent===o.agent);if(l){if(l.dates.push(o.date),yy(t)>e){l.dates.pop();break}}else if(t.push({agent:o.agent,dates:[o.date]}),yy(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class zS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return PI()?kI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await MS(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return my(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const o=await this.read();return my(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function yy(n){return fc(JSON.stringify({version:2,heartbeats:n})).length}function $S(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(n){vs(new Ci("platform-logger",e=>new nS(e),"PRIVATE")),vs(new Ci("heartbeat",e=>new jS(e),"PRIVATE")),or(tf,fy,n),or(tf,fy,"esm2017"),or("fire-js","")}HS("");var _y=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Si,yv;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,R){function C(){}C.prototype=R.prototype,x.D=R.prototype,x.prototype=new C,x.prototype.constructor=x,x.C=function(k,O,L){for(var A=Array(arguments.length-2),st=2;st<arguments.length;st++)A[st-2]=arguments[st];return R.prototype[O].apply(k,A)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(x,R,C){C||(C=0);var k=Array(16);if(typeof R=="string")for(var O=0;16>O;++O)k[O]=R.charCodeAt(C++)|R.charCodeAt(C++)<<8|R.charCodeAt(C++)<<16|R.charCodeAt(C++)<<24;else for(O=0;16>O;++O)k[O]=R[C++]|R[C++]<<8|R[C++]<<16|R[C++]<<24;R=x.g[0],C=x.g[1],O=x.g[2];var L=x.g[3],A=R+(L^C&(O^L))+k[0]+3614090360&4294967295;R=C+(A<<7&4294967295|A>>>25),A=L+(O^R&(C^O))+k[1]+3905402710&4294967295,L=R+(A<<12&4294967295|A>>>20),A=O+(C^L&(R^C))+k[2]+606105819&4294967295,O=L+(A<<17&4294967295|A>>>15),A=C+(R^O&(L^R))+k[3]+3250441966&4294967295,C=O+(A<<22&4294967295|A>>>10),A=R+(L^C&(O^L))+k[4]+4118548399&4294967295,R=C+(A<<7&4294967295|A>>>25),A=L+(O^R&(C^O))+k[5]+1200080426&4294967295,L=R+(A<<12&4294967295|A>>>20),A=O+(C^L&(R^C))+k[6]+2821735955&4294967295,O=L+(A<<17&4294967295|A>>>15),A=C+(R^O&(L^R))+k[7]+4249261313&4294967295,C=O+(A<<22&4294967295|A>>>10),A=R+(L^C&(O^L))+k[8]+1770035416&4294967295,R=C+(A<<7&4294967295|A>>>25),A=L+(O^R&(C^O))+k[9]+2336552879&4294967295,L=R+(A<<12&4294967295|A>>>20),A=O+(C^L&(R^C))+k[10]+4294925233&4294967295,O=L+(A<<17&4294967295|A>>>15),A=C+(R^O&(L^R))+k[11]+2304563134&4294967295,C=O+(A<<22&4294967295|A>>>10),A=R+(L^C&(O^L))+k[12]+1804603682&4294967295,R=C+(A<<7&4294967295|A>>>25),A=L+(O^R&(C^O))+k[13]+4254626195&4294967295,L=R+(A<<12&4294967295|A>>>20),A=O+(C^L&(R^C))+k[14]+2792965006&4294967295,O=L+(A<<17&4294967295|A>>>15),A=C+(R^O&(L^R))+k[15]+1236535329&4294967295,C=O+(A<<22&4294967295|A>>>10),A=R+(O^L&(C^O))+k[1]+4129170786&4294967295,R=C+(A<<5&4294967295|A>>>27),A=L+(C^O&(R^C))+k[6]+3225465664&4294967295,L=R+(A<<9&4294967295|A>>>23),A=O+(R^C&(L^R))+k[11]+643717713&4294967295,O=L+(A<<14&4294967295|A>>>18),A=C+(L^R&(O^L))+k[0]+3921069994&4294967295,C=O+(A<<20&4294967295|A>>>12),A=R+(O^L&(C^O))+k[5]+3593408605&4294967295,R=C+(A<<5&4294967295|A>>>27),A=L+(C^O&(R^C))+k[10]+38016083&4294967295,L=R+(A<<9&4294967295|A>>>23),A=O+(R^C&(L^R))+k[15]+3634488961&4294967295,O=L+(A<<14&4294967295|A>>>18),A=C+(L^R&(O^L))+k[4]+3889429448&4294967295,C=O+(A<<20&4294967295|A>>>12),A=R+(O^L&(C^O))+k[9]+568446438&4294967295,R=C+(A<<5&4294967295|A>>>27),A=L+(C^O&(R^C))+k[14]+3275163606&4294967295,L=R+(A<<9&4294967295|A>>>23),A=O+(R^C&(L^R))+k[3]+4107603335&4294967295,O=L+(A<<14&4294967295|A>>>18),A=C+(L^R&(O^L))+k[8]+1163531501&4294967295,C=O+(A<<20&4294967295|A>>>12),A=R+(O^L&(C^O))+k[13]+2850285829&4294967295,R=C+(A<<5&4294967295|A>>>27),A=L+(C^O&(R^C))+k[2]+4243563512&4294967295,L=R+(A<<9&4294967295|A>>>23),A=O+(R^C&(L^R))+k[7]+1735328473&4294967295,O=L+(A<<14&4294967295|A>>>18),A=C+(L^R&(O^L))+k[12]+2368359562&4294967295,C=O+(A<<20&4294967295|A>>>12),A=R+(C^O^L)+k[5]+4294588738&4294967295,R=C+(A<<4&4294967295|A>>>28),A=L+(R^C^O)+k[8]+2272392833&4294967295,L=R+(A<<11&4294967295|A>>>21),A=O+(L^R^C)+k[11]+1839030562&4294967295,O=L+(A<<16&4294967295|A>>>16),A=C+(O^L^R)+k[14]+4259657740&4294967295,C=O+(A<<23&4294967295|A>>>9),A=R+(C^O^L)+k[1]+2763975236&4294967295,R=C+(A<<4&4294967295|A>>>28),A=L+(R^C^O)+k[4]+1272893353&4294967295,L=R+(A<<11&4294967295|A>>>21),A=O+(L^R^C)+k[7]+4139469664&4294967295,O=L+(A<<16&4294967295|A>>>16),A=C+(O^L^R)+k[10]+3200236656&4294967295,C=O+(A<<23&4294967295|A>>>9),A=R+(C^O^L)+k[13]+681279174&4294967295,R=C+(A<<4&4294967295|A>>>28),A=L+(R^C^O)+k[0]+3936430074&4294967295,L=R+(A<<11&4294967295|A>>>21),A=O+(L^R^C)+k[3]+3572445317&4294967295,O=L+(A<<16&4294967295|A>>>16),A=C+(O^L^R)+k[6]+76029189&4294967295,C=O+(A<<23&4294967295|A>>>9),A=R+(C^O^L)+k[9]+3654602809&4294967295,R=C+(A<<4&4294967295|A>>>28),A=L+(R^C^O)+k[12]+3873151461&4294967295,L=R+(A<<11&4294967295|A>>>21),A=O+(L^R^C)+k[15]+530742520&4294967295,O=L+(A<<16&4294967295|A>>>16),A=C+(O^L^R)+k[2]+3299628645&4294967295,C=O+(A<<23&4294967295|A>>>9),A=R+(O^(C|~L))+k[0]+4096336452&4294967295,R=C+(A<<6&4294967295|A>>>26),A=L+(C^(R|~O))+k[7]+1126891415&4294967295,L=R+(A<<10&4294967295|A>>>22),A=O+(R^(L|~C))+k[14]+2878612391&4294967295,O=L+(A<<15&4294967295|A>>>17),A=C+(L^(O|~R))+k[5]+4237533241&4294967295,C=O+(A<<21&4294967295|A>>>11),A=R+(O^(C|~L))+k[12]+1700485571&4294967295,R=C+(A<<6&4294967295|A>>>26),A=L+(C^(R|~O))+k[3]+2399980690&4294967295,L=R+(A<<10&4294967295|A>>>22),A=O+(R^(L|~C))+k[10]+4293915773&4294967295,O=L+(A<<15&4294967295|A>>>17),A=C+(L^(O|~R))+k[1]+2240044497&4294967295,C=O+(A<<21&4294967295|A>>>11),A=R+(O^(C|~L))+k[8]+1873313359&4294967295,R=C+(A<<6&4294967295|A>>>26),A=L+(C^(R|~O))+k[15]+4264355552&4294967295,L=R+(A<<10&4294967295|A>>>22),A=O+(R^(L|~C))+k[6]+2734768916&4294967295,O=L+(A<<15&4294967295|A>>>17),A=C+(L^(O|~R))+k[13]+1309151649&4294967295,C=O+(A<<21&4294967295|A>>>11),A=R+(O^(C|~L))+k[4]+4149444226&4294967295,R=C+(A<<6&4294967295|A>>>26),A=L+(C^(R|~O))+k[11]+3174756917&4294967295,L=R+(A<<10&4294967295|A>>>22),A=O+(R^(L|~C))+k[2]+718787259&4294967295,O=L+(A<<15&4294967295|A>>>17),A=C+(L^(O|~R))+k[9]+3951481745&4294967295,x.g[0]=x.g[0]+R&4294967295,x.g[1]=x.g[1]+(O+(A<<21&4294967295|A>>>11))&4294967295,x.g[2]=x.g[2]+O&4294967295,x.g[3]=x.g[3]+L&4294967295}i.prototype.u=function(x,R){R===void 0&&(R=x.length);for(var C=R-this.blockSize,k=this.B,O=this.h,L=0;L<R;){if(O==0)for(;L<=C;)o(this,x,L),L+=this.blockSize;if(typeof x=="string"){for(;L<R;)if(k[O++]=x.charCodeAt(L++),O==this.blockSize){o(this,k),O=0;break}}else for(;L<R;)if(k[O++]=x[L++],O==this.blockSize){o(this,k),O=0;break}}this.h=O,this.o+=R},i.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var R=1;R<x.length-8;++R)x[R]=0;var C=8*this.o;for(R=x.length-8;R<x.length;++R)x[R]=C&255,C/=256;for(this.u(x),x=Array(16),R=C=0;4>R;++R)for(var k=0;32>k;k+=8)x[C++]=this.g[R]>>>k&255;return x};function l(x,R){var C=f;return Object.prototype.hasOwnProperty.call(C,x)?C[x]:C[x]=R(x)}function h(x,R){this.h=R;for(var C=[],k=!0,O=x.length-1;0<=O;O--){var L=x[O]|0;k&&L==R||(C[O]=L,k=!1)}this.g=C}var f={};function m(x){return-128<=x&&128>x?l(x,function(R){return new h([R|0],0>R?-1:0)}):new h([x|0],0>x?-1:0)}function y(x){if(isNaN(x)||!isFinite(x))return T;if(0>x)return D(y(-x));for(var R=[],C=1,k=0;x>=C;k++)R[k]=x/C|0,C*=4294967296;return new h(R,0)}function E(x,R){if(x.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(x.charAt(0)=="-")return D(E(x.substring(1),R));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=y(Math.pow(R,8)),k=T,O=0;O<x.length;O+=8){var L=Math.min(8,x.length-O),A=parseInt(x.substring(O,O+L),R);8>L?(L=y(Math.pow(R,L)),k=k.j(L).add(y(A))):(k=k.j(C),k=k.add(y(A)))}return k}var T=m(0),I=m(1),F=m(16777216);n=h.prototype,n.m=function(){if($(this))return-D(this).m();for(var x=0,R=1,C=0;C<this.g.length;C++){var k=this.i(C);x+=(0<=k?k:4294967296+k)*R,R*=4294967296}return x},n.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(z(this))return"0";if($(this))return"-"+D(this).toString(x);for(var R=y(Math.pow(x,6)),C=this,k="";;){var O=ie(C,R).g;C=Z(C,O.j(R));var L=((0<C.g.length?C.g[0]:C.h)>>>0).toString(x);if(C=O,z(C))return L+k;for(;6>L.length;)L="0"+L;k=L+k}},n.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function z(x){if(x.h!=0)return!1;for(var R=0;R<x.g.length;R++)if(x.g[R]!=0)return!1;return!0}function $(x){return x.h==-1}n.l=function(x){return x=Z(this,x),$(x)?-1:z(x)?0:1};function D(x){for(var R=x.g.length,C=[],k=0;k<R;k++)C[k]=~x.g[k];return new h(C,~x.h).add(I)}n.abs=function(){return $(this)?D(this):this},n.add=function(x){for(var R=Math.max(this.g.length,x.g.length),C=[],k=0,O=0;O<=R;O++){var L=k+(this.i(O)&65535)+(x.i(O)&65535),A=(L>>>16)+(this.i(O)>>>16)+(x.i(O)>>>16);k=A>>>16,L&=65535,A&=65535,C[O]=A<<16|L}return new h(C,C[C.length-1]&-2147483648?-1:0)};function Z(x,R){return x.add(D(R))}n.j=function(x){if(z(this)||z(x))return T;if($(this))return $(x)?D(this).j(D(x)):D(D(this).j(x));if($(x))return D(this.j(D(x)));if(0>this.l(F)&&0>x.l(F))return y(this.m()*x.m());for(var R=this.g.length+x.g.length,C=[],k=0;k<2*R;k++)C[k]=0;for(k=0;k<this.g.length;k++)for(var O=0;O<x.g.length;O++){var L=this.i(k)>>>16,A=this.i(k)&65535,st=x.i(O)>>>16,Lt=x.i(O)&65535;C[2*k+2*O]+=A*Lt,X(C,2*k+2*O),C[2*k+2*O+1]+=L*Lt,X(C,2*k+2*O+1),C[2*k+2*O+1]+=A*st,X(C,2*k+2*O+1),C[2*k+2*O+2]+=L*st,X(C,2*k+2*O+2)}for(k=0;k<R;k++)C[k]=C[2*k+1]<<16|C[2*k];for(k=R;k<2*R;k++)C[k]=0;return new h(C,0)};function X(x,R){for(;(x[R]&65535)!=x[R];)x[R+1]+=x[R]>>>16,x[R]&=65535,R++}function ee(x,R){this.g=x,this.h=R}function ie(x,R){if(z(R))throw Error("division by zero");if(z(x))return new ee(T,T);if($(x))return R=ie(D(x),R),new ee(D(R.g),D(R.h));if($(R))return R=ie(x,D(R)),new ee(D(R.g),R.h);if(30<x.g.length){if($(x)||$(R))throw Error("slowDivide_ only works with positive integers.");for(var C=I,k=R;0>=k.l(x);)C=Ie(C),k=Ie(k);var O=Se(C,1),L=Se(k,1);for(k=Se(k,2),C=Se(C,2);!z(k);){var A=L.add(k);0>=A.l(x)&&(O=O.add(C),L=A),k=Se(k,1),C=Se(C,1)}return R=Z(x,O.j(R)),new ee(O,R)}for(O=T;0<=x.l(R);){for(C=Math.max(1,Math.floor(x.m()/R.m())),k=Math.ceil(Math.log(C)/Math.LN2),k=48>=k?1:Math.pow(2,k-48),L=y(C),A=L.j(R);$(A)||0<A.l(x);)C-=k,L=y(C),A=L.j(R);z(L)&&(L=I),O=O.add(L),x=Z(x,A)}return new ee(O,x)}n.A=function(x){return ie(this,x).h},n.and=function(x){for(var R=Math.max(this.g.length,x.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)&x.i(k);return new h(C,this.h&x.h)},n.or=function(x){for(var R=Math.max(this.g.length,x.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)|x.i(k);return new h(C,this.h|x.h)},n.xor=function(x){for(var R=Math.max(this.g.length,x.g.length),C=[],k=0;k<R;k++)C[k]=this.i(k)^x.i(k);return new h(C,this.h^x.h)};function Ie(x){for(var R=x.g.length+1,C=[],k=0;k<R;k++)C[k]=x.i(k)<<1|x.i(k-1)>>>31;return new h(C,x.h)}function Se(x,R){var C=R>>5;R%=32;for(var k=x.g.length-C,O=[],L=0;L<k;L++)O[L]=0<R?x.i(L+C)>>>R|x.i(L+C+1)<<32-R:x.i(L+C);return new h(O,x.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,yv=i,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=y,h.fromString=E,Si=h}).apply(typeof _y<"u"?_y:typeof self<"u"?self:typeof window<"u"?window:{});var Ku=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _v,Ka,vv,nc,sf,Ev,wv,Tv;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,p,_){return u==Array.prototype||u==Object.prototype||(u[p]=_.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ku=="object"&&Ku];for(var p=0;p<u.length;++p){var _=u[p];if(_&&_.Math==Math)return _}throw Error("Cannot find global object")}var i=t(this);function o(u,p){if(p)e:{var _=i;u=u.split(".");for(var w=0;w<u.length-1;w++){var b=u[w];if(!(b in _))break e;_=_[b]}u=u[u.length-1],w=_[u],p=p(w),p!=w&&p!=null&&e(_,u,{configurable:!0,writable:!0,value:p})}}function l(u,p){u instanceof String&&(u+="");var _=0,w=!1,b={next:function(){if(!w&&_<u.length){var B=_++;return{value:p(B,u[B]),done:!1}}return w=!0,{done:!0,value:void 0}}};return b[Symbol.iterator]=function(){return b},b}o("Array.prototype.values",function(u){return u||function(){return l(this,function(p,_){return _})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},f=this||self;function m(u){var p=typeof u;return p=p!="object"?p:u?Array.isArray(u)?"array":p:"null",p=="array"||p=="object"&&typeof u.length=="number"}function y(u){var p=typeof u;return p=="object"&&u!=null||p=="function"}function E(u,p,_){return u.call.apply(u.bind,arguments)}function T(u,p,_){if(!u)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var b=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(b,w),u.apply(p,b)}}return function(){return u.apply(p,arguments)}}function I(u,p,_){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:T,I.apply(null,arguments)}function F(u,p){var _=Array.prototype.slice.call(arguments,1);return function(){var w=_.slice();return w.push.apply(w,arguments),u.apply(this,w)}}function z(u,p){function _(){}_.prototype=p.prototype,u.aa=p.prototype,u.prototype=new _,u.prototype.constructor=u,u.Qb=function(w,b,B){for(var ne=Array(arguments.length-2),je=2;je<arguments.length;je++)ne[je-2]=arguments[je];return p.prototype[b].apply(w,ne)}}function $(u){const p=u.length;if(0<p){const _=Array(p);for(let w=0;w<p;w++)_[w]=u[w];return _}return[]}function D(u,p){for(let _=1;_<arguments.length;_++){const w=arguments[_];if(m(w)){const b=u.length||0,B=w.length||0;u.length=b+B;for(let ne=0;ne<B;ne++)u[b+ne]=w[ne]}else u.push(w)}}class Z{constructor(p,_){this.i=p,this.j=_,this.h=0,this.g=null}get(){let p;return 0<this.h?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function X(u){return/^[\s\xa0]*$/.test(u)}function ee(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function ie(u){return ie[" "](u),u}ie[" "]=function(){};var Ie=ee().indexOf("Gecko")!=-1&&!(ee().toLowerCase().indexOf("webkit")!=-1&&ee().indexOf("Edge")==-1)&&!(ee().indexOf("Trident")!=-1||ee().indexOf("MSIE")!=-1)&&ee().indexOf("Edge")==-1;function Se(u,p,_){for(const w in u)p.call(_,u[w],w,u)}function x(u,p){for(const _ in u)p.call(void 0,u[_],_,u)}function R(u){const p={};for(const _ in u)p[_]=u[_];return p}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function k(u,p){let _,w;for(let b=1;b<arguments.length;b++){w=arguments[b];for(_ in w)u[_]=w[_];for(let B=0;B<C.length;B++)_=C[B],Object.prototype.hasOwnProperty.call(w,_)&&(u[_]=w[_])}}function O(u){var p=1;u=u.split(":");const _=[];for(;0<p&&u.length;)_.push(u.shift()),p--;return u.length&&_.push(u.join(":")),_}function L(u){f.setTimeout(()=>{throw u},0)}function A(){var u=me;let p=null;return u.g&&(p=u.g,u.g=u.g.next,u.g||(u.h=null),p.next=null),p}class st{constructor(){this.h=this.g=null}add(p,_){const w=Lt.get();w.set(p,_),this.h?this.h.next=w:this.g=w,this.h=w}}var Lt=new Z(()=>new bt,u=>u.reset());class bt{constructor(){this.next=this.g=this.h=null}set(p,_){this.h=p,this.g=_,this.next=null}reset(){this.next=this.g=this.h=null}}let Be,re=!1,me=new st,le=()=>{const u=f.Promise.resolve(void 0);Be=()=>{u.then(V)}};var V=()=>{for(var u;u=A();){try{u.h.call(u.g)}catch(_){L(_)}var p=Lt;p.j(u),100>p.h&&(p.h++,u.next=p.g,p.g=u)}re=!1};function q(){this.s=this.s,this.C=this.C}q.prototype.s=!1,q.prototype.ma=function(){this.s||(this.s=!0,this.N())},q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(u,p){this.type=u,this.g=this.target=p,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Re=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,p=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const _=()=>{};f.addEventListener("test",_,p),f.removeEventListener("test",_,p)}catch{}return u}();function Ce(u,p){if(fe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var _=this.type=u.type,w=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=p,p=u.relatedTarget){if(Ie){e:{try{ie(p.nodeName);var b=!0;break e}catch{}b=!1}b||(p=null)}}else _=="mouseover"?p=u.fromElement:_=="mouseout"&&(p=u.toElement);this.relatedTarget=p,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:De[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Ce.aa.h.call(this)}}z(Ce,fe);var De={2:"touch",3:"pen",4:"mouse"};Ce.prototype.h=function(){Ce.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Me="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function $e(u,p,_,w,b){this.listener=u,this.proxy=null,this.src=p,this.type=_,this.capture=!!w,this.ha=b,this.key=++Ue,this.da=this.fa=!1}function Tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function gr(u){this.src=u,this.g={},this.h=0}gr.prototype.add=function(u,p,_,w,b){var B=u.toString();u=this.g[B],u||(u=this.g[B]=[],this.h++);var ne=Br(u,p,w,b);return-1<ne?(p=u[ne],_||(p.fa=!1)):(p=new $e(p,this.src,B,!!w,b),p.fa=_,u.push(p)),p};function Ns(u,p){var _=p.type;if(_ in u.g){var w=u.g[_],b=Array.prototype.indexOf.call(w,p,void 0),B;(B=0<=b)&&Array.prototype.splice.call(w,b,1),B&&(Tt(p),u.g[_].length==0&&(delete u.g[_],u.h--))}}function Br(u,p,_,w){for(var b=0;b<u.length;++b){var B=u[b];if(!B.da&&B.listener==p&&B.capture==!!_&&B.ha==w)return b}return-1}var ji="closure_lm_"+(1e6*Math.random()|0),xs={};function Qo(u,p,_,w,b){if(Array.isArray(p)){for(var B=0;B<p.length;B++)Qo(u,p[B],_,w,b);return null}return _=Jo(_),u&&u[Me]?u.K(p,_,y(w)?!!w.capture:!1,b):Xo(u,p,_,!1,w,b)}function Xo(u,p,_,w,b,B){if(!p)throw Error("Invalid event type");var ne=y(b)?!!b.capture:!!b,je=Os(u);if(je||(u[ji]=je=new gr(u)),_=je.add(p,_,w,ne,B),_.proxy)return _;if(w=xl(),_.proxy=w,w.src=u,w.listener=_,u.addEventListener)Re||(b=ne),b===void 0&&(b=!1),u.addEventListener(p.toString(),w,b);else if(u.attachEvent)u.attachEvent(_r(p.toString()),w);else if(u.addListener&&u.removeListener)u.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return _}function xl(){function u(_){return p.call(u.src,u.listener,_)}const p=Yo;return u}function Ds(u,p,_,w,b){if(Array.isArray(p))for(var B=0;B<p.length;B++)Ds(u,p[B],_,w,b);else w=y(w)?!!w.capture:!!w,_=Jo(_),u&&u[Me]?(u=u.i,p=String(p).toString(),p in u.g&&(B=u.g[p],_=Br(B,_,w,b),-1<_&&(Tt(B[_]),Array.prototype.splice.call(B,_,1),B.length==0&&(delete u.g[p],u.h--)))):u&&(u=Os(u))&&(p=u.g[p.toString()],u=-1,p&&(u=Br(p,_,w,b)),(_=-1<u?p[u]:null)&&yr(_))}function yr(u){if(typeof u!="number"&&u&&!u.da){var p=u.src;if(p&&p[Me])Ns(p.i,u);else{var _=u.type,w=u.proxy;p.removeEventListener?p.removeEventListener(_,w,u.capture):p.detachEvent?p.detachEvent(_r(_),w):p.addListener&&p.removeListener&&p.removeListener(w),(_=Os(p))?(Ns(_,u),_.h==0&&(_.src=null,p[ji]=null)):Tt(u)}}}function _r(u){return u in xs?xs[u]:xs[u]="on"+u}function Yo(u,p){if(u.da)u=!0;else{p=new Ce(p,this);var _=u.listener,w=u.ha||u.src;u.fa&&yr(u),u=_.call(w,p)}return u}function Os(u){return u=u[ji],u instanceof gr?u:null}var Vs="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jo(u){return typeof u=="function"?u:(u[Vs]||(u[Vs]=function(p){return u.handleEvent(p)}),u[Vs])}function gt(){q.call(this),this.i=new gr(this),this.M=this,this.F=null}z(gt,q),gt.prototype[Me]=!0,gt.prototype.removeEventListener=function(u,p,_,w){Ds(this,u,p,_,w)};function yt(u,p){var _,w=u.F;if(w)for(_=[];w;w=w.F)_.push(w);if(u=u.M,w=p.type||p,typeof p=="string")p=new fe(p,u);else if(p instanceof fe)p.target=p.target||u;else{var b=p;p=new fe(w,u),k(p,b)}if(b=!0,_)for(var B=_.length-1;0<=B;B--){var ne=p.g=_[B];b=vr(ne,w,!0,p)&&b}if(ne=p.g=u,b=vr(ne,w,!0,p)&&b,b=vr(ne,w,!1,p)&&b,_)for(B=0;B<_.length;B++)ne=p.g=_[B],b=vr(ne,w,!1,p)&&b}gt.prototype.N=function(){if(gt.aa.N.call(this),this.i){var u=this.i,p;for(p in u.g){for(var _=u.g[p],w=0;w<_.length;w++)Tt(_[w]);delete u.g[p],u.h--}}this.F=null},gt.prototype.K=function(u,p,_,w){return this.i.add(String(u),p,!1,_,w)},gt.prototype.L=function(u,p,_,w){return this.i.add(String(u),p,!0,_,w)};function vr(u,p,_,w){if(p=u.i.g[String(p)],!p)return!0;p=p.concat();for(var b=!0,B=0;B<p.length;++B){var ne=p[B];if(ne&&!ne.da&&ne.capture==_){var je=ne.listener,_t=ne.ha||ne.src;ne.fa&&Ns(u.i,ne),b=je.call(_t,w)!==!1&&b}}return b&&!w.defaultPrevented}function Zo(u,p,_){if(typeof u=="function")_&&(u=I(u,_));else if(u&&typeof u.handleEvent=="function")u=I(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(p)?-1:f.setTimeout(u,p||0)}function zr(u){u.g=Zo(()=>{u.g=null,u.i&&(u.i=!1,zr(u))},u.l);const p=u.h;u.h=null,u.m.apply(null,p)}class Bi extends q{constructor(p,_){super(),this.m=p,this.l=_,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:zr(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zi(u){q.call(this),this.h=u,this.g={}}z(zi,q);var ea=[];function ta(u){Se(u.g,function(p,_){this.g.hasOwnProperty(_)&&yr(p)},u),u.g={}}zi.prototype.N=function(){zi.aa.N.call(this),ta(this)},zi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var na=f.JSON.stringify,ra=f.JSON.parse,ia=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function $i(){}$i.prototype.h=null;function Ls(u){return u.h||(u.h=u.i())}function bs(){}var gn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Kn(){fe.call(this,"d")}z(Kn,fe);function Ms(){fe.call(this,"c")}z(Ms,fe);var Gn={},sa=null;function Hi(){return sa=sa||new gt}Gn.La="serverreachability";function oa(u){fe.call(this,Gn.La,u)}z(oa,fe);function Er(u){const p=Hi();yt(p,new oa(p))}Gn.STAT_EVENT="statevent";function aa(u,p){fe.call(this,Gn.STAT_EVENT,u),this.stat=p}z(aa,fe);function ot(u){const p=Hi();yt(p,new aa(p,u))}Gn.Ma="timingevent";function Us(u,p){fe.call(this,Gn.Ma,u),this.size=p}z(Us,fe);function Pn(u,p){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},p)}function Wi(){this.g=!0}Wi.prototype.xa=function(){this.g=!1};function qi(u,p,_,w,b,B){u.info(function(){if(u.g)if(B)for(var ne="",je=B.split("&"),_t=0;_t<je.length;_t++){var Oe=je[_t].split("=");if(1<Oe.length){var It=Oe[0];Oe=Oe[1];var ct=It.split("_");ne=2<=ct.length&&ct[1]=="type"?ne+(It+"="+Oe+"&"):ne+(It+"=redacted&")}}else ne=null;else ne=B;return"XMLHTTP REQ ("+w+") [attempt "+b+"]: "+p+`
`+_+`
`+ne})}function Fs(u,p,_,w,b,B,ne){u.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+b+"]: "+p+`
`+_+`
`+B+" "+ne})}function kn(u,p,_,w){u.info(function(){return"XMLHTTP TEXT ("+p+"): "+sh(u,_)+(w?" "+w:"")})}function la(u,p){u.info(function(){return"TIMEOUT: "+p})}Wi.prototype.info=function(){};function sh(u,p){if(!u.g)return p;if(!p)return null;try{var _=JSON.parse(p);if(_){for(u=0;u<_.length;u++)if(Array.isArray(_[u])){var w=_[u];if(!(2>w.length)){var b=w[1];if(Array.isArray(b)&&!(1>b.length)){var B=b[0];if(B!="noop"&&B!="stop"&&B!="close")for(var ne=1;ne<b.length;ne++)b[ne]=""}}}}return na(_)}catch{return p}}var js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Dl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Nn;function Ki(){}z(Ki,$i),Ki.prototype.g=function(){return new XMLHttpRequest},Ki.prototype.i=function(){return{}},Nn=new Ki;function xn(u,p,_,w){this.j=u,this.i=p,this.l=_,this.R=w||1,this.U=new zi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ol}function Ol(){this.i=null,this.g="",this.h=!1}var ua={},Bs={};function zs(u,p,_){u.L=1,u.v=Kr(un(p)),u.m=_,u.P=!0,ca(u,null)}function ca(u,p){u.F=Date.now(),He(u),u.A=un(u.v);var _=u.A,w=u.R;Array.isArray(w)||(w=[String(w)]),Qr(_.i,"t",w),u.C=0,_=u.j.J,u.h=new Ol,u.g=Yl(u.j,_?p:null,!u.m),0<u.O&&(u.M=new Bi(I(u.Y,u,u.g),u.O)),p=u.U,_=u.g,w=u.ca;var b="readystatechange";Array.isArray(b)||(b&&(ea[0]=b.toString()),b=ea);for(var B=0;B<b.length;B++){var ne=Qo(_,b[B],w||p.handleEvent,!1,p.h||p);if(!ne)break;p.g[ne.key]=ne}p=u.H?R(u.H):{},u.m?(u.u||(u.u="POST"),p["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,p)):(u.u="GET",u.g.ea(u.A,u.u,null,p)),Er(),qi(u.i,u.u,u.A,u.l,u.R,u.m)}xn.prototype.ca=function(u){u=u.target;const p=this.M;p&&Jt(u)==3?p.j():this.Y(u)},xn.prototype.Y=function(u){try{if(u==this.g)e:{const ct=Jt(this.g);var p=this.g.Ba();const vn=this.g.Z();if(!(3>ct)&&(ct!=3||this.g&&(this.h.h||this.g.oa()||ga(this.g)))){this.J||ct!=4||p==7||(p==8||0>=vn?Er(3):Er(2)),Gi(this);var _=this.g.Z();this.X=_;t:if(Vl(this)){var w=ga(this.g);u="";var b=w.length,B=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yn(this),$r(this);var ne="";break t}this.h.i=new f.TextDecoder}for(p=0;p<b;p++)this.h.h=!0,u+=this.h.i.decode(w[p],{stream:!(B&&p==b-1)});w.length=0,this.h.g+=u,this.C=0,ne=this.h.g}else ne=this.g.oa();if(this.o=_==200,Fs(this.i,this.u,this.A,this.l,this.R,ct,_),this.o){if(this.T&&!this.K){t:{if(this.g){var je,_t=this.g;if((je=_t.g?_t.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!X(je)){var Oe=je;break t}}Oe=null}if(_=Oe)kn(this.i,this.l,_,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ha(this,_);else{this.o=!1,this.s=3,ot(12),yn(this),$r(this);break e}}if(this.P){_=!0;let hn;for(;!this.J&&this.C<ne.length;)if(hn=oh(this,ne),hn==Bs){ct==4&&(this.s=4,ot(14),_=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==ua){this.s=4,ot(15),kn(this.i,this.l,ne,"[Invalid Chunk]"),_=!1;break}else kn(this.i,this.l,hn,null),ha(this,hn);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ct!=4||ne.length!=0||this.h.h||(this.s=1,ot(16),_=!1),this.o=this.o&&_,!_)kn(this.i,this.l,ne,"[Invalid Chunked Response]"),yn(this),$r(this);else if(0<ne.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+ne.length),_a(It),It.M=!0,ot(11))}}else kn(this.i,this.l,ne,null),ha(this,ne);ct==4&&yn(this),this.o&&!this.J&&(ct==4?Zs(this.j,this):(this.o=!1,He(this)))}else Gs(this.g),_==400&&0<ne.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),yn(this),$r(this)}}}catch{}finally{}};function Vl(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function oh(u,p){var _=u.C,w=p.indexOf(`
`,_);return w==-1?Bs:(_=Number(p.substring(_,w)),isNaN(_)?ua:(w+=1,w+_>p.length?Bs:(p=p.slice(w,w+_),u.C=w+_,p)))}xn.prototype.cancel=function(){this.J=!0,yn(this)};function He(u){u.S=Date.now()+u.I,Ll(u,u.I)}function Ll(u,p){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Pn(I(u.ba,u),p)}function Gi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}xn.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(la(this.i,this.A),this.L!=2&&(Er(),ot(17)),yn(this),this.s=2,$r(this)):Ll(this,this.S-u)};function $r(u){u.j.G==0||u.J||Zs(u.j,u)}function yn(u){Gi(u);var p=u.M;p&&typeof p.ma=="function"&&p.ma(),u.M=null,ta(u.U),u.g&&(p=u.g,u.g=null,p.abort(),p.ma())}function ha(u,p){try{var _=u.j;if(_.G!=0&&(_.g==u||Wt(_.h,u))){if(!u.K&&Wt(_.h,u)&&_.G==3){try{var w=_.Da.g.parse(p)}catch{w=null}if(Array.isArray(w)&&w.length==3){var b=w;if(b[0]==0){e:if(!_.u){if(_.g)if(_.g.F+3e3<u.F)Js(_),bn(_);else break e;Ys(_),ot(18)}}else _.za=b[1],0<_.za-_.T&&37500>b[2]&&_.F&&_.v==0&&!_.C&&(_.C=Pn(I(_.Za,_),6e3));if(1>=Ml(_.h)&&_.ca){try{_.ca()}catch{}_.ca=void 0}}else Rr(_,11)}else if((u.K||_.g==u)&&Js(_),!X(p))for(b=_.Da.g.parse(p),p=0;p<b.length;p++){let Oe=b[p];if(_.T=Oe[0],Oe=Oe[1],_.G==2)if(Oe[0]=="c"){_.K=Oe[1],_.ia=Oe[2];const It=Oe[3];It!=null&&(_.la=It,_.j.info("VER="+_.la));const ct=Oe[4];ct!=null&&(_.Aa=ct,_.j.info("SVER="+_.Aa));const vn=Oe[5];vn!=null&&typeof vn=="number"&&0<vn&&(w=1.5*vn,_.L=w,_.j.info("backChannelRequestTimeoutMs_="+w)),w=_;const hn=u.g;if(hn){const ts=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ts){var B=w.h;B.g||ts.indexOf("spdy")==-1&&ts.indexOf("quic")==-1&&ts.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(da(B,B.h),B.h=null))}if(w.D){const to=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;to&&(w.ya=to,ze(w.I,w.D,to))}}_.G=3,_.l&&_.l.ua(),_.ba&&(_.R=Date.now()-u.F,_.j.info("Handshake RTT: "+_.R+"ms")),w=_;var ne=u;if(w.qa=Xl(w,w.J?w.ia:null,w.W),ne.K){Ul(w.h,ne);var je=ne,_t=w.L;_t&&(je.I=_t),je.B&&(Gi(je),He(je)),w.g=ne}else es(w);0<_.i.length&&Jn(_)}else Oe[0]!="stop"&&Oe[0]!="close"||Rr(_,7);else _.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?Rr(_,7):kt(_):Oe[0]!="noop"&&_.l&&_.l.ta(Oe),_.v=0)}}Er(4)}catch{}}var bl=class{constructor(u,p){this.g=u,this.map=p}};function Qi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Ml(u){return u.h?1:u.g?u.g.size:0}function Wt(u,p){return u.h?u.h==p:u.g?u.g.has(p):!1}function da(u,p){u.g?u.g.add(p):u.h=p}function Ul(u,p){u.h&&u.h==p?u.h=null:u.g&&u.g.has(p)&&u.g.delete(p)}Qi.prototype.cancel=function(){if(this.i=Fl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Fl(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let p=u.i;for(const _ of u.g.values())p=p.concat(_.D);return p}return $(u.i)}function $s(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(m(u)){for(var p=[],_=u.length,w=0;w<_;w++)p.push(u[w]);return p}p=[],_=0;for(w in u)p[_++]=u[w];return p}function Hs(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(m(u)||typeof u=="string"){var p=[];u=u.length;for(var _=0;_<u;_++)p.push(_);return p}p=[],_=0;for(const w in u)p[_++]=w;return p}}}function Hr(u,p){if(u.forEach&&typeof u.forEach=="function")u.forEach(p,void 0);else if(m(u)||typeof u=="string")Array.prototype.forEach.call(u,p,void 0);else for(var _=Hs(u),w=$s(u),b=w.length,B=0;B<b;B++)p.call(void 0,w[B],_&&_[B],u)}var Xi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ah(u,p){if(u){u=u.split("&");for(var _=0;_<u.length;_++){var w=u[_].indexOf("="),b=null;if(0<=w){var B=u[_].substring(0,w);b=u[_].substring(w+1)}else B=u[_];p(B,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function wr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof wr){this.h=u.h,Yi(this,u.j),this.o=u.o,this.g=u.g,Wr(this,u.s),this.l=u.l;var p=u.i,_=new Qn;_.i=p.i,p.g&&(_.g=new Map(p.g),_.h=p.h),qr(this,_),this.m=u.m}else u&&(p=String(u).match(Xi))?(this.h=!1,Yi(this,p[1]||"",!0),this.o=xe(p[2]||""),this.g=xe(p[3]||"",!0),Wr(this,p[4]),this.l=xe(p[5]||"",!0),qr(this,p[6]||"",!0),this.m=xe(p[7]||"")):(this.h=!1,this.i=new Qn(null,this.h))}wr.prototype.toString=function(){var u=[],p=this.j;p&&u.push(Gr(p,Ws,!0),":");var _=this.g;return(_||p=="file")&&(u.push("//"),(p=this.o)&&u.push(Gr(p,Ws,!0),"@"),u.push(encodeURIComponent(String(_)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),_=this.s,_!=null&&u.push(":",String(_))),(_=this.l)&&(this.g&&_.charAt(0)!="/"&&u.push("/"),u.push(Gr(_,_.charAt(0)=="/"?zl:Bl,!0))),(_=this.i.toString())&&u.push("?",_),(_=this.m)&&u.push("#",Gr(_,fa)),u.join("")};function un(u){return new wr(u)}function Yi(u,p,_){u.j=_?xe(p,!0):p,u.j&&(u.j=u.j.replace(/:$/,""))}function Wr(u,p){if(p){if(p=Number(p),isNaN(p)||0>p)throw Error("Bad port number "+p);u.s=p}else u.s=null}function qr(u,p,_){p instanceof Qn?(u.i=p,Xn(u.i,u.h)):(_||(p=Gr(p,$l)),u.i=new Qn(p,u.h))}function ze(u,p,_){u.i.set(p,_)}function Kr(u){return ze(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function xe(u,p){return u?p?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Gr(u,p,_){return typeof u=="string"?(u=encodeURI(u).replace(p,jl),_&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function jl(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Ws=/[#\/\?@]/g,Bl=/[#\?:]/g,zl=/[#\?]/g,$l=/[#\?@]/g,fa=/#/g;function Qn(u,p){this.h=this.g=null,this.i=u||null,this.j=!!p}function Pt(u){u.g||(u.g=new Map,u.h=0,u.i&&ah(u.i,function(p,_){u.add(decodeURIComponent(p.replace(/\+/g," ")),_)}))}n=Qn.prototype,n.add=function(u,p){Pt(this),this.i=null,u=_n(this,u);var _=this.g.get(u);return _||this.g.set(u,_=[]),_.push(p),this.h+=1,this};function Dn(u,p){Pt(u),p=_n(u,p),u.g.has(p)&&(u.i=null,u.h-=u.g.get(p).length,u.g.delete(p))}function On(u,p){return Pt(u),p=_n(u,p),u.g.has(p)}n.forEach=function(u,p){Pt(this),this.g.forEach(function(_,w){_.forEach(function(b){u.call(p,b,w,this)},this)},this)},n.na=function(){Pt(this);const u=Array.from(this.g.values()),p=Array.from(this.g.keys()),_=[];for(let w=0;w<p.length;w++){const b=u[w];for(let B=0;B<b.length;B++)_.push(p[w])}return _},n.V=function(u){Pt(this);let p=[];if(typeof u=="string")On(this,u)&&(p=p.concat(this.g.get(_n(this,u))));else{u=Array.from(this.g.values());for(let _=0;_<u.length;_++)p=p.concat(u[_])}return p},n.set=function(u,p){return Pt(this),this.i=null,u=_n(this,u),On(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[p]),this.h+=1,this},n.get=function(u,p){return u?(u=this.V(u),0<u.length?String(u[0]):p):p};function Qr(u,p,_){Dn(u,p),0<_.length&&(u.i=null,u.g.set(_n(u,p),$(_)),u.h+=_.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],p=Array.from(this.g.keys());for(var _=0;_<p.length;_++){var w=p[_];const B=encodeURIComponent(String(w)),ne=this.V(w);for(w=0;w<ne.length;w++){var b=B;ne[w]!==""&&(b+="="+encodeURIComponent(String(ne[w]))),u.push(b)}}return this.i=u.join("&")};function _n(u,p){return p=String(p),u.j&&(p=p.toLowerCase()),p}function Xn(u,p){p&&!u.j&&(Pt(u),u.i=null,u.g.forEach(function(_,w){var b=w.toLowerCase();w!=b&&(Dn(this,w),Qr(this,b,_))},u)),u.j=p}function lh(u,p){const _=new Wi;if(f.Image){const w=new Image;w.onload=F(Yt,_,"TestLoadImage: loaded",!0,p,w),w.onerror=F(Yt,_,"TestLoadImage: error",!1,p,w),w.onabort=F(Yt,_,"TestLoadImage: abort",!1,p,w),w.ontimeout=F(Yt,_,"TestLoadImage: timeout",!1,p,w),f.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=u}else p(!1)}function Hl(u,p){const _=new Wi,w=new AbortController,b=setTimeout(()=>{w.abort(),Yt(_,"TestPingServer: timeout",!1,p)},1e4);fetch(u,{signal:w.signal}).then(B=>{clearTimeout(b),B.ok?Yt(_,"TestPingServer: ok",!0,p):Yt(_,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(b),Yt(_,"TestPingServer: error",!1,p)})}function Yt(u,p,_,w,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),w(_)}catch{}}function uh(){this.g=new ia}function Wl(u,p,_){const w=_||"";try{Hr(u,function(b,B){let ne=b;y(b)&&(ne=na(b)),p.push(w+B+"="+encodeURIComponent(ne))})}catch(b){throw p.push(w+"type="+encodeURIComponent("_badmap")),b}}function Tr(u){this.l=u.Ub||null,this.j=u.eb||!1}z(Tr,$i),Tr.prototype.g=function(){return new Ji(this.l,this.j)},Tr.prototype.i=function(u){return function(){return u}}({});function Ji(u,p){gt.call(this),this.D=u,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}z(Ji,gt),n=Ji.prototype,n.open=function(u,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=p,this.readyState=1,Ln(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const p={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(p.body=u),(this.D||f).fetch(new Request(this.A,p)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vn(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ln(this)),this.g&&(this.readyState=3,Ln(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ql(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ql(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var p=u.value?u.value:new Uint8Array(0);(p=this.v.decode(p,{stream:!u.done}))&&(this.response=this.responseText+=p)}u.done?Vn(this):Ln(this),this.readyState==3&&ql(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,Vn(this))},n.Qa=function(u){this.g&&(this.response=u,Vn(this))},n.ga=function(){this.g&&Vn(this)};function Vn(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ln(u)}n.setRequestHeader=function(u,p){this.u.append(u,p)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],p=this.h.entries();for(var _=p.next();!_.done;)_=_.value,u.push(_[0]+": "+_[1]),_=p.next();return u.join(`\r
`)};function Ln(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ji.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function Ir(u){let p="";return Se(u,function(_,w){p+=w,p+=":",p+=_,p+=`\r
`}),p}function Xr(u,p,_){e:{for(w in _){var w=!1;break e}w=!0}w||(_=Ir(_),typeof u=="string"?_!=null&&encodeURIComponent(String(_)):ze(u,p,_))}function Xe(u){gt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}z(Xe,gt);var ch=/^https?$/i,pa=["POST","PUT"];n=Xe.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,p,_,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);p=p?p.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Nn.g(),this.v=this.o?Ls(this.o):Ls(Nn),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(p,String(u),!0),this.B=!1}catch(B){Zi(this,B);return}if(u=_||"",_=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var b in w)_.set(b,w[b]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const B of w.keys())_.set(B,w.get(B));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(_.keys()).find(B=>B.toLowerCase()=="content-type"),b=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(pa,p,void 0))||w||b||_.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ne]of _)this.g.setRequestHeader(B,ne);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ks(this),this.u=!0,this.g.send(u),this.u=!1}catch(B){Zi(this,B)}};function Zi(u,p){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=p,u.m=5,qs(u),cn(u)}function qs(u){u.A||(u.A=!0,yt(u,"complete"),yt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,yt(this,"complete"),yt(this,"abort"),cn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Xe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ma(this):this.bb())},n.bb=function(){ma(this)};function ma(u){if(u.h&&typeof h<"u"&&(!u.v[1]||Jt(u)!=4||u.Z()!=2)){if(u.u&&Jt(u)==4)Zo(u.Ea,0,u);else if(yt(u,"readystatechange"),Jt(u)==4){u.h=!1;try{const ne=u.Z();e:switch(ne){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var _;if(!(_=p)){var w;if(w=ne===0){var b=String(u.D).match(Xi)[1]||null;!b&&f.self&&f.self.location&&(b=f.self.location.protocol.slice(0,-1)),w=!ch.test(b?b.toLowerCase():"")}_=w}if(_)yt(u,"complete"),yt(u,"success");else{u.m=6;try{var B=2<Jt(u)?u.g.statusText:""}catch{B=""}u.l=B+" ["+u.Z()+"]",qs(u)}}finally{cn(u)}}}}function cn(u,p){if(u.g){Ks(u);const _=u.g,w=u.v[0]?()=>{}:null;u.g=null,u.v=null,p||yt(u,"ready");try{_.onreadystatechange=w}catch{}}}function Ks(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function Jt(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var p=this.g.responseText;return u&&p.indexOf(u)==0&&(p=p.substring(u.length)),ra(p)}};function ga(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Gs(u){const p={};u=(u.g&&2<=Jt(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<u.length;w++){if(X(u[w]))continue;var _=O(u[w]);const b=_[0];if(_=_[1],typeof _!="string")continue;_=_.trim();const B=p[b]||[];p[b]=B,B.push(_)}x(p,function(w){return w.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Yn(u,p,_){return _&&_.internalChannelParams&&_.internalChannelParams[u]||p}function ya(u){this.Aa=0,this.i=[],this.j=new Wi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Yn("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Yn("baseRetryDelayMs",5e3,u),this.cb=Yn("retryDelaySeedMs",1e4,u),this.Wa=Yn("forwardChannelMaxRetries",2,u),this.wa=Yn("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Qi(u&&u.concurrentRequestLimit),this.Da=new uh,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=ya.prototype,n.la=8,n.G=1,n.connect=function(u,p,_,w){ot(0),this.W=u,this.H=p||{},_&&w!==void 0&&(this.H.OSID=_,this.H.OAID=w),this.F=this.X,this.I=Xl(this,null,this.W),Jn(this)};function kt(u){if(Qs(u),u.G==3){var p=u.U++,_=un(u.I);if(ze(_,"SID",u.K),ze(_,"RID",p),ze(_,"TYPE","terminate"),Sr(u,_),p=new xn(u,u.j,p),p.L=2,p.v=Kr(un(_)),_=!1,f.navigator&&f.navigator.sendBeacon)try{_=f.navigator.sendBeacon(p.v.toString(),"")}catch{}!_&&f.Image&&(new Image().src=p.v,_=!0),_||(p.g=Yl(p.j,null),p.g.ea(p.v)),p.F=Date.now(),He(p)}Ql(u)}function bn(u){u.g&&(_a(u),u.g.cancel(),u.g=null)}function Qs(u){bn(u),u.u&&(f.clearTimeout(u.u),u.u=null),Js(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Jn(u){if(!ln(u.h)&&!u.s){u.s=!0;var p=u.Ga;Be||le(),re||(Be(),re=!0),me.add(p,u),u.B=0}}function hh(u,p){return Ml(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=p.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Pn(I(u.Ga,u,p),Gl(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const b=new xn(this,this.j,u);let B=this.o;if(this.S&&(B?(B=R(B),k(B,this.S)):B=this.S),this.m!==null||this.O||(b.H=B,B=null),this.P)e:{for(var p=0,_=0;_<this.i.length;_++){t:{var w=this.i[_];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(p+=w,4096<p){p=_;break e}if(p===4096||_===this.i.length-1){p=_+1;break e}}p=1e3}else p=1e3;p=Yr(this,b,p),_=un(this.I),ze(_,"RID",u),ze(_,"CVER",22),this.D&&ze(_,"X-HTTP-Session-Id",this.D),Sr(this,_),B&&(this.O?p="headers="+encodeURIComponent(String(Ir(B)))+"&"+p:this.m&&Xr(_,this.m,B)),da(this.h,b),this.Ua&&ze(_,"TYPE","init"),this.P?(ze(_,"$req",p),ze(_,"SID","null"),b.T=!0,zs(b,_,null)):zs(b,_,p),this.G=2}}else this.G==3&&(u?Xs(this,u):this.i.length==0||ln(this.h)||Xs(this))};function Xs(u,p){var _;p?_=p.l:_=u.U++;const w=un(u.I);ze(w,"SID",u.K),ze(w,"RID",_),ze(w,"AID",u.T),Sr(u,w),u.m&&u.o&&Xr(w,u.m,u.o),_=new xn(u,u.j,_,u.B+1),u.m===null&&(_.H=u.o),p&&(u.i=p.D.concat(u.i)),p=Yr(u,_,1e3),_.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),da(u.h,_),zs(_,w,p)}function Sr(u,p){u.H&&Se(u.H,function(_,w){ze(p,w,_)}),u.l&&Hr({},function(_,w){ze(p,w,_)})}function Yr(u,p,_){_=Math.min(u.i.length,_);var w=u.l?I(u.l.Na,u.l,u):null;e:{var b=u.i;let B=-1;for(;;){const ne=["count="+_];B==-1?0<_?(B=b[0].g,ne.push("ofs="+B)):B=0:ne.push("ofs="+B);let je=!0;for(let _t=0;_t<_;_t++){let Oe=b[_t].g;const It=b[_t].map;if(Oe-=B,0>Oe)B=Math.max(0,b[_t].g-100),je=!1;else try{Wl(It,ne,"req"+Oe+"_")}catch{w&&w(It)}}if(je){w=ne.join("&");break e}}}return u=u.i.splice(0,_),p.D=u,w}function es(u){if(!u.g&&!u.u){u.Y=1;var p=u.Fa;Be||le(),re||(Be(),re=!0),me.add(p,u),u.v=0}}function Ys(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Pn(I(u.Fa,u),Gl(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Pn(I(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),bn(this),Kl(this))};function _a(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Kl(u){u.g=new xn(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var p=un(u.qa);ze(p,"RID","rpc"),ze(p,"SID",u.K),ze(p,"AID",u.T),ze(p,"CI",u.F?"0":"1"),!u.F&&u.ja&&ze(p,"TO",u.ja),ze(p,"TYPE","xmlhttp"),Sr(u,p),u.m&&u.o&&Xr(p,u.m,u.o),u.L&&(u.g.I=u.L);var _=u.g;u=u.ia,_.L=1,_.v=Kr(un(p)),_.m=null,_.P=!0,ca(_,u)}n.Za=function(){this.C!=null&&(this.C=null,bn(this),Ys(this),ot(19))};function Js(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Zs(u,p){var _=null;if(u.g==p){Js(u),_a(u),u.g=null;var w=2}else if(Wt(u.h,p))_=p.D,Ul(u.h,p),w=1;else return;if(u.G!=0){if(p.o)if(w==1){_=p.m?p.m.length:0,p=Date.now()-p.F;var b=u.B;w=Hi(),yt(w,new Us(w,_)),Jn(u)}else es(u);else if(b=p.s,b==3||b==0&&0<p.X||!(w==1&&hh(u,p)||w==2&&Ys(u)))switch(_&&0<_.length&&(p=u.h,p.i=p.i.concat(_)),b){case 1:Rr(u,5);break;case 4:Rr(u,10);break;case 3:Rr(u,6);break;default:Rr(u,2)}}}function Gl(u,p){let _=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(_*=2),_*p}function Rr(u,p){if(u.j.info("Error code "+p),p==2){var _=I(u.fb,u),w=u.Xa;const b=!w;w=new wr(w||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Yi(w,"https"),Kr(w),b?lh(w.toString(),_):Hl(w.toString(),_)}else ot(2);u.G=0,u.l&&u.l.sa(p),Ql(u),Qs(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Ql(u){if(u.G=0,u.ka=[],u.l){const p=Fl(u.h);(p.length!=0||u.i.length!=0)&&(D(u.ka,p),D(u.ka,u.i),u.h.i.length=0,$(u.i),u.i.length=0),u.l.ra()}}function Xl(u,p,_){var w=_ instanceof wr?un(_):new wr(_);if(w.g!="")p&&(w.g=p+"."+w.g),Wr(w,w.s);else{var b=f.location;w=b.protocol,p=p?p+"."+b.hostname:b.hostname,b=+b.port;var B=new wr(null);w&&Yi(B,w),p&&(B.g=p),b&&Wr(B,b),_&&(B.l=_),w=B}return _=u.D,p=u.ya,_&&p&&ze(w,_,p),ze(w,"VER",u.la),Sr(u,w),w}function Yl(u,p,_){if(p&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return p=u.Ca&&!u.pa?new Xe(new Tr({eb:_})):new Xe(u.pa),p.Ha(u.J),p}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function va(){}n=va.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function eo(){}eo.prototype.g=function(u,p){return new qt(u,p)};function qt(u,p){gt.call(this),this.g=new ya(p),this.l=u,this.h=p&&p.messageUrlParams||null,u=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(u?u["X-WebChannel-Content-Type"]=p.messageContentType:u={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.va&&(u?u["X-WebChannel-Client-Profile"]=p.va:u={"X-WebChannel-Client-Profile":p.va}),this.g.S=u,(u=p&&p.Sb)&&!X(u)&&(this.g.m=u),this.v=p&&p.supportsCrossDomainXhr||!1,this.u=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!X(p)&&(this.g.D=p,u=this.h,u!==null&&p in u&&(u=this.h,p in u&&delete u[p])),this.j=new Zn(this)}z(qt,gt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){kt(this.g)},qt.prototype.o=function(u){var p=this.g;if(typeof u=="string"){var _={};_.__data__=u,u=_}else this.u&&(_={},_.__data__=na(u),u=_);p.i.push(new bl(p.Ya++,u)),p.G==3&&Jn(p)},qt.prototype.N=function(){this.g.l=null,delete this.j,kt(this.g),delete this.g,qt.aa.N.call(this)};function Jl(u){Kn.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var p=u.__sm__;if(p){e:{for(const _ in p){u=_;break e}u=void 0}(this.i=u)&&(u=this.i,p=p!==null&&u in p?p[u]:void 0),this.data=p}else this.data=u}z(Jl,Kn);function Zl(){Ms.call(this),this.status=1}z(Zl,Ms);function Zn(u){this.g=u}z(Zn,va),Zn.prototype.ua=function(){yt(this.g,"a")},Zn.prototype.ta=function(u){yt(this.g,new Jl(u))},Zn.prototype.sa=function(u){yt(this.g,new Zl)},Zn.prototype.ra=function(){yt(this.g,"b")},eo.prototype.createWebChannel=eo.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Tv=function(){return new eo},wv=function(){return Hi()},Ev=Gn,sf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,nc=js,Dl.COMPLETE="complete",vv=Dl,bs.EventType=gn,gn.OPEN="a",gn.CLOSE="b",gn.ERROR="c",gn.MESSAGE="d",gt.prototype.listen=gt.prototype.K,Ka=bs,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,_v=Xe}).apply(typeof Ku<"u"?Ku:typeof self<"u"?self:typeof window<"u"?window:{});const vy="@firebase/firestore",Ey="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Vf("@firebase/firestore");function Io(){return Es.logLevel}function ae(n,...e){if(Es.logLevel<=ke.DEBUG){const t=e.map(Mf);Es.debug(`Firestore (${Bo}): ${n}`,...t)}}function Ur(n,...e){if(Es.logLevel<=ke.ERROR){const t=e.map(Mf);Es.error(`Firestore (${Bo}): ${n}`,...t)}}function Pi(n,...e){if(Es.logLevel<=ke.WARN){const t=e.map(Mf);Es.warn(`Firestore (${Bo}): ${n}`,...t)}}function Mf(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(n,e,t){let i="Unexpected state";typeof e=="string"?i=e:t=e,Iv(n,i,t)}function Iv(n,e,t){let i=`FIRESTORE (${Bo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{i+=" CONTEXT: "+JSON.stringify(t)}catch{i+=" CONTEXT: "+t}throw Ur(i),new Error(i)}function Fe(n,e,t,i){let o="Unexpected state";typeof t=="string"?o=t:i=t,n||Iv(e,o,i)}function Te(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends mr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class WS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(zt.UNAUTHENTICATED))}shutdown(){}}class qS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class KS{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Fe(this.o===void 0,42304);let i=this.i;const o=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new br;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new br,e.enqueueRetryable(()=>o(this.currentUser))};const h=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await o(this.currentUser)})},f=m=>{ae("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ae("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new br)}},0),h()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(ae("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Fe(typeof i.accessToken=="string",31837,{l:i}),new Sv(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string",2055,{h:e}),new zt(e)}}class GS{constructor(e,t,i){this.P=e,this.T=t,this.I=i,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class QS{constructor(e,t,i){this.P=e,this.T=t,this.I=i}getToken(){return Promise.resolve(new GS(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class XS{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,An(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Fe(this.o===void 0,3512);const i=l=>{l.error!=null&&ae("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const h=l.token!==this.m;return this.m=l.token,ae("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const o=l=>{ae("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>o(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?o(l):ae("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wy(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Fe(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new wy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const o=YS(40);for(let l=0;l<o.length;++l)i.length<20&&o[l]<t&&(i+=e.charAt(o[l]%62))}return i}}function Ae(n,e){return n<e?-1:n>e?1:0}function of(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),o=e.codePointAt(t);if(i!==o){if(i<128&&o<128)return Ae(i,o);{const l=Rv(),h=JS(l.encode(Ty(n,t)),l.encode(Ty(e,t)));return h!==0?h:Ae(i,o)}}t+=i>65535?2:1}return Ae(n.length,e.length)}function Ty(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function JS(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Ae(n[t],e[t]);return Ae(n.length,e.length)}function Vo(n,e,t){return n.length===e.length&&n.every((i,o)=>t(i,e[o]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iy="__name__";class ir{constructor(e,t,i){t===void 0?t=0:t>e.length&&ve(637,{offset:t,range:e.length}),i===void 0?i=e.length-t:i>e.length-t&&ve(1746,{length:i,range:e.length-t}),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let o=0;o<i;o++){const l=ir.compareSegments(e.get(o),t.get(o));if(l!==0)return l}return Ae(e.length,t.length)}static compareSegments(e,t){const i=ir.isNumericId(e),o=ir.isNumericId(t);return i&&!o?-1:!i&&o?1:i&&o?ir.extractNumericId(e).compare(ir.extractNumericId(t)):of(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Si.fromString(e.substring(4,e.length-2))}}class qe extends ir{construct(e,t,i){return new qe(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new se(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(o=>o.length>0))}return new qe(t)}static emptyPath(){return new qe([])}}const ZS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends ir{construct(e,t,i){return new Ot(e,t,i)}static isValidIdentifier(e){return ZS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Iy}static keyField(){return new Ot([Iy])}static fromServerFormat(e){const t=[];let i="",o=0;const l=()=>{if(i.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let h=!1;for(;o<e.length;){const f=e[o];if(f==="\\"){if(o+1===e.length)throw new se(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[o+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new se(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,o+=2}else f==="`"?(h=!h,o++):f!=="."||h?(i+=f,o++):(l(),o++)}if(l(),h)throw new se(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(t)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(qe.fromString(e))}static fromName(e){return new pe(qe.fromString(e).popFirst(5))}static empty(){return new pe(qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return qe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new qe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n,e,t){if(!t)throw new se(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eR(n,e,t,i){if(e===!0&&i===!0)throw new se(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sy(n){if(!pe.isDocumentKey(n))throw new se(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ry(n){if(pe.isDocumentKey(n))throw new se(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Cv(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ve(12329,{type:typeof n})}function fr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new se(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bc(n);throw new se(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(n,e){const t={typeString:n};return e&&(t.value=e),t}function vl(n,e){if(!Cv(n))throw new se(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const i in e)if(e[i]){const o=e[i].typeString,l="value"in e[i]?{value:e[i].value}:void 0;if(!(i in n)){t=`JSON missing required field: '${i}'`;break}const h=n[i];if(o&&typeof h!==o){t=`JSON field '${i}' must be a ${o}.`;break}if(l!==void 0&&h!==l.value){t=`Expected '${i}' field to equal '${l.value}'`;break}}if(t)throw new se(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=-62135596800,Cy=1e6;class Qe{static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*Cy);return new Qe(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new se(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ay)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Cy}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Qe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vl(e,Qe._jsonSchema))return new Qe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ay;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Qe._jsonSchemaVersion="firestore/timestamp/1.0",Qe._jsonSchema={type:pt("string",Qe._jsonSchemaVersion),seconds:pt("number"),nanoseconds:pt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Qe(0,0))}static max(){return new we(new Qe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=-1;function tR(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,o=we.fromTimestamp(i===1e9?new Qe(t+1,0):new Qe(t,i));return new ki(o,pe.empty(),e)}function nR(n){return new ki(n.readTime,n.key,al)}class ki{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ki(we.min(),pe.empty(),al)}static max(){return new ki(we.max(),pe.empty(),al)}}function rR(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=pe.comparator(n.documentKey,e.documentKey),t!==0?t:Ae(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==iR)throw n;ae("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ve(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new W((i,o)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,o)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,o)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof W?t:W.resolve(t)}catch(t){return W.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):W.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):W.reject(t)}static resolve(e){return new W((t,i)=>{t(e)})}static reject(e){return new W((t,i)=>{i(e)})}static waitFor(e){return new W((t,i)=>{let o=0,l=0,h=!1;e.forEach(f=>{++o,f.next(()=>{++l,h&&l===o&&t()},m=>i(m))}),h=!0,l===o&&t()})}static or(e){let t=W.resolve(!1);for(const i of e)t=t.next(o=>o?W.resolve(o):i());return t}static forEach(e,t){const i=[];return e.forEach((o,l)=>{i.push(t.call(this,o,l))}),this.waitFor(i)}static mapArray(e,t){return new W((i,o)=>{const l=e.length,h=new Array(l);let f=0;for(let m=0;m<l;m++){const y=m;t(e[y]).next(E=>{h[y]=E,++f,f===l&&i(h)},E=>o(E))}})}static doWhile(e,t){return new W((i,o)=>{const l=()=>{e()===!0?t().next(()=>{l()},o):i()};l()})}}function oR(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function $o(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this._e(i),this.ae=i=>t.writeSequenceNumber(i))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Mc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff=-1;function Uc(n){return n==null}function mc(n){return n===0&&1/n==-1/0}function aR(n){return typeof n=="number"&&Number.isInteger(n)&&!mc(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="";function lR(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Py(e)),e=uR(n.get(t),e);return Py(e)}function uR(n,e){let t=e;const i=n.length;for(let o=0;o<i;o++){const l=n.charAt(o);switch(l){case"\0":t+="";break;case Pv:t+="";break;default:t+=l}}return t}function Py(n){return n+Pv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Mi(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function kv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t){this.comparator=e,this.root=t||Dt.EMPTY}insert(e,t){return new tt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const o=this.comparator(e,i.key);if(o===0)return t+i.left.size;o<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gu(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gu(this.root,e,this.comparator,!0)}}class Gu{constructor(e,t,i,o){this.isReverse=o,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&o&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Dt{constructor(e,t,i,o,l){this.key=e,this.value=t,this.color=i??Dt.RED,this.left=o??Dt.EMPTY,this.right=l??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,o,l){return new Dt(e??this.key,t??this.value,i??this.color,o??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let o=this;const l=i(e,o.key);return o=l<0?o.copy(null,null,null,o.left.insert(e,t,i),null):l===0?o.copy(null,t,null,null,null):o.copy(null,null,null,null,o.right.insert(e,t,i)),o.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,o=this;if(t(e,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(e,t),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),t(e,o.key)===0){if(o.right.isEmpty())return Dt.EMPTY;i=o.right.min(),o=o.copy(i.key,i.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(e,t))}return o.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ve(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ve(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ve(27949);return e+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ve(57766)}get value(){throw ve(16141)}get color(){throw ve(16727)}get left(){throw ve(29726)}get right(){throw ve(36894)}copy(e,t,i,o,l){return this}insert(e,t,i){return new Dt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const o=i.getNext();if(this.comparator(o.key,e[1])>=0)return;t(o.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ny(this.data.getIterator())}getIteratorFrom(e){return new Ny(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof wt)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(this.comparator(o,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new wt(this.comparator);return t.data=e,t}}class Ny{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new mn([])}unionWith(e){let t=new wt(Ot.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new mn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(o){try{return atob(o)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Nv("Invalid base64 string: "+l):l}}(e);return new Vt(t)}static fromUint8Array(e){const t=function(o){let l="";for(let h=0;h<o.length;++h)l+=String.fromCharCode(o[h]);return l}(e);return new Vt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const cR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ni(n){if(Fe(!!n,39018),typeof n=="string"){let e=0;const t=cR.exec(n);if(Fe(!!t,46558,{timestamp:n}),t[1]){let o=t[1];o=(o+"000000000").substr(0,9),e=Number(o)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:lt(n.seconds),nanos:lt(n.nanos)}}function lt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?Vt.fromBase64String(n):Vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xv="server_timestamp",Dv="__type__",Ov="__previous_value__",Vv="__local_write_time__";function jf(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dv])===null||t===void 0?void 0:t.stringValue)===xv}function Fc(n){const e=n.mapValue.fields[Ov];return jf(e)?Fc(e):e}function ll(n){const e=Ni(n.mapValue.fields[Vv].timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t,i,o,l,h,f,m,y,E){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=o,this.ssl=l,this.forceLongPolling=h,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=y,this.isUsingEmulator=E}}const gc="(default)";class ul{constructor(e,t){this.projectId=e,this.database=t||gc}static empty(){return new ul("","")}get isDefaultDatabase(){return this.database===gc}isEqual(e){return e instanceof ul&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lv="__type__",dR="__max__",Qu={mapValue:{}},bv="__vector__",yc="value";function Di(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?jf(n)?4:pR(n)?9007199254740991:fR(n)?10:11:ve(28295,{value:n})}function pr(n,e){if(n===e)return!0;const t=Di(n);if(t!==Di(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ll(n).isEqual(ll(e));case 3:return function(o,l){if(typeof o.timestampValue=="string"&&typeof l.timestampValue=="string"&&o.timestampValue.length===l.timestampValue.length)return o.timestampValue===l.timestampValue;const h=Ni(o.timestampValue),f=Ni(l.timestampValue);return h.seconds===f.seconds&&h.nanos===f.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(o,l){return xi(o.bytesValue).isEqual(xi(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(o,l){return lt(o.geoPointValue.latitude)===lt(l.geoPointValue.latitude)&&lt(o.geoPointValue.longitude)===lt(l.geoPointValue.longitude)}(n,e);case 2:return function(o,l){if("integerValue"in o&&"integerValue"in l)return lt(o.integerValue)===lt(l.integerValue);if("doubleValue"in o&&"doubleValue"in l){const h=lt(o.doubleValue),f=lt(l.doubleValue);return h===f?mc(h)===mc(f):isNaN(h)&&isNaN(f)}return!1}(n,e);case 9:return Vo(n.arrayValue.values||[],e.arrayValue.values||[],pr);case 10:case 11:return function(o,l){const h=o.mapValue.fields||{},f=l.mapValue.fields||{};if(ky(h)!==ky(f))return!1;for(const m in h)if(h.hasOwnProperty(m)&&(f[m]===void 0||!pr(h[m],f[m])))return!1;return!0}(n,e);default:return ve(52216,{left:n})}}function cl(n,e){return(n.values||[]).find(t=>pr(t,e))!==void 0}function Lo(n,e){if(n===e)return 0;const t=Di(n),i=Di(e);if(t!==i)return Ae(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(n.booleanValue,e.booleanValue);case 2:return function(l,h){const f=lt(l.integerValue||l.doubleValue),m=lt(h.integerValue||h.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(n,e);case 3:return xy(n.timestampValue,e.timestampValue);case 4:return xy(ll(n),ll(e));case 5:return of(n.stringValue,e.stringValue);case 6:return function(l,h){const f=xi(l),m=xi(h);return f.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,h){const f=l.split("/"),m=h.split("/");for(let y=0;y<f.length&&y<m.length;y++){const E=Ae(f[y],m[y]);if(E!==0)return E}return Ae(f.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,h){const f=Ae(lt(l.latitude),lt(h.latitude));return f!==0?f:Ae(lt(l.longitude),lt(h.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return Dy(n.arrayValue,e.arrayValue);case 10:return function(l,h){var f,m,y,E;const T=l.fields||{},I=h.fields||{},F=(f=T[yc])===null||f===void 0?void 0:f.arrayValue,z=(m=I[yc])===null||m===void 0?void 0:m.arrayValue,$=Ae(((y=F?.values)===null||y===void 0?void 0:y.length)||0,((E=z?.values)===null||E===void 0?void 0:E.length)||0);return $!==0?$:Dy(F,z)}(n.mapValue,e.mapValue);case 11:return function(l,h){if(l===Qu.mapValue&&h===Qu.mapValue)return 0;if(l===Qu.mapValue)return 1;if(h===Qu.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),y=h.fields||{},E=Object.keys(y);m.sort(),E.sort();for(let T=0;T<m.length&&T<E.length;++T){const I=of(m[T],E[T]);if(I!==0)return I;const F=Lo(f[m[T]],y[E[T]]);if(F!==0)return F}return Ae(m.length,E.length)}(n.mapValue,e.mapValue);default:throw ve(23264,{le:t})}}function xy(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Ae(n,e);const t=Ni(n),i=Ni(e),o=Ae(t.seconds,i.seconds);return o!==0?o:Ae(t.nanos,i.nanos)}function Dy(n,e){const t=n.values||[],i=e.values||[];for(let o=0;o<t.length&&o<i.length;++o){const l=Lo(t[o],i[o]);if(l)return l}return Ae(t.length,i.length)}function bo(n){return af(n)}function af(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ni(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return xi(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return pe.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",o=!0;for(const l of t.values||[])o?o=!1:i+=",",i+=af(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let o="{",l=!0;for(const h of i)l?l=!1:o+=",",o+=`${h}:${af(t.fields[h])}`;return o+"}"}(n.mapValue):ve(61005,{value:n})}function rc(n){switch(Di(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Fc(n);return e?16+rc(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((o,l)=>o+rc(l),0)}(n.arrayValue);case 10:case 11:return function(i){let o=0;return Mi(i.fields,(l,h)=>{o+=l.length+rc(h)}),o}(n.mapValue);default:throw ve(13486,{value:n})}}function Oy(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function lf(n){return!!n&&"integerValue"in n}function Bf(n){return!!n&&"arrayValue"in n}function Vy(n){return!!n&&"nullValue"in n}function Ly(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ic(n){return!!n&&"mapValue"in n}function fR(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Lv])===null||t===void 0?void 0:t.stringValue)===bv}function Ja(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Mi(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Ja(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ja(n.arrayValue.values[t]);return e}return Object.assign({},n)}function pR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===dR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.value=e}static empty(){return new an({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ja(t)}setAll(e){let t=Ot.emptyPath(),i={},o=[];e.forEach((h,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,i,o),i={},o=[],t=f.popLast()}h?i[f.lastSegment()]=Ja(h):o.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,o)}delete(e){const t=this.field(e.popLast());ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return pr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let o=t.mapValue.fields[e.get(i)];ic(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=o),t=o}return t.mapValue.fields}applyChanges(e,t,i){Mi(t,(o,l)=>e[o]=l);for(const o of i)delete e[o]}clone(){return new an(Ja(this.value))}}function Mv(n){const e=[];return Mi(n.fields,(t,i)=>{const o=new Ot([t]);if(ic(i)){const l=Mv(i.mapValue).fields;if(l.length===0)e.push(o);else for(const h of l)e.push(o.child(h))}else e.push(o)}),new mn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t,i,o,l,h,f){this.key=e,this.documentType=t,this.version=i,this.readTime=o,this.createTime=l,this.data=h,this.documentState=f}static newInvalidDocument(e){return new $t(e,0,we.min(),we.min(),we.min(),an.empty(),0)}static newFoundDocument(e,t,i,o){return new $t(e,1,t,we.min(),i,o,0)}static newNoDocument(e,t){return new $t(e,2,t,we.min(),we.min(),an.empty(),0)}static newUnknownDocument(e,t){return new $t(e,3,t,we.min(),we.min(),an.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=an.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=an.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $t&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $t(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,t){this.position=e,this.inclusive=t}}function by(n,e,t){let i=0;for(let o=0;o<n.position.length;o++){const l=e[o],h=n.position[o];if(l.field.isKeyField()?i=pe.comparator(pe.fromName(h.referenceValue),t.key):i=Lo(h,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function My(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!pr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e,t="asc"){this.field=e,this.dir=t}}function mR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{}class ft extends Uv{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new yR(e,t,i):t==="array-contains"?new ER(e,i):t==="in"?new wR(e,i):t==="not-in"?new TR(e,i):t==="array-contains-any"?new IR(e,i):new ft(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new _R(e,i):new vR(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Lo(t,this.value)):t!==null&&Di(this.value)===Di(t)&&this.matchesComparison(Lo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ve(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends Uv{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Wn(e,t)}matches(e){return Fv(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Fv(n){return n.op==="and"}function jv(n){return gR(n)&&Fv(n)}function gR(n){for(const e of n.filters)if(e instanceof Wn)return!1;return!0}function uf(n){if(n instanceof ft)return n.field.canonicalString()+n.op.toString()+bo(n.value);if(jv(n))return n.filters.map(e=>uf(e)).join(",");{const e=n.filters.map(t=>uf(t)).join(",");return`${n.op}(${e})`}}function Bv(n,e){return n instanceof ft?function(i,o){return o instanceof ft&&i.op===o.op&&i.field.isEqual(o.field)&&pr(i.value,o.value)}(n,e):n instanceof Wn?function(i,o){return o instanceof Wn&&i.op===o.op&&i.filters.length===o.filters.length?i.filters.reduce((l,h,f)=>l&&Bv(h,o.filters[f]),!0):!1}(n,e):void ve(19439)}function zv(n){return n instanceof ft?function(t){return`${t.field.canonicalString()} ${t.op} ${bo(t.value)}`}(n):n instanceof Wn?function(t){return t.op.toString()+" {"+t.getFilters().map(zv).join(" ,")+"}"}(n):"Filter"}class yR extends ft{constructor(e,t,i){super(e,t,i),this.key=pe.fromName(i.referenceValue)}matches(e){const t=pe.comparator(e.key,this.key);return this.matchesComparison(t)}}class _R extends ft{constructor(e,t){super(e,"in",t),this.keys=$v("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vR extends ft{constructor(e,t){super(e,"not-in",t),this.keys=$v("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function $v(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>pe.fromName(i.referenceValue))}class ER extends ft{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bf(t)&&cl(t.arrayValue,this.value)}}class wR extends ft{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cl(this.value.arrayValue,t)}}class TR extends ft{constructor(e,t){super(e,"not-in",t)}matches(e){if(cl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!cl(this.value.arrayValue,t)}}class IR extends ft{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bf(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>cl(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,t=null,i=[],o=[],l=null,h=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=o,this.limit=l,this.startAt=h,this.endAt=f,this.Pe=null}}function Uy(n,e=null,t=[],i=[],o=null,l=null,h=null){return new SR(n,e,t,i,o,l,h)}function zf(n){const e=Te(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>uf(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Uc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>bo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>bo(i)).join(",")),e.Pe=t}return e.Pe}function $f(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!mR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bv(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!My(n.startAt,e.startAt)&&My(n.endAt,e.endAt)}function cf(n){return pe.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,t=null,i=[],o=[],l=null,h="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=o,this.limit=l,this.limitType=h,this.startAt=f,this.endAt=m,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function RR(n,e,t,i,o,l,h,f){return new El(n,e,t,i,o,l,h,f)}function Hf(n){return new El(n)}function Fy(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Hv(n){return n.collectionGroup!==null}function Za(n){const e=Te(n);if(e.Te===null){e.Te=[];const t=new Set;for(const l of e.explicitOrderBy)e.Te.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let f=new wt(Ot.comparator);return h.filters.forEach(m=>{m.getFlattenedFilters().forEach(y=>{y.isInequality()&&(f=f.add(y.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Te.push(new vc(l,i))}),t.has(Ot.keyField().canonicalString())||e.Te.push(new vc(Ot.keyField(),i))}return e.Te}function ar(n){const e=Te(n);return e.Ie||(e.Ie=AR(e,Za(n))),e.Ie}function AR(n,e){if(n.limitType==="F")return Uy(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(o=>{const l=o.dir==="desc"?"asc":"desc";return new vc(o.field,l)});const t=n.endAt?new _c(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new _c(n.startAt.position,n.startAt.inclusive):null;return Uy(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function hf(n,e){const t=n.filters.concat([e]);return new El(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function df(n,e,t){return new El(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function jc(n,e){return $f(ar(n),ar(e))&&n.limitType===e.limitType}function Wv(n){return`${zf(ar(n))}|lt:${n.limitType}`}function So(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(o=>zv(o)).join(", ")}]`),Uc(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(o=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(o)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(o=>bo(o)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(o=>bo(o)).join(",")),`Target(${i})`}(ar(n))}; limitType=${n.limitType})`}function Bc(n,e){return e.isFoundDocument()&&function(i,o){const l=o.key.path;return i.collectionGroup!==null?o.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):pe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,o){for(const l of Za(i))if(!l.field.isKeyField()&&o.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,o){for(const l of i.filters)if(!l.matches(o))return!1;return!0}(n,e)&&function(i,o){return!(i.startAt&&!function(h,f,m){const y=by(h,f,m);return h.inclusive?y<=0:y<0}(i.startAt,Za(i),o)||i.endAt&&!function(h,f,m){const y=by(h,f,m);return h.inclusive?y>=0:y>0}(i.endAt,Za(i),o))}(n,e)}function CR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qv(n){return(e,t)=>{let i=!1;for(const o of Za(n)){const l=PR(o,e,t);if(l!==0)return l;i=i||o.field.isKeyField()}return 0}}function PR(n,e,t){const i=n.field.isKeyField()?pe.comparator(e.key,t.key):function(l,h,f){const m=h.data.field(l),y=f.data.field(l);return m!==null&&y!==null?Lo(m,y):ve(42886)}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return ve(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[o,l]of i)if(this.equalsFn(o,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),o=this.inner[i];if(o===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<o.length;l++)if(this.equalsFn(o[l][0],e))return void(o[l]=[e,t]);o.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return i.length===1?delete this.inner[t]:i.splice(o,1),this.innerSize--,!0;return!1}forEach(e){Mi(this.inner,(t,i)=>{for(const[o,l]of i)e(o,l)})}isEmpty(){return kv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=new tt(pe.comparator);function Fr(){return kR}const Kv=new tt(pe.comparator);function Ga(...n){let e=Kv;for(const t of n)e=e.insert(t.key,t);return e}function Gv(n){let e=Kv;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function ms(){return el()}function Qv(){return el()}function el(){return new Cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const NR=new tt(pe.comparator),xR=new wt(pe.comparator);function Ne(...n){let e=xR;for(const t of n)e=e.add(t);return e}const DR=new wt(Ae);function OR(){return DR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:mc(e)?"-0":e}}function Xv(n){return{integerValue:""+n}}function VR(n,e){return aR(e)?Xv(e):Wf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(){this._=void 0}}function LR(n,e,t){return n instanceof Ec?function(o,l){const h={fields:{[Dv]:{stringValue:xv},[Vv]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return l&&jf(l)&&(l=Fc(l)),l&&(h.fields[Ov]=l),{mapValue:h}}(t,e):n instanceof hl?Jv(n,e):n instanceof dl?Zv(n,e):function(o,l){const h=Yv(o,l),f=jy(h)+jy(o.Ee);return lf(h)&&lf(o.Ee)?Xv(f):Wf(o.serializer,f)}(n,e)}function bR(n,e,t){return n instanceof hl?Jv(n,e):n instanceof dl?Zv(n,e):t}function Yv(n,e){return n instanceof wc?function(i){return lf(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Ec extends zc{}class hl extends zc{constructor(e){super(),this.elements=e}}function Jv(n,e){const t=eE(e);for(const i of n.elements)t.some(o=>pr(o,i))||t.push(i);return{arrayValue:{values:t}}}class dl extends zc{constructor(e){super(),this.elements=e}}function Zv(n,e){let t=eE(e);for(const i of n.elements)t=t.filter(o=>!pr(o,i));return{arrayValue:{values:t}}}class wc extends zc{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function jy(n){return lt(n.integerValue||n.doubleValue)}function eE(n){return Bf(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function MR(n,e){return n.field.isEqual(e.field)&&function(i,o){return i instanceof hl&&o instanceof hl||i instanceof dl&&o instanceof dl?Vo(i.elements,o.elements,pr):i instanceof wc&&o instanceof wc?pr(i.Ee,o.Ee):i instanceof Ec&&o instanceof Ec}(n.transform,e.transform)}class UR{constructor(e,t){this.version=e,this.transformResults=t}}class Hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function sc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $c{}function tE(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qf(n.key,Hn.none()):new wl(n.key,n.data,Hn.none());{const t=n.data,i=an.empty();let o=new wt(Ot.comparator);for(let l of e.fields)if(!o.has(l)){let h=t.field(l);h===null&&l.length>1&&(l=l.popLast(),h=t.field(l)),h===null?i.delete(l):i.set(l,h),o=o.add(l)}return new Ui(n.key,i,new mn(o.toArray()),Hn.none())}}function FR(n,e,t){n instanceof wl?function(o,l,h){const f=o.value.clone(),m=zy(o.fieldTransforms,l,h.transformResults);f.setAll(m),l.convertToFoundDocument(h.version,f).setHasCommittedMutations()}(n,e,t):n instanceof Ui?function(o,l,h){if(!sc(o.precondition,l))return void l.convertToUnknownDocument(h.version);const f=zy(o.fieldTransforms,l,h.transformResults),m=l.data;m.setAll(nE(o)),m.setAll(f),l.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(n,e,t):function(o,l,h){l.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,t)}function tl(n,e,t,i){return n instanceof wl?function(l,h,f,m){if(!sc(l.precondition,h))return f;const y=l.value.clone(),E=$y(l.fieldTransforms,m,h);return y.setAll(E),h.convertToFoundDocument(h.version,y).setHasLocalMutations(),null}(n,e,t,i):n instanceof Ui?function(l,h,f,m){if(!sc(l.precondition,h))return f;const y=$y(l.fieldTransforms,m,h),E=h.data;return E.setAll(nE(l)),E.setAll(y),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,h,f){return sc(l.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):f}(n,e,t)}function jR(n,e){let t=null;for(const i of n.fieldTransforms){const o=e.data.field(i.field),l=Yv(i.transform,o||null);l!=null&&(t===null&&(t=an.empty()),t.set(i.field,l))}return t||null}function By(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,o){return i===void 0&&o===void 0||!(!i||!o)&&Vo(i,o,(l,h)=>MR(l,h))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class wl extends $c{constructor(e,t,i,o=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Ui extends $c{constructor(e,t,i,o,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=o,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function nE(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function zy(n,e,t){const i=new Map;Fe(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let o=0;o<t.length;o++){const l=n[o],h=l.transform,f=e.data.field(l.field);i.set(l.field,bR(h,f,t[o]))}return i}function $y(n,e,t){const i=new Map;for(const o of n){const l=o.transform,h=t.data.field(o.field);i.set(o.field,LR(l,h,e))}return i}class qf extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class BR extends $c{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,t,i,o){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=o}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let o=0;o<this.mutations.length;o++){const l=this.mutations[o];l.key.isEqual(e.key)&&FR(l,e,i[o])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=tl(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Qv();return this.mutations.forEach(o=>{const l=e.get(o.key),h=l.overlayedDocument;let f=this.applyToLocalView(h,l.mutatedFields);f=t.has(o.key)?null:f;const m=tE(h,f);m!==null&&i.set(o.key,m),h.isValidDocument()||h.convertToNoDocument(we.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ne())}isEqual(e){return this.batchId===e.batchId&&Vo(this.mutations,e.mutations,(t,i)=>By(t,i))&&Vo(this.baseMutations,e.baseMutations,(t,i)=>By(t,i))}}class Kf{constructor(e,t,i,o){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=o}static from(e,t,i){Fe(e.mutations.length===i.length,58842,{Ve:e.mutations.length,me:i.length});let o=function(){return NR}();const l=e.mutations;for(let h=0;h<l.length;h++)o=o.insert(l[h].key,i[h].version);return new Kf(e,t,i,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dt,Ve;function WR(n){switch(n){case H.OK:return ve(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ve(15467,{code:n})}}function rE(n){if(n===void 0)return Ur("GRPC error has no .code"),H.UNKNOWN;switch(n){case dt.OK:return H.OK;case dt.CANCELLED:return H.CANCELLED;case dt.UNKNOWN:return H.UNKNOWN;case dt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case dt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case dt.INTERNAL:return H.INTERNAL;case dt.UNAVAILABLE:return H.UNAVAILABLE;case dt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case dt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case dt.NOT_FOUND:return H.NOT_FOUND;case dt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case dt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case dt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case dt.ABORTED:return H.ABORTED;case dt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case dt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case dt.DATA_LOSS:return H.DATA_LOSS;default:return ve(39323,{code:n})}}(Ve=dt||(dt={}))[Ve.OK=0]="OK",Ve[Ve.CANCELLED=1]="CANCELLED",Ve[Ve.UNKNOWN=2]="UNKNOWN",Ve[Ve.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ve[Ve.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ve[Ve.NOT_FOUND=5]="NOT_FOUND",Ve[Ve.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ve[Ve.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ve[Ve.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ve[Ve.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ve[Ve.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ve[Ve.ABORTED=10]="ABORTED",Ve[Ve.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ve[Ve.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ve[Ve.INTERNAL=13]="INTERNAL",Ve[Ve.UNAVAILABLE=14]="UNAVAILABLE",Ve[Ve.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Si([4294967295,4294967295],0);function Hy(n){const e=Rv().encode(n),t=new yv;return t.update(e),new Uint8Array(t.digest())}function Wy(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),o=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Si([t,i],0),new Si([o,l],0)]}class Gf{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Qa(`Invalid padding: ${t}`);if(i<0)throw new Qa(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Qa(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Qa(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Si.fromNumber(this.fe)}pe(e,t,i){let o=e.add(t.multiply(Si.fromNumber(i)));return o.compare(qR)===1&&(o=new Si([o.getBits(0),o.getBits(1)],0)),o.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Hy(e),[i,o]=Wy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);if(!this.ye(h))return!1}return!0}static create(e,t,i){const o=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),h=new Gf(l,o,t);return i.forEach(f=>h.insert(f)),h}insert(e){if(this.fe===0)return;const t=Hy(e),[i,o]=Wy(t);for(let l=0;l<this.hashCount;l++){const h=this.pe(i,o,l);this.we(h)}}we(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Qa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t,i,o,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=o,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const o=new Map;return o.set(e,Tl.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new Hc(we.min(),o,new tt(Ae),Fr(),Ne())}}class Tl{constructor(e,t,i,o,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=o,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new Tl(i,t,Ne(),Ne(),Ne())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,i,o){this.Se=e,this.removedTargetIds=t,this.key=i,this.be=o}}class iE{constructor(e,t){this.targetId=e,this.De=t}}class sE{constructor(e,t,i=Vt.EMPTY_BYTE_STRING,o=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=o}}class qy{constructor(){this.ve=0,this.Ce=Ky(),this.Fe=Vt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ne(),t=Ne(),i=Ne();return this.Ce.forEach((o,l)=>{switch(l){case 0:e=e.add(o);break;case 2:t=t.add(o);break;case 1:i=i.add(o);break;default:ve(38017,{changeType:l})}}),new Tl(this.Fe,this.Me,e,t,i)}ke(){this.xe=!1,this.Ce=Ky()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Fe(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class KR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Fr(),this.je=Xu(),this.Je=Xu(),this.He=new tt(Ae)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const i=this.tt(t);switch(e.state){case 0:this.nt(t)&&i.Be(e.resumeToken);break;case 1:i.Ue(),i.Oe||i.ke(),i.Be(e.resumeToken);break;case 2:i.Ue(),i.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(i.Ke(),i.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),i.Be(e.resumeToken));break;default:ve(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((i,o)=>{this.nt(o)&&t(o)})}it(e){const t=e.targetId,i=e.De.count,o=this.st(t);if(o){const l=o.target;if(cf(l))if(i===0){const h=new pe(l.path);this.Xe(t,h,$t.newNoDocument(h,we.min()))}else Fe(i===1,20013,{expectedCount:i});else{const h=this.ot(t);if(h!==i){const f=this._t(e),m=f?this.ut(f,e,h):1;if(m!==0){this.rt(t);const y=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,y)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:o=0},hashCount:l=0}=t;let h,f;try{h=xi(i).toUint8Array()}catch(m){if(m instanceof Nv)return Pi("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new Gf(h,o,l)}catch(m){return Pi(m instanceof Qa?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.fe===0?null:f}ut(e,t,i){return t.De.count===i-this.ht(e,t.targetId)?0:2}ht(e,t){const i=this.We.getRemoteKeysForTarget(t);let o=0;return i.forEach(l=>{const h=this.We.lt(),f=`projects/${h.projectId}/databases/${h.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,l,null),o++)}),o}Pt(e){const t=new Map;this.Ge.forEach((l,h)=>{const f=this.st(h);if(f){if(l.current&&cf(f.target)){const m=new pe(f.target.path);this.Tt(m).has(h)||this.It(h,m)||this.Xe(h,m,$t.newNoDocument(m,e))}l.Ne&&(t.set(h,l.Le()),l.ke())}});let i=Ne();this.Je.forEach((l,h)=>{let f=!0;h.forEachWhile(m=>{const y=this.st(m);return!y||y.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(i=i.add(l))}),this.ze.forEach((l,h)=>h.setReadTime(e));const o=new Hc(e,t,this.He,this.ze,i);return this.ze=Fr(),this.je=Xu(),this.Je=Xu(),this.He=new tt(Ae),o}Ze(e,t){if(!this.nt(e))return;const i=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,i),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,i){if(!this.nt(e))return;const o=this.tt(e);this.It(e,t)?o.qe(t,1):o.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),i&&(this.ze=this.ze.insert(t,i))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new qy,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new wt(Ae),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new wt(Ae),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||ae("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new qy),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Xu(){return new tt(pe.comparator)}function Ky(){return new tt(pe.comparator)}const GR={asc:"ASCENDING",desc:"DESCENDING"},QR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},XR={and:"AND",or:"OR"};class YR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ff(n,e){return n.useProto3Json||Uc(e)?e:{value:e}}function Tc(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oE(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function JR(n,e){return Tc(n,e.toTimestamp())}function lr(n){return Fe(!!n,49232),we.fromTimestamp(function(t){const i=Ni(t);return new Qe(i.seconds,i.nanos)}(n))}function Qf(n,e){return pf(n,e).canonicalString()}function pf(n,e){const t=function(o){return new qe(["projects",o.projectId,"databases",o.database])}(n).child("documents");return e===void 0?t:t.child(e)}function aE(n){const e=qe.fromString(n);return Fe(dE(e),10190,{key:e.toString()}),e}function mf(n,e){return Qf(n.databaseId,e.path)}function zd(n,e){const t=aE(e);if(t.get(1)!==n.databaseId.projectId)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new se(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new pe(uE(t))}function lE(n,e){return Qf(n.databaseId,e)}function ZR(n){const e=aE(n);return e.length===4?qe.emptyPath():uE(e)}function gf(n){return new qe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uE(n){return Fe(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Gy(n,e,t){return{name:mf(n,e),fields:t.value.mapValue.fields}}function eA(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:ve(39313,{state:y})}(e.targetChange.targetChangeType||"NO_CHANGE"),o=e.targetChange.targetIds||[],l=function(y,E){return y.useProto3Json?(Fe(E===void 0||typeof E=="string",58123),Vt.fromBase64String(E||"")):(Fe(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Vt.fromUint8Array(E||new Uint8Array))}(n,e.targetChange.resumeToken),h=e.targetChange.cause,f=h&&function(y){const E=y.code===void 0?H.UNKNOWN:rE(y.code);return new se(E,y.message||"")}(h);t=new sE(i,o,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const o=zd(n,i.document.name),l=lr(i.document.updateTime),h=i.document.createTime?lr(i.document.createTime):we.min(),f=new an({mapValue:{fields:i.document.fields}}),m=$t.newFoundDocument(o,l,h,f),y=i.targetIds||[],E=i.removedTargetIds||[];t=new oc(y,E,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const o=zd(n,i.document),l=i.readTime?lr(i.readTime):we.min(),h=$t.newNoDocument(o,l),f=i.removedTargetIds||[];t=new oc([],f,h.key,h)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const o=zd(n,i.document),l=i.removedTargetIds||[];t=new oc([],l,o,null)}else{if(!("filter"in e))return ve(11601,{At:e});{e.filter;const i=e.filter;i.targetId;const{count:o=0,unchangedNames:l}=i,h=new HR(o,l),f=i.targetId;t=new iE(f,h)}}return t}function tA(n,e){let t;if(e instanceof wl)t={update:Gy(n,e.key,e.value)};else if(e instanceof qf)t={delete:mf(n,e.key)};else if(e instanceof Ui)t={update:Gy(n,e.key,e.data),updateMask:cA(e.fieldMask)};else{if(!(e instanceof BR))return ve(16599,{Rt:e.type});t={verify:mf(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,h){const f=h.transform;if(f instanceof Ec)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof hl)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof dl)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof wc)return{fieldPath:h.field.canonicalString(),increment:f.Ee};throw ve(20930,{transform:h.transform})}(0,i))),e.precondition.isNone||(t.currentDocument=function(o,l){return l.updateTime!==void 0?{updateTime:JR(o,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ve(27497)}(n,e.precondition)),t}function nA(n,e){return n&&n.length>0?(Fe(e!==void 0,14353),n.map(t=>function(o,l){let h=o.updateTime?lr(o.updateTime):lr(l);return h.isEqual(we.min())&&(h=lr(l)),new UR(h,o.transformResults||[])}(t,e))):[]}function rA(n,e){return{documents:[lE(n,e.path)]}}function iA(n,e){const t={structuredQuery:{}},i=e.path;let o;e.collectionGroup!==null?(o=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(o=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=lE(n,o);const l=function(y){if(y.length!==0)return hE(Wn.create(y,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const h=function(y){if(y.length!==0)return y.map(E=>function(I){return{field:Ro(I.field),direction:aA(I.dir)}}(E))}(e.orderBy);h&&(t.structuredQuery.orderBy=h);const f=ff(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(y){return{before:y.inclusive,values:y.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(y){return{before:!y.inclusive,values:y.position}}(e.endAt)),{Vt:t,parent:o}}function sA(n){let e=ZR(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let o=null;if(i>0){Fe(i===1,65062);const E=t.from[0];E.allDescendants?o=E.collectionId:e=e.child(E.collectionId)}let l=[];t.where&&(l=function(T){const I=cE(T);return I instanceof Wn&&jv(I)?I.getFilters():[I]}(t.where));let h=[];t.orderBy&&(h=function(T){return T.map(I=>function(z){return new vc(Ao(z.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(z.direction))}(I))}(t.orderBy));let f=null;t.limit&&(f=function(T){let I;return I=typeof T=="object"?T.value:T,Uc(I)?null:I}(t.limit));let m=null;t.startAt&&(m=function(T){const I=!!T.before,F=T.values||[];return new _c(F,I)}(t.startAt));let y=null;return t.endAt&&(y=function(T){const I=!T.before,F=T.values||[];return new _c(F,I)}(t.endAt)),RR(e,o,h,l,f,"F",m,y)}function oA(n,e){const t=function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ve(28987,{purpose:o})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cE(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Ao(t.unaryFilter.field);return ft.create(i,"==",{doubleValue:NaN});case"IS_NULL":const o=Ao(t.unaryFilter.field);return ft.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Ao(t.unaryFilter.field);return ft.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=Ao(t.unaryFilter.field);return ft.create(h,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ve(61313);default:return ve(60726)}}(n):n.fieldFilter!==void 0?function(t){return ft.create(Ao(t.fieldFilter.field),function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ve(58110);default:return ve(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Wn.create(t.compositeFilter.filters.map(i=>cE(i)),function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return ve(1026)}}(t.compositeFilter.op))}(n):ve(30097,{filter:n})}function aA(n){return GR[n]}function lA(n){return QR[n]}function uA(n){return XR[n]}function Ro(n){return{fieldPath:n.canonicalString()}}function Ao(n){return Ot.fromServerFormat(n.fieldPath)}function hE(n){return n instanceof ft?function(t){if(t.op==="=="){if(Ly(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NAN"}};if(Vy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ly(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NAN"}};if(Vy(t.value))return{unaryFilter:{field:Ro(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ro(t.field),op:lA(t.op),value:t.value}}}(n):n instanceof Wn?function(t){const i=t.getFilters().map(o=>hE(o));return i.length===1?i[0]:{compositeFilter:{op:uA(t.op),filters:i}}}(n):ve(54877,{filter:n})}function cA(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dE(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,i,o,l=we.min(),h=we.min(),f=Vt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=o,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Ei(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ei(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.gt=e}}function dA(n){const e=sA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?df(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(){this.Dn=new pA}addToCollectionParentIndex(e,t){return this.Dn.add(t),W.resolve()}getCollectionParents(e,t){return W.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return W.resolve()}deleteFieldIndex(e,t){return W.resolve()}deleteAllFieldIndexes(e){return W.resolve()}createTargetIndexes(e,t){return W.resolve()}getDocumentsMatchingTarget(e,t){return W.resolve(null)}getIndexType(e,t){return W.resolve(0)}getFieldIndexes(e,t){return W.resolve([])}getNextCollectionGroupToUpdate(e){return W.resolve(null)}getMinOffset(e,t){return W.resolve(ki.min())}getMinOffsetFromCollectionGroup(e,t){return W.resolve(ki.min())}updateCollectionGroup(e,t,i){return W.resolve()}updateIndexEntries(e,t){return W.resolve()}}class pA{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t]||new wt(qe.comparator),l=!o.has(i);return this.index[t]=o.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),o=this.index[t];return o&&o.has(i)}getEntries(e){return(this.index[e]||new wt(qe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},fE=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(fE,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mo{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Mo(0)}static ur(){return new Mo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy="LruGarbageCollector",mA=1048576;function Yy([n,e],[t,i]){const o=Ae(n,t);return o===0?Ae(e,i):o}class gA{constructor(e){this.Tr=e,this.buffer=new wt(Yy),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();Yy(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class yA{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){ae(Xy,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){$o(t)?ae(Xy,"Ignoring IndexedDB error during garbage collection: ",t):await zo(t)}await this.Rr(3e5)})}}class _A{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return W.resolve(Mc.ue);const i=new gA(t);return this.Vr.forEachTarget(e,o=>i.Er(o.sequenceNumber)).next(()=>this.Vr.gr(e,o=>i.Er(o))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.Vr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ae("LruGarbageCollector","Garbage collection skipped; disabled"),W.resolve(Qy)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(ae("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Qy):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let i,o,l,h,f,m,y;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ae("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),o=this.params.maximumSequenceNumbersToCollect):o=T,h=Date.now(),this.nthSequenceNumber(e,o))).next(T=>(i=T,f=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(y=Date.now(),Io()<=ke.DEBUG&&ae("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${o} in `+(f-h)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(y-m)+`ms
Total Duration: ${y-E}ms`),W.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:l,documentsRemoved:T})))}}function vA(n,e){return new _A(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(){this.changes=new Cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,$t.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?W.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,t,i,o){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=o}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(o=>(i=o,this.remoteDocumentCache.getEntry(e,t))).next(o=>(i!==null&&tl(i.mutation,o,mn.empty(),Qe.now()),o))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ne()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ne()){const o=ms();return this.populateOverlays(e,o,t).next(()=>this.computeViews(e,t,o,i).next(l=>{let h=Ga();return l.forEach((f,m)=>{h=h.insert(f,m.overlayedDocument)}),h}))}getOverlayedDocuments(e,t){const i=ms();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ne()))}populateOverlays(e,t,i){const o=[];return i.forEach(l=>{t.has(l)||o.push(l)}),this.documentOverlayCache.getOverlays(e,o).next(l=>{l.forEach((h,f)=>{t.set(h,f)})})}computeViews(e,t,i,o){let l=Fr();const h=el(),f=function(){return el()}();return t.forEach((m,y)=>{const E=i.get(y.key);o.has(y.key)&&(E===void 0||E.mutation instanceof Ui)?l=l.insert(y.key,y):E!==void 0?(h.set(y.key,E.mutation.getFieldMask()),tl(E.mutation,y,E.mutation.getFieldMask(),Qe.now())):h.set(y.key,mn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((y,E)=>h.set(y,E)),t.forEach((y,E)=>{var T;return f.set(y,new wA(E,(T=h.get(y))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const i=el();let o=new tt((h,f)=>h-f),l=Ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(h=>{for(const f of h)f.keys().forEach(m=>{const y=t.get(m);if(y===null)return;let E=i.get(m)||mn.empty();E=f.applyToLocalView(y,E),i.set(m,E);const T=(o.get(f.batchId)||Ne()).add(m);o=o.insert(f.batchId,T)})}).next(()=>{const h=[],f=o.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),y=m.key,E=m.value,T=Qv();E.forEach(I=>{if(!l.has(I)){const F=tE(t.get(I),i.get(I));F!==null&&T.set(I,F),l=l.add(I)}}),h.push(this.documentOverlayCache.saveOverlays(e,y,T))}return W.waitFor(h)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,o){return function(h){return pe.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Hv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,o):this.getDocumentsMatchingCollectionQuery(e,t,i,o)}getNextDocuments(e,t,i,o){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,o).next(l=>{const h=o-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,o-l.size):W.resolve(ms());let f=al,m=l;return h.next(y=>W.forEach(y,(E,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(E)?W.resolve():this.remoteDocumentCache.getEntry(e,E).next(I=>{m=m.insert(E,I)}))).next(()=>this.populateOverlays(e,y,l)).next(()=>this.computeViews(e,m,y,Ne())).next(E=>({batchId:f,changes:Gv(E)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new pe(t)).next(i=>{let o=Ga();return i.isFoundDocument()&&(o=o.insert(i.key,i)),o})}getDocumentsMatchingCollectionGroupQuery(e,t,i,o){const l=t.collectionGroup;let h=Ga();return this.indexManager.getCollectionParents(e,l).next(f=>W.forEach(f,m=>{const y=function(T,I){return new El(I,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,y,i,o).next(E=>{E.forEach((T,I)=>{h=h.insert(T,I)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,t,i,o){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(h=>(l=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,o))).next(h=>{l.forEach((m,y)=>{const E=y.getKey();h.get(E)===null&&(h=h.insert(E,$t.newInvalidDocument(E)))});let f=Ga();return h.forEach((m,y)=>{const E=l.get(m);E!==void 0&&tl(E.mutation,y,mn.empty(),Qe.now()),Bc(t,y)&&(f=f.insert(m,y))}),f})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return W.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(o){return{id:o.id,version:o.version,createTime:lr(o.createTime)}}(t)),W.resolve()}getNamedQuery(e,t){return W.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(o){return{name:o.name,query:dA(o.bundledQuery),readTime:lr(o.readTime)}}(t)),W.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(){this.overlays=new tt(pe.comparator),this.kr=new Map}getOverlay(e,t){return W.resolve(this.overlays.get(t))}getOverlays(e,t){const i=ms();return W.forEach(t,o=>this.getOverlay(e,o).next(l=>{l!==null&&i.set(o,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((o,l)=>{this.wt(e,t,l)}),W.resolve()}removeOverlaysForBatchId(e,t,i){const o=this.kr.get(i);return o!==void 0&&(o.forEach(l=>this.overlays=this.overlays.remove(l)),this.kr.delete(i)),W.resolve()}getOverlaysForCollection(e,t,i){const o=ms(),l=t.length+1,h=new pe(t.child("")),f=this.overlays.getIteratorFrom(h);for(;f.hasNext();){const m=f.getNext().value,y=m.getKey();if(!t.isPrefixOf(y.path))break;y.path.length===l&&m.largestBatchId>i&&o.set(m.getKey(),m)}return W.resolve(o)}getOverlaysForCollectionGroup(e,t,i,o){let l=new tt((y,E)=>y-E);const h=this.overlays.getIterator();for(;h.hasNext();){const y=h.getNext().value;if(y.getKey().getCollectionGroup()===t&&y.largestBatchId>i){let E=l.get(y.largestBatchId);E===null&&(E=ms(),l=l.insert(y.largestBatchId,E)),E.set(y.getKey(),y)}}const f=ms(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((y,E)=>f.set(y,E)),!(f.size()>=o)););return W.resolve(f)}wt(e,t,i){const o=this.overlays.get(i.key);if(o!==null){const h=this.kr.get(o.largestBatchId).delete(i.key);this.kr.set(o.largestBatchId,h)}this.overlays=this.overlays.insert(i.key,new $R(t,i));let l=this.kr.get(t);l===void 0&&(l=Ne(),this.kr.set(t,l)),this.kr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(){this.sessionToken=Vt.EMPTY_BYTE_STRING}getSessionToken(e){return W.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,W.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.qr=new wt(Ct.Qr),this.$r=new wt(Ct.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const i=new Ct(e,t);this.qr=this.qr.add(i),this.$r=this.$r.add(i)}Kr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.Wr(new Ct(e,t))}Gr(e,t){e.forEach(i=>this.removeReference(i,t))}zr(e){const t=new pe(new qe([])),i=new Ct(t,e),o=new Ct(t,e+1),l=[];return this.$r.forEachInRange([i,o],h=>{this.Wr(h),l.push(h.key)}),l}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new pe(new qe([])),i=new Ct(t,e),o=new Ct(t,e+1);let l=Ne();return this.$r.forEachInRange([i,o],h=>{l=l.add(h.key)}),l}containsKey(e){const t=new Ct(e,0),i=this.qr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Ct{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return pe.comparator(e.key,t.key)||Ae(e.Hr,t.Hr)}static Ur(e,t){return Ae(e.Hr,t.Hr)||pe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new wt(Ct.Qr)}checkEmpty(e){return W.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,o){const l=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new zR(l,t,i,o);this.mutationQueue.push(h);for(const f of o)this.Yr=this.Yr.add(new Ct(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return W.resolve(h)}lookupMutationBatch(e,t){return W.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,o=this.Xr(i),l=o<0?0:o;return W.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return W.resolve(this.mutationQueue.length===0?Ff:this.er-1)}getAllMutationBatches(e){return W.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Ct(t,0),o=new Ct(t,Number.POSITIVE_INFINITY),l=[];return this.Yr.forEachInRange([i,o],h=>{const f=this.Zr(h.Hr);l.push(f)}),W.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new wt(Ae);return t.forEach(o=>{const l=new Ct(o,0),h=new Ct(o,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([l,h],f=>{i=i.add(f.Hr)})}),W.resolve(this.ei(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,o=i.length+1;let l=i;pe.isDocumentKey(l)||(l=l.child(""));const h=new Ct(new pe(l),0);let f=new wt(Ae);return this.Yr.forEachWhile(m=>{const y=m.key.path;return!!i.isPrefixOf(y)&&(y.length===o&&(f=f.add(m.Hr)),!0)},h),W.resolve(this.ei(f))}ei(e){const t=[];return e.forEach(i=>{const o=this.Zr(i);o!==null&&t.push(o)}),t}removeMutationBatch(e,t){Fe(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let i=this.Yr;return W.forEach(t.mutations,o=>{const l=new Ct(o.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,o.key)}).next(()=>{this.Yr=i})}rr(e){}containsKey(e,t){const i=new Ct(t,0),o=this.Yr.firstAfterOrEqual(i);return W.resolve(t.isEqual(o&&o.key))}performConsistencyCheck(e){return this.mutationQueue.length,W.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.ni=e,this.docs=function(){return new tt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,o=this.docs.get(i),l=o?o.size:0,h=this.ni(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:h}),this.size+=h-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return W.resolve(i?i.document.mutableCopy():$t.newInvalidDocument(t))}getEntries(e,t){let i=Fr();return t.forEach(o=>{const l=this.docs.get(o);i=i.insert(o,l?l.document.mutableCopy():$t.newInvalidDocument(o))}),W.resolve(i)}getDocumentsMatchingQuery(e,t,i,o){let l=Fr();const h=t.path,f=new pe(h.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:y,value:{document:E}}=m.getNext();if(!h.isPrefixOf(y.path))break;y.path.length>h.length+1||rR(nR(E),i)<=0||(o.has(E.key)||Bc(t,E))&&(l=l.insert(E.key,E.mutableCopy()))}return W.resolve(l)}getAllFromCollectionGroup(e,t,i,o){ve(9500)}ri(e,t){return W.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new PA(this)}getSize(e){return W.resolve(this.size)}}class PA extends EA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((i,o)=>{o.isValidDocument()?t.push(this.Or.addEntry(e,o)):this.Or.removeEntry(i)}),W.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.persistence=e,this.ii=new Cs(t=>zf(t),$f),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.si=0,this.oi=new Xf,this.targetCount=0,this._i=Mo.ar()}forEachTarget(e,t){return this.ii.forEach((i,o)=>t(o)),W.resolve()}getLastRemoteSnapshotVersion(e){return W.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return W.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),W.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.si&&(this.si=t),W.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Mo(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,W.resolve()}updateTargetData(e,t){return this.hr(t),W.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,W.resolve()}removeTargets(e,t,i){let o=0;const l=[];return this.ii.forEach((h,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.ii.delete(h),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),o++)}),W.waitFor(l).next(()=>o)}getTargetCount(e){return W.resolve(this.targetCount)}getTargetData(e,t){const i=this.ii.get(t)||null;return W.resolve(i)}addMatchingKeys(e,t,i){return this.oi.Kr(t,i),W.resolve()}removeMatchingKeys(e,t,i){this.oi.Gr(t,i);const o=this.persistence.referenceDelegate,l=[];return o&&t.forEach(h=>{l.push(o.markPotentiallyOrphaned(e,h))}),W.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),W.resolve()}getMatchingKeysForTargetId(e,t){const i=this.oi.Jr(t);return W.resolve(i)}containsKey(e,t){return W.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e,t){this.ai={},this.overlays={},this.ui=new Mc(0),this.ci=!1,this.ci=!0,this.li=new RA,this.referenceDelegate=e(this),this.hi=new kA(this),this.indexManager=new fA,this.remoteDocumentCache=function(o){return new CA(o)}(i=>this.referenceDelegate.Pi(i)),this.serializer=new hA(t),this.Ti=new IA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new SA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.ai[e.toKey()];return i||(i=new AA(t,this.referenceDelegate),this.ai[e.toKey()]=i),i}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,i){ae("MemoryPersistence","Starting transaction:",e);const o=new NA(this.ui.next());return this.referenceDelegate.Ii(),i(o).next(l=>this.referenceDelegate.di(o).next(()=>l)).toPromise().then(l=>(o.raiseOnCommittedEvent(),l))}Ei(e,t){return W.or(Object.values(this.ai).map(i=>()=>i.containsKey(e,t)))}}class NA extends sR{constructor(e){super(),this.currentSequenceNumber=e}}class Yf{constructor(e){this.persistence=e,this.Ai=new Xf,this.Ri=null}static Vi(e){return new Yf(e)}get mi(){if(this.Ri)return this.Ri;throw ve(60996)}addReference(e,t,i){return this.Ai.addReference(i,t),this.mi.delete(i.toString()),W.resolve()}removeReference(e,t,i){return this.Ai.removeReference(i,t),this.mi.add(i.toString()),W.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),W.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(o=>this.mi.add(o.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(o=>{o.forEach(l=>this.mi.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return W.forEach(this.mi,i=>{const o=pe.fromPath(i);return this.fi(e,o).next(l=>{l||t.removeEntry(o,we.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(i=>{i?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return W.or([()=>W.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ic{constructor(e,t){this.persistence=e,this.gi=new Cs(i=>lR(i.path),(i,o)=>i.isEqual(o)),this.garbageCollector=vA(this,t)}static Vi(e,t){return new Ic(e,t)}Ii(){}di(e){return W.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(o=>i+o))}yr(e){let t=0;return this.gr(e,i=>{t++}).next(()=>t)}gr(e,t){return W.forEach(this.gi,(i,o)=>this.Sr(e,i,o).next(l=>l?W.resolve():t(o)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const o=this.persistence.getRemoteDocumentCache(),l=o.newChangeBuffer();return o.ri(e,h=>this.Sr(e,h,t).next(f=>{f||(i++,l.removeEntry(h,we.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}removeReference(e,t,i){return this.gi.set(i,e.currentSequenceNumber),W.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),W.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=rc(e.data.value)),t}Sr(e,t,i){return W.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const o=this.gi.get(t);return W.resolve(o!==void 0&&o>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,i,o){this.targetId=e,this.fromCache=t,this.Is=i,this.ds=o}static Es(e,t){let i=Ne(),o=Ne();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:o=o.add(l.doc.key)}return new Jf(e,t.fromCache,i,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return CI()?8:oR(Ht())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,i,o){const l={result:null};return this.ps(e,t).next(h=>{l.result=h}).next(()=>{if(!l.result)return this.ys(e,t,o,i).next(h=>{l.result=h})}).next(()=>{if(l.result)return;const h=new xA;return this.ws(e,t,h).next(f=>{if(l.result=f,this.Rs)return this.Ss(e,t,h,f.size)})}).next(()=>l.result)}Ss(e,t,i,o){return i.documentReadCount<this.Vs?(Io()<=ke.DEBUG&&ae("QueryEngine","SDK will not create cache indexes for query:",So(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),W.resolve()):(Io()<=ke.DEBUG&&ae("QueryEngine","Query:",So(t),"scans",i.documentReadCount,"local documents and returns",o,"documents as results."),i.documentReadCount>this.fs*o?(Io()<=ke.DEBUG&&ae("QueryEngine","The SDK decides to create cache indexes for query:",So(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ar(t))):W.resolve())}ps(e,t){if(Fy(t))return W.resolve(null);let i=ar(t);return this.indexManager.getIndexType(e,i).next(o=>o===0?null:(t.limit!==null&&o===1&&(t=df(t,null,"F"),i=ar(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const h=Ne(...l);return this.gs.getDocuments(e,h).next(f=>this.indexManager.getMinOffset(e,i).next(m=>{const y=this.bs(t,f);return this.Ds(t,y,h,m.readTime)?this.ps(e,df(t,null,"F")):this.vs(e,y,t,m)}))})))}ys(e,t,i,o){return Fy(t)||o.isEqual(we.min())?W.resolve(null):this.gs.getDocuments(e,i).next(l=>{const h=this.bs(t,l);return this.Ds(t,h,i,o)?W.resolve(null):(Io()<=ke.DEBUG&&ae("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),So(t)),this.vs(e,h,t,tR(o,al)).next(f=>f))})}bs(e,t){let i=new wt(qv(e));return t.forEach((o,l)=>{Bc(e,l)&&(i=i.add(l))}),i}Ds(e,t,i,o){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(o)>0)}ws(e,t,i){return Io()<=ke.DEBUG&&ae("QueryEngine","Using full collection scan to execute query:",So(t)),this.gs.getDocumentsMatchingQuery(e,t,ki.min(),i)}vs(e,t,i,o){return this.gs.getDocumentsMatchingQuery(e,i,o).next(l=>(t.forEach(h=>{l=l.insert(h.key,h)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf="LocalStore",OA=3e8;class VA{constructor(e,t,i,o){this.persistence=e,this.Cs=t,this.serializer=o,this.Fs=new tt(Ae),this.Ms=new Cs(l=>zf(l),$f),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(i)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new TA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function LA(n,e,t,i){return new VA(n,e,t,i)}async function mE(n,e){const t=Te(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let o;return t.mutationQueue.getAllMutationBatches(i).next(l=>(o=l,t.Ns(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const h=[],f=[];let m=Ne();for(const y of o){h.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}for(const y of l){f.push(y.batchId);for(const E of y.mutations)m=m.add(E.key)}return t.localDocuments.getDocuments(i,m).next(y=>({Bs:y,removedBatchIds:h,addedBatchIds:f}))})})}function bA(n,e){const t=Te(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const o=e.batch.keys(),l=t.Os.newChangeBuffer({trackRemovals:!0});return function(f,m,y,E){const T=y.batch,I=T.keys();let F=W.resolve();return I.forEach(z=>{F=F.next(()=>E.getEntry(m,z)).next($=>{const D=y.docVersions.get(z);Fe(D!==null,48541),$.version.compareTo(D)<0&&(T.applyToRemoteDocument($,y),$.isValidDocument()&&($.setReadTime(y.commitVersion),E.addEntry($)))})}),F.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,o,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(f){let m=Ne();for(let y=0;y<f.mutationResults.length;++y)f.mutationResults[y].transformResults.length>0&&(m=m.add(f.batch.mutations[y].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,o))})}function gE(n){const e=Te(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function MA(n,e){const t=Te(n),i=e.snapshotVersion;let o=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const h=t.Os.newChangeBuffer({trackRemovals:!0});o=t.Fs;const f=[];e.targetChanges.forEach((E,T)=>{const I=o.get(T);if(!I)return;f.push(t.hi.removeMatchingKeys(l,E.removedDocuments,T).next(()=>t.hi.addMatchingKeys(l,E.addedDocuments,T)));let F=I.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?F=F.withResumeToken(Vt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,i)),o=o.insert(T,F),function($,D,Z){return $.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=OA?!0:Z.addedDocuments.size+Z.modifiedDocuments.size+Z.removedDocuments.size>0}(I,F,E)&&f.push(t.hi.updateTargetData(l,F))});let m=Fr(),y=Ne();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,E))}),f.push(UA(l,h,e.documentUpdates).next(E=>{m=E.Ls,y=E.ks})),!i.isEqual(we.min())){const E=t.hi.getLastRemoteSnapshotVersion(l).next(T=>t.hi.setTargetsMetadata(l,l.currentSequenceNumber,i));f.push(E)}return W.waitFor(f).next(()=>h.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,y)).next(()=>m)}).then(l=>(t.Fs=o,l))}function UA(n,e,t){let i=Ne(),o=Ne();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let h=Fr();return t.forEach((f,m)=>{const y=l.get(f);m.isFoundDocument()!==y.isFoundDocument()&&(o=o.add(f)),m.isNoDocument()&&m.version.isEqual(we.min())?(e.removeEntry(f,m.readTime),h=h.insert(f,m)):!y.isValidDocument()||m.version.compareTo(y.version)>0||m.version.compareTo(y.version)===0&&y.hasPendingWrites?(e.addEntry(m),h=h.insert(f,m)):ae(Zf,"Ignoring outdated watch update for ",f,". Current version:",y.version," Watch version:",m.version)}),{Ls:h,ks:o}})}function FA(n,e){const t=Te(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Ff),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function jA(n,e){const t=Te(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let o;return t.hi.getTargetData(i,e).next(l=>l?(o=l,W.resolve(o)):t.hi.allocateTargetId(i).next(h=>(o=new Ei(e,h,"TargetPurposeListen",i.currentSequenceNumber),t.hi.addTargetData(i,o).next(()=>o))))}).then(i=>{const o=t.Fs.get(i.targetId);return(o===null||i.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(i.targetId,i),t.Ms.set(e,i.targetId)),i})}async function yf(n,e,t){const i=Te(n),o=i.Fs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,h=>i.persistence.referenceDelegate.removeTarget(h,o))}catch(h){if(!$o(h))throw h;ae(Zf,`Failed to update sequence numbers for target ${e}: ${h}`)}i.Fs=i.Fs.remove(e),i.Ms.delete(o.target)}function Jy(n,e,t){const i=Te(n);let o=we.min(),l=Ne();return i.persistence.runTransaction("Execute query","readwrite",h=>function(m,y,E){const T=Te(m),I=T.Ms.get(E);return I!==void 0?W.resolve(T.Fs.get(I)):T.hi.getTargetData(y,E)}(i,h,ar(e)).next(f=>{if(f)return o=f.lastLimboFreeSnapshotVersion,i.hi.getMatchingKeysForTargetId(h,f.targetId).next(m=>{l=m})}).next(()=>i.Cs.getDocumentsMatchingQuery(h,e,t?o:we.min(),t?l:Ne())).next(f=>(BA(i,CR(e),f),{documents:f,qs:l})))}function BA(n,e,t){let i=n.xs.get(e)||we.min();t.forEach((o,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.xs.set(e,i)}class Zy{constructor(){this.activeTargetIds=OR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zA{constructor(){this.Fo=new Zy,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,i){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Zy,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e_="ConnectivityMonitor";class t_{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){ae(e_,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){ae(e_,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu=null;function _f(){return Yu===null?Yu=function(){return 268435456+Math.round(2147483648*Math.random())}():Yu++,"0x"+Yu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="RestConnection",HA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${i}/databases/${o}`,this.Ko=this.databaseId.database===gc?`project_id=${i}`:`project_id=${i}&database_id=${o}`}Wo(e,t,i,o,l){const h=_f(),f=this.Go(e,t.toUriEncodedString());ae($d,`Sending RPC '${e}' ${h}:`,f,i);const m={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(m,o,l);const{host:y}=new URL(f),E=bi(y);return this.jo(e,f,m,i,E).then(T=>(ae($d,`Received RPC '${e}' ${h}: `,T),T),T=>{throw Pi($d,`RPC '${e}' ${h} failed with error: `,T,"url: ",f,"request:",i),T})}Jo(e,t,i,o,l,h){return this.Wo(e,t,i,o,l)}zo(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Bo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((o,l)=>e[l]=o),i&&i.headers.forEach((o,l)=>e[l]=o)}Go(e,t){const i=HA[e];return`${this.$o}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bt="WebChannelConnection";class KA extends WA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,i,o,l){const h=_f();return new Promise((f,m)=>{const y=new _v;y.setWithCredentials(!0),y.listenOnce(vv.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case nc.NO_ERROR:const T=y.getResponseJson();ae(Bt,`XHR for RPC '${e}' ${h} received:`,JSON.stringify(T)),f(T);break;case nc.TIMEOUT:ae(Bt,`RPC '${e}' ${h} timed out`),m(new se(H.DEADLINE_EXCEEDED,"Request time out"));break;case nc.HTTP_ERROR:const I=y.getStatus();if(ae(Bt,`RPC '${e}' ${h} failed with status:`,I,"response text:",y.getResponseText()),I>0){let F=y.getResponseJson();Array.isArray(F)&&(F=F[0]);const z=F?.error;if(z&&z.status&&z.message){const $=function(Z){const X=Z.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(X)>=0?X:H.UNKNOWN}(z.status);m(new se($,z.message))}else m(new se(H.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new se(H.UNAVAILABLE,"Connection failed."));break;default:ve(9055,{c_:e,streamId:h,l_:y.getLastErrorCode(),h_:y.getLastError()})}}finally{ae(Bt,`RPC '${e}' ${h} completed.`)}});const E=JSON.stringify(o);ae(Bt,`RPC '${e}' ${h} sending request:`,o),y.send(t,"POST",E,i,15)})}P_(e,t,i){const o=_f(),l=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Tv(),f=wv(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(m.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(m.useFetchStreams=!0),this.zo(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const E=l.join("");ae(Bt,`Creating RPC '${e}' stream ${o}: ${E}`,m);const T=h.createWebChannel(E,m);this.T_(T);let I=!1,F=!1;const z=new qA({Ho:D=>{F?ae(Bt,`Not sending because RPC '${e}' stream ${o} is closed:`,D):(I||(ae(Bt,`Opening RPC '${e}' stream ${o} transport.`),T.open(),I=!0),ae(Bt,`RPC '${e}' stream ${o} sending:`,D),T.send(D))},Yo:()=>T.close()}),$=(D,Z,X)=>{D.listen(Z,ee=>{try{X(ee)}catch(ie){setTimeout(()=>{throw ie},0)}})};return $(T,Ka.EventType.OPEN,()=>{F||(ae(Bt,`RPC '${e}' stream ${o} transport opened.`),z.s_())}),$(T,Ka.EventType.CLOSE,()=>{F||(F=!0,ae(Bt,`RPC '${e}' stream ${o} transport closed`),z.__(),this.I_(T))}),$(T,Ka.EventType.ERROR,D=>{F||(F=!0,Pi(Bt,`RPC '${e}' stream ${o} transport errored. Name:`,D.name,"Message:",D.message),z.__(new se(H.UNAVAILABLE,"The operation could not be completed")))}),$(T,Ka.EventType.MESSAGE,D=>{var Z;if(!F){const X=D.data[0];Fe(!!X,16349);const ee=X,ie=ee?.error||((Z=ee[0])===null||Z===void 0?void 0:Z.error);if(ie){ae(Bt,`RPC '${e}' stream ${o} received error:`,ie);const Ie=ie.status;let Se=function(C){const k=dt[C];if(k!==void 0)return rE(k)}(Ie),x=ie.message;Se===void 0&&(Se=H.INTERNAL,x="Unknown error status: "+Ie+" with message "+ie.message),F=!0,z.__(new se(Se,x)),T.close()}else ae(Bt,`RPC '${e}' stream ${o} received:`,X),z.a_(X)}}),$(f,Ev.STAT_EVENT,D=>{D.stat===sf.PROXY?ae(Bt,`RPC '${e}' stream ${o} detected buffering proxy`):D.stat===sf.NOPROXY&&ae(Bt,`RPC '${e}' stream ${o} detected no buffering proxy`)}),setTimeout(()=>{z.o_()},0),z}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Hd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){return new YR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yE{constructor(e,t,i=1e3,o=1.5,l=6e4){this.Fi=e,this.timerId=t,this.d_=i,this.E_=o,this.A_=l,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),i=Math.max(0,Date.now()-this.m_),o=Math.max(0,t-i);o>0&&ae("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,o,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="PersistentStream";class _E{constructor(e,t,i,o,l,h,f,m){this.Fi=e,this.w_=i,this.S_=o,this.connection=l,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new yE(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Ur(t.toString()),Ur("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,o])=>{this.b_===t&&this.W_(i,o)},i=>{e(()=>{const o=new se(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.G_(o)})})}W_(e,t){const i=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{i(()=>this.listener.Zo())}),this.stream.e_(()=>{i(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(o=>{i(()=>this.G_(o))}),this.stream.onMessage(o=>{i(()=>++this.C_==1?this.j_(o):this.onNext(o))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return ae(n_,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(ae(n_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class GA extends _E{constructor(e,t,i,o,l,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=eA(this.serializer,e),i=function(l){if(!("targetChange"in l))return we.min();const h=l.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?lr(h.readTime):we.min()}(e);return this.listener.J_(t,i)}H_(e){const t={};t.database=gf(this.serializer),t.addTarget=function(l,h){let f;const m=h.target;if(f=cf(m)?{documents:rA(l,m)}:{query:iA(l,m).Vt},f.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){f.resumeToken=oE(l,h.resumeToken);const y=ff(l,h.expectedCount);y!==null&&(f.expectedCount=y)}else if(h.snapshotVersion.compareTo(we.min())>0){f.readTime=Tc(l,h.snapshotVersion.toTimestamp());const y=ff(l,h.expectedCount);y!==null&&(f.expectedCount=y)}return f}(this.serializer,e);const i=oA(this.serializer,e);i&&(t.labels=i),this.k_(t)}Y_(e){const t={};t.database=gf(this.serializer),t.removeTarget=e,this.k_(t)}}class QA extends _E{constructor(e,t,i,o,l,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,o,h),this.serializer=l}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Fe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Fe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Fe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=nA(e.writeResults,e.commitTime),i=lr(e.commitTime);return this.listener.ta(i,t)}na(){const e={};e.database=gf(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>tA(this.serializer,i))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{}class YA extends XA{constructor(e,t,i,o){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=o,this.ra=!1}ia(){if(this.ra)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,h])=>this.connection.Wo(e,pf(t,i),o,l,h)).catch(l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new se(H.UNKNOWN,l.toString())})}Jo(e,t,i,o,l){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,f])=>this.connection.Jo(e,pf(t,i),o,h,f,l)).catch(h=>{throw h.name==="FirebaseError"?(h.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new se(H.UNKNOWN,h.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class JA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ur(t),this._a=!1):ae("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws="RemoteStore";class ZA{constructor(e,t,i,o,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=l,this.Ea.xo(h=>{i.enqueueAndForget(async()=>{Ps(this)&&(ae(ws,"Restarting streams for network reachability change."),await async function(m){const y=Te(m);y.Ia.add(4),await Il(y),y.Aa.set("Unknown"),y.Ia.delete(4),await qc(y)}(this))})}),this.Aa=new JA(i,o)}}async function qc(n){if(Ps(n))for(const e of n.da)await e(!0)}async function Il(n){for(const e of n.da)await e(!1)}function vE(n,e){const t=Te(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),rp(t)?np(t):Ho(t).x_()&&tp(t,e))}function ep(n,e){const t=Te(n),i=Ho(t);t.Ta.delete(e),i.x_()&&EE(t,e),t.Ta.size===0&&(i.x_()?i.B_():Ps(t)&&t.Aa.set("Unknown"))}function tp(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Ho(n).H_(e)}function EE(n,e){n.Ra.$e(e),Ho(n).Y_(e)}function np(n){n.Ra=new KR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Ho(n).start(),n.Aa.aa()}function rp(n){return Ps(n)&&!Ho(n).M_()&&n.Ta.size>0}function Ps(n){return Te(n).Ia.size===0}function wE(n){n.Ra=void 0}async function e1(n){n.Aa.set("Online")}async function t1(n){n.Ta.forEach((e,t)=>{tp(n,e)})}async function n1(n,e){wE(n),rp(n)?(n.Aa.la(e),np(n)):n.Aa.set("Unknown")}async function r1(n,e,t){if(n.Aa.set("Online"),e instanceof sE&&e.state===2&&e.cause)try{await async function(o,l){const h=l.cause;for(const f of l.targetIds)o.Ta.has(f)&&(await o.remoteSyncer.rejectListen(f,h),o.Ta.delete(f),o.Ra.removeTarget(f))}(n,e)}catch(i){ae(ws,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Sc(n,i)}else if(e instanceof oc?n.Ra.Ye(e):e instanceof iE?n.Ra.it(e):n.Ra.et(e),!t.isEqual(we.min()))try{const i=await gE(n.localStore);t.compareTo(i)>=0&&await function(l,h){const f=l.Ra.Pt(h);return f.targetChanges.forEach((m,y)=>{if(m.resumeToken.approximateByteSize()>0){const E=l.Ta.get(y);E&&l.Ta.set(y,E.withResumeToken(m.resumeToken,h))}}),f.targetMismatches.forEach((m,y)=>{const E=l.Ta.get(m);if(!E)return;l.Ta.set(m,E.withResumeToken(Vt.EMPTY_BYTE_STRING,E.snapshotVersion)),EE(l,m);const T=new Ei(E.target,m,y,E.sequenceNumber);tp(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(n,t)}catch(i){ae(ws,"Failed to raise snapshot:",i),await Sc(n,i)}}async function Sc(n,e,t){if(!$o(e))throw e;n.Ia.add(1),await Il(n),n.Aa.set("Offline"),t||(t=()=>gE(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ae(ws,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await qc(n)})}function TE(n,e){return e().catch(t=>Sc(n,t,e))}async function Kc(n){const e=Te(n),t=Oi(e);let i=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ff;for(;i1(e);)try{const o=await FA(e.localStore,i);if(o===null){e.Pa.length===0&&t.B_();break}i=o.batchId,s1(e,o)}catch(o){await Sc(e,o)}IE(e)&&SE(e)}function i1(n){return Ps(n)&&n.Pa.length<10}function s1(n,e){n.Pa.push(e);const t=Oi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function IE(n){return Ps(n)&&!Oi(n).M_()&&n.Pa.length>0}function SE(n){Oi(n).start()}async function o1(n){Oi(n).na()}async function a1(n){const e=Oi(n);for(const t of n.Pa)e.X_(t.mutations)}async function l1(n,e,t){const i=n.Pa.shift(),o=Kf.from(i,e,t);await TE(n,()=>n.remoteSyncer.applySuccessfulWrite(o)),await Kc(n)}async function u1(n,e){e&&Oi(n).Z_&&await async function(i,o){if(function(h){return WR(h)&&h!==H.ABORTED}(o.code)){const l=i.Pa.shift();Oi(i).N_(),await TE(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,o)),await Kc(i)}}(n,e),IE(n)&&SE(n)}async function r_(n,e){const t=Te(n);t.asyncQueue.verifyOperationInProgress(),ae(ws,"RemoteStore received new credentials");const i=Ps(t);t.Ia.add(3),await Il(t),i&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await qc(t)}async function c1(n,e){const t=Te(n);e?(t.Ia.delete(2),await qc(t)):e||(t.Ia.add(2),await Il(t),t.Aa.set("Unknown"))}function Ho(n){return n.Va||(n.Va=function(t,i,o){const l=Te(t);return l.ia(),new GA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Zo:e1.bind(null,n),e_:t1.bind(null,n),n_:n1.bind(null,n),J_:r1.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),rp(n)?np(n):n.Aa.set("Unknown")):(await n.Va.stop(),wE(n))})),n.Va}function Oi(n){return n.ma||(n.ma=function(t,i,o){const l=Te(t);return l.ia(),new QA(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,o)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:o1.bind(null,n),n_:u1.bind(null,n),ea:a1.bind(null,n),ta:l1.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await Kc(n)):(await n.ma.stop(),n.Pa.length>0&&(ae(ws,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(e,t,i,o,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=o,this.removalCallback=l,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,o,l){const h=Date.now()+i,f=new ip(e,t,h,o,l);return f.start(i),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sp(n,e){if(Ur("AsyncQueue",`${e}: ${n}`),$o(n))return new se(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{static emptySet(e){return new ko(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||pe.comparator(t.key,i.key):(t,i)=>pe.comparator(t.key,i.key),this.keyedMap=Ga(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ko)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const o=t.getNext().key,l=i.getNext().key;if(!o.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new ko;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.fa=new tt(pe.comparator)}track(e){const t=e.doc.key,i=this.fa.get(t);i?e.type!==0&&i.type===3?this.fa=this.fa.insert(t,e):e.type===3&&i.type!==1?this.fa=this.fa.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.fa=this.fa.remove(t):e.type===1&&i.type===2?this.fa=this.fa.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ve(63341,{At:e,ga:i}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,i)=>{e.push(i)}),e}}class Uo{constructor(e,t,i,o,l,h,f,m,y){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=o,this.mutatedKeys=l,this.fromCache=h,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=y}static fromInitialDocuments(e,t,i,o,l){const h=[];return t.forEach(f=>{h.push({type:0,doc:f})}),new Uo(e,t,ko.emptySet(t),h,i,o,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let o=0;o<t.length;o++)if(t[o].type!==i[o].type||!t[o].doc.isEqual(i[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class d1{constructor(){this.queries=s_(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,i){const o=Te(t),l=o.queries;o.queries=s_(),l.forEach((h,f)=>{for(const m of f.wa)m.onError(i)})})(this,new se(H.ABORTED,"Firestore shutting down"))}}function s_(){return new Cs(n=>Wv(n),jc)}async function RE(n,e){const t=Te(n);let i=3;const o=e.query;let l=t.queries.get(o);l?!l.Sa()&&e.ba()&&(i=2):(l=new h1,i=e.ba()?0:1);try{switch(i){case 0:l.ya=await t.onListen(o,!0);break;case 1:l.ya=await t.onListen(o,!1);break;case 2:await t.onFirstRemoteStoreListen(o)}}catch(h){const f=sp(h,`Initialization of query '${So(e.query)}' failed`);return void e.onError(f)}t.queries.set(o,l),l.wa.push(e),e.va(t.onlineState),l.ya&&e.Ca(l.ya)&&op(t)}async function AE(n,e){const t=Te(n),i=e.query;let o=3;const l=t.queries.get(i);if(l){const h=l.wa.indexOf(e);h>=0&&(l.wa.splice(h,1),l.wa.length===0?o=e.ba()?0:1:!l.Sa()&&e.ba()&&(o=2))}switch(o){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function f1(n,e){const t=Te(n);let i=!1;for(const o of e){const l=o.query,h=t.queries.get(l);if(h){for(const f of h.wa)f.Ca(o)&&(i=!0);h.ya=o}}i&&op(t)}function p1(n,e,t){const i=Te(n),o=i.queries.get(e);if(o)for(const l of o.wa)l.onError(t);i.queries.delete(e)}function op(n){n.Da.forEach(e=>{e.next()})}var vf,o_;(o_=vf||(vf={})).Fa="default",o_.Cache="cache";class CE{constructor(e,t,i){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=i||{}}Ca(e){if(!this.options.includeMetadataChanges){const i=[];for(const o of e.docChanges)o.type!==3&&i.push(o);e=new Uo(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const i=t!=="Offline";return(!this.options.ka||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Uo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==vf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(e){this.key=e}}class kE{constructor(e){this.key=e}}class m1{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ne(),this.mutatedKeys=Ne(),this.Xa=qv(e),this.eu=new ko(this.Xa)}get tu(){return this.Ha}nu(e,t){const i=t?t.ru:new i_,o=t?t.eu:this.eu;let l=t?t.mutatedKeys:this.mutatedKeys,h=o,f=!1;const m=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,y=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(e.inorderTraversal((E,T)=>{const I=o.get(E),F=Bc(this.query,T)?T:null,z=!!I&&this.mutatedKeys.has(I.key),$=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let D=!1;I&&F?I.data.isEqual(F.data)?z!==$&&(i.track({type:3,doc:F}),D=!0):this.iu(I,F)||(i.track({type:2,doc:F}),D=!0,(m&&this.Xa(F,m)>0||y&&this.Xa(F,y)<0)&&(f=!0)):!I&&F?(i.track({type:0,doc:F}),D=!0):I&&!F&&(i.track({type:1,doc:I}),D=!0,(m||y)&&(f=!0)),D&&(F?(h=h.add(F),l=$?l.add(E):l.delete(E)):(h=h.delete(E),l=l.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),l=l.delete(E.key),i.track({type:1,doc:E})}return{eu:h,ru:i,Ds:f,mutatedKeys:l}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,o){const l=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const h=e.ru.pa();h.sort((E,T)=>function(F,z){const $=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ve(20277,{At:D})}};return $(F)-$(z)}(E.type,T.type)||this.Xa(E.doc,T.doc)),this.su(i),o=o!=null&&o;const f=t&&!o?this.ou():[],m=this.Za.size===0&&this.current&&!o?1:0,y=m!==this.Ya;return this.Ya=m,h.length!==0||y?{snapshot:new Uo(this.query,e.eu,l,h,e.mutatedKeys,m===0,y,!1,!!i&&i.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new i_,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ne(),this.eu.forEach(i=>{this.au(i.key)&&(this.Za=this.Za.add(i.key))});const t=[];return e.forEach(i=>{this.Za.has(i)||t.push(new kE(i))}),this.Za.forEach(i=>{e.has(i)||t.push(new PE(i))}),t}uu(e){this.Ha=e.qs,this.Za=Ne();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Uo.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const ap="SyncEngine";class g1{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class y1{constructor(e){this.key=e,this.lu=!1}}class _1{constructor(e,t,i,o,l,h){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=o,this.currentUser=l,this.maxConcurrentLimboResolutions=h,this.hu={},this.Pu=new Cs(f=>Wv(f),jc),this.Tu=new Map,this.Iu=new Set,this.du=new tt(pe.comparator),this.Eu=new Map,this.Au=new Xf,this.Ru={},this.Vu=new Map,this.mu=Mo.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function v1(n,e,t=!0){const i=LE(n);let o;const l=i.Pu.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),o=l.view.cu()):o=await NE(i,e,t,!0),o}async function E1(n,e){const t=LE(n);await NE(t,e,!0,!1)}async function NE(n,e,t,i){const o=await jA(n.localStore,ar(e)),l=o.targetId,h=n.sharedClientState.addLocalQueryTarget(l,t);let f;return i&&(f=await w1(n,e,l,h==="current",o.resumeToken)),n.isPrimaryClient&&t&&vE(n.remoteStore,o),f}async function w1(n,e,t,i,o){n.gu=(T,I,F)=>async function($,D,Z,X){let ee=D.view.nu(Z);ee.Ds&&(ee=await Jy($.localStore,D.query,!1).then(({documents:x})=>D.view.nu(x,ee)));const ie=X&&X.targetChanges.get(D.targetId),Ie=X&&X.targetMismatches.get(D.targetId)!=null,Se=D.view.applyChanges(ee,$.isPrimaryClient,ie,Ie);return l_($,D.targetId,Se._u),Se.snapshot}(n,T,I,F);const l=await Jy(n.localStore,e,!0),h=new m1(e,l.qs),f=h.nu(l.documents),m=Tl.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",o),y=h.applyChanges(f,n.isPrimaryClient,m);l_(n,t,y._u);const E=new g1(e,t,h);return n.Pu.set(e,E),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),y.snapshot}async function T1(n,e,t){const i=Te(n),o=i.Pu.get(e),l=i.Tu.get(o.targetId);if(l.length>1)return i.Tu.set(o.targetId,l.filter(h=>!jc(h,e))),void i.Pu.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(o.targetId),i.sharedClientState.isActiveQueryTarget(o.targetId)||await yf(i.localStore,o.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(o.targetId),t&&ep(i.remoteStore,o.targetId),Ef(i,o.targetId)}).catch(zo)):(Ef(i,o.targetId),await yf(i.localStore,o.targetId,!0))}async function I1(n,e){const t=Te(n),i=t.Pu.get(e),o=t.Tu.get(i.targetId);t.isPrimaryClient&&o.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),ep(t.remoteStore,i.targetId))}async function S1(n,e,t){const i=x1(n);try{const o=await function(h,f){const m=Te(h),y=Qe.now(),E=f.reduce((F,z)=>F.add(z.key),Ne());let T,I;return m.persistence.runTransaction("Locally write mutations","readwrite",F=>{let z=Fr(),$=Ne();return m.Os.getEntries(F,E).next(D=>{z=D,z.forEach((Z,X)=>{X.isValidDocument()||($=$.add(Z))})}).next(()=>m.localDocuments.getOverlayedDocuments(F,z)).next(D=>{T=D;const Z=[];for(const X of f){const ee=jR(X,T.get(X.key).overlayedDocument);ee!=null&&Z.push(new Ui(X.key,ee,Mv(ee.value.mapValue),Hn.exists(!0)))}return m.mutationQueue.addMutationBatch(F,y,Z,f)}).next(D=>{I=D;const Z=D.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(F,D.batchId,Z)})}).then(()=>({batchId:I.batchId,changes:Gv(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(o.batchId),function(h,f,m){let y=h.Ru[h.currentUser.toKey()];y||(y=new tt(Ae)),y=y.insert(f,m),h.Ru[h.currentUser.toKey()]=y}(i,o.batchId,t),await Sl(i,o.changes),await Kc(i.remoteStore)}catch(o){const l=sp(o,"Failed to persist write");t.reject(l)}}async function xE(n,e){const t=Te(n);try{const i=await MA(t.localStore,e);e.targetChanges.forEach((o,l)=>{const h=t.Eu.get(l);h&&(Fe(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?h.lu=!0:o.modifiedDocuments.size>0?Fe(h.lu,14607):o.removedDocuments.size>0&&(Fe(h.lu,42227),h.lu=!1))}),await Sl(t,i,e)}catch(i){await zo(i)}}function a_(n,e,t){const i=Te(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const o=[];i.Pu.forEach((l,h)=>{const f=h.view.va(e);f.snapshot&&o.push(f.snapshot)}),function(h,f){const m=Te(h);m.onlineState=f;let y=!1;m.queries.forEach((E,T)=>{for(const I of T.wa)I.va(f)&&(y=!0)}),y&&op(m)}(i.eventManager,e),o.length&&i.hu.J_(o),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function R1(n,e,t){const i=Te(n);i.sharedClientState.updateQueryState(e,"rejected",t);const o=i.Eu.get(e),l=o&&o.key;if(l){let h=new tt(pe.comparator);h=h.insert(l,$t.newNoDocument(l,we.min()));const f=Ne().add(l),m=new Hc(we.min(),new Map,new tt(Ae),h,f);await xE(i,m),i.du=i.du.remove(l),i.Eu.delete(e),lp(i)}else await yf(i.localStore,e,!1).then(()=>Ef(i,e,t)).catch(zo)}async function A1(n,e){const t=Te(n),i=e.batch.batchId;try{const o=await bA(t.localStore,e);OE(t,i,null),DE(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Sl(t,o)}catch(o){await zo(o)}}async function C1(n,e,t){const i=Te(n);try{const o=await function(h,f){const m=Te(h);return m.persistence.runTransaction("Reject batch","readwrite-primary",y=>{let E;return m.mutationQueue.lookupMutationBatch(y,f).next(T=>(Fe(T!==null,37113),E=T.keys(),m.mutationQueue.removeMutationBatch(y,T))).next(()=>m.mutationQueue.performConsistencyCheck(y)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(y,E,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,E)).next(()=>m.localDocuments.getDocuments(y,E))})}(i.localStore,e);OE(i,e,t),DE(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Sl(i,o)}catch(o){await zo(o)}}function DE(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function OE(n,e,t){const i=Te(n);let o=i.Ru[i.currentUser.toKey()];if(o){const l=o.get(e);l&&(t?l.reject(t):l.resolve(),o=o.remove(e)),i.Ru[i.currentUser.toKey()]=o}}function Ef(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.Tu.get(e))n.Pu.delete(i),t&&n.hu.pu(i,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(i=>{n.Au.containsKey(i)||VE(n,i)})}function VE(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(ep(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),lp(n))}function l_(n,e,t){for(const i of t)i instanceof PE?(n.Au.addReference(i.key,e),P1(n,i)):i instanceof kE?(ae(ap,"Document no longer in limbo: "+i.key),n.Au.removeReference(i.key,e),n.Au.containsKey(i.key)||VE(n,i.key)):ve(19791,{yu:i})}function P1(n,e){const t=e.key,i=t.path.canonicalString();n.du.get(t)||n.Iu.has(i)||(ae(ap,"New document in limbo: "+t),n.Iu.add(i),lp(n))}function lp(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new pe(qe.fromString(e)),i=n.mu.next();n.Eu.set(i,new y1(t)),n.du=n.du.insert(t,i),vE(n.remoteStore,new Ei(ar(Hf(t.path)),i,"TargetPurposeLimboResolution",Mc.ue))}}async function Sl(n,e,t){const i=Te(n),o=[],l=[],h=[];i.Pu.isEmpty()||(i.Pu.forEach((f,m)=>{h.push(i.gu(m,e,t).then(y=>{var E;if((y||t)&&i.isPrimaryClient){const T=y?!y.fromCache:(E=t?.targetChanges.get(m.targetId))===null||E===void 0?void 0:E.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(y){o.push(y);const T=Jf.Es(m.targetId,y);l.push(T)}}))}),await Promise.all(h),i.hu.J_(o),await async function(m,y){const E=Te(m);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>W.forEach(y,I=>W.forEach(I.Is,F=>E.persistence.referenceDelegate.addReference(T,I.targetId,F)).next(()=>W.forEach(I.ds,F=>E.persistence.referenceDelegate.removeReference(T,I.targetId,F)))))}catch(T){if(!$o(T))throw T;ae(Zf,"Failed to update sequence numbers: "+T)}for(const T of y){const I=T.targetId;if(!T.fromCache){const F=E.Fs.get(I),z=F.snapshotVersion,$=F.withLastLimboFreeSnapshotVersion(z);E.Fs=E.Fs.insert(I,$)}}}(i.localStore,l))}async function k1(n,e){const t=Te(n);if(!t.currentUser.isEqual(e)){ae(ap,"User change. New user:",e.toKey());const i=await mE(t.localStore,e);t.currentUser=e,function(l,h){l.Vu.forEach(f=>{f.forEach(m=>{m.reject(new se(H.CANCELLED,h))})}),l.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Sl(t,i.Bs)}}function N1(n,e){const t=Te(n),i=t.Eu.get(e);if(i&&i.lu)return Ne().add(i.key);{let o=Ne();const l=t.Tu.get(e);if(!l)return o;for(const h of l){const f=t.Pu.get(h);o=o.unionWith(f.view.tu)}return o}}function LE(n){const e=Te(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=xE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=N1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R1.bind(null,e),e.hu.J_=f1.bind(null,e.eventManager),e.hu.pu=p1.bind(null,e.eventManager),e}function x1(n){const e=Te(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=C1.bind(null,e),e}class Rc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Wc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return LA(this.persistence,new DA,e.initialUser,this.serializer)}Du(e){return new pE(Yf.Vi,this.serializer)}bu(e){return new zA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Rc.provider={build:()=>new Rc};class D1 extends Rc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Fe(this.persistence.referenceDelegate instanceof Ic,46915);const i=this.persistence.referenceDelegate.garbageCollector;return new yA(i,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new pE(i=>Ic.Vi(i,t),this.serializer)}}class wf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>a_(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=k1.bind(null,this.syncEngine),await c1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new d1}()}createDatastore(e){const t=Wc(e.databaseInfo.databaseId),i=function(l){return new KA(l)}(e.databaseInfo);return function(l,h,f,m){return new YA(l,h,f,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,o,l,h,f){return new ZA(i,o,l,h,f)}(this.localStore,this.datastore,e.asyncQueue,t=>a_(this.syncEngine,t,0),function(){return t_.C()?new t_:new $A}())}createSyncEngine(e,t){return function(o,l,h,f,m,y,E){const T=new _1(o,l,h,f,m,y);return E&&(T.fu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(o){const l=Te(o);ae(ws,"RemoteStore shutting down."),l.Ia.add(5),await Il(l),l.Ea.shutdown(),l.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}wf.provider={build:()=>new wf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ur("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="FirestoreClient";class O1{constructor(e,t,i,o,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=o,this.user=zt.UNAUTHENTICATED,this.clientId=Uf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async h=>{ae(Vi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(i,h=>(ae(Vi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=sp(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Wd(n,e){n.asyncQueue.verifyOperationInProgress(),ae(Vi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async o=>{i.isEqual(o)||(await mE(e.localStore,o),i=o)}),e.persistence.setDatabaseDeletedListener(()=>{Pi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{ae("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(o=>{Pi("Terminating Firestore due to IndexedDb database deletion failed",o)})}),n._offlineComponents=e}async function u_(n,e){n.asyncQueue.verifyOperationInProgress();const t=await V1(n);ae(Vi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>r_(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,o)=>r_(e.remoteStore,o)),n._onlineComponents=e}async function V1(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ae(Vi,"Using user provided OfflineComponentProvider");try{await Wd(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(o){return o.name==="FirebaseError"?o.code===H.FAILED_PRECONDITION||o.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11}(t))throw t;Pi("Error using user provided cache. Falling back to memory cache: "+t),await Wd(n,new Rc)}}else ae(Vi,"Using default OfflineComponentProvider"),await Wd(n,new D1(void 0));return n._offlineComponents}async function ME(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ae(Vi,"Using user provided OnlineComponentProvider"),await u_(n,n._uninitializedComponentsProvider._online)):(ae(Vi,"Using default OnlineComponentProvider"),await u_(n,new wf))),n._onlineComponents}function L1(n){return ME(n).then(e=>e.syncEngine)}async function UE(n){const e=await ME(n),t=e.eventManager;return t.onListen=v1.bind(null,e.syncEngine),t.onUnlisten=T1.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=E1.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=I1.bind(null,e.syncEngine),t}function b1(n,e,t={}){const i=new br;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,m,y){const E=new bE({next:I=>{E.Ou(),h.enqueueAndForget(()=>AE(l,T));const F=I.docs.has(f);!F&&I.fromCache?y.reject(new se(H.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&I.fromCache&&m&&m.source==="server"?y.reject(new se(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new CE(Hf(f.path),E,{includeMetadataChanges:!0,ka:!0});return RE(l,T)}(await UE(n),n.asyncQueue,e,t,i)),i.promise}function M1(n,e,t={}){const i=new br;return n.asyncQueue.enqueueAndForget(async()=>function(l,h,f,m,y){const E=new bE({next:I=>{E.Ou(),h.enqueueAndForget(()=>AE(l,T)),I.fromCache&&m.source==="server"?y.reject(new se(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):y.resolve(I)},error:I=>y.reject(I)}),T=new CE(f,E,{includeMetadataChanges:!0,ka:!0});return RE(l,T)}(await UE(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="firestore.googleapis.com",h_=!0;class d_{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new se(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jE,this.ssl=h_}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:h_;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=fE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<mA)throw new se(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FE((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new se(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,o){return i.timeoutSeconds===o.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gc{constructor(e,t,i,o){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new d_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new se(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new se(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new d_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new WS;switch(i.type){case"firstParty":return new QS(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new se(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=c_.get(t);i&&(ae("ComponentProvider","Removing Datastore"),c_.delete(t),i.terminate())}(this),Promise.resolve()}}function U1(n,e,t,i={}){var o;n=fr(n,Gc);const l=bi(e),h=n._getSettings(),f=Object.assign(Object.assign({},h),{emulatorOptions:n._getEmulatorOptions()}),m=`${e}:${t}`;l&&(Df(`https://${m}`),Of("Firestore",!0)),h.host!==jE&&h.host!==m&&Pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},h),{host:m,ssl:l,emulatorOptions:i});if(!_s(y,f)&&(n._setSettings(y),i.mockUserToken)){let E,T;if(typeof i.mockUserToken=="string")E=i.mockUserToken,T=zt.MOCK_USER;else{E=hv(i.mockUserToken,(o=n._app)===null||o===void 0?void 0:o.options.projectId);const I=i.mockUserToken.sub||i.mockUserToken.user_id;if(!I)throw new se(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new zt(I)}n._authCredentials=new qS(new Sv(E,T))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Wo(this.firestore,e,this._query)}}class ut{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}toJSON(){return{type:ut._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,i){if(vl(t,ut._jsonSchema))return new ut(e,i||null,new pe(qe.fromString(t.referencePath)))}}ut._jsonSchemaVersion="firestore/documentReference/1.0",ut._jsonSchema={type:pt("string",ut._jsonSchemaVersion),referencePath:pt("string")};class Ri extends Wo{constructor(e,t,i){super(e,t,Hf(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new pe(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function F1(n,e,...t){if(n=et(n),Av("collection","path",e),n instanceof Gc){const i=qe.fromString(e,...t);return Ry(i),new Ri(n,null,i)}{if(!(n instanceof ut||n instanceof Ri))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(qe.fromString(e,...t));return Ry(i),new Ri(n.firestore,null,i)}}function Qc(n,e,...t){if(n=et(n),arguments.length===1&&(e=Uf.newId()),Av("doc","path",e),n instanceof Gc){const i=qe.fromString(e,...t);return Sy(i),new ut(n,null,new pe(i))}{if(!(n instanceof ut||n instanceof Ri))throw new se(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(qe.fromString(e,...t));return Sy(i),new ut(n.firestore,n instanceof Ri?n.converter:null,new pe(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_="AsyncQueue";class p_{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new yE(this,"async_queue_retry"),this.oc=()=>{const i=Hd();i&&ae(f_,"Visibility state changed to "+i.visibilityState),this.F_.y_()},this._c=e;const t=Hd();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Hd();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new br;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!$o(e))throw e;ae(f_,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(i=>{throw this.tc=i,this.nc=!1,Ur("INTERNAL UNHANDLED ERROR: ",m_(i)),i}).then(i=>(this.nc=!1,i))));return this._c=t,t}enqueueAfterDelay(e,t,i){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const o=ip.createAndSchedule(this,e,t,i,l=>this.lc(l));return this.ec.push(o),o}ac(){this.tc&&ve(47125,{hc:m_(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function m_(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class qo extends Gc{constructor(e,t,i,o){super(e,t,i,o),this.type="firestore",this._queue=new p_,this._persistenceKey=o?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new p_(e),this._firestoreClient=void 0,await e}}}function j1(n,e){const t=typeof n=="object"?n:bf(),i=typeof n=="string"?n:gc,o=Lc(t,"firestore").getImmediate({identifier:i});if(!o._initialized){const l=lv("firestore");l&&U1(o,...l)}return o}function up(n){if(n._terminated)throw new se(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||B1(n),n._firestoreClient}function B1(n){var e,t,i;const o=n._freezeSettings(),l=function(f,m,y,E){return new hR(f,m,y,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,FE(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,o);n._componentsProvider||!((t=o.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=o.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:o.localCache._offlineComponentProvider,_online:o.localCache._onlineComponentProvider}),n._firestoreClient=new O1(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(f){const m=f?._online.build();return{_offline:f?._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Cn(Vt.fromBase64String(e))}catch(t){throw new se(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Cn(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Cn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vl(e,Cn._jsonSchema))return Cn.fromBase64String(e.bytes)}}Cn._jsonSchemaVersion="firestore/bytes/1.0",Cn._jsonSchema={type:pt("string",Cn._jsonSchemaVersion),bytes:pt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new se(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new se(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new se(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ur._jsonSchemaVersion}}static fromJSON(e){if(vl(e,ur._jsonSchema))return new ur(e.latitude,e.longitude)}}ur._jsonSchemaVersion="firestore/geoPoint/1.0",ur._jsonSchema={type:pt("string",ur._jsonSchemaVersion),latitude:pt("number"),longitude:pt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,o){if(i.length!==o.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==o[l])return!1;return!0}(this._values,e._values)}toJSON(){return{type:cr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vl(e,cr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new cr(e.vectorValues);throw new se(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}cr._jsonSchemaVersion="firestore/vectorValue/1.0",cr._jsonSchema={type:pt("string",cr._jsonSchemaVersion),vectorValues:pt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1=/^__.*__$/;class $1{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms):new wl(e,this.data,t,this.fieldTransforms)}}class BE{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Ui(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function zE(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ve(40011,{Ec:n})}}class hp{constructor(e,t,i,o,l,h){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=o,l===void 0&&this.Ac(),this.fieldTransforms=l||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.fc(e),o}gc(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),o=this.Rc({path:i,mc:!1});return o.Ac(),o}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Ac(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(zE(this.Ec)&&z1.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class H1{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||Wc(e)}Dc(e,t,i,o=!1){return new hp({Ec:e,methodName:t,bc:i,path:Ot.emptyPath(),mc:!1,Sc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function dp(n){const e=n._freezeSettings(),t=Wc(n._databaseId);return new H1(n._databaseId,!!e.ignoreUndefinedProperties,t)}function W1(n,e,t,i,o,l={}){const h=n.Dc(l.merge||l.mergeFields?2:0,e,t,o);fp("Data must be an object, but it was:",h,i);const f=$E(i,h);let m,y;if(l.merge)m=new mn(h.fieldMask),y=h.fieldTransforms;else if(l.mergeFields){const E=[];for(const T of l.mergeFields){const I=Tf(e,T,t);if(!h.contains(I))throw new se(H.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);WE(E,I)||E.push(I)}m=new mn(E),y=h.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,y=h.fieldTransforms;return new $1(new an(f),m,y)}class Yc extends cp{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Yc}}function q1(n,e,t,i){const o=n.Dc(1,e,t);fp("Data must be an object, but it was:",o,i);const l=[],h=an.empty();Mi(i,(m,y)=>{const E=pp(e,m,t);y=et(y);const T=o.gc(E);if(y instanceof Yc)l.push(E);else{const I=Rl(y,T);I!=null&&(l.push(E),h.set(E,I))}});const f=new mn(l);return new BE(h,f,o.fieldTransforms)}function K1(n,e,t,i,o,l){const h=n.Dc(1,e,t),f=[Tf(e,i,t)],m=[o];if(l.length%2!=0)throw new se(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<l.length;I+=2)f.push(Tf(e,l[I])),m.push(l[I+1]);const y=[],E=an.empty();for(let I=f.length-1;I>=0;--I)if(!WE(y,f[I])){const F=f[I];let z=m[I];z=et(z);const $=h.gc(F);if(z instanceof Yc)y.push(F);else{const D=Rl(z,$);D!=null&&(y.push(F),E.set(F,D))}}const T=new mn(y);return new BE(E,T,h.fieldTransforms)}function G1(n,e,t,i=!1){return Rl(t,n.Dc(i?4:3,e))}function Rl(n,e){if(HE(n=et(n)))return fp("Unsupported field value:",e,n),$E(n,e);if(n instanceof cp)return function(i,o){if(!zE(o.Ec))throw o.wc(`${i._methodName}() can only be used with update() and set()`);if(!o.path)throw o.wc(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(o);l&&o.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(i,o){const l=[];let h=0;for(const f of i){let m=Rl(f,o.yc(h));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),h++}return{arrayValue:{values:l}}}(n,e)}return function(i,o){if((i=et(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return VR(o.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Qe.fromDate(i);return{timestampValue:Tc(o.serializer,l)}}if(i instanceof Qe){const l=new Qe(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Tc(o.serializer,l)}}if(i instanceof ur)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Cn)return{bytesValue:oE(o.serializer,i._byteString)};if(i instanceof ut){const l=o.databaseId,h=i.firestore._databaseId;if(!h.isEqual(l))throw o.wc(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:Qf(i.firestore._databaseId||o.databaseId,i._key.path)}}if(i instanceof cr)return function(h,f){return{mapValue:{fields:{[Lv]:{stringValue:bv},[yc]:{arrayValue:{values:h.toArray().map(y=>{if(typeof y!="number")throw f.wc("VectorValues must only contain numeric values.");return Wf(f.serializer,y)})}}}}}}(i,o);throw o.wc(`Unsupported field value: ${bc(i)}`)}(n,e)}function $E(n,e){const t={};return kv(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mi(n,(i,o)=>{const l=Rl(o,e.Vc(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function HE(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Qe||n instanceof ur||n instanceof Cn||n instanceof ut||n instanceof cp||n instanceof cr)}function fp(n,e,t){if(!HE(t)||!Cv(t)){const i=bc(t);throw i==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+i)}}function Tf(n,e,t){if((e=et(e))instanceof Xc)return e._internalPath;if(typeof e=="string")return pp(n,e);throw Ac("Field path arguments must be of type string or ",n,!1,void 0,t)}const Q1=new RegExp("[~\\*/\\[\\]]");function pp(n,e,t){if(e.search(Q1)>=0)throw Ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Xc(...e.split("."))._internalPath}catch{throw Ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ac(n,e,t,i,o){const l=i&&!i.isEmpty(),h=o!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||h)&&(m+=" (found",l&&(m+=` in field ${i}`),h&&(m+=` in document ${o}`),m+=")"),new se(H.INVALID_ARGUMENT,f+n+m)}function WE(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(e,t,i,o,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=o,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new X1(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(mp("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class X1 extends qE{data(){return super.data()}}function mp(n,e){return typeof e=="string"?pp(n,e):e instanceof Xc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new se(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gp{}class J1 extends gp{}function Z1(n,e,...t){let i=[];e instanceof gp&&i.push(e),i=i.concat(t),function(l){const h=l.filter(m=>m instanceof yp).length,f=l.filter(m=>m instanceof Jc).length;if(h>1||h>0&&f>0)throw new se(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const o of i)n=o._apply(n);return n}class Jc extends J1{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new Jc(e,t,i)}_apply(e){const t=this._parse(e);return KE(e._query,t),new Wo(e.firestore,e.converter,hf(e._query,t))}_parse(e){const t=dp(e.firestore);return function(l,h,f,m,y,E,T){let I;if(y.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new se(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){y_(T,E);const z=[];for(const $ of T)z.push(g_(m,l,$));I={arrayValue:{values:z}}}else I=g_(m,l,T)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||y_(T,E),I=G1(f,h,T,E==="in"||E==="not-in");return ft.create(y,E,I)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function eC(n,e,t){const i=e,o=mp("where",n);return Jc._create(o,i,t)}class yp extends gp{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new yp(e,t)}_parse(e){const t=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return t.length===1?t[0]:Wn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(o,l){let h=o;const f=l.getFlattenedFilters();for(const m of f)KE(h,m),h=hf(h,m)}(e._query,t),new Wo(e.firestore,e.converter,hf(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function g_(n,e,t){if(typeof(t=et(t))=="string"){if(t==="")throw new se(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Hv(e)&&t.indexOf("/")!==-1)throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(qe.fromString(t));if(!pe.isDocumentKey(i))throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Oy(n,new pe(i))}if(t instanceof ut)return Oy(n,t._key);throw new se(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${bc(t)}.`)}function y_(n,e){if(!Array.isArray(n)||n.length===0)throw new se(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function KE(n,e){const t=function(o,l){for(const h of o)for(const f of h.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(n.filters,function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new se(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class tC{convertValue(e,t="none"){switch(Di(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ve(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Mi(e,(o,l)=>{i[o]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,o;const l=(o=(i=(t=e.fields)===null||t===void 0?void 0:t[yc].arrayValue)===null||i===void 0?void 0:i.values)===null||o===void 0?void 0:o.map(h=>lt(h.doubleValue));return new cr(l)}convertGeoPoint(e){return new ur(lt(e.latitude),lt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Fc(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(ll(e));default:return null}}convertTimestamp(e){const t=Ni(e);return new Qe(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=qe.fromString(e);Fe(dE(i),9688,{name:e});const o=new ul(i.get(1),i.get(3)),l=new pe(i.popFirst(5));return o.isEqual(t)||Ur(`Document ${l} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(n,e,t){let i;return i=n?n.toFirestore(e):e,i}class Xa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gs extends qE{constructor(e,t,i,o,l,h){super(e,t,i,o,h),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ac(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(mp("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",gs._jsonSchema={type:pt("string",gs._jsonSchemaVersion),bundleSource:pt("string","DocumentSnapshot"),bundleName:pt("string"),bundle:pt("string")};class ac extends gs{data(e={}){return super.data(e)}}class No{constructor(e,t,i,o){this._firestore=e,this._userDataWriter=t,this._snapshot=o,this.metadata=new Xa(o.hasPendingWrites,o.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ac(this._firestore,this._userDataWriter,i.key,i,new Xa(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new se(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(o,l){if(o._snapshot.oldDocs.isEmpty()){let h=0;return o._snapshot.docChanges.map(f=>{const m=new ac(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:h++}})}{let h=o._snapshot.oldDocs;return o._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const m=new ac(o._firestore,o._userDataWriter,f.doc.key,f.doc,new Xa(o._snapshot.mutatedKeys.has(f.doc.key),o._snapshot.fromCache),o.query.converter);let y=-1,E=-1;return f.type!==0&&(y=h.indexOf(f.doc.key),h=h.delete(f.doc.key)),f.type!==1&&(h=h.add(f.doc),E=h.indexOf(f.doc.key)),{type:rC(f.type),doc:m,oldIndex:y,newIndex:E}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new se(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=No._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Uf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],i=[],o=[];return this.docs.forEach(l=>{l._document!==null&&(t.push(l._document),i.push(this._userDataWriter.convertObjectMap(l._document.data.value.mapValue.fields,"previous")),o.push(l.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function rC(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ve(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(n){n=fr(n,ut);const e=fr(n.firestore,qo);return b1(up(e),n._key).then(t=>uC(e,n,t))}No._jsonSchemaVersion="firestore/querySnapshot/1.0",No._jsonSchema={type:pt("string",No._jsonSchemaVersion),bundleSource:pt("string","QuerySnapshot"),bundleName:pt("string"),bundle:pt("string")};class GE extends tC{constructor(e){super(),this.firestore=e}convertBytes(e){return new Cn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function sC(n){n=fr(n,Wo);const e=fr(n.firestore,qo),t=up(e),i=new GE(e);return Y1(n._query),M1(t,n._query).then(o=>new No(e,i,n,o))}function oC(n,e,t){n=fr(n,ut);const i=fr(n.firestore,qo),o=nC(n.converter,e);return _p(i,[W1(dp(i),"setDoc",n._key,o,n.converter!==null,t).toMutation(n._key,Hn.none())])}function aC(n,e,t,...i){n=fr(n,ut);const o=fr(n.firestore,qo),l=dp(o);let h;return h=typeof(e=et(e))=="string"||e instanceof Xc?K1(l,"updateDoc",n._key,e,t,i):q1(l,"updateDoc",n._key,e),_p(o,[h.toMutation(n._key,Hn.exists(!0))])}function lC(n){return _p(fr(n.firestore,qo),[new qf(n._key,Hn.none())])}function _p(n,e){return function(i,o){const l=new br;return i.asyncQueue.enqueueAndForget(async()=>S1(await L1(i),o,l)),l.promise}(up(n),e)}function uC(n,e,t){const i=t.docs.get(e._key),o=new GE(n);return new gs(n,o,e._key,i,new Xa(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(o){Bo=o})(As),vs(new Ci("firestore",(i,{instanceIdentifier:o,options:l})=>{const h=i.getProvider("app").getImmediate(),f=new qo(new KS(i.getProvider("auth-internal")),new XS(h,i.getProvider("app-check-internal")),function(y,E){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new se(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ul(y.options.projectId,E)}(h,o),h);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),or(vy,Ey,e),or(vy,Ey,"esm2017")})();var cC="firebase",hC="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or(cC,hC,"app");function vp(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function QE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dC=QE,XE=new yl("auth","Firebase",QE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc=new Vf("@firebase/auth");function fC(n,...e){Cc.logLevel<=ke.WARN&&Cc.warn(`Auth (${As}): ${n}`,...e)}function lc(n,...e){Cc.logLevel<=ke.ERROR&&Cc.error(`Auth (${As}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(n,...e){throw Ep(n,...e)}function hr(n,...e){return Ep(n,...e)}function YE(n,e,t){const i=Object.assign(Object.assign({},dC()),{[e]:t});return new yl("auth","Firebase",i).create(e,{appName:n.name})}function Ai(n){return YE(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ep(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return XE.create(n,...e)}function _e(n,e,...t){if(!n)throw Ep(e,...t)}function Vr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw lc(e),new Error(e)}function jr(n,e){n||Vr(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function pC(){return __()==="http:"||__()==="https:"}function __(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pC()||SI()||"connection"in navigator)?navigator.onLine:!0}function gC(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.shortDelay=e,this.longDelay=t,jr(t>e,"Short delay should be less than long delay!"),this.isMobile=wI()||RI()}get(){return mC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e){jr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _C=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vC=new Al(3e4,6e4);function ks(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Fi(n,e,t,i,o={}){return ZE(n,o,async()=>{let l={},h={};i&&(e==="GET"?h=i:l={body:JSON.stringify(i)});const f=_l(Object.assign({key:n.config.apiKey},h)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const y=Object.assign({method:e,headers:m},l);return II()||(y.referrerPolicy="no-referrer"),n.emulatorConfig&&bi(n.emulatorConfig.host)&&(y.credentials="include"),JE.fetch()(await ew(n,n.config.apiHost,t,f),y)})}async function ZE(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},yC),e);try{const o=new wC(n),l=await Promise.race([t(),o.promise]);o.clearNetworkTimeout();const h=await l.json();if("needConfirmation"in h)throw Ju(n,"account-exists-with-different-credential",h);if(l.ok&&!("errorMessage"in h))return h;{const f=l.ok?h.errorMessage:h.error.message,[m,y]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ju(n,"credential-already-in-use",h);if(m==="EMAIL_EXISTS")throw Ju(n,"email-already-in-use",h);if(m==="USER_DISABLED")throw Ju(n,"user-disabled",h);const E=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw YE(n,E,y);qn(n,E)}}catch(o){if(o instanceof mr)throw o;qn(n,"network-request-failed",{message:String(o)})}}async function Zc(n,e,t,i,o={}){const l=await Fi(n,e,t,i,o);return"mfaPendingCredential"in l&&qn(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function ew(n,e,t,i){const o=`${e}${t}?${i}`,l=n,h=l.config.emulator?wp(n.config,o):`${n.config.apiScheme}://${o}`;return _C.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(h).toString():h}function EC(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class wC{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(hr(this.auth,"network-request-failed")),vC.get())})}}function Ju(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const o=hr(n,e,i);return o.customData._tokenResponse=t,o}function v_(n){return n!==void 0&&n.enterprise!==void 0}class TC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return EC(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function IC(n,e){return Fi(n,"GET","/v2/recaptchaConfig",ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SC(n,e){return Fi(n,"POST","/v1/accounts:delete",e)}async function Pc(n,e){return Fi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nl(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function RC(n,e=!1){const t=et(n),i=await t.getIdToken(e),o=Tp(i);_e(o&&o.exp&&o.auth_time&&o.iat,t.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,h=l?.sign_in_provider;return{claims:o,token:i,authTime:nl(qd(o.auth_time)),issuedAtTime:nl(qd(o.iat)),expirationTime:nl(qd(o.exp)),signInProvider:h||null,signInSecondFactor:l?.sign_in_second_factor||null}}function qd(n){return Number(n)*1e3}function Tp(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return lc("JWT malformed, contained fewer than 3 sections"),null;try{const o=ov(t);return o?JSON.parse(o):(lc("Failed to decode base64 JWT payload"),null)}catch(o){return lc("Caught error parsing JWT payload as JSON",o?.toString()),null}}function E_(n){const e=Tp(n);return _e(e,"internal-error"),_e(typeof e.exp<"u","internal-error"),_e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fl(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof mr&&AC(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function AC({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nl(this.lastLoginAt),this.creationTime=nl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kc(n){var e;const t=n.auth,i=await n.getIdToken(),o=await fl(n,Pc(t,{idToken:i}));_e(o?.users.length,t,"internal-error");const l=o.users[0];n._notifyReloadListener(l);const h=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?tw(l.providerUserInfo):[],f=kC(n.providerData,h),m=n.isAnonymous,y=!(n.email&&l.passwordHash)&&!f?.length,E=m?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Sf(l.createdAt,l.lastLoginAt),isAnonymous:E};Object.assign(n,T)}async function PC(n){const e=et(n);await kc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kC(n,e){return[...n.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function tw(n){return n.map(e=>{var{providerId:t}=e,i=vp(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NC(n,e){const t=await ZE(n,{},async()=>{const i=_l({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=n.config,h=await ew(n,o,"/v1/token",`key=${l}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:i};return n.emulatorConfig&&bi(n.emulatorConfig.host)&&(m.credentials="include"),JE.fetch()(h,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function xC(n,e){return Fi(n,"POST","/v2/accounts:revokeToken",ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){_e(e.idToken,"internal-error"),_e(typeof e.idToken<"u","internal-error"),_e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):E_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){_e(e.length!==0,"internal-error");const t=E_(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(_e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:o,expiresIn:l}=await NC(e,t);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:o,expirationTime:l}=t,h=new xo;return i&&(_e(typeof i=="string","internal-error",{appName:e}),h.refreshToken=i),o&&(_e(typeof o=="string","internal-error",{appName:e}),h.accessToken=o),l&&(_e(typeof l=="number","internal-error",{appName:e}),h.expirationTime=l),h}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return Vr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){_e(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class $n{constructor(e){var{uid:t,auth:i,stsTokenManager:o}=e,l=vp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new CC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Sf(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await fl(this,this.stsTokenManager.getToken(this.auth,e));return _e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return RC(this,e)}reload(){return PC(this)}_assign(e){this!==e&&(_e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new $n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){_e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await kc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(An(this.auth.app))return Promise.reject(Ai(this.auth));const e=await this.getIdToken();return await fl(this,SC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,o,l,h,f,m,y,E;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,I=(o=t.email)!==null&&o!==void 0?o:void 0,F=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,z=(h=t.photoURL)!==null&&h!==void 0?h:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,D=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,Z=(y=t.createdAt)!==null&&y!==void 0?y:void 0,X=(E=t.lastLoginAt)!==null&&E!==void 0?E:void 0,{uid:ee,emailVerified:ie,isAnonymous:Ie,providerData:Se,stsTokenManager:x}=t;_e(ee&&x,e,"internal-error");const R=xo.fromJSON(this.name,x);_e(typeof ee=="string",e,"internal-error"),di(T,e.name),di(I,e.name),_e(typeof ie=="boolean",e,"internal-error"),_e(typeof Ie=="boolean",e,"internal-error"),di(F,e.name),di(z,e.name),di($,e.name),di(D,e.name),di(Z,e.name),di(X,e.name);const C=new $n({uid:ee,auth:e,email:I,emailVerified:ie,displayName:T,isAnonymous:Ie,photoURL:z,phoneNumber:F,tenantId:$,stsTokenManager:R,createdAt:Z,lastLoginAt:X});return Se&&Array.isArray(Se)&&(C.providerData=Se.map(k=>Object.assign({},k))),D&&(C._redirectEventId=D),C}static async _fromIdTokenResponse(e,t,i=!1){const o=new xo;o.updateFromServerResponse(t);const l=new $n({uid:t.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await kc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const o=t.users[0];_e(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?tw(o.providerUserInfo):[],h=!(o.email&&o.passwordHash)&&!l?.length,f=new xo;f.updateFromIdToken(i);const m=new $n({uid:o.localId,auth:e,stsTokenManager:f,isAnonymous:h}),y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Sf(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(m,y),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_=new Map;function Lr(n){jr(n instanceof Function,"Expected a class definition");let e=w_.get(n);return e?(jr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,w_.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}nw.type="NONE";const T_=nw;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n,e,t){return`firebase:${n}:${e}:${t}`}class Do{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=uc(this.userKey,o.apiKey,l),this.fullPersistenceKey=uc("persistence",o.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Pc(this.auth,{idToken:e}).catch(()=>{});return t?$n._fromGetAccountInfoResponse(this.auth,t,e):null}return $n._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Do(Lr(T_),e,i);const o=(await Promise.all(t.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let l=o[0]||Lr(T_);const h=uc(i,e.config.apiKey,e.name);let f=null;for(const y of t)try{const E=await y._get(h);if(E){let T;if(typeof E=="string"){const I=await Pc(e,{idToken:E}).catch(()=>{});if(!I)break;T=await $n._fromGetAccountInfoResponse(e,I,E)}else T=$n._fromJSON(e,E);y!==l&&(f=T),l=y;break}}catch{}const m=o.filter(y=>y._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Do(l,e,i):(l=m[0],f&&await l._set(h,f.toJSON()),await Promise.all(t.map(async y=>{if(y!==l)try{await y._remove(h)}catch{}})),new Do(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ow(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(uw(e))return"Webos";if(iw(e))return"Safari";if((e.includes("chrome/")||sw(e))&&!e.includes("edge/"))return"Chrome";if(aw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if(i?.length===2)return i[1]}return"Other"}function rw(n=Ht()){return/firefox\//i.test(n)}function iw(n=Ht()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function sw(n=Ht()){return/crios\//i.test(n)}function ow(n=Ht()){return/iemobile/i.test(n)}function aw(n=Ht()){return/android/i.test(n)}function lw(n=Ht()){return/blackberry/i.test(n)}function uw(n=Ht()){return/webos/i.test(n)}function Ip(n=Ht()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function DC(n=Ht()){var e;return Ip(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function OC(){return AI()&&document.documentMode===10}function cw(n=Ht()){return Ip(n)||aw(n)||uw(n)||lw(n)||/windows phone/i.test(n)||ow(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hw(n,e=[]){let t;switch(n){case"Browser":t=I_(Ht());break;case"Worker":t=`${I_(Ht())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((h,f)=>{try{const m=e(l);h(m)}catch(m){f(m)}});i.onAbort=t,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const o of t)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LC(n,e={}){return Fi(n,"GET","/v2/passwordPolicy",ks(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=6;class MC{constructor(e){var t,i,o,l;const h=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=h.minPasswordLength)!==null&&t!==void 0?t:bC,h.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=h.maxPasswordLength),h.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=h.containsLowercaseCharacter),h.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=h.containsUppercaseCharacter),h.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=h.containsNumericCharacter),h.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=h.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,o,l,h,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(o=m.containsLowercaseLetter)!==null&&o!==void 0?o:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(h=m.containsNumericCharacter)!==null&&h!==void 0?h:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),o&&(t.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,t,i,o){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new S_(this),this.idTokenSubscription=new S_(this),this.beforeStateQueue=new VC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=XE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Lr(t)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Do.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Pc(this,{idToken:e}),i=await $n._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(An(this.app)){const h=this.app.settings.authIdToken;return h?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(h).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const h=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=o?._redirectEventId,m=await this.tryRedirectSignIn(e);(!h||h===f)&&m?.user&&(o=m.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(h){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(h))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return _e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await kc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(An(this.app))return Promise.reject(Ai(this));const t=e?et(e):null;return t&&_e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&_e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return An(this.app)?Promise.reject(Ai(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return An(this.app)?Promise.reject(Ai(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LC(this),t=new MC(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new yl("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await xC(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Lr(e)||this._popupRedirectResolver;_e(t,this,"argument-error"),this.redirectPersistenceManager=await Do.create(this,[Lr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,o){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let h=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(_e(f,this,"internal-error"),f.then(()=>{h||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,o);return()=>{h=!0,m()}}else{const m=e.addObserver(t);return()=>{h=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return _e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(t["X-Firebase-AppCheck"]=o),t}async _getAppCheckToken(){var e;if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&fC(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ko(n){return et(n)}class S_{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(t=>this.observer=t)}get next(){return _e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FC(n){eh=n}function dw(n){return eh.loadJS(n)}function jC(){return eh.recaptchaEnterpriseScript}function BC(){return eh.gapiScript}function zC(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class $C{constructor(){this.enterprise=new HC}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class HC{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const WC="recaptcha-enterprise",fw="NO_RECAPTCHA";class qC{constructor(e){this.type=WC,this.auth=Ko(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(h,f)=>{IC(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const y=new TC(m);return l.tenantId==null?l._agentRecaptchaConfig=y:l._tenantRecaptchaConfigs[l.tenantId]=y,h(y.siteKey)}}).catch(m=>{f(m)})})}function o(l,h,f){const m=window.grecaptcha;v_(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(y=>{h(y)}).catch(()=>{h(fw)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new $C().execute("siteKey",{action:"verify"}):new Promise((l,h)=>{i(this.auth).then(f=>{if(!t&&v_(window.grecaptcha))o(f,l,h);else{if(typeof window>"u"){h(new Error("RecaptchaVerifier is only supported in browser"));return}let m=jC();m.length!==0&&(m+=f),dw(m).then(()=>{o(f,l,h)}).catch(y=>{h(y)})}}).catch(f=>{h(f)})})}}async function R_(n,e,t,i=!1,o=!1){const l=new qC(n);let h;if(o)h=fw;else try{h=await l.verify(t)}catch{h=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,y=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:y,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:h,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return i?Object.assign(f,{captchaResp:h}):Object.assign(f,{captchaResponse:h}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function A_(n,e,t,i,o){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const h=await R_(n,e,t,t==="getOobCode");return i(n,h)}else return i(n,e).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await R_(n,e,t,t==="getOobCode");return i(n,f)}else return Promise.reject(h)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(n,e){const t=Lc(n,"auth");if(t.isInitialized()){const o=t.getImmediate(),l=t.getOptions();if(_s(l,e??{}))return o;qn(o,"already-initialized")}return t.initialize({options:e})}function GC(n,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Lr);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e?.popupRedirectResolver)}function QC(n,e,t){const i=Ko(n);_e(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=pw(e),{host:h,port:f}=XC(e),m=f===null?"":`:${f}`,y={url:`${l}//${h}${m}/`},E=Object.freeze({host:h,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){_e(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),_e(_s(y,i.config.emulator)&&_s(E,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=y,i.emulatorConfig=E,i.settings.appVerificationDisabledForTesting=!0,bi(h)?(Df(`${l}//${h}${m}`),Of("Auth",!0)):YC()}function pw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function XC(n){const e=pw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:C_(i.substr(l.length+1))}}else{const[l,h]=i.split(":");return{host:l,port:C_(h)}}}function C_(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function YC(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vr("not implemented")}_getIdTokenResponse(e){return Vr("not implemented")}_linkToIdToken(e,t){return Vr("not implemented")}_getReauthenticationResolver(e){return Vr("not implemented")}}async function JC(n,e){return Fi(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZC(n,e){return Zc(n,"POST","/v1/accounts:signInWithPassword",ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(n,e){return Zc(n,"POST","/v1/accounts:signInWithEmailLink",ks(n,e))}async function tP(n,e){return Zc(n,"POST","/v1/accounts:signInWithEmailLink",ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl extends Sp{constructor(e,t,i,o=null){super("password",i),this._email=e,this._password=t,this._tenantId=o}static _fromEmailAndPassword(e,t){return new pl(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new pl(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,t,"signInWithPassword",ZC);case"emailLink":return eP(e,{email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return A_(e,i,"signUpPassword",JC);case"emailLink":return tP(e,{idToken:t,email:this._email,oobCode:this._password});default:qn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(n,e){return Zc(n,"POST","/v1/accounts:signInWithIdp",ks(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="http://localhost";class Ts extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=t,l=vp(t,["providerId","signInMethod"]);if(!i||!o)return null;const h=new Ts(i,o);return h.idToken=l.idToken||void 0,h.accessToken=l.accessToken||void 0,h.secret=l.secret,h.nonce=l.nonce,h.pendingToken=l.pendingToken||null,h}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Oo(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:nP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_l(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function iP(n){const e=Wa(qa(n)).link,t=e?Wa(qa(e)).deep_link_id:null,i=Wa(qa(n)).deep_link_id;return(i?Wa(qa(i)).link:null)||i||t||e||n}class Rp{constructor(e){var t,i,o,l,h,f;const m=Wa(qa(e)),y=(t=m.apiKey)!==null&&t!==void 0?t:null,E=(i=m.oobCode)!==null&&i!==void 0?i:null,T=rP((o=m.mode)!==null&&o!==void 0?o:null);_e(y&&E&&T,"argument-error"),this.apiKey=y,this.operation=T,this.code=E,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(h=m.lang)!==null&&h!==void 0?h:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=iP(e);try{return new Rp(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(){this.providerId=Go.PROVIDER_ID}static credential(e,t){return pl._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Rp.parseLink(t);return _e(i,"argument-error"),pl._fromEmailAndCode(e,i.code,i.tenantId)}}Go.PROVIDER_ID="password";Go.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Go.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends mw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends Cl{constructor(){super("facebook.com")}static credential(e){return Ts._fromParams({providerId:pi.PROVIDER_ID,signInMethod:pi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pi.credentialFromTaggedObject(e)}static credentialFromError(e){return pi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pi.credential(e.oauthAccessToken)}catch{return null}}}pi.FACEBOOK_SIGN_IN_METHOD="facebook.com";pi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi extends Cl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ts._fromParams({providerId:mi.PROVIDER_ID,signInMethod:mi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return mi.credentialFromTaggedObject(e)}static credentialFromError(e){return mi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return mi.credential(t,i)}catch{return null}}}mi.GOOGLE_SIGN_IN_METHOD="google.com";mi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi extends Cl{constructor(){super("github.com")}static credential(e){return Ts._fromParams({providerId:gi.PROVIDER_ID,signInMethod:gi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gi.credentialFromTaggedObject(e)}static credentialFromError(e){return gi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gi.credential(e.oauthAccessToken)}catch{return null}}}gi.GITHUB_SIGN_IN_METHOD="github.com";gi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends Cl{constructor(){super("twitter.com")}static credential(e,t){return Ts._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return yi.credentialFromTaggedObject(e)}static credentialFromError(e){return yi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return yi.credential(t,i)}catch{return null}}}yi.TWITTER_SIGN_IN_METHOD="twitter.com";yi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,o=!1){const l=await $n._fromIdTokenResponse(e,i,o),h=P_(i);return new Fo({user:l,providerId:h,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const o=P_(i);return new Fo({user:e,providerId:o,_tokenResponse:i,operationType:t})}}function P_(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc extends mr{constructor(e,t,i,o){var l;super(t.code,t.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,Nc.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,o){return new Nc(e,t,i,o)}}function gw(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Nc._fromErrorAndOperation(n,l,e,i):l})}async function sP(n,e,t=!1){const i=await fl(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Fo._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oP(n,e,t=!1){const{auth:i}=n;if(An(i.app))return Promise.reject(Ai(i));const o="reauthenticate";try{const l=await fl(n,gw(i,o,e,n),t);_e(l.idToken,i,"internal-error");const h=Tp(l.idToken);_e(h,i,"internal-error");const{sub:f}=h;return _e(n.uid===f,i,"user-mismatch"),Fo._forOperation(n,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&qn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yw(n,e,t=!1){if(An(n.app))return Promise.reject(Ai(n));const i="signIn",o=await gw(n,i,e),l=await Fo._fromIdTokenResponse(n,i,o);return t||await n._updateCurrentUser(l.user),l}async function aP(n,e){return yw(Ko(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lP(n){const e=Ko(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function uP(n,e,t){return An(n.app)?Promise.reject(Ai(n)):aP(et(n),Go.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&lP(n),i})}function cP(n,e,t,i){return et(n).onIdTokenChanged(e,t,i)}function hP(n,e,t){return et(n).beforeAuthStateChanged(e,t)}function dP(n){return et(n).signOut()}const xc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xc,"1"),this.storage.removeItem(xc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=1e3,pP=10;class vw extends _w{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=cw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),o=this.localCache[t];i!==o&&e(t,o,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((h,f,m)=>{this.notifyListeners(h,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const o=()=>{const h=this.storage.getItem(i);!t&&this.localCache[i]===h||this.notifyListeners(i,h)},l=this.storage.getItem(i);OC()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,pP):o()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},fP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}vw.type="LOCAL";const mP=vw;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ew extends _w{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ew.type="SESSION";const ww=Ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(o=>o.isListeningto(e));if(t)return t;const i=new th(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:o,data:l}=t.data,h=this.handlersMap[o];if(!h?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const f=Array.from(h).map(async y=>y(t.origin,l)),m=await gP(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}th.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,h;return new Promise((f,m)=>{const y=Ap("",20);o.port1.start();const E=setTimeout(()=>{m(new Error("unsupported_event"))},i);h={messageChannel:o,onMessage(T){const I=T;if(I.data.eventId===y)switch(I.data.status){case"ack":clearTimeout(E),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(I.data.response);break;default:clearTimeout(E),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(h),o.port1.addEventListener("message",h.onMessage),this.target.postMessage({eventType:e,eventId:y,data:t},[o.port2])}).finally(()=>{h&&this.removeMessageHandler(h)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return window}function _P(n){dr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tw(){return typeof dr().WorkerGlobalScope<"u"&&typeof dr().importScripts=="function"}async function vP(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EP(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wP(){return Tw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iw="firebaseLocalStorageDb",TP=1,Dc="firebaseLocalStorage",Sw="fbase_key";class Pl{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nh(n,e){return n.transaction([Dc],e?"readwrite":"readonly").objectStore(Dc)}function IP(){const n=indexedDB.deleteDatabase(Iw);return new Pl(n).toPromise()}function Rf(){const n=indexedDB.open(Iw,TP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Dc,{keyPath:Sw})}catch(o){t(o)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Dc)?e(i):(i.close(),await IP(),e(await Rf()))})})}async function k_(n,e,t){const i=nh(n,!0).put({[Sw]:e,value:t});return new Pl(i).toPromise()}async function SP(n,e){const t=nh(n,!1).get(e),i=await new Pl(t).toPromise();return i===void 0?null:i.value}function N_(n,e){const t=nh(n,!0).delete(e);return new Pl(t).toPromise()}const RP=800,AP=3;class Rw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rf(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>AP)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=th._getInstance(wP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await vP(),!this.activeServiceWorker)return;this.sender=new yP(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rf();return await k_(e,xc,"1"),await N_(e,xc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>k_(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>SP(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>N_(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=nh(o,!1).getAll();return new Pl(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),t.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),t.push(o));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),RP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rw.type="LOCAL";const CP=Rw;new Al(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(n,e){return e?Lr(e):(_e(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function kP(n){return yw(n.auth,new Cp(n),n.bypassAuthState)}function NP(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),oP(t,new Cp(n),n.bypassAuthState)}async function xP(n){const{auth:e,user:t}=n;return _e(t,e,"internal-error"),sP(t,new Cp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:o,tenantId:l,error:h,type:f}=e;if(h){this.reject(h);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(y){this.reject(y)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return kP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return NP;default:qn(this.auth,"internal-error")}}resolve(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=new Al(2e3,1e4);class Co extends Aw{constructor(e,t,i,o,l){super(e,t,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Co.currentPopupAction&&Co.currentPopupAction.cancel(),Co.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return _e(e,this.auth,"internal-error"),e}async onExecution(){jr(this.filter.length===1,"Popup operations only handle one event");const e=Ap();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(hr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(hr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Co.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,DP.get())};e()}}Co.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP="pendingRedirect",cc=new Map;class VP extends Aw{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=cc.get(this.auth._key());if(!e){try{const i=await LP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}cc.set(this.auth._key(),e)}return this.bypassAuthState||cc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LP(n,e){const t=UP(e),i=MP(n);if(!await i._isAvailable())return!1;const o=await i._get(t)==="true";return await i._remove(t),o}function bP(n,e){cc.set(n._key(),e)}function MP(n){return Lr(n._redirectPersistence)}function UP(n){return uc(OP,n.config.apiKey,n.name)}async function FP(n,e,t=!1){if(An(n.app))return Promise.reject(Ai(n));const i=Ko(n),o=PP(i,e),h=await new VP(i,o,t).execute();return h&&!t&&(delete h.user._redirectEventId,await i._persistUserIfCurrent(h.user),await i._setRedirectUser(null,e)),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=10*60*1e3;class BP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!zP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Cw(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(hr(this.auth,o))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=jP&&this.cachedEventUids.clear(),this.cachedEventUids.has(x_(e))}saveEventToCache(e){this.cachedEventUids.add(x_(e)),this.lastProcessedEventTime=Date.now()}}function x_(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Cw({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function zP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cw(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $P(n,e={}){return Fi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,WP=/^https?/;async function qP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $P(n);for(const t of e)try{if(KP(t))return}catch{}qn(n,"unauthorized-domain")}function KP(n){const e=If(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const h=new URL(n);return h.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&h.hostname===i}if(!WP.test(t))return!1;if(HP.test(n))return i===n;const o=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GP=new Al(3e4,6e4);function D_(){const n=dr().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function QP(n){return new Promise((e,t)=>{var i,o,l;function h(){D_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{D_(),t(hr(n,"network-request-failed"))},timeout:GP.get()})}if(!((o=(i=dr().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=dr().gapi)===null||l===void 0)&&l.load)h();else{const f=zC("iframefcb");return dr()[f]=()=>{gapi.load?h():t(hr(n,"network-request-failed"))},dw(`${BC()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw hc=null,e})}let hc=null;function XP(n){return hc=hc||QP(n),hc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=new Al(5e3,15e3),JP="__/auth/iframe",ZP="emulator/auth/iframe",ek={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},tk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function nk(n){const e=n.config;_e(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?wp(e,ZP):`https://${n.config.authDomain}/${JP}`,i={apiKey:e.apiKey,appName:n.name,v:As},o=tk.get(n.config.apiHost);o&&(i.eid=o);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${_l(i).slice(1)}`}async function rk(n){const e=await XP(n),t=dr().gapi;return _e(t,n,"internal-error"),e.open({where:document.body,url:nk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ek,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const h=hr(n,"network-request-failed"),f=dr().setTimeout(()=>{l(h)},YP.get());function m(){dr().clearTimeout(f),o(i)}i.ping(m).then(m,()=>{l(h)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sk=500,ok=600,ak="_blank",lk="http://localhost";class O_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function uk(n,e,t,i=sk,o=ok){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),h=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const m=Object.assign(Object.assign({},ik),{width:i.toString(),height:o.toString(),top:l,left:h}),y=Ht().toLowerCase();t&&(f=sw(y)?ak:t),rw(y)&&(e=e||lk,m.scrollbars="yes");const E=Object.entries(m).reduce((I,[F,z])=>`${I}${F}=${z},`,"");if(DC(y)&&f!=="_self")return ck(e||"",f),new O_(null);const T=window.open(e||"",f,E);_e(T,n,"popup-blocked");try{T.focus()}catch{}return new O_(T)}function ck(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk="__/auth/handler",dk="emulator/auth/handler",fk=encodeURIComponent("fac");async function V_(n,e,t,i,o,l){_e(n.config.authDomain,n,"auth-domain-config-required"),_e(n.config.apiKey,n,"invalid-api-key");const h={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:As,eventId:o};if(e instanceof mw){e.setDefaultLanguage(n.languageCode),h.providerId=e.providerId||"",OI(e.getCustomParameters())||(h.customParameters=JSON.stringify(e.getCustomParameters()));for(const[E,T]of Object.entries({}))h[E]=T}if(e instanceof Cl){const E=e.getScopes().filter(T=>T!=="");E.length>0&&(h.scopes=E.join(","))}n.tenantId&&(h.tid=n.tenantId);const f=h;for(const E of Object.keys(f))f[E]===void 0&&delete f[E];const m=await n._getAppCheckToken(),y=m?`#${fk}=${encodeURIComponent(m)}`:"";return`${pk(n)}?${_l(f).slice(1)}${y}`}function pk({config:n}){return n.emulator?wp(n,dk):`https://${n.authDomain}/${hk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd="webStorageSupport";class mk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ww,this._completeRedirectFn=FP,this._overrideRedirectResult=bP}async _openPopup(e,t,i,o){var l;jr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const h=await V_(e,t,i,If(),o);return uk(e,h,Ap())}async _openRedirect(e,t,i,o){await this._originValidation(e);const l=await V_(e,t,i,If(),o);return _P(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:o,promise:l}=this.eventManagers[t];return o?Promise.resolve(o):(jr(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rk(e),i=new BP(e);return t.register("authEvent",o=>(_e(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Kd,{type:Kd},o=>{var l;const h=(l=o?.[0])===null||l===void 0?void 0:l[Kd];h!==void 0&&t(!!h),qn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cw()||iw()||Ip()}}const gk=mk;var L_="@firebase/auth",b_="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){_e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _k(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function vk(n){vs(new Ci("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:h,authDomain:f}=i.options;_e(h&&!h.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:h,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hw(n)},y=new UC(i,o,l,m);return GC(y,t),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vs(new Ci("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(i=>new yk(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),or(L_,b_,_k(n)),or(L_,b_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=5*60,wk=cv("authIdTokenMaxAge")||Ek;let M_=null;const Tk=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wk)return;const o=t?.token;M_!==o&&(M_=o,await fetch(n,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function Ik(n=bf()){const e=Lc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=KC(n,{popupRedirectResolver:gk,persistence:[CP,mP,ww]}),i=cv("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const h=Tk(l.toString());hP(t,h,()=>h(t.currentUser)),cP(t,f=>h(f))}}const o=av("auth");return o&&QC(t,`http://${o}`),t}function Sk(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}FC({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=o=>{const l=hr("internal-error");l.customData=o,t(l)},i.type="text/javascript",i.charset="UTF-8",Sk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});vk("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebasestorage.googleapis.com",kw="storageBucket",Rk=2*60*1e3,Ak=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends mr{constructor(e,t,i=0){super(Gd(e),`Firebase Storage: ${t} (${Gd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,it.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var rt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(rt||(rt={}));function Gd(n){return"storage/"+n}function Pp(){const n="An unknown error occurred, please check the error payload for server response.";return new it(rt.UNKNOWN,n)}function Ck(n){return new it(rt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Pk(n){return new it(rt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kk(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new it(rt.UNAUTHENTICATED,n)}function Nk(){return new it(rt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xk(n){return new it(rt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Dk(){return new it(rt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Ok(){return new it(rt.CANCELED,"User canceled the upload/download.")}function Vk(n){return new it(rt.INVALID_URL,"Invalid URL '"+n+"'.")}function Lk(n){return new it(rt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function bk(){return new it(rt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+kw+"' property when initializing the app?")}function Mk(){return new it(rt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Uk(){return new it(rt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Fk(n){return new it(rt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Af(n){return new it(rt.INVALID_ARGUMENT,n)}function Nw(){return new it(rt.APP_DELETED,"The Firebase app was deleted.")}function jk(n){return new it(rt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function rl(n,e){return new it(rt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ha(n){throw new it(rt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Xt.makeFromUrl(e,t)}catch{return new Xt(e,"")}if(i.path==="")return i;throw Lk(e)}static makeFromUrl(e,t){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l(ie){ie.path.charAt(ie.path.length-1)==="/"&&(ie.path_=ie.path_.slice(0,-1))}const h="(/(.*))?$",f=new RegExp("^gs://"+o+h,"i"),m={bucket:1,path:3};function y(ie){ie.path_=decodeURIComponent(ie.path)}const E="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",F=new RegExp(`^https?://${T}/${E}/b/${o}/o${I}`,"i"),z={bucket:1,path:3},$=t===Pw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,D="([^?#]*)",Z=new RegExp(`^https?://${$}/${o}/${D}`,"i"),ee=[{regex:f,indices:m,postModify:l},{regex:F,indices:z,postModify:y},{regex:Z,indices:{bucket:1,path:2},postModify:y}];for(let ie=0;ie<ee.length;ie++){const Ie=ee[ie],Se=Ie.regex.exec(e);if(Se){const x=Se[Ie.indices.bucket];let R=Se[Ie.indices.path];R||(R=""),i=new Xt(x,R),Ie.postModify(i);break}}if(i==null)throw Vk(e);return i}}class Bk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(n,e,t){let i=1,o=null,l=null,h=!1,f=0;function m(){return f===2}let y=!1;function E(...D){y||(y=!0,e.apply(null,D))}function T(D){o=setTimeout(()=>{o=null,n(F,m())},D)}function I(){l&&clearTimeout(l)}function F(D,...Z){if(y){I();return}if(D){I(),E.call(null,D,...Z);return}if(m()||h){I(),E.call(null,D,...Z);return}i<64&&(i*=2);let ee;f===1?(f=2,ee=0):ee=(i+Math.random())*1e3,T(ee)}let z=!1;function $(D){z||(z=!0,I(),!y&&(o!==null?(D||(f=2),clearTimeout(o),T(0)):D||(f=1)))}return T(0),l=setTimeout(()=>{h=!0,$(!0)},t),$}function $k(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(n){return n!==void 0}function Wk(n){return typeof n=="object"&&!Array.isArray(n)}function kp(n){return typeof n=="string"||n instanceof String}function U_(n){return Np()&&n instanceof Blob}function Np(){return typeof Blob<"u"}function Cf(n,e,t,i){if(i<e)throw Af(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw Af(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function xw(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const o=e(i)+"="+e(n[i]);t=t+o+"&"}return t=t.slice(0,-1),t}var ys;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(ys||(ys={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(n,e){const t=n>=500&&n<600,o=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||o||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,t,i,o,l,h,f,m,y,E,T,I=!0,F=!1){this.url_=e,this.method_=t,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=h,this.callback_=f,this.errorCallback_=m,this.timeout_=y,this.progressCallback_=E,this.connectionFactory_=T,this.retry=I,this.isUsingEmulator=F,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((z,$)=>{this.resolve_=z,this.reject_=$,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Zu(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const h=f=>{const m=f.loaded,y=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,y)};this.progressCallback_!==null&&l.addUploadProgressListener(h),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(h),this.pendingConnection_=null;const f=l.getErrorCode()===ys.NO_ERROR,m=l.getStatus();if(!f||qk(m,this.additionalRetryCodes_)&&this.retry){const E=l.getErrorCode()===ys.ABORT;i(!1,new Zu(!1,null,E));return}const y=this.successCodes_.indexOf(m)!==-1;i(!0,new Zu(y,l))})},t=(i,o)=>{const l=this.resolve_,h=this.reject_,f=o.connection;if(o.wasSuccessCode)try{const m=this.callback_(f,f.getResponse());Hk(m)?l(m):l()}catch(m){h(m)}else if(f!==null){const m=Pp();m.serverResponse=f.getErrorText(),this.errorCallback_?h(this.errorCallback_(f,m)):h(m)}else if(o.canceled){const m=this.appDelete_?Nw():Ok();h(m)}else{const m=Dk();h(m)}};this.canceled_?t(!1,new Zu(!1,null,!0)):this.backoffId_=zk(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&$k(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zu{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function Gk(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Qk(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Xk(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Yk(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Jk(n,e,t,i,o,l,h=!0,f=!1){const m=xw(n.urlParams),y=n.url+m,E=Object.assign({},n.headers);return Xk(E,e),Gk(E,t),Qk(E,l),Yk(E,i),new Kk(y,n.method,E,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,o,h,f)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zk(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eN(...n){const e=Zk();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Np())return new Blob(n);throw new it(rt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tN(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nN(n){if(typeof atob>"u")throw Fk("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qd{constructor(e,t){this.data=e,this.contentType=t||null}}function rN(n,e){switch(n){case sr.RAW:return new Qd(Dw(e));case sr.BASE64:case sr.BASE64URL:return new Qd(Ow(n,e));case sr.DATA_URL:return new Qd(sN(e),oN(e))}throw Pp()}function Dw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,h=n.charCodeAt(++t);i=65536|(l&1023)<<10|h&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function iN(n){let e;try{e=decodeURIComponent(n)}catch{throw rl(sr.DATA_URL,"Malformed data URL.")}return Dw(e)}function Ow(n,e){switch(n){case sr.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw rl(n,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case sr.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw rl(n,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=nN(e)}catch(o){throw o.message.includes("polyfill")?o:rl(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let o=0;o<t.length;o++)i[o]=t.charCodeAt(o);return i}class Vw{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw rl(sr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=aN(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function sN(n){const e=new Vw(n);return e.base64?Ow(sr.BASE64,e.rest):iN(e.rest)}function oN(n){return new Vw(n).contentType}function aN(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e,t){let i=0,o="";U_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,t){if(U_(this.data_)){const i=this.data_,o=tN(i,e,t);return o===null?null:new _i(o)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new _i(i,!0)}}static getBlob(...e){if(Np()){const t=e.map(i=>i instanceof _i?i.data_:i);return new _i(eN.apply(null,t))}else{const t=e.map(h=>kp(h)?rN(sr.RAW,h).data:h.data_);let i=0;t.forEach(h=>{i+=h.byteLength});const o=new Uint8Array(i);let l=0;return t.forEach(h=>{for(let f=0;f<h.length;f++)o[l++]=h[f]}),new _i(o,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xp(n){let e;try{e=JSON.parse(n)}catch{return null}return Wk(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lN(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function uN(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Lw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cN(n,e){return e}class Qt{constructor(e,t,i,o){this.server=e,this.local=t||e,this.writable=!!i,this.xform=o||cN}}let ec=null;function hN(n){return!kp(n)||n.length<2?n:Lw(n)}function bw(){if(ec)return ec;const n=[];n.push(new Qt("bucket")),n.push(new Qt("generation")),n.push(new Qt("metageneration")),n.push(new Qt("name","fullPath",!0));function e(l,h){return hN(h)}const t=new Qt("name");t.xform=e,n.push(t);function i(l,h){return h!==void 0?Number(h):h}const o=new Qt("size");return o.xform=i,n.push(o),n.push(new Qt("timeCreated")),n.push(new Qt("updated")),n.push(new Qt("md5Hash",null,!0)),n.push(new Qt("cacheControl",null,!0)),n.push(new Qt("contentDisposition",null,!0)),n.push(new Qt("contentEncoding",null,!0)),n.push(new Qt("contentLanguage",null,!0)),n.push(new Qt("contentType",null,!0)),n.push(new Qt("metadata","customMetadata",!0)),ec=n,ec}function dN(n,e){function t(){const i=n.bucket,o=n.fullPath,l=new Xt(i,o);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function fN(n,e,t){const i={};i.type="file";const o=t.length;for(let l=0;l<o;l++){const h=t[l];i[h.local]=h.xform(i,e[h.server])}return dN(i,n),i}function Mw(n,e,t){const i=xp(e);return i===null?null:fN(n,i,t)}function pN(n,e,t,i){const o=xp(e);if(o===null||!kp(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const h=encodeURIComponent;return l.split(",").map(y=>{const E=n.bucket,T=n.fullPath,I="/b/"+h(E)+"/o/"+h(T),F=kl(I,t,i),z=xw({alt:"media",token:y});return F+z})[0]}function mN(n,e){const t={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F_="prefixes",j_="items";function gN(n,e,t){const i={prefixes:[],items:[],nextPageToken:t.nextPageToken};if(t[F_])for(const o of t[F_]){const l=o.replace(/\/$/,""),h=n._makeStorageReference(new Xt(e,l));i.prefixes.push(h)}if(t[j_])for(const o of t[j_]){const l=n._makeStorageReference(new Xt(e,o.name));i.items.push(l)}return i}function yN(n,e,t){const i=xp(t);return i===null?null:gN(n,e,i)}class rh{constructor(e,t,i,o){this.url=e,this.method=t,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(n){if(!n)throw Pp()}function _N(n,e){function t(i,o){const l=Mw(n,o,e);return Dp(l!==null),l}return t}function vN(n,e){function t(i,o){const l=yN(n,e,o);return Dp(l!==null),l}return t}function EN(n,e){function t(i,o){const l=Mw(n,o,e);return Dp(l!==null),pN(l,o,n.host,n._protocol)}return t}function Op(n){function e(t,i){let o;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?o=Nk():o=kk():t.getStatus()===402?o=Pk(n.bucket):t.getStatus()===403?o=xk(n.path):o=i,o.status=t.getStatus(),o.serverResponse=i.serverResponse,o}return e}function Uw(n){const e=Op(n);function t(i,o){let l=e(i,o);return i.getStatus()===404&&(l=Ck(n.path)),l.serverResponse=o.serverResponse,l}return t}function wN(n,e,t,i,o){const l={};e.isRoot?l.prefix="":l.prefix=e.path+"/",t.length>0&&(l.delimiter=t),i&&(l.pageToken=i),o&&(l.maxResults=o);const h=e.bucketOnlyServerUrl(),f=kl(h,n.host,n._protocol),m="GET",y=n.maxOperationRetryTime,E=new rh(f,m,vN(n,e.bucket),y);return E.urlParams=l,E.errorHandler=Op(e),E}function TN(n,e,t){const i=e.fullServerUrl(),o=kl(i,n.host,n._protocol),l="GET",h=n.maxOperationRetryTime,f=new rh(o,l,EN(n,t),h);return f.errorHandler=Uw(e),f}function IN(n,e){const t=e.fullServerUrl(),i=kl(t,n.host,n._protocol),o="DELETE",l=n.maxOperationRetryTime;function h(m,y){}const f=new rh(i,o,h,l);return f.successCodes=[200,204],f.errorHandler=Uw(e),f}function SN(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function RN(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=SN(null,e)),i}function AN(n,e,t,i,o){const l=e.bucketOnlyServerUrl(),h={"X-Goog-Upload-Protocol":"multipart"};function f(){let ee="";for(let ie=0;ie<2;ie++)ee=ee+Math.random().toString().slice(2);return ee}const m=f();h["Content-Type"]="multipart/related; boundary="+m;const y=RN(e,i,o),E=mN(y,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+E+`\r
--`+m+`\r
Content-Type: `+y.contentType+`\r
\r
`,I=`\r
--`+m+"--",F=_i.getBlob(T,i,I);if(F===null)throw Mk();const z={name:y.fullPath},$=kl(l,n.host,n._protocol),D="POST",Z=n.maxUploadRetryTime,X=new rh($,D,_N(n,t),Z);return X.urlParams=z,X.headers=h,X.body=F.uploadData(),X.errorHandler=Op(e),X}class CN{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,o,l){if(this.sent_)throw Ha("cannot .send() more than once");if(bi(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),l!==void 0)for(const h in l)l.hasOwnProperty(h)&&this.xhr_.setRequestHeader(h,l[h].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ha("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ha("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ha("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ha("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PN extends CN{initXhr(){this.xhr_.responseType="text"}}function ih(){return new PN}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this._service=e,t instanceof Xt?this._location=t:this._location=Xt.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Is(e,t)}get root(){const e=new Xt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lw(this._location.path)}get storage(){return this._service}get parent(){const e=lN(this._location.path);if(e===null)return null;const t=new Xt(this._location.bucket,e);return new Is(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw jk(e)}}function kN(n,e,t){n._throwIfRoot("uploadBytes");const i=AN(n.storage,n._location,bw(),new _i(e,!0),t);return n.storage.makeRequestWithTokens(i,ih).then(o=>({metadata:o,ref:n}))}function NN(n){const e={prefixes:[],items:[]};return Fw(n,e).then(()=>e)}async function Fw(n,e,t){const o=await xN(n,{pageToken:t});e.prefixes.push(...o.prefixes),e.items.push(...o.items),o.nextPageToken!=null&&await Fw(n,e,o.nextPageToken)}function xN(n,e){e!=null&&typeof e.maxResults=="number"&&Cf("options.maxResults",1,1e3,e.maxResults);const t=e||{},i=wN(n.storage,n._location,"/",t.pageToken,t.maxResults);return n.storage.makeRequestWithTokens(i,ih)}function DN(n){n._throwIfRoot("getDownloadURL");const e=TN(n.storage,n._location,bw());return n.storage.makeRequestWithTokens(e,ih).then(t=>{if(t===null)throw Uk();return t})}function ON(n){n._throwIfRoot("deleteObject");const e=IN(n.storage,n._location);return n.storage.makeRequestWithTokens(e,ih)}function VN(n,e){const t=uN(n._location.path,e),i=new Xt(n._location.bucket,t);return new Is(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LN(n){return/^[A-Za-z]+:\/\//.test(n)}function bN(n,e){return new Is(n,e)}function jw(n,e){if(n instanceof Vp){const t=n;if(t._bucket==null)throw bk();const i=new Is(t,t._bucket);return e!=null?jw(i,e):i}else return e!==void 0?VN(n,e):n}function MN(n,e){if(e&&LN(e)){if(n instanceof Vp)return bN(n,e);throw Af("To use ref(service, url), the first argument must be a Storage instance.")}else return jw(n,e)}function B_(n,e){const t=e?.[kw];return t==null?null:Xt.makeFromBucketSpec(t,n)}function UN(n,e,t,i={}){n.host=`${e}:${t}`;const o=bi(e);o&&(Df(`https://${n.host}/b`),Of("Storage",!0)),n._isUsingEmulator=!0,n._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(n._overrideAuthToken=typeof l=="string"?l:hv(l,n.app.options.projectId))}class Vp{constructor(e,t,i,o,l,h=!1){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=h,this._bucket=null,this._host=Pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rk,this._maxUploadRetryTime=Ak,this._requests=new Set,o!=null?this._bucket=Xt.makeFromBucketSpec(o,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Xt.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(An(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,t,i,o,l=!0){if(this._deleted)return new Bk(Nw());{const h=Jk(e,this._appId,i,o,t,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(h),h.getPromise().then(()=>this._requests.delete(h),()=>this._requests.delete(h)),h}}async makeRequestWithTokens(e,t){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,o).getPromise()}}const z_="@firebase/storage",$_="0.13.14";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw="storage";function FN(n,e,t){return n=et(n),kN(n,e,t)}function jN(n){return n=et(n),NN(n)}function BN(n){return n=et(n),DN(n)}function zN(n){return n=et(n),ON(n)}function zw(n,e){return n=et(n),MN(n,e)}function $N(n=bf(),e){n=et(n);const i=Lc(n,Bw).getImmediate({identifier:e}),o=lv("storage");return o&&HN(i,...o),i}function HN(n,e,t,i={}){UN(n,e,t,i)}function WN(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),o=n.getProvider("app-check-internal");return new Vp(t,i,o,e,As)}function qN(){vs(new Ci(Bw,WN,"PUBLIC").setMultipleInstances(!0)),or(z_,$_,""),or(z_,$_,"esm2017")}qN();const $w=pv({apiKey:"AIzaSyCKgTPESHswzcN4vmpDku4WRza0ZN7Ckl4",authDomain:"nora-gallery.firebaseapp.com",projectId:"nora-gallery",storageBucket:"nora-gallery.appspot.com",messagingSenderId:"83623253491",appId:"1:83623253491:web:4dc280fd0f55dbdfcfae86"}),Po=Ik($w),KN=()=>dP(Po),Nl=j1($w),Hw=$N(),GN="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let QN=(n=21)=>{let e="",t=crypto.getRandomValues(new Uint8Array(n|=0));for(;n--;)e+=GN[t[n]&63];return e};const XN={toFirestore:n=>n,fromFirestore:n=>{const e=n.data();return{id:n.id,title:e.title,description:e.description,price:e.price,active:e.active,order:e.order,imageURLs:e.imageURLs}}},YN=async()=>{let n;try{n=await sC(Z1(F1(Nl,"items"),eC("active","==",!0)).withConverter(XN))}catch{return[]}const e=[];return n.forEach(t=>{e.push(t.data())}),nx(e),e},JN=(n,e)=>n.find(t=>t.id===e)||null,ZN=async(n,e,t,i)=>{const o=QN(),l=await Ww(o,i);await oC(Qc(Nl,"items",o),{title:n,description:e,price:t,imageURLs:l,active:!0})},ex=async n=>{try{return await lC(Qc(Nl,"items",n)),await qw(n),!0}catch{return!1}},tx=async(n,e,t)=>{try{let i=[];await qw(n.id);let o=[];t.length&&(o=await Ww(n.title,t),i=[...i,...o]);const l={...e,imageURLs:i};return await aC(Qc(Nl,"items",n.id),l),!0}catch{return!1}},nx=n=>{n.sort((e,t)=>e.order-t.order)},Ww=async(n,e)=>{const t=[];for(let h=0;h<e.length;h++)t.push(FN(zw(Hw,`${n}/${h}`),e[h]));const i=await Promise.all(t),o=[];return i.forEach(h=>{o.push(BN(h.ref))}),await Promise.all(o)},qw=async n=>{try{const e=await jN(zw(Hw,n)),t=[];for(const i of e.items)t.push(zN(i)),console.log(t);return await Promise.all(t),!0}catch{return!1}},rx=({initialText:n,confirmText:e,onConfirm:t,classList:i})=>{const[o,l]=J.useState(!1),h=()=>{if(o){t();return}l(!0)},f=()=>{l(!1)};return Q.jsx("button",{onClick:m=>{m.preventDefault(),m.stopPropagation(),h()},onMouseLeave:f,className:`${o?"confirmable-primed":""} ${i}`,style:{width:"fit-content"},children:o?e:n})},Lp=J.createContext(!1),Kw=J.createContext(()=>{}),bp=J.createContext([]),Gw=({item:n})=>{const e=J.useRef(null),t=J.useRef(null),i=J.useRef(null),[o,l]=J.useState([]),[h,f]=J.useState(null),m=J.useContext(Kw),y=Rs();J.useEffect(()=>{const D=async Z=>{if(!t.current||!t.current.files)return;const X=new DataTransfer;for(const ee of Z){const Ie=await(await fetch(ee)).blob(),Se=ee.split("/").pop()||"file",x=new File([Ie],Se,{type:Ie.type});X.items.add(x)}t.current.files=X.files,E(X.files)};console.log(n,t),!(!n||!n.imageURLs||!t.current)&&D(n.imageURLs)},[n,t]);const E=D=>{D&&l([...D])},T=(D,Z)=>{if(D.preventDefault(),D.stopPropagation(),!t.current||!t.current.files)return;const X=Array.from(t.current.files);X.splice(Z,1);const ee=new DataTransfer;X.forEach(ie=>ee.items.add(ie)),t.current.files=ee.files,E(X)},I=D=>{switch(h){case D:f(null);break;case null:f(D);break;default:F(h,D),f(null)}},F=(D,Z)=>{if(!t.current||!t.current.files)return;const X=Array.from(t.current.files);[X[D],X[Z]]=[X[Z],X[D]];const ee=new DataTransfer;X.forEach(ie=>ee.items.add(ie)),t.current.files=ee.files,E(X)},z=J.useCallback(async()=>{if(!e.current||!i.current)return;const D=e.current,Z=new FormData(D);i.current.disabled=!0;const X=Z.get("title")?.toString(),ee=Z.get("description")?.toString(),ie=Z.get("price")?.toString(),Ie=t.current?.files;if(!(X&&ee&&ie&&Ie)){i.current.disabled=!1;return}i.current.classList.add("loading"),i.current.innerHTML="Working...",n?await tx(n,{},Ie):await ZN(X,ee,ie,Ie),i.current.classList.remove("loading"),i.current.disabled=!1,D.reset(),m(),y("/gallery")},[n,i,e,m,y]),$=J.useCallback(async()=>{n&&ex(n.id)},[n]);return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},className:"",children:[Q.jsx("h2",{children:n?"Edit Item":"Create New Item"}),Q.jsxs("form",{ref:e,children:[Q.jsxs("div",{className:"input-container",children:[Q.jsx("label",{htmlFor:"title",children:"Title"}),Q.jsx("input",{name:"title",id:"itemTitle",defaultValue:n?.title})]}),Q.jsxs("div",{className:"input-container",children:[Q.jsx("label",{htmlFor:"description",children:"Description"}),Q.jsx("textarea",{name:"description",id:"description",defaultValue:n?.description})]}),Q.jsxs("div",{className:"input-container",children:[Q.jsx("label",{htmlFor:"price",children:"Price"}),Q.jsxs("div",{children:["$"," ",Q.jsx("input",{style:{display:"inline"},name:"price",id:"price",placeholder:"0.00",defaultValue:n?.price})]})]}),Q.jsx("button",{className:"input-container",style:{marginTop:4},onClick:D=>{D.preventDefault(),D.stopPropagation(),t.current?.click()},children:"Select Images"}),Q.jsx("input",{ref:t,style:{display:"none"},id:"images",type:"file",multiple:!0,onChange:D=>E(D.target.files)}),Q.jsx("div",{style:{display:"flex",gap:10,padding:10},children:o.map((D,Z)=>Q.jsxs("div",{style:{display:"flex",position:"relative"},children:[Q.jsx("button",{onClick:X=>T(X,Z),className:"image-edit-button",style:{right:0},children:"x"}),Z!==0&&Q.jsx("button",{className:"image-edit-button",style:{left:0,bottom:0},onClick:X=>{X.preventDefault(),X.stopPropagation(),F(Z,Z-1)},children:"<"}),Z!==o.length-1&&Q.jsx("button",{className:"image-edit-button",style:{right:0,bottom:0},onClick:X=>{X.preventDefault(),X.stopPropagation(),F(Z,Z+1)},children:">"}),Q.jsx("img",{className:`preview-image ${h===Z&&"selected"}`,onClick:()=>I(Z),style:{width:"7rem"},src:URL.createObjectURL(D)})]},`image_${Z}`))}),Q.jsx("button",{ref:i,onClick:D=>{D.preventDefault(),D.stopPropagation(),z()},children:n?"Update":"Create"}),n!=null&&Q.jsx(rx,{classList:"danger",initialText:"Delete",confirmText:"Confirm Delete",onConfirm:$})]})]})},ix=()=>{const n=Rs();return Q.jsx("div",{className:"details-overlay",children:Q.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[Q.jsx("button",{className:"close-button",onClick:()=>n("/gallery"),children:"x"}),Q.jsx(Gw,{item:null})]})})},sx=({item:n})=>{const e=Rs();return Q.jsx("div",{className:"item-preview-wrapper",children:Q.jsxs("div",{className:"item-preview",onClick:()=>{e(`/gallery/${n.id}`)},children:[Q.jsx("img",{src:n.imageURLs[0],height:200}),Q.jsx("h3",{children:n.title})]})})},ox=({urls:n})=>Q.jsx("img",{src:n[0]??"",height:200}),ax=({item:n})=>Q.jsxs("div",{children:[Q.jsx(ox,{urls:n.imageURLs}),Q.jsx("div",{children:n.title}),Q.jsx("div",{children:n.description}),Q.jsxs("span",{children:["$",n.price]})]}),lx=()=>{const n=Rs(),e=J.useContext(Lp),t=F0().id??"",i=J.useContext(bp),o=J.useMemo(()=>JN(i,t),[i,t]),[l,h]=J.useState(!1);if(!o){n("/gallery");return}return Q.jsx("div",{className:"details-overlay",children:Q.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e&&Q.jsx("button",{onClick:()=>h(!l),children:l?"View":"Edit"}),Q.jsx("button",{className:"close-button",onClick:()=>n("/gallery"),children:"x"}),o&&l&&e?Q.jsx(Gw,{item:o}):Q.jsx(ax,{item:o})]})})},ux=()=>{const n=J.useContext(Lp),e=J.useContext(bp),t=Rs();return Q.jsxs("div",{children:[n&&Q.jsx("button",{style:{position:"absolute",bottom:30,right:100},onClick:()=>{t("/gallery/new")},children:"+"}),Q.jsxs(rv,{children:[Q.jsx(fi,{path:"/:id",element:Q.jsx(lx,{})}),n&&Q.jsx(fi,{path:"/new",element:Q.jsx(ix,{})})]}),!e.length&&"Nothing to see here...",Q.jsx("div",{className:"item-container",style:{display:"grid",gap:1,backgroundColor:"lightgrey"},children:e.map(i=>Q.jsx(sx,{item:i},i.id))})]})},cx=()=>Q.jsx("div",{className:"main-content",children:"hello world"}),hx=()=>Q.jsx(Q.Fragment,{children:"contact"}),tc=({url:n,currentUrl:e,text:t})=>{const i=n===e;return Q.jsxs("div",{children:[i&&Q.jsx("span",{className:"headers",children:"» "}),Q.jsx(lI,{className:"headers",to:n,children:t})]})},dx=()=>{const[n,e]=J.useState("/"),t=gl();return J.useEffect(()=>{e(t.pathname)},[t]),Q.jsxs("nav",{style:{position:"fixed",top:0,right:"10%",height:"100%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"center",gap:10},children:[Q.jsx(tc,{url:"/",currentUrl:n,text:"Home"}),Q.jsx(tc,{url:"/gallery",currentUrl:n,text:"Work"}),Q.jsx(tc,{url:"/contact",currentUrl:n,text:"Contact"}),Q.jsx(tc,{url:"/about",currentUrl:n,text:"About"})]})},fx=()=>{const n=Rs();return setTimeout(()=>n("/"),1e3),Q.jsx(Q.Fragment,{children:"Page not found. Redirecting..."})},px=()=>Q.jsx("div",{className:"main-content",children:"Nora Barnacle Burke is a slow furniture designer and artist interested in exploring fabrication techniques for the sake of making unique and well made interior objects. They want to create special experiences for consumers on a small scale, using an advanced understanding of material and finish applications. Nora Barnacle is currently spending most of their time in the woodshop, making small homegoods and furniture. Their previous experience in fiber studies goes hand in hand with their current woodworking practice. They have interest and experience working in ceramics, wood, metal, fibers, patternmaking, and more. Nora Barnacle is a material-driven creator and this is the driving inspiration for their practice."}),mx=({showLogin:n,setShowLogin:e,setAdminMode:t})=>{const[i,o]=J.useState(""),[l,h]=J.useState(""),f=async()=>{if(!(!i||!l))try{(await uP(Po,i,l)).user&&(e(!1),t(!0))}catch{alert("Invalid login. Please contact your brother for assistance.")}},m=async()=>{await KN(),t(!1)};return Q.jsxs("div",{style:{position:"absolute",top:10,left:"40%",display:"flex",gap:20},children:[n?Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{children:[Q.jsx("label",{children:"Email"}),Q.jsx("input",{type:"text",placeholder:"Email",onChange:y=>o(y.target.value)})]}),Q.jsxs("div",{children:[Q.jsx("label",{children:"Password"}),Q.jsx("input",{type:"password",placeholder:"Password",onChange:y=>h(y.target.value)})]}),Q.jsx("button",{type:"submit",onClick:()=>f(),children:"Login"})]}):Q.jsx(Q.Fragment,{}),Po.currentUser&&"Logged in as: "+Po.currentUser.email,Po.currentUser&&Q.jsx("button",{onClick:m,children:"Log Out"})]})},gx=()=>{const[n,e]=J.useState(!1),[t,i]=J.useState(!1),[o,l]=J.useState(!0),[h,f]=J.useState([]);return J.useEffect(()=>{o&&((async()=>{f(await YN()),console.log("loaded items")})(),l(!1))},[o]),J.useEffect(()=>{const m=async()=>{if(Po.currentUser){i(!0);return}(await iC(Qc(Nl,"constants",localStorage.getItem("nora-key")??""))).exists()&&e(!0)};!t&&localStorage.getItem("nora-key")&&setTimeout(()=>m(),1e3)},[t]),Q.jsxs(sI,{basename:"/nora-website",children:[Q.jsxs("div",{className:"headers",style:{fontSize:"2rem",position:"fixed",top:20,left:"5%"},children:["Nora Barnacle",Q.jsx("img",{src:"/edit-outline.png",draggable:!1,style:{position:"absolute",right:-23,top:-23,transform:"scale(0.875)",zIndex:-1}})]}),Q.jsx(dx,{}),Q.jsx(mx,{showLogin:n,setShowLogin:e,setAdminMode:i}),Q.jsx(Kw.Provider,{value:()=>l(!0),children:Q.jsx(Lp.Provider,{value:t,children:Q.jsx(bp.Provider,{value:h,children:Q.jsxs(rv,{children:[Q.jsx(fi,{path:"/",element:Q.jsx(cx,{})}),Q.jsx(fi,{path:"/gallery/*",element:Q.jsx(ux,{})}),Q.jsx(fi,{path:"/contact",element:Q.jsx(hx,{})}),Q.jsx(fi,{path:"/about",element:Q.jsx(px,{})}),Q.jsx(fi,{path:"*",element:Q.jsx(fx,{})})]})})})})]})};a0.createRoot(document.getElementById("root")).render(Q.jsx(gx,{}));
