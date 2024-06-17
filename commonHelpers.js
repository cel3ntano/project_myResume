import{A as ee,a as te,b as v,S as se,K as oe,i as ce}from"./assets/vendor-37492f01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();ee.init({once:!0});function ne(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");ne(o)})});document.addEventListener("mousemove",function(e){document.querySelectorAll(".hero-back, .decor-bg").forEach(c=>{const s=-(e.clientX/window.innerWidth-.5)*20,n=-(e.clientY/window.innerHeight-.5)*10;c.style.backgroundPosition=`calc(50% + ${s}px) calc(50% + ${n}px)`}),document.querySelectorAll(".benefits-decor-img").forEach(c=>{const s=-(e.clientX/window.innerWidth-.5)*20,n=-(e.clientY/window.innerHeight-.5)*20;c.style.transform=`translate(${s}px, ${n}px)`})});const P=document.querySelector(".switch-open-burger"),T=document.querySelector(".switch-close-burger"),ie=document.querySelector(".nav-list"),re=document.querySelector(".header-nav"),ae=document.body,S=document.querySelector(".section-up-link"),p=document.querySelector(".header > .container"),le=()=>{p.getAttribute("class")!="container"&&p.classList.toggle("header-background")},L=e=>{e.preventDefault(),le(),S.classList.toggle("up-link-active"),ae.classList.toggle("toggle-scroll"),T.classList.toggle("active-btn"),P.classList.toggle("active-btn"),re.classList.toggle("active-nav")},de=e=>{e.target.getAttribute("class")==="nav-link"&&window.innerWidth<768&&L(e)},me=()=>{(window.scrollY||window.pageYOffset)>350?(p.classList.remove("header-background"),S.style.display="flex"):(p.classList.add("header-background"),S.style.display="none")};P.addEventListener("click",L);T.addEventListener("click",L);ie.addEventListener("click",de);document.addEventListener("scroll",me);const A=document.querySelector(".theme-btn"),M=document.querySelector(".switch-theme"),ue=document.body,ge=document.querySelectorAll(".change-them"),W=()=>{ge.forEach(e=>e.classList.toggle("change-them"))},D=()=>{ue.classList.toggle("dark-theme")},G=()=>{M.classList.toggle("edit-circle")};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("statusThem")==="true"&&(A.checked=!0,G(),D(),W())});const pe=()=>{G(),D(),W();const e=M.classList.length>1;localStorage.setItem("statusThem",e)};A.addEventListener("change",pe);const j="/project_myResume/assets/wallet-webservice-06280c40.jpg",ve="/project_myResume/assets/wallet-webservice-2x-e6c5ae3a.jpg",x="/project_myResume/assets/green-harvest-35f2b6d7.jpg",ye="/project_myResume/assets/green-harvest-2x-ae8385c7.jpg",k="/project_myResume/assets/english-excellence-8065e930.jpg",he="/project_myResume/assets/english-excellence-2x-13bf943e.jpg",E="/project_myResume/assets/power-pulse-05a42d66.jpg",be="/project_myResume/assets/power-pulse-2x-e6ed7073.jpg",R="/project_myResume/assets/vyshyvanka-vibes-64a37946.jpg",fe="/project_myResume/assets/vyshyvanka-vibes-2x-744bc708.jpg",$="/project_myResume/assets/energy-flow-7e50e16f.jpg",we="/project_myResume/assets/energy-flow-2x-153e5da2.jpg",q="/project_myResume/assets/mimino-9a419ef5.jpg",Se="/project_myResume/assets/mimino-2x-1da89b50.jpg",I="/project_myResume/assets/chego-jewelry-d2bbb936.jpg",Le="/project_myResume/assets/chego-jewelry-2x-85306eae.jpg",B="/project_myResume/assets/fruitbox-14676b6a.jpg",_e="/project_myResume/assets/fruitbox-2x-33174f2d.jpg",J="/project_myResume/assets/starlight-studio-e8b93bb6.jpg",je="/project_myResume/assets/starlight-studio-2x-6934bc95.jpg",i="/project_myResume/assets/icons-4fa5f8a9.svg",C=[{imgSrc:j,imgSrcSet:`${j} 1x, ${ve} 2x`,alt:"Wallet Webservice",tech:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:x,imgSrcSet:`${x} 1x, ${ye} 2x`,alt:"Green Harvest Webservice",tech:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:k,imgSrcSet:`${k} 1x, ${he} 2x`,alt:"English Excellence Webservice",tech:"React, JavaScript, Node JS, Git",title:"english excellence website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:E,imgSrcSet:`${E} 1x, ${be} 2x`,alt:"Power Pulse Webservice",tech:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:R,imgSrcSet:`${R} 1x, ${fe} 2x`,alt:"Vyshyvanka Vibes Landing Page",tech:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes landing page",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:$,imgSrcSet:`${$} 1x, ${we} 2x`,alt:"Energy Flow Webservice",tech:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:q,imgSrcSet:`${q} 1x, ${Se} 2x`,alt:"Mimino Website",tech:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:I,imgSrcSet:`${I} 1x, ${Le} 2x`,alt:"Chego Jewelry Website",tech:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:B,imgSrcSet:`${B} 1x, ${_e} 2x`,alt:"Fruitbox Online Store",tech:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:J,imgSrcSet:`${J} 1x, ${je} 2x`,alt:"Starlight Studio Landing Page",tech:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/cel3ntano/project_myResume"}],xe=document.querySelector(".projects-list"),H=document.querySelector(".project-btn");H.addEventListener("click",V);let f=0;const w=3;function V(){const e=f*w,t=e+w,c=C.slice(e,t).map(({imgSrc:l,imgSrcSet:X,alt:U,tech:z,title:Q,link:Z})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${X}"
        src="${l}"
        alt="${U}"
      />
      <p class="project-text">${z}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${Q}</h3>
        </div>
        <div class="project-link-wrap">
            <a
              class="project-link"
              href="${Z}"
              target="_blank"
              rel="noopener noreferrer"
              >VISIT
              <svg width="24" height="24">
                <use href="${i}#icon-arrow-project"></use>
              </svg>
            </a>
          </div>
      </div>
    </li>
  `).join("");xe.insertAdjacentHTML("beforeend",c);const n=document.querySelector(".projects-item").getBoundingClientRect().height;window.scrollBy({left:0,top:n*.5,behavior:"smooth"}),f++,f*w>=C.length&&(H.style.display="none")}V();const d=document.querySelector(".ac:first-child");d.classList.add("open");d.querySelector(".ac-panel").style.display="block";document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll(".ac").forEach(o=>{o.style.backgroundColor="var(--White)"}),d.style.backgroundColor="var(--Accent-secondary)"});new te(".accordion-container",{duration:250,showMultiple:!1,openOnInit:[0],onOpen:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="var(--Accent-secondary)",document.querySelectorAll(".ac").forEach(s=>{s!==e&&(s.style.backgroundColor="var(--White)",s.style.transition="background 250ms ease",s.classList.remove("open"))})},onClose:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="transparent",e===d&&(d.style.backgroundColor="var(--Accent-secondary)")}});v.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function ke(){try{return(await v.get("/reviews")).data}catch{throw new Error("Not found")}}const y=document.querySelector(".reviews__arrow-left"),h=document.querySelector(".reviews__arrow-right"),N=document.querySelector(".reviews__list");async function Ee(){try{const e=await ke();console.log(e),O(e)}catch{O([])}}function O(e){if(e.length===0){N.innerHTML='<p class="non_info">Not found</p>';return}const t=e.map(o=>`<li class="reviews__item swiper-slide">
      <div class= reviews__card__container>
       <p class="reviews__descr">${o.review}</p>
       <div class="reviews__person">
        <img
          width="48"
          class="reviews__img"
          src="${o.avatar_url}"
          alt="${o.author}"
         />
       <h3 class="reviews__h3">${o.author}</h3>
       <div class="reviews__stars">
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${i}#icon-star"></use>
        </svg>
      </div>
       </div>
      </div>
    </li>`).join("");N.insertAdjacentHTML("beforeend",t)}const u=new se(".reviews__swiper",{modules:[oe],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{320:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});y.addEventListener("click",()=>{u.slidePrev()});h.addEventListener("click",()=>{u.slideNext()});u.on("fromEdge",()=>{y.classList.remove("disabled_btn"),h.classList.remove("disabled_btn")});u.on("reachBeginning",()=>{y.classList.add("disabled_btn"),h.classList.remove("disabled_btn")});u.on("reachEnd",()=>{h.classList.add("disabled_btn"),y.classList.remove("disabled_btn")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews__swiper");new IntersectionObserver((o,c)=>{o.forEach(s=>{s.isIntersecting&&(Ee(),c.unobserve(e))})},{rootMargin:"0px 0px 50px 0px"}).observe(e)});const g=document.querySelector(".orrder-form-js"),m=document.querySelector(".modal-work-js"),F=document.querySelector(".close-modal-work-js"),Re=document.querySelector("[data-modal-root-js]"),$e=g.querySelector('button[type="submit"]'),_="feedback-form-state";let r={email:"",message:""};v.defaults.baseURL="https://portfolio-js.b.goit.study/api";function qe({title:e,message:t}){document.addEventListener("keydown",Y),F.addEventListener("click",b),m.addEventListener("click",K),m.classList.remove("visually-hidden"),document.body.classList.add("body-no-scroll"),Re.innerHTML=`<h2 class="modal-work-text">${e}</h2>
      <p class="modal-work-text-p">${t}</p>`}function b(){F.removeEventListener("click",b),document.removeEventListener("keydown",Y),m.removeEventListener("click",K),m.classList.add("visually-hidden"),document.body.classList.remove("body-no-scroll")}function Y(e){e.key==="Escape"&&b()}function K(e){e.target===m&&b()}async function Ie(e){try{const t=await v.post("/requests",e);qe(t.data)}catch({message:t}){ce.warning({message:t})}}g.addEventListener("input",Je);g.addEventListener("submit",Ce);Be();function Be(){const e=localStorage.getItem(_);if(!e)return;try{r=JSON.parse(e)}catch(c){console.error(c);return}const{email:t,message:o}=g.elements;t.value=r.email||"",o.value=r.message||"",a()}function Je(e){const t=e.target.name;r[t]=e.target.value,localStorage.setItem(_,JSON.stringify(r)),a()}function Ce(e){e.preventDefault();const{email:t,message:o}=e.target.elements,c={email:t.value,comment:o.value};Ie(c),r={email:"",message:""},localStorage.removeItem(_),g.reset(),Ne()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),c=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.addEventListener("blur",function(){e.value===""?(e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none"):e.validity.valid?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none",s.style.display="block"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block",s.style.display="none"),a()}),o.addEventListener("blur",function(){o.value.trim()!==""?(o.classList.remove("invalid"),o.classList.add("valid"),c.style.display="none"):(o.classList.remove("valid"),o.classList.add("invalid"),c.style.display="block"),a()}),e.addEventListener("keydown",function(n){n.key==="Enter"&&(n.preventDefault(),e.validity.valid?o.focus():(e.focus(),t.style.display="block",s.style.display="none"))}),a()});function a(){const e=document.getElementById("email-user"),t=document.getElementById("comment");$e.disabled=!(e.validity.valid&&t.value.trim()!=="")}function Ne(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),c=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");console.log("reset"),e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none",o.classList.remove("valid","invalid"),c.style.display="none",a()}
//# sourceMappingURL=commonHelpers.js.map
