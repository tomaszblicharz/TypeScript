export function checkMonster(pacman, monster) {
  let topPacman = pacman.position.y;
  let bottomPacman = pacman.position.y + pacman.size;
  let leftPacman = pacman.position.x;
  let rightPacman = pacman.position.x + pacman.size;

  let topMonster = monster.position.y;
  let bottomMonster = monster.position.y + monster.size;
  let leftMonster = monster.position.x;
  let rightMonster = monster.position.x + monster.size;

  if (
    bottomPacman >= topMonster &&
    topPacman <= bottomMonster &&
    rightPacman >= leftMonster &&
    leftPacman <= rightMonster
  ) {
    return true;
  } else {
    return false;
  }
}
