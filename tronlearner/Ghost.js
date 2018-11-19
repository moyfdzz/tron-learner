class Ghost extends Entity {

	

	constructor (canvasSizeX, canvasSizeY, colour) {
  	super({x:(canvasSizeX/2), y:(canvasSizeY/2)}, colour);
  	this.changeDir = 0;
		this.directions = [
  		{x:0,y:1},{x:1,y:0},{x:-1,y:0},{x:0,y:-1} 		
  	];
    this.directionIndex = Math.floor(Math.random() * this.directions.length); 
  	this.direction = this.directions[this.directionIndex];
    this.maxTail = 15;
    this.tail= [this.position];
    // this.size= {x:CELL_SIZE*, y:CELL_SIZE*2};
	}


  move(field){

      if(this.tail.length>this.maxTail){
        field.setAt(this.tail[0], false, 'black');
              
        fill("black");
        rect(this.tail[0].x * this.size.x, this.tail[0].y * this.size.y, this.size.x, this.size.y); 
        var erased = this.tail.shift();
     
    
      }
    
      if(this.changeDir< ((Math.random() * 300 )+ 10) ){
        this.changeDir++;
      } else {
        var newIndex = Math.floor(Math.random() * this.directions.length);
        while((this.directions[this.directionIndex].x*-1) === (this.directions[newIndex].x*-1) || (this.directions[this.directionIndex].y*-1) === (this.directions[newIndex].y*-1) ){
          newIndex = Math.floor(Math.random() * this.directions.length);
        }
        
        
        this.directionIndex = newIndex;
        this.direction = this.directions[this.directionIndex];
        
        this.changeDir = 0;
      }
      this.position.x += this.direction.x;
      this.position.y += this.direction.y;

      if(this.position.x > 800 / this.size.x)
        this.position.x = 0;
      if(this.position.x < 0)
        this.position.x = 800 / this.size.x;
      if(this.position.y > 450 / this.size.y)
        this.position.y = 0;
      if(this.position.y < 0)
        this.position.y = 450 / this.size.y;

      this.tail.push({x: this.position.x, y: this.position.y});
      // console.log("added " + this.position.x + ", " + this.position.y);

  }

  checkCollisions(field){
    if(field.field[this.position.x][this.position.y].value){
      field.field[this.position.x][this.position.y].value = 0;
    }
  }
  draw(){
    
    fill(this.colour);
    noStroke();
    rect(this.position.x * this.size.x, this.position.y * this.size.y, this.size.x, this.size.y);


  }


}