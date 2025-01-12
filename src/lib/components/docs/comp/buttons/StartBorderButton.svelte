<script lang="ts">
  import { cn } from '$lib/utils';
  import type { Snippet } from 'svelte';
  type Props = {
    color?: string;
    speed?: string;
    className?: string;
    children?: Snippet;
  };
  let {
    color = 'hsl(var(--foreground))',
    speed = '6s',
    className = '',
    children
  }: Props = $props();
</script>

<button
  aria-label="btn"
  class={cn('relative inline-block py-[1px] h-fit overflow-hidden rounded-[20px] ', className)}
>
  <div
    class={cn(
      'absolute w-[300%] h-[50%] bottom-[-11px] right-[-250%] rounded-full animate-star-movement-bottom z-0',
      'opacity-20 dark:opacity-70'
    )}
    style="
      background: radial-gradient(circle, {color}, transparent 10%);
      animation-duration: {speed};
    "
  ></div>
  <div
    class={cn(
      'absolute w-[300%] h-[50%] top-[-10px] left-[-250%] rounded-full animate-star-movement-top z-0',
      'opacity-20 dark:opacity-70'
    )}
    style="
      background: radial-gradient(circle, {color}, transparent 10%);
      animation-duration: {speed};
    "
  ></div>
  <div
    class={cn(
      'relative z-1 border text-foreground text-center text-base py-4 px-6 rounded-[20px]',
      'bg-gradient-to-b from-background/90 to-muted/90 border-border/40',
      'dark:from-background dark:to-muted dark:border-border'
    )}
  >
    {#if children}
      {@render children()}
    {:else}
      Coding is fun
    {/if}
  </div>
</button>
