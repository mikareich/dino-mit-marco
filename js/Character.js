import GameObject from "./GameObject.js";
import RenderObject from "./RenderObject.js";

class Character extends GameObject {
  constructor(game, position) {
    super(game);

    this.position = position;
    this.jumping = true;
    this.stepWidth = 50;

    // create dedicated render object for character
    this.width = 100;
    this.height = 150;
    this.background = { color: "lime" };
    this.renderObjects.push(
      new RenderObject(this.width, this.height, position, this.background)
    );
  }

  update() {
    if (this.position.y === this.game.renderer.height - this.height)
      this.jumping = false;
    if (this.jumping) {
      this.moveY(10);
    }
  }

  jump() {
    if (!this.jumping) {
      this.moveY(-this.game.renderer.height);
      this.jumping = true;
    }
  }

  moveForward() {
    this.moveX(this.stepWidth);
  }

  moveBackward() {
    this.moveX(-this.stepWidth);
  }

  moveX(step) {
    const canvasWidth = this.game.renderer.width;

    const posX = this.position.x;
    let newX = posX + step;

    if (0 <= newX && newX <= canvasWidth - this.width) {
      this.position.x = newX;
    } else if (newX < 0) {
      newX = 0;
    } else {
      newX = canvasWidth - this.width;
    }

    this.position.x = newX;

    const renderObject = this.renderObjects[0];
    renderObject.position = this.position;
  }

  moveY(step) {
    const canvasHeight = this.game.renderer.height;

    let newY = this.position.y + step;

    if (0 <= newY && newY <= canvasHeight - this.height) {
      this.position.y = newY;
    } else if (newY < 0) {
      newY = 0;
    } else {
      newY = canvasHeight - this.height;
    }

    this.position.y = newY;

    const renderObject = this.renderObjects[0];
    renderObject.position = this.position;
  }
}

export default Character;
