<script>
	import BootScreen from './screens/BootScreen.svelte';
	import Home from './screens/Home.svelte';

	import { screenSlug } from './store.js';
</script>

{#if $screenSlug === 'boot'}
	 <BootScreen />
{/if}

{#if $screenSlug === 'home'}
	<Home />
{/if}

<style global>
	@tailwind base;
  @tailwind components;
  @tailwind utilities;

	body {
		@apply transition-colors duration-1000;
		/* bg-black; */
	}
</style>
