import { createSignal, mergeProps, onMount } from "solid-js";
import VisuallyHidden from "@components/VisuallyHidden";
import { Pause, Play } from "@icons/24";
import { formatVideoTime } from "@utils/time";
import type { HTMLVideoEvent, HTMLInputEvent } from "@typedefs/events";
import classes from "./component.module.css";

type PropTypes = {
  src: string;
  muted?: boolean;
  autoplay?: boolean;
  loop?: boolean;
  width?: string | number;
  height?: string | number;
  poster?: string;
};

const defaultProps: PropTypes = {
  src: "",
  muted: false,
  autoplay: false,
  loop: false,
  width: 1920,
  height: 1080,
};

export default function Video(props: PropTypes) {
  const merged = mergeProps(defaultProps, props);

  let video: HTMLVideoElement | undefined = undefined;
  const [paused, setPaused] = createSignal(!merged.autoplay);
  const [currentTime, setCurrentTime] = createSignal(0);
  const [duration, setDuration] = createSignal(0);
  const [isLooping, setIsLooping] = createSignal(merged.loop);

  const currentTimeFormatted = () => formatVideoTime(currentTime());
  const durationFormatted = () => formatVideoTime(duration());
  const progress = () => (currentTime() / duration()) * 100;
  const interfaceOpacity = () => (paused() ? 1 : 0);

  function handleDurationChange(e: HTMLVideoEvent) {
    setDuration(e.currentTarget.duration);
  }

  function handleTimeUpdate(e: HTMLVideoEvent) {
    setCurrentTime(e.currentTarget.currentTime);
    if (duration() === 0) setDuration(e.currentTarget.duration);
    if (!merged.loop) {
      if (paused() !== e.currentTarget.paused)
        setPaused(e.currentTarget.paused);
    }
  }

  function handleClick() {
    if (!video) return;

    setPaused(!paused());
    if (paused()) video.pause();
    else video.play();
  }

  function handleVideoKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") handleClick();
  }

  function handleOnInput(e: HTMLInputEvent) {
    if (!video) return;
    setCurrentTime(Number(e.target.value));
    video.currentTime = currentTime();
  }

  function handleInputMouseDown() {
    setIsLooping(false);
  }

  function handleInputKeyDown(e: KeyboardEvent) {
    if (!video) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const newTime = currentTime() + 1;
      if (newTime >= duration()) setCurrentTime(duration());
      else setCurrentTime(newTime);
      video.currentTime = currentTime();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newTime = currentTime() - 1;
      if (newTime <= 0) setCurrentTime(0);
      else setCurrentTime(newTime);
      video.currentTime = currentTime();
    }
  }

  function handleInputMouseUp() {
    setIsLooping(merged.loop);
    if (merged.loop && !paused()) video?.play();
  }

  onMount(() => {
    if (!video) return;
    let internalDuration = video.duration;
    if (duration() === 0 && internalDuration) {
      setDuration(video.duration);
    }
  });

  return (
    <div class={classes.wrapper} style={{ "--progress": `${progress()}%` }}>
      <video
        ref={video}
        autoplay={merged.autoplay}
        muted={merged.muted}
        loop={isLooping()}
        poster={merged.poster}
        onDurationChange={handleDurationChange}
        onTimeUpdate={handleTimeUpdate}
        onClick={handleClick}
        onKeyDown={handleVideoKeyDown}
        tabIndex={0}
        width={merged.width}
        height={merged.height}
        class={classes.video}
      >
        <source src={merged.src} />
      </video>
      <button
        onClick={handleClick}
        class={classes.play}
        style={{ "--opacity": interfaceOpacity() }}
        aria-label="Play"
      >
        {paused() ? <Play /> : <Pause />}
        <VisuallyHidden as="span">{paused() ? "Play" : "Pause"}</VisuallyHidden>
        <span>
          {currentTimeFormatted()} / {durationFormatted()}
        </span>
      </button>
      <input
        class={classes.progress}
        style={{ "--opacity": interfaceOpacity() }}
        value={currentTime()}
        min={0}
        max={duration()}
        step={0.01}
        oninput={handleOnInput}
        onKeyDown={handleInputKeyDown}
        onMouseDown={handleInputMouseDown}
        onMouseUp={handleInputMouseUp}
        type="range"
        aria-label="Current Time"
        aria-valuetext={currentTimeFormatted().toString()}
      />
    </div>
  );
}
