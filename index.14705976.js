function e(e){return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`,{headers:{"x-api-key":"live_ZpjOXPKfbgGxGoFSo2jNG1QLR0nUB3VgMZc32OriSajdPzWoIvS4wSLDkOdzsyP8"}}).then((e=>{if(e.ok)return e.json();throw new Error(e.status)}))}const s=document.querySelector(".breed-select"),t=document.querySelector(".cat-info"),i=document.querySelector(".loader"),d=document.querySelector(".error");i.classList.add("is-hidden"),d.classList.add("is-hidden"),i.classList.remove("is-hidden"),fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_ZpjOXPKfbgGxGoFSo2jNG1QLR0nUB3VgMZc32OriSajdPzWoIvS4wSLDkOdzsyP8"}}).then((e=>{if(e.ok)return e.json();throw new Error(e.status)})).then((e=>{i.classList.add("is-hidden");let t=e.map((({id:e,name:s})=>`<option value="${e}">${s}</option>`));s.insertAdjacentHTML("beforeend",t),s.classList.remove("is-hidden")})),s.addEventListener("change",(s=>{i.classList.remove("is-hidden"),t.classList.add("is-hidden"),e(s.target.value).then((e=>{const{url:s,breeds:d}=e[0],{name:n,description:r,temperament:a}=d[0];t.innerHTML=`\n            <img src="${s}" alt="${n}" width="400"/>\n            <div>\n                <h2>${n}</h2>\n                <p>${r}</p>\n                <p>${a}</p>\n            </div>\n        `,t.classList.remove("is-hidden"),i.classList.add("is-hidden")}))}));
//# sourceMappingURL=index.14705976.js.map
