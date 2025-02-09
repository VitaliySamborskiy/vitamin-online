export enum URLlink {
	register = "/auth/register",
	login = "/auth/login",
	refreshTokenUser = "/auth/refresh-token",
	resetPassword = "/auth/reset-password",
}

export async function useFetch<T>(
	url: string,
	method: string = "GET",
	body: T,
	headers?: Record<string, string>
): Promise<Response> {
	const requestInit: RequestInit = {
		method,
		headers: {
			"Content-Type": "application/json",
			...headers,
		},
	};

	if (method !== "GET" && body) {
		requestInit.body = typeof body === "string" ? body : JSON.stringify(body);
	}

	return await fetch(
		`https://www.mku-journal.online${url}`,
		method !== "GET" ? requestInit : undefined
	);
}
