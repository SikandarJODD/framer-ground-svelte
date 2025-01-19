<script>
  // @ts-nocheck

  import { Bolt, Flag, Clock4, CircleCheck, Circle, CircleCheckBig } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  let selected = $state(true);
  let items = ['Design Tokens', 'Color System', 'Type System', 'Documentation'];
  let names = [
    { name: 'Saloni', color: 'bg-blue-600/60' },
    { name: 'Aditya', color: 'bg-purple-600/60' },
    { name: 'Sikandar', color: 'bg-pink-600/60' }
  ];
  let toggleSelected = () => {
    if (!document.startViewTransition) {
      selected = !selected;
      return;
    }
    document.startViewTransition(() => {
      selected = !selected;
    });
  };
</script>

{#if selected}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div onclick={toggleSelected} class="border rounded-2xl min-w-80 p-4 box_height cursor-pointer">
    <div class="flex justify-between">
      <div class="flex items-center gap-1.5">
        <button class="main_icon">
          <Bolt size="20" strokeWidth={1.5} />
        </button>
        <span class="main_title font_sora">Design System</span>
      </div>
      <div class="flex items-center gap-1.5 progress_bar">
        <div class="relative">
          <div class="bg-zinc-800 h-2.5 rounded-full w-20"></div>
          <div class="bg-green-600 h-2.5 rounded-full w-16 absolute top-0 left-0"></div>
        </div>
        <span class="text-sm">75%</span>
      </div>
    </div>
    <div class="flex justify-between items-center mt-2.5">
      <div class="flex items-center gap-2.5">
        <div class="flex items-center gap-1 text-muted-foreground task">
          <button>
            <Flag size="16" strokeWidth={1.5} />
          </button>
          <span class="text-sm">Tasks</span>
        </div>
        <div class="flex items-center gap-1 text-muted-foreground progress_track">
          <button>
            <Clock4 size="16" strokeWidth={1.5} />
          </button>
          <span class="text-sm">Progress</span>
        </div>
      </div>
      <div class="flex -mr-5">
        {#each names as item, index}
          <div
            style="transform: translateX(-{index * 10}px);"
            class={[
              'text-xs size-7 flex justify-center items-center bg-zinc-900 border-primary/30 border rounded-full text-muted-foreground all_names'
            ]}
            style:--transiton_name={`name-${item.name}`}
          >
            {item.name.slice(0, 1)}
          </div>
        {/each}
      </div>
    </div>
  </div>
{:else}
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <div onclick={toggleSelected} class="border p-4 rounded-2xl min-w-80 space-y-3 box_height cursor-pointer">
    <div class="flex items-center gap-1.5">
      <button class="main_icon">
        <Bolt size="24" strokeWidth={1.5} />
      </button>
      <span class="text-lg main_title font_sora">Design System</span>
    </div>
    <div class="space-y-2.5">
      <div class="flex items-center gap-2 border p-2 rounded-full w-fit">
        <div class="flex justify-center items-center gap-1.5">
          <CircleCheck size="16" strokeWidth={1.5} />
          <span class="text-xs text-muted-foreground"> 3 of 4 </span>
        </div>
        <div class="progress_bar flex items-center gap-1.5">
          <div class="relative">
            <div class="bg-zinc-800 h-2.5 rounded-full w-20"></div>
            <div class="bg-green-600 h-2.5 rounded-full w-16 absolute top-0 left-0"></div>
          </div>
          <span class="text-xs text-muted-foreground">75%</span>
        </div>
      </div>

      <div class="space-y-1.5 ml-6">
        {#each items as item, index}
          <div
            class={[
              'flex items-center gap-1.5',
              index > 2 ? 'text-primary' : 'text-muted-foreground'
            ]}
            in:fly|global={{ x: -15, delay: index * 120 }}
          >
            {#if index < 3}
              <CircleCheckBig size="16" strokeWidth={1.5} />
            {:else}
              <Circle size="16" strokeWidth={1.5} />
            {/if}
            <span class={['text-sm']}>{item}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="flex items-center gap-2.5">
      <div class="flex items-center gap-1 text-muted-foreground task">
        <button>
          <Flag size="16" strokeWidth={1.5} />
        </button>
        <span class="text-sm">Tasks</span>
      </div>
      <div class="flex items-center gap-1 text-muted-foreground progress_track">
        <button>
          <Clock4 size="16" strokeWidth={1.5} />
        </button>
        <span class="text-sm">Progress</span>
      </div>
    </div>
    <div class="flex items-center gap-1">
      {#each names as item, index}
        <div class="flex border rounded-full items-center pr-2.5 ps-1 py-1 gap-1">
          <span
            class={[
              'text-xs size-5 flex justify-center items-center   rounded-full text-muted-foreground all_names',
              item.color
            ]}
            style:--transiton_name={`name-${item.name}`}
          >
            {item.name.slice(0, 1)}
          </span>
          <span class="text-xs">{item.name}</span>
        </div>
      {/each}
    </div>
  </div>
{/if}

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
  .font_sora {
    font-family: 'Sora', serif;
    font-optical-sizing: auto;
    font-style: normal;
  }
  .main_title {
    view-transition-name: main_title;
  }
  .main_icon {
    view-transition-name: main_icon;
  }
  .progress_bar {
    view-transition-name: progress_bar;
  }
  .task {
    view-transition-name: task;
  }
  .progress_track {
    view-transition-name: progress_track;
  }
  .all_names {
    view-transition-name: var(--transiton_name);
  }
</style>
