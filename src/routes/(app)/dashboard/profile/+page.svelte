<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Avatar, AvatarImage, AvatarFallback } from '$lib/components/ui/avatar';
	import { Progress } from '$lib/components/ui/progress';
	import { Badge } from '$lib/components/ui/badge';
</script>

<div class="container mx-auto space-y-6 p-6">
	<Card>
		<CardHeader>
			<div class="flex items-center gap-4">
				<Avatar class="h-20 w-20">
					<AvatarImage src="https://github.com/shadcn.png" alt="User" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div>
					<CardTitle class="text-2xl">John Adventurer</CardTitle>
					<CardDescription>Level 5 Quest Seeker</CardDescription>
				</div>
			</div>
		</CardHeader>
		<CardContent class="space-y-4">
			<div>
				<div class="mb-2 flex justify-between text-sm">
					<span>Experience</span>
					<span>2340/3000</span>
				</div>
				<Progress value={78} />
			</div>

			<div class="grid gap-4 md:grid-cols-2">
				<div>
					<h3 class="mb-2 font-semibold">Achievements</h3>
					<div class="flex flex-wrap gap-2">
						<Badge>Early Bird</Badge>
						<Badge>Bookworm</Badge>
						<Badge>Fitness Fanatic</Badge>
						<Badge>Goal Setter</Badge>
					</div>
				</div>

				<div>
					<h3 class="mb-2 font-semibold">Stats</h3>
					<div class="space-y-2">
						<div class="flex justify-between">
							<span>Quests Completed</span>
							<span>27</span>
						</div>
						<div class="flex justify-between">
							<span>Success Rate</span>
							<span>85%</span>
						</div>
						<div class="flex justify-between">
							<span>Total XP Earned</span>
							<span>12,450</span>
						</div>
					</div>
				</div>
			</div>
		</CardContent>
	</Card>
</div>
