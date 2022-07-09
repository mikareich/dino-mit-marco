class GameObject {
  constructor(game) {
    this.id =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    this.game = game;
    this.renderObjects = [];
    this.speed = { x: 0, y: 0 };

    this.game.addGameObject(this);
  }

  /** Remove game object from game */
  remove() {
    this.game.removeGameObject(this);
  }

  /** Update properties and render objects */
  update() {
    throw new Error("Method update() is not implemented");
  }
}

export default GameObject;
