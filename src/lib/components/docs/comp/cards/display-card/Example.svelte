<script lang="ts">
  import DisplayCard from '$lib/components/docs/comp/cards/display-card/DisplayCard.svelte';
  import type { Icon } from 'lucide-svelte';
  type Props = {
    icon?: typeof Icon;
    title?: string;
    description?: string;
    date?: string;
    class?: string;
    iconclass?: string;
    titleclass?: string;
  };
  let defaultCards: Props[] = [
    {
      title: 'Vue',
      description: 'The Progressive JavaScript Framework',
      date: 'Feb 2014',
      class:
        "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay bg-[#42d392]/10 border-[#42d392]/20 hover:bg-[#42d392]/20 hover:border-[#42d392]/30 ",
      titleclass: 'text-[#42d392]',
      iconclass:
        'shadow-md border border-[#42d392]/20 bg-[#42d392]/10 text-[#42d392] bg-[#42d392]/10'
    },
    {
      title: 'React',
      description: 'Still re-rendering for 120th time',
      date: '29 May 2013',
      titleclass: 'text-[#61dafb]',
      class:
        "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay bg-[#58c4dc]/15 border-[#58c4dc]/20  hover:bg-[#057088]/30 hover:border-[#0a85a0]/40 hover:backdrop-blur-xl backdrop-blur-sm",
      iconclass: 'shadow-md  border-[#58c4dc]/20 bg-[#58c4dc]/10 text-[#58c4dc]  border'
    },
    {
      title: 'Svelte',
      date: '29 Nov 2016',
      titleclass: 'text-orange-500',
      class:
        '[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10 border-orange-400/30 bg-orange-900/30  hover:border-orange-400/30 hover:bg-orange-900/40  hover:backdrop-blur-xl backdrop-blur-md  ',
      iconclass:
        'shadow-md border border-orange-600/40 bg-orange-500/10 text-orange-600 bg-orange-900/30'
    }
  ];
</script>

<div
  class="grid [grid-template-areas:'stack'] place-items-center opacity-100 animate-in fade-in-0 duration-700"
>
  {#each defaultCards as item}
    <DisplayCard {...item} />
  {/each}
</div>

