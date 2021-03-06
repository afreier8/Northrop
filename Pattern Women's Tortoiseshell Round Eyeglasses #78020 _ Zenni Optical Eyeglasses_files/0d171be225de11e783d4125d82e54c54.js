(function(){Function.prototype.bind=Function.prototype.bind||function(a){var c=this;return function(){return c.apply(a,arguments)}}})();var EMPTY_FUN=function(){},UNDEF;
(function(){function a(){}var c=null;try{c=(0,eval)("this")||function(){return this}()}catch(b){}a.global=function(){return c};a.namespace=function(b,g,e,k){b=b.split(".");var l=a.NAMESPACE_BASE||a.global(),f=null,m=null,l=e||l;for(e=0;e<b.length-1;e+=1)m=b[e],l[m]=l[m]||{},l=l[m];f=l;m=b[b.length-1];c.TAGSDK_NS_OVERRIDE&&(k=!1);void 0!==g?void 0!==f[m]&&k||(f[m]=g):f[m]=f[m]||{};return f[m]};a.clazz=function(b,c,e,k,l){a.namespace(b,c,k,!0);"function"===typeof e&&(c.superclass=e,c.prototype=new c.superclass(l));
c.prototype&&(b=b.split("."),c.prototype.CLASS_NAME=b[b.length-1],b.splice(b.length-1,1),c.prototype.PACKAGE_NAME=b.join("."));return c};a.clazz("taginspector.Define",a)})();
(function(){function a(a){if(a)if(a.alphabet)for(this.alphabet=a.alphabet,this.dict={},a=0;a<this.alphabet.length;a++)this.dict[this.alphabet[a]]=a;else this.alphabet=b,this.dict=e}function c(a,b){for(var f in b)if(a===b[f])return f;return null}for(var b=[],d=Math.pow(2,8),g=0;g<d;g++)b.push(String.fromCharCode(g));for(var e={},d=0;d<b.length;d++)e[b[d]]=d;taginspector.Define.clazz("taginspector.compression.LZW",a);a.prototype.encode=function(a){for(var b=this.alphabet.length,f={},d=[],e=0,h=a.charAt(e++),
p,n=this.dict;p=a.charAt(e++);){var q=h+p;if(n.hasOwnProperty(q)||f.hasOwnProperty(q))h=q;else{var c=n.hasOwnProperty(h)?n[h]:f[h];if(void 0===c)throw"Dictionary base is to small for those contents: "+h;d.push(c);f[q]=b++;h=p}}""!==h&&d.push(f.hasOwnProperty(h)?f[h]:n[h]);return d};a.prototype.decode=function(a){for(var b=this.dict,f=this.alphabet.length,d,e={},h=c(a[0],b),p=h,n=[h],q=1;q<a.length;q++){var g=a[q];d=c(g,b);null===d&&(e.hasOwnProperty(g)&&(d=e[g]),null===d&&(d=p+h));n.push(d);h=d.charAt(0);
e[f++]=p+h;p=d}return n.join("")}})();
(function(){function a(a){}for(var c={},b=0;45>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]=b;for(var d={},b=0;45>b;b++)d['ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b)]=b;for(var g={},b=0;45>b;b++)g["abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(b)]='ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-+()@{|}"]^_`~$&#'.charAt(b);var e="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".split(""),k=e.length,l=new taginspector.compression.LZW({});taginspector.Define.clazz("taginspector.compression.Compressor",
a);a.prototype.compress=function(a,b){for(var d=(b||l).encode(a),h=[],p=0;p<d.length;p++)h.push(String.fromCharCode(d[p]));return h.join("")};a.prototype.compressAnsi=function(a,b){for(var d=(b||l).encode(a),h=[],p=0;p<d.length;p++){var n;n=d[p];var q=0,c=0>n;c&&(n=-n);var v="",x=!0;do q=n%k,x?(v=g[e[q]],x=!1):v=e[q]+v,n=(n-q)/k;while(0<n);n=c?"-"+v:v;h.push(n)}return h.join("")};a.prototype.decompressAnsi=function(a,b){for(var e=[],h="",p=0;p<a.length;p++){var n=a.charAt(p);if(d.hasOwnProperty(n)){for(var n=
h+n,h="",q=0,g=0,v=!0,x=0;x<n.length;x++){var r=n.charAt(n.length-1-x);v&&(v=!1,r="abcdefghijklmnopqrstuvwxyz0123456789'%./:<>?[".charAt(d[r]));q+=c[r]*Math.pow(k,g++)}n=q;e.push(n)}else h+=n}return(b||l).decode(e)};a.prototype.decompress=function(a,b){for(var d=[],h=0;h<a.length;h++)d.push(a.charCodeAt(h));return(b||l).decode(d)}})();
(function(){function a(a){}for(var c={},b=0;93>b;b++)c["abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=".charAt(b)]=b;taginspector.Define.clazz("taginspector.Cookie",a);a.cookieAlphabet="abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ*!-#$&+()@'%./:<>?[\"]^_`{|}~\\;=";a.cookieAlphabetMap=c;a.decode=function(a){return decodeURIComponent(a)};a.encode=function(a){return encodeURIComponent(a)};a.set=function(b,c,e,k,l){if(e){var f=new Date;
f.setTime(f.getTime()+864E5*e);e="; expires="+f.toGMTString()}else e="";l&&(b=a.encode(b),c=a.encode(c));b=b+"="+c+e+"; path=/;";k&&(b+=" domain="+k);document.cookie=b};a.get=function(b,c){for(var e=b+"=",k=document.cookie.split(";"),l=0;l<k.length;l++){for(var f=k[l];" "===f.charAt(0);)f=f.substring(1,f.length);if(0===f.indexOf(e))return e=f.substring(e.length,f.length),c&&(e=a.decode(e)),e}return null};a.getAll=function(b,c){for(var e=b+"=",k=document.cookie.split(";"),l=[],f=0;f<k.length;f++){for(var m=
k[f];" "===m.charAt(0);)m=m.substring(1,m.length);0===m.indexOf(e)&&(m=m.substring(e.length,m.length),c&&(m=a.decode(m)),l.push(m))}return l};a.rm=function(b,c){a.set(b,"",-1,c)}})();
(function(){function a(b,f,e){this.collectLogs=!!a.COLLECT;this.collectLocally=e;this.collection=[];this.getPrefix=function(){var a="";f&&("function"===typeof f?a=f(this.ref):f.CLASS_NAME?a=f.CLASS_NAME:f.constructor&&f.constructor.name&&(a=f.constructor.name),a&&(a+=" -> "));return(b||"")+a}}function c(b,f,e,c,h,p,n,q){var d=a.LEVEL>=q;if(0<=a.COLLECT_LEVEL||d)f=h?[c,n,e]:[f+b.getPrefix()+c,p,e],f[3]=q,b.collect(f,q),d&&b.printMessage.apply(b,f)}var b=taginspector.Define,d=null;b.clazz("taginspector.datapulse.Log",
a);a.LEVEL_FINEST=4;a.LEVEL_FINE=3;a.LEVEL_INFO=2;a.LEVEL_WARN=1;a.LEVEL_ERROR=0;a.LEVEL_NONE=-1;a.MAX_LOG_LEN=1E4;a.prototype.MAX_LOG_LEN=-1;a.LEVEL=a.LEVEL_NONE;a.LEVEL=a.LEVEL_INFO;a.COLLECT_LEVEL=a.LEVEL_FINE;a.COLLECT=!0;var g=[];a.logsCollection=g;a.rePrintAll=function(b,f,e,c){var h=a.LEVEL;void 0!==b&&(a.LEVEL=b);try{if(a.COLLECT){try{e||d.clear()}catch(p){}var n=c||a.logsCollection,q=0;for(e=0;e<n.length;e++)(function(p){var e=n[p];p=e[3];void 0!==p&&a.LEVEL>=p&&(q++,f?taginspector.datapulse.Timed.setTimeout(function(){void 0!==
b&&(a.LEVEL=b);try{a.print.apply(a,e)}finally{a.LEVEL=h}},q*f):a.print.apply(a,e))})(e)}}catch(g){}finally{a.LEVEL=h}};a.isStyleSupported=function(){return!1};var e={};a.setConsole=function(a){return d=a=a||e};a.delayPrint=-1;var k=(new Date).valueOf();a.prototype.printMessage=function(b,e,c,d){if(0<a.delayPrint){var h=a.delayPrint,p=k-(new Date).valueOf();0<p&&(h+=p);try{taginspector.datapulse.Timed.setTimeout(function(){this.print(b,e,c,d)}.bind(this),h)}catch(n){setTimeout(function(){this.print(b,
e,c,d)}.bind(this),h)}k=(new Date).valueOf()+h}else this.print(b,e,c,d)};a.prototype.print=function(b,e,c,d){a.print(b,e,c,d)};a.print=function(b,e,c,g){if(!(void 0!==g&&a.LEVEL<g))try{if(d&&d.log)if(e&&a.isStyleSupported())if(c&&d[c])d[c]("%c"+b,e);else d.log("%c"+b,e);else if(c&&d[c])d[c](b);else d.log(b)}catch(h){}};a.prototype.collect=function(b,e){void 0===e&&(e=a.COLLECT_LEVEL);var c=!1,d=this.collectLogs&&a.COLLECT&&a.COLLECT_LEVEL>=+e;d&&(g.push(b),c=!0);this.collectLocally&&d&&(this.collection.push(b),
c=!0);0<a.MAX_LOG_LEN&&g.length>a.MAX_LOG_LEN&&g.splice(0,g.length-a.MAX_LOG_LEN);if(0<a.MAX_LOG_LEN||0<this.MAX_LOG_LEN)d=a.MAX_LOG_LEN,0<this.MAX_LOG_LEN&&(d=this.MAX_LOG_LEN),this.collection.length>d&&this.collection.splice(0,this.collection.length-d);return c?b:null};a.clearAllLogs=function(){try{d.clear()}catch(a){}finally{g.splice(0,g.length)}};a.getCollectedByLevel=function(a,b){b=b||g;for(var e=[],c=0;c<b.length;c++){var h=b[c];h[0][4]===a&&e.push(h)}return e};a.prototype.rePrint=function(b,
e,c){a.rePrintAll(b,e,!c,this.collection)};a.prototype.FINEST=function(b,e){c(this,"FINEST: ",!1,b,e,"color:#CCCCCC;",!1,a.LEVEL_FINEST)};a.prototype.FINE=function(b,e){c(this,"FINE: ",!1,b,e,"color:#999999;",!1,a.LEVEL_FINE)};a.prototype.INFO=function(b,e,d){c(this,"INFO: ","info",b,e,d,d,a.LEVEL_INFO)};a.prototype.WARN=function(b,e){c(this,"WARN: ","warn",b,e,"color:#26A110;",!1,a.LEVEL_WARN)};a.prototype.ERROR=function(b,e){c(this,"ERROR: ","error",b,e,"color:red;",!1,a.LEVEL_ERROR)};a.setConsole(b.global().console)})();
(function(){function a(a){for(var b=[],h=0;h<a.length;h++){var e=g(a[h][0]);b.push([new RegExp(e,"g"),"*"+a[h][1]])}return b}function c(a,b){for(var h=0;h<b.length;h++)if(b[h][1]===a)return b[h][0];return null}function b(b){this._regexDefs=m;this._defs=f;b&&b.definitions&&(this._regexDefs=a(b.definitions),this._defs=b.definitions)}function d(a,b){for(var h=[],e=0;e<a.length;e++){var c=!0;b&&(c=a.charCodeAt(e)<=b);var d=l.cookieAlphabetMap.hasOwnProperty(a.charAt(e));c&&!d?h.push("*"+a.charCodeAt(e)+
"."):h.push(a.charAt(e))}return h.join("")}function g(a){return a.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")}function e(a){for(var b={},e="",c=0;c<a.length;c++){var d=a.charAt(c);switch(d){case "=":case "&":case "?":case "/":case "*":case ",":case ":":isNaN(b[e])&&(b[e]=a.split(e).length-1);e="";break;default:e+=d}}a=[];for(var f in b)b.hasOwnProperty(f)&&(e=b[f],e>=h&&f.length>=s&&a.push([f,e]));return a=a.sort(function(a,b){return a[0].length===b[0].length?0:b[0].length>a[0].length?1:-1})}var k=
taginspector.Define,l=taginspector.Cookie,f=[['","referrer":[{"url":"http://',"1-"],['","referrer":[{"url":"https://',"2-"],[',"referrer":[{"url":"http://',"3-"],[',"referrer":[{"url":"https://',"4-"],[',"sessionStartTime":',"5-"],['":{}}',"6-"],["www.google.com","7-"],["www.google.co.uk","8-"],["www.google.","9-"],['"landing":"',"Z"],['"landing":',"L"],['"time":',"A"],['"sessionStartTime":',"S"],['"pageViews":',"P"],['"sessionCount":',"B"],['"sessionLandingPage":',"E"],['"referrer":',"R"],['"url":"http://www.',
"J"],['"url":"https://www.',"M"],['"url":"',"I"],['"url":',"U"],["http://www.","W"],["https://www.","V"],["%2Fen%2Ftsuk%2F","K"],["http%3A%2F%2Fwww","F"],["http%3A%2F%2F","D"],["http://","H"],["https://","X"],['""',"O"],['",',"Y"]],m=a(f);k.clazz("taginspector.datapulse.compression.Encoder",b);b.prototype.encode=function(a,b){for(var h=a.replace(/\*/g,"**"),c=0;c<this._regexDefs.length;c++)var f=this._regexDefs[c],h=h.replace(f[0],f[1]);for(var h=h.replace(/;/g,"*-"),h=h.replace(/&/g,"*."),h=h.replace(/\\/g,
"*/"),h=h.replace(/=/g,"*+"),h=h.replace(/\n/g,"*N"),h=h.replace(/ /g,"*_"),h=h.replace(/\t/g,"*T"),h=h.replace(/,/g,"*C"),h=h.replace(/"/g,"*Q"),c=e(h),f=h.replace(/\$/g,"$$$"),k=[],m=0,l=0;m<c.length;m++){var s=new RegExp(g(c[m][0]),"g"),s=f.replace(s,"$"+l+"-");s!==f&&(k.push(c[m][0]),l++,f=s)}c=[f,k];f=c[1];(k=0<f.length)&&(h=c[0]);h=b?d(h,b):d(h);return k?"Y"+f.join("*")+"?"+h:"N"+h};var s=4,h=2;b.prototype.decode=function(a){var b=null;if("N"===a.charAt(0))a=a.substring(1);else if("Y"===a.charAt(0)){var h=
a.indexOf("?");if(0<=h&&(b=a.substring(1,h),b=b.split("*"),a=a.substring(h+1),b&&0!==b.length&&a)){for(var h="",e=!1,d=!1,f="",g=0;g<a.length;g++){var k=a.charAt(g);"$"===k||e||d?e||d?(e=!1,"$"===k?h+="$":isNaN(+("-"+k))?d?(h=b&&"-"===k&&b[+f]?h+b[+f]:h+("$"+f+k),f="",d=!1):h+="$"+k:(d=!0,f+=k)):e=!0:h+=k}f&&(h+="$"+f);e&&(h+="$");a=h}}b="";e=h=!1;d="";for(f=0;f<a.length;f++)g=a.charAt(f),"*"===g||h||e?h||e?(h=!1,isNaN(+("-"+g))?e?(b="."===g?b+String.fromCharCode(+d):"-"===g&&c(d+"-",this._defs)?
b+c(d+"-",this._defs):b+("*"+d+g),d="",e=!1):"*"===g?b+="*":"-"===g?b+=";":"/"===g?b+="\\":"."===g?b+="&":"+"===g?b+="=":"N"===g?b+="\n":"_"===g?b+=" ":"T"===g?b+="\t":"C"===g?b+=",":"Q"===g?b+='"':null!==c(g,this._defs)?(g=c(g,this._defs),b+=g):b+="*"+g:(d+=g,e=!0)):h=!0:b+=g;d&&(b+="*"+d);h&&(b+="*");return b}})();
(function(){function a(a){this.testBinary=!1;this.binSupported=g;a&&(d.FINEST("Created compressor instance."),this.compressor=new taginspector.compression.Compressor,this.encoder=new taginspector.datapulse.compression.Encoder({}),void 0!==a.binSupported&&(this.binSupported=!!a.binSupported))}var c=taginspector.Define,b=taginspector.Cookie,d=new taginspector.datapulse.Log("CookieCompressor -> ");c.global();var g=!1;c.clazz("taginspector.datapulse.compression.CookieCompressor",a);a.prototype.compress=
function(a,c){if("string"!==typeof a||""===a)return a;d.FINEST("Compressing...");var g=this.encoder.encode(a),f;if(this.binSupported||this.testBinary){f=this.compressor.compress(g);f='"B'+this.encoder.encode(f,128)+'"';b.set("__qtag_test_bin__",f);var m=b.get("__qtag_test_bin__");b.rm("__qtag_test_bin__");m&&m!==f&&(f=null,d.FINEST("Binary cookie saving trial failed."))}m=this.encoder.encode(this.compressor.compressAnsi(g));g=!c&&g.length<=m.length?'"E'+g+'"':'"C'+m+'"';if(f&&f.length<g.length)return d.FINEST("Binary compression ratio: "+
f.length/a.length),f;d.FINEST("Compression ratio: "+g.length/a.length);return g};a.prototype.decompress=function(a){if("string"!==typeof a||""===a)return a;'"'===a.charAt(0)&&(a=a.substring(1,a.length-1));d.FINEST("Decompressing...");var b=a.charAt(0);a=a.substring(1);switch(b){case "E":return this.encoder.decode(a);case "C":return a=this.compressor.decompressAnsi(this.encoder.decode(a)),this.encoder.decode(a);case "B":return a=this.compressor.decompress(this.encoder.decode(a)),this.encoder.decode(a);
default:throw"This code is not supported! Code: "+b;}}})();
(function(){function a(){}function c(a,b){for(var e=k.length,c=0;c<e;c++)if(a===k[c][0])return k[c][1];k[k.length]=[a,b];return!1}function b(a,d,f,g,m){var l=!1,s=!1,r=!1,t=!1,u=!1,u=!1;d&&(l=(u=!!d.all)||d.nodes,t=u||d.win,s=u,r=d.noFunctions&&!u,void 0!==d.noOwn&&(s=!!d.noOwn),void 0!==d.noFunctions&&(r=!!d.noFunctions),void 0!==d.win&&(t=!!d.win),void 0!==d.nodes&&(l=!!d.nodes),u=!!d.copyReference);if(void 0===f||f){void 0!==f&&f--;if(!(a&&a instanceof Object))return a;if(!l){try{if(a instanceof
Node)return a}catch(y){if(a instanceof ActiveXObject&&void 0!==a.nodeType)return a}if(a===document)return a}if(!t&&a===e)return a;l=a instanceof Array?[]:{};a instanceof Date&&(l=new Date(a));!r&&a instanceof Function&&(r=String(a).replace(/\s+/g,""),l=r.indexOf("{[nativecode]}")+14===r.length?function(){return a.apply(m||this,arguments)}:function(){return a.apply(this,arguments)});void 0===g&&(k=[],g=0);if(r=c(a,l))return r;if(l instanceof Array)for(r=0;r<a.length;r++)l[l.length]=a[r]===a[r]?b(a[r],
d,f,g+1,a):a[r];else{var r=0,w;for(w in a){if(s||a.hasOwnProperty(w))l[w]=a[w]===a[w]?b(a[w],d,f,g+1,a):a[w];r++}}d.proto&&(l.prototype=b(a.prototype,d,f,g+1,a));u&&(l.___copy_ref=a);return l}}function d(a,b,c,f,g,k,m){c=c||{};void 0===c.hasOwn&&(c.hasOwn=!0);if(!c.objectsOnly||a instanceof Object)if(void 0===c.maxDeep||c.maxDeep){void 0!==c.maxDeep&&c.maxDeep--;if(!c||!c.nodes)try{if(a instanceof Node)return}catch(s){if(a instanceof ActiveXObject&&void 0!==a.nodeType)return}if(a!==e){void 0===f&&
(l=[],f=0);var t;a:{for(t=0;t<f&&t<l.length;t++)if(a===l[t]){t=!0;break a}t=!1}if(!(t||(l[f]=a,g=g||a,g&&k&&g[k]!==g[k]||b(a,g,k,m)))){k=0;t="";for(var u in a){if(!c.hasOwn||a.hasOwnProperty(u))try{var y=a[u];c.track&&(t=m?m+"."+u:u);d(y,b,c,f+1,g,u,t)}catch(w){}k++}}}}}var g=taginspector.Define,e=g.global();g.clazz("taginspector.datapulse.Utils",a);a.global=g.global;a.namespace=g.namespace;a.clazz=g.clazz;a.getObjectUsingPath=function(a,b){b=b||e;for(var c=a.split("."),d=0;d<c.length;d++)b&&c[d]&&
(b=b[c[d]]);return b};a.variableExists=function(a){return void 0!==a&&null!==a&&""!==a};a.ANON_VARS=[];a.getAnonymousAcessor=function(b){var c=a.indexInArray(b,a.ANON_VARS);-1===c&&(c=a.addToArrayIfNotExist(a.ANON_VARS,b));return"taginspector.datapulse.Utils.ANON_VARS["+c+"]"};a.replaceAll=function(a,b,c){return a.replace(new RegExp(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),c)};a.isInt=function(a){if(isNaN(a))return!1;a=parseFloat(a);return(a|0)===a};a.secureText=function(a){"string"!==
typeof a&&(a+="");a=a.replace(/</g,"&lt;");return a=a.replace(/>/g,"&gt;")};a.getUrl=function(){return document.location.href};a.getQueryParam=function(b){var c,d,e,f;c=a.getUrl();if(0<c.indexOf("?"))for(f=c.substring(c.indexOf("?")+1).split("&"),c=0,d=f.length;c<d;c+=1)if(e=f[c],0<e.indexOf("=")&&(e=e.split("="),2===e.length&&e[0]===b))return e[1];return null};a.getElementValue=function(a){return(a=document.getElementById(a))?a.textContent||a.innerText:null};var k=[];a.objectCopy=function(a,c){c=
c||{};var d=b(a,c,c.maxDeep);k=[];return d};var l=[];a.traverse=function(a,b,c){d(a,b,c)};a.prepareQuotedString=function(a){return"string"===typeof a?'"'+a.replace(/\"/g,'\\"')+'"':a};a.expressionToFunction=function(b,c){return a.gevalAndReturn("function ("+(c||"")+") {"+b+"}").result};a.defineClass=function(b,c,d){var e=b.split("."),e=a.gevalAndReturn("(function "+e[e.length-1]+"() {  if ("+b+"._CONSTRUCTOR) {    return "+b+"._CONSTRUCTOR.apply(this, arguments);  } else {    if ("+b+".superclass) {      return "+
b+".superclass.apply(this, arguments);    }  }})").result;e._CONSTRUCTOR=d.CONSTRUCTOR;e.superclass=c;a.clazz(b,e,c);for(var f in d)d.hasOwnProperty(f)&&"CONSTRUCTOR"!==f&&(e.prototype[f]=d[f]);return e};a.keys=function(a){if(a instanceof Object){if(Object.keys)return Object.keys(a);var b=[],c;for(c in a)a.hasOwnProperty(c)&&(b[b.length]=c);return b}throw"keys() called on non-object!";};a.getSrcElement=function(a){var b;a=a||window.event;a.srcElement?b=a.srcElement:a.target&&(b=a.target);return b};
a.addToArrayIfNotExist=function(a,b){for(var c=0,d=!1;c<a.length;c+=1)if(a[c]===b){d=!0;break}d||(a[a.length]=b,c=-1);return c};a.indexInArray=function(a,b){for(var c=0,d=!1;c<a.length;c++)if(a[c]===b){d=!0;break}return d?c:-1};a.removeFromArray=function(a,b){for(var c=0;c<a.length;c+=1)a[c]===b&&a.splice(c,1)};a.addClass=function(b,c){var d;try{b.classList.add(c)}catch(e){null===b.className?b.className=c:(d=b.className.split(" "),a.addToArrayIfNotExist(d,c),b.className=d.join(" "))}};a.removeClass=
function(b,c){var d;try{b.classList.remove(c)}catch(e){null===b.className?b.className="":(d=b.className.split(" "),a.removeFromArray(d,c),b.className=d.join(" "))}};a.gevalAndReturn=function(b){a.gevalAndReturn.___var_test___=void 0;a.gevalAndReturn.___var_test___error=void 0;a.geval("try{taginspector.datapulse.Utils.gevalAndReturn.___var_test___=("+b+");}catch(ex){taginspector.datapulse.Utils.gevalAndReturn.___var_test___error = ex;}");return{result:a.gevalAndReturn.___var_test___,error:a.gevalAndReturn.___var_test___error}};
a.trim=function(a){try{return String(a).trim()}catch(b){return String(a).replace(/^\s+|\s+$/g,"")}};a.setIfUnset=function(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&!a.hasOwnProperty(c)&&(a[c]=b[c])};a.geval=function(a){window&&window.execScript?window.execScript(a):e.eval.call(e,a)};var f=[],m=!1;a.bodyReady=function(a){if(m)return a&&a(),!0;if(m=!(!document.body||"complete"!==document.readyState)){for(var b=0;b<f.length;b++)try{f[b]()}catch(c){e.console&&e.console.trace&&e.console.trace(c)}a&&
a()}else a&&f.push(a);return m};var s=e.onload;e.onload=function(b){a.bodyReady();s&&s(b)}})();
(function(){var a=taginspector.Cookie,c=taginspector.datapulse.Utils,b=new taginspector.datapulse.Log("Session -> "),d=function(){};c.clazz("taginspector.datapulse.Session",d);var g=new taginspector.datapulse.compression.CookieCompressor({});d.readCompressedCookie=function(b){b=a.get(b);return g.decompress(b)};d.setupSession=function(e){var k,l,f,m,s;k={};s="tm_"+e.containerId;var h="x_tm_"+e.containerId;f=a.get(s,!0);var p=!!f;null===f&&(f=a.get(h),f=g.decompress(f));if(f)try{f=JSON.parse(f)}catch(n){f=
{sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,referrer:[],sessionLandingPage:"",__v:{}}}else f={sc:0,sessionCount:0,pageViews:0,sessionStartTime:0,referrer:[],sessionLandingPage:"",__v:{}};l=(new Date).getTime();k.sessionCount!==parseInt(f.sc,10)?(f.sessionStartTime=l,f.sc=k.sessionCount,f.sessionCount+=1,f.referrer.push({url:d.getReferrer(),landing:c.getUrl().substring(0,300),time:l}),f.sessionLandingPage=c.getUrl().substring(0,300)):d.isReferrerDifferent()&&!d.referrerIsSameAsPrevious(f.referrer,
l,18E5)&&(f.referrer.push({url:d.getReferrer(),landing:c.getUrl().substring(0,300),time:l}),f.sessionLandingPage=c.getUrl().substring(0,300),f.sessionStartTime=l,f.sessionCount+=1);k.sessionCount=f.sessionCount;k.sessionStartTime=f.sessionStartTime;k.pageStartTime=l;f.pageViews+=1;k.pageViews=f.pageViews;k.sessionLandingPage=f.sessionLandingPage;k.referrer=f.referrer;5<k.referrer.length&&k.referrer.splice(2,k.referrer.length-5);m=JSON.stringify(f);for(l=0;g.compress(m).length>e.maxCookieLength&&5>
l;)3<=f.referrer.length?f.referrer.splice(2,1):2===f.referrer.length?f.referrer=[f.referrer[0]]:1===f.referrer.length&&(f.referrer=[]),m=JSON.stringify(f),l+=1;k.referrer=f.referrer;p&&a.rm(s);s=g.compress(m);a.rm(h);a.set(h,s,365,e.cookieDomain);k.setVariable=function(b,c,d){f.__v[b]=[c,d?d:0];b=g.compress(JSON.stringify(f));a.set(h,b,365,e.cookieDomain)};k.getCookie=function(c,d){var e=a.get(c);if(e&&(d||0===c.indexOf("x_"))){b.FINE("getCookie() : Comressed cookie accessed:\n"+c+"="+e);try{e=g.decompress(e)}catch(f){b.ERROR("Cookie failed to decompress: "+
f)}}else e=a.decode(e);return e};k.getVariable=function(a){var b;if(a=f.__v[a])if(b=a[1],0===b||b>(new Date).getTime())return a[0];return null};k.on=function(a,b,c){b.attachEvent?b.attachEvent("on"+a,c):b.addEventListener&&b.addEventListener(a,c,!1)};k.getTagCookie=function(){return d.readCompressedCookie(h)};return d.lastSession=k};d.referrerIsSameAsPrevious=function(a,b,g){var f,m;return 0<a.length?(f=d.getReferrer(),m=c.getUrl().substring(0,300),a=a[a.length-1],a.url===f&&a.landing===m&&a.time+
g>b):!1};d.isReferrerDifferent=function(){var a,b;b=d.getReferrer();a=b.indexOf("://");if(-1===a)return!0;try{return 0!==b.substring(a+3).indexOf(d.getDomain())?!0:!1}catch(c){return!0}};d.getReferrer=function(){return document.referrer?document.referrer.substring(0,300):"direct"};d.getDomain=function(){return document.location.host}})();
(function(){function a(a){this.log=new taginspector.datapulse.Log("",function(){return this.CLASS_NAME+"["+this.config.name+"]"}.bind(this),"collectLogs");this.config={order:0,include:!0,name:"Filter-"+c++,uniqueId:"Filter-"+c++,script:void 0,session:void 0};this.session=null;if(a){for(var d in a)a.hasOwnProperty(d)&&(this.config[d]=a[d]);a.session&&this.setSession(a.session)}this.uniqueId=this.config.uniqueId}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.filter.BaseFilter",a);
a.state={DISABLED:-3,SESSION:-2,PASS:-1,FAIL:0};a.prototype.reset=function(){this.enable()};a.prototype.disable=function(){this.config.disabled=!0};a.prototype.enable=function(){this.config.disabled=!1};a.prototype.match=function(){return!0};a.prototype.setSession=function(a){this.session=a};a.prototype.getSession=function(){return this.session};a.prototype.getState=function(){var b=a.state.PASS;if(this.config.disabled)return a.state.DISABLED;this.config.script&&(b=this.config.script.call(this,b));
isNaN(+b)&&(this.log.WARN("filters should use a numerical state as a return for getState(): BaseFilter.state. Filter will fail. Returned: "+b),b=a.state.FAIL);this.lastState=+b;return b}})();
(function(){function a(b){this.config={};this.log=new taginspector.datapulse.Log("",function(){return this.CLASS_NAME+"["+this.uniqueId+"]"}.bind(this),"collectLogs");this.parameters=null;this.reportValue=!1;if(b){this.uniqueId=b.uniqueId;this.reportValue=b.reportValue;a.ALL_VARIABLES[this.uniqueId]=this;for(var c in b)this.config[c]=b[c];void 0!==b.value&&(this.value=b.value);void 0!==b.defaultValue&&(this.defaultValue=b.defaultValue);(b=a.register(this))&&b!==this&&(b.log.FINEST("Variable config already registered."),
b.log.FINEST("Returning existing one."));return b}}var c=taginspector.datapulse.Utils;c.clazz("taginspector.datapulse.pagevariable.BaseVariable",a);a.ALL_VARIABLES={};a.pageVariables=[];a.register=function(b){return b instanceof a?(a.pageVariables.push(b),b):null};a.prototype.getValue=function(){return this.value};a.prototype.setValue=function(a){this.value=a};a.prototype.getDefaultValue=function(){return this.defaultValue};a.prototype.setDefaultValue=function(a){this.defaultValue=a};a.prototype.exists=
function(a){var d=c.variableExists(this.getValue());a&&(d=d||c.variableExists(this.getDefaultValue()));return d};a.prototype.getRelativeValue=function(a,d){var g=this.getValue();c.variableExists(g)||(g=d);var e;a&&!c.variableExists(g)&&(e=this.getDefaultValue(),c.variableExists(e)&&(g=e));return g};a.prototype.replaceToken=function(a,d,g,e){var k=this.exists();g=k?this.getValue():g;a="\\$\\{"+a+"\\}";return e||g instanceof Array?(e=k?this.getValueAccessorString():c.getAnonymousAcessor(g),d.replace(new RegExp(a,
"g"),e)):d.replace(new RegExp(a,"g"),g)};a.prototype.getAccessorString=function(){return"taginspector.datapulse.pagevariable.BaseVariable.ALL_VARIABLES."+this.uniqueId};a.prototype.getValueAccessorString=function(){return this.getAccessorString()+".getValue()"}})();
(function(){function a(b){this.log=new taginspector.datapulse.Log("",function(){return this.CLASS_NAME+"["+this.config.name+"]"}.bind(this),"collectLogs");this.config={name:"Trigger-"+c++,uniqueId:"Trigger-"+c++,triggerScript:void 0,rules:[]};this.currentState=a.state.WAITING;if(b){for(var d in b)b.hasOwnProperty(d)&&(this.config[d]=b[d]);b.session&&this.setSession(b.session)}this.uniqueId=this.config.uniqueId}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.trigger.BaseTrigger",
a);a.state={WAITING:0,FIRED:1};a.prototype.checkRules=function(){for(var a=0;a<this.config.rules.length;a++)rule=this.config.rules[a],rule.checkFiltersIfTriggersFired()};a.prototype.triggerCallback=function(){this.currentState=a.state.FIRED;this.checkRules()};a.prototype.initTrigger=function(){cb=this.triggerCallback;cb=cb.bind(this);this.config.triggerScript(cb)};a.prototype.getState=function(){return this.currentState};a.prototype.addRule=function(a){this.config.rules.push(a)};a.prototype.setTriggerScript=
function(a){this.config.triggerScript=a}})();
(function(){function a(a){this.config={};this.log=new taginspector.datapulse.Log("",function(){return this.CLASS_NAME+"[BaseRule]"}.bind(this),"collectLogs");this.uniqueId="BR"+g++;if(a){this.uniqueId=a.uniqueId;this.dataCollector=a.dataCollector;for(var b in a)this.config[b]=a[b]}this.filters=[];this.session=void 0;this.triggers=[]}var c=taginspector.datapulse.filter.BaseFilter,b=taginspector.datapulse.trigger.BaseTrigger,d=taginspector.datapulse.pagevariable.BaseVariable,g=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.BaseRule",
a);a.prototype.getFilters=function(){return this.filters};a.prototype.addFilter=function(a){this.filters.push(a)};a.prototype.addTrigger=function(a){this.triggers.push(a)};var e=b.state.WAITING,k=b.state.FIRED,l=c.state.PASS,f=c.state.FAIL;a.prototype.getFailedFilters=function(){filters=this.filters;failedFilters=[];for(var a=0;a<filters.length;a++)filter=filters[a],filter.match()||failedFilters.push(filter.uniqueId);return failedFilters};a.prototype.checkFiltersIfTriggersFired=function(a){a=tiMonitor.dataCollector.timeOnPage();
triggersRun=this.triggersState();if(triggersRun==k)if(validationResults=this.filtersState(),validationResults==f){failedFilters=this.getFailedFilters();qsPageVariables=[];pageVariables=d.pageVariables;for(i=0;i<pageVariables.length;i++)pageVariable=pageVariables[i],pageVariable instanceof d&&!0==pageVariable.reportValue&&(variableId=pageVariable.uniqueId,(variableValue=pageVariable.getValue())||(variableValue="*undefined*"),combinedVariableValue=encodeURIComponent(variableId)+"="+encodeURIComponent(variableValue),
qsPageVariables.push(combinedVariableValue));failedRuleObject={failedConditions:failedFilters.toString(),pageMacros:qsPageVariables.toString(),failedRule:this.uniqueId,validationTime:a};this.dataCollector.queueRequest(failedRuleObject,"validationerror")}else passedRuleObject={passedRule:this.uniqueId,validationTime:a},this.dataCollector.queueRequest(passedRuleObject,"validationsuccess")};a.prototype.triggersState=function(){for(var a=k,b=0;b<this.triggers.length;b++)trigger=this.triggers[b],trigger.getState()==
e&&(a=e);return a};a.prototype.filtersState=function(){filters=this.filters;session=this.session;filters=filters.sort(function(a,b){try{return b.config.order-a.config.order}catch(c){return 0}});var a=l;if(!filters||0===filters.length)return a;for(var b,c=0;c<filters.length;c++)if(b=filters[c],b.setSession(session),!1==b.match()){a=f;break}return a}})();
(function(){function a(a){this.log=new taginspector.datapulse.Log("",function(){return this.CLASS_NAME+"[DataCollector]"}.bind(this),"collectLogs");this.config={siteID:"",pixelHost:"",tagDefinitions:[]};this.session=null;if(a)for(var b in a)a.hasOwnProperty(b)&&(this.config[b]=a[b]);this.pixelHost=this.config.pixelHost;this.siteID=this.config.siteID;this.tagDefinitions=this.config.tagDefinitions;this.startTime=new Date;this.offsetTime=0;this.pageId="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,
function(a){var b=16*Math.random()|0;return("x"==a?b:b&3|8).toString(16)});this.pendingRequests=[];this.currentlySendingData=!1;this.identifiedRequests={}}taginspector.datapulse.Utils.clazz("taginspector.datapulse.DataCollector",a);a.prototype.timeOnPage=function(){return performance.now()-this.offsetTime};a.prototype.adjustTimeForOffset=function(a){return!1==isNaN(a)?(fts=parseFloat(a),fts-=this.offsetTime,0>fts&&(fts=0),fts.toString()):a};a.prototype.getPageCurrentTime=function(){var a=new Date;
return(new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds())).getTime()};a.prototype.getPageStartTime=function(){return(new Date(this.startTime.getFullYear(),this.startTime.getMonth(),this.startTime.getDate(),this.startTime.getHours(),this.startTime.getMinutes(),this.startTime.getSeconds())).getTime()};a.prototype.isBeaconSupported=function(){return"sendBeacon"in navigator?!0:!1};a.prototype.getMaxBodySize=function(){isSendBeaconRequest=this.isBeaconSupported();
return 1E4};a.prototype.createRequestBody=function(){tmpReqList={requestList:[]};requestLength=0;maxRequestLength=this.getMaxBodySize();for(urlCounter=0;0<this.pendingRequests.length;)if(tagReq=this.pendingRequests[0],void 0!=tagReq||null!=tagReq)if(requestLength+=encodeURIComponent(tagReq).length,requestLength>maxRequestLength&&0!=urlCounter)break;else tmpReqList.requestList.push(this.pendingRequests.shift()),urlCounter+=1;else this.pendingRequests.shift();return tmpReqList};a.prototype.createPixelRequest=
function(a){reqPixel=new Image;reqPixel.src=this.pixelHost+"?"+a};a.prototype.createAjaxPostRequest=function(a){XMLHttpRequest.prototype.sendAsBinary||(XMLHttpRequest.prototype.sendAsBinary=function(a){for(var b=a.length,c=new Uint8Array(b),d=0;d<b;d++)c[d]=a.charCodeAt(d)&255;this.send(c)});var b=new XMLHttpRequest;b.open("POST",this.pixelHost,!0);var d="----"+Date.now().toString(16);b.setRequestHeader("Content-Type","multipart/form-data; boundary="+d);b.sendAsBinary("--"+d+'\r\nContent-Disposition: form-data; name="beaconreq"\r\n\r\n'+
a+"\r\n--"+d+"--\r\n")};a.prototype.createSendBeaconRequest=function(a){var b=new FormData;b.append("beaconreq",a);result=navigator.sendBeacon(this.pixelHost,b);!1==result&&this.createAjaxPostRequest(a)};a.prototype.identifyRequest=function(a){for(var b=0;b<this.tagDefinitions.length;b++){var d=this.tagDefinitions[b];!0==d.regex.test(a)&&(!1==this.identifiedRequests.hasOwnProperty(d.id)&&(this.identifiedRequests[d.id]=[]),this.identifiedRequests[d.id].push(a))}};a.prototype.sendRequests=function(a){if(!1==
this.currentlySendingData){this.currentlySendingData=!0;for(base_req_data="pid="+this.pageId+"&sid="+this.siteID+"&purl="+encodeURIComponent(tiMonitor.sendData.currentUrl)+"&pst="+encodeURIComponent(this.getPageStartTime())+"&pct="+encodeURIComponent(this.getPageCurrentTime());0<this.pendingRequests.length;)requestBody=this.createRequestBody(),encodedRequestString=encodeURIComponent(JSON.stringify(requestBody)),req_data=base_req_data+"&taginfo="+encodedRequestString,!0==this.isBeaconSupported()&&
!0==a?this.createSendBeaconRequest(req_data):this.createAjaxPostRequest(req_data);this.currentlySendingData=!1}};a.prototype.queueRequest=function(a,b){if("resource"==b)reqName=a.name,req="rt="+b+"&ce="+encodeURIComponent(this.adjustTimeForOffset(a.connectEnd))+"&cs="+encodeURIComponent(this.adjustTimeForOffset(a.connectStart))+"&dle="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupEnd))+"&dls="+encodeURIComponent(this.adjustTimeForOffset(a.domainLookupStart))+"&d="+encodeURIComponent(a.duration)+
"&et="+encodeURIComponent(a.entryType)+"&fs="+encodeURIComponent(this.adjustTimeForOffset(a.fetchStart))+"&it="+encodeURIComponent(a.initiatorType)+"&n="+encodeURIComponent(a.name)+"&rde="+encodeURIComponent(this.adjustTimeForOffset(a.redirectEnd))+"&rds="+encodeURIComponent(this.adjustTimeForOffset(a.redirectStart))+"&reqs="+encodeURIComponent(this.adjustTimeForOffset(a.requestStart))+"&rse="+encodeURIComponent(this.adjustTimeForOffset(a.responseEnd))+"&rss="+encodeURIComponent(this.adjustTimeForOffset(a.responseStart))+
"&scc=&st="+encodeURIComponent(this.adjustTimeForOffset(a.startTime)),this.identifyRequest(reqName);else if("pageload"==b){var d=performance.timing;dom_interactive=d.domInteractive-d.fetchStart;dom_content_load=d.domContentLoadedEventEnd-d.fetchStart;dom_complete=d.domComplete-d.fetchStart;req="rt="+b+"&ref=&top="+encodeURIComponent(this.timeOnPage())+"&domint="+encodeURIComponent(dom_interactive)+"&domcl="+encodeURIComponent(dom_content_load)+"&domcom="+encodeURIComponent(dom_complete)}else"validationerror"==
b?req="rt="+b+"&fr="+encodeURIComponent(a.failedRule)+"&pm="+encodeURIComponent(a.pageMacros)+"&fc="+encodeURIComponent(a.failedConditions)+"&vt="+encodeURIComponent(a.validationTime):"validationsuccess"==b?req="rt="+b+"&pr="+encodeURIComponent(a.passedRule)+"&vt="+encodeURIComponent(a.validationTime):"jserror"==b&&(req="rt="+b+"&msg="+a.message);this.pendingRequests.push(req);"validationerror"!=b&&"validationsuccess"!=b||this.sendRequests(!0)}})();
(function(){function a(b){this._lockObject={};var d={uniqueId:"Macro-"+c++};if(b)for(var g in b)d[g]=b[g];this.reportValue=!1;b&&(this.uniqueId=b.uniqueId,this.reportValue=b.reportValue);a.superclass.call(this,d)}var c=0;taginspector.datapulse.Utils.clazz("taginspector.datapulse.pagevariable.JsExpression",a,taginspector.datapulse.pagevariable.BaseVariable);a.prototype.getValue=function(){this.log.FINEST("getting custom js value");return this.value(!0).toString()}})();
(function(){taginspector.datapulse.Utils.namespace("taginspector.datapulse.filter.pattern.PatternType",{CONTAINS:"Contains",MATCHES_EXACTLY:"Matches Exactly",STARTS_WITH:"Starts with",ENDS_WITH:"Ends with",REGULAR_EXPRESSION:"Regular Expression",ALL_URLS:"All URLs",EQUALS:"Equals",DOES_NOT_EQUAL:"Does not Equal",DOES_NOT_CONTAIN:"Does not Contain",DOES_NOT_STARTS_WITH:"Does not Start With",DOES_NOT_END_WITH:"Does not End With",MATCHES_REGEX:"Matches Regex",DOES_NOT_MATCH_REGEX:"Does not Match Regex",
LESS_THAN:"Less Than",GREATER_THAN:"Greater Than"})})();
(function(){function a(c){this._lockObject={};var g={comparisonType:b.CONTAINS,sourceVariable:void 0,comparisonVariable:void 0};if(c)for(var e in c)c.hasOwnProperty(e)&&(g[e]=c[e]);a.superclass.call(this,g)}var c=taginspector.datapulse.Utils,b=taginspector.datapulse.filter.pattern.PatternType;c.clazz("taginspector.datapulse.filter.JsExpressionFilter",a,taginspector.datapulse.filter.BaseFilter);a.prototype.match=function(){var a=!0,g=this.config.sourceVariable.getValue();if("object"==typeof this.config.comparisonVariable)var e=
this.config.comparisonVariable.getValue();else if("string"==typeof this.config.comparisonVariable||"number"==typeof this.config.comparisonVariable)e=this.config.comparisonVariable;else return!1;switch(this.config.comparisonType){case b.LESS_THAN:case b.GREATER_THAN:if(!1==c.isInt(e))return!1;e=parseInt(e)}switch(this.config.comparisonType){case b.DOES_NOT_CONTAIN:case b.CONTAINS:a=0<=g.toLowerCase().indexOf(e.toLowerCase());break;case b.EQUALS:case b.DOES_NOT_EQUAL:case b.MATCHES_EXACTLY:a=g.toLowerCase()===
e.toLowerCase();break;case b.STARTS_WITH:case b.DOES_NOT_STARTS_WITH:a=0===g.toLowerCase().indexOf(e.toLowerCase());break;case b.ENDS_WITH:case b.DOES_NOT_END_WITH:a=g.lastIndexOf(e.toLowerCase())+e.length===g.length;break;case b.MATCHES_REGEX:case b.REGULAR_EXPRESSION:case b.DOES_NOT_MATCH_REGEX:a=(new RegExp(e)).test(g);break;case b.LESS_THAN:a=g<e;break;case b.GREATER_THAN:a=g>e;break;case b.ALL_variableValueS:a=!0}switch(this.config.comparisonType){case b.DOES_NOT_EQUAL:case b.DOES_NOT_CONTAIN:case b.DOES_NOT_STARTS_WITH:case b.DOES_NOT_END_WITH:case b.DOES_NOT_MATCH_REGEX:a=
!a}return a}})();

