<!-- Hero.svelte -->
<script>
  import { fade } from 'svelte/transition';
  import { goto } from '$app/navigation';

  function handleWishClick() {
    goto('/make-a-wish');
  }
</script>

<div class="hero-container" transition:fade>
  <h1>Wish Reimagined</h1>
  <img src="/img/aisha-with-star.jpg" alt="Asha with Star" class="asha-image" />
  <div class="glow-star"></div>
  <p>Follow Asha on her journey of hope, magic, and the power of wish.</p>
  <button class="wish-button" on:click={handleWishClick}>Make a Wish</button>
</div>
