import { Howl } from 'howler';

export const playAudio = (url) => {
  if (url) {
    const sound = new Howl({ src: [url] });
    sound.play();
  }
};