var tiMonitor = tiMonitor || {};
tiMonitor.dataCollector = new taginspector.datapulse.DataCollector({siteID:"0d171be225de11e783d4125d82e54c54", pixelHost:"https://collect.analyze.ly", tagDefinitions: [{id: '1', regex: new RegExp('(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com(\\/r)?\\/__utm\\.gif)|(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/u\\/ga\\.js)|(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/p\\/__utm\\.gif)|(\\/u\\/ga_debug\\.js)|(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/ga\\.js)|(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/)|(^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/ga_exp\\.js)|((^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/analytics\\.js|^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com\\/plugins\\/ua\\/))|((^http(s)?:\\/\\/((.*)\\.|)google-analytics\\.com(\\/r)?\\/collect|^http(s)?:\\/\\/((.*)\\.|)stats\\.g\\.doubleclick\\.net(\\/r)?\\/collect))|((stats\\.g\\.doubleclick\\.net\\/dc\\.js|stats\\.g\\.doubleclick\\.net\\/__utm\\.gif))', 'i')}]});
tiMonitor.sendData = {
	pageId: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);}),
	sentUnload: false,
	currentlyIterating: false,
	externalTagStartTimes: [],
	internalTagStartTimes: [],
	currentUrl: window.location.href,
	minimumBeforeUnloadRestriction: 5,
	sampleRate: 100,
	sampleBlackList: new RegExp('order(C|c)onfirm', 'i'),
	sampleBlackListEnabled: true,
	getRandomInt: function() {
		return Math.floor(Math.random() * (this.sampleRate - 1 + 1)) + 1;
	},
	shouldSamplePage: function(){
		if(this.sampleBlackListEnabled == true){
			if(this.sampleBlackList.test(this.currentUrl) == true){
				return false;
			}
		}
		if(1 == tiMonitor.sendData.getRandomInt()){
			return false;
		}else{
			return true;
		}
	},
	isSinglePageApp: function(){
		if(window.angular){
			return true;
		}else{
			return false;
		}
	},
	isPerformanceObserverSupported: function(){
		if(window.PerformanceObserver){
			return true;
		}else{
			return false;
		}
	},
	isPerformanceObserverInitialized: false,
	performanceObserverCallback: function(list){

		var perfEntries = list.getEntries();
		for (var i = 0; i < perfEntries.length; i++){
			var req = perfEntries[i];
			if(tiMonitor.sendData.isValidRequest(req) == true){
				tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
				tiMonitor.dataCollector.queueRequest(req, "resource");
			}else{
				tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
			}
		}

		tiMonitor.sendData.isPerformanceObserverInitialized=true;
	},
	suportedBrowser: function(){
		var isSupported = true;
		ua = navigator.userAgent;
		var isNativeAndroid = ((ua.indexOf('Mozilla/5.0') > -1 && ua.indexOf('Android ') > -1 && ua.indexOf('AppleWebKit') > -1) && (ua.indexOf('Version') > -1));

		var perfMonSupport = false;
		if ('performance' in window) { 
			if ('getEntries' in performance) {
				perfMonSupport = true;
			}
		}
		if(isNativeAndroid == true || perfMonSupport == false){
			isSupported = false;
		}
		return isSupported;
	},
	blackList: new RegExp('http(s)?:\/\/col\.eum-appdynamics\.com'),
	lastPerformanceObjLength: 0,
	areTriggersActivated: false,
	isDuplicateRequest: function(req){
		lt = tiMonitor.sendData.getUniqueReqKey(req);
		return !(tiMonitor.sendData.externalTagStartTimes.indexOf(lt) == -1 && tiMonitor.sendData.internalTagStartTimes.indexOf(lt) == -1);
	},
	isBlacklistedRequest: function(req){
		return this.blackList.test(req.name) == true;
	},
	isExternalRequest: function(req){
		externalReq = true;
		windowOrigin = window.location.protocol + '//' + window.location.hostname;
		if(req.name.length >= windowOrigin.length){
			truncReqName = (req.name).substr(0, windowOrigin.length);
			externalReq = (truncReqName).indexOf(windowOrigin) == -1;
		}
		return externalReq;
	},
	isTIRequest: function(req){
		return !((req.name).indexOf(tiMonitor.dataCollector.pixelHost) == -1);
	},
	isValidRequest:function(req){
		validReq = false;

		if(this.isTIRequest(req) == false && this.isExternalRequest(req) == true && this.isBlacklistedRequest(req) == false){
			validReq = true;
		}
		return validReq;
	},
	getUniqueReqKey:function(req){
		return (req.startTime).toString() + "-" + (req.responseEnd).toString();
	},
	isBufferFull:function(){
		bufferFull = false;
		if(window.performance.getEntries().length >= 150){
			bufferFull = true;
		}
		return bufferFull;
	},
	iteratePerformance: function(){
		if(this.currentlyIterating == false){
			this.currentlyIterating = true;

			var pe = performance.getEntriesByType("resource");
			if(this.lastPerformanceObjLength != pe.length){
				this.lastPerformanceObjLength = pe.length;
				for (var i = 0; i < pe.length; i++) {
					var req = pe[i];
					if(this.isDuplicateRequest(req) == false){
						if(tiMonitor.sendData.isValidRequest(req) == true){
							tiMonitor.sendData.externalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
							tiMonitor.dataCollector.queueRequest(req, "resource");
						}else{
							tiMonitor.sendData.internalTagStartTimes.push(tiMonitor.sendData.getUniqueReqKey(req));
						}
					}
				}
			}
			if(this.areTriggersActivated == false){
				this.areTriggersActivated = true;
				tiMonitor.validationRules(true);
			}
			this.currentlyIterating = false;
		}
	},
	domLoadCompleteEvent: (document.readyState == 'complete'),
	windowUnloadEvent: false,
	pageVariableFiredEvents: {},
	pageComplete: function(){
		if(this.sentUnload == false){
			this.sentUnload = true;
			this.iteratePerformance();
			tiMonitor.dataCollector.queueRequest(null, "pageload");
			this.fire();
		}
	},
	waitForDomLoad: function(){
		if (document.readyState == 'complete' && this.sentUnload == false){
			tiMonitor.sendData.pageComplete();
			return true;
		}else{
			return false;
		}
	},
	fire: function(){
		tiMonitor.dataCollector.sendRequests(false);
	},
	clearBuffer: function(){
		if(window.performance.clearResourceTimings){
			tiMonitor.sendData.iteratePerformance();
			window.performance.clearResourceTimings();
		}
	},
	handleBeforeUnload: function(){
		if(tiMonitor.sendData.isPerformanceObserverSupported() == false){
			tiMonitor.sendData.iteratePerformance();
		}
		tiMonitor.sendData.fire();
	},
	handleUnload: function(){
		tiMonitor.windowUnloadEvent=true;
		tiMonitor.sendData.pageComplete()

		if(tiMonitor.sendData.isPerformanceObserverSupported() == false){
			tiMonitor.sendData.iteratePerformance();
		}
		tiMonitor.sendData.fire();
	},
	fullBufferEventListener: function(){
		if("clearResourceTimings" in window.performance){
			if("addEventListener" in window.performance){
				window.performance.addEventListener("resourcetimingbufferfull", function(){
					tiMonitor.sendData.clearBuffer();
				});
			}else{
				if("onresourcetimingbufferfull" in window.performance){
					window.performance.onresourcetimingbufferfull = function(event) {
						tiMonitor.sendData.clearBuffer();
					};
				}
			}
		}
	},
	initialized: false
};


