// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function medusa(fetch: any, endpoint: any) {
	const baseUrl = import.meta.env.VITE_MEDUSA_BACKEND_URL;
	const publishableKey = import.meta.env.VITE_MEDUSA_PUBLISHABLE_KEY;

	console.log(baseUrl, publishableKey);

	const response = await fetch(`${baseUrl}/store/${endpoint}`, {
		credentials: 'include',
		headers: {
			'x-publishable-api-key': publishableKey
		}
	});

	console.log(response);

	return response.json();
}
