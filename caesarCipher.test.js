import cipherText from "./caesarCipher";

it("Shifts a character in a string by 1", () => {
  expect(cipherText("Googlez!@")).toBe("Hpphmfa!@");
});
