import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";
import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { swiperInit } from "./base/swiper.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;
	burgerMenu();
	burgerSubMenu();

	swiperInit(getElement(".banners-swiper__swiper") as HTMLElement, 1, 30, true);
	if (screenWidth <= 575) {
		observerGeometry(getElement(".banner__circle") as HTMLElement, 2500, 49);
	} else {
		observerGeometry(getElement(".banner__circle") as HTMLElement, 2500, 50);
	}
});
