<script lang="ts">
  import type { PageData } from './$types';
  let imageUrl = 'path/to/placeholder.jpg'; // Replace this with your actual image URL
  let videoUrl = 'https://www.youtube.com/watch?v=mZeV4TAKsoY&ab_channel=TheFreedomBlueprint'; // Replace this with your YouTube video URL
  let videoId = 'jOTeBVtlnXU'; // Replace this with the ID of your YouTube video

  export let data: PageData;
</script>

<!--  <section class="titlestory">-->
<!--      {#each data.stories as story}-->
<!--      <a data-sveltekit-reload href="/stories/{story.id}" class="nav-link">{story.title}</a>-->
<!--      {/each}-->
<!--  </section>-->

<section class="container">
    <h1 class="text-center"> About us</h1>

    <section>
        <div class="row">
            <div class="col-md-6">
                <h2>Introduction</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae erat eget risus faucibus varius.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                    Integer dictum augue quis congue rutrum. Ut at nisl id leo sollicitudin finibus.
                </p>
            </div>
            <div class="col-md-6">
                <img src="{imageUrl}" alt="Placeholder Image" class="img-fluid" />

            </div>
        </div>
    </section>

    <section class="container background-section">
        <div class="row">
            <div class="col-md-12">
                <h2 class="">Background</h2>
                <p class="">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec ipsum euismod, finibus elit eu, dapibus enim.
                    Nullam euismod neque ut mauris semper, id congue ante dignissim. Proin condimentum iaculis nunc a aliquet.
                    Integer vel odio ut purus iaculis auctor non et tortor.
                </p>
            </div>
            <div class="col-md-12">
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{videoId}" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>


</section>

<style>
    /* You can customize the styles of the background section here */
    section.background-section {
        /* Add your custom styles for the background section */
    }

    section.container {
        padding: 40px 0;
    }

    .embed-responsive {
        position: relative;
        display: block;
        width: 100%;
        padding: 0;
        overflow: hidden;
    }

    .embed-responsive::before {
        content: '';
        display: block;
        padding-top: calc(9 / 16 * 100%);
    }

    .embed-responsive-item {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0;
    }

    h2.text-center,
    p.text-center {
        width: 100%;
    }
</style>








<!-- <script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;

  </script>

    <section>
        {#each data.stories as story}
           <h1> {story.title}</h1>      
        {/each}
    </section> -->
