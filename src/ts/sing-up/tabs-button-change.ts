import { ubdateLabel } from "./ubdate-label.ts";
import { getElement } from "../base/get-element.ts";
import { getQueryParameter, updateQueryParameter } from "../base/qwery-parameter.ts";
import { ValidateFiled, validateInput } from "../base/validate.ts";
import { registrationUser } from "./registration.ts";

type InputType = string | null;

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

const validationRules = [
	{
		input: "#email",
		rules: [
			{
				rule: "required",
				errorMessage: "Email is required",
			},
			{
				rule: "email",
				errorMessage: "Invalid email format",
			},
		],
	},
	{
		input: "#firstName",
		rules: [
			{
				rule: "required",
				errorMessage: "Name is required",
			},
			{
				rule: "minLength",
				value: 3,
				errorMessage: "The name must contain at least 3 characters",
			},
		],
	},
	{
		input: "#lastName",
		rules: [
			{
				rule: "required",
				errorMessage: "Surname is required",
			},
			{
				rule: "minLength",
				value: 3,
				errorMessage: "The surname must have at least 3 characters",
			},
		],
	},
	{
		input: "#password",
		rules: [
			{
				rule: "required",
				errorMessage: "Password required",
			},
			{
				rule: "password",
			},
			{
				rule: "minLength",
				value: 8,
				errorMessage: "The password must be at least 8 characters long",
			},
		],
	},
] as ValidateFiled[];

const htmlForm = (fileInput?: InputType, buttonInactiveClass?: InputType): string => {
	return `<form class="forms__form sing-up__form" id="registration" name="registration" data-type="${fileInput && buttonInactiveClass ? "whosale" : "regular"}">
								<div class="input-block">
										<input class="input sing-up__input"
												name="email"
												id="email"
												type="email"
												 placeholder="Email" />
								</div>
								<div class="input-block">
										<input class="input sing-up__input"
												name="first-name"
												id="firstName"
												type="text" 
												placeholder="First Name"/>
								</div>
								<div class="input-block">
										<input class="input sing-up__input"
												name="last-name"
												id="lastName"
												type="text"
												placeholder="Last Name" />
								</div>
								<div class="input-block">
										<input
												class="input sing-up__input"
												name="password"
												id="password"
												type="password"
												placeholder="Password"/>
								</div>
								${fileInput ? fileInput : ""}
								<button type="submit" class="button orange-button sing-up__button-main ${buttonInactiveClass ? buttonInactiveClass : ""}"
										aria-label="Create my account"
										${buttonInactiveClass ? "disabled" : ""}>Create my account</button>
								</form>`;
};

export function tabsButtonChange(tabs: NodeListOf<HTMLElement>, forms: HTMLElement): void {
	const form: Record<string, string> = getQueryParameter(["form"]);

	tabs.forEach(tab => {
		if (form.form === tab.getAttribute("data-tab")) {
			preRenderForm(tabs, forms, tab);
		}

		tab.addEventListener("click", event => {
			event.preventDefault();
			const target = event.target as HTMLElement;

			preRenderForm(tabs, forms, target);
		});
	});
}

function preRenderForm(
	tabs: NodeListOf<HTMLElement>,
	forms: HTMLElement,
	button: HTMLElement
): void {
	tabs.forEach(tab => {
		tab.classList.remove("sing-up__button-tab_active");
	});

	button.classList.add("sing-up__button-tab_active");
	renderForm(button, forms);
}

function renderForm(button: HTMLElement, element: HTMLElement): void {
	updateQueryParameter([{ key: "form", value: button.getAttribute("data-tab") as "string" }]);
	if (button.getAttribute("data-tab") === "wholesale") {
		element.innerHTML = htmlForm(htmlFile, "sing-up__button-main_inactive");
		ubdateLabel(
			getElement(".sing-up__input-upload") as HTMLInputElement,
			getElement(".sing-up__label-upload") as HTMLElement,
			getElement(".sing-up__button-main") as HTMLElement
		);
		setTimeout(async () => {
			validateInput(
				"#registration",
				validationRules,
				() => registrationUser(getElement("#registration", "id") as HTMLElement),
				"await"
			);
		}, 4);
	} else {
		element.innerHTML = htmlForm();
		setTimeout(() => {
			validateInput(
				"#registration",
				validationRules,
				() => registrationUser(getElement("registration", "id") as HTMLElement),
				"await"
			);
		}, 4);
	}
}
