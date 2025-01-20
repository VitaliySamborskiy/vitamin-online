import { ubdateLabel } from "./ubdate-label.ts";
import { getElement } from "../base/get-element.ts";

const htmlFile = `<div class="input-block sing-up__upload">
								<label class="input-label sing-up__label-upload">Wholesale purchase permission</label>
								<input class="input sing-up__input sing-up__input-upload"
										name="purchase permission"
										id="purchasePermission"
										type="file"
										accept=".pdf, .docx" />
								<label class="button orange-button sing-up__button-upload"
										for="purchasePermission">Upload</label>
								</div>
`;

const htmlForm = (fileInput?: string | null, buttonInactiveClass?: string | null): string => {
	return `<form class="forms__form sing-up__form">
								<div class="input-block">
								<label class="input-label" for="email">Email</label>
								<input class="input sing-up__input"
										name="email"
										id="email"
										type="email" />
								</div>
								<div class="input-block">
								<label class="input-label"
										for="first-name">First Name</label>
								<input class="input sing-up__input"
										name="first-name"
										id="first-name"
										type="text" />
								</div>
								<div class="input-block">
								<label class="input-label"
										for="last-name">Last Name</label>
								<input class="input sing-up__input"
										name="last-name"
										id="last-name"
										type="text" />
								</div>
								<div class="input-block">
								<label class="input-label"
										for="password">Password</label>
								<input
										class="input sing-up__input"
										name="password"
										id="password"
										type="password" />
								</div>
								${fileInput ? fileInput : ""}
								</form>
								<button class="button orange-button sing-up__button-main ${buttonInactiveClass ? buttonInactiveClass : ""}"
										aria-label="Create my account"
										${buttonInactiveClass ? "disabled" : ""}>Create my account</button>`;
};

export function tabsButtonChange(tabs: NodeListOf<HTMLElement>, forms: HTMLElement): void {
	tabs.forEach(tab => {
		tab.addEventListener("click", event => {
			event.preventDefault();

			tabs.forEach(tab => {
				tab.classList.remove("sing-up__button-tab_active");
			});

			const target = event.target as HTMLElement;
			target.classList.add("sing-up__button-tab_active");
			renderForm(target, forms);
		});
	});
}

function renderForm(button: HTMLElement, element: HTMLElement): void {
	if (button.getAttribute("data-tab") === "wholesale") {
		element.innerHTML = htmlForm(htmlFile, "sing-up__button-main_inactive");
		ubdateLabel(
			getElement(".sing-up__input-upload") as HTMLInputElement,
			getElement(".sing-up__label-upload") as HTMLElement,
			getElement(".sing-up__button-main") as HTMLElement
		);
	} else {
		element.innerHTML = htmlForm();
	}
}
