function checkBall(pacman, ball) {

    let SideOfPacmanX = pacman.position.x;
    let SideOfPacmanY = pacman.position.y;
    let bottomSideOfPacmanY = pacman.position.y + pacman.size;
    let rightSideOfPacmanX = pacman.position.x + pacman.size;


    let SideOfBallX = ball[0].position.x;
    let SideOfBallY = ball[0].position.y;
    let bottomSideOfBallY = ball[0].position.y + ball[0].size;
    let rightSideOfBallX = ball[0].position.x + ball[0].size;
    if ((SideOfPacmanX > SideOfBallX && rightSideOfPacmanX < rightSideOfBallX) && (SideOfPacmanY > SideOfBallY && bottomSideOfPacmanY < bottomSideOfBallY)) {
        return true;
    } else {
        return false;
    }
}