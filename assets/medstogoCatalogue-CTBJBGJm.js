import{g as t}from"./get-element-u0L3Yg2z.js";import{b as r,a as l}from"./burger-menu--bPyO_da.js";import{o as n}from"./observer-geometry-CH56aslZ.js";import{s as o}from"./swiper-CTIXwcf0.js";function c(s,a){let i="";for(let e of s)i+=`<article class="swiper-slide banners-swiper__slide">
	<div class="banner__circle circle ${e.circleColor}"></div>
	<picture class="banner__img-block">
		<img class="banner__img" src="${e.URLImg}"
			width="${e.imgWidth}"
			height="${e.imgHeight}"
			alt="${e.imgAlt}"
			loading="lazy" />
	</picture>
	<div class="banner__content ${e.colorClass}">
		<div class="banner__text-block">
			<h3 class="banner__sub-title" style="display: ${e.hideSubTitle?"none":"block"}">You may also like</h3>
			<h2 class="banner__title">${e.title}</h2>
			<p class="banner__text">${e.text}</p>
			<a
				class="button ivory-button banner__button" href="${e.buttonURL}">${e.buttonText}</a>
			<div class="banner__arc-yellow arc__yellow ${e.circleColor}">
				<div class="${e.colorClass} banner__arc-mini arc__white"></div>
			</div>
		</div>
		<div class="banner__picture-block">
			<svg class="banner__svg">
				<use href="#logo-white"></use>
			</svg>
		</div>
	</div>
</article>`;a.innerHTML=i}document.addEventListener("DOMContentLoaded",async function(){const s=window.innerWidth;r(),l(),c([{title:"Don’t know what vitamins your body needs?",hideSubTitle:!0,text:"Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",buttonText:"Take the quiz",buttonURL:"",URLImg:"/vitamin-online/src/assets/img/image-52.png",imgWidth:666,imgHeight:456,imgAlt:"beautiful image of two jars of medicine",colorClass:"hard-purple",circleColor:"antioxidants"},{title:"Vitamins & Dietary Supplements",hideSubTitle:!1,text:"Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",buttonText:"View category",buttonURL:"",URLImg:"/vitamin-online/src/assets/img/image-80.png",imgWidth:666,imgHeight:406,imgAlt:"beautiful image of two jars of medicine",colorClass:"hard-blue",circleColor:"vitamins"},{title:"Pain Relief Products",hideSubTitle:!1,text:"Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",buttonText:"View category",buttonURL:"",URLImg:"/vitamin-online/src/assets/img/image-48.png",imgWidth:666,imgHeight:406,imgAlt:"beautiful image of two jars of medicine",colorClass:"minerals",circleColor:"probiotics"}],t(".swiper-wrapper")),o(t(".banners-swiper__swiper"),1,52,!0,{1140:{slidesPerView:1,spaceBetween:52},768:{slidesPerView:1,spaceBetween:15},575:{slidesPerView:1,spaceBetween:5},320:{slidesPerView:1,spaceBetween:0}},t(".banners-swiper__button-next"),t(".banners-swiper__button-prev"));const i=t(".banner__circle","all");if(s<=575)for(let e of i)n(e,2500,49);else for(let e of i)n(e,2500,50)});
