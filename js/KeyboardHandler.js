class KeyboardHandler {
  constructor(game, character) {
    this.keyMap = {
      "(Escape)": () => game.togglePause(),
      "(ArrowRight|d|D)": () => character.moveForward(),
      "(ArrowLeft|a|A)": () => character.moveBackward(),
      "(ArrowUp|w|W| )": () => character.jump(),
    };

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  }

  handleKeyDown(event) {
    const key = event.key;

    for (const regexString in this.keyMap) {
      const regex = new RegExp(regexString);
      if (key.match(regex)) {
        this.keyMap[regexString]();
      }
    }
  }
}

export default KeyboardHandler;
