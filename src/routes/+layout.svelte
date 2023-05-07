<script lang="ts">

	import './styles.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import type { PageData } from './types';

    export let data: PageData;
</script>

<div class="app">
	{#each data.stories as story}
	<Header
		storyTitle={story.title}
		storyLink="/stories/{story.id}"
	/>
     {/each}
	
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
