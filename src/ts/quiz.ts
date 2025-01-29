import { observerGeometry } from "./base/observer-geometry.ts";
import { getElement } from "./base/get-element.ts";
import { renderLogo, renderlogoResize } from "./quiz/logo-change.ts";
import { quizRenderInit, quizRenderNext, QuizType } from "./quiz/quiz-render.ts";
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
\t\t\t\t\t\t\tclass="quiz__input-value-button"
\t\t\t\t\t\t\ttype="button"
\t\t\t\t\t\t\tname="quiz-option"
\t\t\t\t\t\t\tvalue="Yes"
\t\t\t\t\t\t\taria-label="Yes" />
\t\t\t\t\t\t<input
\t\t\t\t\t\t\tclass="quiz__input-value-button"
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
	];

	renderLogo(getElement(".quiz__logo-svg") as SVGElement);
	renderlogoResize(getElement(".quiz__logo-svg") as SVGElement);
	quizRenderInit(
		arrQuiz,
		getElement(".quiz__title") as HTMLElement,
		getElement(".quiz__render") as HTMLElement,
		getElement(".quiz__pagination-status") as HTMLElement
	);
	setTimeout(
		() =>
			quizRenderNext(
				arrQuiz,
				getElement(".quiz__title") as HTMLElement,
				getElement(".quiz__render") as HTMLElement,
				getElement(".quiz__pagination-status") as HTMLElement
			),
		0
	);
});
