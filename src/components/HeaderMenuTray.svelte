<script>
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import IoMdPerson from 'svelte-icons/io/IoMdPerson.svelte'

  import { activeProfileName } from '../store.js';


  let date;

  const getCurrentTime = () => date = new Date().toLocaleTimeString();

  onMount(() => {
    setInterval(() => {
      getCurrentTime();
    }, 1000);
  });
</script>

<div
  in:fly={{ y: -100, duration: 1000, delay: 600 }}
  class="top-0 flex items-center justify-between w-full select-none"
>
  <div class="h-full" style="height: 48px;">
    <ul class="flex items-center h-full space-x-3">
      <li>
        <img src="/assets/ico-locked.svg" alt="lock" class="h-8" />
      </li>
      <li style="width: 100px;">{date}</li>
      <li>73° F</li>
    </ul>
  </div>
  <div class="pr-6 bg-blue-500">
    <ul class="flex items-center justify-end space-x-6">
      <li class="flex items-center justify-center"><div class="inline-block h-5 mr-1"><IoMdPerson /></div> <div class="font-bold">{$activeProfileName}</div></li>
      <li>snt</li>
      <li>camera</li>
      <li>lte</li>
      <li>bte</li>
    </ul>
  </div>
</div>
