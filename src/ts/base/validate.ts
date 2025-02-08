import JustValidate, { FieldRuleInterface } from "just-validate";

export type ValidateFiled = {
	input: string;
	rules: FieldRuleInterface[];
};

type AwaitStatus = "await" | "synchronous";

export function validateInput(
	form: string,
	fields: ValidateFiled[],
	onSuccessFunk?: () => void | Promise<void>,
	onSuccessFunkStatus: AwaitStatus = "synchronous"
): void {
	const validator = new JustValidate(form, {
		errorFieldCssClass: "input-error",
		errorLabelCssClass: "input-label-error",
	});

	fields.forEach(field => {
		validator.addField(field.input, field.rules);
	});

	validator
		.onSuccess(async () => {
			if (onSuccessFunk) {
				const result = onSuccessFunkStatus === "await" ? await onSuccessFunk() : onSuccessFunk();
				console.log(result);
			}
		})
		.onFail(() => {
			console.log("Validation fail");
		});
}