tiMonitor.validationRules = function (){
	try {
		macro_function_4a74e708_8986_5f42_93fe_93135b1575ee = function(){
			retVal = '';
			function censor(n) {var o = 0;return function(r, t) {if (0 !== o && "object" == typeof n && "object" == typeof t && n == t) {return "[Circular]"}else if (o >= 500) {return "[Unknown]"}else {return (++o, t)}}};

			try{
				if(typeof dataLayer === 'object'){ 
					retVal = JSON.stringify(dataLayer, censor(dataLayer));
				}else if(typeof dataLayer !== 'undefined'){
					retVal = dataLayer;
				}
			} catch(err) {
				console.log(err.message);
			}
	
			return retVal;
		} 
		macro_4a74e708_8986_5f42_93fe_93135b1575ee = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '4a74e708_8986_5f42_93fe_93135b1575ee', reportValue: true});
		macro_4a74e708_8986_5f42_93fe_93135b1575ee.setValue(macro_function_4a74e708_8986_5f42_93fe_93135b1575ee);
		macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428 = function(){
			return window.location.href;
		} 
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '31dad1ae_f686_5581_8cbc_52bf9629b428', reportValue: false});
		macro_31dad1ae_f686_5581_8cbc_52bf9629b428.setValue(macro_function_31dad1ae_f686_5581_8cbc_52bf9629b428);
		macro_function_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ti=([^&]{1,}))");
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i];
					if (re.test(tagReq)) {
						returnVal = 'true';
					}
				}
			}
			return returnVal;
		} 
		macro_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'c74b9b79_0ad2_56b0_999c_0c506f9ae4e0', reportValue: false});
		macro_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0.setValue(macro_function_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0);
		macro_function_c5565e5a_bbe9_5065_b78b_0b87bdb390b1 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp('(?:[?&]|^)(pr[0-9]*id)=([^&]*)');
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i];
					if (re.test(tagReq)) {
						returnVal = 'true';
					}
				}
			}
			return returnVal;
		} 
		macro_c5565e5a_bbe9_5065_b78b_0b87bdb390b1 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'c5565e5a_bbe9_5065_b78b_0b87bdb390b1', reportValue: false});
		macro_c5565e5a_bbe9_5065_b78b_0b87bdb390b1.setValue(macro_function_c5565e5a_bbe9_5065_b78b_0b87bdb390b1);
		macro_function_acedddb9_776d_5478_bbf4_bba4fe8a1549 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(tr=([^&]{1,}))");
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i];
					if (re.test(tagReq)) {
						returnVal = 'true';
					}
				}
			}
			return returnVal;
		} 
		macro_acedddb9_776d_5478_bbf4_bba4fe8a1549 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: 'acedddb9_776d_5478_bbf4_bba4fe8a1549', reportValue: false});
		macro_acedddb9_776d_5478_bbf4_bba4fe8a1549.setValue(macro_function_acedddb9_776d_5478_bbf4_bba4fe8a1549);
		macro_function_8145ae5d_c896_595c_8fa4_5a5ed22f2f67 = function(){
			returnVal = 'false';
			if(tiMonitor.dataCollector.identifiedRequests.hasOwnProperty('1') == true){
				var re = new RegExp("(?:[?&])(ea=Transaction)(&|$)");
				for (var i = 0; i < tiMonitor.dataCollector.identifiedRequests['1'].length; i++) {
					tagReq = tiMonitor.dataCollector.identifiedRequests['1'][i];
					if (re.test(tagReq)) {
						returnVal = 'true';
					}
				}
			}
			return returnVal;
		} 
		macro_8145ae5d_c896_595c_8fa4_5a5ed22f2f67 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '8145ae5d_c896_595c_8fa4_5a5ed22f2f67', reportValue: false});
		macro_8145ae5d_c896_595c_8fa4_5a5ed22f2f67.setValue(macro_function_8145ae5d_c896_595c_8fa4_5a5ed22f2f67);
		macro_function_11f9251e_83e7_5967_ab57_d5620a303124 = function (){
    var exceptionDesc = "";
    var hasEcommerce = false;
    var hasPurchase = false;
    var hasActionFieldObj = false;
    var hasActionFieldId = false;
    var hasActionFieldRevenue = false;
    var hasProductObject = false;
    var hasProductValues = false;
    var productsHaveIdOrName = false;

    for(x = 0; x < dataLayer.length; x++){
        dlObj = dataLayer[x];

        if(dlObj.hasOwnProperty('ecommerce')){
            hasEcommerce = true;

            if(dlObj["ecommerce"].hasOwnProperty('purchase')){
                hasPurchase = true;
                if(dlObj["ecommerce"]["purchase"].hasOwnProperty('actionField')){
                    hasActionFieldObj = true;
                    
                    if(dlObj["ecommerce"]["purchase"]["actionField"].hasOwnProperty('id')){
                        hasActionFieldId = true;
                    }
                    if(dlObj["ecommerce"]["purchase"]["actionField"].hasOwnProperty('revenue')){
                        hasActionFieldRevenue = true;
                    }
                }
                if(dlObj["ecommerce"]["purchase"].hasOwnProperty('products')){
                    hasProductObject = true;
                    if(dlObj["ecommerce"]["purchase"]["products"].length > 0) {
                        hasProductValues = true;
                        for(y = 0; y < dlObj["ecommerce"]["purchase"]["products"].length; y++){
                            if( (dlObj["ecommerce"]["purchase"]["products"][y].hasOwnProperty('name') || dlObj["ecommerce"]["purchase"]["products"][y].hasOwnProperty('id')) == false ){
                                exceptionDesc = "dataLater ecommerce purchase object missing id or name";
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    if(hasEcommerce==false){
        exceptionDesc = "dataLater missing ecommerce object";
    }else if (hasPurchase==false){
        exceptionDesc = "dataLater ecommerce object missing purchase";
    }else if (hasActionFieldObj==false){
        exceptionDesc = "dataLater ecommerce purchase object missing actionField";
    }else if (hasActionFieldId==false){
        exceptionDesc = "dataLater ecommerce actionField missing id";
    }else if (hasActionFieldRevenue==false){
        exceptionDesc = "dataLater ecommerce actionField missing revenue";
    }else if (hasProductObject==false || hasProductValues==false){
        exceptionDesc = "dataLater ecommerce purchase object missing products";
    }
    return exceptionDesc;

};
		macro_11f9251e_83e7_5967_ab57_d5620a303124 = new taginspector.datapulse.pagevariable.JsExpression({uniqueId: '11f9251e_83e7_5967_ab57_d5620a303124', reportValue: false});
		macro_11f9251e_83e7_5967_ab57_d5620a303124.setValue(macro_function_11f9251e_83e7_5967_ab57_d5620a303124);
		

condition_37269c94_2360_4bab_81bc_1809ceb2a881 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_4a74e708_8986_5f42_93fe_93135b1575ee, comparisonVariable: 'alwaysfail', comparisonType: 'Equals', uniqueId: '37269c94_2360_4bab_81bc_1809ceb2a881'});

rule_946 = new taginspector.datapulse.BaseRule({uniqueId: '946', dataCollector: tiMonitor.dataCollector});
rule_946.addFilter(condition_37269c94_2360_4bab_81bc_1809ceb2a881);

condition_b55d7a4f_9d0b_454d_8812_37fa49a91ed3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'b55d7a4f_9d0b_454d_8812_37fa49a91ed3'});

rule_850 = new taginspector.datapulse.BaseRule({uniqueId: '850', dataCollector: tiMonitor.dataCollector});
rule_850.addFilter(condition_b55d7a4f_9d0b_454d_8812_37fa49a91ed3);

condition_de6f8068_2d94_434f_b94b_b0055394384d = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_4a74e708_8986_5f42_93fe_93135b1575ee, comparisonVariable: 'transaction', comparisonType: 'Contains', uniqueId: 'de6f8068_2d94_434f_b94b_b0055394384d'});

rule_849 = new taginspector.datapulse.BaseRule({uniqueId: '849', dataCollector: tiMonitor.dataCollector});
rule_849.addFilter(condition_de6f8068_2d94_434f_b94b_b0055394384d);

condition_f2c4e131_2243_4824_86f9_e6771ef4bf50 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c5565e5a_bbe9_5065_b78b_0b87bdb390b1, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'f2c4e131_2243_4824_86f9_e6771ef4bf50'});

