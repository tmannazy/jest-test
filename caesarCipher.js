const rotateText = (offset) => {
  const getCorrectOffset = offset % 26 < 0 ? (offset % 26) + 26 : offset % 26;

  return function (str) {
    let textShifted;
    let base = str.match(/[A-Z]/)
      ? "A".charCodeAt(0)
      : str.match(/[a-z]/)
      ? "a".charCodeAt(0)
      : undefined;

    if (base) {
      let charLocation = str.charCodeAt(0);
      charLocation -= base;
      charLocation += getCorrectOffset;
      charLocation %= 26;
      charLocation += base;
      textShifted = String.fromCharCode(charLocation);
    } else {
      textShifted = str;
    }
    return textShifted;
  };
};

function cipherText(str) {
  const moveChar = rotateText(1);
  return str.split("").map(moveChar).join("");
}

export default cipherText;
