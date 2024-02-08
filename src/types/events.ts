export type HTMLVideoEvent = Event & {
  currentTarget: HTMLVideoElement;
  target: Element;
};

export type HTMLInputEvent = InputEvent & {
  currentTarget: HTMLInputElement;
  target: HTMLInputElement;
};
