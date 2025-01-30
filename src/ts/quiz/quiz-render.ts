export type QuizType = {
	pagination: number;
	title: string;
	htmlForm: string;
	functions: unknown[];
};

type DirectionType = "next" | "prev";

export function quizRenderInit(
	arrQuiz: QuizType[],
	title: HTMLElement,
	form: HTMLElement,
	pagination: HTMLElement
) {
	form.innerHTML = arrQuiz[0].htmlForm;
	title.textContent = arrQuiz[0].title;
	pagination.textContent = `${arrQuiz[0].pagination}/9`;
	arrQuiz[0].functions.forEach((func: unknown) => func());
}

export function quizRenderNext(
	arrQuiz: QuizType[],
	title: HTMLElement,
	form: HTMLElement,
	pagination: HTMLElement
) {
	form.addEventListener("click", event => {
		const target: HTMLElement = event.target as HTMLElement;
		if (target.classList.contains("quiz__value-button")) {
			const activePagination = Number(pagination.textContent.split("/")[0]);

			renderLogic(activePagination, title, pagination, form, arrQuiz, "next");
		}
	});
}

export function quizRenderBack(
	arrQuiz: QuizType[],
	title: HTMLElement,
	form: HTMLElement,
	pagination: HTMLElement,
	button: HTMLElement
): void {
	button.addEventListener("click", () => {
		const activePagination = Number(pagination.textContent.split("/")[0]);

		renderLogic(activePagination, title, pagination, form, arrQuiz, "prev");
	});
}

function renderLogic(
	activePagination: number,
	title: HTMLElement,
	pagination: HTMLElement,
	form: HTMLElement,
	arrQuiz: QuizType[],
	direction: DirectionType
): void {
	if (activePagination >= 1 && activePagination <= 9) {
		const objQuiz: QuizType | unknown = arrQuiz.find(
			item => item.pagination === activePagination + (direction === "next" ? +1 : -1)
		);

		title.textContent = objQuiz.title;
		pagination.textContent = `${objQuiz.pagination}/9`;
		form.innerHTML = objQuiz.htmlForm;
		objQuiz.functions.forEach((func: unknown) => func());
	}
}
