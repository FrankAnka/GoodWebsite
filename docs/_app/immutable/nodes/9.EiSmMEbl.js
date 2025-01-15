import{s as ie,e as ue,n as X,r as fe,c as he,o as pe,f as ce}from"../chunks/scheduler.C70A3bjW.js";import{S as _e,i as de,e as p,s as b,c,a as F,l as S,f as C,d as N,x as B,n as u,g as oe,h as l,q as T,y as le,r as R,u as me,w as ve,t as ge,b as be,z as Ce}from"../chunks/index.BKLcQLrf.js";import{e as ne}from"../chunks/each.D6YF6ztN.js";import{u as ae}from"../chunks/user.CpBgINzP.js";import{b as we}from"../chunks/paths.Wo-pd6Rx.js";function se(s,r,o){const i=s.slice();return i[12]=r[o],i}function re(s){let r,o=s[12].namn+"",i;return{c(){r=p("option"),i=ge(o),this.h()},l(_){r=c(_,"OPTION",{});var d=F(r);i=be(d,o),d.forEach(N),this.h()},h(){r.__value=s[12].value,T(r,r.__value)},m(_,d){oe(_,r,d),l(r,i)},p:X,d(_){_&&N(r)}}}function Ee(s){let r,o,i,_="Registrerning",d,f,w,e,E,U="Namn:",H,v,M,k,q="E-post:",V,L,j,x,Y="Password:",z,y,D,I,Z="Favoritfärg:",J,m,G,O,K,P,$=`Har du redan ett konto?<a href="${we}/login">Logga in</a>`,Q,ee,A=ne(s[4]),h=[];for(let t=0;t<A.length;t+=1)h[t]=re(se(s,A,t));return{c(){r=p("main"),o=p("div"),i=p("h1"),i.textContent=_,d=b(),f=p("div"),w=b(),e=p("form"),E=p("label"),E.textContent=U,H=b(),v=p("input"),M=b(),k=p("label"),k.textContent=q,V=b(),L=p("input"),j=b(),x=p("label"),x.textContent=Y,z=b(),y=p("input"),D=b(),I=p("label"),I.textContent=Z,J=b(),m=p("select");for(let t=0;t<h.length;t+=1)h[t].c();G=b(),O=p("input"),K=b(),P=p("h2"),P.innerHTML=$,this.h()},l(t){r=c(t,"MAIN",{class:!0});var g=F(r);o=c(g,"DIV",{class:!0});var n=F(o);i=c(n,"H1",{"data-svelte-h":!0}),S(i)!=="svelte-143zfi7"&&(i.textContent=_),d=C(n),f=c(n,"DIV",{style:!0}),F(f).forEach(N),w=C(n),e=c(n,"FORM",{});var a=F(e);E=c(a,"LABEL",{for:!0,"data-svelte-h":!0}),S(E)!=="svelte-t4ghih"&&(E.textContent=U),H=C(a),v=c(a,"INPUT",{class:!0,type:!0,id:!0}),M=C(a),k=c(a,"LABEL",{for:!0,"data-svelte-h":!0}),S(k)!=="svelte-2p4msu"&&(k.textContent=q),V=C(a),L=c(a,"INPUT",{class:!0,type:!0,id:!0}),j=C(a),x=c(a,"LABEL",{for:!0,"data-svelte-h":!0}),S(x)!=="svelte-14l7qdc"&&(x.textContent=Y),z=C(a),y=c(a,"INPUT",{class:!0,type:!0,id:!0}),D=C(a),I=c(a,"LABEL",{for:!0,"data-svelte-h":!0}),S(I)!=="svelte-11c0lug"&&(I.textContent=Z),J=C(a),m=c(a,"SELECT",{name:!0,id:!0,class:!0});var te=F(m);for(let W=0;W<h.length;W+=1)h[W].l(te);te.forEach(N),G=C(a),O=c(a,"INPUT",{type:!0}),K=C(a),P=c(a,"H2",{"data-svelte-h":!0}),S(P)!=="svelte-lwrj6g"&&(P.innerHTML=$),a.forEach(N),n.forEach(N),g.forEach(N),this.h()},h(){B(f,"width","100px"),B(f,"height","100px"),B(f,"border-radius","50%"),B(f,"overflow","hidden"),B(f,"background-color",s[0]),u(E,"for","name"),u(v,"class","text svelte-eeqw1s"),u(v,"type","text"),u(v,"id","name"),u(k,"for","e-post"),u(L,"class","text svelte-eeqw1s"),u(L,"type","email"),u(L,"id","e-post"),u(x,"for","password"),u(y,"class","text svelte-eeqw1s"),u(y,"type","password"),u(y,"id","password"),u(I,"for","Favoritfärg"),u(m,"name",""),u(m,"id","Favoritfärg"),u(m,"class","text svelte-eeqw1s"),s[0]===void 0&&ue(()=>s[9].call(m)),u(O,"type","submit"),O.value="Registrera",u(o,"class","container svelte-eeqw1s"),u(r,"class","svelte-eeqw1s")},m(t,g){oe(t,r,g),l(r,o),l(o,i),l(o,d),l(o,f),l(o,w),l(o,e),l(e,E),l(e,H),l(e,v),T(v,s[1]),l(e,M),l(e,k),l(e,V),l(e,L),T(L,s[2]),l(e,j),l(e,x),l(e,z),l(e,y),T(y,s[3]),l(e,D),l(e,I),l(e,J),l(e,m);for(let n=0;n<h.length;n+=1)h[n]&&h[n].m(m,null);le(m,s[0],!0),l(e,G),l(e,O),l(e,K),l(e,P),Q||(ee=[R(v,"input",s[6]),R(L,"input",s[7]),R(y,"input",s[8]),R(m,"change",s[9]),R(e,"submit",me(s[5]))],Q=!0)},p(t,[g]){if(g&1&&B(f,"background-color",t[0]),g&2&&v.value!==t[1]&&T(v,t[1]),g&4&&L.value!==t[2]&&T(L,t[2]),g&8&&y.value!==t[3]&&T(y,t[3]),g&16){A=ne(t[4]);let n;for(n=0;n<A.length;n+=1){const a=se(t,A,n);h[n]?h[n].p(a,g):(h[n]=re(a),h[n].c(),h[n].m(m,null))}for(;n<h.length;n+=1)h[n].d(1);h.length=A.length}g&17&&le(m,t[0])},i:X,o:X,d(t){t&&N(r),ve(h,t),Q=!1,fe(ee)}}}function Le(s,r,o){let i;he(s,ae,q=>o(11,i=q)),pe(()=>{i.length>2&&(_=JSON.parse(i))});let _=[],d="black",f="",w="",e="",E=[{namn:"Blå",value:"blue"},{namn:"Röd",value:"red"},{namn:"Green",value:"green"}];function U(){if(_.filter(q=>q.username===f).length>0)alert("Användrarnamn finn redan, välj annat");else if(f!=""&&w!=""&&e!=""){alert("Välkommen "+f+" "+w+" "+e);let q={username:f,password:e,email:w,color:d};_=[..._,q],ce(ae,i=JSON.stringify(_),i)}else alert("Fyll i alla fält för registrerning")}function H(){f=this.value,o(1,f)}function v(){w=this.value,o(2,w)}function M(){e=this.value,o(3,e)}function k(){d=Ce(this),o(0,d),o(4,E)}return[d,f,w,e,E,U,H,v,M,k]}class Ie extends _e{constructor(r){super(),de(this,r,Le,Ee,ie,{})}}export{Ie as component};