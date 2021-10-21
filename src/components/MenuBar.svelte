<script>
  import { fly } from 'svelte/transition';
	import MenuBarTemperature from '../components/MenuBarTemperature.svelte';
  import MenuBarVolume from '../components/MenuBarVolume.svelte';
</script>

  <ul in:fly={{ y: 100, duration: 1000, delay: 300 }}>
    <li><img src="/assets/ico-car.svg" alt="Main Menu"/></li>
    <li><img src="/assets/ico-music.svg" alt="Main Menu"/></li>
    <li><img src="/assets/ico-camera.svg" alt="Main Menu"/></li>
    <li><img src="/assets/ico-windshield.svg" alt="Main Menu"/></li>
    <li><img src="/assets/ico-more.svg" alt="More..."/></li>
    <li><img src="/assets/ico-seat.svg" alt="Driver Seat Heater"/></li>
    <li><img src="/assets/ico-climate.svg" alt="Climate Control"/></li>
    <li><MenuBarTemperature /></li>
    <li><img src="/assets/ico-seat.svg" alt="Passenger Seat Heater" class="scale-x-[-1]"/></li>
    <li><img src="/assets/ico-defrost-front.svg" alt="Defrost Front"/></li>
    <li><img src="/assets/ico-defrost-rear.svg" alt="Defrost Rear"/></li>
    <li><MenuBarVolume /></li>
  </ul>

<style>
  ul {
    @apply h-full w-full flex justify-evenly items-center border-t-2 border-gray-200;
  }
  li {
    @apply block;
  }
</style>
