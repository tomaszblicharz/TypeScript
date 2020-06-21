export function checkWall(wall, gameObiect) {
  // let leftPacman = pacman.position.x;
  // let topPacman = pacman.position.y;
  // let bottomPacman = pacman.position.y + pacman.size;
  // let rightPacman = pacman.position.x + pacman.size;
  let topObiect = gameObiect.position.y;
  let bottomObiect = gameObiect.position.y + gameObiect.size;
  let leftObiect = gameObiect.position.x;
  let rightObiect = gameObiect.position.x + gameObiect.size;

  let topWall = wall.position.y;
  let bottomWall = wall.position.y + wall.size;
  let leftWall = wall.position.x;
  let rightWall = wall.position.x + wall.size;

  if (
    bottomObiect >= topWall &&
    topObiect <= bottomWall &&
    rightObiect >= leftWall &&
    leftObiect <= rightWall
  ) {
    return true;
  } else {
    return false;
  }
}
