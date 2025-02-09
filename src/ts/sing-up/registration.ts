import { useFetch, URLlink } from "../base/use-fetch.ts";
import { Notify } from "notiflix/build/notiflix-notify-aio";

type RegistrationBody = {
	message: string;
	user: {
		email: string;
		userId: string;
		refreshToken: string;
	};
};

export async function registrationUser(form: HTMLElement): Promise<void> {
	if (form instanceof HTMLFormElement) {
		const formData = new FormData(form);
		const response: Response = await useFetch(URLlink.register, "POST", {
			first_name: formData.get("first-name"),
			last_name: formData.get("last-name"),
			email: formData.get("email"),
			password: formData.get("password"),
			role_type: form.getAttribute("data-type"),
		});

		if (response instanceof Response) {
			const result: RegistrationBody = await response.json();

			switch (response.status) {
				case 201:
					Notify.success(`${result.message}`);
					localStorage.setItem("userId", JSON.stringify(result.user.userId));
					localStorage.setItem("refreshToken", JSON.stringify(result.user.refreshToken));
					localStorage.setItem("email", JSON.stringify(result.user.refreshToken));
					break;
				case 400:
					Notify.failure("Oops. There was an error :(");
					break;
				case 500:
					Notify.failure("Oops. Server crash :(");
			}
		}
	}
}
