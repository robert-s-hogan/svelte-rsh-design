<script>
	import svelteLogo from './svelte-logo.svg';
    import tailwindCssLogo from './tailwindcss-logo.svg';
    import vercelLogo from './vercel-icon-dark.svg';
</script>

<section class="max-w-4xl mx-auto text-center p-4">
	<p class="text-2xl font-extrabold uppercase">RH</p>
	<p>Living, learning, & leveling up one day at a time.</p>
    <div class="flex justify-between flex-row mt-16">
        <span>Handcrafted by Robert. Made with <img class="inline-block object-contain h-8 w-8" src={svelteLogo} alt="Svelte Logo"> & <img class="inline-block object-contain h-8 w-8" src={tailwindCssLogo} alt="TailwindCSS logo"> & <img class="inline-block object-contain h-6 w-6" src={vercelLogo} alt="Vercel logo"></span>
    </div>
</section>