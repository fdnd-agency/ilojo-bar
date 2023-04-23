<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

    // export let data: any;
  </script>

    <section>
        {#each data.stories as story}
           <h1> {story.title}</h1>
           
               
                <!-- storyImage={story.thumbnail.url}
                storyLink="/stories/{story.id}" -->
            
        {/each}
    </section>
