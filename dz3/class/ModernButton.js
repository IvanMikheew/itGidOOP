class ModernButton extends Button {
    constructor(width, height, background, value, borderRadius) {
        super(width, height, background, value);
        this.borderRadius = borderRadius;
    }

    render() {
        let btn = document.createElement("button");
        btn.style.width = `${this.width}px`;
        btn.style.height = `${this.height}px`;
        btn.style.background = this.background;
        btn.append(document.createTextNode(this.value));
        btn.style.borderRadius = `${this.borderRadius}px`;
        return btn
    }
}

let modernButton = new ModernButton(200, 60, '#dff0d8', 'Ты создал кнопку', 2);
document.body.append(modernButton.render());