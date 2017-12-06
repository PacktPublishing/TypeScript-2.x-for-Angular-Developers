
class DOM {
    private _incBtn: HTMLElement;
    private _decBtn: HTMLElement;
    private _counter: HTMLElement;

    constructor() {
        this._incBtn = this._getDOMElement('#incBtn');
        this._decBtn = this._getDOMElement('#decBtn');
        this._counter = this._getDOMElement('#counter');
    }
    
    
    public _getDOMElement (selector: string) : HTMLElement {
        return document.querySelector(selector) as HTMLElement;
    }

    get incBtn(): HTMLElement {
        return this._incBtn;
    }

    get decBtn(): HTMLElement {
        return this._decBtn;
    }

    get counter(): number {
        return parseInt(this._counter.innerText);
    }

    set counter(value: number) {
        this._counter.innerText = value.toString();
    }
}

class DOMEvents {
    public register(htmlElement: HTMLElement, type:string, callback: (e: Event) => void) : void {
        htmlElement.addEventListener(type, callback)
    }
}

class App {
    constructor(public dom:DOM, public domEvents: DOMEvents) {
        this.setupEvents()
    }
    private setupEvents() {
        const buttons = [this.dom.incBtn, this.dom.decBtn];
        buttons.forEach(button => {
            this.domEvents.register(button, 'click', this.handleClicks.bind(this))
        })
    }
    private handleClicks(e: MouseEvent): void {
        const {id} = <HTMLElement>e.target;
        if(id === 'incBtn') {
            this.incrementCounter();
        } else {
            this.decrementCounter();
        }
    }

    private incrementCounter() {
        this.dom.counter++
    }

    private decrementCounter () {
        this.dom.counter--
    }
}

(new App(new DOM, new DOMEvents))