let currentLayout: "mobile" | "desktop" | null = null;

export function renderHeader(element: HTMLElement) {
	if (window.innerWidth <= 767 && currentLayout !== "mobile") {
		currentLayout = "mobile";

		element.innerHTML = `<div class="sing-in__mobile">
														<a class="sing-in__mobile-link">
															<svg class="sing-in__mobile-svg">
																<use href="#arrow"></use>
															</svg>
														</a>
														<span class="sing-in__mobile-title">Account</span>
												</div>`;
	} else if (window.innerWidth >= 767 && currentLayout !== "desktop") {
		currentLayout = "desktop";

		element.innerHTML = `<a class="sing-in__logo-link" href="#">
														<svg class="sing-in__logo-svg">
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
