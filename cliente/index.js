import { abertura } from "./abertura.js";
import { servidor } from "./servidor.js";

var config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 1200,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: [abertura, servidor],
};

var game = new Phaser.Game(config);
