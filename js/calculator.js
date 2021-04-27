const keys = document.querySelectorAll('.data');
var previousData = document.querySelector('.previous-data').innerText;
var presentData = document.querySelector('.present-data').innerText;

keys.forEach((key) => {
  key.addEventListener('click', function(){

    const audio = document.querySelector('.sound');
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    if(key.innerText === '='){
    previousData = presentData + ' = ' + eval(presentData);
    document.querySelector('.previous-data').innerText = previousData;
    presentData = '0';
    document.querySelector('.present-data').innerText = presentData;
  } else if(key.innerText === 'C'){
    presentData = '0';
    document.querySelector('.present-data').innerText = presentData;
  } else if(key.innerText === '+/-'){
    if(presentData.indexOf('-') === 0){
      presentData = presentData.substring(1);
      document.querySelector('.present-data').innerText = presentData;
    } else{
      presentData = '-'.concat(presentData);
      document.querySelector('.present-data').innerText = presentData;
    }
  } else if(key.innerText === 'DEL'){
    if(presentData.length === 1 || presentData === ''){
      presentData = '0';
      document.querySelector('.present-data').innerText = presentData;
    } else{
      presentData = presentData.substring(0, presentData.length - 1);
      document.querySelector('.present-data').innerText = presentData;
    }
  }
  else{
    // Concatinating
    if(presentData === '0'){
      presentData = '';
    }
    presentData = presentData.concat(key.innerText);
    document.querySelector('.present-data').innerText = presentData;
  }
  });
});