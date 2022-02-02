<script>
    import { fade, fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
  
    export let open = false;
    export let showBackdrop = true;
    export let onClosed;
  
    const modalClose = (data) => {
      open = false;
      if (onClosed) {
        onClosed(data);
      }
    };
  
  </script>
  
  {#if open}
    <div class="modal hidden overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center justify-items-center" id="sampleModal" tabindex="-1" role="dialog" aria-labelledby="sampleModalLabel" aria-hidden={false} style="  background: rgba(0, 0, 0, 0.5);">
        <div class="modal-dialog relative w-auto my-6 mx-auto max-w-3xl" role="document" in:fly={{ y: -50, duration: 300 }} out:fly={{ y: -50, duration: 300, easing: quintOut }}>
            <div class="bg-white border-2 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none">
                <div class="modal-body relative p-6 flex-auto">
                        <div class="overflow-hidden">
                            <button type="button" class="close absolute top-0 right-0 mx-4 my-1" data-dismiss="modal" aria-label="Close" on:click={() => modalClose('close')}>
                                <span class="text-5xl text-right font-light" aria-hidden="true">&times;</span>
                            </button>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                                    <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                        Thanks for taking the time to reach out! Fill in the form to start a conversation
                                    </p>

                                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            Acme Inc, Street, State,
                                            Postal Code
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            +44 1234567890
                                        </div>
                                    </div>

                                    <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <div class="ml-4 text-md tracking-wide font-semibold w-40">
                                            info@acme.org
                                        </div>
                                    </div>
                                </div>

                                <form class="p-6 flex flex-col justify-center">
                                    <div class="flex flex-col">
                                        <label for="name" class="hidden">Full Name</label>
                                        <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="email" class="hidden">Email</label>
                                        <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
                                    </div>

                                    <div class="flex flex-col mt-2">
                                        <label for="tel" class="hidden">Number</label>
                                        <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-blue-500 focus:outline-none" />
                                    </div>

                                    <button type="submit" class="md:w-32 bg-primary-900 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-blue-500 transition ease-in-out duration-300">
                                        Submit
                                    </button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

  {#if showBackdrop}
    <div class="modal-backdrop show" transition:fade={{ duration: 150 }} />
  {/if}
{/if}
  
  <style>
    .modal {
      display: block;
    }
  </style>