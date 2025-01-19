<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import {
    House,
    ShoppingBag,
    Box,
    Database,
    Wifi,
    Zap,
    Phone,
    Cpu,
    Code,
    Tablet,
    CloudUpload,
    ChevronRight
  } from 'lucide-svelte';

  let collections = [
    {
      title: 'Rent',
      price: 1200,
      icon: House,
      type: 'daily-needs'
    },
    {
      title: 'Groceries',
      price: 500.56,
      icon: ShoppingBag,
      type: 'daily-needs'
    },
    {
      title: 'Snacks & Beverages',
      price: 45.2,
      icon: Box,
      type: 'daily-needs'
    },
    {
      title: 'Essentials',
      price: 120.34,
      icon: Database,
      type: 'daily-needs'
    },
    {
      title: 'Internet',
      price: 79.99,
      icon: Wifi,
      type: 'utilities'
    },
    {
      title: 'Electricity',
      price: 89.75,
      icon: Zap,
      type: 'utilities'
    },
    {
      title: 'Mobile Data Plan',
      price: 39.99,
      icon: Phone,
      type: 'utilities'
    },
    {
      title: 'Software',
      price: 49.99,
      icon: Cpu,
      type: 'subscriptions'
    },
    {
      title: 'Cloud Storage',
      price: 9.99,
      icon: CloudUpload,
      type: 'subscriptions'
    },
    {
      title: 'Development',
      price: 19.99,
      icon: Code,
      type: 'subscriptions'
    },
    {
      title: 'Gaming',
      price: 50,
      icon: Tablet,
      type: 'subscriptions'
    }
  ];
  let items = [
    {
      id: 'daily-need',
      title: 'Daily Needs',
      type: collections.filter((item) => item.type === 'daily-needs')
    },
    {
      id: 'utilities',
      title: 'Utilities',
      type: collections.filter((item) => item.type === 'utilities')
    },
    {
      id: 'subscriptions',
      title: 'Subscriptions',
      type: collections.filter((item) => item.type === 'subscriptions')
    }
  ];
  let selected: number | null = $state(null);

  let updateSelected = (index: number) => {
    if (!document.startViewTransition) {
      selected = index;
      return;
    }
    document.startViewTransition(() => {
      selected = index;
    });
  };
</script>

<div class="flex justify-center items-center h-[90vh]">
  <div class="space-y-2">
    {#each items as item, index}
      {#if selected === index}
        <div class="flex flex-col border rounded-3xl px-4 py-3 space-y-2">
          <div>
            <h3
              class="text-xl font-semibold font_sora main_heading"
              style:--icon-transition-title={`title-${items[selected].id}`}
            >
              {item.title}
            </h3>
          </div>
          <div class="flex flex-col">
            {#each item.type as collection}
              {@const Icon = collection.icon}
              <div class="flex space-x-3 space-y-1 items-center">
                <div
                  class="p-2.5 rounded-full bg-muted icon"
                  style:--icon-transition-name={`ic-${collection.title.split(' ').join('-')}`}
                >
                  <Icon size={24} strokeWidth={1.4} />
                </div>
                <div>
                  <h4 class="text-lg font-semibold font_sora">
                    {collection.title}
                  </h4>
                  <p class="text-muted-foreground font_sora text-sm">${collection.price}</p>
                </div>
              </div>
            {/each}
          </div>
        </div>
      {:else}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div
          onclick={() => updateSelected(index)}
          class="flex items-center border cursor-pointer p-3 rounded-3xl justify-between space-x-8"
        >
          <div class="space-x-4 flex items-center">
            <div class="grid grid-cols-2 gap-1">
              {#each item.type as collection, index}
                {@const Icon = collection.icon}
                <div
                  class="p-2 rounded-full bg-muted icon"
                  style:--icon-transition-name={`ic-${collection.title.split(' ').join('-')}`}
                >
                  <Icon size={22} strokeWidth={1.4} />
                </div>
              {/each}
            </div>
            <div>
              <h3
                class="text-xl font-semibold font_sora main_heading"
                style:--icon-transition-title={`title-${item.id}`}
              >
                {item.title}
              </h3>

              <p class="text-muted-foreground font_sora">{item.type.length} items</p>
            </div>
          </div>
          <div class="float-right">
            <Button variant="link" size="icon" class="[&_svg]:size-[24px]">
              <ChevronRight class="text-muted-foreground" />
            </Button>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
  .font_sora {
    font-family: 'Sora', serif;
    font-optical-sizing: auto;
    font-style: normal;
  }

  .icon {
    view-transition-name: var(--icon-transition-name, icon);
  }
  ::view-transition-group(*) {
    animation-duration: 0.35s;
  }
  .main_heading {
    view-transition-name: var(--icon-transition-title);
  }
</style>
