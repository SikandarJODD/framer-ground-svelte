<script>
  import DashStrokeGrid from '$lib/components/magic-ui/DashStrokeGrid.svelte';
  import GridPattern from '$lib/components/magic-ui/GridPattern.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  import { cn } from '$lib/utils';
</script>

<div class="relative isolate h-[90vh]">
  <GridPattern
    width={40}
    height={40}
    strokeDashArray="4 2"
    fillColor="rgb(255 255 255 / 0.35)"
    class={cn('[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]')}
  />
  <GridPattern
    width={40}
    height={40}
    strokeDashArray="4 2"
    x={11}
    y={17}
    fillColor="rgb(255 255 255 / 0.3)"
    class={cn('[mask-image:linear-gradient(to_top_left,white,transparent,transparent)]')}
  />
  <div class="mx-auto max-w-2xl py-28 sm:py-48 lg:py-28">
    <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      <a
        href="/docs/buttons"
        class="relative rounded-full px-6 py-1 text-sm/6 text-pink-500 ring-pink-600/60 hover:text-pink-600 hover:ring-pink-500 dark:text-pink-600/80 hover:text-primary/80 ring-1 dark:ring-pink-800/60 dark:bg-pink-900/30 bg-pink-300/10 transition-all hover:bg-pink-50 duration-150"
      >
        Introducing Layout<span class="pl-1 font-semibold text-pink-500/70">
          <span aria-hidden="true">&rarr;</span></span
        >
      </a>
    </div>
    <div class="text-center">
      <h1
        class="text-balance text-3xl md:text-5xl font-semibold tracking-tight bg-gradient-to-t dark:from-neutral-200 py-2 dark:to-neutral-500 bg-clip-text text-transparent sm:text-7xl from-neutral-700 to-neutral-800"
      >
        View Transition + Scroll Based Animations
      </h1>
      <p
        class="mt-4 md:mt-6 text-pretty text-md md:text-lg font-normal text-muted-foreground sm:text-xl/8"
      >
        Elevate your web projects with the latest in web animations and transitions.
      </p>
      <div class="mt-10 flex items-center justify-center gap-x-4">
        <!-- Change Links for Get Started -->
        <Button size="lg" variant="secondary" href="/docs/navbars/tubelight-navbar">Get Started</Button>
        <Button size="lg" href="/docs/navbars/tubelight-navbar">Components</Button>
      </div>
    </div>
  </div>
</div>
