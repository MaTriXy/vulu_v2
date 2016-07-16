webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(1);
	
	__webpack_require__(5);
	
	__webpack_require__(8);
	
	var _angular = __webpack_require__(12);
	
	var _angular2 = _interopRequireDefault(_angular);
	
	var _angularAnimate = __webpack_require__(14);
	
	var _angularAnimate2 = _interopRequireDefault(_angularAnimate);
	
	var _moment = __webpack_require__(16);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _lodash = __webpack_require__(120);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _angularUiRouter = __webpack_require__(121);
	
	var _angularUiRouter2 = _interopRequireDefault(_angularUiRouter);
	
	var _ngCurrency = __webpack_require__(122);
	
	var _ngCurrency2 = _interopRequireDefault(_ngCurrency);
	
	var _ngStorage = __webpack_require__(123);
	
	var _ngStorage2 = _interopRequireDefault(_ngStorage);
	
	var _angularTranslate = __webpack_require__(124);
	
	var _angularTranslate2 = _interopRequireDefault(_angularTranslate);
	
	var _common = __webpack_require__(125);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _models = __webpack_require__(225);
	
	var _models2 = _interopRequireDefault(_models);
	
	var _components = __webpack_require__(445);
	
	var _components2 = _interopRequireDefault(_components);
	
	var _home = __webpack_require__(459);
	
	var _home2 = _interopRequireDefault(_home);
	
	var _managers = __webpack_require__(471);
	
	var _managers2 = _interopRequireDefault(_managers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//import 'npm-font-open-sans';
	
	// Application assets:
	// Vendor libraries:
	
	var modules = [_angularAnimate2.default, _angularUiRouter2.default, _ngCurrency2.default, _angularTranslate2.default, _ngStorage2.default.name, _common2.default.name, _models2.default.name, _managers2.default.name, _components2.default.name, _home2.default.name, 'algoliasearch'];
	
	// Application modules:
	
	// Angular and 3rd party modules:
	
	_angular2.default.module('startapp.db', modules);
	
	// Bootstrap in strictDI mode
	//todo ran fix strictDI isssue
	_angular2.default.bootstrap(document, ['startapp.db'], {
	  strictDi: false
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
	!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
	}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
	e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"=="function"&&__webpack_require__(4)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return n}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});


/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["algoliasearch"] = __webpack_require__(6);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(7);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var require;var require;var require;var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*! algoliasearch 3.17.0 | © 2014, 2015 Algolia SAS | github.com/algolia/algoliasearch-client-js */
	!function(e){var t;"undefined"!=typeof window?t=window:"undefined"!=typeof self&&(t=self),t.ALGOLIA_MIGRATION_LAYER=e()}(function(){return function e(t,o,r){function n(i,a){if(!o[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return require(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=o[i]={exports:{}};t[i][0].call(l.exports,function(e){var o=t[i][1][e];return n(o?o:e)},l,l.exports,e,t,o,r)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}({1:[function(e,t,o){function r(e,t){for(var o in t)e.setAttribute(o,t[o])}function n(e,t){e.onload=function(){this.onerror=this.onload=null,t(null,e)},e.onerror=function(){this.onerror=this.onload=null,t(new Error("Failed to load "+this.src),e)}}function s(e,t){e.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||(this.onreadystatechange=null,t(null,e))}}t.exports=function(e,t,o){var i=document.head||document.getElementsByTagName("head")[0],a=document.createElement("script");"function"==typeof t&&(o=t,t={}),t=t||{},o=o||function(){},a.type=t.type||"text/javascript",a.charset=t.charset||"utf8",a.async=!("async"in t)||!!t.async,a.src=e,t.attrs&&r(a,t.attrs),t.text&&(a.text=""+t.text);var c="onload"in a?n:s;c(a,o),a.onload||n(a,o),i.appendChild(a)}},{}],2:[function(e,t,o){"use strict";function r(e){for(var t=new RegExp("cdn\\.jsdelivr\\.net/algoliasearch/latest/"+e.replace(".","\\.")+"(?:\\.min)?\\.js$"),o=document.getElementsByTagName("script"),r=!1,n=0,s=o.length;n<s;n++)if(o[n].src&&t.test(o[n].src)){r=!0;break}return r}t.exports=r},{}],3:[function(e,t,o){"use strict";function r(t){var o=e(1),r="//cdn.jsdelivr.net/algoliasearch/2/"+t+".min.js",s="-- AlgoliaSearch `latest` warning --\nWarning, you are using the `latest` version string from jsDelivr to load the AlgoliaSearch library.\nUsing `latest` is no more recommended, you should load //cdn.jsdelivr.net/algoliasearch/2/algoliasearch.min.js\n\nAlso, we updated the AlgoliaSearch JavaScript client to V3. If you want to upgrade,\nplease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch  `latest` warning --";window.console&&(window.console.warn?window.console.warn(s):window.console.log&&window.console.log(s));try{document.write("<script>window.ALGOLIA_SUPPORTS_DOCWRITE = true</script>"),window.ALGOLIA_SUPPORTS_DOCWRITE===!0?(document.write('<script src="'+r+'"></script>'),n("document.write")()):o(r,n("DOMElement"))}catch(i){o(r,n("DOMElement"))}}function n(e){return function(){var t="AlgoliaSearch: loaded V2 script using "+e;window.console&&window.console.log&&window.console.log(t)}}t.exports=r},{1:1}],4:[function(e,t,o){"use strict";function r(){var e="-- AlgoliaSearch V2 => V3 error --\nYou are trying to use a new version of the AlgoliaSearch JavaScript client with an old notation.\nPlease read our migration guide at https://github.com/algolia/algoliasearch-client-js/wiki/Migration-guide-from-2.x.x-to-3.x.x\n-- /AlgoliaSearch V2 => V3 error --";window.AlgoliaSearch=function(){throw new Error(e)},window.AlgoliaSearchHelper=function(){throw new Error(e)},window.AlgoliaExplainResults=function(){throw new Error(e)}}t.exports=r},{}],5:[function(e,t,o){"use strict";function r(t){var o=e(2),r=e(3),n=e(4);o(t)?r(t):n()}r("algoliasearch.angular")},{2:2,3:3,4:4}]},{},[5])(5)}),function e(t,o,r){function n(i,a){if(!o[i]){if(!t[i]){var c="function"==typeof require&&require;if(!a&&c)return require(i,!0);if(s)return s(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var l=o[i]={exports:{}};t[i][0].call(l.exports,function(e){var o=t[i][1][e];return n(o?o:e)},l,l.exports,e,t,o,r)}return o[i].exports}for(var s="function"==typeof require&&require,i=0;i<r.length;i++)n(r[i]);return n}({1:[function(e,t,o){function r(e){if(e=""+e,!(e.length>1e4)){var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(t){var o=parseFloat(t[1]),r=(t[2]||"ms").toLowerCase();switch(r){case"years":case"year":case"yrs":case"yr":case"y":return o*p;case"days":case"day":case"d":return o*l;case"hours":case"hour":case"hrs":case"hr":case"h":return o*u;case"minutes":case"minute":case"mins":case"min":case"m":return o*c;case"seconds":case"second":case"secs":case"sec":case"s":return o*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return o}}}}function n(e){return e>=l?Math.round(e/l)+"d":e>=u?Math.round(e/u)+"h":e>=c?Math.round(e/c)+"m":e>=a?Math.round(e/a)+"s":e+"ms"}function s(e){return i(e,l,"day")||i(e,u,"hour")||i(e,c,"minute")||i(e,a,"second")||e+" ms"}function i(e,t,o){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+o:Math.ceil(e/t)+" "+o+"s"}var a=1e3,c=60*a,u=60*c,l=24*u,p=365.25*l;t.exports=function(e,t){return t=t||{},"string"==typeof e?r(e):t["long"]?s(e):n(e)}},{}],2:[function(e,t,o){function r(){d&&l&&(d=!1,l.length?p=l.concat(p):h=-1,p.length&&n())}function n(){if(!d){var e=a(r);d=!0;for(var t=p.length;t;){for(l=p,p=[];++h<t;)l&&l[h].run();h=-1,t=p.length}l=null,d=!1,c(e)}}function s(e,t){this.fun=e,this.array=t}function i(){}var a,c,u=t.exports={};!function(){try{a=setTimeout}catch(e){a=function(){throw new Error("setTimeout is not defined")}}try{c=clearTimeout}catch(e){c=function(){throw new Error("clearTimeout is not defined")}}}();var l,p=[],d=!1,h=-1;u.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)t[o-1]=arguments[o];p.push(new s(e,t)),1!==p.length||d||a(n,0)},s.prototype.run=function(){this.fun.apply(null,this.array)},u.title="browser",u.browser=!0,u.env={},u.argv=[],u.version="",u.versions={},u.on=i,u.addListener=i,u.once=i,u.off=i,u.removeListener=i,u.removeAllListeners=i,u.emit=i,u.binding=function(e){throw new Error("process.binding is not supported")},u.cwd=function(){return"/"},u.chdir=function(e){throw new Error("process.chdir is not supported")},u.umask=function(){return 0}},{}],3:[function(e,t,o){function r(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}function n(){var e=arguments,t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+o.humanize(this.diff),!t)return e;var r="color: "+this.color;e=[e[0],r,"color: inherit"].concat(Array.prototype.slice.call(e,1));var n=0,s=0;return e[0].replace(/%[a-z%]/g,function(e){"%%"!==e&&(n++,"%c"===e&&(s=n))}),e.splice(s,0,r),e}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function i(e){try{null==e?o.storage.removeItem("debug"):o.storage.debug=e}catch(t){}}function a(){var e;try{e=o.storage.debug}catch(t){}return e}function c(){try{return window.localStorage}catch(e){}}o=t.exports=e(4),o.log=s,o.formatArgs=n,o.save=i,o.load=a,o.useColors=r,o.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:c(),o.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],o.formatters.j=function(e){return JSON.stringify(e)},o.enable(a())},{4:4}],4:[function(e,t,o){function r(){return o.colors[l++%o.colors.length]}function n(e){function t(){}function n(){var e=n,t=+new Date,s=t-(u||t);e.diff=s,e.prev=u,e.curr=t,u=t,null==e.useColors&&(e.useColors=o.useColors()),null==e.color&&e.useColors&&(e.color=r());var i=Array.prototype.slice.call(arguments);i[0]=o.coerce(i[0]),"string"!=typeof i[0]&&(i=["%o"].concat(i));var a=0;i[0]=i[0].replace(/%([a-z%])/g,function(t,r){if("%%"===t)return t;a++;var n=o.formatters[r];if("function"==typeof n){var s=i[a];t=n.call(e,s),i.splice(a,1),a--}return t}),"function"==typeof o.formatArgs&&(i=o.formatArgs.apply(e,i));var c=n.log||o.log||console.log.bind(console);c.apply(e,i)}t.enabled=!1,n.enabled=!0;var s=o.enabled(e)?n:t;return s.namespace=e,s}function s(e){o.save(e);for(var t=(e||"").split(/[\s,]+/),r=t.length,n=0;n<r;n++)t[n]&&(e=t[n].replace(/\*/g,".*?"),"-"===e[0]?o.skips.push(new RegExp("^"+e.substr(1)+"$")):o.names.push(new RegExp("^"+e+"$")))}function i(){o.enable("")}function a(e){var t,r;for(t=0,r=o.skips.length;t<r;t++)if(o.skips[t].test(e))return!1;for(t=0,r=o.names.length;t<r;t++)if(o.names[t].test(e))return!0;return!1}function c(e){return e instanceof Error?e.stack||e.message:e}o=t.exports=n,o.coerce=c,o.disable=i,o.enable=s,o.enabled=a,o.humanize=e(1),o.names=[],o.skips=[],o.formatters={};var u,l=0},{1:1}],5:[function(e,t,o){(function(o,r){(function(){"use strict";function n(e){return"function"==typeof e||"object"==typeof e&&null!==e}function s(e){return"function"==typeof e}function i(e){X=e}function a(e){z=e}function c(){return function(){o.nextTick(h)}}function u(){return function(){V(h)}}function l(){var e=0,t=new te(h),o=document.createTextNode("");return t.observe(o,{characterData:!0}),function(){o.data=e=++e%2}}function p(){var e=new MessageChannel;return e.port1.onmessage=h,function(){e.port2.postMessage(0)}}function d(){return function(){setTimeout(h,1)}}function h(){for(var e=0;e<Y;e+=2){var t=ne[e],o=ne[e+1];t(o),ne[e]=void 0,ne[e+1]=void 0}Y=0}function f(){try{var t=e,o=t("vertx");return V=o.runOnLoop||o.runOnContext,u()}catch(r){return d()}}function y(e,t){var o=this,r=new this.constructor(v);void 0===r[ae]&&N(r);var n=o._state;if(n){var s=arguments[n-1];z(function(){U(n,r,s,o._result)})}else q(o,r,e,t);return r}function m(e){var t=this;if(e&&"object"==typeof e&&e.constructor===t)return e;var o=new t(v);return S(o,e),o}function v(){}function g(){return new TypeError("You cannot resolve a promise with itself")}function b(){return new TypeError("A promises callback cannot return that same promise.")}function w(e){try{return e.then}catch(t){return pe.error=t,pe}}function _(e,t,o,r){try{e.call(t,o,r)}catch(n){return n}}function x(e,t,o){z(function(e){var r=!1,n=_(o,t,function(o){r||(r=!0,t!==o?S(e,o):R(e,o))},function(t){r||(r=!0,O(e,t))},"Settle: "+(e._label||" unknown promise"));!r&&n&&(r=!0,O(e,n))},e)}function T(e,t){t._state===ue?R(e,t._result):t._state===le?O(e,t._result):q(t,void 0,function(t){S(e,t)},function(t){O(e,t)})}function j(e,t,o){t.constructor===e.constructor&&o===se&&constructor.resolve===ie?T(e,t):o===pe?O(e,pe.error):void 0===o?R(e,t):s(o)?x(e,t,o):R(e,t)}function S(e,t){e===t?O(e,g()):n(t)?j(e,t,w(t)):R(e,t)}function k(e){e._onerror&&e._onerror(e._result),P(e)}function R(e,t){e._state===ce&&(e._result=t,e._state=ue,0!==e._subscribers.length&&z(P,e))}function O(e,t){e._state===ce&&(e._state=le,e._result=t,z(k,e))}function q(e,t,o,r){var n=e._subscribers,s=n.length;e._onerror=null,n[s]=t,n[s+ue]=o,n[s+le]=r,0===s&&e._state&&z(P,e)}function P(e){var t=e._subscribers,o=e._state;if(0!==t.length){for(var r,n,s=e._result,i=0;i<t.length;i+=3)r=t[i],n=t[i+o],r?U(o,r,n,s):n(s);e._subscribers.length=0}}function E(){this.error=null}function I(e,t){try{return e(t)}catch(o){return de.error=o,de}}function U(e,t,o,r){var n,i,a,c,u=s(o);if(u){if(n=I(o,r),n===de?(c=!0,i=n.error,n=null):a=!0,t===n)return void O(t,b())}else n=r,a=!0;t._state!==ce||(u&&a?S(t,n):c?O(t,i):e===ue?R(t,n):e===le&&O(t,n))}function A(e,t){try{t(function(t){S(e,t)},function(t){O(e,t)})}catch(o){O(e,o)}}function C(){return he++}function N(e){e[ae]=he++,e._state=void 0,e._result=void 0,e._subscribers=[]}function L(e){return new ge(this,e).promise}function D(e){var t=this;return new t($(e)?function(o,r){for(var n=e.length,s=0;s<n;s++)t.resolve(e[s]).then(o,r)}:function(e,t){t(new TypeError("You must pass an array to race."))})}function H(e){var t=this,o=new t(v);return O(o,e),o}function J(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function M(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function K(e){this[ae]=C(),this._result=this._state=void 0,this._subscribers=[],v!==e&&("function"!=typeof e&&J(),this instanceof K?A(this,e):M())}function Q(e,t){this._instanceConstructor=e,this.promise=new e(v),this.promise[ae]||N(this.promise),$(t)?(this._input=t,this.length=t.length,this._remaining=t.length,this._result=new Array(this.length),0===this.length?R(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&R(this.promise,this._result))):O(this.promise,B())}function B(){return new Error("Array Methods must be provided an Array")}function F(){var e;if("undefined"!=typeof r)e=r;else if("undefined"!=typeof self)e=self;else try{e=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var o=e.Promise;o&&"[object Promise]"===Object.prototype.toString.call(o.resolve())&&!o.cast||(e.Promise=ve)}var G;G=Array.isArray?Array.isArray:function(e){return"[object Array]"===Object.prototype.toString.call(e)};var V,X,W,$=G,Y=0,z=function(e,t){ne[Y]=e,ne[Y+1]=t,Y+=2,2===Y&&(X?X(h):W())},Z="undefined"!=typeof window?window:void 0,ee=Z||{},te=ee.MutationObserver||ee.WebKitMutationObserver,oe="undefined"==typeof self&&"undefined"!=typeof o&&"[object process]"==={}.toString.call(o),re="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,ne=new Array(1e3);W=oe?c():te?l():re?p():void 0===Z&&"function"==typeof e?f():d();var se=y,ie=m,ae=Math.random().toString(36).substring(16),ce=void 0,ue=1,le=2,pe=new E,de=new E,he=0,fe=L,ye=D,me=H,ve=K;K.all=fe,K.race=ye,K.resolve=ie,K.reject=me,K._setScheduler=i,K._setAsap=a,K._asap=z,K.prototype={constructor:K,then:se,"catch":function(e){return this.then(null,e)}};var ge=Q;Q.prototype._enumerate=function(){for(var e=this.length,t=this._input,o=0;this._state===ce&&o<e;o++)this._eachEntry(t[o],o)},Q.prototype._eachEntry=function(e,t){var o=this._instanceConstructor,r=o.resolve;if(r===ie){var n=w(e);if(n===se&&e._state!==ce)this._settledAt(e._state,t,e._result);else if("function"!=typeof n)this._remaining--,this._result[t]=e;else if(o===ve){var s=new o(v);j(s,e,n),this._willSettleAt(s,t)}else this._willSettleAt(new o(function(t){t(e)}),t)}else this._willSettleAt(r(e),t)},Q.prototype._settledAt=function(e,t,o){var r=this.promise;r._state===ce&&(this._remaining--,e===le?O(r,o):this._result[t]=o),0===this._remaining&&R(r,this._result)},Q.prototype._willSettleAt=function(e,t){var o=this;q(e,void 0,function(e){o._settledAt(ue,t,e)},function(e){o._settledAt(le,t,e)})};var be=F,we={Promise:ve,polyfill:be}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return we}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!=typeof t&&t.exports?t.exports=we:"undefined"!=typeof this&&(this.ES6Promise=we),be()}).call(this)}).call(this,e(2),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],6:[function(e,t,o){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(e){return"function"==typeof e}function s(e){return"number"==typeof e}function i(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!s(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,o,r,s,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||i(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var l=new Error('Uncaught, unspecified "error" event. ('+t+")");throw l.context=t,l}if(o=this._events[e],a(o))return!1;if(n(o))switch(arguments.length){case 1:o.call(this);break;case 2:o.call(this,arguments[1]);break;case 3:o.call(this,arguments[1],arguments[2]);break;default:s=Array.prototype.slice.call(arguments,1),o.apply(this,s)}else if(i(o))for(s=Array.prototype.slice.call(arguments,1),u=o.slice(),r=u.length,c=0;c<r;c++)u[c].apply(this,s);return!0},r.prototype.addListener=function(e,t){var o;if(!n(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,n(t.listener)?t.listener:t),this._events[e]?i(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,i(this._events[e])&&!this._events[e].warned&&(o=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,o&&o>0&&this._events[e].length>o&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function o(){this.removeListener(e,o),r||(r=!0,t.apply(this,arguments))}if(!n(t))throw TypeError("listener must be a function");var r=!1;return o.listener=t,this.on(e,o),this},r.prototype.removeListener=function(e,t){var o,r,s,a;if(!n(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(o=this._events[e],s=o.length,r=-1,o===t||n(o.listener)&&o.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(i(o)){for(a=s;a-- >0;)if(o[a]===t||o[a].listener&&o[a].listener===t){r=a;break}if(r<0)return this;1===o.length?(o.length=0,delete this._events[e]):o.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,o;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(o=this._events[e],n(o))this.removeListener(e,o);else if(o)for(;o.length;)this.removeListener(e,o[o.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?n(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(n(t))return 1;if(t)return t.length}return 0},r.listenerCount=function(e,t){return e.listenerCount(t)}},{}],7:[function(e,t,o){var r=Object.prototype.hasOwnProperty,n=Object.prototype.toString;t.exports=function(e,t,o){if("[object Function]"!==n.call(t))throw new TypeError("iterator must be a function");var s=e.length;if(s===+s)for(var i=0;i<s;i++)t.call(o,e[i],i,e);else for(var a in e)r.call(e,a)&&t.call(o,e[a],a,e)}},{}],8:[function(e,t,o){(function(e){"undefined"!=typeof window?t.exports=window:"undefined"!=typeof e?t.exports=e:"undefined"!=typeof self?t.exports=self:t.exports={}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,o){"function"==typeof Object.create?t.exports=function(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(e,t){e.super_=t;var o=function(){};o.prototype=t.prototype,e.prototype=new o,e.prototype.constructor=e}},{}],10:[function(e,t,o){var r={}.toString;t.exports=Array.isArray||function(e){return"[object Array]"==r.call(e)}},{}],11:[function(e,t,o){"use strict";function r(e,t){if(e.map)return e.map(t);for(var o=[],r=0;r<e.length;r++)o.push(t(e[r],r));return o}var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};t.exports=function(e,t,o,a){return t=t||"&",o=o||"=",null===e&&(e=void 0),"object"==typeof e?r(i(e),function(i){var a=encodeURIComponent(n(i))+o;return s(e[i])?r(e[i],function(e){return a+encodeURIComponent(n(e))}).join(t):a+encodeURIComponent(n(e[i]))}).join(t):a?encodeURIComponent(n(a))+o+encodeURIComponent(n(e)):""};var s=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i=Object.keys||function(e){var t=[];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.push(o);return t}},{}],12:[function(e,t,o){function r(){c.apply(this,arguments)}function n(){var e="Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";throw new l.AlgoliaSearchError(e)}t.exports=r;var s=e(14),i=e(25),a=e(26),c=e(13),u=e(9),l=e(27);u(r,c),r.prototype.deleteIndex=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(e),hostType:"write",callback:t})},r.prototype.moveIndex=function(e,t,o){var r={operation:"move",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:r,hostType:"write",callback:o})},r.prototype.copyIndex=function(e,t,o){var r={operation:"copy",destination:t};return this._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(e)+"/operation",body:r,hostType:"write",callback:o})},r.prototype.getLogs=function(t,o,r){var n=e(24),s={};return"object"==typeof t?(s=n(t),r=o):0===arguments.length||"function"==typeof t?r=t:1===arguments.length||"function"==typeof o?(r=o,s.offset=t):(s.offset=t,s.length=o),void 0===s.offset&&(s.offset=0),void 0===s.length&&(s.length=10),this._jsonRequest({method:"GET",url:"/1/logs?"+this._getSearchParams(s,""),hostType:"read",callback:r})},r.prototype.listIndexes=function(e,t){var o="";return void 0===e||"function"==typeof e?t=e:o="?page="+e,this._jsonRequest({method:"GET",url:"/1/indexes"+o,hostType:"read",callback:t})},r.prototype.initIndex=function(e){return new s(this,e)},r.prototype.listUserKeys=function(e){return this._jsonRequest({method:"GET",url:"/1/keys",hostType:"read",callback:e})},r.prototype.getUserKeyACL=function(e,t){return this._jsonRequest({method:"GET",url:"/1/keys/"+e,hostType:"read",callback:t})},r.prototype.deleteUserKey=function(e,t){return this._jsonRequest({method:"DELETE",url:"/1/keys/"+e,hostType:"write",callback:t})},r.prototype.addUserKey=function(t,o,r){var n=e(10),s="Usage: client.addUserKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(s);1!==arguments.length&&"function"!=typeof o||(r=o,o=null);var i={acl:t};return o&&(i.validity=o.validity,i.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,i.maxHitsPerQuery=o.maxHitsPerQuery,i.indexes=o.indexes,i.description=o.description,o.queryParameters&&(i.queryParameters=this._getSearchParams(o.queryParameters,"")),i.referers=o.referers),this._jsonRequest({method:"POST",url:"/1/keys",body:i,hostType:"write",callback:r})},r.prototype.addUserKeyWithValidity=i(function(e,t,o){return this.addUserKey(e,t,o)},a("client.addUserKeyWithValidity()","client.addUserKey()")),r.prototype.updateUserKey=function(t,o,r,n){var s=e(10),i="Usage: client.updateUserKey(key, arrayOfAcls[, params, callback])";if(!s(o))throw new Error(i);2!==arguments.length&&"function"!=typeof r||(n=r,r=null);var a={acl:o};return r&&(a.validity=r.validity,a.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,a.maxHitsPerQuery=r.maxHitsPerQuery,a.indexes=r.indexes,a.description=r.description,r.queryParameters&&(a.queryParameters=this._getSearchParams(r.queryParameters,"")),a.referers=r.referers),this._jsonRequest({method:"PUT",url:"/1/keys/"+t,body:a,hostType:"write",callback:n})},r.prototype.startQueriesBatch=i(function(){this._batch=[]},a("client.startQueriesBatch()","client.search()")),r.prototype.addQueryInBatch=i(function(e,t,o){this._batch.push({indexName:e,query:t,params:o})},a("client.addQueryInBatch()","client.search()")),r.prototype.sendQueriesBatch=i(function(e){return this.search(this._batch,e)},a("client.sendQueriesBatch()","client.search()")),r.prototype.batch=function(t,o){var r=e(10),n="Usage: client.batch(operations[, callback])";if(!r(t))throw new Error(n);return this._jsonRequest({method:"POST",url:"/1/indexes/*/batch",body:{requests:t},hostType:"write",callback:o})},r.prototype.destroy=n,r.prototype.enableRateLimitForward=n,r.prototype.disableRateLimitForward=n,r.prototype.useSecuredAPIKey=n,r.prototype.disableSecuredAPIKey=n,r.prototype.generateSecuredApiKey=n},{10:10,13:13,14:14,24:24,25:25,26:26,27:27,9:9}],13:[function(e,t,o){function r(t,o,r){var s=e(3)("algoliasearch"),a=e(24),u=e(10),l=e(29),p="Usage: algoliasearch(applicationID, apiKey, opts)";if(r._allowEmptyCredentials!==!0&&!t)throw new c.AlgoliaSearchError("Please provide an application ID. "+p);if(r._allowEmptyCredentials!==!0&&!o)throw new c.AlgoliaSearchError("Please provide an API key. "+p);this.applicationID=t,this.apiKey=o;var d=i([this.applicationID+"-1.algolianet.com",this.applicationID+"-2.algolianet.com",this.applicationID+"-3.algolianet.com"]);this.hosts={read:[],write:[]},this.hostIndex={read:0,write:0},r=r||{};var h=r.protocol||"https:",f=void 0===r.timeout?2e3:r.timeout;if(/:$/.test(h)||(h+=":"),"http:"!==r.protocol&&"https:"!==r.protocol)throw new c.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+r.protocol+"`)");r.hosts?u(r.hosts)?(this.hosts.read=a(r.hosts),this.hosts.write=a(r.hosts)):(this.hosts.read=a(r.hosts.read),this.hosts.write=a(r.hosts.write)):(this.hosts.read=[this.applicationID+"-dsn.algolia.net"].concat(d),this.hosts.write=[this.applicationID+".algolia.net"].concat(d)),this.hosts.read=l(this.hosts.read,n(h)),this.hosts.write=l(this.hosts.write,n(h)),this.requestTimeout=f,this.extraHeaders=[],this.cache=r._cache||{},this._ua=r._ua,this._useCache=!(void 0!==r._useCache&&!r._cache)||r._useCache,this._useFallback=void 0===r.useFallback||r.useFallback,this._setTimeout=r._setTimeout,s("init done, %j",this)}function n(e){return function(t){return e+"//"+t.toLowerCase()}}function s(e){if(void 0===Array.prototype.toJSON)return JSON.stringify(e);var t=Array.prototype.toJSON;delete Array.prototype.toJSON;var o=JSON.stringify(e);return Array.prototype.toJSON=t,o}function i(e){for(var t,o,r=e.length;0!==r;)o=Math.floor(Math.random()*r),r-=1,t=e[r],e[r]=e[o],e[o]=t;return e}function a(e){var t={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r;r="x-algolia-api-key"===o||"x-algolia-application-id"===o?"**hidden for security purposes**":e[o],t[o]=r}return t}t.exports=r;var c=e(27),u=e(28),l=e(16),p=500;r.prototype.initIndex=function(e){return new l(this,e)},r.prototype.setExtraHeader=function(e,t){this.extraHeaders.push({name:e.toLowerCase(),value:t})},r.prototype.addAlgoliaAgent=function(e){this._ua+=";"+e},r.prototype._jsonRequest=function(t){function o(e,u){function p(e){var t=e&&e.body&&e.body.message&&e.body.status||e.statusCode||e&&e.body&&200;i("received response: statusCode: %s, computed statusCode: %d, headers: %j",e.statusCode,t,e.headers);var o=2===Math.floor(t/100),s=new Date;if(m.push({currentHost:x,headers:a(n),content:r||null,contentLength:void 0!==r?r.length:null,method:u.method,timeout:u.timeout,url:u.url,startTime:_,endTime:s,duration:s-_,statusCode:t}),o)return d._useCache&&l&&(l[w]=e.responseText),e.body;var p=4!==Math.floor(t/100);if(p)return h+=1,g();i("unrecoverable error");var f=new c.AlgoliaSearchError(e.body&&e.body.message,{debugData:m,statusCode:t});return d._promise.reject(f)}function v(e){i("error: %s, stack: %s",e.message,e.stack);var o=new Date;return m.push({currentHost:x,headers:a(n),content:r||null,contentLength:void 0!==r?r.length:null,method:u.method,timeout:u.timeout,url:u.url,startTime:_,endTime:o,duration:o-_}),e instanceof c.AlgoliaSearchError||(e=new c.Unknown(e&&e.message,e)),h+=1,e instanceof c.Unknown||e instanceof c.UnparsableJSON||h>=d.hosts[t.hostType].length&&(f||!y)?(e.debugData=m,d._promise.reject(e)):e instanceof c.RequestTimeout?b():g()}function g(){return i("retrying request"),d.hostIndex[t.hostType]=(d.hostIndex[t.hostType]+1)%d.hosts[t.hostType].length,o(e,u)}function b(){return i("retrying request with higher timeout"),d.hostIndex[t.hostType]=(d.hostIndex[t.hostType]+1)%d.hosts[t.hostType].length,u.timeout=d.requestTimeout*(h+1),o(e,u)}var w,_=new Date;if(d._useCache&&(w=t.url),d._useCache&&r&&(w+="_body_"+u.body),d._useCache&&l&&void 0!==l[w])return i("serving response from cache"),d._promise.resolve(JSON.parse(l[w]));if(h>=d.hosts[t.hostType].length)return!y||f?(i("could not get any response"),d._promise.reject(new c.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+d.applicationID,{debugData:m}))):(i("switching to fallback"),h=0,u.method=t.fallback.method,u.url=t.fallback.url,u.jsonBody=t.fallback.body,u.jsonBody&&(u.body=s(u.jsonBody)),n=d._computeRequestHeaders(),u.timeout=d.requestTimeout*(h+1),d.hostIndex[t.hostType]=0,f=!0,o(d._request.fallback,u));var x=d.hosts[t.hostType][d.hostIndex[t.hostType]],T=x+u.url,j={body:u.body,jsonBody:u.jsonBody,method:u.method,headers:n,timeout:u.timeout,debug:i};return i("method: %s, url: %s, headers: %j, timeout: %d",j.method,T,j.headers,j.timeout),e===d._request.fallback&&i("using fallback"),e.call(d,T,j).then(p,v)}var r,n,i=e(3)("algoliasearch:"+t.url),l=t.cache,d=this,h=0,f=!1,y=d._useFallback&&d._request.fallback&&t.fallback;this.apiKey.length>p&&void 0!==t.body&&void 0!==t.body.params?(t.body.apiKey=this.apiKey,n=this._computeRequestHeaders(!1)):n=this._computeRequestHeaders(),void 0!==t.body&&(r=s(t.body)),i("request start");var m=[],v=o(d._request,{url:t.url,method:t.method,body:r,jsonBody:t.body,timeout:d.requestTimeout*(h+1)});return t.callback?void v.then(function(e){u(function(){t.callback(null,e)},d._setTimeout||setTimeout)},function(e){u(function(){t.callback(e)},d._setTimeout||setTimeout)}):v},r.prototype._getSearchParams=function(e,t){if(void 0===e||null===e)return t;for(var o in e)null!==o&&void 0!==e[o]&&e.hasOwnProperty(o)&&(t+=""===t?"":"&",t+=o+"="+encodeURIComponent("[object Array]"===Object.prototype.toString.call(e[o])?s(e[o]):e[o]));return t},r.prototype._computeRequestHeaders=function(t){var o=e(7),r={"x-algolia-agent":this._ua,"x-algolia-application-id":this.applicationID};return t!==!1&&(r["x-algolia-api-key"]=this.apiKey),this.userToken&&(r["x-algolia-usertoken"]=this.userToken),this.securityTags&&(r["x-algolia-tagfilters"]=this.securityTags),this.extraHeaders&&o(this.extraHeaders,function(e){r[e.name]=e.value}),r},r.prototype.search=function(t,o,r){var n=e(10),s=e(29),i="Usage: client.search(arrayOfQueries[, callback])";if(!n(t))throw new Error(i);"function"==typeof o?(r=o,o={}):void 0===o&&(o={});var a=this,c={requests:s(t,function(e){var t="";return void 0!==e.query&&(t+="query="+encodeURIComponent(e.query)),{indexName:e.indexName,params:a._getSearchParams(e.params,t)}})},u=s(c.requests,function(e,t){return t+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(e.indexName)+"?"+e.params)}).join("&"),l="/1/indexes/*/queries";return void 0!==o.strategy&&(l+="?strategy="+o.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:l,body:c,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:u}},callback:r})},r.prototype.setSecurityTags=function(e){if("[object Array]"===Object.prototype.toString.call(e)){for(var t=[],o=0;o<e.length;++o)if("[object Array]"===Object.prototype.toString.call(e[o])){for(var r=[],n=0;n<e[o].length;++n)r.push(e[o][n]);t.push("("+r.join(",")+")")}else t.push(e[o]);e=t.join(",")}this.securityTags=e},r.prototype.setUserToken=function(e){this.userToken=e},r.prototype.clearCache=function(){this.cache={}},r.prototype.setRequestTimeout=function(e){e&&(this.requestTimeout=parseInt(e,10))}},{10:10,16:16,24:24,27:27,28:28,29:29,3:3,7:7}],14:[function(e,t,o){function r(){s.apply(this,arguments)}var n=e(9),s=e(16),i=e(25),a=e(26),c=e(28),u=e(27);t.exports=r,n(r,s),r.prototype.addObject=function(e,t,o){var r=this;return 1!==arguments.length&&"function"!=typeof t||(o=t,
	t=void 0),this.as._jsonRequest({method:void 0!==t?"PUT":"POST",url:"/1/indexes/"+encodeURIComponent(r.indexName)+(void 0!==t?"/"+encodeURIComponent(t):""),body:e,hostType:"write",callback:o})},r.prototype.addObjects=function(t,o){var r=e(10),n="Usage: index.addObjects(arrayOfObjects[, callback])";if(!r(t))throw new Error(n);for(var s=this,i={requests:[]},a=0;a<t.length;++a){var c={action:"addObject",body:t[a]};i.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:i,hostType:"write",callback:o})},r.prototype.getObject=function(e,t,o){var r=this;1!==arguments.length&&"function"!=typeof t||(o=t,t=void 0);var n="";if(void 0!==t){n="?attributes=";for(var s=0;s<t.length;++s)0!==s&&(n+=","),n+=t[s]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e)+n,hostType:"read",callback:o})},r.prototype.getObjects=function(t,o,r){var n=e(10),s=e(29),i="Usage: index.getObjects(arrayOfObjectIDs[, callback])";if(!n(t))throw new Error(i);var a=this;1!==arguments.length&&"function"!=typeof o||(r=o,o=void 0);var c={requests:s(t,function(e){var t={indexName:a.indexName,objectID:e};return o&&(t.attributesToRetrieve=o.join(",")),t})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:c,callback:r})},r.prototype.partialUpdateObject=function(e,t,o){1!==arguments.length&&"function"!=typeof t||(o=t,t=void 0);var r=this,n="/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e.objectID)+"/partial";return t===!1&&(n+="?createIfNotExists=false"),this.as._jsonRequest({method:"POST",url:n,body:e,hostType:"write",callback:o})},r.prototype.partialUpdateObjects=function(t,o){var r=e(10),n="Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";if(!r(t))throw new Error(n);for(var s=this,i={requests:[]},a=0;a<t.length;++a){var c={action:"partialUpdateObject",objectID:t[a].objectID,body:t[a]};i.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:i,hostType:"write",callback:o})},r.prototype.saveObject=function(e,t){var o=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/"+encodeURIComponent(e.objectID),body:e,hostType:"write",callback:t})},r.prototype.saveObjects=function(t,o){var r=e(10),n="Usage: index.saveObjects(arrayOfObjects[, callback])";if(!r(t))throw new Error(n);for(var s=this,i={requests:[]},a=0;a<t.length;++a){var c={action:"updateObject",objectID:t[a].objectID,body:t[a]};i.requests.push(c)}return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(s.indexName)+"/batch",body:i,hostType:"write",callback:o})},r.prototype.deleteObject=function(e,t){if("function"==typeof e||"string"!=typeof e&&"number"!=typeof e){var o=new u.AlgoliaSearchError("Cannot delete an object without an objectID");return t=e,"function"==typeof t?t(o):this.as._promise.reject(o)}var r=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(r.indexName)+"/"+encodeURIComponent(e),hostType:"write",callback:t})},r.prototype.deleteObjects=function(t,o){var r=e(10),n=e(29),s="Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";if(!r(t))throw new Error(s);var i=this,a={requests:n(t,function(e){return{action:"deleteObject",objectID:e,body:{objectID:e}}})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(i.indexName)+"/batch",body:a,hostType:"write",callback:o})},r.prototype.deleteByQuery=function(t,o,r){function n(e){if(0===e.nbHits)return e;var t=p(e.hits,function(e){return e.objectID});return d.deleteObjects(t).then(s).then(i)}function s(e){return d.waitTask(e.taskID)}function i(){return d.deleteByQuery(t,o)}function a(){c(function(){r(null)},h._setTimeout||setTimeout)}function u(e){c(function(){r(e)},h._setTimeout||setTimeout)}var l=e(24),p=e(29),d=this,h=d.as;1===arguments.length||"function"==typeof o?(r=o,o={}):o=l(o),o.attributesToRetrieve="objectID",o.hitsPerPage=1e3,o.distinct=!1,this.clearCache();var f=this.search(t,o).then(n);return r?void f.then(a,u):f},r.prototype.browseAll=function(t,o){function r(e){if(!a._stopped){var t;t=void 0!==e?"cursor="+encodeURIComponent(e):l,c._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/browse?"+t,hostType:"read",callback:n})}}function n(e,t){if(!a._stopped)return e?void a._error(e):(a._result(t),void 0===t.cursor?void a._end():void r(t.cursor))}"object"==typeof t&&(o=t,t=void 0);var s=e(30),i=e(15),a=new i,c=this.as,u=this,l=c._getSearchParams(s({},o||{},{query:t}),"");return r(),a},r.prototype.ttAdapter=function(e){var t=this;return function(o,r,n){var s;s="function"==typeof n?n:r,t.search(o,e,function(e,t){return e?void s(e):void s(t.hits)})}},r.prototype.waitTask=function(e,t){function o(){return l._jsonRequest({method:"GET",hostType:"read",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/task/"+e}).then(function(e){a++;var t=s*a*a;return t>i&&(t=i),"published"!==e.status?l._promise.delay(t).then(o):e})}function r(e){c(function(){t(null,e)},l._setTimeout||setTimeout)}function n(e){c(function(){t(e)},l._setTimeout||setTimeout)}var s=100,i=5e3,a=0,u=this,l=u.as,p=o();return t?void p.then(r,n):p},r.prototype.clearIndex=function(e){var t=this;return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/clear",hostType:"write",callback:e})},r.prototype.getSettings=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/settings?getVersion=2",hostType:"read",callback:e})},r.prototype.searchSynonyms=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/search",body:e,hostType:"read",callback:t})},r.prototype.saveSynonym=function(e,t,o){return"function"==typeof t?(o=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e.objectID)+"?forwardToSlaves="+(t.forwardToSlaves?"true":"false"),body:e,hostType:"write",callback:o})},r.prototype.getSynonym=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e),hostType:"read",callback:t})},r.prototype.deleteSynonym=function(e,t,o){return"function"==typeof t?(o=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/"+encodeURIComponent(e)+"?forwardToSlaves="+(t.forwardToSlaves?"true":"false"),hostType:"write",callback:o})},r.prototype.clearSynonyms=function(e,t){return"function"==typeof e?(t=e,e={}):void 0===e&&(e={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/clear?forwardToSlaves="+(e.forwardToSlaves?"true":"false"),hostType:"write",callback:t})},r.prototype.batchSynonyms=function(e,t,o){return"function"==typeof t?(o=t,t={}):void 0===t&&(t={}),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/synonyms/batch?forwardToSlaves="+(t.forwardToSlaves?"true":"false")+"&replaceExistingSynonyms="+(t.replaceExistingSynonyms?"true":"false"),hostType:"write",body:e,callback:o})},r.prototype.setSettings=function(e,t,o){1!==arguments.length&&"function"!=typeof t||(o=t,t={});var r=t.forwardToSlaves||!1,n=this;return this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(n.indexName)+"/settings?forwardToSlaves="+(r?"true":"false"),hostType:"write",body:e,callback:o})},r.prototype.listUserKeys=function(e){var t=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(t.indexName)+"/keys",hostType:"read",callback:e})},r.prototype.getUserKeyACL=function(e,t){var o=this;return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/keys/"+e,hostType:"read",callback:t})},r.prototype.deleteUserKey=function(e,t){var o=this;return this.as._jsonRequest({method:"DELETE",url:"/1/indexes/"+encodeURIComponent(o.indexName)+"/keys/"+e,hostType:"write",callback:t})},r.prototype.addUserKey=function(t,o,r){var n=e(10),s="Usage: index.addUserKey(arrayOfAcls[, params, callback])";if(!n(t))throw new Error(s);1!==arguments.length&&"function"!=typeof o||(r=o,o=null);var i={acl:t};return o&&(i.validity=o.validity,i.maxQueriesPerIPPerHour=o.maxQueriesPerIPPerHour,i.maxHitsPerQuery=o.maxHitsPerQuery,i.description=o.description,o.queryParameters&&(i.queryParameters=this.as._getSearchParams(o.queryParameters,"")),i.referers=o.referers),this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys",body:i,hostType:"write",callback:r})},r.prototype.addUserKeyWithValidity=i(function(e,t,o){return this.addUserKey(e,t,o)},a("index.addUserKeyWithValidity()","index.addUserKey()")),r.prototype.updateUserKey=function(t,o,r,n){var s=e(10),i="Usage: index.updateUserKey(key, arrayOfAcls[, params, callback])";if(!s(o))throw new Error(i);2!==arguments.length&&"function"!=typeof r||(n=r,r=null);var a={acl:o};return r&&(a.validity=r.validity,a.maxQueriesPerIPPerHour=r.maxQueriesPerIPPerHour,a.maxHitsPerQuery=r.maxHitsPerQuery,a.description=r.description,r.queryParameters&&(a.queryParameters=this.as._getSearchParams(r.queryParameters,"")),a.referers=r.referers),this.as._jsonRequest({method:"PUT",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/keys/"+t,body:a,hostType:"write",callback:n})}},{10:10,15:15,16:16,24:24,25:25,26:26,27:27,28:28,29:29,30:30,9:9}],15:[function(e,t,o){"use strict";function r(){}t.exports=r;var n=e(9),s=e(6).EventEmitter;n(r,s),r.prototype.stop=function(){this._stopped=!0,this._clean()},r.prototype._end=function(){this.emit("end"),this._clean()},r.prototype._error=function(e){this.emit("error",e),this._clean()},r.prototype._result=function(e){this.emit("result",e)},r.prototype._clean=function(){this.removeAllListeners("stop"),this.removeAllListeners("end"),this.removeAllListeners("error"),this.removeAllListeners("result")}},{6:6,9:9}],16:[function(e,t,o){function r(e,t){this.indexName=t,this.as=e,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}var n=e(23);t.exports=r,r.prototype.clearCache=function(){this.cache={}},r.prototype.search=n("query"),r.prototype.similarSearch=n("similarQuery"),r.prototype.browse=function(t,o,r){var n,s,i=e(30),a=this;0===arguments.length||1===arguments.length&&"function"==typeof arguments[0]?(n=0,r=arguments[0],t=void 0):"number"==typeof arguments[0]?(n=arguments[0],"number"==typeof arguments[1]?s=arguments[1]:"function"==typeof arguments[1]&&(r=arguments[1],s=void 0),t=void 0,o=void 0):"object"==typeof arguments[0]?("function"==typeof arguments[1]&&(r=arguments[1]),o=arguments[0],t=void 0):"string"==typeof arguments[0]&&"function"==typeof arguments[1]&&(r=arguments[1],o=void 0),o=i({},o||{},{page:n,hitsPerPage:s,query:t});var c=this.as._getSearchParams(o,"");return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(a.indexName)+"/browse?"+c,hostType:"read",callback:r})},r.prototype.browseFrom=function(e,t){return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse?cursor="+encodeURIComponent(e),hostType:"read",callback:t})},r.prototype._search=function(e,t,o){return this.as._jsonRequest({cache:this.cache,method:"POST",url:t||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:e},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:e}},callback:o})},r.prototype.as=null,r.prototype.indexName=null,r.prototype.typeAheadArgs=null,r.prototype.typeAheadValueOption=null},{23:23,30:30}],17:[function(e,t,o){"use strict";var r=e(9),n=e(7),s=e(12),i=e(27),a=e(21),c=e(22),u=e(31);window.algoliasearch=e(18),window.angular.module("algoliasearch",[]).service("algolia",["$http","$q","$timeout",function(t,o,l){function p(t,o,r){var n=e(24),s=e(20);return r=n(r||{}),void 0===r.protocol&&(r.protocol=s()),r._ua=r._ua||p.ua,new d(t,o,r)}function d(){s.apply(this,arguments)}return p.version=e(32),p.ua="Algolia for AngularJS "+p.version,p.initPlaces=u(p),window.__algolia={debug:e(3),algoliasearch:p},r(d,s),d.prototype._request=function(e,r){function s(e){h({statusCode:e.status,headers:e.headers,body:JSON.parse(e.data),responseText:e.data})}function c(e){return e}function u(e){if(!p)return 0===e.status?void f(new i.Network({more:e})):void h({body:JSON.parse(e.data),statusCode:e.status})}var p,d=o.defer(),h=d.resolve,f=d.reject,y=r.body;e=a(e,r.headers);var m=o.defer(),v=m.promise;l(function(){p=!0,m.resolve("test"),f(new i.RequestTimeout)},r.timeout);var g={};return n(t.defaults.headers.common,function(e,t){g[t]=void 0}),g.accept="application/json",y&&("POST"===r.method?g["content-type"]="application/x-www-form-urlencoded":g["content-type"]="application/json"),t({url:e,method:r.method,data:y,cache:!1,timeout:v,headers:g,transformResponse:c,withCredentials:!1}).then(s,u),d.promise},d.prototype._request.fallback=function(e,t){e=a(e,t.headers);var r=o.defer(),n=r.resolve,s=r.reject;return c(e,t,function(e,t){return e?void s(e):void n(t)}),r.promise},d.prototype._promise={reject:function(e){return o.reject(e)},resolve:function(e){return o.when(e)},delay:function(e){var t=o.defer(),r=t.resolve;return l(r,e),t.promise}},{Client:function(e,t,o){return p(e,t,o)},ua:p.ua,version:p.version}}])},{12:12,18:18,20:20,21:21,22:22,24:24,27:27,3:3,31:31,32:32,7:7,9:9}],18:[function(e,t,o){"use strict";var r=e(12),n=e(19);t.exports=n(r)},{12:12,19:19}],19:[function(e,t,o){"use strict";var r=e(8),n=r.Promise||e(5).Promise;t.exports=function(t,o){function s(t,o,r){var n=e(24),a=e(20);return r=n(r||{}),void 0===r.protocol&&(r.protocol=a()),r._ua=r._ua||s.ua,new i(t,o,r)}function i(){t.apply(this,arguments)}var a=e(9),c=e(27),u=e(21),l=e(22),p=e(31);o=o||"",s.version=e(32),s.ua="Algolia for vanilla JavaScript "+o+s.version,s.initPlaces=p(s),r.__algolia={debug:e(3),algoliasearch:s};var d={hasXMLHttpRequest:"XMLHttpRequest"in r,hasXDomainRequest:"XDomainRequest"in r};return d.hasXMLHttpRequest&&(d.cors="withCredentials"in new XMLHttpRequest,d.timeout="timeout"in new XMLHttpRequest),a(i,t),i.prototype._request=function(e,t){return new n(function(o,r){function n(){if(!l){d.timeout||clearTimeout(a);var e;try{e={body:JSON.parse(h.responseText),responseText:h.responseText,statusCode:h.status,headers:h.getAllResponseHeaders&&h.getAllResponseHeaders()||{}}}catch(t){e=new c.UnparsableJSON({more:h.responseText})}e instanceof c.UnparsableJSON?r(e):o(e)}}function s(e){l||(d.timeout||clearTimeout(a),r(new c.Network({more:e})))}function i(){d.timeout||(l=!0,h.abort()),r(new c.RequestTimeout)}if(!d.cors&&!d.hasXDomainRequest)return void r(new c.Network("CORS not supported"));e=u(e,t.headers);var a,l,p=t.body,h=d.cors?new XMLHttpRequest:new XDomainRequest;h instanceof XMLHttpRequest?h.open(t.method,e,!0):h.open(t.method,e),d.cors&&(p&&("POST"===t.method?h.setRequestHeader("content-type","application/x-www-form-urlencoded"):h.setRequestHeader("content-type","application/json")),h.setRequestHeader("accept","application/json")),h.onprogress=function(){},h.onload=n,h.onerror=s,d.timeout?(h.timeout=t.timeout,h.ontimeout=i):a=setTimeout(i,t.timeout),h.send(p)})},i.prototype._request.fallback=function(e,t){return e=u(e,t.headers),new n(function(o,r){l(e,t,function(e,t){return e?void r(e):void o(t)})})},i.prototype._promise={reject:function(e){return n.reject(e)},resolve:function(e){return n.resolve(e)},delay:function(e){return new n(function(t){setTimeout(t,e)})}},s}},{20:20,21:21,22:22,24:24,27:27,3:3,31:31,32:32,5:5,8:8,9:9}],20:[function(e,t,o){"use strict";function r(){var e=window.document.location.protocol;return"http:"!==e&&"https:"!==e&&(e="http:"),e}t.exports=r},{}],21:[function(e,t,o){"use strict";function r(e,t){return e+=/\?/.test(e)?"&":"?",e+n(t)}t.exports=r;var n=e(11)},{11:11}],22:[function(e,t,o){"use strict";function r(e,t,o){function r(){t.debug("JSONP: success"),m||d||(m=!0,p||(t.debug("JSONP: Fail. Script loaded but did not call the callback"),a(),o(new n.JSONPScriptFail)))}function i(){"loaded"!==this.readyState&&"complete"!==this.readyState||r()}function a(){clearTimeout(v),f.onload=null,f.onreadystatechange=null,f.onerror=null,h.removeChild(f)}function c(){try{delete window[y],delete window[y+"_loaded"]}catch(e){window[y]=window[y+"_loaded"]=void 0}}function u(){t.debug("JSONP: Script timeout"),d=!0,a(),o(new n.RequestTimeout)}function l(){t.debug("JSONP: Script error"),m||d||(a(),o(new n.JSONPScriptError))}if("GET"!==t.method)return void o(new Error("Method "+t.method+" "+e+" is not supported by JSONP."));t.debug("JSONP: start");var p=!1,d=!1;s+=1;var h=document.getElementsByTagName("head")[0],f=document.createElement("script"),y="algoliaJSONP_"+s,m=!1;window[y]=function(e){return c(),d?void t.debug("JSONP: Late answer, ignoring"):(p=!0,a(),void o(null,{body:e}))},e+="&callback="+y,t.jsonBody&&t.jsonBody.params&&(e+="&"+t.jsonBody.params);var v=setTimeout(u,t.timeout);f.onreadystatechange=i,f.onload=r,f.onerror=l,f.async=!0,f.defer=!0,f.src=e,h.appendChild(f)}t.exports=r;var n=e(27),s=0},{27:27}],23:[function(e,t,o){function r(e,t){return function(o,r,s){if("function"==typeof o&&"object"==typeof r||"object"==typeof s)throw new n.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");0===arguments.length||"function"==typeof o?(s=o,o=""):1!==arguments.length&&"function"!=typeof r||(s=r,r=void 0),"object"==typeof o&&null!==o?(r=o,o=void 0):void 0!==o&&null!==o||(o="");var i="";return void 0!==o&&(i+=e+"="+encodeURIComponent(o)),void 0!==r&&(i=this.as._getSearchParams(r,i)),this._search(i,t,s)}}t.exports=r;var n=e(27)},{27:27}],24:[function(e,t,o){t.exports=function(e){return JSON.parse(JSON.stringify(e))}},{}],25:[function(e,t,o){t.exports=function(e,t){function o(){return r||(console.log(t),r=!0),e.apply(this,arguments)}var r=!1;return o}},{}],26:[function(e,t,o){t.exports=function(e,t){var o=e.toLowerCase().replace(".","").replace("()","");return"algoliasearch: `"+e+"` was replaced by `"+t+"`. Please see https://github.com/algolia/algoliasearch-client-js/wiki/Deprecated#"+o}},{}],27:[function(e,t,o){"use strict";function r(t,o){var r=e(7),n=this;"function"==typeof Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):n.stack=(new Error).stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=t||"Unknown error",o&&r(o,function(e,t){n[t]=e})}function n(e,t){function o(){var o=Array.prototype.slice.call(arguments,0);"string"!=typeof o[0]&&o.unshift(t),r.apply(this,o),this.name="AlgoliaSearch"+e+"Error"}return s(o,r),o}var s=e(9);s(r,Error),t.exports={AlgoliaSearchError:r,UnparsableJSON:n("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:n("RequestTimeout","Request timedout before getting a response"),Network:n("Network","Network issue, see err.more for details"),JSONPScriptFail:n("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:n("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:n("Unknown","Unknown error occured")}},{7:7,9:9}],28:[function(e,t,o){t.exports=function(e,t){t(e,0)}},{}],29:[function(e,t,o){var r=e(7);t.exports=function(e,t){var o=[];return r(e,function(r,n){o.push(t(r,n,e))}),o}},{7:7}],30:[function(e,t,o){var r=e(7);t.exports=function n(e){var t=Array.prototype.slice.call(arguments);return r(t,function(t){for(var o in t)t.hasOwnProperty(o)&&("object"==typeof e[o]&&"object"==typeof t[o]?e[o]=n({},e[o],t[o]):void 0!==t[o]&&(e[o]=t[o]))}),e}},{7:7}],31:[function(e,t,o){function r(t){return function(o,r,s){var i=e(24);s=s&&i(s)||{},s.hosts=s.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],0!==arguments.length&&"object"!=typeof o&&void 0!==o||(o="",r="",s._allowEmptyCredentials=!0);var a=t(o,r,s),c=a.initIndex("places");return c.search=n("query","/1/places/query"),c}}t.exports=r;var n=e(23)},{23:23,24:24}],32:[function(e,t,o){"use strict";t.exports="3.17.0"},{}]},{},[17]);
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(9);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(11)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js?includePaths[]=%2FUsers%2Fmoranadrian%2FWebstormProjects%2Fdb5%2Fclient%2Fsrc!./main.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/sass-loader/index.js?includePaths[]=%2FUsers%2Fmoranadrian%2FWebstormProjects%2Fdb5%2Fclient%2Fsrc!./main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(10)();
	// imports
	
	
	// module
	exports.push([module.id, "@charset \"UTF-8\";\n.login-page form#login-form {\n  background: #fff;\n  width: 100%;\n  margin: 5px auto;\n  position: relative;\n  display: inline-block; }\n  .login-page form#login-form div.heading {\n    background: #f85f64;\n    color: #fff;\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: bold;\n    padding: 1.5em; }\n  .login-page form#login-form div.left {\n    width: 50%;\n    float: left;\n    padding: 1.7em 1.5em 2.5em 1.5em; }\n  .login-page form#login-form div.right {\n    width: 50%;\n    float: right;\n    padding: 1.7em 1.5em 2.5em 1.5em; }\n\n.login-page div.left label {\n  display: inline-block;\n  color: gray;\n  font-size: 1.1em;\n  margin-top: 0.6em; }\n\n.login-page div.left input[type=\"email\"], .login-page div.left input[type=\"password\"] {\n  border: 0.1em solid #dfdfdf;\n  padding: 1em;\n  margin: 0.6em 0; }\n\n.login-page div.left input[type=\"email\"]:focus, .login-page div.left input[type=\"password\"]:focus {\n  outline: none;\n  border: 0.1em solid #bdbdbd; }\n\n.login-page div.left input[type=\"submit\"] {\n  background: #f85f64;\n  color: #fff;\n  outline: none;\n  text-transform: uppercase;\n  padding: 1.2em;\n  overflow: hidden;\n  border: none;\n  letter-spacing: 0.1em;\n  margin: 0.5em 0;\n  font-weight: bold; }\n  .login-page div.left input[type=\"submit\"]:hover {\n    background: rgba(248, 95, 100, 0.8); }\n\n.login-page div.right div.connect {\n  color: gray;\n  font-size: 1.1em;\n  text-align: center; }\n\n.login-page div.right a {\n  display: inline-block;\n  font-size: 1.5em;\n  text-decoration: none;\n  color: white;\n  width: 9em;\n  padding: 0.55em 0.3em;\n  clear: both;\n  text-align: center;\n  margin: 0.5em 0.1em; }\n  .login-page div.right a.facebook {\n    background: #3a589a;\n    margin-top: 0.8em; }\n    .login-page div.right a.facebook:hover {\n      background: rgba(58, 88, 154, 0.8); }\n  .login-page div.right a.twitter {\n    background: #4099ff; }\n    .login-page div.right a.twitter:hover {\n      background: rgba(64, 153, 255, 0.8); }\n  .login-page div.right a.google-plus {\n    background: #e9544f; }\n    .login-page div.right a.google-plus:hover {\n      background: rgba(233, 84, 79, 0.8); }\n\n.login-page div#login-modal {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  background-color: rgba(255, 255, 255, 0.99);\n  z-index: 5000; }\n\n.login-page div#login-box {\n  width: 100%;\n  position: fixed;\n  left: 50%;\n  top: 45%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  max-width: 560px;\n  background: transparent;\n  z-index: 5001;\n  max-height: 100vh;\n  overflow-y: auto;\n  margin-top: 50px; }\n\n.login-page .close.login {\n  top: 3%;\n  right: 2%;\n  width: 40px;\n  height: 40px;\n  position: fixed;\n  margin: 0px; }\n  .login-page .close.login:hover .icon-close {\n    background: #666;\n    fill: #fff; }\n\n.login-page .main-header.login {\n  margin-top: 30px;\n  font-size: 21px;\n  text-align: center;\n  padding: 0px 4px;\n  font-weight: bold; }\n\n.login-page .main-body.login {\n  font-size: 19px;\n  text-align: center;\n  margin: 30px auto;\n  line-height: 27px;\n  padding: 0px 10px; }\n\n.login-page #facebookBn {\n  width: 100%;\n  height: 100%;\n  background: #2D609B;\n  border: 0.1vw solid rgba(9, 39, 101, 0.5);\n  color: #fff;\n  display: block;\n  float: none;\n  text-decoration: none;\n  line-height: 5px;\n  max-width: 330px;\n  border-radius: 3px;\n  margin: 0px auto;\n  -webkit-transition: all 300ms ease;\n  transition: all 300ms ease;\n  margin-bottom: 1.5vh;\n  cursor: pointer; }\n\n.login-page .primary-text {\n  display: block;\n  position: relative;\n  top: 6px;\n  margin-left: 26px;\n  color: #fff;\n  height: 25px;\n  line-height: 30px;\n  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);\n  font-size: 16px;\n  text-align: center;\n  width: 85%; }\n\n.login-page .iconsocial {\n  width: 19px;\n  height: 19px;\n  margin: 12px 15px;\n  float: left; }\n\n.login-page .main-logo {\n  display: block;\n  position: relative;\n  max-width: 270px;\n  float: none;\n  margin: 0px auto;\n  height: 77px;\n  margin-Bottom: 6px; }\n\n.login-page .logo-icon {\n  display: block;\n  padding-top: 5px;\n  padding-right: 5px;\n  float: left;\n  width: 28%;\n  max-height: 75px;\n  fill: #52ba98; }\n\n.login-page .logo-svg-text {\n  display: block;\n  padding-top: 5px;\n  padding-right: 5px;\n  float: left;\n  width: 70%;\n  margin-top: 3%;\n  max-height: 50px;\n  fill: #44a3e4; }\n\n.login-page .icon-close {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  border-radius: 50%;\n  box-sizing: inherit;\n  -webkit-transition: all 0.2s ease-in-out, border 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out, border 0.2s ease-in-out;\n  fill: #666;\n  border: 0px solid #666; }\n  .login-page .icon-close:hover {\n    border: 1px solid #666; }\n\n.login-page .logo-symbol {\n  display: block;\n  padding-top: 5px;\n  padding-right: 5px;\n  float: left;\n  width: 26%;\n  max-height: 75px;\n  fill: #44a3e4; }\n\n.login-page .form-container {\n  max-width: 245px;\n  margin: 0px auto; }\n\n.login-page .email,\n.login-page .pass {\n  height: 45px;\n  width: 100%;\n  margin-right: 0%;\n  float: right;\n  border: 0px solid black;\n  position: relative;\n  z-index: 1000;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.29) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.09) 0px 2px 9px -1px inset;\n  -webkit-transition: background-color 300ms ease;\n  -webkit-transition: background-color 300ms ease, box-shadow 300ms ease;\n  transition: background-color 300ms ease, box-shadow 300ms ease;\n  font-family: Lato, sans-serif;\n  color: #000;\n  font-size: 16px;\n  font-weight: 400;\n  padding: 0px 20px;\n  display: block;\n  margin-bottom: 5px;\n  border-radius: 3px; }\n\n.login-page .submit {\n  display: block;\n  width: 100%;\n  height: 45px;\n  padding: 4px 20px;\n  float: left;\n  background: -webkit-gradient(linear, center top, center bottom, from(#a4e250), to(#68b92c));\n  background: -webkit-linear-gradient(#a4e250, #68b92c);\n  background: -moz-gradient(linear, center top, center bottom, from(#a4e250), to(#68b92c));\n  background: -moz-linear-gradient(#a4e250, #68b92c);\n  -webkit-transition: background-color 300ms ease;\n  transition: background-color 300ms ease;\n  font-family: 'Varela Round', sans-serif;\n  color: #fff;\n  font-size: 17px;\n  font-weight: 600;\n  text-align: center;\n  text-decoration: none;\n  text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 0px;\n  position: relative;\n  z-index: 1000;\n  border: none;\n  outline: 0;\n  cursor: pointer;\n  border-radius: 3px;\n  margin-bottom: 5px; }\n  .login-page .submit:hover {\n    background-color: rgba(231, 106, 93, 0.95); }\n  .login-page .submit:active {\n    background-color: #e76a5d;\n    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px, rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.09) 0px 2px 6px 1px inset, rgba(0, 0, 0, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.09) 0px 44px 38px -25px inset; }\n  .login-page .submit.login {\n    background: -webkit-gradient(linear, center top, center bottom, from(#44a3e4), to(#3498db));\n    background: -webkit-linear-gradient(#44a3e4, #3498db);\n    background: -moz-gradient(linear, center top, center bottom, from(#44a3e4), to(#3498db));\n    background: -moz-linear-gradient(#44a3e4, #3498db); }\n\n.login-page .reset-pass {\n  font-size: 14px;\n  text-decoration: none;\n  display: block;\n  line-height: 1.5;\n  color: #333; }\n  .login-page .reset-pass:hover {\n    text-decoration: underline;\n    color: #44a3e4; }\n\n.login-page .warning {\n  outline: none;\n  border: 1px solid #FF5454;\n  box-shadow: rgba(255, 84, 84, 0.29) 0px 0px 0px 1px inset, rgba(255, 84, 84, 0.09) 0px 2px 9px -1px inset; }\n\n.login-page .or {\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-align: center;\n  color: #999; }\n  .login-page .or:before {\n    background: rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    content: \"\";\n    display: inline-block;\n    height: 1px;\n    position: relative;\n    vertical-align: middle;\n    width: 38%;\n    margin-left: 4%; }\n  .login-page .or:after {\n    background: rgba(0, 0, 0, 0.2);\n    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n    content: \"\";\n    display: inline-block;\n    height: 1px;\n    position: relative;\n    vertical-align: middle;\n    width: 38%;\n    margin-right: 4%; }\n\n.main-pages {\n  /*---------- Sections and Containers -----------*/\n  /*----- ask question --------*/\n  /*--------- questions -----------*/\n  /*--------- categories -----------*/\n  /*--------- inside a question page -----------*/\n  /*------------------ Write a comment -------------------*/\n  /* comment rich text editor */ }\n  .main-pages .main-section {\n    width: 100%;\n    margin: 0px auto;\n    display: block;\n    position: absolute;\n    top: 50px;\n    background: #fefeff;\n    min-height: 100%;\n    left: 0;\n    right: 0;\n    /*\n  \tborder: 1px solid;\n      border-color: #E5E6E9 #DFE0E4 #D0D1D5;\n  */ }\n  .main-pages .ask-question-container {\n    width: 100%;\n    display: block;\n    height: auto;\n    background: #f2f2f2;\n    position: relative;\n    padding: 15px; }\n  .main-pages .questions-container {\n    width: 100%;\n    display: block;\n    height: auto;\n    position: relative;\n    padding: 35px 0px; }\n  .main-pages .button {\n    background-color: #44a3e4;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-weight: bold;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    line-height: 38px;\n    border-radius: 3px;\n    padding: 0;\n    border: none; }\n  .main-pages .questions-group, .main-pages .answers-group {\n    width: 100%;\n    display: block;\n    height: auto;\n    float: right; }\n  .main-pages .questions-header, .main-pages .categories-header, .main-pages .answers-header {\n    font-size: 17px;\n    font-weight: 400;\n    color: #666;\n    line-height: 20px;\n    margin-bottom: 0;\n    color: #a49f99;\n    padding: 0px 0px 7px;\n    position: relative; }\n  .main-pages .questions, .main-pages .answers {\n    position: relative;\n    padding: 0px 0px 15px;\n    width: 100%;\n    display: block;\n    height: auto;\n    float: right; }\n  .main-pages .icon-calendar {\n    width: 24px;\n    height: 24px;\n    display: inline-block;\n    fill: #a49f99;\n    float: right; }\n  .main-pages .calendar-number {\n    position: absolute;\n    font-size: 10.5px;\n    top: 5.2px;\n    right: 6.5px;\n    font-family: 'HelveticaNeue-Medium', sans-serif; }\n  .main-pages .questions-date {\n    display: inline-block;\n    line-height: 24px;\n    padding-right: 8px; }\n  .main-pages .question-box {\n    width: 100%;\n    float: left;\n    display: block;\n    -webkit-transition: all linear 0.15s;\n    transition: all linear 0.15s;\n    position: relative;\n    padding: 20px 0px 20px 10px; }\n    .main-pages .question-box:hover {\n      background: #fafafa; }\n  .main-pages .triangle-button {\n    width: 15px;\n    height: 15px;\n    position: absolute;\n    display: block;\n    cursor: pointer;\n    float: right;\n    top: 6px;\n    right: 7px; }\n    .main-pages .triangle-button.big {\n      top: 12px;\n      right: 8px; }\n    .main-pages .triangle-button.small {\n      right: 0px;\n      width: 12px;\n      height: 12px; }\n  .main-pages .triangle {\n    width: 7px;\n    height: 7px;\n    position: relative;\n    background: #48ACF1;\n    border-top-right-radius: 30%;\n    margin: 0px auto;\n    display: block;\n    -webkit-transition: all ease 0.5s;\n    transition: all ease 0.5s; }\n    .main-pages .triangle:before, .main-pages .triangle:after {\n      width: 7px;\n      height: 7px;\n      position: relative;\n      background: #48ACF1;\n      border-top-right-radius: 30%;\n      margin: 0px auto;\n      display: block;\n      -webkit-transition: all ease 0.5s;\n      transition: all ease 0.5s; }\n    .main-pages .triangle:before, .main-pages .triangle:after {\n      content: '';\n      position: absolute; }\n  .main-pages .triangle-up {\n    -webkit-transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866);\n            transform: rotate(-60deg) skewX(-30deg) scale(1, 0.866); }\n    .main-pages .triangle-up:before {\n      -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);\n              transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%); }\n  .main-pages .triangle-down:before {\n    -webkit-transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%);\n            transform: rotate(-135deg) skewX(-45deg) scale(1.414, 0.707) translate(0, -50%); }\n  .main-pages .triangle-up:after {\n    -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);\n            transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%); }\n  .main-pages .triangle-down {\n    -webkit-transform: rotate(60deg) skewX(30deg) scale(1, -0.866);\n            transform: rotate(60deg) skewX(30deg) scale(1, -0.866);\n    margin-top: 6px; }\n    .main-pages .triangle-down:after {\n      -webkit-transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%);\n              transform: rotate(135deg) skewY(-45deg) scale(0.707, 1.414) translate(50%); }\n  .main-pages .triangle-up.small {\n    background: #c3c5c7;\n    width: 6px;\n    height: 6px; }\n  .main-pages .triangle.small:before, .main-pages .triangle.small:after {\n    background: #c3c5c7;\n    width: 6px;\n    height: 6px; }\n  .main-pages .upvoting-box:hover .triangle {\n    background: #999; }\n    .main-pages .upvoting-box:hover .triangle:before, .main-pages .upvoting-box:hover .triangle:after {\n      background: #999; }\n  .main-pages .triangle-up.active {\n    background: #fff; }\n  .main-pages .owner-img {\n    display: inline-block;\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: #ccc;\n    float: right;\n    border: 1px solid rgba(107, 108, 108, 0.39);\n    background-color: #F2F2F2;\n    margin-left: 15px; }\n  .main-pages .profile-image {\n    display: inline-block;\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: #ccc;\n    float: right;\n    border: 1px solid rgba(107, 108, 108, 0.39);\n    background-color: #F2F2F2;\n    margin-left: 15px;\n    width: 37px;\n    height: 37px;\n    margin-left: 0px;\n    float: left; }\n  .main-pages .owner-container {\n    width: 100%;\n    height: auto;\n    display: inline-block; }\n  .main-pages .owner-img.standalone-question {\n    width: 35px;\n    height: 35px;\n    border: none;\n    margin-left: 10px; }\n  .main-pages .owner-img.small {\n    width: 44px;\n    height: 44px;\n    margin-left: 10px; }\n  .main-pages .owner-name.standalone-question {\n    font-size: 17px;\n    font-weight: 200;\n    letter-spacing: .2px;\n    line-height: 35px;\n    color: #fff;\n    font-family: 'HelveticaNeue-Medium', arial, sans-serif; }\n  .main-pages .owner-name.small {\n    color: #555;\n    cursor: pointer;\n    font-size: 14px;\n    font-weight: normal;\n    line-height: 18px;\n    float: right;\n    margin-left: 5px;\n    font-family: 'HelveticaNeue-Medium', arial, sans-serif; }\n    .main-pages .owner-name.small:hover {\n      text-decoration: underline; }\n  .main-pages .flex-box {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    -ms-flex-direction: column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -ms-flex-pack: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n  .main-pages .flex-height {\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: flex;\n    height: 24px; }\n    .main-pages .flex-height.big {\n      height: 36px;\n      margin-bottom: 10px;\n      position: relative; }\n  .main-pages .question-title {\n    color: #333;\n    line-height: 26px;\n    margin-bottom: 4px;\n    cursor: pointer;\n    max-width: 800px; }\n    .main-pages .question-title.standalone {\n      color: #fff;\n      line-height: 28px;\n      font-size: 22px;\n      margin-top: 7px;\n      margin-bottom: 15px; }\n  .main-pages .comments-button, .main-pages .upvote-button {\n    height: 24px;\n    border-radius: 3px;\n    background: #fefeff;\n    -webkit-transition: all linear 0.15s;\n    transition: all linear 0.15s;\n    padding: 4px;\n    float: right;\n    display: inline-block;\n    width: 50px;\n    max-width: 55px;\n    width: 100%;\n    position: absolute;\n    cursor: pointer; }\n  .main-pages .comments-button {\n    border: 1px solid #C4C4C4;\n    right: 140px; }\n  .main-pages .upvote-button {\n    border: 1px solid #48ACF1;\n    right: 75px; }\n  .main-pages .comments-button.big {\n    right: 75px;\n    padding: 7px;\n    max-width: 66px;\n    height: 36px; }\n  .main-pages .upvote-button.big {\n    right: 0;\n    max-width: 66px;\n    height: 36px;\n    padding: 7px; }\n  .main-pages .upvote-button.small {\n    position: relative;\n    float: right;\n    right: 0;\n    margin-left: 10px;\n    max-width: 70px;\n    width: auto;\n    border: none;\n    padding-right: 0; }\n  .main-pages .comments-button.small {\n    position: relative;\n    float: right;\n    right: 0;\n    margin-left: 10px;\n    max-width: 70px;\n    width: auto;\n    border: none;\n    padding-right: 0; }\n  .main-pages .comments-button:hover {\n    background: #f2f2f2; }\n  .main-pages .upvote-button:hover {\n    background: #f2f2f2; }\n  .main-pages .upvote-button.small:hover {\n    background: transparent; }\n  .main-pages .comments-button.small:hover {\n    background: transparent; }\n  .main-pages .icon-comments {\n    width: 15px;\n    height: 15px;\n    display: inline-block;\n    float: right;\n    fill: #999; }\n    .main-pages .icon-comments.big {\n      margin-top: 2px; }\n    .main-pages .icon-comments.small {\n      fill: #c3c5c7;\n      width: 14px;\n      height: 14px; }\n  .main-pages .comments-button p {\n    font-size: 12px;\n    display: inline-block;\n    padding: 0px 5px;\n    line-height: 15px;\n    float: right;\n    color: #999; }\n  .main-pages .upvote-button p {\n    font-size: 12px;\n    display: inline-block;\n    padding: 0px 5px;\n    line-height: 15px;\n    float: right;\n    color: #999;\n    margin-right: 15px;\n    width: calc(100% - 15px);\n    text-align: center;\n    color: #48ACF1;\n    -webkit-transition: all ease-in 0.3s;\n    transition: all ease-in 0.3s; }\n  .main-pages .comments-button.big p, .main-pages .upvote-button.big p {\n    font-size: 14px;\n    line-height: 19px; }\n  .main-pages .comments-button.small p, .main-pages .upvote-button.small p {\n    font-size: 13px;\n    color: #999; }\n  .main-pages upvote-button.small p {\n    margin-right: 13px; }\n  .main-pages .comments-button.small:hover p, .main-pages .upvote-button.small:hover p {\n    text-decoration: underline;\n    color: #555; }\n  .main-pages .question-keywords {\n    display: inline-block;\n    font-size: 14px;\n    color: #a49f99;\n    line-height: 24px; }\n  .main-pages .categories-header {\n    border-bottom: 1px solid #f1f1f1;\n    width: 90%;\n    margin-bottom: 8px; }\n  .main-pages .categories-title {\n    font-size: 15px; }\n  .main-pages .categories-list li a {\n    width: 100%;\n    padding: 5px 0px;\n    font-size: 14px;\n    color: #999; }\n  .main-pages .categories-list li:hover a {\n    color: #44a3e4; }\n  .main-pages .inside-question-container {\n    width: 100%;\n    display: block;\n    height: auto;\n    position: relative; }\n  .main-pages .inside-question-header {\n    width: 100%;\n    min-height: 230px;\n    background: none 50%/cover #505d6c;\n    box-sizing: border-box;\n    margin: 0 0 20px; }\n  .main-pages .question-header-box {\n    max-width: 690px;\n    margin: 0px auto;\n    padding: 40px 10px 10px;\n    position: relative; }\n  .main-pages .answers-header-title {\n    display: inline-block;\n    line-height: 24px; }\n  .main-pages .answer-box {\n    width: 100%;\n    float: left;\n    display: block;\n    position: relative;\n    padding: 20px 0px 20px 33px; }\n  .main-pages .answers-header {\n    border-bottom: 1px solid #f1f1f1;\n    width: 100%;\n    margin-bottom: 8px;\n    max-width: 715px; }\n  .main-pages .answer-owner-container {\n    color: #7b7f83;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: start;\n    -ms-flex-align: start;\n    align-items: flex-start; }\n  .main-pages .owner-wrap {\n    line-height: 15px;\n    -ms-flex-negative: 1;\n    flex-shrink: 1; }\n  .main-pages .owner-stats, .main-pages .answer-stats {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: transparent;\n    float: right; }\n  .main-pages span.dashline, .main-pages span.owner-mantra {\n    font-size: 14px;\n    line-height: 18px;\n    color: #999;\n    font-family: 'HelveticaNeue-Roman', arial, sans-serif;\n    letter-spacing: 0; }\n  .main-pages .answer-text-box {\n    margin-top: -22px;\n    position: relative;\n    margin-bottom: 4px;\n    margin-right: 54px; }\n  .main-pages .flex-height.answer {\n    margin-right: 54px;\n    position: relative; }\n  .main-pages .answer-title {\n    color: #333;\n    line-height: 26px;\n    cursor: pointer;\n    max-width: 800px; }\n  .main-pages .answer-date {\n    line-height: 1.3;\n    font-size: 13px;\n    color: #999;\n    margin-bottom: 8px;\n    float: left;\n    position: absolute;\n    left: 0;\n    -webkit-transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    opacity: 0; }\n  .main-pages .flex-height.answer:hover .answer-date {\n    opacity: 1; }\n  .main-pages .answer-comments {\n    margin-right: 54px; }\n  .main-pages .comment-box {\n    width: 100%;\n    margin: 0px auto;\n    min-height: 150px;\n    position: relative;\n    background-color: #fff;\n    float: right;\n    display: block;\n    max-width: 720px;\n    margin-bottom: 20px; }\n  .main-pages .profile-comment-section {\n    width: 54px;\n    display: block;\n    float: right; }\n  .main-pages .comment-section {\n    margin: 0px auto;\n    min-height: 150px;\n    position: relative;\n    background-color: #fff;\n    float: left;\n    display: block;\n    border: 1px solid;\n    border-color: #E5E6E9 #DFE0E4 #D0D1D5;\n    width: 100%;\n    max-width: calc(100% - 54px);\n    margin-left: 0; }\n  .main-pages .round-profile.feed.comment {\n    margin-top: 8px;\n    width: 44px;\n    height: 44px; }\n  .main-pages .arrow-left {\n    position: absolute;\n    top: 29px;\n    width: 12px;\n    height: 12px;\n    border-left: 1px solid #D0D1D5;\n    border-bottom: 1px solid #D0D1D5;\n    background: #fff;\n    transform: rotate(-135deg);\n    -moz-transform: rotate(-135deg);\n    -webkit-transform: rotate(-135deg);\n    margin-right: -7.5px;\n    margin-top: -6px;\n    background: #fff; }\n  .main-pages .icon-upload {\n    width: 70px;\n    height: 70px;\n    margin: 0px auto;\n    margin-top: 30px;\n    display: block;\n    float: none;\n    position: relative;\n    fill: #999; }\n  .main-pages .icon-camera, .main-pages .icon-drive, .main-pages .icon-pic {\n    width: 35px;\n    float: left;\n    display: inline-block;\n    height: 31px;\n    fill: #999;\n    padding: 0px 7px;\n    position: relative;\n    margin-top: 7px; }\n  .main-pages .icon-font {\n    position: relative;\n    fill: #999;\n    float: left;\n    display: inline-block;\n    height: 28px;\n    margin-top: 9px;\n    width: 37px;\n    padding: 6px 7px;\n    border-left: 1px solid #E5E6E9;\n    margin-left: 5px; }\n  .main-pages .tiny-button-box {\n    height: 50px;\n    float: right;\n    display: block;\n    cursor: pointer; }\n  .main-pages .tooltip-bottom:hover, .main-pages .tooltip-bottom-buttons:hover {\n    position: relative; }\n  .main-pages .tooltip-bottom[data-tooltip]:after, .main-pages .tooltip-bottom[data-tooltip]:before {\n    opacity: 0; }\n  .main-pages .tooltip-bottom-buttons[data-tooltip]:after, .main-pages .tooltip-bottom-buttons[data-tooltip]:before {\n    opacity: 0; }\n  .main-pages .tooltip-bottom-buttons:hover:after {\n    content: attr(data-tooltip);\n    padding: 4px 8px;\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    top: 100%;\n    position: absolute;\n    white-space: nowrap;\n    z-index: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    opacity: 1;\n    -webkit-transition: opacity 300ms ease;\n    transition: opacity 300ms ease; }\n  .main-pages .tooltip-bottom[data-tooltip]:hover:after {\n    content: attr(data-tooltip);\n    padding: 4px 8px;\n    position: absolute;\n    left: 0;\n    top: 100%;\n    white-space: nowrap;\n    z-index: 20px;\n    background-color: rgba(0, 0, 0, 0.8);\n    color: #fff;\n    margin-left: -100%;\n    opacity: 1;\n    -webkit-transition: opacity 300ms ease;\n    transition: opacity 300ms ease;\n    font-family: 'HelveticaNeue-Roman', arial, sans-serif;\n    letter-spacing: 0; }\n  .main-pages .tooltip-bottom[data-tooltip]:hover:before {\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    margin: 8px 0 0 0;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n    border-bottom: 8px solid black;\n    border-bottom: 8px solid rgba(0, 0, 0, 0.8);\n    content: \"\";\n    bottom: 0px;\n    position: absolute;\n    opacity: 1;\n    -webkit-transition: opacity 300ms ease;\n    transition: opacity 300ms ease; }\n  .main-pages .tooltip-bottom-buttons:hover:before {\n    left: 50%;\n    -webkit-transform: translate(-50%);\n    transform: translate(-50%);\n    margin: 8px 0 0 0;\n    border-right: 8px solid transparent;\n    border-left: 8px solid transparent;\n    border-bottom: 8px solid black;\n    border-bottom: 8px solid rgba(0, 0, 0, 0.8);\n    content: \"\";\n    bottom: 0px;\n    position: absolute;\n    opacity: 1;\n    -webkit-transition: opacity 300ms ease;\n    transition: opacity 300ms ease; }\n  .main-pages .comment-buttons-container {\n    position: absolute;\n    z-index: 400;\n    display: none;\n    opacity: 0;\n    height: 38px;\n    bottom: 53px;\n    background: #f4f4f4;\n    border: 1px solid;\n    border-color: #E5E6E9 #DFE0E4 #D0D1D5;\n    -webkit-transition: opacity 200ms ease;\n    transition: opacity 200ms ease; }\n    .main-pages .comment-buttons-container:before {\n      left: 9px;\n      margin: 8px 0 0 0;\n      border-right: 8px solid transparent;\n      border-left: 8px solid transparent;\n      content: \"\";\n      border-top: 8px solid #D0D1D5;\n      bottom: -8px;\n      position: absolute; }\n    .main-pages .comment-buttons-container.focussed {\n      /*display: block;*/ }\n  .main-pages .comment-buttons-group {\n    display: block;\n    position: relative;\n    height: 30px;\n    width: auto;\n    float: left; }\n  .main-pages .comment-button {\n    float: left;\n    display: block;\n    width: 33px;\n    height: 30px;\n    background: transparent;\n    border: none;\n    padding: 0;\n    color: #999;\n    font-weight: normal; }\n    .main-pages .comment-button.active {\n      font-family: auto;\n      border-radius: 0px;\n      box-shadow: none;\n      margin-top: 0px;\n      color: #999;\n      background: #EAEAEA;\n      text-transform: uppercase;\n      font-family: 'ProximaNovaA-Semi'; }\n  .main-pages .fa {\n    font-size: 16px; }\n  .main-pages .display {\n    display: block;\n    opacity: 1; }\n  .main-pages .comment-buttons-section {\n    height: 50px;\n    position: absolute;\n    width: 100%;\n    float: left;\n    display: block;\n    background: #f4f4f4;\n    border-top: 1px solid #E5E6E9;\n    bottom: 0; }\n  .main-pages .comment-upload-button {\n    position: absolute;\n    z-index: 1501;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: transparent;\n    opacity: 0;\n    height: 160px;\n    width: 50%;\n    display: block;\n    cursor: pointer !important; }\n  .main-pages .comment-upload-text {\n    line-height: 35px;\n    font-size: 16px;\n    display: block;\n    position: relative;\n    text-align: center;\n    color: #999; }\n  .main-pages #document-link {\n    width: 70%;\n    margin: 0px auto;\n    display: block;\n    float: none;\n    margin-bottom: 40px; }\n  .main-pages .post-button.comment {\n    position: relative;\n    width: 88px;\n    float: left;\n    font-size: 14px;\n    height: 35px;\n    line-height: 34px;\n    padding: 0px;\n    margin: 7px;\n    z-index: 100;\n    cursor: pointer;\n    background: #44a3e4;\n    background: -webkit-gradient(linear, left top, left bottom, from(#44a3e4), to(#3498db));\n    background: -webkit-linear-gradient(top, #44a3e4 0, #3498db 100%);\n    background: linear-gradient(to bottom, #44a3e4 0, #3498db 100%);\n    border: 1px solid #3498db;\n    color: #fff;\n    text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);\n    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);\n    font-weight: 400; }\n  .main-pages #upload-section {\n    display: block; }\n  .main-pages .dropzone {\n    position: relative;\n    background-color: #f4f4f4;\n    border-bottom: 1px solid #ddd;\n    border-top-right-radius: 2px;\n    border-bottom-right-radius: 2px;\n    width: 100%;\n    min-height: 0px;\n    float: left;\n    display: block;\n    -webkit-transition: all 300ms ease;\n    transition: all 300ms ease;\n    overflow: hidden; }\n    .main-pages .dropzone.document {\n      border-left: 1px solid #ddd;\n      cursor: pointer;\n      display: block; }\n  .main-pages .dragover {\n    opacity: 0.5;\n    background: #fff; }\n  .main-pages #link-box {\n    position: relative;\n    background-color: #f4f4f4;\n    border-bottom: 1px solid #ddd;\n    width: 100%;\n    min-height: 160px;\n    float: left;\n    padding-top: 35px;\n    display: none; }\n  .main-pages .social-button {\n    width: 210px;\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .main-pages .social-buttons {\n    margin-top: 15px; }\n  .main-pages .headlines {\n    box-shadow: none;\n    text-shadow: none; }\n  .main-pages .comment-button-title {\n    float: left;\n    display: block;\n    width: 250px;\n    font-size: 16px;\n    margin-left: 60px;\n    top: 50%;\n    color: #c2c1bd;\n    position: absolute;\n    margin-top: -10px; }\n  @media screen and (max-width: 769px) {\n    .main-pages .categories-container {\n      display: none; } }\n  @media screen and (max-width: 600px) {\n    .main-pages .header {\n      box-shadow: none;\n      border-bottom: none;\n      padding: 0px 5px; }\n    .main-pages .top-bar {\n      padding: 0px; }\n    .main-pages .main-section {\n      top: 104px; }\n    .main-pages .question-box {\n      padding: 20px 10px; }\n    .main-pages .questions-header {\n      padding: 0px 10px 5px; }\n    .main-pages .calendar-number {\n      right: 16.5px; }\n    .main-pages .container-search {\n      max-width: 100%;\n      width: 100%;\n      height: 55px;\n      position: fixed;\n      top: 50px;\n      right: 0;\n      left: 0;\n      z-index: 100;\n      padding-top: 0px; }\n    .main-pages #search-input {\n      border: 1px solid #C4C4C4;\n      background-color: #fff;\n      -webkit-box-shadow: none;\n      -webkit-transition: none;\n      transition: none;\n      width: 85%;\n      height: 55px;\n      font-size: 16px;\n      margin-top: 0px;\n      font-weight: bold;\n      padding-right: 10px;\n      line-height: 30px;\n      display: block;\n      float: right;\n      padding: 0px 10px 0px 0px;\n      color: #666;\n      text-align: right;\n      margin-bottom: 0;\n      border-radius: 0px;\n      border-right: none; }\n    .main-pages #search-button {\n      width: 15%;\n      display: block;\n      float: right;\n      margin-top: 0px;\n      height: 55px;\n      border: none;\n      font-size: 18px;\n      border: 1px solid #ccc;\n      background: #f6f6f6;\n      border-right: none;\n      border-radius: 0px;\n      border-left: none; }\n    .main-pages #section-nav {\n      top: 130px; }\n    .main-pages #question-input, .main-pages #tags-input {\n      margin-bottom: 8px; }\n    .main-pages .owner-img {\n      width: 40px;\n      height: 40px; }\n    .main-pages .comments-button {\n      right: 120px; }\n    .main-pages .upvote-button {\n      right: 60px; }\n    .main-pages .question-keywords {\n      right: 160px; } }\n  @media screen and (max-width: 469px) {\n    .main-pages {\n      /*\n  .owner-img{\n   display: none;\n  }\t\t\n  .comments-button{\n      right: 65px;\t\n  }\t\n  .upvote-button{\n       right: 5px;\n  \t\n  }\t\n  */ }\n      .main-pages .question-keywords {\n        right: 105px; } }\n\n.head {\n  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.05), 0 2px 4px 0 rgba(0, 0, 0, 0.06);\n  background: #fefeff;\n  position: fixed;\n  height: 50px;\n  width: 100%;\n  border-bottom: 1px solid #d3d3d3;\n  top: 0px;\n  z-index: 2000;\n  padding: 0px 15px;\n  left: 0;\n  right: 0;\n  /*------- Navigation ---------*/\n  /*----- ask question --------*/\n  /*-------------- login tooltip ----------------------*/\n  /*\n.login-container > div {\n    position: relative;\n    height: 100%;\n    width: 100%;\n    float: none;\n    padding: 20px;\n}\n*/ }\n  .head .top-bar {\n    width: 100%;\n    height: auto;\n    display: inline-block; }\n  .head .logo-wrapper {\n    float: right;\n    margin-right: 0rem;\n    width: 100px;\n    margin-top: 8px;\n    color: #44a3e4;\n    text-transform: none;\n    cursor: pointer; }\n  .head .logo-symbol {\n    margin-top: 3px;\n    float: left;\n    display: block;\n    width: 27%;\n    text-align: left;\n    direction: ltr;\n    fill: #44a3e4;\n    height: 28px; }\n  .head .logo-text {\n    float: left;\n    display: block;\n    width: 73%;\n    color: #44a3e4;\n    font-family: \"M+ 2p black\";\n    font-size: 20px;\n    text-align: left;\n    direction: ltr;\n    padding-left: 2px;\n    line-height: 31px; }\n  .head .nav-link {\n    display: inline-block;\n    color: #666;\n    padding-bottom: 3px;\n    padding: 15px;\n    -webkit-transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    font-size: 14px; }\n    .head .nav-link:hover {\n      color: #44a3e4; }\n    .head .nav-link.profile {\n      padding: 6.5px 0px; }\n      .head .nav-link.profile p {\n        padding-left: 10px;\n        float: left;\n        line-height: 39px; }\n  .head .profile-image {\n    display: inline-block;\n    width: 55px;\n    height: 55px;\n    border-radius: 50%;\n    background: #ccc;\n    float: right;\n    border: 1px solid rgba(107, 108, 108, 0.39);\n    background-color: #F2F2F2;\n    margin-left: 15px;\n    width: 37px;\n    height: 37px;\n    margin-left: 0px;\n    float: left; }\n  .head .sign-up-button {\n    background-color: #44a3e4;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-weight: bold;\n    width: 95px;\n    height: 35px;\n    text-align: center;\n    line-height: 36px;\n    margin-top: 7px;\n    border-radius: 3px;\n    padding: 0;\n    cursor: pointer; }\n    .head .sign-up-button:hover {\n      opacity: 0.9;\n      color: #fff; }\n  .head #section-search {\n    display: block;\n    width: 100%;\n    background-color: rgba(0, 0, 0, 0.8);\n    height: 95px;\n    margin-top: -95px; }\n  .head .container-search {\n    display: block;\n    width: 100%;\n    max-width: 500px;\n    height: 50px;\n    padding-top: 7px; }\n  .head .search-text {\n    color: #FFF;\n    font-size: 45px;\n    font-weight: bold;\n    margin: 0px auto;\n    display: block;\n    text-align: left;\n    line-height: 95px; }\n  .head #search-input {\n    border: 1px solid #C4C4C4;\n    background-color: #fff;\n    -webkit-box-shadow: none;\n    -webkit-transition: none;\n    transition: none;\n    width: 85%;\n    height: 35px;\n    font-size: 16px;\n    margin-top: 0px;\n    font-weight: normal;\n    padding-right: 10px;\n    line-height: 30px;\n    display: block;\n    float: right;\n    padding: 0px 10px 0px 0px;\n    color: #666;\n    text-align: right;\n    margin-bottom: 0;\n    border-radius: 0px 3px 3px 0px; }\n    .head #search-input:focus {\n      box-shadow: inset 0 1px 5px rgba(0, 0, 0, 0.05); }\n  .head #search-button {\n    width: 15%;\n    display: block;\n    float: right;\n    margin-top: 0px;\n    height: 35px;\n    -webkit-transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    transition: all 0.3s ease-in-out, border 0.3s ease-in-out;\n    background: #fff;\n    border: none;\n    font-size: 18px;\n    border: 1px solid #C4C4C4;\n    background: #f6f6f6;\n    border-right: none;\n    border-radius: 3px 0px 0px 3px; }\n    .head #search-button:hover, .head #search-button:focus {\n      outline: 0;\n      background: #e8e8e8; }\n  .head .icon-search {\n    width: 15px;\n    height: 15px;\n    fill: #868686;\n    margin-top: 3px; }\n  .head .menu li {\n    display: inline-block;\n    float: left; }\n  .head .button {\n    background-color: #44a3e4;\n    color: #FFFFFF;\n    font-size: 13px;\n    font-weight: bold;\n    width: 100%;\n    height: auto;\n    text-align: center;\n    line-height: 38px;\n    border-radius: 3px;\n    padding: 0;\n    border: none; }\n  .head .login-tooltip {\n    background: #fff;\n    bottom: 100%;\n    color: #00afd7;\n    display: block;\n    left: 0px;\n    margin-top: 15px;\n    opacity: 0;\n    position: absolute;\n    width: 300px;\n    top: 40px;\n    border: #e8e8e8 1px solid;\n    border-radius: 4px;\n    height: 357px;\n    -webkit-transition: all .25s ease-out;\n    transition: all .25s ease-out;\n    -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n    z-index: 201; }\n    .head .login-tooltip:before {\n      border-left: solid transparent 12px;\n      border-right: solid transparent 12px;\n      top: -13px;\n      content: \" \";\n      height: 0px;\n      left: 13%;\n      margin-left: -5px;\n      position: absolute;\n      width: 0px;\n      border-bottom: 12px solid #e8e8e8; }\n    .head .login-tooltip:after {\n      border-left: solid transparent 10px;\n      border-right: solid transparent 10px;\n      border-bottom: solid #fff 10px;\n      top: -10px;\n      content: \" \";\n      height: 0;\n      left: 13%;\n      margin-left: -3px;\n      position: absolute;\n      width: 0; }\n  .head .sign-up-button.active + .login-tooltip {\n    opacity: 1;\n    display: block; }\n  .head .login-container {\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    overflow-y: hidden;\n    right: 0;\n    top: 0;\n    bottom: 0; }\n  .head #facebookBn {\n    width: 100%;\n    height: 45px;\n    background: #2D609B;\n    border: 0.1vw solid rgba(9, 39, 101, 0.5);\n    color: #fff;\n    display: block;\n    float: none;\n    text-decoration: none;\n    line-height: 5px;\n    max-width: 330px;\n    border-radius: 3px;\n    margin: 0px auto;\n    -webkit-transition: all 300ms ease;\n    transition: all 300ms ease;\n    margin-bottom: 1.5vh;\n    cursor: pointer;\n    opacity: 0.8; }\n    .head #facebookBn:hover {\n      opacity: 1; }\n  .head .primary-text {\n    display: block;\n    position: relative;\n    top: 6px;\n    margin-left: 26px;\n    color: #fff;\n    height: 25px;\n    line-height: 30px;\n    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.2);\n    font-size: 15px;\n    text-align: center;\n    width: 85%;\n    line-height: 1.8; }\n  .head .iconsocial {\n    width: 19px;\n    height: 19px;\n    margin: 12px 15px;\n    float: left; }\n  .head .form-container {\n    max-width: 245px;\n    margin: 0px auto;\n    padding: 20px 0px 10px; }\n  .head .email, .head .pass {\n    height: 35px;\n    width: 100%;\n    margin-right: 0%;\n    float: right;\n    border: 0px solid black;\n    position: relative;\n    z-index: 1000;\n    background-color: #fff;\n    box-shadow: rgba(0, 0, 0, 0.29) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.09) 0px 2px 9px -1px inset;\n    -webkit-transition: background-color 300ms ease;\n    -webkit-transition: background-color 300ms ease, box-shadow 300ms ease;\n    transition: background-color 300ms ease, box-shadow 300ms ease;\n    font-family: Lato, sans-serif;\n    color: #000;\n    font-size: 15px;\n    font-weight: 400;\n    padding: 0px 10px;\n    display: block;\n    margin-bottom: 5px;\n    border-radius: 3px; }\n  .head .submit {\n    display: block;\n    width: 100%;\n    height: 40px;\n    float: left;\n    background: -webkit-gradient(linear, center top, center bottom, from(#a4e250), to(#68b92c));\n    background: -webkit-linear-gradient(#a4e250, #68b92c);\n    background: -moz-gradient(linear, center top, center bottom, from(#a4e250), to(#68b92c));\n    background: -moz-linear-gradient(#a4e250, #68b92c);\n    -webkit-transition: background-color 300ms ease;\n    transition: background-color 300ms ease;\n    font-family: 'Varela Round', sans-serif;\n    color: #fff;\n    font-size: 17px;\n    font-weight: 600;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: rgba(0, 0, 0, 0.28) 0px 1px 0px;\n    position: relative;\n    z-index: 1000;\n    border: none;\n    outline: 0;\n    cursor: pointer;\n    border-radius: 3px;\n    margin-bottom: 5px;\n    line-height: 40px;\n    padding: 0; }\n    .head .submit:hover {\n      background-color: rgba(231, 106, 93, 0.95); }\n    .head .submit:active {\n      background-color: #e76a5d;\n      box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px, rgba(0, 0, 0, 0.09) 0px 0px 0px 1px, rgba(0, 0, 0, 0.09) 0px 2px 6px 1px inset, rgba(0, 0, 0, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.09) 0px 44px 38px -25px inset; }\n    .head .submit.login {\n      background: -webkit-gradient(linear, center top, center bottom, from(#44a3e4), to(#3498db));\n      background: -webkit-linear-gradient(#44a3e4, #3498db);\n      background: -moz-gradient(linear, center top, center bottom, from(#44a3e4), to(#3498db));\n      background: -moz-linear-gradient(#44a3e4, #3498db);\n      opacity: 0.8; }\n      .head .submit.login:hover {\n        opacity: 1; }\n  .head .reset-pass {\n    font-size: 14px;\n    text-decoration: none;\n    display: block;\n    line-height: 1.5;\n    color: #333;\n    text-align: right;\n    font-weight: normal;\n    float: right;\n    margin-bottom: 8px; }\n    .head .reset-pass:hover {\n      text-decoration: underline;\n      color: #44a3e4; }\n  .head .warning {\n    outline: none;\n    border: 1px solid #FF5454;\n    box-shadow: rgba(255, 84, 84, 0.29) 0px 0px 0px 1px inset, rgba(255, 84, 84, 0.09) 0px 2px 9px -1px inset; }\n  .head .or {\n    margin-bottom: 10px;\n    overflow: hidden;\n    text-align: center;\n    color: #999;\n    font-size: 14px;\n    line-height: 1.3; }\n    .head .or:before {\n      background: rgba(0, 0, 0, 0.2);\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n      content: \"\";\n      display: inline-block;\n      height: 1px;\n      position: relative;\n      vertical-align: middle;\n      width: 38%;\n      margin-left: 4%; }\n    .head .or:after {\n      background: rgba(0, 0, 0, 0.2);\n      box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n      content: \"\";\n      display: inline-block;\n      height: 1px;\n      position: relative;\n      vertical-align: middle;\n      width: 38%;\n      margin-right: 4%; }\n  .head .signup-container {\n    max-width: 100%;\n    width: 100%;\n    margin: 0px auto;\n    text-align: right;\n    height: auto;\n    display: inline-block;\n    padding: 0px 28px 18px;\n    background: #f1f1f1; }\n  .head .signup-text {\n    font-size: 15px;\n    color: #666;\n    line-height: 2.5;\n    font-weight: 600;\n    letter-spacing: 0; }\n\n/*@import '../../../node_modules/foundation-apps/scss/foundation';\n@import '../../../node_modules/foundation-sites-5/scss/foundation';*/\n/*---------- General -----------*/\nbody {\n  font-family: 'HelveticaNeue-Roman';\n  color: #333;\n  font-size: 14px;\n  line-height: 20px;\n  height: 100%;\n  letter-spacing: -0.1px;\n  background: #fefeff; }\n\nh1 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 17px;\n  font-weight: normal;\n  text-shadow: none; }\n\nh2 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 18px;\n  font-weight: normal;\n  text-shadow: none; }\n\nh3 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 15px;\n  font-weight: normal;\n  text-shadow: none; }\n\nh4 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n  text-shadow: none; }\n\nh5 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 13px;\n  font-weight: normal;\n  text-shadow: none; }\n\nh6 {\n  box-shadow: none;\n  font-family: 'HelveticaNeue-Medium', arial, sans-serif;\n  font-size: 12px;\n  font-weight: normal;\n  text-shadow: none; }\n\np {\n  margin-bottom: 0px;\n  font-size: 16px;\n  font-family: 'HelveticaNeue-Roman', arial, sans-serif; }\n\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\nli {\n  font-size: 16px;\n  font-family: 'HelveticaNeue-Roman', arial, sans-serif; }\n\nb, strong {\n  font-family: 'HelveticaNeue-Medium';\n  font-weight: normal; }\n\na {\n  text-decoration: none; }\n\n[ng\\:cloak], [ng-cloak], [data-ng-cloak], [x-ng-cloak], .ng-cloak, .x-ng-cloak {\n  display: none !important; }\n\n[class^=\"w-icon-\"], [class*=\" w-icon-\"] {\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.w-icon-slider-right:before {\n  content: \"\\E600\"; }\n\n.w-icon-slider-left:before {\n  content: \"\\E601\"; }\n\n.w-icon-nav-menu:before {\n  content: \"\\E602\"; }\n\n.w-icon-arrow-down:before, .w-icon-dropdown-toggle:before {\n  content: \"\\E603\"; }\n\n* {\n  box-sizing: border-box; }\n\nhtml {\n  height: 100%; }\n\nbody {\n  margin: 0;\n  min-height: 100%;\n  background-color: #fefeff;\n  color: #333; }\n\n#Section-About {\n  background-color: #f7f7f7; }\n\nimg {\n  max-width: 100%;\n  vertical-align: middle;\n  display: inline-block; }\n\nhtml.w-mod-touch * {\n  background-attachment: scroll !important; }\n\na:focus {\n  outline: 0; }\n\n.w-block {\n  display: block; }\n\n.w-inline-block {\n  max-width: 100%;\n  display: inline-block; }\n\n.w-clearfix:before {\n  content: \" \";\n  display: table; }\n\n.w-clearfix:after {\n  content: \" \";\n  display: table;\n  clear: both; }\n\n.w-hidden {\n  display: none; }\n\nh1, h2, h3, h4, h5, h6, p, blockquote {\n  margin: 0; }\n\nul, ol {\n  margin-top: 0;\n  margin-bottom: 0; }\n\n.w-list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.w-embed:before {\n  content: \" \";\n  display: table; }\n\n.w-embed:after {\n  content: \" \";\n  display: table;\n  clear: both; }\n\n.w-video {\n  width: 100%;\n  position: relative;\n  padding: 0; }\n  .w-video iframe, .w-video object, .w-video embed {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%; }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0; }\n\nbutton, html input[type=\"button\"] {\n  cursor: pointer;\n  -webkit-appearance: button; }\n\ninput[type=\"reset\"], input[type=\"submit\"] {\n  cursor: pointer;\n  -webkit-appearance: button; }\n\n.w-form {\n  margin: 0 0 15px; }\n\n.w-form-done {\n  display: none;\n  padding: 10px;\n  background-color: #dddddd; }\n\n.w-form-fail {\n  display: none;\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #ffdede; }\n\nlabel {\n  display: block;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\n.w-input, .w-select {\n  display: block;\n  width: 100%;\n  height: 38px;\n  padding: 8px 12px;\n  font-size: 14px;\n  line-height: 1.428571429;\n  color: #555;\n  vertical-align: middle;\n  background-color: #fefeff;\n  border: 1px solid #bbc3c6;\n  border-radius: 3px;\n  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.9) inset, 0 1px 5px rgba(0, 0, 0, 0.05); }\n\n.w-input:-moz-placeholder, .w-select:-moz-placeholder {\n  color: #999999; }\n\n.w-input::-moz-placeholder, .w-select::-moz-placeholder {\n  color: #999999;\n  opacity: 1; }\n\n.w-input:-ms-input-placeholder, .w-select:-ms-input-placeholder, .w-input::-webkit-input-placeholder, .w-select::-webkit-input-placeholder {\n  color: #999999; }\n\n.w-input:focus, .w-select:focus {\n  border-color: none;\n  outline: 0; }\n\n.w-input[disabled], .w-select[disabled], .w-input[readonly], .w-select[readonly] {\n  cursor: not-allowed;\n  background-color: #eeeeee; }\n\nfieldset[disabled] .w-input, fieldset[disabled] .w-select {\n  cursor: not-allowed;\n  background-color: #eeeeee; }\n\ntextarea.w-input, textarea.w-select {\n  height: auto; }\n\n.w-select[multiple] {\n  height: auto; }\n\n.w-button {\n  display: inline-block;\n  padding: 12px;\n  background-color: black;\n  color: white;\n  border: 0;\n  line-height: inherit; }\n\n.w-form-label {\n  display: inline-block;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0px; }\n\n.w-checkbox, .w-radio {\n  display: block;\n  margin-bottom: 5px;\n  padding-left: 20px; }\n\n.w-checkbox:before, .w-radio:before, .w-checkbox:after, .w-radio:after {\n  content: \" \";\n  display: table; }\n\n.w-checkbox:after, .w-radio:after {\n  clear: both; }\n\n.w-checkbox-input {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n  float: left;\n  margin-left: -20px; }\n\n.w-radio-input {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n  float: left;\n  margin-left: -20px;\n  margin-top: 3px; }\n\n.w-container {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1000px; }\n  .w-container:before {\n    content: \" \";\n    display: table; }\n  .w-container:after {\n    content: \" \";\n    display: table;\n    clear: both; }\n  .w-container .w-row {\n    margin-left: -5px;\n    margin-right: -5px; }\n\n.w-row:before {\n  content: \" \";\n  display: table; }\n\n.w-row:after {\n  content: \" \";\n  display: table;\n  clear: both; }\n\n.w-row .w-row {\n  margin-left: 0;\n  margin-right: 0; }\n\n.w-col {\n  position: relative;\n  float: right;\n  width: 100%;\n  min-height: 1px;\n  padding: 0px 5px; }\n  .w-col .w-col {\n    padding-left: 0;\n    padding-right: 0; }\n\n.w-col-1 {\n  width: 8.33333333%; }\n\n.w-col-2 {\n  width: 16.66666667%; }\n\n.w-col-3 {\n  width: 25%; }\n\n.w-col-4 {\n  width: 33.33333333%; }\n\n.w-col-5 {\n  width: 41.66666667%; }\n\n.w-col-6 {\n  width: 50%; }\n\n.w-col-7 {\n  width: 58.33333333%; }\n\n.w-col-8 {\n  width: 66.66666667%; }\n\n.w-col-9 {\n  width: 75%; }\n\n.w-col-10 {\n  width: 83.33333333%; }\n\n.w-col-11 {\n  width: 91.66666667%; }\n\n.w-col-12 {\n  width: 100%; }\n\n.w-col-push-1 {\n  left: 8.33333333%; }\n\n.w-col-push-2 {\n  left: 16.66666667%; }\n\n.w-col-push-3 {\n  left: 25%; }\n\n.w-col-push-4 {\n  left: 33.33333333%; }\n\n.w-col-push-5 {\n  left: 41.66666667%; }\n\n.w-col-push-6 {\n  left: 50%; }\n\n.w-col-push-7 {\n  left: 58.33333333%; }\n\n.w-col-push-8 {\n  left: 66.66666667%; }\n\n.w-col-push-9 {\n  left: 75%; }\n\n.w-col-push-10 {\n  left: 83.33333333%; }\n\n.w-col-push-11 {\n  left: 91.66666667%; }\n\n.w-col-pull-1 {\n  right: 8.33333333%; }\n\n.w-col-pull-2 {\n  right: 16.66666667%; }\n\n.w-col-pull-3 {\n  right: 25%; }\n\n.w-col-pull-4 {\n  right: 33.33333333%; }\n\n.w-col-pull-5 {\n  right: 41.66666667%; }\n\n.w-col-pull-6 {\n  right: 50%; }\n\n.w-col-pull-7 {\n  right: 58.33333333%; }\n\n.w-col-pull-8 {\n  right: 66.66666667%; }\n\n.w-col-pull-9 {\n  right: 75%; }\n\n.w-col-pull-10 {\n  right: 83.33333333%; }\n\n.w-col-pull-11 {\n  right: 91.66666667%; }\n\n.w-col-offset-1 {\n  margin-left: 8.33333333%; }\n\n.w-col-offset-2 {\n  margin-left: 16.66666667%; }\n\n.w-col-offset-3 {\n  margin-left: 25%; }\n\n.w-col-offset-4 {\n  margin-left: 33.33333333%; }\n\n.w-col-offset-5 {\n  margin-left: 41.66666667%; }\n\n.w-col-offset-6 {\n  margin-left: 50%; }\n\n.w-col-offset-7 {\n  margin-left: 58.33333333%; }\n\n.w-col-offset-8 {\n  margin-left: 66.66666667%; }\n\n.w-col-offset-9 {\n  margin-left: 75%; }\n\n.w-col-offset-10 {\n  margin-left: 83.33333333%; }\n\n.w-col-offset-11 {\n  margin-left: 91.66666667%; }\n\n.w-hidden-main {\n  display: none !important; }\n\n@media screen and (max-width: 991px) {\n  .w-container {\n    max-width: 100%; }\n  .w-hidden-main {\n    display: inherit !important; }\n  .w-hidden-medium {\n    display: none !important; }\n  .w-col-medium-1 {\n    width: 8.33333333%; }\n  .w-col-medium-2 {\n    width: 16.66666667%; }\n  .w-col-medium-3 {\n    width: 25%; }\n  .w-col-medium-4 {\n    width: 33.33333333%; }\n  .w-col-medium-5 {\n    width: 41.66666667%; }\n  .w-col-medium-6 {\n    width: 50%; }\n  .w-col-medium-7 {\n    width: 58.33333333%; }\n  .w-col-medium-8 {\n    width: 66.66666667%; }\n  .w-col-medium-9 {\n    width: 75%; }\n  .w-col-medium-10 {\n    width: 83.33333333%; }\n  .w-col-medium-11 {\n    width: 91.66666667%; }\n  .w-col-medium-12 {\n    width: 100%; }\n  .w-col-medium-push-1 {\n    left: 8.33333333%; }\n  .w-col-medium-push-2 {\n    left: 16.66666667%; }\n  .w-col-medium-push-3 {\n    left: 25%; }\n  .w-col-medium-push-4 {\n    left: 33.33333333%; }\n  .w-col-medium-push-5 {\n    left: 41.66666667%; }\n  .w-col-medium-push-6 {\n    left: 50%; }\n  .w-col-medium-push-7 {\n    left: 58.33333333%; }\n  .w-col-medium-push-8 {\n    left: 66.66666667%; }\n  .w-col-medium-push-9 {\n    left: 75%; }\n  .w-col-medium-push-10 {\n    left: 83.33333333%; }\n  .w-col-medium-push-11 {\n    left: 91.66666667%; }\n  .w-col-medium-pull-1 {\n    right: 8.33333333%; }\n  .w-col-medium-pull-2 {\n    right: 16.66666667%; }\n  .w-col-medium-pull-3 {\n    right: 25%; }\n  .w-col-medium-pull-4 {\n    right: 33.33333333%; }\n  .w-col-medium-pull-5 {\n    right: 41.66666667%; }\n  .w-col-medium-pull-6 {\n    right: 50%; }\n  .w-col-medium-pull-7 {\n    right: 58.33333333%; }\n  .w-col-medium-pull-8 {\n    right: 66.66666667%; }\n  .w-col-medium-pull-9 {\n    right: 75%; }\n  .w-col-medium-pull-10 {\n    right: 83.33333333%; }\n  .w-col-medium-pull-11 {\n    right: 91.66666667%; }\n  .w-col-medium-offset-1 {\n    margin-left: 8.33333333%; }\n  .w-col-medium-offset-2 {\n    margin-left: 16.66666667%; }\n  .w-col-medium-offset-3 {\n    margin-left: 25%; }\n  .w-col-medium-offset-4 {\n    margin-left: 33.33333333%; }\n  .w-col-medium-offset-5 {\n    margin-left: 41.66666667%; }\n  .w-col-medium-offset-6 {\n    margin-left: 50%; }\n  .w-col-medium-offset-7 {\n    margin-left: 58.33333333%; }\n  .w-col-medium-offset-8 {\n    margin-left: 66.66666667%; }\n  .w-col-medium-offset-9 {\n    margin-left: 75%; }\n  .w-col-medium-offset-10 {\n    margin-left: 83.33333333%; }\n  .w-col-medium-offset-11 {\n    margin-left: 91.66666667%; }\n  .w-col-stack {\n    width: 100%;\n    left: auto;\n    right: auto; } }\n\n@media screen and (max-width: 767px) {\n  .w-hidden-main, .w-hidden-medium {\n    display: inherit !important; }\n  .w-hidden-small {\n    display: none !important; }\n  .w-row, .w-container .w-row {\n    margin-left: 0;\n    margin-right: 0; }\n  .w-col {\n    width: 100%;\n    left: auto;\n    right: auto; }\n  .w-col-small-1 {\n    width: 8.33333333%; }\n  .w-col-small-2 {\n    width: 16.66666667%; }\n  .w-col-small-3 {\n    width: 25%; }\n  .w-col-small-4 {\n    width: 33.33333333%; }\n  .w-col-small-5 {\n    width: 41.66666667%; }\n  .w-col-small-6 {\n    width: 50%; }\n  .w-col-small-7 {\n    width: 58.33333333%; }\n  .w-col-small-8 {\n    width: 66.66666667%; }\n  .w-col-small-9 {\n    width: 75%; }\n  .w-col-small-10 {\n    width: 83.33333333%; }\n  .w-col-small-11 {\n    width: 91.66666667%; }\n  .w-col-small-12 {\n    width: 100%; }\n  .w-col-small-push-1 {\n    left: 8.33333333%; }\n  .w-col-small-push-2 {\n    left: 16.66666667%; }\n  .w-col-small-push-3 {\n    left: 50%; }\n  .w-col-small-push-4 {\n    left: 33.33333333%; }\n  .w-col-small-push-5 {\n    left: 41.66666667%; }\n  .w-col-small-push-6 {\n    left: 50%; }\n  .w-col-small-push-7 {\n    left: 58.33333333%; }\n  .w-col-small-push-8 {\n    left: 66.66666667%; }\n  .w-col-small-push-9 {\n    left: 75%; }\n  .w-col-small-push-10 {\n    left: 83.33333333%; }\n  .w-col-small-push-11 {\n    left: 91.66666667%; }\n  .w-col-small-pull-1 {\n    right: 8.33333333%; }\n  .w-col-small-pull-2 {\n    right: 16.66666667%; }\n  .w-col-small-pull-3 {\n    right: 50%; }\n  .w-col-small-pull-4 {\n    right: 33.33333333%; }\n  .w-col-small-pull-5 {\n    right: 41.66666667%; }\n  .w-col-small-pull-6 {\n    right: 50%; }\n  .w-col-small-pull-7 {\n    right: 58.33333333%; }\n  .w-col-small-pull-8 {\n    right: 66.66666667%; }\n  .w-col-small-pull-9 {\n    right: 75%; }\n  .w-col-small-pull-10 {\n    right: 83.33333333%; }\n  .w-col-small-pull-11 {\n    right: 91.66666667%; }\n  .w-col-small-offset-1 {\n    margin-left: 8.33333333%; }\n  .w-col-small-offset-2 {\n    margin-left: 16.66666667%; }\n  .w-col-small-offset-3 {\n    margin-left: 50%; }\n  .w-col-small-offset-4 {\n    margin-left: 33.33333333%; }\n  .w-col-small-offset-5 {\n    margin-left: 41.66666667%; }\n  .w-col-small-offset-6 {\n    margin-left: 50%; }\n  .w-col-small-offset-7 {\n    margin-left: 58.33333333%; }\n  .w-col-small-offset-8 {\n    margin-left: 66.66666667%; }\n  .w-col-small-offset-9 {\n    margin-left: 75%; }\n  .w-col-small-offset-10 {\n    margin-left: 83.33333333%; }\n  .w-col-small-offset-11 {\n    margin-left: 91.66666667%; } }\n\n@media screen and (max-width: 600px) {\n  .w-container {\n    max-width: none; }\n  .w-hidden-main, .w-hidden-medium, .w-hidden-small {\n    display: inherit !important; }\n  .w-hidden-tiny {\n    display: none !important; }\n  .w-col {\n    width: 100%; }\n  .w-col-big-mobile-1 {\n    width: 8.33333333%; }\n  .w-col-big-mobile-2 {\n    width: 16.66666667%; }\n  .w-col-big-mobile-3 {\n    width: 25%; }\n  .w-col-big-mobile-4 {\n    width: 33.33333333%; }\n  .w-col-big-mobile-5 {\n    width: 41.66666667%; }\n  .w-col-big-mobile-6 {\n    width: 50%; }\n  .w-col-big-mobile-7 {\n    width: 58.33333333%; }\n  .w-col-big-mobile-8 {\n    width: 66.66666667%; }\n  .w-col-big-mobile-9 {\n    width: 75%; }\n  .w-col-big-mobile-10 {\n    width: 83.33333333%; }\n  .w-col-big-mobile-11 {\n    width: 91.66666667%; }\n  .w-col-big-mobile-12 {\n    width: 100%; }\n  .w-col-big-mobile-push-1 {\n    left: 8.33333333%; }\n  .w-col-big-mobile-push-2 {\n    left: 16.66666667%; }\n  .w-col-big-mobile-push-3 {\n    left: 100%; }\n  .w-col-big-mobile-push-4 {\n    left: 33.33333333%; }\n  .w-col-big-mobile-push-5 {\n    left: 41.66666667%; }\n  .w-col-big-mobile-push-6 {\n    left: 50%; }\n  .w-col-big-mobile-push-7 {\n    left: 58.33333333%; }\n  .w-col-big-mobile-push-8 {\n    left: 66.66666667%; }\n  .w-col-big-mobile-push-9 {\n    left: 75%; }\n  .w-col-big-mobile-push-10 {\n    left: 83.33333333%; }\n  .w-col-big-mobile-push-11 {\n    left: 91.66666667%; }\n  .w-col-big-mobile-pull-1 {\n    right: 8.33333333%; }\n  .w-col-big-mobile-pull-2 {\n    right: 16.66666667%; }\n  .w-col-big-mobile-pull-3 {\n    right: 100%; }\n  .w-col-big-mobile-pull-4 {\n    right: 33.33333333%; }\n  .w-col-big-mobile-pull-5 {\n    right: 41.66666667%; }\n  .w-col-big-mobile-pull-6 {\n    right: 50%; }\n  .w-col-big-mobile-pull-7 {\n    right: 58.33333333%; }\n  .w-col-big-mobile-pull-8 {\n    right: 66.66666667%; }\n  .w-col-big-mobile-pull-9 {\n    right: 75%; }\n  .w-col-big-mobile-pull-10 {\n    right: 83.33333333%; }\n  .w-col-big-mobile-pull-11 {\n    right: 91.66666667%; }\n  .w-col-big-mobile-offset-1 {\n    margin-left: 8.33333333%; }\n  .w-col-big-mobile-offset-2 {\n    margin-left: 16.66666667%; }\n  .w-col-big-mobile-offset-3 {\n    margin-left: 100%; }\n  .w-col-big-mobile-offset-4 {\n    margin-left: 33.33333333%; }\n  .w-col-big-mobile-offset-5 {\n    margin-left: 41.66666667%; }\n  .w-col-big-mobile-offset-6 {\n    margin-left: 50%; }\n  .w-col-big-mobile-offset-7 {\n    margin-left: 58.33333333%; }\n  .w-col-big-mobile-offset-8 {\n    margin-left: 66.66666667%; }\n  .w-col-big-mobile-offset-9 {\n    margin-left: 75%; }\n  .w-col-big-mobile-offset-10 {\n    margin-left: 83.33333333%; }\n  .w-col-big-mobile-offset-11 {\n    margin-left: 91.66666667%; } }\n\n@media screen and (max-width: 479px) {\n  .w-container {\n    max-width: none; }\n  .w-hidden-main, .w-hidden-medium, .w-hidden-small {\n    display: inherit !important; }\n  .w-hidden-tiny {\n    display: none !important; }\n  .w-col {\n    width: 100%; }\n  .w-col-tiny-0 {\n    width: 0%; }\n  .w-col-tiny-1 {\n    width: 8.33333333%; }\n  .w-col-tiny-2 {\n    width: 16.66666667%; }\n  .w-col-tiny-3 {\n    width: 25%; }\n  .w-col-tiny-4 {\n    width: 33.33333333%; }\n  .w-col-tiny-5 {\n    width: 41.66666667%; }\n  .w-col-tiny-6 {\n    width: 50%; }\n  .w-col-tiny-7 {\n    width: 58.33333333%; }\n  .w-col-tiny-8 {\n    width: 66.66666667%; }\n  .w-col-tiny-9 {\n    width: 75%; }\n  .w-col-tiny-10 {\n    width: 83.33333333%; }\n  .w-col-tiny-11 {\n    width: 91.66666667%; }\n  .w-col-tiny-12 {\n    width: 100%; }\n  .w-col-tiny-push-1 {\n    left: 8.33333333%; }\n  .w-col-tiny-push-2 {\n    left: 16.66666667%; }\n  .w-col-tiny-push-3 {\n    left: 100%; }\n  .w-col-tiny-push-4 {\n    left: 33.33333333%; }\n  .w-col-tiny-push-5 {\n    left: 41.66666667%; }\n  .w-col-tiny-push-6 {\n    left: 50%; }\n  .w-col-tiny-push-7 {\n    left: 58.33333333%; }\n  .w-col-tiny-push-8 {\n    left: 66.66666667%; }\n  .w-col-tiny-push-9 {\n    left: 75%; }\n  .w-col-tiny-push-10 {\n    left: 83.33333333%; }\n  .w-col-tiny-push-11 {\n    left: 91.66666667%; }\n  .w-col-tiny-pull-1 {\n    right: 8.33333333%; }\n  .w-col-tiny-pull-2 {\n    right: 16.66666667%; }\n  .w-col-tiny-pull-3 {\n    right: 100%; }\n  .w-col-tiny-pull-4 {\n    right: 33.33333333%; }\n  .w-col-tiny-pull-5 {\n    right: 41.66666667%; }\n  .w-col-tiny-pull-6 {\n    right: 50%; }\n  .w-col-tiny-pull-7 {\n    right: 58.33333333%; }\n  .w-col-tiny-pull-8 {\n    right: 66.66666667%; }\n  .w-col-tiny-pull-9 {\n    right: 75%; }\n  .w-col-tiny-pull-10 {\n    right: 83.33333333%; }\n  .w-col-tiny-pull-11 {\n    right: 91.66666667%; }\n  .w-col-tiny-offset-1 {\n    margin-left: 8.33333333%; }\n  .w-col-tiny-offset-2 {\n    margin-left: 16.66666667%; }\n  .w-col-tiny-offset-3 {\n    margin-left: 100%; }\n  .w-col-tiny-offset-4 {\n    margin-left: 33.33333333%; }\n  .w-col-tiny-offset-5 {\n    margin-left: 41.66666667%; }\n  .w-col-tiny-offset-6 {\n    margin-left: 50%; }\n  .w-col-tiny-offset-7 {\n    margin-left: 58.33333333%; }\n  .w-col-tiny-offset-8 {\n    margin-left: 66.66666667%; }\n  .w-col-tiny-offset-9 {\n    margin-left: 75%; }\n  .w-col-tiny-offset-10 {\n    margin-left: 83.33333333%; }\n  .w-col-tiny-offset-11 {\n    margin-left: 91.66666667%; } }\n\n.w-widget {\n  position: relative; }\n\n.w-widget-map {\n  width: 100%;\n  height: 400px; }\n  .w-widget-map label {\n    width: auto;\n    display: inline; }\n  .w-widget-map img {\n    max-width: inherit; }\n  .w-widget-map .gm-style-iw {\n    width: 90% !important;\n    height: auto !important;\n    top: 7px !important;\n    left: 6% !important;\n    display: inline;\n    text-align: center;\n    overflow: hidden; }\n    .w-widget-map .gm-style-iw + div {\n      display: none; }\n\n.w-widget-twitter, .w-widget-gplus {\n  overflow: hidden; }\n\n.w-slider {\n  position: relative;\n  height: 300px;\n  text-align: center;\n  background: rgba(153, 153, 153, 0.5);\n  clear: both;\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent; }\n\n.w-slider-mask {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  z-index: 1;\n  left: 0;\n  right: 0;\n  height: 100%;\n  white-space: nowrap; }\n\n.w-slide {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  width: 100%;\n  height: 100%;\n  white-space: normal;\n  text-align: left; }\n\n.w-slider-nav {\n  position: absolute;\n  z-index: 2;\n  top: auto;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  padding-top: 10px;\n  height: 40px;\n  text-align: center;\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent; }\n  .w-slider-nav.w-round > div {\n    -webkit-border-radius: 100%;\n    -webkit-background-clip: padding-box;\n    -moz-border-radius: 100%;\n    -moz-background-clip: padding;\n    border-radius: 100%;\n    background-clip: padding-box; }\n  .w-slider-nav.w-num > div {\n    width: auto;\n    height: auto;\n    padding: 0.2em 0.5em;\n    font-size: inherit;\n    line-height: inherit; }\n  .w-slider-nav.w-shadow > div {\n    box-shadow: 0 0 3px rgba(51, 51, 51, 0.4); }\n\n.w-slider-nav-invert {\n  color: #fff; }\n  .w-slider-nav-invert > div {\n    background-color: rgba(34, 34, 34, 0.4); }\n    .w-slider-nav-invert > div.w-active {\n      background-color: #222; }\n\n.w-slider-dot {\n  position: relative;\n  display: inline-block;\n  width: 1em;\n  height: 1em;\n  background-color: rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  margin: 0 3px 0.5em;\n  -webkit-transition: background-color 100ms, color 100ms;\n  transition: background-color 100ms, color 100ms; }\n  .w-slider-dot.w-active {\n    background-color: #fff; }\n\n.w-slider-arrow-left, .w-slider-arrow-right {\n  position: absolute;\n  width: 80px;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  cursor: pointer;\n  overflow: hidden;\n  color: white;\n  font-size: 40px;\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.w-slider-arrow-left [class^=\"w-icon-\"], .w-slider-arrow-right [class^=\"w-icon-\"], .w-slider-arrow-left [class*=\" w-icon-\"], .w-slider-arrow-right [class*=\" w-icon-\"] {\n  position: absolute; }\n\n.w-slider-arrow-left {\n  z-index: 3;\n  right: auto; }\n\n.w-slider-arrow-right {\n  z-index: 4;\n  left: auto; }\n\n.w-icon-slider-left, .w-icon-slider-right {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  width: 1em;\n  height: 1em; }\n\n.w-dropdown {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  z-index: 900; }\n\n.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {\n  position: relative;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto;\n  white-space: nowrap; }\n\n.w-dropdown-toggle {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  display: inline-block;\n  cursor: pointer;\n  padding-right: 40px; }\n  .w-dropdown-toggle:focus {\n    outline: 0; }\n\n.w-icon-dropdown-toggle {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  margin-right: 20px;\n  width: 1em;\n  height: 1em; }\n\n.w-dropdown-list {\n  position: absolute;\n  background: #f2f2f2;\n  display: none;\n  min-width: 100%; }\n  .w-dropdown-list.w--dropdown-open {\n    display: block; }\n\n.w-dropdown-link {\n  padding: 10px 20px;\n  display: block; }\n  .w-dropdown-link.w--current {\n    color: #339ce1; }\n\n.w-nav[data-collapse=\"all\"] .w-dropdown, .w-nav[data-collapse=\"all\"] .w-dropdown-toggle {\n  display: block; }\n\n.w-nav[data-collapse=\"all\"] .w-dropdown-list {\n  position: static; }\n\n@media screen and (max-width: 991px) {\n  .w-nav[data-collapse=\"medium\"] .w-dropdown, .w-nav[data-collapse=\"medium\"] .w-dropdown-toggle {\n    display: block; }\n  .w-nav[data-collapse=\"medium\"] .w-dropdown-list {\n    position: static; } }\n\n@media screen and (max-width: 767px) {\n  .w-nav[data-collapse=\"small\"] .w-dropdown, .w-nav[data-collapse=\"small\"] .w-dropdown-toggle {\n    display: block; }\n  .w-nav[data-collapse=\"small\"] .w-dropdown-list {\n    position: static; }\n  .w-nav-brand {\n    padding-left: 10px; } }\n\n@media screen and (max-width: 479px) {\n  .w-nav[data-collapse=\"tiny\"] .w-dropdown, .w-nav[data-collapse=\"tiny\"] .w-dropdown-toggle {\n    display: block; }\n  .w-nav[data-collapse=\"tiny\"] .w-dropdown-list {\n    position: static; } }\n\n/**\n * ## Note\n * Safari (on both iOS and OS X) does not handle viewport units (vh, vw) well.\n * For example percentage units do not work on descendants of elements that\n * have any dimensions expressed in viewport units. It also doesn’t handle them at\n * all in `calc()`.\n */\n/**\n * Wrapper around all lightbox elements\n *\n * 1. Since the lightbox can receive focus, IE also gives it an outline.\n * 2. Fixes flickering on Chrome when a transition is in progress\n *    underneath the lightbox.\n */\n.w-lightbox-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  color: #fff;\n  font-family: \"Helvetica Neue\", Helvetica, Ubuntu, \"Segoe UI\", Verdana, sans-serif;\n  font-size: 17px;\n  font-weight: 300;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.9);\n  z-index: 2000;\n  outline: 0;\n  /* 1 */\n  opacity: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-transform: translate(0, 0);\n  /* 2 */\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n/** \n * Neat trick to bind the rubberband effect to our canvas instead of the whole\n * document on iOS. It also prevents a bug that causes the document underneath to scroll.\n */\n.w-lightbox-container {\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch; }\n\n.w-lightbox-content {\n  position: relative;\n  height: 100vh;\n  overflow: hidden; }\n\n.w-lightbox-view {\n  position: absolute;\n  width: 100vw;\n  height: 100vh; }\n  .w-lightbox-view:before {\n    content: \"\";\n    height: 100vh; }\n\n/* .w-lightbox-content */\n.w-lightbox-group {\n  height: 86vh; }\n  .w-lightbox-group .w-lightbox-view {\n    height: 86vh; }\n    .w-lightbox-group .w-lightbox-view:before {\n      height: 86vh; }\n\n.w-lightbox-frame, .w-lightbox-view:before {\n  display: inline-block;\n  vertical-align: middle; }\n\n/*\n * 1. Remove default margin set by user-agent on the <figure> element.\n */\n.w-lightbox-figure {\n  position: relative;\n  margin: 0;\n  /* 1 */ }\n\n.w-lightbox-group .w-lightbox-figure {\n  cursor: pointer; }\n\n/**\n * IE adds image dimensions as width and height attributes on the IMG tag,\n * but we need both width and height to be set to auto to enable scaling.\n */\n.w-lightbox-img {\n  width: auto;\n  height: auto;\n  max-width: none; }\n\n.w-lightbox-image {\n  display: block;\n  max-width: 100vw;\n  max-height: 100vh; }\n\n.w-lightbox-group .w-lightbox-image {\n  max-height: 86vh; }\n\n.w-lightbox-caption {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: .5em 1em;\n  background: rgba(0, 0, 0, 0.4);\n  text-align: left;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.w-lightbox-embed {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.w-lightbox-control {\n  position: absolute;\n  top: 0;\n  width: 4em;\n  background-size: 24px;\n  background-repeat: no-repeat;\n  background-position: center;\n  cursor: pointer;\n  opacity: 0;\n  -webkit-transition: all .3s;\n  transition: all .3s; }\n\n.w-lightbox-left {\n  bottom: 0;\n  left: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-20 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0 0h5v23h23v5h-28z\" opacity=\".4\"/><path d=\"m1 1h3v23h23v3h-26z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yMCAwIDI0IDQwIiB3aWR0aD0iMjQiIGhlaWdodD0iNDAiPjxnIHRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHBhdGggZD0ibTAgMGg1djIzaDIzdjVoLTI4eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDN2MjNoMjN2M2gtMjZ6IiBmaWxsPSIjZmZmIi8+PC9nPjwvc3ZnPg==\"); }\n\n.w-lightbox-right {\n  right: 0;\n  bottom: 0;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 24 40\" width=\"24\" height=\"40\"><g transform=\"rotate(45)\"><path d=\"m0-0h28v28h-5v-23h-23z\" opacity=\".4\"/><path d=\"m1 1h26v26h-3v-23h-23z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMjQgNDAiIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMC0waDI4djI4aC01di0yM2gtMjN6IiBvcGFjaXR5PSIuNCIvPjxwYXRoIGQ9Im0xIDFoMjZ2MjZoLTN2LTIzaC0yM3oiIGZpbGw9IiNmZmYiLz48L2c+PC9zdmc+\"); }\n\n/*\n * Without specifying the with and height inside the SVG, all versions of IE render the icon too small.\n * The bug does not seem to manifest itself if the elements are tall enough such as the above arrows.\n * (http://stackoverflow.com/questions/16092114/background-size-differs-in-internet-explorer)\n */\n.w-lightbox-close {\n  right: 0;\n  height: 2.6em;\n  /* <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-4 0 18 17\" width=\"18\" height=\"17\"><g transform=\"rotate(45)\"><path d=\"m0 0h7v-7h5v7h7v5h-7v7h-5v-7h-7z\" opacity=\".4\"/><path d=\"m1 1h7v-7h3v7h7v3h-7v7h-3v-7h-7z\" fill=\"#fff\"/></g></svg> */\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=\");\n  background-size: 18px; }\n\n/**\n * 1. All IE versions add extra space at the bottom without this.\n */\n.w-lightbox-strip {\n  padding: 0 1vh;\n  line-height: 0;\n  /* 1 */\n  white-space: nowrap;\n  overflow-x: auto;\n  overflow-y: hidden; }\n\n/*\n * 1. We use content-box to avoid having to do `width: calc(10vh + 2vw)`\n *    which doesn’t work in Safari anyway.\n * 2. Chrome renders images pixelated when switching to GPU. Making sure\n *    the parent is also rendered on the GPU (by setting translate3d for\n *    example) fixes this behavior.\n */\n.w-lightbox-item {\n  display: inline-block;\n  width: 10vh;\n  padding: 2vh 1vh;\n  box-sizing: content-box;\n  /* 1 */\n  cursor: pointer;\n  -webkit-transform: translate3d(0, 0, 0);\n  /* 2 */ }\n\n.w-lightbox-active {\n  opacity: .3; }\n\n.w-lightbox-thumbnail {\n  position: relative;\n  height: 10vh;\n  background: #222;\n  overflow: hidden; }\n\n.w-lightbox-thumbnail-image {\n  position: absolute;\n  top: 0;\n  left: 0; }\n\n.w-lightbox-thumbnail .w-lightbox-tall {\n  top: 50%;\n  width: 100%;\n  -webkit-transform: translate(0, -50%);\n  transform: translate(0, -50%); }\n\n.w-lightbox-thumbnail .w-lightbox-wide {\n  left: 50%;\n  height: 100%;\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0); }\n\n/*\n * Spinner\n * \n * Absolute pixel values are used to avoid rounding errors that would cause\n * the white spinning element to be misaligned with the track.\n */\n.w-lightbox-spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  box-sizing: border-box;\n  width: 40px;\n  height: 40px;\n  margin-top: -20px;\n  margin-left: -20px;\n  border: 5px solid rgba(0, 0, 0, 0.4);\n  border-radius: 50%;\n  -webkit-animation: spin .8s infinite linear;\n  animation: spin .8s infinite linear; }\n  .w-lightbox-spinner:after {\n    content: \"\";\n    position: absolute;\n    top: -4px;\n    right: -4px;\n    bottom: -4px;\n    left: -4px;\n    border: 3px solid transparent;\n    border-bottom-color: #fff;\n    border-radius: 50%; }\n\n/*\n * Utility classes\n */\n.w-lightbox-hide {\n  display: none; }\n\n.w-lightbox-visible {\n  opacity: 1; }\n\n.w-lightbox-noscroll {\n  overflow: hidden; }\n\n@media (min-width: 1025px) {\n  .w-lightbox-content {\n    height: 96vh;\n    margin-top: 2vh; }\n  .w-lightbox-view {\n    height: 96vh; }\n    .w-lightbox-view:before {\n      height: 96vh; }\n  /* .w-lightbox-content */\n  .w-lightbox-group {\n    height: 84vh; }\n    .w-lightbox-group .w-lightbox-view {\n      height: 84vh; }\n      .w-lightbox-group .w-lightbox-view:before {\n        height: 84vh; }\n  .w-lightbox-image {\n    max-width: 96vw;\n    max-height: 96vh; }\n  .w-lightbox-group .w-lightbox-image {\n    max-height: 84vh; }\n  .w-lightbox-left, .w-lightbox-right {\n    opacity: .5; }\n  .w-lightbox-close {\n    opacity: .8; }\n  .w-lightbox-control:hover {\n    opacity: 1; } }\n\n.w-lightbox-inactive {\n  opacity: 0; }\n  .w-lightbox-inactive:hover {\n    opacity: 0; }\n\n.w-nav {\n  position: relative;\n  background: #BBB;\n  z-index: 1000; }\n  .w-nav:before {\n    content: \" \";\n    display: table; }\n  .w-nav:after {\n    content: \" \";\n    display: table;\n    clear: both; }\n\n.w-nav-brand {\n  position: relative;\n  float: left;\n  text-decoration: none;\n  color: #222; }\n\n.w-nav-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  color: #222;\n  padding: 20px;\n  text-align: left;\n  margin-left: auto;\n  margin-right: auto; }\n  .w-nav-link.w--current {\n    color: #339ce1; }\n\n.w-nav-menu {\n  position: relative;\n  float: right; }\n\n.w--nav-menu-open {\n  display: block !important;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #999;\n  text-align: center;\n  overflow: visible;\n  min-width: 200px; }\n\n.w-nav-overlay .w--nav-menu-open {\n  position: static;\n  width: 100%; }\n\n.w--nav-link-open {\n  display: block;\n  position: relative; }\n\n.w-nav-overlay {\n  position: absolute;\n  overflow: hidden;\n  display: none;\n  top: 100%;\n  left: 0;\n  right: 0;\n  width: 100%; }\n\n.w-nav[data-animation=\"default\"] .w--nav-menu-open {\n  top: 100%; }\n\n.w-nav[data-animation=\"over-left\"] .w-nav-overlay {\n  width: auto;\n  right: auto;\n  z-index: 1;\n  top: 0; }\n\n.w-nav[data-animation=\"over-left\"] .w--nav-menu-open {\n  right: auto;\n  z-index: 1;\n  top: 0; }\n\n.w-nav[data-animation=\"over-right\"] .w-nav-overlay {\n  width: auto;\n  left: auto;\n  z-index: 1;\n  top: 0; }\n\n.w-nav[data-animation=\"over-right\"] .w--nav-menu-open {\n  left: auto;\n  z-index: 1;\n  top: 0; }\n\n.w-nav-button {\n  position: relative;\n  float: right;\n  padding: 18px;\n  font-size: 24px;\n  display: none;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  tap-highlight-color: transparent;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .w-nav-button.w--open {\n    background-color: #999;\n    color: white; }\n\n.w-nav[data-collapse=\"all\"] .w-nav-menu {\n  display: none; }\n\n.w-nav[data-collapse=\"all\"] .w-nav-button {\n  display: block; }\n\n@media screen and (max-width: 991px) {\n  .w-nav[data-collapse=\"medium\"] .w-nav-menu {\n    display: none; }\n  .w-nav[data-collapse=\"medium\"] .w-nav-button {\n    display: block; } }\n\n@media screen and (max-width: 767px) {\n  .w-nav[data-collapse=\"small\"] .w-nav-menu {\n    display: none; }\n  .w-nav[data-collapse=\"small\"] .w-nav-button {\n    display: block; }\n  .w-nav-brand {\n    padding-left: 10px; } }\n\n@media screen and (max-width: 479px) {\n  .w-nav[data-collapse=\"tiny\"] .w-nav-menu {\n    display: none; }\n  .w-nav[data-collapse=\"tiny\"] .w-nav-button {\n    display: block; } }\n\n.w-tabs {\n  position: relative; }\n  .w-tabs:before {\n    content: \" \";\n    display: table; }\n  .w-tabs:after {\n    content: \" \";\n    display: table;\n    clear: both; }\n\n.w-tab-menu {\n  position: relative; }\n\n.w-tab-link {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  text-decoration: none;\n  padding: 8px 30px;\n  text-align: left;\n  cursor: pointer;\n  background-color: #E8E8E8; }\n  .w-tab-link.w--current {\n    background-color: #BCD3F3; }\n\n.w-tab-content {\n  position: relative;\n  display: block;\n  overflow: hidden; }\n\n.w-tab-pane {\n  position: relative;\n  display: none; }\n\n.w--tab-active {\n  display: block; }\n\n@media screen and (max-width: 479px) {\n  .w-tab-link {\n    display: block; } }\n\n.w-ix-emptyfix:after {\n  content: \"\"; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n", ""]);
	
	// exports


/***/ },
/* 10 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["moment"] = __webpack_require__(17);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */
/***/ function(module, exports) {

	if(typeof module!=="undefined"&&typeof exports!=="undefined"&&module.exports===exports){module.exports="ng-currency"}angular.module("ng-currency",[]).directive("ngCurrency",["$filter","$locale",function(b,a){return{require:"ngModel",scope:{min:"=min",max:"=max",currencySymbol:"@",ngRequired:"=ngRequired",fraction:"=fraction"},link:function(k,f,j,e){if(j.ngCurrency==="false"){return}var l=(typeof k.fraction!=="undefined")?k.fraction:2;function d(m){return RegExp("\\d|\\-|\\"+m,"g")}function c(m){return RegExp("\\-{0,1}((\\"+m+")|([0-9]{1,}\\"+m+"?))&?[0-9]{0,"+l+"}","g")}function g(r){r=String(r);var n=a.NUMBER_FORMATS.DECIMAL_SEP;var m=null;var q=b("currency")("-1",i(),k.fraction);var p=q.indexOf("1");var o=q.substring(0,p);r=r.replace(o,"-");if(RegExp("^-[\\s]*$","g").test(r)){r="-0"}if(d(n).test(r)){m=r.match(d(n)).join("").match(c(n));m=m?m[0].replace(n,"."):null}return m}function i(){if(angular.isDefined(k.currencySymbol)){return k.currencySymbol}else{return a.NUMBER_FORMATS.CURRENCY_SYM}}function h(){var n=e.$formatters,m=n.length;var o=e.$$rawModelValue;while(m--){o=n[m](o)}e.$setViewValue(o);e.$render()}e.$parsers.push(function(n){var m=g(n);if(m=="."||m=="-."){m=".0"}return parseFloat(m)});f.on("blur",function(){e.$commitViewValue();h()});e.$formatters.unshift(function(m){return b("currency")(m,i(),k.fraction)});e.$validators.min=function(m){if(!k.ngRequired&&isNaN(m)){return true}if(typeof k.min!=="undefined"){return m>=parseFloat(k.min)}return true};e.$validators.max=function(m){if(!k.ngRequired&&isNaN(m)){return true}if(typeof k.max!=="undefined"){return m<=parseFloat(k.max)}return true};e.$validators.fraction=function(m){if(!!m&&isNaN(m)){return false}return true}}}}]);

/***/ },
/* 123 */,
/* 124 */,
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(126);
	
	var _constants2 = _interopRequireDefault(_constants);
	
	var _directives = __webpack_require__(133);
	
	var _directives2 = _interopRequireDefault(_directives);
	
	var _services = __webpack_require__(158);
	
	var _services2 = _interopRequireDefault(_services);
	
	var _filters = __webpack_require__(216);
	
	var _filters2 = _interopRequireDefault(_filters);
	
	var _decorators = __webpack_require__(217);
	
	var _decorators2 = _interopRequireDefault(_decorators);
	
	var _interceptors = __webpack_require__(219);
	
	var _interceptors2 = _interopRequireDefault(_interceptors);
	
	var _config = __webpack_require__(222);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('si.common', [_constants2.default.name, _directives2.default.name, _services2.default.name, _filters2.default.name, _decorators2.default.name, _interceptors2.default.name, _config2.default.name]);

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _loadingTypes = __webpack_require__(127);
	
	var _languages = __webpack_require__(128);
	
	var _apiUrls = __webpack_require__(129);
	
	var _patterns = __webpack_require__(130);
	
	var _globals = __webpack_require__(131);
	
	var _env = __webpack_require__(132);
	
	//import { ORIGIN_TYPES }  from './origin-types';
	exports.default = angular.module('si.constants', []).constant('LOADING_TYPES', _loadingTypes.LOADING_TYPES).constant('LANGUAGES_MAP', _languages.LANGUAGES_MAP)
	//.constant('ORIGIN_TYPES', ORIGIN_TYPES)
	.constant('API_URLS', _apiUrls.API_URLS).constant('PATTERNS', _patterns.PATTERNS).constant('GLOBALS', _globals.GLOBALS).constant('ENV', _env.ENV);

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LOADING_TYPES = exports.LOADING_TYPES = {
	  'all': 0,
	  'preLogin': 2,
	  'postLogin': 1
	};

/***/ },
/* 128 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var LANGUAGES_MAP = exports.LANGUAGES_MAP = {
	  'en-US': 1, // English - United States
	  'he-IL': 2, // Hebrew - Israel
	  'ja-JP': 3, // Japanese - Japan
	  'ar-EG': 4, // Arabic - Egypt
	  'zh-CN': 5, // Chinese - China
	  'es-ES': 6, // Spanish - Spain
	  'ru-RU': 7 // Russian - Russia
	};

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var API_URLS = exports.API_URLS = {
		API: ("TBD")
	};

/***/ },
/* 130 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var PATTERNS = exports.PATTERNS = {
	  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
	  // 1 digit, 1 letter, minimum 8 chars and maximum 12 chars
	  password: /^(?=.*\d)(?=.*[a-zA-Z]).{8,12}$/
	};

/***/ },
/* 131 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var GLOBALS = exports.GLOBALS = {
	    SeaechResultAmount: 5
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ENV = exports.ENV = ({"localhost":false,"development":true,"testing":false,"staging":false,"bt":false,"production":false});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _ngMin = __webpack_require__(134);
	
	var _ngMax = __webpack_require__(135);
	
	var _toggleCurrency = __webpack_require__(136);
	
	var _toggleVisible = __webpack_require__(138);
	
	exports.default = angular.module('si.directives', []).directive({
	  ngMin: _ngMin.ngMin,
	  ngMax: _ngMax.ngMax,
	  toggleCurrency: _toggleCurrency.toggleCurrency,
	  siToggleVisible: _toggleVisible.siToggleVisible
	});

/***/ },
/* 134 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ngMin = ngMin;
	function ngMin() {
	    return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function link(scope, elem, attr, ctrl) {
	
	            scope.$watch(attr.ngMin, function () {
	                ctrl.$setViewValue(ctrl.$viewValue);
	            });
	
	            var minValidator = function minValidator(value) {
	
	                var min = scope.$eval(attr.ngMin) || 0;
	
	                if (!isEmpty(value) && parseFloat(value) < parseFloat(min)) {
	                    ctrl.$setValidity('ngMin', false);
	                    return value;
	                } else {
	                    ctrl.$setValidity('ngMin', true);
	                    return value;
	                }
	            };
	
	            ctrl.$parsers.push(minValidator);
	            ctrl.$formatters.push(minValidator);
	        }
	    };
	};
	
	function isEmpty(value) {
	    return angular.isUndefined(value) || value === '' || value === null || value !== value;
	}

/***/ },
/* 135 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ngMax = ngMax;
	function ngMax() {
	    return {
	        restrict: 'A',
	        require: 'ngModel',
	        link: function link(scope, elem, attr, ctrl) {
	
	            scope.$watch(attr.ngMax, function () {
	                ctrl.$setViewValue(ctrl.$viewValue);
	            });
	
	            var maxValidator = function maxValidator(value) {
	
	                var max = scope.$eval(attr.ngMax) || Infinity;
	
	                if (!isEmpty(value) && parseFloat(value) > parseFloat(max)) {
	                    ctrl.$setValidity('ngMax', false);
	                    return value;
	                } else {
	                    ctrl.$setValidity('ngMax', true);
	                    return value;
	                }
	            };
	
	            ctrl.$parsers.push(maxValidator);
	            ctrl.$formatters.push(maxValidator);
	        }
	    };
	};
	
	function isEmpty(value) {
	    return angular.isUndefined(value) || value === '' || value === null || value !== value;
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	exports.toggleCurrency = toggleCurrency;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ToggleCurrencyController =
	
	/* @ngInject */
	['$compile', function ToggleCurrencyController($compile) {
	    (0, _classCallCheck3.default)(this, ToggleCurrencyController);
	
	    this.$compile = $compile;
	}];
	
	function link(scope, element, attrs, ctrl) {
	
	    var onFocus = function onFocus(evt) {
	        element.attr("ng-currency", "false");
	        ctrl.$compile(element)(scope);
	    };
	
	    var onBlur = function onBlur(evt) {
	        element.attr("ng-currency", "true");
	        ctrl.$compile(element)(scope);
	    };
	
	    element.off('focus').on('focus', onFocus);
	    element.off('blur').on('blur', onBlur);
	}
	
	function toggleCurrency() {
	    return {
	        restrict: 'A',
	        controller: ToggleCurrencyController,
	        link: link
	    };
	}

