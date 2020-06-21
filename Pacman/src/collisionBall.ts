export function checkBall(pacman, ball) {
  let leftPacman = pacman.position.x;
  let topPacman = pacman.position.y;
  let bottomPacman = pacman.position.y + pacman.size;
  let rightPacman = pacman.position.x + pacman.size;

  let leftBall = ball.position.x;
  let topBall = ball.position.y;
  let bottomBall = ball.position.y + ball.size;
  let rightBall = ball.position.x + ball.size;
  if (
    leftPacman > leftBall &&
    rightPacman < rightBall &&
    topPacman > topBall &&
    bottomPacman < bottomBall
  ) {
    return true;
  } else {
    return false;
  }
}
