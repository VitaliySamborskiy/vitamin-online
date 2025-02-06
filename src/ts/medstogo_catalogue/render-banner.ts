export type DataBannersType = {
	title: string;
	hideSubTitle: boolean;
	text: string;
	buttonText: string;
	buttonURL: string;
	URLImg: string;
	imgWidth: number;
	imgHeight: number;
	imgAlt: string;
	colorClass: string;
	circleColor: string;
};

export function renderBanner(data: DataBannersType[], container: HTMLElement) {
	let html: string = ``;
	for (let itemData of data) {
		html += `<article class="swiper-slide banners-swiper__slide">
\t<div class="banner__circle circle ${itemData.circleColor}"></div>
\t<picture class="banner__img-block">
\t\t<img class="banner__img" src="${itemData.URLImg}"
\t\t\twidth="${itemData.imgWidth}"
\t\t\theight="${itemData.imgHeight}"
\t\t\talt="${itemData.imgAlt}"
\t\t\tloading="lazy" />
\t</picture>
\t<div class="banner__content ${itemData.colorClass}">
\t\t<div class="banner__text-block">
			<h3 class="banner__sub-title" style="display: ${itemData.hideSubTitle ? "none" : "block"}">You may also like</h3>
\t\t\t<h2 class="banner__title">${itemData.title}</h2>
\t\t\t<p class="banner__text">${itemData.text}</p>
\t\t\t<a
\t\t\t\tclass="button ivory-button banner__button" href="${itemData.buttonURL}">${itemData.buttonText}</a>
\t\t\t<div class="banner__arc-yellow arc__yellow ${itemData.circleColor}">
\t\t\t\t<div class="${itemData.colorClass} banner__arc-mini arc__white"></div>
\t\t\t</div>
\t\t</div>
\t\t<div class="banner__picture-block">
\t\t\t<svg class="banner__svg">
\t\t\t\t<use href="#logo-white"></use>
\t\t\t</svg>
\t\t</div>
\t</div>
</article>`;
	}

	container.innerHTML = html;
}
