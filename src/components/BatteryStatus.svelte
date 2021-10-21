<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let loaded = false;
  let showAsRange = true;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
  <div class="absolute flex items-center justify-end w-64 text-right select-none top-3 right-6" in:fly={{ y: -100, duration: 1000, delay: 600 }} out:fly={{ y: -10, duration: 300 }} on:click={() => showAsRange = !showAsRange}>
    <div class="font-bold text-gray-600">
      {#if showAsRange}
        131 mi
      {:else}
        43%
      {/if}
    </div>
    <div>
      <img src="/assets/ico-battery.svg" alt="" class="ml-3" />
    </div>
  </div>
{/if}
