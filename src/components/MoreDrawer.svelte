<script>
  import { fly } from 'svelte/transition';
  import { showMoreDrawer } from '../store.js';
</script>

{#if $showMoreDrawer}
  <div
    in:fly={{ y: 50, duration: 300 }}
    out:fly={{ y: 50, duration: 300 }}
    class="absolute z-10 w-full bg-red-400"
  >
    <ul class="flex py-6 justify-evenly">
      <li>Call</li>
      <li>Calendar</li>
      <li>Camera</li>
      <li>Energy</li>
      <li>Charging</li>
      <li>Web</li>
      <li>Entertainment</li>
      <li>Toybox</li>
    </ul>
  </div>
{/if}
