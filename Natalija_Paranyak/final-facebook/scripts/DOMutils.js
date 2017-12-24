// const tx = document.getElementsByClassName('main-container__feeds__new__on-mind__input');
// for (let i = 0; i < tx.length; i++) {
//     tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
//     tx[i].addEventListener("input", OnInput, false);
// }
//


function onInputHandler() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
}

export function makeTextareaResizable(domlist) {
    for (let i = 0; i < domlist.length; i++) {
        domlist[i].style.height = domlist[i].scrollHeight + 'px'; //.setAttribute('style', 'height:' + (domlist[i].scrollHeight) + 'px;overflow-y:hidden;');
        domlist[i].style.overflowY = 'hidden';
        domlist[i].addEventListener("input", onInputHandler, false);
    }
}
