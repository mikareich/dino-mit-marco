/** Checks if two game objects collided
 * @param {GameObject} object1 First game object
 * @param {GameObject} object2 Second game object
 * @returns {boolean} True if objects collided
 */

function checkCollision(object1, object2) {
  const position1 = object1.renderObjects[0].position;
  const position2 = object2.renderObjects[0].position;
  const radius1 = object1.renderObjects[0].radius;
  const radius2 = object2.renderObjects[0].radius;

  const distance = Math.sqrt(
    Math.pow(position1.x - position2.x, 2) +
      Math.pow(position1.y - position2.y, 2)
  );

  return distance < radius1 + radius2;
}
