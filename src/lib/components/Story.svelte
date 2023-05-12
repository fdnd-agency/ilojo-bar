<script>
	import { onMount } from 'svelte';
  
	let carouselItems = [
	  { id: 1, title: 'Slide 1'},
	  { id: 2, title: 'Slide 2'},
	  { id: 3, title: 'Slide 4'},
	  { id: 3, title: 'Slide 5'},
	  { id: 3, title: 'Slide 6'},
	  { id: 3, title: 'Slide 7'},
	  { id: 3, title: 'Slide 8'},
	];
  
	let currentSlideIndex = 0;
	let slidesPerScreen = 3; // Number of slides to display per screen
  
	// Function to handle next slide
	function nextSlide() {
	  currentSlideIndex = (currentSlideIndex + 1) % carouselItems.length;
	}
  
	// Function to handle previous slide
	function previousSlide() {
	  currentSlideIndex = (currentSlideIndex - 1 + carouselItems.length) % carouselItems.length;
	}
  
	onMount(() => {
	  // Autoplay functionality (optional)
	  const autoplayInterval = setInterval(() => {
		nextSlide();
	  }, 5000);
  
	//   Cleanup the interval on component unmount
	  return () => {
		clearInterval(autoplayInterval);
	  };
	});
  </script>
  
  <main>
	<div class="carousel-container">
	  {#each carouselItems as item, i}
	  {#if (i - currentSlideIndex + carouselItems.length) % carouselItems.length < slidesPerScreen}

		<div
		  class="carousel-slide {i === currentSlideIndex ? 'active' : ''}"
		>
		  <h3>{item.title}</h3>
		</div>
		{/if}

	  {/each}
	</div>
  
	<div class="carousel-navigation">
	  <button on:click={previousSlide}>&lt;</button>
	  <button on:click={nextSlide}>&gt;</button>
	</div>
  </main>
  
  <style>
	.carousel-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 400px;
	  overflow: hidden;
	  position: relative;
	  background-color: red;
	  width: 100%;
	 
	}
  
	.carousel-slide {
	  width: 30%;
	  height: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  position: absolute;
	  transition: transform 0.3s ease-in-out;
	  background-color: blue;

	}
  
	
	.carousel-navigation {
	  display: flex;
	  justify-content: center;
	  margin-top: 1rem;
	}
  
	.carousel-navigation button {
	  font-size: 1.5rem;
	  margin: 0 0.5rem;
	  padding: 0.5rem 1rem;
	}
  
	.active {
	  z-index: 1;
	}
  </style>
  

  
  


<!-- <script lang="ts">
export let stories: { title: string, id: number, thumbnail: { url: string } }[] = [];
<script/>

<ul class="story">
	{#each stories as story}
	<li>
		<a href={`/stories/${story.id}`} class="story__link" data-sveltekit-reload>
			<figure class="story__link__frame">
				<div class="story__link__frame-content">
					<img
						src={story.thumbnail.url}
						alt={story.title}
						class="story__link__frame-image"
						width="200"
						height="auto"
					/>
				</div>
				<div class="window-doors-container">
					<img src="/assets/images/window_L.png" alt="Window Left" class="window-door window_L" />
					<img src="/assets/images/window_R.png" alt="Window Left" class="window-door window_R" />
				</div>
			</figure>
			<div class="container_btn">
				<a href={`/stories/${story.id}`} class="centered_btn">Discover</a>
			</div>
			<div class="story__link__plate">
				<h2 class="story__link__plate-title">{story.title}</h2>
			</div>
		</a>
	</li>
  {/each}
  </ul>  -->
<!-- <style>
	@import 'node_modules/slick-carousel/slick/slick.css';

	.story{
		position: relative;
		display:grid ;
		grid-template-columns: repeat(6, 1fr);	
		max-width: 20rem;
		width: 100%;
	}
	li{
		list-style: none;
	}
	.story__link {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: .5em;
		text-decoration: none;
		margin: 1em;
		width: 200px;
	}

	.window-door {
		position: absolute;
		top: 0;
		left: 0;
		transition: transform 1s ease, filter 1s ease;
	}

	.window_L {
		transform-origin: 16.28%;
		width: 100px;
		height: 146px;
	}

	.window_R {
		transform-origin: 86.04%;
		width: 100px;
		height: 146px;
	}

	.story:hover .window_L {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(-110deg);
		-webkit-filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	.story:hover .window_R {
		transform: perspective(1200px) translateZ(0px) translateX(0px) translateY(0px) rotateY(110deg);
		-webkit-filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
		filter: drop-shadow(-10px 6px 5px rgba(0, 0, 0, 0.2));
	}

	.story__link__frame {
		background-image: url('/assets/images/window_bg.webp');
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		margin: 0;
		aspect-ratio: 354/525;
		position: relative;
		overflow: hidden;
		width: 100px;
	}

	.window-doors-container {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 77%;
		left: 36%;
		transform: translate(-50%, -150%);
		z-index: 2;
	}

	.story__link__frame-content {
		width: 71%;
		height: 51%;
		position: absolute;
		top: 70%;
		left: 51%;
		transform: translate(-50%, -50%);
		z-index: -1;
	}

	.story__link__frame-image {
		width: 100%;
		object-fit: cover;
		z-index: -1;
	}
    .story__link__plate{
		background-color: #D2B48C;
		border-radius:.4em;
		width: 200px;
	}
	.story__link__plate-title {
		font-size: .9rem;
		padding: .1em;
		text-decoration: none;
		text-align: center;
		color: #7A1006;
	}
	.container_btn {
    position: relative;
    background-image: url(/assets/images/goldplate.png);
    background-repeat: no-repeat;
	background-position: center center;
	background-size: cover;
	object-fit: contain;
	height: 40px;
	width: 80px;
	}
	.centered_btn {
        font-size: .8em;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -60%);
	}
    a {
		text-decoration: none;
		color: var(--light);
		font-size: 1.2rem;
	}

	@media (max-width: 40rem) {
		.story__link__frame {
			margin: 0 auto;
		}

		.story {
			margin: 1rem 0;
		}
	}
</style>  -->