/**
 * @typedef {Object} Position
 * @property {number} x X coordinate
 * @property {number} y Y coordinate
 */

/**
 * @typedef {Object} BackgroundObject
 * @property {string | undefined} image Image URL
 * @property {string | undefined} color Background color
 */

class RenderObject {
  /**
   * Create new render object instance
   * @param {number} width Width of the object
   * @param {number} height Height of the object
   * @param {Position} postion Position of the object
   * @param {BackgroundObject} background: ;
   */
  constructor(width, height, postion, background) {
    this.width = width;
    this.height = height;
    this.postion = postion;
    this.background = background;
  }
  /**
   * Render object on canvas
   * @param {CanvasRenderingContext2D} ctx
   */
  render(ctx) {
    if (this.background.color) {
      // renders an object with
      ctx.fillStyle = this.background.color;
      ctx.fillRect(this.postion.x, this.postion.y, this.width, this.height);
    } else if (this.background.image) {
      const image = new Image(this.width, this.height);
      image.src = this.background.image;
      // wait until image is loaded
      image.onload = () => ctx.drawImage(image, this.postion.x, this.postion.y);
    }
  }
}

export default RenderObject;
