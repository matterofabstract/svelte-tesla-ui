<script>
	import BootScreen from './screens/BootScreen.svelte';
	import MainScreen from './screens/MainScreen.svelte';

	import { screenSlug } from './store.js';
</script>

{#if $screenSlug === 'boot'}<BootScreen />{/if}
{#if $screenSlug === 'main'}<MainScreen />{/if}

<style global>
	@tailwind base;
  @tailwind components;
  @tailwind utilities;

	body {
		@apply transition-colors duration-1000 bg-black;
	}
</style>
