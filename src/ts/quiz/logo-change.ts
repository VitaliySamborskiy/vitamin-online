import { renderHeaderResize } from "../forms/render-header.ts";

let currentLayout: "mobile" | "desktop" | null = null;

export function renderLogo(element: SVGElement): void {
	const useElement = element.firstElementChild as SVGUseElement;
	if (window.innerWidth <= 768 && currentLayout !== "mobile") {
		useElement.href.baseVal = "#logo";
	} else {
		useElement.href.baseVal = "#logo-white";
	}
}

export function renderlogoResize(element: SVGElement): void {
	addEventListener("resize", (): void => {
		renderLogo(element);
	});
}
