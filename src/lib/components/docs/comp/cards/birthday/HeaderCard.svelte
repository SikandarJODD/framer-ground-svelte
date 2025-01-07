<script lang="ts">
  import { Menu } from 'lucide-svelte';
  let { isOpen = $bindable() } = $props();
</script>

<div class="flex items-center justify-between p-4">
  <p class="text-3xl font-semibold">
    {#if isOpen}
      <span> 2025 </span>
    {:else}
      <span> Birthday </span>
    {/if}
  </p>
  <button
    onclick={() => {
      document.startViewTransition(() => {
        isOpen = !isOpen;
      });
    }}
    class="size-12 p-2 center gap-2 cursor-pointer bg-primary text-primary-foreground rounded-full flex-col"
  >
    <Menu />
  </button>
</div>
