import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { renderLogo, renderlogoResize } from "./quiz/logo-change.ts";
import { activation } from "./quiz/activation.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;

	renderLogo(getElement(".quiz__logo-svg") as SVGElement);
	renderlogoResize(getElement(".quiz__logo-svg") as SVGElement);
	// activation(
	// 	getElement("#nameUser") as HTMLElement,
	// 	getElement(".quiz__input-button") as HTMLElement
	// );

	if (screenWidth <= 575) {
		observerGeometry(getElement(".quiz__circle") as HTMLElement, 3000, 49);
	} else {
		observerGeometry(getElement(".quiz__circle") as HTMLElement, 2000, 79);
	}
});