rule_851 = new taginspector.datapulse.BaseRule({uniqueId: '851', dataCollector: tiMonitor.dataCollector});
rule_851.addFilter(condition_f2c4e131_2243_4824_86f9_e6771ef4bf50);

condition_30d040f7_f10e_4857_b937_2735040ab4bd = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_acedddb9_776d_5478_bbf4_bba4fe8a1549, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '30d040f7_f10e_4857_b937_2735040ab4bd'});

rule_853 = new taginspector.datapulse.BaseRule({uniqueId: '853', dataCollector: tiMonitor.dataCollector});
rule_853.addFilter(condition_30d040f7_f10e_4857_b937_2735040ab4bd);

condition_ab4d1e74_a29e_4abc_8d71_81cfb72b37f9 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_c74b9b79_0ad2_56b0_999c_0c506f9ae4e0, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: 'ab4d1e74_a29e_4abc_8d71_81cfb72b37f9'});

condition_09678987_d614_4105_9847_0fa3d30a2119 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_8145ae5d_c896_595c_8fa4_5a5ed22f2f67, comparisonVariable: 'true', comparisonType: 'Equals', uniqueId: '09678987_d614_4105_9847_0fa3d30a2119'});

rule_891 = new taginspector.datapulse.BaseRule({uniqueId: '891', dataCollector: tiMonitor.dataCollector});
rule_891.addFilter(condition_ab4d1e74_a29e_4abc_8d71_81cfb72b37f9);
rule_891.addFilter(condition_09678987_d614_4105_9847_0fa3d30a2119);

