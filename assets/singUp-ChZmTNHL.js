import{g as s}from"./get-element-u0L3Yg2z.js";import{v as u,r as c,a as p}from"./validate-BK-s1qlK.js";function m(e,a,t){e.addEventListener("change",()=>{e.files&&e.files.length>0&&(a.innerText=e.files[0].name,t.classList.remove("sing-up__button-main_inactive"),t.removeAttribute("disabled"))})}function g(e,a){const t=new URLSearchParams(window.location.search);let r=!1;for(let i=0;i<e.length;i++)t.get(e[i])===null&&(t.set(e[i],a[i]),r=!0);r&&window.history.replaceState(null,"","?"+t.toString())}function _(e){const a=new URLSearchParams(window.location.search);e.forEach(t=>{a.set(t.key,t.value)}),window.history.replaceState(null,"","?"+a.toString())}function f(e){const a=new URLSearchParams(window.location.search);return e.reduce((t,r)=>{const i=a.get(r);return i!==null&&(t[r]=i),t},{})}const h=`<div class="input-block sing-up__upload">
								<label class="input-label sing-up__label-upload">Wholesale purchase permission</label>
								<input class="input sing-up__input sing-up__input-upload"
										name="purchase permission"
										id="purchasePermission"
										type="file"
										accept=".pdf, .docx" />
								<label class="button orange-button sing-up__button-upload"
										for="purchasePermission">Upload</label>
								</div>
`,l=[{input:"#email",rules:[{rule:"required",errorMessage:"Email is required"},{rule:"email",errorMessage:"Invalid email format"}]},{input:"#firstName",rules:[{rule:"required",errorMessage:"Name is required"},{rule:"minLength",value:3,errorMessage:"The name must contain at least 3 characters"}]},{input:"#lastName",rules:[{rule:"required",errorMessage:"Surname is required"},{rule:"minLength",value:3,errorMessage:"The surname must have at least 3 characters"}]},{input:"#password",rules:[{rule:"required",errorMessage:"Password required"},{rule:"password"},{rule:"minLength",value:8,errorMessage:"The password must be at least 8 characters long"}]}],o=(e,a)=>`<form class="forms__form sing-up__form" id="registration" name="registration">
								<div class="input-block">
										<input class="input sing-up__input"
												name="email"
												id="email"
												type="email"
												 placeholder="Email" />
								</div>
								<div class="input-block">
										<input class="input sing-up__input"
												name="first-name"
												id="firstName"
												type="text" 
												placeholder="First Name"/>
								</div>
								<div class="input-block">
										<input class="input sing-up__input"
												name="last-name"
												id="lastName"
												type="text"
												placeholder="Last Name" />
								</div>
								<div class="input-block">
										<input
												class="input sing-up__input"
												name="password"
												id="password"
												type="password"
												placeholder="Password"/>
								</div>
								${e||""}
								<button type="submit" class="button orange-button sing-up__button-main ${a||""}"
										aria-label="Create my account"
										${a?"disabled":""}>Create my account</button>
								</form>`;function b(e,a){const t=f(["form"]);e.forEach(r=>{t.form===r.getAttribute("data-tab")&&d(e,a,r),r.addEventListener("click",i=>{i.preventDefault();const n=i.target;d(e,a,n)})})}function d(e,a,t){e.forEach(r=>{r.classList.remove("sing-up__button-tab_active")}),t.classList.add("sing-up__button-tab_active"),v(t,a)}function v(e,a){_([{key:"form",value:e.getAttribute("data-tab")}]),e.getAttribute("data-tab")==="wholesale"?(a.innerHTML=o(h,"sing-up__button-main_inactive"),m(s(".sing-up__input-upload"),s(".sing-up__label-upload"),s(".sing-up__button-main")),setTimeout(()=>{u("#registration",l)},0)):(a.innerHTML=o(),setTimeout(()=>{u("#registration",l)},0))}document.addEventListener("DOMContentLoaded",async function(){c(s(".sing-up__header")),p(s(".sing-up__header")),b(s(".sing-up__button-tab","all"),s(".sing-up__form-render")),g(["form"],["regular"])});
