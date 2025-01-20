export function ubdateLabel(
	input: HTMLInputElement,
	label: HTMLElement,
	button: HTMLElement
): void {
	input.addEventListener("change", (): void => {
		if (input.files.length > 0) {
			label.innerText = input.files![0].name;
			button.classList.remove("sing-up__button-main_inactive");
			button.removeAttribute("disabled");
		}
	});
}
