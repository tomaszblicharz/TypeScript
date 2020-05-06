function checkBallInHole(pacman, ball) {

    let SideOfPacmanX = pacman.x;
    let SideOfPacmanY = pacman.y;
    let bottomSideOfPacmanY = pacman.y + pacman.size;
    let rightSideOfPacmanX = pacman.x + pacman.size;

    let SideOfBallX = ball.x;
    let SideOfBallY = ball.y;
    let bottomSideOfBallY = ball.y + ball.size;
    let rightSideOfBallX = ball.x + ball.size;
    if ((SideOfPacmanX > SideOfBallX && rightSideOfPacmanX < rightSideOfBallX) && (SideOfPacmanY > SideOfBallY && bottomSideOfPacmanY < bottomSideOfBallY)) {
        return true;
        // console.log("działa")
    } else {

        return false;
    }
}