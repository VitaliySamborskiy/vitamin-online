import { renderHeader, renderHeaderResize } from "./forms/render-header.ts";
import { getElement } from "./base/get-element.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	renderHeader(getElement(".sing-in__header") as HTMLElement);
	renderHeaderResize(getElement(".sing-in__header") as HTMLElement);
});
