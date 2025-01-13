<script lang="ts">
  import { cn } from '$lib/utils';
  import { Sparkle } from 'lucide-svelte';
  import { type Icon } from 'lucide-svelte';

  type Props = {
    icon?: typeof Icon;
    title?: string;
    description?: string;
    date?: string;
    class?: string;
    iconclass?: string;
    titleclass?: string;
  };
  let {
    icon = Sparkle,
    title = 'Svletekit',
    description = 'web development for the rest of us.',
    date = 'Just now',
    iconclass = 'text-orange-600 bg-orange-900/30',
    titleclass = 'text-white',
    class: _class
  }: Props = $props();
</script>

<div
  class={cn(
    "relative flex h-36 w-[22rem] -skew-y-[8deg] select-none flex-col justify-between rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-4 py-3 transition-all duration-700 after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-[''] hover:border-white/20 hover:bg-muted [&>*]:flex [&>*]:items-center [&>*]:gap-2",
    _class
  )}
>
  <div>
    <span
      class={['relative inline-block rounded-full p-1 ', iconclass]}
    >
      {#if icon}
        {@const Icon = icon}
        <Icon size={24} strokeWidth={1.4} />
      {/if}
    </span>
    <p class={cn('text-lg font-medium', titleclass)}>{title}</p>
  </div>
  <p class="whitespace-nowrap text-lg">{description}</p>
  <p class="text-muted-foreground">{date}</p>
</div>
