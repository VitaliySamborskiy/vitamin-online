import { getElement } from "../base/get-element.ts";

type QuizType = {
	pagination: number;
	title: string;
	htmlForm: string;
	buttonClass: string;
};

const arrQuiz: QuizType[] = [
	{
		pagination: 1,
		title: "What’s your first name?",
		htmlForm: `<fieldset class="input-block">
\t\t\t\t\t<label
\t\t\t\t\t\tclass="quiz__label"
\t\t\t\t\t\tfor="nameUser">
\t\t\t\t\t\tFirst Name
\t\t\t\t\t</label>
\t\t\t\t\t<input
\t\t\t\t\t\tclass="quiz__input input"
\t\t\t\t\t\ttype="text"
\t\t\t\t\t\tname="nameUser"
\t\t\t\t\t\tid="nameUser"
\t\t\t\t\t\tplaceholder="enter your first name" />
\t\t\t\t\t<button
\t\t\t\t\t\tclass="button orange-button quiz__input-button quiz__input-button_inactive"
\t\t\t\t\t\ttype="submit"
\t\t\t\t\t\taria-label="submit"
\t\t\t\t\t\tdisabled>
\t\t\t\t\t\t<svg class="quiz__input-svg"><use href="#arrow"></use></svg>
\t\t\t\t\t</button>
\t\t\t\t</fieldset>`,
		buttonClass: "quiz__input-button",
	},
];

export function quizRenderNext(
	arrQuiz: QuizType[],
	title: HTMLElement,
	form: HTMLElement,
	pagination: HTMLElement
) {
	const activePagination = Number(pagination.textContent.split("/")[0]);
	const buttons = getElement(
		`.${arrQuiz[activePagination - 1].buttonClass}`,
		"all"
	) as HTMLElement[];

	const renderForm = (button: HTMLElement): void => {
		if (activePagination >= 1 && activePagination <= 9) {
			const nextQuiz: QuizType | unknown = arrQuiz.find(
				item => item.pagination === activePagination + 1
			);

			buttons.forEach(btn => {
				btn.removeEventListener("click", () => renderForm(btn));
			});

			title.textContent = nextQuiz.title;
			pagination.textContent = `${nextQuiz.pagination}/9`;
			form.innerHTML = nextQuiz.htmlForm;
			quizRenderNext(arrQuiz, title, form, pagination);
		}
	};

	buttons.forEach((button: HTMLElement): void => {
		button.addEventListener("click", () => renderForm(button));
	});
}

// function renderForm(button: HTMLElement, element: HTMLElement): void {}
