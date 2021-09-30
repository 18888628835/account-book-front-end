import du from 'public/static/du.mp3';
import pop from 'public/static/pop.mp3';
import success from 'public/static/success.mp3';
import jump from 'public/static/jump.mp3';

export enum SoundType {
  POP = 'pop',
  DU = 'du',
  SUCCESS = 'success',
  JUMP = 'jump',
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
    case SoundType.SUCCESS:
      audio = new Audio(success);
      break;
    case SoundType.JUMP:
      audio = new Audio(jump);
      break;
    default:
      break;
  }
  audio.play();
};
