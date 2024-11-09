<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '@/components/ui/app-sidebar.svelte';
</script>

<Sidebar.Provider>
	<AppSidebar />
	<main>
		<Sidebar.Trigger />
		<slot />
	</main>
</Sidebar.Provider>
