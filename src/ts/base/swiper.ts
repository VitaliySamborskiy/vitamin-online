import Swiper from "swiper";
import "swiper/swiper.css";

type SwiperOptions = {
    swiperElement: HTMLElement;
    sliderView?: number;
    spaceBetween?: number;
    loop?: boolean;
};

let swiperInstance: Swiper | null = null;

export function swiperInit({ swiperElement, sliderView, spaceBetween, loop }: SwiperOptions): void {
    swiperInstance = new Swiper(swiperElement, {
        slidesPerView: sliderView,
        spaceBetween: spaceBetween,
        loop: loop,
    });
}

export function swiperBreakpointsInit(
    { swiperElement, sliderView, spaceBetween, loop }: SwiperOptions,
    breakpoints: number,
): void {
    window.addEventListener("resize", (): void => {
        if (window.innerWidth < breakpoints) {
            swiperInit({ swiperElement, sliderView, spaceBetween, loop });
        } else {
            swiperInstance?.destroy(true, true);
        }
    });
}
