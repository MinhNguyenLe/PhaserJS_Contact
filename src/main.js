import Phaser from "phaser";

// import HelloWorldScene from './scenes/HelloWorldScene'
import PlayGameScreen from "./scenes/PlayGameScreen";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
    },
  },
  scene: [PlayGameScreen],
};

export default new Phaser.Game(config);
