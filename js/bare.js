(()=>{var e,t,n={140:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{m:()=>N});var i=function(){},o=window,s={error:i,debug:i},a=(o.crypto||o.msCrypto,function(){try{return window.localStorage.setItem("___some_test___","42"),window.localStorage.removeItem("___some_test___"),window.localStorage}catch(e){return null}}(),o.console||s);function c(e){return null!=e}function u(e){return Object.keys(e).reduce((function(t,n){var i=e[n];return c(i)&&(t[n]="object"===r(i)?JSON.stringify(i):i.toString()),t}),{})}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===l(t)?t:String(t)}var h=function(){function e(t,n){var r,i,o,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(){if(s.events.length){var e=s.events.splice(0,s.events.length);s.timer&&(clearTimeout(s.timer),s.timer=null),e.length&&s.callback(e)}},(i=v(i="flush"))in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o,this.callback=t,this.events=[],this.timer=null,this.isStarted=!1,this.timeout=n}var t,n;return t=e,(n=[{key:"push",value:function(e){this.events.push(e)}},{key:"pushWithFlush",value:function(e){this.push(e),this.isStarted&&!this.timer&&(this.timer=setTimeout(this.flush,this.timeout))}},{key:"start",value:function(){this.isStarted=!0,this.flush()}},{key:"stop",value:function(){this.isStarted=!1,this.flush()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,m(r.key),r)}}function g(e,t,n){return(t=m(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){var t=function(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===p(t)?t:String(t)}var y=window.parent,b=y.performance,w={category:"clerk",action:"activity",focus_time:0,idle_time:0,load_start:0,dom_loaded:0,page_loaded:0,page_unload:0},E=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),g(this,"metrics",Object.assign({},w)),g(this,"fetchStart",0),g(this,"lastFocus",0),g(this,"lastBlur",null),y.performance&&(this.reset(),this.attachListeners())}var t,n;return t=e,n=[{key:"activity",get:function(){return this.metrics}},{key:"reset",value:function(){var e,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.metrics=Object.assign({},w),e=t?+new Date:b.timing.fetchStart,this.lastFocus=e,this.lastBlur=e,this.fetchStart=e,this.metrics.load_start=e}},{key:"attachListeners",value:function(){var e=this;y.addEventListener("load",(function(){var t=b.timing,n=t.domContentLoadedEventStart,r=t.loadEventStart;e.metrics.dom_loaded=n-e.fetchStart,e.metrics.page_loaded=r-e.fetchStart})),y.addEventListener("beforeunload",(function(){e.metrics.page_unload=+new Date-e.fetchStart})),y.addEventListener("focus",(function(){if(e.lastBlur){e.lastFocus=+new Date;var t=e.lastFocus-e.lastBlur;e.lastBlur=null,e.metrics.idle_time+=t}})),y.addEventListener("blur",(function(){if(e.lastFocus){e.lastBlur=+new Date;var t=e.lastBlur-e.lastFocus;e.lastFocus=null,e.metrics.focus_time+=t}}))}}],n&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function S(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}const _=function(e){return function(e){for(var t,n=(3-e.length%3)%3,r="",i=e.length,o=0,s=0;s<i;s++)t=s%3,o|=e[s]<<(16>>>t&24),2!==t&&e.length-s!=1||(r+=String.fromCharCode(S(o>>>18&63),S(o>>>12&63),S(o>>>6&63),S(63&o)),o=0);return 0===n?r:r.substring(0,r.length-n)+(1===n?"=":"==")}(function(e){for(var t,n=e.length,r=null,i=[],o=0;o<n;o++){if((t=e.charCodeAt(o))>55295&&t<57344){if(!r){if(t>56319){i.push(239,191,189);continue}if(o+1===n){i.push(239,191,189);continue}r=t;continue}if(t<56320){i.push(239,191,189),r=t;continue}t=r-55296<<10|t-56320|65536,r=null}else r&&(i.push(239,191,189),r=null);if(t<128)i.push(t);else if(t<2048)i.push(t>>6|192,63&t|128);else if(t<65536)i.push(t>>12|224,t>>6&63|128,63&t|128);else{if(!(t<2097152))throw new Error("Invalid code point");i.push(t>>18|240,t>>12&63|128,t>>6&63|128,63&t|128)}}return i}(e))};function j(e,t,n){try{var r=new XMLHttpRequest;return r.onerror=function(e){var t="".concat(e.type,":").concat(e.loaded,"/").concat(e.total);return n("E012: Error sending POST xhr",t)},r.open("POST",e,!0),r.send(t),!0}catch(e){return n&&n("E013: POST request could not be delivered",e),!1}}function k(e){return function(t,n){var r=_(JSON.stringify(t)),i=!0;return i&&!!(i=function(e,t,n){try{if("function"==typeof navigator.sendBeacon)return navigator.sendBeacon(e,t)}catch(e){n&&n("E018: Error sending beacon request",e)}return!1}(e,r,n))||j(e,r,n)}}function P(e){return{url:e.url,referrer:e.referrer,features:e.features,dimensions:e.dimensions}}function O(e){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O(e)}function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,D(r.key),r)}}function T(e,t,n){return(t=D(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function D(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!==O(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===O(t)?t:String(t)}var F=window,q=F.document;function C(e){F.postMessage({clerk:{response:e}},"*")}function L(){var e,t=null==q?void 0:q.getElementById("clerk_iframe");t&&(null===(e=t.contentWindow)||void 0===e||e.postMessage({clerk:{request:"getPageInfo"}},"*"))}var N=function(){function e(t,n){var r=this;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),T(this,"trackWebEvents",!1),T(this,"pageInfo",null),T(this,"mirrorDimensions",[]),T(this,"cachedDimensions",null),T(this,"apeironSchema",null),T(this,"currentPageviewEvent",null),T(this,"push",(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="E003: Push error";try{switch(e._){case"pageview":n="E031: Error sending pageview",r.processPageview(Object.assign(e,{_:void 0}));break;case"event":n="E032: Error sending event",r.pushEvent(Object.assign(e,{_:void 0}),t);break;case"notify":n="E033: Error sending notification",e.non_interaction="1",r.pushEvent(Object.assign(e,{_:void 0}),t);break;case"fingerprint":n="E034 Error sending fingerprint",r.pushFingerprint(Object.assign(e,{_:void 0}));break;default:return n="E030: Invalid kind",void r.error(n,JSON.stringify(e))}}catch(e){r.error(n,e)}})),T(this,"senderFactory",(function(e,t,n,r){return function(i){var o=n(),s={project:null==o?void 0:o.project,client_id:null==o?void 0:o.client_id,page_id:null==o?void 0:o.page_id,events:i},a=r?{common_dimensions:Object.assign({},null==o?void 0:o.commonDimensions)}:{},c=Object.assign({},s,a);return e(c,t)}})),T(this,"senderWebEventsFactory",(function(e,t,n,i){return function(o){var s=n(),a={event_name:"event",project:null==s?void 0:s.project,client_id:null==s?void 0:s.client_id,page_id:null==s?void 0:s.page_id,events:o},c=i?{common_dimensions:{pageview:r.currentPageviewEvent?P(r.currentPageviewEvent):null}}:{},u=Object.assign({},a,c);return e(u,t)}})),T(this,"initialize",(function(){F.addEventListener("message",(function(e){var t=e.data.clerk;t&&t.pageInfo&&(null===r.pageInfo&&(r.pageInfo=t.pageInfo,C(t.pageInfo)),r.processPageview())})),F.addEventListener("message",(function(e){var t=e.data.clerk;t&&t.request&&"getInfo"===t.request&&null!==r.pageInfo&&C(r.pageInfo)})),L()})),this.metrics=new E,void 0===t)throw new Error("E001: No Clerk configuration found");if(!Array.isArray(n))throw new Error("E002: No data or two Clerks loaded");this.trackWebEvents=t.trackWebEvents||!1,this.pageInfo=null,this.cachedDimensions=null;var i=t.endpointUrl,o=t.mirrorDimensions,s=void 0===o?[]:o,c=t.eventMethod,u=void 0===c?null:c,l=t.activityMethod,f=void 0===l?null:l,v=t.pageviewMethod,p=void 0===v?null:v,d=t.fingerprintMethod,g=void 0===d?null:d,m=(t.apeironSchema,t.webEventsMethod),y=void 0===m?null:m;this.mirrorDimensions=s;var b,w,S=function(){return r.pageInfo};this.error=(b=i,w=S,function(e,t){var n=w(),r="".concat(b,"/err.gif");try{var i,o=e.split(":")[0],s=n&&n.page_id;i=t instanceof Error?t.stack||t.toString():"".concat(t),(new Image).src=r+"?w=".concat(o)+(s?"&p=".concat(s):"")+(i?"&e=".concat(_(i)):""),a.error(e,t)}catch(e){}}),this.activityTransport=this.senderFactory(k("".concat(i,"/").concat(f||"activity")),this.error,S,!1),this.eventTransport=this.senderFactory(k("".concat(i,"/").concat(u||"events")),this.error,S,!0),this.webEventsTransport=k("".concat(i,"/").concat(y||"web_events")),this.webEventsEventsTransport=this.senderWebEventsFactory(this.webEventsTransport,this.error,S,!0),this.fingerprintTransport=this.senderFactory(k("".concat(i,"/").concat(g||"fingerprints")),this.error,S,!0),this.pageviewTransport=k("".concat(i,"/").concat(p||"pageviews")),this.queue=new h((function(e){r.eventTransport(e),r.trackWebEvents&&r.webEventsEventsTransport(e)}),150),this.initialize(),F.addEventListener("beforeunload",(function(){r.queue.flush(),r.activityTransport([r.metrics.activity])})),n.forEach((function(e){return r.push(e)}))}var t,n;return t=e,(n=[{key:"extendPageInfo",value:function(e){this.pageInfo&&(this.pageInfo.project=e.project,this.pageInfo.commonDimensions=this.mirrorDimensions.reduce((function(t,n){var r=e[n];return c(r)&&(t[n]="object"===O(r)?JSON.stringify(r):r.toString()),t}),{}))}},{key:"processPageview",value:function(e){if(this.pageInfo)if(this.cachedDimensions){if(e)return void this.error("E050: Dimensions conflict");this.pushPageview(this.cachedDimensions),this.extendPageInfo(this.cachedDimensions),this.cachedDimensions=null,this.queue.start()}else e&&(this.queue.isStarted?(this.activityTransport([this.metrics.activity]),this.metrics.reset(!0),this.queue.stop(),this.pageInfo=null,this.cachedDimensions=e,L()):(this.pushPageview(e),this.extendPageInfo(e),this.queue.start()));else{if(this.cachedDimensions)return void this.error("E051: Malformed pageview state");if(!e)return void this.error("E052: Empty pageview state");this.cachedDimensions=e}}},{key:"pushEvent",value:function(e,t){var n=u(e),r=n.category,i=n.action;r?i?this.pageInfo&&t?this.eventTransport([n]):this.pageInfo&&!t?this.queue.pushWithFlush(n):this.queue.push(n):this.error("E041: No action in event"):this.error("E041: No category in event")}},{key:"pushFingerprint",value:function(e){if(0!==Object.keys(e.fingerprint).length)if(e.category)if(e.action){var t=u(e);this.pageInfo&&this.fingerprintTransport([t])}else this.error("E063: No action in event");else this.error("E062: No category in event");else this.error("E061: Empty fingerprint passed",JSON.stringify(e.fingerprint))}},{key:"pushPageview",value:function(e){var t={};try{Object.assign(t,function(){var e=screen,t=document.body,n=navigator,r={screen_vp:e.availWidth+"x"+e.availHeight,screen_res:e.width+"x"+e.height,window_size:t.clientWidth+"x"+t.clientHeight,has_beacon:"function"==typeof n.sendBeacon,has_cors:"withCredentials"in new XMLHttpRequest},i=n.mimeTypes&&n.mimeTypes["application/x-java-applet"];if(i){var o=i.enabledPlugin.name;r.java="string"==typeof o?o:void 0}var s=n.plugins&&n.plugins["Shockwave Flash"];if(s){var a=s.description;r.flash="string"==typeof a?a:void 0}return r}())}catch(e){this.error("E010: Error detecting browser features",JSON.stringify(e))}var n=e.$||{},r=n.url,i=void 0===r?null:r,s=n.referrer,c=void 0===s?null:s;delete e.$;var l={url:i||o.location.href.split("#")[0],referrer:c||q.referrer,page_info:this.pageInfo,features:t,dimensions:Object.assign({clerk_version:"v4.3.9"},u(e))};if(this.currentPageviewEvent=l,this.pageviewTransport(l,this.error),this.trackWebEvents){var f=function(e){var t,n;return{event_name:"pageview",project:e.dimensions.project,client_id:null===(t=e.page_info)||void 0===t?void 0:t.client_id,page_id:null===(n=e.page_info)||void 0===n?void 0:n.page_id,events:[{action:"pageview",category:"pageview"}],common_dimensions:{pageview:P(e)}}}(l);a.debug("CLERK: Sending webevents pageview",f),this.webEventsTransport(f,this.error)}}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}},r={};function i(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,i),o.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t=window,e=i(140).m,t.clerkStats=new e(t.CLERK_CONFIG,t.clerkStats)})();