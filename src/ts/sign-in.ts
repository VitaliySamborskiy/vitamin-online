import { renderHeader, renderHeaderResize } from "./forms/render-header.ts";
import { getElement } from "./base/get-element.ts";
import { validateInput, ValidateFiled } from "./base/validate.ts";
import { loginUser } from "./sing-in/login-user.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	renderHeader(getElement(".sing-in__header") as HTMLElement);
	renderHeaderResize(getElement(".sing-in__header") as HTMLElement);

	validateInput(
		"#singIn",
		[
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
		] as ValidateFiled[],
		() => loginUser(getElement("singIn", "id") as HTMLElement),
		"await"
	);
});
