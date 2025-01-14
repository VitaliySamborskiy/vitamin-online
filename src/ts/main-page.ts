import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";
import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
// import { useFetch } from "./base/use-fetch.ts";
import { swiperBreakpointsInit, swiperInit } from "./base/swiper.ts";
import { renderRecomendationCard } from "./main-page/render-recomendation-card.ts";
import { mobileSwiper } from "./main-page/mobile-swiper.ts";
import { renderReviewCard } from "./main-page/render-reviews-card.ts";
import { SwiperOptions } from "swiper/types";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;
	const breakpointsRecommendationSwiper: Record<string, SwiperOptions> = {
		320: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		375: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		470: {
			slidesPerView: 1.4,
			spaceBetween: 10,
		},
	};
	const breakpointsReviewsSwiper: Record<string, SwiperOptions> = {
		320: {
			slidesPerView: 1.0,
			spaceBetween: 10,
		},
		475: {
			slidesPerView: 1.5,
			spaceBetween: 15,
		},
		600: {
			slidesPerView: 1.5,
			spaceBetween: 30,
		},
	};

	burgerMenu();
	burgerSubMenu();

	if (screenWidth <= 1140) {
		mobileSwiper(
			getElement(".reviews__swiper") as HTMLElement,
			getElement(".reviews__commentaries-block") as HTMLElement,
			0,
			0,
			false,
			breakpointsReviewsSwiper
		);
	}

	if (screenWidth <= 575) {
		observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 59);
		observerGeometry(getElement(".interest__circle-purple") as HTMLElement, 1800, 59);
		mobileSwiper(
			getElement(".recommendation__swiper") as HTMLElement,
			getElement(".recommendation__product-cards") as HTMLElement,
			1.4,
			10,
			false,
			breakpointsRecommendationSwiper
		);
	} else {
		observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 95);
		observerGeometry(getElement(".interest__circle-purple") as HTMLElement, 1800, 94);
	}

	observerGeometry(getElement(".health-section__left-circle-yellow") as HTMLElement, 1800, 140);
	observerGeometry(getElement(".main-section__circle-purple") as HTMLElement, 2700, 105);

	swiperBreakpointsInit(
		getElement(".recommendation__swiper") as HTMLElement,
		1.3,
		10,
		false,
		575,
		getElement(".recommendation__product-cards") as HTMLElement,
		breakpointsRecommendationSwiper
	);

	swiperBreakpointsInit(
		getElement(".reviews__swiper") as HTMLElement,
		1.5,
		30,
		false,
		1140,
		getElement(".reviews__commentaries-block") as HTMLElement,
		breakpointsReviewsSwiper
	);

	renderRecomendationCard(
		[
			{
				type: "minerals",
				url: "http://localhost:1337/uploads/main_lending_4_2955f5aa7d.webp",
				alt: "product Reacted Zinc",
				width: 186,
				height: 211,
				tag: "Minerals",
				title: "Reacted Zinc",
				text: "B vitamins are essential for your nervous system and proper brain functioning.",
			},
			{
				type: "vitamins",
				url: "http://localhost:1337/uploads/main_lending_5_447de1ed9a.webp",
				alt: "product Ortho B Complex",
				width: 189,
				height: 211,
				tag: "Vitamins & Dietary Supplements",
				title: "Ortho B Complex",
				text: "B vitamins are essential for your nervous system and proper brain functioning.",
			},
		] as Record<string, string | number>[],
		getElement(".recommendation__product-cards") as HTMLElement
	);
	renderReviewCard(
		[
			{
				title: "Easy monitoring your weight goal!",
				text: "Love Vitamins! The individual packets make it so easy to remember you daily vitamins and makes travelling easy!!! 👍🏽",
				name: "David S.",
				url: "http://localhost:1337/uploads/main_lending_7_5bb4e5f9ef.webp",
			},
			{
				title: "High quality vitamins & supplements",
				text: "High quality vitamins & supplements, very easy on my stomach too. Great service! I really like the flexibility and options available in the subscriptions.",
				name: "Bridget T.",
				url: "http://localhost:1337/uploads/main_lending_8_e8aaed8106.webp",
			},
			{
				title: "I love it",
				text: "I love it. It makes me feel good each morning and then it also makes me feel accomplished.",
				name: "Jenna Y.",
				url: "http://localhost:1337/uploads/main_lending_9_340cf9b6e0.webp",
			},
		] as Record<string, string | number>[],
		getElement(".reviews__commentaries-block") as HTMLElement
	);
});
