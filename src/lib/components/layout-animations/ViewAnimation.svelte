<script lang="ts">
  let position: 'start' | 'end' = $state('start');

  let toggle = () => {
    if (!document.startViewTransition) {
      position = position === 'start' ? 'end' : 'start';
      return;
    }
    document.startViewTransition(() => {
      position = position === 'start' ? 'end' : 'start';
    });
  };
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onclick={toggle} class="box rounded-full bg-purple-900/20 border-purple-400 p-2 w-28 border">
  <div
    class="item rounded-full h-10 w-10 bg-purple-600 border"
    style="justify-self: {position};"
  ></div>
</div>

<style>
  .item {
    view-transition-name: toggle_item;
  }
</style>
