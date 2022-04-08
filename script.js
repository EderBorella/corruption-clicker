const clickerInput = document.getElementById('clicker');
const clickerCounter = document.getElementById('money');
const expBar = document.getElementById('exp');
const levelOutput = document.getElementById('level');
const title = document.getElementById('titulo');

let counter = 0;
let expProgress = 0;
let level = 0;

const levelUp = () =>{
  expProgress += 5;
  expBar.style.width = `${expProgress}%`
  if(expProgress >= 100){
    expProgress = 0;
    level += 1;
  }
  levelOutput.innerText = `Caixa: ${level}`
}
const clickerCount = () => {
  counter += 1;
  clickerCounter.innerText = `$${counter},00`;
}
const progression = () => {
  if(level >= 5){
    title.innerHTML = `<a href="https://agenciabrasil.ebc.com.br/geral/noticia/2022-04/pf-faz-operacao-contra-fraude-em-licitacoes-no-governo-de-rondonia" target="blank">Titulo: O licitador de Rondonia.</a>`;
  }
}
  const clicker = () => {
    levelUp()
    clickerCount()
    progression()
    console.log(counter, expProgress, level)
  }

clickerInput.addEventListener('click', clicker);

