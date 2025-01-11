<script>
  let sentences = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum, asperiores tenetur
    pariatur ducimus fugit quisquam soluta minima veritatis vitae cum quibusdam earum suscipit quasi
    molestiae? Natus excepturi accusamus fugiat tenetur quis, eius voluptatibus aperiam obcaecati
    harum laborum. Ratione, laborum.`;
  let letters = sentences.split('');
</script>

<div class="flex justify-center items-center min-h-[300vh] relative">
  <div class=" max-w-3xl">
    <div class="flex flex-wrap relative">
      {#each letters as letter, i}
        {#if letter === ' '}
          <span> &nbsp; </span>
        {:else}
          <div
            class="text-3xl font-bold letter z-10"
            style:--transition-name={`lett-${i}`}
            style="--i:{i}"
          >
            {letter}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</div>

<style>
  @keyframes scroll-opacity {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0.2;
    }
    60% {
      opacity: 0.4;
    }
    80% {
      opacity: 0.6;
    }
    to {
      opacity: 1;
    }
  }
  [style*='--i'] {
    view-transition-name: var(--transition-name);
    animation: scroll-opacity ;
    animation-timeline: view();
    animation-range: entry 0% cover 60%;
  }
</style>
