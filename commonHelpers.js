import{A as H,a as ce,b as S,S as ie,K as re,i as ae}from"./assets/vendor-37492f01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();H.init({once:!0});window.addEventListener("load",()=>{H.refresh()});function le(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");le(o)})});document.addEventListener("mousemove",function(e){document.querySelectorAll(".hero-back, .decor-bg").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*10;n.style.backgroundPosition=`calc(50% + ${s}px) calc(50% + ${c}px)`}),document.querySelectorAll(".benefits-decor-img").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*20;n.style.transform=`translate(${s}px, ${c}px)`})});const Y=document.querySelector(".switch-open-burger"),F=document.querySelector(".switch-close-burger"),de=document.querySelector(".nav-list"),me=document.querySelector(".header-nav"),f=document.body,u=document.querySelector(".up-link"),b=document.querySelector(".header"),ue=()=>{b.getAttribute("class")!="header"&&b.classList.toggle("header-background")},R=e=>{e.preventDefault(),ue(),f.classList.toggle("toggle-scroll"),document.documentElement.classList.toggle("toggle-scroll"),F.classList.toggle("active-btn"),Y.classList.toggle("active-btn"),me.classList.toggle("active-nav"),f.classList.contains("toggle-scroll")&&u.classList.contains("up-link-active")?u.classList.remove("up-link-active"):q()},ge=e=>{e.target.getAttribute("class")==="nav-link hover"&&window.innerWidth<768&&R(e)},pe=()=>{(window.scrollY||window.pageYOffset)>100?b.classList.remove("header-background"):b.classList.add("header-background")},q=()=>{(window.scrollY||window.pageYOffset)>1e3?u.classList.add("up-link-active"):u.classList.remove("up-link-active")};Y.addEventListener("click",R);F.addEventListener("click",R);de.addEventListener("click",ge);document.addEventListener("scroll",pe);window.addEventListener("scroll",q);q();const K=document.querySelector(".theme-btn"),X=document.querySelector(".switch-theme"),ve=document.body,ye=document.querySelectorAll(".change-them"),U=()=>{ye.forEach(e=>e.classList.toggle("change-them"))},z=()=>{ve.classList.toggle("dark-theme")},Q=()=>{X.classList.toggle("edit-circle")};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("statusThem")==="true"&&(K.checked=!0,Q(),z(),U())});const he=()=>{Q(),z(),U();const e=X.classList.length>1;localStorage.setItem("statusThem",e)};K.addEventListener("change",he);const g=document.querySelector(".hidden-text"),$=document.querySelector(".load-more-button");document.addEventListener("DOMContentLoaded",e=>{g.style.display="none"});$.addEventListener("click",()=>{g.style.display==="none"?(g.style.display="block",$.textContent="Show less"):g.style.display==="block"&&(g.style.display="none",$.textContent="Load more")});const B="/project_myResume/assets/wallet-webservice-06280c40.jpg",fe="/project_myResume/assets/wallet-webservice-2x-e6c5ae3a.jpg",J="/project_myResume/assets/green-harvest-35f2b6d7.jpg",be="/project_myResume/assets/green-harvest-2x-ae8385c7.jpg",T="/project_myResume/assets/english-excellence-8065e930.jpg",we="/project_myResume/assets/english-excellence-2x-13bf943e.jpg",O="/project_myResume/assets/power-pulse-05a42d66.jpg",Se="/project_myResume/assets/power-pulse-2x-e6ed7073.jpg",P="/project_myResume/assets/vyshyvanka-vibes-64a37946.jpg",Le="/project_myResume/assets/vyshyvanka-vibes-2x-744bc708.jpg",A="/project_myResume/assets/energy-flow-7e50e16f.jpg",je="/project_myResume/assets/energy-flow-2x-153e5da2.jpg",M="/project_myResume/assets/mimino-9a419ef5.jpg",_e="/project_myResume/assets/mimino-2x-1da89b50.jpg",N="/project_myResume/assets/chego-jewelry-d2bbb936.jpg",ke="/project_myResume/assets/chego-jewelry-2x-85306eae.jpg",D="/project_myResume/assets/fruitbox-14676b6a.jpg",xe="/project_myResume/assets/fruitbox-2x-33174f2d.jpg",W="/project_myResume/assets/starlight-studio-e8b93bb6.jpg",Ee="/project_myResume/assets/starlight-studio-2x-6934bc95.jpg",r="/project_myResume/assets/icons-4fa5f8a9.svg",w=[{imgSrc:B,imgSrcSet:`${B} 1x, ${fe} 2x`,alt:"Wallet Webservice",tech:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:J,imgSrcSet:`${J} 1x, ${be} 2x`,alt:"Green Harvest Webservice",tech:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:T,imgSrcSet:`${T} 1x, ${we} 2x`,alt:"English Excellence Webservice",tech:"React, JavaScript, Node JS, Git",title:"english excellence website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:O,imgSrcSet:`${O} 1x, ${Se} 2x`,alt:"Power Pulse Webservice",tech:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:P,imgSrcSet:`${P} 1x, ${Le} 2x`,alt:"Vyshyvanka Vibes Landing Page",tech:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes landing page",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:A,imgSrcSet:`${A} 1x, ${je} 2x`,alt:"Energy Flow Webservice",tech:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:M,imgSrcSet:`${M} 1x, ${_e} 2x`,alt:"Mimino Website",tech:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:N,imgSrcSet:`${N} 1x, ${ke} 2x`,alt:"Chego Jewelry Website",tech:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:D,imgSrcSet:`${D} 1x, ${xe} 2x`,alt:"Fruitbox Online Store",tech:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:W,imgSrcSet:`${W} 1x, ${Ee} 2x`,alt:"Starlight Studio Landing Page",tech:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/cel3ntano/project_myResume"}],Z=document.querySelector(".projects-list"),I=document.querySelector(".project-btn");I.addEventListener("click",Re);let a=0;const l=3;function $e(){const e=a*l,t=e+l,n=w.slice(e,t).map(({imgSrc:s,imgSrcSet:c,alt:i,tech:k,title:x,link:E})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${c}"
        src="${s}"
        alt="${i}"
      />
      <p class="project-text">${k}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${x}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${E}"
            target="_blank"
            rel="noopener noreferrer"
          >VISIT
            <svg width="24" height="24">
              <use href="${r}#icon-arrow-project"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `).join("");Z.insertAdjacentHTML("beforeend",n),a++,a*l>=w.length&&(I.style.display="none")}document.addEventListener("DOMContentLoaded",$e);function Re(){const e=a*l,t=e+l,n=w.slice(e,t).map(({imgSrc:i,imgSrcSet:k,alt:x,tech:E,title:oe,link:ne})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${k}"
        src="${i}"
        alt="${x}"
        width="830"
        height="480"
      />
      <p class="project-text">${E}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${oe}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${ne}"
            target="_blank"
            rel="noopener noreferrer"
          >VISIT
            <svg width="24" height="24">
              <use href="${r}#icon-arrow-project"></use>
            </svg>
          </a>
        </div>
      </div>
    </li>
  `).join("");Z.insertAdjacentHTML("beforeend",n);const c=document.querySelector(".projects-item:last-child").getBoundingClientRect().height;window.scrollBy({left:0,top:c*2.5,behavior:"smooth"}),a++,a*l>=w.length&&(I.style.display="none")}const p=document.querySelector(".ac:first-child");p.classList.add("open");p.querySelector(".ac-panel").style.display="block";document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll(".ac").forEach(o=>{o.style.backgroundColor="var(--White)"}),p.style.backgroundColor="var(--Accent-secondary)"});new ce(".accordion-container",{duration:250,showMultiple:!1,openOnInit:[0],onOpen:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="var(--Accent-secondary)",document.querySelectorAll(".ac").forEach(s=>{s!==e&&(s.style.backgroundColor="var(--White)",s.style.transition="background 250ms ease",s.classList.remove("open"))})},onClose:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="transparent",e===p&&(p.style.backgroundColor="var(--Accent-secondary)")}});S.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function qe(){try{return(await S.get("/reviews")).data}catch{throw new Error("Not found")}}const L=document.querySelector(".reviews__arrow-left"),j=document.querySelector(".reviews__arrow-right"),G=document.querySelector(".reviews__list");async function Ie(){try{const e=await qe();V(e)}catch{V([])}}function V(e){if(e.length===0){G.innerHTML='<p class="non_info">Not found</p>';return}const t=e.map(o=>`<li class="reviews__item swiper-slide">
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
          <use class="star__icon" href="${r}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${r}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${r}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${r}#icon-star"></use>
        </svg>
        <svg width="16" height="16">
          <use class="star__icon" href="${r}#icon-star"></use>
        </svg>
      </div>
       </div>
      </div>
    </li>`).join("");G.insertAdjacentHTML("beforeend",t)}const y=new ie(".reviews__swiper",{modules:[re],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{320:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});L.addEventListener("click",()=>{y.slidePrev()});j.addEventListener("click",()=>{y.slideNext()});y.on("fromEdge",()=>{L.classList.remove("disabled_btn"),j.classList.remove("disabled_btn")});y.on("reachBeginning",()=>{L.classList.add("disabled_btn"),j.classList.remove("disabled_btn")});y.on("reachEnd",()=>{j.classList.add("disabled_btn"),L.classList.remove("disabled_btn")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews__swiper");new IntersectionObserver((o,n)=>{o.forEach(s=>{s.isIntersecting&&(Ie(),n.unobserve(e))})},{rootMargin:"0px 0px 50px 0px"}).observe(e)});const h=document.querySelector(".orrder-form-js"),v=document.querySelector(".modal-work-js"),ee=document.querySelector(".close-modal-work-js"),Ce=document.querySelector("[data-modal-root-js]"),Be=h.querySelector('button[type="submit"]'),C="feedback-form-state";let d={email:"",message:""};S.defaults.baseURL="https://portfolio-js.b.goit.study/api";function Je({title:e,message:t}){document.addEventListener("keydown",te),ee.addEventListener("click",_),v.addEventListener("click",se),v.classList.remove("visually-hidden"),u.classList.remove("up-link-active"),f.classList.toggle("modal-open"),document.documentElement.classList.toggle("modal-open"),Ce.innerHTML=`<h2 class="modal-work-text">${e}</h2>
      <p class="modal-work-text-p">${t}</p>`}function _(){ee.removeEventListener("click",_),document.removeEventListener("keydown",te),v.removeEventListener("click",se),v.classList.add("visually-hidden"),u.classList.add("up-link-active"),f.classList.toggle("modal-open"),document.documentElement.classList.toggle("modal-open")}function te(e){e.key==="Escape"&&_()}function se(e){e.target===v&&_()}async function Te(e){try{const t=await S.post("/requests",e);Je(t.data)}catch({message:t}){ae.warning({message:t})}}h.addEventListener("input",Pe);h.addEventListener("submit",Ae);Oe();function Oe(){const e=localStorage.getItem(C);if(!e)return;try{d=JSON.parse(e)}catch(n){console.error(n);return}const{email:t,message:o}=h.elements;t.value=d.email||"",o.value=d.message||"",m()}function Pe(e){const t=e.target.name;d[t]=e.target.value,localStorage.setItem(C,JSON.stringify(d)),m()}function Ae(e){e.preventDefault();const{email:t,message:o}=e.target.elements,n={email:t.value,comment:o.value};Te(n),d={email:"",message:""},localStorage.removeItem(C),h.reset(),Me()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.addEventListener("blur",function(){e.value===""?(e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none"):e.validity.valid?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none",s.style.display="block"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block",s.style.display="none"),m()}),o.addEventListener("blur",function(){o.value.trim()!==""?(o.classList.remove("invalid"),o.classList.add("valid"),n.style.display="none"):(o.classList.remove("valid"),o.classList.add("invalid"),n.style.display="block"),m()}),e.addEventListener("keydown",function(c){c.key==="Enter"&&(c.preventDefault(),e.validity.valid?o.focus():(e.focus(),t.style.display="block",s.style.display="none"))}),m()});function m(){const e=document.getElementById("email-user"),t=document.getElementById("comment");Be.disabled=!(e.validity.valid&&t.value.trim()!=="")}function Me(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none",o.classList.remove("valid","invalid"),n.style.display="none",m()}
//# sourceMappingURL=commonHelpers.js.map
