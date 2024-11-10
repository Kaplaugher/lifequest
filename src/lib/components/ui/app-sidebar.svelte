<script lang="ts">
	import { House, LogOut, Settings, Star, User } from 'lucide-svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';

	// Menu items.
	const items = [
		{
			title: 'Dashboard',
			url: '/dashboard',
			icon: House
		},
		{
			title: 'Quests',
			url: '/dashboard/quests',
			icon: Star
		},
		{
			title: 'Profile',
			url: '/dashboard/profile',
			icon: User
		},
		{
			title: 'Settings',
			url: '/dashboard/settings',
			icon: Settings
		},
		{
			title: 'Logout',
			url: '/api/auth/logout',
			icon: LogOut
		}
	];
</script>

<Sidebar.Root>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>Application</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
