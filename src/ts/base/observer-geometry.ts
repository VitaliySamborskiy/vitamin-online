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
        },
    );

    observer.observe(element);
}

function animationScale(element: HTMLElement, duration: number, scaleTo: number): void {
    const startTime: number = performance.now();
    const initialScale: number = 1;

    // todo: РОЗІБРАТИСЬ У ФУНКЦІЇ step

    function step(currentTime: number): void {
        const elapsedTime = currentTime - startTime;
        const progress: number = Math.min(elapsedTime / duration, 1);
        const scale = initialScale + (scaleTo - initialScale) * easeInOutQuad(progress);
        element.style.transform = `scale(${scale})`;

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    }

    requestAnimationFrame(step);
}

// todo: РОЗІБРАТИСЬ У ФУНКЦІЇ easeInOutQuad

function easeInOutQuad(t: number): number {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}
