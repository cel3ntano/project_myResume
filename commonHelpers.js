import{A as oe,a as ne,b as w,S as ce,K as ie,i as re}from"./assets/vendor-37492f01.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(s){if(s.ep)return;s.ep=!0;const c=o(s);fetch(s.href,c)}})();oe.init({once:!0});function ae(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");ae(o)})});document.addEventListener("mousemove",function(e){document.querySelectorAll(".hero-back, .decor-bg").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*10;n.style.backgroundPosition=`calc(50% + ${s}px) calc(50% + ${c}px)`}),document.querySelectorAll(".benefits-decor-img").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,c=-(e.clientY/window.innerHeight-.5)*20;n.style.transform=`translate(${s}px, ${c}px)`})});const H=document.querySelector(".switch-open-burger"),V=document.querySelector(".switch-close-burger"),le=document.querySelector(".nav-list"),de=document.querySelector(".header-nav"),$=document.body,h=document.querySelector(".up-link"),b=document.querySelector(".header"),me=()=>{b.getAttribute("class")!="header"&&b.classList.toggle("header-background")},R=e=>{e.preventDefault(),me(),$.classList.toggle("toggle-scroll"),V.classList.toggle("active-btn"),H.classList.toggle("active-btn"),de.classList.toggle("active-nav")},ue=e=>{e.target.getAttribute("class")==="nav-link hover"&&window.innerWidth<768&&R(e)},ge=()=>{(window.scrollY||window.pageYOffset)>100?(b.classList.remove("header-background"),h.classList.add("up-link-active")):(b.classList.add("header-background"),h.classList.remove("up-link-active"))};H.addEventListener("click",R);V.addEventListener("click",R);le.addEventListener("click",ue);document.addEventListener("scroll",ge);const F=document.querySelector(".theme-btn"),Y=document.querySelector(".switch-theme"),pe=document.body,ve=document.querySelectorAll(".change-them"),K=()=>{ve.forEach(e=>e.classList.toggle("change-them"))},X=()=>{pe.classList.toggle("dark-theme")},U=()=>{Y.classList.toggle("edit-circle")};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("statusThem")==="true"&&(F.checked=!0,U(),X(),K())});const ye=()=>{U(),X(),K();const e=Y.classList.length>1;localStorage.setItem("statusThem",e)};F.addEventListener("change",ye);const u=document.querySelector(".hidden-text"),E=document.querySelector(".load-more-button");document.addEventListener("DOMContentLoaded",e=>{u.style.display="none"});E.addEventListener("click",()=>{u.style.display==="none"?(u.style.display="block",E.textContent="Show less"):u.style.display==="block"&&(u.style.display="none",E.textContent="Load more")});const C="/project_myResume/assets/wallet-webservice-06280c40.jpg",he="/project_myResume/assets/wallet-webservice-2x-e6c5ae3a.jpg",B="/project_myResume/assets/green-harvest-35f2b6d7.jpg",be="/project_myResume/assets/green-harvest-2x-ae8385c7.jpg",J="/project_myResume/assets/english-excellence-8065e930.jpg",fe="/project_myResume/assets/english-excellence-2x-13bf943e.jpg",T="/project_myResume/assets/power-pulse-05a42d66.jpg",we="/project_myResume/assets/power-pulse-2x-e6ed7073.jpg",O="/project_myResume/assets/vyshyvanka-vibes-64a37946.jpg",Se="/project_myResume/assets/vyshyvanka-vibes-2x-744bc708.jpg",P="/project_myResume/assets/energy-flow-7e50e16f.jpg",Le="/project_myResume/assets/energy-flow-2x-153e5da2.jpg",A="/project_myResume/assets/mimino-9a419ef5.jpg",je="/project_myResume/assets/mimino-2x-1da89b50.jpg",M="/project_myResume/assets/chego-jewelry-d2bbb936.jpg",_e="/project_myResume/assets/chego-jewelry-2x-85306eae.jpg",N="/project_myResume/assets/fruitbox-14676b6a.jpg",ke="/project_myResume/assets/fruitbox-2x-33174f2d.jpg",D="/project_myResume/assets/starlight-studio-e8b93bb6.jpg",xe="/project_myResume/assets/starlight-studio-2x-6934bc95.jpg",r="/project_myResume/assets/icons-4fa5f8a9.svg",f=[{imgSrc:C,imgSrcSet:`${C} 1x, ${he} 2x`,alt:"Wallet Webservice",tech:"React, JavaScript, Node JS, Git",title:"wallet webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:B,imgSrcSet:`${B} 1x, ${be} 2x`,alt:"Green Harvest Webservice",tech:"React, JavaScript, Node JS, Git",title:"green harvest webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:J,imgSrcSet:`${J} 1x, ${fe} 2x`,alt:"English Excellence Webservice",tech:"React, JavaScript, Node JS, Git",title:"english excellence website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:T,imgSrcSet:`${T} 1x, ${we} 2x`,alt:"Power Pulse Webservice",tech:"React, JavaScript, Node JS, Git",title:"power pulse webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:O,imgSrcSet:`${O} 1x, ${Se} 2x`,alt:"Vyshyvanka Vibes Landing Page",tech:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes landing page",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:P,imgSrcSet:`${P} 1x, ${Le} 2x`,alt:"Energy Flow Webservice",tech:"React, JavaScript, Node JS, Git",title:"energy flow webservice",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:A,imgSrcSet:`${A} 1x, ${je} 2x`,alt:"Mimino Website",tech:"React, JavaScript, Node JS, Git",title:"mimino website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:M,imgSrcSet:`${M} 1x, ${_e} 2x`,alt:"Chego Jewelry Website",tech:"React, JavaScript, Node JS, Git",title:"chego jewelry website",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:N,imgSrcSet:`${N} 1x, ${ke} 2x`,alt:"Fruitbox Online Store",tech:"React, JavaScript, Node JS, Git",title:"fruitbox online store",link:"https://github.com/cel3ntano/project_myResume"},{imgSrc:D,imgSrcSet:`${D} 1x, ${xe} 2x`,alt:"Starlight Studio Landing Page",tech:"React, JavaScript, Node JS, Git",title:"starlight studio landing page",link:"https://github.com/cel3ntano/project_myResume"}],z=document.querySelector(".projects-list"),q=document.querySelector(".project-btn");q.addEventListener("click",$e);let a=0;const l=3;function Ee(){const e=a*l,t=e+l,n=f.slice(e,t).map(({imgSrc:s,imgSrcSet:c,alt:i,tech:_,title:k,link:x})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${c}"
        src="${s}"
        alt="${i}"
      />
      <p class="project-text">${_}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${k}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${x}"
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
  `).join("");z.insertAdjacentHTML("beforeend",n),a++,a*l>=f.length&&(q.style.display="none")}document.addEventListener("DOMContentLoaded",Ee);function $e(){const e=a*l,t=e+l,n=f.slice(e,t).map(({imgSrc:i,imgSrcSet:_,alt:k,tech:x,title:te,link:se})=>`
    <li class="projects-item">
      <img
        class="project-img"
        srcset="${_}"
        src="${i}"
        alt="${k}"
      />
      <p class="project-text">${x}</p>
      <div class="projects-wrap">
        <div class="projects-subtitle-wrap">
          <h3 class="projects-subtitle">${te}</h3>
        </div>
        <div class="project-link-wrap">
          <a
            class="project-link"
            href="${se}"
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
  `).join("");z.insertAdjacentHTML("beforeend",n);const c=document.querySelector(".projects-item:last-child").getBoundingClientRect().height;window.scrollBy({left:0,top:c*2.5,behavior:"smooth"}),a++,a*l>=f.length&&(q.style.display="none")}const g=document.querySelector(".ac:first-child");g.classList.add("open");g.querySelector(".ac-panel").style.display="block";document.addEventListener("DOMContentLoaded",e=>{document.querySelectorAll(".ac").forEach(o=>{o.style.backgroundColor="var(--White)"}),g.style.backgroundColor="var(--Accent-secondary)"});new ne(".accordion-container",{duration:250,showMultiple:!1,openOnInit:[0],onOpen:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="var(--Accent-secondary)",document.querySelectorAll(".ac").forEach(s=>{s!==e&&(s.style.backgroundColor="var(--White)",s.style.transition="background 250ms ease",s.classList.remove("open"))})},onClose:function(e){const t=e.querySelector(".icon-button-faq-down"),o=e.querySelector(".icon-button-faq-up");t.classList.toggle("open"),o.classList.toggle("open"),e.style.backgroundColor="transparent",e===g&&(g.style.backgroundColor="var(--Accent-secondary)")}});w.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Re(){try{return(await w.get("/reviews")).data}catch{throw new Error("Not found")}}const S=document.querySelector(".reviews__arrow-left"),L=document.querySelector(".reviews__arrow-right"),W=document.querySelector(".reviews__list");async function qe(){try{const e=await Re();G(e)}catch{G([])}}function G(e){if(e.length===0){W.innerHTML='<p class="non_info">Not found</p>';return}const t=e.map(o=>`<li class="reviews__item swiper-slide">
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
    </li>`).join("");W.insertAdjacentHTML("beforeend",t)}const v=new ce(".reviews__swiper",{modules:[ie],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{320:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});S.addEventListener("click",()=>{v.slidePrev()});L.addEventListener("click",()=>{v.slideNext()});v.on("fromEdge",()=>{S.classList.remove("disabled_btn"),L.classList.remove("disabled_btn")});v.on("reachBeginning",()=>{S.classList.add("disabled_btn"),L.classList.remove("disabled_btn")});v.on("reachEnd",()=>{L.classList.add("disabled_btn"),S.classList.remove("disabled_btn")});document.addEventListener("DOMContentLoaded",()=>{const e=document.querySelector(".reviews__swiper");new IntersectionObserver((o,n)=>{o.forEach(s=>{s.isIntersecting&&(qe(),n.unobserve(e))})},{rootMargin:"0px 0px 50px 0px"}).observe(e)});const y=document.querySelector(".orrder-form-js"),p=document.querySelector(".modal-work-js"),Q=document.querySelector(".close-modal-work-js"),Ie=document.querySelector("[data-modal-root-js]"),Ce=y.querySelector('button[type="submit"]'),I="feedback-form-state";let d={email:"",message:""};w.defaults.baseURL="https://portfolio-js.b.goit.study/api";function Be({title:e,message:t}){document.addEventListener("keydown",Z),Q.addEventListener("click",j),p.addEventListener("click",ee),p.classList.remove("visually-hidden"),h.style.display="none",$.classList.toggle("modal-open"),Ie.innerHTML=`<h2 class="modal-work-text">${e}</h2>
      <p class="modal-work-text-p">${t}</p>`}function j(){Q.removeEventListener("click",j),document.removeEventListener("keydown",Z),p.removeEventListener("click",ee),p.classList.add("visually-hidden"),h.style.display="block",$.classList.toggle("modal-open")}function Z(e){e.key==="Escape"&&j()}function ee(e){e.target===p&&j()}async function Je(e){try{const t=await w.post("/requests",e);Be(t.data)}catch({message:t}){re.warning({message:t})}}y.addEventListener("input",Oe);y.addEventListener("submit",Pe);Te();function Te(){const e=localStorage.getItem(I);if(!e)return;try{d=JSON.parse(e)}catch(n){console.error(n);return}const{email:t,message:o}=y.elements;t.value=d.email||"",o.value=d.message||"",m()}function Oe(e){const t=e.target.name;d[t]=e.target.value,localStorage.setItem(I,JSON.stringify(d)),m()}function Pe(e){e.preventDefault();const{email:t,message:o}=e.target.elements,n={email:t.value,comment:o.value};Je(n),d={email:"",message:""},localStorage.removeItem(I),y.reset(),Ae()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.addEventListener("blur",function(){e.value===""?(e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none"):e.validity.valid?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none",s.style.display="block"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block",s.style.display="none"),m()}),o.addEventListener("blur",function(){o.value.trim()!==""?(o.classList.remove("invalid"),o.classList.add("valid"),n.style.display="none"):(o.classList.remove("valid"),o.classList.add("invalid"),n.style.display="block"),m()}),e.addEventListener("keydown",function(c){c.key==="Enter"&&(c.preventDefault(),e.validity.valid?o.focus():(e.focus(),t.style.display="block",s.style.display="none"))}),m()});function m(){const e=document.getElementById("email-user"),t=document.getElementById("comment");Ce.disabled=!(e.validity.valid&&t.value.trim()!=="")}function Ae(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none",o.classList.remove("valid","invalid"),n.style.display="none",m()}
//# sourceMappingURL=commonHelpers.js.map
