import { URLlink, useFetch } from "../base/use-fetch.ts";
import { Notify } from "notiflix/build/notiflix-notify-aio";

export async function loginUser(form: HTMLElement): Promise<void> {
	if (form instanceof HTMLFormElement) {
		const formData = new FormData(form);
		const response: Response = await useFetch(URLlink.login, "POST", {
			email: formData.get("email"),
			password: formData.get("password"),
		});
		if (response instanceof Response) {
			const result = await response.json();

			switch (response.status) {
				case 200:
					Notify.success(`${result.message}`);
					break;
				case 400:
					Notify.failure("Oops. Authorisation error :(");
					break;
				case 403:
					Notify.failure("Oops. Account is not activated :(");
			}
		}
	}
}
