<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div class="flex w-64 text-right absolute top-3 right-6 justify-end" in:fly={{ y: -100, duration: 1000, delay: 600 }} out:fly={{ y: -10, duration: 300 }}>
    <div class="font-bold text-gray-600">131 mi</div>
    <div>[bat icon]</div>
  </div>
{/if}
