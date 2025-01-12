<script lang="ts">
  import Badge from '$lib/components/ui/badge/badge.svelte';

  let { children } = $props();
  type Comp = {
    name: string;
    subcomps: SubComp[];
  };
  type SubComp = {
    name: string;
    url: string;
    isNew?: boolean;
  };
  let comps: Comp[] = [
    {
      name: 'Button',
      subcomps: [
        {
          name: 'Star border',
          url: '/docs/button/star-border',
          isNew: true
        }
        // {
        //   name: 'Create',
        //   url: '/docs/button/create'
        // },
        // {
        //   name: 'Delete',
        //   url: '/docs/button/delete'
        // },
        // {
        //   name: 'Github',
        //   url: '/docs/button/github'
        // },
        // {
        //   name: 'Second Brain',
        //   url: '/docs/button/second-brain'
        // },
        // {
        //   name: 'Sparkles',
        //   url: '/docs/button/sparkles'
        // }
      ]
    },
    {
      name: 'Cards',
      subcomps: [
        {
          name: 'Birthday',
          url: '/docs/card/birthday-card'
        },
        {
          name: 'Overview',
          url: '/docs/card/overview'
        },
        {
          name: 'Payment Method',
          url: '/docs/card/payment-method',
          isNew: true
        }
      ]
    },
    // {
    //   name: 'Layouts',
    //   subcomps: [
    //     {
    //       name: 'Grid to Flex',
    //       url: '/docs/layouts/grid-to-flex'
    //     }
    //   ]
    // },
    {
      name: 'Gallery Hover',
      subcomps: [
        {
          name: 'Hover',
          url: '/docs/layouts/hover'
        },
        {
          name: 'One',
          url: '/docs/layouts/one'
        }
      ]
    },
    // {
    //   name: 'Menu',
    //   subcomps: [
    //     {
    //       name: 'Circular',
    //       url: '/docs/menu/circular'
    //     },
    //     {
    //       name: 'Hamburger',
    //       url: '/docs/menu/hamburger'
    //     }
    //   ]
    // },
    // {
    //   name: 'Inputs',
    //   subcomps: [
    //     {
    //       name: 'Google',
    //       url: '/docs/inputs/google'
    //     },
    //     {
    //       name: 'IMessage',
    //       url: '/docs/inputs/imessage'
    //     },
    //     {
    //       name: 'Password Strength',
    //       url: '/docs/inputs/password-strength'
    //     },
    //     {
    //       name: 'Validity',
    //       url: '/docs/inputs/validity'
    //     },
    //     {
    //       name: 'Verifier',
    //       url: '/docs/inputs/verifier'
    //     }
    //   ]
    // },
    {
      name: 'Navbars',
      subcomps: [
        {
          name: 'Vercel',
          url: '/docs/navbars/vercel'
        },
        {
          name: 'Tubelight Navbar',
          url: '/docs/navbars/tubelight-navbar',
          isNew: true
        }
      ]
    }
  ];
  let isMobileMenu = $state(true);
</script>

<div>
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div
    class="{isMobileMenu
      ? 'opacity-100'
      : 'opacity-0'} transition-opacity ease-linear duration-300 relative z-50 lg:hidden"
    role="dialog"
    aria-modal="true"
  >

    <div
      class=" {isMobileMenu
        ? ' translate-x-0'
        : '-translate-x-full'} transition ease-in-out duration-300 transform fixed inset-0 bg-background"
      aria-hidden="true"
    ></div>

    <div
      class="{isMobileMenu
        ? ' translate-x-0'
        : '-translate-x-full'} transition ease-in-out duration-300 transform fixed inset-0 flex"
    >

      <div
        class="{isMobileMenu
          ? 'opacity-100'
          : 'opacity-0'} ease-in-out duration-300 relative mr-16 flex w-full max-w-xs flex-1"
      >

        <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
          <button onclick={() => (isMobileMenu = false)} type="button" class="-m-2.5 p-2.5">
            <span class="sr-only">Close sidebar</span>
            <svg
              class="size-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div
          class="flex grow flex-col overflow-y-auto bg-background dark:bg-zinc-900 px-6 pb-2 ring-1 ring-white/10"
        >
          <div class="flex h-16 shrink-0 items-center">
            <h1>Framer Ground Svelte</h1>
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col space-y-1.5">
              {#each comps as comp}
                <li>
                  <span class="">
                    {comp.name}
                  </span>
                  <ul role="list" class="px-2 mt-1 border-l">
                    {#each comp.subcomps as item}
                      <li>
                        <a
                          onclick={() => (isMobileMenu = false)}
                          href={item.url}
                          class="text-sm/6 font-normal text-muted-foreground"
                        >
                          {item.name}
                          {#if item.isNew}
                            <span
                              class="text-xs rounded-full bg-primary/90 size-6 flex justify-center items-center"
                            >
                              New
                            </span>
                          {/if}
                        </a>
                      </li>
                    {/each}
                  </ul>
                </li>
              {/each}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-60 lg:flex-col mt-16 py-3">
    <div
      class="flex grow flex-col gap-y-5 overflow-y-auto bg-background p-6 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-800
  dark:[&::-webkit-scrollbar-track]:bg-neutral-800
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-700"
    >
      <nav class="flex flex-1 flex-col">
        <ul role="list" class="flex flex-1 flex-col gap-y-4">
          {#each comps as comp}
            <li>
              <div class="text-md font-semibold text-primary/90 flex items-center gap-1.5">
                {comp.name}
                <span class="text-xs rounded-full bg-muted size-6 flex justify-center items-center">
                  {comp.subcomps.length}
                </span>
              </div>
              <ul role="list" class="-mx-2 mt-2 space-y-1">
                {#each comp.subcomps as subcomp}
                  <li>
                    <a
                      href={subcomp.url}
                      class="group flex gap-x-2 rounded-md p-2 text-sm text-muted-foreground transition-all duration-150 dark:hover:text-white hover:text-black"
                    >
                      <span class="truncate">
                        {subcomp.name}
                      </span>
                      {#if subcomp.isNew}
                        <Badge
                          class="h-5 w-10 flex justify-center items-center text-[10px] "
                          variant="pink">New</Badge
                        >
                      {/if}
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </div>

  <div
    class="sticky top-0 z-40 flex items-center gap-x-6 bg-background px-4 py-4 shadow-sm sm:px-6 lg:hidden justify-between"
  >
    <div class="flex-1 text-sm/6 font-semibold text-white">Components</div>
    <button
      onclick={() => (isMobileMenu = true)}
      type="button"
      class="-m-2.5 p-2.5 text-gray-400 lg:hidden"
    >
      <span class="sr-only">Open sidebar</span>
      <svg
        class="size-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        aria-hidden="true"
        data-slot="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </button>
  </div>

  <main class="py-10 lg:pl-60">
    <div class="px-4 sm:px-6 lg:px-8 w-full">
      {@render children()}
    </div>
  </main>
</div>
