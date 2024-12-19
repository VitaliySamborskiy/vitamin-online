import Swiper from "swiper";
// import "swiper/css";

let swiperInstance: Swiper | null = null;

export function swiperInit(
	swiperElement: HTMLElement,
	sliderView: number,
	spaceBetween: number | string,
	loop: boolean
): void {
	swiperInstance = new Swiper(swiperElement, {
		slidesPerView: sliderView,
		spaceBetween: spaceBetween,
		loop: loop,
	});
}

export function swiperBreakpointsInit(
	swiperElement: HTMLElement,
	sliderView: number,
	spaceBetween: number | string,
	loop: boolean,
	breakpoints: number
): void {
	window.addEventListener("resize", (): void => {
		if (window.innerWidth <= breakpoints) {
			if (swiperInstance === null) {
				swiperInit(swiperElement, sliderView, spaceBetween, loop);
			}
		} else {
			if (swiperInstance instanceof Swiper) {
				swiperInstance.destroy(true, true);
				swiperInstance = null;
			}
		}
	});
}
