<script>
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="relative isolate px-6 pt-14 lg:px-8">
	<div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-10">
		<div class="hidden sm:mb-8 sm:flex sm:justify-center">
			<a
				href="/docs/buttons"
				class="relative rounded-full px-6 py-1 text-sm/6 text-zinc-500 hover:text-primary/80 ring-1 ring-zinc-800 hover:ring-zinc-700 transition-all duration-150"
			>
				Introducing Buttons. <span class="font-semibold text-pink-500/70">
					<span aria-hidden="true">&rarr;</span></span
				>
			</a>
		</div>
		<div class="text-center">
			<h1
				class="text-balance text-5xl font-semibold tracking-tight bg-gradient-to-t dark:from-neutral-200 py-2 dark:to-neutral-500 bg-clip-text text-transparent sm:text-7xl"
			>
				Copy. Paste. Animate.
			</h1>
			<p class="mt-6 text-pretty text-lg font-medium text-muted-foreground sm:text-xl/8">
				Elevate your web projects with fine, small animated components. Cards, galleries, navbars,
				buttons, and inputs - inspiref from <a
					href="https://ground.bossadizenith.me"
					class="underline text-pink-500 underline-offset-2">Framer Ground</a
				>
			</p>
			<div class="mt-10 flex items-center justify-center gap-x-4">
				<Button size="lg" variant="secondary">Get Started</Button>
				<Button size="lg">Components</Button>
			</div>
		</div>
	</div>
</div>
