import axios from 'axios';

export function getExoPlanets() {
  return axios.get('https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json');
}

