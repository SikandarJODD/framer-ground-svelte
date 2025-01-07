<script lang="ts">
  import { X } from 'lucide-svelte';
  import BirthdayCard from './BirthdayCard.svelte';
  import {
    months,
    getCurrentMonth,
    formatDate,
    calculateAge,
    getRemainingDays
  } from './types_and_data';
  import { fly, scale } from 'svelte/transition';

  let upccomingBirthdays = $derived.by(() => {
    let monthIndex = getCurrentMonth();
    return months[monthIndex].items;
  });
  interface Birthday {
    name: string;
    image: string;
    dateOfBirth: string;
  }
  let selected: null | Birthday = $state(null);
</script>

<div class="flex-1 flex flex-col gap-5 relative h-auto main_box">
  {#if selected !== null}
    <div
      class="avatar_boxs relative h-full w-full rounded-3xl p-4 center flex-col gap-5 text-primary-foreground dark:bg-neutral-200 bg-neutral-800"
      style:--transition_box="avatar_box-${selected.name}"
    >
      <button
        class="absolute top-5 right-5 size-8"
        onclick={() => {
          document.startViewTransition(() => {
            selected = null;
          });
        }}
      >
        <X strokeWidth={1.5} class="size-6 text-primary-foreground" />
      </button>
      <div class="gap flex justify-center items-center flex-col">
        <div class="size-20 rounded-full min-w-10">
          <img
            src={selected.image}
            alt={selected.name}
            class="rounded-full size-full av_name_image"
            style:--transition_avimg={`av_img-${selected.name}`}
          />
        </div>
        <div class="flex flex-col gap-2 flex-1">
          <p class="flex flex-col text-center">
            <span
              class="font-semibold text-2xl avatar_name"
              style:--transition_name={`name-${selected.name}`}
            >
              {selected.name}
            </span>
            <span class="text-base av_date" style:--transition_av_date={`date-${selected.name}`}>
              {formatDate(selected.dateOfBirth)}. {''}
              <span class="text-xs fade-in-10">
                {getRemainingDays(selected.dateOfBirth)} days
              </span>
            </span>
          </p>
          <p class="text-2xl font-semibold calc_age" style:--transition_age={`age-${selected.name}`}>
            {calculateAge(selected.dateOfBirth)} years old
          </p>
        </div>
      </div>
    </div>
  {:else}
    <!-- <p class="uppercase text-xs">Upcoming</p> -->
    <div class="flex flex-col gap-2">
      {#each upccomingBirthdays.slice(0, 3) as item, index}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          class="avatar_boxs hover:bg-neutral-800/80 dark:bg-neutral-200 bg-neutral-800 p-2 rounded-xl flex gap-2 cursor-pointer hover:dark:bg-neutral-300/80 text-primary-foreground"
          style:--transition_box="avatar_box-${item.name}"
          onclick={() => {
            document.startViewTransition(() => {
              selected = item;
            });
          }}
        >
          <div class="size-10 rounded-full min-w-10">
            <img
              src={item.image}
              alt={item.name}
              style:--transition_avimg={`av_img-${item.name}`}
              class="rounded-full size-10 av_name_image"
            />
          </div>
          <div class="flex justify-between items-center flex-1">
            <p class="flex flex-col">
              <span class="avatar_name" style:--transition_name={`name-${item.name}`}
                >{item.name}</span
              >
              <span
                class="text-xs text-muted-foreground av_date"
                style:--transition_av_date={`date-${item.name}`}
                >{formatDate(item.dateOfBirth)}</span
              >
            </p>
            <p class="calc_age" style:--transition_age={`age-${item.name}`}>
              {calculateAge(item.dateOfBirth)} years
            </p>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .main_box {
    interpolate-size: allow-keywords;
  }
  .avatar_name {
    view-transition-name: var(--transition_name);
  }
  .avatar_boxs {
    view-transition-name: var(--transition_box);
  }
  .av_name_image {
    animation: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    view-transition-name: var(--transition_avimg);
  }
  .av_date {
    view-transition-name: var(--transition_av_date);
  }
  .calc_age {
    view-transition-name: var(--transition_age);
  }
</style>
