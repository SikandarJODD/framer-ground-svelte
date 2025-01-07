<script lang="ts">
  let balls = ['#fff312', '#0d63f8', '#ff0088'];

  let selected = $state(0);
  let update = (index: number) => {
    if (!document.startViewTransition) {
      selected = index;
      return;
    }
    if (selected === index) return;
    document.startViewTransition(() => {
      selected = index;
    });
  };
</script>

<div class="flex justify-center items-center gap-x-5">
  {#each balls as ball, index}
    <button
      aria-label="ball"
      onclick={() => update(index)}
      class="size-20 rounded-full relative"
      style="background-color: {ball};"
    >
      {#if selected === index}
        <div class="selected-btn w-full h-full"></div>
      {/if}
    </button>
  {/each}
</div>

<style>
  .selected-btn {
    view-transition-name: selected-button;
  }
  .selected-btn::after {
    content: '';
    display: block;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border: 3px solid #fff;
  }
</style>
