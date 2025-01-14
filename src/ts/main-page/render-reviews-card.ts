export function renderReviewCard(
	data: Record<string, string | number>[],
	element: HTMLElement
): void {
	let html = ``;
	let star = ``;

	for (let index = 0; index < 5; index++) {
		star += `<svg class="reviews__ratings-svg">
<use href="#star"></use>
</svg>`;
	}

	for (let infoCard of data) {
		html += `<article class="swiper-slide reviews__commentary">
<div class="reviews__ratings">${star}</div>
<h3 class="reviews__commentary-title">${infoCard.title}</h3>
<p class="reviews__commentary-text">${infoCard.text}</p>
<div class="reviews__commentary-img-block">
<picture>
<img class="reviews__commentary-img" src="${infoCard.url}" />
</picture>
<p class="reviews__commentary-name">${infoCard.name}</p>
</div>
</article>`;
	}

	element.innerHTML = html;
}
