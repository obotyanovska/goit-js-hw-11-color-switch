import './styles.css';
import {colors} from './js/colors';
import generateColor from './js/generate-color';

const refs = {
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
  body: document.querySelector('body'),
}

const INTERVAL = 1000;
let intervalId = null;
let isActive = false;

refs.btnStart.addEventListener('click', onBtnStartClick);
refs.btnStop.addEventListener('click', onBtnStopClick);

function onBtnStartClick () {
  if (isActive) {
    return;
  }
  isActive = true;
  refs.btnStart.setAttribute('disabled', true);

  intervalId = setInterval(()=> {
    refs.body.style.backgroundColor = generateColor(colors);
  }, INTERVAL);
}

function onBtnStopClick () {
  isActive = false;
  refs.btnStart.removeAttribute('disabled');
  clearInterval(intervalId);
}