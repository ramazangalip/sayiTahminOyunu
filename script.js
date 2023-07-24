var randomMumber = Math.floor(Math.random()* 9999) + 1000;
var guessCount = 0;
var guessLimit = 5; // Sahip Olunan Hak

function checkGuess(){
    var guess = parseInt(document.getElementById("guessInput").value);
    var result = document.getElementById("result");
    if(isNaN(guess)|| guess <1000 || guess>9999 ){
        result.innerHTML = "Lütfen 1000 ile 9999 arasında bir sayı giriniz.";

    }else{
        guessCount++;
        if(guess == randomMumber){
            result.innerHTML = "Tebrikler! Bildiniz"
            document.getElementById("correctSound").play();
            guessCount = guessLimit;
        }else if(guess < randomMumber){
            result.innerHTML = "Çok Düşük"
        }else{
            result.innerHTML = "Cok Yüksek";
        }
        if(guessCount === guessLimit){
            result.innerHTML += "Oyun Bitti Numara şuydu:" +" " +randomMumber + "";

        }else{
            result.innerHTML += " " + (guessLimit - guessCount) + "Tahmin Hakkın Kaldı";
            document.getElementById("wrongSound").play();
        }

    }

    }