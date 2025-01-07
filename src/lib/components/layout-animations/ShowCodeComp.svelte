<script lang="ts">
  import * as Dialog from '$lib/components/ui/dialog/index';
  import { onMount } from 'svelte';
  import { buttonVariants } from '../ui/button';
  import { codeToHtml } from 'shiki';
  import Button from '../ui/button/button.svelte';

  let { code } = $props();
  let htmlCode = $state('');
  onMount(async () => {
    htmlCode = await codeToHtml(code, {
      lang: 'svelte',
      theme: 'vesper'
    });
  });
  let copiedText = $state('Copy');
  let copyCode = () => {
    navigator.clipboard.writeText(code);
    copiedText = 'Copied';
    setTimeout(() => {
      copiedText = 'Copy';
    }, 1000);
  };
</script>

<Dialog.Root>
  <Dialog.Trigger class={buttonVariants({ variant: 'default', size: 'sm' })}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-code-xml"
      ><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg
    >
    Source</Dialog.Trigger
  >
  <Dialog.Content class="max-w-[800px] h-[600px]">
    <Dialog.Header>
      <Dialog.Title>Source Code</Dialog.Title>
      <div class="relative">
        <div class="whitespace-pre overflow-scroll max-w-[750px] max-h-[540px] scrollbar">
          {@html htmlCode}
        </div>
        <div class="absolute bottom-0 right-0">
          <Button onclick={copyCode} variant="secondary">{copiedText}</Button>
        </div>
      </div>
    </Dialog.Header>
  </Dialog.Content>
</Dialog.Root>
