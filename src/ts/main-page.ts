import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";
import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
// import { swiperBreakpointsInit, swiperInit } from "./base/swiper.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;

	burgerMenu();
	burgerSubMenu();

	if (screenWidth <= 575) {
		observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 59);
		observerGeometry(getElement(".interest__circle-purple") as HTMLElement, 1800, 59);
		// swiperInit(getElement(".recommendation__swiper") as HTMLElement, 1.2, 10, false);
	} else {
		observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 95);
		observerGeometry(getElement(".interest__circle-purple") as HTMLElement, 1800, 94);
	}

	observerGeometry(getElement(".health-section__left-circle-yellow") as HTMLElement, 1800, 140);
	observerGeometry(getElement(".main-section__circle-purple") as HTMLElement, 2700, 105);

	// swiperBreakpointsInit(getElement(".recommendation__swiper") as HTMLElement, 1.2, 10, false, 575);
});
