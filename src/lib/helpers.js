export function stringToColorHSL(string) {
  let stringUniqueHash = [...string].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0);
  let h = stringUniqueHash % 360;
  return `hsl(${h}, 95%, 35%)`;
}

export function reverseString(string) {
  return [...string].reverse().join('');
}

export function stringToDegree(string) {
  return [...string].reduce((acc, char) => {
    return char.charCodeAt(0) + ((acc << 5) - acc);
  }, 0) % 360;
}