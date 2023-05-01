const init = () => {
  const keys = [
    [
      ['Backquote', 'ё', 'Ё', '`', '~'],
      ['Digit1', '1', '1', '1', '1'],
      ['Digit2', '2', '2', '2', '2'],
      ['Digit3', '3', '3', '3', '3'],
      ['Digit4', '4', '4', '4', '4'],
      ['Digit5', '5', '5', '5', '5'],
      ['Digit6', '6', '6', '6', '6'],
      ['Digit7', '7', '7', '7', '7'],
      ['Digit8', '8', '8', '8', '8'],
      ['Digit9', '9', '9', '9', '9'],
      ['Digit0', '0', '0', '0', '0'],
      ['Minus', '-', '-', '-', '-'],
      ['Equal', '=', '=', '=', '='],
      ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
      ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'],
      ['KeyQ', 'й', 'Й', 'q', 'Q'],
      ['KeyW', 'ц', 'Ц', 'w', 'W'],
      ['KeyE', 'у', 'У', 'e', 'E'],
      ['KeyR', 'к', 'К', 'r', 'R'],
      ['KeyT', 'е', 'Е', 't', 'T'],
      ['KeyY', 'н', 'Н', 'y', 'Y'],
      ['KeyU', 'г', 'Г', 'u', 'U'],
      ['KeyI', 'ш', 'Ш', 'i', 'I'],
      ['KeyO', 'щ', 'Щ', 'o', 'O'],
      ['KeyP', 'з', 'З', 'p', 'P'],
      ['BracketLeft', 'х', 'Х', '[', '{'],
      ['BracketRight', 'ъ', 'Ъ', ']', '}'],
      ['Backslash', '\\', '/', '\\', '||'],
      ['Delete', 'Del', 'Del', 'Del', 'Del'],
    ],
    [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['KeyA', 'ф', 'Ф', 'a', 'A'],
      ['KeyS', 'ы', 'Ы', 's', 'S'],
      ['KeyD', 'в', 'В', 'd', 'D'],
      ['KeyF', 'а', 'А', 'f', 'F'],
      ['KeyG', 'п', 'П', 'g', 'G'],
      ['KeyH', 'р', 'Р', 'h', 'H'],
      ['KeyJ', 'о', 'О', 'j', 'J'],
      ['KeyK', 'л', 'Л', 'k', 'K'],
      ['KeyL', 'д', 'Д', 'l', 'L'],
      ['Semicolon', 'ж', 'Ж', ';', ':'],
      ['Quote', 'э', 'Э', "'", '"'],
      ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
      ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'],
      ['KeyZ', 'я', 'Я', 'z', 'Z'],
      ['KeyX', 'ч', 'Ч', 'x', 'X'],
      ['KeyC', 'с', 'С', 'c', 'C'],
      ['KeyV', 'м', 'М', 'v', 'V'],
      ['KeyB', 'и', 'И', 'b', 'B'],
      ['KeyN', 'т', 'Т', 'n', 'N'],
      ['KeyM', 'ь', 'Ь', 'm', 'M'],
      ['Comma', 'б', 'Б', ',', '<'],
      ['Period', 'ю', 'Ю', '.', '>'],
      ['Slash', '.', ',', '/', '?'],
      ['ArrowUp', '▲', '▲', '▲', '▲'],
      ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
    ],
    [
      ['ControlLeft', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
      ['MetaLeft', 'Win', 'Win', 'Win', 'Win'],
      ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['Space', 'Space', 'Space', 'Space', 'Space'],
      ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
      ['ArrowLeft', '◄', '◄', '◄', '◄'],
      ['ArrowDown', '▼', '▼', '▼', '▼'],
      ['ArrowRight', '►', '►', '►', '►'],
      ['ControlRight', 'Ctrl', 'Ctrl', 'Ctrl', 'Ctrl'],
    ],
  ];
  const inactive = [
    'F1',
    'F2',
    'F3',
    'F4',
    'F5',
    'F6',
    'F7',
    'F8',
    'F9',
    'F10',
    'F11',
    'F12',
    'Escape',
    'NumLock',
    'Numpad0',
    'Numpad1',
    'Numpad2',
    'Numpad3',
    'Numpad4',
    'Numpad5',
    'Numpad6',
    'Numpad7',
    'Numpad8',
    'Numpad9',
    'NumpadDivide',
    'NumpadMultiply',
    'NumpadSubtract',
    'NumpadAdd',
    'Home',
    'PageUp',
    'PageDown',
    'End',
    'ContextMenu',
    'Insert',
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

  if (window.localStorage.getItem('langKey') === 'undefined') {
    window.localStorage.setItem('langKey', '1');
  }
  let key = window.localStorage.getItem('langKey');
  console.log(key);
  desc.innerText = 'Клавиатура создана в операционной системе Windows';
  lang.innerText = 'Для переключения языка комбинация:  Ctrl + Alt';
  main.append(title);
  main.append(textArea);
  main.append(keyboard);
  main.append(desc);
  main.append(lang);

  const keysInit = (event, value = 'dawn') => {
    if (event.ctrlKey && event.altKey) {
      if (key === 1) {
        window.localStorage.setItem('langKey', '3');
        key = window.localStorage.getItem('langKey');
      } else if (key === 2) {
        window.localStorage.setItem('langKey', '4');
        key = window.localStorage.getItem('langKey');
      } else if (key === 3) {
        window.localStorage.setItem('langKey', '1');
        key = window.localStorage.getItem('langKey');
      } else {
        window.localStorage.setItem('langKey', '2');
        key = window.localStorage.getItem('langKey');
      }
    }
    if (event.key === 'CapsLock' && value === 'dawn') {
      registr ? (key = 1) : (key = 2);
      registr = !registr;
    }
    if (event.key === 'Shift') {
      registr ? (key = 1) : (key = 2);
      registr = !registr;
    }
    if (inactive.includes(event.code)) {
      return 'inactive';
    }
    keyboard.innerHTML = '';
    keys.forEach((ar) => {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard-row');
      for (let i = 0; i < ar.length; i++) {
        const keyboardKey = document.createElement('span');
        keyboardKey.classList.add('keyboard-key');
        keyboardKey.classList.add(`${ar[i][0]}`);

        keyboardKey.addEventListener('mousedown', () => {
          if (
            ar[i][key] !== 'CapsLock' &&
            ar[i][key] !== 'Shift' &&
            ar[i][key] !== 'Enter' &&
            ar[i][key] !== 'Tab' &&
            ar[i][key] !== 'Backspace' &&
            ar[i][key] !== 'Delete' &&
            ar[i][key] !== 'Ctrl' &&
            ar[i][key] !== 'Win' &&
            ar[i][key] !== 'Del' &&
            ar[i][key] !== 'Space' &&
            ar[i][key] !== 'Alt'
          ) {
            textArea.innerHTML += ar[i][key];
          }

          if (ar[i][key] === 'Tab') {
            textArea.innerHTML += '  ';
          }
          keyboardKey.classList.add(`active`);
        });

        keyboardKey.addEventListener('mouseup', () => {
          keyboardKey.classList.remove(`active`);
        });
        if (event.code === ar[i][0] && value === 'dawn') {
          keyboardKey.classList.add(`active`);
        }
        if (
          registr === true &&
          ar[i][0] === 'CapsLock' &&
          event.key !== 'Shift'
        ) {
          keyboardKey.classList.add(`active`);
        }
        keyboardKey.innerText = ar[i][key];

        keyboardRow.append(keyboardKey);
      }
      keyboard.append(keyboardRow);
    });
  };
  keysInit({ code: ' ' });
  document.body.appendChild(main);

  document.addEventListener('keydown', function (event) {
    event.key === 'Tab' || event.key === 'Alt' ? event.preventDefault() : null;
    if (
      !inactive.includes(event.key) &&
      event.key !== 'CapsLock' &&
      event.key !== 'Shift' &&
      event.key !== 'Control' &&
      event.key !== 'Enter' &&
      event.key !== 'Tab' &&
      event.key !== 'Backspace' &&
      event.key !== 'Delete' &&
      event.key !== 'ArrowRight' &&
      event.key !== 'ArrowDown' &&
      event.key !== 'ArrowLeft' &&
      event.key !== 'ArrowUp' &&
      event.key !== 'Alt'
    ) {
      textArea.innerHTML += event.key;
    }
    if (event.key === 'Tab') {
      textArea.innerHTML += '  ';
    }
    if (event.key === 'ArrowUp') {
      textArea.innerHTML += '▲';
    }
    if (event.key === 'ArrowLeft') {
      textArea.innerHTML += '◄';
    }
    if (event.key === 'ArrowDown') {
      textArea.innerHTML += '▼';
    }
    if (event.key === 'ArrowRight') {
      textArea.innerHTML += '►';
    }
    keysInit(event);
  });
  document.addEventListener('keyup', function (event) {
    event.preventDefault();
    keysInit(event, 'up');
  });
};

init();
