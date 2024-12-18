import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";
import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
    burgerMenu();
    burgerSubMenu();
    observerGeometry(getElement(".main-section__circle-purple") as HTMLElement, 2700, 105);

    const screenWidth = window.innerWidth;

    if (screenWidth <= 375) {
        observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 59);
    } else {
        observerGeometry(getElement(".main-section__circle-yellow") as HTMLElement, 2500, 95);
    }
    observerGeometry(getElement(".health-section__left-circle-yellow") as HTMLElement, 1800, 140);
});
