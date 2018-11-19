function setup() {
	const canvasSizeX = 800;
	const canvasSizeY = 450;

  createCanvas(canvasSizeX, canvasSizeY);
  background(0);

  player = new Rider({x: Math.floor(Math.random() * 600 / CELL_SIZE + 100 / CELL_SIZE), y: Math.floor(Math.random() * 250 / CELL_SIZE + 100 / CELL_SIZE)}, 'green');
  player2 = new Rider({x: Math.floor(Math.random() * 600 / CELL_SIZE + 100 / CELL_SIZE), y: Math.floor(Math.random() * 250 / CELL_SIZE + 100 / CELL_SIZE)}, 'yellow');
  ghosts = [];
  for (var i = 0; i < 2; i++) {
  	ghosts.push(new Ghost(canvasSizeX/CELL_SIZE, canvasSizeX/CELL_SIZE, "blue"));
  }
  riders = [];
  for(var i = 0; i < 0; i++){
    riders.push(new Rider({x: Math.floor(Math.random() * 600 / CELL_SIZE + 100 / CELL_SIZE), y: Math.floor(Math.random() * 250 / CELL_SIZE + 100 / CELL_SIZE)}, 'red'));
  }
  field = new Field({x:800 / CELL_SIZE + 1, y: 450 /CELL_SIZE + 1}, CELL_SIZE);
}

function keyPressed() {

    console.log(keyCode);
    if(keyCode == RIGHT_ARROW) {
        if(player.direction.x == 0){
          player.direction.y = 0;
          player.direction.x = 1;
        }
    } else if (keyCode == LEFT_ARROW) {
      if(player.direction.x == 0){
        player.direction.y = 0;
        player.direction.x = -1;
      }
    } else if (keyCode == UP_ARROW) {
      if(player.direction.y == 0){
        player.direction.y = -1;
        player.direction.x = 0;
      }
    } else if (keyCode == DOWN_ARROW) {
      if(player.direction.y == 0){
        player.direction.y = 1;
        player.direction.x = 0;
      }
    }

    if(keyCode == 68) {
        if(player2.direction.x == 0){
          player2.direction.y = 0;
          player2.direction.x = 1;
        }
    } else if (keyCode == 65) {
      if(player2.direction.x == 0){
        player2.direction.y = 0;
        player2.direction.x = -1;
      }
    } else if (keyCode == 87) {
      if(player2.direction.y == 0){
        player2.direction.y = -1;
        player2.direction.x = 0;
      }
    } else if (keyCode == 83) {
      if(player2.direction.y == 0){
        player2.direction.y = 1;
        player2.direction.x = 0;
      }
    }


}

function draw() {

  player.checkCollisions(field);
  player2.checkCollisions(field);


  if(player.alive)
    player.move(field);

  player.draw();
if(player2.alive)
    player2.move(field);

  player2.draw();

  for(var i = 0; i < riders.length; i++){

    riders[i].checkCollisions(field);

    if(riders[i].alive){
      riders[i].move(field);
    }

    riders[i].draw();



  }
  for (var i = 0; i < ghosts.length; i++) {
  	ghosts[i].move(field);
  	ghosts[i].draw();
  }


}
