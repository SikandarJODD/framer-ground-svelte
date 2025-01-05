<script lang="ts">
  interface Element {
    id: number;
    height: number;
    img: string;
  }

  interface Column {
    id: number;
    elements: Element[];
  }

  let img_list: Column[] = [
    {
      id: 1,
      elements: [
        {
          id: 1,
          height: 300,
          img: 'https://i.pinimg.com/736x/f6/66/b1/f666b13c63632cad5cfaca365703e2a3.jpg'
        },
        {
          id: 2,
          height: 250,
          img: 'https://i.pinimg.com/736x/f1/b3/9e/f1b39e252c73bb7edc64e72068dbc12f.jpg'
        }
      ]
    },
    {
      id: 2,
      elements: [
        {
          id: 3,
          height: 150,
          img: 'https://i.pinimg.com/736x/d4/fa/e3/d4fae39cea961a5813e09e181b14cd95.jpg'
        },
        {
          id: 4,
          height: 100,
          img: 'https://i.pinimg.com/736x/f0/6d/b7/f06db7c80adea216c6760ec898a58440.jpg'
        },
        {
          id: 5,
          height: 150,
          img: 'https://i.pinimg.com/736x/3b/6b/31/3b6b3171ee3cf40862d76b55df4ac1ae.jpg'
        }
      ]
    },
    {
      id: 3,
      elements: [
        {
          id: 6,
          height: 300,
          img: 'https://i.pinimg.com/736x/01/dc/95/01dc952eb2cfa57eea3d0722cd5940af.jpg'
        },
        {
          id: 7,
          height: 250,
          img: 'https://i.pinimg.com/736x/d8/e8/f5/d8e8f52fa21c66fdd2939db2e249a6c2.jpg'
        }
      ]
    }
  ];
  let selectedID: Element | undefined = $state();
  let dimg = $derived(img_list.flatMap((column) => column.elements));
  let updateID = (item: Element) => {
    document.startViewTransition(() => {
      selectedID = item;
    });
  };
</script>

<div class="my-20">
  {#if selectedID && selectedID !== undefined}
    <div class="w-full h-full flex items-center justify-center gap-10 flex-col overflow-hidden">
      <div class="w-[600px] h-[400px] rounded-3xl cursor-pointer overflow-hidden">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <img
          src={selectedID.img}
          class="w-full object-cover h-full image rounded-3xl"
          style:--transition-img={`img-${selectedID.id}`}
          alt=""
          onclick={() => updateID(undefined)}
        />
      </div>
      <div class="flex flex-row gap-4 justify-center items-center">
        {#each dimg.filter((img) => img.id !== selectedID.id) as item, i}
          <div class="rounded-2xl">
            <!-- svelte-ignore event_directive_deprecated -->
            <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <img
              src={item.img}
              class="w-24 h-24 object-cover rounded-2xl cursor-pointer image"
              alt=""
              onclick={() => updateID(item)}
              style:--transition-img={`img-${item.id}`}
            />
          </div>
        {/each}
      </div>
    </div>
  {:else}
    <div class="w-full gap-2 flex items-start justify-center">
      {#each img_list as item}
        <div class="w-48 flex flex-col items-center justify-center gap-2">
          {#each item.elements as img, i}
            <div
              style="height: {img.height}px; "
              class="rounded-2xl cursor-pointer center overflow-hidden"
            >
              <!-- svelte-ignore a11y_click_events_have_key_events -->
              <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
              <img
                onclick={() => updateID(img)}
                class="w-full object-cover image rounded-2xl"
                style:--transition-img={`img-${img.id}`}
                src={img.img}
                alt="img"
              />
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style>
  .image {
    view-transition-name: var(--transition-img);

  }
</style>
