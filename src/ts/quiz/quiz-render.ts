export type QuizType = {
	pagination: number;
	title: string;
	htmlForm: string;
	functions: unknown[];
};

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

			if (activePagination >= 1 && activePagination <= 9) {
				const nextQuiz: QuizType | unknown = arrQuiz.find(
					item => item.pagination === activePagination + 1
				);
				title.textContent = nextQuiz.title;
				pagination.textContent = `${nextQuiz.pagination}/9`;
				form.innerHTML = nextQuiz.htmlForm;
				nextQuiz.functions.forEach((func: unknown) => func());
			}
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
		console.log("клік");
		const activePagination = Number(pagination.textContent.split("/")[0]);
		if (activePagination >= 1 && activePagination <= 9) {
			console.log("точно клік");
			const nextQuiz: QuizType | unknown = arrQuiz.find(
				item => item.pagination === activePagination - 1
			);
			title.textContent = nextQuiz.title;
			pagination.textContent = `${nextQuiz.pagination}/9`;
			form.innerHTML = nextQuiz.htmlForm;
		}
	});
}
