import JustValidate, { FieldRuleInterface } from "just-validate";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export type ValidateFiled = {
	input: string;
	rules: FieldRuleInterface[];
};

type AwaitStatus = "await" | "synchronous";
type ResponseType = void | Promise<Response> | Promise<void>;

export function validateInput(
	form: string,
	fields: ValidateFiled[],
	onSuccessFunk?: () => ResponseType,
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
				onSuccessFunkStatus === "await" ? await onSuccessFunk() : onSuccessFunk();
			}
		})
		.onFail(() => {
			Notify.warning("You made a validation error");
		});
}
