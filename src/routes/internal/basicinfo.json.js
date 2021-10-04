/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export async function get() {
	const test = 'test';
	return {
		body: { test }
	};
}
