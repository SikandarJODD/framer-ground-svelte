<script>
  import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="relative isolate px-4 md:px-6 md:pt-14 lg:px-8">
  <div class="mx-auto max-w-2xl py-6 sm:py-48 lg:py-10">
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
        class="text-balance text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-t dark:from-neutral-200 py-2 dark:to-neutral-500 bg-clip-text text-transparent sm:text-7xl"
      >
        Copy. Paste. Animate.
      </h1>
      <p class="mt-4 md:mt-6 text-pretty text-md md:text-lg font-normal text-muted-foreground sm:text-xl/8">
        Elevate your web projects with fine, small animated components. Cards, galleries, navbars,
        buttons, and inputs - inspired from <a
          href="https://ground.bossadizenith.me"
          class="underline text-pink-500 underline-offset-2">Framer Ground</a
        >
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-4">
        <!-- Change Links for Get Started -->
        <Button size="lg" variant="secondary" href="/docs/layouts/grid-to-flex">Get Started</Button>
        <Button size="lg" href="/docs/layouts/grid-to-flex">Components</Button>
      </div>
    </div>
  </div>
</div>
