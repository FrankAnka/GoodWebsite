import{n as u,s as p}from"./scheduler.C70A3bjW.js";const n=[];function z(e,o){return{subscribe:g(e,o).subscribe}}function g(e,o=u){let i;const r=new Set;function b(t){if(p(e,t)&&(e=t,i)){const c=!n.length;for(const s of r)s[1](),n.push(s,e);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function f(t){b(t(e))}function _(t,c=u){const s=[t,c];return r.add(s),r.size===1&&(i=o(b,f)||u),t(e),()=>{r.delete(s),r.size===0&&i&&(i(),i=null)}}return{set:b,update:f,subscribe:_}}var a;const h=((a=globalThis.__sveltekit_1fgxzp3)==null?void 0:a.base)??"";var l;const q=((l=globalThis.__sveltekit_1fgxzp3)==null?void 0:l.assets)??h;export{q as a,h as b,z as r,g as w};
