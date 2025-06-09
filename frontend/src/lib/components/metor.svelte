<script>

  export let top = '20%';
  export let left = '80%';
  export let delay = '0s';
</script>

<style>
  .meteor {
    position: absolute;
    width: 4px;
    height: 100px;
    background: linear-gradient(var(--light-yellow), transparent);
    border-radius: 50%;
    transform: rotate(-45deg);
    animation: fall 1.5s ease-out forwards;
    opacity: 0.8;
  }

  @keyframes fall {
    0% {
      transform: translate(0, 0) rotate(-45deg);
      opacity: 0.8;
    }
    100% {
      transform: translate(-300px, 300px) rotate(-45deg);
      opacity: 0;
    }
  }
</style>

<div
  class="meteor"
  style="top: {top}; left: {left}; animation-delay: {delay};"
></div>