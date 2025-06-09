<script>
  // Optional: import and initialize color mode functionality
</script>

<header>
  <div id="switches" aria-label="color mode changers">
    <button id="lightSwitch" aria-pressed="false" on:click={() => switchLight()}>Light</button>
    <button id="darkSwitch" aria-pressed="false" on:click={() => switchDark()}>Dark</button>
    <button id="autoSwitch" aria-pressed="true" on:click={() => switchAuto()}>Auto</button>

    <div class="hue-slider">
      <label for="hueSlider">Hue&nbsp;</label>
      <input id="hueSlider" type="range" min="0" max="360" value="222">
    </div>

    <button id="monoSwitch" aria-pressed="false" on:click={() => toggleMono()}>Mono</button>
  </div>
</header>

<h1>Wishes Made</h1>
<div id="wishes-list">
  <!-- Wishes will appear here -->
</div>
