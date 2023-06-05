<script lang="ts">
	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="app">
	<Header stories={data.stories} />	
	<main class="content">
		<slot />
	</main>
	<Footer class="footer" />
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.footer {
		margin-top: auto; /* Push the footer to the bottom */
	}
	.content {
		flex: 1; /* Expand to fill remaining space */
		margin-top: var(--header-height);
	}
</style>


