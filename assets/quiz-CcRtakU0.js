import{g as t}from"./get-element-u0L3Yg2z.js";import{o as s}from"./observer-geometry-CH56aslZ.js";let m=null;function _(e){const i=e.firstElementChild;window.innerWidth<=768&&m!=="mobile"?i.href.baseVal="#logo":i.href.baseVal="#logo-white"}function p(e){addEventListener("resize",()=>{_(e)})}function b(e,i,a,u){a.innerHTML=e[0].htmlForm,i.textContent=e[0].title,u.textContent=`${e[0].pagination}/9`,e[0].functions.forEach(o=>o())}function f(e,i,a,u){a.addEventListener("click",o=>{var n;if(o.target.classList.contains("quiz__value-button")){const l=+(((n=u.textContent)==null?void 0:n.split("/")[0])??1);l&&c(l,i,u,a,e,"next")}})}function v(e,i,a,u,o){o.addEventListener("click",()=>{var n;const r=+(((n=u.textContent)==null?void 0:n.split("/")[0])??1);r&&c(r,i,u,a,e,"prev")})}function c(e,i,a,u,o,r){if(e>=1&&e<=9){const n=o.find(l=>l.pagination===e+(r==="next"?1:-1));n&&(i.textContent=n.title,a.textContent=`${n.pagination}/9`,u.innerHTML=n.htmlForm,n.functions.forEach(l=>l()))}}function q(e,i){e.addEventListener("input",()=>{if(e instanceof HTMLInputElement){let u=e.value.trim().length>0;u?i.removeAttribute("disabled"):i.setAttribute("disabled","true"),i.classList.toggle("quiz__input-button_inactive",!u)}})}document.addEventListener("DOMContentLoaded",async function(){const e=[{pagination:1,title:"What’s your first name?",htmlForm:`<div class="quiz__circle-orange circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="input-block">
						<label
							class="quiz__label"
							for="nameUser">
							First Name
						</label>
						<input
							class="quiz__input input"
							type="text"
							name="nameUser"
							id="nameUser"
							placeholder="enter your first name" />
						<button
							class="button orange-button quiz__value-button quiz__input-button quiz__input-button_inactive"
							type="submit"
							aria-label="submit"
							disabled>
							<svg class="quiz__input-svg"><use href="#arrow"></use></svg>
						</button>
					</fieldset>
				</form>
				<div class="quiz__arc-yellow">
					<svg class="quiz__arc-top"><use href="#arc"></use></svg>
					<svg class="quiz__arc-bottom"><use href="#arc"></use></svg>
				</div>`,functions:[()=>q(t("#nameUser"),t(".quiz__input-button")),()=>s(t(".quiz__circle-orange"),2e3,79)]},{pagination:2,title:"Do you smoke?",htmlForm:`<div class="quiz__circle-yellow circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="Yes"
							aria-label="Yes" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="No"
							aria-label="No" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange"><use href="#arc-mini"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow"),2400,39)]},{pagination:3,title:"What is your eating habits?",htmlForm:`<div class="quiz__circle-orange-third-page circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="Vegan diet"
							aria-label="Vegan diet" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="Vegetarian diet"
							aria-label="Vegetarian diet" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="My diet is generally healthy and includes animal protein, fish and veggies"
							aria-label="My diet is generally healthy and includes animal protein, fish and veggies" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="My diet includes fast food and soft drinks"
							aria-label="My diet includes fast food and soft drinks" />
					</fieldset>
				</form>
				<svg class="quiz__arc-yellow-big"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-third-page"),2800,78)]},{pagination:4,title:"How frequently do you consume alcoholic beverages?",htmlForm:`<div class="quiz__circle-yellow-fourth-page circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="≤ 3 times per week"
							aria-label="≤ 3 times per week" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="4 - 7 times per week"
							aria-label="4 - 7 times per week" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="7+ times per week"
							aria-label="7+ times per week" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-big"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow-fourth-page"),2100,89)]},{pagination:5,title:"How frequently do you have cold/flu symptoms?",htmlForm:`<div class="quiz__circle-orange-five-page circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="≤ 2 per year"
							aria-label="≤ 2 per year" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="3 - 5 times per year"
							aria-label="3 - 5 times per year" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="5+ times per week"
							aria-label="5+ times per week" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-min"><use href="#arc-medium"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-five-page"),3400,154)]},{pagination:6,title:"Describe your stress level",htmlForm:`<div class="quiz__circle-yellow-six-page circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="I feel calm and relaxed most of the time"
							aria-label="I feel calm and relaxed most of the time" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="I get nerevous from time to time"
							aria-label="I get nerevous from time to time" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="I’m under a lot of stress most of the time"
							aria-label="I’m under a lot of stress most of the time" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-min-six"><use href="#arc-mini"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow-six-page"),2700,77)]},{pagination:7,title:"Have you ever been diagnosted with high blood glucose level?",htmlForm:`<div class="quiz__circle-orange-seven-page circle"></div>
				<form
					class="quiz__form"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="Yes"
							aria-label="Yes" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="quiz-option"
							value="No"
							aria-label="No" />
					</fieldset>
				</form>
				<svg class="quiz__arc-yellow-big-top"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-seven-page"),2600,57)]}];_(t(".quiz__logo-svg")),p(t(".quiz__logo-svg")),b(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status")),setTimeout(()=>{f(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status")),v(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status"),t(".quiz__back-button"))},0)});
