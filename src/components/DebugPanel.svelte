<script>
  import { batteryCharge, screenSlug } from '../store';
</script>

<div class="absolute" style="top: 25%; width: 400px; left: 35%;">
  <div class="relative px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
    <div class="sm:flex sm:items-start">
      <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
        <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">Sandbox Controls</h3>
        <div class="mt-2">
          <p class="mb-6 text-sm text-gray-500">Fuck around with shit using these controls. Try and get yourself hurt, you little fuuuuck.</p>

          <label class="block text-xs font-bold text-gray-600">Battery Charge</label>
          <input type="range" bind:value={$batteryCharge} />

          <!-- <label class="flex mt-3 text-xs font-bold text-gray-600 items-centerblock"><input  type="checkbox" class="mr-1" /> <span class="block h-full">Dark Mode</span></label> -->
        </div>
      </div>
    </div>
  </div>
  <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
    <button
      type="button"
      class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-red-600 bg-red-600 border border-transparent rounded-md shadow-sm hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
    >
      Go Fuck Yourself
    </button>
    <button
      on:click={() => screenSlug.set('boot')}
      type="button"
      class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
    >
      Reboot System
    </button>
  </div>
</div>
