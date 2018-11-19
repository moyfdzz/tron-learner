class Entity {

	constructor(position, colour){
		this.position = position;
		this.colour = colour;
		this.size = {x:CELL_SIZE, y:CELL_SIZE};
    this.alive = true;
    this.directions = [
        {x:0,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1}       
    ];
    this.direction = this.directions[Math.floor(Math.random() * this.directions.length)];

    this.speed = 1;

    }

	draw(){
    if(this.alive)
		  fill(this.colour);
    else
      fill('gray')

    noStroke();
		rect(this.position.x * this.size.x, this.position.y * this.size.y, this.size.x, this.size.y);
	}

}
