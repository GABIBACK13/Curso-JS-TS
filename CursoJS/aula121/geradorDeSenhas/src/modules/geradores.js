function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const specialChars = '!@#$%^&*()_+{}:?><;';
const upercaseChar = () => String.fromCharCode(randomInt(65, 90));
const lowercaseChar = () => String.fromCharCode(randomInt(97, 122));
const numberChar = () => String.fromCharCode(randomInt(48, 57));
const specialChar = () => specialChars[randomInt(0, specialChars.length - 1)];

export default function createPassword(length, upercase, lowercase, numbers, special) {
  const chars = [];
  for (let i = 0; i < length; i++) {
    upercase && chars.push(upercaseChar());
    lowercase && chars.push(lowercaseChar());
    numbers && chars.push(numberChar());
    special && chars.push(specialChar());
  }
  return chars.slice(0, length).sort(() => Math.random() - 0.5).join('');
};