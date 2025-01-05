<script>
  let image_list = [
    {
      id: 1,
      src: 'https://i.pinimg.com/736x/93/cc/6e/93cc6e2eb0baf7a7b2d635011024d048.jpg'
    },
    {
      id: 2,
      src: 'https://i.pinimg.com/736x/c8/a8/04/c8a80498b543ac64659fd815ddf1b83c.jpg'
    },
    {
      id: 3,
      src: 'https://i.pinimg.com/736x/80/a9/b3/80a9b35b13cdfa53f78abcca184172d7.jpg'
    },
    {
      id: 4,
      src: 'https://i.pinimg.com/736x/ae/29/ad/ae29ad6303ee81d02622acf5a180f3d8.jpg'
    }
  ];
  let isHovered = $state(false);
  let updateHover = () => {
    document.startViewTransition(() => {
      isHovered = true;
    });
  };
  let updateHoverOut = () => {
    document.startViewTransition(() => {
      isHovered = false;
    });
  };
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="mt-10">
  {#if isHovered}
    <div class="grid grid-cols-2 gap-3 w-fit">
      {#each image_list as item, i}
        <img
          src={item.src}
          style:--transition_img={`image-${i}`}
          alt="image_item"
          class="size-40 rounded-2xl object-cover image"
          onclick={updateHoverOut}
        />
      {/each}
    </div>
  {:else}
    <div class="max-w-4xl">
      <div class="relative size-[350px]  flex justify-center items-center">
        {#each image_list as item, i}
          <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
          <div class="absolute top-10" style="transform: rotateZ({6 * (i + 1)}deg);">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <img
              src={item.src}
              alt="image_item"
              class="size-64 rounded-2xl object-cover image"
              style:--transition_img={`image-${i}`}
              onclick={updateHover}
            />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</div>

<style>
  .image {
    view-transition-name: var(--transition_img);
  }
</style>
