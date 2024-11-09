<script lang="ts">
	import { env } from '$env/dynamic/public';
	import { setupConvex } from 'convex-svelte';
	import '../app.css';

	if (!env.PUBLIC_CONVEX_URL) {
		throw new Error('PUBLIC_CONVEX_URL is not defined');
	}
	setupConvex(env.PUBLIC_CONVEX_URL);
</script>

<slot />
