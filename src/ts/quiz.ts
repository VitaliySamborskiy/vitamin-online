import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { renderLogo, renderlogoResize } from "./quiz/logo-change.ts";
import { quizRenderBack, quizRenderInit, quizRenderNext, QuizType } from "./quiz/quiz-render.ts";
import { activation } from "./quiz/activation.ts";
import { getQuizData } from "./quiz/get-quiz-data.ts";

document.addEventListener("DOMContentLoaded", async function (): Promise<void> {
	const arrQuiz: QuizType[] = [
		{
			pagination: 1,
			title: "What’s your first name?",
			titlePageClass: "quiz__title",
			htmlForm: `<div class="quiz__circle-orange circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
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
\t\t\t\t\t\t\tplaceholder="Enter your first name" />
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
\t\t\t\t\t<svg class="quiz__arc-bottom"><use href="#arc"></use></svg></div>`,
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
			titlePageClass: "quiz__title quiz__title-two",
			htmlForm: `<div class="quiz__circle-yellow circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form quiz__buttons-form-boolean">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="smoke"
\t\t\t\t\t\t\tvalue="Yes"
\t\t\t\t\t\t\taria-label="Yes" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="smoke"
\t\t\t\t\t\t\tvalue="No"
\t\t\t\t\t\t\taria-label="No" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange"><use href="#arc-mini"></use></svg>`,
			functions: [
				() => observerGeometry(getElement(".quiz__circle-yellow") as HTMLElement, 2400, 43),
			],
		},
		{
			pagination: 3,
			title: "What is your eating habits?",
			titlePageClass: "quiz__title quiz__title-third",
			htmlForm: `<div class="quiz__circle-orange-third-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="eatingHabits"
\t\t\t\t\t\t\tvalue="Vegan diet"
\t\t\t\t\t\t\taria-label="Vegan diet" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="eatingHabits"
\t\t\t\t\t\t\tvalue="Vegetarian diet"
\t\t\t\t\t\t\taria-label="Vegetarian diet" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="eatingHabits"
\t\t\t\t\t\t\tvalue="My diet is generally healthy and includes animal protein, fish and veggies"
\t\t\t\t\t\t\taria-label="My diet is generally healthy and includes animal protein, fish and veggies" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="eatingHabits"
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
			titlePageClass: "quiz__title quiz__title-fourth",
			htmlForm: `<div class="quiz__circle-yellow-fourth-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="AlcoholicBeveragesFrequency"
\t\t\t\t\t\t\tvalue="≤ 3 times per week"
\t\t\t\t\t\t\taria-label="≤ 3 times per week" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="AlcoholicBeveragesFrequency"
\t\t\t\t\t\t\tvalue="4 - 7 times per week"
\t\t\t\t\t\t\taria-label="4 - 7 times per week" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="AlcoholicBeveragesFrequency"
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
			titlePageClass: "quiz__title quiz__title-five",
			htmlForm: `<div class="quiz__circle-orange-five-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="coldFluFrequency"
\t\t\t\t\t\t\tvalue="≤ 2 per year"
\t\t\t\t\t\t\taria-label="≤ 2 per year" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="coldFluFrequency"
\t\t\t\t\t\t\tvalue="3 - 5 times per year"
\t\t\t\t\t\t\taria-label="3 - 5 times per year" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="coldFluFrequency"
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
			titlePageClass: "quiz__title quiz__title-six",
			htmlForm: `<div class="quiz__circle-yellow-six-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="stressLevel"
\t\t\t\t\t\t\tvalue="I feel calm and relaxed most of the time"
\t\t\t\t\t\t\taria-label="I feel calm and relaxed most of the time" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="stressLevel"
\t\t\t\t\t\t\tvalue="I get nerevous from time to time"
\t\t\t\t\t\t\taria-label="I get nerevous from time to time" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="stressLevel"
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
			titlePageClass: "quiz__title quiz__title-seven",
			htmlForm: `<div class="quiz__circle-orange-seven-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form quiz__buttons-form-boolean">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="diabetes"
\t\t\t\t\t\t\tvalue="Yes"
\t\t\t\t\t\t\taria-label="Yes" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="diabetes"
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
		{
			pagination: 8,
			title: "Tell us what you want to focus on",
			titlePageClass: "quiz__title quiz__title-eight",
			htmlForm: `<div class="quiz__circle-yellow-eight-page circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form-grid"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="quiz__buttons-form-grid">
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="Weight managment"
\t\t\t\t\t\t\taria-label="Weight managment" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="Stress relief"
\t\t\t\t\t\t\taria-label="Stress relief" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="Immune boost"
\t\t\t\t\t\t\taria-label="Immune boost" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="Need to solve a sprcific problem"
\t\t\t\t\t\t\taria-label="Need to solve a sprcific problem" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="I need a bassic kit for a daily intake"
\t\t\t\t\t\t\taria-label="I need a bassic kit for a daily intake" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="concentration"
\t\t\t\t\t\t\tvalue="All in one"
\t\t\t\t\t\t\taria-label="All in one" />
\t\t\t\t\t</fieldset>
\t\t\t\t</form>
\t\t\t\t<svg class="quiz__arc-orange-eight"><use href="#arc-mini"></use></svg>`,
			functions: [
				() =>
					observerGeometry(getElement(".quiz__circle-yellow-eight-page") as HTMLElement, 3400, 75),
			],
		},
		{
			pagination: 9,
			title: "What’s your email address?",
			titlePageClass: "quiz__title",
			htmlForm: `<div class="quiz__circle-orange circle"></div>
\t\t\t\t<form
\t\t\t\t\tclass="quiz__form"
					name="quizForm"
\t\t\t\t\tonsubmit="return false">
\t\t\t\t\t<fieldset class="input-block">
\t\t\t\t\t\t<label
\t\t\t\t\t\t\tclass="quiz__label"
\t\t\t\t\t\t\tfor="nameEnter">
\t\t\t\t\t\t\tEmail
\t\t\t\t\t\t</label>
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input input"
\t\t\t\t\t\t\ttype="text"
\t\t\t\t\t\t\tname="nameEmail"
\t\t\t\t\t\t\tid="nameEmail"
\t\t\t\t\t\t\tplaceholder="Enter your email" />
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
\t\t\t\t\t<svg class="quiz__arc-bottom"><use href="#arc"></use></svg></div>`,
			functions: [
				() =>
					activation(
						getElement("#nameEmail") as HTMLElement,
						getElement(".quiz__input-button") as HTMLElement
					),
				() => observerGeometry(getElement(".quiz__circle-orange") as HTMLElement, 2000, 79),
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
		getQuizData(getElement(".quiz__render") as HTMLElement);
		quizRenderNext(
			arrQuiz,
			getElement(".quiz__title") as HTMLElement,
			getElement(".quiz__render") as HTMLElement,
			getElement(".quiz__pagination-status") as HTMLElement
		);
		quizRenderBack(
			arrQuiz,
			getElement(".quiz__title") as HTMLElement,
			getElement(".quiz__render") as HTMLElement,
			getElement(".quiz__pagination-status") as HTMLElement,
			getElement(".quiz__back-button") as HTMLElement
		);
	}, 0);
});