condition_f7d1a3ce_15e4_4f69_84b0_2b233ac15529 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_4a74e708_8986_5f42_93fe_93135b1575ee, comparisonVariable: 'revenue', comparisonType: 'Contains', uniqueId: 'f7d1a3ce_15e4_4f69_84b0_2b233ac15529'});

rule_852 = new taginspector.datapulse.BaseRule({uniqueId: '852', dataCollector: tiMonitor.dataCollector});
rule_852.addFilter(condition_f7d1a3ce_15e4_4f69_84b0_2b233ac15529);

condition_11f9fd86_c086_4e71_b164_55b5ca06f824 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_11f9251e_83e7_5967_ab57_d5620a303124, comparisonVariable: '', comparisonType: 'Equals', uniqueId: '11f9fd86_c086_4e71_b164_55b5ca06f824'});

rule_911 = new taginspector.datapulse.BaseRule({uniqueId: '911', dataCollector: tiMonitor.dataCollector});
rule_911.addFilter(condition_11f9fd86_c086_4e71_b164_55b5ca06f824);


condition_d371a027_16de_45e4_904e_0599d4ba2648 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: 'd371a027_16de_45e4_904e_0599d4ba2648'});
trigger_function_trigger_7501bd74_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_d371a027_16de_45e4_904e_0599d4ba2648.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_7501bd74_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_7501bd74_8287_11e7_84cb_120ce89fd215, uniqueId: '7501bd74_8287_11e7_84cb_120ce89fd215' });
trigger_7501bd74_8287_11e7_84cb_120ce89fd215.addRule(rule_946);
rule_946.addTrigger(trigger_7501bd74_8287_11e7_84cb_120ce89fd215);

