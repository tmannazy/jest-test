import cipherText from "../code/caesarCipher";

it("Shifts a character in a string by 1", () => {
  expect(cipherText("Googlez!@")).toBe("Hpphmfa!@");
});
