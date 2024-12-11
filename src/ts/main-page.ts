import { burgerMenu, burgerSubMenu } from "./base/burger-menu.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
    burgerMenu();
    burgerSubMenu();
});