condition_81c5406f_f361_4219_887d_ab3176b3c8e3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '81c5406f_f361_4219_887d_ab3176b3c8e3'});
trigger_function_trigger_7501d890_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_81c5406f_f361_4219_887d_ab3176b3c8e3.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_7501d890_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_7501d890_8287_11e7_84cb_120ce89fd215, uniqueId: '7501d890_8287_11e7_84cb_120ce89fd215' });
trigger_7501d890_8287_11e7_84cb_120ce89fd215.addRule(rule_850);
rule_850.addTrigger(trigger_7501d890_8287_11e7_84cb_120ce89fd215);

condition_27f22ceb_de06_425f_ba29_47b0d6d9692a = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '27f22ceb_de06_425f_ba29_47b0d6d9692a'});
trigger_function_trigger_7501ed76_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_27f22ceb_de06_425f_ba29_47b0d6d9692a.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_7501ed76_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_7501ed76_8287_11e7_84cb_120ce89fd215, uniqueId: '7501ed76_8287_11e7_84cb_120ce89fd215' });
trigger_7501ed76_8287_11e7_84cb_120ce89fd215.addRule(rule_849);
rule_849.addTrigger(trigger_7501ed76_8287_11e7_84cb_120ce89fd215);

condition_996a4522_26d5_4419_b019_a9760b6bf8fb = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '996a4522_26d5_4419_b019_a9760b6bf8fb'});
trigger_function_trigger_75020996_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_996a4522_26d5_4419_b019_a9760b6bf8fb.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_75020996_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_75020996_8287_11e7_84cb_120ce89fd215, uniqueId: '75020996_8287_11e7_84cb_120ce89fd215' });
trigger_75020996_8287_11e7_84cb_120ce89fd215.addRule(rule_851);
rule_851.addTrigger(trigger_75020996_8287_11e7_84cb_120ce89fd215);

