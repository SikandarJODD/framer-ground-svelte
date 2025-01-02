<script>
  import { page } from '$app/stores';
  import { all_comp } from '$lib/components/docs/comp/all_comp';
  import Badge from '$lib/components/ui/badge/badge.svelte';

  let compID = $derived($page.params.componentID.split('/').pop());
  let comp = all_comp.filter((c) => c.id === compID)[0] || all_comp[0];
</script>

<h1 class="text-3xl font-bold">
  {comp.name}
</h1>
<div class="flex space-x-1 mt-2">
  {#if comp.tags}
    {#each comp.tags as tag}
      <Badge variant="secondary">{tag}</Badge>
    {/each}
  {/if}
</div>
<div class="mt-4 w-full border rounded-2xl min-h-[500px] flex justify-center ">
  {#if comp.comp}
    {@const MainComponent = comp.comp}
    <MainComponent />
  {/if}
</div>
