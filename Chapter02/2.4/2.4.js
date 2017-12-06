var DOM = (function () {
    function DOM() {
        this._incBtn = this._getDOMElement('#incBtn');
        this._decBtn = this._getDOMElement('#decBtn');
        this._counter = this._getDOMElement('#counter');
    }
    DOM.prototype._getDOMElement = function (selector) {
        return document.querySelector(selector);
    };
    Object.defineProperty(DOM.prototype, "incBtn", {
        get: function () {
            return this._incBtn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DOM.prototype, "decBtn", {
        get: function () {
            return this._decBtn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DOM.prototype, "counter", {
        get: function () {
            return parseInt(this._counter.innerText);
        },
        set: function (value) {
            this._counter.innerText = value.toString();
        },
        enumerable: true,
        configurable: true
    });
    return DOM;
}());
var DOMEvents = (function () {
    function DOMEvents() {
    }
    DOMEvents.prototype.register = function (htmlElement, type, callback) {
        htmlElement.addEventListener(type, callback);
    };
    return DOMEvents;
}());
var App = (function () {
    function App(dom, domEvents) {
        this.dom = dom;
        this.domEvents = domEvents;
        this.setupEvents();
    }
    App.prototype.setupEvents = function () {
        var _this = this;
        var buttons = [this.dom.incBtn, this.dom.decBtn];
        buttons.forEach(function (button) {
            _this.domEvents.register(button, 'click', _this.handleClicks.bind(_this));
        });
    };
    App.prototype.handleClicks = function (e) {
        var id = e.target.id;
        if (id === 'incBtn') {
            this.incrementCounter();
        }
        else {
            this.decrementCounter();
        }
    };
    App.prototype.incrementCounter = function () {
        this.dom.counter++;
    };
    App.prototype.decrementCounter = function () {
        this.dom.counter--;
    };
    return App;
}());
(new App(new DOM, new DOMEvents));
