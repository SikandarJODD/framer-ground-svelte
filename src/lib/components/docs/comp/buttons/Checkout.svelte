<script lang="ts">
	import { Motion, AnimatePresence } from 'motion-start';
	import ShoppingCart from 'lucide-svelte/icons/shopping-cart';

	let focus: boolean = $state(false);
	let variants = {
		initial: {
			height: 10,
			opacity: 0
		},
		animate: {
			height: 100,
			opacity: 1
		},
		exit: {
			height: 10,
			opacity: 0
		}
	};
</script>

<div class="">
	<div class="relative z-0">
		<!-- onMouseEnter={() => setFocus(true)}
        onMouseLeave={() => setFocus(false)} -->
		<Motion.button
			onHoverStart={() => (focus = true)}
			onHoverEnd={() => (focus = false)}
			class="h-12 px-10 text-primary-foreground overflow-hidden z-10 flex items-center gap-2 rounded-xl bg-primary"
		>
			<span class="text-lg font-semibold">Checkout</span>
			<span class="relative">
				<ShoppingCart class="h-5 w-5 ml-2" />
				<Motion.span
					animate={{
						y: focus ? '-100%' : 0,
						opacity: focus ? 0 : 1
					}}
					transition={{
						duration: 0.2
					}}
					class="text-xs h-4 w-4 rounded-full bg-primary text-primary-foreground -top-1.5 -right-1.5 absolute"
				>
					3
				</Motion.span>
			</span>
			<AnimatePresence list={[{ key: focus }]} let:item>
				{#if item.key}
					<Motion.div
						{variants}
						initial="initial"
						animate="animate"
						exit="exit"
						class="absolute bg-primary/50 text-primary-foreground p-2 flex text-lg -z-10 bottom-0 w-full left-0 rounded-xl"
					>
						3 items in cart
					</Motion.div>
				{/if}
			</AnimatePresence>
		</Motion.button>
	</div>
</div>
