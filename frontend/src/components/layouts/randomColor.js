import randomColor from 'randomcolor';

const generateBackgroundColors = (length) => {
  return randomColor({
    count: length,
    luminosity: 'random',
    format: 'rgba',
    seed: 'randomColor',
  });
};

export default generateBackgroundColors;
