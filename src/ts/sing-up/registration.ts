import { useFetch, URLlink } from "../base/use-fetch.ts";

export async function registrationUser<T>(form: HTMLFormElement): Promise<T> {
	if (form instanceof HTMLFormElement) {
		const formData = new FormData(form);
		return await useFetch(URLlink.register, "POST", {
			first_name: formData.get("first-name"),
			last_name: formData.get("last-name"),
			email: formData.get("email"),
			password: formData.get("password"),
			role_type: "regular",
		} as BodyInit);
	}
}
