import{s as I,d as J,n as T,r as U,c as w,o as A,f as B}from"../chunks/scheduler.C70A3bjW.js";import{S as G,i as L,e as d,s as j,c as v,f as y,a as C,d as p,l as z,n as h,g as b,h as S,q,r as x,u as D,w as H,t as K,b as Q,j as V}from"../chunks/index.BKLcQLrf.js";import{e as M}from"../chunks/each.D6YF6ztN.js";import{g as W}from"../chunks/entry.rKsQTMp-.js";import{s as P}from"../chunks/pokesave.BDR1vKna.js";import{b as X}from"../chunks/paths.CRQ4AN3t.js";function R(i,s,n){const a=i.slice();return a[6]=s[n],a}function F(i){let s,n=i[6].name+"",a,r;return{c(){s=d("a"),a=K(n),this.h()},l(t){s=v(t,"A",{class:!0,href:!0});var c=C(s);a=Q(c,n),c.forEach(p),this.h()},h(){h(s,"class","lastSearch svelte-1jeilse"),h(s,"href",r=i[6].link)},m(t,c){b(t,s,c),S(s,a)},p(t,c){c&2&&n!==(n=t[6].name+"")&&V(a,n),c&2&&r!==(r=t[6].link)&&h(s,"href",r)},d(t){t&&p(s)}}}function Y(i){let s,n,a,r,t,c,u,k,_,E="Reset",O,N,m=M(i[1]),o=[];for(let e=0;e<m.length;e+=1)o[e]=F(R(i,m,e));return{c(){s=d("img"),a=j(),r=d("form"),t=d("input"),c=j(),u=d("footer");for(let e=0;e<o.length;e+=1)o[e].c();k=j(),_=d("button"),_.textContent=E,this.h()},l(e){s=v(e,"IMG",{class:!0,src:!0,alt:!0}),a=y(e),r=v(e,"FORM",{});var f=C(r);t=v(f,"INPUT",{class:!0,type:!0,placeholder:!0}),f.forEach(p),c=y(e),u=v(e,"FOOTER",{class:!0});var l=C(u);for(let g=0;g<o.length;g+=1)o[g].l(l);k=y(l),_=v(l,"BUTTON",{class:!0,"data-svelte-h":!0}),z(_)!=="svelte-xx8yks"&&(_.textContent=E),l.forEach(p),this.h()},h(){h(s,"class","pokeLogo svelte-1jeilse"),J(s.src,n="https://cdn.freebiesupply.com/images/large/2x/pokemon-logo-black-transparent.png")||h(s,"src",n),h(s,"alt","POkemon"),h(t,"class","Search svelte-1jeilse"),h(t,"type","text"),h(t,"placeholder","Sök upp en pokemon"),h(_,"class","reset svelte-1jeilse"),h(u,"class","svelte-1jeilse")},m(e,f){b(e,s,f),b(e,a,f),b(e,r,f),S(r,t),q(t,i[0]),b(e,c,f),b(e,u,f);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(u,null);S(u,k),S(u,_),O||(N=[x(t,"input",i[3]),x(r,"submit",D(i[4])),x(_,"click",i[2])],O=!0)},p(e,[f]){if(f&1&&t.value!==e[0]&&q(t,e[0]),f&2){m=M(e[1]);let l;for(l=0;l<m.length;l+=1){const g=R(e,m,l);o[l]?o[l].p(g,f):(o[l]=F(g),o[l].c(),o[l].m(u,k))}for(;l<o.length;l+=1)o[l].d(1);o.length=m.length}},i:T,o:T,d(e){e&&(p(s),p(a),p(r),p(c),p(u)),H(o,e),O=!1,U(N)}}}function Z(i,s,n){let a;w(i,P,_=>n(5,a=_));let r,t=[];A(()=>{a.length>2&&n(1,t=JSON.parse(a))});function c(){n(1,t=[]),B(P,a=JSON.stringify(t),a)}function u(){r=this.value,n(0,r)}return[r,t,c,u,()=>W(X+"/search/"+r)]}class re extends G{constructor(s){super(),L(this,s,Z,Y,I,{})}}export{re as component};