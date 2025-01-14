export type ReturningTypeDom = HTMLElement | NodeList | Element | HTMLImageElement | null;

export function getElement(element: string, method?: string): ReturningTypeDom {
	switch (method) {
		case "all":
			return document.querySelectorAll(element);
		case "id":
			return document.getElementById(element);
		default:
			return document.querySelector(element);
	}
}
