<script lang="ts">
	import { useQuery } from 'convex-svelte';
	// Add dashboard data fetching logic
</script>

<div class="space-y-6">
	<h1 class="text-3xl font-bold text-gray-900">Your Quest Journey</h1>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-3">
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<h3 class="mb-2 text-lg font-semibold">Active Quests</h3>
			<p class="text-3xl font-bold text-indigo-600">3</p>
		</div>
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<h3 class="mb-2 text-lg font-semibold">Completed Quests</h3>
			<p class="text-3xl font-bold text-indigo-600">12</p>
		</div>
		<div class="rounded-lg bg-white p-6 shadow-sm">
			<h3 class="mb-2 text-lg font-semibold">Achievement Points</h3>
			<p class="text-3xl font-bold text-indigo-600">1,250</p>
		</div>
	</div>
</div>
