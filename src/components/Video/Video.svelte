<script lang="ts">
  export let src: string;
  export let type = "video/mp4";

  let currentTime = 0;
  let duration: number;
  let paused = true;

  function togglePlay() {
    paused = !paused;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") togglePlay();
  }
</script>

<div class="wrapper" style={`--progress: ${(currentTime / duration) * 100}%`}>
  <video
    bind:currentTime
    bind:duration
    bind:paused
    on:click={togglePlay}
    on:keydown={handleKeydown}
    playsinline
    tabindex="0"
  >
    <source {src} {type} />
    <track kind="captions" />
  </video>
  <input
    type="range"
    bind:value={currentTime}
    min="0"
    max={duration}
    step="0.01"
    aria-label="Current Time"
  />
</div>

<style scoped>
  .wrapper {
    --input-height: 1rem;

    position: relative;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    margin: 0;

    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--input-height);

    &::-webkit-slider-runnable-track {
      height: var(--input-height);
      background: linear-gradient(
        to right,
        var(--neutral-50) 0%,
        var(--neutral-50) var(--progress),
        transparent var(--progress)
      );
    }

    &::-moz-range-track {
      height: var(--input-height);
      background: linear-gradient(
        to right,
        var(--neutral-50) 0%,
        var(--neutral-50) var(--progress),
        transparent var(--progress)
      );
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      /* margin-top: -1rem; */
      background-color: transparent;
      height: var(--input-height);
      width: 1rem;
    }
  }
</style>
