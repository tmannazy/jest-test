const capitalize = (word) => {
  const strRemainder = word.substring(1);
  const strFirstLetter = word.substring(0, 1).toUpperCase();
  const capitalized = strFirstLetter + strRemainder;
  return capitalized;
};

export default capitalize;
