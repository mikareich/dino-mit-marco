import { CANVAS_HEIGHT, CANVAS_WIDTH } from "./constants.js";

class Renderer {
  static setDimensions(canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
  }

  /**
   * Create new renderer
   * @param {HTMLCanvasElement} canvas Canvas element
   * @param {number} width Canvas width
   * @param {number} height Canvas height
   */
  constructor(canvas, gameStats, width = CANVAS_WIDTH, height = CANVAS_HEIGHT) {
    this.canvas = canvas;
    this.gameStats = gameStats;
    this.ctx = canvas.getContext("2d");

    this.width = width;
    this.height = height;
    Renderer.setDimensions(canvas, width, height);

    this.renderObjects = [];
  }

  renderStats(stats) {
    this.gameStats.querySelector("#gameState").innerText = stats.state;
  }

  /** Render all objects on screen */
  render() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.width, this.height);
    // Render all objects
    this.renderObjects.forEach((object) => object.render(this.ctx));
  }
}

export default Renderer;
