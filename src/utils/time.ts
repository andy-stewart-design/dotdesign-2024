export function formatVideoTime(progress: number) {
  const minutes = progress >= 60 ? Math.floor(progress / 60) : 0;

  const seconds =
    progress >= 60 ? Math.floor(progress % 60) : Math.floor(progress);
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${minutes}:${formattedSeconds}`;
}
