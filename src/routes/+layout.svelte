<script lang="ts">
    import './styles.css';
    import Footer from '$lib/components/Footer.svelte';
    import Header2 from '$lib/components/Header2.svelte';
    import type {PageData} from './$types';

    export let data: PageData;

    import Loader from '$lib/components/Loader.svelte';
</script>

<div class="app">
    <Loader/>

    <Header2 stories={data.stories}/>
    <main>
        <slot/>
    </main>
    <Footer/>
</div>

<style>
    .app {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
    *{
        font-family: 'Rubik', sans-serif;
    }
</style>

