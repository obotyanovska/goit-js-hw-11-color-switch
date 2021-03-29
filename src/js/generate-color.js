export default function generateColor (data) {
  const min = 0;
  const max = data.length - 1;
  const colorIndex = randomIntegerFromInterval(min, max);
  return data[colorIndex];
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};