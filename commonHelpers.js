import{S as g,i as l}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function m(n){const r="43179971-31cef5ae97b630d4ee80eef54",e=`https://pixabay.com/api/?${new URLSearchParams({key:r,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>t.json())}const d=document.querySelector(".gallery");function p(n){const r=n.map(s=>`<li class="gallery-item">
  <a class="gallery-link" href="${s.largeImageURL}">
    <img
            src="${s.webformatURL}"
            alt="${s.tags}"
            width="360"
            height="200"
            class="gallery-img"
        />
        <ul class="gal-list">
        <li class="gal-link"><span class="gal-span">Likes</span> ${s.likes}</li>
        <li class="gal-link"><span class="gal-span">Views</span> ${s.views}</li>
        <li class="gal-link"><span class="gal-span">Comments</span> ${s.comments}</li>
        <li class="gal-link"><span class="gal-span">Downloads</span> ${s.downloads}</li>
     </ul>
  </a>
</li>`).join("");d.insertAdjacentHTML("beforeend",r),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const f=document.getElementById("search-form"),c=document.getElementById("search-input"),i=document.querySelector(".gallery"),u=document.querySelector(".loader");f.addEventListener("submit",h);function h(n){n.preventDefault();const r=c.value.trim();if(r==="")return l.warning({message:"Please try again! Write something.",position:"topRight",color:"red"});u.classList.remove("is-hidden"),m(r).then(a=>{if(a.hits.length===0){l.error({message:"Sorry, there are no images matching your search query. Please try again!",color:"red",position:"topRight"}),i.innerHTML="";return}i.innerHTML="",p(a.hits)}).catch(a=>{console.error("Error fetching data:",a),i.innerHTML=""}).finally(()=>{u.classList.add("is-hidden")}),c.value=""}
//# sourceMappingURL=commonHelpers.js.map
