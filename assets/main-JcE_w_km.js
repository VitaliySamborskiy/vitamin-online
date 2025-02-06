import{g as e}from"./get-element-u0L3Yg2z.js";import{b as m,a as d}from"./burger-menu--bPyO_da.js";import{o as n}from"./observer-geometry-CH56aslZ.js";import{s as p,a as o}from"./swiper-CTIXwcf0.js";function _(a,r){let i="";for(let t of a)i+=`<article class="swiper-slide recommendation__product-card ${t.type==="minerals"?"minerals":"vitamins"}">
								<picture class="recommendation__product-img-block">
										<img class="recommendation__product-img" src="${t.url}"
													alt="${t.alt}"
													width="${t.width}"
													height="${t.height}"
													loading="lazy"/>
								</picture>
								<span class="recommendation__product-tag">${t.tag}</span>
								<h3 class="recommendation__product-title">${t.title}</h3>
								<p class="recommendation__product-text">${t.text}</p>
						</article>`;r.innerHTML=i}function l(a,r,i,t,s,c){r.classList.add("swiper-wrapper"),p(a,i,t,s,c)}function u(a,r){let i="",t="";for(let s=0;s<5;s++)t+=`<svg class="reviews__ratings-svg">
<use href="#star"></use>
</svg>`;for(let s of a)i+=`<article class="swiper-slide reviews__commentary">
								<div class="reviews__ratings">${t}</div>
										<h3 class="reviews__commentary-title">${s.title}</h3>
										<p class="reviews__commentary-text">${s.text}</p>
											<div class="reviews__commentary-img-block">
												<picture>
													<img class="reviews__commentary-img" src="${s.url}" />
												</picture>
												<p class="reviews__commentary-name">${s.name}</p>
											</div>
								</div>
							</article>`;r.innerHTML=i}document.addEventListener("DOMContentLoaded",async function(){const a=window.innerWidth,r={320:{slidesPerView:1,spaceBetween:10},375:{slidesPerView:1,spaceBetween:10},470:{slidesPerView:1.4,spaceBetween:10}},i={320:{slidesPerView:1,spaceBetween:10},475:{slidesPerView:1.5,spaceBetween:15},600:{slidesPerView:1.5,spaceBetween:30}};m(),d(),a<=1140&&l(e(".reviews__swiper"),e(".reviews__commentaries-block"),0,0,!1,i),a<=575?(n(e(".main-section__circle-yellow"),2500,59),n(e(".interest__circle-purple"),1800,59),l(e(".recommendation__swiper"),e(".recommendation__product-cards"),1.4,10,!1,r)):(n(e(".main-section__circle-yellow"),2500,95),n(e(".interest__circle-purple"),1800,94)),n(e(".health-section__left-circle-yellow"),1800,140),n(e(".main-section__circle-purple"),2700,105),o(e(".recommendation__swiper"),1.3,10,!1,575,e(".recommendation__product-cards"),r),o(e(".reviews__swiper"),1.5,30,!1,1140,e(".reviews__commentaries-block"),i),_([{type:"minerals",url:"http://localhost:1337/uploads/main_lending_4_2955f5aa7d.webp",alt:"product Reacted Zinc",width:186,height:211,tag:"Minerals",title:"Reacted Zinc",text:"B vitamins are essential for your nervous system and proper brain functioning."},{type:"vitamins",url:"http://localhost:1337/uploads/main_lending_5_447de1ed9a.webp",alt:"product Ortho B Complex",width:189,height:211,tag:"Vitamins & Dietary Supplements",title:"Ortho B Complex",text:"B vitamins are essential for your nervous system and proper brain functioning."}],e(".recommendation__product-cards")),u([{title:"Easy monitoring your weight goal!",text:"Love Vitamins! The individual packets make it so easy to remember you daily vitamins and makes travelling easy!!! 👍🏽",name:"David S.",url:"http://localhost:1337/uploads/main_lending_7_5bb4e5f9ef.webp"},{title:"High quality vitamins & supplements",text:"High quality vitamins & supplements, very easy on my stomach too. Great service! I really like the flexibility and options available in the subscriptions.",name:"Bridget T.",url:"http://localhost:1337/uploads/main_lending_8_e8aaed8106.webp"},{title:"I love it",text:"I love it. It makes me feel good each morning and then it also makes me feel accomplished.",name:"Jenna Y.",url:"http://localhost:1337/uploads/main_lending_9_340cf9b6e0.webp"}],e(".reviews__commentaries-block"))});
