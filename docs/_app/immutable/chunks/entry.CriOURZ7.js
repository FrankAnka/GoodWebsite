var bt=Object.defineProperty;var At=(e,n,t)=>n in e?bt(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t;var T=(e,n,t)=>At(e,typeof n!="symbol"?n+"":n,t);import{o as De,t as be}from"./scheduler.C70A3bjW.js";import{w as Re}from"./index.DxRx6g2d.js";import{a as St,b as x}from"./paths.DuB1yQmI.js";new URL("sveltekit-internal://");function kt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function Et(e){return e.split("%25").map(decodeURI).join("%25")}function Rt(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function me({href:e}){return e.split("#")[0]}function It(e,n,t,a=!1){const r=new URL(e);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(i,s){if(s==="get"||s==="getAll"||s==="has")return f=>(t(f),i[s](f));n();const c=Reflect.get(i,s);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const o=["href","pathname","search","toString","toJSON"];a&&o.push("hash");for(const i of o)Object.defineProperty(r,i,{get(){return n(),e[i]},enumerable:!0,configurable:!0});return r}const Ut="/__data.json",Lt=".html__data.json";function Tt(e){return e.endsWith(".html")?e.replace(/\.html$/,Lt):e.replace(/\/$/,"")+Ut}function xt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Pt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Ye=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&q.delete(Ie(e)),Ye(e,n));const q=new Map;function Ot(e,n){const t=Ie(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const i=a.getAttribute("data-ttl");return i&&q.set(t,{body:r,init:o,ttl:1e3*Number(i)}),a.getAttribute("data-b64")!==null&&(r=Pt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function $t(e,n,t){if(q.size>0){const a=Ie(e,t),r=q.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);q.delete(a)}}return window.fetch(n,t)}function Ie(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${xt(...r)}"]`}return a}const Ct=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Dt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const i=a.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ye(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ye(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const d=Ct.exec(c),[,h,y,u,g]=d;return n.push({name:u,matcher:g,optional:!!h,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return ye(c)}).join("")}).join("")}/?$`),params:n}}function jt(e){return!/^\([^)]+\)$/.test(e)}function Dt(e){return e.slice(1).split("/").filter(jt)}function Ft(e,n,t){const a={},r=e.slice(1),o=r.filter(s=>s!==void 0);let i=0;for(let s=0;s<n.length;s+=1){const c=n[s];let f=r[s-i];if(c.chained&&c.rest&&i&&(f=r.slice(s-i,s+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const d=n[s+1],h=r[s+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(a).length===o.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return a}function ye(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Vt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([s,[c,f,d]])=>{const{pattern:h,params:y}=Nt(s),u={id:s,exec:g=>{const l=h.exec(g);if(l)return Ft(l,y,a)},errors:[1,...d||[]].map(g=>e[g]),layouts:[0,...f||[]].map(i),leaf:o(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function o(s){const c=s<0;return c&&(s=~s),[c,e[s]]}function i(s){return s===void 0?s:[r.has(s),e[s]]}}function Je(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Fe(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}const Bt="1737547383008",ze="sveltekit:snapshot",Xe="sveltekit:scroll",Ze="sveltekit:states",Gt="sveltekit:pageurl",j="sveltekit:history",W="sveltekit:navigation",Q={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Z=location.origin;function Qe(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function Ue(){return{x:pageXOffset,y:pageYOffset}}function N(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Ve={...Q,"":Q.hover};function et(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function tt(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function Ae(e,n,t){let a;try{a=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const r=e instanceof SVGAElement?e.target.baseVal:e.target,o=!a||!!r||se(a,n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(a==null?void 0:a.origin)===Z&&e.hasAttribute("download");return{url:a,external:o,target:r,download:i}}function ee(e){let n=null,t=null,a=null,r=null,o=null,i=null,s=e;for(;s&&s!==document.documentElement;)a===null&&(a=N(s,"preload-code")),r===null&&(r=N(s,"preload-data")),n===null&&(n=N(s,"keepfocus")),t===null&&(t=N(s,"noscroll")),o===null&&(o=N(s,"reload")),i===null&&(i=N(s,"replacestate")),s=et(s);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ve[a??"off"],preload_data:Ve[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(i)}}function Be(e){const n=Re(e);let t=!0;function a(){t=!0,n.update(i=>i)}function r(i){t=!1,n.set(i)}function o(i){let s;return n.subscribe(c=>{(s===void 0||t&&c!==s)&&i(s=c)})}return{notify:a,set:r,subscribe:o}}const nt={v:()=>{}};function Mt(){const{set:e,subscribe:n}=Re(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${St}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const i=(await r.json()).version!==Bt;return i&&(e(!0),nt.v(),clearTimeout(t)),i}catch{return!1}}return{subscribe:n,check:a}}function se(e,n,t){return e.origin!==Z||!e.pathname.startsWith(n)?!0:t?!(e.pathname===n+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===n):!1}function Ge(e){const n=Ht(e),t=new ArrayBuffer(n.length),a=new DataView(t);for(let r=0;r<t.byteLength;r++)a.setUint8(r,n.charCodeAt(r));return t}const qt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ht(e){e.length%4===0&&(e=e.replace(/==?$/,""));let n="",t=0,a=0;for(let r=0;r<e.length;r++)t<<=6,t|=qt.indexOf(e[r]),a+=6,a===24&&(n+=String.fromCharCode((t&16711680)>>16),n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255),t=a=0);return a===12?(t>>=4,n+=String.fromCharCode(t)):a===18&&(t>>=2,n+=String.fromCharCode((t&65280)>>8),n+=String.fromCharCode(t&255)),n}const Kt=-1,Wt=-2,Yt=-3,Jt=-4,zt=-5,Xt=-6;function _n(e,n){return at(JSON.parse(e),n)}function at(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,i=!1){if(o===Kt)return;if(o===Yt)return NaN;if(o===Jt)return 1/0;if(o===zt)return-1/0;if(o===Xt)return-0;if(i)throw new Error("Invalid input");if(o in a)return a[o];const s=t[o];if(!s||typeof s!="object")a[o]=s;else if(Array.isArray(s))if(typeof s[0]=="string"){const c=s[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(s[1]));switch(c){case"Date":a[o]=new Date(s[1]);break;case"Set":const d=new Set;a[o]=d;for(let u=1;u<s.length;u+=1)d.add(r(s[u]));break;case"Map":const h=new Map;a[o]=h;for(let u=1;u<s.length;u+=2)h.set(r(s[u]),r(s[u+1]));break;case"RegExp":a[o]=new RegExp(s[1],s[2]);break;case"Object":a[o]=Object(s[1]);break;case"BigInt":a[o]=BigInt(s[1]);break;case"null":const y=Object.create(null);a[o]=y;for(let u=1;u<s.length;u+=2)y[s[u]]=r(s[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],g=s[1],l=Ge(g),p=new u(l);a[o]=p;break}case"ArrayBuffer":{const u=s[1],g=Ge(u);a[o]=g;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(s.length);a[o]=c;for(let f=0;f<s.length;f+=1){const d=s[f];d!==Wt&&(c[f]=r(d))}}else{const c={};a[o]=c;for(const f in s){const d=s[f];c[f]=r(d)}}return a[o]}return r(0)}const rt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...rt];const Zt=new Set([...rt]);[...Zt];function Qt(e){return e.filter(n=>n!=null)}class ie{constructor(n,t){this.status=n,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class ot{constructor(n,t){this.status=n,this.location=t}}class Le extends Error{constructor(n,t,a){super(a),this.status=n,this.text=t}}const en="x-sveltekit-invalidated",tn="x-sveltekit-trailing-slash";function te(e){return e instanceof ie||e instanceof Le?e.status:500}function nn(e){return e instanceof Le?e.text:"Internal Error"}let k,Y,we;const an=De.toString().includes("$$")||/function \w+\(\) \{\}/.test(De.toString());an?(k={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Y={current:null},we={current:!1}):(k=new class{constructor(){T(this,"data",$state.raw({}));T(this,"form",$state.raw(null));T(this,"error",$state.raw(null));T(this,"params",$state.raw({}));T(this,"route",$state.raw({id:null}));T(this,"state",$state.raw({}));T(this,"status",$state.raw(-1));T(this,"url",$state.raw(new URL("https://example.com")))}},Y=new class{constructor(){T(this,"current",$state.raw(null))}},we=new class{constructor(){T(this,"current",$state.raw(!1))}},nt.v=()=>we.current=!0);function Te(e){Object.assign(k,e)}const rn=new Set(["icon","shortcut icon","apple-touch-icon"]),C=Je(Xe)??{},J=Je(ze)??{},O={url:Be({}),page:Be({}),navigating:Re(null),updated:Mt()};function xe(e){C[e]=Ue()}function on(e,n){let t=e+1;for(;C[t];)delete C[t],t+=1;for(t=n+1;J[t];)delete J[t],t+=1}function V(e){return location.href=e.href,new Promise(()=>{})}async function st(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function Me(){}let ce,Se,ne,P,ke,A;const it=[],ae=[];let U=null;const ct=new Set,sn=new Set,H=new Set;let w={branch:[],error:null,url:null},Pe=!1,re=!1,qe=!0,z=!1,G=!1,lt=!1,le=!1,D,I,L,B;const K=new Set;let _e;async function Sn(e,n,t){var r,o,i,s;document.URL!==location.href&&(location.href=location.href),A=e,await((o=(r=e.hooks).init)==null?void 0:o.call(r)),ce=Vt(e),P=document.documentElement,ke=n,Se=e.nodes[0],ne=e.nodes[1],Se(),ne(),I=(i=history.state)==null?void 0:i[j],L=(s=history.state)==null?void 0:s[W],I||(I=L=Date.now(),history.replaceState({...history.state,[j]:I,[W]:L},""));const a=C[I];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await pn(ke,t):dn(location.href,{replaceState:!0}),hn()}async function cn(){if(await(_e||(_e=Promise.resolve())),!_e)return;_e=null;const e=de(w.url,!0);U=null;const n=B={},t=e&&await Ce(e);if(!(!t||n!==B)){if(t.type==="redirect")return fe(new URL(t.location,w.url).href,{},1,n);t.props.page&&Object.assign(k,t.props.page),w=t.state,ft(),D.$set(t.props),Te(t.props.page)}}function ft(){it.length=0,le=!1}function ut(e){ae.some(n=>n==null?void 0:n.snapshot)&&(J[e]=ae.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function dt(e){var n;(n=J[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=ae[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function He(){xe(I),Fe(Xe,C),ut(L),Fe(ze,J)}async function fe(e,n,t,a){return M({type:"goto",url:Qe(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(le=!0)}})}async function ln(e){if(e.id!==(U==null?void 0:U.id)){const n={};K.add(n),U={id:e.id,token:n,promise:Ce({...e,preload:n}).then(t=>(K.delete(n),t.type==="loaded"&&t.state.error&&(U=null),t))}}return U.promise}async function ve(e){const n=ce.find(t=>t.exec(gt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function ht(e,n,t){var o;w=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),Object.assign(k,e.props.page),D=new A.root({target:n,props:{...e.props,stores:O,components:ae},hydrate:t,sync:!1}),dt(L);const r={from:null,to:{params:w.params,route:{id:((o=w.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};H.forEach(i=>i(r)),re=!0}function X({url:e,params:n,branch:t,status:a,error:r,route:o,form:i}){let s="never";if(x&&(e.pathname===x||e.pathname===x+"/"))s="always";else for(const u of t)(u==null?void 0:u.slash)!==void 0&&(s=u.slash);e.pathname=kt(e.pathname,s),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Qt(t).map(u=>u.node.component),page:he(k)}};i!==void 0&&(c.props.form=i);let f={},d=!k,h=0;for(let u=0;u<Math.max(t.length,w.branch.length);u+=1){const g=t[u],l=w.branch[u];(g==null?void 0:g.data)!==(l==null?void 0:l.data)&&(d=!0),g&&(f={...f,...g.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==r||i!==void 0&&i!==k.form||d)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:i??null,data:d?f:k.data}),c}async function Oe({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var d,h,y;let i=null,s=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((d=f.universal)!=null&&d.load){let u=function(...l){for(const p of l){const{href:b}=new URL(p,t);c.dependencies.add(b)}};const g={route:new Proxy(r,{get:(l,p)=>(s&&(c.route=!0),l[p])}),params:new Proxy(a,{get:(l,p)=>(s&&c.params.add(p),l[p])}),data:(o==null?void 0:o.data)??null,url:It(t,()=>{s&&(c.url=!0)},l=>{s&&c.search_params.add(l)},A.hash),async fetch(l,p){let b;l instanceof Request?(b=l.url,p={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:[...l.headers].length?l.headers:void 0,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...p}):b=l;const E=new URL(b,t);return s&&u(E.href),E.origin===t.origin&&(b=E.href.slice(t.origin.length)),re?$t(b,E.href,p):Ot(b,p)},setHeaders:()=>{},depends:u,parent(){return s&&(c.parent=!0),n()},untrack(l){s=!1;try{return l()}finally{s=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:i,uses:c}:null,data:i??(o==null?void 0:o.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(o==null?void 0:o.slash)}}function Ke(e,n,t,a,r,o){if(le)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const i of r.search_params)if(a.has(i))return!0;for(const i of r.params)if(o[i]!==w.params[i])return!0;for(const i of r.dependencies)if(it.some(s=>s(new URL(i))))return!0;return!1}function $e(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function fn(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(i=>o.includes(i))&&o.every(i=>r.includes(i))&&t.delete(a)}return t}function We({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:he(k),constructors:[]}}}async function Ce({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((U==null?void 0:U.id)===e)return K.delete(U.token),U.promise;const{errors:i,layouts:s,leaf:c}=r,f=[...s,c];i.forEach(m=>m==null?void 0:m().catch(()=>{})),f.forEach(m=>m==null?void 0:m[1]().catch(()=>{}));let d=null;const h=w.url?e!==oe(w.url):!1,y=w.route?r.id!==w.route.id:!1,u=fn(w.url,t);let g=!1;const l=f.map((m,_)=>{var $;const S=w.branch[_],R=!!(m!=null&&m[0])&&((S==null?void 0:S.loader)!==m[1]||Ke(g,y,h,u,($=S.server)==null?void 0:$.uses,a));return R&&(g=!0),R});if(l.some(Boolean)){try{d=await wt(t,l)}catch(m){const _=await F(m,{url:t,params:a,route:{id:e}});return K.has(o)?We({error:_,url:t,params:a,route:r}):ue({status:te(m),error:_,url:t,route:r})}if(d.type==="redirect")return d}const p=d==null?void 0:d.nodes;let b=!1;const E=f.map(async(m,_)=>{var pe;if(!m)return;const S=w.branch[_],R=p==null?void 0:p[_];if((!R||R.type==="skip")&&m[1]===(S==null?void 0:S.loader)&&!Ke(b,y,h,u,(pe=S.universal)==null?void 0:pe.uses,a))return S;if(b=!0,(R==null?void 0:R.type)==="error")throw R;return Oe({loader:m[1],url:t,params:a,route:r,parent:async()=>{var je;const Ne={};for(let ge=0;ge<_;ge+=1)Object.assign(Ne,(je=await E[ge])==null?void 0:je.data);return Ne},server_data_node:$e(R===void 0&&m[0]?{type:"skip"}:R??null,m[0]?S==null?void 0:S.server:void 0)})});for(const m of E)m.catch(()=>{});const v=[];for(let m=0;m<f.length;m+=1)if(f[m])try{v.push(await E[m])}catch(_){if(_ instanceof ot)return{type:"redirect",location:_.location};if(K.has(o))return We({error:await F(_,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let S=te(_),R;if(p!=null&&p.includes(_))S=_.status??S,R=_.error;else if(_ instanceof ie)R=_.body;else{if(await O.updated.check())return await st(),await V(t);R=await F(_,{params:a,url:t,route:{id:r.id}})}const $=await pt(m,v,i);return $?X({url:t,params:a,branch:v.slice(0,$.idx).concat($.node),status:S,error:R,route:r}):await yt(t,{id:r.id},R,S)}else v.push(void 0);return X({url:t,params:a,branch:v,status:200,error:null,route:r,form:n?void 0:null})}async function pt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function ue({status:e,error:n,url:t,route:a}){const r={};let o=null;if(A.server_loads[0]===0)try{const f=await wt(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==Z||t.pathname!==location.pathname||Pe)&&await V(t)}const s=await Oe({loader:Se,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:$e(o)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return X({url:t,params:r,branch:[s,c],status:e,error:n,route:null})}function de(e,n){if(!e||se(e,x,A.hash))return;let t;try{if(t=A.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const r=new URL(e);A.hash?r.hash=t:r.pathname=t,t=r}}catch{return}const a=gt(t);for(const r of ce){const o=r.exec(a);if(o)return{id:oe(e),invalidating:n,route:r,params:Rt(o),url:e}}}function gt(e){return Et(A.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function oe(e){return(A.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function mt({url:e,type:n,intent:t,delta:a}){let r=!1;const o=vt(w,t,e,n);a!==void 0&&(o.navigation.delta=a);const i={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return z||ct.forEach(s=>s(i)),r?null:o}async function M({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:i={},redirect_count:s=0,nav_token:c={},accept:f=Me,block:d=Me}){const h=de(n,!1),y=mt({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!y){d();return}const u=I,g=L;f(),z=!0,re&&O.navigating.set(Y.current=y.navigation),B=c;let l=h&&await Ce(h);if(!l){if(se(n,x,A.hash))return await V(n);l=await yt(n,{id:null},await F(new Le(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,B!==c)return y.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(s>=20)l=await ue({status:500,error:await F(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return fe(new URL(l.location,n).href,{},s+1,c),!1;else l.props.page.status>=400&&await O.updated.check()&&(await st(),await V(n));if(ft(),xe(u),ut(g),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),i=t?t.state:i,!t){const v=o?0:1,m={[j]:I+=v,[W]:L+=v,[Ze]:i};(o?history.replaceState:history.pushState).call(history,m,"",n),o||on(I,L)}if(U=null,l.props.page.state=i,re){w=l.state,l.props.page&&(l.props.page.url=n);const v=(await Promise.all(Array.from(sn,m=>m(y.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){v.forEach(_=>{H.delete(_)})};v.push(m),v.forEach(_=>{H.add(_)})}D.$set(l.props),Te(l.props.page),lt=!0}else ht(l,ke,!1);const{activeElement:p}=document;await be();const b=t?t.scroll:r?Ue():null;if(qe){const v=n.hash&&document.getElementById(decodeURIComponent(A.hash?n.hash.split("#")[2]??"":n.hash.slice(1)));b?scrollTo(b.x,b.y):v?v.scrollIntoView():scrollTo(0,0)}const E=document.activeElement!==p&&document.activeElement!==document.body;!a&&!E&&Ee(),qe=!0,l.props.page&&Object.assign(k,l.props.page),z=!1,e==="popstate"&&dt(L),y.fulfil(void 0),H.forEach(v=>v(y.navigation)),O.navigating.set(Y.current=null)}async function yt(e,n,t,a){return e.origin===Z&&e.pathname===location.pathname&&!Pe?await ue({status:a,error:t,url:e,route:n}):await V(e)}function un(){let e;P.addEventListener("mousemove",o=>{const i=o.target;clearTimeout(e),e=setTimeout(()=>{a(i,2)},20)});function n(o){o.defaultPrevented||a(o.composedPath()[0],1)}P.addEventListener("mousedown",n),P.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const i of o)i.isIntersecting&&(ve(new URL(i.target.href)),t.unobserve(i.target))},{threshold:0});function a(o,i){const s=tt(o,P);if(!s)return;const{url:c,external:f,download:d}=Ae(s,x,A.hash);if(f||d)return;const h=ee(s),y=c&&oe(w.url)===oe(c);if(!h.reload&&!y)if(i<=h.preload_data){const u=de(c,!1);u&&ln(u)}else i<=h.preload_code&&ve(c)}function r(){t.disconnect();for(const o of P.querySelectorAll("a")){const{url:i,external:s,download:c}=Ae(o,x,A.hash);if(s||c)continue;const f=ee(o);f.reload||(f.preload_code===Q.viewport&&t.observe(o),f.preload_code===Q.eager&&ve(i))}}H.add(r),r()}function F(e,n){if(e instanceof ie)return e.body;const t=te(e),a=nn(e);return A.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function dn(e,n={}){return e=new URL(Qe(e)),e.origin!==Z?Promise.reject(new Error("goto: invalid URL")):fe(e,n,0)}function kn(){return le=!0,cn()}async function En(e){if(e.type==="error"){const n=new URL(location.href),{branch:t,route:a}=w;if(!a)return;const r=await pt(w.branch.length,t,a.errors);if(r){const o=X({url:n,params:w.params,branch:t.slice(0,r.idx).concat(r.node),status:e.status??500,error:e.error,route:a});w=o.state,D.$set(o.props),Te(o.props.page),be().then(Ee)}}else e.type==="redirect"?fe(e.location,{invalidateAll:!0},0):(k.form=e.data,k.status=e.status,D.$set({form:null,page:he(k)}),await be(),D.$set({form:e.data}),e.type==="success"&&Ee())}function hn(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(He(),!z){const r=vt(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};ct.forEach(i=>i(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&He()}),(n=navigator.connection)!=null&&n.saveData||un(),P.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=tt(t.composedPath()[0],P);if(!a)return;const{url:r,external:o,target:i,download:s}=Ae(a,x,A.hash);if(!r)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ee(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||s)return;const[d,h]=(A.hash?r.hash.replace(/^#/,""):r.href).split("#"),y=d===me(location);if(o||c.reload&&(!y||!h)){mt({url:r,type:"link"})?z=!0:t.preventDefault();return}if(h!==void 0&&y){const[,u]=w.url.href.split("#");if(u===h){if(t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const g=a.ownerDocument.getElementById(decodeURIComponent(h));g&&(g.scrollIntoView(),g.focus())}return}if(G=!0,xe(I),e(r),!c.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),M({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),P.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formTarget)||a.target)==="_blank"||((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(se(s,x,!1))return;const c=t.target,f=ee(c);if(f.reload)return;t.preventDefault(),t.stopPropagation();const d=new FormData(c),h=r==null?void 0:r.getAttribute("name");h&&d.append(h,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(d).toString(),M({type:"form",url:s,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[j]){const r=t.state[j];if(B={},r===I)return;const o=C[r],i=t.state[Ze]??{},s=new URL(t.state[Gt]??location.href),c=t.state[W],f=me(location)===me(w.url);if(c===L&&(lt||f)){i!==k.state&&(k.state=i),e(s),C[I]=Ue(),o&&scrollTo(o.x,o.y),I=r;return}const h=r-I;await M({type:"popstate",url:s,popped:{state:i,scroll:o,delta:h},accept:()=>{I=r,L=c},block:()=>{history.go(-h)},nav_token:B})}else if(!G){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{G?(G=!1,history.replaceState({...history.state,[j]:++I,[W]:L},"",location.href)):A.hash&&w.url.hash===location.hash&&M({type:"goto",url:w.url})});for(const t of document.querySelectorAll("link"))rn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&O.navigating.set(Y.current=null)});function e(t){w.url=k.url=t,O.page.set(he(k)),O.page.notify()}}async function pn(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:i,form:s}){Pe=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=de(c,!1)||{});let f,d=!0;try{const h=a.map(async(g,l)=>{const p=i[l];return p!=null&&p.uses&&(p.uses=_t(p.uses)),Oe({loader:A.nodes[g],url:c,params:r,route:o,parent:async()=>{const b={};for(let E=0;E<l;E+=1)Object.assign(b,(await h[E]).data);return b},server_data_node:$e(p)})}),y=await Promise.all(h),u=ce.find(({id:g})=>g===o.id);if(u){const g=u.layouts;for(let l=0;l<g.length;l++)g[l]||y.splice(l,0,void 0)}f=X({url:c,params:r,branch:y,status:n,error:t,form:s,route:u??null})}catch(h){if(h instanceof ot){await V(new URL(h.location,location.href));return}f=await ue({status:te(h),error:await F(h,{url:c,params:r,route:o}),url:c,route:o}),e.textContent="",d=!1}f.props.page&&(f.props.page.state={}),ht(f,e,d)}async function wt(e,n){var r;const t=new URL(e);t.pathname=Tt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(tn,"1"),t.searchParams.append(en,n.map(o=>o?"1":"0").join(""));const a=await Ye(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ie(a.status,o)}return new Promise(async o=>{var h;const i=new Map,s=a.body.getReader(),c=new TextDecoder;function f(y){return at(y,{...A.decoders,Promise:u=>new Promise((g,l)=>{i.set(u,{fulfil:g,reject:l})})})}let d="";for(;;){const{done:y,value:u}=await s.read();if(y&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const g=d.indexOf(`
`);if(g===-1)break;const l=JSON.parse(d.slice(0,g));if(d=d.slice(g+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(p=>{(p==null?void 0:p.type)==="data"&&(p.uses=_t(p.uses),p.data=f(p.data))}),o(l);else if(l.type==="chunk"){const{id:p,data:b,error:E}=l,v=i.get(p);i.delete(p),E?v.reject(f(E)):v.fulfil(f(b))}}}})}function _t(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Ee(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const i=r[o],s=a.getRangeAt(o);if(i.commonAncestorContainer!==s.commonAncestorContainer||i.startContainer!==s.startContainer||i.endContainer!==s.endContainer||i.startOffset!==s.startOffset||i.endOffset!==s.endOffset)return}a.removeAllRanges()}})}}}function vt(e,n,t,a){var c,f;let r,o;const i=new Promise((d,h)=>{r=d,o=h});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:i},fulfil:r,reject:o}}function he(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}export{ie as H,A as a,En as b,Sn as c,dn as g,kn as i,_n as p,O as s};
