import { renderHeader, renderHeaderResize } from "./forms/render-header.ts";
import { getElement } from "./base/get-element.ts";
import { ValidateFiled, validateInput } from "./base/validate.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	renderHeader(getElement(".pass-recovery__header") as HTMLElement);
	renderHeaderResize(getElement(".pass-recovery__header") as HTMLElement);
	validateInput("#recovery", [
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
	] as ValidateFiled[]);
});
