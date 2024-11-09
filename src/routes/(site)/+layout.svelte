<script lang="ts">
	// Your existing site layout code
</script>

<div class="min-h-screen bg-gray-50">
	<nav class="bg-white shadow-sm">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="flex h-16 items-center justify-between">
				<div class="flex-shrink-0">
					<a href="/" class="text-2xl font-bold text-indigo-600">LifeQuest</a>
				</div>
				<div class="flex space-x-4">
					<a href="/login" class="rounded-md px-3 py-2 text-gray-600 hover:text-gray-900">Login</a>
					<a
						href="/signup"
						class="rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700">Sign Up</a
					>
				</div>
			</div>
		</div>
	</nav>
	<slot />
</div>
