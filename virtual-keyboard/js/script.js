const init = () => {
  const keys = [
    [
      ['ё', 'Ё', '`', '~'],
      ['1', '1', '1', '1'],
      ['2', '2', '2', '2'],
      ['3', '3', '3', '3'],
      ['4', '4', '4', '4'],
      ['5', '5', '5', '5'],
      ['6', '6', '6', '6'],
      ['7', '7', '7', '7'],
      ['8', '8', '8', '8'],
      ['9', '9', '9', '9'],
      ['0', '0', '0', '0'],
      ['-', '-', '-', '-'],
      ['=', '=', '=', '='],
      ['Backspace', 'Backspace', 'Backspace', 'Backspace'],
    ],
    [
      ['Tab', 'Tab', 'Tab', 'Tab'],
      ['й', 'Й', 'q', 'Q'],
      ['ц', 'Ц', 'w', 'W'],
      ['у', 'У', 'e', 'E'],
      ['к', 'К', 'r', 'R'],
      ['е', 'Е', 't', 'T'],
      ['н', 'Н', 'y', 'Y'],
      ['г', 'Г', 'u', 'U'],
      ['ш', 'Ш', 'i', 'I'],
      ['щ', 'Щ', 'o', 'O'],
      ['з', 'З', 'p', 'P'],
      ['х', 'Х', '[', '{'],
      ['ъ', 'Ъ', ']', '}'],
      ['\\', '/', '\\', '||'],
    ],
    [
      ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'],
      ['ф', 'Ф', 'a', 'A'],
      ['ы', 'Ы', 's', 'S'],
      ['в', 'В', 'd', 'D'],
      ['а', 'А', 'f', 'F'],
      ['п', 'П', 'g', 'G'],
      ['р', 'Р', 'h', 'H'],
      ['о', 'О', 'j', 'J'],
      ['л', 'Л', 'k', 'K'],
      ['д', 'Д', 'l', 'L'],
      ['ж', 'Ж', ';', ':'],
      ['э', 'Э', "'", '"'],
      ['Enter', 'Enter', 'Enter', 'Enter'],
    ],
    [
      ['left Shift', 'left Shift', 'left Shift', 'left Shift'],
      ['я', 'Я', 'z', 'Z'],
      ['ч', 'Ч', 'x', 'X'],
      ['с', 'С', 'c', 'C'],
      ['м', 'М', 'v', 'V'],
      ['и', 'И', 'b', 'B'],
      ['т', 'Т', 'n', 'N'],
      ['ь', 'Ь', 'm', 'M'],
      ['б', 'Б', ',', '<'],
      ['ю', 'Ю', '.', '>'],
      ['.', ',', '/', '?'],
      ['▲', '▲', '▲', '▲'],
      ['right Shift', 'right Shift', 'right Shift', 'right Shift'],
    ],
    [
      ['left CTRL', 'left CTRL', 'left CTRL', 'left CTRL'],
      ['Win', 'Win', 'Win', 'Win'],
      ['Left ALT', 'Left ALT', 'Left ALT', 'Left ALT'],
      ['SPace', 'SPace', 'SPace', 'SPace'],
      ['Right ALT', 'Right ALT', 'Right ALT', 'Right ALT'],
      ['◄', '◄', '◄', '◄'],
      ['▼', '▼', '▼', '▼'],
      ['►', '►', '►', '►'],
      ['right CTRL', 'right CTRL', 'right CTRL', 'right CTRL'],
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
  desc.innerText = 'Клавиатура создана в операционной системе Windows';
  lang.innerText = 'Для переключения языка комбинация:';
  main.append(title);
  main.append(textArea);
  main.append(keyboard);
  main.append(desc);
  main.append(lang);

  // keys.forEach((el, idx) => {
  //   const keyboardRow = document.createElement('div');
  //   el.forEach((el1, idx1) => {
  //     const keyboardRowElem = document.createElement('span');
  //     keyboardRowElem.innerText = el1[idx1];
  //     keyboardRow.append(keyboardRowElem);
  //   });
  //   keyboard.append(keyboardRow);
  // });

  keys.forEach((ar) => {
    console.log(ar);
    const keyboardRow = document.createElement('div');
    for (let i = 0; i < ar.length; i++) {
      const keyboardKey = document.createElement('span');
      keyboardKey.innerText = ar[i][0];
      console.log(ar[i][0]);
      keyboardRow.append(keyboardKey);
    }
    keyboard.append(keyboardRow);
  });

  document.body.appendChild(main);
};

init();
