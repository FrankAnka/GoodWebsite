import{n as c,s as h}from"./scheduler.C70A3bjW.js";const n=[];function w(e,o){return{subscribe:p(e,o).subscribe}}function p(e,o=c){let i;const r=new Set;function b(t){if(h(e,t)&&(e=t,i)){const u=!n.length;for(const s of r)s[1](),n.push(s,e);if(u){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,u=c){const s=[t,u];return r.add(s),r.size===1&&(i=o(b,a)||c),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const d=((f=globalThis.__sveltekit_1jyausw)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_1jyausw)==null?void 0:l.assets)??d;export{q as a,d as b,w as r,p as w};