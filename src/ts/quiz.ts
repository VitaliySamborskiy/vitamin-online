import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { renderLogo, renderlogoResize } from "./quiz/logo-change.ts";
import { quizRenderBack, quizRenderInit, quizRenderNext, QuizType } from "./quiz/quiz-render.ts";
import { activation } from "./quiz/activation.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	// const screenWidth = window.innerWidth;

	const arrQuiz: QuizType[] = [
		{
			pagination: 1,
			title: "What’s your first name?",
			htmlForm: `<div class="quiz__circle-orange circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="input-block">
\t\t\t\t\t\t<label
\t\t\t\t\t\t\tclass="quiz__label"
\t\t\t\t\t\t\tfor="nameUser">
\t\t\t\t\t\t\tFirst Name
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input input"
\t\t\t\t\t\t\ttype="text"
\t\t\t\t\t\t\tname="nameUser"
\t\t\t\t\t\t\tid="nameUser"
\t\t\t\t\t\t\tplaceholder="enter your first name" />
\t\t\t\t\t\t<button
\t\t\t\t\t\t\tclass="button orange-button quiz__value-button quiz__input-button quiz__input-button_inactive"
\t\t\t\t\t\t\ttype="submit"
\t\t\t\t\t\t\taria-label="submit"
\t\t\t\t\t\t\tdisabled>
\t\t\t\t\t\t\t<svg class="quiz__input-svg"><use href="#arrow"></use></svg>
\t\t\t\t\t\t</button>
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<div class="quiz__arc-yellow">
\t\t\t\t\t<svg class="quiz__arc-top"><use href="#arc"></use></svg>
\t\t\t\t\t<svg class="quiz__arc-bottom"><use href="#arc"></use></svg>
\t\t\t\t</div>`,
			functions: [
				() =>
					activation(
						getElement("#nameUser") as HTMLElement,
						getElement(".quiz__input-button") as HTMLElement
					),
				() => observerGeometry(getElement(".quiz__circle-orange") as HTMLElement, 2000, 79),
			],
		},
		{
			pagination: 2,
			title: "Do you smoke?",
			htmlForm: `<div class="quiz__circle-yellow circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="Yes"
\t\t\t\t\t\t\taria-label="Yes" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="No"
\t\t\t\t\t\t\taria-label="No" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange"><use href="#arc-mini"></use></svg>`,
			functions: [
				() => observerGeometry(getElement(".quiz__circle-yellow") as HTMLElement, 2400, 39),
			],
		},
		{
			pagination: 3,
			title: "What is your eating habits?",
			htmlForm: `<div class="quiz__circle-orange-third-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="Vegan diet"
\t\t\t\t\t\t\taria-label="Vegan diet" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="Vegetarian diet"
\t\t\t\t\t\t\taria-label="Vegetarian diet" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="My diet is generally healthy and includes animal protein, fish and veggies"
\t\t\t\t\t\t\taria-label="My diet is generally healthy and includes animal protein, fish and veggies" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="My diet includes fast food and soft drinks"
\t\t\t\t\t\t\taria-label="My diet includes fast food and soft drinks" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-yellow-big"><use href="#arc-big"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-orange-third-page") as HTMLElement, 2800, 78),
			],
		},
		{
			pagination: 4,
			title: "How frequently do you consume alcoholic beverages?",
			htmlForm: `<div class="quiz__circle-yellow-fourth-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="≤ 3 times per week"
\t\t\t\t\t\t\taria-label="≤ 3 times per week" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="4 - 7 times per week"
\t\t\t\t\t\t\taria-label="4 - 7 times per week" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="7+ times per week"
\t\t\t\t\t\t\taria-label="7+ times per week" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange-big"><use href="#arc-big"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-yellow-fourth-page") as HTMLElement, 2100, 89),
			],
		},
		{
			pagination: 5,
			title: "How frequently do you have cold/flu symptoms?",
			htmlForm: `<div class="quiz__circle-orange-five-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="≤ 2 per year"
\t\t\t\t\t\t\taria-label="≤ 2 per year" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="3 - 5 times per year"
\t\t\t\t\t\t\taria-label="3 - 5 times per year" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="5+ times per week"
\t\t\t\t\t\t\taria-label="5+ times per week" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange-min"><use href="#arc-medium"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-orange-five-page") as HTMLElement, 3400, 154),
			],
		},
		{
			pagination: 6,
			title: "Describe your stress level",
			htmlForm: `<div class="quiz__circle-yellow-six-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="I feel calm and relaxed most of the time"
\t\t\t\t\t\t\taria-label="I feel calm and relaxed most of the time" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="I get nerevous from time to time"
\t\t\t\t\t\t\taria-label="I get nerevous from time to time" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="I’m under a lot of stress most of the time"
\t\t\t\t\t\t\taria-label="I’m under a lot of stress most of the time" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange-min-six"><use href="#arc-mini"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-yellow-six-page") as HTMLElement, 2700, 77),
			],
		},
		{
			pagination: 7,
			title: "Have you ever been diagnosted with high blood glucose level?",
			htmlForm: `<div class="quiz__circle-orange-seven-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="Yes"
\t\t\t\t\t\t\taria-label="Yes" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="No"
\t\t\t\t\t\t\taria-label="No" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-yellow-big-top"><use href="#arc-big"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-orange-seven-page") as HTMLElement, 2600, 57),
			],
		},
	];

	renderLogo(getElement(".quiz__logo-svg") as SVGElement);
	renderlogoResize(getElement(".quiz__logo-svg") as SVGElement);

	quizRenderInit(
		arrQuiz,
		getElement(".quiz__title") as HTMLElement,
		getElement(".quiz__render") as HTMLElement,
		getElement(".quiz__pagination-status") as HTMLElement
	);

	setTimeout(() => {
		quizRenderNext(
			arrQuiz,
			getElement(".quiz__title") as HTMLElement,
			getElement(".quiz__render") as HTMLElement,
			getElement(".quiz__pagination-status") as HTMLElement
		),
			quizRenderBack(
				arrQuiz,
				getElement(".quiz__title") as HTMLElement,
				getElement(".quiz__render") as HTMLElement,
				getElement(".quiz__pagination-status") as HTMLElement,
				getElement(".quiz__back-button") as HTMLElement
			);
	}, 0);
});
