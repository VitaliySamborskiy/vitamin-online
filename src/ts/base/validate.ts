import JustValidate, { FieldRuleInterface } from "just-validate";

export type ValidateFiled = {
	input: string;
	rules: FieldRuleInterface[];
};

export function validateInput(form: string, fields: ValidateFiled[]): void {
	const validator = new JustValidate(form, {
		errorFieldCssClass: "input-error",
		errorLabelCssClass: "input-label-error",
	});

	fields.forEach(field => {
		validator.addField(field.input, field.rules);
	});

	validator
		.onSuccess(() => {
			console.log("Validation complete");
		})
		.onFail(() => {
			console.log("Validation fail");
		});
}
