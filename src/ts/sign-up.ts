import { renderHeader, renderHeaderResize } from "./forms/render-header.ts";
import { getElement } from "./base/get-element.ts";
import { tabsButtonChange } from "./sing-up/tabs-button-change.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	renderHeader(getElement(".sing-up__header") as HTMLElement);
	renderHeaderResize(getElement(".sing-up__header") as HTMLElement);
	tabsButtonChange(
		getElement(".sing-up__button-tab", "all") as NodeListOf<HTMLElement>,
		getElement(".sing-up__form-render") as HTMLElement
	);
});
