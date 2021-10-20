<script>
  import { onMount, onDestroy } from 'svelte';

	import ProgressBar from '../components/ProgressBar.svelte';
  import { screenSlug } from '../store';

  let loadingProgress = 0;

  const getRandomNumber = () => Math.floor(Math.random() * (4 - 1 + 1) + 1);

  const loadEverything = () => {
    loadingProgress += Math.floor(Math.random() * (4 - 1 + 1) + 1)
    if (loadingProgress >= 100) {
      screenSlug.set('home');
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
    document.body.style.backgroundColor = '#fff';
  });
</script>

<main class="flex flex-col items-center justify-center h-screen w-52 mx-auto">
  <img src="/assets/tesla-logo.svg" alt="Tesla" class="mb-12 mx-auto" />
  <ProgressBar current={loadingProgress} />
</main>
