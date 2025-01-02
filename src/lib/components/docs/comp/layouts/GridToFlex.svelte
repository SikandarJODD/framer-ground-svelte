<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  let list = [
    {
      name: 'Bhide Svelte',
      email: 'bhide@example.com'
    },
    {
      name: 'Bhide Svelte',
      email: 'bhide@example.com'
    },
    {
      name: 'Bhide Svelte',
      email: 'bhide@example.com'
    },
    {
      name: 'Bhide Svelte',
      email: 'bhide@example.com'
    },
    {
      name: 'Bhide Svelte',
      email: 'bhide@example.com'
    }
  ];
  let selected: 'grid' | 'flex' = $state('grid');
  let changeToGrid = () => {
    document.startViewTransition(() => {
      selected = 'grid';
    });
  };
  let changeToFlex = () => {
    document.startViewTransition(() => {
      selected = 'flex';
    });
  };
</script>

<div class="max-w-4xl w-full border p-3 m-4">
  <div class="flex justify-between items-center w-full mb-6">
    <h1>Grid View</h1>
    <div>
      <Button size="sm" variant="secondary" onclick={changeToGrid}>Grid</Button>
      <Button size="sm" variant="secondary" onclick={changeToFlex}>Flex</Button>
    </div>
  </div>
  <div class="{selected === 'grid' ? 'grid grid-cols-3 gap-3' : 'flex flex-col gap-3'} ">
    {#each list as item, index}
      <div class="border p-3 rounded-md cards" style:--transition-name={`card-${index}`}>
        <div class="flex items-center gap-2 justify-between">
          <!-- avatar -->
          <div class="flex items-center gap-4">
            <div
              class="size-9 rounded-full bg-zinc-800 avatar"
              style:--transition-avatar={`cardav-${index}`}
            ></div>
            <!-- Name and email -->
            <div class="flex flex-col">
              <span class="card_title text-md" style:--transition-title={`cardtitle-${index}`}
                >{item.name}</span
              >
              <span
                class="text-muted-foreground text-sm card_email"
                style:--transition-email={`cardemail-${index}`}>{item.email}</span
              >
            </div>
          </div>
          <div class="delete" style:--transition-delete={`carddelete-${index}`}>
            <Button size="icon" variant="secondary" class="rounded-full"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-trash-2"
                ><path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path
                  d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
                /><line x1="10" x2="10" y1="11" y2="17" /><line
                  x1="14"
                  x2="14"
                  y1="11"
                  y2="17"
                /></svg
              ></Button
            >
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .cards {
    view-transition-name: var(--transition-name);
  }
  .card_title {
    view-transition-name: var(--transition-title);
  }
  .card_email {
    view-transition-name: var(--transition-email);
  }
  .avatar {
    view-transition-name: var(--transition-avatar);
  }
  .delete {
    view-transition-name: var(--transition-delete);
  }
</style>
