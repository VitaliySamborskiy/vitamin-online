import{g as t}from"./get-element-u0L3Yg2z.js";import{o as s}from"./observer-geometry-CH56aslZ.js";let q=null;function b(e){const i=e.firstElementChild;window.innerWidth<=768&&q!=="mobile"?i.href.baseVal="#logo":i.href.baseVal="#logo-white"}function z(e){addEventListener("resize",()=>{b(e)})}function p(e,i,n,a){n.innerHTML=e[0].htmlForm,i.textContent=e[0].title,a.textContent=`${e[0].pagination}/9`,e[0].functions.forEach(l=>l())}function f(e,i,n,a){n.addEventListener("click",l=>{var u;if(l.target.classList.contains("quiz__value-button")){const r=+(((u=a.textContent)==null?void 0:u.split("/")[0])??1);r&&v(r,i,a,n,e,"next")}})}function g(e,i,n,a,l){l.addEventListener("click",()=>{var u;const o=+(((u=a.textContent)==null?void 0:u.split("/")[0])??1);o&&v(o,i,a,n,e,"prev")})}function v(e,i,n,a,l,o){if(e>=1&&e<=9){const u=l.find(r=>r.pagination===e+(o==="next"?1:-1));u&&(i.textContent=u.title,i.className=u.titlePageClass,n.textContent=`${u.pagination}/9`,a.innerHTML=u.htmlForm,u.functions.forEach(r=>r()))}}function _(e,i){e.addEventListener("input",()=>{if(e instanceof HTMLInputElement){let a=e.value.trim().length>0;a?i.removeAttribute("disabled"):i.setAttribute("disabled","true"),i.classList.toggle("quiz__input-button_inactive",!a)}})}const c=y();function d(e){m(),new MutationObserver(()=>{m()}).observe(e,{attributes:!0,childList:!0})}function m(){c.setUserAnswers(t(".quiz__value-button","all"),t(".quiz__input")),console.log(c.getUsersAnswers())}function y(){let e={};function i(a,l){a.forEach(o=>{o.addEventListener("click",u=>{u.target instanceof HTMLInputElement&&(e[u.target.name]=u.target.value),l instanceof HTMLInputElement&&(e[l.name]=l.value)})})}function n(){return e}return{setUserAnswers:i,getUsersAnswers:n}}document.addEventListener("DOMContentLoaded",async function(){const e=[{pagination:1,title:"What’s your first name?",titlePageClass:"quiz__title",htmlForm:`<div class="quiz__circle-orange circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
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
							placeholder="Enter your first name" />
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
					<svg class="quiz__arc-bottom"><use href="#arc"></use></svg></div>`,functions:[()=>_(t("#nameUser"),t(".quiz__input-button")),()=>s(t(".quiz__circle-orange"),2e3,79)]},{pagination:2,title:"Do you smoke?",titlePageClass:"quiz__title quiz__title-two",htmlForm:`<div class="quiz__circle-yellow circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form quiz__buttons-form-boolean">
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
							type="button"
							name="smoke"
							value="Yes"
							aria-label="Yes" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
							type="button"
							name="smoke"
							value="No"
							aria-label="No" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange"><use href="#arc-mini"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow"),2400,43)]},{pagination:3,title:"What is your eating habits?",titlePageClass:"quiz__title quiz__title-third",htmlForm:`<div class="quiz__circle-orange-third-page circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="eatingHabits"
							value="Vegan diet"
							aria-label="Vegan diet" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="eatingHabits"
							value="Vegetarian diet"
							aria-label="Vegetarian diet" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="eatingHabits"
							value="My diet is generally healthy and includes animal protein, fish and veggies"
							aria-label="My diet is generally healthy and includes animal protein, fish and veggies" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="eatingHabits"
							value="My diet includes fast food and soft drinks"
							aria-label="My diet includes fast food and soft drinks" />
					</fieldset>
				</form>
				<svg class="quiz__arc-yellow-big"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-third-page"),2800,78)]},{pagination:4,title:"How frequently do you consume alcoholic beverages?",titlePageClass:"quiz__title quiz__title-fourth",htmlForm:`<div class="quiz__circle-yellow-fourth-page circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="AlcoholicBeveragesFrequency"
							value="≤ 3 times per week"
							aria-label="≤ 3 times per week" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="AlcoholicBeveragesFrequency"
							value="4 - 7 times per week"
							aria-label="4 - 7 times per week" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="AlcoholicBeveragesFrequency"
							value="7+ times per week"
							aria-label="7+ times per week" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-big"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow-fourth-page"),2100,89)]},{pagination:5,title:"How frequently do you have cold/flu symptoms?",titlePageClass:"quiz__title quiz__title-five",htmlForm:`<div class="quiz__circle-orange-five-page circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="coldFluFrequency"
							value="≤ 2 per year"
							aria-label="≤ 2 per year" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="coldFluFrequency"
							value="3 - 5 times per year"
							aria-label="3 - 5 times per year" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="coldFluFrequency"
							value="5+ times per week"
							aria-label="5+ times per week" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-min"><use href="#arc-medium"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-five-page"),3400,154)]},{pagination:6,title:"Describe your stress level",titlePageClass:"quiz__title quiz__title-six",htmlForm:`<div class="quiz__circle-yellow-six-page circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form">
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="stressLevel"
							value="I feel calm and relaxed most of the time"
							aria-label="I feel calm and relaxed most of the time" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="stressLevel"
							value="I get nerevous from time to time"
							aria-label="I get nerevous from time to time" />
						<input
							class="quiz__input-value-button quiz__value-button"
							type="button"
							name="stressLevel"
							value="I’m under a lot of stress most of the time"
							aria-label="I’m under a lot of stress most of the time" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-min-six"><use href="#arc-mini"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow-six-page"),2700,77)]},{pagination:7,title:"Have you ever been diagnosted with high blood glucose level?",titlePageClass:"quiz__title quiz__title-seven",htmlForm:`<div class="quiz__circle-orange-seven-page circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form quiz__buttons-form-boolean">
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
							type="button"
							name="diabetes"
							value="Yes"
							aria-label="Yes" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-boolean"
							type="button"
							name="diabetes"
							value="No"
							aria-label="No" />
					</fieldset>
				</form>
				<svg class="quiz__arc-yellow-big-top"><use href="#arc-big"></use></svg>`,functions:[()=>s(t(".quiz__circle-orange-seven-page"),2600,57)]},{pagination:8,title:"Tell us what you want to focus on",titlePageClass:"quiz__title quiz__title-eight",htmlForm:`<div class="quiz__circle-yellow-eight-page circle"></div>
				<form
					class="quiz__form-grid"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="quiz__buttons-form-grid">
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="Weight managment"
							aria-label="Weight managment" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="Stress relief"
							aria-label="Stress relief" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="Immune boost"
							aria-label="Immune boost" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="Need to solve a sprcific problem"
							aria-label="Need to solve a sprcific problem" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="I need a bassic kit for a daily intake"
							aria-label="I need a bassic kit for a daily intake" />
						<input
							class="quiz__input-value-button quiz__value-button quiz__input-value-button-grid"
							type="button"
							name="concentration"
							value="All in one"
							aria-label="All in one" />
					</fieldset>
				</form>
				<svg class="quiz__arc-orange-eight"><use href="#arc-mini"></use></svg>`,functions:[()=>s(t(".quiz__circle-yellow-eight-page"),3400,75)]},{pagination:9,title:"What’s your email address?",titlePageClass:"quiz__title",htmlForm:`<div class="quiz__circle-orange circle"></div>
				<form
					class="quiz__form"
					name="quizForm"
					onsubmit="return false">
					<fieldset class="input-block">
						<label
							class="quiz__label"
							for="nameEnter">
							Email
						</label>
						<input
							class="quiz__input input"
							type="text"
							name="nameEmail"
							id="nameEmail"
							placeholder="Enter your email" />
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
					<svg class="quiz__arc-bottom"><use href="#arc"></use></svg></div>`,functions:[()=>_(t("#nameEmail"),t(".quiz__input-button")),()=>s(t(".quiz__circle-orange"),2e3,79)]}];b(t(".quiz__logo-svg")),z(t(".quiz__logo-svg")),p(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status")),setTimeout(()=>{d(t(".quiz__render")),f(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status")),g(e,t(".quiz__title"),t(".quiz__render"),t(".quiz__pagination-status"),t(".quiz__back-button"))},0)});
