(()=>{"use strict";const e=function({timing:e,draw:t,duration:n}){let o=performance.now();requestAnimationFrame((function r(l){let a=(l-o)/n;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(r)}))};(function(e){const t=document.getElementById("timer-days"),n=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),r=document.getElementById("timer-seconds"),l=document.getElementById("timer-arr-end");let a=setInterval((function(){let e=function(){let e=Date.now(),t=(Date.parse("7 january 2022")-e)/1e3,n=parseInt(t/86400),o=parseInt(t/3600%24),r=Math.floor(t/60%60),l=Math.floor(t%60);return o=o<10?"0"+o:o,r=r<10?"0"+r:r,l=l<10?"0"+l:l,{difference:t,days:n,hours:o,minutes:r,seconds:l}}();0==e.days?t.style.display="none":l.textContent=["день  ","дня  ","дней  "][function(e){let t=e%10;return 1==t&&11!=e?0:e>4&&e<21||t>4&&t<=9||0==t?2:1}(e.days)]+":",t.textContent=e.days,n.textContent=e.hours,o.textContent=e.minutes,r.textContent=e.seconds,e.difference<0&&(clearInterval(a),t.textContent="",n.textContent="00",o.textContent="00",r.textContent="00",l.textContent="")}),1e3)})(),function(){document.querySelector(".menu");const t=document.querySelector("menu"),n=document.querySelector("body"),o=()=>{t.classList.toggle("active-menu")};n.addEventListener("click",(n=>{if(n.target.matches("a")&&n.target.closest("menu")){if(n.target.classList.contains("close-btn"))n.preventDefault();else{n.preventDefault();let t=document.querySelector(n.target.hash).getBoundingClientRect().top+window.pageYOffset;e({duration:778,timing:e=>Math.pow(e,12),draw(e){document.documentElement.scrollTop=e*t}})}o()}else n.target.closest(".menu")?o():t.classList.contains("active-menu")&&!n.target.closest("menu")&&(n.preventDefault(),o())}))}(),(()=>{const t=document.querySelector(".popup"),n=document.querySelectorAll(".popup-btn"),o=t.querySelector(".popup-close"),r=t.querySelector(".popup-content"),l=["black","brown","darkslategray","maroon","indigo","midnightblue","purple","navy","darkgreen","goldenrod"];n.forEach((n=>{n.addEventListener("click",(()=>{document.documentElement.clientWidth>=768?function(){let t=0,n=0,a=!0;o.style.display="none",r.style.borderRadius="90px",e({duration:3e3,timing:e=>e,draw(e){if(n++,o.style.display="none",r.style.borderRadius="90px",n%3==0&&a){let e=Math.floor(10*Math.random());r.style.backgroundColor=l[e],o.style.backgroundColor=l[e]}t=t*e*2.5+250,t<=1440?(o.style.display="none",r.style.borderRadius="90px",r.style.transform=`rotate(${t}deg)`):t>1440&&a?(a=!1,o.style.display="none",r.style.borderRadius="90px",t=1440,r.style.transform=`rotate(${t}deg)`):(r.style.borderRadius="0px",o.style.display="block")}})}():(r.style.backgroundColor="rgb(36, 36, 31)",o.style.backgroundColor="rgb(36, 36, 31)"),t.style.display="block"}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),function(t=100,n=2){const o=document.querySelector(".calc-block"),r=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),a=document.querySelector(".calc-count"),c=document.querySelector(".calc-day"),s=document.getElementById("total");o.addEventListener("input",(n=>{n.target!==r&&n.target!==l&&n.target!==a&&n.target!==c||function(){const n=+r.options[r.selectedIndex].value,o=+l.value;console.log(o);let u=0,d=1,i=1;a.value>1&&(d+=+a.value/10),c.value&&c.value<5?i=2:c.value&&c.value<10&&(i=1.5),n&&o?(u=t*n*o*d*i,e({duration:1e3,timing:e=>e,draw(e){s.textContent=Math.round(u*e)}})):0==o&&(s.textContent=0)}()}))}(100,1),function(){const e=document.querySelector(".calc-block"),t=e.querySelectorAll("input"),n=e.querySelector(".calc-type"),o=document.querySelectorAll('[name = "user_name"]'),r=document.querySelectorAll('[type="submit"]'),l=document.querySelector('[placeholder="Ваше сообщение"]');t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/,"")}))})),n.addEventListener("change",(()=>{0==n.selectedIndex&&t.forEach((e=>{e.value=""})),0==n.selectedIndex?t.forEach((e=>{e.setAttribute("disabled","disabled")})):t.forEach((e=>{e.removeAttribute("disabled")}))})),r.forEach((e=>{let t=!1;const n=e.parentElement.parentElement.parentElement.querySelector('[name = "user_name"]'),o=e.parentElement.parentElement.parentElement.querySelector('[name = "user_email"]'),r=e.parentElement.parentElement.parentElement.querySelector('[name = "user_phone"]');e.addEventListener("click",(e=>{e.preventDefault(),/^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.*@.+(\..{1,11})?)$/.test(o.value)?o.style.backgroundColor="white":o.style.backgroundColor="pink",/[^\d()-]/g.test(r.value)?r.style.backgroundColor="pink":r.style.backgroundColor="white",t=""!=n.value&&""!=o.value&&""!=r.value}))})),o.forEach((e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яА-Я\-\s]/,"")}))})),l.addEventListener("input",(()=>{l.value=l.value.replace(/[^а-яА-Я\-\s]/,"")}))}(),function(){const e=document.querySelectorAll(".service-tab"),t=document.querySelector(".service-header"),n=document.querySelectorAll(".service-header-tab");t.addEventListener("click",(t=>{n.forEach(((n,o)=>{n===t.target.closest(".service-header-tab")?(n.classList.add("active"),e[o].classList.remove("d-none")):(n.classList.remove("active"),e[o].classList.add("d-none"))}))}))}(),function(e,t,n,o,r,l="portfolio-item-active",a="dot-active"){const c=document.querySelector(`.${e}`),s=document.querySelectorAll(`.${t}`),u=document.querySelector(`.${n}`),d=document.querySelector(`.${l}`),i=document.querySelector(`.${r}`);let m=0;const p=[];let y;if(!(c&&s&&u&&d&&i))return;const g=(e,t,n)=>{e[t].classList.remove(n)},v=(e,t,n)=>{e[t].classList.add(n)},f=()=>{g(s,m,l),g(p,m,a),m++,m>=s.length&&(m=0),v(s,m,l),v(p,m,a)},h=(e=1500)=>{y=setInterval(f,e)};c.addEventListener("click",(e=>{e.target.matches(`.${o}, .${r}`)&&(e.preventDefault(),g(s,m,l),g(p,m,a),e.target.matches("#arrow-right")?m++:e.target.matches("#arrow-left")?m--:e.target.classList.contains(o)&&p.forEach(((t,n)=>{e.target===t&&(m=n)})),m>=s.length?m=0:m<0&&(m=s.length-1),v(s,m,l),v(p,m,a))})),c.addEventListener("mouseenter",(e=>{e.target.matches(`.${o}, .${r}`)&&(console.log(e.target),clearInterval(y))}),{capture:!0}),c.addEventListener("mouseleave",(e=>{e.target.matches(`.${o}, .${r}`)&&h(2e3)}),{capture:!0}),(()=>{for(let e=0;e<s.length;e++){let e=document.createElement("li");e.classList.add(o),p.push(e),u.append(e)}v(s,m,l),v(p,m,a)})(),h(2e3)}("portfolio-content","portfolio-item","portfolio-dots","dot","portfolio-btn")})();