const raining = true;
const cold = false;
const temperature = 12;

if (raining) {
  console.log('Don\'t forget your umbrella!');
}

if (cold) {
  console.log('Make sure you pick out a scarf!');
} else if (temperature < 15) {
  console.log('Short sleeves are fine.');
} else {
  console.log('Short sleeves are fine.');
}

console.log('Now you\'re ready to go outside!');

if (temperature < -40 || temperature > 40) {
  console.log('Maybe going outside isn\'t sucha great idea...');
}

if (!raining) {
  console.log('Leave your umbrella at home!');
}



