function checkWall(pacman, wall) {


    let topPacman = pacman.position.y;
    let bottomPacman = pacman.position.y + pacman.size;
    let leftPacman = pacman.position.x;
    let rightPacman = pacman.position.x + pacman.size;

    let topWall = wall.position.y;
    let bottomWall = wall.position.y + wall.size;
    let leftWall = wall.position.x;
    let rightWall = wall.position.x + wall.size;


    if (
        bottomPacman >= topWall &&
        topPacman <= bottomWall &&
        rightPacman >= leftWall &&
        leftPacman <= rightWall
    ) {
        return true;
    } else {
        return false;
    }
}