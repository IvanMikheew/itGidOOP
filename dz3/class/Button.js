class Button {
    constructor(width, height, background, value) {
        this.width = width;
        this.height = height;
        this.background = background;
        this.value = value;
    }

    render() {
        let btn = document.createElement("button");
        btn.style.width = `${this.width}px`;
        btn.style.height = `${this.height}px`;
        btn.style.background = this.background;
        btn.style.value = this.value;
        return btn
    }
}

let button = new Button(200, 60, '#dff0d8', 'Ты создал кнопку');
document.body.append(button.render());