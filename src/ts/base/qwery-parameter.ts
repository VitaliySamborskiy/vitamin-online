type QueryParameterType = {
	key: string;
	value: string;
};

export function initializeQueryParameter(keys: string[], values: string[]): void {
	const queryParameters: URLSearchParams = new URLSearchParams(window.location.search);
	let hasChanged = false;

	for (let index = 0; index < keys.length; index++) {
		const existingValue = queryParameters.get(keys[index]);

		if (existingValue === null) {
			queryParameters.set(keys[index], values[index]);
			hasChanged = true;
		}
	}

	if (hasChanged) {
		window.history.replaceState(null, "", "?" + queryParameters.toString());
	}
}

export function updateQueryParameter(parameters: QueryParameterType[]): void {
	const queryParameters: URLSearchParams = new URLSearchParams(window.location.search);

	parameters.forEach((parameter): void => {
		queryParameters.set(parameter.key, parameter.value);
	});

	window.history.replaceState(null, "", "?" + queryParameters.toString());
}

export function getQueryParameter(queryKey: string[]): Record<string, string> {
	const queryParameters: URLSearchParams = new URLSearchParams(window.location.search);

	return queryKey.reduce((result: Record<string, string>, key) => {
		const value = queryParameters.get(key);
		if (value !== null) {
			result[key] = value;
		}
		return result;
	}, {});
}
