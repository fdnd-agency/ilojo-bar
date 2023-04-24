<script>
  import { onMount } from "svelte";
  import { gsap } from "gsap";

  let bgOffset = 0;
  let fgOffset = 0;

  onMount(() => {
    const bgElement = document.querySelector(".parallax-bg");
    const fgElement = document.querySelector(".parallax-fg");
    const bgTimeline = gsap.timeline({ paused: true });
    const fgTimeline = gsap.timeline({ paused: true });
    bgTimeline.to(bgElement, {
      yPercent: -100,
      ease: "none",
      scale: 1.1,
      opacity: 0.7,
    })
    .to(bgElement, {
        scale: 1.5,
      }); 
    fgTimeline.to(fgElement, {
      yPercent: -2000,
      ease: "none",
      scale: 1.2,
      opacity: 0.1,
    });

    window.addEventListener("scroll", () => {
      bgOffset = window.pageYOffset;
      fgOffset = window.pageYOffset;
      const bgHeight = bgElement?.getBoundingClientRect()?.height;
      const fgHeight = fgElement?.getBoundingClientRect()?.height;
      if (bgHeight) {
        const bgProgress = bgOffset / bgHeight;
        bgTimeline.progress(bgProgress);
      }
      if (fgHeight) {
        const fgProgress = fgOffset / fgHeight;
        fgTimeline.progress(fgProgress);
      }
    });
  });
</script>

<style>
  .parallax-container {
    position: relative;
    overflow: hidden;
    height: 100vh;
  }

  .parallax-bg {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/ilojo_bar_bw_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: white;
  }
  .background-layer{
    margin: 0 auto;
    font-size: 3em;
  }

  .parallax-fg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/assets/images/background-gevel-01.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .parallax-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    color: #fff;
  }
</style>
<div class="parallax-container">
  <div class="parallax-bg">
    <div class="parallax-content">
      <h1 class="background-layer">Background Layer</h1>
      <p>This content will be displayed on top of the background image.</p>
    </div>
  </div>
  <div class="parallax-fg">
    <div class="parallax-content">
      <h1>Foreground Layer</h1>
      <p>This content will be displayed on top of the foreground image.</p>
    </div>
  </div>
</div>
