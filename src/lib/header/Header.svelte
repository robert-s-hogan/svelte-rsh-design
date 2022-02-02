<script lang="ts">
	import { page } from '$app/stores';
	import rshLogo from './RH_logo_black.png';
</script>

<header class="bg-white">
	<div class="w-full mx-auto p-4 lg:px-0 text-2xl lg:max-w-4xl ">
		<div class="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">

			<a sveltekit:prefetch href="/" class="flex items-center justify-center">
				<img src={rshLogo} class="object-contain h-12 w-12" alt="Robert Hogan's Logo" />
			</a>
			<nav class="flex justify-center">
				<a class:active={$page.url.pathname === '/#say-hello'} sveltekit:prefetch href="/#say-hello">
					<button class="text-sm border-2 inline-block align-middle border-primary-500 hover:text-primary-500 hover:bg-transparent bg-primary-500 text-white ease-in-out duration-200 font-bold py-2 px-6 rounded-full">
						Say Hello
					</button>
				</a>
			</nav>
		</div>
	</div>	
</header>

<style>

	a:hover {
		color: var(--accent-color);
	}
</style>
