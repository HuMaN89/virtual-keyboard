const init = () => {
  const keys = [
    [
      ['backquote', 'ё', 'Ё', '`', '~'],
      ['dig1', '1', '1', '1', '1'],
      ['dig2', '2', '2', '2', '2'],
      ['dig3', '3', '3', '3', '3'],
      ['dig4', '4', '4', '4', '4'],
      ['dig5', '5', '5', '5', '5'],
      ['dig6', '6', '6', '6', '6'],
      ['dig7', '7', '7', '7', '7'],
      ['dig8', '8', '8', '8', '8'],
      ['dig9', '9', '9', '9', '9'],
      ['dig0', '0', '0', '0', '0'],
      ['minus', '-', '-', '-', '-'],
      ['equal', '=', '=', '=', '='],
      ['backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
      ['key-', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['key-', 'й', 'Й', 'q', 'Q'],
      ['key-', 'ц', 'Ц', 'w', 'W'],
      ['key-', 'у', 'У', 'e', 'E'],
      ['key-', 'к', 'К', 'r', 'R'],
      ['key-', 'е', 'Е', 't', 'T'],
      ['key-', 'н', 'Н', 'y', 'Y'],
      ['key-', 'г', 'Г', 'u', 'U'],
      ['key-', 'ш', 'Ш', 'i', 'I'],
      ['key-', 'щ', 'Щ', 'o', 'O'],
      ['key-', 'з', 'З', 'p', 'P'],
      ['key-', 'х', 'Х', '[', '{'],
      ['key-', 'ъ', 'Ъ', ']', '}'],
      ['key-', '\\', '/', '\\', '||'],
      ['del', 'Del', 'Del', 'Del', 'Del'],
    ],
    [
      ['capslock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['key-', 'ф', 'Ф', 'a', 'A'],
      ['key-', 'ы', 'Ы', 's', 'S'],
      ['key-', 'в', 'В', 'd', 'D'],
      ['key-', 'а', 'А', 'f', 'F'],
      ['key-', 'п', 'П', 'g', 'G'],
      ['key-', 'р', 'Р', 'h', 'H'],
      ['key-', 'о', 'О', 'j', 'J'],
      ['key-', 'л', 'Л', 'k', 'K'],
      ['key-', 'д', 'Д', 'l', 'L'],
      ['key-', 'ж', 'Ж', ';', ':'],
      ['key-', 'э', 'Э', "'", '"'],
      ['enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
      ['left-shift', 'Shift', 'Shift', 'Shift', 'Shift'],
      ['key-', 'я', 'Я', 'z', 'Z'],
      ['key-', 'ч', 'Ч', 'x', 'X'],
      ['key-', 'с', 'С', 'c', 'C'],
      ['key-', 'м', 'М', 'v', 'V'],
      ['key-', 'и', 'И', 'b', 'B'],
      ['key-', 'т', 'Т', 'n', 'N'],
      ['key-', 'ь', 'Ь', 'm', 'M'],
      ['key-', 'б', 'Б', ',', '<'],
      ['key-', 'ю', 'Ю', '.', '>'],
      ['key-', '.', ',', '/', '?'],
      ['arrow-up', '▲', '▲', '▲', '▲'],
      ['right-shift', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
      ['left-ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ['win', 'Win', 'Win', 'Win', 'Win'],
      ['left-alt', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['space', 'Space', 'Space', 'Space', 'Space'],
      ['right-alt', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['arrow-left', '◄', '◄', '◄', '◄'],
      ['arrow-bottom', '▼', '▼', '▼', '▼'],
      ['arrow-right', '►', '►', '►', '►'],
      ['right-ctrl', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
  ];
  const main = document.createElement('div');
  const title = document.createElement('h1');
  const textArea = document.createElement('textarea');
  const keyboard = document.createElement('div');
  const desc = document.createElement('p');
  const lang = document.createElement('p');
  main.classList.add('virtual-keyboard');
  keyboard.classList.add('keyboard');
  title.classList.add('title');
  title.innerText = 'RSS Virtual Keyboard';
  textArea.classList.add('text-area');
  textArea.rows = '5';
  textArea.cols = '50';
  let registr = false;

  desc.innerText = 'Клавиатура создана в операционной системе Windows';
  lang.innerText = 'Для переключения языка комбинация:';
  main.append(title);
  main.append(textArea);
  main.append(keyboard);
  main.append(desc);
  main.append(lang);

  const keysInit = (key = 1) => {
    keyboard.innerHTML = '';
    keys.forEach((ar) => {
      console.log(ar);
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard-row');
      for (let i = 0; i < ar.length; i++) {
        const keyboardKey = document.createElement('span');
        keyboardKey.classList.add('keyboard-key');
        keyboardKey.classList.add(`${ar[i][0]}`);
        keyboardKey.innerText = ar[i][key];
        keyboardRow.append(keyboardKey);
      }
      keyboard.append(keyboardRow);
    });
  };
  keysInit();
  document.body.appendChild(main);

  document.addEventListener('keydown', function (event) {
    if (event.code === 'CapsLock' && !event.repeat) {
      registr ? keysInit(2) : keysInit(1);
      registr = !registr;
    }
    if (
      (event.code === 'ShiftLeft' || event.code === 'ShiftRight') &&
      !event.repeat
    ) {
      registr ? keysInit(2) : keysInit(1);
      registr = !registr;
    }
  });
  document.addEventListener('keyup', function (event) {
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      registr ? keysInit(2) : keysInit(1);
      registr = !registr;
    }
  });
};

init();
