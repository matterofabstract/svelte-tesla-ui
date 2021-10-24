<script>
  import { onMount } from 'svelte';

  import MenuBar from '../components/MenuBar.svelte';
  import HeaderMenuTray from '../components/HeaderMenuTray.svelte';
  import CarHudView from '../components/CarHudView.svelte';
  import DebugPanel from '../components/DebugPanel.svelte';

  onMount(() => {
    document.body.style.backgroundColor = '#eee';
  });
</script>

<DebugPanel />

<div class="flex flex-col h-screen">
  <div class="flex flex-grow">
    <div class="w-1/3">
      <CarHudView />
    </div>
    <div class="w-2/3">
      <HeaderMenuTray />
    </div>
  </div>
  <div class="relative flex-grow-0 h-24">
    <MenuBar />
  </div>
</div>
