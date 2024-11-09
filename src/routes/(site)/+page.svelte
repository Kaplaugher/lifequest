<script lang="ts">
	import { useQuery } from 'convex-svelte';
</script>

<main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="py-20 text-center">
		<h1 class="mb-4 text-5xl font-bold text-gray-900">Transform Your Life into an Adventure</h1>
		<p class="mb-8 text-xl text-gray-600">
			Complete real-world quests, level up your life, and discover new experiences.
		</p>
		<div class="flex justify-center space-x-4">
			<a
				href="/signup"
				class="rounded-md bg-indigo-600 px-8 py-3 text-lg font-medium text-white hover:bg-indigo-700"
				>Start Your Journey</a
			>
			<a
				href="/about"
				class="rounded-md border border-indigo-600 bg-white px-8 py-3 text-lg font-medium text-indigo-600 hover:bg-indigo-50"
				>Learn More</a
			>
		</div>
	</div>

	<!-- Features Section -->
	<div class="py-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div class="p-6 text-center">
				<h3 class="mb-2 text-xl font-semibold">Real World Quests</h3>
				<p class="text-gray-600">
					Engage in exciting challenges that get you out exploring the world
				</p>
			</div>
			<div class="p-6 text-center">
				<h3 class="mb-2 text-xl font-semibold">Track Progress</h3>
				<p class="text-gray-600">Monitor your achievements and watch yourself grow</p>
			</div>
			<div class="p-6 text-center">
				<h3 class="mb-2 text-xl font-semibold">Join Communities</h3>
				<p class="text-gray-600">Connect with like-minded adventurers and share experiences</p>
			</div>
		</div>
	</div>
</main>
