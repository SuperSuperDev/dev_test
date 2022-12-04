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
  return (
    [...string].reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0) % 360
  );
}

export function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}

export function planetRadiustoMiles(earthRadii) {
  return Math.round(earthRadii * 3959);
}
