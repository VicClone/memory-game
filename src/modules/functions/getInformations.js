import { getElementFromDOM } from '../Helpers.js';

export default function () {
  const btnInfo = getElementFromDOM('#btn-info');
  const btnClose = getElementFromDOM('.btn_close');
  const pageInfo = getElementFromDOM('.memory-game__info');
  btnInfo.addEventListener('click', (evt) => {
    evt.preventDefault();
    pageInfo.classList.toggle('hide');
  });
  btnClose.addEventListener('click', (evt) => {
    evt.preventDefault();
    pageInfo.classList.toggle('hide');
  });
}
