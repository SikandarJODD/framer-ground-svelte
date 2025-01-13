<script lang="ts">
  import Button from '$lib/components/ui/button/button.svelte';
  import Input from '$lib/components/ui/input/input.svelte';
  import Label from '$lib/components/ui/label/label.svelte';

  // Credits : https://ui.lndev.me/components/payment-method
  // All images from https://payment-method-lndev.vercel.app/
  let visaImg = 'https://payment-method-lndev.vercel.app/visa.png';
  let mastercardImg = 'https://payment-method-lndev.vercel.app/mastercard.png';
  let paypalImg = 'https://payment-method-lndev.vercel.app/paypal.png';
  let payments_methods = [
    {
      img: visaImg,
      card_num: '5173 0007 0008 5174',
      card_holder: 'Dheeraj Purohit',
      expiry_date: '12/2025'
    },
    {
      img: mastercardImg,
      card_num: '4715 7000 7000 3715',
      card_holder: 'Aditya Karle',
      expiry_date: '5/2025'
    }
  ];
  let selected: number | null = $state(null);
  let updateSelected = (index: number) => {
    if (!document.startViewTransition) {
      selected = index;
      return;
    }
    document.startViewTransition(() => {
      selected = index;
    });
  };
  let updateToNull = () => {
    if (!document.startViewTransition) {
      selected = null;
      return;
    }
    document.startViewTransition(() => {
      selected = null;
    });
  };
</script>

<div class="bg-zinc-950 w-96 p-1 rounded-lg border">
  <div class="flex justify-between p-2">
    <div>
      <h1 class="text-white">Payment method</h1>
      <p class="text-xs text-muted-foreground">change how you pay for your purchases.</p>
    </div>
    <div>
      <Button size="sm" class="border border-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-credit-card"
          ><rect width="20" height="14" x="2" y="5" rx="2" /><line
            x1="2"
            x2="22"
            y1="10"
            y2="10"
          /></svg
        >
        Add Card</Button
      >
    </div>
  </div>
  <div class="mt-2 space-y-2 p-4 bg-white rounded-lg " >
    {#each payments_methods as method, index}
      <div
        class="{selected === index
          ? 'flex flex-col border p-3 rounded-lg space-y-3'
          : 'flex justify-between border p-2 rounded-lg'} card h-auto"
        style:--transition_card={`pay_card-${index}`}
      >
        {#if selected === index}
          <!-- <div class="flex flex-col border p-3 rounded-lg space-y-3"> -->
          <div class="flex flex-col space-y-2">
            <Label for="name">Name on card</Label>
            <Input
              type="text"
              id="name"
              placeholder="Card Holder"
              class="w-full"
              value={payments_methods[selected].card_holder}
            />
          </div>
          <div class="flex flex-col space-y-2">
            <Label for="name">Name on card</Label>
            <Button variant="outline" class="flex items-center justify-start">
              <img
                class="w-10 img"
                src={payments_methods[selected].img}
                alt={payments_methods[selected].card_holder}
                style:--transition_img={`pay_img-${selected}`}
              />
              <span class="pay_num_card" style:--transition_num={`pay_num-${selected}`}
                >{payments_methods[selected].card_num}
              </span>
            </Button>
          </div>
          <div class="grid grid-cols-2 gap-3">
            <div>
              <Label for="name">Expiry Date</Label>
              <Button variant="outline" class="w-full justify-start text-muted-foreground">
                <p style="--transition_input:pay_input-{selected};" class="pay_in">
                  {payments_methods[selected].expiry_date}
                </p>
              </Button>
            </div>
            <div>
              <Label for="name">CVV</Label>
              <Input type="password" id="name" placeholder="CVV" value="abc" />
            </div>
          </div>
          <Button onclick={updateToNull}>Save</Button>
          <!-- </div> -->
        {:else}
          <div class="flex items-center gap-x-3">
            <div class="w-14">
              <img
                class="img"
                src={method.img}
                alt={method.card_holder}
                style:--transition_img={`pay_img-${index}`}
              />
            </div>
            <div>
              <h4 class="pay_num_card text-black" style:--transition_num={`pay_num-${index}`}>
                **** **** **** {method.card_num.slice(-4)}
              </h4>
              <p
                class="text-muted-foreground text-xs pay_in"
                style:--transition_input={`pay_input-${index}`}
              >
                {method.expiry_date}
              </p>
            </div>
          </div>
          <div>
            <Button
              onclick={() => updateSelected(index)}
              size="sm"
              variant="outline"
              class="bg-background text-muted-foreground">Edit</Button
            >
          </div>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style>

  .card {
    view-transition-name: var(--transition_card);
  }
  ::view-transition-group(*) {
    transition:
      width 0.6s ease-in-out,
      height 0.6s ease-in-out;
  }
  .img {
    view-transition-name: var(--transition_img);
  }
  .pay_in {
    view-transition-name: var(--transition_input);
  }
  .pay_num_card {
    view-transition-name: var(--transition_num);
  }
</style>
