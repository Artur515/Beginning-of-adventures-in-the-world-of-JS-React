class Options {
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  createDiv() {
    let elem = document.createElement("div");
    document.body.appendChild(elem);
    let parameters = `height:${this.height}px;width:${this.width}px;background-color:${this.bg};font-size:${this.fontSize}px;text-align:${this.textAlign}`;
    elem.style.cssText = parameters;
  }
}
const item = new Options(300, 350, "red", 14, "center");
let item2 = new Options(500, 500, "green", 20, "right");
item.createDiv();
item2.createDiv();
