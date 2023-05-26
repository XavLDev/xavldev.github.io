(function(){"use strict";var e={5326:function(e,t,a){var i=a(9242),n=a(3396);function o(e,t,a,i,o,r){const s=(0,n.up)("NavBar"),l=(0,n.up)("PortfolioMain");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s),(0,n.Wm)(l,{msg:"Welcome to Your Vue.js App"})],64)}const r={class:"container-fluid position-relative"},s=(0,n._)("section",{class:"border-bottom pt-3 about-bg"},[(0,n._)("div",{class:"container p-3 d-flex"},[(0,n._)("span",{class:"text-center mx-auto"},[(0,n._)("img",{class:"dp mx-auto my-1 mb-3",src:"/images/avatar.png",alt:""}),(0,n._)("h1",null,"Hi, I am Xavier 👋"),(0,n._)("p",null,[(0,n.Uk)(" This is my full portfolio where "),(0,n._)("br"),(0,n.Uk)(" I keep my projects and achievements! ")])])])],-1),l={class:"border-bottom pt-3 proj-bg",id:"proj"},c={class:"container p-3 mb-3 d-flex justify-content-center"},d={class:"text-center mx-auto"},m=(0,n._)("h1",null,"🏆 Projects 🏆",-1),u=(0,n._)("p",{class:"text-secondary"}," Here are the projects I have done and some screenshots! ",-1),p={class:"row mt-1 justify-content-center justify-content-md-start g-4"},g={class:"border-bottom pt-3 achive-bg",id:"achieve"},h={class:"container p-3 mb-3 d-flex justify-content-center"},b={class:"text-center mx-auto"},y=(0,n._)("h1",null,"🏅 Achievements 🏅",-1),v=(0,n._)("p",{class:"text-secondary"}," Here are the a I have done and some screenshots! ",-1),f={class:"row mt-1 justify-content-center justify-content-md-start g-4"},k={class:"border-bottom pt-3 hobbies-bg",id:"hobbies"},x={class:"container p-3 mb-3 d-flex flex-column"},w=(0,n._)("span",{class:"text-center mx-auto"},[(0,n._)("h1",null,"💻 Hobbies 🥁"),(0,n._)("p",{class:"text-secondary"}," Here are the hobbies and interests I took up along the years! ")],-1),_={class:"container"},j={class:"accordion accordion-flush",id:"accordionFlushExample"},D={class:"border-bottom py-3 about-bg",id:"recommend"},H={class:"container p-3 d-flex flex-column"},T=(0,n._)("span",{class:"text-center mx-auto mb-3"},[(0,n._)("h1",null,"💬 Recommendations 💬"),(0,n._)("p",{class:"text-secondary"}," These are the recommendations from my teachers, instructors and more! ")],-1),A={class:"row row-cols-1 row-cols-md-2 g-4"};function C(e,t,a,i,o,C){const Y=(0,n.up)("ProjectCard"),O=(0,n.up)("HobbyAccordion"),P=(0,n.up)("RecommendationCard");return(0,n.wg)(),(0,n.iD)("div",r,[s,(0,n._)("section",l,[(0,n._)("div",c,[(0,n._)("span",d,[m,u,(0,n._)("div",p,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.projects,((e,t)=>((0,n.wg)(),(0,n.j4)(Y,{key:t,obj:e},null,8,["obj"])))),128))])])])]),(0,n._)("section",g,[(0,n._)("div",h,[(0,n._)("span",b,[y,v,(0,n._)("div",f,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.achievements,((e,t)=>((0,n.wg)(),(0,n.j4)(Y,{key:t,obj:e},null,8,["obj"])))),128))])])])]),(0,n._)("section",k,[(0,n._)("div",x,[w,(0,n._)("div",_,[(0,n._)("div",j,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.hobbies,((e,t)=>((0,n.wg)(),(0,n.j4)(O,{key:t,obj:e,index:t},null,8,["obj","index"])))),128))])])])]),(0,n._)("section",D,[(0,n._)("div",H,[T,(0,n._)("div",A,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(o.recommendations,((e,t)=>((0,n.wg)(),(0,n.j4)(P,{key:t,obj:e,index:t},null,8,["obj","index"])))),128))])])])])}var Y=a(7139);const O={class:"col-10 col-sm-6 col-lg-4"},P={class:"container-fluid p-0 shadow-sm rounded-bottom border bg-white-low h-100 grow"},S={class:"card text-dark"},z=["src"],L={class:"card-img-overlay2"},E={class:"card-title text-light text-start m-0"},I={class:"card-body m-3"},N={class:"text-start mb-0"},R=["href"],M={key:2};function G(e,t,a,i,o,r){return(0,n.wg)(),(0,n.iD)("div",O,[(0,n._)("div",P,[(0,n._)("div",S,[(0,n._)("img",{src:a.obj.img_src,class:"card-img",alt:"..."},null,8,z),(0,n._)("div",L,[(0,n._)("h5",E,(0,Y.zw)(a.obj.title),1)])]),(0,n._)("div",I,[(0,n._)("p",N,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.obj.details,((e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},["Link"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("strong",null,(0,Y.zw)(e.key)+": ",1),(0,n._)("a",{href:e.text,target:"_blank"},"url",8,R)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("strong",null,(0,Y.zw)(e.key)+": ",1),(0,n.Uk)(" "+(0,Y.zw)(e.text),1)],64)),t!=a.obj.details.length-1?((0,n.wg)(),(0,n.iD)("br",M)):(0,n.kq)("",!0)],64)))),128))])])])])}var q={name:"ProjectCard",props:{obj:Object},data(){return{}}},K=a(89);const U=(0,K.Z)(q,[["render",G]]);var F=U,X=JSON.parse('[{"img_src":"images/robotics.png","title":"Robomaster AI Name Detector","details":[{"key":"Type","text":"Robotics & AI"},{"key":"Link","text":""},{"key":"Description","text":"Developed a creative Mario-inspired platformer game on Scratch. The game is filled with obstacle courses, challenges, and enemies to mimic the thrill and adventure of the original Mario games."}]},{"img_src":"images/pythonpj1.png","title":"Connect Four","details":[{"key":"Type","text":"Python"},{"key":"Link","text":"https://scratch.mit.edu/projects/853700754/"},{"key":"Description","text":"Produced an action-packed Scratch game emulating the \'bullet hell\' genre, where players navigate through a barrage of lemon-shaped projectiles. The game promotes quick decision-making and hand-eye coordination, providing an intense gaming experience."}]},{"img_src":"images/pythonpj1.png","title":"Tic tac toe","details":[{"key":"Type","text":"Python"},{"key":"Link","text":"https://scratch.mit.edu/projects/853712612/"},{"key":"Description","text":"Crafted a rhythm game on Scratch that tests timing and reflexes. The game syncs movements with different music beats, offering a wide range of difficulty levels to provide a fun, challenging musical experience."}]},{"img_src":"images/scratch.jpg","title":"Shooter Game","details":[{"key":"Type","text":"Scratch"},{"key":"Link","text":"https://scratch.mit.edu/projects/834248058/fullscreen/"},{"key":"Description","text":"Developed a Python-based \'Algebra Helper\' equipped with a user-friendly GUI. This tool assists students in understanding algebraic equations better by dynamically converting provided parameters into comprehensible mathematical expressions."}]},{"img_src":"images/scratch.jpg","title":"Flappy bird","details":[{"key":"Type","text":"Python"},{"key":"Link","text":"https://scratch.mit.edu/projects/834248058/fullscreen/"},{"key":"Description","text":"Created a Python-based Tic-Tac-Toe game utilizing the terminal as a GUI. It features a user-friendly interface and maintains the classic rules of the game."}]}]'),Z=JSON.parse('[{"img_src":"/images/hwa_chong_olympiad.png","title":"Singapore Mathematical Olympiad","details":[{"key":"Type","text":"Certificate of participation"},{"key":"Year","text":"2023"},{"key":"Description","text":"Earned the Edusave Good Progress Award in 2021 for marked improvement in learning dispositions and displaying commendable conduct."}]},{"img_src":"/images/future_ready.png","title":"Fun with Scratch 3.0","details":[{"key":"Type","text":"Certificate of completion"},{"key":"Year","text":"2020"},{"key":"Description","text":"Earned the Edusave Good Progress Award in 2021 for marked improvement in learning dispositions and displaying commendable conduct."}]},{"img_src":"/images/nafa.jpg","title":"Children\'s Art","details":[{"key":"Type","text":"Certificate of participation"},{"key":"Year","text":"2022"},{"key":"Description","text":"Earned the Edusave Good Progress Award in 2021 for marked improvement in learning dispositions and displaying commendable conduct."}]},{"img_src":"/images/nmo.png","title":"National Mathematical Olympiad of Singapore","details":[{"key":"Type","text":"Certificate of participation"},{"key":"Year","text":"2022"},{"key":"Description","text":"Earned the Edusave Good Progress Award in 2021 for marked improvement in learning dispositions and displaying commendable conduct."}]},{"img_src":"/images/swim_safer.png","title":"National Mathematical Olympiad of Singapore","details":[{"key":"Type","text":"Certificate of completion"},{"key":"Year","text":"2023"},{"key":"Description","text":"Earned the Edusave Good Progress Award in 2021 for marked improvement in learning dispositions and displaying commendable conduct."}]}]'),B=JSON.parse('[{"img_src":"/images/drum.png","headerid":"hobbyheader1","id":"hobby1","title":"Drum","details":[{"key":"Section","text":"Tenor"},{"isLinks":true,"links":[{"link":"","text":"video 1"},{"link":"","text":"video 2"},{"link":"","text":"video 3"}],"key":"Links"},{"key":"Description","text":"Raven or utters his sad came nothing blessed sure but. Some plainly i louder lenore vainly expressing my flitting, it.Section leader "}]},{"img_src":"/images/rollerblade.jpg","headerid":"hobbyheader2","id":"hobby2","title":"Rollerblade","details":[{"key":"Section","text":"Tenor"},{"isLinks":true,"links":[{"link":"","text":"video 1"},{"link":"","text":"video 2"},{"link":"","text":"video 3"}],"key":"Links"},{"key":"Description","text":"Raven or utters his sad came nothing blessed sure but. Some plainly i louder lenore vainly expressing my flitting, it.Section leader "}]}]');const J={class:"accordion-item"},W=["id"],V=["data-bs-target","aria-controls"],Q=["id","aria-labelledby"],$={class:"accordion-body"},ee={class:"row g-4"},te={class:"col-12 col-md-4"},ae=["src"],ie={class:"col-12 col-md-8"},ne={class:"text-start"},oe=["href"],re={key:0},se=["href"],le=(0,n._)("br",null,null,-1);function ce(e,t,a,i,o,r){return(0,n.wg)(),(0,n.iD)("div",J,[(0,n._)("h2",{class:"accordion-header",id:a.obj.headerid},[(0,n._)("button",{class:(0,Y.C_)(["accordion-button",{collapsed:0!=a.index}]),type:"button","data-bs-toggle":"collapse","data-bs-target":"#"+a.obj.id,"aria-expanded":"false","aria-controls":a.obj.id},(0,Y.zw)(a.obj.title),11,V)],8,W),(0,n._)("div",{id:a.obj.id,class:(0,Y.C_)(["accordion-collapse collapse",{show:0===a.index}]),"aria-labelledby":a.obj.headerid,"data-bs-parent":"#accordionFlushExample"},[(0,n._)("div",$,[(0,n._)("div",ee,[(0,n._)("div",te,[(0,n._)("img",{src:a.obj.img_src,class:"card-img",alt:"..."},null,8,ae)]),(0,n._)("div",ie,[(0,n._)("span",null,[(0,n._)("h1",null,(0,Y.zw)(a.obj.title),1),(0,n._)("p",ne,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.obj.details,((e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},["Link"===e.key?((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("strong",null,(0,Y.zw)(e.key)+": ",1),(0,n._)("a",{href:e.text},"url",8,oe)],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[e.isLinks?((0,n.wg)(),(0,n.iD)(n.HY,{key:1},[(0,n._)("strong",null,(0,Y.zw)(e.key)+": ",1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.links,((e,t)=>((0,n.wg)(),(0,n.iD)(n.HY,{key:t},[0!=t?((0,n.wg)(),(0,n.iD)("text",re,", ")):(0,n.kq)("",!0),(0,n._)("a",{href:e.link,target:"_blank"},(0,Y.zw)(e.text),9,se)],64)))),128))],64)):((0,n.wg)(),(0,n.iD)(n.HY,{key:0},[(0,n._)("strong",null,(0,Y.zw)(e.key)+": ",1),(0,n.Uk)(" "+(0,Y.zw)(e.text),1)],64))],64)),le],64)))),128))])])])])])],10,Q)])}var de={name:"HobbyAccordionItem",props:{obj:Object,index:Number},data(){return{}}};const me=(0,K.Z)(de,[["render",ce]]);var ue=me;const pe={class:"text-center col"},ge={class:"container-fluid p-3 px-4 border border-light rounded-3 bg-white-low shadow-sm grow"},he={class:"blockquote"},be={key:0},ye=["src"],ve={class:"blockquote-footer"},fe={title:"Source Title"};function ke(e,t,a,i,o,r){return(0,n.wg)(),(0,n.iD)("div",pe,[(0,n._)("div",ge,[(0,n._)("blockquote",he,[a.obj.isLetter?((0,n.wg)(),(0,n.iD)("img",{key:1,src:a.obj.src,alt:"",srcset:""},null,8,ye)):((0,n.wg)(),(0,n.iD)("p",be,(0,Y.zw)(a.obj.description),1))]),(0,n._)("figcaption",ve,[(0,n.Uk)((0,Y.zw)(a.obj.name)+", "+(0,Y.zw)(a.obj.title)+" of ",1),(0,n._)("cite",fe,(0,Y.zw)(a.obj.org),1)])])])}var xe={name:"RecommendationCard",props:{obj:Object},data(){return{}}};const we=(0,K.Z)(xe,[["render",ke]]);var _e=we,je=JSON.parse('[{"description":"It gives me great pleasure to write this letter of recommendation for Xavier Lau. Xavier, a student in my drum kit course at Aureus Academy, has consistently shown exemplary abilities as a drummer and musician in general. He works extremely hard to succeed and be the greatest musician he can be, and the material he has mastered in class, the Rockschool Debut and Grade 1 syllabus, has been at a very high musical level. He is a fantastic musician for his grade, and he also always approaches the work we do in class with an outstanding attitude. Additionally, Xavier is jovial and enjoyable to work with. I wholeheartedly endorse Xavier for the DSA for this music-related CCA. He is an excellent student, demonstrates exceptional musicality, and I have no doubt that he will have a great professional future. Xavier will benefit from the DSA by being able  to continue his education as a secondary school student and musician, and there isn\'t a more worthy applicant. ","title":"Music Teacher","name":"Kevin Gregory Peter","org":"Aureus Academy","src":"images/aureus.png","isLetter":true},{"description":"nil","title":"Taekwondo Coach","name":"Ong Bee Ai, Alice","org":"Radin Mas Community Club","src":"images/radin_mas.jpg","isLetter":true}]'),De={name:"PortfolioMain",components:{ProjectCard:F,HobbyAccordion:ue,RecommendationCard:_e},data(){return{projects:X,achievements:Z,hobbies:B,recommendations:je}}};const He=(0,K.Z)(De,[["render",C]]);var Te=He;const Ae={class:"navbar sticky-top nav-bg navbar-expand-lg navbar-light px-2"},Ce=(0,n.uE)('<div class="container-fluid"><button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNav"><ul class="navbar-nav ms-auto"><li class="nav-item"><a class="nav-link active" aria-current="page" href="#">Home</a></li><li class="nav-item"><a class="nav-link" href="#proj">Projects</a></li><li class="nav-item"><a class="nav-link" href="#achieve">Achievements</a></li><li class="nav-item"><a class="nav-link" href="#hobbies">Hobbies</a></li><li class="nav-item"><a class="nav-link" href="#recommend">Recommendations</a></li></ul></div></div>',1),Ye=[Ce];function Oe(e,t,a,i,o,r){return(0,n.wg)(),(0,n.iD)("nav",Ae,Ye)}var Pe={name:"NavBar"};const Se=(0,K.Z)(Pe,[["render",Oe]]);var ze=Se,Le={name:"App",components:{PortfolioMain:Te,NavBar:ze}};const Ee=(0,K.Z)(Le,[["render",o]]);var Ie=Ee;(0,i.ri)(Ie).mount("#app")}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,i,n,o){if(!i){var r=1/0;for(d=0;d<e.length;d++){i=e[d][0],n=e[d][1],o=e[d][2];for(var s=!0,l=0;l<i.length;l++)(!1&o||r>=o)&&Object.keys(a.O).every((function(e){return a.O[e](i[l])}))?i.splice(l--,1):(s=!1,o<r&&(r=o));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[i,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],s=i[1],l=i[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(l)var d=l(a)}for(t&&t(i);c<r.length;c++)o=r[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},i=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(5326)}));i=a.O(i)})();
//# sourceMappingURL=app.4445839a.js.map