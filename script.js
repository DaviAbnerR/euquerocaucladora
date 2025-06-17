const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.dataset.value;
    const action = btn.dataset.action;
    if (value) {
      display.value += value;
    } else if (action) {
      if (action === 'clear') {
        display.value = '';
      } else if (action === 'backspace') {
        display.value = display.value.slice(0, -1);
      } else if (action === 'equals') {
        try {
          display.value = eval(display.value).toString();
        } catch (e) {
          display.value = 'Erro';
        }
      }
    }
  });
});
