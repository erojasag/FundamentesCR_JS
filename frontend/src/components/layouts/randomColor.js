import randomColor from 'randomcolor';

const generateBackgroundColors = (length) => {
  return randomColor({
    count: length,
    luminosity: 'random',
    hue: 'red, purple',
    format: 'rgba',
    alpha: 0.5,
  });
};

export default generateBackgroundColors;
