<script>
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Home from '../lib/components/Header.svelte'
	import Header from '../lib/components/Header.svelte';
</script>

<div class="app">
	<Header/>
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
