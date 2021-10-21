<script>
  import { fly } from 'svelte/transition';
  import { batteryCharge } from '../store.js';
  let showAsRange = false;
</script>

<div
  in:fly={{ y: -100, duration: 1000, delay: 600 }}
  on:click={() => (showAsRange = !showAsRange)}
  class="absolute top-0 flex items-center justify-end w-64 text-right select-none right-6"
>
  <div class="pr-1 font-bold text-gray-600">
    {#if showAsRange}131 mi{:else}{$batteryCharge}%{/if}
  </div>
  <div class="relative">
    <div class="absolute" style="width: 32px; top: 18px; left: 7px; height: 11px;">
      <div class="h-full bg-green-500" style="width: {$batteryCharge}%;" />
    </div>
    <img src="/assets/ico-battery.svg" alt="" />
  </div>
</div>
