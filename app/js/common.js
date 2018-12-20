const baseWord = {
  1:{
    rus: 'Около \ Приблизительно',
    eng: "About"
  },
  2:{
    rus: 'Ему',
    eng: "Him"
  },
  3:{
    rus: 'Наследовать / Унаследовать / Перенять',
    eng: "Inherit"
  },
}

//глобаьная перменная
window.rndValue = 0;


// Стартовая генерация данных
getRandomInt();
formFill();


/// Кнопка отправить
toSend.onclick = function(){
  working();
}

// Событие при нажатии на Enter
document.onkeypress = function(){
  if(event.keyCode == 13 ){
    working();
  }
}

/// Кнопка подсказка
toHint.onclick = function(){
  alert("wer");
}

function working (){
  let sendWord = document.getElementById('sendWord').value;
  if(sendWord == ""){
    document.getElementById('result').innerHTML = "Ввели неверно, еще пробуйте";
    document.getElementById('result').style.color = "red";
    return;
  }
  sendWord = sendWord[0].toUpperCase() + sendWord.slice(1);
  if (sendWord != baseWord[rndValue].eng){
    document.getElementById('result').innerHTML = "Ввели неверно, еще пробуйте";
    document.getElementById('result').style.color = "red";
  }else{
    document.getElementById('result').innerHTML = "Был правильный ответ";
    document.getElementById('result').style.color = "#11b721";
    setTimeout(function(){     
      document.getElementById('sendWord').value = "";
      document.getElementById('result').innerHTML = "&nbsp;";
      getRandomInt();
      formFill();
    } , 1000);
  }
}


// Заполнение полей после загрузки и нажатия
function formFill(){
  let rusWord = baseWord[rndValue].rus;
  let baseWordRus = document.getElementById('baseWordRus').innerHTML = rusWord;
  /// создать переменную getRandomInt
}

// Случайное числа От мин в оббъекте до макс.
function getRandomInt() {
  let count  = 0;
  for(key in baseWord){
    count++;
  }
  let sumBaseWord = 1 - 0.5 + Math.random() * (count - 1 + 1)
    sumBaseWord = Math.round(sumBaseWord);
    rndValue = sumBaseWord;
}

