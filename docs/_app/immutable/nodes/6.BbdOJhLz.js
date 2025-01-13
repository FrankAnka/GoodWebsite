import{s as G,v as Q,n as j,r as U,c as $,o as J,f as K}from"../chunks/scheduler.C70A3bjW.js";import{S as V,i as X,e as _,s as C,c as x,a as A,f as H,l as M,d as P,n as k,x as Z,g as N,h as z,q as Y,r as L,w as ee,t as oe,b as te,v as F,j as ae}from"../chunks/index.BKLcQLrf.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{g as se}from"../chunks/_commonjsHelpers.CqkleIqs.js";import{p as ne,a as ie,i as re,b as le}from"../chunks/entry.CrqKknmU.js";import{w as ue}from"../chunks/paths.CGE0pByo.js";var D={};D.elizaInitials=["How do you do.  Please tell me your problem.","Please tell me what's been bothering you.","Is something troubling you ?"];D.elizaFinals=["Goodbye.  It was nice talking to you.","Goodbye.  This was really a nice talk.","Goodbye.  I'm looking forward to our next session.","This was a good session, wasn't it -- but time is over now.   Goodbye.","Maybe we could discuss this moreover in our next session ?   Goodbye."];D.elizaQuits=["bye","goodbye","done","exit","quit"];D.elizaPres=["dont","don't","cant","can't","wont","won't","recollect","remember","recall","remember","dreamt","dreamed","dreams","dream","maybe","perhaps","certainly","yes","machine","computer","machines","computer","computers","computer","were","was","you're","you are","i'm","i am","same","alike","identical","alike","equivalent","alike"];D.elizaPosts=["am","are","your","my","me","you","myself","yourself","yourself","myself","i","you","you","I","my","your","i'm","you are"];D.elizaSynons={be:["am","is","are","was"],belief:["feel","think","believe","wish"],cannot:["can't"],desire:["want","need"],everyone:["everybody","nobody","noone"],family:["mother","mom","father","dad","sister","brother","wife","children","child"],happy:["elated","glad","better"],sad:["unhappy","depressed","sick"]};D.elizaKeywords=[["xnone",0,[["*",["I'm not sure I understand you fully.","Please go on.","What does that suggest to you ?","Do you feel strongly about discussing such things ?","That is interesting.  Please continue.","Tell me more about that.","Does talking about this bother you ?"]]]],["sorry",0,[["*",["Please don't apologise.","Apologies are not necessary.","I've told you that apologies are not required.","It did not bother me.  Please continue."]]]],["apologise",0,[["*",["goto sorry"]]]],["remember",5,[["* i remember *",["Do you often think of (2) ?","Does thinking of (2) bring anything else to mind ?","What else do you recollect ?","Why do you remember (2) just now ?","What in the present situation reminds you of (2) ?","What is the connection between me and (2) ?","What else does (2) remind you of ?"]],["* do you remember *",["Did you think I would forget (2) ?","Why do you think I should recall (2) now ?","What about (2) ?","goto what","You mentioned (2) ?"]],["* you remember *",["How could I forget (2) ?","What about (2) should I remember ?","goto you"]]]],["forget",5,[["* i forget *",["Can you think of why you might forget (2) ?","Why can't you remember (2) ?","How often do you think of (2) ?","Does it bother you to forget that ?","Could it be a mental block ?","Are you generally forgetful ?","Do you think you are suppressing (2) ?"]],["* did you forget *",["Why do you ask ?","Are you sure you told me ?","Would it bother you if I forgot (2) ?","Why should I recall (2) just now ?","goto what","Tell me more about (2)."]]]],["if",3,[["* if *",["Do you think it's likely that (2) ?","Do you wish that (2) ?","What do you know about (2) ?","Really, if (2) ?","What would you do if (2) ?","But what are the chances that (2) ?","What does this speculation lead to ?"]]]],["dreamed",4,[["* i dreamed *",["Really, (2) ?","Have you ever fantasized (2) while you were awake ?","Have you ever dreamed (2) before ?","goto dream"]]]],["dream",3,[["*",["What does that dream suggest to you ?","Do you dream often ?","What persons appear in your dreams ?","Do you believe that dreams have something to do with your problem ?"]]]],["perhaps",0,[["*",["You don't seem quite certain.","Why the uncertain tone ?","Can't you be more positive ?","You aren't sure ?","Don't you know ?","How likely, would you estimate ?"]]]],["name",15,[["*",["I am not interested in names.","I've told you before, I don't care about names -- please continue."]]]],["deutsch",0,[["*",["goto xforeign","I told you before, I don't understand German."]]]],["francais",0,[["*",["goto xforeign","I told you before, I don't understand French."]]]],["italiano",0,[["*",["goto xforeign","I told you before, I don't understand Italian."]]]],["espanol",0,[["*",["goto xforeign","I told you before, I don't understand Spanish."]]]],["xforeign",0,[["*",["I speak only English."]]]],["hello",0,[["*",["How do you do.  Please state your problem.","Hi.  What seems to be your problem ?"]]]],["computer",50,[["*",["Do computers worry you ?","Why do you mention computers ?","What do you think machines have to do with your problem ?","Don't you think computers can help people ?","What about machines worries you ?","What do you think about machines ?","You don't think I am a computer program, do you ?"]]]],["am",0,[["* am i *",["Do you believe you are (2) ?","Would you want to be (2) ?","Do you wish I would tell you you are (2) ?","What would it mean if you were (2) ?","goto what"]],["* i am *",["goto i"]],["*",["Why do you say 'am' ?","I don't understand that."]]]],["are",0,[["* are you *",["Why are you interested in whether I am (2) or not ?","Would you prefer if I weren't (2) ?","Perhaps I am (2) in your fantasies.","Do you sometimes think I am (2) ?","goto what","Would it matter to you ?","What if I were (2) ?"]],["* you are *",["goto you"]],["* are *",["Did you think they might not be (2) ?","Would you like it if they were not (2) ?","What if they were not (2) ?","Are they always (2) ?","Possibly they are (2).","Are you positive they are (2) ?"]]]],["your",0,[["* your *",["Why are you concerned over my (2) ?","What about your own (2) ?","Are you worried about someone else's (2) ?","Really, my (2) ?","What makes you think of my (2) ?","Do you want my (2) ?"]]]],["was",2,[["* was i *",["What if you were (2) ?","Do you think you were (2) ?","Were you (2) ?","What would it mean if you were (2) ?","What does ' (2) ' suggest to you ?","goto what"]],["* i was *",["Were you really ?","Why do you tell me you were (2) now ?","Perhaps I already know you were (2)."]],["* was you *",["Would you like to believe I was (2) ?","What suggests that I was (2) ?","What do you think ?","Perhaps I was (2).","What if I had been (2) ?"]]]],["i",0,[["* i @desire *",["What would it mean to you if you got (3) ?","Why do you want (3) ?","Suppose you got (3) soon.","What if you never got (3) ?","What would getting (3) mean to you ?","What does wanting (3) have to do with this discussion ?"]],["* i am* @sad *",["I am sorry to hear that you are (3).","Do you think coming here will help you not to be (3) ?","I'm sure it's not pleasant to be (3).","Can you explain what made you (3) ?"]],["* i am* @happy *",["How have I helped you to be (3) ?","Has your treatment made you (3) ?","What makes you (3) just now ?","Can you explain why you are suddenly (3) ?"]],["* i was *",["goto was"]],["* i @belief i *",["Do you really think so ?","But you are not sure you (3).","Do you really doubt you (3) ?"]],["* i* @belief *you *",["goto you"]],["* i am *",["Is it because you are (2) that you came to me ?","How long have you been (2) ?","Do you believe it is normal to be (2) ?","Do you enjoy being (2) ?","Do you know anyone else who is (2) ?"]],["* i @cannot *",["How do you know that you can't (3) ?","Have you tried ?","Perhaps you could (3) now.","Do you really want to be able to (3) ?","What if you could (3) ?"]],["* i don't *",["Don't you really (2) ?","Why don't you (2) ?","Do you wish to be able to (2) ?","Does that trouble you ?"]],["* i feel *",["Tell me more about such feelings.","Do you often feel (2) ?","Do you enjoy feeling (2) ?","Of what does feeling (2) remind you ?"]],["* i * you *",["Perhaps in your fantasies we (2) each other.","Do you wish to (2) me ?","You seem to need to (2) me.","Do you (2) anyone else ?"]],["*",["You say (1) ?","Can you elaborate on that ?","Do you say (1) for some special reason ?","That's quite interesting."]]]],["you",0,[["* you remind me of *",["goto alike"]],["* you are *",["What makes you think I am (2) ?","Does it please you to believe I am (2) ?","Do you sometimes wish you were (2) ?","Perhaps you would like to be (2)."]],["* you* me *",["Why do you think I (2) you ?","You like to think I (2) you -- don't you ?","What makes you think I (2) you ?","Really, I (2) you ?","Do you wish to believe I (2) you ?","Suppose I did (2) you -- what would that mean ?","Does someone else believe I (2) you ?"]],["* you *",["We were discussing you -- not me.","Oh, I (2) ?","You're not really talking about me -- are you ?","What are your feelings now ?"]]]],["yes",0,[["*",["You seem to be quite positive.","You are sure.","I see.","I understand."]]]],["no",0,[["* no one *",["Are you sure, no one (2) ?","Surely someone (2) .","Can you think of anyone at all ?","Are you thinking of a very special person ?","Who, may I ask ?","You have a particular person in mind, don't you ?","Who do you think you are talking about ?"]],["*",["Are you saying no just to be negative?","You are being a bit negative.","Why not ?","Why 'no' ?"]]]],["my",2,[["$ * my *",["Does that have anything to do with the fact that your (2) ?","Lets discuss further why your (2).","Earlier you said your (2).","But your (2)."]],["* my* @family *",["Tell me more about your family.","Who else in your family (4) ?","Your (3) ?","What else comes to your mind when you think of your (3) ?"]],["* my *",["Your (2) ?","Why do you say your (2) ?","Does that suggest anything else which belongs to you ?","Is it important to you that your (2) ?"]]]],["can",0,[["* can you *",["You believe I can (2) don't you ?","goto what","You want me to be able to (2).","Perhaps you would like to be able to (2) yourself."]],["* can i *",["Whether or not you can (2) depends on you more than on me.","Do you want to be able to (2) ?","Perhaps you don't want to (2).","goto what"]]]],["what",0,[["*",["Why do you ask ?","Does that question interest you ?","What is it you really want to know ?","Are such questions much on your mind ?","What answer would please you most ?","What do you think ?","What comes to mind when you ask that ?","Have you asked such questions before ?","Have you asked anyone else ?"]]]],["who",0,[["who *",["goto what"]]]],["when",0,[["when *",["goto what"]]]],["where",0,[["where *",["goto what"]]]],["how",0,[["how *",["goto what"]]]],["because",0,[["*",["Is that the real reason ?","Don't any other reasons come to mind ?","Does that reason seem to explain anything else ?","What other reasons might there be ?"]]]],["why",0,[["* why don't you *",["Do you believe I don't (2) ?","Perhaps I will (2) in good time.","Should you (2) yourself ?","You want me to (2) ?","goto what"]],["* why can't i *",["Do you think you should be able to (2) ?","Do you want to be able to (2) ?","Do you believe this will help you to (2) ?","Have you any idea why you can't (2) ?","goto what"]],["*",["goto what"]]]],["everyone",2,[["* @everyone *",["Really, (2) ?","Surely not (2).","Can you think of anyone in particular ?","Who, for example?","Are you thinking of a very special person ?","Who, may I ask ?","Someone special perhaps ?","You have a particular person in mind, don't you ?","Who do you think you're talking about ?"]]]],["everybody",2,[["*",["goto everyone"]]]],["nobody",2,[["*",["goto everyone"]]]],["noone",2,[["*",["goto everyone"]]]],["always",1,[["*",["Can you think of a specific example ?","When ?","What incident are you thinking of ?","Really, always ?"]]]],["alike",10,[["*",["In what way ?","What resemblence do you see ?","What does that similarity suggest to you ?","What other connections do you see ?","What do you suppose that resemblence means ?","What is the connection, do you suppose ?","Could there really be some connection ?","How ?"]]]],["like",10,[["* @be *like *",["goto alike"]]]],["different",0,[["*",["How is it different ?","What differences do you see ?","What does that difference suggest to you ?","What other distinctions do you see ?","What do you suppose that disparity means ?","Could there be some connection, do you suppose ?","How ?"]]]]];D.elizaPostTransforms=[/ old old/g," old",/\bthey were( not)? me\b/g,"it was$1 me",/\bthey are( not)? me\b/g,"it is$1 me",/Are they( always)? me\b/,"it is$1 me",/\bthat your( own)? (\w+)( now)? \?/,"that you have your$1 $2 ?",/\bI to have (\w+)/,"I have $1",/Earlier you said your( own)? (\w+)( now)?\./,"Earlier you talked about your $2."];var s=D;function w(e){this.noRandom=!!e,this.capitalizeFirstLetter=!0,this.debug=!1,this.memSize=20,this.version="1.1 (original)",this._dataParsed||this._init(),this.reset()}w.prototype.reset=function(){this.quit=!1,this.mem=[],this.lastchoice=[];for(var e=0;e<s.elizaKeywords.length;e++){this.lastchoice[e]=[];for(var o=s.elizaKeywords[e][2],t=0;t<o.length;t++)this.lastchoice[e][t]=-1}};w.prototype._dataParsed=!1;w.prototype._init=function(){var e={};if(s.elizaSynons&&typeof s.elizaSynons=="object")for(var o in s.elizaSynons)e[o]="("+o+"|"+s.elizaSynons[o].join("|")+")";(!s.elizaKeywords||typeof s.elizaKeywords.length>"u")&&(s.elizaKeywords=[["###",0,[["###",[]]]]]);for(var t=/@(\S+)/,i=/(\S)\s*\*\s*(\S)/,a=/^\s*\*\s*(\S)/,n=/(\S)\s*\*\s*$/,l=/^\s*\*\s*$/,g=/\s+/g,h=0;h<s.elizaKeywords.length;h++){var u=s.elizaKeywords[h][2];s.elizaKeywords[h][3]=h;for(var o=0;o<u.length;o++){var y=u[o];if(y[0].charAt(0)=="$"){for(var f=1;y[0].charAt[f]==" ";)f++;y[0]=y[0].substring(f),y[2]=!0}else y[2]=!1;for(var r=t.exec(y[0]);r;){var I=e[r[1]]?e[r[1]]:r[1];y[0]=y[0].substring(0,r.index)+I+y[0].substring(r.index+r[0].length),r=t.exec(y[0])}if(l.test(y[0]))y[0]="\\s*(.*)\\s*";else{if(r=i.exec(y[0]),r){for(var d="",b=y[0];r;)d+=b.substring(0,r.index+1),r[1]!=")"&&(d+="\\b"),d+="\\s*(.*)\\s*",r[2]!="("&&r[2]!="\\"&&(d+="\\b"),d+=r[2],b=b.substring(r.index+r[0].length),r=i.exec(b);y[0]=d+b}if(r=a.exec(y[0]),r){var d="\\s*(.*)\\s*";r[1]!=")"&&r[1]!="\\"&&(d+="\\b"),y[0]=d+y[0].substring(r.index-1+r[0].length)}if(r=n.exec(y[0]),r){var d=y[0].substring(0,r.index+1);r[1]!="("&&(d+="\\b"),y[0]=d+"\\s*(.*)\\s*"}}y[0]=y[0].replace(g,"\\s+"),g.lastIndex=0}}if(s.elizaKeywords.sort(this._sortKeywords),w.prototype.pres={},w.prototype.posts={},s.elizaPres&&s.elizaPres.length){for(var c=new Array,o=0;o<s.elizaPres.length;o+=2)c.push(s.elizaPres[o]),w.prototype.pres[s.elizaPres[o]]=s.elizaPres[o+1];w.prototype.preExp=new RegExp("\\b("+c.join("|")+")\\b")}else w.prototype.preExp=/####/,w.prototype.pres["####"]="####";if(s.elizaPosts&&s.elizaPosts.length){for(var c=new Array,o=0;o<s.elizaPosts.length;o+=2)c.push(s.elizaPosts[o]),w.prototype.posts[s.elizaPosts[o]]=s.elizaPosts[o+1];w.prototype.postExp=new RegExp("\\b("+c.join("|")+")\\b")}else w.prototype.postExp=/####/,w.prototype.posts["####"]="####";(!s.elizaQuits||typeof s.elizaQuits.length>"u")&&(s.elizaQuits=[]),w.prototype._dataParsed=!0};w.prototype._sortKeywords=function(e,o){return e[1]>o[1]?-1:e[1]<o[1]||e[3]>o[3]?1:e[3]<o[3]?-1:0};w.prototype.transform=function(e){var o="";this.quit=!1,e=e.toLowerCase(),e=e.replace(/@#\$%\^&\*\(\)_\+=~`\{\[\}\]\|:;<>\/\\\t/g," "),e=e.replace(/\s+-+\s+/g,"."),e=e.replace(/\s*[,\.\?!;]+\s*/g,"."),e=e.replace(/\s*\bbut\b\s*/g,"."),e=e.replace(/\s{2,}/g," ");for(var t=e.split("."),i=0;i<t.length;i++){var a=t[i];if(a!=""){for(var n=0;n<s.elizaQuits.length;n++)if(s.elizaQuits[n]==a)return this.quit=!0,this.getFinal();var l=this.preExp.exec(a);if(l){for(var g="",h=a;l;)g+=h.substring(0,l.index)+this.pres[l[1]],h=h.substring(l.index+l[0].length),l=this.preExp.exec(h);a=g+h}this.sentence=a;for(var u=0;u<s.elizaKeywords.length;u++)if(a.search(new RegExp("\\b"+s.elizaKeywords[u][0]+"\\b","i"))>=0&&(o=this._execRule(u)),o!="")return o}}if(o=this._memGet(),o==""){this.sentence=" ";var u=this._getRuleIndexByKey("xnone");u>=0&&(o=this._execRule(u))}return o!=""?o:"I am at a loss for words."};w.prototype._execRule=function(e){for(var o=s.elizaKeywords[e],t=o[2],i=/\(([0-9]+)\)/,a=0;a<t.length;a++){var n=this.sentence.match(t[a][0]);if(n!=null){var l=t[a][1],g=t[a][2],h=this.noRandom?0:Math.floor(Math.random()*l.length);this.noRandom&&this.lastchoice[e][a]>h||this.lastchoice[e][a]==h?(h=++this.lastchoice[e][a],h>=l.length&&(h=0,this.lastchoice[e][a]=-1)):this.lastchoice[e][a]=h;var u=l[h];if(this.debug&&alert(`match:
key: `+s.elizaKeywords[e][0]+`
rank: `+s.elizaKeywords[e][1]+`
decomp: `+t[a][0]+`
reasmb: `+u+`
memflag: `+g),u.search("^goto ","i")==0){var y=this._getRuleIndexByKey(u.substring(5));if(y>=0)return this._execRule(y)}var f=i.exec(u);if(f){for(var r="",I=u;f;){var d=n[parseInt(f[1])],b=this.postExp.exec(d);if(b){for(var c="",m=d;b;)c+=m.substring(0,b.index)+this.posts[b[1]],m=m.substring(b.index+b[0].length),b=this.postExp.exec(m);d=c+m}r+=I.substring(0,f.index)+d,I=I.substring(f.index+f[0].length),f=i.exec(I)}u=r+I}if(u=this._postTransform(u),g)this._memSave(u);else return u}}return""};w.prototype._postTransform=function(e){if(e=e.replace(/\s{2,}/g," "),e=e.replace(/\s+\./g,"."),s.elizaPostTransforms&&s.elizaPostTransforms.length)for(var o=0;o<s.elizaPostTransforms.length;o+=2)e=e.replace(s.elizaPostTransforms[o],s.elizaPostTransforms[o+1]),s.elizaPostTransforms[o].lastIndex=0;if(this.capitalizeFirstLetter){var t=/^([a-z])/,i=t.exec(e);i&&(e=i[0].toUpperCase()+e.substring(1))}return e};w.prototype._getRuleIndexByKey=function(e){for(var o=0;o<s.elizaKeywords.length;o++)if(s.elizaKeywords[o][0]==e)return o;return-1};w.prototype._memSave=function(e){this.mem.push(e),this.mem.length>this.memSize&&this.mem.shift()};w.prototype._memGet=function(){if(this.mem.length){if(this.noRandom)return this.mem.shift();for(var e=Math.floor(Math.random()*this.mem.length),o=this.mem[e],t=e+1;t<this.mem.length;t++)this.mem[t-1]=this.mem[t];return this.mem.length--,o}else return""};w.prototype.getFinal=function(){return s.elizaFinals?s.elizaFinals[Math.floor(Math.random()*s.elizaFinals.length)]:""};w.prototype.getInitial=function(){return s.elizaInitials?s.elizaInitials[Math.floor(Math.random()*s.elizaInitials.length)]:""};typeof Array.prototype.push>"u"&&(Array.prototype.push=function(e){return this[this.length]=e});typeof Array.prototype.shift>"u"&&(Array.prototype.shift=function(){if(this.length==0)return null;for(var e=this[0],o=1;o<this.length;o++)this[o-1]=this[o];return this.length--,e});var he=w;const ye=se(he);function de(e){const o=JSON.parse(e);return o.data&&(o.data=ne(o.data,ie.decoders)),o}function R(e){return HTMLElement.prototype.cloneNode.call(e)}function ce(e,o=()=>{}){const t=async({action:a,result:n,reset:l=!0,invalidateAll:g=!0})=>{n.type==="success"&&(l&&HTMLFormElement.prototype.reset.call(e),g&&await re()),(location.origin+location.pathname===a.origin+a.pathname||n.type==="redirect"||n.type==="error")&&le(n)};async function i(a){var b,c,m,W,p;if(((b=a.submitter)!=null&&b.hasAttribute("formmethod")?a.submitter.formMethod:R(e).method)!=="post")return;a.preventDefault();const l=new URL((c=a.submitter)!=null&&c.hasAttribute("formaction")?a.submitter.formAction:R(e).action),g=(m=a.submitter)!=null&&m.hasAttribute("formenctype")?a.submitter.formEnctype:R(e).enctype,h=new FormData(e),u=(W=a.submitter)==null?void 0:W.getAttribute("name");u&&h.append(u,((p=a.submitter)==null?void 0:p.getAttribute("value"))??"");const y=new AbortController;let f=!1;const I=await o({action:l,cancel:()=>f=!0,controller:y,formData:h,formElement:e,submitter:a.submitter})??t;if(f)return;let d;try{const v=new Headers({accept:"application/json","x-sveltekit-action":"true"});g!=="multipart/form-data"&&v.set("Content-Type",/^(:?application\/x-www-form-urlencoded|text\/plain)$/.test(g)?g:"application/x-www-form-urlencoded");const S=g==="multipart/form-data"?h:new URLSearchParams(h),E=await fetch(l,{method:"POST",headers:v,cache:"no-store",body:S,signal:y.signal});d=de(await E.text()),d.type==="error"&&(d.status=E.status)}catch(v){if((v==null?void 0:v.name)==="AbortError")return;d={type:"error",error:v}}I({action:l,formData:h,formElement:e,update:v=>t({action:l,result:d,reset:v==null?void 0:v.reset,invalidateAll:v==null?void 0:v.invalidateAll}),result:d})}return HTMLFormElement.prototype.addEventListener.call(e,"submit",i),{destroy(){HTMLFormElement.prototype.removeEventListener.call(e,"submit",i)}}}const me=(window==null?void 0:window.localStorage.getItem("chat"))??"",T=ue(me);T.subscribe(e=>{window==null||window.localStorage.setItem("chat",e)});function B(e,o,t){const i=e.slice();return i[8]=o[t],i}function O(e){let o,t,i=e[8].message+"",a;return{c(){o=_("article"),t=_("p"),a=oe(i),this.h()},l(n){o=x(n,"ARTICLE",{class:!0});var l=A(o);t=x(l,"P",{});var g=A(t);a=te(g,i),g.forEach(P),l.forEach(P),this.h()},h(){k(o,"class","svelte-1nj789c"),F(o,"me",e[8].user=="me")},m(n,l){N(n,o,l),z(o,t),z(t,a)},p(n,l){l&1&&i!==(i=n[8].message+"")&&ae(a,i),l&1&&F(o,"me",n[8].user=="me")},d(n){n&&P(o)}}}function fe(e){let o,t,i,a,n,l='<span class="circle svelte-1nj789c"></span> <span class="circle svelte-1nj789c"></span> <span class="circle svelte-1nj789c"></span>',g,h,u,y,f,r="Reset Chat",I,d,b=q(e[0]),c=[];for(let m=0;m<b.length;m+=1)c[m]=O(B(e,b,m));return{c(){o=_("main"),t=_("div"),i=_("section");for(let m=0;m<c.length;m+=1)c[m].c();a=C(),n=_("article"),n.innerHTML=l,g=C(),h=_("form"),u=_("input"),y=C(),f=_("button"),f.textContent=r,this.h()},l(m){o=x(m,"MAIN",{});var W=A(o);t=x(W,"DIV",{class:!0});var p=A(t);i=x(p,"SECTION",{class:!0});var v=A(i);for(let E=0;E<c.length;E+=1)c[E].l(v);a=H(v),n=x(v,"ARTICLE",{id:!0,class:!0,"data-svelte-h":!0}),M(n)!=="svelte-vcci1g"&&(n.innerHTML=l),v.forEach(P),g=H(p),h=x(p,"FORM",{method:!0});var S=A(h);u=x(S,"INPUT",{type:!0,style:!0,class:!0}),S.forEach(P),y=H(p),f=x(p,"BUTTON",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-1ta7axi"&&(f.textContent=r),p.forEach(P),W.forEach(P),this.h()},h(){k(n,"id","visible"),k(n,"class","svelte-1nj789c"),k(i,"class","svelte-1nj789c"),k(u,"type","text"),Z(u,"color","black"),k(u,"class","svelte-1nj789c"),k(h,"method","post"),k(f,"class","svelte-1nj789c"),k(t,"class","chatbox svelte-1nj789c")},m(m,W){N(m,o,W),z(o,t),z(t,i);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(i,null);z(i,a),z(i,n),z(t,g),z(t,h),z(h,u),Y(u,e[1]),z(t,y),z(t,f),I||(d=[L(u,"input",e[4]),Q(ce.call(null,h,e[5])),L(f,"click",e[2])],I=!0)},p(m,[W]){if(W&1){b=q(m[0]);let p;for(p=0;p<b.length;p+=1){const v=B(m,b,p);c[p]?c[p].p(v,W):(c[p]=O(v),c[p].c(),c[p].m(i,a))}for(;p<c.length;p+=1)c[p].d(1);c.length=b.length}W&2&&u.value!==m[1]&&Y(u,m[1])},i:j,o:j,d(m){m&&P(o),ee(c,m),I=!1,U(d)}}}function pe(e,o,t){let i;$(e,T,f=>t(6,i=f));const a=new ye;let n=[{user:"Eliza",message:a.getInitial()}],l="";J(()=>{t(0,n=JSON.parse(i))});function g(){t(0,n=[{user:"Eliza",message:a.getInitial()}]),K(T,i=JSON.stringify(n),i)}async function h(f){t(0,n=[...n,{user:"me",message:l}]);var r=document.getElementById("visible");r.style.display="flex",await new Promise(I=>setTimeout(I,1e3+Math.random()*1e3)),r.style.display="none",t(0,n=[...n,{user:"Eliza",message:a.transform(l)}]),t(1,l=""),K(T,i=JSON.stringify(n),i)}function u(){l=this.value,t(1,l)}return[n,l,g,h,u,({formElement:f,formData:r,action:I,cancel:d})=>{d(),r.get("text"),h()}]}class ze extends V{constructor(o){super(),X(this,o,pe,fe,G,{})}}export{ze as component};
