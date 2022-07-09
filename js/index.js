import { FPS } from "./constants.js";
import Game from "./Game.js";
import Renderer from "./Renderer.js";
import Character from "./Character.js";
import KeyboardHandler from "./KeyboardHandler.js";

const gameScreenCANVAS = document.getElementById("gameScreen");
const gameStats = document.getElementById("gameStats");

const renderer = new Renderer(gameScreenCANVAS, gameStats);
const game = new Game(renderer);
const character = new Character(game, { x: 0, y: 0 });

new KeyboardHandler(game, character);

// start game
game.start();

let lastTimestamp = 0;
function gameLoop(currentTimestamp) {
  const delta = currentTimestamp - lastTimestamp;

  if (delta >= 1000 / FPS) {
    // perform game logic
    game.update();
    // render game
    game.render();

    lastTimestamp = currentTimestamp;
  }

  requestAnimationFrame(gameLoop);
}

gameLoop(0);