condition_80cb4e3b_374c_4368_a07d_8d5ebed9c5a4 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '80cb4e3b_374c_4368_a07d_8d5ebed9c5a4'});
trigger_function_trigger_7502219c_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_80cb4e3b_374c_4368_a07d_8d5ebed9c5a4.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_7502219c_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_7502219c_8287_11e7_84cb_120ce89fd215, uniqueId: '7502219c_8287_11e7_84cb_120ce89fd215' });
trigger_7502219c_8287_11e7_84cb_120ce89fd215.addRule(rule_853);
rule_853.addTrigger(trigger_7502219c_8287_11e7_84cb_120ce89fd215);

condition_1b221e95_37d8_40ce_8313_69bc246466c3 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '1b221e95_37d8_40ce_8313_69bc246466c3'});
trigger_function_trigger_75024d52_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_1b221e95_37d8_40ce_8313_69bc246466c3.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_75024d52_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_75024d52_8287_11e7_84cb_120ce89fd215, uniqueId: '75024d52_8287_11e7_84cb_120ce89fd215' });
trigger_75024d52_8287_11e7_84cb_120ce89fd215.addRule(rule_891);
rule_891.addTrigger(trigger_75024d52_8287_11e7_84cb_120ce89fd215);

condition_49a7957c_c814_4c4c_b517_32391fad2715 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '49a7957c_c814_4c4c_b517_32391fad2715'});
trigger_function_trigger_750264ae_8287_11e7_84cb_120ce89fd215 = function (cb) {
			var triggerFired = false;
			function fireCallback(){
				if(triggerFired == false){
					triggerFired = true;
					if(condition_49a7957c_c814_4c4c_b517_32391fad2715.match() == true){
						cb(true);
					}
				}
			}
			window.addEventListener("beforeunload", function (event) {fireCallback();});
			window.addEventListener("unload", function (event) {fireCallback();});
			document.addEventListener('tiSimulateUnload', function (e) {
				fireCallback();
			}, false);
		};
