<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardFooter,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Trophy } from 'lucide-svelte';

	const quests = [
		{
			title: 'Morning Exercise',
			description: 'Complete a 30-minute morning workout',
			difficulty: 'Easy',
			xp: 100,
			timeEstimate: '30 mins',
			status: 'active'
		},
		{
			title: 'Read a Book Chapter',
			description: 'Read one chapter of your current book',
			difficulty: 'Medium',
			xp: 150,
			timeEstimate: '45 mins',
			status: 'available'
		},
		{
			title: 'Learn a New Skill',
			description: 'Spend 1 hour learning a new programming concept',
			difficulty: 'Hard',
			xp: 300,
			timeEstimate: '1 hour',
			status: 'available'
		}
	];
</script>

<div class="container mx-auto space-y-6 p-6">
	<div class="flex items-center justify-between">
		<h1 class="text-3xl font-bold">Available Quests</h1>
		<Button>Create Quest</Button>
	</div>

	<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
		{#each quests as quest}
			<Card class="flex flex-col">
				<CardHeader>
					<div class="flex items-start justify-between">
						<CardTitle>{quest.title}</CardTitle>
						<Badge variant={quest.status === 'active' ? 'default' : 'secondary'}>
							{quest.status}
						</Badge>
					</div>
					<CardDescription>{quest.description}</CardDescription>
				</CardHeader>
				<CardContent class="flex-1">
					<div class="flex items-center gap-2 text-sm text-muted-foreground">
						<Clock class="h-4 w-4" />
						<span>{quest.timeEstimate}</span>
						<Trophy class="ml-2 h-4 w-4" />
						<span>{quest.xp} XP</span>
					</div>
				</CardContent>
				<CardFooter>
					<Button class="w-full" variant={quest.status === 'active' ? 'destructive' : 'default'}>
						{quest.status === 'active' ? 'Abandon Quest' : 'Accept Quest'}
					</Button>
				</CardFooter>
			</Card>
		{/each}
	</div>
</div>
