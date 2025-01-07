<script lang="ts">
  import { page } from '$app/stores';
  import { all_layout_animations } from '$lib/components/layout-animations/all_layout_animation';
  import ShowCodeComp from '$lib/components/layout-animations/ShowCodeComp.svelte';
  import Button from '$lib/components/ui/button/button.svelte';
  let pageComp = $derived.by(() => {
    let id = $page.params.id || 'page-wipe';
    let index = all_layout_animations.findIndex((el) => el.id === id);
    if (index === -1) {
      index = 0;
    }
    return all_layout_animations[index];
  });
  let next_id = $derived.by(() => {
    let id = $page.params.id || 'page-wipe';
    let index = all_layout_animations.findIndex((el) => el.id === id);
    if (index === -1) {
      index = 0;
    }
    return all_layout_animations[index + 1]?.id || all_layout_animations[0].id;
  });

  let prev_id = $derived.by(() => {
    let id = $page.params.id || 'page-wipe';
    let index = all_layout_animations.findIndex((el) => el.id === id);
    if (index === -1) {
      index = 0;
    }
    return (
      all_layout_animations[index - 1]?.id ||
      all_layout_animations[all_layout_animations.length - 1].id
    );
  });
  let code = $derived.by(() => {
    let id = $page.params.id || 'page-wipe';
    let index = all_layout_animations.findIndex((el) => el.id === id);
    if (index === -1) {
      index = 0;
    }
    return all_layout_animations[index].code;
  });
</script>

<div class="relative flex justify-center items-center min-h-[90vh]">
  {#if pageComp}
    {@const Comp = pageComp.comp}
    <Comp />
  {/if}
  <div class="absolute bottom-0 right-10 p-4 flex justify-center items-center gap-2">
    <Button size="sm" href="/layout/{prev_id}" variant="secondary"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg
      >Prev</Button
    >
    <Button size="sm" href="/layout/{next_id}" variant="secondary"
      >Next <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg
      ></Button
    >
    {#key code}
      <ShowCodeComp {code} />
    {/key}
  </div>
</div>
