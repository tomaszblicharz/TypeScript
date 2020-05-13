function checkWall(pacman, wall) {

    // let SideOfPacmanX = pacman.position.x;
    // let SideOfPacmanY = pacman.position.y;
    // let bottomSideOfPacmanY = pacman.position.y + pacman.size;
    // let rightSideOfPacmanX = pacman.position.x + pacman.size;


    // let SideOfWallX = wall[1].position.x;
    // let SideOfWallY = wall[1].position.y;
    // let bottomSideOfWallY = wall[1].position.y + wall[1].size;
    // let rightSideOfWallX = wall[1].position.x + wall[1].size;

    // if ((SideOfPacmanX > SideOfWallX && rightSideOfPacmanX < rightSideOfWallX) && (SideOfPacmanY > SideOfWallY && bottomSideOfPacmanY < bottomSideOfWallY)) {
    //     return true;
    // } else {
    //     return false;
    // }

    let bottomPacman = pacman.position.y + pacman.size;
    let topPacman = pacman.position.y;
    // let leftPacman = pacman.position.x;
    // let rightPacman = pacman.position.x + pacman.size;
    let topWall = wall[21].position.y;
    let leftSideWall = wall[21].position.x;
    let rightSideWall = wall[21].position.x + wall[21].size;
    let bottomWall = wall[21].position.y + wall[21].size;
    if (
        bottomPacman >= topWall &&
        topPacman <= bottomWall &&
        pacman.position.x >= leftSideWall &&
        pacman.position.x <= rightSideWall
    ) {
        return true;
    } else {
        return false;
    }
}