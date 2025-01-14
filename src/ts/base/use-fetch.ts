export async function useFetch<T>(
	url: string,
	method: string = "GET",
	body?: BodyInit,
	headers?: Record<string, string>
): Promise<T> {
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

	const response = await fetch(url, method !== "GET" ? requestInit : undefined);
	return response.json();
}
