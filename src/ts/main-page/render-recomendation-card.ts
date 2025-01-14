export function renderRecomendationCard(
	data: Record<string, string | number>[],
	elementParent: HTMLElement
): void {
	let html = ``;

	for (let cardData of data) {
		html += `<article class="swiper-slide recommendation__product-card ${cardData.type === "minerals" ? "minerals" : "vitamins"}">
<picture class="recommendation__product-img-block">
<img class="recommendation__product-img" src="${cardData.url}"
alt="${cardData.alt}"
width="${cardData.width}"
height="${cardData.height}"
loading="lazy"/>
</picture>
<span class="recommendation__product-tag">${cardData.tag}</span>
<h3 class="recommendation__product-title">${cardData.title}</h3>
<p class="recommendation__product-text">${cardData.text}</p>
</article>`;
	}

	elementParent.innerHTML = html;
}
