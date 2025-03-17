import { medusa } from '$lib/medusa';

export async function load({ fetch }) {
	const response = await medusa(fetch, 'products');
	return { response };
}
