import{s as tA,n as O,d as H,r as eA}from"../chunks/scheduler.BzdGhz2i.js";import{S as iA,i as aA,e as q,s as C,t as w,c as f,a as y,l as k,f as V,b as x,d as T,n as L,q as J,g as D,h as n,r as U,j as Z,u as G,v as F,w as $}from"../chunks/index.Dd-74d7J.js";import{e as Q}from"../chunks/each.D6YF6ztN.js";function Y(e,t,a){const c=e.slice();return c[11]=t[a],c}function K(e,t,a){const c=e.slice();return c[11]=t[a],c[14]=t,c[15]=a,c}function P(e){let t,a,c=e[11].name+"",B,r,o,g=e[11].price+"",v,W,h,m,N,d,s,u,E,R,I="Remove",i,l,A="-------------------------------",S,z;function b(){e[7].call(m,e[14],e[15])}function AA(){return e[9](e[11])}return{c(){t=q("div"),a=q("h1"),B=w(c),r=C(),o=q("p"),v=w(g),W=w(" kr"),h=C(),m=q("input"),N=C(),d=q("img"),E=C(),R=q("button"),R.textContent=I,i=C(),l=q("p"),l.textContent=A,this.h()},l(M){t=f(M,"DIV",{class:!0});var p=y(t);a=f(p,"H1",{});var j=y(a);B=x(j,c),j.forEach(T),r=V(p),o=f(p,"P",{});var X=y(o);v=x(X,g),W=x(X," kr"),X.forEach(T),h=V(p),m=f(p,"INPUT",{style:!0,type:!0}),N=V(p),d=f(p,"IMG",{style:!0,src:!0,alt:!0}),E=V(p),R=f(p,"BUTTON",{style:!0,"data-svelte-h":!0}),k(R)!=="svelte-1ou6vem"&&(R.textContent=I),i=V(p),l=f(p,"P",{"data-svelte-h":!0}),k(l)!=="svelte-10dgozp"&&(l.textContent=A),p.forEach(T),this.h()},h(){J(m,"width","30%"),L(m,"type","number"),L(d,"style","width: 30%; border-radius-10%; overflow:hidden;"),H(d.src,s=e[11].img)||L(d,"src",s),L(d,"alt",u=e[11].name),L(R,"style","remove"),L(t,"class","CartItem")},m(M,p){D(M,t,p),n(t,a),n(a,B),n(t,r),n(t,o),n(o,v),n(o,W),n(t,h),n(t,m),F(m,e[11].amount),n(t,N),n(t,d),n(t,E),n(t,R),n(t,i),n(t,l),S||(z=[U(m,"input",b),U(m,"input",e[8]),U(R,"click",AA)],S=!0)},p(M,p){e=M,p&2&&c!==(c=e[11].name+"")&&Z(B,c),p&2&&g!==(g=e[11].price+"")&&Z(v,g),p&2&&$(m.value)!==e[11].amount&&F(m,e[11].amount),p&2&&!H(d.src,s=e[11].img)&&L(d,"src",s),p&2&&u!==(u=e[11].name)&&L(d,"alt",u)},d(M){M&&T(t),S=!1,eA(z)}}}function _(e){let t,a,c,B,r,o=e[11].name+"",g,v,W,h=e[11].price+"",m,N,d,s,u="Add to Cart",E,R,I;function i(){return e[10](e[11])}return{c(){t=q("div"),a=q("img"),B=C(),r=q("h1"),g=w(o),v=C(),W=q("p"),m=w(h),N=w(" kr"),d=C(),s=q("button"),s.textContent=u,E=C(),this.h()},l(l){t=f(l,"DIV",{class:!0});var A=y(t);a=f(A,"IMG",{src:!0,alt:!0}),B=V(A),r=f(A,"H1",{});var S=y(r);g=x(S,o),S.forEach(T),v=V(A),W=f(A,"P",{});var z=y(W);m=x(z,h),N=x(z," kr"),z.forEach(T),d=V(A),s=f(A,"BUTTON",{class:!0,"data-svelte-h":!0}),k(s)!=="svelte-u6w58d"&&(s.textContent=u),E=V(A),A.forEach(T),this.h()},h(){H(a.src,c=e[11].img)||L(a,"src",c),L(a,"alt",e[11].name),L(s,"class","AddItem svelte-2bz32f"),L(t,"class","Item svelte-2bz32f")},m(l,A){D(l,t,A),n(t,a),n(t,B),n(t,r),n(r,g),n(t,v),n(t,W),n(W,m),n(W,N),n(t,d),n(t,s),n(t,E),R||(I=U(s,"click",i),R=!0)},p(l,A){e=l},d(l){l&&T(t),R=!1,I()}}}function nA(e){let t,a,c='<img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png" alt="ShoppingCart"/>',B,r,o,g,v,W,h,m,N,d,s,u=Q(e[1]),E=[];for(let i=0;i<u.length;i+=1)E[i]=P(K(e,u,i));let R=Q(e[3]),I=[];for(let i=0;i<R.length;i+=1)I[i]=_(Y(e,R,i));return{c(){t=q("div"),a=q("button"),a.innerHTML=c,B=C(),r=q("div");for(let i=0;i<E.length;i+=1)E[i].c();o=C(),g=q("h1"),v=w("Total: "),W=w(e[2]),h=w(" kr"),m=C(),N=q("div");for(let i=0;i<I.length;i+=1)I[i].c();this.h()},l(i){t=f(i,"DIV",{class:!0});var l=y(t);a=f(l,"BUTTON",{class:!0,"data-svelte-h":!0}),k(a)!=="svelte-1kvwobt"&&(a.innerHTML=c),B=V(l),r=f(l,"DIV",{class:!0,style:!0});var A=y(r);for(let b=0;b<E.length;b+=1)E[b].l(A);o=V(A),g=f(A,"H1",{});var S=y(g);v=x(S,"Total: "),W=x(S,e[2]),h=x(S," kr"),S.forEach(T),A.forEach(T),m=V(l),N=f(l,"DIV",{class:!0});var z=y(N);for(let b=0;b<I.length;b+=1)I[b].l(z);z.forEach(T),l.forEach(T),this.h()},h(){L(a,"class","Cartbutton svelte-2bz32f"),L(r,"class","Cart svelte-2bz32f"),J(r,"visibility",e[0]),L(N,"class","Shop svelte-2bz32f"),L(t,"class","ShopPage svelte-2bz32f")},m(i,l){D(i,t,l),n(t,a),n(t,B),n(t,r);for(let A=0;A<E.length;A+=1)E[A]&&E[A].m(r,null);n(r,o),n(r,g),n(g,v),n(g,W),n(g,h),n(t,m),n(t,N);for(let A=0;A<I.length;A+=1)I[A]&&I[A].m(N,null);d||(s=U(a,"click",e[6]),d=!0)},p(i,[l]){if(l&6){u=Q(i[1]);let A;for(A=0;A<u.length;A+=1){const S=K(i,u,A);E[A]?E[A].p(S,l):(E[A]=P(S),E[A].c(),E[A].m(r,o))}for(;A<E.length;A+=1)E[A].d(1);E.length=u.length}if(l&4&&Z(W,i[2]),l&1&&J(r,"visibility",i[0]),l&24){R=Q(i[3]);let A;for(A=0;A<R.length;A+=1){const S=Y(i,R,A);I[A]?I[A].p(S,l):(I[A]=_(S),I[A].c(),I[A].m(N,null))}for(;A<I.length;A+=1)I[A].d(1);I.length=R.length}},i:O,o:O,d(i){i&&T(t),G(E,i),G(I,i),d=!1,s()}}}function rA(e,t,a){let c=[{name:"Ägg",price:4e5,img:"data:image/jpeg;base64,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%LqKnqWgNqFvXz/CrMklVVtuXE41A44ogAn2cpOozGvPwWdb6JiWLQtlKpJyXJttNZuMVabqeA/qDmuA0cx0DEP8ARzkK/wCztUvpB5+LPpt6fNTOtuNxatatkLEL2VcTUW22YPaQcuB4Hiqa4w6X4hDmuLI/x38CugqFVtdwa/8AyHqMvlCnr+qiyYVlKjsqZSsRauX5IH1WmVtraLdY3y3wy+3oo9VygWa+WNqPpe8WgExsToCtlk/U2bF8i1Weu17cTTI+XIrauqBERBottmFRhaeh4HYrjq1A0SWluAuMkD3S46uGxnjrxXcKFe9i72mW/EM2+I26rn8nG+WyuCtLC+uynPsuLRA55k+K7mnkFw9etgtdmnIElvWCPqF11W1tbqem/kuPHt0WLXLF9XgolktIqCW6DI+PBTGNXSMc/wBpLBVqUjgGJwLXATBljg7KctiOqr6F4uZ7Dve/TOa7MsXN9puy9C0ObXdSDq1MeycxijMBw0dB0nTqp659xv28Yzuy0mo+IIGZPT/avmhch2StWKtWnYUwBwHtE/nJdX3i3i7CpIXjgtArLM1VW%TXxZgKtOt+nE0j/IQ09Mx/wAlPo2gQsbfYzVaWzhneJg7ZKotbKlnYXvcCwav0AHF36Rz0U3wrxi979bG1Z0XKi9TlzMCDM+HFdPZKcNE67pLpjy12NtVpZUGJrsi3PMdFANyNptiiS2BAaSSMuZkq5C8cqyVmuHq3g4BxdiZhJaQ9sEEbcxwIyK6W5GHu2ud7zgHHlOgVd2yuzvaBc33me14tHvDoJI8Oat7vqAtCiTK30nNC9KxlC5dEq2/rvFai9nxQcJ/uj5FQuzlWKVNukMaI4Q0CFc1XxmuSoWyDXqgONMOcW4QSXak4WjM8gPDZc+rl1fP5ddgHLCrVI0ErlLk7Rmviw067ADE1WYAf8ZzKnPvElzRrr%EfutnUpzztxevcufttbvKww+7TxBx4vOH2R4bnnHFTn2stYSZc/P2RmZOg5DmVS0KRa0A65k/wCRJJ9SVPd9M/Cy3rWNQsNCoxv6yRhP3U11sdigRlrtn01Uak4g6rB4z+4n0UzrG89ZV7aLYGtJPkMyeQAzJXM3bZ3AOe8EPqOL3DcSZDT4D1JU5rTu6BwGXyXhas6up1Jum8DSdBzadeOXBdVSqBwDmmQcwVxIGa6q5B/RbP8Ad/7GF1+Lq/iek5ERd0iIiDmO1Nxtqf1CwOaCH6kOa4fG0jMc1W1Hy1x3AJ8gu5XL3vdgpulo9l8jwMaLh8nGeYqVIuFkUGTmSMRPHFn9VasKqLjqzQpcmhp5FvsuHmCrHvgN0n4pKBWi0ugIKk6LJrFTHAmt3NvcAMqrWvjm0uxepJ6roKl6Dn0CurRZWuEOAP5sdui4K0dkRZaxtH8RaKjCMIY94LWycg6BL42c4zxkwVzvN5Vuuru6v3jiOGvXRWzWrnux1QupucdS93QCAB6eq6GVXN2FbIWDwvcS8c5UxyN53bgtdAj/AKZktGzXNEx8iP2XWUHZKrv6oBSLz8Ba4eeE+jivbPboAkH0UeJW+lvKEqC28W8wtwrA6KpUtdprgGOp4Ruudui8w1jnFwDWvdTBJ1wkjLy+akdq6pwMpt1qOwTuGkEvI6BQLfZadWmaL2TTIghpLTkZycDIM5zKju+XTxOV7Zr5DxIwuGktdKlUrcHLnLJZ2U6eGmCABGZJPVxJJ6rKlUI0Jy4R6yJ8lk7rmm9qLZhoOA1cQwDcknQKDQaWsa2dAAthxEzEHicz0J06JCm3brd8DKhzkrSB4dc81tZuhG6we4XfE7oF5CyyWYHVBpZqvSFm1mqzMIxg0QshCwc7go9KqZK0ScO%W2OnhpsbwaB1jNcxZGYnNHFwC61dvintlERF2SIiIC02qzh7S07+h2K3Ig4wB1BzmaSSSNRJ+Js6Trw31lQ7xtJaJzJOQzPzXYXvd4qs/uGbT9PBcfaGe3Rkf8AdYD1cF5e+bzVyuqsdPCxrTmQMzz3UtpWhpStVLQCOMLq2TakEqPaaTXtLHCWuBBHIrylVJPT7LVbrUKbS4/7KUsxzXZSt3T61ncc2VHdQQCHdZK6g2lpyxCfHNckyge8q2kQatRgAaTDfZBwz6DwCj3LWtr3u/iaVOnTj2YcHvn/AIyIjquPPWTG2+XVY8MSfruIUx71yVd+Zc0Z5ZcsxMDfNXDrwy4HmY9NfRdPvF95ZKg3laO8rGmRNNgBI4uOk8sjlyVbed2Mr1GvdVrNwkHC1wDTBnMRJnxUqgyC8l2IuMkxHgAJ0Czhcd9udbKjoADScvWOJUijeGEf7UZzV7T8At1jGu/G8PMkjIcGg6wBvlqZXpC2yV4WrBi0ZIwZrKEEbLRmQhas7LQdVkNaSBqdB5qwFzVP1N8z9ls5t/BUrwKw/k9bg09Vtbc1Xi0dT9lv06/hqprnJRqFdT7wsrmOLHQcgQRoQcvoq6hZXDwUXxRKs1MveANSYC6iyXTTYM2hzty7PPlOireztl9ovPw5DxP7fNdCu/xc+NZa5S87OGVXtAhphw4QRB9QVBo0DMrrLwu5tWCTBGUgZkawvaN2Um/DPjmsvxW01WXJRl8/pk9TkPzkr9YspgaADwELJdeefrMZRERUwREQEREBcn2ru14BfSjFiZUZOQ7xjg/CTsDGvNdYtdekHNLToRCnvn7RsuOfZeowg4SHbtO3GToeij2i9XtBIjjC13hZHU3Qd9DsR9ColfYrz3qxcvlaWC3Yy105kEx0P2H4VpvyrjaGNzzzI0A3M6TyVc0OmWgeJ1HmtmHdzpKdd7FddS3YwqNGi9pnJewvGhc0MCM1sp028Ci2RktCOS8LUpVgclscUGCyC8FM+HivcGYaDmSB5rRk0EmAczsASfIKws91vccxhHEj5DdXtmszaYhrQPmfE7rcu0+L+p1BoXVTa2C3EdydT9lGtlxtdnTdg5RI+eSt0XT6w1qs1AMaGjQD8K2oipgiIgrr0u3vS0gwRkfD8+ayoXTTaMwXeJ+gU9FP0m63WNOmGiAAByWSIqYIiICIiAiIgIiICIiAiIg0WyzCo0tPQ8DxC420Mc15puABHDfn8vNdyue7UWLSq3kHf/JPy8ly+XnZrYo2NWeS9puBzWmu+F51JYasQxaadXJeEmJnNBv9kbrEvnRdNRuelgALMy0AnOZjMjgVzdpsxp1HM4eoOYKvri8s1U1K8PhTqFQkrXUsWJ0zmp1hu15MASOOw8VzktrVnc93Co0vfMTDQDExqTH5kryz2ZjBDWgeH1O6WaiGNDRoBH3K2r2c8yROiIipgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICj3hZ+8pvZxaQPHb1UhEHAU3ZkHIjJw4HY+BXtanK6O+bmxuFWnGIDCW6YhPlOe/PiojLjqE5wBxJn5ary34+pcVqjpsI2Kt+z1mD6kkS1oJ1+ORhy3yxeiubNc1NvvS489PJT6VJrfdaB4ABXx8Vl2lrNQ7ZdlKq4PewFwBAdmCAdpCmIu9mpQrNddNmYEnic/2U1EWSSfgIiLQREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",amount:1},{name:"Päron",price:40,img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIWFhUXFRgXGBgXGBUVFxcWFxYXFxcVFxcYHSggGB8lHRUVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tMC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABAIDBQYHAf/EAD0QAAIBAgMEBwYEAwkBAAAAAAABAgMRBCExBRJBUQYiYXGBkaETUrHB0fAHMkLhcrLxFCMkM2KCkqLCU//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACcRAQACAgICAQQBBQAAAAAAAAABAgMRITEEQRIiMlFhwRMUQpGh/9oADAMBAAIRAxEAPwDuIAAAAAAAByza/TGrgdo1YRjKdK93TnK1pSs3Om7ZK1mlmuszqZpf4j9HPb01Wo0t6tF2lb80qdnw/U07W8Stuk17Zjo70npYxyjCM4SjnuzSTcdN5Wb45eRnDhWxNoTw9WNSN96D0eV1o4vwyO34PExq04VI/lnFSXc1crjv8uJTaNLwANFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAck/EHAexxjmvy1Vv8AdLSXqr+JvXQStvYSK92Uo+F7r+Y1z8W0v8M+N6i8P7sy34b1L0JrlNPzivoc8cZVp6bcADoVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxjMXTpRc6s4witXJpL1MP0r6UU8HD3qrXVhyXvS5L1fquSbZ2rWxM9+rJyfBaKK5RjojHJminHtaI2y34i9JqGKrUVSk3Gm%k04puTWl/4TbvwvqJ0qtvej8Gc2oYBa6mZ2JtueAn/AHd3CVt6Du1e2UlyZzxmrN4mVpj1DswMLsLpJRxKVnuz915Pw5maO2JieYZgAJAAAAAAAAAAAAAAAAAAAAAAAAAAACFtnaUcNRnVnpFZLnLhFd7JpzT8Udr7044eLyh1pdsmsl4J+pTJf4V2Q0naeNnXqyqTbcm95vh2JdiWSRVRp8XwI9DJevaSvaKKSaeZ4uTJMy0TordUeW8vv1JNbDXzIUZJxa5+FjJUa29FGXykQZU3C7vbjxdu62ZuHRHpc1u0sRK8XlGb1XJS5r4GtVVfQiVIW0++81xZ7UlDt0ZJq6zTPTnfQ3pRuP2NWTcL2Tf6X9PgdEPZxZYyV3CgADQAAAAAAAAAAAAAAAAAAAAAAAAWsVXVOEpvSMW34I4TtXEurUnOWsptvxdzq3TzHblBU1rUf/WOb9d05NKldt563/Y4PMyf4rVWcPHj6/1Lsp5q+vwKaTztktcg3d+PmeTaeUyl0pMkYOesVw07uRChK3eSKN1JZZP4k1ncEJ1yirbx5FMnx4M8qSevD7zKyLbaV/tnQeg+3/ax9hUfWj+V31S/T3pZ93cc+3uK4vMtSx08POM43yad753Tur28Mjq8XLNLmtu6AibKx8a9KNSOjXk+KJZ7cTvlQABIAAAAAAAAAAAAAAAAAAAAQ9sY1UaM6nuxy/ieS9bETOo3I5z06x/tcTJJ9WC3F4X3rePwNXaklpmTK0m228223cjVVzbva68dDws2T5WmWvUIrl58bcj2Mc/vI9bz++BYqVJWv+VebfcjnlWUinlfUk07SWpB7L377fP5E/C0kuXYTX9IXt+90RpTs7vT7ui9OTT+RYrSvddnmyYS9pPeXV1+8z3EUd5LeycXe7V78eHOxd2RiOu42v8AS1rX8GZqjgot3tr6dg6twtEMj+Hu2txulN9WWfYm3n8ToxzRbHg87Z80TaUsRT/JiKnc3vrync9LD5U0jVqqzVvwNXwnSWccq9O69+n84N/B+Bn8Dj6dZXpzUuaWq70814nbjzUv1PKsxpJABqgAAAAAAAAAAAAAAAANM6f4/KNJPRb0u93UfJXfijcak1FOTySTb7lqco21jHWq1JN/mu7clovRJHN5V/jTX5WrG5YiUr2a/fvI9a17c15IvzjYhVG7382zxLcr2evs0uy3vNlTbtrnxfDyuWHe+vEzlmu8Vl3kyjmrZu7/AKaGPhXTyzduZJw+IzXn26lsfEpSMTln98PqYqvW1fb5pE7bWIShFxzvvejtx7zXatW7Svq7G8V3I3nodhlOMpNcTY/7Ju6aGK6Dw6kuV/kbZ7O5XFjjJWZ/bSJ0sYTSzJMqKLM6W7oSMPVudWPj6LEx7WZUCFWwOalFuMlpKLafmjMuJTOnc0tihVGwm36tPKtH2kfeVl%WkvQ2DAbRpVlenNO2q0ku+LzRr9Sh2EGvgc1KLcZLNSi2mvFE0zZMffMf9/2iat5BrGA2/OD3a63o+/FZr+KK1715Gx0K0ZxUoSUk9GndHbjzVydKzGlwAGqAAAAAAAAAAAYbpZi/Z4eVtZdXw1fomvE5bNXTlpf0z/c3np9is4Q/wBLb8Xb/wAs0iUk7W0v8v6+Z5fm3+rTXHHtErSdu7lzIiWWfPz7yXW0duDRYqO/Zbh3Hm7RZbcXu304WIs5br17yRVqX88uBCr69vLs+Y9KqqD61+D0JTyzvndeXL1LSq6ZWb9D2VRWzs2svtEVnkQ8bFWyejflxXmYfDzvVgv9SMjj55a2RiMN/nQ/iR2444kdZ6FTsmudn5m5wNG6JT6/ejeIFPFnUTH7WVyjcsONndEm55OJ2Wr8oTElOdysjpWL0JXFLb4ntMwSiW50y8eNEzVCFU%I1FToy3qTtfWOsZd6+epk5QLUqZnNOd+0Mrsna8K2T6tRawfxi/1IyRpeJwt81lJO6ayafNMzGxttOTVKtlP9MtFPs7JdnHhyOnF5H%v3+VZhnAAdaoAAAAAAADnnTSp/iZWzaUf5U/matWa3rLS3rxNo6b0d3ESmlqovyil8mapjYtO65L6P4njeVH1y1r0sSs49vo9CO5L9PL5nsE1fO8brLUprUuy3p96HFPCJWZR4v+rLam9Ne3TwLk52drrjbwI8HZ3en7lZ6VXIzs8/2I1Wb4FdaS04kWs7ZMmsIUYuWWZiqS/vYP/XH4om4h3RAStJPk18TuxdDpfRudqi7X+x0Kmc22Q7SjLtR0fDu6Rl433TC8dL8cyspseo74SplEt5pl8olEpevuE7eqRUW4citotWdwaelMkBvEyhalTIWLoKS0MinconAzmsTAv7A2q5P2NV9dLqyf64r/ANL1WfMzppeNw1807STvF8U1o0bJsXaPtqd3lOOU1yfNdj1X7HR4+Wfst36/akwyAAOtUAAAAAaZ09o9anLmrf8AF3+Zos4Xt2XS9LeiOn9M8NvUN5awkn4PJ/I5nWSSeV35XTzPM8uv1NK9IMpWk1bV+l/qW674%h2r6okVHGyyz4eBRXgmrcU8vvxPOmpKDVi7acfTn2FlwfBffaSZRS4+olG3Aa9Kons1y8SzXp63JNSFskRqzvx7y1KcoRG8uBjK6z8GZSrGxEqQ7DppwNv2ZUuovmlJeSOlbOnvQT7Dlmxc6cWvdtrxTt8jo+wK14LsMacZF46ZuL5lViiB7JHoR0KhEozK+ArO5SjvFRlOUU+tC28uSejKpVHqc72zjJYfbVOUm1TrU4w1aWbaXipKPgze5O+T4lbxMSmJX4YqLdnk/TzLzRyra88Vgq8YRk9ybtF23qdRtuy3X+SfNRavrxN42NisTCC/tVJRTdt6M1Jxu7LejwV2lk322IiZ3qV5%uGbZUkUs9iy0cSzlRVhcgwruhVjVX5dJrnB8e9a+fMyTImK%TK3ie47Q2pO+h6Yfozid6k4PWm93/a84+mX+0zB347/OsWZyAAuAAAt4ii%lCSupJp+Jyba2CdOc4T1i7fS3fe/kddNa6Y7F9rD2sF14rO2ris/NHP5GP5V3C1Z05o6ai1y4LXxLclbK19b9xOxMcmua17WR5Rsm3x79DyLwtLHzpu7ata+fG/kU4l2zv2mQnBWv8PmQq9PeTT4FY5VQ3TbV75ltwJsdLWfieSp2eRbekSxdWl2Fn+z+plKsOBR7LgaRIkbBj+nlL45/XzN26M1Um4t5vP4ml7MjaX3qbBQxG5NS0+/6lLx7herfodhciyJgsQ%TWjJbidtLbjcDySEWVWKWi6Wr9OtgQxNJTcbzpb0o2yb6v5e1NpZdhI6LY9YnDU6q4%1bfVdle+d7WfiZ6cbow/RzYawcZ0oNunKpKpFPWKlbqX4pWy9RKfSZi8HCrBwnFST1TV1lo+xrnqiFVpV8qe8pQuus776Sd92+ktLXefeZmKKnBEaTE6W4LI9aPZIRItAqRRVWRcLcy09KKdhJxxEktJQd++LVv5mbIaxgq6jXp30k3HzWXqkbOa+LMfGYj8q27AAdKoAAAAA0vpT0azdajHJ/niuHNpcV8PhpVam3pbseuf3kdpNe270Wp1ryppQqPPlGT7bZrvXkcmfxvlzVaLOYpt5NW4o8kvviZTaOyq2HdqkWld2lqrcLNfAhSpq19Dy71ms6mEzCDKFlzPN298vvkS%y5/fYWfZlUIzps93LN6feXgSXHs/czWwejFWvUtKEoQVt6Ulu2Ule0b6tr45muOlrTqIGAp092zS4/slp2mTnnH77rHSNi9FqNBXklVnvNqUorqrgorh365mE6a7J3Z+2iurPKVuE1o/Feq7TqnxrVruU7Yno9tHce49NF36G2UpnNq1J5braz9LG09H9rbyUZPrc+Zy47/051PS/bZVmessxlxLm8d0TCrwXPShkb0sqZTcokUNsrN06XHIqRbpl1IRzyS9RTIqSKKhKqDVp71WlbVVYPykmbgaphYOWIppcJbz7Elc2s08SPun9/wAKWAAdioAAAAAAACmpTUk1JJp6pq6fgYHGdEcPNvdi6d/deX/FprysbACtqVt90DTH0Ahe8a8l3xv8y5R6B079etJ9yUfjc28GX9ti/Cdyxezuj2HoZwppy96XWl4N6eBlADatYrGohAWsVh41IShNXjJWf17y6CRyzbmypUakoPvT4Sjwa+D8TDTvF9R2afodc21suOIp7ryks4y5P6Pic02lgHTk4TVpLW/xXM8zyfH1z6a1ll9j7bUrRm89E+ZsEJpnOdy2Zl9m7YlDqvOP3ozkpktj4nmFtbbpCYlExmE2lCejz5cScqp10yVtCvS44lNhGZW7FuJFuxXFlLZR7QjekrrkRa9SxTWxKS1JGzNlyqtTqZQ1UeMu/kviUm03n407R0ldHcK+tVa/NlH+HW/i/gZo8Sseno4scY6xWGczsBb3pe76g0QuAAAAAAAAAAAAAAAAAAAY/a+yYYiNpZSWklquztXYZAETETGpHMNtbGq4d9aN48JLR/R95iFL7Z2ScE000mnqnmma/tLohQqZwvTl2Zx/4vTwOLJ4m/taRf8ALn1ObTyy8/tE7D7XnG2dzJYvoXXj+Rxn3Pdf/YhPo3iU/wDJl4WfwOO3i2iel/lCZT25zRKjtiJi4dH8R/8AGfoviT8N0Wrt5xUf4pL5XIjBm9bNwuy2sixHGTqS3acXJ8ln995m8J0Rgv8AMnfsjkvN5v0M9hMHTpK1OCiuzV971ZvTwr2++yk3/DFbI2Du2nWtKWqjqo9/N+hnQD0MeOuONVhSZ2AA0QAAAAAAAAAAAAAAAApl9T2OgAHoAAAAAAAAAAAAAAAAAAAAAAAP/9k=",amount:1},{name:"Apelsin",price:40,img:"https://www.menigo.se/globalassets/inriver/resources/741718_0.jpg?h=960&mode=max&quality=75&ref=181501&w=960",amount:1},{name:"Mjölk",price:1e3,img:"https://assets.axfood.se/image/upload/f_auto,t_500/07310865000194_C1L1_s11",amount:1},{name:"Kaffe",price:100,img:"https://pricespy-75b8.kxcdn.com/product/standard/280/593908.jpg",amount:1},{name:"Köttfärs",price:100,img:"https://www.icagruppen.se/contentassets/73424cae1ec44e96b724ffa29eea092a/notfars.jpg",amount:1},{name:"Falukorv",price:100,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQph_mLJ2C1JY31dU34ua2XRmdFYGArkPrNng&s",amount:1},{name:"Kycklingfilé",price:100,img:"https://cdn.kronfagel.se/app/uploads/2021/10/01135413/2624_Kycklingfile_460%-1.png",amount:1},{name:"Rostbiff",price:100,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQPOquiA6DR3hG_zVruhO-l9JSVU-aGDU_qw&s",amount:1},{name:"Bacon",price:100,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbEcaHc9hSzCw60SLIx2B3ycltG29XuzPfCw&s",amount:1},{name:"Monster Energy",price:20,img:"https://bulkmart.ca/cdn/shop/files/MonsterEnergy-MangoLocoPunchJuice-12x473ml_1024x1024.webp?v=1721078499",amount:1},{name:"Morötter",price:100,img:"https://assets.axfood.se/image/upload/f_auto,t_500/07311042001546_C1N1_s02",amount:1},{name:"Västerbottens ost",price:140,img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUUExMWFRMVGBUXGBUXGRYbGhgaGBUWGhcXFhgaHSghGx0lHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy4lICUtLS0wLS0tLS0tLS0rLS0tLTUvLy0tLystLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBKwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQCBQYHAQj/xAA/EAABAwIDBgMECAQFBQAAAAABAAIRAyEEEjEFBiJBUWFxgZETMkLBByNSgqGx0fAzYnLhFENTssIkc4OS8f/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAQACAgICAQIEBwAAAAAAAAABAgMRITEEEkEygSJhkfATI0JRocHR/9oADAMBAAIRAxEAPwD3FERAREQEREBERAREQEREBERAREQEWNR4aCXEAAEkmwAGpJ5BajBb1YKrZmJpT0c4NJ8A6CUG5RfGuBuLhfUBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAWFaq1jS5xDWtBJcTAAGpJOgX17wASSAAJJNgANSSvFN9966mPqGlRzDCMMSAfrCPjd20hvgTcgCJnQs7+b5OxZNGgSMMDd1x7QzGZ3RgMQD4nkBodmbBNbMA7iaWgtLqTDDvih7gSBziVk+oAGtDHCYl2WYlswS0jigcrD0DdbV2gQSBkcORg373MrOL7W02j2VsG4jDYo8LiD7NxykyBoOEi86aA9F02yfpBxtMRXpMrgRpNOoQeYgZXaGwA0XndTFOdEn3dNBHp4Kw3aLy0tteBMXsZseU81afb4Rw9o2b9IOCqnK9zqDxq2s2I+8JaB4kLp8NiWVG5qb2vafiaQ4eoX5/o41hZxNcXj3XAwBGgtBgGbdz5UqVR7H56dWpTedXNcQe3ux6KYmfmDT9JIvFtk/SHj6NqhZimD7XC/ye0fiWldxsb6SMFWgPcaD+lT3fKoOGPGFO0OxRR0K7XtDmOa5p0c0gg+BCkUgiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAvj3AAkmALknl3KPcACSYAuSeXcryHfXe12Ne7D4d4ZhmznqE5faR1P2O3%oFEzoZ7974nFk4fDH/p5Ae+/1pn3Wx8H5+GvL0qAZGcZGjrmfF9YkxMmNBc+cdAMY5rJax7ozVHm1MansXRyPbQm02Kw1V7Q4upkSxrcoALnunK2AJBjrA05QVla255WhXxWPeOCm8ZAByN+5zyZmfHwWsqNJJJuSZJ6k6qxXpPZmzMIDTlcRdoP2S4SJvpKr+2V6xEdIYFi3p2NT4RnfTcKIrVMwDmsB0BIymTLSBBPGAqmwsKKtWXAmnTBqVABJLW6MHUucWtj+ZbLaTvqj7ao2nUrvNWsNXgCRSpCmLiLu4i0e6Jss73/FEQmIfNjbSo0W1qNQl9OpkuA6LZpNxLTdsEA3ar1fDYc0WNHBLyWve3K57coEZ3CdSTwtiIt11ODqsbSe6lT43ObRoveZeXuu5wHusytiIBILhxGFBtRj6tQsYZp0RkNRzobmH8R7nutJdJ6myznU270t8Nri9iMJmm6GCBmcS5zj1yhojn2WtrYBwmQCBebeusqtSxVGiC2BiCf5Q1jT1a4jOTb+UeKrYjGMMZKZp9RnLh5BwkepWlPb56/f57ROlzDPdSM031KR5mm4g/gRPqup2bvPj6WUuxYe06Md7J7jbmTf8VwwxRWQxZGhhaTE/Cr1DD/SFi2+/QpVBrwl1Mn1Lwf3ot/svf8Aw9SG1GVKTjoCM4MXOUskn0C8awmNJJl0wNDOg5W0F/xU7K599tiHhwkmJGpOuth6+dfa0cJ1D9BYPaNKr/DqMf1DXAkeI1HmrS80ZSFRtN7GNexwaRmAMZrgkk28gVr9v7ytwsU6Ze7EkwKdKrVytJMNzBpEnTgib8tVhj8r2nXrytbHr5etouZ3GbtD2WbHuaSYyNygVAOftC2G9LAT1PJdMuxmIiICIiAiIgIiICIiAiIgIiICIiAsajw0EkgAAkk2AA1JKVHhoJcQAASSbAAaknkF41vpvi/HPNChmbhAeJ1wa0G5/p6N5xJ6CJnQn3+3xfi5oYXN/h5h9QA/Wxyb/JY+MdNeNzCm2QAXcPFH2gSJ6aHxsfHYYiu2mWsaXlxbZg9m4tsIObyJAk2IkcjSxWIc9vsw32epcHEA1CSCDoLiNO563y3NlulRlapUIpgkybNudeQ1K2myt1sY8Oez6qBZxcWl3UNi/mbKnhxW%nKRoHc46HQ+q6rC771WiMRQzAf5jLdrg8J8QQmf2rT+VG5/f6leZ/E5ipiMVhXfWMIIBa1zxIbmMudTPu5ydXXKkGLwdWPaMdSygmWS573HNMviOhu3U6tAg9BX3lpVtapY3lTykE2PvumCJjhBb%ktccPRqG4ouLi48BaIFoEMynMb6mB1K54yz/AF11P5L+v9pUWbPqszChXkuLWkMeQKgMnhIPG1t5JAAutTUwr2jMWnLMZhds9A8S0m/VdOzYNDKc7n0TBmDIgzlBzDiMCSGk6dLq/T3dxLG5qNRlQZQ1udpa5rejPszz0nmrR5NY7n9f+9E0lzZ2ixopeya4mk2xfEBzrvcGjUknmeQstdiaz6kZnTGg0A/paLDyWy2lLH5cRQNN3OBqM02vB1ILyXEx4qp7BjhwuuRIHfm2NfPRa19Y5/yrO5UCxfMqtYjDOaXCJye9lkxrc20troq1Mlxga/vRa7jtXSTCYYvcGgxPMqbFbPynhJLToSLk3sAJ6KR9ONAOsggxEmRz5d0w73EZWtILtIsZkHhAudNI0WftMzuFtQsBzGBud12gAOvmBPYXgCRBI00Kh2lXFMlogtMmZtB0tqIHl0i66HZW5GKxDRninTmS59uUTAuT2su63W3MwdCo3g9tUF89QCJA+BmgvzMnuq19d9k7cluvsjamKosZTjDYeLVXghzmkk8A94i9iMoI5r0HdXcbDYI5xNWv/qvi06+zaLM531vqV1CLatYr1CszsREVkCIiAiIgIiICIiAiIgIiICIiAiixOIZTaXvcGMaJLnEAAdSSvJ99fpFdWDqOEJbTNnVrhzxzDBq1vfU9uYYfSnvn7UnB4d31YMVnj4yD/DB+yDr1NtAZ5TZVWnSp5veqAiWnkCTxNnwi2hcDeIWsYwDlfl2UrYjMSJuMt5PQ9AOXkqWjcJhLBc7NAc52vCLk9gNT11Vym4jhIy6zdob5B/CPKFTq4epDS2Tmtq1150BFiq5xNQWLnDlBJ9IPmpiY+BsxWAaGjS1+IDxLhLXc+SwDQTa/M5Rprzp/MLXjFnmGnuRf1EFff8SLEhw7i/oD+qC57MExla4DW0nX+SDzmcqrvwjSSGk8zA4oHfRwP3Ua/NZrw8dDE/8Aq8/7XLB2NBhrwQW24gXerSZbHYoJMNVrU/4T3RezDr/4zeNdRyXS7H37e0ZawDjoHjhI8dQT6BczUdmGZxGWwm72ie8h4NrD8lTyA1WtDQQS3hYS+RzgAyeZixVLYsdubV2nc/Erm38c2tVe/M9zpgOdFwNLTwjsLLXUXDMJE+YHhc6Lp8NgqelMgOdMCCbREguJBjWWiBaYghVK+NZQe9jaZL2kjM60xqco5H5yn8T24iP9EV0ouwL3BrWlwZOYgxOY2mAbnx5Husq1JtEHNxF2oBDpubOJgwbTHRWMPgcVioLKZItDvdaINi0kx6XXS7G3Ea0h2Id7Qj4Gzkt1Jgu8LeaxyZqU+qfsvWs26c9sDZWIxfuxSoixqEerWnVx/DqvSNi7Gw+FbwNzOOr3Xc7xPy07Ky2iGtAaAALACwA7DovmYx0XBk8q1544hvXFELdXGk85jyHotjsGpmqns38yP7rnmuXQ7rM/iH+j/ktPGtNskbVyREVdAiIvWcoiIgIiICIiAiIgIiICIiAiIgKvj8bTo03Varg2mwS5x5D5ntzUmIrNY1z3uDWtBc5xMAACSSei8G3+35fjKmWmS3DsPA37Z0zvHhMDkD1QQ76b61cdU5sw7TwUv+dTq78BoOZPNCuoW0y5stIcby0e8O8c/JQ3Bg2PRQlfbiVOzHWggR6fhp+CoYZuYx2MdzBgeq7Hdz2DGF1NuZ5blzPaxwaXZYkOzA3JEANnLBsQUGhbimxYlp7FzeV4iRyjQfp9qOeROcuA+1xAWjW8fguuxWGwn+HALKdKm8e+0F1RoZD6hh2tnMAOaZIsQQuAL4ccpMSYOhjkSATBjlJ81GoFhzjOZwkGBmbHLLz8Ldb+STmINItBPIk5mw2+uvO46KFmLIuRJtcSHDXQjxOsqPEuaYI9IAPK5Isf7KJqbZVKfJsucPeERfo1pOYxe8DwCiaZIBMSQJMwOUnnAX0Vndj4ta4+pBXwiTpCmNjaYPZQLXPdVpgMLZuHA5iABZwuTyOUQJlStx9Ok9wp2bkLZF5cXGZOpGWBYxrBvmUGyNg18SfqqZI0LzZo8XH8hJXo27m4NGjD6/1zx8JtTH3fi87dlhkyUr9U/ZetZn%Wxt28VjHe1DfZscZ9o7NH3ObvK3cL0PZW5eHogODDUfzdUg36tGg9J7ro/bBoktAgaTMfJYOxRdyjsuLL5E3439obVx6VX045L49ZmpOqgqOM9lw6bwxc6AsJ6r696iJJvyCtEEvobp+/RdTu6BkdA+KPwH6rkXVV1+7A+oB+05x9Dl/4rv8O%ufNPDbIiL03MIiICIiAiIgIiICIiAiIgIiIIsVh2VGOZUaHscC1zXAEOB1BB1C8h31+ih7SauAlzdTh3HiH/bc7UfyuM9zovY0Qfkyvg30nllRrqb26teC1w8Qbq83GNIAc0kD71+t+IeTl+m8fs6jXblrUqdVvR7WuHoQuF3i+iXC1pdh3Owz+gl9M/dJkeRA7KB44cO13uHyEnn8QiWj1X0GoOWblIkn1bBPn0W82l9H+NoPLcjakfFTe3ys/KfwVTEbNxdIS+jVAHMszgfeggc+ar71mdbW1LWvxTog2F7XPj7xMKFSDEu6hw6O4h5dPJRPeDo2Ot5HlOnqrIfcq+ZFvNhbs18TDgMlM/5j9D/AEDV35d13myNzMJR4nzXcBb2gGWf6BYjs4lY38jHTiZWrS0vOdk7CrYg/VMJHN5s0eLvkJK9A2FuJRpw6t9a/poweXxeduy6XDNyiA0CNOg8FK2oAb66rz8nmWtxHDorhiE9Gk1giAALACwHQAL4KhBM+XggMqEnuueZlpEJKjp5rEO6f/VGVi109lXSWTwVXqBTOrNiIv1UTAHGGhzieQAP5JFdm9IQ2/M/vqo6zj/YLfYbYlV/vkU29NXHxiwW5wOyqVK7W8X2jc/28l2Y/EtbvhjbNEOb2Xu6+oQ6pwM6fEfL4fNdfQpBjQ1ohoEALNF6GLDXHHDntebdiIi1VEREBERAREQEREBERAREQEREBERAREQc1t9n1s9Wj5/oq4ar28Hvt/p+ZVKi6QvGyxrLZ11+mGl21uvhsTJfTh/+ozhd5xZ33gVodl7k0KT8zyapB4Q8DKPFo94+Nuy7kNkqtUgFUvmyRXUSmKVmekTWr6yxXw9lkwEjwWERtqNfN5ssnfL9yoi5YudOqnQs06uqwNRRtaYWLKZc7K0Fx6C/78VeIlHDJ9VZUKL6hhrST+7/AN1t8Bu+dapj+Vpv5u/T1W9o0GsENAA6BdmPw7W+rhjbNEdNHhN3udQ/db8z+i3eHw7WCGtDR2+fVSou7Hhpj+mHPa827ERFqqIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiDQ7wxnZImQfzWrFjey3m3mjgceUj1j9FpKr2uPT99F5Xk11kmXTjnhL7WIVbFPBMgLPLb3mnzj/dCrEwuW+9aa1fDeyyquDRE3WBdF+Z0UDAXkQCSelyfAKsR8LJAVLTZJiC5x0aLlbXAbAebvOQdBBcfk%W+wmDZTEMaB1PM+JXbi8S1ubcMb5YjppcJsJzoNU5R9luvmf0W8w2GZTEMaGjtz8TzUyL0KYq06hz2vNuxERaKiIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCptLBCszKTF5B7/srncTsiqw6Zh1b8xyXWoscuCuTme163mrhjAmTJ6DTzKiBkiBJOjRz/VdviMJTf77Gu8QEw+EYz3Wgd+fquWfCmZ74aRm18OdwO773nNUOUdOf6BdBg8DTpCGNA78z4lWUXVjwUx9QztebdiIi2UEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//9k=",amount:1},{name:"Skogaholmslimpa",price:50,img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhEREhUVFxYXFRUYFRgXEhUYFRUXFxUaFxYZHSghGB8lHRUVITEhJSkrLi4uGh8zODMtNygtMCsBCgoKDg0OGxAQGy8lICYuNzUxNzgtLTUvMjcrLS0tLSsrMDctLS8rNS0vLS0vNy0yNTAtMDUrKy0tLS0vNzgtK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQIDBAYHAQj/xAA9EAACAQIFAgQDBgUCBQUAAAABAgADEQQFEiExQVEGEyJhcYGRIzJCobHwFFJiwdEHwjNDcuHxFSQ0gpL/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAwQFAgEG/8QALREAAgEDAgMGBgMAAAAAAAAAAAECAwQRITESQfAFEyJRYaEjMnGBseFCYsH/2gAMAwEAAhEDEQA/AO4xEQBERAEREAREQBERAEREAREQBERAEREAREQBERAESkuOLy3Vq22EAvRKUa4vKoAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAnjGwvPZaxB2gGOzXlJO89ZpbZYBeoVbGx4MzJGGZGHr22PyMAy4lC1ATa8rgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIlipikXkwC/EwlzSmTYNf4Ef5l1MahNr2PvAMiWMQeP3z/4l4GY1VvV++kAtPKAZUT+coY32gFLNKA0vMOplBEA8ov6hfjrJaRK8g8+3SSqNcXEA9iIgCIiAIiIAiIgCIiAIiIAiIgCIgmAJg5pm1Kgt6jAdl/EfgJh57nq0VO4uOp4Xtf/AANzOWZ1mTVmLOzEHv8AebsLcAew2kc58JNSouZL+J/HdWpdcO5oqOWCKzt8CTYfQntNDxGYajeo1eo38zVAfoCpt9Z5iqpZrWsBwJYqC/x7/wCf8ys6rbL8aCiips0PA1f/ALMlMqzzE0LMruoG4QspFj3DDSoNuTIVF0glQNXc8D/HxP0lFFQxu+pyNyB90H4nmSRkQzgjtfhjxX56gMUWp1CtdW+H+P2NhXEaiZwEYirT3pqlMd76Tf4ggkfOdJynxDqVLn1WAvwG25A+VzJ4yyVJwxqjd2cS3/Efyj5zFo1dQvYG/wCUu00HVQfrOiM91nme3v1l6nRHaZFPDLzaAYuHoMeOO/SSdGnpFr3lSz2AeRPYgCIiAIiIAiIgCIiAIiIAiJ4zW5gHpM1TPfFCrqWkwOm4LDfcchelx1PT4zD8WeJ1saSNYcMwNr91U/qZznF48k2XYcDi0r1K2HhFqnQSi5z2RJZjmPmMS5vbcDewJ/U+8w6NYD1NTDm+2rZV7WHWZaZfSRbVTV1k2JVbqG0g+WAd2Yhw3YgDSTzKP4Lyz9sQqgAsFILEkX0D+r8gN+LXrybIo9oRUsOOn1KDRq1rksqoN2awRFHu3Py5mDWFNdlHwdhu3/SnT53P9pWu7OLnTRoD7i2v81HNRu7Hb3G0t+eFB8qnoFiWqsftSP8Ar/5Y9ksfczxamm2RSZaTyugDqw9X06fvaWa9EEjT6VHH8znufb9jucutX29RsBxcW+Fx/t+Z9ozE1C+wuqsf/s3uew/fvJ4leepiYuqu5HTbUxvbva/9pTk+bua1MA+lPu9+Lkn424kZnGJDHSuyrsPe37+s8yUXcW5ufzUgSQhPofw3XFSkrDg8SepUZp3+m1S+FAPKswP11f7pvNKSorNYYWnLgWez2engiIgCIiAIiIAiIgCIiAIiIAiJS7AC5gB3AFzND8XeLBYpSYW6sOvsD/eW/GPicMDTpt6epH4/Ye36/DnmmKxRZiT9JVrVsaIv21tnxSL+NxRqG/5dpjA22nqrtq6TOy/CNVZVVCzEgKo5J/e/YCUXI1VaqtFxeixqzOyavuoYtqA0o1g3loNR9%VckC+y3vNkxOS+io2IXygqacNrIClywLM+9yxsSQehPJF5sGR+DKVKmPNu1U7sQbKP6R3+J59uJE+LcroYZ1xL66gAsiMxYaxza/FxbbjYy4qbjDMj5mFou84M5Xn5kdgMqQkNVZip+652Z7D8AbcKB1IE17Ocamo6NqSn0Dksf5z3PYS7mOduyes/a1RfSPw0r2Cr21W37D4yCqH8TsFHc/7B1+M5TWyNbD5nlS7m5v3C9vdpHZpitA5uzAgW6KeT8Tx7C8yDidWygrTHP8AM1v1+EjMRhmqHW+w6L1A6Xk0UQyZGUqRc9lE2HIqIGpwOBZfmQCfpt9e0iarfhGwm05bgjoSlb1uwBHbsPlf6kzsjydP/wBP8Powynq5LfUm35TdaMgMmoBEVBwoAHyE2CiJKis3ll2IiDwREQBERAEREAREQBERAERLdesqDUxsP3xAK2a05p4y8bAsaNLdRs7fzew9v1mF448ZtVJoUWKpwxHLe1+3w5+HOF4T8Jecvn4jUtEGyqNnqm/A7Lfr8bd5Vq1v4x+5eo0FFcdT7Gvu1Wu1kSpUPIVFLN9FvFXL3pn7alUpHn1oy3HW2qdjqilh6DCktNNOwpBfTr0hwrhbm5UgljewN/jH1svqYnD1zUXUrhmoUimlgyX8srf7l7cHuNxdrxSt21uWKd0srKwsnK8HhWqOtNFZixGlByx6f3+ABJ9uxeEvDS4RNTWasw9TdFB/Cnt3%4AAYvh/JaeBCNUGutWbQWAuEurMEQdvRueu17AACezLM6OHU%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%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%ry2JJV0i37MlMqQLh1es3pDN5KLZHYk2PrWzG5uOeObi1ojDYBnPoQjjc30r7lv3eZeByyp/FeWm7IRY22B0hi2/QavraSUYKnl6vPp+yC6m7jGcLGXv8AT0NvynJgiIHBuBZ/xK5G22q9gOLCw3bbgzYcty5VvpW1ySfckz3LsI1lDMWIFrmw/IcSfwmGtL6RjtvYYXDWmeiwiyudHIiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIB4Zaq07y9EAgM0ypKi6aiK63vZhcXHBmsYrw+3mVSahqUqo9VNuVYfdKHgWHt25nQnp3mHWwt544p7nUZyjscRzXI69Nzak1Re67n5oB+m0zMVh6z+X5VHyyUBLabCmDtpuRtax2G86jXwduJD4zBEnfeQ9wlnD3LTvJPDaTa61NCbCYmq9O1JqtHUEqJUsfuNo1+ri4F7jrfkHfoOAyxFd3RNOsi/eyqFUfQX+JJ6yvB4K0nMJhrSSMEiGpWc1jYqwmGtJFFnlNLS5OyEREQBERAEREAREQBERAEREAREQBERAEREAREQBERAE8InsQCzU%mHVwkkpSVgGBSwtpm00tKgsqgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgH//Z",amount:1},{name:"Choklad",price:40,img:"https://media.delitea.se/product-images/XL/marabou-mjolkchoklad-200g-0.jpg",amount:1},{name:"Bregott",price:80,img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOg4URifmUWzc7qZfOd-Ny9iAVTHDMxfMwog&s",amount:1}],B="hidden",r=[],o=0;function g(s){a(2,o+=s.price),r.includes(s)?a(1,r[r.indexOf(s)].amount++,r):a(1,r=[...r,s]),console.log(r)}function v(){B=="hidden"?a(0,B="visible"):a(0,B="hidden")}const W=()=>v();function h(s,u){s[u].amount=$(this.value),a(1,r)}return[B,r,o,c,g,v,W,h,()=>a(2,o=r.reduce((s,u)=>s+u.price*u.amount,0)),s=>{a(2,o-=s.price*s.amount),a(1,r=r.filter(u=>u!=s))},s=>g(s)]}class IA extends iA{constructor(t){super(),aA(this,t,rA,nA,tA,{})}}export{IA as component};
