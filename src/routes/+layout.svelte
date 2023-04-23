<script>
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	// import About from '../routes/about/+page.svelte'
</script>

<div class="app">
<!-- <About/> -->
	<main>
		<slot />
	</main>
	<Footer />

	
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

</style>
