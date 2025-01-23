let currentLayout: "mobile" | "desktop" | null = null;

export function renderHeader(element: HTMLElement) {
	if (window.innerWidth <= 768 && currentLayout !== "mobile") {
		currentLayout = "mobile";

		element.innerHTML = `<div class="forms__mobile">
														<a class="forms__mobile-link" href="/vitamin-online/index.html">
															<svg class="forms__mobile-svg">
																<use href="#arrow"></use>
															</svg>
														</a>
														<span class="forms__mobile-title">Account</span>
												</div>`;
	} else if (window.innerWidth >= 767 && currentLayout !== "desktop") {
		currentLayout = "desktop";

		element.innerHTML = `<a class="forms__logo-link" href="/vitamin-online/index.html">
														<svg class="forms__logo-svg">
															<use href="#logo"></use>
														</svg>
													</a>`;
	}
}

export function renderHeaderResize(element: HTMLElement): void {
	addEventListener("resize", (): void => {
		renderHeader(element);
	});
}
