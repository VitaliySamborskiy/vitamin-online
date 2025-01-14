import { useFetch } from "./use-fetch.ts";
import { getElement } from "./get-element.ts";

export async function getImg(src: string, elementClass: string): Promise<void> {
	const element: HTMLImageElement = getElement(elementClass) as HTMLImageElement;
	if (element) {
		element.src = `${await useFetch(src)}`;
	}
}
