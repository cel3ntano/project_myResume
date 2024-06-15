import{A,a as d,S as D,K as $,i as M}from"./assets/vendor-3267af29.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const g of r.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&n(g)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();A.init({once:!0});function N(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth",block:"start"})}document.querySelectorAll('a[href^="#"]').forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const o=this.getAttribute("href");N(o)})});document.addEventListener("mousemove",function(e){document.querySelectorAll(".hero-back, .decor-bg").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,r=-(e.clientY/window.innerHeight-.5)*10;n.style.backgroundPosition=`calc(50% + ${s}px) calc(50% + ${r}px)`}),document.querySelectorAll(".benefits-decor-img").forEach(n=>{const s=-(e.clientX/window.innerWidth-.5)*20,r=-(e.clientY/window.innerHeight-.5)*20;n.style.transform=`translate(${s}px, ${r}px)`})});const w=document.querySelector(".switch-open-burger"),E=document.querySelector(".switch-close-burger"),C=document.querySelector(".nav-list"),V=document.querySelector(".header-nav"),f=e=>{e.preventDefault(),E.classList.toggle("active-btn"),w.classList.toggle("active-btn"),V.classList.toggle("active-nav")},H=e=>{e.target.getAttribute("class")==="nav-link"&&f(e)};w.addEventListener("click",f);E.addEventListener("click",f);C.addEventListener("click",H);const S=document.querySelector(".theme-btn"),k=document.querySelector(".switch-theme"),R=document.body,F=document.querySelectorAll(".change-them"),_=()=>{F.forEach(e=>e.classList.toggle("change-them"))},I=()=>{R.classList.toggle("dark-theme")},q=()=>{k.classList.toggle("edit-circle")};document.addEventListener("DOMContentLoaded",()=>{localStorage.getItem("statusThem")==="true"&&(S.checked=!0,q(),I(),_())});const K=()=>{q(),I(),_();const e=k.classList.length>1;localStorage.setItem("statusThem",e)};S.addEventListener("change",K);document.querySelector(".projects-list");const h=document.querySelectorAll(".projects-item"),B=document.querySelector(".project-btn");B.addEventListener("click",j);let y=0;const X=3;function j(){for(let e=0;e<X;e++){if(y>=h.length){B.style.display="none";break}h[y].classList.remove("is-hidden"),y++}}j();d.defaults.baseURL="https://portfolio-js.b.goit.study/api";async function Y(){try{return(await d.get("/reviews")).data}catch{throw new Error("Not found")}}const m=document.querySelector(".reviews__arrow-left"),u=document.querySelector(".reviews__arrow-right"),L=document.querySelector(".reviews__list");async function J(){try{const e=await Y();b(e)}catch{b([])}}J();function b(e){if(e.length===0){L.innerHTML="<p>Not found</p>";return}const t=e.map(o=>`<li class="reviews__item swiper-slide">
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
       </div>
      </div>
    </li>`).join("");L.insertAdjacentHTML("beforeend",t)}const a=new D(".reviews__swiper",{modules:[$],keyboard:{enabled:!0,onlyInViewport:!1},speed:400,spaceBetween:100,breakpoints:{320:{slidesPerView:1,spaceBetween:16},1280:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}}});m.addEventListener("click",()=>{a.slidePrev()});u.addEventListener("click",()=>{a.slideNext()});a.on("fromEdge",()=>{m.classList.remove("disabled_btn"),u.classList.remove("disabled_btn")});a.on("reachBeginning",()=>{m.classList.add("disabled_btn"),u.classList.remove("disabled_btn")});a.on("reachEnd",()=>{u.classList.add("disabled_btn"),m.classList.remove("disabled_btn")});const l=document.querySelector(".orrder-form-js"),i=document.querySelector(".modal-work-js"),T=document.querySelector(".close-modal-work-js"),U=document.querySelector("[data-modal-root-js]"),p="feedback-form-state";let c={email:"",message:""};d.defaults.baseURL="https://portfolio-js.b.goit.study/api";function W({title:e,message:t}){document.addEventListener("keydown",P),T.addEventListener("click",v),i.addEventListener("click",x),i.classList.remove("visually-hidden"),document.body.classList.add("body-no-scroll"),U.innerHTML=`<h2 class="modal-work-text">${e}</h2>
      <p class="modal-work-text-p">${t}</p>`}function v(){T.removeEventListener("click",v),document.removeEventListener("keydown",P),i.removeEventListener("click",x),i.classList.add("visually-hidden"),document.body.classList.remove("body-no-scroll")}function P(e){e.key==="Escape"&&v()}function x(e){e.target===i&&v()}function z(e){e.preventDefault();const{email:t,message:o}=e.target.elements,n={email:t.value,comment:o.value};G(n)}async function G(e){try{const t=await d.post("/requests",e);W(t.data),O()}catch({message:t}){M.warning({message:t})}}l.addEventListener("submit",z);l.addEventListener("input",Z);l.addEventListener("submit",ee);Q();function Q(){const e=localStorage.getItem(p);if(!e)return;try{c=JSON.parse(e)}catch(n){console.error(n);return}const{email:t,message:o}=l.elements;t.value=c.email||"",o.value=c.message||""}function Z(e){const t=e.target.name;c[t]=e.target.value,localStorage.setItem(p,JSON.stringify(c))}function ee(e){e.preventDefault(),c={email:"",message:""},localStorage.removeItem(p),l.reset(),O()}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");e.addEventListener("blur",function(){e.validity.valid?(e.classList.remove("invalid"),e.classList.add("valid"),t.style.display="none",s.style.display="block"):(e.classList.remove("valid"),e.classList.add("invalid"),t.style.display="block",s.style.display="none")}),o.addEventListener("blur",function(){o.value.trim()!==""?(o.classList.remove("invalid"),o.classList.add("valid"),n.style.display="none"):(o.classList.remove("valid"),o.classList.add("invalid"),n.style.display="block")})});function O(){const e=document.getElementById("email-user"),t=document.getElementById("email-error"),o=document.getElementById("comment"),n=document.getElementById("comment-error"),s=document.querySelector(".valid-icon");console.log("reset"),e.classList.remove("valid","invalid"),t.style.display="none",s.style.display="none",o.classList.remove("valid","invalid"),n.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