/***/ },
/* 137 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	
	exports.default = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.siToggleVisible = siToggleVisible;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This directive is used to toggle a target visibility state
	 * It adds a click listener on the `document`
	 * When clicked outside the target, it calls the provided toggle handler
	 *
	 * Interface
	 * ===========
	 *
	 * `toggle-model` {boolean} - The model value to watch for changes
	 * Defines if the target is currently visible or not
	 *
	 * `on-focus-lost` {Function} - A callback to call when clicked outside of target
	 */
	
	var ToggleVisibleController = function () {
	
	  /* @ngInject */
	
	  ToggleVisibleController.$inject = ['$timeout'];
	  function ToggleVisibleController($timeout) {
	    (0, _classCallCheck3.default)(this, ToggleVisibleController);
	
	    this.$timeout = $timeout;
	
	    this.validate();
	  }
	
	  (0, _createClass3.default)(ToggleVisibleController, [{
	    key: 'validate',
	    value: function validate() {
	      if (!_.isBoolean(this.toggleModel)) {
	        throw new TypeError('`toggle-model` must be a boolean property');
	      }
	    }
	  }]);
	  return ToggleVisibleController;
	}();
	
	function linkFn(scope, element, attrs, ctrl) {
	  var documentElm = angular.element(document);
	  var isVisible = false;
	
	  // When the target is open, close it if clicked outside of it
	  var documentClickHandler = function documentClickHandler(evt) {
	    var target = evt.target;
	
	    // If already closed by some other trigger, do nothing
	    if (!isVisible) {
	      return;
	    }
	
	    if (element[0] !== target && !element[0].contains(evt.target)) {
	      // Execute provided callback handler
	      ctrl.onFocusLost();
	      scope.$applyAsync();
	    }
	  };
	
	  // Watch for the provided target model changes
	  scope.$watch(function () {
	    return ctrl.toggleModel;
	  }, function (newValue, oldValue) {
	    if (newValue === oldValue) {
	      return;
	    }
	
	    // Used for preventing double handler action when the model changes from elsewhere
	    isVisible = newValue;
	
	    // Delay to avoid racing conditions
	    ctrl.$timeout(function () {
	      // If the target is visible, listen to clicks on the document
	      if (newValue) {
	        if (document.querySelector('.more')) {
	
	          //Fix for japanese device, have to set styling manually otherwise doesn't look right
	          setTimeout(function () {
	            document.querySelector('.more').style.display = 'inline-block';
	          });
	        }
	
	        return documentElm.on('click', documentClickHandler);
	      }
	
	      documentElm.off('click', documentClickHandler);
	    });
	  });
	
	  // Cleanup
	  scope.$on('$destroy', function () {
	    documentElm.off('click', documentClickHandler);
	  });
	}
	
	function siToggleVisible() {
	  return {
	    // Using Element to prevent an error with multiple isolated scopes
	    restrict: 'E',
	    scope: {},
	    bindToController: {
	      toggleModel: '=',
	      onFocusLost: '&'
	    },
	    controller: ToggleVisibleController,
	    controllerAs: 'ToggleVisible',
	    link: linkFn
	  };
	}

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _defineProperty = __webpack_require__(140);
	
	var _defineProperty2 = _interopRequireDefault(_defineProperty);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(141), __esModule: true };

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	var $Object = __webpack_require__(145).Object;
	module.exports = function defineProperty(it, key, desc){
	  return $Object.defineProperty(it, key, desc);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(143);
	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	$export($export.S + $export.F * !__webpack_require__(153), 'Object', {defineProperty: __webpack_require__(149).f});

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(144)
	  , core      = __webpack_require__(145)
	  , ctx       = __webpack_require__(146)
	  , hide      = __webpack_require__(148)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , IS_WRAP   = type & $export.W
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE]
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
	    , key, own, out;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    if(own && key in exports)continue;
	    // export native or passed
	    out = own ? target[key] : source[key];
	    // prevent global pollution for namespaces
	    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
	    // bind timers to global for call from export context
	    : IS_BIND && own ? ctx(out, global)
	    // wrap global constructors for prevent change them in library
	    : IS_WRAP && target[key] == out ? (function(C){
	      var F = function(a, b, c){
	        if(this instanceof C){
	          switch(arguments.length){
	            case 0: return new C;
	            case 1: return new C(a);
	            case 2: return new C(a, b);
	          } return new C(a, b, c);
	        } return C.apply(this, arguments);
	      };
	      F[PROTOTYPE] = C[PROTOTYPE];
	      return F;
	    // make static versions for prototype methods
	    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
	    if(IS_PROTO){
	      (exports.virtual || (exports.virtual = {}))[key] = out;
	      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
	      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
	    }
	  }
	};
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library` 
	module.exports = $export;

/***/ },
/* 144 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 145 */
/***/ function(module, exports) {

	var core = module.exports = {version: '2.4.0'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(147);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 147 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var dP         = __webpack_require__(149)
	  , createDesc = __webpack_require__(157);
	module.exports = __webpack_require__(153) ? function(object, key, value){
	  return dP.f(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var anObject       = __webpack_require__(150)
	  , IE8_DOM_DEFINE = __webpack_require__(152)
	  , toPrimitive    = __webpack_require__(156)
	  , dP             = Object.defineProperty;
	
	exports.f = __webpack_require__(153) ? Object.defineProperty : function defineProperty(O, P, Attributes){
	  anObject(O);
	  P = toPrimitive(P, true);
	  anObject(Attributes);
	  if(IE8_DOM_DEFINE)try {
	    return dP(O, P, Attributes);
	  } catch(e){ /* empty */ }
	  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	  if('value' in Attributes)O[P] = Attributes.value;
	  return O;
	};

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(151);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = !__webpack_require__(153) && !__webpack_require__(154)(function(){
	  return Object.defineProperty(__webpack_require__(155)('div'), 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(154)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 154 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(151)
	  , document = __webpack_require__(144).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(151);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 157 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _auth = __webpack_require__(159);
	
	var _signUp = __webpack_require__(160);
	
	var _network = __webpack_require__(161);
	
	var _translationLoader = __webpack_require__(162);
	
	exports.default = angular.module('si.services', []).service('Auth', _auth.Auth).service('Signup', _signUp.Signup).service('Network', _network.Network)
	
	//Factories
	.factory('translationLoader', _translationLoader.translationLoader);
	
	//Factories

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Auth = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Auth = exports.Auth = function () {
	
	    /* @ngInject */
	
	    Auth.$inject = ['$q', '$translate', '$sessionStorage', 'Network'];
	    function Auth($q, $translate, $sessionStorage, Network) {
	        (0, _classCallCheck3.default)(this, Auth);
	
	        this.$q = $q;
	        this.$translate = $translate;
	        this.$sessionStorage = $sessionStorage;
	        this.Network = Network;
	        this.auth = firebase.auth();
	    }
	
	    (0, _createClass3.default)(Auth, [{
	        key: 'login',
	        value: function login(credentials) {
	            var deferred = this.$q.defer();
	            var userCredentials = {
	                'UserName': credentials.email,
	                'PassWord': credentials.password
	            };
	
	            this.auth.signInWithEmailAndPassword(credentials.email, credentials.password).then(function (value) {
	                //success
	                deferred.resolve(value);
	            }, function (reason) {
	                var failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
	                deferred.reject(failureMessage);
	            });
	
	            return deferred.promise;
	        }
	    }, {
	        key: 'fbLogin',
	        value: function fbLogin() {
	            var deferred = this.$q.defer();
	
	            // First, we perform the signInWithRedirect.
	            // Creates the provider object.
	            var provider = new firebase.auth.FacebookAuthProvider();
	            // You can add additional scopes to the provider:
	            provider.addScope('email');
	            provider.addScope('user_friends');
	            // Sign in with redirect:
	            this.auth.signInWithRedirect(provider);
	            ////////////////////////////////////////////////////////////
	            // The user is redirected to the provider's sign in flow...
	            ////////////////////////////////////////////////////////////
	            // Then redirected back to the app, where we check the redirect result:
	            this.auth.getRedirectResult().then(function (result) {
	                // The firebase.User instance:
	                var user = result.user;
	                // The Facebook firebase.auth.AuthCredential containing the Facebook
	                // access token:
	                var credential = result.credential;
	                deferred.resolve(value);
	            }, function (error) {
	                // The provider's account email, can be used in case of
	                // auth/account-exists-with-different-credential to fetch the providers
	                // linked to the email:
	                var email = error.email;
	                // The provider's credential:
	                var credential = error.credential;
	                // In case of auth/account-exists-with-different-credential error,
	                // you can fetch the providers using this:
	                if (error.code === 'auth/account-exists-with-different-credential') {
	                    this.auth.fetchProvidersForEmail(email).then(function (providers) {
	                        // The returned 'providers' is a list of the available providers
	                        // linked to the email address. Please refer to the guide for a more
	                        // complete explanation on how to recover from this error.
	                    });
	                }
	                var failureMessage = "auto error : errorCode " + error.code + "errorMessage: " + error.message;
	                deferred.reject(failureMessage);
	            });
	
	            return deferred.promise;
	
	            //option 2
	            /* var provider = new firebase.auth.FacebookAuthProvider();
	             provider.addScope('email');
	              firebase.auth().signInWithPopup(provider)
	             .then((value)=> {
	             //success
	             deferred.resolve(value);
	             }, (reason)=> {
	             let failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
	             deferred.reject(failureMessage);
	              });*/
	        }
	    }, {
	        key: 'signUp',
	        value: function signUp(credentials) {
	            var deferred = this.$q.defer();
	            var userCredentials = {
	                'UserName': credentials.email,
	                'PassWord': credentials.password
	            };
	
	            this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (value) {
	                //success
	                deferred.resolve(value);
	            }, function (reason) {
	                var failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
	                deferred.reject(failureMessage);
	            });
	
	            return deferred.promise;
	        }
	    }, {
	        key: 'resetPassword',
	        value: function resetPassword(email) {
	            var deferred = this.$q.defer();
	
	            this.auth.sendPasswordResetEmail(email).then(function (value) {
	                //success
	                deferred.resolve(value);
	            }, function (reason) {
	                var failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
	                deferred.reject(failureMessage);
	            });
	
	            return deferred.promise;
	        }
	        /**
	         *
	         * @returns {*}
	         */
	
	    }, {
	        key: 'getSearchResult',
	        value: function getSearchResult() {
	            var searchResult = this.Search.getSearchResult(this.$scope.query);
	            console.log("searchResult" + searchResult);
	            //const model = this.$localStorage.search;
	            /*    this.Search.get(model).then(Search_data => {
	             this.Search_data = Search_data;
	             return Search_data;
	             });
	             */
	        }
	    }, {
	        key: 'getToken',
	        value: function getToken() {
	            return this.$sessionStorage.authData && this.$sessionStorage.authData.Token;
	        }
	    }, {
	        key: 'setToken',
	        value: function setToken(token) {
	            this.$sessionStorage.authData = this.$sessionStorage.authData || {};
	            this.$sessionStorage.authData.Token = token;
	            this._authData = this.$sessionStorage.authData;
	        }
	    }, {
	        key: 'setUserId',
	        value: function setUserId(id) {
	            this.$sessionStorage.authData = this.$sessionStorage.authData || {};
	            this.$sessionStorage.authData.UserID = id;
	            this._authData = this.$sessionStorage.authData;
	        }
	    }, {
	        key: 'getAuthData',
	        value: function getAuthData() {
	            return this._authData;
	        }
	    }, {
	        key: 'deleteLocalStorage',
	        value: function deleteLocalStorage() {
	            delete this.$sessionStorage.authData;
	        }
	    }]);
	    return Auth;
	}();

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Signup = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Signup = exports.Signup = function () {
	
	  /* @ngInject */
	
	  Signup.$inject = ['$q', 'Auth', 'Network', 'ErrorCodes', 'ORIGIN_TYPES'];
	  function Signup($q, Auth, Network, ErrorCodes, ORIGIN_TYPES) {
	    (0, _classCallCheck3.default)(this, Signup);
	
	    this.$q = $q;
	
	    this.Auth = Auth;
	    this.Network = Network;
	    this.ErrorCodes = ErrorCodes.getErrorCodes();
	    this.ORIGIN_TYPES = ORIGIN_TYPES;
	
	    // Requests path
	    this.path = 'Signup';
	  }
	
	  (0, _createClass3.default)(Signup, [{
	    key: 'createNewUser',
	    value: function createNewUser(credentials) {
	      var _this = this;
	
	      var query = {
	        'UserName': credentials.email,
	        'PassWord': credentials.password,
	        'Origin': this.ORIGIN_TYPES.web
	      };
	
	      return this.Network.put(this.path, query).then(function (result) {
	        if (!result.Succeeded) {
	          return _this.$q.reject(_this.ErrorCodes[result.ErrorCode].TranslationKey);
	        } else {
	          return _this.$q.resolve();
	        }
	      });
	    }
	  }, {
	    key: 'resendConfirmationCode',
	    value: function resendConfirmationCode(email) {
	      var _this2 = this;
	
	      var query = {
	        'UserName': email
	      };
	
	      return this.Network.post(this.path, query).then(function (result) {
	        if (!result.Succeeded) {
	          return _this2.$q.reject(_this2.ErrorCodes[result.ErrorCode].TranslationKey);
	        } else {
	          return _this2.$q.resolve();
	        }
	      });
	    }
	  }, {
	    key: 'completeSignup',
	    value: function completeSignup(email, code) {
	      var _this3 = this;
	
	      var query = {
	        'UserName': email,
	        'ConfirmationCode': code,
	        'Origin': this.ORIGIN_TYPES.web
	      };
	
	      return this.Network.post(this.path, query).then(function (result) {
	        if (!result.Succeeded) {
	          return _this3.$q.reject(_this3.ErrorCodes[result.ErrorCode].TranslationKey);
	        } else {
	          _this3.Auth.setToken(result.Response);
	          _this3.Auth.setBrokerUrl();
	          //TODO: Remove the return and uncomment the other one after userData is integrated with BE
	          return _this3.$q.resolve();
	          //return this.$q.resolve(this.UserData.getUserData());
	        }
	      });
	    }
	  }]);
	  return Signup;
	}();

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Network = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Network = exports.Network = function () {
	
	  /* @ngInject */
	
	  Network.$inject = ['$http', 'API_URLS'];
	  function Network($http, API_URLS) {
	    (0, _classCallCheck3.default)(this, Network);
	
	    this.$http = $http;
	    this.API_URLS = API_URLS;
	
	    // Default config options for all requests
	    this._defaultOptions = {
	      // Fail the request after 30 seconds of no response
	      timeout: 30000
	    };
	
	    this._promisesCache = {
	      get: {},
	      post: {}
	    };
	  }
	
	  (0, _createClass3.default)(Network, [{
	    key: '_getUrl',
	    value: function _getUrl(path) {
	      return this.API_URLS.API + path;
	    }
	  }, {
	    key: '_getOptions',
	    value: function _getOptions(options) {
	      return _.defaults(options, this._defaultOptions);
	    }
	
	    /**
	     * Promises cache factory
	     * Returns a cached promise for a specific request or fetches a new one
	     *
	     * @param  {string}   method  Cache scope (e.g. `get`, `post`)
	     * @param  {string}   path    Cache identifier
	     * @param  {Function} fetchFn The function to run when not in cache, must return a promise
	     * @return {Object}           Cached or new promise
	     */
	
	  }, {
	    key: '_getCachedOrFetch',
	    value: function _getCachedOrFetch(method, path, fetchFn) {
	      var cacheObj = this._promisesCache[method];
	
	      if (!cacheObj[path]) {
	        cacheObj[path] = fetchFn();
	        // Remove from cache once it's resolved
	        cacheObj[path].finally(function () {
	          return cacheObj[path] = null;
	        });
	      }
	
	      return cacheObj[path];
	    }
	
	    /**
	     * Handle GET requests
	     *
	     * @param  {string} path    The partial path after the API URL
	     * @param  {Object} options Configuration to pass to $http
	     *                          `_usePendingPromise` - Internal option to use the promises cache
	     * @return {Object}         Promise
	     */
	
	  }, {
	    key: 'get',
	    value: function get(path) {
	      var _this = this;
	
	      var params = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      var url = this._getUrl(path);
	      options.params = params;
	
	      var config = this._getOptions(options);
	      var fetchFn = function fetchFn() {
	        return _this.$http.get(url, config).then(function (res) {
	          return res.data;
	        }, function (error) {
	          _this.errorCallback(error);
	        });
	      };
	
	      if (options._usePendingPromise) {
	        return this._getCachedOrFetch('get', path, fetchFn);
	      }
	
	      return fetchFn();
	    }
	
	    /**
	     * Handle POST requests
	     *
	     * @param  {string} path    The partial path after the API URL
	     * @param  {*}      data    The request payload
	     * @param  {Object} options Configuration to pass to $http
	     *                          `_usePendingPromise` - Internal option to use the promises cache
	     * @return {Object}         Promise
	     */
	
	  }, {
	    key: 'post',
	    value: function post(path, data) {
	      var _this2 = this;
	
	      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      var url = this._getUrl(path);
	      var config = this._getOptions(options);
	
	      var fetchFn = function fetchFn() {
	        return _this2.$http.post(url, data, config).then(function (res) {
	          return res.data;
	        }, function (error) {
	          _this2.errorCallback(error);
	        });
	      };
	
	      if (options._usePendingPromise) {
	        return this._getCachedOrFetch('post', path, fetchFn);
	      }
	
	      return fetchFn();
	    }
	
	    /**
	     * Handle PUT requests
	     *
	     * @param  {string} path    The partial path after the API URL
	     * @param  {*}      data    The request payload
	     * @param  {Object} options Configuration to pass to $http
	     *                          `_usePendingPromise` - Internal option to use the promises cache
	     * @return {Object}         Promise
	     */
	
	  }, {
	    key: 'put',
	    value: function put(path, data) {
	      var _this3 = this;
	
	      var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
	      var url = this._getUrl(path);
	      var config = this._getOptions(options);
	
	      var fetchFn = function fetchFn() {
	        return _this3.$http.put(url, data, config).then(function (res) {
	          return res.data;
	        }, function (error) {
	          _this3.errorCallback(error);
	        });
	      };
	
	      if (options._usePendingPromise) {
	        return this._getCachedOrFetch('put', path, fetchFn);
	      }
	
	      return fetchFn();
	    }
	  }, {
	    key: 'errorCallback',
	    value: function errorCallback(error) {
	
	      var errorObj = {
	        status: error.status,
	        description: error.statusText,
	        url: error.config.url
	      };
	
	      //this.analytics.saveAnalyticData(errorObj, 'ws');
	    }
	  }]);
	  return Network;
	}();

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _promise = __webpack_require__(163);
	
	var _promise2 = _interopRequireDefault(_promise);
	
	exports.translationLoader = translationLoader;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @ngInject */ /**
	                 * This Factory handles async loading of translation objects
	                 *
	                 * Reference:
	                 * https://github.com/angular-translate/angular-translate/wiki/Asynchronous-loading
	                 */
	
	function translationLoader() {
	  /**
	   * Fetch the translations object for a specific language (or the default one)
	   *
	   * @param  {string} lang Language code (e.g. 'en-US')
	   * @return {Object}      Promise
	   */
	  function loadTranslations(lang) {
	    //todo ran - need to implement
	    var promise = new _promise2.default(function (resolve, reject) {
	      // do a thing, possibly async, then…
	
	      if (1) {
	        resolve("Stuff worked!");
	      } else {
	        reject(Error("It broke"));
	      }
	    });
	    return promise;
	  }
	
	  /**
	   * Translations handler, called when using `$translate.use`
	   *
	   * @param  {Object} options `$translate.use` options (e.g. { key: 'en-US' })
	   * @return {Object}         Promise
	   */
	  return function (options) {
	    return loadTranslations(options.key);
	  };
	}

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = { "default": __webpack_require__(164), __esModule: true };

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(195);
	__webpack_require__(199);
	module.exports = __webpack_require__(145).Promise;

/***/ },
/* 165 */
/***/ function(module, exports) {



/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(167)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(170)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(168)
	  , defined   = __webpack_require__(169);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 168 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(171)
	  , $export        = __webpack_require__(143)
	  , redefine       = __webpack_require__(172)
	  , hide           = __webpack_require__(148)
	  , has            = __webpack_require__(173)
	  , Iterators      = __webpack_require__(174)
	  , $iterCreate    = __webpack_require__(175)
	  , setToStringTag = __webpack_require__(191)
	  , getPrototypeOf = __webpack_require__(193)
	  , ITERATOR       = __webpack_require__(192)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
	    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
	    , methods, key, IteratorPrototype;
	  // Fix native
	  if($anyNative){
	    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
	    if(IteratorPrototype !== Object.prototype){
	      // Set @@toStringTag to native iterators
	      setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if(DEF_VALUES && $native && $native.name !== VALUES){
	    VALUES_BUG = true;
	    $default = function values(){ return $native.call(this); };
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES ? $default : getMethod(VALUES),
	      keys:    IS_SET     ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 171 */
/***/ function(module, exports) {

	module.exports = true;

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(148);

/***/ },
/* 173 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 174 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var create         = __webpack_require__(176)
	  , descriptor     = __webpack_require__(157)
	  , setToStringTag = __webpack_require__(191)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(148)(IteratorPrototype, __webpack_require__(192)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	var anObject    = __webpack_require__(150)
	  , dPs         = __webpack_require__(177)
	  , enumBugKeys = __webpack_require__(189)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , Empty       = function(){ /* empty */ }
	  , PROTOTYPE   = 'prototype';
	
	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = __webpack_require__(155)('iframe')
	    , i      = enumBugKeys.length
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  __webpack_require__(190).appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
	  return createDict();
	};
	
	module.exports = Object.create || function create(O, Properties){
	  var result;
	  if(O !== null){
	    Empty[PROTOTYPE] = anObject(O);
	    result = new Empty;
	    Empty[PROTOTYPE] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : dPs(result, Properties);
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	var dP       = __webpack_require__(149)
	  , anObject = __webpack_require__(150)
	  , getKeys  = __webpack_require__(178);
	
	module.exports = __webpack_require__(153) ? Object.defineProperties : function defineProperties(O, Properties){
	  anObject(O);
	  var keys   = getKeys(Properties)
	    , length = keys.length
	    , i = 0
	    , P;
	  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)
	var $keys       = __webpack_require__(179)
	  , enumBugKeys = __webpack_require__(189);
	
	module.exports = Object.keys || function keys(O){
	  return $keys(O, enumBugKeys);
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var has          = __webpack_require__(173)
	  , toIObject    = __webpack_require__(180)
	  , arrayIndexOf = __webpack_require__(183)(false)
	  , IE_PROTO     = __webpack_require__(186)('IE_PROTO');
	
	module.exports = function(object, names){
	  var O      = toIObject(object)
	    , i      = 0
	    , result = []
	    , key;
	  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while(names.length > i)if(has(O, key = names[i++])){
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(181)
	  , defined = __webpack_require__(169);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(182);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 182 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(180)
	  , toLength  = __webpack_require__(184)
	  , toIndex   = __webpack_require__(185);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(168)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(168)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var shared = __webpack_require__(187)('keys')
	  , uid    = __webpack_require__(188);
	module.exports = function(key){
	  return shared[key] || (shared[key] = uid(key));
	};

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(144)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 188 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 189 */
/***/ function(module, exports) {

	// IE 8- don't enum bug keys
	module.exports = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(144).document && document.documentElement;

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(149).f
	  , has = __webpack_require__(173)
	  , TAG = __webpack_require__(192)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var store      = __webpack_require__(187)('wks')
	  , uid        = __webpack_require__(188)
	  , Symbol     = __webpack_require__(144).Symbol
	  , USE_SYMBOL = typeof Symbol == 'function';
	
	var $exports = module.exports = function(name){
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
	};
	
	$exports.store = store;

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	var has         = __webpack_require__(173)
	  , toObject    = __webpack_require__(194)
	  , IE_PROTO    = __webpack_require__(186)('IE_PROTO')
	  , ObjectProto = Object.prototype;
	
	module.exports = Object.getPrototypeOf || function(O){
	  O = toObject(O);
	  if(has(O, IE_PROTO))return O[IE_PROTO];
	  if(typeof O.constructor == 'function' && O instanceof O.constructor){
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto : null;
	};

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(169);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(196);
	var global        = __webpack_require__(144)
	  , hide          = __webpack_require__(148)
	  , Iterators     = __webpack_require__(174)
	  , TO_STRING_TAG = __webpack_require__(192)('toStringTag');
	
	for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
	  var NAME       = collections[i]
	    , Collection = global[NAME]
	    , proto      = Collection && Collection.prototype;
	  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
	  Iterators[NAME] = Iterators.Array;
	}

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(197)
	  , step             = __webpack_require__(198)
	  , Iterators        = __webpack_require__(174)
	  , toIObject        = __webpack_require__(180);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(170)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 197 */
/***/ function(module, exports) {

	module.exports = function(){ /* empty */ };

/***/ },
/* 198 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY            = __webpack_require__(171)
	  , global             = __webpack_require__(144)
	  , ctx                = __webpack_require__(146)
	  , classof            = __webpack_require__(200)
	  , $export            = __webpack_require__(143)
	  , isObject           = __webpack_require__(151)
	  , anObject           = __webpack_require__(150)
	  , aFunction          = __webpack_require__(147)
	  , anInstance         = __webpack_require__(201)
	  , forOf              = __webpack_require__(202)
	  , setProto           = __webpack_require__(206).set
	  , speciesConstructor = __webpack_require__(209)
	  , task               = __webpack_require__(210).set
	  , microtask          = __webpack_require__(212)()
	  , PROMISE            = 'Promise'
	  , TypeError          = global.TypeError
	  , process            = global.process
	  , $Promise           = global[PROMISE]
	  , process            = global.process
	  , isNode             = classof(process) == 'process'
	  , empty              = function(){ /* empty */ }
	  , Internal, GenericPromiseCapability, Wrapper;
	
	var USE_NATIVE = !!function(){
	  try {
	    // correct subclassing with @@species support
	    var promise     = $Promise.resolve(1)
	      , FakePromise = (promise.constructor = {})[__webpack_require__(192)('species')] = function(exec){ exec(empty, empty); };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
	  } catch(e){ /* empty */ }
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // with library wrapper special case
	  return a === b || a === $Promise && b === Wrapper;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var newPromiseCapability = function(C){
	  return sameConstructor($Promise, C)
	    ? new PromiseCapability(C)
	    : new GenericPromiseCapability(C);
	};
	var PromiseCapability = GenericPromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve);
	  this.reject  = aFunction(reject);
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(promise, isReject){
	  if(promise._n)return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function(){
	    var value = promise._v
	      , ok    = promise._s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , domain  = reaction.domain
	        , result, then;
	      try {
	        if(handler){
	          if(!ok){
	            if(promise._h == 2)onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if(handler === true)result = value;
	          else {
	            if(domain)domain.enter();
	            result = handler(value);
	            if(domain)domain.exit();
	          }
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if(isReject && !promise._h)onUnhandled(promise);
	  });
	};
	var onUnhandled = function(promise){
	  task.call(global, function(){
	    var value = promise._v
	      , abrupt, handler, console;
	    if(isUnhandled(promise)){
	      abrupt = perform(function(){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if(abrupt)throw abrupt.error;
	  });
	};
	var isUnhandled = function(promise){
	  if(promise._h == 1)return false;
	  var chain = promise._a || promise._c
	    , i     = 0
	    , reaction;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var onHandleUnhandled = function(promise){
	  task.call(global, function(){
	    var handler;
	    if(isNode){
	      process.emit('rejectionHandled', promise);
	    } else if(handler = global.onrejectionhandled){
	      handler({promise: promise, reason: promise._v});
	    }
	  });
	};
	var $reject = function(value){
	  var promise = this;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if(!promise._a)promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function(value){
	  var promise = this
	    , then;
	  if(promise._d)return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if(promise === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      microtask(function(){
	        var wrapper = {_w: promise, _d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch(e){
	    $reject.call({_w: promise, _d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor){
	    anInstance(this, $Promise, PROMISE, '_h');
	    aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
	    } catch(err){
	      $reject.call(this, err);
	    }
	  };
	  Internal = function Promise(executor){
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = __webpack_require__(213)($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
	      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail   = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode ? process.domain : undefined;
	      this._c.push(reaction);
	      if(this._a)this._a.push(reaction);
	      if(this._s)notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	  PromiseCapability = function(){
	    var promise  = new Internal;
	    this.promise = promise;
	    this.resolve = ctx($resolve, promise, 1);
	    this.reject  = ctx($reject, promise, 1);
	  };
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
	__webpack_require__(191)($Promise, PROMISE);
	__webpack_require__(214)(PROMISE);
	Wrapper = __webpack_require__(145)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = newPromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
	    var capability = newPromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(215)(function(iter){
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      var values    = []
	        , index     = 0
	        , remaining = 1;
	      forOf(iterable, false, function(promise){
	        var $index        = index++
	          , alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled  = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = this
	      , capability = newPromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(182)
	  , TAG = __webpack_require__(192)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	// fallback for IE11 Script Access Denied error
	var tryGet = function(it, key){
	  try {
	    return it[key];
	  } catch(e){ /* empty */ }
	};
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 201 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name, forbiddenField){
	  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(146)
	  , call        = __webpack_require__(203)
	  , isArrayIter = __webpack_require__(204)
	  , anObject    = __webpack_require__(150)
	  , toLength    = __webpack_require__(184)
	  , getIterFn   = __webpack_require__(205)
	  , BREAK       = {}
	  , RETURN      = {};
	var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
	  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator, result;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if(result === BREAK || result === RETURN)return result;
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    result = call(iterator, f, step.value, entries);
	    if(result === BREAK || result === RETURN)return result;
	  }
	};
	exports.BREAK  = BREAK;
	exports.RETURN = RETURN;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(150);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(174)
	  , ITERATOR   = __webpack_require__(192)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(200)
	  , ITERATOR  = __webpack_require__(192)('iterator')
	  , Iterators = __webpack_require__(174);
	module.exports = __webpack_require__(145).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var isObject = __webpack_require__(151)
	  , anObject = __webpack_require__(150);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(146)(Function.call, __webpack_require__(207).f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var pIE            = __webpack_require__(208)
	  , createDesc     = __webpack_require__(157)
	  , toIObject      = __webpack_require__(180)
	  , toPrimitive    = __webpack_require__(156)
	  , has            = __webpack_require__(173)
	  , IE8_DOM_DEFINE = __webpack_require__(152)
	  , gOPD           = Object.getOwnPropertyDescriptor;
	
	exports.f = __webpack_require__(153) ? gOPD : function getOwnPropertyDescriptor(O, P){
	  O = toIObject(O);
	  P = toPrimitive(P, true);
	  if(IE8_DOM_DEFINE)try {
	    return gOPD(O, P);
	  } catch(e){ /* empty */ }
	  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
	};

/***/ },
/* 208 */
/***/ function(module, exports) {

	exports.f = {}.propertyIsEnumerable;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(150)
	  , aFunction = __webpack_require__(147)
	  , SPECIES   = __webpack_require__(192)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(146)
	  , invoke             = __webpack_require__(211)
	  , html               = __webpack_require__(190)
	  , cel                = __webpack_require__(155)
	  , global             = __webpack_require__(144)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(182)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listener, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 211 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(144)
	  , macrotask = __webpack_require__(210).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(182)(process) == 'process';
	
	module.exports = function(){
	  var head, last, notify;
	
	  var flush = function(){
	    var parent, fn;
	    if(isNode && (parent = process.domain))parent.exit();
	    while(head){
	      fn   = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch(e){
	        if(head)notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if(parent)parent.enter();
	  };
	
	  // Node.js
	  if(isNode){
	    notify = function(){
	      process.nextTick(flush);
	    };
	  // browsers with MutationObserver
	  } else if(Observer){
	    var toggle = true
	      , node   = document.createTextNode('');
	    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	    notify = function(){
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if(Promise && Promise.resolve){
	    var promise = Promise.resolve();
	    notify = function(){
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function(){
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(global, flush);
	    };
	  }
	
	  return function(fn){
	    var task = {fn: fn, next: undefined};
	    if(last)last.next = task;
	    if(!head){
	      head = task;
	      notify();
	    } last = task;
	  };
	};

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var hide = __webpack_require__(148);
	module.exports = function(target, src, safe){
	  for(var key in src){
	    if(safe && target[key])target[key] = src[key];
	    else hide(target, key, src[key]);
	  } return target;
	};

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(144)
	  , core        = __webpack_require__(145)
	  , dP          = __webpack_require__(149)
	  , DESCRIPTORS = __webpack_require__(153)
	  , SPECIES     = __webpack_require__(192)('species');
	
	module.exports = function(KEY){
	  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(192)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ return {done: safe = true}; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 216 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = angular.module('si.filters', []);

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _exceptionHandlerDecorator = __webpack_require__(218);
	
	exports.default = angular.module('si.decorators', []).decorator('$exceptionHandler', _exceptionHandlerDecorator.exceptionHandlerDecorator);

/***/ },
/* 218 */
/***/ function(module, exports) {

	"use strict";
	
	exceptionHandlerDecorator.$inject = ['$delegate', '$log'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.exceptionHandlerDecorator = exceptionHandlerDecorator;
	/* @ngInject */function exceptionHandlerDecorator($delegate, $log) {
	  $delegate = function $delegate(exception, cause) {
	    return $log.error(exception, cause);
	  };
	  return $delegate;
	}

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	interceptorsConfig.$inject = ['$httpProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _tokenInterceptor = __webpack_require__(220);
	
	var _loaderInterceptor = __webpack_require__(221);
	
	function interceptorsConfig($httpProvider) {
	  $httpProvider.interceptors.push(_tokenInterceptor.tokenInterceptor);
	  $httpProvider.interceptors.push(_loaderInterceptor.loaderInterceptor);
	}
	
	exports.default = angular.module('si.interceptors', []).config(interceptorsConfig);

/***/ },
/* 220 */
/***/ function(module, exports) {

	"use strict";
	
	tokenInterceptor.$inject = ['$sessionStorage'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.tokenInterceptor = tokenInterceptor;
	/* @ngInject */function tokenInterceptor($sessionStorage) {
	
	  /**
	   * attach the token to the header on each
	   * request
	   */
	  function request(config) {
	    var token = $sessionStorage.authData && $sessionStorage.authData.Token;
	
	    if (token) {
	      config.headers.Authorization = token;
	      config.headers = config.headers || {};
	    }
	
	    return config;
	  }
	
	  return { request: request };
	}

/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';
	
	loaderInterceptor.$inject = ['$q', 'Loader'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.loaderInterceptor = loaderInterceptor;
	/* @ngInject */function loaderInterceptor($q, Loader) {
	
	  function request(config) {
	
	    if (checkUrl(config.url) < 1) {
	      Loader.showLoader();
	    }
	
	    return config;
	  }
	
	  function response(data) {
	    Loader.hideLoader();
	    return data;
	  }
	
	  function responseError(err) {
	    Loader.hideLoader();
	    return $q.reject(err);
	  }
	
	  // These url paths are background requests, and a user shouldn't see they're loading
	  function checkUrl(url) {
	    var paths = ['Portfolios'];
	    var temp = 0;
	
	    _.forEach(paths, function (path) {
	      if (url.indexOf(path) != -1) {
	        temp += 1;
	      }
	    });
	
	    return temp;
	  }
	
	  return { request: request, response: response, responseError: responseError };
	}

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _i18n = __webpack_require__(223);
	
	var _app = __webpack_require__(224);
	
	exports.default = angular.module('si.config', []).config(_i18n.i18nConfig).config(_app.appConfig).run(_app.appRun);

/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';
	
	i18nConfig.$inject = ['$translateProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.i18nConfig = i18nConfig;
	/* @ngInject */function i18nConfig($translateProvider) {
	  $translateProvider.useLoader('translationLoader', {});
	  $translateProvider.useSanitizeValueStrategy('escape');
	  $translateProvider.fallbackLanguage('en-US'); // In cases a specific translation is missing
	  $translateProvider.registerAvailableLanguageKeys(['en-US', 'ja-JP', 'ru-RU', 'zh-CHT', 'zh-CN'], {
	    'en*': 'en-US',
	    'ja*': 'ja-JP',
	    'ru*': 'ru-RU',
	    'zh-CHT': 'zh-CHT',
	    'zh_CHT': 'zh_CHT',
	    'zh-CN': 'zh-CN',
	    'zh_CN': 'zh_CN',
	    'zh': 'zh-CN'
	  });
	}

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';
	
	appConfig.$inject = ['$compileProvider', '$logProvider', '$httpProvider', 'ENV', 'API_URLS'];
	appRun.$inject = ['$rootScope', 'ENV'];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.appConfig = appConfig;
	exports.appRun = appRun;
	/* @ngInject */function appConfig($compileProvider, $logProvider, $httpProvider, ENV, API_URLS) {
	
	    if (!ENV.localhost) {
	        $compileProvider.debugInfoEnabled(false);
	        $logProvider.debugEnabled(false);
	        $httpProvider.useApplyAsync(true);
	
	        var parsedUrl = location.href.split('#')[0];
	    }
	}
	
	/* @ngInject */function appRun($rootScope, ENV) {
	
	    if (ENV.localhost) {
	        $rootScope.$on('$stateChangeError', console.error.bind(console));
	    }
	}

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _userData = __webpack_require__(226);
	
	var _portfolios = __webpack_require__(227);
	
	var _errorCodes = __webpack_require__(228);
	
	var _searchModel = __webpack_require__(229);
	
	exports.default = angular.module('si.models', []).service('UserData', _userData.UserData).service('Portfolios', _portfolios.Portfolios).service('ErrorCodes', _errorCodes.ErrorCodes).service('SearchModel', _searchModel.SearchModel);

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.UserData = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var UserData = exports.UserData = function () {
	
	  /* @ngInject */
	
	  UserData.$inject = ['$sessionStorage', '$localStorage', 'Network'];
	  function UserData($sessionStorage, $localStorage, Network) {
	    (0, _classCallCheck3.default)(this, UserData);
	
	
	    this.$sessionStorage = $sessionStorage;
	    this.$localStorage = $localStorage;
	    this.Network = Network;
	
	    // Paths
	    this.userDataPath = 'UserData/GetUserData';
	    this.disclaimerPath = 'UserData/SetUserAgreeToTerms';
	    this.userSettingsPath = 'UserData/GetUserSettings';
	    this.getTradingPrefPath = 'UserData/GetTradingPreferences';
	    this.saveTradingPrefPath = 'UserData/SaveTradingPreferences';
	    this.updateUserSettingsPath = 'UserData/UpdateUserSettings';
	    this.updateExecutionModePath = 'UserData/UpdateExecutionMode';
	
	    this.activeUser = {};
	  }
	
	  (0, _createClass3.default)(UserData, [{
	    key: 'getUserData',
	    value: function getUserData() {
	      var _this = this;
	
	      return this.Network.post(this.userDataPath, { 'LiveDemo': 0 })
	      // Update the user Model, preserve data binding
	      .then(function (userData) {
	
	        // Reset `activeUser` and fill with the new data
	        angular.copy(userData, _this.activeUser);
	
	        return _this.activeUser;
	      });
	    }
	  }, {
	    key: 'getActiveUser',
	    value: function getActiveUser() {
	      // TODO: Remove this hard coded after integration with BE
	      //return _.isEmpty(this.activeUser) ? null : this.activeUser;
	      return { Email: 'ran.styr@gmail.com' };
	    }
	  }, {
	    key: 'getUserSettings',
	    value: function getUserSettings() {
	      return this.Network.post(this.userSettingsPath, {});
	    }
	  }, {
	    key: 'updateUserSettings',
	    value: function updateUserSettings(settings) {
	      return this.Network.post(this.updateUserSettingsPath, settings);
	    }
	  }, {
	    key: 'setUserAgreeToTerms',
	    value: function setUserAgreeToTerms() {
	      return this.Network.post(this.disclaimerPath, {
	        User_ID: this.$sessionStorage.authData.UserID
	      });
	    }
	
	    /**
	     * Update the account execution mode
	     *
	     * @param {number}  mode          Execution mode
	     *   1 - Automatic
	     *   2 - Require confirmation
	     *   3 - On hold
	     * @param {boolean} approveOrDeny `true` approves all pending positions, `false` denies all
	     */
	
	  }, {
	    key: 'updateExecutionMode',
	    value: function updateExecutionMode(mode) {
	      var approveOrDeny = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
	
	      var accountId = this.getActiveUser().Accounts[0].AccountID;
	
	      var query = {
	        AccountID: accountId,
	        ExecutionModeID: mode,
	        ApproveOrDeny: approveOrDeny
	      };
	
	      return this.Network.post(this.updateExecutionModePath, query);
	    }
	
	    /**
	     * Saves user's wizard selection (preferences)
	     *
	     * @param {object} preferences Wizard selection
	     */
	
	  }, {
	    key: 'saveTradingPreferences',
	    value: function saveTradingPreferences(preferences) {
	      var timeFrame = preferences.timeFrameID;
	      var query = {
	        StartingBalance: preferences.balance,
	        RiskFactor: preferences.strategy,
	        GainLossFactor: preferences.motivation,
	        TimeFrameID: timeFrame
	      };
	
	      return this.Network.post(this.saveTradingPrefPath, query);
	    }
	
	    /**
	     * Loads user's saved preferences
	     */
	
	  }, {
	    key: 'getTradingPreferences',
	    value: function getTradingPreferences() {
	      return this.Network.post(this.getTradingPrefPath);
	    }
	  }]);
	  return UserData;
	}();

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Portfolios = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//var portfolio_json             = require('../../data/portfolioData.json');
	
	var Portfolios = exports.Portfolios = function () {
	
	  /* @ngInject */
	
	  Portfolios.$inject = ['Network'];
	  function Portfolios(Network) {
	    (0, _classCallCheck3.default)(this, Portfolios);
	
	    this.Network = Network;
	
	    // Paths
	    this.portfoliosCompositionPath = 'Portfolio/Composition';
	    this.portfoliosPath = 'Portfolio';
	
	    // this.packagesPerformance = 'WizardPackages/GetWizardPackagesPerformance';
	    // this.extendedPackagesPath = 'WizardPackageInfo/GetPackageExInfo';
	
	    this.portfolios = {};
	  }
	
	  // RegisterToken(packageQuery) {
	  //     return this.Network.post(this.packagesPath, packageQuery)
	  //         .then(wizardPackages => {
	  //             this.ColorService.addUnusedColorToPackages(wizardPackages.WizardPackages);
	  //
	  //             angular.copy(wizardPackages, this.packages);
	  //
	  //             return wizardPackages;
	  //         });
	  // }
	
	  (0, _createClass3.default)(Portfolios, [{
	    key: 'get',
	    value: function get(query) {
	      var _this = this;
	
	      return this.Network.get(this.portfoliosCompositionPath, query).then(function (portfolios) {
	        var portfolios_data = portfolio_json.portfolioData;
	        angular.copy(portfolios_data, _this.portfolios);
	        return portfolios_data;
	        // return portfolios;
	      });
	    }
	  }]);
	  return Portfolios;
	}();

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ErrorCodes = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ErrorCodes = exports.ErrorCodes = function () {
	
	  /* @ngInject */
	
	  ErrorCodes.$inject = ['Network'];
	  function ErrorCodes(Network) {
	    (0, _classCallCheck3.default)(this, ErrorCodes);
	
	    this.Network = Network;
	
	    // Set defaults
	    this.errorCodes = {};
	  }
	
	  (0, _createClass3.default)(ErrorCodes, [{
	    key: "initErrorCodes",
	    value: function initErrorCodes() {
	      /* return this.Network.get('ErrorCodes')
	         .then(result => {
	           if (result.Succeeded) {
	             // Reset `errorCodes` and fill with the new data
	             angular.copy(result.Response, this.errorCodes);
	           }
	         });*/
	    }
	  }, {
	    key: "getErrorCodes",
	    value: function getErrorCodes() {
	      /*  if (_.isEmpty(this.errorCodes)) {
	          this.initErrorCodes();
	        }
	        return this.errorCodes;*/
	    }
	  }]);
	  return ErrorCodes;
	}();

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SearchModel = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _algoliasearch = __webpack_require__(230);
	
	var _algoliasearchHelper = __webpack_require__(263);
	
	var _algoliasearchHelper2 = _interopRequireDefault(_algoliasearchHelper);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//var portfolio_json             = require('../../data/portfolioData.json');
	
	var SearchModel = exports.SearchModel = function () {
	
	    /* @ngInject */
	
	    SearchModel.$inject = ['Network', 'GLOBALS', '$q', 'Auth', 'algolia'];
	    function SearchModel(Network, GLOBALS, $q, Auth, algolia) {
	        (0, _classCallCheck3.default)(this, SearchModel);
	
	        this.Network = Network;
	        this.ModelPaginationPointer = 0;
	        this.GLOBALS = GLOBALS;
	
	        this.$q = $q;
	        this.Auth = Auth;
	        this.algolia = algolia;
	        this.algoliaQueryParam = {
	            "getRankingInfo": 1,
	            "facets": "*",
	            "attributesToRetrieve": "*",
	            "highlightPreTag": "<em>",
	            "highlightPostTag": "</em>",
	            "hitsPerPage": 10,
	            "facetFilters": [],
	            "maxValuesPerFacet": 100
	        };
	
	        this.client = this.algolia.Client('2K1ULUZLUW', '16f42d05d731eaf17e018a0442ff1fb2');
	        this.index = this.client.initIndex('group');
	
	        this.searchResult = {};
	        this.fsResult = {};
	    }
	
	    (0, _createClass3.default)(SearchModel, [{
	        key: 'setModel',
	        value: function setModel(value) {
	            this.searchResult = value;
	            this.ModelPaginationPointer = 0;
	        }
	    }, {
	        key: 'getModelValue',
	        value: function getModelValue() {
	            return this.searchResult;
	        }
	    }, {
	        key: 'getModelPagination',
	        value: function getModelPagination() {
	            var SeaerchResult = [];
	            var index = 0;
	            for (var i = ModelPaginationPointer; i < this.GLOBALS.SeaechResultAmount; i++) {
	                this.searchResult[index] = this.searchResult[i];
	                ModelPaginationPointer++;
	                index++;
	            }
	        }
	    }, {
	        key: 'get',
	        value: function get(query) {
	            var _this = this;
	
	            return this.index.search(query, this.algoliaQueryParam).then(function (content, err) {
	                //sort according to userScore
	                content = _this.userScoreRort(content);
	                var searchresult_data = content;
	                angular.copy(content, _this.searchResult);
	                return searchresult_data;
	            });
	        }
	    }, {
	        key: 'getById',
	        value: function getById(objectId) {
	            var _this2 = this;
	
	            return this.index.getObject(objectId).then(function (content, err) {
	                var searchFsresult_data = content;
	                angular.copy(content, _this2.fsResult);
	                return searchFsresult_data;
	            });
	        }
	    }, {
	        key: 'userScoreRort',
	        value: function userScoreRort(content) {
	            content.hits.sort(function (a, b) {
	                if (a._rankingInfo.userScore > b._rankingInfo.userScore) {
	                    return -1;
	                }
	                if (a._rankingInfo.userScore < b._rankingInfo.userScore) {
	                    return 1;
	                }
	                // a must be equal to b
	                return 0;
	            });
	
	            return content;
	        }
	    }, {
	        key: 'getIndex',
	        value: function getIndex(objectId) {
	            debugger;
	        }
	    }]);
	    return SearchModel;
	}();

/***/ },
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _header = __webpack_require__(446);
	
	var _modals = __webpack_require__(448);
	
	var _modals2 = _interopRequireDefault(_modals);
	
	var _loader = __webpack_require__(455);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = angular.module('si.components', [_modals2.default.name, _loader2.default.name]).directive({
	  header: _header.header
	});

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.header = header;
	
	var _header = __webpack_require__(447);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HeaderController = function () {
	
	    /* @ngInject */
	
	    HeaderController.$inject = ['$localStorage', '$scope', 'Auth', '$state', 'SearchModel', '$location'];
	    function HeaderController($localStorage, $scope, Auth, $state, SearchModel, $location) {
	        (0, _classCallCheck3.default)(this, HeaderController);
	
	        this.$localStorage = $localStorage;
	        this.$scope = $scope;
	        this.Auth = Auth;
	        this.$state = $state;
	        this.SearchModel = SearchModel;
	        this.$location = $location;
	    }
	
	    (0, _createClass3.default)(HeaderController, [{
	        key: "search",
	        value: function search() {
	            this.$location.search({ query: this.query });
	            this.onSearch({ query: this.query });
	        }
	    }, {
	        key: "login",
	        value: function login() {
	            var _this = this;
	
	            var credentials = {};
	            credentials.email = this.$scope.email;
	            credentials.password = this.$scope.password;
	            this.Auth.login(credentials).then(function (result) {
	                //success
	                // The signed-in user info.
	                _this.Auth.setToken(result.refreshToken);
	                _this.Auth.setUserId(result.uid);
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "signUp",
	        value: function signUp() {
	            var _this2 = this;
	
	            var credentials = {};
	            credentials.email = this.$scope.email;
	            credentials.password = this.$scope.password;
	            this.Auth.signUp(credentials).then(function (result) {
	                //success
	                // The signed-in user info.
	                _this2.Auth.setToken(result.refreshToken);
	                _this2.Auth.setUserId(result.uid);
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "fbLogin",
	        value: function fbLogin() {
	            var _this3 = this;
	
	            this.Auth.fbLogin().then(function (value) {
	                //success
	                _this3.Auth.setToken(result.refreshToken);
	                _this3.Auth.setUserId(result.uid);
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "resetPassword",
	        value: function resetPassword(email) {
	            this.Auth.resetPassword(this.$scope.email).then(function (value) {
	                //success
	                //todo ran - raise modal
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	
	        /**
	         * Check if user is already logged in based on the authData
	         */
	
	    }, {
	        key: "isLoggedIn",
	        value: function isLoggedIn() {
	            return this.Auth.getAuthData();
	        }
	
	        /**
	         * Create a list of all languages supported and defined by the broker (from attribute)
	         */
	
	    }, {
	        key: "getLanguagesList",
	        value: function getLanguagesList() {
	            var _this4 = this;
	
	            //TODO: Remove this hard coded after product adds attribute
	            //let langList = this.GroupAttributes.getLangList();
	            var langList = {
	                "en-US": { code: "en-US", displayname: "lblEnglish" },
	                "ja-JP": { code: "ja-JP", displayname: "lblJapanese" },
	                "zh-CN": { code: "zh-CN", displayname: " lblChineseCN" },
	                "ru-RU": { code: "ru-RU", displayname: "lblRussian" },
	                "zh-CHT": { code: "zh-CHT", displayname: " lblChineseCHT" }
	            };
	
	            // Parse data for the Dropdown component
	            return _.map(langList, function (lang) {
	                return {
	                    text: _this4.$translate.instant(lang.displayname),
	                    iconClass: lang.code
	                };
	            });
	        }
	
	        /**
	         * On Languages dropdown selection
	         *
	         * @param  {Object} selection Option object (text, iconClass)
	         */
	
	    }, {
	        key: "languageChange",
	        value: function languageChange(selection) {
	            this.languagesDropdown.mainIconClass = selection.iconClass;
	
	            //this.GroupTranslations.setCurrentLanguage(selection.iconClass);
	
	            // Fetch translations for the selected language
	            //this.$translate.use(this.GroupTranslations.getCurrentLanguage());
	            this.$translate.use('en-US');
	        }
	    }]);
	    return HeaderController;
	}();
	
	function header() {
	    return {
	        restrict: 'E',
	        template: _header2.default,
	        replace: true,
	        scope: {},
	        bindToController: {
	            onSearch: '&',
	            query: '='
	        },
	        controller: HeaderController,
	        controllerAs: 'Header',
	        link: function link(scope, elem, attr, ctrl) {
	
	            angular.element(document.querySelector('#search-input')).on('keypress', function (e) {
	                var code = e.keyCode ? e.keyCode : e.which;
	                if (code == 13) {
	                    //Enter keycode
	                    ctrl.search();
	                }
	            });
	        }
	
	    };
	}

/***/ },
/* 447 */
/***/ function(module, exports) {

	module.exports = "\n<div class=\"head\">\n    <div class=\"w-container clearfix\">\n        <div class=\"w-row\">\n            <nav class=\"top-bar\">\n                <div class=\"w-col w-col-2 w-col-small-3 w-col-tiny-5 w-col-big-mobile-5 column\">\n                    <div class=\"logo-wrapper\">\n                        <a href=\"#\" id=\"logo\">\n                            <svg class=\"icon icon-logo-small logo-symbol\">\n                                <use xlink:href=\"#icon-logo-small\"></use>\n                            </svg>\n                            <p class=\"logo-text\">talkme</p>\n                        </a>\n                    </div>\n                </div>\n                <div class=\"w-col w-col-6 w-col-small-5 w-col-tiny-5 w-col-big-mobile-5 column\">\n                    <div class=\"container-search\">\n                        <input id=\"search-input\" class=\"w-input\" placeholder=\"חפש שאלה\" autofocus type=\"text\" ng-model=\"Header.query\">\n                        <button id=\"search-button\" ng-click=\"Header.search()\">\n                            <svg class=\"icon icon-search\">\n                                <use xlink:href=\"#icon-search\"></use>\n                            </svg>\n                        </button>\n                    </div>\n                </div>\n                <div class=\"w-col w-col-4 w-col-small-4 w-col-tiny-7 w-col-big-mobile-7 column\">\n                    <nav role=\"navigation\">\n                        <ul class=\"menu clearfix\">\n\n                            <!--\t\n                                    TO DO: add signedUp variable that shows true if user is signedUp\n                            -->\n\n                            <li ng-hide=\"Header.signedUp\">\n\t\t\t\t\t\t\t\t\n<!--\t\t\t\t\t\t\tADDED: ng-class - when drop is true active class is added\n                                TO-DO: add to ng-click function: drop = !drop; \n-->\n                                <div class=\"nav-link sign-up-button\" id=\"services-link\"\n                                     ng-click=\"drop = !drop\" ng-class=\"drop ? 'active' : ''\"><span>כניסה</span>\n\t\t\t\t\t\t\t\t</div>\n                                    <div class=\"login-tooltip\">\n                                        <div class=\"login-container\">\n                                            <div class=\"form-container\">\n                                                <button id=\"facebookBn\" type=\"button\" id=\"login\"\n                                                        ng-click=\"Header.fbLogin()\" href=\"#\" target=\"_blank\"\n                                                        alt=\"Login with Facebook\"><img\n                                                        src=\"http://res.cloudinary.com/talkme-co/image/upload/v1445607368/facebook-icon_jfwcig.svg\"\n                                                        class=\"iconsocial\"><span\n                                                        class=\"primary-text\">המשך עם פייסבוק</span></button>\n                                                <p class=\"or\">או</p>\n\n                                                <form ng-submit=\"Header.login()\" id=\"login-form\">\n\n                                                    <input type=\"email\" placeholder='דוא\"ל' name=\"email\" id=\"email\"\n                                                           class=\"email login\" ng-model=\"email\" required=\"required\"/>\n                                                    <br/>\n                                                    <input type=\"password\" placeholder=\"ססמא\" name=\"password\" id=\"pass\"\n                                                           class=\"pass login\" ng-model=\"password\"\n                                                           required=\"required\"/> <br/>\n                                                    <input type=\"submit\" id=\"submit\" class=\"submit login\" \n                                                           value=\"כניסה\"/>\n\n                                                </form>\n                                                <a href=\"\" class=\"reset-pass\" ng-click=\"Header.resetPassword()\">שכחת\n                                                    ססמא? לחץ כאן</a>\n\n                                            </div>\n\n                                            <div class=\"signup-container\">\n                                                <p class=\"signup-text\">חדש בTalkme?</p>\n\t\t\t\t\t\t\t\t\t\t\t\t\n                                    <!--\t\tTO DO:\tredirect the user to login state-->\n                                                <a href=\"\" class=\"submit\" ng-click=\"Header.signUp()\">הרשמ/י</a>\n                                            </div>\n\n                                        </div>\n                                    </div>\n                                \n                            </li>\n\n                            <!--TO DO: ng-show when user is signedUp + add ng-src profile picture and username -->\n                            <li ng-show=\"Header.signedUp\">\n\t\t\t\t\t\t\t\t<a  class=\"nav-link profile\" href=\"\"><img class=\"profile-image\" ng-src=\"\">\n\t\t\t\t\t\t\t\t<p class=\"profile-name\">{{ username }}</p></a>\n\t\t\t\t\t\t\t</li>\n                        </ul>\n                    </nav>\n                </div>\n\n            </nav>\n        </div>\n    </div>\n</div>\n";

/***/ },
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _modalsFactory = __webpack_require__(449);
	
	var _modal = __webpack_require__(452);
	
	var _login = __webpack_require__(453);
	
	var _signUp = __webpack_require__(454);
	
	exports.default = angular.module('components.modal', []).service('ModalsFactory', _modalsFactory.ModalsFactory).service('Modal', _modal.Modal).controller({
	  LoginController: _login.LoginController,
	  SignUpController: _signUp.SignUpController
	});

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ModalsFactory = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	var _login = __webpack_require__(450);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _signUp = __webpack_require__(451);
	
	var _signUp2 = _interopRequireDefault(_signUp);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var ModalsFactory = exports.ModalsFactory = function () {
	
	  /* @ngInject */
	
	  ModalsFactory.$inject = ['$modal'];
	  function ModalsFactory($modal) {
	    (0, _classCallCheck3.default)(this, ModalsFactory);
	
	    this.$modal = $modal;
	
	    this.currentOpenModal = null;
	    this.defaultSettings = {
	      backdrop: 'static'
	    };
	
	    this.templatesRegistry = {
	      'Login': _login2.default,
	      'SignUp': _signUp2.default
	    };
	  }
	
	  /**
	   * Calls for buildSettings method depending on the modal type and opens with generated settings
	   *
	   * @param {string} type The type of modal has to start with uppercase
	   * @param {object} resolve Data to pass to modal's controller
	   */
	
	
	  (0, _createClass3.default)(ModalsFactory, [{
	    key: 'showModal',
	    value: function showModal(type, resolve) {
	      var newOpenModal = this.$modal.open(this.buildSettings(type, resolve));
	      this.currentOpenModal = newOpenModal;
	      return newOpenModal;
	    }
	
	    /**
	     * Generates settings based on type. Controller's name, controllerAs and template
	     * have to start with uppercase like the type
	     *
	     * @param {string} type
	     * @param {object} resolve Data to pass to modal's controller
	     * @returns {*} Generated settings for given modal type: template, controller and controllerAs.
	     */
	
	  }, {
	    key: 'buildSettings',
	    value: function buildSettings(type, resolve) {
	      var uniqueSettings = {
	        resolve: resolve,
	        template: this.templatesRegistry[type],
	        controller: type + 'Controller',
	        controllerAs: type
	      };
	
	      return _.defaults(uniqueSettings, this.defaultSettings);
	    }
	
	    /**
	     * Return current open modal
	     */
	
	  }, {
	    key: 'getCurrentOpenModal',
	    value: function getCurrentOpenModal() {
	      return this.currentOpenModal;
	    }
	  }]);
	  return ModalsFactory;
	}();

/***/ },
/* 450 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login\" style=\"display: table-row;\">\n\n    <div class=\"header\">\n        <div class=\"logo\"><a>Smart Investor</a></div>\n    </div>\n\n    <form name=\"Login.loginForm\"\n          class=\"validate-form\"\n          ng-submit=\"Login.login()\"\n          novalidate>\n        <fieldset>\n\n            <label translate=\"msgLogin\"></label>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"Login.authError\">\n                <span translate=\"{{ Login.authError }}\"></span>\n            </div>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"!Login.inputsValidity.email\">\n                <span translate=\"msgInvalidEmail\"></span>\n            </div>\n\n            <div class=\"row\"\n                 ng-class=\"{ 'error': !Login.inputsValidity.email }\">\n                <i class=\"icon email\">\n                    <span class=\"path1\"></span>\n                </i>\n\n                <input ng-model=\"Login.credentials.email\"\n                       type=\"text\"\n                       name=\"email\"\n                       placeholder=\"{{ 'lblpromptUserName' | translate }}\"\n                       ng-blur=\"Login.checkEmailValidity()\"\n                       ng-focus=\"Login.inputInFocus('email')\"\n                       ng-pattern=\"Login.PATTERNS.email\"\n                       required\n                       autofocus>\n            </div>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"!Login.inputsValidity.password\">\n                <span translate=\"msgWrongPassword\"></span>\n            </div>\n\n            <div class=\"row\"\n                 ng-class=\"{ 'error': !Login.inputsValidity.password }\">\n                <i class=\"icon lock\">\n                    <span class=\"path1\"></span>\n                </i>\n                <input class=\"required\"\n                       ng-model=\"Login.credentials.password\"\n                       type=\"{{ Login.passwordInputType }}\"\n                       name=\"password\"\n                       placeholder=\"{{ 'lblpromptPassword' | translate }}\"\n                       ng-blur=\"Login.checkPasswordValidity()\"\n                       ng-focus=\"Login.inputInFocus('password')\"\n                       ng-pattern=\"Login.PATTERNS.password\"\n                       required>\n                </span>\n                <i class=\"icon show-password\">\n                    <span class=\"path1\"\n                          ng-mousedown=\"Login.revealPassword()\"\n                          ng-mouseup=\"Login.hidePassword()\">\n                    </span>\n                </i>\n            </div>\n\n            <button type=\"submit\"\n                    class=\"btn btn-success\"\n                    translate=\"btnLogin\"></button>\n\n            <div class=\"text-holder\">\n                <p>\n                    <a ng-click=\"Login.lostPasswordHandler()\"\n                       translate=\"btnForgotPassword\">\n                    </a>\n                </p>\n            </div>\n\n            <div class=\"footer\">\n                <p>\n                    <a ng-click=\"Login.openSignup()\"\n                       translate=\"btnNewUser\"></a>\n                </p>\n            </div>\n\n            <a href=\"\" class=\"close\"\n               ng-click=\"Login.dismissModal()\"><i class=\"close-modal\"></i></a>\n\n        </fieldset>\n    </form>\n</div>\n\n";

/***/ },
/* 451 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login\" style=\"display: table-row;\">\n\n    <div class=\"header\">\n        <div class=\"logo\"><a>Smart Investor</a></div>\n    </div>\n\n    <form name=\"SignUp.signUpForm\"\n          class=\"validate-form\"\n          ng-submit=\"SignUp.signUp()\"\n          novalidate>\n        <fieldset>\n\n            <label translate=\"msgSignUp\"></label>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"SignUp.authError\">\n                <span translate=\"{{ SignUp.authError }}\"></span>\n            </div>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"!SignUp.inputsValidity.email\">\n                <span translate=\"msgInvalidEmail\"></span>\n            </div>\n\n            <div class=\"row\"\n                 ng-class=\"{ 'error': !SignUp.inputsValidity.email }\">\n                <i class=\"icon email\">\n                    <span class=\"path1\"></span>\n                </i>\n\n                <input ng-model=\"SignUp.credentials.email\"\n                       type=\"text\"\n                       name=\"email\"\n                       placeholder=\"{{ 'lblpromptUserName' | translate }}\"\n                       ng-blur=\"SignUp.checkEmailValidity()\"\n                       ng-focus=\"SignUp.inputInFocus('email')\"\n                       ng-pattern=\"SignUp.PATTERNS.email\"\n                       required\n                       autofocus>\n            </div>\n\n            <div class=\"bg-danger\"\n                 ng-if=\"!SignUp.inputsValidity.password\">\n                <span translate=\"msgWrongPassword\"></span>\n            </div>\n\n            <div class=\"row\"\n                 ng-class=\"{ 'error': !SignUp.inputsValidity.password }\">\n                <i class=\"icon lock\">\n                    <span class=\"path1\"></span>\n                </i>\n                <input class=\"required\"\n                       ng-model=\"SignUp.credentials.password\"\n                       type=\"{{ SignUp.passwordInputType }}\"\n                       name=\"password\"\n                       placeholder=\"{{ 'lblpromptPassword' | translate }}\"\n                       ng-blur=\"SignUp.checkPasswordValidity()\"\n                       ng-focus=\"SignUp.inputInFocus('password')\"\n                       ng-pattern=\"SignUp.PATTERNS.password\"\n                       required>\n                </span>\n                <i class=\"icon show-password\">\n                    <span class=\"path1\"\n                          ng-mousedown=\"SignUp.revealPassword()\"\n                          ng-mouseup=\"SignUp.hidePassword()\">\n                    </span>\n                </i>\n            </div>\n\n            <button type=\"submit\"\n                    class=\"btn btn-success\"\n                    translate=\"btnSignUp\">\n\n            </button>\n\n            <a href=\"\" class=\"close\"\n               ng-click=\"SignUp.dismissModal()\"><i class=\"close-modal\"></i></a>\n\n        </fieldset>\n    </form>\n</div>\n\n";

/***/ },
/* 452 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Modal = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Modal = exports.Modal = function () {
	
	  /* @ngInject */
	
	  Modal.$inject = ['ModalsFactory'];
	  function Modal(ModalsFactory) {
	    (0, _classCallCheck3.default)(this, Modal);
	
	    this.ModalsFactory = ModalsFactory;
	  }
	
	  /**
	   * Opens modal using ModalsFactory
	   *
	   * @param type    Type of modal, has to start with uppercase (e.g: 'Login')
	   * @param resolve Data we pass to the modal
	   * @param returnInstance return the instance
	   */
	
	
	  (0, _createClass3.default)(Modal, [{
	    key: "open",
	    value: function open(type, resolve, returnInstance) {
	      if (!returnInstance) {
	        return this.ModalsFactory.showModal(type, resolve).result.then(function (data) {
	          return data;
	        });
	      } else {
	        return this.ModalsFactory.showModal(type, resolve);
	      }
	    }
	
	    /**
	     * Return current open modal
	     */
	
	  }, {
	    key: "getCurrentOpenModal",
	    value: function getCurrentOpenModal() {
	      return this.ModalsFactory.getCurrentOpenModal();
	    }
	  }]);
	  return Modal;
	}();

/***/ },
/* 453 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.LoginController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginController = exports.LoginController = function () {
	
	  /* @ngInject */
	
	  LoginController.$inject = ['$modalInstance', 'Auth', 'PATTERNS'];
	  function LoginController($modalInstance, Auth, PATTERNS) {
	    (0, _classCallCheck3.default)(this, LoginController);
	
	    this.$modalInstance = $modalInstance;
	
	    this.Auth = Auth;
	    this.PATTERNS = PATTERNS;
	
	    // Inputs' div parent changes it's class based on these properties
	    this.inputsValidity = {
	      email: true,
	      password: true
	    };
	
	    // Properties we send on login request
	    this.credentials = {
	      email: null,
	      password: null
	    };
	
	    this.authError = null;
	    this.passwordInputType = 'password';
	  }
	
	  (0, _createClass3.default)(LoginController, [{
	    key: 'revealPassword',
	    value: function revealPassword() {
	      this.passwordInputType = 'text';
	    }
	  }, {
	    key: 'hidePassword',
	    value: function hidePassword() {
	      this.passwordInputType = 'password';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal(data) {
	      this.$modalInstance.close(data);
	    }
	  }, {
	    key: 'dismissModal',
	    value: function dismissModal(reason) {
	      this.$modalInstance.dismiss(reason);
	    }
	  }, {
	    key: 'lostPasswordHandler',
	    value: function lostPasswordHandler() {
	      this.dismissModal('lostPassword');
	    }
	  }, {
	    key: 'openSignup',
	    value: function openSignup() {
	      this.dismissModal('signup');
	    }
	
	    /**
	     * Check email validity on blur, change validity only if email isn't empty (email.$viewValue)
	     */
	
	  }, {
	    key: 'checkEmailValidity',
	    value: function checkEmailValidity() {
	      var email = this.loginForm.email;
	
	      if (email.$viewValue) {
	        this.inputsValidity.email = email.$valid;
	      }
	    }
	
	    /**
	     * Check password validity on blur, change validity only if password isn't empty (password.$viewValue)
	     */
	
	  }, {
	    key: 'checkPasswordValidity',
	    value: function checkPasswordValidity() {
	      var password = this.loginForm.password;
	
	      if (password.$viewValue) {
	        this.inputsValidity.password = password.$valid;
	      }
	    }
	
	    /**
	     * Make input valid on focus
	     */
	
	  }, {
	    key: 'inputInFocus',
	    value: function inputInFocus(inputType) {
	      this.inputsValidity[inputType] = true;
	    }
	  }, {
	    key: 'showError',
	    value: function showError(message) {
	      this.authError = message;
	    }
	  }, {
	    key: 'hideError',
	    value: function hideError() {
	      this.authError = null;
	    }
	
	    /**
	     * Login only if form is valid
	     */
	
	  }, {
	    key: 'login',
	    value: function login() {
	      var _this = this;
	
	      if (this.loginForm.$invalid) {
	        this.inputsValidity = {
	          email: this.loginForm.email.$valid,
	          password: this.loginForm.password.$valid
	        };
	        return this.inputsValidity;
	      }
	
	      this.hideError();
	      this.Auth.login(this.credentials).then(function (userData) {
	        return _this.closeModal(userData);
	      }).catch(function (error) {
	        if (error.code === 1009) {
	          // User requires confirmation
	          _this.dismissModal('confirmCode');
	        }
	        _this.showError(error.message);
	        //this.Idle.unwatch();
	      });
	    }
	  }]);
	  return LoginController;
	}();

/***/ },
/* 454 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignUpController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignUpController = exports.SignUpController = function () {
	
	  /* @ngInject */
	
	  SignUpController.$inject = ['$modalInstance', 'Signup', 'PATTERNS'];
	  function SignUpController($modalInstance, Signup, PATTERNS) {
	    (0, _classCallCheck3.default)(this, SignUpController);
	
	    this.$modalInstance = $modalInstance;
	
	    this.Signup = Signup;
	    this.PATTERNS = PATTERNS;
	
	    // Inputs' div parent changes it's class based on these properties
	    this.inputsValidity = {
	      email: true,
	      password: true
	    };
	
	    // Properties we send on login request
	    this.credentials = {
	      email: null,
	      password: null
	    };
	
	    this.authError = null;
	    this.passwordInputType = 'password';
	  }
	
	  (0, _createClass3.default)(SignUpController, [{
	    key: 'revealPassword',
	    value: function revealPassword() {
	      this.passwordInputType = 'text';
	    }
	  }, {
	    key: 'hidePassword',
	    value: function hidePassword() {
	      this.passwordInputType = 'password';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal(data) {
	      this.$modalInstance.close(data);
	    }
	  }, {
	    key: 'dismissModal',
	    value: function dismissModal(reason) {
	      this.$modalInstance.dismiss(reason);
	    }
	  }, {
	    key: 'lostPasswordHandler',
	    value: function lostPasswordHandler() {
	      this.dismissModal('lostPassword');
	    }
	  }, {
	    key: 'openSignup',
	    value: function openSignup() {
	      this.dismissModal('signup');
	    }
	
	    /**
	     * Check email validity on blur, change validity only if email isn't empty (email.$viewValue)
	     */
	
	  }, {
	    key: 'checkEmailValidity',
	    value: function checkEmailValidity() {
	      var email = this.signUpForm.email;
	
	      if (email.$viewValue) {
	        this.inputsValidity.email = email.$valid;
	      }
	    }
	
	    /**
	     * Check password validity on blur, change validity only if password isn't empty (password.$viewValue)
	     */
	
	  }, {
	    key: 'checkPasswordValidity',
	    value: function checkPasswordValidity() {
	      var password = this.signUpForm.password;
	
	      if (password.$viewValue) {
	        this.inputsValidity.password = password.$valid;
	      }
	    }
	
	    /**
	     * Make input valid on focus
	     */
	
	  }, {
	    key: 'inputInFocus',
	    value: function inputInFocus(inputType) {
	      this.inputsValidity[inputType] = true;
	    }
	  }, {
	    key: 'showError',
	    value: function showError(status) {
	      this.authError = status;
	    }
	  }, {
	    key: 'hideError',
	    value: function hideError() {
	      this.authError = null;
	    }
	
	    /**
	     * signup only if form is valid
	     */
	
	  }, {
	    key: 'signUp',
	    value: function signUp() {
	      var _this = this;
	
	      if (this.signUpForm.$invalid) {
	        this.inputsValidity = {
	          email: this.signUpForm.email.$valid,
	          password: this.signUpForm.password.$valid
	        };
	        return this.inputsValidity;
	      }
	
	      this.hideError();
	      this.Signup.createNewUser(this.credentials).then(function () {
	        return _this.closeModal();
	      }).catch(function (error) {
	        _this.showError(error);
	        //this.Idle.unwatch();
	      });
	    }
	  }]);
	  return SignUpController;
	}();

/***/ },
/* 455 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _loader = __webpack_require__(456);
	
	var _loader2 = __webpack_require__(458);
	
	exports.default = angular.module('components.loader', []).directive({
	  siLoader: _loader.siLoader
	}).service('Loader', _loader2.Loader);

/***/ },
/* 456 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	exports.siLoader = siLoader;
	
	var _loader = __webpack_require__(457);
	
	var _loader2 = _interopRequireDefault(_loader);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoaderController = function () {
	  /* @ngInject */
	
	  LoaderController.$inject = ['Loader'];
	  function LoaderController(Loader) {
	    (0, _classCallCheck3.default)(this, LoaderController);
	
	    this.Loader = Loader;
	  }
	
	  (0, _createClass3.default)(LoaderController, [{
	    key: 'isLoading',
	    value: function isLoading() {
	      return this.Loader.loading !== 0;
	    }
	  }]);
	  return LoaderController;
	}();
	
	function siLoader() {
	  return {
	    restrict: 'E',
	    template: _loader2.default,
	    scope: {},
	    controller: LoaderController,
	    controllerAs: 'Loader'
	  };
	}

/***/ },
/* 457 */
/***/ function(module, exports) {

	module.exports = "<div ng-show=\"Loader.isLoading()\"\n     class=\"fancybox-overlay fancybox-overlay-fixed si-loader\">\n\n  <div class=\"fancybox-wrap fancybox-desktop fancybox-type-inline fancybox-opened\"\n       tabindex=\"-1\">\n\n    <div class=\"fancybox-skin\">\n\n      <div class=\"fancybox-outer radius\">\n        <div class=\"fancybox-inner\">\n\n          <div id=\"popup-loading\"  alt=\"\">\n            <div ><img src=\"xxxHTMLLINKxxx0.57642984995618460.887348695890978xxx\"  alt=\"\"></div>\n            <p translate=\"lblLoading\" class=\"loadingLbl\"></p>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ },
/* 458 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Loader = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Loader = exports.Loader = function () {
	  /* @ngInject */
	
	  Loader.$inject = ['$timeout'];
	  function Loader($timeout) {
	    (0, _classCallCheck3.default)(this, Loader);
	
	    this.loading = 0;
	    this.$timeout = $timeout;
	  }
	
	  (0, _createClass3.default)(Loader, [{
	    key: "showLoader",
	    value: function showLoader() {
	      this.loading += 1;
	    }
	  }, {
	    key: "hideLoader",
	    value: function hideLoader() {
	      var _this = this;
	
	      // always delay by 1sec
	      this.$timeout(function () {
	        if (_this.loading > 0) {
	          _this.loading -= 1;
	        }
	      }, 1000);
	    }
	  }]);
	  return Loader;
	}();

/***/ },
/* 459 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	appRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _home = __webpack_require__(460);
	
	var _home2 = __webpack_require__(461);
	
	var _home3 = _interopRequireDefault(_home2);
	
	var _login = __webpack_require__(462);
	
	var _login2 = _interopRequireDefault(_login);
	
	var _searchModule = __webpack_require__(465);
	
	var _searchModule2 = _interopRequireDefault(_searchModule);
	
	var _talkFactSheetModule = __webpack_require__(468);
	
	var _talkFactSheetModule2 = _interopRequireDefault(_talkFactSheetModule);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @ngInject */
	function appRoutes($stateProvider, $urlRouterProvider) {
	
	  $stateProvider.state('home', {
	    abstract: true,
	    template: _home3.default,
	    controller: 'HomeController',
	    controllerAs: 'Home'
	  });
	
	  $urlRouterProvider.otherwise('/search');
	}
	
	function initFireBase() {
	  // Initialize Firebase
	  var config = {
	    apiKey: "AIzaSyDIkFnHkvgxoDmlM1oAAnjWfvsdvDDUJj8",
	    authDomain: "startupsknowelgedb.firebaseapp.com",
	    databaseURL: "https://startupsknowelgedb.firebaseio.com",
	    storageBucket: "startupsknowelgedb.appspot.com"
	  };
	  firebase.initializeApp(config);
	}
	
	exports.default = angular.module('stratupDB.app', [_login2.default.name, _searchModule2.default.name, _talkFactSheetModule2.default.name]).controller({ HomeController: _home.HomeController }).config(appRoutes).config(initFireBase);

/***/ },
/* 460 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.HomeController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var HomeController = exports.HomeController = function HomeController() {
	  (0, _classCallCheck3.default)(this, HomeController);
	};

/***/ },
/* 461 */
/***/ function(module, exports) {

	module.exports = "<ui-view class=\"grid-frame\"></ui-view>\n\n\n";

/***/ },
/* 462 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	loginRoutes.$inject = ['$stateProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _login = __webpack_require__(463);
	
	var _login2 = __webpack_require__(464);
	
	var _login3 = _interopRequireDefault(_login2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @ngInject */
	function loginRoutes($stateProvider) {
	  $stateProvider.state('home.login', {
	    url: '/login',
	    template: _login3.default,
	    controller: 'LoginController',
	    controllerAs: 'login',
	    resolve: {
	      // Wait for `userData` before running
	      /*
	              userData: ($q, $state, UserData, Auth) => {
	                if (Auth.getAuthData()) {
	                  // If already logged in, redirect to Dashboard
	                  return UserData.getUserData()
	                    .then(user => {
	                      // TODO: Change state here
	                      return $q.resolve();
	                    }).catch(err => {
	                      Auth.logout();
	                      return null;
	                    });
	                }
	      
	                return null;
	              },
	      */
	      // Wait for `attributes` before running
	      /*
	              attributes: (userData, GroupAttributes, LOADING_TYPES, AppState, Auth) => {
	                /!*          // TODO: Uncomment this after integration with BE on Auth
	                 if (Auth.getAuthData()) {
	                 return null;
	                 }*!/
	      
	                AppState.setPreLoginMode(true);
	                return GroupAttributes.getGroupAttributes(LOADING_TYPES.preLogin)
	                  // In case of an error, don't fail the page load
	                  .catch(err => null);
	              },
	      */
	      // Wait for `translations` before running
	      /*
	              translations: ($translate, attributes, GroupTranslations) => {
	                // Flush cached translations
	                return $translate.refresh().then(() => $translate.use(GroupTranslations.getCurrentLanguage()));
	              }
	      */
	    }
	  });
	}
	
	exports.default = angular.module('states.login', []).controller('LoginController', _login.LoginController).config(loginRoutes);

/***/ },
/* 463 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.LoginController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var LoginController = exports.LoginController = function () {
	
	    /* @ngInject */
	
	    LoginController.$inject = ['$localStorage', '$scope', 'Auth', '$state'];
	    function LoginController($localStorage, $scope, Auth, $state) {
	        (0, _classCallCheck3.default)(this, LoginController);
	
	
	        this.$localStorage = $localStorage;
	        this.$scope = $scope;
	        this.Auth = Auth;
	        this.$state = $state;
	    }
	
	    (0, _createClass3.default)(LoginController, [{
	        key: "login",
	        value: function login() {
	            var _this = this;
	
	            var credentials = {};
	            credentials.email = this.$scope.email;
	            credentials.password = this.$scope.password;
	            this.Auth.login(credentials).then(function (result) {
	                //success
	                // The signed-in user info.
	                _this.Auth.setToken(result.refreshToken);
	                _this.Auth.setUserId(result.uid);
	                _this.$state.go('home.search');
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "signUp",
	        value: function signUp() {
	            var _this2 = this;
	
	            var credentials = {};
	            credentials.email = this.$scope.email;
	            credentials.password = this.$scope.password;
	            this.Auth.signUp(credentials).then(function (result) {
	                //success
	                // The signed-in user info.
	                _this2.Auth.setToken(result.refreshToken);
	                _this2.Auth.setUserId(result.uid);
	                _this2.$state.go('home.search');
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "fbLogin",
	        value: function fbLogin() {
	            var _this3 = this;
	
	            this.Auth.fbLogin().then(function (value) {
	                //success
	                _this3.Auth.setToken(result.refreshToken);
	                _this3.Auth.setUserId(result.uid);
	                _this3.$state.go('home.search');
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }, {
	        key: "resetPassword",
	        value: function resetPassword(email) {
	            var _this4 = this;
	
	            this.Auth.resetPassword(this.$scope.email).then(function (value) {
	                //success
	                debugger;
	                _this4.$state.go('home.login');
	                //todo ran - raise modal
	            }, function (reason) {
	                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
	            });
	        }
	    }]);
	    return LoginController;
	}();

/***/ },
/* 464 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login-page\">\n<div id=\"login-modal\"><a href=\"\" class=\"close login\">\n    <svg class=\"icon icon-close\">\n        <use xlink:href=\"#icon-close\"></use>\n    </svg>\n</a></div>\n<div id=\"login-box\">\n\n    <div class=\"main-logo\">\n        <svg class=\"icon icon-logo-small logo-symbol\">\n            <use xlink:href=\"#icon-logo-small\"></use>\n        </svg>\n        <svg class=\"icon logo-svg-text\">\n            <use xlink:href=\"#icon-logo-text\"></use>\n        </svg>\n    </div>\n    <h1 class=\"main-header login\">הרשם כדי לשאול או להצביע לשאלות</h1>\n\n    <p class=\"main-body login\"> Talkme היא קהילה של יזמים שבה ניתן להיפגש ולשתף ידע בכל מה שקשור לעולם הסטארטאפים.\n        השירות אינו כרוך בתשלום.</p>\n\n    <div class=\"form-container\">\n        <button id=\"facebookBn\" type=\"button\" id=\"login\" ng-click=\"login.fbLogin()\" href=\"#\" target=\"_blank\"\n                alt=\"Login with Facebook\"><img\n                src=\"http://res.cloudinary.com/talkme-co/image/upload/v1445607368/facebook-icon_jfwcig.svg\"\n                class=\"iconsocial\"><span class=\"primary-text\">המשך עם פייסבוק</span></button>\n        <p class=\"or\">או</p>\n\n\t\t\n\t\t\n<!--\t\tTO DO: add signupForm = false to conroller -->\n\t\t\n\t\t\n\t\t<div ng-show=\"signupForm === false\">\n        <form ng-submit=\"login.login()\" id=\"login-form\">\n\t\t\n            <input type=\"email\" placeholder='דוא\"ל' name=\"email\" id=\"email\" class=\"email login\" ng-model=\"email\" required=\"required\"/>\n            <br/>\n            <input type=\"password\" placeholder=\"ססמא\" name=\"password\" id=\"pass\" class=\"pass login\" ng-model=\"password\"\n                   required=\"required\"/> <br/>\n            <input type=\"submit\" id=\"submit\" class=\"submit login\" value=\"כניסה\"/>\n\t\t\t\n        </form>\n\t\t<a href=\"\" class=\"reset-pass\" ng-click=\"login.resetPassword()\">שכחת ססמא? לחץ כאן</a>\n\t\t<a href=\"\" class=\"reset-pass\" ng-click=\"signupForm = !signupForm\">בחזרה להרשמה</a>\t\n\t\t</div>\n\t\t\n\t\t<div ng-show=\"signupForm === true\">\n\n        <form ng-submit=\"login.signUp()\" id=\"signup-form\">\n            <input type=\"email\" placeholder='הזן דוא\"ל' name=\"email\" id=\"SignUpEmail\" class=\"email warning\" ng-model=\"email\"\n                   required=\"required\"/>\n            <br/>\n            <input type=\"password\" placeholder=\"ססמא\" name=\"password\" id=\"SignUpPass\" class=\"pass\" ng-model=\"password\"\n                   required=\"required\"/> <br/>\n            <input type=\"submit\" id=\"SignUpSubmit\" class=\"submit\" value=\"הרשמה\"/>\n        </form>\n\t\t<a href=\"\" class=\"reset-pass\" ng-click=\"signupForm = !signupForm\">יש לך משתמש? הכנס כאן</a>\t\n\t\t</div>\n\n    \n    </div>\n\n\n</div>\n</div>\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\">\n    <symbol id=\"icon-logo-small\" viewBox=\"0 0 1022 1024\">\n        <title>logo-small</title>\n        <path class=\"path1\"\n              d=\"M1023.040 1008.833c0 0.256 0 0.48 0 0.704-84.952 0.544-169.904 1.024-254.824 1.6-6.655 0.032-13.311 0.352-19.934 0.512-82.456 0-164.913 0-247.369 0-1.152-0.128-2.304-0.352-3.424-0.416-15.327-0.608-30.685-0.672-45.948-1.856-23.838-1.888-47.324-6.111-70.553-11.679-210.572-50.363-365.598-233.802-380.572-450.326-0.384-5.248-0.832-10.463-1.28-15.679 0-13.119 0-26.238 0-39.356 0.192-1.248 0.512-2.496 0.576-3.776 1.056-25.79 4.128-51.323 9.503-76.537 25.598-120.053 86.68-218.316 183.279-293.924 80.024-62.65 171.312-97.079 272.742-104.502 5.12-0.384 10.207-0.832 15.327-1.248 13.343 0 26.717 0 40.060 0 1.152 0.192 2.272 0.512 3.392 0.576 30.941 1.312 61.53 5.471 91.639 12.703 109.622 26.43 200.653 83.032 272.134 170.064 68.666 83.608 105.814 179.951 112.245 288.005 2.624 43.932-0.576 87.48-9.599 130.58-14.943 71.353-44.156 136.371-87.576 194.926-1.536 2.080-1.472 3.392-0.16 5.535 39.516 63.834 79.001 127.764 118.485 191.63 0.512 0.896 1.216 1.632 1.856 2.464zM494.834 839.569c177.839 2.272 331.137-138.355 331.777-326.465 0.64-181.167-146.194-327.361-327.329-327.553-179.823-0.16-324.29 143.475-328.001 319.906-3.84 183.535 143.347 332.193 323.554 334.113z\"></path>\n        <path class=\"path2\"\n              d=\"M397.019 276.198c42.428 0 83.896 0 126.356 0 0 40.764 0 81.624 0 123.22 35.325 0 69.657 0 104.406 0 0 28.381 0 55.963 0 84.312-34.365 0-68.698 0-103.254 0-0.384 1.6-0.8 2.528-0.8 3.424 0.032 37.021 0.032 74.009 0.256 111.030 0.032 5.28 0.672 10.559 1.536 15.775 2.88 17.79 11.679 26.302 29.661 25.406 16.702-0.832 33.309-4.224 49.915-6.623 3.168-0.48 6.239-1.568 10.207-2.624 4.352 29.309 8.639 58.043 13.119 88.12-11.007 2.304-21.63 5.024-32.413 6.751-36.637 5.919-73.465 9.023-110.358 2.688-57.531-9.887-83.992-44.892-87-99.447-2.464-44.668-1.248-89.592-1.664-134.387-0.032-2.976 0-5.951 0-9.535-22.686 0-44.764 0-67.386 0 0-28.381 0-56.155 0-84.6 22.142 0 44.188 0 67.386 0 0-20.894 0-41.18 0-61.434 0.032-20.414 0.032-40.796 0.032-62.074z\"></path>\n    </symbol>\n    <symbol id=\"icon-close\" viewBox=\"0 0 32 32\">\n        <title>close</title>\n        <path class=\"path1\"\n              d=\"M32 26.917l-11.087-10.945 10.933-11.043-4.929-4.929-10.949 11.091-11.080-10.937-4.888 4.888 11.095 10.987-10.941 11.084 4.888 4.888 10.983-11.091 11.047 10.937z\"></path>\n    </symbol>\n    <symbol id=\"icon-logo-text\" viewBox=\"0 0 127 32\">\n        <title>logo-text</title>\n        <path class=\"path1\"\n              d=\"M12.61 28.899c-2.213 0-3.855-0.509-4.928-1.526s-1.609-2.632-1.609-4.844v-6.37h-3.52v-4.358h3.52v-6.37h6.504v6.37h5.398v4.358h-5.398v5.364c0 1.073 0.123 1.788 0.369 2.145s0.693 0.536 1.341 0.536c0.983 0 1.989-0.168 3.017-0.503l0.671 4.526c-1.655 0.447-3.443 0.671-5.364 0.671z\"></path>\n        <path class=\"path2\"\n              d=\"M30.579 17.165h1.006c0-0.76-0.146-1.285-0.436-1.576s-0.816-0.436-1.576-0.436c-2.347 0-4.638 0.503-6.873 1.509l-0.838-4.358c2.458-1.006 5.14-1.509 8.046-1.509s4.973 0.542 6.202 1.626c1.229 1.084 1.844 2.889 1.844 5.414v6.035c0 1.609 0.168 3.174 0.503 4.693h-6.034c-0.134-0.76-0.246-1.542-0.335-2.346h-0.067c-0.603 0.805-1.386 1.453-2.347 1.944s-1.944 0.738-2.95 0.738c-1.721 0-3.101-0.475-4.14-1.425s-1.559-2.263-1.559-3.94c0-1.922 0.821-3.464 2.464-4.626s4.006-1.743 7.091-1.743zM26.723 22.864c0 1.006 0.558 1.508 1.676 1.508 0.961 0 1.732-0.268 2.313-0.805s0.872-1.274 0.872-2.212v-0.503h-1.006c-1.274 0-2.235 0.184-2.883 0.553s-0.972 0.855-0.972 1.459z\"></path>\n        <path class=\"path3\" d=\"M43.016 28.564v-25.144h6.705v25.144h-6.705z\"></path>\n        <path class=\"path4\"\n              d=\"M61.22 21.523h-0.068v7.040h-6.37v-25.144h6.37v14.080h0.068l4.627-6.37h7.207l-6.705 8.381 6.873 9.051h-7.207l-4.795-7.039z\"></path>\n        <path class=\"path5\"\n              d=\"M96.153 28.564v-9.722c0-1.341-0.124-2.224-0.369-2.648s-0.693-0.637-1.341-0.637c-0.582 0-1.062 0.285-1.442 0.855s-0.57 1.38-0.57 2.431v9.722h-6.102v-9.722c0-1.341-0.117-2.224-0.352-2.648s-0.676-0.637-1.325-0.637c-0.581 0-1.062 0.285-1.442 0.855s-0.569 1.38-0.569 2.431v9.722h-6.202v-17.432h5.698l0.135 2.347h0.068c0.625-0.827 1.352-1.48 2.179-1.961s1.654-0.721 2.481-0.721c1.073 0 1.928 0.184 2.565 0.553s1.224 1.022 1.761 1.961h0.067c0.961-0.939 1.845-1.592 2.649-1.961s1.72-0.553 2.749-0.553c1.921 0 3.313 0.525 4.174 1.576s1.29 2.872 1.29 5.465v10.727h-6.101z\"></path>\n        <path class=\"path6\"\n              d=\"M111.44 21.859c0.38 1.788 1.654 2.682 3.822 2.682 1.676 0 3.274-0.39 4.794-1.173l1.341 4.191c-2.057 0.894-4.292 1.341-6.705 1.341-2.884 0-5.197-0.816-6.94-2.448-1.744-1.631-2.615-3.832-2.615-6.604 0-2.794 0.799-5 2.397-6.621s3.761-2.431 6.487-2.431c2.793 0 4.973 0.788 6.537 2.364s2.346 3.805 2.346 6.688c0 0.603-0.055 1.274-0.168 2.012h-11.297zM111.373 18.171h5.665c0-2.123-0.949-3.185-2.849-3.185-1.721 0-2.66 1.062-2.816 3.185z\"></path>\n    </symbol>\n</svg>";

/***/ },
/* 465 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	searchRoutes.$inject = ['$stateProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _search = __webpack_require__(466);
	
	var _search2 = __webpack_require__(467);
	
	var _search3 = _interopRequireDefault(_search2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @ngInject */
	function searchRoutes($stateProvider) {
	  $stateProvider.state('home.search', {
	    url: '/search',
	    template: _search3.default,
	    controller: 'SearchController',
	    controllerAs: 'Search',
	    resolve: {
	      // Wait for `userData` before running
	      /*
	              userData: ($q, $state, UserData, Auth) => {
	                if (Auth.getAuthData()) {
	                  // If already logged in, redirect to Dashboard
	                  return UserData.getUserData()
	                    .then(user => {
	                      // TODO: Change state here
	                      return $q.resolve();
	                    }).catch(err => {
	                      Auth.logout();
	                      return null;
	                    });
	                }
	      
	                return null;
	              },
	      */
	      // Wait for `attributes` before running
	      /*
	              attributes: (userData, GroupAttributes, LOADING_TYPES, AppState, Auth) => {
	                /!*          // TODO: Uncomment this after integration with BE on Auth
	                 if (Auth.getAuthData()) {
	                 return null;
	                 }*!/
	      
	                AppState.setPreLoginMode(true);
	                return GroupAttributes.getGroupAttributes(LOADING_TYPES.preLogin)
	                  // In case of an error, don't fail the page load
	                  .catch(err => null);
	              },
	      */
	      // Wait for `translations` before running
	      /*
	              translations: ($translate, attributes, GroupTranslations) => {
	                // Flush cached translations
	                return $translate.refresh().then(() => $translate.use(GroupTranslations.getCurrentLanguage()));
	              }
	      */
	    }
	  });
	}
	
	exports.default = angular.module('states.search', []).controller('SearchController', _search.SearchController).config(searchRoutes);

/***/ },
/* 466 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SearchController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SearchController = exports.SearchController = function () {
	
	    /* @ngInject */
	
	    SearchController.$inject = ['$localStorage', '$scope', 'SearchModel', '$location', '$stateParams', '$state'];
	    function SearchController($localStorage, $scope, SearchModel, $location, $stateParams, $state) {
	        (0, _classCallCheck3.default)(this, SearchController);
	
	
	        this.$localStorage = $localStorage;
	        this.$scope = $scope;
	        this.$location = $location;
	        this.$stateParams = $stateParams;
	        this.$state = $state;
	
	        this.SearchModel = SearchModel;
	        this.searchresult = {};
	        this.query = $location.search().query;
	
	        if (this.query) {
	            this.getSearchResult(this.query);
	        }
	
	        /*this.$scope.$watchCollection(
	         () => this.searchresult,
	         (newVal) => {
	         if (!_.isEmpty(newVal)) {
	          }
	         }
	         );*/
	    }
	
	    /**
	     *
	     * @returns {*}
	     */
	
	
	    (0, _createClass3.default)(SearchController, [{
	        key: 'getSearchResult',
	        value: function getSearchResult(query) {
	            var _this = this;
	
	            var model = query;
	            this.SearchModel.get(model).then(function (searchresult_data) {
	                _this.searchresult = searchresult_data;
	                _this.$localStorage.searchresult = searchresult_data;
	                return searchresult_data;
	            });
	        }
	    }, {
	        key: 'go2FS',
	        value: function go2FS(hit) {
	            this.$state.go('home.talkFS', { objectID: hit.objectID });
	        }
	    }]);
	    return SearchController;
	}();

/***/ },
/* 467 */
/***/ function(module, exports) {

	module.exports = "<!--\t  main    -->\n<div class=\"main-pages\">\n<main class=\"w-container main-section\">\n    <header\n            on-search=\"Search.getSearchResult(query)\"\n            query=\"Search.query\">\n    </header>\n\n<!--\n    <section class=\"ask-question-container\">\n        <form ng-submit=\"Search.getSearchResult(query)\">\n            <div class=\"w-row\">\n                <div class=\"w-col w-col-7 w-col-small-7 w-col-tiny-12 w-col-big-mobile-12 column\">\n                    <input id=\"question-input\" class=\"w-input\" placeholder=\"מה השאלה שלך?\" type=\"text\" ng-model=\"query\">\n                </div>\n                <div class=\"w-col w-col-3 w-col-small-3 w-col-tiny-12 w-col-big-mobile-12 column\">\n                    <input id=\"tags-input\" class=\"w-input\" placeholder=\"הוסף מילות מפתח\" type=\"text\">\n                </div>\n                <div class=\"w-col w-col-2 w-col-small-2 w-col-tiny-12 w-col-big-mobile-12 column\">\n                    <input id=\"submit-button\" class=\"button\" type=\"submit\" value=\"שלח\">\n                </div>\n            </div>\n        </form>\n    </section>\n-->\n\n    <section class=\"w-container questions-container\">\n        <div class=\"w-row\">\n            <div class=\"w-col w-col-2 w-col-small-0 w-col-tiny-0 w-col-big-mobile-0 column categories-container\">\n                <div class=\"categories-header\">\n                    <h1 class=\"categories-title\">הנושאים החמים</h1>\n                </div>\n                <ul class=\"categories-list\">\n                    <li class=\"flex-box\"><a href=\"\">משקיעים</a></li>\n\n\n                </ul>\n\n\n            </div>\n            <div class=\"w-col w-col-10 w-col-small-12 w-col-tiny-12 w-col-big-mobile-12 column\">\n\n\n                <h1 ng-repeat=\"hit in Search.searchresult.hits\">\n\t\t\t\t\t\n\t\t\t   <!-- TO DO: add groupBy filter to ng-repeat      -->\t\t\n                    <div class=\"questions-group\">\n                        <div class=\"questions-header\">\n                            <svg class=\"icon icon-calendar\">\n                                <use xlink:href=\"#icon-calendar\"></use>\n                            </svg>\n                            <p class=\"calendar-number\">{{hit.question.date}}</p>\n\n                            <h1 class=\"questions-date\">{{hit.question.date}}</h1>\n                        </div>\n                        <div class=\"questions\">\n                            <div class=\"question-box\">\n                                <div class=\"w-row\">\n\n                                    <div class=\"w-col w-col-12 w-col-small-12 w-col-tiny-12 w-col-big-mobile-12 column\" ng-click=\"Search.go2FS(hit)\">\n                                        <!-- TODO ran: add owner image in ng-src  / check if we have it at the API    -->\n                                        <img class=\"owner-img\" ng-src=\"Search.searchresult.\">\n\t\t\t\t\t\t\t\t\t\t\n                                        <div class=\"flex-box\">\n                                            <h2 class=\"question-title\"> {{hit.question.message}}</h2>\n                                        </div>\n                                        <div class=\"flex-height\">\n\t\t\t\t\t\t\t\t\t\t\t\n                    \n                                            <div class=\"comments-button\">\n                                                <svg class=\"icon icon-comments\">\n                                                    <use xlink:href=\"#icon-comments\"></use>\n                                                </svg>\n                                                <p>{{hit.answers.length ? hit.answers.length : 'הגב' }}</p>\n                                            </div>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t <!-- TO DO: add ng-click upvote function      -->\t\t\t\n                                            <div class=\"upvote-button\">\n                                                <div class=\"triangle-button\"><span class=\"triangle triangle-up\"></span>\n                                                </div>\n\t\t\t\t\t\t\t\t\t\t\t\n                                                <p>{{hit.question.rating ? hit.question.rating : '0' }}</p>\n                                            </div>\n                                        </div>\n\n\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        \n\n                        </div>\n\n\n                    </div>\n\n                </h1>\n\n\n\n            </div>\n        </div>\n    </section>\n\n</main>\n</div>\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\">\n    <symbol id=\"icon-logo-small\" viewBox=\"0 0 1022 1024\">\n        <title>logo-small</title>\n        <path class=\"path1\"\n              d=\"M1023.040 1008.833c0 0.256 0 0.48 0 0.704-84.952 0.544-169.904 1.024-254.824 1.6-6.655 0.032-13.311 0.352-19.934 0.512-82.456 0-164.913 0-247.369 0-1.152-0.128-2.304-0.352-3.424-0.416-15.327-0.608-30.685-0.672-45.948-1.856-23.838-1.888-47.324-6.111-70.553-11.679-210.572-50.363-365.598-233.802-380.572-450.326-0.384-5.248-0.832-10.463-1.28-15.679 0-13.119 0-26.238 0-39.356 0.192-1.248 0.512-2.496 0.576-3.776 1.056-25.79 4.128-51.323 9.503-76.537 25.598-120.053 86.68-218.316 183.279-293.924 80.024-62.65 171.312-97.079 272.742-104.502 5.12-0.384 10.207-0.832 15.327-1.248 13.343 0 26.717 0 40.060 0 1.152 0.192 2.272 0.512 3.392 0.576 30.941 1.312 61.53 5.471 91.639 12.703 109.622 26.43 200.653 83.032 272.134 170.064 68.666 83.608 105.814 179.951 112.245 288.005 2.624 43.932-0.576 87.48-9.599 130.58-14.943 71.353-44.156 136.371-87.576 194.926-1.536 2.080-1.472 3.392-0.16 5.535 39.516 63.834 79.001 127.764 118.485 191.63 0.512 0.896 1.216 1.632 1.856 2.464zM494.834 839.569c177.839 2.272 331.137-138.355 331.777-326.465 0.64-181.167-146.194-327.361-327.329-327.553-179.823-0.16-324.29 143.475-328.001 319.906-3.84 183.535 143.347 332.193 323.554 334.113z\"></path>\n        <path class=\"path2\"\n              d=\"M397.019 276.198c42.428 0 83.896 0 126.356 0 0 40.764 0 81.624 0 123.22 35.325 0 69.657 0 104.406 0 0 28.381 0 55.963 0 84.312-34.365 0-68.698 0-103.254 0-0.384 1.6-0.8 2.528-0.8 3.424 0.032 37.021 0.032 74.009 0.256 111.030 0.032 5.28 0.672 10.559 1.536 15.775 2.88 17.79 11.679 26.302 29.661 25.406 16.702-0.832 33.309-4.224 49.915-6.623 3.168-0.48 6.239-1.568 10.207-2.624 4.352 29.309 8.639 58.043 13.119 88.12-11.007 2.304-21.63 5.024-32.413 6.751-36.637 5.919-73.465 9.023-110.358 2.688-57.531-9.887-83.992-44.892-87-99.447-2.464-44.668-1.248-89.592-1.664-134.387-0.032-2.976 0-5.951 0-9.535-22.686 0-44.764 0-67.386 0 0-28.381 0-56.155 0-84.6 22.142 0 44.188 0 67.386 0 0-20.894 0-41.18 0-61.434 0.032-20.414 0.032-40.796 0.032-62.074z\"></path>\n    </symbol>\n    <symbol id=\"icon-search\" viewBox=\"0 0 32 32\">\n        <title>search</title>\n        <path class=\"path1\"\n              d=\"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z\"></path>\n    </symbol>\n    <symbol id=\"icon-calendar\" viewBox=\"0 0 32 32\">\n        <title>calendar</title>\n        <path class=\"path1\"\n              d=\"M28 2.667v1.333c0 1.47-1.195 2.667-2.666 2.667s-2.667-1.196-2.667-2.667v-1.333h-13.333v1.333c0 1.47-1.196 2.667-2.667 2.667s-2.667-1.196-2.667-2.667v-1.333h-4v29.334h32v-29.334h-4zM29.334 29.334h-26.666v-18.667h26.666v18.667z\"></path>\n        <path class=\"path2\"\n              d=\"M26.666 1.333c0-0.736-0.596-1.333-1.333-1.333s-1.334 0.598-1.334 1.333v2.667c0 0.736 0.596 1.333 1.334 1.333s1.333-0.598 1.333-1.333v-2.667z\"></path>\n        <path class=\"path3\"\n              d=\"M8 4c0 0.736-0.596 1.333-1.333 1.333s-1.333-0.598-1.333-1.333v-2.667c0-0.736 0.596-1.333 1.333-1.333s1.333 0.598 1.333 1.333v2.667z\"></path>\n    </symbol>\n    <symbol id=\"icon-comments\" viewBox=\"0 0 32 32\">\n        <title>comments</title>\n        <path class=\"path1\"\n              d=\"M16 1.333c-8.451 0-16 5.635-16 13.343 0 2.733 0.985 5.417 2.729 7.5 0.073 2.44-1.364 5.941-2.657 8.491 3.469-0.627 8.401-2.011 10.637-3.381 12.315 2.996 21.291-4.54 21.291-12.609 0-7.749-7.601-13.343-16-13.343zM9.333 16.667c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM16 16.667c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22.667 16.667c-1.104 0-2-0.895-2-2s0.896-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z\"></path>\n    </symbol>\n</svg>\n\n";

/***/ },
/* 468 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	fsRoutes.$inject = ['$stateProvider'];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _talkFactSheet = __webpack_require__(469);
	
	var _talkFactSheet2 = __webpack_require__(470);
	
	var _talkFactSheet3 = _interopRequireDefault(_talkFactSheet2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/* @ngInject */
	function fsRoutes($stateProvider) {
	  $stateProvider.state('home.talkFS', {
	    url: '/talkFS/:objectID',
	    template: _talkFactSheet3.default,
	    controller: 'TalkFSController',
	    controllerAs: 'talkFS'
	  });
	}
	
	exports.default = angular.module('states.talkFS', []).controller('TalkFSController', _talkFactSheet.TalkFSController).config(fsRoutes);

/***/ },
/* 469 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TalkFSController = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var TalkFSController =
	
	/* @ngInject */
	exports.TalkFSController = function TalkFSController($localStorage, $scope, SearchModel, $stateParams) {
	    var _this = this;
	
	    (0, _classCallCheck3.default)(this, TalkFSController);
	
	
	    this.$localStorage = $localStorage;
	    this.$scope = $scope;
	    this.SearchModel = SearchModel;
	    this.$stateParams = $stateParams;
	
	    this.objectID = this.$stateParams.objectID;
	    this.fsResult = {};
	
	    this.SearchModel.getById(this.objectID).then(function (searchFsresult_data) {
	        _this.fsResult = searchFsresult_data;
	        _this.$localStorage.fsResult = searchFsresult_data;
	        console.log(searchFsresult_data);
	        return searchFsresult_data;
	    }, function (err) {
	        console.log(err);
	    });
	};

/***/ },
/* 470 */
/***/ function(module, exports) {

	module.exports = "<!--\t  main    -->\n<div class=\"main-pages\">\n    <!--\n        TO Do: why we need the header also here - maybe form here we need only to go back to the search screen\n    -->\n\n    <!--\t    <header\n                on-search=\"Search.getSearchResult(query)\">\n        </header>-->\n    <main class=\"w-container main-section\">\n\n        <section class=\"inside-question-container\">\n            <div class=\"w-row\">\n                <div class=\"w-col w-col-12 w-col-small-12 w-col-tiny-12 w-col-big-mobile-12 column\">\n\n\n                    <!--\t\t\t\t\tTO DO: create backgroundImgUrl variable to add a random image to every quesion-->\n                    <div class=\"inside-question-header\"\n                         style=\"background-image: linear-gradient(to bottom, rgba(0, 0, 0, .4), rgba(0, 0, 0, .6)), url({{ backgroundImgUrl }});\">\n\n                        <div class=\"question-header-box\">\n                            <div class=\"owner-container\">\n\n                                <!--\t\t\t\t\tTO DO: add question owner image and username here-->\n                                <img class=\"owner-img standalone-question\" ng-src=\"{{ UserImg }}\">\n\n                                <div class=\"flex-box\">\n                                    <p class=\"owner-name standalone-question\">{{ UserName }}</p>\n                                </div>\n                            </div>\n                            <div class=\"flex-box\">\n\n                                <!--\t\t\t\t\tTO DO: add quoestion title here -->\n                                <h2 class=\"question-title standalone\"> {{talkFS.fsResult.question.message}}\n                                </h2>\n                            </div>\n                            <div class=\"flex-height big\">\n                                <div class=\"comments-button big\">\n                                    <svg class=\"icon icon-comments big\">\n                                        <use xlink:href=\"#icon-comments\"></use>\n                                    </svg>\n\n                                    <!--\t\t\t\t\tTO DO: add comments number here -->\n                                    <p>{{talkFS.fsResult.answers.length}}</p>\n                                </div>\n                                <div class=\"upvote-button big\">\n                                    <div class=\"triangle-button big\"><span class=\"triangle triangle-up\"></span></div>\n\n                                    <!--\t\t\t\t\tTO DO: add upvotes number here -->\n                                    <p>{{talkFS.fsResult.question.rating}}</p>\n                                </div>\n                            </div>\n\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"w-col w-col-9 w-col-small-9 w-col-tiny-12 w-col-big-mobile-12 column\">\n\n                    <!--\t\t\t\t\tTO DO: add currentUser object: if currentUser exists show the comment box -->\n                    <div class=\"comment-box\">\n                        <div class=\"profile-comment-section\">\n                            <div class=\"round-profile feed comment\">\n\n                                <!--\t\t\t\t\tTO DO: add currentUser image -->\n                                <img class=\"owner-img small\"\n                                     ng-src=\"https://graph.facebook.com/1498967693721500/picture?width=200&height=200\"\n                                     alt=\"profile-image\"></div>\n                        </div>\n                        <div class=\"comment-section\">\n                            <div class=\"arrow-left\"></div>\n\n                            <form class=\"record-form\">\n\n                                <!--\tadd textAngular: a rich wysiwyg text editor with an html output -->\n                                <div text-angular autolinker name=\"postDescription\" focus=\"enableFocus === true\"\n                                     id=\"postDescription\" ng-model=\"postDescription\" ng-change=\"enableShare()\"\n                                     ta-toolbar=\"[['bold', 'italics', 'ul', 'ol'],['insertLink']]\"\n                                     placeholder=\"What do you think about it?\"></div>\n\n\n                                <div class=\"comment-buttons-section\">\n                                    <div class=\"tiny-button-box tooltip-bottom\" data-tooltip=\"אפשרויות עיצוב\"\n                                         ng-click=\"toggleFormatBox();\">\n                                        <svg class=\"icon icon-font\">\n                                            <use xlink:href=\"#icon-font\"></use>\n                                        </svg>\n                                    </div>\n\n\n                                    <!--\t\t\t\t\tTO DO: submit button for the comment -->\n                                    <input id=\"share-comment\" class=\"w-button post-button comment\" type=\"submit\"\n                                           data-ng-mousedown=\"definePost(talk)\" value=\"פרסם\" disabled>\n\n                                </div>\n\n\n                            </form>\n\n                        </div>\n                    </div>\n\n                    <div class=\"answers-group\">\n                        <div class=\"answers-header\">\n                            <h1 class=\"answers-header-title\">תגובות</h1>\n                        </div>\n                        <div class=\"answers\">\n\n\n                            <!--\t\t\t\t\tNG-REPEAT: repeat all comments on this quesion -->\n\n\n                            <div class=\"answer-box\" ng-repeat=\"answer in talkFS.fsResult.answers\">\n                                <div class=\"w-row\">\n\n                                    <div class=\"w-col w-col-12 w-col-small-12 w-col-tiny-12 w-col-big-mobile-12 column\">\n                                        <div class=\"answer-owner-container\">\n\n                                            <!--\t\t\t\t\tTO DO: add comment owner image and username here (option to have also a smal bio) -->\n                                            <img class=\"owner-img small\"\n                                                 src=\"https://graph.facebook.com/1498967693721500/picture?width=200&height=200\">\n\n                                            <div class=\"owner-wrap\">\n                                                <p class=\"owner-name small\">{{answer.from.name}}</p>\n\n<!--\n                                                todo think if we can have a person title - ממיסדי /vp product...\n-->\n                                                <div class=\"owner-stats\">\n                                                    <span class=\"dashline\"></span>\n                                                    <span class=\"owner-mantra\"></span>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                        <div class=\"answer-text-box\">\n\n                                            <!--\t\t\t\t\tTO DO: add comment title -->\n                                            <p class=\"answer-title\">{{answer.message}}</p>\n\n                                        </div>\n                                        <div class=\"flex-height answer\">\n                                            <div class=\"upvote-button small\">\n                                                <div class=\"triangle-button small\"><span\n                                                        class=\"triangle triangle-up small\"></span></div>\n\n                                                <!--\t\t\t\t\tTO DO: add upvote number -->\n                                                <p>{{answer.like_count}}</p>\n                                            </div>\n                                            <div class=\"comments-button small\">\n                                                <svg class=\"icon icon-comments small\">\n                                                    <use xlink:href=\"#icon-comments\"></use>\n                                                </svg>\n\n\n                                                <!--\t\t\t\t\tTO DO: add comments number -->\n                                                <p>הגב</p>\n                                            </div>\n\n                                            <!--\t\t\t\t\tTO DO: add comment upload date -->\n                                            <p class=\"answer-date\">{{answer.like_count}} </p>\n                                        </div>\n\n\n                                    </div>\n\n                                </div>\n\n\n<!--                                &lt;!&ndash;\t\t\t\t\tNG-IF: if someone commented on this comment show this html &ndash;&gt;\n                                <ul class=\"answer-comments\">\n\n                                    &lt;!&ndash;\t\t\t\t\ttodo ran add datat for comments NG-REPEAT: show all li comment answers &ndash;&gt;\n                                    <li>\n                                        <div class=\"answer-box\">\n                                            <div class=\"w-row\">\n\n                                                <div class=\"w-col w-col-12 w-col-small-12 w-col-tiny-12 w-col-big-mobile-12 column\">\n                                                    <div class=\"answer-owner-container\">\n\n                                                        &lt;!&ndash;\t\t\t\t\tTO DO: add comment owner image and username here (option to have also a smal bio) &ndash;&gt;\n                                                        <img class=\"owner-img small\"\n                                                             src=\"https://graph.facebook.com/1498967693721500/picture?width=200&height=200\">\n\n                                                        <div class=\"owner-wrap\">\n                                                            <p class=\"owner-name small\">Elad Lev</p>\n\n                                                            <div class=\"owner-stats\">\n                                                                <span class=\"dashline\"> — </span>\n                                                                <span class=\"owner-mantra\">ממייסדי Talkme</span>\n                                                            </div>\n\n                                                        </div>\n                                                    </div>\n\n                                                    &lt;!&ndash;\t\t\t\t\tTO DO: add comment title &ndash;&gt;\n                                                    <div class=\"answer-text-box\">\n                                                        <p class=\"answer-title\">כן, אבל יכול להיות שהמשקיע ישים כסף אם\n                                                            הוא יראה שמות גדולים... תחשוב אם יש לנו 3 סטארט אפים לבחור\n                                                            מבינהם, אבל לאחד יש advisory board מפוצץ אז הוא יודע שאותה\n                                                            חברה תקבל קשרים טובים ואם היא בנתה קשרים ממש טובים בתחילת\n                                                            הדרך אז בכלל היא תצליח בהמשך הדרך</p>\n\n                                                    </div>\n                                                    <div class=\"flex-height answer\">\n                                                        <div class=\"upvote-button small\">\n                                                            <div class=\"triangle-button small\"><span\n                                                                    class=\"triangle triangle-up small\"></span></div>\n\n                                                            &lt;!&ndash;\t\t\t\t\tTO DO: add upvote number &ndash;&gt;\n                                                            <p>3</p>\n                                                        </div>\n                                                        <div class=\"comments-button small\">\n                                                            <svg class=\"icon icon-comments small\">\n                                                                <use xlink:href=\"#icon-comments\"></use>\n                                                            </svg>\n\n                                                            &lt;!&ndash;\t\t\t\t\tTO DO: add comments number &ndash;&gt;\n                                                            <p>הגב</p>\n                                                        </div>\n\n                                                        &lt;!&ndash;\t\t\t\t\tTO DO: add comment upload date &ndash;&gt;\n                                                        <p class=\"answer-date\">פורסם ב 5 למרץ</p>\n                                                    </div>\n\n\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </li>\n                                </ul>-->\n\n\n                            </div>\n\n                            <!--\t\t\tend of answers ng-repeat-->\n\n                        </div>\n\n\n                    </div>\n\n                </div>\n                <div class=\"w-col w-col-3 w-col-small-3 w-col-tiny-12 w-col-big-mobile-12 column\">\n                    <div class=\"answers-header\">\n                        <h1 class=\"answers-header-title\">קשורים</h1>\n                    </div>\n                    <ul class=\"categories-list\">\n                        <li class=\"flex-box\"><a href=\"\">איך כדאי לחלק את האחוזים בין שותפים?</a></li>\n                        <li class=\"flex-box\"><a href=\"\">כמה אחוזים כדאי לתת לשותף טכנולוגי?</a></li>\n                        <li class=\"flex-box\"><a href=\"\">היי חברים!\n                            קרה לכם פעם שהכרתם מישהו/י נהדר/ת שמוכנ/ה לעזור עם קשרים אסטרטגיים ועזרה רלוונטית, ואתם ללא\n                            רווחים ולפני גיוס. מה הייתם מציעים לו/לה בתמורה?</a></li>\n                        <li class=\"flex-box\"><a href=\"\">איך כדאי לחלק את האחוזים בין שותפים</a></li>\n\n\n                    </ul>\n\n                </div>\n\n            </div>\n        </section>\n\n    </main>\n</div>\n\n\n<svg xmlns=\"http://www.w3.org/2000/svg\" style=\"display:none;\">\n    <symbol id=\"icon-logo-small\" viewBox=\"0 0 1022 1024\">\n        <title>logo-small</title>\n        <path class=\"path1\"\n              d=\"M1023.040 1008.833c0 0.256 0 0.48 0 0.704-84.952 0.544-169.904 1.024-254.824 1.6-6.655 0.032-13.311 0.352-19.934 0.512-82.456 0-164.913 0-247.369 0-1.152-0.128-2.304-0.352-3.424-0.416-15.327-0.608-30.685-0.672-45.948-1.856-23.838-1.888-47.324-6.111-70.553-11.679-210.572-50.363-365.598-233.802-380.572-450.326-0.384-5.248-0.832-10.463-1.28-15.679 0-13.119 0-26.238 0-39.356 0.192-1.248 0.512-2.496 0.576-3.776 1.056-25.79 4.128-51.323 9.503-76.537 25.598-120.053 86.68-218.316 183.279-293.924 80.024-62.65 171.312-97.079 272.742-104.502 5.12-0.384 10.207-0.832 15.327-1.248 13.343 0 26.717 0 40.060 0 1.152 0.192 2.272 0.512 3.392 0.576 30.941 1.312 61.53 5.471 91.639 12.703 109.622 26.43 200.653 83.032 272.134 170.064 68.666 83.608 105.814 179.951 112.245 288.005 2.624 43.932-0.576 87.48-9.599 130.58-14.943 71.353-44.156 136.371-87.576 194.926-1.536 2.080-1.472 3.392-0.16 5.535 39.516 63.834 79.001 127.764 118.485 191.63 0.512 0.896 1.216 1.632 1.856 2.464zM494.834 839.569c177.839 2.272 331.137-138.355 331.777-326.465 0.64-181.167-146.194-327.361-327.329-327.553-179.823-0.16-324.29 143.475-328.001 319.906-3.84 183.535 143.347 332.193 323.554 334.113z\"></path>\n        <path class=\"path2\"\n              d=\"M397.019 276.198c42.428 0 83.896 0 126.356 0 0 40.764 0 81.624 0 123.22 35.325 0 69.657 0 104.406 0 0 28.381 0 55.963 0 84.312-34.365 0-68.698 0-103.254 0-0.384 1.6-0.8 2.528-0.8 3.424 0.032 37.021 0.032 74.009 0.256 111.030 0.032 5.28 0.672 10.559 1.536 15.775 2.88 17.79 11.679 26.302 29.661 25.406 16.702-0.832 33.309-4.224 49.915-6.623 3.168-0.48 6.239-1.568 10.207-2.624 4.352 29.309 8.639 58.043 13.119 88.12-11.007 2.304-21.63 5.024-32.413 6.751-36.637 5.919-73.465 9.023-110.358 2.688-57.531-9.887-83.992-44.892-87-99.447-2.464-44.668-1.248-89.592-1.664-134.387-0.032-2.976 0-5.951 0-9.535-22.686 0-44.764 0-67.386 0 0-28.381 0-56.155 0-84.6 22.142 0 44.188 0 67.386 0 0-20.894 0-41.18 0-61.434 0.032-20.414 0.032-40.796 0.032-62.074z\"></path>\n    </symbol>\n    <symbol id=\"icon-search\" viewBox=\"0 0 32 32\">\n        <title>search</title>\n        <path class=\"path1\"\n              d=\"M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z\"></path>\n    </symbol>\n    <symbol id=\"icon-calendar\" viewBox=\"0 0 32 32\">\n        <title>calendar</title>\n        <path class=\"path1\"\n              d=\"M28 2.667v1.333c0 1.47-1.195 2.667-2.666 2.667s-2.667-1.196-2.667-2.667v-1.333h-13.333v1.333c0 1.47-1.196 2.667-2.667 2.667s-2.667-1.196-2.667-2.667v-1.333h-4v29.334h32v-29.334h-4zM29.334 29.334h-26.666v-18.667h26.666v18.667z\"></path>\n        <path class=\"path2\"\n              d=\"M26.666 1.333c0-0.736-0.596-1.333-1.333-1.333s-1.334 0.598-1.334 1.333v2.667c0 0.736 0.596 1.333 1.334 1.333s1.333-0.598 1.333-1.333v-2.667z\"></path>\n        <path class=\"path3\"\n              d=\"M8 4c0 0.736-0.596 1.333-1.333 1.333s-1.333-0.598-1.333-1.333v-2.667c0-0.736 0.596-1.333 1.333-1.333s1.333 0.598 1.333 1.333v2.667z\"></path>\n    </symbol>\n    <symbol id=\"icon-comments\" viewBox=\"0 0 32 32\">\n        <title>comments</title>\n        <path class=\"path1\"\n              d=\"M16 1.333c-8.451 0-16 5.635-16 13.343 0 2.733 0.985 5.417 2.729 7.5 0.073 2.44-1.364 5.941-2.657 8.491 3.469-0.627 8.401-2.011 10.637-3.381 12.315 2.996 21.291-4.54 21.291-12.609 0-7.749-7.601-13.343-16-13.343zM9.333 16.667c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM16 16.667c-1.105 0-2-0.895-2-2s0.895-2 2-2 2 0.895 2 2-0.895 2-2 2zM22.667 16.667c-1.104 0-2-0.895-2-2s0.896-2 2-2c1.105 0 2 0.895 2 2s-0.895 2-2 2z\"></path>\n    </symbol>\n</svg>\n\n\n";

/***/ },
/* 471 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _signInManager = __webpack_require__(472);
	
	exports.default = angular.module('si.managers', []).service('SignInManager', _signInManager.SignInManager);

/***/ },
/* 472 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.SignInManager = undefined;
	
	var _classCallCheck2 = __webpack_require__(137);
	
	var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
	
	var _createClass2 = __webpack_require__(139);
	
	var _createClass3 = _interopRequireDefault(_createClass2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var SignInManager = exports.SignInManager = function () {
	
	  /* @ngInject */
	
	  SignInManager.$inject = ['Auth', 'Modal', 'UserData'];
	  function SignInManager(Auth, Modal, UserData) {
	    (0, _classCallCheck3.default)(this, SignInManager);
	
	    this.Auth = Auth;
	    this.Modal = Modal;
	    this.UserData = UserData;
	  }
	
	  /**
	   * Start login flow. Opens `Login` modal. When Login modal is closed or dismissed,
	   * goes to either:
	   *
	   * 1. If user hasn't agreed to terms - goes to disclaimer
	   * 2. If user has loggedin - does some postLogin actions and goes to dashboard
	   * 3. If user doesn't have an account yet - goes to signup
	   * 4. If user lost his password - goes to lostPassword
	   */
	
	
	  (0, _createClass3.default)(SignInManager, [{
	    key: 'login',
	    value: function login() {
	      var _this = this;
	
	      this.Modal.open('Login').then(function (user) {
	        //TODO: Uncomment this after implementing disclaimer
	        //  const agreedToTerms = !!user.AgreeToTerms;
	        //  // Show disclaimer if a user still hasn't agreed to terms
	        //  if (!agreedToTerms) {
	        //    return this.disclaimer();
	        //  }
	        //  else {
	        _this.Auth.postLogin(user);
	        _this.redirectToDashboard();
	        //}
	      },
	      // In cases modal was dismissed
	      function () {
	        var reason = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	
	        switch (reason) {
	          case 'signup':
	            {
	              _this.signup();
	              break;
	            }
	          case 'lostPassword':
	            {
	              _this.lostPassword();
	              break;
	            }
	          case 'confirmCode':
	            {
	              _this.confirmCode('Login');
	              break;
	            }
	          default:
	            break;
	        }
	      });
	    }
	
	    /**
	     * Opens `Sign Up` modal. On modals' close (not dismiss), fetches user's data and redirects to disclaimer
	     * if user has selected packages, or stays on Wizard if none were selected.
	     */
	
	  }, {
	    key: 'signup',
	    value: function signup() {
	      var _this2 = this;
	
	      this.Modal.open('SignUp').then(function () {
	        return _this2.confirmCode('SignUp');
	      });
	    }
	
	    /**
	     * Opens `Disclaimer` modal. On Disclaimer close (not dismiss), goes to either:
	     * Add Packages nodal (if user has selected packages);
	     * Dashboard (if none above)
	     *
	     * On dismiss (user hasn't agreed to terms), logs user out and re-directs to wizard state.
	     */
	
	  }, {
	    key: 'disclaimer',
	    value: function disclaimer() {}
	    /*const showOnlyText = false;
	     const actions      = {
	     agreeToTerms: () => this.UserData.setUserAgreeToTerms()
	     };
	      const noChosenPackages  = _.isEmpty(this.WizardPackages.selectedPackages);
	     const noAccountPackages = _.isEmpty(this.DashboardPackages.accountPackages.DashboardPackages);
	      if (noChosenPackages && noAccountPackages) {
	     return this.Launcher.open('Disclaimer', {showOnlyText, actions})
	     .then(() => this.UserData.getUserData())
	     .then(() => {
	     if (this.Helper.isMobile()) {
	     this.redirectToDashboard();
	     }
	     })
	     .catch(() => {
	     this.redirectToWizard();
	     });
	     }
	      this.redirectToDashboard().then(() => {
	     this.Launcher.open('Disclaimer', {showOnlyText, actions})
	     .then(() => {
	     this.UserData.getUserData().then(() => {
	     if (!noChosenPackages) {
	     return this.addPackages();
	     }
	     })
	     }).catch(() => {
	     this.redirectToLogout();
	     })
	     });*/
	
	
	    /**
	     * Opens `Lost Password` modal.
	     */
	
	  }, {
	    key: 'lostPassword',
	    value: function lostPassword() {
	      var _this3 = this;
	
	      this.Modal.open('LostPassword').then(function () {
	        return _this3.confirmCode('LostPassword');
	      });
	    }
	  }, {
	    key: 'confirmCode',
	    value: function confirmCode(opener) {
	      var _this4 = this;
	
	      var _resolvedData = {
	        email: this.UserData.getActiveUser().Email,
	        opener: opener
	      };
	      this.Modal.open('ConfirmCode', { resolvedData: function resolvedData() {
	          return _resolvedData;
	        } }).then(function (user) {
	        if (opener === 'LostPassword') {
	          _this4.resetPassword();
	        } else {
	          _this4.Auth.postLogin(user);
	          _this4.redirectToDashboard();
	        }
	      });
	    }
	  }, {
	    key: 'resetPassword',
	    value: function resetPassword() {
	      var _this5 = this;
	
	      this.Modal.open('NewPassword', { email: function email() {
	          return _this5.UserData.getActiveUser().Email;
	        } }).finally(function () {
	        return _this5.login();
	      });
	    }
	
	    /**
	     * If there's wizard selection and it's done (`strategy` key, which is the last
	     * one in the flow, exists) then save them on server for user.
	     *
	     * Redirects to Dashboard state.
	     */
	
	  }, {
	    key: 'redirectToDashboard',
	    value: function redirectToDashboard() {}
	    /*    if (this.$localStorage.wizardSelection && this.$localStorage.wizardSelection.strategy) {
	     this.UserData.saveTradingPreferences(this.$localStorage.wizardSelection);
	     }
	      return this.$state.go('home.account.dashboard');*/
	
	
	    /**
	     * Logs user out, re-directs to Wizard state.
	     */
	
	  }, {
	    key: 'redirectToWizard',
	    value: function redirectToWizard() {}
	    /*    this.Auth.logout();
	     this.$state.go('home.wizard');*/
	
	
	    /**
	     * Logs user out, re-directs to Wizard state.
	     */
	
	  }, {
	    key: 'redirectToLogout',
	    value: function redirectToLogout() {
	      /*    this.Auth.logout();
	       this.$state.go('home.logout');*/
	    }
	  }, {
	    key: 'updateTranslations',
	    value: function updateTranslations() {
	      /*    this.AppState.setPreLoginMode(false);
	        // Flush cached translations
	       this.$translate.refresh();
	        return this.$translate.use(this.GroupTranslations.currentLanguage);*/
	    }
	  }]);
	  return SignInManager;
	}();

/***/ }
]);