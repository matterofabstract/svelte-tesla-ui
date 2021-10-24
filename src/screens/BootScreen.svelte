<script>
  import { onMount, onDestroy } from 'svelte';

	import ProgressBar from '../components/ProgressBar.svelte';
  import { screenSlug } from '../store';

  let loadingProgress = 0;

  const getRandomNumber = () => Math.floor(Math.random() * (4 - 1 + 1) + 1);

  const loadEverything = () => {
    loadingProgress += Math.floor(Math.random() * (4 - 1 + 1) + 1)
    if (loadingProgress >= 100) {
      screenSlug.set('main');
    } else {
      setTimeout(() => {
        loadEverything();
      }, getRandomNumber() * 40);
    }
  };

  onMount(() => {
    document.body.style.backgroundColor = '#000';
    loadEverything();
  });

  onDestroy(() => {
    document.body.style.backgroundColor = '#eee';
  });
</script>

<main class="flex flex-col items-center justify-center h-screen mx-auto w-52">
  <img
    on:click={() => screenSlug.set('main')}
    src="/assets/tesla-logo.svg"
    class="w-32 mx-auto mb-12 select-none"
    alt="Tesla"
  />
  <ProgressBar current={loadingProgress} />
</main>
