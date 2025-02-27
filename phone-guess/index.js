const phones = [
  {phoneModel:'Apple iPhone 16',ram:'8GB',camera:'48MP',chip:'A18 Bionic Chip',screenSize:'6.1in Screen',screenFPS:'120hz',battery:'3800mAh',brand:'Apple' ,photo:'<img src="phone-pics/iphone-16.png">' },
  {phoneModel:'Apple iPhone 15',ram:'6GB',camera:'48MP',chip:'A16 Bionic Chip',screenSize:'6.1in Screen',screenFPS:'120hz',battery:'3300  mAh',brand:'Apple' ,photo:'<img src="phone-pics/iphone-15.png">' },
  {phoneModel:'Apple iPhone 14',ram:'6GB',camera:'Dual 12MP',chip:'A15 Bionic Chip',screenSize:'6.1in Screen',screenFPS:'60hz',battery:'3279mAh',brand:'Apple' ,photo:'<img src="phone-pics/iphone-14.png">' },
  {phoneModel:'Apple iPhone 13',ram:'4GB',camera:'Dual 12MP',chip:'A15 Bionic Chip',screenSize:'6.1in Screen',screenFPS:'60hz',battery:'3240mAh',brand:'Apple',photo:'<img src="phone-pics/iphone-13.png">'},
  {phoneModel:'Samsung Galaxy S25',ram:'12GB',camera:'50MP',chip:' Snapdragon 8 Elite',screenSize:'6.2in Screen',screenFPS:'120hz',battery:'4000mAh',brand:'Samsung',photo:'<img src="phone-pics/samsung-s25.png">'},
  {phoneModel:'Samsung Galaxy S24',ram:'8GB',camera:'50MP',chip:'Exynos 2400 ',screenSize:'6.1in Screen',screenFPS:'120hz',battery:'3900mAh',brand:'Samsung',photo:'<img src="phone-pics/samsung-s24.png">'},
  {phoneModel:'Samsung Galaxy S23',ram:'8GB',camera:'50MP',chip:'Snapdragon 8 Gen 2',screenSize:'6.1in Screen',screenFPS:'120hz',battery:'3900mAh',brand:'Samsung',photo:'<img src="phone-pics/samsung-s23.png">'}
];

let guesses = 3;
let chosenPhone;
let specIndex = 2;
let allChosenSpecs;
let gameLock = false;

function choosePhone(){
const phoneSelector = Math.floor(Math.random()*phones.length)
chosenPhone = phones[phoneSelector];
allChosenSpecs = [chosenPhone.ram,chosenPhone.camera,chosenPhone.screenSize, chosenPhone.battery, chosenPhone.chip,chosenPhone.brand, chosenPhone.phoneModel]
document.getElementById('specs').innerHTML = allChosenSpecs[0]+' RAM, '+allChosenSpecs[1]+' Camera, '+ allChosenSpecs[2]+' Size';
  gameLock = false;
}

function guessPhone(){
  const phoneGuess = document.getElementById('phoneSelect').value
  if(phoneGuess === chosenPhone.phoneModel && gameLock === false){
    document.querySelector('.results').innerHTML = `<p>Correct the phone was ${phoneGuess}</p><br>${chosenPhone.photo}<button onclick = playAgain();>Play Again</button>`
    gameLock = true;
  } else if(phoneGuess !== chosenPhone.phoneModel && gameLock === false){
    specIndex++;
    document.querySelector('.specs').innerHTML += ', ' + allChosenSpecs[specIndex]; 
    if(guesses <= 0) {
      document.querySelector('.results').innerHTML = ` <p>You lose the phone was ${chosenPhone.phoneModel}</p><br>${chosenPhone.photo}<br><button onclick = playAgain();>Play Again</button>`;
      gameLock = true;
    }
    guesses--;
  } else{
    alert('The Game has ended please press play again');
  }
}

function playAgain(){
  document.querySelector('.results').innerHTML = ''
  document.querySelector('.phonePhoto').innerHTML = ''
  document.getElementById('specs').innerHTML = ''
  guesses = 3;
  choosePhone()
}

document.addEventListener("DOMContentLoaded", function(){
  choosePhone()
});