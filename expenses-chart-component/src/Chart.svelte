<script>
  import { onMount } from "svelte";
  import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } from "chart.js";
  import Footer from "./Footer.svelte";
  import { chartConfig } from "./utils";

  let canvas;

  onMount(() => {
    Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

    new Chart(canvas, chartConfig);
  });
</script>

<main>
  <h1>Spending - Last 7 days</h1>

  <canvas aria-label="Your weekly expenses" role="img" bind:this={canvas} />

  <Footer />
</main>

<style scoped>
  main {
    background-color: var(--color-pale-cream);
    padding: 1.8rem clamp(1.25rem, 7vw, 2.3rem);
    border-radius: clamp(10px, 7vw, 20px);
  }

  h1 {
    color: var(--color-dark-brown);
    font-size: clamp(24px, 5vw, 32px);
    margin-bottom: 1.4rem;
  }

  canvas {
    max-width: 100%;
    height: auto;
  }
</style>
