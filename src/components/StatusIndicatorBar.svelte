<script>
  import { fly } from 'svelte/transition';
</script>

<div class="absolute left-0 flex flex-col items-center justify-end w-20 space-y-6 select-none top-3" in:fly={{ x: -100, duration: 1000, delay: 900 }}>
  <img src="/assets/ico-tire-pressure.svg" alt="Tire Pressure" />
  <img src="/assets/ico-headlights.svg" alt="Headlights" />
</div>
