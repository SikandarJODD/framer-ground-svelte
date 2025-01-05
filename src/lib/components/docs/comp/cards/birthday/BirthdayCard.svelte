<script lang="ts">
  // Animation Credit : https://ground.bossadizenith.me/docs/cards/birthday
  // I am trying to rebuild this animation in svelte

  import { months } from './types_and_data';

  import Month from './Month.svelte';
  import UpcommingBirthdays from './UpcommingBirthdays.svelte';
  import './birthday.css';
  import HeaderCard from './HeaderCard.svelte';
  let isOpen: boolean = $state(false);
</script>

<div class="w-[50%] mx-auto flex justify-center items-center">
  {#if isOpen}
    <div class="w-full rounded-3xl bg-primary p-4 text-primary-foreground">
      <HeaderCard bind:isOpen />
      <div class="grid grid-cols-3 gap-4 overflow-x-clip bar px-4 -z-30">
        {#each months as month, index}
          <Month {month} {index} />
        {/each}
      </div>
    </div>
  {:else}
    <div class="w-full p-4 rounded-3xl text-primary-foreground bg-primary flex flex-col gap-5">
      <!-- <HeaderCard bind:isOpen />
      <div class="relative -mt-6 ">
        <div class="flex overflow-x-clip bar gap-4 px-4 -z-30">
          {#each months as month, index}
            <Month {month} {index} />
          {/each}
        </div>
      </div> -->
      <UpcommingBirthdays />
    </div>
  {/if}
</div>
