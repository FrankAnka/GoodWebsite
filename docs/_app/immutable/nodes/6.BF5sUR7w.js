import{i as me,s as be,n as te,r as Z,e as z,b as fe}from"../chunks/scheduler.iakHQt1N.js";import{S as ye,i as ke,e as m,s as E,c as b,a as O,l as Y,f as T,d as N,n as f,g as D,h as a,o as le,p as R,q as ge,v as se,x as B,y as K,z as ce,A as pe,B as _e,t as he,b as de,j as ve,C as G}from"../chunks/index.BAcxrpZ1.js";import{e as X}from"../chunks/each.D6YF6ztN.js";function J(l,{delay:t=0,duration:e=400,easing:s=me}={}){const n=+getComputedStyle(l).opacity;return{delay:t,duration:e,easing:s,css:p=>`opacity: ${p*n}`}}function ie(l,t,e){const s=l.slice();return s[8]=t[e],s}function ne(l,t,e){const s=l.slice();return s[8]=t[e],s}function ae(l){let t,e,s,n=l[8].name+"",p,y,c,U,h,v,r,k,u,d,A,P;return{c(){t=m("li"),e=m("input"),s=E(),p=he(n),y=E(),c=m("input"),U=E(),h=m("input"),v=E(),r=m("input"),k=E(),this.h()},l(C){t=b(C,"LI",{class:!0});var _=O(t);e=b(_,"INPUT",{class:!0,type:!0}),s=T(_),p=de(_,n),y=T(_),c=b(_,"INPUT",{class:!0,type:!0}),U=T(_),h=b(_,"INPUT",{class:!0,type:!0}),v=T(_),r=b(_,"INPUT",{class:!0,type:!0}),k=T(_),_.forEach(N),this.h()},h(){f(e,"class","Remove svelte-171d5ob"),f(e,"type","submit"),e.value="X",f(c,"class","Move svelte-171d5ob"),f(c,"type","submit"),c.value="→",f(h,"class","Move svelte-171d5ob"),f(h,"type","submit"),h.value="↑",f(r,"class","Move svelte-171d5ob"),f(r,"type","submit"),r.value="↓",f(t,"class","svelte-171d5ob")},m(C,_){D(C,t,_),a(t,e),a(t,s),a(t,p),a(t,y),a(t,c),a(t,U),a(t,h),a(t,v),a(t,r),a(t,k),d=!0,A||(P=[R(e,"click",function(){z(l[6](l[8]))&&l[6](l[8]).apply(this,arguments)}),R(c,"click",function(){z(l[5](l[8]))&&l[5](l[8]).apply(this,arguments)}),R(h,"click",function(){z(l[3](l[8]))&&l[3](l[8]).apply(this,arguments)}),R(r,"click",function(){z(l[4](l[8]))&&l[4](l[8]).apply(this,arguments)})],A=!0)},p(C,_){l=C,(!d||_&1)&&n!==(n=l[8].name+"")&&ve(p,n)},i(C){d||(C&&fe(()=>{d&&(u||(u=G(t,J,{},!0)),u.run(1))}),d=!0)},o(C){C&&(u||(u=G(t,J,{},!1)),u.run(0)),d=!1},d(C){C&&N(t),C&&u&&u.end(),A=!1,Z(P)}}}function oe(l){let t,e=l[8].type=="köpa"&&ae(l);return{c(){e&&e.c(),t=B()},l(s){e&&e.l(s),t=B()},m(s,n){e&&e.m(s,n),D(s,t,n)},p(s,n){s[8].type=="köpa"?e?(e.p(s,n),n&1&&K(e,1)):(e=ae(s),e.c(),K(e,1),e.m(t.parentNode,t)):e&&(ce(),pe(e,1,1,()=>{e=null}),_e())},d(s){s&&N(t),e&&e.d(s)}}}function re(l){let t,e,s,n=l[8].name+"",p,y,c,U,h,v,r,k;return{c(){t=m("li"),e=m("input"),s=E(),p=he(n),y=E(),c=m("input"),U=E(),this.h()},l(u){t=b(u,"LI",{class:!0});var d=O(t);e=b(d,"INPUT",{class:!0,type:!0}),s=T(d),p=de(d,n),y=T(d),c=b(d,"INPUT",{class:!0,type:!0}),U=T(d),d.forEach(N),this.h()},h(){f(e,"class","Move svelte-171d5ob"),f(e,"type","submit"),e.value="←",f(c,"class","Remove svelte-171d5ob"),f(c,"type","submit"),c.value="X",f(t,"class","svelte-171d5ob")},m(u,d){D(u,t,d),a(t,e),a(t,s),a(t,p),a(t,y),a(t,c),a(t,U),v=!0,r||(k=[R(e,"click",function(){z(l[5](l[8]))&&l[5](l[8]).apply(this,arguments)}),R(c,"click",function(){z(l[6](l[8]))&&l[6](l[8]).apply(this,arguments)})],r=!0)},p(u,d){l=u,(!v||d&1)&&n!==(n=l[8].name+"")&&ve(p,n)},i(u){v||(u&&fe(()=>{v&&(h||(h=G(t,J,{},!0)),h.run(1))}),v=!0)},o(u){u&&(h||(h=G(t,J,{},!1)),h.run(0)),v=!1},d(u){u&&N(t),u&&h&&h.end(),r=!1,Z(k)}}}function ue(l){let t,e=l[8].type=="köpt"&&re(l);return{c(){e&&e.c(),t=B()},l(s){e&&e.l(s),t=B()},m(s,n){e&&e.m(s,n),D(s,t,n)},p(s,n){s[8].type=="köpt"?e?(e.p(s,n),n&1&&K(e,1)):(e=re(s),e.c(),K(e,1),e.m(t.parentNode,t)):e&&(ce(),pe(e,1,1,()=>{e=null}),_e())},d(s){s&&N(t),e&&e.d(s)}}}function Ie(l){let t,e,s="ShoppingList",n,p,y,c,U="Varor att köpa",h,v,r,k,u,d="Köpta varor",A,P,C,_,L,Q,j,W,$,q=X(l[0]),g=[];for(let o=0;o<q.length;o+=1)g[o]=oe(ne(l,q,o));let w=X(l[0]),I=[];for(let o=0;o<w.length;o+=1)I[o]=ue(ie(l,w,o));return{c(){t=m("main"),e=m("h1"),e.textContent=s,n=E(),p=m("div"),y=m("section"),c=m("h2"),c.textContent=U,h=E(),v=m("ol");for(let o=0;o<g.length;o+=1)g[o].c();r=E(),k=m("section"),u=m("h2"),u.textContent=d,A=E(),P=m("ul");for(let o=0;o<I.length;o+=1)I[o].c();C=E(),_=m("form"),L=m("input"),Q=E(),j=m("input"),this.h()},l(o){t=b(o,"MAIN",{class:!0});var M=O(t);e=b(M,"H1",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-15w00vk"&&(e.textContent=s),n=T(M),p=b(M,"DIV",{class:!0});var i=O(p);y=b(i,"SECTION",{class:!0});var S=O(y);c=b(S,"H2",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-1lj1vgt"&&(c.textContent=U),h=T(S),v=b(S,"OL",{class:!0});var x=O(v);for(let H=0;H<g.length;H+=1)g[H].l(x);x.forEach(N),S.forEach(N),r=T(i),k=b(i,"SECTION",{class:!0});var F=O(k);u=b(F,"H2",{class:!0,"data-svelte-h":!0}),Y(u)!=="svelte-tcetzy"&&(u.textContent=d),A=T(F),P=b(F,"UL",{class:!0});var ee=O(P);for(let H=0;H<I.length;H+=1)I[H].l(ee);ee.forEach(N),F.forEach(N),C=T(i),_=b(i,"FORM",{});var V=O(_);L=b(V,"INPUT",{class:!0,type:!0,id:!0}),Q=T(V),j=b(V,"INPUT",{class:!0,type:!0}),V.forEach(N),i.forEach(N),M.forEach(N),this.h()},h(){f(e,"class","svelte-171d5ob"),f(c,"class","svelte-171d5ob"),f(v,"class","svelte-171d5ob"),f(y,"class","svelte-171d5ob"),f(u,"class","svelte-171d5ob"),f(P,"class","svelte-171d5ob"),f(k,"class","svelte-171d5ob"),f(L,"class","InputField svelte-171d5ob"),f(L,"type","text"),f(L,"id","vara"),f(j,"class","button svelte-171d5ob"),f(j,"type","submit"),j.value="Lägg till vara",f(p,"class","catagories_container svelte-171d5ob"),f(t,"class","container svelte-171d5ob")},m(o,M){D(o,t,M),a(t,e),a(t,n),a(t,p),a(p,y),a(y,c),a(y,h),a(y,v);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(v,null);a(p,r),a(p,k),a(k,u),a(k,A),a(k,P);for(let i=0;i<I.length;i+=1)I[i]&&I[i].m(P,null);a(p,C),a(p,_),a(_,L),le(L,l[1]),a(_,Q),a(_,j),W||($=[R(L,"input",l[7]),R(_,"submit",ge(l[2]))],W=!0)},p(o,[M]){if(M&121){q=X(o[0]);let i;for(i=0;i<q.length;i+=1){const S=ne(o,q,i);g[i]?g[i].p(S,M):(g[i]=oe(S),g[i].c(),g[i].m(v,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=q.length}if(M&97){w=X(o[0]);let i;for(i=0;i<w.length;i+=1){const S=ie(o,w,i);I[i]?I[i].p(S,M):(I[i]=ue(S),I[i].c(),I[i].m(P,null))}for(;i<I.length;i+=1)I[i].d(1);I.length=w.length}M&2&&L.value!==o[1]&&le(L,o[1])},i:te,o:te,d(o){o&&N(t),se(g,o),se(I,o),W=!1,Z($)}}}function Ce(l,t,e){let s=[{}],n;function p(){n.length>0&&e(0,s=[...s,{name:n,type:"köpa",prio:20}]),e(1,n="")}function y(r){r.prio>0&&(r.prio-=1,e(0,s))}function c(r){r.prio<10,r.prio+=1,e(0,s)}function U(r){r.type==="köpa"?r.type="köpt":r.type="köpa",e(0,s)}function h(r){s.splice(s.indexOf(r),1),e(0,s)}function v(){n=this.value,e(1,n)}return l.$$.update=()=>{l.$$.dirty&1&&s.sort(function(r,k){return r.prio-k.prio})},[s,n,p,y,c,U,h,v]}class Ue extends ye{constructor(t){super(),ke(this,t,Ce,Ie,be,{})}}export{Ue as component};
