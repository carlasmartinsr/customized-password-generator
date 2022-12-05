


 

let passOne = document.getElementById("pass-one");
let passTwo = document.getElementById("pass-two");
let btnEl = document.getElementById("btn-el");
let darkMode = document.getElementById("dark-mode");
let containerEl = document.getElementById("container-el");
let btnPassOne = document.getElementById("btn-pass-one");
let btnPassTwo =document.getElementById("btn-pass-two");
let includeNumbers = document.getElementById("numbers");
let includeSymbols =document.getElementById("symbols");
let length = document.getElementById("length");
let lengthResult = document.getElementById("length-result");



btnEl.addEventListener("click",assignPassword);
darkMode.addEventListener("click",changeMode);


function changeMode(){
    if (darkMode.checked == true){
        containerEl.classList.add('dark');
        containerEl.classList.remove('light')
     } else {
        containerEl.classList.remove('dark');
        containerEl.classList.add('light')
  }
}

length.addEventListener('change', (e) => {
  lengthResult.innerText  = e.target.value                   
})


function randomSymbols() {
    const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function randomNumbers(){
    const numbers=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function randomCharacters(){
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
    return characters[Math.floor(Math.random() * characters.length)];
}
function assignPassword(){
    passOne.value=""
    passOne.value= randomPassword()
    passTwo.value=""
    passTwo.value= randomPassword()
    }

function randomPassword(){
    let randomCharacter ="";
    for (i=0; i<lengthResult.innerText;i++){
         if (includeNumbers.checked && includeSymbols.checked){
            randomCharacter+= randomCharacters();
        }else if (includeNumbers.checked){
              randomCharacter +=randomNumbers();
        } else {
              randomCharacter +=randomSymbols();
        } 
       
    }
    return randomCharacter
}


btnPassOne.addEventListener("click", copyPassOne);
btnPassTwo.addEventListener("click",copyPassTwo)


function copy(){
  document.execCommand("copy");
  alert("Password successfully copied " ); 
}

function copyPassOne() {
  passOne.select();
  copy();
}

function copyPassTwo(){
    passTwo.select()
    copy(); 
}








