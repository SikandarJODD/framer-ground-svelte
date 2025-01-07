<script lang="ts">
  let navs = [
    {
      id: 1,
      name: 'Cheese',
      icon: '🧀'
    },
    {
      id: 2,
      name: 'Lettuce',
      icon: '🥬'
    },
    {
      id: 3,
      name: 'Tomato',
      icon: '🍅'
    }
  ];
  let selected = $state(1);
  let update = (index: number) => {
    if (!document.startViewTransition) {
      selected = index;
      return;
    }
    if(selected === index) return;
    document.startViewTransition(() => {
      selected = index;
    });
  };
</script>

<div class="border rounded-lg">
  <div class="border-b">
    <ul class="flex mt-1 mx-1">
      {#each navs as nav}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
          onclick={() => update(nav.id)}
          class="px-6 py-2 {nav.id === selected
            ? 'bg-zinc-800'
            : ''} rounded-t-md relative cursor-pointer text-sm"
        >
          {nav.icon}
          {nav.name}
          {#if nav.id === selected}
            <span class="h-0.5 w-full bg-blue-500 left-0 bottom-0 absolute hightlight"></span>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  <div class="h-64 flex justify-center items-center">
    <span class="scale-[7]">
      {navs[selected - 1].icon}
    </span>
  </div>
</div>

<style>
  .hightlight {
    view-transition-name: hightlight;
  }
</style>
