import{n as u,s as g}from"./scheduler.C70A3bjW.js";const n=[];function k(e,o){return{subscribe:h(e,o).subscribe}}function h(e,o=u){let i;const r=new Set;function b(t){if(g(e,t)&&(e=t,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(i=o(b,a)||u),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_3byg2k)==null?void 0:f.base)??"";var l;const q=((l=globalThis.__sveltekit_3byg2k)==null?void 0:l.assets)??p;export{q as a,p as b,k as r,h as w};
