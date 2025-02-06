import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";
import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { swiperInit } from "./base/swiper.ts";
import { DataBannersType, renderBanner } from "./medstogo_catalogue/render-banner.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;
	burgerMenu();
	burgerSubMenu();

	const DataBannersArray: DataBannersType[] = [
		{
			title: "Don’t know what vitamins your body needs?",
			hideSubTitle: true,
			text: "Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",
			buttonText: "Take the quiz",
			buttonURL: "",
			URLImg: "/vitamin-online/src/assets/img/image-52.png",
			imgWidth: 666,
			imgHeight: 456,
			imgAlt: "beautiful image of two jars of medicine",
			colorClass: "hard-purple",
			circleColor: 'antioxidants',
		},
		{
			title: "Vitamins & Dietary Supplements",
			hideSubTitle: false,
			text: "Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",
			buttonText: "View category",
			buttonURL: "",
			URLImg: "/vitamin-online/src/assets/img/image-80.png",
			imgWidth: 666,
			imgHeight: 406,
			imgAlt: "beautiful image of two jars of medicine",
			colorClass: "hard-blue",
			circleColor: 'vitamins',
		},
		{
			title: "Pain Relief Products",
			hideSubTitle: false,
			text: "Answer a few simple questions and automatically get a personalazed list of vitamins in minutes",
			buttonText: "View category",
			buttonURL: "",
			URLImg: "/vitamin-online/src/assets/img/image-48.png",
			imgWidth: 666,
			imgHeight: 406,
			imgAlt: "beautiful image of two jars of medicine",
			colorClass: "minerals",
			circleColor: 'probiotics',
		},
	];

	renderBanner(DataBannersArray, getElement(".swiper-wrapper") as HTMLElement);

	swiperInit(
		getElement(".banners-swiper__swiper") as HTMLElement,
		1,
		52,
		true,
		{
			1140: {
				slidesPerView: 1,
				spaceBetween: 52,
			},
			768: {
				slidesPerView: 1,
				spaceBetween: 15,
			},
			575: {
				slidesPerView: 1,
				spaceBetween: 5,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		},
		getElement(".banners-swiper__button-next") as HTMLElement,
		getElement(".banners-swiper__button-prev") as HTMLElement
	);

	const bannerCircle: NodeList = getElement(".banner__circle", "all") as NodeList;

	if (screenWidth <= 575) {
		for (let item: HTMLElement of bannerCircle) {
			observerGeometry(item as HTMLElement, 2500, 49);
		}
	} else {
		for (let item: HTMLElement of bannerCircle) {
			observerGeometry(item as HTMLElement, 2500, 50);
		}
	}
});
