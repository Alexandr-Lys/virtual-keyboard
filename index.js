class Keyboard {
    constructor(){

    }
    pageInit(){
        let template = '';
        let page = document.querySelector('body');
        template+='<div class="container"><h1 class="title">RSS Виртуальная клавиатура</h1><textarea name="keyboard-area" id="area"></textarea><div class="keyboard-block"></div><p>Клавиатура создана в операционной системе Windows</p><p>Для переключения языка комбинация: левыe ctrl + alt</p></div>'
        page.innerHTML = template;
        this.keyboardInit();
    }
    keyboardInit(){
        this.generateKeyboardButtons();
        this.addClickKeyboardEventListener();
    }
    generateKeyboardButtons(){
        let template = ''
        let container = document.querySelector('keyboard-block')
    }
    addClickKeyboardEventListener(){
        document.addEventListener('keydown', (e) => {
            console.log(e.code + ' s ' + e.key)
        })
    }
}

let start = new Keyboard()
start.pageInit();