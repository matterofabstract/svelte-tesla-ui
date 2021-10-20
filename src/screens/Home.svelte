<script>
  import { onMount } from 'svelte';

  import MenuBar from '../components/MenuBar.svelte';
  import CarHudView from '../components/CarHudView.svelte';

  onMount(() => {
    document.body.style.backgroundColor = '#eee';
  });
</script>

<div class="flex flex-col h-screen">
  <div class="flex flex-grow">
    <div class="w-1/3">
      <CarHudView />
    </div>
    <div class="w-2/3">
      [map shit goes here]
    </div>
  </div>
  <div class="flex-grow-0" style="height: 100px;">
    <MenuBar />
  </div>
</div>
