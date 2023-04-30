<script>
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import BootstrapHeader from '$lib/components/BootstrapHeader.svelte';

</script>

<div class="app">
	<BootstrapHeader/>
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
