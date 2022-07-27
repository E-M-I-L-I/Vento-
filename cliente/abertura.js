import { servidor } from "./servidor.js";

var abertura = new Phaser.Scene("abertura");

abertura.preload = function () {
  this.load.image("cadeado", "photos/abertura.png");
};

abertura.create = function () {
  var button = this.add.image(400, 300, "cadeado", 0).setInteractive();

  button.on(
    "pointerdown",
    function () {
      this.scene.start(servidor);
    },
    this
  );
};

abertura.update = function () {};

export { abertura };
