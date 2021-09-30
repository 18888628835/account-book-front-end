import du from 'public/static/du.mp3';
import pop from 'public/static/pop.mp3';
import success from 'public/static/success.mp3';

export enum SoundType {
  POP = 'pop',
  DU = 'du',
  SUCCESS = 'success',
}
export const backgroundSoundPlay = (type: SoundType) => {
  let audio;
  switch (type) {
    case SoundType.DU:
      audio = new Audio(du);
      break;
    case SoundType.POP:
      audio = new Audio(pop);
      break;
    default:
    case SoundType.SUCCESS:
      audio = new Audio(success);
      break;
  }
  audio.play();
};
