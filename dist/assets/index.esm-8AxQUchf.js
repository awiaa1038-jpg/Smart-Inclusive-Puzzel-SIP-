import{F as Hh,l as ae,L as Wh,m as Xt,n as Lu,p as Xh,i as Yh,e as Vu,q as Jh,g as Zh,t as yi,u as ed,v as td,S as nd,f as sd,C as rd,r as ya}from"./index.esm2017-DjCaa2Xg.js";var id=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},T,Yi=Yi||{},A=id||self;function Ir(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Er(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function od(n,e,t){return n.call.apply(n.bind,arguments)}function ad(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function we(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?we=od:we=ad,we.apply(null,arguments)}function Rs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function ce(n,e){function t(){}t.prototype=e.prototype,n.$=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.ac=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function at(){this.s=this.s,this.o=this.o}var ud=0;at.prototype.s=!1;at.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),ud!=0)};at.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const qu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Ji(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function wa(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Ir(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function ve(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ve.prototype.h=function(){this.defaultPrevented=!0};var cd=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",()=>{},e),A.removeEventListener("test",()=>{},e)}catch{}return n}();function Gn(n){return/^[\s\xa0]*$/.test(n)}function Tr(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Me(n){return Tr().indexOf(n)!=-1}function Zi(n){return Zi[" "](n),n}Zi[" "]=function(){};function ld(n,e){var t=sf;return Object.prototype.hasOwnProperty.call(t,n)?t[n]:t[n]=e(n)}var hd=Me("Opera"),Yt=Me("Trident")||Me("MSIE"),Bu=Me("Edge"),wi=Bu||Yt,Uu=Me("Gecko")&&!(Tr().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge"))&&!(Me("Trident")||Me("MSIE"))&&!Me("Edge"),dd=Tr().toLowerCase().indexOf("webkit")!=-1&&!Me("Edge");function $u(){var n=A.document;return n?n.documentMode:void 0}var vi;e:{var ii="",oi=function(){var n=Tr();if(Uu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Bu)return/Edge\/([\d\.]+)/.exec(n);if(Yt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(dd)return/WebKit\/(\S+)/.exec(n);if(hd)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(oi&&(ii=oi?oi[1]:""),Yt){var ai=$u();if(ai!=null&&ai>parseFloat(ii)){vi=String(ai);break e}}vi=ii}var Ii;if(A.document&&Yt){var va=$u();Ii=va||parseInt(vi,10)||void 0}else Ii=void 0;var fd=Ii;function jn(n,e){if(ve.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Uu){e:{try{Zi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:md[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&jn.$.h.call(this)}}ce(jn,ve);var md={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Sr="closure_listenable_"+(1e6*Math.random()|0),gd=0;function pd(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.la=r,this.key=++gd,this.fa=this.ia=!1}function xr(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function eo(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function yd(n,e){for(const t in n)e.call(void 0,n[t],t,n)}function zu(n){const e={};for(const t in n)e[t]=n[t];return e}const Ia="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Gu(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<Ia.length;i++)t=Ia[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function br(n){this.src=n,this.g={},this.h=0}br.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ti(n,e,s,r);return-1<o?(e=n[o],t||(e.ia=!1)):(e=new pd(e,this.src,i,!!s,r),e.ia=t,n.push(e)),e};function Ei(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=qu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(xr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ti(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.fa&&i.listener==e&&i.capture==!!t&&i.la==s)return r}return-1}var to="closure_lm_"+(1e6*Math.random()|0),ui={};function ju(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)ju(n,e[i],t,s,r);return null}return t=Hu(t),n&&n[Sr]?n.O(e,t,Er(s)?!!s.capture:!1,r):wd(n,e,t,!1,s,r)}function wd(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Er(r)?!!r.capture:!!r,a=so(n);if(a||(n[to]=a=new br(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=vd(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)cd||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Qu(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function vd(){function n(t){return e.call(n.src,n.listener,t)}const e=Id;return n}function Ku(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Ku(n,e[i],t,s,r);else s=Er(s)?!!s.capture:!!s,t=Hu(t),n&&n[Sr]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ti(i,t,s,r),-1<t&&(xr(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=so(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ti(e,t,s,r)),(t=-1<n?e[n]:null)&&no(t))}function no(n){if(typeof n!="number"&&n&&!n.fa){var e=n.src;if(e&&e[Sr])Ei(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Qu(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=so(e))?(Ei(t,n),t.h==0&&(t.src=null,e[to]=null)):xr(n)}}}function Qu(n){return n in ui?ui[n]:ui[n]="on"+n}function Id(n,e){if(n.fa)n=!0;else{e=new jn(e,this);var t=n.listener,s=n.la||n.src;n.ia&&no(n),n=t.call(s,e)}return n}function so(n){return n=n[to],n instanceof br?n:null}var ci="__closure_events_fn_"+(1e9*Math.random()>>>0);function Hu(n){return typeof n=="function"?n:(n[ci]||(n[ci]=function(e){return n.handleEvent(e)}),n[ci])}function ue(){at.call(this),this.i=new br(this),this.S=this,this.J=null}ce(ue,at);ue.prototype[Sr]=!0;ue.prototype.removeEventListener=function(n,e,t,s){Ku(this,n,e,t,s)};function me(n,e){var t,s=n.J;if(s)for(t=[];s;s=s.J)t.push(s);if(n=n.S,s=e.type||e,typeof e=="string")e=new ve(e,n);else if(e instanceof ve)e.target=e.target||n;else{var r=e;e=new ve(s,n),Gu(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Ms(o,s,!0,e)&&r}if(o=e.g=n,r=Ms(o,s,!0,e)&&r,r=Ms(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Ms(o,s,!1,e)&&r}ue.prototype.N=function(){if(ue.$.N.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)xr(t[s]);delete n.g[e],n.h--}}this.J=null};ue.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ue.prototype.P=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Ms(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==t){var a=o.listener,u=o.la||o.src;o.ia&&Ei(n.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var ro=A.JSON.stringify;class Ed{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function Td(){var n=io;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Sd{constructor(){this.h=this.g=null}add(e,t){const s=Wu.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Wu=new Ed(()=>new xd,n=>n.reset());class xd{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function bd(n){var e=1;n=n.split(":");const t=[];for(;0<e&&n.length;)t.push(n.shift()),e--;return n.length&&t.push(n.join(":")),t}function Dd(n){A.setTimeout(()=>{throw n},0)}let Kn,Qn=!1,io=new Sd,Xu=()=>{const n=A.Promise.resolve(void 0);Kn=()=>{n.then(Cd)}};var Cd=()=>{for(var n;n=Td();){try{n.h.call(n.g)}catch(t){Dd(t)}var e=Wu;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Qn=!1};function Dr(n,e){ue.call(this),this.h=n||1,this.g=e||A,this.j=we(this.qb,this),this.l=Date.now()}ce(Dr,ue);T=Dr.prototype;T.ga=!1;T.T=null;T.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),me(this,"tick"),this.ga&&(oo(this),this.start()))}};T.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function oo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}T.N=function(){Dr.$.N.call(this),oo(this),delete this.g};function ao(n,e,t){if(typeof n=="function")t&&(n=we(n,t));else if(n&&typeof n.handleEvent=="function")n=we(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function Yu(n){n.g=ao(()=>{n.g=null,n.i&&(n.i=!1,Yu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Ad extends at{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Yu(this)}N(){super.N(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Hn(n){at.call(this),this.h=n,this.g={}}ce(Hn,at);var Ea=[];function Ju(n,e,t,s){Array.isArray(t)||(t&&(Ea[0]=t.toString()),t=Ea);for(var r=0;r<t.length;r++){var i=ju(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Zu(n){eo(n.g,function(e,t){this.g.hasOwnProperty(t)&&no(e)},n),n.g={}}Hn.prototype.N=function(){Hn.$.N.call(this),Zu(this)};Hn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Cr(){this.g=!0}Cr.prototype.Ea=function(){this.g=!1};function _d(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function Nd(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function jt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Rd(n,t)+(s?" "+s:"")})}function kd(n,e){n.info(function(){return"TIMEOUT: "+e})}Cr.prototype.info=function(){};function Rd(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return ro(t)}catch{return e}}var Ot={},Ta=null;function Ar(){return Ta=Ta||new ue}Ot.Ta="serverreachability";function ec(n){ve.call(this,Ot.Ta,n)}ce(ec,ve);function Wn(n){const e=Ar();me(e,new ec(e))}Ot.STAT_EVENT="statevent";function tc(n,e){ve.call(this,Ot.STAT_EVENT,n),this.stat=e}ce(tc,ve);function Ee(n){const e=Ar();me(e,new tc(e,n))}Ot.Ua="timingevent";function nc(n,e){ve.call(this,Ot.Ua,n),this.size=e}ce(nc,ve);function hs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var _r={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function uo(){}uo.prototype.h=null;function Sa(n){return n.h||(n.h=n.i())}function rc(){}var ds={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function co(){ve.call(this,"d")}ce(co,ve);function lo(){ve.call(this,"c")}ce(lo,ve);var Si;function Nr(){}ce(Nr,uo);Nr.prototype.g=function(){return new XMLHttpRequest};Nr.prototype.i=function(){return{}};Si=new Nr;function fs(n,e,t,s){this.l=n,this.j=e,this.m=t,this.W=s||1,this.U=new Hn(this),this.P=Md,n=wi?125:void 0,this.V=new Dr(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ic}function ic(){this.i=null,this.g="",this.h=!1}var Md=45e3,xi={},er={};T=fs.prototype;T.setTimeout=function(n){this.P=n};function bi(n,e,t){n.L=1,n.v=Rr(ze(e)),n.s=t,n.S=!0,oc(n,null)}function oc(n,e){n.G=Date.now(),ms(n),n.A=ze(n.v);var t=n.A,s=n.W;Array.isArray(s)||(s=[String(s)]),mc(t.i,"t",s),n.C=0,t=n.l.J,n.h=new ic,n.g=Oc(n.l,t?e:null,!n.s),0<n.O&&(n.M=new Ad(we(n.Pa,n,n.g),n.O)),Ju(n.U,n.g,"readystatechange",n.nb),e=n.I?zu(n.I):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,e)):(n.u="GET",n.g.ha(n.A,n.u,null,e)),Wn(),_d(n.j,n.u,n.A,n.m,n.W,n.s)}T.nb=function(n){n=n.target;const e=this.M;e&&Fe(n)==3?e.l():this.Pa(n)};T.Pa=function(n){try{if(n==this.g)e:{const l=Fe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>l)&&(l!=3||wi||this.g&&(this.h.h||this.g.ja()||Ca(this.g)))){this.J||l!=4||e==7||(e==8||0>=h?Wn(3):Wn(2)),kr(this);var t=this.g.da();this.ca=t;t:if(ac(this)){var s=Ca(this.g);n="";var r=s.length,i=Fe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Et(this),Vn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=t==200,Nd(this.j,this.u,this.A,this.m,this.W,l,t),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Gn(a)){var c=a;break t}}c=null}if(t=c)jt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Di(this,t);else{this.i=!1,this.o=3,Ee(12),Et(this),Vn(this);break e}}this.S?(uc(this,l,o),wi&&this.i&&l==3&&(Ju(this.U,this.V,"tick",this.mb),this.V.start())):(jt(this.j,this.m,o,null),Di(this,o)),l==4&&Et(this),this.i&&!this.J&&(l==4?kc(this.l,this):(this.i=!1,ms(this)))}else ef(this.g),t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ee(12)):(this.o=0,Ee(13)),Et(this),Vn(this)}}}catch{}finally{}};function ac(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function uc(n,e,t){let s=!0,r;for(;!n.J&&n.C<t.length;)if(r=Fd(n,t),r==er){e==4&&(n.o=4,Ee(14),s=!1),jt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==xi){n.o=4,Ee(15),jt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else jt(n.j,n.m,r,null),Di(n,r);ac(n)&&r!=er&&r!=xi&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ee(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.ba&&(n.ba=!0,e=n.l,e.g==n&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+t.length),yo(e),e.M=!0,Ee(11))):(jt(n.j,n.m,t,"[Invalid Chunked Response]"),Et(n),Vn(n))}T.mb=function(){if(this.g){var n=Fe(this.g),e=this.g.ja();this.C<e.length&&(kr(this),uc(this,n,e),this.i&&n!=4&&ms(this))}};function Fd(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?er:(t=Number(e.substring(t,s)),isNaN(t)?xi:(s+=1,s+t>e.length?er:(e=e.slice(s,s+t),n.C=s+t,e)))}T.cancel=function(){this.J=!0,Et(this)};function ms(n){n.Y=Date.now()+n.P,cc(n,n.P)}function cc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=hs(we(n.lb,n),e)}function kr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}T.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(kd(this.j,this.A),this.L!=2&&(Wn(),Ee(17)),Et(this),this.o=2,Vn(this)):cc(this,this.Y-n)};function Vn(n){n.l.H==0||n.J||kc(n.l,n)}function Et(n){kr(n);var e=n.M;e&&typeof e.sa=="function"&&e.sa(),n.M=null,oo(n.V),Zu(n.U),n.g&&(e=n.g,n.g=null,e.abort(),e.sa())}function Di(n,e){try{var t=n.l;if(t.H!=0&&(t.g==n||Ci(t.i,n))){if(!n.K&&Ci(t.i,n)&&t.H==3){try{var s=t.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.G+3e3<n.G)sr(t),Or(t);else break e;po(t),Ee(18)}}else t.Fa=r[1],0<t.Fa-t.V&&37500>r[2]&&t.G&&t.A==0&&!t.v&&(t.v=hs(we(t.ib,t),6e3));if(1>=yc(t.i)&&t.oa){try{t.oa()}catch{}t.oa=void 0}}else Tt(t,11)}else if((n.K||t.g==n)&&sr(t),!Gn(e))for(r=t.Ja.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.V=c[0],c=c[1],t.H==2)if(c[0]=="c"){t.K=c[1],t.pa=c[2];const l=c[3];l!=null&&(t.ra=l,t.l.info("VER="+t.ra));const h=c[4];h!=null&&(t.Ga=h,t.l.info("SVER="+t.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.L=s,t.l.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.i;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ho(i,i.h),i.h=null))}if(s.F){const I=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(s.Da=I,B(s.I,s.F,I))}}t.H=3,t.h&&t.h.Ba(),t.ca&&(t.S=Date.now()-n.G,t.l.info("Handshake RTT: "+t.S+"ms")),s=t;var o=n;if(s.wa=Fc(s,s.J?s.pa:null,s.Y),o.K){wc(s.i,o);var a=o,u=s.L;u&&a.setTimeout(u),a.B&&(kr(a),ms(a)),s.g=o}else _c(s);0<t.j.length&&Pr(t)}else c[0]!="stop"&&c[0]!="close"||Tt(t,7);else t.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Tt(t,7):go(t):c[0]!="noop"&&t.h&&t.h.Aa(c),t.A=0)}}Wn(4)}catch{}}function Od(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ir(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Pd(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ir(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function lc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Ir(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Pd(n),s=Od(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var hc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ld(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function xt(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof xt){this.h=n.h,tr(this,n.j),this.s=n.s,this.g=n.g,nr(this,n.m),this.l=n.l;var e=n.i,t=new Xn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),xa(this,t),this.o=n.o}else n&&(e=String(n).match(hc))?(this.h=!1,tr(this,e[1]||"",!0),this.s=Mn(e[2]||""),this.g=Mn(e[3]||"",!0),nr(this,e[4]),this.l=Mn(e[5]||"",!0),xa(this,e[6]||"",!0),this.o=Mn(e[7]||"")):(this.h=!1,this.i=new Xn(null,this.h))}xt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Fn(e,ba,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Fn(e,ba,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Fn(t,t.charAt(0)=="/"?Bd:qd,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Fn(t,$d)),n.join("")};function ze(n){return new xt(n)}function tr(n,e,t){n.j=t?Mn(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function nr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function xa(n,e,t){e instanceof Xn?(n.i=e,zd(n.i,n.h)):(t||(e=Fn(e,Ud)),n.i=new Xn(e,n.h))}function B(n,e,t){n.i.set(e,t)}function Rr(n){return B(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Mn(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Fn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Vd),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Vd(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var ba=/[#\/\?@]/g,qd=/[#\?:]/g,Bd=/[#\?]/g,Ud=/[#\?@]/g,$d=/#/g;function Xn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function ut(n){n.g||(n.g=new Map,n.h=0,n.i&&Ld(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}T=Xn.prototype;T.add=function(n,e){ut(this),this.i=null,n=fn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function dc(n,e){ut(n),e=fn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function fc(n,e){return ut(n),e=fn(n,e),n.g.has(e)}T.forEach=function(n,e){ut(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};T.ta=function(){ut(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};T.Z=function(n){ut(this);let e=[];if(typeof n=="string")fc(this,n)&&(e=e.concat(this.g.get(fn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};T.set=function(n,e){return ut(this),this.i=null,n=fn(this,n),fc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};T.get=function(n,e){return n?(n=this.Z(n),0<n.length?String(n[0]):e):e};function mc(n,e,t){dc(n,e),0<t.length&&(n.i=null,n.g.set(fn(n,e),Ji(t)),n.h+=t.length)}T.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function fn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function zd(n,e){e&&!n.j&&(ut(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(dc(this,s),mc(this,r,t))},n)),n.j=e}var Gd=class{constructor(n,e){this.g=n,this.map=e}};function gc(n){this.l=n||jd,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ka&&A.g.Ka()&&A.g.Ka().ec),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var jd=10;function pc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function yc(n){return n.h?1:n.g?n.g.size:0}function Ci(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function ho(n,e){n.g?n.g.add(e):n.h=e}function wc(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}gc.prototype.cancel=function(){if(this.i=vc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function vc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.F);return e}return Ji(n.i)}var Kd=class{stringify(n){return A.JSON.stringify(n,void 0)}parse(n){return A.JSON.parse(n,void 0)}};function Qd(){this.g=new Kd}function Hd(n,e,t){const s=t||"";try{lc(n,function(r,i){let o=r;Er(r)&&(o=ro(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function Wd(n,e){const t=new Cr;if(A.Image){const s=new Image;s.onload=Rs(Fs,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Rs(Fs,t,s,"TestLoadImage: error",!1,e),s.onabort=Rs(Fs,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Rs(Fs,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Fs(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function gs(n){this.l=n.fc||null,this.j=n.ob||!1}ce(gs,uo);gs.prototype.g=function(){return new Mr(this.l,this.j)};gs.prototype.i=function(n){return function(){return n}}({});function Mr(n,e){ue.call(this),this.F=n,this.u=e,this.m=void 0,this.readyState=fo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ce(Mr,ue);var fo=0;T=Mr.prototype;T.open=function(n,e){if(this.readyState!=fo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Yn(this)};T.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.F||A).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};T.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ps(this)),this.readyState=fo};T.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Yn(this)),this.g&&(this.readyState=3,Yn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Ic(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Ic(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}T.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ps(this):Yn(this),this.readyState==3&&Ic(this)}};T.Za=function(n){this.g&&(this.response=this.responseText=n,ps(this))};T.Ya=function(n){this.g&&(this.response=n,ps(this))};T.ka=function(){this.g&&ps(this)};function ps(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Yn(n)}T.setRequestHeader=function(n,e){this.v.append(n,e)};T.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};T.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Yn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Mr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Xd=A.JSON.parse;function H(n){ue.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ec,this.L=this.M=!1}ce(H,ue);var Ec="",Yd=/^https?$/i,Jd=["POST","PUT"];T=H.prototype;T.Oa=function(n){this.M=n};T.ha=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);e=e?e.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Si.g(),this.C=this.u?Sa(this.u):Sa(Si),this.g.onreadystatechange=we(this.La,this);try{this.G=!0,this.g.open(e,String(n),!0),this.G=!1}catch(i){Da(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=A.FormData&&n instanceof A.FormData,!(0<=qu(Jd,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{xc(this),0<this.B&&((this.L=Zd(this.g))?(this.g.timeout=this.B,this.g.ontimeout=we(this.ua,this)):this.A=ao(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Da(this,i)}};function Zd(n){return Yt&&typeof n.timeout=="number"&&n.ontimeout!==void 0}T.ua=function(){typeof Yi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,me(this,"timeout"),this.abort(8))};function Da(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Tc(n),Fr(n)}function Tc(n){n.F||(n.F=!0,me(n,"complete"),me(n,"error"))}T.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,me(this,"complete"),me(this,"abort"),Fr(this))};T.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Fr(this,!0)),H.$.N.call(this)};T.La=function(){this.s||(this.G||this.v||this.l?Sc(this):this.kb())};T.kb=function(){Sc(this)};function Sc(n){if(n.h&&typeof Yi<"u"&&(!n.C[1]||Fe(n)!=4||n.da()!=2)){if(n.v&&Fe(n)==4)ao(n.La,0,n);else if(me(n,"readystatechange"),Fe(n)==4){n.h=!1;try{const o=n.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var r=String(n.I).match(hc)[1]||null;!r&&A.self&&A.self.location&&(r=A.self.location.protocol.slice(0,-1)),s=!Yd.test(r?r.toLowerCase():"")}t=s}if(t)me(n,"complete"),me(n,"success");else{n.m=6;try{var i=2<Fe(n)?n.g.statusText:""}catch{i=""}n.j=i+" ["+n.da()+"]",Tc(n)}}finally{Fr(n)}}}}function Fr(n,e){if(n.g){xc(n);const t=n.g,s=n.C[0]?()=>{}:null;n.g=null,n.C=null,e||me(n,"ready");try{t.onreadystatechange=s}catch{}}}function xc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}T.isActive=function(){return!!this.g};function Fe(n){return n.g?n.g.readyState:0}T.da=function(){try{return 2<Fe(this)?this.g.status:-1}catch{return-1}};T.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};T.Wa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),Xd(e)}};function Ca(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Ec:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function ef(n){const e={};n=(n.g&&2<=Fe(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<n.length;s++){if(Gn(n[s]))continue;var t=bd(n[s]);const r=t[0];if(t=t[1],typeof t!="string")continue;t=t.trim();const i=e[r]||[];e[r]=i,i.push(t)}yd(e,function(s){return s.join(", ")})}T.Ia=function(){return this.m};T.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bc(n){let e="";return eo(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function mo(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=bc(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):B(n,e,t))}function bn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Dc(n){this.Ga=0,this.j=[],this.l=new Cr,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=bn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=bn("baseRetryDelayMs",5e3,n),this.hb=bn("retryDelaySeedMs",1e4,n),this.eb=bn("forwardChannelMaxRetries",2,n),this.xa=bn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.dc||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new gc(n&&n.concurrentRequestLimit),this.Ja=new Qd,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}T=Dc.prototype;T.ra=8;T.H=1;function go(n){if(Cc(n),n.H==3){var e=n.W++,t=ze(n.I);if(B(t,"SID",n.K),B(t,"RID",e),B(t,"TYPE","terminate"),ys(n,t),e=new fs(n,n.l,e),e.L=2,e.v=Rr(ze(t)),t=!1,A.navigator&&A.navigator.sendBeacon)try{t=A.navigator.sendBeacon(e.v.toString(),"")}catch{}!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=Oc(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ms(e)}Mc(n)}function Or(n){n.g&&(yo(n),n.g.cancel(),n.g=null)}function Cc(n){Or(n),n.u&&(A.clearTimeout(n.u),n.u=null),sr(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function Pr(n){if(!pc(n.i)&&!n.m){n.m=!0;var e=n.Na;Kn||Xu(),Qn||(Kn(),Qn=!0),io.add(e,n),n.C=0}}function tf(n,e){return yc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=e.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=hs(we(n.Na,n,e),Rc(n,n.C)),n.C++,!0)}T.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const r=new fs(this,this.l,n);let i=this.s;if(this.U&&(i?(i=zu(i),Gu(i,this.U)):i=this.U),this.o!==null||this.O||(r.I=i,i=null),this.P)e:{for(var e=0,t=0;t<this.j.length;t++){t:{var s=this.j[t];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.j.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Ac(this,r,e),t=ze(this.I),B(t,"RID",n),B(t,"CVER",22),this.F&&B(t,"X-HTTP-Session-Id",this.F),ys(this,t),i&&(this.O?e="headers="+encodeURIComponent(String(bc(i)))+"&"+e:this.o&&mo(t,this.o,i)),ho(this.i,r),this.bb&&B(t,"TYPE","init"),this.P?(B(t,"$req",e),B(t,"SID","null"),r.aa=!0,bi(r,t,null)):bi(r,t,e),this.H=2}}else this.H==3&&(n?Aa(this,n):this.j.length==0||pc(this.i)||Aa(this))};function Aa(n,e){var t;e?t=e.m:t=n.W++;const s=ze(n.I);B(s,"SID",n.K),B(s,"RID",t),B(s,"AID",n.V),ys(n,s),n.o&&n.s&&mo(s,n.o,n.s),t=new fs(n,n.l,t,n.C+1),n.o===null&&(t.I=n.s),e&&(n.j=e.F.concat(n.j)),e=Ac(n,t,1e3),t.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),ho(n.i,t),bi(t,s,e)}function ys(n,e){n.na&&eo(n.na,function(t,s){B(e,s,t)}),n.h&&lc({},function(t,s){B(e,s,t)})}function Ac(n,e,t){t=Math.min(n.j.length,t);var s=n.h?we(n.h.Va,n.h,n):null;e:{var r=n.j;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<t;u++){let c=r[u].g;const l=r[u].map;if(c-=i,0>c)i=Math.max(0,r[u].g-100),a=!1;else try{Hd(l,o,"req"+c+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.j.splice(0,t),e.F=n,s}function _c(n){if(!n.g&&!n.u){n.ba=1;var e=n.Ma;Kn||Xu(),Qn||(Kn(),Qn=!0),io.add(e,n),n.A=0}}function po(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=hs(we(n.Ma,n),Rc(n,n.A)),n.A++,!0)}T.Ma=function(){if(this.u=null,Nc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=hs(we(this.jb,this),n)}};T.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ee(10),Or(this),Nc(this))};function yo(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function Nc(n){n.g=new fs(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var e=ze(n.wa);B(e,"RID","rpc"),B(e,"SID",n.K),B(e,"AID",n.V),B(e,"CI",n.G?"0":"1"),!n.G&&n.qa&&B(e,"TO",n.qa),B(e,"TYPE","xmlhttp"),ys(n,e),n.o&&n.s&&mo(e,n.o,n.s),n.L&&n.g.setTimeout(n.L);var t=n.g;n=n.pa,t.L=1,t.v=Rr(ze(e)),t.s=null,t.S=!0,oc(t,n)}T.ib=function(){this.v!=null&&(this.v=null,Or(this),po(this),Ee(19))};function sr(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function kc(n,e){var t=null;if(n.g==e){sr(n),yo(n),n.g=null;var s=2}else if(Ci(n.i,e))t=e.F,wc(n.i,e),s=1;else return;if(n.H!=0){if(e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.G;var r=n.C;s=Ar(),me(s,new nc(s,t)),Pr(n)}else _c(n);else if(r=e.o,r==3||r==0&&0<e.ca||!(s==1&&tf(n,e)||s==2&&po(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),r){case 1:Tt(n,5);break;case 4:Tt(n,10);break;case 3:Tt(n,6);break;default:Tt(n,2)}}}function Rc(n,e){let t=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(t*=2),t*e}function Tt(n,e){if(n.l.info("Error code "+e),e==2){var t=null;n.h&&(t=null);var s=we(n.pb,n);t||(t=new xt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||tr(t,"https"),Rr(t)),Wd(t.toString(),s)}else Ee(2);n.H=0,n.h&&n.h.za(e),Mc(n),Cc(n)}T.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ee(2)):(this.l.info("Failed to ping google.com"),Ee(1))};function Mc(n){if(n.H=0,n.ma=[],n.h){const e=vc(n.i);(e.length!=0||n.j.length!=0)&&(wa(n.ma,e),wa(n.ma,n.j),n.i.i.length=0,Ji(n.j),n.j.length=0),n.h.ya()}}function Fc(n,e,t){var s=t instanceof xt?ze(t):new xt(t);if(s.g!="")e&&(s.g=e+"."+s.g),nr(s,s.m);else{var r=A.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new xt(null);s&&tr(i,s),e&&(i.g=e),r&&nr(i,r),t&&(i.l=t),s=i}return t=n.F,e=n.Da,t&&e&&B(s,t,e),B(s,"VER",n.ra),ys(n,s),s}function Oc(n,e,t){if(e&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ha&&!n.va?new H(new gs({ob:!0})):new H(n.va),e.Oa(n.J),e}T.isActive=function(){return!!this.h&&this.h.isActive(this)};function Pc(){}T=Pc.prototype;T.Ba=function(){};T.Aa=function(){};T.za=function(){};T.ya=function(){};T.isActive=function(){return!0};T.Va=function(){};function rr(){if(Yt&&!(10<=Number(fd)))throw Error("Environmental error: no available transport.")}rr.prototype.g=function(n,e){return new Ce(n,e)};function Ce(n,e){ue.call(this),this.g=new Dc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(n?n["X-WebChannel-Client-Profile"]=e.Ca:n={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=n,(n=e&&e.cc)&&!Gn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Gn(e)&&(this.g.F=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new mn(this)}ce(Ce,ue);Ce.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,e=this.l,t=this.h||void 0;Ee(0),n.Y=e,n.na=t||{},n.G=n.aa,n.I=Fc(n,null,n.Y),Pr(n)};Ce.prototype.close=function(){go(this.g)};Ce.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=ro(n),n=t);e.j.push(new Gd(e.fb++,n)),e.H==3&&Pr(e)};Ce.prototype.N=function(){this.g.h=null,delete this.j,go(this.g),delete this.g,Ce.$.N.call(this)};function Lc(n){co.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ce(Lc,co);function Vc(){lo.call(this),this.status=1}ce(Vc,lo);function mn(n){this.g=n}ce(mn,Pc);mn.prototype.Ba=function(){me(this.g,"a")};mn.prototype.Aa=function(n){me(this.g,new Lc(n))};mn.prototype.za=function(n){me(this.g,new Vc)};mn.prototype.ya=function(){me(this.g,"b")};function nf(){this.blockSize=-1}function ke(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ce(ke,nf);ke.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function li(n,e,t){t||(t=0);var s=Array(16);if(typeof e=="string")for(var r=0;16>r;++r)s[r]=e.charCodeAt(t++)|e.charCodeAt(t++)<<8|e.charCodeAt(t++)<<16|e.charCodeAt(t++)<<24;else for(r=0;16>r;++r)s[r]=e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24;e=n.g[0],t=n.g[1],r=n.g[2];var i=n.g[3],o=e+(i^t&(r^i))+s[0]+3614090360&4294967295;e=t+(o<<7&4294967295|o>>>25),o=i+(r^e&(t^r))+s[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(t^i&(e^t))+s[2]+606105819&4294967295,r=i+(o<<17&4294967295|o>>>15),o=t+(e^r&(i^e))+s[3]+3250441966&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(i^t&(r^i))+s[4]+4118548399&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(r^e&(t^r))+s[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(t^i&(e^t))+s[6]+2821735955&4294967295,r=i+(o<<17&4294967295|o>>>15),o=t+(e^r&(i^e))+s[7]+4249261313&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(i^t&(r^i))+s[8]+1770035416&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(r^e&(t^r))+s[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(t^i&(e^t))+s[10]+4294925233&4294967295,r=i+(o<<17&4294967295|o>>>15),o=t+(e^r&(i^e))+s[11]+2304563134&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(i^t&(r^i))+s[12]+1804603682&4294967295,e=t+(o<<7&4294967295|o>>>25),o=i+(r^e&(t^r))+s[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=r+(t^i&(e^t))+s[14]+2792965006&4294967295,r=i+(o<<17&4294967295|o>>>15),o=t+(e^r&(i^e))+s[15]+1236535329&4294967295,t=r+(o<<22&4294967295|o>>>10),o=e+(r^i&(t^r))+s[1]+4129170786&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^r&(e^t))+s[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(i^e))+s[11]+643717713&4294967295,r=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(r^i))+s[0]+3921069994&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(t^r))+s[5]+3593408605&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^r&(e^t))+s[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(i^e))+s[15]+3634488961&4294967295,r=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(r^i))+s[4]+3889429448&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(t^r))+s[9]+568446438&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^r&(e^t))+s[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(i^e))+s[3]+4107603335&4294967295,r=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(r^i))+s[8]+1163531501&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(r^i&(t^r))+s[13]+2850285829&4294967295,e=t+(o<<5&4294967295|o>>>27),o=i+(t^r&(e^t))+s[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=r+(e^t&(i^e))+s[7]+1735328473&4294967295,r=i+(o<<14&4294967295|o>>>18),o=t+(i^e&(r^i))+s[12]+2368359562&4294967295,t=r+(o<<20&4294967295|o>>>12),o=e+(t^r^i)+s[5]+4294588738&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^r)+s[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^t)+s[11]+1839030562&4294967295,r=i+(o<<16&4294967295|o>>>16),o=t+(r^i^e)+s[14]+4259657740&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^i)+s[1]+2763975236&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^r)+s[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^t)+s[7]+4139469664&4294967295,r=i+(o<<16&4294967295|o>>>16),o=t+(r^i^e)+s[10]+3200236656&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^i)+s[13]+681279174&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^r)+s[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^t)+s[3]+3572445317&4294967295,r=i+(o<<16&4294967295|o>>>16),o=t+(r^i^e)+s[6]+76029189&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(t^r^i)+s[9]+3654602809&4294967295,e=t+(o<<4&4294967295|o>>>28),o=i+(e^t^r)+s[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=r+(i^e^t)+s[15]+530742520&4294967295,r=i+(o<<16&4294967295|o>>>16),o=t+(r^i^e)+s[2]+3299628645&4294967295,t=r+(o<<23&4294967295|o>>>9),o=e+(r^(t|~i))+s[0]+4096336452&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~r))+s[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~t))+s[14]+2878612391&4294967295,r=i+(o<<15&4294967295|o>>>17),o=t+(i^(r|~e))+s[5]+4237533241&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~i))+s[12]+1700485571&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~r))+s[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~t))+s[10]+4293915773&4294967295,r=i+(o<<15&4294967295|o>>>17),o=t+(i^(r|~e))+s[1]+2240044497&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~i))+s[8]+1873313359&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~r))+s[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~t))+s[6]+2734768916&4294967295,r=i+(o<<15&4294967295|o>>>17),o=t+(i^(r|~e))+s[13]+1309151649&4294967295,t=r+(o<<21&4294967295|o>>>11),o=e+(r^(t|~i))+s[4]+4149444226&4294967295,e=t+(o<<6&4294967295|o>>>26),o=i+(t^(e|~r))+s[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=r+(e^(i|~t))+s[2]+718787259&4294967295,r=i+(o<<15&4294967295|o>>>17),o=t+(i^(r|~e))+s[9]+3951481745&4294967295,n.g[0]=n.g[0]+e&4294967295,n.g[1]=n.g[1]+(r+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+r&4294967295,n.g[3]=n.g[3]+i&4294967295}ke.prototype.j=function(n,e){e===void 0&&(e=n.length);for(var t=e-this.blockSize,s=this.m,r=this.h,i=0;i<e;){if(r==0)for(;i<=t;)li(this,n,i),i+=this.blockSize;if(typeof n=="string"){for(;i<e;)if(s[r++]=n.charCodeAt(i++),r==this.blockSize){li(this,s),r=0;break}}else for(;i<e;)if(s[r++]=n[i++],r==this.blockSize){li(this,s),r=0;break}}this.h=r,this.i+=e};ke.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var e=1;e<n.length-8;++e)n[e]=0;var t=8*this.i;for(e=n.length-8;e<n.length;++e)n[e]=t&255,t/=256;for(this.j(n),n=Array(16),e=t=0;4>e;++e)for(var s=0;32>s;s+=8)n[t++]=this.g[e]>>>s&255;return n};function V(n,e){this.h=e;for(var t=[],s=!0,r=n.length-1;0<=r;r--){var i=n[r]|0;s&&i==e||(t[r]=i,s=!1)}this.g=t}var sf={};function wo(n){return-128<=n&&128>n?ld(n,function(e){return new V([e|0],0>e?-1:0)}):new V([n|0],0>n?-1:0)}function Oe(n){if(isNaN(n)||!isFinite(n))return Kt;if(0>n)return de(Oe(-n));for(var e=[],t=1,s=0;n>=t;s++)e[s]=n/t|0,t*=Ai;return new V(e,0)}function qc(n,e){if(n.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(n.charAt(0)=="-")return de(qc(n.substring(1),e));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var t=Oe(Math.pow(e,8)),s=Kt,r=0;r<n.length;r+=8){var i=Math.min(8,n.length-r),o=parseInt(n.substring(r,r+i),e);8>i?(i=Oe(Math.pow(e,i)),s=s.R(i).add(Oe(o))):(s=s.R(t),s=s.add(Oe(o)))}return s}var Ai=4294967296,Kt=wo(0),_i=wo(1),_a=wo(16777216);T=V.prototype;T.ea=function(){if(_e(this))return-de(this).ea();for(var n=0,e=1,t=0;t<this.g.length;t++){var s=this.D(t);n+=(0<=s?s:Ai+s)*e,e*=Ai}return n};T.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(Ue(this))return"0";if(_e(this))return"-"+de(this).toString(n);for(var e=Oe(Math.pow(n,6)),t=this,s="";;){var r=or(t,e).g;t=ir(t,r.R(e));var i=((0<t.g.length?t.g[0]:t.h)>>>0).toString(n);if(t=r,Ue(t))return i+s;for(;6>i.length;)i="0"+i;s=i+s}};T.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function Ue(n){if(n.h!=0)return!1;for(var e=0;e<n.g.length;e++)if(n.g[e]!=0)return!1;return!0}function _e(n){return n.h==-1}T.X=function(n){return n=ir(this,n),_e(n)?-1:Ue(n)?0:1};function de(n){for(var e=n.g.length,t=[],s=0;s<e;s++)t[s]=~n.g[s];return new V(t,~n.h).add(_i)}T.abs=function(){return _e(this)?de(this):this};T.add=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0,r=0;r<=e;r++){var i=s+(this.D(r)&65535)+(n.D(r)&65535),o=(i>>>16)+(this.D(r)>>>16)+(n.D(r)>>>16);s=o>>>16,i&=65535,o&=65535,t[r]=o<<16|i}return new V(t,t[t.length-1]&-2147483648?-1:0)};function ir(n,e){return n.add(de(e))}T.R=function(n){if(Ue(this)||Ue(n))return Kt;if(_e(this))return _e(n)?de(this).R(de(n)):de(de(this).R(n));if(_e(n))return de(this.R(de(n)));if(0>this.X(_a)&&0>n.X(_a))return Oe(this.ea()*n.ea());for(var e=this.g.length+n.g.length,t=[],s=0;s<2*e;s++)t[s]=0;for(s=0;s<this.g.length;s++)for(var r=0;r<n.g.length;r++){var i=this.D(s)>>>16,o=this.D(s)&65535,a=n.D(r)>>>16,u=n.D(r)&65535;t[2*s+2*r]+=o*u,Os(t,2*s+2*r),t[2*s+2*r+1]+=i*u,Os(t,2*s+2*r+1),t[2*s+2*r+1]+=o*a,Os(t,2*s+2*r+1),t[2*s+2*r+2]+=i*a,Os(t,2*s+2*r+2)}for(s=0;s<e;s++)t[s]=t[2*s+1]<<16|t[2*s];for(s=e;s<2*e;s++)t[s]=0;return new V(t,0)};function Os(n,e){for(;(n[e]&65535)!=n[e];)n[e+1]+=n[e]>>>16,n[e]&=65535,e++}function Dn(n,e){this.g=n,this.h=e}function or(n,e){if(Ue(e))throw Error("division by zero");if(Ue(n))return new Dn(Kt,Kt);if(_e(n))return e=or(de(n),e),new Dn(de(e.g),de(e.h));if(_e(e))return e=or(n,de(e)),new Dn(de(e.g),e.h);if(30<n.g.length){if(_e(n)||_e(e))throw Error("slowDivide_ only works with positive integers.");for(var t=_i,s=e;0>=s.X(n);)t=Na(t),s=Na(s);var r=Bt(t,1),i=Bt(s,1);for(s=Bt(s,2),t=Bt(t,2);!Ue(s);){var o=i.add(s);0>=o.X(n)&&(r=r.add(t),i=o),s=Bt(s,1),t=Bt(t,1)}return e=ir(n,r.R(e)),new Dn(r,e)}for(r=Kt;0<=n.X(e);){for(t=Math.max(1,Math.floor(n.ea()/e.ea())),s=Math.ceil(Math.log(t)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),i=Oe(t),o=i.R(e);_e(o)||0<o.X(n);)t-=s,i=Oe(t),o=i.R(e);Ue(i)&&(i=_i),r=r.add(i),n=ir(n,o)}return new Dn(r,n)}T.gb=function(n){return or(this,n).h};T.and=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)&n.D(s);return new V(t,this.h&n.h)};T.or=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)|n.D(s);return new V(t,this.h|n.h)};T.xor=function(n){for(var e=Math.max(this.g.length,n.g.length),t=[],s=0;s<e;s++)t[s]=this.D(s)^n.D(s);return new V(t,this.h^n.h)};function Na(n){for(var e=n.g.length+1,t=[],s=0;s<e;s++)t[s]=n.D(s)<<1|n.D(s-1)>>>31;return new V(t,n.h)}function Bt(n,e){var t=e>>5;e%=32;for(var s=n.g.length-t,r=[],i=0;i<s;i++)r[i]=0<e?n.D(i+t)>>>e|n.D(i+t+1)<<32-e:n.D(i+t);return new V(r,n.h)}rr.prototype.createWebChannel=rr.prototype.g;Ce.prototype.send=Ce.prototype.u;Ce.prototype.open=Ce.prototype.m;Ce.prototype.close=Ce.prototype.close;_r.NO_ERROR=0;_r.TIMEOUT=8;_r.HTTP_ERROR=6;sc.COMPLETE="complete";rc.EventType=ds;ds.OPEN="a";ds.CLOSE="b";ds.ERROR="c";ds.MESSAGE="d";ue.prototype.listen=ue.prototype.O;H.prototype.listenOnce=H.prototype.P;H.prototype.getLastError=H.prototype.Sa;H.prototype.getLastErrorCode=H.prototype.Ia;H.prototype.getStatus=H.prototype.da;H.prototype.getResponseJson=H.prototype.Wa;H.prototype.getResponseText=H.prototype.ja;H.prototype.send=H.prototype.ha;H.prototype.setWithCredentials=H.prototype.Oa;ke.prototype.digest=ke.prototype.l;ke.prototype.reset=ke.prototype.reset;ke.prototype.update=ke.prototype.j;V.prototype.add=V.prototype.add;V.prototype.multiply=V.prototype.R;V.prototype.modulo=V.prototype.gb;V.prototype.compare=V.prototype.X;V.prototype.toNumber=V.prototype.ea;V.prototype.toString=V.prototype.toString;V.prototype.getBits=V.prototype.D;V.fromNumber=Oe;V.fromString=qc;var rf=function(){return new rr},of=function(){return Ar()},hi=_r,af=sc,uf=Ot,ka={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},cf=gs,Ps=rc,lf=H,hf=ke,Qt=V,df={};const Ra="@firebase/firestore";/**
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
 */class oe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}oe.UNAUTHENTICATED=new oe(null),oe.GOOGLE_CREDENTIALS=new oe("google-credentials-uid"),oe.FIRST_PARTY=new oe("first-party-uid"),oe.MOCK_USER=new oe("mock-user");/**
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
 */let gn="9.23.0";/**
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
 */const tt=new Wh("@firebase/firestore");function Ni(){return tt.logLevel}function $p(n){tt.setLogLevel(n)}function y(n,...e){if(tt.logLevel<=Xt.DEBUG){const t=e.map(vo);tt.debug(`Firestore (${gn}): ${n}`,...t)}}function W(n,...e){if(tt.logLevel<=Xt.ERROR){const t=e.map(vo);tt.error(`Firestore (${gn}): ${n}`,...t)}}function Re(n,...e){if(tt.logLevel<=Xt.WARN){const t=e.map(vo);tt.warn(`Firestore (${gn}): ${n}`,...t)}}function vo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function S(n="Unexpected state"){const e=`FIRESTORE (${gn}) INTERNAL ASSERTION FAILED: `+n;throw W(e),new Error(e)}function b(n,e){n||S()}function zp(n,e){n||S()}function E(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Hh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class se{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Bc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ff{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(oe.UNAUTHENTICATED))}shutdown(){}}class mf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gf{constructor(e){this.t=e,this.currentUser=oe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new se;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new se,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new se)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new Bc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(e===null||typeof e=="string"),new oe(e)}}class pf{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=oe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class yf{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new pf(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(oe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Uc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wf{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(b(typeof t.token=="string"),this.T=t.token,new Uc(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class Gp{getToken(){return Promise.resolve(new Uc(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function vf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class $c{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=vf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function C(n,e){return n<e?-1:n>e?1:0}function Jt(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function zc(n){return n+"\0"}/**
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
 */class K{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return K.fromMillis(Date.now())}static fromDate(e){return K.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new K(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?C(this.nanoseconds,e.nanoseconds):C(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class D{constructor(e){this.timestamp=e}static fromTimestamp(e){return new D(e)}static min(){return new D(new K(0,0))}static max(){return new D(new K(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Jn{constructor(e,t,s){t===void 0?t=0:t>e.length&&S(),s===void 0?s=e.length-t:s>e.length-t&&S(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class F extends Jn{construct(e,t,s){return new F(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new F(t)}static emptyPath(){return new F([])}}const If=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class X extends Jn{construct(e,t,s){return new X(e,t,s)}static isValidIdentifier(e){return If.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),X.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new X(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new X(t)}static emptyPath(){return new X([])}}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(F.fromString(e))}static fromName(e){return new v(F.fromString(e).popFirst(5))}static empty(){return new v(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&F.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new F(e.slice()))}}/**
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
 */class ar{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function ki(n){return n.fields.find(e=>e.kind===2)}function pt(n){return n.fields.filter(e=>e.kind!==2)}function Ef(n,e){let t=C(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(n.fields.length,e.fields.length);++s)if(t=Tf(n.fields[s],e.fields[s]),t!==0)return t;return C(n.fields.length,e.fields.length)}ar.UNKNOWN_ID=-1;class Gs{constructor(e,t){this.fieldPath=e,this.kind=t}}function Tf(n,e){const t=X.comparator(n.fieldPath,e.fieldPath);return t!==0?t:C(n.kind,e.kind)}class Zn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Zn(0,Ae.min())}}function Gc(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=D.fromTimestamp(s===1e9?new K(t+1,0):new K(t,s));return new Ae(r,v.empty(),e)}function jc(n){return new Ae(n.readTime,n.key,-1)}class Ae{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Ae(D.min(),v.empty(),-1)}static max(){return new Ae(D.max(),v.empty(),-1)}}function Io(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:C(n.largestBatchId,e.largestBatchId))}/**
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
 */const Kc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Qc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ct(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==Kc)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&S(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},u=>s(u))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{o[c]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,t){return new f((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
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
 */class Lr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.v=new se,this.transaction.oncomplete=()=>{this.v.resolve()},this.transaction.onabort=()=>{t.error?this.v.reject(new qn(e,t.error)):this.v.resolve()},this.transaction.onerror=s=>{const r=Eo(s.target.error);this.v.reject(new qn(e,r))}}static open(e,t,s,r){try{return new Lr(t,e.transaction(r,s))}catch(i){throw new qn(t,i)}}get R(){return this.v.promise}abort(e){e&&this.v.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new xf(t)}}class Ne{constructor(e,t,s){this.name=e,this.version=t,this.V=s,Ne.S(yi())===12.2&&W("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),yt(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!ed())return!1;if(Ne.C())return!0;const e=yi(),t=Ne.S(e),s=0<t&&t<10,r=Ne.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static C(){var e;return typeof process<"u"&&((e=df)===null||e===void 0?void 0:e.k)==="YES"}static M(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static N(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async $(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new qn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new qn(e,o))},r.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.O(o,r.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Lr.open(this.db,e,i?"readonly":"readwrite",s),u=r(a).next(c=>(a.P(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.R,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Sf{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return yt(this.L.delete())}}class qn extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function lt(n){return n.name==="IndexedDbTransactionError"}class xf{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),yt(s)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),yt(this.store.add(e))}get(e){return yt(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),yt(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),yt(this.store.count())}j(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.W(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.Y=!1;const r=this.cursor(s);return this.W(r,(i,o,a)=>a.delete())}X(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.W(r,t)}Z(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=Eo(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}W(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const u=new Sf(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));s.push(l)}u.isDone?r():u.K===null?a.continue():a.continue(u.K)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.Y?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function yt(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=Eo(s.target.error);t(r)}})}let Ma=!1;function Eo(n){const e=Ne.S(yi());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ma||(Ma=!0,setTimeout(()=>{throw s},0)),s}}return n}class bf{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){lt(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await ct(t)}await this.et(6e4)})}}class Df{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const s=new Set;let r=t,i=!0;return f.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}it(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(r,i)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=jc(i);Io(o,s)>0&&(s=o)}),new Ae(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class xe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}xe.ct=-1;function ws(n){return n==null}function es(n){return n===0&&1/n==-1/0}function Hc(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ie(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Fa(e)),e=Cf(n.get(t),e);return Fa(e)}function Cf(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Fa(n){return n+""}function Pe(n){const e=n.length;if(b(e>=2),e===2)return b(n.charAt(0)===""&&n.charAt(1)===""),F.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&S(),n.charAt(o+1)){case"":const a=n.substring(i,o);let u;r.length===0?u=a:(r+=a,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:S()}i=o+2}return new F(s)}/**
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
 */const Oa=["userId","batchId"];/**
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
 */function js(n,e){return[n,Ie(e)]}function Wc(n,e,t){return[n,Ie(e),t]}const Af={},_f=["prefixPath","collectionGroup","readTime","documentId"],Nf=["prefixPath","collectionGroup","documentId"],kf=["collectionGroup","readTime","prefixPath","documentId"],Rf=["canonicalId","targetId"],Mf=["targetId","path"],Ff=["path","targetId"],Of=["collectionId","parent"],Pf=["indexId","uid"],Lf=["uid","sequenceNumber"],Vf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qf=["indexId","uid","orderedDocumentKey"],Bf=["userId","collectionPath","documentId"],Uf=["userId","collectionPath","largestBatchId"],$f=["userId","collectionGroup","largestBatchId"],Xc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zf=[...Xc,"documentOverlays"],Yc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Jc=Yc,Gf=[...Jc,"indexConfiguration","indexState","indexEntries"];/**
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
 */class Ri extends Qc{constructor(e,t){super(),this.ht=e,this.currentSequenceNumber=t}}function le(n,e){const t=E(n);return Ne.M(t.ht,e)}/**
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
 */function Pa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ht(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class q{constructor(e,t){this.comparator=e,this.root=t||he.EMPTY}insert(e,t){return new q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,he.BLACK,null,null))}remove(e){return new q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,he.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ls(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ls(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ls(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ls(this.root,e,this.comparator,!0)}}class Ls{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class he{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??he.RED,this.left=r??he.EMPTY,this.right=i??he.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new he(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return he.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return he.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,he.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,he.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw S();const e=this.left.check();if(e!==this.right.check())throw S();return e+(this.isRed()?0:1)}}he.EMPTY=null,he.RED=!0,he.BLACK=!1;he.EMPTY=new class{constructor(){this.size=0}get key(){throw S()}get value(){throw S()}get color(){throw S()}get left(){throw S()}get right(){throw S()}copy(n,e,t,s,r){return this}insert(n,e,t){return new he(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ${constructor(e){this.comparator=e,this.data=new q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new La(this.data.getIterator())}getIteratorFrom(e){return new La(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class La{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ut(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class be{constructor(e){this.fields=e,e.sort(X.comparator)}static empty(){return new be([])}unionWith(e){let t=new $(X.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new be(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
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
 */class el extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function jp(){return typeof atob<"u"}/**
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
 */class re{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new el("Invalid base64 string: "+r):r}}(e);return new re(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new re(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}re.EMPTY_BYTE_STRING=new re("");const jf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nt(n){if(b(!!n),typeof n=="string"){let e=0;const t=jf.exec(n);if(b(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Q(n.seconds),nanos:Q(n.nanos)}}function Q(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ge(n){return typeof n=="string"?re.fromBase64String(n):re.fromUint8Array(n)}/**
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
 */function Vr(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function qr(n){const e=n.mapValue.fields.__previous_value__;return Vr(e)?qr(e):e}function ts(n){const e=nt(n.mapValue.fields.__local_write_time__.timestampValue);return new K(e.seconds,e.nanos)}/**
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
 */class Kf{constructor(e,t,s,r,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class Dt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Dt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Dt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const et={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ks={nullValue:"NULL_VALUE"};function st(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Vr(n)?4:tl(n)?9007199254740991:10:S()}function Be(n,e){if(n===e)return!0;const t=st(n);if(t!==st(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ts(n).isEqual(ts(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=nt(s.timestampValue),o=nt(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Ge(s.bytesValue).isEqual(Ge(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return Q(s.geoPointValue.latitude)===Q(r.geoPointValue.latitude)&&Q(s.geoPointValue.longitude)===Q(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return Q(s.integerValue)===Q(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=Q(s.doubleValue),o=Q(r.doubleValue);return i===o?es(i)===es(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Jt(n.arrayValue.values||[],e.arrayValue.values||[],Be);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Pa(i)!==Pa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Be(i[a],o[a])))return!1;return!0}(n,e);default:return S()}}function ns(n,e){return(n.values||[]).find(t=>Be(t,e))!==void 0}function rt(n,e){if(n===e)return 0;const t=st(n),s=st(e);if(t!==s)return C(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=Q(r.integerValue||r.doubleValue),a=Q(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Va(n.timestampValue,e.timestampValue);case 4:return Va(ts(n),ts(e));case 5:return C(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Ge(r),a=Ge(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=C(o[u],a[u]);if(c!==0)return c}return C(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=C(Q(r.latitude),Q(i.latitude));return o!==0?o:C(Q(r.longitude),Q(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=rt(o[u],a[u]);if(c)return c}return C(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===et.mapValue&&i===et.mapValue)return 0;if(r===et.mapValue)return 1;if(i===et.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=C(a[l],c[l]);if(h!==0)return h;const d=rt(o[a[l]],u[c[l]]);if(d!==0)return d}return C(a.length,c.length)}(n.mapValue,e.mapValue);default:throw S()}}function Va(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return C(n,e);const t=nt(n),s=nt(e),r=C(t.seconds,s.seconds);return r!==0?r:C(t.nanos,s.nanos)}function Zt(n){return Mi(n)}function Mi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=nt(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Ge(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Mi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Mi(s.fields[a])}`;return i+"}"}(n.mapValue):S();var e,t}function Qs(n){switch(st(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qr(n);return e?16+Qs(e):16;case 5:return 2*n.stringValue.length;case 6:return Ge(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(n.arrayValue.values||[]).reduce((t,s)=>t+Qs(s),0);case 10:return function(t){let s=0;return ht(t.fields,(r,i)=>{s+=r.length+Qs(i)}),s}(n.mapValue);default:throw S()}}function Ct(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Fi(n){return!!n&&"integerValue"in n}function ss(n){return!!n&&"arrayValue"in n}function qa(n){return!!n&&"nullValue"in n}function Ba(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hs(n){return!!n&&"mapValue"in n}function Bn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ht(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Bn(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Bn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function tl(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Qf(n){return"nullValue"in n?Ks:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Ct(Dt.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:S()}function Hf(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Ct(Dt.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?et:S()}function Ua(n,e){const t=rt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function $a(n,e){const t=rt(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class fe{constructor(e){this.value=e}static empty(){return new fe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Hs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Bn(t)}setAll(e){let t=X.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=Bn(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Hs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Be(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Hs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ht(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new fe(Bn(this.value))}}function nl(n){const e=[];return ht(n.fields,(t,s)=>{const r=new X([t]);if(Hs(s)){const i=nl(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new be(e)}/**
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
 */class U{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new U(e,0,D.min(),D.min(),D.min(),fe.empty(),0)}static newFoundDocument(e,t,s,r){return new U(e,1,t,D.min(),s,r,0)}static newNoDocument(e,t){return new U(e,2,t,D.min(),D.min(),fe.empty(),0)}static newUnknownDocument(e,t){return new U(e,3,t,D.min(),D.min(),fe.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(D.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=D.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof U&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new U(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class it{constructor(e,t){this.position=e,this.inclusive=t}}function za(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=rt(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ga(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Be(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ht{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class sl{}class k extends sl{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Xf(e,t,s):t==="array-contains"?new Zf(e,s):t==="in"?new cl(e,s):t==="not-in"?new em(e,s):t==="array-contains-any"?new tm(e,s):new k(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Yf(e,s):new Jf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(rt(t,this.value)):t!==null&&st(this.value)===st(t)&&this.matchesComparison(rt(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return S()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class L extends sl{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new L(e,t)}matches(e){return en(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(t=>t.isInequality());return e!==null?e.field:null}ft(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function en(n){return n.op==="and"}function Oi(n){return n.op==="or"}function To(n){return rl(n)&&en(n)}function rl(n){for(const e of n.filters)if(e instanceof L)return!1;return!0}function Pi(n){if(n instanceof k)return n.field.canonicalString()+n.op.toString()+Zt(n.value);if(To(n))return n.filters.map(e=>Pi(e)).join(",");{const e=n.filters.map(t=>Pi(t)).join(",");return`${n.op}(${e})`}}function il(n,e){return n instanceof k?function(t,s){return s instanceof k&&t.op===s.op&&t.field.isEqual(s.field)&&Be(t.value,s.value)}(n,e):n instanceof L?function(t,s){return s instanceof L&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((r,i,o)=>r&&il(i,s.filters[o]),!0):!1}(n,e):void S()}function ol(n,e){const t=n.filters.concat(e);return L.create(t,n.op)}function al(n){return n instanceof k?function(e){return`${e.field.canonicalString()} ${e.op} ${Zt(e.value)}`}(n):n instanceof L?function(e){return e.op.toString()+" {"+e.getFilters().map(al).join(" ,")+"}"}(n):"Filter"}class Xf extends k{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class Yf extends k{constructor(e,t){super(e,"in",t),this.keys=ul("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jf extends k{constructor(e,t){super(e,"not-in",t),this.keys=ul("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ul(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class Zf extends k{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ss(t)&&ns(t.arrayValue,this.value)}}class cl extends k{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ns(this.value.arrayValue,t)}}class em extends k{constructor(e,t){super(e,"not-in",t)}matches(e){if(ns(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ns(this.value.arrayValue,t)}}class tm extends k{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ss(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>ns(this.value.arrayValue,s))}}/**
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
 */class nm{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.dt=null}}function Li(n,e=null,t=[],s=[],r=null,i=null,o=null){return new nm(n,e,t,s,r,i,o)}function At(n){const e=E(n);if(e.dt===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Pi(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),ws(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Zt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Zt(s)).join(",")),e.dt=t}return e.dt}function vs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!il(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Ga(n.startAt,e.startAt)&&Ga(n.endAt,e.endAt)}function ur(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function cr(n,e){return n.filters.filter(t=>t instanceof k&&t.field.isEqual(e))}function ja(n,e,t){let s=Ks,r=!0;for(const i of cr(n,e)){let o=Ks,a=!0;switch(i.op){case"<":case"<=":o=Qf(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Ks}Ua({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ua({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Ka(n,e,t){let s=et,r=!0;for(const i of cr(n,e)){let o=et,a=!0;switch(i.op){case">=":case">":o=Hf(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=et}$a({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];$a({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}/**
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
 */class je{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.wt=null,this._t=null,this.startAt,this.endAt}}function ll(n,e,t,s,r,i,o,a){return new je(n,e,t,s,r,i,o,a)}function pn(n){return new je(n)}function Qa(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function So(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Br(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function xo(n){return n.collectionGroup!==null}function bt(n){const e=E(n);if(e.wt===null){e.wt=[];const t=Br(e),s=So(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new Ht(t)),e.wt.push(new Ht(X.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ht(X.keyField(),i))}}}return e.wt}function Te(n){const e=E(n);if(!e._t)if(e.limitType==="F")e._t=Li(e.path,e.collectionGroup,bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of bt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Ht(i.field,o))}const s=e.endAt?new it(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new it(e.startAt.position,e.startAt.inclusive):null;e._t=Li(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e._t}function Vi(n,e){e.getFirstInequalityField(),Br(n);const t=n.filters.concat([e]);return new je(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function lr(n,e,t){return new je(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Is(n,e){return vs(Te(n),Te(e))&&n.limitType===e.limitType}function hl(n){return`${At(Te(n))}|lt:${n.limitType}`}function qi(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>al(s)).join(", ")}]`),ws(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Zt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Zt(s)).join(",")),`Target(${t})`}(Te(n))}; limitType=${n.limitType})`}function Es(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of bt(t))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=za(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,bt(t),s)||t.endAt&&!function(r,i,o){const a=za(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,bt(t),s))}(n,e)}function dl(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function fl(n){return(e,t)=>{let s=!1;for(const r of bt(n)){const i=sm(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function sm(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?rt(a,u):S()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return S()}}/**
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
 */class Ke{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ht(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Zc(this.inner)}size(){return this.innerSize}}/**
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
 */const rm=new q(v.comparator);function De(){return rm}const ml=new q(v.comparator);function On(...n){let e=ml;for(const t of n)e=e.insert(t.key,t);return e}function gl(n){let e=ml;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Le(){return Un()}function pl(){return Un()}function Un(){return new Ke(n=>n.toString(),(n,e)=>n.isEqual(e))}const im=new q(v.comparator),om=new $(v.comparator);function N(...n){let e=om;for(const t of n)e=e.add(t);return e}const am=new $(C);function bo(){return am}/**
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
 */function yl(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function wl(n){return{integerValue:""+n}}function vl(n,e){return Hc(e)?wl(e):yl(n,e)}/**
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
 */class Ur{constructor(){this._=void 0}}function um(n,e,t){return n instanceof tn?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&Vr(r)&&(r=qr(r)),r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof _t?El(n,e):n instanceof Nt?Tl(n,e):function(s,r){const i=Il(s,r),o=Ha(i)+Ha(s.gt);return Fi(i)&&Fi(s.gt)?wl(o):yl(s.serializer,o)}(n,e)}function cm(n,e,t){return n instanceof _t?El(n,e):n instanceof Nt?Tl(n,e):t}function Il(n,e){return n instanceof nn?Fi(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class tn extends Ur{}class _t extends Ur{constructor(e){super(),this.elements=e}}function El(n,e){const t=Sl(e);for(const s of n.elements)t.some(r=>Be(r,s))||t.push(s);return{arrayValue:{values:t}}}class Nt extends Ur{constructor(e){super(),this.elements=e}}function Tl(n,e){let t=Sl(e);for(const s of n.elements)t=t.filter(r=>!Be(r,s));return{arrayValue:{values:t}}}class nn extends Ur{constructor(e,t){super(),this.serializer=e,this.gt=t}}function Ha(n){return Q(n.integerValue||n.doubleValue)}function Sl(n){return ss(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ts{constructor(e,t){this.field=e,this.transform=t}}function lm(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof _t&&s instanceof _t||t instanceof Nt&&s instanceof Nt?Jt(t.elements,s.elements,Be):t instanceof nn&&s instanceof nn?Be(t.gt,s.gt):t instanceof tn&&s instanceof tn}(n.transform,e.transform)}class hm{constructor(e,t){this.version=e,this.transformResults=t}}class G{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new G}static exists(e){return new G(void 0,e)}static updateTime(e){return new G(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ws(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $r{}function xl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wn(n.key,G.none()):new yn(n.key,n.data,G.none());{const t=n.data,s=fe.empty();let r=new $(X.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Qe(n.key,s,new be(r.toArray()),G.none())}}function dm(n,e,t){n instanceof yn?function(s,r,i){const o=s.value.clone(),a=Xa(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Qe?function(s,r,i){if(!Ws(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Xa(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(bl(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function $n(n,e,t,s){return n instanceof yn?function(r,i,o,a){if(!Ws(r.precondition,i))return o;const u=r.value.clone(),c=Ya(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Qe?function(r,i,o,a){if(!Ws(r.precondition,i))return o;const u=Ya(r.fieldTransforms,a,i),c=i.data;return c.setAll(bl(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(r,i,o){return Ws(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function fm(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Il(s.transform,r||null);i!=null&&(t===null&&(t=fe.empty()),t.set(s.field,i))}return t||null}function Wa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Jt(t,s,(r,i)=>lm(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class yn extends $r{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Qe extends $r{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Xa(n,e,t){const s=new Map;b(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,cm(o,a,t[r]))}return s}function Ya(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,um(i,o,e))}return s}class wn extends $r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Do extends $r{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Co{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&dm(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=$n(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=$n(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=pl();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=xl(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(D.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&Jt(this.mutations,e.mutations,(t,s)=>Wa(t,s))&&Jt(this.baseMutations,e.baseMutations,(t,s)=>Wa(t,s))}}class Ao{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){b(e.mutations.length===s.length);let r=im;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Ao(e,t,s,r)}}/**
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
 */class _o{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class mm{constructor(e,t,s){this.alias=e,this.yt=t,this.fieldPath=s}}/**
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
 */class gm{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ee,M;function Dl(n){switch(n){default:return S();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function Cl(n){if(n===void 0)return W("GRPC error has no .code"),m.UNKNOWN;switch(n){case ee.OK:return m.OK;case ee.CANCELLED:return m.CANCELLED;case ee.UNKNOWN:return m.UNKNOWN;case ee.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case ee.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case ee.INTERNAL:return m.INTERNAL;case ee.UNAVAILABLE:return m.UNAVAILABLE;case ee.UNAUTHENTICATED:return m.UNAUTHENTICATED;case ee.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case ee.NOT_FOUND:return m.NOT_FOUND;case ee.ALREADY_EXISTS:return m.ALREADY_EXISTS;case ee.PERMISSION_DENIED:return m.PERMISSION_DENIED;case ee.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case ee.ABORTED:return m.ABORTED;case ee.OUT_OF_RANGE:return m.OUT_OF_RANGE;case ee.UNIMPLEMENTED:return m.UNIMPLEMENTED;case ee.DATA_LOSS:return m.DATA_LOSS;default:return S()}}(M=ee||(ee={}))[M.OK=0]="OK",M[M.CANCELLED=1]="CANCELLED",M[M.UNKNOWN=2]="UNKNOWN",M[M.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",M[M.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",M[M.NOT_FOUND=5]="NOT_FOUND",M[M.ALREADY_EXISTS=6]="ALREADY_EXISTS",M[M.PERMISSION_DENIED=7]="PERMISSION_DENIED",M[M.UNAUTHENTICATED=16]="UNAUTHENTICATED",M[M.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",M[M.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",M[M.ABORTED=10]="ABORTED",M[M.OUT_OF_RANGE=11]="OUT_OF_RANGE",M[M.UNIMPLEMENTED=12]="UNIMPLEMENTED",M[M.INTERNAL=13]="INTERNAL",M[M.UNAVAILABLE=14]="UNAVAILABLE",M[M.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class No{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Vs}static getOrCreateInstance(){return Vs===null&&(Vs=new No),Vs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Vs=null;/**
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
 */function Al(){return new TextEncoder}/**
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
 */const pm=new Qt([4294967295,4294967295],0);function Ja(n){const e=Al().encode(n),t=new hf;return t.update(e),new Uint8Array(t.digest())}function Za(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Qt([t,s],0),new Qt([r,i],0)]}class ko{constructor(e,t,s){if(this.bitmap=e,this.padding=t,this.hashCount=s,t<0||t>=8)throw new Pn(`Invalid padding: ${t}`);if(s<0)throw new Pn(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Pn(`Invalid hash count: ${s}`);if(e.length===0&&t!==0)throw new Pn(`Invalid padding when bitmap length is 0: ${t}`);this.It=8*e.length-t,this.Tt=Qt.fromNumber(this.It)}Et(e,t,s){let r=e.add(t.multiply(Qt.fromNumber(s)));return r.compare(pm)===1&&(r=new Qt([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Tt).toNumber()}At(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}vt(e){if(this.It===0)return!1;const t=Ja(e),[s,r]=Za(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);if(!this.At(o))return!1}return!0}static create(e,t,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new ko(i,r,t);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.It===0)return;const t=Ja(e),[s,r]=Za(t);for(let i=0;i<this.hashCount;i++){const o=this.Et(s,r,i);this.Rt(o)}}Rt(e){const t=Math.floor(e/8),s=e%8;this.bitmap[t]|=1<<s}}class Pn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ss{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,xs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Ss(D.min(),r,new q(C),De(),N())}}class xs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new xs(s,t,N(),N(),N())}}/**
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
 */class Xs{constructor(e,t,s,r){this.Pt=e,this.removedTargetIds=t,this.key=s,this.bt=r}}class _l{constructor(e,t){this.targetId=e,this.Vt=t}}class Nl{constructor(e,t,s=re.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class eu{constructor(){this.St=0,this.Dt=nu(),this.Ct=re.EMPTY_BYTE_STRING,this.xt=!1,this.Nt=!0}get current(){return this.xt}get resumeToken(){return this.Ct}get kt(){return this.St!==0}get Mt(){return this.Nt}$t(e){e.approximateByteSize()>0&&(this.Nt=!0,this.Ct=e)}Ot(){let e=N(),t=N(),s=N();return this.Dt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:S()}}),new xs(this.Ct,this.xt,e,t,s)}Ft(){this.Nt=!1,this.Dt=nu()}Bt(e,t){this.Nt=!0,this.Dt=this.Dt.insert(e,t)}Lt(e){this.Nt=!0,this.Dt=this.Dt.remove(e)}qt(){this.St+=1}Ut(){this.St-=1}Kt(){this.Nt=!0,this.xt=!0}}class ym{constructor(e){this.Gt=e,this.Qt=new Map,this.jt=De(),this.zt=tu(),this.Wt=new q(C)}Ht(e){for(const t of e.Pt)e.bt&&e.bt.isFoundDocument()?this.Jt(t,e.bt):this.Yt(t,e.key,e.bt);for(const t of e.removedTargetIds)this.Yt(t,e.key,e.bt)}Xt(e){this.forEachTarget(e,t=>{const s=this.Zt(t);switch(e.state){case 0:this.te(t)&&s.$t(e.resumeToken);break;case 1:s.Ut(),s.kt||s.Ft(),s.$t(e.resumeToken);break;case 2:s.Ut(),s.kt||this.removeTarget(t);break;case 3:this.te(t)&&(s.Kt(),s.$t(e.resumeToken));break;case 4:this.te(t)&&(this.ee(t),s.$t(e.resumeToken));break;default:S()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Qt.forEach((s,r)=>{this.te(r)&&t(r)})}ne(e){var t;const s=e.targetId,r=e.Vt.count,i=this.se(s);if(i){const o=i.target;if(ur(o))if(r===0){const a=new v(o.path);this.Yt(s,a,U.newNoDocument(a,D.min()))}else b(r===1);else{const a=this.ie(s);if(a!==r){const u=this.re(e,a);if(u!==0){this.ee(s);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Wt=this.Wt.insert(s,c)}(t=No.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch(function(c,l,h){var d,g,w,I,x,_;const P={localCacheCount:l,existenceFilterCount:h.count},O=h.unchangedNames;return O&&(P.bloomFilter={applied:c===0,hashCount:(d=O==null?void 0:O.hashCount)!==null&&d!==void 0?d:0,bitmapLength:(I=(w=(g=O==null?void 0:O.bits)===null||g===void 0?void 0:g.bitmap)===null||w===void 0?void 0:w.length)!==null&&I!==void 0?I:0,padding:(_=(x=O==null?void 0:O.bits)===null||x===void 0?void 0:x.padding)!==null&&_!==void 0?_:0}),P}(u,a,e.Vt))}}}}re(e,t){const{unchangedNames:s,count:r}=e.Vt;if(!s||!s.bits)return 1;const{bits:{bitmap:i="",padding:o=0},hashCount:a=0}=s;let u,c;try{u=Ge(i).toUint8Array()}catch(l){if(l instanceof el)return Re("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),1;throw l}try{c=new ko(u,o,a)}catch(l){return Re(l instanceof Pn?"BloomFilter error: ":"Applying bloom filter failed: ",l),1}return c.It===0?1:r!==t-this.oe(e.targetId,c)?2:0}oe(e,t){const s=this.Gt.getRemoteKeysForTarget(e);let r=0;return s.forEach(i=>{const o=this.Gt.ue(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.vt(a)||(this.Yt(e,i,null),r++)}),r}ce(e){const t=new Map;this.Qt.forEach((i,o)=>{const a=this.se(o);if(a){if(i.current&&ur(a.target)){const u=new v(a.target.path);this.jt.get(u)!==null||this.ae(o,u)||this.Yt(o,u,U.newNoDocument(u,e))}i.Mt&&(t.set(o,i.Ot()),i.Ft())}});let s=N();this.zt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.se(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.jt.forEach((i,o)=>o.setReadTime(e));const r=new Ss(e,t,this.Wt,this.jt,s);return this.jt=De(),this.zt=tu(),this.Wt=new q(C),r}Jt(e,t){if(!this.te(e))return;const s=this.ae(e,t.key)?2:0;this.Zt(e).Bt(t.key,s),this.jt=this.jt.insert(t.key,t),this.zt=this.zt.insert(t.key,this.he(t.key).add(e))}Yt(e,t,s){if(!this.te(e))return;const r=this.Zt(e);this.ae(e,t)?r.Bt(t,1):r.Lt(t),this.zt=this.zt.insert(t,this.he(t).delete(e)),s&&(this.jt=this.jt.insert(t,s))}removeTarget(e){this.Qt.delete(e)}ie(e){const t=this.Zt(e).Ot();return this.Gt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}qt(e){this.Zt(e).qt()}Zt(e){let t=this.Qt.get(e);return t||(t=new eu,this.Qt.set(e,t)),t}he(e){let t=this.zt.get(e);return t||(t=new $(C),this.zt=this.zt.insert(e,t)),t}te(e){const t=this.se(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}se(e){const t=this.Qt.get(e);return t&&t.kt?null:this.Gt.le(e)}ee(e){this.Qt.set(e,new eu),this.Gt.getRemoteKeysForTarget(e).forEach(t=>{this.Yt(e,t,null)})}ae(e,t){return this.Gt.getRemoteKeysForTarget(e).has(t)}}function tu(){return new q(v.comparator)}function nu(){return new q(v.comparator)}const wm={asc:"ASCENDING",desc:"DESCENDING"},vm={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Im={and:"AND",or:"OR"};class Em{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Bi(n,e){return n.useProto3Json||ws(e)?e:{value:e}}function sn(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Tm(n,e){return sn(n,e.toTimestamp())}function Y(n){return b(!!n),D.fromTimestamp(function(e){const t=nt(e);return new K(t.seconds,t.nanos)}(n))}function Ro(n,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function Rl(n){const e=F.fromString(n);return b(Bl(e)),e}function rs(n,e){return Ro(n.databaseId,e.path)}function Ve(n,e){const t=Rl(e);if(t.get(1)!==n.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(Fl(t))}function Ui(n,e){return Ro(n.databaseId,e)}function Ml(n){const e=Rl(n);return e.length===4?F.emptyPath():Fl(e)}function is(n){return new F(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Fl(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function su(n,e,t){return{name:rs(n,e),fields:t.value.mapValue.fields}}function Ol(n,e,t){const s=Ve(n,e.name),r=Y(e.updateTime),i=e.createTime?Y(e.createTime):D.min(),o=new fe({mapValue:{fields:e.fields}}),a=U.newFoundDocument(s,r,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Sm(n,e){return"found"in e?function(t,s){b(!!s.found),s.found.name,s.found.updateTime;const r=Ve(t,s.found.name),i=Y(s.found.updateTime),o=s.found.createTime?Y(s.found.createTime):D.min(),a=new fe({mapValue:{fields:s.found.fields}});return U.newFoundDocument(r,i,o,a)}(n,e):"missing"in e?function(t,s){b(!!s.missing),b(!!s.readTime);const r=Ve(t,s.missing),i=Y(s.readTime);return U.newNoDocument(r,i)}(n,e):S()}function xm(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:S()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(b(c===void 0||typeof c=="string"),re.fromBase64String(c||"")):(b(c===void 0||c instanceof Uint8Array),re.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?m.UNKNOWN:Cl(u.code);return new p(c,u.message||"")}(o);t=new Nl(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=Ve(n,s.document.name),i=Y(s.document.updateTime),o=s.document.createTime?Y(s.document.createTime):D.min(),a=new fe({mapValue:{fields:s.document.fields}}),u=U.newFoundDocument(r,i,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Xs(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=Ve(n,s.document),i=s.readTime?Y(s.readTime):D.min(),o=U.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Xs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=Ve(n,s.document),i=s.removedTargetIds||[];t=new Xs([],i,r,null)}else{if(!("filter"in e))return S();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new gm(r,i),a=s.targetId;t=new _l(a,o)}}return t}function os(n,e){let t;if(e instanceof yn)t={update:su(n,e.key,e.value)};else if(e instanceof wn)t={delete:rs(n,e.key)};else if(e instanceof Qe)t={update:su(n,e.key,e.data),updateMask:Nm(e.fieldMask)};else{if(!(e instanceof Do))return S();t={verify:rs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof tn)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof _t)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Nt)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof nn)return{fieldPath:i.field.canonicalString(),increment:o.gt};throw S()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Tm(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:S()}(n,e.precondition)),t}function $i(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?G.updateTime(Y(r.updateTime)):r.exists!==void 0?G.exists(r.exists):G.none()}(e.currentDocument):G.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)b(o.setToServerValue==="REQUEST_TIME"),a=new tn;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new _t(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new Nt(c)}else"increment"in o?a=new nn(i,o.increment):S();const u=X.fromServerFormat(o.fieldPath);return new Ts(u,a)}(n,r)):[];if(e.update){e.update.name;const r=Ve(n,e.update.name),i=new fe({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new be(u.map(c=>X.fromServerFormat(c)))}(e.updateMask);return new Qe(r,i,o,t,s)}return new yn(r,i,t,s)}if(e.delete){const r=Ve(n,e.delete);return new wn(r,t)}if(e.verify){const r=Ve(n,e.verify);return new Do(r,t)}return S()}function bm(n,e){return n&&n.length>0?(b(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?Y(s.updateTime):Y(r);return i.isEqual(D.min())&&(i=Y(r)),new hm(i,s.transformResults||[])}(t,e))):[]}function Pl(n,e){return{documents:[Ui(n,e.path)]}}function Mo(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Ui(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ui(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return ql(L.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Ye(l.field),direction:Cm(l.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=Bi(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function Ll(n){let e=Ml(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){b(s===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=Vl(l);return h instanceof L&&To(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Ht(zt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,ws(h)?null:h}(t.limit));let u=null;t.startAt&&(u=function(l){const h=!!l.before,d=l.values||[];return new it(d,h)}(t.startAt));let c=null;return t.endAt&&(c=function(l){const h=!l.before,d=l.values||[];return new it(d,h)}(t.endAt)),ll(e,r,o,i,a,"F",u,c)}function Dm(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return S()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Vl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=zt(e.unaryFilter.field);return k.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=zt(e.unaryFilter.field);return k.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=zt(e.unaryFilter.field);return k.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=zt(e.unaryFilter.field);return k.create(i,"!=",{nullValue:"NULL_VALUE"});default:return S()}}(n):n.fieldFilter!==void 0?function(e){return k.create(zt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return S()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return L.create(e.compositeFilter.filters.map(t=>Vl(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return S()}}(e.compositeFilter.op))}(n):S()}function Cm(n){return wm[n]}function Am(n){return vm[n]}function _m(n){return Im[n]}function Ye(n){return{fieldPath:n.canonicalString()}}function zt(n){return X.fromServerFormat(n.fieldPath)}function ql(n){return n instanceof k?function(e){if(e.op==="=="){if(Ba(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NAN"}};if(qa(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ba(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NAN"}};if(qa(e.value))return{unaryFilter:{field:Ye(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ye(e.field),op:Am(e.op),value:e.value}}}(n):n instanceof L?function(e){const t=e.getFilters().map(s=>ql(s));return t.length===1?t[0]:{compositeFilter:{op:_m(e.op),filters:t}}}(n):S()}function Nm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Bl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class $e{constructor(e,t,s,r,i=D.min(),o=D.min(),a=re.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new $e(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $e(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Ul{constructor(e){this.fe=e}}function km(n,e){let t;if(e.document)t=Ol(n.fe,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=Rt(e.noDocument.readTime);t=U.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return S();{const s=v.fromSegments(e.unknownDocument.path),r=Rt(e.unknownDocument.version);t=U.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new K(s[0],s[1]);return D.fromTimestamp(r)}(e.readTime)),t}function ru(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:hr(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:rs(r,i.key),fields:i.data.value.mapValue.fields,updateTime:sn(r,i.version.toTimestamp()),createTime:sn(r,i.createTime.toTimestamp())}}(n.fe,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:kt(e.version)};else{if(!e.isUnknownDocument())return S();s.unknownDocument={path:t.path.toArray(),version:kt(e.version)}}return s}function hr(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function kt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Rt(n){const e=new K(n.seconds,n.nanoseconds);return D.fromTimestamp(e)}function wt(n,e){const t=(e.baseMutations||[]).map(i=>$i(n.fe,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>$i(n.fe,i)),r=K.fromMillis(e.localWriteTimeMs);return new Co(e.batchId,r,t,s)}function Ln(n){const e=Rt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Rt(n.lastLimboFreeSnapshotVersion):D.min();let s;var r;return n.query.documents!==void 0?(b((r=n.query).documents.length===1),s=Te(pn(Ml(r.documents[0])))):s=function(i){return Te(Ll(i))}(n.query),new $e(s,n.targetId,"TargetPurposeListen",n.lastListenSequenceNumber,e,t,re.fromBase64String(n.resumeToken))}function $l(n,e){const t=kt(e.snapshotVersion),s=kt(e.lastLimboFreeSnapshotVersion);let r;r=ur(e.target)?Pl(n.fe,e.target):Mo(n.fe,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:At(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function Fo(n){const e=Ll({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lr(e,e.limit,"L"):e}function di(n,e){return new _o(e.largestBatchId,$i(n.fe,e.overlayMutation))}function iu(n,e){const t=e.path.lastSegment();return[n,Ie(e.path.popLast()),t]}function ou(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:kt(s.readTime),documentKey:Ie(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class Rm{getBundleMetadata(e,t){return au(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:Rt(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return au(e).put({bundleId:(s=t).id,createTime:kt(Y(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return uu(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:Fo(r.bundledQuery),readTime:Rt(r.readTime)};var r})}saveNamedQuery(e,t){return uu(e).put(function(s){return{name:s.name,readTime:kt(Y(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function au(n){return le(n,"bundles")}function uu(n){return le(n,"namedQueries")}/**
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
 */class zr{constructor(e,t){this.serializer=e,this.userId=t}static de(e,t){const s=t.uid||"";return new zr(e,s)}getOverlay(e,t){return Cn(e).get(iu(this.userId,t)).next(s=>s?di(this.serializer,s):null)}getOverlays(e,t){const s=Le();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new _o(t,o);r.push(this.we(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(Ie(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(Cn(e).J("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=Le(),i=Ie(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Cn(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=di(this.serializer,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=Le();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cn(e).X({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=di(this.serializer,c);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}we(e,t){return Cn(e).put(function(s,r,i){const[o,a,u]=iu(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:u,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:os(s.fe,i.mutation)}}(this.serializer,this.userId,t))}}function Cn(n){return le(n,"documentOverlays")}/**
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
 */class vt{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Q(e.integerValue));else if("doubleValue"in e){const s=Q(e.doubleValue);isNaN(s)?this.ye(t,13):(this.ye(t,15),es(s)?t.pe(0):t.pe(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ye(t,20),typeof s=="string"?t.Ie(s):(t.Ie(`${s.seconds||""}`),t.pe(s.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(Ge(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ye(t,45),t.pe(s.latitude||0),t.pe(s.longitude||0)}else"mapValue"in e?tl(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):S()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){const s=e.fields||{};this.ye(t,55);for(const r of Object.keys(s))this.Te(r,t),this.me(s[r],t)}Pe(e,t){const s=e.values||[];this.ye(t,50);for(const r of s)this.me(r,t)}ve(e,t){this.ye(t,37),v.fromName(e).path.forEach(s=>{this.ye(t,60),this.be(s,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}}vt.Ve=new vt;function Mm(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function cu(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=Mm(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class Fm{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Se(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.De(s.value),s=t.next();this.Ce()}xe(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Ne(s.value),s=t.next();this.ke()}Me(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.De(s);else if(s<2048)this.De(960|s>>>6),this.De(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.De(480|s>>>12),this.De(128|63&s>>>6),this.De(128|63&s);else{const r=t.codePointAt(0);this.De(240|r>>>18),this.De(128|63&r>>>12),this.De(128|63&r>>>6),this.De(128|63&r)}}this.Ce()}$e(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Ne(s);else if(s<2048)this.Ne(960|s>>>6),this.Ne(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Ne(480|s>>>12),this.Ne(128|63&s>>>6),this.Ne(128|63&s);else{const r=t.codePointAt(0);this.Ne(240|r>>>18),this.Ne(128|63&r>>>12),this.Ne(128|63&r>>>6),this.Ne(128|63&r)}}this.ke()}Oe(e){const t=this.Fe(e),s=cu(t);this.Be(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Le(e){const t=this.Fe(e),s=cu(t);this.Be(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}qe(){this.Ue(255),this.Ue(255)}Ke(){this.Ge(255),this.Ge(255)}reset(){this.position=0}seed(e){this.Be(e.length),this.buffer.set(e,this.position),this.position+=e.length}Qe(){return this.buffer.slice(0,this.position)}Fe(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}De(e){const t=255&e;t===0?(this.Ue(0),this.Ue(255)):t===255?(this.Ue(255),this.Ue(0)):this.Ue(t)}Ne(e){const t=255&e;t===0?(this.Ge(0),this.Ge(255)):t===255?(this.Ge(255),this.Ge(0)):this.Ge(e)}Ce(){this.Ue(0),this.Ue(1)}ke(){this.Ge(0),this.Ge(1)}Ue(e){this.Be(1),this.buffer[this.position++]=e}Ge(e){this.Be(1),this.buffer[this.position++]=~e}Be(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class Om{constructor(e){this.je=e}Ae(e){this.je.Se(e)}Ie(e){this.je.Me(e)}pe(e){this.je.Oe(e)}ge(){this.je.qe()}}class Pm{constructor(e){this.je=e}Ae(e){this.je.xe(e)}Ie(e){this.je.$e(e)}pe(e){this.je.Le(e)}ge(){this.je.Ke()}}class An{constructor(){this.je=new Fm,this.ze=new Om(this.je),this.We=new Pm(this.je)}seed(e){this.je.seed(e)}He(e){return e===0?this.ze:this.We}Qe(){return this.je.Qe()}reset(){this.je.reset()}}/**
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
 */class It{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}Je(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new It(this.indexId,this.documentKey,this.arrayValue,s)}}function We(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=lu(n.arrayValue,e.arrayValue),t!==0?t:(t=lu(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function lu(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class Lm{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ye=e.orderBy,this.Xe=[];for(const t of e.filters){const s=t;s.isInequality()?this.Ze=s:this.Xe.push(s)}}tn(e){b(e.collectionGroup===this.collectionId);const t=ki(e);if(t!==void 0&&!this.en(t))return!1;const s=pt(e);let r=new Set,i=0,o=0;for(;i<s.length&&this.en(s[i]);++i)r=r.add(s[i].fieldPath.canonicalString());if(i===s.length)return!0;if(this.Ze!==void 0){if(!r.has(this.Ze.field.canonicalString())){const a=s[i];if(!this.nn(this.Ze,a)||!this.sn(this.Ye[o++],a))return!1}++i}for(;i<s.length;++i){const a=s[i];if(o>=this.Ye.length||!this.sn(this.Ye[o++],a))return!1}return!0}en(e){for(const t of this.Xe)if(this.nn(t,e))return!0;return!1}nn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function zl(n){var e,t;if(b(n instanceof k||n instanceof L),n instanceof k){if(n instanceof cl){const r=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>k.create(n.field,"==",i)))||[];return L.create(r,"or")}return n}const s=n.filters.map(r=>zl(r));return L.create(s,n.op)}function Vm(n){if(n.getFilters().length===0)return[];const e=ji(zl(n));return b(Gl(e)),zi(e)||Gi(e)?[e]:e.getFilters()}function zi(n){return n instanceof k}function Gi(n){return n instanceof L&&To(n)}function Gl(n){return zi(n)||Gi(n)||function(e){if(e instanceof L&&Oi(e)){for(const t of e.getFilters())if(!zi(t)&&!Gi(t))return!1;return!0}return!1}(n)}function ji(n){if(b(n instanceof k||n instanceof L),n instanceof k)return n;if(n.filters.length===1)return ji(n.filters[0]);const e=n.filters.map(s=>ji(s));let t=L.create(e,n.op);return t=dr(t),Gl(t)?t:(b(t instanceof L),b(en(t)),b(t.filters.length>1),t.filters.reduce((s,r)=>Oo(s,r)))}function Oo(n,e){let t;return b(n instanceof k||n instanceof L),b(e instanceof k||e instanceof L),t=n instanceof k?e instanceof k?function(s,r){return L.create([s,r],"and")}(n,e):hu(n,e):e instanceof k?hu(e,n):function(s,r){if(b(s.filters.length>0&&r.filters.length>0),en(s)&&en(r))return ol(s,r.getFilters());const i=Oi(s)?s:r,o=Oi(s)?r:s,a=i.filters.map(u=>Oo(u,o));return L.create(a,"or")}(n,e),dr(t)}function hu(n,e){if(en(e))return ol(e,n.getFilters());{const t=e.filters.map(s=>Oo(n,s));return L.create(t,"or")}}function dr(n){if(b(n instanceof k||n instanceof L),n instanceof k)return n;const e=n.getFilters();if(e.length===1)return dr(e[0]);if(rl(n))return n;const t=e.map(r=>dr(r)),s=[];return t.forEach(r=>{r instanceof k?s.push(r):r instanceof L&&(r.op===n.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:L.create(s,n.op)}/**
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
 */class qm{constructor(){this.rn=new Po}addToCollectionParentIndex(e,t){return this.rn.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(Ae.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(Ae.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class Po{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new $(F.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $(F.comparator)).toArray()}}/**
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
 */const qs=new Uint8Array(0);class Bm{constructor(e,t){this.user=e,this.databaseId=t,this.on=new Po,this.un=new Ke(s=>At(s),(s,r)=>vs(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.on.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.on.add(t)});const i={collectionId:s,parent:Ie(r)};return du(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[zc(t),""],!1,!0);return du(e).j(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(Pe(o.parent))}return s})}addFieldIndex(e,t){const s=Bs(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=Nn(e);return i.next(a=>{o.put(ou(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=Bs(e),r=Nn(e),i=_n(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=_n(e);let r=!0;const i=new Map;return f.forEach(this.cn(t),o=>this.an(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=N();const a=[];return f.forEach(i,(u,c)=>{var l;y("IndexedDbIndexManager",`Using index ${l=u,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`} to execute ${At(t)}`);const h=function(O,Z){const ne=ki(Z);if(ne===void 0)return null;for(const j of cr(O,ne.fieldPath))switch(j.op){case"array-contains-any":return j.value.arrayValue.values||[];case"array-contains":return[j.value]}return null}(c,u),d=function(O,Z){const ne=new Map;for(const j of pt(Z))for(const Se of cr(O,j.fieldPath))switch(Se.op){case"==":case"in":ne.set(j.fieldPath.canonicalString(),Se.value);break;case"not-in":case"!=":return ne.set(j.fieldPath.canonicalString(),Se.value),Array.from(ne.values())}return null}(c,u),g=function(O,Z){const ne=[];let j=!0;for(const Se of pt(Z)){const mt=Se.kind===0?ja(O,Se.fieldPath,O.startAt):Ka(O,Se.fieldPath,O.startAt);ne.push(mt.value),j&&(j=mt.inclusive)}return new it(ne,j)}(c,u),w=function(O,Z){const ne=[];let j=!0;for(const Se of pt(Z)){const mt=Se.kind===0?Ka(O,Se.fieldPath,O.endAt):ja(O,Se.fieldPath,O.endAt);ne.push(mt.value),j&&(j=mt.inclusive)}return new it(ne,j)}(c,u),I=this.hn(u,c,g),x=this.hn(u,c,w),_=this.ln(u,c,d),P=this.fn(u.indexId,h,I,g.inclusive,x,w.inclusive,_);return f.forEach(P,O=>s.H(O,t.limit).next(Z=>{Z.forEach(ne=>{const j=v.fromSegments(ne.documentKey);o.has(j)||(o=o.add(j),a.push(j))})}))}).next(()=>a)}return f.resolve(null)})}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=Vm(L.create(e.filters,"and")).map(s=>Li(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,t),t)}fn(e,t,s,r,i,o,a){const u=(t!=null?t.length:1)*Math.max(s.length,i.length),c=u/(t!=null?t.length:1),l=[];for(let h=0;h<u;++h){const d=t?this.dn(t[h/c]):qs,g=this.wn(e,d,s[h%c],r),w=this._n(e,d,i[h%c],o),I=a.map(x=>this.wn(e,d,x,!0));l.push(...this.createRange(g,w,I))}return l}wn(e,t,s,r){const i=new It(e,v.empty(),t,s);return r?i:i.Je()}_n(e,t,s,r){const i=new It(e,v.empty(),t,s);return r?i.Je():i}an(e,t){const s=new Lm(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const r=this.cn(t);return f.forEach(r,i=>this.an(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let u=new $(X.comparator),c=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(u=u.add(l.field));return u.size+(c?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(t)&&r.length>1&&s===2?1:s)}mn(e,t){const s=new An;for(const r of pt(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.He(r.kind);vt.Ve._e(i,o)}return s.Qe()}dn(e){const t=new An;return vt.Ve._e(e,t.He(0)),t.Qe()}gn(e,t){const s=new An;return vt.Ve._e(Ct(this.databaseId,t),s.He(function(r){const i=pt(r);return i.length===0?0:i[i.length-1].kind}(e))),s.Qe()}ln(e,t,s){if(s===null)return[];let r=[];r.push(new An);let i=0;for(const o of pt(e)){const a=s[i++];for(const u of r)if(this.yn(t,o.fieldPath)&&ss(a))r=this.pn(r,o,a);else{const c=u.He(o.kind);vt.Ve._e(a,c)}}return this.In(r)}hn(e,t,s){return this.ln(e,t,s.position)}In(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].Qe();return t}pn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const u=new An;u.seed(a.Qe()),vt.Ve._e(o,u.He(t.kind)),i.push(u)}return i}yn(e,t){return!!e.filters.find(s=>s instanceof k&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Bs(e),r=Nn(e);return(t?s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.j()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(u=>{o.push(function(c,l){const h=l?new Zn(l.sequenceNumber,new Ae(Rt(l.readTime),new v(Pe(l.documentKey)),l.largestBatchId)):Zn.empty(),d=c.fields.map(([g,w])=>new Gs(X.fromServerFormat(g),w));return new ar(c.indexId,c.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:C(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Bs(e),i=Nn(e);return this.Tn(e).next(o=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,u=>i.put(ou(u.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,u=>this.En(e,r,u).next(c=>{const l=this.An(i,u);return c.isEqual(l)?f.resolve():this.vn(e,i,u,c,l)}))))})}Rn(e,t,s,r){return _n(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.gn(s,t.key),documentKey:t.key.path.toArray()})}Pn(e,t,s,r){return _n(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.gn(s,t.key),t.key.path.toArray()])}En(e,t,s){const r=_n(e);let i=new $(We);return r.X({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.gn(s,t)])},(o,a)=>{i=i.add(new It(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}An(e,t){let s=new $(We);const r=this.mn(t,e);if(r==null)return s;const i=ki(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ss(o))for(const a of o.arrayValue.values||[])s=s.add(new It(t.indexId,e.key,this.dn(a),r))}else s=s.add(new It(t.indexId,e.key,qs,r));return s}vn(e,t,s,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,u,c,l,h){const d=a.getIterator(),g=u.getIterator();let w=Ut(d),I=Ut(g);for(;w||I;){let x=!1,_=!1;if(w&&I){const P=c(w,I);P<0?_=!0:P>0&&(x=!0)}else w!=null?_=!0:x=!0;x?(l(I),I=Ut(g)):_?(h(w),w=Ut(d)):(w=Ut(d),I=Ut(g))}}(r,i,We,a=>{o.push(this.Rn(e,t,s,a))},a=>{o.push(this.Pn(e,t,s,a))}),f.waitFor(o)}Tn(e){let t=1;return Nn(e).X({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>We(o,a)).filter((o,a,u)=>!a||We(o,u[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=We(o,e),u=We(o,t);if(a===0)r[0]=e.Je();else if(a>0&&u<0)r.push(o),r.push(o.Je());else if(u>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2){if(this.bn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,qs,[]],u=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,qs,[]];i.push(IDBKeyRange.bound(a,u))}return i}bn(e,t){return We(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fu)}getMinOffset(e,t){return f.mapArray(this.cn(t),s=>this.an(e,s).next(r=>r||S())).next(fu)}}function du(n){return le(n,"collectionParents")}function _n(n){return le(n,"indexEntries")}function Bs(n){return le(n,"indexConfiguration")}function Nn(n){return le(n,"indexState")}function fu(n){b(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;Io(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new Ae(e.readTime,e.documentKey,t)}/**
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
 */const mu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class ye{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new ye(e,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function jl(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=s.X({range:o},(l,h,d)=>(a++,d.delete()));i.push(u.next(()=>{b(a===1)}));const c=[];for(const l of t.mutations){const h=Wc(e,l.key.path,t.batchId);i.push(r.delete(h)),c.push(l.key)}return f.waitFor(i).next(()=>c)}function fr(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw S();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */ye.DEFAULT_COLLECTION_PERCENTILE=10,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ye.DEFAULT=new ye(41943040,ye.DEFAULT_COLLECTION_PERCENTILE,ye.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ye.DISABLED=new ye(-1,0,0);class Gr{constructor(e,t,s,r){this.userId=e,this.serializer=t,this.indexManager=s,this.referenceDelegate=r,this.Vn={}}static de(e,t,s,r){b(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Gr(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Xe(e).X({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=Gt(e),o=Xe(e);return o.add({}).next(a=>{b(typeof a=="number");const u=new Co(a,t,s,r),c=function(d,g,w){const I=w.baseMutations.map(_=>os(d.fe,_)),x=w.mutations.map(_=>os(d.fe,_));return{userId:g,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:I,mutations:x}}(this.serializer,this.userId,u),l=[];let h=new $((d,g)=>C(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Wc(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(i.put(g,Af))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Vn[a]=u.keys()}),f.waitFor(l).next(()=>u)})}lookupMutationBatch(e,t){return Xe(e).get(t).next(s=>s?(b(s.userId===this.userId),wt(this.serializer,s)):null)}Sn(e,t){return this.Vn[t]?f.resolve(this.Vn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.Vn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return Xe(e).X({index:"userMutationsIndex",range:r},(o,a,u)=>{a.userId===this.userId&&(b(a.batchId>=s),i=wt(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return Xe(e).X({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Xe(e).j("userMutationsIndex",t).next(s=>s.map(r=>wt(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=js(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return Gt(e).X({range:r},(o,a,u)=>{const[c,l,h]=o,d=Pe(l);if(c===this.userId&&t.path.isEqual(d))return Xe(e).get(h).next(g=>{if(!g)throw S();b(g.userId===this.userId),i.push(wt(this.serializer,g))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(C);const r=[];return t.forEach(i=>{const o=js(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Gt(e).X({range:a},(c,l,h)=>{const[d,g,w]=c,I=Pe(g);d===this.userId&&i.path.isEqual(I)?s=s.add(w):h.done()});r.push(u)}),f.waitFor(r).next(()=>this.Dn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=js(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new $(C);return Gt(e).X({range:o},(u,c,l)=>{const[h,d,g]=u,w=Pe(d);h===this.userId&&s.isPrefixOf(w)?w.length===r&&(a=a.add(g)):l.done()}).next(()=>this.Dn(e,a))}Dn(e,t){const s=[],r=[];return t.forEach(i=>{r.push(Xe(e).get(i).next(o=>{if(o===null)throw S();b(o.userId===this.userId),s.push(wt(this.serializer,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return jl(e.ht,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.Cn(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Cn(e){delete this.Vn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Gt(e).X({range:s},(i,o,a)=>{if(i[0]===this.userId){const u=Pe(i[1]);r.push(u)}else a.done()}).next(()=>{b(r.length===0)})})}containsKey(e,t){return Kl(e,this.userId,t)}xn(e){return Ql(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Kl(n,e,t){const s=js(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Gt(n).X({range:i,Y:!0},(a,u,c)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),c.done()}).next(()=>o)}function Xe(n){return le(n,"mutations")}function Gt(n){return le(n,"documentMutations")}function Ql(n){return le(n,"mutationQueues")}/**
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
 */class Mt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Mt(0)}static Mn(){return new Mt(-1)}}/**
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
 */class Um{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.$n(e).next(t=>{const s=new Mt(t.highestTargetId);return t.highestTargetId=s.next(),this.On(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.$n(e).next(t=>D.fromTimestamp(new K(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.$n(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.$n(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.On(e,r)))}addTargetData(e,t){return this.Fn(e,t).next(()=>this.$n(e).next(s=>(s.targetCount+=1,this.Bn(t,s),this.On(e,s))))}updateTargetData(e,t){return this.Fn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>$t(e).delete(t.targetId)).next(()=>this.$n(e)).next(s=>(b(s.targetCount>0),s.targetCount-=1,this.On(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return $t(e).X((o,a)=>{const u=Ln(a);u.sequenceNumber<=t&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(e,u)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return $t(e).X((s,r)=>{const i=Ln(r);t(i)})}$n(e){return gu(e).get("targetGlobalKey").next(t=>(b(t!==null),t))}On(e,t){return gu(e).put("targetGlobalKey",t)}Fn(e,t){return $t(e).put($l(this.serializer,t))}Bn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.$n(e).next(t=>t.targetCount)}getTargetData(e,t){const s=At(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return $t(e).X({range:r,index:"queryTargetsIndex"},(o,a,u)=>{const c=Ln(a);vs(t,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=Je(e);return t.forEach(o=>{const a=Ie(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=Je(e);return f.forEach(t,i=>{const o=Ie(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=Je(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=Je(e);let i=N();return r.X({range:s,Y:!0},(o,a,u)=>{const c=Pe(o[1]),l=new v(c);i=i.add(l)}).next(()=>i)}containsKey(e,t){const s=Ie(t.path),r=IDBKeyRange.bound([s],[zc(s)],!1,!0);let i=0;return Je(e).X({index:"documentTargetsIndex",Y:!0,range:r},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}le(e,t){return $t(e).get(t).next(s=>s?Ln(s):null)}}function $t(n){return le(n,"targets")}function gu(n){return le(n,"targetGlobal")}function Je(n){return le(n,"targetDocuments")}/**
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
 */function pu([n,e],[t,s]){const r=C(n,t);return r===0?C(e,s):r}class $m{constructor(e){this.Ln=e,this.buffer=new $(pu),this.qn=0}Un(){return++this.qn}Kn(e){const t=[e,this.Un()];if(this.buffer.size<this.Ln)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();pu(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Hl{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Qn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}Qn(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){lt(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await ct(t)}await this.Qn(3e5)})}}class zm{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.zn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(xe.ct);const s=new $m(t);return this.jn.forEachTarget(e,r=>s.Kn(r.sequenceNumber)).next(()=>this.jn.Wn(e,r=>s.Kn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.jn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(mu)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),mu):this.Hn(e,t))}getCacheSize(e){return this.jn.getCacheSize(e)}Hn(e,t){let s,r,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(c=Date.now(),Ni()<=Xt.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}function Wl(n,e){return new zm(n,e)}/**
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
 */class Gm{constructor(e,t){this.db=e,this.garbageCollector=Wl(this,t)}zn(e){const t=this.Jn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Jn(e){let t=0;return this.Wn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Wn(e,t){return this.Yn(e,(s,r)=>t(r))}addReference(e,t,s){return Us(e,s)}removeReference(e,t,s){return Us(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Us(e,t)}Xn(e,t){return function(s,r){let i=!1;return Ql(s).Z(o=>Kl(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Yn(e,(o,a)=>{if(a<=t){const u=this.Xn(e,o).next(c=>{if(!c)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,D.min()),Je(e).delete([0,Ie(o.path)])))});r.push(u)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Us(e,t)}Yn(e,t){const s=Je(e);let r,i=xe.ct;return s.X({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==xe.ct&&t(new v(Pe(r)),i),i=c,r=u):i=xe.ct}).next(()=>{i!==xe.ct&&t(new v(Pe(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Us(n,e){return Je(n).put(function(t,s){return{targetId:0,path:Ie(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Xl{constructor(){this.changes=new Ke(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,U.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class jm{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return gt(e).put(s)}removeEntry(e,t,s){return gt(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],hr(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Zn(e,s)))}getEntry(e,t){let s=U.newInvalidDocument(t);return gt(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(kn(t))},(r,i)=>{s=this.ts(t,i)}).next(()=>s)}es(e,t){let s={size:0,document:U.newInvalidDocument(t)};return gt(e).X({index:"documentKeyIndex",range:IDBKeyRange.only(kn(t))},(r,i)=>{s={document:this.ts(t,i),size:fr(i)}}).next(()=>s)}getEntries(e,t){let s=De();return this.ns(e,t,(r,i)=>{const o=this.ts(r,i);s=s.insert(r,o)}).next(()=>s)}ss(e,t){let s=De(),r=new q(v.comparator);return this.ns(e,t,(i,o)=>{const a=this.ts(i,o);s=s.insert(i,a),r=r.insert(i,fr(o))}).next(()=>({documents:s,rs:r}))}ns(e,t,s){if(t.isEmpty())return f.resolve();let r=new $(vu);t.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(kn(r.first()),kn(r.last())),o=r.getIterator();let a=o.getNext();return gt(e).X({index:"documentKeyIndex",range:i},(u,c,l)=>{const h=v.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&vu(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,c),a=o.hasNext()?o.getNext():null),a?l.G(kn(a)):l.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,s,r){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),hr(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gt(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let c=De();for(const l of u){const h=this.ts(v.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Es(t,h)||r.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,t,s,r){let i=De();const o=wu(t,s),a=wu(t,Ae.max());return gt(e).X({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.ts(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(h.key,h),i.size===r&&l.done()}).next(()=>i)}newChangeBuffer(e){return new Km(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return yu(e).get("remoteDocumentGlobalKey").next(t=>(b(!!t),t))}Zn(e,t){return yu(e).put("remoteDocumentGlobalKey",t)}ts(e,t){if(t){const s=km(this.serializer,t);if(!(s.isNoDocument()&&s.version.isEqual(D.min())))return s}return U.newInvalidDocument(e)}}function Yl(n){return new jm(n)}class Km extends Xl{constructor(e,t){super(),this.os=e,this.trackRemovals=t,this.us=new Ke(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new $((i,o)=>C(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.us.get(i);if(t.push(this.os.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=ru(this.os.serializer,o);r=r.add(i.path.popLast());const c=fr(u);s+=c-a.size,t.push(this.os.addEntry(e,i,u))}else if(s-=a.size,this.trackRemovals){const u=ru(this.os.serializer,o.convertToNoDocument(D.min()));t.push(this.os.addEntry(e,i,u))}}),r.forEach(i=>{t.push(this.os.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.os.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.os.es(e,t).next(s=>(this.us.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.os.ss(e,t).next(({documents:s,rs:r})=>(r.forEach((i,o)=>{this.us.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function yu(n){return le(n,"remoteDocumentGlobal")}function gt(n){return le(n,"remoteDocumentsV14")}function kn(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function wu(n,e){const t=e.documentKey.path.toArray();return[n,hr(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function vu(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=C(t[i],s[i]),r)return r;return r=C(t.length,s.length),r||(r=C(t[t.length-2],s[s.length-2]),r||C(t[t.length-1],s[s.length-1]))}/**
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
 */class Qm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Jl{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&$n(s.mutation,r,be.empty(),K.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,t,s=N()){const r=Le();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=On();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Le();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,N()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=De();const o=Un(),a=Un();return t.forEach((u,c)=>{const l=s.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof Qe)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),$n(l.mutation,c,l.mutation.getFieldMask(),K.now())):o.set(c.key,be.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),t.forEach((c,l)=>{var h;return a.set(c,new Qm(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Un();let r=new q((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=s.get(u)||be.empty();l=a.applyToLocalView(c,l),s.set(u,l);const h=(r.get(a.batchId)||N()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=pl();l.forEach(d=>{if(!i.has(d)){const g=xl(t.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):f.resolve(Le());let a=-1,u=i;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,N())).next(l=>({batchId:a,changes:gl(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let r=On();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=On();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const u=function(c,l){return new je(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,U.newInvalidDocument(c)))});let o=On();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&$n(c.mutation,u,be.empty(),K.now()),Es(t,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class Hm{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return f.resolve(this.cs.get(t))}saveBundleMetadata(e,t){var s;return this.cs.set(t.id,{id:(s=t).id,version:s.version,createTime:Y(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,function(s){return{name:s.name,query:Fo(s.bundledQuery),readTime:Y(s.readTime)}}(t)),f.resolve()}}/**
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
 */class Wm{constructor(){this.overlays=new q(v.comparator),this.ls=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Le();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.we(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.ls.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ls.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=Le(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new q((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let l=i.get(c.largestBatchId);l===null&&(l=Le(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=Le(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=r)););return f.resolve(a)}we(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ls.get(r.largestBatchId).delete(s.key);this.ls.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new _o(t,s));let i=this.ls.get(t);i===void 0&&(i=N(),this.ls.set(t,i)),this.ls.set(t,i.add(s.key))}}/**
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
 */class Lo{constructor(){this.fs=new $(ie.ds),this.ws=new $(ie._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){const s=new ie(e,t);this.fs=this.fs.add(s),this.ws=this.ws.add(s)}gs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ys(new ie(e,t))}ps(e,t){e.forEach(s=>this.removeReference(s,t))}Is(e){const t=new v(new F([])),s=new ie(t,e),r=new ie(t,e+1),i=[];return this.ws.forEachInRange([s,r],o=>{this.ys(o),i.push(o.key)}),i}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const t=new v(new F([])),s=new ie(t,e),r=new ie(t,e+1);let i=N();return this.ws.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new ie(e,0),s=this.fs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ie{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return v.comparator(e.key,t.key)||C(e.As,t.As)}static _s(e,t){return C(e.As,t.As)||v.comparator(e.key,t.key)}}/**
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
 */class Xm{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new $(ie.ds)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Co(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.Rs=this.Rs.add(new ie(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.bs(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ie(t,0),r=new ie(t,Number.POSITIVE_INFINITY),i=[];return this.Rs.forEachInRange([s,r],o=>{const a=this.Ps(o.As);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(C);return t.forEach(r=>{const i=new ie(r,0),o=new ie(r,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([i,o],a=>{s=s.add(a.As)})}),f.resolve(this.Vs(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new ie(new v(i),0);let a=new $(C);return this.Rs.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.As)),!0)},o),f.resolve(this.Vs(a))}Vs(e){const t=[];return e.forEach(s=>{const r=this.Ps(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){b(this.Ss(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Rs;return f.forEach(t.mutations,r=>{const i=new ie(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Rs=s})}Cn(e){}containsKey(e,t){const s=new ie(t,0),r=this.Rs.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ss(e,t){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Ym{constructor(e){this.Ds=e,this.docs=new q(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ds(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():U.newInvalidDocument(t))}getEntries(e,t){let s=De();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():U.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=De();const o=t.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Io(jc(l),s)<=0||(r.has(l.key)||Es(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,s,r){S()}Cs(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Jm(this)}getSize(e){return f.resolve(this.size)}}class Jm extends Xl{constructor(e){super(),this.os=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.os.addEntry(e,r)):this.os.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}}/**
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
 */class Zm{constructor(e){this.persistence=e,this.xs=new Ke(t=>At(t),vs),this.lastRemoteSnapshotVersion=D.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Lo,this.targetCount=0,this.Ms=Mt.kn()}forEachTarget(e,t){return this.xs.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ns&&(this.Ns=t),f.resolve()}Fn(e){this.xs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ms=new Mt(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Fn(t),f.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.xs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.xs.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.ks.gs(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.ks.ps(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.ks.Es(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.ks.containsKey(t))}}/**
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
 */class Vo{constructor(e,t){this.$s={},this.overlays={},this.Os=new xe(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Zm(this),this.indexManager=new qm,this.remoteDocumentCache=function(s){return new Ym(s)}(s=>this.referenceDelegate.Ls(s)),this.serializer=new Ul(t),this.qs=new Hm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Wm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.$s[e.toKey()];return s||(s=new Xm(t,this.referenceDelegate),this.$s[e.toKey()]=s),s}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,s){y("MemoryPersistence","Starting transaction:",e);const r=new eg(this.Os.next());return this.referenceDelegate.Us(),s(r).next(i=>this.referenceDelegate.Ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Gs(e,t){return f.or(Object.values(this.$s).map(s=>()=>s.containsKey(e,t)))}}class eg extends Qc{constructor(e){super(),this.currentSequenceNumber=e}}class jr{constructor(e){this.persistence=e,this.Qs=new Lo,this.js=null}static zs(e){return new jr(e)}get Ws(){if(this.js)return this.js;throw S()}addReference(e,t,s){return this.Qs.addReference(s,t),this.Ws.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.Qs.removeReference(s,t),this.Ws.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),f.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(r=>this.Ws.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Ws.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ws,s=>{const r=v.fromPath(s);return this.Hs(e,r).next(i=>{i||t.removeEntry(r,D.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(s=>{s?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return f.or([()=>f.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}}class mr{constructor(e,t){this.persistence=e,this.Js=new Ke(s=>Ie(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=Wl(this,t)}static zs(e,t){return new mr(e,t)}Us(){}Ks(e){return f.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}zn(e){const t=this.Jn(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}Jn(e){let t=0;return this.Wn(e,s=>{t++}).next(()=>t)}Wn(e,t){return f.forEach(this.Js,(s,r)=>this.Xn(e,s,r).next(i=>i?f.resolve():t(r)))}removeTargets(e,t,s){return this.persistence.getTargetCache().removeTargets(e,t,s)}removeOrphanedDocuments(e,t){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.Cs(e,o=>this.Xn(e,o,t).next(a=>{a||(s++,i.removeEntry(o,D.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,t){return this.Js.set(t,e.currentSequenceNumber),f.resolve()}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,t,s){return this.Js.set(s,e.currentSequenceNumber),f.resolve()}removeReference(e,t,s){return this.Js.set(s,e.currentSequenceNumber),f.resolve()}updateLimboDocument(e,t){return this.Js.set(t,e.currentSequenceNumber),f.resolve()}Ls(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Qs(e.data.value)),t}Xn(e,t,s){return f.or([()=>this.persistence.Gs(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.Js.get(t);return f.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class tg{constructor(e){this.serializer=e}O(e,t,s,r){const i=new Lr("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Oa,{unique:!0}),a.createObjectStore("documentMutations")}(e),Iu(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Iu(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:D.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Oa,{unique:!0});const l=u.store("mutations"),h=c.map(d=>l.put(d));return f.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.Ys(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Xs(i)))),s<7&&r>=7&&(o=o.next(()=>this.Zs(i))),s<8&&r>=8&&(o=o.next(()=>this.ti(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.ei(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:Bf});u.createIndex("collectionPathOverlayIndex",Uf,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",$f,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:_f});u.createIndex("documentKeyIndex",Nf),u.createIndex("collectionGroupIndex",kf)}(e)).next(()=>this.ni(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.si(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Pf}).createIndex("sequenceNumberIndex",Lf,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Vf}).createIndex("documentKeyIndex",qf,{unique:!1})}(e))),o}Xs(e){let t=0;return e.store("remoteDocuments").X((s,r)=>{t+=fr(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}Ys(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.j().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.j("userMutationsIndex",o).next(a=>f.forEach(a,u=>{b(u.userId===i.userId);const c=wt(this.serializer,u);return jl(e,i.userId,c).next(()=>{})}))}))}Zs(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.X((o,a)=>{const u=new F(o),c=function(l){return[0,Ie(l)]}(u);i.push(t.get(c).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:Ie(h),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(i))})}ti(e,t){e.createObjectStore("collectionParents",{keyPath:Of});const s=t.store("collectionParents"),r=new Po,i=o=>{if(r.add(o)){const a=o.lastSegment(),u=o.popLast();return s.put({collectionId:a,parent:Ie(u)})}};return t.store("remoteDocuments").X({Y:!0},(o,a)=>{const u=new F(o);return i(u.popLast())}).next(()=>t.store("documentMutations").X({Y:!0},([o,a,u],c)=>{const l=Pe(a);return i(l.popLast())}))}ei(e){const t=e.store("targets");return t.X((s,r)=>{const i=Ln(r),o=$l(this.serializer,i);return t.put(o)})}ni(e,t){const s=t.store("remoteDocuments"),r=[];return s.X((i,o)=>{const a=t.store("remoteDocumentsV14"),u=(c=o,c.document?new v(F.fromString(c.document.name).popFirst(5)):c.noDocument?v.fromSegments(c.noDocument.path):c.unknownDocument?v.fromSegments(c.unknownDocument.path):S()).path.toArray();var c;/**
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
*/const l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(l))}).next(()=>f.waitFor(r))}si(e,t){const s=t.store("mutations"),r=Yl(this.serializer),i=new Vo(jr.zs,this.serializer.fe);return s.j().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:N();wt(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),f.forEach(a,(u,c)=>{const l=new oe(c),h=zr.de(this.serializer,l),d=i.getIndexManager(l),g=Gr.de(l,this.serializer,d,i.referenceDelegate);return new Jl(r,g,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Ri(t,xe.ct),u).next()})})}}function Iu(n){n.createObjectStore("targetDocuments",{keyPath:Mf}).createIndex("documentTargetsIndex",Ff,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Rf,{unique:!0}),n.createObjectStore("targetGlobal")}const fi="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class qo{constructor(e,t,s,r,i,o,a,u,c,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.ii=i,this.window=o,this.document=a,this.ri=c,this.oi=l,this.ui=h,this.Os=null,this.Fs=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.ai=null,this.hi=null,this.li=Number.NEGATIVE_INFINITY,this.fi=d=>Promise.resolve(),!qo.D())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gm(this,r),this.di=t+"main",this.serializer=new Ul(u),this.wi=new Ne(this.di,this.ui,new tg(this.serializer)),this.Bs=new Um(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Yl(this.serializer),this.qs=new Rm,this.window&&this.window.localStorage?this._i=this.window.localStorage:(this._i=null,l===!1&&W("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,fi);return this.gi(),this.yi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Bs.getHighestSequenceNumber(e))}).then(e=>{this.Os=new xe(e,this.ri)}).then(()=>{this.Fs=!0}).catch(e=>(this.wi&&this.wi.close(),Promise.reject(e)))}Ii(e){return this.fi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.wi.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ii.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>$s(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ti(e).next(t=>{t||(this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)))})}).next(()=>this.Ei(e)).next(t=>this.isPrimary&&!t?this.Ai(e).next(()=>!1):!!t&&this.vi(e).next(()=>!0))).catch(e=>{if(lt(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ii.enqueueRetryable(()=>this.fi(e)),this.isPrimary=e})}Ti(e){return Rn(e).get("owner").next(t=>f.resolve(this.Ri(t)))}Pi(e){return $s(e).delete(this.clientId)}async bi(){if(this.isPrimary&&!this.Vi(this.li,18e5)){this.li=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=le(t,"clientMetadata");return s.j().next(r=>{const i=this.Si(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._i)for(const t of e)this._i.removeItem(this.Di(t.clientId))}}pi(){this.hi=this.ii.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.bi()).then(()=>this.pi()))}Ri(e){return!!e&&e.ownerId===this.clientId}Ei(e){return this.oi?f.resolve(!0):Rn(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)){if(this.Ri(t)&&this.networkEnabled)return!0;if(!this.Ri(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,fi);return!1}}return!(!this.networkEnabled||!this.inForeground)||$s(e).j().next(s=>this.Si(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Fs=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Ni(),this.ki(),await this.wi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ri(e,xe.ct);return this.Ai(t).next(()=>this.Pi(t))}),this.wi.close(),this.Mi()}Si(e,t){return e.filter(s=>this.Vi(s.updateTimeMs,t)&&!this.Ci(s.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>$s(e).j().next(t=>this.Si(t,18e5).map(s=>s.clientId)))}get started(){return this.Fs}getMutationQueue(e,t){return Gr.de(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Bm(e,this.serializer.fe.databaseId)}getDocumentOverlayCache(e){return zr.de(this.serializer,e)}getBundleCache(){return this.qs}runTransaction(e,t,s){y("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.ui)===15?Gf:o===14?Jc:o===13?Yc:o===12?zf:o===11?Xc:void S();var o;let a;return this.wi.runTransaction(e,r,i,u=>(a=new Ri(u,this.Os?this.Os.next():xe.ct),t==="readwrite-primary"?this.Ti(a).next(c=>!!c||this.Ei(a)).next(c=>{if(!c)throw W(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ii.enqueueRetryable(()=>this.fi(!1)),new p(m.FAILED_PRECONDITION,Kc);return s(a)}).next(c=>this.vi(a).next(()=>c)):this.Oi(a).next(()=>s(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Oi(e){return Rn(e).get("owner").next(t=>{if(t!==null&&this.Vi(t.leaseTimestampMs,5e3)&&!this.Ci(t.ownerId)&&!this.Ri(t)&&!(this.oi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,fi)})}vi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Rn(e).put("owner",t)}static D(){return Ne.D()}Ai(e){const t=Rn(e);return t.get("owner").next(s=>this.Ri(s)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}Vi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(W(`Detected an update time that is in the future: ${e} > ${s}`),!1))}gi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ai=()=>{this.ii.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.ai),this.inForeground=this.document.visibilityState==="visible")}Ni(){this.ai&&(this.document.removeEventListener("visibilitychange",this.ai),this.ai=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;td()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.ii.enterRestrictedMode(!0),this.ii.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}ki(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Ci(e){var t;try{const s=((t=this._i)===null||t===void 0?void 0:t.getItem(this.Di(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return W("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}xi(){if(this._i)try{this._i.setItem(this.Di(this.clientId),String(Date.now()))}catch(e){W("Failed to set zombie client id.",e)}}Mi(){if(this._i)try{this._i.removeItem(this.Di(this.clientId))}catch{}}Di(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Rn(n){return le(n,"owner")}function $s(n){return le(n,"clientMetadata")}function Bo(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Uo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Fi=s,this.Bi=r}static Li(e,t){let s=N(),r=N();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Uo(e,t.fromCache,s,r)}}/**
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
 */class Zl{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,s,r){return this.Ki(e,t).next(i=>i||this.Gi(e,t,r,s)).next(i=>i||this.Qi(e,t))}Ki(e,t){if(Qa(t))return f.resolve(null);let s=Te(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=lr(t,null,"F"),s=Te(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const c=this.ji(t,a);return this.zi(t,c,o,u.readTime)?this.Ki(e,lr(t,null,"F")):this.Wi(e,c,t,u)}))})))}Gi(e,t,s,r){return Qa(t)||r.isEqual(D.min())?this.Qi(e,t):this.Ui.getDocuments(e,s).next(i=>{const o=this.ji(t,i);return this.zi(t,o,s,r)?this.Qi(e,t):(Ni()<=Xt.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qi(t)),this.Wi(e,o,t,Gc(r,-1)))})}ji(e,t){let s=new $(fl(e));return t.forEach((r,i)=>{Es(e,i)&&(s=s.add(i))}),s}zi(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Qi(e,t){return Ni()<=Xt.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",qi(t)),this.Ui.getDocumentsMatchingQuery(e,t,Ae.min())}Wi(e,t,s,r){return this.Ui.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class ng{constructor(e,t,s,r){this.persistence=e,this.Hi=t,this.serializer=r,this.Ji=new q(C),this.Yi=new Ke(i=>At(i),vs),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(s)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Jl(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}}function eh(n,e,t,s){return new ng(n,e,t,s)}async function th(n,e){const t=E(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.tr(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(s,u).next(c=>({er:c,removedBatchIds:o,addedBatchIds:a}))})})}function sg(n,e){const t=E(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let d=f.resolve();return h.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(w=>{const I=u.docVersions.get(g);b(I!==null),w.version.compareTo(I)<0&&(l.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function nh(n){const e=E(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Bs.getLastRemoteSnapshotVersion(t))}function rg(n,e){const t=E(n),s=e.snapshotVersion;let r=t.Ji;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Zi.newChangeBuffer({trackRemovals:!0});r=t.Ji;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(t.Bs.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Bs.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken(re.EMPTY_BYTE_STRING,D.min()).withLastLimboFreeSnapshotVersion(D.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(w,I,x){return w.resumeToken.approximateByteSize()===0||I.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(d,g,l)&&a.push(t.Bs.updateTargetData(i,g))});let u=De(),c=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(sh(i,o,e.documentUpdates).next(l=>{u=l.nr,c=l.sr})),!s.isEqual(D.min())){const l=t.Bs.getLastRemoteSnapshotVersion(i).next(h=>t.Bs.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Ji=r,i))}function sh(n,e,t){let s=N(),r=N();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=De();return t.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(D.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{nr:o,sr:r}})}function ig(n,e){const t=E(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function rn(n,e){const t=E(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Bs.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.Bs.allocateTargetId(s).next(o=>(r=new $e(e,o,"TargetPurposeListen",s.currentSequenceNumber),t.Bs.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ji.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ji=t.Ji.insert(s.targetId,s),t.Yi.set(e,s.targetId)),s})}async function on(n,e,t){const s=E(n),r=s.Ji.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!lt(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ji=s.Ji.remove(e),s.Yi.delete(r.target)}function gr(n,e,t){const s=E(n);let r=D.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=E(a),h=l.Yi.get(c);return h!==void 0?f.resolve(l.Ji.get(h)):l.Bs.getTargetData(u,c)}(s,o,Te(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Bs.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Hi.getDocumentsMatchingQuery(o,e,t?r:D.min(),t?i:N())).next(a=>(oh(s,dl(e),a),{documents:a,ir:i})))}function rh(n,e){const t=E(n),s=E(t.Bs),r=t.Ji.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.le(i,e).next(o=>o?o.target:null))}function ih(n,e){const t=E(n),s=t.Xi.get(e)||D.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Zi.getAllFromCollectionGroup(r,e,Gc(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(oh(t,e,r),r))}function oh(n,e,t){let s=n.Xi.get(e)||D.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Xi.set(e,s)}async function og(n,e,t,s){const r=E(n);let i=N(),o=De();for(const c of t){const l=e.rr(c.metadata.name);c.document&&(i=i.add(l));const h=e.ur(c);h.setReadTime(e.cr(c.metadata.readTime)),o=o.insert(l,h)}const a=r.Zi.newChangeBuffer({trackRemovals:!0}),u=await rn(r,function(c){return Te(pn(F.fromString(`__bundle__/docs/${c}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",c=>sh(c,a,o).next(l=>(a.apply(c),l)).next(l=>r.Bs.removeMatchingKeysForTargetId(c,u.targetId).next(()=>r.Bs.addMatchingKeys(c,i,u.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,l.nr,l.sr)).next(()=>l.nr)))}async function ag(n,e,t=N()){const s=await rn(n,Te(Fo(e.bundledQuery))),r=E(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=Y(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.qs.saveNamedQuery(i,e);const a=s.withResumeToken(re.EMPTY_BYTE_STRING,o);return r.Ji=r.Ji.insert(a.targetId,a),r.Bs.updateTargetData(i,a).next(()=>r.Bs.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Bs.addMatchingKeys(i,t,s.targetId)).next(()=>r.qs.saveNamedQuery(i,e))})}function Eu(n,e){return`firestore_clients_${n}_${e}`}function Tu(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function mi(n,e){return`firestore_targets_${n}_${e}`}class pr{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static ar(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new p(r.error.code,r.error.message))),o?new pr(e,t,r.state,i):(W("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class zn{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static ar(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new p(s.error.code,s.error.message))),i?new zn(e,s.state,r):(W("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}hr(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class yr{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static ar(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=bo();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Hc(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new yr(e,i):(W("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class $o{constructor(e,t){this.clientId=e,this.onlineState=t}static ar(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new $o(t.clientId,t.onlineState):(W("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ki{constructor(){this.activeTargetIds=bo()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class gi{constructor(e,t,s,r,i){this.window=e,this.ii=t,this.persistenceKey=s,this.wr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this._r=this.mr.bind(this),this.gr=new q(C),this.started=!1,this.yr=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.pr=Eu(this.persistenceKey,this.wr),this.Ir=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.gr=this.gr.insert(this.wr,new Ki),this.Tr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Er=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ar=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Rr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this._r)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const s of e){if(s===this.wr)continue;const r=this.getItem(Eu(this.persistenceKey,s));if(r){const i=yr.ar(s,r);i&&(this.gr=this.gr.insert(i.clientId,i))}}this.Pr();const t=this.storage.getItem(this.vr);if(t){const s=this.br(t);s&&this.Vr(s)}for(const s of this.yr)this.mr(s);this.yr=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ir,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Sr(this.gr)}isActiveQueryTarget(e){let t=!1;return this.gr.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Dr(e,"pending")}updateMutationState(e,t,s){this.Dr(e,t,s),this.Cr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(mi(this.persistenceKey,e));if(s){const r=zn.ar(e,s);r&&(t=r.state)}}return this.Nr.lr(e),this.Pr(),t}removeLocalQueryTarget(e){this.Nr.dr(e),this.Pr()}isLocalQueryTarget(e){return this.Nr.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(mi(this.persistenceKey,e))}updateQueryState(e,t,s){this.kr(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Cr(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Mr(e)}notifyBundleLoaded(e){this.$r(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this._r),this.removeItem(this.pr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}mr(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.pr)return void W("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ii.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Tr.test(t.key)){if(t.newValue==null){const s=this.Or(t.key);return this.Fr(s,null)}{const s=this.Br(t.key,t.newValue);if(s)return this.Fr(s.clientId,s)}}else if(this.Er.test(t.key)){if(t.newValue!==null){const s=this.Lr(t.key,t.newValue);if(s)return this.qr(s)}}else if(this.Ar.test(t.key)){if(t.newValue!==null){const s=this.Ur(t.key,t.newValue);if(s)return this.Kr(s)}}else if(t.key===this.vr){if(t.newValue!==null){const s=this.br(t.newValue);if(s)return this.Vr(s)}}else if(t.key===this.Ir){const s=function(r){let i=xe.ct;if(r!=null)try{const o=JSON.parse(r);b(typeof o=="number"),i=o}catch(o){W("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==xe.ct&&this.sequenceNumberHandler(s)}else if(t.key===this.Rr){const s=this.Gr(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Qr(r)))}}}else this.yr.push(t)})}}get Nr(){return this.gr.get(this.wr)}Pr(){this.setItem(this.pr,this.Nr.hr())}Dr(e,t,s){const r=new pr(this.currentUser,e,t,s),i=Tu(this.persistenceKey,this.currentUser,e);this.setItem(i,r.hr())}Cr(e){const t=Tu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Mr(e){const t={clientId:this.wr,onlineState:e};this.storage.setItem(this.vr,JSON.stringify(t))}kr(e,t,s){const r=mi(this.persistenceKey,e),i=new zn(e,t,s);this.setItem(r,i.hr())}$r(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Rr,t)}Or(e){const t=this.Tr.exec(e);return t?t[1]:null}Br(e,t){const s=this.Or(e);return yr.ar(s,t)}Lr(e,t){const s=this.Er.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return pr.ar(new oe(i),r,t)}Ur(e,t){const s=this.Ar.exec(e),r=Number(s[1]);return zn.ar(r,t)}br(e){return $o.ar(e)}Gr(e){return JSON.parse(e)}async qr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.jr(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Kr(e){return this.syncEngine.zr(e.targetId,e.state,e.error)}Fr(e,t){const s=t?this.gr.insert(e,t):this.gr.remove(e),r=this.Sr(this.gr),i=this.Sr(s),o=[],a=[];return i.forEach(u=>{r.has(u)||o.push(u)}),r.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.Wr(o,a).then(()=>{this.gr=s})}Vr(e){this.gr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Sr(e){let t=bo();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class ah{constructor(){this.Hr=new Ki,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,s){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ki,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ug{Yr(e){}shutdown(){}}/**
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
 */class Su{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let zs=null;function pi(){return zs===null?zs=268435456+Math.round(2147483648*Math.random()):zs++,"0x"+zs.toString(16)}/**
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
 */const cg={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class lg{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
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
 */const pe="WebChannelConnection";class hg extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,s,r,i){const o=pi(),a=this.To(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const u={};return this.Eo(u,r,i),this.Ao(e,a,u,s).then(c=>(y("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Re("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}vo(e,t,s,r,i,o){return this.Io(e,t,s,r,i)}Eo(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+gn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}To(e,t){const s=cg[e];return`${this.mo}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,s,r){const i=pi();return new Promise((o,a)=>{const u=new lf;u.setWithCredentials(!0),u.listenOnce(af.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case hi.NO_ERROR:const l=u.getResponseJson();y(pe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case hi.TIMEOUT:y(pe,`RPC '${e}' ${i} timed out`),a(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case hi.HTTP_ERROR:const h=u.getStatus();if(y(pe,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(I){const x=I.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(x)>=0?x:m.UNKNOWN}(g.status);a(new p(w,g.message))}else a(new p(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(m.UNAVAILABLE,"Connection failed."));break;default:S()}}finally{y(pe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);y(pe,`RPC '${e}' ${i} sending request:`,r),u.send(t,"POST",c,s,15)})}Ro(e,t,s){const r=pi(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=rf(),a=of(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new cf({})),this.Eo(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const l=i.join("");y(pe,`Creating RPC '${e}' stream ${r}: ${l}`,u);const h=o.createWebChannel(l,u);let d=!1,g=!1;const w=new lg({ro:x=>{g?y(pe,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(d||(y(pe,`Opening RPC '${e}' stream ${r} transport.`),h.open(),d=!0),y(pe,`RPC '${e}' stream ${r} sending:`,x),h.send(x))},oo:()=>h.close()}),I=(x,_,P)=>{x.listen(_,O=>{try{P(O)}catch(Z){setTimeout(()=>{throw Z},0)}})};return I(h,Ps.EventType.OPEN,()=>{g||y(pe,`RPC '${e}' stream ${r} transport opened.`)}),I(h,Ps.EventType.CLOSE,()=>{g||(g=!0,y(pe,`RPC '${e}' stream ${r} transport closed`),w.wo())}),I(h,Ps.EventType.ERROR,x=>{g||(g=!0,Re(pe,`RPC '${e}' stream ${r} transport errored:`,x),w.wo(new p(m.UNAVAILABLE,"The operation could not be completed")))}),I(h,Ps.EventType.MESSAGE,x=>{var _;if(!g){const P=x.data[0];b(!!P);const O=P,Z=O.error||((_=O[0])===null||_===void 0?void 0:_.error);if(Z){y(pe,`RPC '${e}' stream ${r} received error:`,Z);const ne=Z.status;let j=function(mt){const pa=ee[mt];if(pa!==void 0)return Cl(pa)}(ne),Se=Z.message;j===void 0&&(j=m.INTERNAL,Se="Unknown error status: "+ne+" with message "+Z.message),g=!0,w.wo(new p(j,Se)),h.close()}else y(pe,`RPC '${e}' stream ${r} received:`,P),w._o(P)}}),I(a,uf.STAT_EVENT,x=>{x.stat===ka.PROXY?y(pe,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===ka.NOPROXY&&y(pe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.fo()},0),w}}/**
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
 */function uh(){return typeof window<"u"?window:null}function Ys(){return typeof document<"u"?document:null}/**
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
 */function bs(n){return new Em(n,!0)}/**
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
 */class zo{constructor(e,t,s=1e3,r=1.5,i=6e4){this.ii=e,this.timerId=t,this.Po=s,this.bo=r,this.Vo=i,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const t=Math.floor(this.So+this.ko()),s=Math.max(0,Date.now()-this.Co),r=Math.max(0,t-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,r,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
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
 */class ch{constructor(e,t,s,r,i,o,a,u){this.ii=e,this.$o=s,this.Oo=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new zo(e,t)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(W(t.toString()),W("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Fo===t&&this.Zo(s,r)},s=>{e(()=>{const r=new p(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.tu(r)})})}Zo(e,t){const s=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{s(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(r=>{s(()=>this.tu(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class dg extends ch{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}eu(e,t){return this.connection.Ro("Listen",e,t)}onMessage(e){this.qo.reset();const t=xm(this.serializer,e),s=function(r){if(!("targetChange"in r))return D.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?D.min():i.readTime?Y(i.readTime):D.min()}(e);return this.listener.nu(t,s)}su(e){const t={};t.database=is(this.serializer),t.addTarget=function(r,i){let o;const a=i.target;if(o=ur(a)?{documents:Pl(r,a)}:{query:Mo(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){o.resumeToken=kl(r,i.resumeToken);const u=Bi(r,i.expectedCount);u!==null&&(o.expectedCount=u)}else if(i.snapshotVersion.compareTo(D.min())>0){o.readTime=sn(r,i.snapshotVersion.toTimestamp());const u=Bi(r,i.expectedCount);u!==null&&(o.expectedCount=u)}return o}(this.serializer,e);const s=Dm(this.serializer,e);s&&(t.labels=s),this.Wo(t)}iu(e){const t={};t.database=is(this.serializer),t.removeTarget=e,this.Wo(t)}}class fg extends ch{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const t=bm(e.writeResults,e.commitTime),s=Y(e.commitTime);return this.listener.cu(s,t)}return b(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=is(this.serializer),this.Wo(e)}uu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>os(this.serializer,s))};this.Wo(t)}}/**
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
 */class mg extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.lu=!1}fu(){if(this.lu)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.Io(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new p(m.UNKNOWN,r.toString())})}vo(e,t,s,r){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.vo(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())})}terminate(){this.lu=!0}}async function gg(n,e,t){var s;const r=E(n),{request:i,du:o}=function(l,h,d){const g=Mo(l,h),w={},I=[];let x=0;return d.forEach(_=>{const P="aggregate_"+x++;w[P]=_.alias,_.yt==="count"?I.push({alias:P,count:{}}):_.yt==="avg"?I.push({alias:P,avg:{field:Ye(_.fieldPath)}}):_.yt==="sum"&&I.push({alias:P,sum:{field:Ye(_.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:I,structuredQuery:g.structuredQuery},parent:g.parent},du:w}}(r.serializer,Te(e),t),a=i.parent;r.connection.po||delete i.parent;const u=(await r.vo("RunAggregationQuery",a,i,1)).filter(l=>!!l.result);b(u.length===1);const c=(s=u[0].result)===null||s===void 0?void 0:s.aggregateFields;return Object.keys(c).reduce((l,h)=>(l[o[h]]=c[h],l),{})}class pg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(W(t),this.mu=!1):y("OnlineStateTracker",t)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class yg{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=i,this.Pu.Yr(o=>{s.enqueueAndForget(async()=>{dt(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=E(a);u.vu.add(4),await vn(u),u.bu.set("Unknown"),u.vu.delete(4),await Ds(u)}(this))})}),this.bu=new pg(s,r)}}async function Ds(n){if(dt(n))for(const e of n.Ru)await e(!0)}async function vn(n){for(const e of n.Ru)await e(!1)}function Kr(n,e){const t=E(n);t.Au.has(e.targetId)||(t.Au.set(e.targetId,e),Ko(t)?jo(t):En(t).Ko()&&Go(t,e))}function as(n,e){const t=E(n),s=En(t);t.Au.delete(e),s.Ko()&&lh(t,e),t.Au.size===0&&(s.Ko()?s.jo():dt(t)&&t.bu.set("Unknown"))}function Go(n,e){if(n.Vu.qt(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(D.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}En(n).su(e)}function lh(n,e){n.Vu.qt(e),En(n).iu(e)}function jo(n){n.Vu=new ym({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),le:e=>n.Au.get(e)||null,ue:()=>n.datastore.serializer.databaseId}),En(n).start(),n.bu.gu()}function Ko(n){return dt(n)&&!En(n).Uo()&&n.Au.size>0}function dt(n){return E(n).vu.size===0}function hh(n){n.Vu=void 0}async function wg(n){n.Au.forEach((e,t)=>{Go(n,e)})}async function vg(n,e){hh(n),Ko(n)?(n.bu.Iu(e),jo(n)):n.bu.set("Unknown")}async function Ig(n,e,t){if(n.bu.set("Online"),e instanceof Nl&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.Au.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.Au.delete(o),s.Vu.removeTarget(o))}(n,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await wr(n,s)}else if(e instanceof Xs?n.Vu.Ht(e):e instanceof _l?n.Vu.ne(e):n.Vu.Xt(e),!t.isEqual(D.min()))try{const s=await nh(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.Vu.ce(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.Au.get(u);c&&r.Au.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach((a,u)=>{const c=r.Au.get(a);if(!c)return;r.Au.set(a,c.withResumeToken(re.EMPTY_BYTE_STRING,c.snapshotVersion)),lh(r,a);const l=new $e(c.target,a,u,c.sequenceNumber);Go(r,l)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await wr(n,s)}}async function wr(n,e,t){if(!lt(e))throw e;n.vu.add(1),await vn(n),n.bu.set("Offline"),t||(t=()=>nh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.vu.delete(1),await Ds(n)})}function dh(n,e){return e().catch(t=>wr(n,t,e))}async function In(n){const e=E(n),t=ot(e);let s=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;Eg(e);)try{const r=await ig(e.localStore,s);if(r===null){e.Eu.length===0&&t.jo();break}s=r.batchId,Tg(e,r)}catch(r){await wr(e,r)}fh(e)&&mh(e)}function Eg(n){return dt(n)&&n.Eu.length<10}function Tg(n,e){n.Eu.push(e);const t=ot(n);t.Ko()&&t.ou&&t.uu(e.mutations)}function fh(n){return dt(n)&&!ot(n).Uo()&&n.Eu.length>0}function mh(n){ot(n).start()}async function Sg(n){ot(n).hu()}async function xg(n){const e=ot(n);for(const t of n.Eu)e.uu(t.mutations)}async function bg(n,e,t){const s=n.Eu.shift(),r=Ao.from(s,e,t);await dh(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await In(n)}async function Dg(n,e){e&&ot(n).ou&&await async function(t,s){if(r=s.code,Dl(r)&&r!==m.ABORTED){const i=t.Eu.shift();ot(t).Qo(),await dh(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await In(t)}var r}(n,e),fh(n)&&mh(n)}async function xu(n,e){const t=E(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=dt(t);t.vu.add(3),await vn(t),s&&t.bu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.vu.delete(3),await Ds(t)}async function Qi(n,e){const t=E(n);e?(t.vu.delete(2),await Ds(t)):e||(t.vu.add(2),await vn(t),t.bu.set("Unknown"))}function En(n){return n.Su||(n.Su=function(e,t,s){const r=E(e);return r.fu(),new dg(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{uo:wg.bind(null,n),ao:vg.bind(null,n),nu:Ig.bind(null,n)}),n.Ru.push(async e=>{e?(n.Su.Qo(),Ko(n)?jo(n):n.bu.set("Unknown")):(await n.Su.stop(),hh(n))})),n.Su}function ot(n){return n.Du||(n.Du=function(e,t,s){const r=E(e);return r.fu(),new fg(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{uo:Sg.bind(null,n),ao:Dg.bind(null,n),au:xg.bind(null,n),cu:bg.bind(null,n)}),n.Ru.push(async e=>{e?(n.Du.Qo(),await In(n)):(await n.Du.stop(),n.Eu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.Eu.length} pending writes`),n.Eu=[]))})),n.Du}/**
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
 */class Qo{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new se,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Qo(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tn(n,e){if(W("AsyncQueue",`${e}: ${n}`),lt(n))return new p(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Wt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=On(),this.sortedSet=new q(this.comparator)}static emptySet(e){return new Wt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Wt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Wt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class bu{constructor(){this.Cu=new q(v.comparator)}track(e){const t=e.doc.key,s=this.Cu.get(t);s?e.type!==0&&s.type===3?this.Cu=this.Cu.insert(t,e):e.type===3&&s.type!==1?this.Cu=this.Cu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Cu=this.Cu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Cu=this.Cu.remove(t):e.type===1&&s.type===2?this.Cu=this.Cu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Cu=this.Cu.insert(t,{type:2,doc:e.doc}):S():this.Cu=this.Cu.insert(t,e)}xu(){const e=[];return this.Cu.inorderTraversal((t,s)=>{e.push(s)}),e}}class an{constructor(e,t,s,r,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new an(e,t,Wt.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Is(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Cg{constructor(){this.Nu=void 0,this.listeners=[]}}class Ag{constructor(){this.queries=new Ke(e=>hl(e),Is),this.onlineState="Unknown",this.ku=new Set}}async function Ho(n,e){const t=E(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new Cg),r)try{i.Nu=await t.onListen(s)}catch(o){const a=Tn(o,`Initialization of query '${qi(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.Mu(t.onlineState),i.Nu&&e.$u(i.Nu)&&Xo(t)}async function Wo(n,e){const t=E(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function _g(n,e){const t=E(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.$u(r)&&(s=!0);o.Nu=r}}s&&Xo(t)}function Ng(n,e,t){const s=E(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function Xo(n){n.ku.forEach(e=>{e.next()})}class Yo{constructor(e,t,s){this.query=e,this.Ou=t,this.Fu=!1,this.Bu=null,this.onlineState="Unknown",this.options=s||{}}$u(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new an(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Lu(e)&&(this.Ou.next(e),t=!0):this.qu(e,this.onlineState)&&(this.Uu(e),t=!0),this.Bu=e,t}onError(e){this.Ou.error(e)}Mu(e){this.onlineState=e;let t=!1;return this.Bu&&!this.Fu&&this.qu(this.Bu,e)&&(this.Uu(this.Bu),t=!0),t}qu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ku||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Lu(e){if(e.docChanges.length>0)return!0;const t=this.Bu&&this.Bu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Uu(e){e=an.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Ou.next(e)}}/**
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
 */class kg{constructor(e,t){this.Gu=e,this.byteLength=t}Qu(){return"metadata"in this.Gu}}/**
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
 */class Du{constructor(e){this.serializer=e}rr(e){return Ve(this.serializer,e)}ur(e){return e.metadata.exists?Ol(this.serializer,e.document,!1):U.newNoDocument(this.rr(e.metadata.name),this.cr(e.metadata.readTime))}cr(e){return Y(e)}}class Rg{constructor(e,t,s){this.ju=e,this.localStore=t,this.serializer=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gh(e)}zu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Gu.namedQuery)this.queries.push(e.Gu.namedQuery);else if(e.Gu.documentMetadata){this.documents.push({metadata:e.Gu.documentMetadata}),e.Gu.documentMetadata.exists||++t;const s=F.fromString(e.Gu.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.Gu.document&&(this.documents[this.documents.length-1].document=e.Gu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Wu(e){const t=new Map,s=new Du(this.serializer);for(const r of e)if(r.metadata.queries){const i=s.rr(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||N()).add(i);t.set(o,a)}}return t}async complete(){const e=await og(this.localStore,new Du(this.serializer),this.documents,this.ju.id),t=this.Wu(this.documents);for(const s of this.queries)await ag(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Hu:this.collectionGroups,Ju:e}}}function gh(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class ph{constructor(e){this.key=e}}class yh{constructor(e){this.key=e}}class wh{constructor(e,t){this.query=e,this.Yu=t,this.Xu=null,this.hasCachedResults=!1,this.current=!1,this.Zu=N(),this.mutatedKeys=N(),this.tc=fl(e),this.ec=new Wt(this.tc)}get nc(){return this.Yu}sc(e,t){const s=t?t.ic:new bu,r=t?t.ec:this.ec;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=Es(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),I=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;d&&g?d.data.isEqual(g.data)?w!==I&&(s.track({type:3,doc:g}),x=!0):this.rc(d,g)||(s.track({type:2,doc:g}),x=!0,(u&&this.tc(g,u)>0||c&&this.tc(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),x=!0):d&&!g&&(s.track({type:1,doc:d}),x=!0,(u||c)&&(a=!0)),x&&(g?(o=o.add(g),i=I?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{ec:o,ic:s,zi:a,mutatedKeys:i}}rc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.ec;this.ec=e.ec,this.mutatedKeys=e.mutatedKeys;const i=e.ic.xu();i.sort((c,l)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return S()}};return g(h)-g(d)}(c.type,l.type)||this.tc(c.doc,l.doc)),this.oc(s);const o=t?this.uc():[],a=this.Zu.size===0&&this.current?1:0,u=a!==this.Xu;return this.Xu=a,i.length!==0||u?{snapshot:new an(this.query,e.ec,r,i,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),cc:o}:{cc:o}}Mu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ec:this.ec,ic:new bu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{cc:[]}}ac(e){return!this.Yu.has(e)&&!!this.ec.has(e)&&!this.ec.get(e).hasLocalMutations}oc(e){e&&(e.addedDocuments.forEach(t=>this.Yu=this.Yu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Yu=this.Yu.delete(t)),this.current=e.current)}uc(){if(!this.current)return[];const e=this.Zu;this.Zu=N(),this.ec.forEach(s=>{this.ac(s.key)&&(this.Zu=this.Zu.add(s.key))});const t=[];return e.forEach(s=>{this.Zu.has(s)||t.push(new yh(s))}),this.Zu.forEach(s=>{e.has(s)||t.push(new ph(s))}),t}hc(e){this.Yu=e.ir,this.Zu=N();const t=this.sc(e.documents);return this.applyChanges(t,!0)}lc(){return an.fromInitialDocuments(this.query,this.ec,this.mutatedKeys,this.Xu===0,this.hasCachedResults)}}class Mg{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Fg{constructor(e){this.key=e,this.fc=!1}}class Og{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Ke(a=>hl(a),Is),this._c=new Map,this.mc=new Set,this.gc=new q(v.comparator),this.yc=new Map,this.Ic=new Lo,this.Tc={},this.Ec=new Map,this.Ac=Mt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Pg(n,e){const t=na(n);let s,r;const i=t.wc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.lc();else{const o=await rn(t.localStore,Te(e)),a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Jo(t,e,s,a==="current",o.resumeToken),t.isPrimaryClient&&Kr(t.remoteStore,o)}return r}async function Jo(n,e,t,s,r){n.Rc=(h,d,g)=>async function(w,I,x,_){let P=I.view.sc(x);P.zi&&(P=await gr(w.localStore,I.query,!1).then(({documents:ne})=>I.view.sc(ne,P)));const O=_&&_.targetChanges.get(I.targetId),Z=I.view.applyChanges(P,w.isPrimaryClient,O);return Hi(w,I.targetId,Z.cc),Z.snapshot}(n,h,d,g);const i=await gr(n.localStore,e,!0),o=new wh(e,i.ir),a=o.sc(i.documents),u=xs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,u);Hi(n,t,c.cc);const l=new Mg(e,t,o);return n.wc.set(e,l),n._c.has(t)?n._c.get(t).push(e):n._c.set(t,[e]),c.snapshot}async function Lg(n,e){const t=E(n),s=t.wc.get(e),r=t._c.get(s.targetId);if(r.length>1)return t._c.set(s.targetId,r.filter(i=>!Is(i,e))),void t.wc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await on(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),as(t.remoteStore,s.targetId),un(t,s.targetId)}).catch(ct)):(un(t,s.targetId),await on(t.localStore,s.targetId,!0))}async function Vg(n,e,t){const s=sa(n);try{const r=await function(i,o){const a=E(i),u=K.now(),c=o.reduce((d,g)=>d.add(g.key),N());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=De(),w=N();return a.Zi.getEntries(d,c).next(I=>{g=I,g.forEach((x,_)=>{_.isValidDocument()||(w=w.add(x))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(I=>{l=I;const x=[];for(const _ of o){const P=fm(_,l.get(_.key).overlayedDocument);P!=null&&x.push(new Qe(_.key,P,nl(P.value.mapValue),G.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,x,o)}).next(I=>{h=I;const x=I.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,I.batchId,x)})}).then(()=>({batchId:h.batchId,changes:gl(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.Tc[i.currentUser.toKey()];u||(u=new q(C)),u=u.insert(o,a),i.Tc[i.currentUser.toKey()]=u}(s,r.batchId,t),await He(s,r.changes),await In(s.remoteStore)}catch(r){const i=Tn(r,"Failed to persist write");t.reject(i)}}async function vh(n,e){const t=E(n);try{const s=await rg(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.yc.get(i);o&&(b(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.fc=!0:r.modifiedDocuments.size>0?b(o.fc):r.removedDocuments.size>0&&(b(o.fc),o.fc=!1))}),await He(t,s,e)}catch(s){await ct(s)}}function Cu(n,e,t){const s=E(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.wc.forEach((i,o)=>{const a=o.view.Mu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=E(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Mu(o)&&(u=!0)}),u&&Xo(a)}(s.eventManager,e),r.length&&s.dc.nu(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function qg(n,e,t){const s=E(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.yc.get(e),i=r&&r.key;if(i){let o=new q(v.comparator);o=o.insert(i,U.newNoDocument(i,D.min()));const a=N().add(i),u=new Ss(D.min(),new Map,new q(C),o,a);await vh(s,u),s.gc=s.gc.remove(i),s.yc.delete(e),ta(s)}else await on(s.localStore,e,!1).then(()=>un(s,e,t)).catch(ct)}async function Bg(n,e){const t=E(n),s=e.batch.batchId;try{const r=await sg(t.localStore,e);ea(t,s,null),Zo(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await He(t,r)}catch(r){await ct(r)}}async function Ug(n,e,t){const s=E(n);try{const r=await function(i,o){const a=E(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(b(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,e);ea(s,e,t),Zo(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await He(s,r)}catch(r){await ct(r)}}async function $g(n,e){const t=E(n);dt(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=E(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.Ec.get(s)||[];r.push(e),t.Ec.set(s,r)}catch(s){const r=Tn(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function Zo(n,e){(n.Ec.get(e)||[]).forEach(t=>{t.resolve()}),n.Ec.delete(e)}function ea(n,e,t){const s=E(n);let r=s.Tc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.Tc[s.currentUser.toKey()]=r}}function un(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n._c.get(e))n.wc.delete(s),t&&n.dc.Pc(s,t);n._c.delete(e),n.isPrimaryClient&&n.Ic.Is(e).forEach(s=>{n.Ic.containsKey(s)||Ih(n,s)})}function Ih(n,e){n.mc.delete(e.path.canonicalString());const t=n.gc.get(e);t!==null&&(as(n.remoteStore,t),n.gc=n.gc.remove(e),n.yc.delete(t),ta(n))}function Hi(n,e,t){for(const s of t)s instanceof ph?(n.Ic.addReference(s.key,e),zg(n,s)):s instanceof yh?(y("SyncEngine","Document no longer in limbo: "+s.key),n.Ic.removeReference(s.key,e),n.Ic.containsKey(s.key)||Ih(n,s.key)):S()}function zg(n,e){const t=e.key,s=t.path.canonicalString();n.gc.get(t)||n.mc.has(s)||(y("SyncEngine","New document in limbo: "+t),n.mc.add(s),ta(n))}function ta(n){for(;n.mc.size>0&&n.gc.size<n.maxConcurrentLimboResolutions;){const e=n.mc.values().next().value;n.mc.delete(e);const t=new v(F.fromString(e)),s=n.Ac.next();n.yc.set(s,new Fg(t)),n.gc=n.gc.insert(t,s),Kr(n.remoteStore,new $e(Te(pn(t.path)),s,"TargetPurposeLimboResolution",xe.ct))}}async function He(n,e,t){const s=E(n),r=[],i=[],o=[];s.wc.isEmpty()||(s.wc.forEach((a,u)=>{o.push(s.Rc(u,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const l=Uo.Li(u.targetId,c);i.push(l)}}))}),await Promise.all(o),s.dc.nu(r),await async function(a,u){const c=E(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(u,h=>f.forEach(h.Fi,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Bi,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!lt(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Ji.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);c.Ji=c.Ji.insert(h,w)}}}(s.localStore,i))}async function Gg(n,e){const t=E(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await th(t.localStore,e);t.currentUser=e,function(r,i){r.Ec.forEach(o=>{o.forEach(a=>{a.reject(new p(m.CANCELLED,i))})}),r.Ec.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await He(t,s.er)}}function jg(n,e){const t=E(n),s=t.yc.get(e);if(s&&s.fc)return N().add(s.key);{let r=N();const i=t._c.get(e);if(!i)return r;for(const o of i){const a=t.wc.get(o);r=r.unionWith(a.view.nc)}return r}}async function Kg(n,e){const t=E(n),s=await gr(t.localStore,e.query,!0),r=e.view.hc(s);return t.isPrimaryClient&&Hi(t,e.targetId,r.cc),r}async function Qg(n,e){const t=E(n);return ih(t.localStore,e).then(s=>He(t,s))}async function Hg(n,e,t,s){const r=E(n),i=await function(o,a){const u=E(o),c=E(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",l=>c.Sn(l,a).next(h=>h?u.localDocuments.getDocuments(l,h):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await In(r.remoteStore):t==="acknowledged"||t==="rejected"?(ea(r,e,s||null),Zo(r,e),function(o,a){E(E(o).mutationQueue).Cn(a)}(r.localStore,e)):S(),await He(r,i)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Wg(n,e){const t=E(n);if(na(t),sa(t),e===!0&&t.vc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await Au(t,s.toArray());t.vc=!0,await Qi(t.remoteStore,!0);for(const i of r)Kr(t.remoteStore,i)}else if(e===!1&&t.vc!==!1){const s=[];let r=Promise.resolve();t._c.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(un(t,o),on(t.localStore,o,!0))),as(t.remoteStore,o)}),await r,await Au(t,s),function(i){const o=E(i);o.yc.forEach((a,u)=>{as(o.remoteStore,u)}),o.Ic.Ts(),o.yc=new Map,o.gc=new q(v.comparator)}(t),t.vc=!1,await Qi(t.remoteStore,!1)}}async function Au(n,e,t){const s=E(n),r=[],i=[];for(const o of e){let a;const u=s._c.get(o);if(u&&u.length!==0){a=await rn(s.localStore,Te(u[0]));for(const c of u){const l=s.wc.get(c),h=await Kg(s,l);h.snapshot&&i.push(h.snapshot)}}else{const c=await rh(s.localStore,o);a=await rn(s.localStore,c),await Jo(s,Eh(c),o,!1,a.resumeToken)}r.push(a)}return s.dc.nu(i),r}function Eh(n){return ll(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Xg(n){const e=E(n);return E(E(e.localStore).persistence).$i()}async function Yg(n,e,t,s){const r=E(n);if(r.vc)return void y("SyncEngine","Ignoring unexpected query state notification.");const i=r._c.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await ih(r.localStore,dl(i[0])),a=Ss.createSynthesizedRemoteEventForCurrentChange(e,t==="current",re.EMPTY_BYTE_STRING);await He(r,o,a);break}case"rejected":await on(r.localStore,e,!0),un(r,e,s);break;default:S()}}async function Jg(n,e,t){const s=na(n);if(s.vc){for(const r of e){if(s._c.has(r)){y("SyncEngine","Adding an already active target "+r);continue}const i=await rh(s.localStore,r),o=await rn(s.localStore,i);await Jo(s,Eh(i),o.targetId,!1,o.resumeToken),Kr(s.remoteStore,o)}for(const r of t)s._c.has(r)&&await on(s.localStore,r,!1).then(()=>{as(s.remoteStore,r),un(s,r)}).catch(ct)}}function na(n){const e=E(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=qg.bind(null,e),e.dc.nu=_g.bind(null,e.eventManager),e.dc.Pc=Ng.bind(null,e.eventManager),e}function sa(n){const e=E(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ug.bind(null,e),e}function Zg(n,e,t){const s=E(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const g=E(h),w=Y(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",I=>g.qs.getBundleMetadata(I,d.id)).then(I=>!!I&&I.createTime.compareTo(w)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(gh(a));const u=new Rg(a,r.localStore,i.serializer);let c=await i.bc();for(;c;){const h=await u.zu(c);h&&o._updateProgress(h),c=await i.bc()}const l=await u.complete();return await He(r,l.Ju,void 0),await function(h,d){const g=E(h);return g.persistence.runTransaction("Save bundle","readwrite",w=>g.qs.saveBundleMetadata(w,d))}(r.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Hu)}catch(a){return Re("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class cn{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=bs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return eh(this.persistence,new Zl,e.initialUser,this.serializer)}createPersistence(e){return new Vo(jr.zs,this.serializer)}createSharedClientState(e){return new ah}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ep extends cn{constructor(e){super(),this.cacheSizeBytes=e}createGarbageCollectionScheduler(e,t){b(this.persistence.referenceDelegate instanceof mr);const s=this.persistence.referenceDelegate.garbageCollector;return new Hl(s,e.asyncQueue,t)}createPersistence(e){const t=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new Vo(s=>mr.zs(s,t),this.serializer)}}class ra extends cn{constructor(e,t,s){super(),this.Vc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Vc.initialize(this,e),await sa(this.Vc.syncEngine),await In(this.Vc.remoteStore),await this.persistence.Ii(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return eh(this.persistence,new Zl,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new Hl(s,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const s=new Df(t,this.persistence);return new bf(e.asyncQueue,s)}createPersistence(e){const t=Bo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?ye.withCacheSize(this.cacheSizeBytes):ye.DEFAULT;return new qo(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,uh(),Ys(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new ah}}class Th extends ra{constructor(e,t){super(e,t,!1),this.Vc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Vc.syncEngine;this.sharedClientState instanceof gi&&(this.sharedClientState.syncEngine={jr:Hg.bind(null,t),zr:Yg.bind(null,t),Wr:Jg.bind(null,t),$i:Xg.bind(null,t),Qr:Qg.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ii(async s=>{await Wg(this.Vc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=uh();if(!gi.D(t))throw new p(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=Bo(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new gi(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class Sn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Cu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Gg.bind(null,this.syncEngine),await Qi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Ag}createDatastore(e){const t=bs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new hg(r));var r;return function(i,o,a,u){return new mg(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>Cu(this.syncEngine,a,0),o=Su.D()?new Su:new ug,new yg(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,u,c){const l=new Og(s,r,i,o,a,u);return c&&(l.vc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=E(e);y("RemoteStore","RemoteStore shutting down."),t.vu.add(5),await vn(t),t.Pu.shutdown(),t.bu.set("Unknown")}(this.remoteStore)}}/**
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
 */function _u(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class Qr{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Sc(this.observer.next,e)}error(e){this.observer.error?this.Sc(this.observer.error,e):W("Uncaught Error in snapshot listener:",e.toString())}Dc(){this.muted=!0}Sc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class tp{constructor(e,t){this.Cc=e,this.serializer=t,this.metadata=new se,this.buffer=new Uint8Array,this.xc=new TextDecoder("utf-8"),this.Nc().then(s=>{s&&s.Qu()?this.metadata.resolve(s.Gu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.Gu)}`))},s=>this.metadata.reject(s))}close(){return this.Cc.cancel()}async getMetadata(){return this.metadata.promise}async bc(){return await this.getMetadata(),this.Nc()}async Nc(){const e=await this.kc();if(e===null)return null;const t=this.xc.decode(e),s=Number(t);isNaN(s)&&this.Mc(`length string (${t}) is not valid number`);const r=await this.$c(s);return new kg(JSON.parse(r),e.length+s)}Oc(){return this.buffer.findIndex(e=>e===123)}async kc(){for(;this.Oc()<0&&!await this.Fc(););if(this.buffer.length===0)return null;const e=this.Oc();e<0&&this.Mc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async $c(e){for(;this.buffer.length<e;)await this.Fc()&&this.Mc("Reached the end of bundle when more is expected.");const t=this.xc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Mc(e){throw this.Cc.cancel(),new Error(`Invalid bundle format: ${e}`)}async Fc(){const e=await this.Cc.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class np{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=E(s),o=is(i.serializer)+"/documents",a={documents:r.map(h=>rs(i.serializer,h))},u=await i.vo("BatchGetDocuments",o,a,r.length),c=new Map;u.forEach(h=>{const d=Sm(i.serializer,h);c.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=c.get(h.toString());b(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new wn(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new Do(r,this.precondition(r)))}),await async function(t,s){const r=E(t),i=is(r.serializer)+"/documents",o={writes:s.map(a=>os(r.serializer,a))};await r.Io("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw S();t=D.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new p(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(D.min())?G.exists(!1):G.updateTime(t):G.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(D.min()))throw new p(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return G.updateTime(t)}return G.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class sp{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.Bc=s.maxAttempts,this.qo=new zo(this.asyncQueue,"transaction_retry")}run(){this.Bc-=1,this.Lc()}Lc(){this.qo.No(async()=>{const e=new np(this.datastore),t=this.qc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Uc(r)}))}).catch(s=>{this.Uc(s)})})}qc(e){try{const t=this.updateFunction(e);return!ws(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Uc(e){this.Bc>0&&this.Kc(e)?(this.Bc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Lc(),Promise.resolve()))):this.deferred.reject(e)}Kc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!Dl(t)}return!1}}/**
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
 */class rp{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=oe.UNAUTHENTICATED,this.clientId=$c.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new se;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Tn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Js(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await th(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Wi(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ia(n);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>xu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>xu(e.remoteStore,i)),n._onlineComponents=e}function Sh(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function ia(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Js(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Sh(t))throw t;Re("Error using user provided cache. Falling back to memory cache: "+t),await Js(n,new cn)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Js(n,new cn);return n._offlineComponents}async function Hr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await Wi(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await Wi(n,new Sn))),n._onlineComponents}function xh(n){return ia(n).then(e=>e.persistence)}function Wr(n){return ia(n).then(e=>e.localStore)}function bh(n){return Hr(n).then(e=>e.remoteStore)}function oa(n){return Hr(n).then(e=>e.syncEngine)}function Dh(n){return Hr(n).then(e=>e.datastore)}async function ln(n){const e=await Hr(n),t=e.eventManager;return t.onListen=Pg.bind(null,e.syncEngine),t.onUnlisten=Lg.bind(null,e.syncEngine),t}function ip(n){return n.asyncQueue.enqueue(async()=>{const e=await xh(n),t=await bh(n);return e.setNetworkEnabled(!0),function(s){const r=E(s);return r.vu.delete(0),Ds(r)}(t)})}function op(n){return n.asyncQueue.enqueue(async()=>{const e=await xh(n),t=await bh(n);return e.setNetworkEnabled(!1),async function(s){const r=E(s);r.vu.add(0),await vn(r),r.bu.set("Offline")}(t)})}function ap(n,e){const t=new se;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,u){const c=E(a);return c.persistence.runTransaction("read document","readonly",l=>c.localDocuments.getDocument(l,u))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new p(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Tn(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await Wr(n),e,t)),t.promise}function Ch(n,e,t={}){const s=new se;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new Qr({next:h=>{i.enqueueAndForget(()=>Wo(r,l));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Yo(pn(o.path),c,{includeMetadataChanges:!0,Ku:!0});return Ho(r,l)}(await ln(n),n.asyncQueue,e,t,s)),s.promise}function up(n,e){const t=new se;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await gr(s,r,!0),a=new wh(r,o.ir),u=a.sc(o.documents),c=a.applyChanges(u,!1);i.resolve(c.snapshot)}catch(o){const a=Tn(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await Wr(n),e,t)),t.promise}function Ah(n,e,t={}){const s=new se;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new Qr({next:h=>{i.enqueueAndForget(()=>Wo(r,l)),h.fromCache&&a.source==="server"?u.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Yo(o,c,{includeMetadataChanges:!0,Ku:!0});return Ho(r,l)}(await ln(n),n.asyncQueue,e,t,s)),s.promise}function cp(n,e){const t=new Qr(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){E(s).ku.add(r),r.next()}(await ln(n),t)),()=>{t.Dc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){E(s).ku.delete(r)}(await ln(n),t))}}function lp(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?Al().encode(i):i,function(u,c){return new tp(u,c)}(function(u,c){if(u instanceof Uint8Array)return _u(u,c);if(u instanceof ArrayBuffer)return _u(new Uint8Array(u),c);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,bs(e));n.asyncQueue.enqueueAndForget(async()=>{Zg(await oa(n),r,s)})}function hp(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=E(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.qs.getNamedQuery(i,s))}(await Wr(n),e))}function dp(n,e){return n.asyncQueue.enqueue(async()=>async function(t,s){const r=E(t),i=r.indexManager,o=[];return r.persistence.runTransaction("Configure indexes","readwrite",a=>i.getFieldIndexes(a).next(u=>function(c,l,h,d,g){c=[...c],l=[...l],c.sort(h),l.sort(h);const w=c.length,I=l.length;let x=0,_=0;for(;x<I&&_<w;){const P=h(c[_],l[x]);P<0?g(c[_++]):P>0?d(l[x++]):(x++,_++)}for(;x<I;)d(l[x++]);for(;_<w;)g(c[_++])}(u,s,Ef,c=>{o.push(i.addFieldIndex(a,c))},c=>{o.push(i.deleteFieldIndex(a,c))})).next(()=>f.waitFor(o)))}(await Wr(n),e))}/**
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
 */function _h(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Nu=new Map;/**
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
 */function aa(n,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function fp(n,e,t,s){if(e===!0&&s===!0)throw new p(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ku(n){if(!v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Ru(n){if(v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":S()}function R(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xr(n);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Nh(n,e){if(e<=0)throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Mu{constructor(e){var t,s;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_h((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new p(m.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,s=e.experimentalLongPollingOptions,t.timeoutSeconds===s.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,s}}class Cs{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Mu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Mu(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new ff;switch(t.type){case"firstParty":return new yf(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Nu.get(e);t&&(y("ComponentProvider","Removing Datastore"),Nu.delete(e),t.terminate())}(this),Promise.resolve()}}function mp(n,e,t,s={}){var r;const i=(n=R(n,Cs))._getSettings(),o=`${e}:${t}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Re("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),s.mockUserToken){let a,u;if(typeof s.mockUserToken=="string")a=s.mockUserToken,u=oe.MOCK_USER;else{a=Xh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new oe(c)}n._authCredentials=new mf(new Bc(a,u))}}/**
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
 */class J{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qe(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new J(this.firestore,e,this._key)}}class ge{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ge(this.firestore,e,this._query)}}class qe extends ge{constructor(e,t,s){super(e,t,pn(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new J(this.firestore,null,new v(e))}withConverter(e){return new qe(this.firestore,e,this._path)}}function Kp(n,e,...t){if(n=ae(n),aa("collection","path",e),n instanceof Cs){const s=F.fromString(e,...t);return Ru(s),new qe(n,null,s)}{if(!(n instanceof J||n instanceof qe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(F.fromString(e,...t));return Ru(s),new qe(n.firestore,null,s)}}function Qp(n,e){if(n=R(n,Cs),aa("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ge(n,null,function(t){return new je(F.emptyPath(),t)}(e))}function gp(n,e,...t){if(n=ae(n),arguments.length===1&&(e=$c.A()),aa("doc","path",e),n instanceof Cs){const s=F.fromString(e,...t);return ku(s),new J(n,null,new v(s))}{if(!(n instanceof J||n instanceof qe))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(F.fromString(e,...t));return ku(s),new J(n.firestore,n instanceof qe?n.converter:null,new v(s))}}function Hp(n,e){return n=ae(n),e=ae(e),(n instanceof J||n instanceof qe)&&(e instanceof J||e instanceof qe)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function kh(n,e){return n=ae(n),e=ae(e),n instanceof ge&&e instanceof ge&&n.firestore===e.firestore&&Is(n._query,e._query)&&n.converter===e.converter}/**
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
 */class pp{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new zo(this,"async_queue_retry"),this.Xc=()=>{const t=Ys();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.qo.Mo()};const e=Ys();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const t=Ys();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const t=new se;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!lt(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const t=this.Gc.then(()=>(this.Hc=!0,e().catch(s=>{this.Wc=s,this.Hc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw W("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Hc=!1,s))));return this.Gc=t,t}enqueueAfterDelay(e,t,s){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);const r=Qo.createAndSchedule(this,e,t,s,i=>this.na(i));return this.zc.push(r),r}Zc(){this.Wc&&S()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.zc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const t=this.zc.indexOf(e);this.zc.splice(t,1)}}function Xi(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class yp{constructor(){this._progressObserver={},this._taskCompletionResolver=new se,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const Wp=-1;class z extends Cs{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new pp,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rh(this),this._firestoreClient.terminate()}}function Xp(n,e,t){t||(t="(default)");const s=Vu(n,"firestore");if(s.isInitialized(t)){const r=s.getImmediate({identifier:t}),i=s.getOptions(t);if(Lu(i,e))return r;throw new p(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new p(m.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function Yp(n,e){const t=typeof n=="object"?n:Yh(),s=typeof n=="string"?n:e||"(default)",r=Vu(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Jh("firestore");i&&mp(r,...i)}return r}function te(n){return n._firestoreClient||Rh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Rh(n){var e,t,s;const r=n._freezeSettings(),i=function(o,a,u,c){return new Kf(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,_h(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new rp(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=r.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}function Jp(n,e){Fh(n=R(n,z));const t=te(n);if(t._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");Re("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const s=n._freezeSettings(),r=new Sn;return Mh(t,r,new ra(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Zp(n){Fh(n=R(n,z));const e=te(n);if(e._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");Re("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),s=new Sn;return Mh(e,s,new Th(s,t.cacheSizeBytes))}function Mh(n,e,t){const s=new se;return n.asyncQueue.enqueue(async()=>{try{await Js(n,t),await Wi(n,e),s.resolve()}catch(r){const i=r;if(!Sh(i))throw i;Re("Error enabling indexeddb cache. Falling back to memory cache: "+i),s.reject(i)}}).then(()=>s.promise)}function ey(n){if(n._initialized&&!n._terminated)throw new p(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new se;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ne.D())return Promise.resolve();const s=t+"main";await Ne.delete(s)}(Bo(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function ty(n){return function(e){const t=new se;return e.asyncQueue.enqueueAndForget(async()=>$g(await oa(e),t)),t.promise}(te(n=R(n,z)))}function ny(n){return ip(te(n=R(n,z)))}function sy(n){return op(te(n=R(n,z)))}function ry(n){return Zh(n.app,"firestore",n._databaseId.database),n._delete()}function iy(n,e){const t=te(n=R(n,z)),s=new yp;return lp(t,n._databaseId,e,s),s}function oy(n,e){return hp(te(n=R(n,z)),e).then(t=>t?new ge(n,null,t.query):null)}function Fh(n){if(n._initialized||n._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class us{constructor(e="count",t){this._aggregateType=e,this._internalFieldPath=t,this.type="AggregateField"}}class wp{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(re.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(re.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Pt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new X(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function ay(){return new Pt("__name__")}/**
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
 */class Lt{constructor(e){this._methodName=e}}/**
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
 */class ua{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return C(this._lat,e._lat)||C(this._long,e._long)}}/**
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
 */const vp=/^__.*__$/;class Ip{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Qe(e,this.data,this.fieldMask,t,this.fieldTransforms):new yn(e,this.data,t,this.fieldTransforms)}}class Oh{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Qe(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Ph(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw S()}}class Yr{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ua(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Yr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:s,la:!1});return r.fa(e),r}da(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.aa({path:s,la:!1});return r.ua(),r}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return vr(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Ph(this.ca)&&vp.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class Ep{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||bs(e)}ya(e,t,s,r=!1){return new Yr({ca:e,methodName:t,ga:s,path:X.emptyPath(),la:!1,ma:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vt(n){const e=n._freezeSettings(),t=bs(n._databaseId);return new Ep(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Jr(n,e,t,s,r,i={}){const o=n.ya(i.merge||i.mergeFields?2:0,e,t,r);da("Data must be an object, but it was:",o,s);const a=qh(s,o);let u,c;if(i.merge)u=new be(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=cs(e,h,t);if(!o.contains(d))throw new p(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Uh(l,d)||l.push(d)}u=new be(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Ip(new fe(a),u,c)}class As extends Lt{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof As}}function Lh(n,e,t){return new Yr({ca:3,ga:e.settings.ga,methodName:n._methodName,la:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ca extends Lt{_toFieldTransform(e){return new Ts(e.path,new tn)}isEqual(e){return e instanceof ca}}class Tp extends Lt{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Lh(this,e,!0),s=this.pa.map(i=>qt(i,t)),r=new _t(s);return new Ts(e.path,r)}isEqual(e){return this===e}}class Sp extends Lt{constructor(e,t){super(e),this.pa=t}_toFieldTransform(e){const t=Lh(this,e,!0),s=this.pa.map(i=>qt(i,t)),r=new Nt(s);return new Ts(e.path,r)}isEqual(e){return this===e}}class xp extends Lt{constructor(e,t){super(e),this.Ia=t}_toFieldTransform(e){const t=new nn(e.serializer,vl(e.serializer,this.Ia));return new Ts(e.path,t)}isEqual(e){return this===e}}function la(n,e,t,s){const r=n.ya(1,e,t);da("Data must be an object, but it was:",r,s);const i=[],o=fe.empty();ht(s,(u,c)=>{const l=Zr(e,u,t);c=ae(c);const h=r.da(l);if(c instanceof As)i.push(l);else{const d=qt(c,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new be(i);return new Oh(o,a,r.fieldTransforms)}function ha(n,e,t,s,r,i){const o=n.ya(1,e,t),a=[cs(e,s,t)],u=[r];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(cs(e,i[d])),u.push(i[d+1]);const c=[],l=fe.empty();for(let d=a.length-1;d>=0;--d)if(!Uh(c,a[d])){const g=a[d];let w=u[d];w=ae(w);const I=o.da(g);if(w instanceof As)c.push(g);else{const x=qt(w,I);x!=null&&(c.push(g),l.set(g,x))}}const h=new be(c);return new Oh(l,h,o.fieldTransforms)}function Vh(n,e,t,s=!1){return qt(t,n.ya(s?4:3,e))}function qt(n,e){if(Bh(n=ae(n)))return da("Unsupported field value:",e,n),qh(n,e);if(n instanceof Lt)return function(t,s){if(!Ph(s.ca))throw s._a(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s._a(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=qt(o,s.wa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=ae(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return vl(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=K.fromDate(t);return{timestampValue:sn(s.serializer,r)}}if(t instanceof K){const r=new K(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:sn(s.serializer,r)}}if(t instanceof ua)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ft)return{bytesValue:kl(s.serializer,t._byteString)};if(t instanceof J){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s._a(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Ro(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s._a(`Unsupported field value: ${Xr(t)}`)}(n,e)}function qh(n,e){const t={};return Zc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ht(n,(s,r)=>{const i=qt(r,e.ha(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Bh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof K||n instanceof ua||n instanceof Ft||n instanceof J||n instanceof Lt)}function da(n,e,t){if(!Bh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Xr(t);throw s==="an object"?e._a(n+" a custom object"):e._a(n+" "+s)}}function cs(n,e,t){if((e=ae(e))instanceof Pt)return e._internalPath;if(typeof e=="string")return Zr(n,e);throw vr("Field path arguments must be of type string or ",n,!1,void 0,t)}const bp=new RegExp("[~\\*/\\[\\]]");function Zr(n,e,t){if(e.search(bp)>=0)throw vr(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Pt(...e.split("."))._internalPath}catch{throw vr(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vr(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new p(m.INVALID_ARGUMENT,a+n+u)}function Uh(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class ls{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new J(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Dp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ei("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Dp extends ls{data(){return super.data()}}function ei(n,e){return typeof e=="string"?Zr(n,e):e instanceof Pt?e._internalPath:e._delegate._internalPath}/**
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
 */function $h(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fa{}class _s extends fa{}function uy(n,e,...t){let s=[];e instanceof fa&&s.push(e),s=s.concat(t),function(r){const i=r.filter(a=>a instanceof xn).length,o=r.filter(a=>a instanceof Ns).length;if(i>1||i>0&&o>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Ns extends _s{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Ns(e,t,s)}_apply(e){const t=this._parse(e);return Gh(e._query,t),new ge(e.firestore,e.converter,Vi(e._query,t))}_parse(e){const t=Vt(e.firestore);return function(r,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){Ou(l,c);const d=[];for(const g of l)d.push(Fu(a,r,g));h={arrayValue:{values:d}}}else h=Fu(a,r,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||Ou(l,c),h=Vh(o,i,l,c==="in"||c==="not-in");return k.create(u,c,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function cy(n,e,t){const s=e,r=ei("where",n);return Ns._create(r,s,t)}class xn extends fa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new xn(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:L.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Gh(i,a),i=Vi(i,a)}(e._query,t),new ge(e.firestore,e.converter,Vi(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ly(...n){return n.forEach(e=>Kh("or",e)),xn._create("or",n)}function hy(...n){return n.forEach(e=>Kh("and",e)),xn._create("and",n)}class ma extends _s{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new ma(e,t)}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ht(r,i);return function(a,u){if(So(a)===null){const c=Br(a);c!==null&&jh(a,c,u.field)}}(s,o),o}(e._query,this._field,this._direction);return new ge(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new je(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function dy(n,e="asc"){const t=e,s=ei("orderBy",n);return ma._create(s,t)}class ti extends _s{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new ti(e,t,s)}_apply(e){return new ge(e.firestore,e.converter,lr(e._query,this._limit,this._limitType))}}function fy(n){return Nh("limit",n),ti._create("limit",n,"F")}function my(n){return Nh("limitToLast",n),ti._create("limitToLast",n,"L")}class ni extends _s{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new ni(e,t,s)}_apply(e){const t=zh(e,this.type,this._docOrFields,this._inclusive);return new ge(e.firestore,e.converter,function(s,r){return new je(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function gy(...n){return ni._create("startAt",n,!0)}function py(...n){return ni._create("startAfter",n,!1)}class si extends _s{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new si(e,t,s)}_apply(e){const t=zh(e,this.type,this._docOrFields,this._inclusive);return new ge(e.firestore,e.converter,function(s,r){return new je(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function yy(...n){return si._create("endBefore",n,!1)}function wy(...n){return si._create("endAt",n,!0)}function zh(n,e,t,s){if(t[0]=ae(t[0]),t[0]instanceof ls)return function(r,i,o,a,u){if(!a)throw new p(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const l of bt(r))if(l.field.isKeyField())c.push(Ct(i,a.key));else{const h=a.data.field(l.field);if(Vr(h))throw new p(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new p(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(h)}return new it(c,u)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=Vt(n.firestore);return function(i,o,a,u,c,l){const h=i.explicitOrderBy;if(c.length>h.length)throw new p(m.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<c.length;g++){const w=c[g];if(h[g].field.isKeyField()){if(typeof w!="string")throw new p(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof w}`);if(!xo(i)&&w.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${w}' contains a slash.`);const I=i.path.child(F.fromString(w));if(!v.isDocumentKey(I))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${I}' is not because it contains an odd number of segments.`);const x=new v(I);d.push(Ct(o,x))}else{const I=Vh(a,u,w);d.push(I)}}return new it(d,l)}(n._query,n.firestore._databaseId,r,e,t,s)}}function Fu(n,e,t){if(typeof(t=ae(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xo(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(F.fromString(t));if(!v.isDocumentKey(s))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Ct(n,new v(s))}if(t instanceof J)return Ct(n,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xr(t)}.`)}function Ou(n,e){if(!Array.isArray(n)||n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Gh(n,e){if(e.isInequality()){const s=Br(n),r=e.field;if(s!==null&&!s.isEqual(r))throw new p(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=So(n);i!==null&&jh(n,r,i)}const t=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function jh(n,e,t){if(!t.isEqual(e))throw new p(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}function Kh(n,e){if(!(e instanceof Ns||e instanceof xn))throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Qh{convertValue(e,t="none"){switch(st(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Q(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ge(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw S()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const s={};return ht(e,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new ua(Q(e.latitude),Q(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=qr(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ts(e));default:return null}}convertTimestamp(e){const t=nt(e);return new K(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=F.fromString(e);b(Bl(s));const r=new Dt(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||W(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function ri(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Cp extends Qh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}/**
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
 */function vy(n){return new us("sum",cs("sum",n))}function Iy(n){return new us("avg",cs("average",n))}function Ap(){return new us("count")}function Ey(n,e){var t,s;return n instanceof us&&e instanceof us&&n._aggregateType===e._aggregateType&&((t=n._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((s=e._internalFieldPath)===null||s===void 0?void 0:s.canonicalString())}function Ty(n,e){return kh(n.query,e.query)&&Lu(n.data(),e.data())}/**
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
 */class St{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class hn extends ls{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(ei("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Zs extends hn{data(e={}){return super.data(e)}}class dn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new St(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Zs(this._firestore,this._userDataWriter,s.key,s,new St(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Zs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new St(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Zs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new St(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:_p(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function _p(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return S()}}function Sy(n,e){return n instanceof hn&&e instanceof hn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof dn&&e instanceof dn&&n._firestore===e._firestore&&kh(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function xy(n){n=R(n,J);const e=R(n.firestore,z);return Ch(te(e),n._key).then(t=>ga(e,n,t))}class ft extends Qh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new J(this.firestore,null,t)}}function by(n){n=R(n,J);const e=R(n.firestore,z),t=te(e),s=new ft(e);return ap(t,n._key).then(r=>new hn(e,s,n._key,r,new St(r!==null&&r.hasLocalMutations,!0),n.converter))}function Dy(n){n=R(n,J);const e=R(n.firestore,z);return Ch(te(e),n._key,{source:"server"}).then(t=>ga(e,n,t))}function Cy(n){n=R(n,ge);const e=R(n.firestore,z),t=te(e),s=new ft(e);return $h(n._query),Ah(t,n._query).then(r=>new dn(e,s,n,r))}function Ay(n){n=R(n,ge);const e=R(n.firestore,z),t=te(e),s=new ft(e);return up(t,n._query).then(r=>new dn(e,s,n,r))}function _y(n){n=R(n,ge);const e=R(n.firestore,z),t=te(e),s=new ft(e);return Ah(t,n._query,{source:"server"}).then(r=>new dn(e,s,n,r))}function Ny(n,e,t){n=R(n,J);const s=R(n.firestore,z),r=ri(n.converter,e,t);return ks(s,[Jr(Vt(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,G.none())])}function ky(n,e,t,...s){n=R(n,J);const r=R(n.firestore,z),i=Vt(r);let o;return o=typeof(e=ae(e))=="string"||e instanceof Pt?ha(i,"updateDoc",n._key,e,t,s):la(i,"updateDoc",n._key,e),ks(r,[o.toMutation(n._key,G.exists(!0))])}function Ry(n){return ks(R(n.firestore,z),[new wn(n._key,G.none())])}function My(n,e){const t=R(n.firestore,z),s=gp(n),r=ri(n.converter,e);return ks(t,[Jr(Vt(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,G.exists(!1))]).then(()=>s)}function Fy(n,...e){var t,s,r;n=ae(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Xi(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Xi(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(n instanceof J)c=R(n.firestore,z),l=pn(n._key.path),u={next:h=>{e[o]&&e[o](ga(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=R(n,ge);c=R(h.firestore,z),l=h._query;const d=new ft(c);u={next:g=>{e[o]&&e[o](new dn(c,d,h,g))},error:e[o+1],complete:e[o+2]},$h(n._query)}return function(h,d,g,w){const I=new Qr(w),x=new Yo(d,I,g);return h.asyncQueue.enqueueAndForget(async()=>Ho(await ln(h),x)),()=>{I.Dc(),h.asyncQueue.enqueueAndForget(async()=>Wo(await ln(h),x))}}(te(c),l,a,u)}function Oy(n,e){return cp(te(n=R(n,z)),Xi(e)?e:{next:e})}function ks(n,e){return function(t,s){const r=new se;return t.asyncQueue.enqueueAndForget(async()=>Vg(await oa(t),s,r)),r.promise}(te(n),e)}function ga(n,e,t){const s=t.docs.get(e._key),r=new ft(n);return new hn(n,r,e._key,s,new St(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function Py(n){return Np(n,{count:Ap()})}function Np(n,e){const t=R(n.firestore,z),s=te(t),r=function(i,o){const a=[];for(const u in i)Object.prototype.hasOwnProperty.call(i,u)&&a.push(o(i[u],u,i));return a}(e,(i,o)=>new mm(o,i._aggregateType,i._internalFieldPath));return function(i,o,a){const u=new se;return i.asyncQueue.enqueueAndForget(async()=>{try{const c=await Dh(i);u.resolve(gg(c,o,a))}catch(c){u.reject(c)}}),u.promise}(s,n._query,r).then(i=>function(o,a,u){const c=new ft(o);return new wp(a,c,u)}(t,n,i))}class kp{constructor(e){this.kind="memory",this._onlineComponentProvider=new Sn,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new cn}toJSON(){return{kind:this.kind}}}class Rp{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Lp(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Mp{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new cn}toJSON(){return{kind:this.kind}}}class Fp{constructor(e){this.kind="memoryLru",this._offlineComponentProvider=new ep(e)}toJSON(){return{kind:this.kind}}}function Ly(){return new Mp}function Vy(n){return new Fp(n==null?void 0:n.cacheSizeBytes)}function qy(n){return new kp(n)}function By(n){return new Rp(n)}class Op{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Sn,this._offlineComponentProvider=new ra(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class Pp{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new Sn,this._offlineComponentProvider=new Th(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function Lp(n){return new Op(n==null?void 0:n.forceOwnership)}function Uy(){return new Pp}/**
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
 */const Vp={maxAttempts:5};/**
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
 */class qp{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vt(e)}set(e,t,s){this._verifyNotCommitted();const r=Ze(e,this._firestore),i=ri(r.converter,t,s),o=Jr(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,G.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=Ze(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof Pt?ha(this._dataReader,"WriteBatch.update",i._key,t,s,r):la(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,G.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ze(e,this._firestore);return this._mutations=this._mutations.concat(new wn(t._key,G.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ze(n,e){if((n=ae(n)).firestore!==e)throw new p(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class Bp extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Vt(e)}get(e){const t=Ze(e,this._firestore),s=new Cp(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return S();const i=r[0];if(i.isFoundDocument())return new ls(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new ls(this._firestore,s,t._key,null,t.converter);throw S()})}set(e,t,s){const r=Ze(e,this._firestore),i=ri(r.converter,t,s),o=Jr(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=Ze(e,this._firestore);let o;return o=typeof(t=ae(t))=="string"||t instanceof Pt?ha(this._dataReader,"Transaction.update",i._key,t,s,r):la(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=Ze(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ze(e,this._firestore),s=new ft(this._firestore);return super.get(e).then(r=>new hn(this._firestore,s,t._key,r._document,new St(!1,!1),t.converter))}}function $y(n,e,t){n=R(n,z);const s=Object.assign(Object.assign({},Vp),t);return function(r){if(r.maxAttempts<1)throw new p(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new se;return r.asyncQueue.enqueueAndForget(async()=>{const u=await Dh(r);new sp(r.asyncQueue,u,o,i,a).run()}),a.promise}(te(n),r=>e(new Bp(n,r)),s)}/**
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
 */function zy(){return new As("deleteField")}function Gy(){return new ca("serverTimestamp")}function jy(...n){return new Tp("arrayUnion",n)}function Ky(...n){return new Sp("arrayRemove",n)}function Qy(n){return new xp("increment",n)}/**
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
 */function Hy(n){return te(n=R(n,z)),new qp(n,e=>ks(n,e))}/**
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
 */function Wy(n,e){var t;const s=te(n=R(n,z));if(!s._uninitializedComponentsProvider||((t=s._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)==="memory")return Re("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(u){try{return JSON.parse(u)}catch(c){throw new p(m.INVALID_ARGUMENT,"Failed to parse JSON: "+(c==null?void 0:c.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=Pu(u,"collectionGroup"),l=[];if(Array.isArray(u.fields))for(const h of u.fields){const d=Zr("setIndexConfiguration",Pu(h,"fieldPath"));h.arrayConfig==="CONTAINS"?l.push(new Gs(d,2)):h.order==="ASCENDING"?l.push(new Gs(d,0)):h.order==="DESCENDING"&&l.push(new Gs(d,1))}a.push(new ar(ar.UNKNOWN_ID,c,l,Zn.empty()))}return a}(e);return dp(s,r)}function Pu(n,e){if(typeof n[e]!="string")throw new p(m.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(n,e=!0){(function(t){gn=t})(nd),sd(new rd("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new z(new gf(t.getProvider("auth-internal")),new wf(t.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Dt(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),ya(Ra,"3.13.0",n),ya(Ra,"3.13.0","esm2017")})();export{Qh as AbstractUserDataWriter,us as AggregateField,wp as AggregateQuerySnapshot,Ft as Bytes,Wp as CACHE_SIZE_UNLIMITED,qe as CollectionReference,J as DocumentReference,hn as DocumentSnapshot,Pt as FieldPath,Lt as FieldValue,z as Firestore,p as FirestoreError,ua as GeoPoint,yp as LoadBundleTask,ge as Query,xn as QueryCompositeFilterConstraint,_s as QueryConstraint,Zs as QueryDocumentSnapshot,si as QueryEndAtConstraint,Ns as QueryFieldFilterConstraint,ti as QueryLimitConstraint,ma as QueryOrderByConstraint,dn as QuerySnapshot,ni as QueryStartAtConstraint,St as SnapshotMetadata,K as Timestamp,Bp as Transaction,qp as WriteBatch,Dt as _DatabaseId,v as _DocumentKey,Gp as _EmptyAppCheckTokenProvider,ff as _EmptyAuthCredentialsProvider,X as _FieldPath,No as _TestingHooks,R as _cast,zp as _debugAssert,jp as _isBase64Available,Re as _logWarn,fp as _validateIsNotUsedTogether,My as addDoc,Ey as aggregateFieldEqual,Ty as aggregateQuerySnapshotEqual,hy as and,Ky as arrayRemove,jy as arrayUnion,Iy as average,ey as clearIndexedDbPersistence,Kp as collection,Qp as collectionGroup,mp as connectFirestoreEmulator,Ap as count,Ry as deleteDoc,zy as deleteField,sy as disableNetwork,gp as doc,ay as documentId,Jp as enableIndexedDbPersistence,Zp as enableMultiTabIndexedDbPersistence,ny as enableNetwork,wy as endAt,yy as endBefore,te as ensureFirestoreConfigured,ks as executeWrite,Np as getAggregateFromServer,Py as getCountFromServer,xy as getDoc,by as getDocFromCache,Dy as getDocFromServer,Cy as getDocs,Ay as getDocsFromCache,_y as getDocsFromServer,Yp as getFirestore,Qy as increment,Xp as initializeFirestore,fy as limit,my as limitToLast,iy as loadBundle,Ly as memoryEagerGarbageCollector,qy as memoryLocalCache,Vy as memoryLruGarbageCollector,oy as namedQuery,Fy as onSnapshot,Oy as onSnapshotsInSync,ly as or,dy as orderBy,By as persistentLocalCache,Uy as persistentMultipleTabManager,Lp as persistentSingleTabManager,uy as query,kh as queryEqual,Hp as refEqual,$y as runTransaction,Gy as serverTimestamp,Ny as setDoc,Wy as setIndexConfiguration,$p as setLogLevel,Sy as snapshotEqual,py as startAfter,gy as startAt,vy as sum,ry as terminate,ky as updateDoc,ty as waitForPendingWrites,cy as where,Hy as writeBatch};
