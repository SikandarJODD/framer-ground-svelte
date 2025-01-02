<script lang="ts">
  let navs = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'Projects',
      href: '/'
    },
    {
      name: 'Blog',
      href: '/'
    },
    {
      name: 'About Us',
      href: '/'
    }
  ];
  let selected = $state(0);
  let changeSelect = (index: number) => {
    if (!document.startViewTransition) {
      selected = index;
      return;
    }
    document.startViewTransition(() => {
      selected = index;
    });
  };
</script>

<div>
  <nav class="border px-3 py-2.5">
    <ul class="flex space-x-1">
      {#each navs as nav, i}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li onclick={() => changeSelect(i)} class="cursor-pointer relative px-4 py-2">
          <span class="z-50 {selected === i ? 'text-black nav_name' : 'text-white'} ">
            {nav.name}
          </span>
          {#if selected === i}
            <span
              id="highlight"
              class="absolute h-full bg-white w-full left-0 top-0 -z-10 rounded-sm"
            >
            </span>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  #highlight {
    view-transition-name: hightlight;
  }
</style>
