<script lang="ts">
  import { Plus } from 'lucide-svelte';
  import { type Month, getCurrentMonth } from './types_and_data';

  let {
    month,
    index = 0
  }: {
    month: Month;
    index: number;
  } = $props();

  let firstThree = month.items.slice(0, 3); // for the first three birthdays
  let remainingBirthDays = month.items.length - firstThree.length; // for the remaining birthdays
  let currentMonthIndex = $state(getCurrentMonth() === index);
</script>

<div class="flex flex-col gap-2">
  <p class="flex items-center gap-2">
    {#if currentMonthIndex}
      <span class="size-2 rounded-full bg-red-500"></span>
    {/if}
    <span
      class="uppercase text-muted-foreground text-sm font-medium avtar_month"
      style:--transition_month={`month-${month.name}`}
    >
      {month.name}
    </span>
  </p>
  <div class="flex">
    {#each firstThree as item, index}
      <div
        class="size-10 flex justify-center items-center rounded-full text-muted-foreground -ml-2 font-bold text-sm"
      >
        <img
          src={item.image}
          style:--transition_img={`img-${item.name}`}
          alt={item.name}
          class="rounded-full size-10 avatar_image"
        />
      </div>
    {/each}
    {#if remainingBirthDays > 0}
      <div
        class="size-10 flex justify-center items-center rounded-full text-muted-foreground -ml-2 dark:bg-neutral-300 bg-neutral-800 font-bold text-sm"
      >
        <span>
          <Plus strokeWidth={1.5} class="size-4" />
        </span>{' '}
        {remainingBirthDays}
      </div>
    {/if}
  </div>
</div>

<style>
  .avatar_image {
    view-transition-name: var(--transition_img);
  }
  .avtar_month {
    view-transition-name: var(--transition_month);
  }
</style>