trigger_750264ae_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_750264ae_8287_11e7_84cb_120ce89fd215, uniqueId: '750264ae_8287_11e7_84cb_120ce89fd215' });
trigger_750264ae_8287_11e7_84cb_120ce89fd215.addRule(rule_852);
rule_852.addTrigger(trigger_750264ae_8287_11e7_84cb_120ce89fd215);

condition_402bd3cf_2331_4ea6_8a96_7462992f1430 = new taginspector.datapulse.filter.JsExpressionFilter({sourceVariable: macro_31dad1ae_f686_5581_8cbc_52bf9629b428, comparisonVariable: 'zennioptical.com/orderConfirm', comparisonType: 'Contains', uniqueId: '402bd3cf_2331_4ea6_8a96_7462992f1430'});
trigger_function_trigger_7504c000_8287_11e7_84cb_120ce89fd215 = function (cb) {
			function fireCallback(){
				if(condition_402bd3cf_2331_4ea6_8a96_7462992f1430.match() == true){
					cb(true);
				}
			}

			if(document.readyState == 'complete' || document.readyState == 'interactive'){
				fireCallback();
			}else{
				document.addEventListener("DOMContentLoaded", function(event) {
					fireCallback();
				});
			}
		};
trigger_7504c000_8287_11e7_84cb_120ce89fd215 = new taginspector.datapulse.trigger.BaseTrigger({triggerScript: trigger_function_trigger_7504c000_8287_11e7_84cb_120ce89fd215, uniqueId: '7504c000_8287_11e7_84cb_120ce89fd215' });
trigger_7504c000_8287_11e7_84cb_120ce89fd215.addRule(rule_911);
rule_911.addTrigger(trigger_7504c000_8287_11e7_84cb_120ce89fd215);

trigger_7501bd74_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_7501d890_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_7501ed76_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_75020996_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_7502219c_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_75024d52_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_750264ae_8287_11e7_84cb_120ce89fd215.initTrigger();
trigger_7504c000_8287_11e7_84cb_120ce89fd215.initTrigger();

	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};

tiMonitor.fireValidationRules = function (){
	try {
		//fire unload triggers:
		if(document.createEvent){
			var event = document.createEvent('Event');
			event.initEvent('tiSimulateUnload', true, true);

			tiMonitor.sendData.handleUnload();
			document.dispatchEvent(event);
		}
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};


tiMonitor.initializeNewPage = function (){
	try {
		tiMonitor.windowUnloadEvent = false;
		tiMonitor.sendData.sentUnload = false;
		newPageId =  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);return v.toString(16);});
		tiMonitor.sendData.pageId = newPageId;
		tiMonitor.dataCollector.pageId = newPageId;
		
		tiMonitor.dataCollector.startTime = new Date();
		tiMonitor.dataCollector.identifiedRequests = {};
		tiMonitor.dataCollector.offsetTime = performance.now();
		tiMonitor.sendData.currentUrl = window.location.href;
	}
	catch(err) {
		console.log(err.message);
		jeErrorObj = {
			message: err.message
		};
		tiMonitor.dataCollector.queueRequest(jeErrorObj, "jserror");
	}
};


if(tiMonitor.sendData.suportedBrowser() == true){
	if(tiMonitor.sendData.initialized == false){
		tiMonitor.sendData.initialized = true;
		if(tiMonitor.sendData.shouldSamplePage() == false && tiMonitor.sendData.isBufferFull() == false){
			if(false){
				tiMonitor.dataCollector.session = taginspector.datapulse.Session.setupSession({"containerId": "0d171be225de11e783d4125d82e54c54"});
			}
			tiMonitor.sendData.fullBufferEventListener();

			if(tiMonitor.sendData.isPerformanceObserverSupported() == true){
				var iteratePerformanceCompleted = false;
				while(iteratePerformanceCompleted == false){
					tiMonitor.sendData.iteratePerformance();
					pe = performance.getEntriesByType("resource");
					if(tiMonitor.sendData.lastPerformanceObjLength == pe.length){
						iteratePerformanceCompleted = true;
					}
				}
				var observer = new PerformanceObserver(tiMonitor.sendData.performanceObserverCallback);
				observer.observe({entryTypes: ['resource']});

			}else{
				setInterval(function () {tiMonitor.sendData.iteratePerformance()}, 100);
			}

			window.addEventListener('beforeunload', function(event) { tiMonitor.sendData.handleBeforeUnload();});
			window.addEventListener('unload', function(event) {tiMonitor.sendData.handleUnload();});

			///*angular_site*/
			if(tiMonitor.sendData.isSinglePageApp()){
				setInterval(function () {
					if(tiMonitor.sendData.currentUrl != window.location.href){
						tiMonitor.fireValidationRules();
						tiMonitor.sendData.pageComplete();

						tiMonitor.sendData.currentUrl = window.location.href;
						tiMonitor.initializeNewPage();
					}
				}, 50);
			}
			
			var tiDomLoadInterval = setInterval(function () {
				isDomLoaded = tiMonitor.sendData.waitForDomLoad();
				if(isDomLoaded){
					clearInterval(tiDomLoadInterval);
				}
			}, 1000);
			setInterval(function () {tiMonitor.sendData.fire()}, 100);

		}
	}
}


