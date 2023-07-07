const randomPass = async () => {
  const random = Math.random().toString(36).slice(-8);
  return random;
};

module.exports = randomPass;
