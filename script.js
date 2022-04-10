alert('Parabéns pela eleição, caro vereador. O partido todo está feliz com a sua vitória. \nQuando tiver algum tempo, venha ao meu escritório, temos que definir como vai ficar aquele orçamento especial para material de escritório.\nÉ nossa missão dar um bom destino a essa verba por isso NÃO PODEMOS deixar que volte 1 centavo para a prefeitura.');
const clickerInput = document.getElementById('clicker');
const clickerCounter = document.getElementById('money');
const expBar = document.getElementById('exp');
const levelOutput = document.getElementById('level');
const mainChat = document.getElementById('chat');
const title = document.getElementById('titulo');
const upgradesContainer = document.getElementById('numbers-left');
const powerUpContainer = document.getElementById('numbers-right')
const output = document.getElementById('output');
let counter = 0;
let expProgress = 0;
let level = 0;
let upgradeCounter = 0;
let powerUpCounter = 0;
let clickPower = 1;


const levelUp = () => {
  expProgress += 10;
  expBar.style.width = `${expProgress}%`
  if (expProgress >= 100) {
    expProgress = 0;
    level += 1;
  }
  levelOutput.innerText = `Caixa: ${level}`
}
const clickerCount = () => {
  counter += clickPower;
  clickerCounter.innerText = `$${counter},00`;
}
const progression = () => {
  if (level >= 5) {
    title.innerHTML = `<a href="https://agenciabrasil.ebc.com.br/geral/noticia/2022-04/pf-faz-operacao-contra-fraude-em-licitacoes-no-governo-de-rondonia" target="blank">Titulo: O licitador de Rondonia.</a>`;
  }
}
const clicker = () => {
  levelUp();
  clickerCount();
  progression();
  upgrade1btn(level);
  clearChat();
  powerUp1btn(level)
}
const clearChat = () => {
  if (counter > 9) {
    mainChat.innerHTML = '';
    mainChat.style.height = '1px';
  }
}
// Upgrade 1
const upgrade1btn = (lvl) => {
  if (lvl >= 5 && upgradeCounter === 0) {
    let upgrade = document.createElement('button');
    upgrade.className = 'btn btn-warning';
    upgrade.id = 'firstUpgrade';
    upgrade.innerText = 'Contratar laranja';
    upgradesContainer.appendChild(upgrade);
    upgrade1text(level);
    upgradeCounter += 1;
  }
}
const upgrade1text = (lvl) => {
  if (lvl >= 5 && upgradeCounter === 0) {
    let upgradeText = document.createElement('p');
    upgradeText.className = 'fst-italic upgradeText';
    upgradeText.id = 'firstUpgradeText'
    upgradeText.innerText = `Por sorte seu priminho acabou de completar 18, está na hora de ter uma carteira assinada.\n(Fonte de renda passiva)`;
    upgradesContainer.appendChild(upgradeText);
  }
}

const upgrade1func = () => {
  setInterval(() => {
    counter += 1;
    clickerCounter.innerText = `$${counter},00`;
  }, 1000)
}
const upgrade1rmv = () => {
  document.getElementById('firstUpgrade').remove()
  document.getElementById('firstUpgradeText').remove()
}
clickerInput.addEventListener('click', clicker);
upgradesContainer.addEventListener('click', (event) => {
  if (event.target.id === 'firstUpgrade') {
    upgrade1func();
    upgrade1rmv();
  }
})
// End upgrade1
// PowerUp1
const powerUp1btn = (lvl) => {
  if (lvl >= 5 && powerUpCounter === 0) {
    let powerUp = document.createElement('button');
    powerUp.className = 'btn btn-light';
    powerUp.id = 'firstPowerUp';
    powerUp.innerText = 'Nota fria ($50,00)';
    powerUpContainer.appendChild(powerUp);
    powerUp1text(level);
    powerUpCounter += 1;
  }
}
const powerUp1text = (lvl) => {
  if (lvl >= 5 && powerUpCounter === 0) {
    let powerUp = document.createElement('p');
    powerUp.className = 'fst-italic upgradeText';
    powerUp.id = 'firstPowerUpText'
    powerUp.innerText = `Um velho amigo seu tem uma papelaria em um bairro afastado. Ele consegue fazer algumas notas para você com o triplo do valor. Um para você, um para o material e um para ele. A matematica nunca falha!\n (Dobra o quanto você pode pegar por vez.)`;
    powerUpContainer.appendChild(powerUp);
  }
}
const powerUp1func = () => {
  clickPower += 1;
}
const powerUp1rmv = () => {
  document.getElementById('firstPowerUp').remove()
  document.getElementById('firstPowerUpText').remove()
}
const powerUp1Cost = () => {
  counter -= 50;
  clickerCounter.innerText = `$${counter},00`;
};
clickerInput.addEventListener('click', clicker);
powerUpContainer.addEventListener('click', (event) => {
  if (event.target.id === 'firstPowerUp') {
    if (counter > 49) {
      powerUp1func();
      powerUp1rmv();
      powerUp1Cost();
    }
  }
})