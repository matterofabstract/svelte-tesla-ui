<script>
  import { onMount } from 'svelte';
  import { fly, fade } from 'svelte/transition';

  let items = [
    { label: 'Car', slug: 'car'},
    { label: 'Music', slug: 'music'},
    { label: 'Cameras', slug: 'camera'},
    { label: 'Windshields', slug: 'windshield'},
    { label: 'More', slug: 'more'},
    { label: 'Drivers Heated Seat', slug: 'seat'},
    { label: 'Climate Control', slug: 'climate'},
    { label: 'Temperature', slug: 'temperature'},
    { label: 'Passengers Heated Seat', slug: 'seat'},
    { label: 'Front Defrost', slug: 'defrost-front'},
    { label: 'Rear Defrost', slug: 'defrost-rear'},
    { label: 'Volume', slug: 'volume'},
  ];

  let loaded = false;

  onMount(() => {
    loaded = true;
  });
</script>

{#if loaded}
<div in:fly={{ y: 100, duration: 1000, delay: 300 }} out:fly={{ y: -10, duration: 300 }}>
  <ul>
    {#each items as {label, slug}}
    <li>
      <img src={`/assets/ico-${slug}.svg`} alt={label} />
    </li>
    {/each}
  </ul>
</div>
{/if}

<style>
  div {
    @apply h-full w-full;
  }
  ul {
    @apply flex justify-evenly items-center border-t-2 border-gray-200 h-full;
  }
  li {
    @apply block;
  }
</style>
