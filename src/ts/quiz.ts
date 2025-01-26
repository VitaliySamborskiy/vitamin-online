import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const screenWidth = window.innerWidth;

	if (screenWidth <= 575) {
		observerGeometry(getElement(".quiz__circle") as HTMLElement, 3000, 49);
	} else {
		observerGeometry(getElement(".quiz__circle") as HTMLElement, 2000, 79);
	}
});
