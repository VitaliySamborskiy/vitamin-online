import Swiper from "swiper";
import { SwiperOptions } from "swiper/types";

let swiperInstanceMap = new Map<HTMLElement, Swiper>();

export function swiperInit(
	swiperElement: HTMLElement,
	sliderView: number,
	spaceBetween: number | string,
	loop: boolean,
	breakpoints?: Record<string, SwiperOptions>,
	nextButtonElement?: HTMLElement,
	prevButtonElement?: HTMLElement,
	paginationElement?: HTMLElement
): void {
	swiperInstanceMap.set(
		swiperElement,
		new Swiper(swiperElement, {
			slidesPerView: sliderView,
			spaceBetween: spaceBetween,
			loop: loop,
			breakpoints: breakpoints,

			pagination: {
				el: paginationElement,
			},

			navigation: {
				nextEl: nextButtonElement,
				prevEl: prevButtonElement,
			},
		})
	);
}

export function swiperBreakpointsInit(
	swiperElement: HTMLElement,
	sliderView: number,
	spaceBetween: number | string,
	loop: boolean,
	breakpoints: number,
	swiperWrapperElement?: HTMLElement,
	breakpointsOptions?: Record<string, SwiperOptions>
): void {
	window.addEventListener("resize", (): void => {
		if (window.innerWidth <= breakpoints) {
			swiperWrapperElement ? swiperWrapperElement.classList.add("swiper-wrapper") : null;
			!swiperInstanceMap.has(swiperElement)
				? swiperInit(swiperElement, sliderView, spaceBetween, loop, breakpointsOptions)
				: null;
		} else {
			swiperWrapperElement ? swiperWrapperElement.classList.remove("swiper-wrapper") : null;
			if (swiperInstanceMap.has(swiperElement)) {
				swiperInstanceMap.get(swiperElement)?.destroy(true, true);
				swiperInstanceMap.delete(swiperElement);
			}
		}
	});
}
