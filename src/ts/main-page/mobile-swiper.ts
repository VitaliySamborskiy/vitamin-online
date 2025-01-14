import { swiperInit } from "../base/swiper.ts";
import { SwiperOptions } from "swiper/types";

export function mobileSwiper(
	element: HTMLElement,
	wrapperElement: HTMLElement,
	slideView: number,
	spaseBetween: number,
	loop: boolean,
	breakpoints: Record<string, SwiperOptions>
) {
	wrapperElement.classList.add("swiper-wrapper");
	swiperInit(element, slideView, spaseBetween, loop, breakpoints);
}
