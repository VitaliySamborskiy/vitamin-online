import { getElement } from "../base/get-element.ts";

type UserAnswerType = Record<string, string>;

const getDataService = getData();

export function getQuizData(target: HTMLElement): void {
	callback();
	const observerMutation = new MutationObserver((): void => {
		callback();
	});

	observerMutation.observe(target, { attributes: true, childList: true });
}

function callback(): void {
	getDataService.setUserAnswers(
		getElement(".quiz__value-button", "all") as NodeList,
		getElement(".quiz__input") as HTMLElement
	);
	console.log(getDataService.getUsersAnswers());
}

function getData() {
	let userAnswers: UserAnswerType = {};

	function setUserAnswers(buttons: NodeList, input?: HTMLElement): void {
		buttons.forEach((button: Node): void => {
			button.addEventListener("click", event => {
				event.target instanceof HTMLInputElement
					? (userAnswers[event.target.name] = event.target.value)
					: null;
				input instanceof HTMLInputElement ? (userAnswers[input.name] = input.value) : null;
			});
		});
	}

	function getUsersAnswers(): UserAnswerType {
		return userAnswers;
	}

	return { setUserAnswers, getUsersAnswers };
}
