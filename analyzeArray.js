const arrayOfNumbers = (arr) => {
  let obj = {
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
    average: arr.reduce((acc, cur) => acc + cur) / arr.length,
  };
  return obj;
};

export default arrayOfNumbers;
