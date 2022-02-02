<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import Header from "$lib/header/Header.svelte";
	import { page } from '$app/stores';
	import rshLogo from '$lib/header/RH_logo_black.png';
	import MyRecentWork from "$lib/myRecentWork/MyRecentWork.svelte";
	import Testimonials from "$lib/testimonials/Testimonials.svelte";
	import Skills from "$lib/skills/Skills.svelte";
	import Modal from "$lib/modal/Modal.svelte";

	let showPopup = false;

	const onShowPopup = (ev) => {
		showPopup = true;
	}
	const onPopupClose = (data) => {
		showPopup = false;

		console.log(data);
	} 
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<header class="bg-white">
	<div class="w-full mx-auto p-4 lg:px-0 text-2xl lg:max-w-4xl ">
		<div class="flex justify-between text-white p-4 lg:px-0 text-2xl max-w-4xl">

			<a sveltekit:prefetch href="/" class="flex items-center justify-center">
				<img src={rshLogo} class="object-contain h-12 w-12" alt="Robert Hogan's Logo" />
			</a>
			<nav class="flex justify-center">
				<a class:active={$page.url.pathname === '/#say-hello'} sveltekit:prefetch href="/#say-hello">
					<button on:click={onShowPopup} class="text-sm border-2 inline-block align-middle border-primary-500 hover:text-primary-500 hover:bg-transparent bg-primary-500 text-white ease-in-out duration-200 font-bold py-2 px-6 rounded-full">
						Say Hello
					</button>
				</a>
			</nav>
		</div>
	</div>	
</header>

<!-- Hero -->
<div class="hero max-h-full bg-tertiary-500 py-24">
	<h1 class="text-3xl font-bold text-center pb-4">
		Web Developer, UI/UX Engineer
	</h1>
	<p class="text-center mb-12">
		I design and code beautifully simple things, and I love what
		I do.
	</p>
	<div class="flex justify-center" >

			<img
				src="https://rshogan.imgix.net/personal/img/J_R___T_8.21.21-31_copy_k9zia3.jpg?auto=compress,format,enhance&fit=crop&crop=faces&h=300&w=300"
				class="rounded-lg"
				alt=""
			/>
	</div>
</div>

<!-- Nice to Meet You -->
<section class="w-full bg-white py-24 flex flex-col justify-center text-center px-4">
	<div class="max-w-4xl mx-auto">
		<h2 class="text-black text-2xl font-bold mb-6">
			Hi, I’m Robert.
			<br /> Nice to meet you.
		</h2>
		<p class="text-black lg:text-xl">
			Since beginning my journey as a freelance designer
			nearly 6 years ago, I've done remote work for agencies,
			consulted for startups, and collaborated with talented
			people to create digital products for both business and
			consumer use. I'm quietly confident, naturally curious,
			and perpetually working on improving my chops one design
			problem at a time.
		</p>
	</div>
</section>

<Skills />

<MyRecentWork />

<Testimonials />

<!-- <StartAProject /> -->
<section class="pb-32 text-white text-center">
	<div class="bg-gradient-to-r from-primary-900 to-primary-500 max-w-7xl w-5/6 mx-auto bg-gray-700 text-white rounded-lg shadow-lg overflow-hidden">
		<div class="flex flex-col md:flex-row md:space-x-6 w-3/4 mx-auto justify-center py-12">
				<h2 class="text-white text-2xl font-bold md:w-1/4">
					Start a project
				</h2>
				<p class="mt-2 text-white md:flex-auto md:w-1/2">
					Interested in working together? <span class="md:block"></span>We should queue up a
					chat. I’ll buy the coffee.
				</p>
				<button on:click={onShowPopup} class="rounded-full w-1/2 mx-auto mt-6 md:mt-0 md:py-0 md:rounded-full py-3 px-4 md:px-10 text-gray-100 font-semibold border-2 md:w-1/4">
					Let's do this
				</button>
		</div>
	</div>
</section>

<Modal open={showPopup} onClosed={(data) => onPopupClose(data)} />