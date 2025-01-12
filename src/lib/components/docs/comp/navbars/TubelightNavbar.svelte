<script lang="ts">
  import { cn } from '$lib/utils';
  import { Home, User, Briefcase, FileText } from 'lucide-svelte';
  import { onMount } from 'svelte';
  let navItems = [
    { name: 'Home', url: '#', icon: Home },
    { name: 'About', url: '#', icon: User },
    { name: 'Projects', url: '#', icon: Briefcase },
    { name: 'Resume', url: '#', icon: FileText }
  ];
  let { _class = '' } = $props();
  let activeTab = $state(navItems[0].name);
  let isMobile = $state(false);
  onMount(() => {
    let handleResize = () => {
      isMobile = window.innerWidth < 768;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  let updateActive = (name: string) => {
    if (!document.startViewTransition) {
      activeTab = name;
      return;
    }
    let transiton = document.startViewTransition(() => {
      activeTab = name;
    });
  };
</script>

<!-- <div class={cn('fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6', _class)}> -->
<div class={cn('relative bottom-0 sm:top-0 z-50 mb-6 sm:pt-6', _class)}>
  <div
    class="flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
  >
    {#each navItems as item}
      {@const Icon = item.icon}
      {@const isActive = activeTab === item.name}
      <a
        href={item.url}
        aria-label="tab"
        onclick={() => updateActive(item.name)}
        class={cn(
          'relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors',
          'text-foreground/80 hover:text-primary',
          isActive && 'bg-muted text-primary'
        )}
      >
        <span class="hidden md:inline">{item.name}</span>
        <span class="md:hidden">
          <Icon size="24" strokeWidth={2.5} />
        </span>
        {#if isActive}
          <div class="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 activeTab">
            <div
              class="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full"
            >
              <div
                class="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2"
              ></div>
              <div class="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1"></div>
              <div class="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2"></div>
            </div>
          </div>
        {/if}
      </a>
    {/each}
  </div>
</div>

<style>
  .activeTab {
    view-transition-name: activeTab;
  }
  ::view-transition-group(activeTab) {
    animation-duration: 0.3s;
    animation-timing-function: cubic-bezier(.42,0,.58,1);
  }
</style>
