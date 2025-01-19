<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { fade, fly } from 'svelte/transition';

  type Feature = {
    step: string;
    title: string;
    content: string;
    image: string;
  };
  let {
    features = [],
    class: _class = '',
    title = 'How to get Started',
    autoPlayInterval = 3000,
    imageHeight = 400
  }: {
    features: Feature[];
    class: string;
    title: string;
    autoPlayInterval: number;
    imageHeight: number;
  } = $props();

  let currentFeature = $state(0);
  let progress = writable(0);

  let timer = null;

  onMount(() => {
    timer = setInterval(() => {
      progress.update((p) => {
        if (p < 100) {
          return p + 100 / (autoPlayInterval / 100);
        } else {
          currentFeature = (currentFeature + 1) % features.length;
          return 0;
        }
      });
    }, 100);

    return () => clearInterval(timer);
  });
</script>

<div class={['p-8 md:p-12', _class]}>
  <div class="max-w-7xl mx-auto w-full">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">{title}</h2>

    <div class="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
      <div class="order-2 md:order-1 space-y-8">
        {#each features as feature, index}
          <div
            class="flex items-center gap-6 md:gap-8"
            transition:fade
            style="opacity: {currentFeature === index ? 1 : 0.3}"
          >
            <div
              class={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 ${
                currentFeature === index
                  ? 'bg-primary border-primary text-primary-foreground scale-110'
                  : 'bg-muted border-muted-foreground'
              }`}
            >
              {#if index <= currentFeature}
                <span class="text-lg font-bold">✓</span>
              {:else}
                <span class="text-lg font-semibold">{index + 1}</span>
              {/if}
            </div>

            <div class="flex-1">
              <h3 class="text-xl md:text-2xl font-semibold">{feature.title || feature.step}</h3>
              <p class="text-sm md:text-lg text-muted-foreground">{feature.content}</p>
            </div>
          </div>
        {/each}
      </div>

      <div
        class="order-1 md:order-2 relative h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden rounded-lg image-container"
      >
        {#each features as feature, index}
          {#if currentFeature === index}
            <div
              class="absolute inset-0 rounded-lg overflow-hidden"
              in:fly={{ y: 100, duration: 350, delay: 150 }}
              out:fly={{ y: -100, duration: 350 }}
            >
              <img
                src={feature.image}
                alt={feature.step}
                class="w-full object-cover transition-transform transform"
                style="height: {imageHeight}px;"
              />
              <div
                class="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-background via-background/50 to-transparent"
              ></div>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</div>

<style>
  .image-container {
    position: relative;
    overflow: hidden;
    border-radius: 0.5rem;
  }
  .progress-bar {
    height: 4px;
    background-color: var(--primary);
    transition: width 0.1s linear;
  }
</style>
