function y(){}const B=t=>t;function v(t,n){for(const e in n)t[e]=n[e];return t}function j(t){return t()}function F(){return Object.create(null)}function E(t){t.forEach(j)}function q(t){return typeof t=="function"}function P(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let i;function S(t,n){return t===n?!0:(i||(i=document.createElement("a")),i.href=n,t===i.href)}function U(t){return Object.keys(t).length===0}function m(t,...n){if(t==null){for(const r of n)r(void 0);return y}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function C(t){let n;return m(t,e=>n=e)(),n}function D(t,n,e){t.$$.on_destroy.push(m(n,e))}function G(t,n,e,r){if(t){const o=x(t,n,e,r);return t[0](o)}}function x(t,n,e,r){return t[1]&&r?v(e.ctx.slice(),t[1](r(n))):e.ctx}function H(t,n,e,r){if(t[2]&&r){const o=t[2](r(e));if(n.dirty===void 0)return o;if(typeof o=="object"){const l=[],_=Math.max(n.dirty.length,o.length);for(let s=0;s<_;s+=1)l[s]=n.dirty[s]|o[s];return l}return n.dirty|o}return n.dirty}function I(t,n,e,r,o,l){if(o){const _=x(n,e,r,l);t.p(_,o)}}function J(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let r=0;r<e;r++)n[r]=-1;return n}return-1}function K(t,n,e){return t.set(e),n}function L(t){return t&&q(t.destroy)?t.destroy:y}let f;function d(t){f=t}function k(){if(!f)throw new Error("Function called outside component initialization");return f}function N(t){k().$$.on_mount.push(t)}function Q(t){k().$$.after_update.push(t)}const a=[],g=[];let c=[];const b=[],w=Promise.resolve();let p=!1;function O(){p||(p=!0,w.then(M))}function R(){return O(),w}function z(t){c.push(t)}const h=new Set;let u=0;function M(){if(u!==0)return;const t=f;do{try{for(;u<a.length;){const n=a[u];u++,d(n),A(n.$$)}}catch(n){throw a.length=0,u=0,n}for(d(null),a.length=0,u=0;g.length;)g.pop()();for(let n=0;n<c.length;n+=1){const e=c[n];h.has(e)||(h.add(e),e())}c.length=0}while(a.length);for(;b.length;)b.pop()();p=!1,h.clear(),d(t)}function A(t){if(t.fragment!==null){t.update(),E(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}function T(t){const n=[],e=[];c.forEach(r=>t.indexOf(r)===-1?n.push(r):e.push(r)),e.forEach(r=>r()),c=n}export{J as A,H as B,S as a,z as b,D as c,K as d,Q as e,g as f,L as g,B as h,q as i,F as j,M as k,U as l,T as m,y as n,N as o,f as p,d as q,E as r,P as s,R as t,j as u,a as v,O as w,C as x,G as y,I as z};
