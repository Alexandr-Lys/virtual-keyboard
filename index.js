class Keyboard {
  constructor() {
    this.renderFlag = 0;
    this.capsLockFlag = 0;
    this.caretStartPosition;
  }
  pageInit() {
    let template = '';
    let page = document.querySelector('body');
    template += '<div class="container"><h1 class="title">RSS Виртуальная клавиатура</h1><textarea name="keyboard-area" id="area"></textarea><div class="keyboard-block"></div><p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p></div>';
    page.innerHTML = template;
    this.keyboardInit();
  }
  keyboardInit() {
    this.generateKeyboardButtons('eng');
    this.addClickKeyboardEventListener();
  }
  generateKeyboardButtons(language) {
    if (this.renderFlag === 0) {
      const keyboardBlock = document.querySelector('.keyboard-block')
      let arrButtons;
      let button;
      if (localStorage.language === 'eng') {
        arrButtons = [
          ['Backquote', '`', '~'],
          ['Digit1', '1', '!'],
          ['Digit2', '2', '@'],
          ['Digit3', '3', '#'],
          ['Digit4', '4', '$'],
          ['Digit5', '5', '%'],
          ['Digit6', '6', '^'],
          ['Digit7', '7', '&'],
          ['Digit8', '8', '*'],
          ['Digit9', '9', '('],
          ['Digit0', '0', ')'],
          ['Minus', '-', '_'],
          ['Equal', '=', '+'],
          ['Backspace', 'Backspace'],
          ['Tab', 'Tab'],
          ['KeyQ', 'q', 'Q'],
          ['KeyW', 'w', 'W'],
          ['KeyE', 'e', 'E'],
          ['KeyR', 'r', 'R'],
          ['KeyT', 't', 'T'],
          ['KeyY', 'y', 'Y'],
          ['KeyU', 'u', 'U'],
          ['KeyI', 'i', 'I'],
          ['KeyO', 'o', 'O'],
          ['KeyP', 'p', 'P'],
          ['BracketLeft', '[', '{'],
          ['BracketRight', ']', '}'],
          ['Backslash', '\\', '|'],
          ['Delete', 'Del'],
          ['CapsLock', 'CapsLock'],
          ['KeyA', 'a', 'A'],
          ['KeyS', 's', 'S'],
          ['KeyD', 'd', 'D'],
          ['KeyF', 'f', 'F'],
          ['KeyG', 'g', 'G'],
          ['KeyH', 'h', 'H'],
          ['KeyJ', 'j', 'J'],
          ['KeyK', 'k', 'K'],
          ['KeyL', 'l', 'L'],
          ['Semicolon', ';', ':'],
          ['Quote', '\'', '"'],
          ['Enter', 'Enter'],
          ['ShiftLeft', 'Shift'],
          ['KeyZ', 'z', 'Z'],
          ['KeyX', 'x', 'X'],
          ['KeyC', 'c', 'C'],
          ['KeyV', 'v', 'V'],
          ['KeyB', 'b', 'B'],
          ['KeyN', 'n', 'N'],
          ['KeyM', 'm', 'M'],
          ['Comma', ',', '<'],
          ['Period', '.', '>'],
          ['Slash', '/', '?'],
          ['ArrowUp', '▲'],
          ['ShiftRight', 'Shift'],
          ['ControlLeft', 'Ctrl'],
          ['MetaLeft', 'Win'],
          ['AltLeft', 'Alt'],
          ['Space', ' '],
          ['AltRight', 'Alt'],
          ['ArrowLeft', '◄'],
          ['ArrowDown', '▼'],
          ['ArrowRight', '►'],
          ['ControlRight', 'Ctrl'],
        ]
      } else {
        arrButtons = [
          ['Backquote', 'ё', 'Ё'],
          ['Digit1', '1', '!'],
          ['Digit2', '2', '"'],
          ['Digit3', '3', '№'],
          ['Digit4', '4', ';'],
          ['Digit5', '5', '%'],
          ['Digit6', '6', ':'],
          ['Digit7', '7', '?'],
          ['Digit8', '8', '*'],
          ['Digit9', '9', '('],
          ['Digit0', '0', ')'],
          ['Minus', '-', '_'],
          ['Equal', '=', '+'],
          ['Backspace', 'Backspace'],
          ['Tab', 'Tab'],
          ['KeyQ', 'й', 'Й'],
          ['KeyW', 'ц', 'Ц'],
          ['KeyE', 'у', 'У'],
          ['KeyR', 'к', 'К'],
          ['KeyT', 'е', 'Е'],
          ['KeyY', 'н', 'Н'],
          ['KeyU', 'г', 'Г'],
          ['KeyI', 'ш', 'Ш'],
          ['KeyO', 'щ', 'Щ'],
          ['KeyP', 'з', 'З'],
          ['BracketLeft', 'х', 'Х'],
          ['BracketRight', 'ъ', 'Ъ'],
          ['Backslash', '\\', '/'],
          ['Delete', 'Del'],
          ['CapsLock', 'CapsLock'],
          ['KeyA', 'ф', 'Ф'],
          ['KeyS', 'ы', 'Ы'],
          ['KeyD', 'в', 'В'],
          ['KeyF', 'а', 'А'],
          ['KeyG', 'п', 'П'],
          ['KeyH', 'р', 'Р'],
          ['KeyJ', 'о', 'О'],
          ['KeyK', 'л', 'Л'],
          ['KeyL', 'д', 'Д'],
          ['Semicolon', 'ж', 'Ж'],
          ['Quote', 'э', 'Э'],
          ['Enter', 'Enter'],
          ['ShiftLeft', 'Shift'],
          ['KeyZ', 'я', 'Я'],
          ['KeyX', 'ч', 'Ч'],
          ['KeyC', 'с', 'С'],
          ['KeyV', 'м', 'М'],
          ['KeyB', 'и', 'И'],
          ['KeyN', 'т', 'Т'],
          ['KeyM', 'ь', 'Ь'],
          ['Comma', 'б', 'Б'],
          ['Period', 'ю', 'Ю'],
          ['Slash', '.', ','],
          ['ArrowUp', '▲'],
          ['ShiftRight', 'Shift'],
          ['ControlLeft', 'Ctrl'],
          ['MetaLeft', 'Win'],
          ['AltLeft', 'Alt'],
          ['Space', ' '],
          ['AltRight', 'Alt'],
          ['ArrowLeft', '◄'],
          ['ArrowDown', '▼'],
          ['ArrowRight', '►'],
          ['ControlRight', 'Ctrl'],
        ]
      }
      for (let i = 0; i < arrButtons.length; i++) {
        let shiftCapsLogic;
        if (arrButtons[i][2]) {
          if (arrButtons[i][1].match(/^[a-zа-яё]{1}$/i)) {
            shiftCapsLogic = arrButtons[i][1]
          } else {
            shiftCapsLogic = arrButtons[i][2]
          }
        } else {
          shiftCapsLogic = arrButtons[i][1]
        }
        button = document.createElement('div');
        button.className = `keyboard__key ${arrButtons[i][0]}`;
        button.innerHTML = `<span class='case-down'>${arrButtons[i][1]}</span><span class='case-up hidden'>${arrButtons[i][2] ? arrButtons[i][2] : arrButtons[i][1]}</span><span class='caps hidden'>${arrButtons[i][1].match(/^[a-zа-яё]{1}$/i) ? arrButtons[i][2] : arrButtons[i][1]}</span><span class='shift-caps hidden'>${shiftCapsLogic}</span>`;
        keyboardBlock.append(button);

        this.renderFlag = 1
      }
      this.addButtonsClickHandler();
    } else {
      const keyboardBlock = document.querySelector('.keyboard-block')
      keyboardBlock.innerHTML = ''
      let arrButtons;
      let button;
      if (language === 'eng') {
        arrButtons = [
          ['Backquote', '`', '~'],
          ['Digit1', '1', '!'],
          ['Digit2', '2', '@'],
          ['Digit3', '3', '#'],
          ['Digit4', '4', '$'],
          ['Digit5', '5', '%'],
          ['Digit6', '6', '^'],
          ['Digit7', '7', '&'],
          ['Digit8', '8', '*'],
          ['Digit9', '9', '('],
          ['Digit0', '0', ')'],
          ['Minus', '-', '_'],
          ['Equal', '=', '+'],
          ['Backspace', 'Backspace'],
          ['Tab', 'Tab'],
          ['KeyQ', 'q', 'Q'],
          ['KeyW', 'w', 'W'],
          ['KeyE', 'e', 'E'],
          ['KeyR', 'r', 'R'],
          ['KeyT', 't', 'T'],
          ['KeyY', 'y', 'Y'],
          ['KeyU', 'u', 'U'],
          ['KeyI', 'i', 'I'],
          ['KeyO', 'o', 'O'],
          ['KeyP', 'p', 'P'],
          ['BracketLeft', '[', '{'],
          ['BracketRight', ']', '}'],
          ['Backslash', '\\', '|'],
          ['Delete', 'Del'],
          ['CapsLock', 'CapsLock'],
          ['KeyA', 'a', 'A'],
          ['KeyS', 's', 'S'],
          ['KeyD', 'd', 'D'],
          ['KeyF', 'f', 'F'],
          ['KeyG', 'g', 'G'],
          ['KeyH', 'h', 'H'],
          ['KeyJ', 'j', 'J'],
          ['KeyK', 'k', 'K'],
          ['KeyL', 'l', 'L'],
          ['Semicolon', ';', ':'],
          ['Quote', '\'', '"'],
          ['Enter', 'Enter'],
          ['ShiftLeft', 'Shift'],
          ['KeyZ', 'z', 'Z'],
          ['KeyX', 'x', 'X'],
          ['KeyC', 'c', 'C'],
          ['KeyV', 'v', 'V'],
          ['KeyB', 'b', 'B'],
          ['KeyN', 'n', 'N'],
          ['KeyM', 'm', 'M'],
          ['Comma', ',', '<'],
          ['Period', '.', '>'],
          ['Slash', '/', '?'],
          ['ArrowUp', '▲'],
          ['ShiftRight', 'Shift'],
          ['ControlLeft', 'Ctrl'],
          ['MetaLeft', 'Win'],
          ['AltLeft', 'Alt'],
          ['Space', ' '],
          ['AltRight', 'Alt'],
          ['ArrowLeft', '◄'],
          ['ArrowDown', '▼'],
          ['ArrowRight', '►'],
          ['ControlRight', 'Ctrl'],
        ]
      } else {
        arrButtons = [
          ['Backquote', 'ё', 'Ё'],
          ['Digit1', '1', '!'],
          ['Digit2', '2', '"'],
          ['Digit3', '3', '№'],
          ['Digit4', '4', ';'],
          ['Digit5', '5', '%'],
          ['Digit6', '6', ':'],
          ['Digit7', '7', '?'],
          ['Digit8', '8', '*'],
          ['Digit9', '9', '('],
          ['Digit0', '0', ')'],
          ['Minus', '-', '_'],
          ['Equal', '=', '+'],
          ['Backspace', 'Backspace'],
          ['Tab', 'Tab'],
          ['KeyQ', 'й', 'Й'],
          ['KeyW', 'ц', 'Ц'],
          ['KeyE', 'у', 'У'],
          ['KeyR', 'к', 'К'],
          ['KeyT', 'е', 'Е'],
          ['KeyY', 'н', 'Н'],
          ['KeyU', 'г', 'Г'],
          ['KeyI', 'ш', 'Ш'],
          ['KeyO', 'щ', 'Щ'],
          ['KeyP', 'з', 'З'],
          ['BracketLeft', 'х', 'Х'],
          ['BracketRight', 'ъ', 'Ъ'],
          ['Backslash', '\\', '/'],
          ['Delete', 'Del'],
          ['CapsLock', 'CapsLock'],
          ['KeyA', 'ф', 'Ф'],
          ['KeyS', 'ы', 'Ы'],
          ['KeyD', 'в', 'В'],
          ['KeyF', 'а', 'А'],
          ['KeyG', 'п', 'П'],
          ['KeyH', 'р', 'Р'],
          ['KeyJ', 'о', 'О'],
          ['KeyK', 'л', 'Л'],
          ['KeyL', 'д', 'Д'],
          ['Semicolon', 'ж', 'Ж'],
          ['Quote', 'э', 'Э'],
          ['Enter', 'Enter'],
          ['ShiftLeft', 'Shift'],
          ['KeyZ', 'я', 'Я'],
          ['KeyX', 'ч', 'Ч'],
          ['KeyC', 'с', 'С'],
          ['KeyV', 'м', 'М'],
          ['KeyB', 'и', 'И'],
          ['KeyN', 'т', 'Т'],
          ['KeyM', 'ь', 'Ь'],
          ['Comma', 'б', 'Б'],
          ['Period', 'ю', 'Ю'],
          ['Slash', '.', ','],
          ['ArrowUp', '▲'],
          ['ShiftRight', 'Shift'],
          ['ControlLeft', 'Ctrl'],
          ['MetaLeft', 'Win'],
          ['AltLeft', 'Alt'],
          ['Space', ' '],
          ['AltRight', 'Alt'],
          ['ArrowLeft', '◄'],
          ['ArrowDown', '▼'],
          ['ArrowRight', '►'],
          ['ControlRight', 'Ctrl'],
        ]
      }
      for (let i = 0; i < arrButtons.length; i++) {
        let shiftCapsLogic;
        if (arrButtons[i][2]) {
          if (arrButtons[i][1].match(/^[a-zа-яё]{1}$/i)) {
            shiftCapsLogic = arrButtons[i][1]
          } else {
            shiftCapsLogic = arrButtons[i][2]
          }
        } else {
          shiftCapsLogic = arrButtons[i][1]
        }
        button = document.createElement('div');
        button.className = `keyboard__key ${arrButtons[i][0]}`;
        button.innerHTML = `<span class='case-down'>${arrButtons[i][1]}</span><span class='case-up hidden'>${arrButtons[i][2] ? arrButtons[i][2] : arrButtons[i][1]}</span><span class='caps hidden'>${arrButtons[i][1].match(/^[a-zа-яё]{1}$/i) ? arrButtons[i][2] : arrButtons[i][1]}</span><span class='shift-caps hidden'>${shiftCapsLogic}</span>`;
        keyboardBlock.append(button);
      }
    }
  }
  addButtonsClickHandler() {
    const keyboardBlock = document.querySelector('.keyboard-block')
    keyboardBlock.addEventListener('mousedown', e => {
      e.preventDefault();
      let codeValue
      let keyValue
      if (e.target.childNodes.length > 1) {
        codeValue = e.target.classList[1]
        let buttonNode = e.target.childNodes
        for (let elem of buttonNode) {
          if (elem.classList.length === 1) {
            keyValue = elem.innerHTML
          }
        }
      } else {
        codeValue = e.target.parentNode.classList[1]
        keyValue = e.target.innerHTML
      }
      let eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        key: keyValue,
        code: codeValue
      })
      let eventKeyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        key: keyValue,
        code: codeValue
      })
      e.target.dispatchEvent(eventKeyDown)
      e.target.dispatchEvent(eventKeyUp)
    })
  }
  addClickKeyboardEventListener() {
    const textarea = document.getElementById('area');
    let languageFlag = 0;
    document.addEventListener('keydown', (e) => {
      let codes = ['ControlLeft', 'AltLeft']
      let pressed = new Set();
      if (e.code) {
        let activeButton = document.querySelector(`.${e.code}`);
        console.log(e.code + '  rt')
        activeButton.classList.add('active')
        e.preventDefault();
        if (e.key === 'Space') {
          textarea.value += ' '
        } else if (e.key === 'Tab') {
          let elem = '    ';
          this.addElementToTextarea(textarea, elem);
        } else if (e.key === 'Shift') {
          if (document.querySelector('.CapsLock.active')) {
            let nodeCaseCaps = document.querySelectorAll('.caps')
            for (let elem of nodeCaseCaps) {
              elem.classList.add('hidden')
            }
            let nodeCaseShiftCaps = document.querySelectorAll('.shift-caps')
            for (let elem of nodeCaseShiftCaps) {
              elem.classList.remove('hidden')
            }
          } else {
            let nodeCaseDown = document.querySelectorAll('.case-down')
            for (let elem of nodeCaseDown) {
              elem.classList.add('hidden')
            }
            let nodeCaseUp = document.querySelectorAll('.case-up')
            for (let elem of nodeCaseUp) {
              elem.classList.remove('hidden')
            }
          }
        } else if (e.key === 'CapsLock') {
          if (!document.querySelector('.ShiftLeft.active')) {
            if (this.capsLockFlag === 0) {
              let nodeCaseDown = document.querySelectorAll('.case-down')
              for (let elem of nodeCaseDown) {
                elem.classList.add('hidden')
              }
              let nodeCaseUp = document.querySelectorAll('.caps')
              for (let elem of nodeCaseUp) {
                elem.classList.remove('hidden')
              }
              this.capsLockFlag = 1;
            } else {
              let nodeCaseDown = document.querySelectorAll('.case-down')
              for (let elem of nodeCaseDown) {
                elem.classList.remove('hidden')
              }
              let nodeCaseUp = document.querySelectorAll('.caps')
              for (let elem of nodeCaseUp) {
                elem.classList.add('hidden')
              }
              activeButton.classList.remove('active')
              this.capsLockFlag = 0;
            }
          } else {
            let nodeCaseCaps = document.querySelectorAll('.case-up')
            for (let elem of nodeCaseCaps) {
              elem.classList.add('hidden')
            }
            let nodeCaseShiftCaps = document.querySelectorAll('.shift-caps')
            for (let elem of nodeCaseShiftCaps) {
              elem.classList.remove('hidden')
            }
            this.capsLockFlag = 1
          }
        } else if (e.code === 'ControlLeft' || e.code === 'AltLeft') {
          pressed.add(e.code);
          for (let code of codes) {
            if (pressed.has(code)) languageFlag++
          }
          if (languageFlag === 2) {
            languageFlag = 0;
            pressed.clear();
            if (localStorage.language === 'eng') {
              localStorage.language = 'rus';
            } else {
              localStorage.language = 'eng';
            }
            const keyboardBlock = document.querySelector('.keyboard-block')
            keyboardBlock.innerHTML = ''
            this.generateKeyboardButtons(localStorage.language);
          }
        } else if (e.key !== 'Meta' && e.code !== 'ControlRight' && e.code !== 'AltRight') {
          for (let elem of activeButton.childNodes) {
            if (elem.classList.length === 1) {
              console.log(elem.textContent)
              this.addElementToTextarea(textarea, elem.textContent)
            }
          }
        }

      }
    });
    document.addEventListener('keyup', (e) => {
      if (e.code) {
        let activeButton = document.querySelector(`.${e.code}`)
        if (e.key !== 'CapsLock') {
          activeButton.classList.remove('active')
          if (e.key === 'Shift') {
            if (document.querySelector('.CapsLock.active')) {
              let nodeCaseCaps = document.querySelectorAll('.caps')
              for (let elem of nodeCaseCaps) {
                elem.classList.remove('hidden')
              }
              let nodeCaseShiftCaps = document.querySelectorAll('.shift-caps')
              for (let elem of nodeCaseShiftCaps) {
                elem.classList.add('hidden')
              }
            } else {
              let nodeCaseDown = document.querySelectorAll('.case-down')
              for (let elem of nodeCaseDown) {
                elem.classList.remove('hidden')
              }
              let nodeCaseUp = document.querySelectorAll('.case-up')
              for (let elem of nodeCaseUp) {
                elem.classList.add('hidden')
              }
            }
          }
        }
      }
    })
  }
 
}
let start = new Keyboard();
start.pageInit();
