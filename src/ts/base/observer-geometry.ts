export function observerGeometry(element: HTMLElement, duration: number, scaleTo: number): void {
	const observer: IntersectionObserver = new IntersectionObserver(
		(entries: IntersectionObserverEntry[]): void => {
			entries.forEach((entry: IntersectionObserverEntry): void => {
				if (entry.isIntersecting) {
					animationScale(element, duration, scaleTo);
				}
			});
		},
		{
			threshold: 0.1,
		}
	);

	observer.observe(element);
}

function animationScale(element: HTMLElement, duration: number, scaleTo: number): void {
	const startTime: number = performance.now();

	function step(currentTime: number): void {
		const elapsedTime: number = currentTime - startTime; // Обчислення часу, що минув
		const progress: number = Math.min(elapsedTime / duration, 1); // Обчислення прогресу:
		const scale: number = scaleTo * easeInOutQuad(progress); //Обчислення масштабу
		element.style.transform = `scale(${scale})`;

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}

function easeInOutQuad(progressTime: number): number {
	// 1. умовний вираз який перівіряє прогрес виконнання анімації. якщо значення progressTime < 0.5 то анімація прискорюється якщо умова не вірна то сповільнюється.
	// 2. перша формула прискорює анімацію за законом квадратів
	// множення на 2, потрібне для масштабування результату щоб уся функція змогла проходити через значення [0,1].
	// 3. друга анімація іикористовує квадрат для сповільнення анімаці.
	// ділення на 2 потрібне для того щоб результат функції був у діапазоні [0, 1].
	// 1 - інвертує значення для плавності сповільнення
	return progressTime < 0.5
		? 2 * progressTime * progressTime
		: 1 - Math.pow(-2 * progressTime + 2, 2) / 2;
}
