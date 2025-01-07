<script lang="ts">
  import { fade, fly, scale } from 'svelte/transition';

  type Card = {
    id: number;
    title: string;
    image: string;
    description: string;
    sm: string;
  };

  let CARDS: Card[] = [
    {
      id: 1,
      title: 'The Oddysey',
      sm: 'Explore unknow galexies.',
      image: 'https://i.pinimg.com/736x/64/93/25/6493250247570ec523d45616b422fde9.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, justo id ullamcorper fermentum, felis lectus facilisis ex, sed consectetur lectus nisi in metus.'
    },
    {
      id: 2,
      title: 'Angry Rabit',
      sm: 'They are coming for you.',
      image: 'https://i.pinimg.com/736x/f0/89/f9/f089f954a33f01cb7a294ce340d528d2.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, justo id ullamcorper fermentum, felis lectus facilisis ex, sed consectetur lectus nisi in metus.'
    },
    {
      id: 3,
      title: 'Ghost town',
      sm: 'Scary ghost.',
      image: 'https://i.pinimg.com/736x/5a/58/b7/5a58b7f765ffb1d5c9676481fb3e0ca4.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, justo id ullamcorper fermentum, felis lectus facilisis ex, sed consectetur lectus nisi in metus.'
    },
    {
      id: 4,
      title: 'Pirates in the jungle',
      sm: 'Find the treasure.',
      image: 'https://i.pinimg.com/736x/36/b5/5f/36b55f015e5fb922b967a3727b019408.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, justo id ullamcorper fermentum, felis lectus facilisis ex, sed consectetur lectus nisi in metus.'
    },
    {
      id: 5,
      title: 'Lost in the mountains',
      sm: 'Be careful.',
      image: 'https://i.pinimg.com/736x/e9/95/16/e9951645a755526071013bccfd53bb17.jpg',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lobortis, justo id ullamcorper fermentum, felis lectus facilisis ex, sed consectetur lectus nisi in metus.'
    }
  ];
  let selectedCard: null | Card = $state(null);
  let updateSelectedCard = (card: Card) => {
    document.startViewTransition(() => {
      selectedCard = card;
    });
  };
  let clearCard = () => {
    document.startViewTransition(() => {
      selectedCard = null;
    });
  };
</script>

<div class="h-full flex justify-center items-center w-full relative my-6">
  {#if selectedCard !== null}
    {@render ModuleCard(selectedCard, clearCard)}
    <ul class="flex flex-col gap-4 justify-center items-center max-w-md w-full z-10">
      {#each CARDS as card}
        {#if card.id !== selectedCard.id}
          {@render OverviewCard(card, () => updateSelectedCard(card))}
        {:else if card.id === selectedCard.id}
          <div class="min-h-20"></div>
        {/if}
      {/each}
    </ul>
  {:else}
    <ul class="flex flex-col gap-4 justify-center items-center max-w-md w-full">
      {#each CARDS as card}
        {@render OverviewCard(card, () => updateSelectedCard(card))}
      {/each}
    </ul>
  {/if}
</div>

{#snippet OverviewCard(card: Card, onClick: () => void)}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <li
    class="w-full text-primary-foreground {selectedCard === null
      ? 'bg-background'
      : ''} rounded-3xl cursor-pointer main_card"
    style:--card={`card-${card.id}`}
    onclick={onClick}
  >
    <div class="flex gap-6 h-20">
      <div class="min-w-20 h-20 rounded-3xl w-20 relative overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          class="w-full h-full object-cover rounded-3xl main_img"
          style:--image={`img-${card.id}`}
        />
      </div>
      <div
        class="border-b h-full items-start justify-center flex flex-col flex-1 dark:border-neutral-800 border-neutral-200"
      >
        <div class="flex items-center justify-between w-full">
          <div>
            <h2
              class="font-semibold text-xl text-secondary-foreground main_title"
              style:--title={`title-${card.id}`}
            >
              {card.title}
            </h2>
            <p
              class="text-muted-foreground main_sub_title"
              style:--sub_title={`title-sm-${card.id}`}
            >
              {card.sm}
            </p>
          </div>
          <button class="py-1 px-3 rounded-full bg-blue-50 text-blue-500 text-sm font-semibold">
            Get
          </button>
        </div>
      </div>
    </div>
  </li>
{/snippet}

{#snippet ModuleCard(card: Card, onClick: () => void)}
  <div class="fixed inset-0 flex items-center justify-center z-0 bg-secondary/50"></div>
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div onclick={onClick} class="fixed inset-0 flex flex-col justify-center items-center z-50">
    <div
      class="p-4 w-fit relative  flex items-center justify-center flex-col bg-background rounded-3xl main_card"
      style:--card={`card-${card.id}`}
    >
      <div class="max-w-xl mx-auto flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="min-w-20 h-20 rounded-3xl w-20 relative overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              class="w-full h-full object-cover main_img rounded-3xl"
              style:--image={`img-${card.id}`}
            />
          </div>
          <div class="h-full items-start justify-center flex flex-col flex-1">
            <div class="flex items-center justify-between w-full">
              <div>
                <h2
                  class="font-semibold text-xl text-secondary-foreground main_title"
                  style:--title={`title-${card.id}`}
                >
                  {card.title}
                </h2>
                <p
                  class="text-muted-foreground main_sub_title"
                  style:--sub_title={`title-sm-${card.id}`}
                >
                  {card.sm}
                </p>
              </div>
              <button class="py-1 px-3 rounded-full bg-blue-50 text-blue-500 text-sm font-semibold">
                Get
              </button>
            </div>
          </div>
        </div>
        <p
          in:fly={{ x: 20, duration: 300, delay: 50 }}
          class="text-[#969799] font-medium text-sm"
          style:--desc={`description-${card.id}`}
        >
          {card.description}
        </p>
      </div>
    </div>
  </div>
{/snippet}

<style>
  .main_card {
    view-transition-name: var(--card);
  }
  ::view-transition-group(*) {
    animation-timing-function: ease-in-out;
  }
  .main_title {
    view-transition-name: var(--title);
  }
  .main_sub_title {
    view-transition-name: var(--sub_title);
  }
  .main_img {
    view-transition-name: var(--image);
  }
</style>
