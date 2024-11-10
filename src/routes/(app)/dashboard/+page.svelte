<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Progress } from '$lib/components/ui/progress';
	import { Trophy, Target, Star } from 'lucide-svelte';
</script>

<div class="container mx-auto space-y-6 p-6">
	<h1 class="text-3xl font-bold">Welcome back, Adventurer!</h1>

	<div class="grid gap-4 md:grid-cols-3">
		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Trophy class="h-5 w-5" />
					Level 5
				</CardTitle>
				<CardDescription>Experience: 2340/3000</CardDescription>
			</CardHeader>
			<CardContent>
				<Progress value={78} class="mt-2" />
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Target class="h-5 w-5" />
					Active Quests
				</CardTitle>
				<CardDescription>Currently on 3 quests</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">3/5</div>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle class="flex items-center gap-2">
					<Star class="h-5 w-5" />
					Completed
				</CardTitle>
				<CardDescription>Total quests completed</CardDescription>
			</CardHeader>
			<CardContent>
				<div class="text-2xl font-bold">27</div>
			</CardContent>
		</Card>
	</div>
</div>
