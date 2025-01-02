<script>
	import { AnimatePresence, Motion, AnimateSharedLayout } from 'motion-start';
	import {
		BellRing,
		ClipboardList,
		Flag,
		Folder,
		Plus,
		StickyNote,
		Trophy,
		X
	} from 'lucide-svelte';

	const transition = { type: 'spring', bounce: 0, duration: 0.4 };

	let items = [
		{
			name: 'Project',
			icon: Folder
		},
		{
			name: 'Task',
			icon: ClipboardList
		},
		{
			name: 'Note',
			icon: StickyNote
		},
		{
			name: 'Goal',
			icon: Trophy
		},
		{
			name: 'Milestone',
			icon: Flag
		},
		{
			name: 'Reminder',
			icon: BellRing
		}
	];

	let status = $state('idle');
	let isOpen = $state(false);
	let isHovered = $state(false);
	$inspect(isOpen);
</script>

<div class="relative">
	<AnimateSharedLayout type="crossfade">
		<AnimatePresence initial={false} let:item list={[{ key: isOpen }]}>
			{#if item.key}
				<Motion.div
					layoutId="Wrapper"
					style={{ borderRadius: 22 }}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.9 }}
					transition={{ ...transition, delay: 0.05 }}
					class="bg-primary tracking-tight text-primary-foreground"
				>
					<div class="flex w-full items-center justify-between py-2.5 pl-5 pr-2.5">
						<Motion.span layoutId="create-new" class="relative">Create New</Motion.span>
						<div class="relative">
							<AnimatePresence list={[{ key: isHovered }]} let:item>
								{#if item.key}
									<Motion.p
										initial={{ opacity: 0, x: 10 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: 10 }}
										class="absolute -left-11 top-0.5 text-sm "
									>
										Close
									</Motion.p>
								{/if}
							</AnimatePresence>
							<Motion.button
								layout
								onclick={() => {
									isOpen = false;
									status = 'idle';
								}}
								initial={{ opacity: 0, x: -20, y: 10 }}
								animate={{ opacity: 1, x: 0, y: 0 }}
								exit={{ opacity: 0, x: -20, y: 10 }}
								transition={{ ...transition, delay: 0.15 }}
								whileTap={{
									scale: 0.9,
									transition: { ...transition, duration: 0.2 }
								}}
								onHoverStart={() => {
									status = 'hovered';
									isHovered = true;
								}}
								onHoverEnd={() => {
									status = 'open';
									isHovered = false;
								}}
								class="size-6 flex items-center justify-center rounded-full bg-background"
							>
								<X class="size-4 text-tight text-secondary-foreground" />
							</Motion.button>
						</div>
					</div>
					<Motion.div
						initial={{ opacity: 0 }}
						animate={isHovered ? { opacity: 1, scale: 0.95 } : { opacity: 1 }}
						exit={{ opacity: 0 }}
						class="flex flex-col gap-2.5 rounded-[22px] bg-muted-foreground p-2.5 border"
					>
						<div class="grid grid-cols-3 gap-2.5">
							{#each items as item}
								<button
									class="size-24 grid cursor-pointer place-items-center rounded-2xl bg-background transition duration-500 ease-in-out hover:bg-background hover:duration-200 active:scale-90"
								>
									<div class="flex flex-col items-center gap-1">
										<item.icon class="text-muted-foreground" />
										<p class="text-[#6b6967]">{item.name}</p>
									</div>
								</button>
							{/each}
						</div>
					</Motion.div>
				</Motion.div>
			{:else}
				<Motion.button
					layoutId="Wrapper"
					onTap={() => {
						status = 'open';
						isOpen = true;
					}}
					transition={{ ...transition, delay: 0.05 }}
					whileTap={{ scale: 0.95 }}
					style={{ borderRadius: 22 }}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					class="flex items-center gap-1.5 bg-primary text-primary-foreground relative px-5 py-2.5 tracking-tight"
				>
					<Motion.div
						layout
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ...transition, delay: 0.05 }}
					>
						<Plus class="size-4" />
					</Motion.div>
					<Motion.span layoutId="create-new" class="relative">Create New</Motion.span>
				</Motion.button>
			{/if}
		</AnimatePresence>
	</AnimateSharedLayout>
</div>
