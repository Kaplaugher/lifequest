<script lang="ts">
	import {
		Card,
		CardContent,
		CardDescription,
		CardHeader,
		CardTitle
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Switch } from '$lib/components/ui/switch';

	let questNotifications = false;
	let achievementNotifications = false;
	let emailNotifications = false;
</script>

<div class="container mx-auto space-y-6 p-6">
	<h1 class="text-3xl font-bold">Settings</h1>

	<div class="grid gap-6">
		<Card>
			<CardHeader>
				<CardTitle>Profile Settings</CardTitle>
				<CardDescription>Manage your profile information</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="space-y-2">
					<Label for="username">Username</Label>
					<Input id="username" value="JohnAdventurer" />
				</div>
				<div class="space-y-2">
					<Label for="email">Email</Label>
					<Input id="email" type="email" value="john@example.com" />
				</div>
				<Button>Save Changes</Button>
			</CardContent>
		</Card>

		<Card>
			<CardHeader>
				<CardTitle>Notifications</CardTitle>
				<CardDescription>Configure your notification preferences</CardDescription>
			</CardHeader>
			<CardContent class="space-y-4">
				<div class="flex items-center justify-between">
					<Label for="quest-notifications">Quest Notifications</Label>
					<Switch id="quest-notifications" bind:checked={questNotifications} />
				</div>
				<div class="flex items-center justify-between">
					<Label for="achievement-notifications">Achievement Notifications</Label>
					<Switch id="achievement-notifications" bind:checked={achievementNotifications} />
				</div>
				<div class="flex items-center justify-between">
					<Label for="email-notifications">Email Notifications</Label>
					<Switch id="email-notifications" bind:checked={emailNotifications} />
				</div>
			</CardContent>
		</Card>
	</div>
</div>
