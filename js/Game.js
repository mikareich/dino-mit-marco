class Game {
  constructor(renderer) {
    this.gameObjects = [];
    this.renderer = renderer;
    this.state = "INITIALIZING";
  }

  togglePause() {
    this.state = this.state === "RUNNING" ? "PAUSED" : "RUNNING";
  }

  start() {
    this.state = "RUNNING";
  }

  update() {
    if (this.state !== "RUNNING") return;

    this.gameObjects.forEach((object) => object.update());
  }

  addGameObject(object) {
    this.gameObjects.push(object);
  }

  removeGameObject(object) {
    const index = this.gameObjects.indexOf(object);
    if (index > -1) this.gameObjects.splice(index, 1);
  }

  render() {
    // list all render objects
    const renderObjects = this.gameObjects
      .map((object) => object.renderObjects)
      .flat();

    // render all render objects
    this.renderer.renderObjects = renderObjects;
    this.renderer.render();

    // render game stats
    this.renderer.renderStats(this.toStats());
  }

  toStats() {
    return {
      state: this.state,
    };
  }
}

export default Game;
