

class Message {
    constructor(name, text, time = this.gettime()) {
        this.name = name;
        this.time = time;
        this.text = text;
    }
    toString() {
        return `${this.time} ${this.name}: ${this.text}`
    }

    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }

    toHtml() {
        return `<p>${this.time} ${this.name} ${this.text}</p>`
    }

}

class Messenger{
    constructor(){
        let mess=[];
        this.mess=mess;
    }
    send(author, text){
        const new_mess=new Message(author, text);
        this.mess.push(new_mess);
    }
    show_history(){
        let hist = [];
        this.mess.forEach(msg => hist.push(msg.toHtml()));
        return hist;
    }
}

let messenger = new Messenger();

const name1 = document.querySelector('#name');
const message = document.querySelector('#message');
const btn_send = document.querySelector('.btn-send');
const show_history = document.querySelector('.btn-show');
btn_send.addEventListener('click', () => {
    let name = name1.value;
    let text = message.value;
    message.value = '';
    messenger.send(name, text);
});
const hist = document.querySelector('.history');
show_history.addEventListener('click', () => {
    hist.innerHTML = messenger.show_history();
});