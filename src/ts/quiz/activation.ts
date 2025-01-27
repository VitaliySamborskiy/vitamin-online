export function activation(input: HTMLElement, button: HTMLElement): void {
	input.addEventListener("input", () => {
		if (input instanceof HTMLInputElement) {
			let inputText = input.value.trim();
			let textStatus = inputText.length > 0;
			textStatus ? button.removeAttribute("disabled") : button.setAttribute("disabled", "true");
			button.classList.toggle("quiz__input-button_inactive", !textStatus);
		}
	});
}
